// Island heightfield in "vista" coordinates (u = camera right, w = camera
// forward, metres) so composition reads camera-relative. Pure TS, seeded,
// no DOM, no Three.
import { Rng } from '../core/Rng';

// Camera forward azimuth (clockwise from north, +x east, -z north). 142 puts the
// 17:30 sun (az 277) 135 degrees behind-right of the view axis: camera-facing walls,
// sails and the back slope are front-lit and warm, long shadows fall up-left (R1, R5).
const AZ = 142 * Math.PI / 180;
export const FORWARD: [number, number] = [Math.sin(AZ), -Math.cos(AZ)];
export const RIGHT: [number, number] = [-FORWARD[1], FORWARD[0]];
export function vistaToWorld(u: number, w: number): [number, number] { return [u * RIGHT[0] + w * FORWARD[0], u * RIGHT[1] + w * FORWARD[1]]; }
export function worldToVista(x: number, z: number): [number, number] { return [x * RIGHT[0] + z * RIGHT[1], x * FORWARD[0] + z * FORWARD[1]]; }

const smooth = (a: number, b: number, x: number) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

// Small periodic-free gradient noise (2D) with seeded permutation.
class Noise2 {
  private perm = new Uint8Array(512); private G: [number, number][] = [];
  constructor(seed: number) {
    const rng = new Rng(seed); const p = Array.from({ length: 256 }, (_, i) => i);
    for (let i = 255; i > 0; i--) { const j = rng.int(i + 1); [p[i], p[j]] = [p[j], p[i]]; }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
    for (let i = 0; i < 256; i++) { const a = rng.next() * Math.PI * 2; this.G.push([Math.cos(a), Math.sin(a)]); }
  }
  private g(ix: number, iy: number) { return this.G[this.perm[this.perm[ix & 255] + (iy & 255)]]; }
  perlin(x: number, y: number): number {
    const x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0;
    const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
    const u = fade(fx), v = fade(fy);
    const g00 = this.g(x0, y0), g10 = this.g(x0 + 1, y0), g01 = this.g(x0, y0 + 1), g11 = this.g(x0 + 1, y0 + 1);
    const n00 = g00[0] * fx + g00[1] * fy, n10 = g10[0] * (fx - 1) + g10[1] * fy;
    const n01 = g01[0] * fx + g01[1] * (fy - 1), n11 = g11[0] * (fx - 1) + g11[1] * (fy - 1);
    return mix(mix(n00, n10, u), mix(n01, n11, u), v) * 1.41;
  }
  fbm(x: number, y: number, oct = 5, lac = 2, gain = 0.5): number {
    let a = 1, s = 0, n = 0, f = 1;
    for (let i = 0; i < oct; i++) { s += a * this.perlin(x * f, y * f); n += a; a *= gain; f *= lac; }
    return s / n;
  }
  ridged(x: number, y: number, oct = 4): number {
    let a = 1, s = 0, n = 0, f = 1;
    for (let i = 0; i < oct; i++) { const v = 1 - Math.abs(this.perlin(x * f, y * f)); s += a * v * v; n += a; a *= 0.5; f *= 2; }
    return s / n;
  }
}

export const LAYOUT = {
  islandC: [-20, 205] as [number, number], islandR: [330, 230] as [number, number],
  bayC: [-15, 40] as [number, number], bayR: 80,
  beachC: [-95, -5] as [number, number], beachR: [55, 45] as [number, number],
  cliff: { u0: 40, u1: 200, w0: -10, w1: 150, h: 32 },
  moleFrom: [50, -8] as [number, number], moleTo: [20, -14] as [number, number],
  lighthouse: [20, -14] as [number, number],
  brig: [-34, 4] as [number, number], brigHeading: 205, // degrees, bow direction az
  quay: { u0: -95, u1: 40, w: 112 },
  dock: [-55, 108] as [number, number],
  seaLevel: 0,
};

export class Heightfield {
  private n: Noise2; private n2: Noise2;
  constructor(seed: number) { this.n = new Noise2(seed * 7919 + 1); this.n2 = new Noise2(seed * 104729 + 7); }

  // Signed distance to the coast in metres, positive on land (approximate).
  coastSD(u: number, w: number): number {
    const L = LAYOUT;
    const eu = (u - L.islandC[0]) / L.islandR[0], ew = (w - L.islandC[1]) / L.islandR[1];
    const e = Math.sqrt(eu * eu + ew * ew);
    const wob = this.n.fbm(u * 0.006 + 3, w * 0.006 + 1, 3) * 28;
    const sdE = (1 - e) * 230 + wob;
    const db = Math.hypot(u - L.bayC[0], w - L.bayC[1]) - L.bayR + this.n.fbm(u * 0.02, w * 0.02, 2) * 6;
    return Math.min(sdE, db);
  }

  // Height in metres at vista (u, w). Sea level 0.
  height(u: number, w: number): number {
    const L = LAYOUT;
    const sd = this.coastSD(u, w);
    let h: number;
    if (sd > 0) {
      const inland = smooth(0, 200, sd);
      h = 1.2 + sd * 0.11 + 28 * smooth(50, 190, sd) + this.n.fbm(u * 0.008, w * 0.008, 4) * (2 + 12 * inland) + this.n.fbm(u * 0.05, w * 0.05, 3) * 0.6
        + (this.n2.ridged(u * 0.006 + 3, w * 0.0075, 3) * 14 + this.n2.ridged(u * 0.018 + 1, w * 0.016 + 4, 3) * 3) * smooth(30, 120, sd) + this.n.fbm(u * 0.025 + 5, w * 0.025 + 2, 3) * 2.5 * smooth(20, 80, sd);
    } else {
      const inBay = Math.hypot(u - L.bayC[0], w - L.bayC[1]) < L.bayR + 5 ? 1 : 0;
      const slope = mix(0.26, 0.13, inBay);
      h = -0.6 + sd * slope + this.n.fbm(u * 0.03 + 9, w * 0.03, 3) * 0.8;
    }
    // cliff plateau on the right headland
    const c = L.cliff;
    const edgeN = this.n2.fbm(u * 0.012 + 5, w * 0.012 + 2, 3) * 22;
    const edgeN2 = this.n2.fbm(u * 0.03 + 1, w * 0.03 + 8, 3) * 7;
    // rounded plateau: superellipse falloff with noisy edge
    const cu = (u - (c.u0 + c.u1) / 2) / ((c.u1 - c.u0) / 2), cw = (w - (c.w0 + c.w1) / 2) / ((c.w1 - c.w0) / 2);
    const rr = Math.pow(Math.pow(Math.abs(cu), 3) + Math.pow(Math.abs(cw), 3), 1 / 3);
    const plateau = c.h * (1 - smooth(0.55 + (edgeN + edgeN2) / 120, 1.0 + (edgeN + edgeN2) / 120, rr)) * smooth(c.w0 - 5, c.w0 + 58 + edgeN2, w);
    const apron = smooth(4, 34, sd); // the cliff rises behind a rubble and sand apron, never straight out of the sea
    if (plateau * apron > 0.01) {
      const rid = this.n2.ridged(u * 0.03, w * 0.03, 4) * 4 + this.n.fbm(u * 0.1, w * 0.1, 3) * 0.8;
      const ph = plateau * apron + rid * smooth(2, 12, plateau * apron);
      const k = 6; // soft max
      h = Math.log(Math.exp(h / k) + Math.exp(ph / k)) * k;
    }
    // town terrace behind the quay: flat shelf, then the natural slope
    {
      const dx = u - L.bayC[0], dw = w - L.bayC[1]; const r = Math.hypot(dx, dw); const th = Math.atan2(dw, dx) * 180 / Math.PI;
      const ang = smooth(30, 45, th) * (1 - smooth(140, 155, th));
      const rad = smooth(74, 80, r) * (1 - smooth(112, 135, r));
      const terr = ang * rad;
      if (terr > 0) h = mix(h, 1.7 + Math.max(0, r - 80) * 0.045 + this.n.fbm(u * 0.05, w * 0.05, 2) * 0.15, terr);
      // agricultural terraces climbing the slope behind the town: stepped contours with soft risers
      const tmask = ang * smooth(132, 150, r) * (1 - smooth(240, 290, r));
      void tmask; // terraces are painted in the terrain shader; geometric steps zig-zag on the mesh
    }
    // western headland: a second, lower rocky rise so the island has two shoulders
    {
      const hu = (u + 205) / 95, hw = (w - 60) / 70; const hr = Math.pow(Math.pow(Math.abs(hu), 2.6) + Math.pow(Math.abs(hw), 2.6), 1 / 2.6);
      const en = this.n2.fbm(u * 0.015 + 9, w * 0.015 + 4, 3) * 0.2;
      const head = 22 * (1 - smooth(0.5 + en, 1.0 + en, hr)) * smooth(4, 30, sd);
      if (head > 0.01) { const rid = this.n2.ridged(u * 0.035 + 2, w * 0.035 + 7, 4) * 5; const k = 5; h = Math.log(Math.exp(h / k) + Math.exp((head + rid * smooth(2, 10, head)) / k)) * k; }
    }
    // north ridge: the island's spine, a broken rocky crest well behind the town
    {
      const rw = (w - 330) / 55; const ru = (u + 40) / 300;
      const spine = 26 * (1 - smooth(0.35, 1.0, Math.abs(rw) + Math.abs(ru) * 0.8)) * smooth(60, 140, sd);
      if (spine > 0.01) { const rid = this.n2.ridged(u * 0.02 + 5, w * 0.02 + 1, 4) * 8; const k = 6; h = Math.log(Math.exp(h / k) + Math.exp((h * 0.55 + spine + rid) / k)) * k; }
    }
    // beach shelf: low sand foreshore and a shallow bar
    const bu = (u - L.beachC[0]) / L.beachR[0], bw = (w - L.beachC[1]) / L.beachR[1];
    const beach = 1 - smooth(0.55, 1.0, Math.sqrt(bu * bu + bw * bw));
    if (beach > 0) {
      const target = sd > 0 ? 0.9 + sd * 0.05 + this.n.fbm(u * 0.03, w * 0.03, 2) * 0.35 : -0.5 + sd * 0.07;
      h = mix(h, target, beach);
    }
    return h;
  }

  heightWorld(x: number, z: number): number { const [u, w] = worldToVista(x, z); return this.height(u, w); }

  normalWorld(x: number, z: number, eps = 1.5): [number, number, number] {
    const hx = this.heightWorld(x + eps, z) - this.heightWorld(x - eps, z);
    const hz = this.heightWorld(x, z + eps) - this.heightWorld(x, z - eps);
    const nx = -hx / (2 * eps), nz = -hz / (2 * eps);
    const l = Math.hypot(nx, 1, nz);
    return [nx / l, 1 / l, nz / l];
  }
}

// Grid covering the island for meshes and the depth texture, in world space.
const gc = vistaToWorld(-20, 120);
export const GRID = { cx: gc[0], cz: gc[1], size: 1000 };
// Camera target (hero framing): on the basin, town in the upper third, brig lower-left, lighthouse lower-right.
export const TARGET: [number, number] = [-12, 42];
