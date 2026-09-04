// Box-filter downscale of PNGs: node tools/downscale.mjs <factor> <out dir> <files...>
import fs from 'node:fs'; import path from 'node:path'; import { PNG } from 'pngjs';
const [factor, outDir, ...files] = process.argv.slice(2); const f = Number(factor);
fs.mkdirSync(outDir, { recursive: true });
for (const file of files) {
  const src = PNG.sync.read(fs.readFileSync(file)); const w = Math.floor(src.width / f), h = Math.floor(src.height / f);
  const dst = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    let r = 0, g = 0, b = 0;
    for (let dy = 0; dy < f; dy++) for (let dx = 0; dx < f; dx++) { const i = ((y * f + dy) * src.width + (x * f + dx)) * 4; r += src.data[i]; g += src.data[i + 1]; b += src.data[i + 2]; }
    const o = (y * w + x) * 4; const n = f * f; dst.data[o] = r / n; dst.data[o + 1] = g / n; dst.data[o + 2] = b / n; dst.data[o + 3] = 255;
  }
  const out = path.join(outDir, path.basename(file)); fs.writeFileSync(out, PNG.sync.write(dst)); console.log(out, w + 'x' + h);
}
