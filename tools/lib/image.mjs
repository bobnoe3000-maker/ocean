import { PNG } from 'pngjs';
import fs from 'node:fs';
import path from 'node:path';

// Float image buffers: height (1ch), albedo (3ch), rough (1ch) -> PNG outputs.
export function writePNG(file, w, h, rgba) {
  const png = new PNG({ width: w, height: h });
  png.data = Buffer.from(rgba);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, PNG.sync.write(png));
}

const to8 = (v) => Math.max(0, Math.min(255, Math.round(v * 255)));

export function normalFromHeight(height, w, h, strength) {
  const out = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const l = height[y * w + ((x - 1 + w) % w)], r = height[y * w + ((x + 1) % w)];
    const d = height[((y - 1 + h) % h) * w + x], u = height[((y + 1) % h) * w + x];
    // v grows with row index (KTX2 / flipY=false convention). OpenGL normal map: +Y = +v.
    let nx = -(r - l) * strength * w * 0.5, ny = -(u - d) * strength * h * 0.5, nz = 1;
    const len = Math.hypot(nx, ny, nz); nx /= len; ny /= len; nz /= len;
    const i = (y * w + x) * 4;
    out[i] = to8(nx * 0.5 + 0.5); out[i + 1] = to8(ny * 0.5 + 0.5); out[i + 2] = to8(nz * 0.5 + 0.5); out[i + 3] = 255;
  }
  return out;
}

// Wrapped box blur on a float channel (separable), radius r in pixels
export function blur(src, w, h, r) {
  const tmp = new Float32Array(w * h), out = new Float32Array(w * h);
  const n = 2 * r + 1;
  for (let y = 0; y < h; y++) {
    let s = 0;
    for (let k = -r; k <= r; k++) s += src[y * w + ((k + w) % w)];
    for (let x = 0; x < w; x++) {
      tmp[y * w + x] = s / n;
      s += src[y * w + ((x + r + 1) % w)] - src[y * w + ((x - r + w) % w)];
    }
  }
  for (let x = 0; x < w; x++) {
    let s = 0;
    for (let k = -r; k <= r; k++) s += tmp[((k + h) % h) * w + x];
    for (let y = 0; y < h; y++) {
      out[y * w + x] = s / n;
      s += tmp[((y + r + 1) % h) * w + x] - tmp[((y - r + h) % h) * w + x];
    }
  }
  return out;
}

// Cavity-style AO from height: occluded where the local mean is above the point.
export function aoFromHeight(height, w, h, scale) {
  const b1 = blur(height, w, h, Math.max(1, Math.round(w / 128)));
  const b2 = blur(height, w, h, Math.max(2, Math.round(w / 32)));
  const ao = new Float32Array(w * h);
  for (let i = 0; i < w * h; i++) {
    const c = (b1[i] - height[i]) * 0.6 + (b2[i] - height[i]) * 0.4;
    ao[i] = Math.max(0, Math.min(1, 1 - c * scale));
  }
  return ao;
}

export function packSet(dir, name, w, h, { albedo, height, rough, aoScale = 6, normalStrength = 1, metal = null, extraAO = null }) {
  const painted = process.env.TEX_STYLE === 'painted';
  if (painted) {
    // painterly: soften fine albedo noise, lift saturation, keep large shapes; normals at half strength
    const r = Math.max(1, Math.round(w / 512));
    const ch = [0, 1, 2].map((c) => { const src = new Float32Array(w * h); for (let i = 0; i < w * h; i++) src[i] = albedo[i * 3 + c]; return blur(src, w, h, r); });
    for (let i = 0; i < w * h; i++) {
      const rr = ch[0][i], gg = ch[1][i], bb = ch[2][i]; const l = 0.3 * rr + 0.59 * gg + 0.11 * bb;
      albedo[i * 3] = l + (rr - l) * 1.25; albedo[i * 3 + 1] = l + (gg - l) * 1.25; albedo[i * 3 + 2] = l + (bb - l) * 1.25;
    }
    normalStrength *= 0.5; aoScale *= 0.8;
  }
  const alb = new Uint8Array(w * h * 4);
  for (let i = 0; i < w * h; i++) { alb[i * 4] = to8(albedo[i * 3]); alb[i * 4 + 1] = to8(albedo[i * 3 + 1]); alb[i * 4 + 2] = to8(albedo[i * 3 + 2]); alb[i * 4 + 3] = 255; }
  writePNG(path.join(dir, `${name}_albedo.png`), w, h, alb);
  writePNG(path.join(dir, `${name}_normal.png`), w, h, normalFromHeight(height, w, h, normalStrength));
  const ao = aoFromHeight(height, w, h, aoScale);
  const orm = new Uint8Array(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    const a = extraAO ? ao[i] * extraAO[i] : ao[i];
    orm[i * 4] = to8(a); orm[i * 4 + 1] = to8(rough[i]); orm[i * 4 + 2] = to8(metal ? metal[i] : 0); orm[i * 4 + 3] = 255;
  }
  writePNG(path.join(dir, `${name}_orm.png`), w, h, orm);
}
