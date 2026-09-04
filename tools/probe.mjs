import { launch } from './shoot.mjs';
const b = await launch(); const p = await b.newPage();
p.on('console', (m) => { if (m.type() === 'error') console.log(m.type(), m.text().slice(0, 400)); });
await p.setViewportSize({ width: 390, height: 844 });
await p.goto('http://127.0.0.1:5173/?quality=low&hide=terrain,ocean,sky,brig,palms,scrub');
await p.waitForFunction(() => window.__readyDone === true, undefined, { timeout: 600000 });
const r = await p.evaluate(() => {
  const w = window.__ocean.world; let pts = null;
  w.scene.traverse((o) => { if (o.isPoints) pts = o; });
  const gl = w.renderer.getContext();
  const count = () => { const px = new Uint8Array(4 * 390 * 844); gl.readPixels(0, 0, 390, 844, gl.RGBA, gl.UNSIGNED_BYTE, px); let lit = 0; for (let i = 0; i < px.length; i += 4) if (px[i] + px[i + 1] + px[i + 2] > 8) lit++; return lit; };
  const grp = pts.parent; const vis = grp.children.map((c) => c.visible); grp.children.forEach((c) => { c.visible = c === pts; });
  w.frame(); const viaComposer = count();
  w.renderer.setRenderTarget(null); w.renderer.render(w.scene, w.camera); const viaPlain = count();
  grp.children.forEach((c, i) => { c.visible = vis[i]; });
  return { viaComposer, viaPlain, posCount: pts.geometry.attributes.position.count, drawRange: pts.geometry.drawRange };
});
console.log(JSON.stringify(r)); await b.close();
