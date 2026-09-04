// Periodic (tileable) noise primitives for texture synthesis. All functions take
// coordinates in lattice units and an integer period so the result tiles.
export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeNoise(seed = 1) {
  const rng = mulberry32(seed);
  const perm = new Uint8Array(512);
  const p = Array.from({ length: 256 }, (_, i) => i);
  for (let i = 255; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const G = [];
  for (let i = 0; i < 256; i++) { const a = rng() * Math.PI * 2; G.push([Math.cos(a), Math.sin(a)]); }
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + (b - a) * t;
  const mod = (a, n) => ((a % n) + n) % n;

  function grad(ix, iy, px, py) {
    const h = perm[perm[mod(ix, px) & 255] + (mod(iy, py) & 255)];
    return G[h];
  }
  // Periodic gradient (Perlin) noise in [-1,1]
  function perlin(x, y, px, py) {
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = x - x0, fy = y - y0;
    const u = fade(fx), v = fade(fy);
    const g00 = grad(x0, y0, px, py), g10 = grad(x0 + 1, y0, px, py);
    const g01 = grad(x0, y0 + 1, px, py), g11 = grad(x0 + 1, y0 + 1, px, py);
    const n00 = g00[0] * fx + g00[1] * fy, n10 = g10[0] * (fx - 1) + g10[1] * fy;
    const n01 = g01[0] * fx + g01[1] * (fy - 1), n11 = g11[0] * (fx - 1) + g11[1] * (fy - 1);
    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), v) * 1.41;
  }
  // Fractal Brownian motion, output roughly [-1,1]
  function fbm(x, y, px, py, oct = 5, lac = 2, gain = 0.5) {
    let a = 1, s = 0, n = 0, f = 1;
    for (let i = 0; i < oct; i++) {
      s += a * perlin(x * f, y * f, px * f, py * f);
      n += a; a *= gain; f *= lac;
    }
    return s / n;
  }
  // Ridged multifractal in [0,1]
  function ridged(x, y, px, py, oct = 5, lac = 2, gain = 0.5) {
    let a = 1, s = 0, n = 0, f = 1;
    for (let i = 0; i < oct; i++) {
      const v = 1 - Math.abs(perlin(x * f, y * f, px * f, py * f));
      s += a * v * v; n += a; a *= gain; f *= lac;
    }
    return s / n;
  }
  // Periodic Worley: returns {f1,f2,id,dx,dy} with feature-point distances
  function cellHash(ix, iy, px, py, k) {
    const h = perm[perm[perm[mod(ix, px) & 255] + (mod(iy, py) & 255)] + k];
    return h / 255;
  }
  function worley(x, y, px, py, jitter = 1) {
    const x0 = Math.floor(x), y0 = Math.floor(y);
    let f1 = 9, f2 = 9, id = 0, cx = 0, cy = 0;
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) {
      const ix = x0 + i, iy = y0 + j;
      const ox = cellHash(ix, iy, px, py, 1) * jitter + (1 - jitter) * 0.5;
      const oy = cellHash(ix, iy, px, py, 2) * jitter + (1 - jitter) * 0.5;
      const dx = ix + ox - x, dy = iy + oy - y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < f1) { f2 = f1; f1 = d; id = cellHash(ix, iy, px, py, 3); cx = dx; cy = dy; }
      else if (d < f2) f2 = d;
    }
    return { f1, f2, id, dx: cx, dy: cy };
  }
  return { rng, perlin, fbm, ridged, worley, hash: cellHash };
}

export const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const mix = (a, b, t) => a + (b - a) * t;
export const mix3 = (a, b, t) => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];
export const hex = (h) => [parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255];
export const fract = (x) => x - Math.floor(x);
