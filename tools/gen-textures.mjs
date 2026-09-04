// Procedural PBR texture sets. Each set is authored to carry the wear story of
// the photographic set it stands in for (see LOOK.md §5). Output: PNG albedo,
// normal (OpenGL, +Y = +v, row 0 = v 0), ORM (AO, roughness, metal).
import path from 'node:path';
import { makeNoise, clamp, smooth, mix, mix3, hex, fract } from './lib/noise.mjs';
import { packSet, writePNG, blur } from './lib/image.mjs';

const OUT = path.resolve('public/textures/png');
const only = process.argv.slice(2);
const SIZE = Number(process.env.TEX_SIZE || 1024);

function run(name, w, h, fn, opts = {}) {
  if (only.length && !only.includes(name)) return;
  const t0 = Date.now();
  const albedo = new Float32Array(w * h * 3), height = new Float32Array(w * h), rough = new Float32Array(w * h);
  const extraAO = opts.extraAO ? new Float32Array(w * h) : null;
  const px = { a: [0, 0, 0], h: 0, r: 0.8, ao: 1 };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const u = x / w, v = y / h;
    px.a[0] = 0; px.a[1] = 0; px.a[2] = 0; px.h = 0; px.r = 0.8; px.ao = 1;
    fn(u, v, px);
    const i = y * w + x;
    albedo[i * 3] = clamp(px.a[0]); albedo[i * 3 + 1] = clamp(px.a[1]); albedo[i * 3 + 2] = clamp(px.a[2]);
    height[i] = px.h; rough[i] = clamp(px.r);
    if (extraAO) extraAO[i] = clamp(px.ao);
  }
  packSet(OUT, name, w, h, { albedo, height, rough, extraAO, ...opts });
  console.log(`${name} ${w}x${h} ${((Date.now() - t0) / 1000).toFixed(1)}s`);
}

// ---------------------------------------------------------------- sand
{
  const N = makeNoise(11);
  run('sand', SIZE, SIZE, (u, v, o) => {
    const warp = N.fbm(u * 3, v * 3, 3, 3, 3) * 0.6 + N.fbm(u * 9 + 4, v * 9, 9, 9, 2) * 0.12;
    const rip = fract(u * 9 + v * 0.9 + warp);
    const ripple = smooth(0.0, 0.7, rip) * (1 - smooth(0.7, 1.0, rip));
    const grain = N.fbm(u * 140, v * 140, 140, 140, 3, 2.1, 0.6);
    const grain2 = N.fbm(u * 330 + 2, v * 330, 330, 330, 2, 2.0, 0.5);
    const macro = N.fbm(u * 2, v * 2, 2, 2, 3);
    const mottle = N.fbm(u * 6 + 7, v * 6 + 3, 6, 6, 4, 2.2, 0.55);
    const damp = smooth(0.1, 0.5, mottle + macro * 0.4);
    const dry = smooth(0.15, 0.5, -mottle + macro * 0.2);
    // pebbles: irregular, varied size and tone, sparse
    const pw = N.worley(u * 30 + warp * 1.5 + N.fbm(u * 40, v * 40, 40, 40, 2) * 0.15, v * 30, 30, 30, 1);
    const pid = N.hash(Math.floor(u * 30 + warp * 1.5), Math.floor(v * 30), 30, 30, 5);
    const pr = 0.04 + 0.09 * N.hash(Math.floor(u * 30 + warp * 1.5), Math.floor(v * 30), 30, 30, 6);
    const pebble = (pid > 0.88 ? 1 : 0) * (1 - smooth(pr * 0.7, pr, pw.f1 * (1 + 0.4 * Math.sin(pid * 20 + u * 100))));
    // shell fragments: pale, irregular, small
    const sw = N.worley(u * 70 + 3 + N.fbm(u * 90, v * 90, 90, 90, 2) * 0.2, v * 70, 70, 70, 1);
    const sid = N.hash(Math.floor(u * 70 + 3), Math.floor(v * 70), 70, 70, 7);
    const shell = (sid > 0.94 ? 1 : 0) * (1 - smooth(0.025, 0.05, sw.f1));
    o.h = ripple * 0.010 + grain * 0.0012 + grain2 * 0.0005 + pebble * 0.014 * (0.6 + pr * 4) + shell * 0.004 + macro * 0.006 - damp * 0.002;
    let col = mix3(hex('#DAC8A4'), hex('#CDB48C'), 0.5 + 0.5 * macro);
    col = mix3(col, hex('#C2A882'), 0.12 * (1 - ripple));
    col = mix3(col, hex('#EADFC4'), 0.4 * smooth(-0.2, 0.7, grain) + dry * 0.35);
    col = mix3(col, hex('#AE9670'), damp * 0.45);
    col = mix3(col, [col[0] * 0.93, col[1] * 0.93, col[2] * 0.91], smooth(0.2, 0.6, grain2) * 0.35);
    const pebCol = mix3(mix3(hex('#6E655A'), hex('#A08A6E'), pid * 5 - 4.4), hex('#8D8478'), N.hash(Math.floor(u * 30), Math.floor(v * 30), 30, 30, 8));
    col = mix3(col, pebCol, pebble);
    col = mix3(col, mix3(hex('#F4EFE4'), hex('#E2CDB0'), sid * 12 - 11.3), shell * 0.9);
    o.a = col;
    o.r = 0.94 - 0.03 * ripple - 0.3 * pebble - 0.2 * shell + 0.03 * grain - 0.12 * damp;
  }, { normalStrength: 1.3, aoScale: 10 });
}

// ---------------------------------------------------------------- rock (cliff)
{
  const N = makeNoise(23);
  run('rock', SIZE, SIZE, (u, v, o) => {
    const wx = N.fbm(u * 2.5, v * 2.5, 3, 3, 4) * 0.35, wy = N.fbm(u * 2.5 + 7, v * 2.5 + 2, 3, 3, 4) * 0.35;
    // sedimentary strata, tilted, warped
    const sv = v * 7 + u * 0.35 + wy * 1.6 + wx * 0.5;
    const strata = fract(sv);
    const bandId = N.hash(0, Math.floor(sv), 1, 32, 9);
    const bandW = 0.25 + 0.5 * bandId;
    const band = smooth(0.0, 0.08, strata) * (1 - smooth(bandW - 0.05, bandW + 0.05, strata));
    const bandEdge = smooth(0.0, 0.03, strata) * (1 - smooth(0.03, 0.08, strata));
    // blocky weathering: ridged noise broken into facets
    const ridge = N.ridged(u * 8 + wx, v * 8 + wy, 8, 8, 5);
    const facet = N.worley(u * 7 + wx * 2, v * 7 + wy, 7, 7, 1);
    const facetH = facet.id * 0.5;
    const facetEdge = smooth(0.06, 0.0, facet.f2 - facet.f1);
    const crackMask = facetEdge * smooth(0.1, 0.45, N.fbm(u * 4 + 2, v * 4, 4, 4, 3) + 0.15);
    const detail = N.fbm(u * 70, v * 70, 70, 70, 4, 2.1, 0.55);
    const pits = smooth(0.1, 0.02, N.worley(u * 60 + 1, v * 60, 60, 60).f1) * (N.hash(Math.floor(u * 60 + 1), Math.floor(v * 60), 60, 60, 4) > 0.8 ? 1 : 0);
    const macro = N.fbm(u * 1.5, v * 1.5, 2, 2, 3);
    const iron = smooth(0.2, 0.55, N.fbm(u * 5 + 3, v * 5 + 9, 5, 5, 4) + macro * 0.3);
    const lichen = smooth(0.4, 0.62, N.fbm(u * 16, v * 16, 16, 16, 3) + N.fbm(u * 3, v * 3, 3, 3, 2) * 0.4) * smooth(0.5, 0.9, ridge);
    const salt = smooth(0.45, 0.7, N.fbm(u * 12 + 6, v * 12, 12, 12, 3));
    o.h = band * 0.03 + facetH * 0.05 - crackMask * 0.04 + ridge * 0.045 + detail * 0.008 - pits * 0.006 + macro * 0.02;
    let col = mix3(hex('#857A6B'), hex('#A5967F'), bandId);
    col = mix3(col, hex('#6B6257'), (1 - band) * 0.55);
    col = mix3(col, hex('#5A524A'), bandEdge * 0.5);
    col = mix3(col, [col[0] * 1.15, col[1] * 1.13, col[2] * 1.08], facetH * 0.6);
    col = mix3(col, hex('#B4884F'), iron * 0.4);
    col = mix3(col, hex('#3E3934'), crackMask * 0.85 + pits * 0.5);
    col = mix3(col, hex('#C4BEA8'), smooth(0.55, 0.95, ridge) * 0.35);
    col = mix3(col, hex('#8B9A74'), lichen * 0.55);
    col = mix3(col, hex('#D6D2C4'), salt * 0.25);
    col = mix3(col, [col[0] * 1.1, col[1] * 1.1, col[2] * 1.1], smooth(0.2, 0.6, detail) * 0.5);
    o.a = col;
    o.r = 0.76 + 0.14 * crackMask + 0.06 * detail - 0.1 * smooth(0.5, 0.9, ridge) + lichen * 0.1 + pits * 0.1;
  }, { normalStrength: 1.4, aoScale: 8 });
}

// ---------------------------------------------------------------- scrub ground (dry Mediterranean hillside)
{
  const N = makeNoise(37);
  run('scrub', SIZE, SIZE, (u, v, o) => {
    const macro = N.fbm(u * 2, v * 2, 2, 2, 3);
    const warp = N.fbm(u * 5 + 2, v * 5 + 9, 5, 5, 3) * 0.3;
    // grass patches: large irregular areas, blades inside
    const patchN = N.fbm(u * 4 + warp, v * 4, 4, 4, 4, 2.1, 0.55) + macro * 0.35;
    const patch = smooth(0.02, 0.3, patchN);
    const blades = N.ridged(u * 110 + warp * 8, v * 70, 110, 70, 3, 2, 0.6);
    const bladeDir = N.fbm(u * 200, v * 40 + 3, 200, 40, 2);
    const grassTone = N.fbm(u * 12 + 5, v * 12, 12, 12, 3);
    // bare dirt with stones of varied size
    const dirt = N.fbm(u * 60, v * 60, 60, 60, 4, 2.2, 0.55);
    const dirt2 = N.fbm(u * 18 + 8, v * 18, 18, 18, 3);
    const sw = N.worley(u * 22 + N.fbm(u * 50, v * 50, 50, 50, 2) * 0.2, v * 22 + warp, 22, 22, 1);
    const sid = N.hash(Math.floor(u * 22), Math.floor(v * 22 + warp), 22, 22, 5);
    const sr = 0.05 + 0.13 * N.hash(Math.floor(u * 22), Math.floor(v * 22 + warp), 22, 22, 6);
    const stone = (sid > 0.8 ? 1 : 0) * (1 - smooth(sr * 0.75, sr, sw.f1 * (1 + 0.35 * Math.sin(sid * 30 + v * 80)))) * (1 - patch * 0.7);
    const twig = smooth(0.62, 0.72, N.ridged(u * 40 + 1, v * 40 + 7, 40, 40, 2)) * (1 - patch) * smooth(0.1, 0.4, dirt2) * 0.6;
    o.h = patch * (0.012 + blades * 0.01) + stone * 0.016 * (0.5 + sr * 4) + dirt * 0.003 + dirt2 * 0.006 + macro * 0.005 + twig * 0.004;
    let col = mix3(hex('#8F7F62'), hex('#6E604A'), 0.5 + 0.5 * dirt2);
    col = mix3(col, hex('#A28E68'), smooth(0.1, 0.6, macro) * 0.4 + smooth(0.2, 0.6, dirt) * 0.25);
    col = mix3(col, hex('#5A4B38'), smooth(0.3, 0.7, -dirt) * 0.3);
    const grassA = mix3(hex('#7F7A4A'), hex('#A29A5C'), 0.5 + 0.5 * grassTone);
    const grassB = mix3(hex('#4F5E33'), hex('#6A7A40'), 0.5 + 0.5 * bladeDir);
    const grass = mix3(grassA, grassB, smooth(0.3, 0.8, blades));
    col = mix3(col, grass, patch);
    col = mix3(col, [col[0] * 0.8, col[1] * 0.8, col[2] * 0.78], patch * (1 - smooth(0.2, 0.7, blades)) * 0.5);
    const stoneCol = mix3(mix3(hex('#8B8579'), hex('#A9A296'), sid * 5 - 4), hex('#7C7264'), N.hash(Math.floor(u * 22), Math.floor(v * 22), 22, 22, 9));
    col = mix3(col, stoneCol, stone);
    col = mix3(col, hex('#4E4030'), twig * 0.8);
    o.a = col;
    o.r = 0.9 - 0.12 * stone - 0.15 * patch * smooth(0.4, 0.9, blades) + 0.03 * dirt;
  }, { normalStrength: 1.2, aoScale: 9 });
}

// ---------------------------------------------------------------- plank generator
function planks(N, cols, gapW, opts) {
  return (u, v, o) => {
    const col = Math.floor(u * cols);
    const rowSeed = N.hash(col, 0, cols, 1, 11);
    const vOff = fract(v + rowSeed);
    const len = 0.5 + 0.5 * N.hash(col, 1, cols, 1, 12);
    const seg = Math.floor(vOff / len);
    const segV = fract(vOff / len);
    const id = N.hash(col, seg + 3, cols, 64, 13);
    const fu = fract(u * cols);
    const gapU = smooth(0, gapW, fu) * (1 - smooth(1 - gapW, 1, fu));
    const gapV = smooth(0, gapW * cols * len * 0.6, segV) * (1 - smooth(1 - gapW * cols * len * 0.6, 1, segV));
    const gap = 1 - gapU * gapV;
    const grainScale = opts.grain;
    const knotN = N.worley(u * cols * 1.5, v * 6 + id * 3, Math.round(cols * 1.5), 6, 1);
    const knot = smooth(0.35, 0.05, knotN.f1) * (knotN.id > 0.8 ? 1 : 0);
    const grain = N.fbm(u * cols * 7 + id * 10 + knot * 2, v * grainScale + id * 5, cols * 7, grainScale, 3, 2.3, 0.5);
    const ring = Math.sin((fu * 2 + id * 6 + grain * 0.4 + knot * 6) * Math.PI * 4) * 0.5 + 0.5;
    const weather = N.fbm(u * 5, v * 5, 5, 5, 4);
    const nail = (segV < 0.06 || segV > 0.94) && Math.abs(fu - 0.25) < 0.03 || (segV < 0.06 || segV > 0.94) && Math.abs(fu - 0.75) < 0.03 ? 1 : 0;
    const crack = smooth(0.5, 0.85, N.ridged(u * cols * 3 + id, v * 12, cols * 3, 12, 3)) * smooth(0.2, 0.6, weather + 0.3) * 0.6;
    const edgeWear = 1 - gap; // treated by caller
    o.h = (gap - 1) * 0.06 + ring * 0.004 + grain * 0.004 - nail * 0.01 - crack * 0.01 + id * 0.006 + knot * 0.006;
    let base = mix3(opts.c1, opts.c2, id);
    base = mix3(base, opts.c3, 0.5 + 0.5 * weather);
    base = mix3(base, [base[0] * 0.8, base[1] * 0.8, base[2] * 0.8], ring * 0.5);
    base = mix3(base, opts.cGrain, smooth(0.0, 0.5, grain) * 0.4);
    base = mix3(base, opts.cKnot, knot * 0.7);
    base = mix3(base, opts.cGap, 1 - gap);
    base = mix3(base, hex('#3A3230'), nail * 0.8 + crack * 0.6);
    o.a = base;
    o.r = opts.r0 + opts.rVar * (0.5 + 0.5 * weather) + 0.08 * ring - opts.rGap * (1 - gap) + 0.1 * crack - nail * 0.2;
    o.ao = 1 - (1 - gap) * 0.5;
    void edgeWear;
  };
}
{
  const N = makeNoise(41);
  run('planks', SIZE, SIZE, planks(N, 6, 0.05, {
    c1: hex('#8E8578'), c2: hex('#9C9385'), c3: hex('#7A7064'), cGrain: hex('#B3A68F'), cKnot: hex('#5C4A3A'), cGap: hex('#4A423B'),
    grain: 40, r0: 0.62, rVar: 0.18, rGap: -0.15,
  }), { normalStrength: 1.0, aoScale: 7, extraAO: true });
}
{
  const N = makeNoise(43);
  run('hull', SIZE, SIZE, planks(N, 9, 0.06, {
    c1: hex('#2F2620'), c2: hex('#3B2F26'), c3: hex('#241E1A'), cGrain: hex('#4A3A2E'), cKnot: hex('#1E1815'), cGap: hex('#0F0C0A'),
    grain: 48, r0: 0.42, rVar: 0.16, rGap: 0.2,
  }), { normalStrength: 1.0, aoScale: 7, extraAO: true });
}

// ---------------------------------------------------------------- lime-washed plaster (v 0 = base of wall)
{
  const N = makeNoise(53);
  run('plaster', SIZE, SIZE, (u, v, o) => {
    const stipple = N.fbm(u * 120, v * 120, 120, 120, 3, 2.2, 0.55);
    const bumps = N.fbm(u * 10, v * 10, 10, 10, 4);
    const macro = N.fbm(u * 2, v * 2, 2, 2, 3);
    const crackW = N.worley(u * 3 + macro, v * 3, 3, 3, 1);
    const crack = smooth(0.012, 0.0, Math.abs(crackW.f2 - crackW.f1)) * smooth(0.0, 0.3, N.fbm(u * 4 + 2, v * 4, 4, 4, 3) + 0.2);
    const streak = smooth(0.2, 0.7, N.fbm(u * 40, v * 2.5, 40, 3, 3)) * smooth(1.0, 0.55, v) * 0.5;
    const flakeN = N.fbm(u * 9, v * 9, 9, 9, 4);
    const flake = smooth(0.0, 0.25, flakeN + (0.32 - v) * 2.2) * smooth(0.45, 0.05, v);
    const dirt = smooth(0.25, 0.0, v) * (0.5 + 0.5 * N.fbm(u * 20, v * 20, 20, 20, 3));
    const spot = smooth(0.15, 0.02, N.worley(u * 50, v * 50, 50, 50).f1) * (N.hash(Math.floor(u * 50), Math.floor(v * 50), 50, 50, 8) > 0.9 ? 1 : 0);
    o.h = stipple * 0.004 + bumps * 0.012 - crack * 0.02 - flake * 0.015 + macro * 0.005 - spot * 0.006;
    let col = mix3(hex('#F1EBDD'), hex('#E2D8C4'), 0.5 + 0.5 * macro);
    col = mix3(col, [col[0] * 0.96, col[1] * 0.95, col[2] * 0.93], smooth(-0.2, 0.5, bumps));
    col = mix3(col, hex('#A99C86'), streak * 0.6);
    col = mix3(col, hex('#4B4540'), crack * 0.7);
    col = mix3(col, mix3(hex('#C4A97C'), hex('#9C9A94'), smooth(-0.2, 0.2, flakeN)), flake * 0.85);
    col = mix3(col, hex('#7C7263'), dirt * 0.45);
    col = mix3(col, hex('#8A8578'), spot * 0.5);
    o.a = col;
    o.r = 0.86 + 0.05 * stipple + 0.08 * flake + 0.06 * dirt;
  }, { normalStrength: 1.2, aoScale: 8 });
}

// ---------------------------------------------------------------- terracotta barrel tiles
{
  const N = makeNoise(61);
  run('tiles', SIZE, SIZE, (u, v, o) => {
    const ROWS = 5, COLS = 8;
    const row = Math.floor(v * ROWS);
    const rowV = fract(v * ROWS);
    const rowOff = (row % 2) * 0.5;
    const cu = u * COLS + rowOff;
    const colI = Math.floor(cu);
    const fu = fract(cu);
    const id = N.hash(colI, row, COLS, ROWS, 21);
    const id2 = N.hash(colI, row, COLS, ROWS, 22);
    const barrel = Math.sqrt(Math.max(0, 1 - Math.pow((fu - 0.5) * 2.1, 2)));
    const under = 1 - smooth(0.0, 0.12, fu) * (1 - smooth(0.88, 1.0, fu));
    const lip = smooth(0.0, 0.08, rowV);
    const overlap = smooth(0.92, 1.0, rowV);
    const chipN = N.fbm(u * 30 + id * 7, v * 30, 30, 30, 3);
    const chip = smooth(0.35, 0.6, chipN) * smooth(0.85, 1.0, rowV) * 0.7;
    const surf = N.fbm(u * 70, v * 70, 70, 70, 3, 2.2, 0.55);
    const lichenN = N.fbm(u * 8, v * 8, 8, 8, 4) + N.fbm(u * 1.5, v * 1.5, 2, 2, 2) * 0.5;
    const lichen = smooth(0.25, 0.55, lichenN) * smooth(0.3, 0.9, barrel);
    const moss = smooth(0.35, 0.05, barrel) * smooth(0.1, 0.5, N.fbm(u * 6 + 3, v * 6, 6, 6, 3) + 0.2);
    const broken = id2 > 0.93 ? 1 : 0;
    o.h = barrel * 0.05 * lip * (1 - overlap * 0.6) - chip * 0.01 + surf * 0.003 - broken * 0.02 + under * -0.02;
    let col = mix3(hex('#B85F3E'), hex('#8F4A33'), id);
    col = mix3(col, hex('#C8825A'), smooth(0.0, 0.5, surf) * 0.3);
    col = mix3(col, hex('#6E4A3C'), broken * 0.6 + (1 - lip) * 0.3);
    col = mix3(col, hex('#BDB7A3'), lichen * 0.55);
    col = mix3(col, hex('#4E5A34'), moss * 0.6);
    col = mix3(col, hex('#3E2A22'), (1 - barrel) * 0.35 + chip * 0.4);
    o.a = col;
    o.r = 0.72 + 0.1 * lichen + 0.08 * moss + 0.05 * surf + 0.15 * (1 - barrel);
  }, { normalStrength: 0.9, aoScale: 6 });
}

// ---------------------------------------------------------------- canvas (sail)
{
  const N = makeNoise(71);
  run('canvas', SIZE, SIZE, (u, v, o) => {
    const wu = Math.sin(u * Math.PI * 2 * 220) * 0.5 + 0.5, wv = Math.sin(v * Math.PI * 2 * 220) * 0.5 + 0.5;
    const weave = (wu * wv + (1 - wu) * (1 - wv)) * 0.5;
    const fibre = N.fbm(u * 200, v * 200, 200, 200, 2, 2.4, 0.5);
    const stain = N.fbm(u * 3, v * 3, 3, 3, 4);
    const stain2 = N.fbm(u * 9 + 5, v * 9, 9, 9, 3);
    const panel = smooth(0.0, 0.006, Math.abs(fract(u * 3) - 0.5) - 0.48);
    const seam = 1 - smooth(0.0, 0.012, Math.abs(fract(u * 3 + 0.5) - 0.5));
    const patch = smooth(0.2, 0.3, N.fbm(u * 2 + 1, v * 2 + 1, 2, 2, 2)) * 0;
    o.h = weave * 0.002 + fibre * 0.001 + seam * 0.006 + panel * 0.004 + stain * 0.003;
    let col = mix3(hex('#E5D9BE'), hex('#D2C3A3'), 0.5 + 0.5 * stain);
    col = mix3(col, hex('#B9A785'), smooth(0.1, 0.6, stain2) * 0.4);
    col = mix3(col, [col[0] * 0.92, col[1] * 0.92, col[2] * 0.9], weave * 0.6);
    col = mix3(col, hex('#A89678'), seam * 0.5);
    col = mix3(col, hex('#C9B892'), patch);
    o.a = col;
    o.r = 0.9 + 0.05 * weave - 0.05 * stain2;
  }, { normalStrength: 1.0, aoScale: 5 });
}

// ---------------------------------------------------------------- rope
{
  const N = makeNoise(79);
  run('rope', 256, 1024, (u, v, o) => {
    const strands = 3, twists = 8;
    const phase = fract(u * strands + v * twists);
    const strand = Math.sqrt(Math.max(0, 1 - Math.pow((phase - 0.5) * 2.2, 2)));
    const fibre = N.fbm(u * 60 + v * 30, v * 300, 60, 300, 2, 2.3, 0.5);
    const wear = N.fbm(u * 2, v * 6, 2, 6, 3);
    o.h = strand * 0.05 + fibre * 0.004;
    let col = mix3(hex('#A88B5F'), hex('#8C7047'), 0.5 + 0.5 * wear);
    col = mix3(col, hex('#5C4A33'), (1 - strand) * 0.7);
    col = mix3(col, hex('#C7AD80'), smooth(0.0, 0.6, fibre) * 0.3);
    o.a = col;
    o.r = 0.85 + 0.05 * fibre;
  }, { normalStrength: 1.2, aoScale: 6 });
}

// ---------------------------------------------------------------- quay stone blocks (v 0 = waterline side)
{
  const N = makeNoise(83);
  run('stone', SIZE, SIZE, (u, v, o) => {
    const ROWS = 4;
    const row = Math.floor(v * ROWS);
    const rowV = fract(v * ROWS);
    const rowOff = N.hash(row, 0, ROWS, 1, 31) * 0.7;
    const cols = 3;
    const cu = u * cols + rowOff;
    const colI = Math.floor(cu);
    const id = N.hash(colI, row, cols, ROWS, 32);
    const wobble = N.fbm(u * 12, v * 12, 12, 12, 3) * 0.05;
    const fu = fract(cu) + wobble, fv = rowV + wobble;
    const jointW = 0.03;
    const inJoint = 1 - smooth(0, jointW, fu) * (1 - smooth(1 - jointW * 1.2, 1, fu)) * smooth(0, jointW * 2.5, fv) * (1 - smooth(1 - jointW * 2.5, 1, fv));
    const face = N.fbm(u * 40 + id * 9, v * 40, 40, 40, 4, 2.2, 0.55);
    const pit = smooth(0.12, 0.02, N.worley(u * 60, v * 60, 60, 60).f1) * (N.hash(Math.floor(u * 60), Math.floor(v * 60), 60, 60, 33) > 0.85 ? 1 : 0);
    const macro = N.fbm(u * 2, v * 2, 2, 2, 3);
    const moss = smooth(0.1, 0.5, N.fbm(u * 7, v * 7, 7, 7, 3) + macro * 0.4) * smooth(0.6, 0.15, v) * (0.4 + 0.6 * inJoint);
    const salt = smooth(0.2, 0.5, N.fbm(u * 15 + 4, v * 15, 15, 15, 3)) * smooth(0.5, 0.25, v) * (1 - moss);
    o.h = (1 - inJoint) * 0.04 + face * 0.006 - pit * 0.008 + id * 0.008 + macro * 0.004;
    let col = mix3(hex('#8B877D'), hex('#A29C90'), id);
    col = mix3(col, hex('#7A756B'), smooth(-0.2, 0.5, face) * 0.4);
    col = mix3(col, hex('#B4A88E'), smooth(0.1, 0.5, macro) * 0.3);
    col = mix3(col, hex('#5A5751'), inJoint * 0.75 + pit * 0.5);
    col = mix3(col, hex('#4C5A36'), moss * 0.7);
    col = mix3(col, hex('#D8D4C8'), salt * 0.4);
    o.a = col;
    o.r = 0.78 + 0.12 * inJoint + 0.08 * moss + 0.06 * face;
  }, { normalStrength: 1.1, aoScale: 7 });
}

// ---------------------------------------------------------------- palm bark (u around trunk, v along)
{
  const N = makeNoise(89);
  run('bark', 512, 1024, (u, v, o) => {
    const RINGS = 10;
    const rv = fract(v * RINGS);
    const scar = smooth(0.0, 0.25, rv) * (1 - smooth(0.55, 0.75, rv));
    const dia = Math.abs(fract(u * 6 + (Math.floor(v * RINGS) % 2) * 0.5) - 0.5) * 2;
    const scale = scar * (1 - smooth(0.6, 1.0, dia));
    const fibre = N.fbm(u * 30, v * 200, 30, 200, 3, 2.3, 0.5);
    const rough = N.fbm(u * 8, v * 16, 8, 16, 4);
    o.h = scale * 0.05 + fibre * 0.006 + rough * 0.01;
    let col = mix3(hex('#7C6B58'), hex('#5E4F40'), 0.5 + 0.5 * rough);
    col = mix3(col, hex('#9A8A73'), scale * 0.5);
    col = mix3(col, hex('#3F342B'), (1 - scale) * smooth(0.55, 0.75, rv) * 0.4);
    col = mix3(col, hex('#8E8C6D'), smooth(0.4, 0.7, N.fbm(u * 3, v * 5, 3, 5, 3)) * 0.35);
    o.a = col;
    o.r = 0.85 + 0.05 * fibre;
  }, { normalStrength: 1.0, aoScale: 6 });
}

// ---------------------------------------------------------------- palm frond leaflet (u along leaflet, v across)
{
  const N = makeNoise(97);
  run('frond', 512, 256, (u, v, o) => {
    const vein = Math.pow(Math.abs(Math.sin(v * Math.PI * 14)), 8);
    const mid = smooth(0.06, 0.0, Math.abs(v - 0.5));
    const age = N.fbm(u * 4, v * 4, 4, 4, 3);
    const dry = smooth(0.7, 1.0, u + age * 0.15);
    const spots = smooth(0.15, 0.02, N.worley(u * 24, v * 12, 24, 12).f1) * (N.hash(Math.floor(u * 24), Math.floor(v * 12), 24, 12, 3) > 0.8 ? 1 : 0);
    o.h = mid * 0.02 + vein * 0.004 + age * 0.003;
    let col = mix3(hex('#4E7B2E'), hex('#79953A'), 0.5 + 0.5 * age);
    col = mix3(col, hex('#3B6224'), vein * 0.5);
    col = mix3(col, hex('#8A9A3C'), mid * 0.6);
    col = mix3(col, hex('#A88A3E'), dry * 0.8);
    col = mix3(col, hex('#7F6A2C'), spots * 0.6);
    o.a = col;
    o.r = 0.48 + 0.2 * dry + 0.1 * vein;
  }, { normalStrength: 0.8, aoScale: 4 });
}

// ---------------------------------------------------------------- water detail normal (tileable) + foam + noise + smoke + moon
{
  const N = makeNoise(101);
  if (!only.length || only.includes('water')) {
    const w = 512, h = 512;
    const { normalFromHeight } = await import('./lib/image.mjs');
    const field = (kmin, kmax, count, pw, seedOff) => {
      const M = makeNoise(101 + seedOff);
      const hgt = new Float32Array(w * h);
      const waves = [];
      for (let i = 0; i < count; i++) {
        const k = kmin + Math.floor(M.rng() * (kmax - kmin + 1));
        const a = M.rng() * Math.PI * 2;
        let kx = Math.round(Math.cos(a) * k), ky = Math.round(Math.sin(a) * k);
        if (kx === 0 && ky === 0) kx = 1;
        const kk = Math.hypot(kx, ky);
        waves.push({ kx, ky, amp: Math.pow(kk, -pw) * (0.5 + M.rng()), ph: M.rng() * 6.28, sharp: 0.3 + M.rng() * 0.5 });
      }
      let maxA = 0;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        const u = x / w, v = y / h; let s = 0;
        for (const wv of waves) { const ph = (wv.kx * u + wv.ky * v) * Math.PI * 2 + wv.ph; s += (Math.sin(ph) - wv.sharp * 0.5 * Math.sin(2 * ph)) * wv.amp; }
        s += M.fbm(u * 30, v * 30, 30, 30, 3) * 0.02;
        hgt[y * w + x] = s; if (Math.abs(s) > maxA) maxA = Math.abs(s);
      }
      for (let i = 0; i < w * h; i++) hgt[i] = hgt[i] / maxA * 0.05;
      return hgt;
    };
    writePNG(path.join(OUT, 'waternormal.png'), w, h, normalFromHeight(field(2, 18, 90, 1.6, 0), w, h, 1.2));
    writePNG(path.join(OUT, 'ripple.png'), w, h, normalFromHeight(field(6, 44, 120, 1.4, 7), w, h, 0.9));
    console.log('waternormal, ripple');
    // foam and generic noise
    const foam = new Uint8Array(w * h * 4), noise = new Uint8Array(w * h * 4);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const u = x / w, v = y / h;
      const c1 = N.worley(u * 10, v * 10, 10, 10), c2 = N.worley(u * 24 + 3, v * 24, 24, 24), c3 = N.worley(u * 50 + 7, v * 50, 50, 50);
      const web = smooth(0.0, 0.35, c1.f2 - c1.f1) * 0.25 + smooth(0.0, 0.3, c2.f2 - c2.f1) * 0.25 + smooth(0.0, 0.2, c3.f2 - c3.f1) * 0.2;
      const f = N.fbm(u * 6, v * 6, 6, 6, 5, 2.2, 0.55) * 0.5 + 0.5;
      const f2 = N.fbm(u * 20 + 3, v * 20, 20, 20, 3) * 0.5 + 0.5;
      const streak = N.fbm(u * 3 + 1, v * 40, 3, 40, 2) * 0.5 + 0.5;
      const foamV = clamp(f * 1.1 + f2 * 0.35 - web * 0.55 + streak * 0.2 - 0.45);
      const i = (y * w + x) * 4;
      foam[i] = Math.round(foamV * 255); foam[i + 1] = Math.round(clamp(f) * 255); foam[i + 2] = Math.round(clamp(smooth(0.35, 0.65, f)) * 255); foam[i + 3] = 255;
      noise[i] = Math.round(clamp(N.fbm(u * 4, v * 4, 4, 4, 5) * 0.5 + 0.5) * 255);
      noise[i + 1] = Math.round(clamp(N.fbm(u * 8 + 3, v * 8 + 1, 8, 8, 5) * 0.5 + 0.5) * 255);
      noise[i + 2] = Math.round(clamp(c2.f1) * 255);
      noise[i + 3] = Math.round(clamp(N.fbm(u * 16 + 9, v * 16 + 4, 16, 16, 4) * 0.5 + 0.5) * 255);
    }
    writePNG(path.join(OUT, 'foam.png'), w, h, foam);
    writePNG(path.join(OUT, 'noise.png'), w, h, noise);
    console.log('foam, noise');
  }
  if (!only.length || only.includes('sprites')) {
    const s = 256, smoke = new Uint8Array(s * s * 4);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const u = x / s - 0.5, v = y / s - 0.5;
      const r = Math.hypot(u, v) * 2;
      const n = N.fbm(u * 6 + 3, v * 6 + 3, 8, 8, 4) * 0.5 + 0.5;
      const a = clamp((1 - smooth(0.2, 1.0, r + (n - 0.5) * 0.5)) * (0.4 + 0.6 * n));
      const i = (y * s + x) * 4;
      smoke[i] = smoke[i + 1] = smoke[i + 2] = 255; smoke[i + 3] = Math.round(a * 255);
    }
    writePNG(path.join(OUT, 'smoke.png'), s, s, smoke);
    const m = 512, moon = new Uint8Array(m * m * 4);
    const M = makeNoise(7);
    for (let y = 0; y < m; y++) for (let x = 0; x < m; x++) {
      const u = x / m, v = y / m;
      const maria = smooth(0.05, 0.35, M.fbm(u * 3, v * 3, 3, 3, 4));
      let crat = 0;
      for (const sc of [6, 14, 30, 70]) { const c = M.worley(u * sc, v * sc, sc, sc); const rim = smooth(0.3, 0.2, c.f1) * (1 - smooth(0.2, 0.1, c.f1)); const bowl = smooth(0.2, 0.05, c.f1); crat += (rim * 0.6 - bowl * 0.4) * (M.hash(Math.floor(u * sc), Math.floor(v * sc), sc, sc, 5) > 0.55 ? 1 : 0) / Math.sqrt(sc / 6); }
      const g = clamp(0.62 - maria * 0.3 + crat * 0.35 + M.fbm(u * 40, v * 40, 40, 40, 3) * 0.05);
      const i = (y * m + x) * 4;
      moon[i] = Math.round(g * 255); moon[i + 1] = Math.round(g * 250); moon[i + 2] = Math.round(g * 240); moon[i + 3] = 255;
    }
    writePNG(path.join(OUT, 'moon.png'), m, m, moon);
    console.log('smoke, moon');
  }
}

// ---------------------------------------------------------------- alpha cards: palm frond and scrub leaf cluster (RGBA PNG)
{
  const N = makeNoise(131);
  if (!only.length || only.includes('cards')) {
    // frond card: rachis along +u from the base at u=0, leaflets fanning out to both sides, tapered, drooping toward the tip
    const w = 1024, h = 512, img = new Uint8Array(w * h * 4);
    const put = (x, y, r, g, b, a) => { if (x < 0 || y < 0 || x >= w || y >= h) return; const i = (y * w + x) * 4; const na = Math.min(255, img[i + 3] + a * 255); const t = a; img[i] = Math.round(img[i] * (1 - t) + r * 255 * t); img[i + 1] = Math.round(img[i + 1] * (1 - t) + g * 255 * t); img[i + 2] = Math.round(img[i + 2] * (1 - t) + b * 255 * t); img[i + 3] = Math.round(na); };
    const stroke = (x0, y0, x1, y1, w0, w1, col, dark) => {
      const len = Math.hypot(x1 - x0, y1 - y0); const steps = Math.ceil(len * 1.5);
      for (let i = 0; i <= steps; i++) { const t = i / steps; const cx = x0 + (x1 - x0) * t, cy = y0 + (y1 - y0) * t; const ww = w0 + (w1 - w0) * t;
        for (let dy = -ww - 1; dy <= ww + 1; dy++) for (let dx = -ww - 1; dx <= ww + 1; dx++) { const d = Math.hypot(dx, dy); if (d > ww + 0.8) continue; const a = clamp(ww + 0.8 - d); const sh = 0.7 + 0.3 * (1 - Math.abs(dy) / (ww + 0.01)) - dark * t; put(Math.round(cx + dx), Math.round(cy + dy), col[0] * sh, col[1] * sh, col[2] * sh, a); } }
    };
    const R = makeNoise(5);
    const green = (k) => mix3(hex('#4C7A2A'), hex('#8FA73A'), k);
    // rachis
    stroke(4, h / 2, w - 8, h / 2 + 22, 7, 2, hex('#7C6A3E'), 0.1);
    const nL = 42;
    for (let i = 0; i < nL; i++) {
      const t = (i + 0.5) / nL; const bx = 8 + t * (w - 40), by = h / 2 + t * 22;
      const len = (0.35 + 0.65 * Math.sin(Math.PI * Math.pow(t, 0.75))) * 215 * (1 - 0.25 * t);
      for (const sg of [-1, 1]) {
        const ang = (0.62 - 0.35 * t + R.rng() * 0.12) * sg; const droop = (0.35 + 0.5 * t) * sg;
        const ex = bx + Math.cos(ang) * len * 0.9, ey = by + Math.sin(ang) * len + droop * len * 0.3;
        const k = R.rng(); stroke(bx, by, ex, ey, 6 - 2 * t, 1.2, green(k * 0.6 + 0.2), 0.25);
      }
    }
    // dead tip and a couple of torn leaflets
    writePNG(path.join(OUT, 'frondcard.png'), w, h, img);
    // leaf cluster card: overlapping small leaves
    const cw = 512, ch = 512, cimg = new Uint8Array(cw * ch * 4);
    const cput = (x, y, r, g, b, a) => { if (x < 0 || y < 0 || x >= cw || y >= ch) return; const i = (y * cw + x) * 4; const na = Math.min(255, cimg[i + 3] + a * 255); const t = a; cimg[i] = Math.round(cimg[i] * (1 - t) + r * 255 * t); cimg[i + 1] = Math.round(cimg[i + 1] * (1 - t) + g * 255 * t); cimg[i + 2] = Math.round(cimg[i + 2] * (1 - t) + b * 255 * t); cimg[i + 3] = Math.round(na); };
    const leaf = (cx, cy, L, W, ang, col) => { const Rm = Math.max(L, W) + 1; for (let py = -Rm; py <= Rm; py++) for (let px = -Rm; px <= Rm; px++) { const x = px * Math.cos(-ang) - py * Math.sin(-ang), y = px * Math.sin(-ang) + py * Math.cos(-ang); const e = (x * x) / (W * W) + (y * y) / (L * L); if (e > 1) continue; const a = clamp((1 - e) * 4); const sh = 0.75 + 0.25 * (0.5 + 0.5 * y / L); cput(Math.round(cx + px), Math.round(cy + py), col[0] * sh, col[1] * sh, col[2] * sh, a); } };
    for (let i = 0; i < 260; i++) { const a = R.rng() * 6.28, r = Math.sqrt(R.rng()) * 200; const cx = 256 + Math.cos(a) * r, cy = 256 + Math.sin(a) * r * 0.8; const k = R.rng(); leaf(cx, cy, 14 + R.rng() * 12, 6 + R.rng() * 5, R.rng() * 6.28, mix3(hex('#556B3A'), hex('#9AA65A'), k * 0.7 + (1 - r / 200) * 0.3)); }
    writePNG(path.join(OUT, 'leafcard.png'), cw, ch, cimg);
    console.log('frondcard, leafcard');
  }
}
console.log('done');
