// Side-by-side composite: node tools/compose.mjs out.png labelA fileA labelB fileB
import fs from 'node:fs'; import { PNG } from 'pngjs';
const [out, la, fa, lb, fb] = process.argv.slice(2);
const A = PNG.sync.read(fs.readFileSync(fa)), B = PNG.sync.read(fs.readFileSync(fb));
const pad = 16, w = A.width + B.width + pad * 3, h = Math.max(A.height, B.height) + pad * 2;
const dst = new PNG({ width: w, height: h }); dst.data.fill(24); for (let i = 3; i < dst.data.length; i += 4) dst.data[i] = 255;
const blit = (src, ox) => { for (let y = 0; y < src.height; y++) for (let x = 0; x < src.width; x++) { const si = (y * src.width + x) * 4, di = ((y + pad) * w + x + ox) * 4; dst.data[di] = src.data[si]; dst.data[di + 1] = src.data[si + 1]; dst.data[di + 2] = src.data[si + 2]; dst.data[di + 3] = 255; } };
blit(A, pad); blit(B, pad * 2 + A.width);
fs.writeFileSync(out, PNG.sync.write(dst)); console.log(out, w + 'x' + h, '|', la, '|', lb);
