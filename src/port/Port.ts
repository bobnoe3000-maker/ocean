import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rng } from '../core/Rng';
import { Heightfield, LAYOUT, vistaToWorld } from '../terrain/Heightfield';
import { loadSet, loadTex } from '../materials/Textures';
import { pbr, tube, box, makeDepthMaterial } from '../materials/Helpers';
import { injectWorld, W } from '../core/WorldUniforms';
import { Extra } from '../world/World';
import { SceneSpec } from '../core/Spec';
import { Lighting } from '../lighting/Lighting';

// Geometry builder: flat-shaded quads/tris with uv and vertex colour, merged per material.
class GB {
  pos: number[] = []; nrm: number[] = []; uv: number[] = []; col: number[] = []; idx: number[] = [];
  quad(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, d: THREE.Vector3, uvs: number[][], color: number[] = [1, 1, 1]): void {
    const n = b.clone().sub(a).cross(d.clone().sub(a)).normalize(); const base = this.pos.length / 3;
    for (const [i, p] of [a, b, c, d].entries()) { this.pos.push(p.x, p.y, p.z); this.nrm.push(n.x, n.y, n.z); this.uv.push(uvs[i][0], uvs[i][1]); this.col.push(color[0], color[1], color[2]); }
    this.idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  tri(a: THREE.Vector3, b: THREE.Vector3, c: THREE.Vector3, uvs: number[][], color: number[] = [1, 1, 1]): void {
    const n = b.clone().sub(a).cross(c.clone().sub(a)).normalize(); const base = this.pos.length / 3;
    for (const [i, p] of [a, b, c].entries()) { this.pos.push(p.x, p.y, p.z); this.nrm.push(n.x, n.y, n.z); this.uv.push(uvs[i][0], uvs[i][1]); this.col.push(color[0], color[1], color[2]); }
    this.idx.push(base, base + 1, base + 2);
  }
  geo(g: THREE.BufferGeometry, color: number[] = [1, 1, 1]): void {
    const ng = g.index ? g.toNonIndexed() : g; const p = ng.attributes.position, n = ng.attributes.normal, u = ng.attributes.uv; const base = this.pos.length / 3;
    for (let i = 0; i < p.count; i++) { this.pos.push(p.getX(i), p.getY(i), p.getZ(i)); this.nrm.push(n.getX(i), n.getY(i), n.getZ(i)); this.uv.push(u ? u.getX(i) : 0, u ? u.getY(i) : 0); this.col.push(color[0], color[1], color[2]); this.idx.push(base + i); }
  }
  build(): THREE.BufferGeometry | null {
    if (!this.pos.length) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3)); g.setIndex(this.idx);
    return g;
  }
}
const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const hexc = (h: number) => { const c = new THREE.Color(h); return [c.r, c.g, c.b]; };

export async function buildPort(hf: Heightfield, seed: number): Promise<Extra> {
  const group = new THREE.Group(); group.name = 'port';
  const rng = new Rng(seed * 101 + 9);
  const [plasterSet, tilesSet, planksSet, stoneSet, ropeSet, canvasSet, noise, smokeTex] = await Promise.all([
    loadSet('plaster'), loadSet('tiles'), loadSet('planks'), loadSet('stone'), loadSet('rope'), loadSet('canvas'), loadTex('noise'), loadTex('smoke.png', { repeat: false }),
  ]);
  const plaster = new GB(), tiles = new GB(), planks = new GB(), stone = new GB(), iron = new GB(), glass = new GB(), rope = new GB(), cloth = new GB(), paint = new GB();
  const toW = (u: number, w: number) => { const [x, z] = vistaToWorld(u, w); return V(x, 0, z); };
  const bayPt = (deg: number, r: number) => { const a = deg * Math.PI / 180; return [LAYOUT.bayC[0] + Math.cos(a) * r, LAYOUT.bayC[1] + Math.sin(a) * r] as [number, number]; };
  const lights: THREE.PointLight[] = [];
  const emitters: THREE.Vector3[] = [];
  const windows: number[] = [];

  // ------------------------------------------------------------ quay wall + paving (arc at the back of the bay)
  {
    const R = 78, R2 = 87, y0 = -4, y1 = 1.7;
    let prev: [number, number] | null = null;
    for (let d = 32; d <= 148; d += 3) {
      const cur = bayPt(d, R); const out = bayPt(d, R2);
      if (prev) {
        const a = toW(prev[0], prev[1]), b = toW(cur[0], cur[1]); const ua = d / 3;
        stone.quad(a.clone().setY(y0), b.clone().setY(y0), b.clone().setY(0.55), a.clone().setY(0.55), [[ua, 0], [ua + 1.3, 0], [ua + 1.3, 0.9], [ua, 0.9]], [0.45, 0.5, 0.45]);
        stone.quad(a.clone().setY(0.55), b.clone().setY(0.55), b.clone().setY(y1), a.clone().setY(y1), [[ua, 0.9], [ua + 1.3, 0.9], [ua + 1.3, 1.4], [ua, 1.4]]);
        const po = toW(prevOut![0], prevOut![1]), co = toW(out[0], out[1]);
        { const ea = a.clone().setY(y1).lerp(po.clone().setY(y1 + 0.35), 0.16), eb = b.clone().setY(y1).lerp(co.clone().setY(y1 + 0.35), 0.16);
          // paving mapped from world position so the stones run continuously across the arc (no radial grid or stitch seams)
          const puv = (p: THREE.Vector3): [number, number] => [(p.x * 0.94 - p.z * 0.34) / 5.2, (p.x * 0.34 + p.z * 0.94) / 5.2]; // big slabs from 60 m
          const pt = 0.86 + rng.range(0, 0.16); const pTint: [number, number, number] = [0.88 * pt, 0.87 * pt, 0.84 * pt]; // per-run tint breaks the stamp
          const cO = co.clone().setY(y1 + 0.47), pO = po.clone().setY(y1 + 0.47); // lifted clear of the terrain shelf (no ghosting)
          stone.quad(a.clone().setY(y1), b.clone().setY(y1), eb, ea, [puv(a), puv(b), puv(eb), puv(ea)], [0.5, 0.52, 0.5]);
          stone.quad(ea, eb, cO, pO, [puv(ea), puv(eb), puv(cO), puv(pO)], pTint); }
        // kerb
        stone.quad(a.clone().setY(y1), b.clone().setY(y1), b.clone().setY(y1 + 0.12).addScaledVector(co.clone().sub(b).normalize(), 0.3), a.clone().setY(y1 + 0.12).addScaledVector(po.clone().sub(a).normalize(), 0.3), [[ua, 0.9], [ua + 1.3, 0.9], [ua + 1.3, 1.0], [ua, 1.0]]);
      }
      prev = cur; var prevOut: [number, number] | null = out;
    }
    // bollards and lantern posts along the quay
    for (let d = 40; d <= 140; d += 10) {
      const p = bayPt(d, R + 0.9); const wp = toW(p[0], p[1]);
      iron.geo(new THREE.CylinderGeometry(0.16, 0.2, 0.7, 8).translate(wp.x, y1 + 0.35, wp.z));
      iron.geo(new THREE.SphereGeometry(0.2, 8, 6).translate(wp.x, y1 + 0.75, wp.z));
      if ((d - 40) % 20 === 0) {
        const lp = bayPt(d, R + 5.5); const lw = toW(lp[0], lp[1]);
        iron.geo(new THREE.CylinderGeometry(0.07, 0.12, 3.6, 7).translate(lw.x, y1 + 1.8, lw.z));
        iron.geo(new THREE.CylinderGeometry(0.22, 0.26, 0.25, 8).translate(lw.x, y1 + 0.12, lw.z));
        lantern(iron, glass, paint, V(lw.x, y1 + 3.55, lw.z), V(lw.x + 0.55, y1 + 3.3, lw.z));
        if (lights.length < 4) { const l = new THREE.PointLight(0xffb45a, 0, 26, 1.7); l.position.set(lw.x + 0.45, y1 + 3.2, lw.z); lights.push(l); }
      }
    }
    // cargo on the quay: barrels and crates in stacks, a fishing net heap, a hand cart
    for (const [deg, n] of [[44, 6], [70, 4], [108, 5], [126, 3]] as [number, number][]) {
      for (let i = 0; i < n; i++) { const p = bayPt(deg + rng.range(-1.5, 1.5), R + 3 + rng.range(0, 3)); if (hf.height(p[0], p[1]) < 2.0 || hf.coastSD(p[0], p[1]) < 6) continue; /* solid quay ground only */ const wp = toW(p[0], p[1]); wp.y = y1 + 0.35;
        if (rng.next() < 0.5) barrel(planks, iron, wp, rng); else { const s = rng.range(0.7, 1.1); planks.geo(box(s, s * 0.8, s, 0, s * 0.4, 0, 1.2).rotateY(rng.range(0, 1.5)).translate(wp.x, wp.y, wp.z), [0.85, 0.8, 0.7]); } }
    }
    for (const deg of [58, 98]) { const p = bayPt(deg, R + 2.2); if (hf.height(p[0], p[1]) < 2.0 || hf.coastSD(p[0], p[1]) < 6) continue; const wp = toW(p[0], p[1]); rope.geo(new THREE.SphereGeometry(0.9, 10, 6).scale(1.4, 0.35, 1.0).translate(wp.x, y1 + 0.5, wp.z)); rope.geo(new THREE.SphereGeometry(0.6, 8, 5).scale(1.2, 0.3, 0.9).translate(wp.x + 1.1, y1 + 0.45, wp.z + 0.4)); }
    { const p = bayPt(38, R + 6); const wp = toW(p[0], p[1]); planks.geo(box(1.2, 0.5, 2.0, wp.x, y1 + 0.95, wp.z, 1), [0.82, 0.72, 0.56]); iron.geo(new THREE.CylinderGeometry(0.5, 0.5, 0.12, 12).rotateZ(Math.PI / 2).translate(wp.x - 0.7, y1 + 0.85, wp.z)); iron.geo(new THREE.CylinderGeometry(0.5, 0.5, 0.12, 12).rotateZ(Math.PI / 2).translate(wp.x + 0.7, y1 + 0.85, wp.z)); }
    // moored rowing boats along the quay
    for (const d of [58, 96, 124]) {
      const p = bayPt(d, R - 3.2); const wp = toW(p[0], p[1]); const ang = (d + 90) * Math.PI / 180 + rng.range(-0.2, 0.2);
      smallBoat(planks, wp, ang + Math.PI / 4, rng);
      const bp = bayPt(d, R + 0.9); const bw = toW(bp[0], bp[1]);
      rope.geo(tube(V(bw.x, y1 + 0.6, bw.z), V(wp.x, 0.5, wp.z), 0.03, 0.03, 4, 6));
    }
  }

  // ------------------------------------------------------------ dock
  {
    const root = bayPt(112, 78.5); const dir = new THREE.Vector2(-Math.cos(112 * Math.PI / 180), -Math.sin(112 * Math.PI / 180)); // toward the bay centre
    const len = 34, wid = 4.4, y = 1.35;
    const side = new THREE.Vector2(-dir.y, dir.x);
    const P = (t: number, s: number, yy: number) => { const u = root[0] + dir.x * t + side.x * s, w = root[1] + dir.y * t + side.y * s; const v = toW(u, w); v.y = yy; return v; };
    // deck planks (crosswise), gaps included via uv
    // deck: crosswise planks as one strip, plank gaps come from the texture; a few missing/raised boards for wear
    planks.quad(P(0, -wid / 2, y), P(len, -wid / 2, y), P(len, wid / 2, y), P(0, wid / 2, y), [[0, 0], [0, len / 1.5], [wid / 1.5, len / 1.5], [wid / 1.5, 0]], [1.05, 1.02, 0.95]);
    for (let t = 2; t < len; t += rng.range(3, 6)) { planks.quad(P(t, -wid / 2 + 0.2, y + 0.03), P(t + 0.28, -wid / 2 + 0.2, y + 0.03), P(t + 0.28, wid / 2 - 0.2, y + 0.03), P(t, wid / 2 - 0.2, y + 0.03), [[0, 0], [0.19, 0], [0.19, wid / 1.5], [0, wid / 1.5]], [0.8, 0.78, 0.72]); }
    // stringers and piles
    for (const s of [-wid / 2 + 0.3, wid / 2 - 0.3]) {
      planks.geo(tube(P(0, s, y - 0.2), P(len, s, y - 0.2), 0.16, 0.16, 5, 6), [0.7, 0.7, 0.7]);
      for (let t = 1; t < len; t += 3.5) { const top = P(t, s + (s < 0 ? -0.1 : 0.1), y + 0.5), bot = P(t, s + (s < 0 ? -0.1 : 0.1), -6); planks.geo(tube(bot, top, 0.24, 0.2, 7, 4), [0.55, 0.5, 0.45]); }
    }
    // T head: a cross piece at the end so a boat can lie alongside
    planks.quad(P(len - 0.5, -wid / 2 - 5, y), P(len + 3.5, -wid / 2 - 5, y), P(len + 3.5, wid / 2 + 5, y), P(len - 0.5, wid / 2 + 5, y), [[0, 0], [0, 2.7], [wid / 1.5 + 6.6, 2.7], [wid / 1.5 + 6.6, 0]], [1.05, 1.02, 0.95]);
    for (const sPos of [-wid / 2 - 4.6, wid / 2 + 4.6]) for (const tt of [len + 0.2, len + 3.0]) planks.geo(tube(P(tt, sPos, -6), P(tt, sPos, y + 0.5), 0.24, 0.2, 7, 4), [0.55, 0.5, 0.45]);
    // cross braces near the end, bollards, lantern, barrels, crates, rope coils
    iron.geo(new THREE.CylinderGeometry(0.14, 0.18, 0.6, 8).translate(P(len - 1, 1.4, y + 0.3).x, y + 0.3, P(len - 1, 1.4, y + 0.3).z));
    iron.geo(new THREE.CylinderGeometry(0.14, 0.18, 0.6, 8).translate(P(len - 1, -1.4, y + 0.3).x, y + 0.3, P(len - 1, -1.4, y + 0.3).z));
    { const lp = P(len - 0.6, 0, y); iron.geo(new THREE.CylinderGeometry(0.06, 0.09, 3.0, 6).translate(lp.x, y + 1.5, lp.z)); lantern(iron, glass, paint, null, V(lp.x, y + 3.2, lp.z));
      const l = new THREE.PointLight(0xffb45a, 0, 24, 1.7); l.position.set(lp.x, y + 3.0, lp.z); lights.push(l); }
    for (let i = 0; i < 5; i++) { const bp = P(16 + i * 1.1 + rng.range(-0.2, 0.2), -1.2 + (i % 2) * 0.9, y); barrel(planks, iron, bp, rng); }
    for (let i = 0; i < 4; i++) { const cp = P(9 + i * 1.3, 1.1 - (i % 2) * 0.5, y); const s = rng.range(0.7, 1.0); planks.geo(box(s, s * 0.8, s, 0, s * 0.4, 0, 1.2).rotateY(rng.range(-0.3, 0.3)).translate(cp.x, y, cp.z), [0.85, 0.8, 0.7]); }
    { const cp = P(15, -1.3, y); rope.geo(new THREE.TorusGeometry(0.4, 0.12, 6, 14).rotateX(Math.PI / 2).translate(cp.x, y + 0.12, cp.z)); rope.geo(new THREE.TorusGeometry(0.32, 0.1, 6, 14).rotateX(Math.PI / 2).translate(cp.x + 0.1, y + 0.3, cp.z)); }
    // a boat moored at the dock end
    { const bp = P(len + 3.5, -1.5, 0); smallBoat(planks, bp, Math.atan2(dir.x, dir.y) + 0.4, rng); rope.geo(tube(P(len - 1, -1.4, y + 0.5), V(bp.x, 0.5, bp.z), 0.03, 0.03, 4, 5)); }
  }

  // ------------------------------------------------------------ buildings: dense rows along the arc with lanes between blocks
  const tints = [0xf4efe2, 0xf1e6cc, 0xdcae62, 0xd8a394, 0xb9c6cc, 0xefe3cf, 0xe8d3a8, 0xc9a58a, 0xf0d9b5];
  const rows: { r: number; d0: number; d1: number; floorsMin: number; floorsMax: number; depth: [number, number] }[] = [
    { r: 93.5, d0: 40, d1: 140, floorsMin: 2, floorsMax: 3, depth: [7, 9] },
    { r: 106, d0: 44, d1: 136, floorsMin: 1, floorsMax: 3, depth: [6, 8] },
    { r: 118.5, d0: 50, d1: 130, floorsMin: 1, floorsMax: 2, depth: [5.5, 7.5] },
    { r: 130, d0: 58, d1: 122, floorsMin: 1, floorsMax: 2, depth: [5, 7] },
  ];
  for (const row of rows) {
    let d = row.d0 + rng.range(0, 3);
    let inBlock = 0;
    while (d < row.d1) {
      const w = rng.range(5, 9.5); const dd = (w / (row.r * Math.PI / 180)) ; // degrees spanned by this frontage
      const r = row.r + rng.range(-0.8, 0.8);
      const [u, ww] = bayPt(d + dd / 2, r); const c = toW(u, ww);
      const toCentre = toW(LAYOUT.bayC[0], LAYOUT.bayC[1]).sub(c); const rot = Math.atan2(toCentre.x, toCentre.z) + rng.range(-0.03, 0.03);
      const floors = row.floorsMin + rng.int(row.floorsMax - row.floorsMin + 1);
      house(plaster, tiles, planks, glass, paint, iron, stone, hf, c, rot, w, rng.range(row.depth[0], row.depth[1]), floors, hexc(rng.pick(tints)), rng, emitters, windows);
      inBlock++;
      d += dd + 0.15;
      if (inBlock >= 2 + rng.int(3)) { d += (2.2 + rng.range(0, 2)) / (row.r * Math.PI / 180); inBlock = 0; } // lane
    }
  }
  // quay warehouse: long, low, few windows, big doors, at the west end of the quay
  {
    const [u, w] = bayPt(36, 95); const c = toW(u, w); const toCentre = toW(LAYOUT.bayC[0], LAYOUT.bayC[1]).sub(c); const rot = Math.atan2(toCentre.x, toCentre.z);
    house(plaster, tiles, planks, glass, paint, iron, stone, hf, c, rot, 16, 9, 2, hexc(0xd9cbb0), rng, emitters, windows);
  }
  // campanile behind the town: square tower, string courses, arched belfry openings, tiled pyramid, cross
  {
    const [u, w] = bayPt(92, 140); const c = toW(u, w); const gy = hf.heightWorld(c.x, c.z); const rot = 0.3;
    const T = (x: number, y: number, z: number) => { const p = V(x, y, z); p.applyAxisAngle(V(0, 1, 0), rot); return p.add(V(c.x, gy, c.z)); };
    const W_ = 5.2, H = 15;
    for (let f = 0; f < 4; f++) {
      const a = f * Math.PI / 2; const nx = Math.cos(a), nz = Math.sin(a); const tx = -nz, tz = nx;
      const P = (t: number, y: number, inset = 0) => T(nx * (W_ / 2 - inset) + tx * t, y, nz * (W_ / 2 - inset) + tz * t);
      // wall with a belfry opening cut out between y 11 and 13.8
      plaster.quad(P(-W_ / 2, 0), P(W_ / 2, 0), P(W_ / 2, 10.6), P(-W_ / 2, 10.6), [[0, 0], [W_ / 6, 0], [W_ / 6, 0.7], [0, 0.7]], hexc(0xefe6d3));
      plaster.quad(P(-W_ / 2, 10.6), P(-1.0, 10.6), P(-1.0, 13.8), P(-W_ / 2, 13.8), [[0, 0.7], [0.3, 0.7], [0.3, 0.92], [0, 0.92]], hexc(0xefe6d3));
      plaster.quad(P(1.0, 10.6), P(W_ / 2, 10.6), P(W_ / 2, 13.8), P(1.0, 13.8), [[0.5, 0.7], [W_ / 6, 0.7], [W_ / 6, 0.92], [0.5, 0.92]], hexc(0xefe6d3));
      plaster.quad(P(-W_ / 2, 13.8), P(W_ / 2, 13.8), P(W_ / 2, H), P(-W_ / 2, H), [[0, 0.92], [W_ / 6, 0.92], [W_ / 6, 1.0], [0, 1.0]], hexc(0xefe6d3));
      // dark interior behind the opening, and reveal sides
      plaster.quad(P(-1.0, 10.6, 1.6), P(1.0, 10.6, 1.6), P(1.0, 13.8, 1.6), P(-1.0, 13.8, 1.6), [[0, 0.5], [0.3, 0.5], [0.3, 0.8], [0, 0.8]], [0.12, 0.1, 0.09]);
      plaster.quad(P(-1.0, 10.6), P(-1.0, 13.8), P(-1.0, 13.8, 1.6), P(-1.0, 10.6, 1.6), [[0, 0.5], [0.3, 0.5], [0.3, 0.8], [0, 0.8]], hexc(0xd8cfbd));
      plaster.quad(P(1.0, 10.6, 1.6), P(1.0, 13.8, 1.6), P(1.0, 13.8), P(1.0, 10.6), [[0, 0.5], [0.3, 0.5], [0.3, 0.8], [0, 0.8]], hexc(0xd8cfbd));
      // arch head and string courses
      plaster.geo(new THREE.CylinderGeometry(1.0, 1.0, 0.5, 12, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateY(a).translate(0, 13.8, 0).applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, 0)).translate(nx * (W_ / 2 - 0.25), 0, nz * (W_ / 2 - 0.25)).rotateY(rot).translate(c.x, gy, c.z), hexc(0xd8cfbd));
      for (const yy of [5.2, 10.4]) stone.quad(P(-W_ / 2 - 0.15, yy), P(W_ / 2 + 0.15, yy), P(W_ / 2 + 0.15, yy + 0.3, -0.15), P(-W_ / 2 - 0.15, yy + 0.3, -0.15), [[0, 0], [1.5, 0], [1.5, 0.1], [0, 0.1]], [0.8, 0.78, 0.74]);
      // small window
      glass.quad(P(-0.35, 6.5, 0.2), P(0.35, 6.5, 0.2), P(0.35, 7.6, 0.2), P(-0.35, 7.6, 0.2), [[0, 0], [1, 0], [1, 1], [0, 1]], [0.9, 0.85, 0.7]);
    }
    tiles.geo(new THREE.ConeGeometry(W_ * 0.74, 4.2, 4).rotateY(Math.PI / 4 + rot).translate(c.x, gy + H + 2.1, c.z));
    iron.geo(new THREE.CylinderGeometry(0.28, 0.28, 0.5, 8).translate(0, H + 2.2, 0).rotateY(rot).translate(c.x, gy + 2.0, c.z));
    iron.geo(box(0.08, 1.6, 0.08, 0, H + 3.0, 0).rotateY(rot).translate(c.x, gy + 2, c.z)); iron.geo(box(0.7, 0.08, 0.08, 0, H + 3.4, 0).rotateY(rot).translate(c.x, gy + 2, c.z));
    // bell
    iron.geo(new THREE.CylinderGeometry(0.35, 0.5, 0.7, 10).translate(0, 12.2, 0).rotateY(rot).translate(c.x, gy, c.z));
    plaster.geo(box(W_ + 1.2, 1.2, W_ + 1.2, 0, 0.6, 0, 0.3).rotateY(rot).translate(c.x, gy - 0.3, c.z), [0.75, 0.72, 0.66]);
  }
  // ------------------------------------------------------------ mole + lighthouse
  {
    const a = toW(LAYOUT.moleFrom[0] + 6, LAYOUT.moleFrom[1] + 4), b = toW(LAYOUT.lighthouse[0], LAYOUT.lighthouse[1]);
    const dir = b.clone().sub(a).normalize(); const side = V(-dir.z, 0, dir.x); const len = a.distanceTo(b) + 4;
    const P = (t: number, s: number, y: number) => a.clone().addScaledVector(dir, t).addScaledVector(side, s).setY(y);
    for (let t = 0; t < len; t += 6) {
      const t1 = Math.min(len, t + 6); const uu = t / 4, uu1 = t1 / 4;
      stone.quad(P(t, -3, 2.0), P(t1, -3, 2.0), P(t1, 3, 2.0), P(t, 3, 2.0), [[uu * 2.5, 0.5], [uu1 * 2.5, 0.5], [uu1 * 2.5, 4.2], [uu * 2.5, 4.2]], [0.85, 0.85, 0.83]);
      stone.quad(P(t, -3, 2.0), P(t, -4.2, 0.4), P(t1, -4.2, 0.4), P(t1, -3, 2.0), [[uu, 1.6], [uu, 1.1], [uu1, 1.1], [uu1, 1.6]]);
      stone.quad(P(t, -4.2, 0.4), P(t, -7.5, -4), P(t1, -7.5, -4), P(t1, -4.2, 0.4), [[uu, 1.1], [uu, 0], [uu1, 0], [uu1, 1.1]], [0.5, 0.55, 0.5]);
      stone.quad(P(t, 3, 2.0), P(t1, 3, 2.0), P(t1, 4.2, 0.4), P(t, 4.2, 0.4), [[uu, 1.6], [uu1, 1.6], [uu1, 1.1], [uu, 1.1]]);
      stone.quad(P(t, 4.2, 0.4), P(t1, 4.2, 0.4), P(t1, 7.5, -4), P(t, 7.5, -4), [[uu, 1.1], [uu1, 1.1], [uu1, 0], [uu, 0]], [0.5, 0.55, 0.5]);
      for (let k = 0; k < 5; k++) { const sd = rng.next() > 0.5 ? 1 : -1; const bp = P(t + rng.range(0, 6), sd * rng.range(3.6, 6.5), rng.range(-0.6, 1.2)); const r = rng.range(0.6, 1.4); { const rg = new THREE.IcosahedronGeometry(r, 1); const pa = rg.attributes.position as THREE.BufferAttribute; for (let vi = 0; vi < pa.count; vi++) { const f = 0.75 + rng.next() * 0.5; pa.setXYZ(vi, pa.getX(vi) * f, pa.getY(vi) * (0.5 + rng.next() * 0.3), pa.getZ(vi) * f); } rg.computeVertexNormals(); const wetc = bp.y < 0.9 ? [0.42, 0.45, 0.42] : [0.72, 0.72, 0.7]; stone.geo(rg.rotateY(rng.range(0, 3)).translate(bp.x, bp.y, bp.z), wetc); } }
      if (t + 6 >= len) stone.quad(P(t1, -3, 2.0), P(t1, -7.5, -4), P(t1, 7.5, -4), P(t1, 3, 2.0), [[0, 1.6], [0, 0], [3, 0], [3, 1.6]]);
    }
    // lighthouse
    const lb = P(len - 5, 0, 2.0);
    stone.geo(new THREE.CylinderGeometry(4.2, 4.6, 2.2, 14).translate(lb.x, 3.1, lb.z), [0.8, 0.8, 0.78]);
    plaster.geo(new THREE.CylinderGeometry(2.0, 2.7, 13, 16, 1, true).translate(lb.x, 4.2 + 6.5, lb.z), hexc(0xf6f1e6));
    paint.geo(new THREE.CylinderGeometry(2.32, 2.5, 3.0, 16, 1, true).translate(lb.x, 4.2 + 6.2, lb.z), hexc(0xb6302c));
    iron.geo(new THREE.TorusGeometry(2.4, 0.08, 6, 24).rotateX(Math.PI / 2).translate(lb.x, 17.5, lb.z));
    plaster.geo(new THREE.CylinderGeometry(2.4, 2.4, 0.4, 16).translate(lb.x, 17.2, lb.z), hexc(0xf6f1e6));
    for (let i = 0; i < 12; i++) { const ang = i / 12 * Math.PI * 2; iron.geo(new THREE.CylinderGeometry(0.03, 0.03, 1.0, 4).translate(lb.x + Math.cos(ang) * 2.4, 18.0, lb.z + Math.sin(ang) * 2.4)); }
    glass.geo(new THREE.CylinderGeometry(1.5, 1.5, 2.4, 12, 1, true).translate(lb.x, 18.6, lb.z));
    for (let i = 0; i < 8; i++) { const ang = i / 8 * Math.PI * 2; iron.geo(new THREE.CylinderGeometry(0.05, 0.05, 2.4, 4).translate(lb.x + Math.cos(ang) * 1.5, 18.6, lb.z + Math.sin(ang) * 1.5)); }
    paint.geo(new THREE.SphereGeometry(1.7, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(lb.x, 19.8, lb.z), hexc(0x4f7a6a));
    const l = new THREE.PointLight(0xfff0c0, 0, 64, 2.0); l.position.set(lb.x, 18.7, lb.z); lights.push(l); // a lamp on the gallery, not a flood over the basin: the halo carries the glow
    // flag pole on the gallery
    iron.geo(new THREE.CylinderGeometry(0.04, 0.05, 3.5, 4).translate(lb.x + 2.3, 19.2, lb.z));
    flag(cloth, V(lb.x + 2.3, 20.6, lb.z), 1.5, 1.0, hexc(0xb3282d));
  }

  // (the laundry line between the quay houses was dropped: from the vista camera it crossed a roof and read as a stray bracket)

  // ------------------------------------------------------------ materials + meshes
  const plasterMat = pbr(plasterSet, { vertexColors: true, side: THREE.DoubleSide }); const tilesMat = pbr(tilesSet, { vertexColors: true, side: THREE.DoubleSide });
  const planksMat = pbr(planksSet, { vertexColors: true, side: THREE.DoubleSide }); const stoneMat = pbr(stoneSet, { vertexColors: true, side: THREE.DoubleSide });
  // quay stone: the flagstone module at one scale reads as a diamond grid from 60 m; blend a second, rotated, coarser sample
  injectWorld(stoneMat, { replace: [['#include <map_fragment>', /* glsl */ `
    #ifdef USE_MAP
    { vec2 uv2 = mat2(0.82, 0.57, -0.57, 0.82) * vMapUv * 0.47 + 0.31;
      vec4 sampledDiffuseColor = mix(texture2D(map, vMapUv), texture2D(map, uv2), 0.5);
      diffuseColor *= sampledDiffuseColor; }
    #endif
  `]] });
  const ropeMat = pbr(ropeSet, { vertexColors: true, color: 0x6f6050 });
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x2b2926, roughness: 0.6, metalness: 0.8, roughnessMap: noise, vertexColors: true }); injectWorld(ironMat);
  const paintMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.75, vertexColors: true, roughnessMap: noise }); injectWorld(paintMat);
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x2a3038, roughness: 0.12, metalness: 0.1, emissive: 0xffb257, emissiveIntensity: 0, vertexColors: true, transparent: true, opacity: 0.9, side: THREE.DoubleSide }); injectWorld(glassMat);
  const clothMat = pbr(canvasSet, { vertexColors: true, side: THREE.DoubleSide });
  injectWorld(clothMat, { replace: [['#include <begin_vertex>', /* glsl */ `
    vec3 transformed = vec3(position);
    #ifdef USE_UV
    { float g = uWindSpeed / 6.0; float x = uv.x; vec2 wd = normalize(uWindDir); float ph = dot(position.xz, vec2(0.3, 0.7));
      float w = sin(uTime * 6.0 - x * 7.0 + ph) * 0.10 * x * g + sin(uTime * 9.5 - x * 12.0 + ph) * 0.03 * x * g;
      transformed += vec3(wd.x, 0.0, wd.y) * (w * 0.4 + x * 0.25 * g) + vec3(-wd.y, 0.0, wd.x) * w; }
    #endif
  `]] });
  const mk = (gb: GB, mat: THREE.Material, shadow = true) => { const g = gb.build(); if (!g) return; const m = new THREE.Mesh(g, mat); m.castShadow = shadow; m.receiveShadow = true; m.frustumCulled = false; if (mat === clothMat) m.customDepthMaterial = makeDepthMaterial(clothMat); group.add(m); };
  mk(plaster, plasterMat); mk(tiles, tilesMat); mk(planks, planksMat); mk(stone, stoneMat); mk(iron, ironMat); mk(paint, paintMat); mk(glass, glassMat, false); mk(rope, ropeMat, false); mk(cloth, clothMat);
  for (const l of lights) group.add(l);
  const haloTex = smokeTex;
  const haloMat = new THREE.SpriteMaterial({ map: haloTex, color: 0xffb45a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0 });
  const halos: THREE.Sprite[] = lights.map((l, i) => { const sp = new THREE.Sprite(haloMat.clone()); sp.position.copy(l.position); const sc = i === lights.length - 1 ? 14 : 4; sp.scale.set(sc, sc, 1); group.add(sp); return sp; });
  // lighthouse beam: a long translucent wedge that sweeps
  // beam alpha falls off along its length and toward its edges (a 1D gradient in uv.y drives opacity)
  const grad = new Uint8Array(256 * 4); for (let i = 0; i < 256; i++) { const t = i / 255; const a = Math.pow(1 - t, 2.2) * 255; grad.set([255, 255, 255, Math.round(a)], i * 4); }
  const gradTex = new THREE.DataTexture(grad, 1, 256, THREE.RGBAFormat); gradTex.needsUpdate = true;
  const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff2c8, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, alphaMap: gradTex });
  const beamGeo = new THREE.CylinderGeometry(0.6, 12, 160, 14, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -80);
  const beam = new THREE.Mesh(beamGeo, beamMat); beam.position.copy(lights[lights.length - 1].position); beam.visible = false; // a flat wedge from above reads as a quad; halos carry the fog glow

  // ------------------------------------------------------------ smoke
  const smoke = makeSmoke(emitters, smokeTex); group.add(smoke.points);
  // ------------------------------------------------------------ gulls
  const gulls = makeGulls(rng); group.add(gulls.group);

  void windows;
  let night = 0; let haloBase = 0; let beamBase = 0;
  return {
    group,
    update(t) {
      smoke.update(t);
      gulls.update(t);
      lights.forEach((l, i) => { l.intensity = l.userData.base * (0.9 + 0.1 * Math.sin(t * (9 + i) + i * 2) * Math.sin(t * 5.3 + i)); });
      beam.rotation.y = t * 0.5; beamMat.opacity = beamBase; halos.forEach((h, i) => { (h.material as THREE.SpriteMaterial).opacity = haloBase * (i === halos.length - 1 ? 0.6 : 1) * (0.9 + 0.1 * Math.sin(t * 7 + i)); });
      void night;
    },
    apply(spec: SceneSpec, L: Lighting) {
      night = L.night;
      lights.forEach((l, i) => { l.userData.base = (i === lights.length - 1 ? 9 : 7) * night; });
      glassMat.emissiveIntensity = 3.2 * night * (spec.weather === 'fog' ? 0.45 : 1); // windows glow through mist, they do not blow out
      // by day the panes carry a sky-lit sheen so recessed windows never read as black voids
      if (night < 0.5) { glassMat.emissive.setRGB(0.55, 0.68, 0.85, THREE.LinearSRGBColorSpace); glassMat.emissiveIntensity = 0.28 * (1 - night * 2); } else glassMat.emissive.setHex(0xffb257);
      const fogF = spec.weather === 'fog' ? 1 : 0;
      haloBase = night * (0.12 + 0.55 * fogF); beamBase = night * (0.0015 + 0.012 * fogF);
      { const k = spec.style === 'stylized' ? 1.6 : 1; gulls.group.scale.set(k, k, k); }
      smoke.material.uniforms.uLight.value.copy(L.sunE).multiplyScalar(0.7).add(L.skyE.clone().multiplyScalar(0.6)).add(L.moonE.clone().multiplyScalar(0.5));
      void spec;
    },
  };
}

function smallBoat(planks: GB, at: THREE.Vector3, yaw: number, rng: Rng): void {
  const L = 4.6, B = 1.7, NS = 10, NQ = 4;
  const pos: THREE.Vector3[][] = [];
  for (let i = 0; i <= NS; i++) { const s = i / NS; const hb = (B / 2) * Math.pow(Math.sin(Math.PI * Math.pow(s, 0.75)), 0.6) + 0.03; const row: THREE.Vector3[] = [];
    for (let j = 0; j <= NQ; j++) { const q = j / NQ; const y = -0.35 + 0.95 * Math.pow(q, 0.7); const x = hb * Math.pow(1 - Math.pow(1 - q, 2), 0.5); row.push(V(x, y, (s - 0.5) * L)); } pos.push(row); }
  const rot = (v: THREE.Vector3, side: number) => { const p = V(v.x * side, v.y, v.z); p.applyAxisAngle(V(0, 1, 0), yaw); return p.add(at); };
  for (const side of [1, -1]) for (let i = 0; i < NS; i++) for (let j = 0; j < NQ; j++) {
    const a = rot(pos[i][j], side), b = rot(pos[i + 1][j], side), c = rot(pos[i + 1][j + 1], side), d = rot(pos[i][j + 1], side);
    const uvs = [[j / NQ, i / NS * 3], [j / NQ, (i + 1) / NS * 3], [(j + 1) / NQ, (i + 1) / NS * 3], [(j + 1) / NQ, i / NS * 3]];
    const col = [0.75 + rng.next() * 0.02, 0.72, 0.65];
    if (side > 0) planks.quad(a, d, c, b, uvs, col); else planks.quad(a, b, c, d, uvs, col);
  }
  // floorboards: a pale bottom inside the hull so the boat reads as a solid shape from above, not a wire outline
  for (let i = 0; i < NS; i++) {
    const a = rot(pos[i][1], 1).setY(at.y - 0.06), b = rot(pos[i][1], -1).setY(at.y - 0.06), c = rot(pos[i + 1][1], -1).setY(at.y - 0.06), d = rot(pos[i + 1][1], 1).setY(at.y - 0.06);
    planks.quad(a, b, c, d, [[0, i / NS * 3], [0.6, i / NS * 3], [0.6, (i + 1) / NS * 3], [0, (i + 1) / NS * 3]], [0.72, 0.66, 0.56]);
  }
  // thwarts
  for (const s of [0.3, 0.55, 0.78]) { const a = rot(V(-0.6, 0.35, (s - 0.5) * L), 1), b = rot(V(0.6, 0.35, (s - 0.5) * L), 1); planks.geo(tube(a, b, 0.05, 0.05, 4, 1), [0.7, 0.65, 0.55]); }
}

function barrel(planks: GB, iron: GB, at: THREE.Vector3, rng: Rng): void {
  const h = 0.9 * rng.range(0.9, 1.1);
  planks.geo(new THREE.CylinderGeometry(0.32, 0.32, h, 12, 1, false).translate(at.x, at.y + h / 2, at.z), [0.6, 0.5, 0.4]);
  planks.geo(new THREE.CylinderGeometry(0.36, 0.36, h * 0.5, 12, 1, true).translate(at.x, at.y + h / 2, at.z), [0.6, 0.5, 0.4]);
  for (const y of [0.15, 0.85]) iron.geo(new THREE.CylinderGeometry(0.345, 0.345, 0.05, 12, 1, true).translate(at.x, at.y + h * y, at.z));
}

// A quay lantern: a tapered eight-sided glazed body between iron corner posts, a domed cap with a finial,
// and, when an arm anchor is given, a curved bracket arm with a scroll. Replaces the box-on-a-stick.
function lantern(iron: GB, glass: GB, paint: GB, arm: THREE.Vector3 | null, at: THREE.Vector3): void {
  const c = at.clone();
  if (arm) {
    const mid = arm.clone().lerp(c, 0.5); mid.y += 0.22;
    iron.geo(tube(arm, mid, 0.035, 0.03, 5)); iron.geo(tube(mid, V(c.x, c.y + 0.5, c.z), 0.03, 0.03, 5));
    iron.geo(tube(V(arm.x, arm.y - 0.35, arm.z), V(c.x - 0.08, c.y + 0.42, c.z), 0.022, 0.022, 4)); // scroll brace
    iron.geo(new THREE.TorusGeometry(0.06, 0.018, 5, 10).translate(c.x - 0.06, c.y + 0.44, c.z));
  }
  iron.geo(new THREE.CylinderGeometry(0.1, 0.16, 0.05, 8).translate(c.x, c.y + 0.44, c.z)); // hanger plate
  paint.geo(new THREE.ConeGeometry(0.24, 0.16, 8).translate(c.x, c.y + 0.36, c.z), [0.42, 0.6, 0.52]); // verdigris copper cap, smaller than the glass so the lantern reads from above
  iron.geo(new THREE.CylinderGeometry(0.05, 0.05, 0.1, 6).translate(c.x, c.y + 0.5, c.z)); iron.geo(new THREE.SphereGeometry(0.045, 6, 5).translate(c.x, c.y + 0.56, c.z)); // finial
  paint.geo(new THREE.CylinderGeometry(0.3, 0.3, 0.04, 8).translate(c.x, c.y + 0.26, c.z), [0.36, 0.5, 0.44]); // top ring
  iron.geo(new THREE.CylinderGeometry(0.2, 0.24, 0.05, 8).translate(c.x, c.y - 0.27, c.z)); // base ring
  iron.geo(new THREE.SphereGeometry(0.05, 6, 5).translate(c.x, c.y - 0.32, c.z)); // drip knob
  for (let k = 0; k < 8; k++) { const a = (k + 0.5) * Math.PI / 4; iron.geo(tube(V(c.x + Math.cos(a) * 0.29, c.y + 0.25, c.z + Math.sin(a) * 0.29), V(c.x + Math.cos(a) * 0.21, c.y - 0.25, c.z + Math.sin(a) * 0.21), 0.016, 0.016, 4)); }
  glass.geo(new THREE.CylinderGeometry(0.27, 0.19, 0.5, 8).translate(c.x, c.y, c.z), [0.85, 0.88, 0.8]);
}

function flag(cloth: GB, at: THREE.Vector3, w: number, h: number, col: number[], hang = false): void {
  const N = 8;
  for (let i = 0; i < N; i++) for (let j = 0; j < 4; j++) {
    const x0 = i / N * w, x1 = (i + 1) / N * w, y0 = -j / 4 * h, y1 = -(j + 1) / 4 * h;
    const P = (x: number, y: number) => hang ? V(at.x + x - w / 2, at.y + y, at.z) : V(at.x + x, at.y + y, at.z);
    cloth.quad(P(x0, y0), P(x1, y0), P(x1, y1), P(x0, y1), [[hang ? j / 4 : i / N, 0], [hang ? j / 4 : (i + 1) / N, 0], [hang ? (j + 1) / 4 : (i + 1) / N, 0.3], [hang ? (j + 1) / 4 : i / N, 0.3]], col);
  }
}

// A plastered house: walls with real window recesses, shutters, door, sill, gabled tile roof with eaves, chimney.
function house(plaster: GB, tiles: GB, planks: GB, glass: GB, paint: GB, iron: GB, stone: GB, hf: Heightfield, c: THREE.Vector3, rot: number, w: number, d: number, floors: number, tint: number[], rng: Rng, emitters: THREE.Vector3[], windows: number[]): void {
  const R = (x: number, y: number, z: number) => { const p = V(x, y, z); p.applyAxisAngle(V(0, 1, 0), rot); return p.add(c); };
  const corners = [R(-w / 2, 0, -d / 2), R(w / 2, 0, -d / 2), R(w / 2, 0, d / 2), R(-w / 2, 0, d / 2)];
  const gh = corners.map((p) => hf.heightWorld(p.x, p.z)); const floorY = Math.max(...gh) + 0.12, minY = Math.min(...gh) - 1.5;
  const H = floors * 3.1; const top = floorY + H;
  const shutterCol = hexc(rng.pick([0x3f6b5a, 0x5a6f8c, 0x7a4a3a, 0x8a8f7a, 0x2f4f6f]));
  const wallTint = tint;
  const style = { arched: rng.next() < 0.3, balconies: rng.next() < 0.3, parapet: false, noShutters: rng.next() < 0.25, winW: rng.range(0.85, 1.15), winH: rng.range(1.2, 1.7) };
  // foundation (stone-ish tint plaster)
  plaster.geo(box(w + 0.1, floorY - minY, d + 0.1, 0, (floorY + minY) / 2, 0, 0.25).rotateY(rot).translate(c.x, 0, c.z), [0.7, 0.68, 0.62]);
  // walls with windows
  const walls = [
    { a: V(-w / 2, 0, d / 2), b: V(w / 2, 0, d / 2), n: V(0, 0, 1), front: true },
    { a: V(w / 2, 0, d / 2), b: V(w / 2, 0, -d / 2), n: V(1, 0, 0), front: false },
    { a: V(w / 2, 0, -d / 2), b: V(-w / 2, 0, -d / 2), n: V(0, 0, -1), front: false },
    { a: V(-w / 2, 0, -d / 2), b: V(-w / 2, 0, d / 2), n: V(-1, 0, 0), front: false },
  ];
  const uOff = rng.range(0, 5);
  for (const wl of walls) {
    const len = wl.a.distanceTo(wl.b); const dir = wl.b.clone().sub(wl.a).normalize();
    const nWin = Math.max(1, Math.floor(len / 2.7)); const spacing = len / nWin;
    const cuts: { x0: number; x1: number; y0: number; y1: number; door: boolean }[] = [];
    for (let f = 0; f < floors; f++) for (let k = 0; k < nWin; k++) {
      if (rng.next() < 0.15 && !(wl.front && f === 0)) continue;
      const cx = spacing * (k + 0.5); const door = wl.front && f === 0 && k === Math.floor(nWin / 2);
      const ww = door ? 1.1 : style.winW, wh = door ? 2.2 : style.winH, wy = door ? 0 : f * 3.1 + (style.balconies && f > 0 ? 0.3 : 1.0);
      cuts.push({ x0: cx - ww / 2, x1: cx + ww / 2, y0: wy, y1: wy + wh, door });
    }
    // wall panels: strips between cuts (column split), simple and robust
    const xs = [0, ...cuts.flatMap((q) => [q.x0, q.x1]), len].sort((p, q) => p - q);
    for (let i = 0; i < xs.length - 1; i++) {
      const x0 = xs[i], x1 = xs[i + 1]; if (x1 - x0 < 1e-3) continue;
      const ys = [0, ...cuts.filter((q) => q.x0 <= x0 + 1e-3 && q.x1 >= x1 - 1e-3).flatMap((q) => [q.y0, q.y1]), H].sort((p, q) => p - q);
      const cover = cuts.filter((q) => q.x0 <= x0 + 1e-3 && q.x1 >= x1 - 1e-3);
      for (let j = 0; j < ys.length - 1; j++) {
        const y0 = ys[j], y1 = ys[j + 1]; if (y1 - y0 < 1e-3) continue;
        if (cover.some((q) => q.y0 <= y0 + 1e-3 && q.y1 >= y1 - 1e-3)) continue; // window hole
        const p00 = wl.a.clone().addScaledVector(dir, x0).setY(y0), p10 = wl.a.clone().addScaledVector(dir, x1).setY(y0), p11 = wl.a.clone().addScaledVector(dir, x1).setY(y1), p01 = wl.a.clone().addScaledVector(dir, x0).setY(y1);
        const U = (x: number) => (x + uOff) / 6, Vv = (y: number) => y / H;
        plaster.quad(R(p00.x, floorY + p00.y, p00.z), R(p10.x, floorY + p10.y, p10.z), R(p11.x, floorY + p11.y, p11.z), R(p01.x, floorY + p01.y, p01.z), [[U(x0), Vv(y0)], [U(x1), Vv(y0)], [U(x1), Vv(y1)], [U(x0), Vv(y1)]], wallTint);
      }
    }
    // window recesses, glass, shutters, sills, doors
    for (const q of cuts) {
      const depth = 0.25; const inN = wl.n.clone().multiplyScalar(-depth);
      const P = (x: number, y: number, inset: number) => { const p = wl.a.clone().addScaledVector(dir, x).setY(floorY + y).addScaledVector(inN, inset); return R(p.x, p.y, p.z); };
      // reveal (sides, top, bottom) in plaster
      plaster.quad(P(q.x0, q.y0, 0), P(q.x0, q.y1, 0), P(q.x0, q.y1, 1), P(q.x0, q.y0, 1), [[0, 0.5], [0.1, 0.5], [0.1, 0.55], [0, 0.55]], wallTint);
      plaster.quad(P(q.x1, q.y0, 1), P(q.x1, q.y1, 1), P(q.x1, q.y1, 0), P(q.x1, q.y0, 0), [[0, 0.5], [0.1, 0.5], [0.1, 0.55], [0, 0.55]], wallTint);
      plaster.quad(P(q.x0, q.y1, 0), P(q.x1, q.y1, 0), P(q.x1, q.y1, 1), P(q.x0, q.y1, 1), [[0, 0.5], [0.2, 0.5], [0.2, 0.55], [0, 0.55]], wallTint);
      if (style.arched && !q.door) {
        // arched head: a half-disc of plaster over the opening and a stone keystone line
        const mx = (q.x0 + q.x1) / 2, rr = (q.x1 - q.x0) / 2;
        for (let k = 0; k < 6; k++) { const a0 = Math.PI * k / 6, a1 = Math.PI * (k + 1) / 6;
          plaster.tri(P(mx, q.y1, 0.02), P(mx + Math.cos(a1) * rr, q.y1 + Math.sin(a1) * rr, 0.02), P(mx + Math.cos(a0) * rr, q.y1 + Math.sin(a0) * rr, 0.02), [[0.5, 0.5], [0.5, 0.5], [0.5, 0.5]], [0.2, 0.18, 0.16]); }
        stone.quad(P(mx - rr - 0.1, q.y1 + rr, -0.06), P(mx + rr + 0.1, q.y1 + rr, -0.06), P(mx + rr + 0.1, q.y1 + rr + 0.18, -0.06), P(mx - rr - 0.1, q.y1 + rr + 0.18, -0.06), [[0, 0], [0.5, 0], [0.5, 0.05], [0, 0.05]], [0.8, 0.78, 0.74]);
      }
      if (style.balconies && !q.door && q.y0 > 2.0) {
        // balcony: stone slab, iron rail with balusters
        const bx0 = q.x0 - 0.35, bx1 = q.x1 + 0.35, bd = 0.9;
        stone.quad(P(bx0, q.y0 - 0.02, 0), P(bx1, q.y0 - 0.02, 0), P(bx1, q.y0 - 0.02, -bd / depth), P(bx0, q.y0 - 0.02, -bd / depth), [[0, 0], [0.6, 0], [0.6, 0.4], [0, 0.4]], [0.82, 0.8, 0.76]);
        stone.quad(P(bx0, q.y0 - 0.14, -bd / depth), P(bx1, q.y0 - 0.14, -bd / depth), P(bx1, q.y0 - 0.02, -bd / depth), P(bx0, q.y0 - 0.02, -bd / depth), [[0, 0], [0.6, 0], [0.6, 0.05], [0, 0.05]], [0.7, 0.68, 0.64]);
        if (style.parapet) {
          // solid plaster parapet, 0.9 m high, with a pale stone cap: reads as a mass from 60 m
          const zf = -bd / depth, ph = 0.7, th = 0.16 / depth;
          const wallQ = (x0: number, x1: number, z0: number, z1: number) => {
            plaster.quad(P(x0, q.y0, z0), P(x1, q.y0, z1), P(x1, q.y0 + ph, z1), P(x0, q.y0 + ph, z0), [[0, 0.3], [0.4, 0.3], [0.4, 0.4], [0, 0.4]], wallTint);
            plaster.quad(P(x1, q.y0, z1), P(x0, q.y0, z0), P(x0, q.y0 + ph, z0), P(x1, q.y0 + ph, z1), [[0, 0.3], [0.4, 0.3], [0.4, 0.4], [0, 0.4]], wallTint);
          };
          wallQ(bx0, bx1, zf, zf); wallQ(bx0, bx1, zf + th, zf + th); wallQ(bx0, bx0, zf, 0); wallQ(bx1, bx1, zf, 0);
          stone.quad(P(bx0 - 0.04, q.y0 + ph, zf - 0.04 / depth), P(bx1 + 0.04, q.y0 + ph, zf - 0.04 / depth), P(bx1 + 0.04, q.y0 + ph, 0), P(bx0 - 0.04, q.y0 + ph, 0), [[0, 0], [0.6, 0], [0.6, 0.3], [0, 0.3]], [0.86, 0.84, 0.8]);
          stone.quad(P(bx0 - 0.04, q.y0 + ph, zf - 0.04 / depth), P(bx0 - 0.04, q.y0 + ph + 0.06, zf - 0.04 / depth), P(bx1 + 0.04, q.y0 + ph + 0.06, zf - 0.04 / depth), P(bx1 + 0.04, q.y0 + ph, zf - 0.04 / depth), [[0, 0], [0, 0.02], [0.6, 0.02], [0.6, 0]], [0.86, 0.84, 0.8]);
        } else {
          // iron rail: thick posts, few balusters, a heavy top rail with a dark wooden handrail
          const zf = -bd / depth;
          const rail = (x: number, z: number, r: number) => { iron.geo(tube(P(x, q.y0, z), P(x, q.y0 + 0.95, z), r, r, 5)); };
          rail(bx0, zf, 0.045); rail(bx1, zf, 0.045); rail(bx0, zf * 0.5, 0.035); rail(bx1, zf * 0.5, 0.035);
          for (let k = 1; k < 4; k++) rail(bx0 + (bx1 - bx0) * k / 4, zf, 0.028);
          planks.geo(tube(P(bx0 - 0.03, q.y0 + 0.97, zf), P(bx1 + 0.03, q.y0 + 0.97, zf), 0.05, 0.05, 6), [0.32, 0.24, 0.18]);
          planks.geo(tube(P(bx0, q.y0 + 0.97, 0), P(bx0, q.y0 + 0.97, zf), 0.045, 0.045, 6), [0.32, 0.24, 0.18]); planks.geo(tube(P(bx1, q.y0 + 0.97, 0), P(bx1, q.y0 + 0.97, zf), 0.045, 0.045, 6), [0.32, 0.24, 0.18]);
          iron.geo(tube(P(bx0, q.y0 + 0.5, zf), P(bx1, q.y0 + 0.5, zf), 0.025, 0.025, 5));
        }
      }
      if (q.door) {
        { const dc = rng.pick([[0.55, 0.42, 0.3], [0.32, 0.45, 0.42], [0.5, 0.52, 0.5], [0.42, 0.3, 0.22], [0.28, 0.36, 0.5]]); planks.quad(P(q.x0, q.y0, 0.6), P(q.x1, q.y0, 0.6), P(q.x1, q.y1, 0.6), P(q.x0, q.y1, 0.6), [[0, 0], [0.4, 0], [0.4, 0.8], [0, 0.8]], dc);
          stone.quad(P(q.x0 - 0.12, q.y1, -0.05), P(q.x1 + 0.12, q.y1, -0.05), P(q.x1 + 0.12, q.y1 + 0.2, -0.05), P(q.x0 - 0.12, q.y1 + 0.2, -0.05), [[0, 0], [0.4, 0], [0.4, 0.06], [0, 0.06]], [0.78, 0.76, 0.72]); }
        // step
        plaster.quad(P(q.x0 - 0.3, -0.02, -1.6), P(q.x1 + 0.3, -0.02, -1.6), P(q.x1 + 0.3, 0.16, -1.6), P(q.x0 - 0.3, 0.16, -1.6), [[0, 0.6], [0.3, 0.6], [0.3, 0.62], [0, 0.62]], [0.75, 0.73, 0.68]);
        plaster.quad(P(q.x0 - 0.3, 0.16, -1.6), P(q.x1 + 0.3, 0.16, -1.6), P(q.x1 + 0.3, 0.16, 0), P(q.x0 - 0.3, 0.16, 0), [[0, 0.6], [0.3, 0.6], [0.3, 0.65], [0, 0.65]], [0.75, 0.73, 0.68]);
      } else {
        { const on = rng.next() < 0.62; const warm = rng.range(0.7, 1.15); glass.quad(P(q.x0, q.y0, 0.85), P(q.x1, q.y0, 0.85), P(q.x1, q.y1, 0.85), P(q.x0, q.y1, 0.85), [[0, 0], [1, 0], [1, 1], [0, 1]], on ? [warm, warm * rng.range(0.85, 1.0), warm * 0.9] : [0.3, 0.38, 0.46]); }
        // mullions on some houses only
        const mx = (q.x0 + q.x1) / 2, my = (q.y0 + q.y1) / 2;
        // glazing bars: thin, dark, sitting just in front of the glass (never a white cross on the wall)
        const barCol = [0.16, 0.13, 0.1];
        if (style.winW > 1.0) paint.quad(P(mx - 0.018, q.y0, 0.82), P(mx + 0.018, q.y0, 0.82), P(mx + 0.018, q.y1, 0.82), P(mx - 0.018, q.y1, 0.82), [[0, 0], [1, 0], [1, 1], [0, 1]], barCol);
        if (style.winW > 1.0) paint.quad(P(q.x0, my - 0.018, 0.82), P(q.x1, my - 0.018, 0.82), P(q.x1, my + 0.018, 0.82), P(q.x0, my + 0.018, 0.82), [[0, 0], [1, 0], [1, 1], [0, 1]], barCol);
        // sill
        plaster.quad(P(q.x0 - 0.08, q.y0 - 0.06, -0.12), P(q.x1 + 0.08, q.y0 - 0.06, -0.12), P(q.x1 + 0.08, q.y0 + 0.02, 0.0), P(q.x0 - 0.08, q.y0 + 0.02, 0.0), [[0, 0.6], [0.2, 0.6], [0.2, 0.62], [0, 0.62]], [0.8, 0.78, 0.72]);
        // shutters: open, angled slightly off the wall; some closed; some houses have none
        const closed = rng.next() < 0.25;
        if (style.noShutters) { windows.push(1); continue; }
        const sw = (q.x1 - q.x0) / 2;
        for (const side of [-1, 1]) {
          const hx = side < 0 ? q.x0 : q.x1;
          const x0 = closed ? (side < 0 ? q.x0 : q.x1 - sw) : (side < 0 ? hx - sw : hx);
          const x1 = x0 + sw; const out = closed ? 0.02 : -0.06;
          const a = P(x0, q.y0 + 0.02, out - (closed ? 0 : 0.0)), b = P(x1, q.y0 + 0.02, out - (closed ? 0 : (side < 0 ? 0.02 : -0.02)));
          const cc = P(x1, q.y1 - 0.02, out - (closed ? 0 : (side < 0 ? 0.02 : -0.02))), dd = P(x0, q.y1 - 0.02, out);
          planks.quad(a, b, cc, dd, [[0, 0], [0.25, 0], [0.25, 0.9], [0, 0.9]], shutterCol);
          planks.quad(a, dd, cc, b, [[0, 0], [0, 0.9], [0.25, 0.9], [0.25, 0]], shutterCol);
        }
        windows.push(1);
      }
    }
  }
  // roof: gable along the longer axis (w), eaves overhang
  const ov = 0.45, pitch = 0.5, ridgeY = top + (d / 2 + ov) * pitch;
  const RR = (x: number, y: number, z: number) => R(x, y, z);
  // every roof gets its own tile tint and a UV offset so the tile module never lines up house to house
  const roofTint = [1 + rng.range(-0.1, 0.08), 1 + rng.range(-0.08, 0.04), 1 + rng.range(-0.06, 0.06)];
  const uo = rng.range(0, 4), vo = rng.range(0, 4);
  for (const s of [-1, 1]) {
    const a = RR(-w / 2 - ov, top - ov * pitch, s * (d / 2 + ov)), b = RR(w / 2 + ov, top - ov * pitch, s * (d / 2 + ov)), cc = RR(w / 2 + ov, ridgeY, 0), dd = RR(-w / 2 - ov, ridgeY, 0);
    const sl = Math.hypot(d / 2 + ov, ridgeY - (top - ov * pitch));
    const uvs = [[uo, vo], [uo + (w + 2 * ov) / 1.6, vo], [uo + (w + 2 * ov) / 1.6, vo + sl / 1.6], [uo, vo + sl / 1.6]];
    if (s > 0) tiles.quad(a, b, cc, dd, uvs, roofTint); else tiles.quad(b, a, dd, cc, uvs, roofTint);
    // eave underside
    const ea = RR(-w / 2 - ov, top - ov * pitch, s * (d / 2 + ov)), eb = RR(w / 2 + ov, top - ov * pitch, s * (d / 2 + ov)), ec = RR(w / 2 + ov, top, s * d / 2), ed = RR(-w / 2 - ov, top, s * d / 2);
    if (s > 0) plaster.quad(ea, ed, ec, eb, [[0, 0.7], [0, 0.72], [w / 6, 0.72], [w / 6, 0.7]], wallTint); else plaster.quad(ea, eb, ec, ed, [[0, 0.7], [w / 6, 0.7], [w / 6, 0.72], [0, 0.72]], wallTint);
  }
  // gables
  for (const s of [-1, 1]) {
    const a = RR(s * w / 2, top, -d / 2), b = RR(s * w / 2, top, d / 2), cc = RR(s * w / 2, ridgeY - ov * pitch * 0, 0);
    const uvs = [[0, 1], [d / 6, 1], [d / 12, 1 + (ridgeY - top) / H]];
    if (s > 0) plaster.tri(a, b, cc, uvs, wallTint); else plaster.tri(b, a, cc, uvs, wallTint);
  }
  // ridge cap
  tiles.geo(box(w + 2 * ov, 0.16, 0.5, 0, ridgeY + 0.04, 0, 0.6).rotateY(rot).translate(c.x, 0, c.z), [0.8, 0.7, 0.62]);
  // chimney with smoke
  if (rng.next() < 0.75) {
    const cx = rng.range(-w / 2 + 1.2, w / 2 - 1.2); const cz = rng.range(-0.8, 0.8);
    const chTop = ridgeY + 1.3;
    plaster.geo(box(0.7, 2.6, 0.7, cx, chTop - 1.3, cz, 0.3).rotateY(rot).translate(c.x, 0, c.z), wallTint);
    tiles.geo(box(0.9, 0.14, 0.9, cx, chTop + 0.06, cz, 0.6).rotateY(rot).translate(c.x, 0, c.z), [0.9, 0.85, 0.8]);
    plaster.geo(box(0.5, 0.3, 0.5, cx, chTop + 0.28, cz, 1).rotateY(rot).translate(c.x, 0, c.z), [0.35, 0.3, 0.28]);
    if (rng.next() < 0.7) emitters.push(RR(cx, chTop + 0.2, cz));
  }
}

function makeSmoke(emitters: THREE.Vector3[], tex: THREE.Texture) {
  const PER = 28; const n = emitters.length * PER;
  const pos = new Float32Array(n * 3), seed = new Float32Array(n * 2);
  for (let e = 0; e < emitters.length; e++) for (let i = 0; i < PER; i++) { const k = e * PER + i; pos.set([emitters[e].x, emitters[e].y, emitters[e].z], k * 3); seed[k * 2] = i / PER; seed[k * 2 + 1] = Math.random() * 6.28 + e; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 2));
  const material = new THREE.ShaderMaterial({
    uniforms: { uTime: W.uTime, uWindDir: W.uWindDir, uWindSpeed: W.uWindSpeed, tSmoke: { value: tex }, uLight: { value: new THREE.Vector3(1, 1, 1) }, uPx: { value: 1000 }, uFogSky: W.uFogSky, uFogDensity: W.uFogDensity },
    transparent: true, depthWrite: false, blending: THREE.NormalBlending,
    vertexShader: /* glsl */ `
      attribute vec2 aSeed; uniform float uTime, uWindSpeed, uPx; uniform vec2 uWindDir; varying float vAlpha; varying vec2 vRot;
      void main() {
        float life = 14.0; float t = mod(uTime * 0.9 + aSeed.x * life, life); float a = t / life;
        vec3 p = position;
        vec2 wd = normalize(uWindDir);
        float g = uWindSpeed / 6.0;
        p.xz += wd * (t * 1.6 * g) + vec2(sin(t * 0.7 + aSeed.y), cos(t * 0.5 + aSeed.y * 1.3)) * (0.35 + a * 2.2);
        p.y += t * (2.2 - 1.2 * g * 0.5) * (1.0 - a * 0.45) + sin(aSeed.y) * 0.1;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float size = 0.6 + a * 2.8;
        gl_PointSize = size * uPx / -mv.z;
        gl_Position = projectionMatrix * mv;
        vAlpha = pow(1.0 - a, 1.8) * smoothstep(0.0, 0.06, a) * 0.4;
        vRot = vec2(cos(aSeed.y + t * 0.3), sin(aSeed.y + t * 0.3));
      }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tSmoke; uniform vec3 uLight; varying float vAlpha; varying vec2 vRot;
      void main() {
        vec2 c = gl_PointCoord - 0.5; c = vec2(c.x * vRot.x - c.y * vRot.y, c.x * vRot.y + c.y * vRot.x) + 0.5;
        float a = texture2D(tSmoke, c).a * vAlpha;
        vec3 col = vec3(0.64, 0.63, 0.62) * uLight / 3.14159;
        gl_FragColor = vec4(col, a);
      }`,
  });
  const points = new THREE.Points(g, material); points.frustumCulled = false; points.renderOrder = 20;
  return { points, material, update(_t: number) { material.uniforms.uPx.value = window.innerHeight * (window.devicePixelRatio || 1) * 1.1; } };
}

function makeGulls(rng: Rng) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, vertexColors: true, side: THREE.DoubleSide });
  const gb = new GB();
  // body
  gb.geo(new THREE.SphereGeometry(0.16, 8, 6).scale(1, 0.75, 2.4), [0.95, 0.95, 0.95]);
  gb.geo(new THREE.ConeGeometry(0.035, 0.14, 5).rotateX(Math.PI / 2).translate(0, 0.02, 0.44), [0.9, 0.7, 0.2]);
  const geo = gb.build()!;
  // wings as attribute-tagged quads
  const wing = new THREE.BufferGeometry();
  const wp: number[] = [], wn: number[] = [], wu: number[] = [], wc: number[] = [], ww: number[] = [], wi: number[] = [];
  for (const s of [-1, 1]) {
    const base = wp.length / 3;
    const pts = [[0, 0.05, 0.12], [0, 0.05, -0.16], [0.42 * s, 0.05, -0.22], [0.42 * s, 0.05, 0.1], [0.72 * s, 0.05, -0.3], [0.72 * s, 0.05, -0.05]];
    for (const [i, p] of pts.entries()) { wp.push(p[0], p[1], p[2]); wn.push(0, 1, 0); wu.push(0, 0); const tip = i >= 4 ? 1 : i >= 2 ? 0.5 : 0; ww.push(tip); const grey = i >= 4 ? 0.35 : 0.85; wc.push(grey, grey, grey); }
    wi.push(base, base + 1, base + 2, base, base + 2, base + 3, base + 3, base + 2, base + 4, base + 3, base + 4, base + 5);
  }
  wing.setAttribute('position', new THREE.Float32BufferAttribute(wp, 3)); wing.setAttribute('normal', new THREE.Float32BufferAttribute(wn, 3)); wing.setAttribute('uv', new THREE.Float32BufferAttribute(wu, 2)); wing.setAttribute('color', new THREE.Float32BufferAttribute(wc, 3)); wing.setAttribute('aWing', new THREE.Float32BufferAttribute(ww, 1)); wing.setIndex(wi);
  geo.setAttribute('aWing', new THREE.Float32BufferAttribute(new Array(geo.attributes.position.count).fill(0), 1));
  const all = mergeGeometries([geo, wing], false)!;
  const gulls: { m: THREE.Mesh; c: THREE.Vector3; r: number; h: number; sp: number; ph: number; dir: number }[] = [];
  const centres: [number, number][] = [[-20, 30], [-50, 90], [15, -20], [-60, 10], [-30, 60], [30, 40], [-90, 20]];
  for (let i = 0; i < 9; i++) {
    const m = new THREE.Mesh(all, mat.clone());
    injectWorld(m.material as THREE.Material, { vertexPars: 'attribute float aWing; uniform float uPhase;', uniforms: { uPhase: { value: rng.range(0, 6.28) } }, replace: [['#include <begin_vertex>', /* glsl */ `
      vec3 transformed = vec3(position);
      { float f = sin(uTime * 7.5 + uPhase); transformed.y += aWing * aWing * f * 0.32; transformed.x *= 1.0 - abs(aWing) * 0.08 * abs(f); }
    `]] });
    m.castShadow = true; m.frustumCulled = false; group.add(m);
    const [cu, cw] = rng.pick(centres); const [x, z] = vistaToWorld(cu, cw);
    gulls.push({ m, c: V(x, 0, z), r: rng.range(14, 45), h: rng.range(14, 38), sp: rng.range(0.16, 0.3), ph: rng.range(0, 6.28), dir: rng.next() > 0.5 ? 1 : -1 });
  }
  return { group, update(t: number) {
    for (const g of gulls) {
      const a = t * g.sp * g.dir + g.ph; const wob = Math.sin(t * 0.7 + g.ph) * 2.5;
      g.m.position.set(g.c.x + Math.cos(a) * g.r, g.h + wob, g.c.z + Math.sin(a) * g.r);
      g.m.rotation.set(0, -a - g.dir * Math.PI / 2, g.dir * 0.28);
    }
  } };
}
