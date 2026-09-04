// Encode public/textures/png/*.png into KTX2 (UASTC, Zstd) with mipmaps using
// the Basis Universal WASM encoder. Albedo maps are sRGB; normal/ORM linear.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const BASIS = require('./vendor/basis_encoder.cjs');

const SRC = path.resolve('public/textures/png');
const DST = path.resolve('public/textures');
const only = process.argv.slice(2);
const Module = await BASIS({});
const { BasisEncoder, initializeBasis } = Module;
initializeBasis();

const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.png') && !f.startsWith('smoke') && (!only.length || only.some((o) => f.startsWith(o))));
for (const f of files) {
  const t0 = Date.now();
  const png = fs.readFileSync(path.join(SRC, f));
  const srgb = /_albedo|moon/.test(f);
  const enc = new BasisEncoder();
  enc.setCreateKTX2File(true);
  enc.setKTX2UASTCSupercompression(true);
  enc.setKTX2AndBasisSRGBTransferFunc(srgb);
  if (/_normal/.test(f)) enc.setNormalMapPreset(); else if (srgb) enc.setSRGBPreset(); else enc.setLinearPreset();
  enc.setUASTC(true);
  enc.setSliceSourceImage(0, new Uint8Array(png), 0, 0, true);
  enc.setUASTC(true);
  enc.setPackUASTCFlags(2);
  enc.setRDOUASTC(true);
  enc.setRDOUASTCQualityScalar(0.75);
  enc.setPerceptual(srgb);
  enc.setMipSRGB(srgb);
  enc.setMipGen(true);
  enc.setDebug(false);
  enc.setComputeStats(false);
  const out = new Uint8Array(1024 * 1024 * 24);
  const n = enc.encode(out);
  enc.delete();
  if (!n) { console.error('encode failed', f); process.exitCode = 1; continue; }
  const dst = path.join(DST, f.replace(/\.png$/, '.ktx2'));
  fs.writeFileSync(dst, out.subarray(0, n));
  console.log(`${f} -> ${path.basename(dst)} ${(n / 1024).toFixed(0)} KB ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}
