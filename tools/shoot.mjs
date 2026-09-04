// Screenshot harness. Loads the app in headless Chromium, applies a scene
// spec, waits for window.__ready and N settled frames, writes PNG + JSON.
//   node tools/shoot.mjs --out shots/hero [--device phone|phone-landscape|desktop] [--dpr 3] [--frames 40] [--time 17.5 --weather clear --zoom 120 --quality high --t 12 --seed 1]
//   node tools/shoot.mjs --contact --out shots/contact   (3 times x 2 weathers, one image)
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import net from 'node:net';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, s, i, arr) => { if (s.startsWith('--')) a.push([s.slice(2), arr[i + 1] && !arr[i + 1].startsWith('--') ? arr[i + 1] : '1']); return a; }, []));
const BASE = args.url || 'http://127.0.0.1:5173/';
const DEVICES = {
  phone: { width: 390, height: 844, dpr: 3 },
  'phone-landscape': { width: 844, height: 390, dpr: 3 },
  desktop: { width: 1920, height: 1080, dpr: 1 },
};
const SPEC_KEYS = ['time', 'weather', 'zoom', 'quality', 'seed', 't', 'pause', 'hud', 'sun', 'hide', 'lu', 'lw', 'pitch', 'yaw', 'style'];

async function portOpen(port) { return new Promise((r) => { const s = net.connect(port, '127.0.0.1'); s.on('connect', () => { s.end(); r(true); }); s.on('error', () => r(false)); }); }

export async function shoot(browser, spec, outBase, { device = 'phone', dpr, frames = 40 } = {}) {
  const dev = DEVICES[device] || DEVICES.phone;
  const ctx = await browser.newContext({ viewport: { width: dev.width, height: dev.height }, deviceScaleFactor: dpr ?? dev.dpr });
  const page = await ctx.newPage();
  const log = { errors: [], warnings: [] };
  page.on('console', (m) => { if (m.type() === 'error') log.errors.push(m.text()); else if (m.type() === 'warning') log.warnings.push(m.text()); });
  page.on('pageerror', (e) => log.errors.push(String(e)));
  const q = new URLSearchParams(); for (const k of SPEC_KEYS) if (spec[k] !== undefined) q.set(k, String(spec[k]));
  q.set('device', device);
  const url = BASE + '?' + q.toString();
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'load', timeout: 120000 });
  await page.waitForFunction(() => window.__readyDone === true, undefined, { timeout: 900000, polling: 500 }).catch((e) => log.errors.push('ready failed: ' + e.message));
  const settle = (n) => Promise.race([page.evaluate((k) => window.__ocean.settle(k), n), new Promise((_, rej) => setTimeout(() => rej(new Error('settle timeout')), 240000))]);
  await settle(frames).catch((e) => log.errors.push('settle failed: ' + e.message));
  await settle(2).catch(() => {});
  fs.mkdirSync(path.dirname(outBase), { recursive: true });
  const dataUrl = await page.evaluate(() => window.__ocean.capture());
  fs.writeFileSync(outBase + '.png', Buffer.from(dataUrl.split(',')[1], 'base64'));
  const stats = await page.evaluate(() => window.__ocean.stats());
  const pageErrors = await page.evaluate(() => window.__ocean.errors);
  const json = { url, device, viewport: dev, dpr: dpr ?? dev.dpr, loadMs: Date.now() - t0, console: { errors: [...log.errors, ...pageErrors], warnings: log.warnings }, stats, budget: {
    drawCalls: { value: stats.calls, limit: 300, pass: stats.calls <= 300 },
    triangles: { value: stats.triangles, limit: 1500000, pass: stats.triangles <= 1500000 },
    textureMB: { value: stats.textureMB, limit: 256, pass: stats.textureMB <= 256 },
    deviceFps: 'not measured (headless SwiftShader; frameMs is smoke only)',
  } };
  fs.writeFileSync(outBase + '.json', JSON.stringify(json, null, 2));
  await ctx.close();
  return json;
}

export function launch() {
  return chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--enable-webgl', '--disable-dev-shm-usage'] });
}

async function contact(browser, outBase, opts) {
  const times = [12, 17.5, 22], weathers = ['clear', 'fog'];
  const cells = [];
  for (const w of weathers) for (const t of times) {
    const base = `${outBase}_${w}_${String(t).replace('.', '')}`;
    const j = await shoot(browser, { ...opts.spec, time: t, weather: w }, base, { device: opts.device, dpr: opts.dpr, frames: opts.frames });
    cells.push({ file: base + '.png', label: `${w} ${t}:00`.replace('17.5:00', '17:30'), errors: j.console.errors.length, calls: j.stats.calls, tris: j.stats.triangles });
    console.log(`  ${base}.png  errors=${j.console.errors.length} calls=${j.stats.calls} tris=${j.stats.triangles}`);
  }
  const page = await browser.newPage();
  const imgs = cells.map((c) => ({ ...c, data: 'data:image/png;base64,' + fs.readFileSync(c.file).toString('base64') }));
  const html = `<html><body style="margin:0;background:#111"><canvas id="c"></canvas><script>
    const cells = ${JSON.stringify(imgs.map((i) => ({ label: i.label, data: i.data })))};
    (async () => {
      const ims = await Promise.all(cells.map((c) => new Promise((r) => { const im = new Image(); im.onload = () => r(im); im.src = c.data; })));
      const cw = ims[0].width, ch = ims[0].height, pad = 24, lab = 60;
      const cols = 3, rows = 2;
      const c = document.getElementById('c'); c.width = cols * (cw + pad) + pad; c.height = rows * (ch + pad + lab) + pad;
      const g = c.getContext('2d'); g.fillStyle = '#111'; g.fillRect(0, 0, c.width, c.height);
      ims.forEach((im, i) => { const x = pad + (i % cols) * (cw + pad), y = pad + Math.floor(i / cols) * (ch + pad + lab);
        g.drawImage(im, x, y, cw, ch); g.fillStyle = '#eee'; g.font = (lab * 0.5) + 'px system-ui'; g.fillText(cells[i].label, x, y + ch + lab * 0.7); });
      window.__done = true;
    })();
  </script></body></html>`;
  await page.setContent(html);
  await page.waitForFunction(() => window.__done, undefined, { timeout: 60000 });
  const el = await page.$('#c');
  await el.screenshot({ path: outBase + '.png' });
  fs.writeFileSync(outBase + '.json', JSON.stringify({ cells }, null, 2));
  await page.close();
  console.log('contact sheet ->', outBase + '.png');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  if (!(await portOpen(5173))) { console.error('dev server not running on 5173. Start it: npm run dev'); process.exit(2); }
  const spec = {}; for (const k of SPEC_KEYS) if (args[k] !== undefined) spec[k] = args[k];
  const out = args.out || 'shots/shot';
  const browser = await launch();
  try {
    if (args.contact) await contact(browser, out, { spec, device: args.device || 'phone', dpr: args.dpr ? Number(args.dpr) : (args.device ? undefined : 2), frames: args.frames ? Number(args.frames) : 30 });
    else {
      const j = await shoot(browser, spec, out, { device: args.device || 'phone', dpr: args.dpr ? Number(args.dpr) : undefined, frames: args.frames ? Number(args.frames) : 40 });
      console.log(`${out}.png  errors=${j.console.errors.length} warnings=${j.console.warnings.length} calls=${j.stats.calls} tris=${j.stats.triangles} tex=${j.stats.textureMB}MB p50=${j.stats.frameMs.p50.toFixed(1)}ms load=${j.loadMs}ms exposure=${j.stats.exposure.toFixed(3)}`);
      if (j.console.errors.length) console.log('ERRORS:', j.console.errors.slice(0, 5));
    }
  } finally { await browser.close(); }
}
