import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rng } from '../core/Rng';
import { LAYOUT, vistaToWorld } from '../terrain/Heightfield';
import { loadSet, loadTex } from '../materials/Textures';
import { pbr, tube, box, makeDepthMaterial } from '../materials/Helpers';
import { injectWorld, W } from '../core/WorldUniforms';
import { Extra } from '../world/World';
import { SceneSpec } from '../core/Spec';
import { Lighting } from '../lighting/Lighting';

// Procedural brig: hull lofted from stations, planked deck, bulwarks, two
// masts with yards, topsails set to dry, furled courses, spanker and jib,
// standing rigging with ratlines, stern lantern, pennant and ensign.
const L = 28, B = 7.8, KEEL = -2.1, DECK = 1.7, RAIL = 2.85;

function hullGeometry(): THREE.BufferGeometry {
  const NS = 30, NQ = 10;
  const halfBreadth = (s: number) => (B / 2) * Math.pow(Math.sin(Math.PI * Math.pow(s, 0.8)), 0.55) * (s > 0.85 ? 1 - 0.25 * (s - 0.85) / 0.15 : 1) + 0.04;
  const section = (s: number, q: number) => {
    const y = KEEL + (DECK - KEEL) * Math.pow(q, 0.8);
    const bilge = Math.pow(1 - Math.pow(1 - q, 2.3), 0.55);
    const flare = 1 + 0.08 * Math.pow(q, 3) * (1 - s);
    return new THREE.Vector3(halfBreadth(s) * bilge * flare, y, (s - 0.5) * L * -1);
  };
  const pos: number[] = [], uv: number[] = [], col: number[] = [], idx: number[] = [];
  for (const side of [1, -1]) {
    const base = pos.length / 3;
    for (let i = 0; i <= NS; i++) for (let j = 0; j <= NQ; j++) {
      const s = i / NS, q = j / NQ; const p = section(s, q);
      pos.push(p.x * side, p.y, p.z); uv.push(q * 2.2, s * 1.2);
      const wale = p.y > 0.55 && p.y < 1.05 ? 1 : 0; const c = wale ? [1.9, 1.55, 0.95] : [1, 1, 1];
      col.push(c[0], c[1], c[2]);
    }
    for (let i = 0; i < NS; i++) for (let j = 0; j < NQ; j++) {
      const a = base + i * (NQ + 1) + j, b = a + NQ + 1;
      if (side > 0) idx.push(a, a + 1, b, a + 1, b + 1, b); else idx.push(a, b, a + 1, a + 1, b, b + 1);
    }
  }
  // transom
  {
    const base = pos.length / 3;
    for (let j = 0; j <= NQ; j++) { const p = section(1, j / NQ); pos.push(p.x, p.y, p.z, -p.x, p.y, p.z); uv.push(0, j / NQ * 1.2, 1.2, j / NQ * 1.2); col.push(1, 1, 1, 1, 1, 1); }
    for (let j = 0; j < NQ; j++) { const a = base + j * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx); g.computeVertexNormals(); return g;
}

function deckOutline(s: number): number { return (B / 2) * Math.pow(Math.sin(Math.PI * Math.pow(s, 0.8)), 0.55) * (s > 0.85 ? 1 - 0.25 * (s - 0.85) / 0.15 : 1) + 0.04; }

function deckGeometry(): THREE.BufferGeometry {
  const NS = 30, pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (let i = 0; i <= NS; i++) { const s = i / NS, hb = deckOutline(s) - 0.12, z = (s - 0.5) * -L; pos.push(-hb, DECK, z, hb, DECK, z); uv.push(-hb / 1.5, z / 7.0, hb / 1.5, z / 7.0); }
  for (let i = 0; i < NS; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

function bulwarkGeometry(): THREE.BufferGeometry {
  const NS = 30, pos: number[] = [], uv: number[] = [], idx: number[] = [];
  for (const side of [1, -1]) {
    const base = pos.length / 3;
    for (let i = 0; i <= NS; i++) { const s = i / NS, hb = deckOutline(s), z = (s - 0.5) * -L; pos.push(hb * side, DECK - 0.05, z, (hb - 0.05) * side, RAIL, z); uv.push(0.3, s * 1.2, 0.5, s * 1.2); }
    for (let i = 0; i < NS; i++) { const a = base + i * 2; if (side > 0) idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); else idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

function sailGeometry(w: number, h: number, segs = 14, shape: 'square' | 'tri' | 'gaff' = 'square'): THREE.BufferGeometry {
  // cloth surface with the belly baked into the geometry so it shades and silhouettes as a filled sail
  const g = new THREE.PlaneGeometry(w, h, segs, segs);
  const pos = g.attributes.position as THREE.BufferAttribute;
  const uvA = g.attributes.uv as THREE.BufferAttribute;
  const belly = Math.min(w, h) * 0.16;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i); const u = x / w + 0.5, v = y / h + 0.5;
    let px = x, py = y;
    if (shape === 'tri') px = (x + w / 2) * v - w / 2;
    if (shape === 'gaff') px = x * (0.55 + 0.45 * (1 - v));
    // curved leeches and foot: the cloth bulges outward at the free edges
    const edge = Math.sin(Math.PI * u);
    if (shape === 'square') { py = y - 0.5 * edge * (1 - v) - 0.12 * edge * v; px = x * (1 + 0.06 * Math.sin(Math.PI * v)); }
    const bz = Math.sin(Math.PI * u) * Math.sin(Math.PI * Math.min(1, v * 1.15)) * belly;
    pos.setXYZ(i, px, py, bz);
  }
  g.computeVertexNormals();
  const cloth = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) { cloth[i * 2] = uvA.getX(i) * w / 1.8; cloth[i * 2 + 1] = uvA.getY(i) * h / 1.8; }
  g.setAttribute('aCloth', new THREE.BufferAttribute(cloth, 2));
  return g;
}

export async function buildBrig(seed: number): Promise<Extra> {
  const group = new THREE.Group(); group.name = 'brig';
  const rng = new Rng(seed * 17 + 3);
  const [hullSet, planksSet, canvasSet, ropeSet, noise] = await Promise.all([loadSet('hull'), loadSet('planks'), loadSet('canvas'), loadSet('rope'), loadTex('noise')]);
  const hullMat = pbr(hullSet, { vertexColors: true, repeat: [1, 1] });
  const deckMat = pbr(planksSet, { color: 0xb8a58a });
  const sparMat = pbr(planksSet, { color: 0x6e5236, repeat: [0.4, 1] });
  const canvasMat = pbr(canvasSet, { side: THREE.DoubleSide, color: 0xe8dcc0, repeat: [1, 1] });
  canvasMat.shadowSide = THREE.DoubleSide; canvasMat.normalScale.set(1.6, 1.6);
  const ropeMat = pbr(ropeSet, { repeat: [1, 1], color: 0x6a5a48 });
  const ironMat = new THREE.MeshStandardMaterial({ color: 0x2a2724, roughness: 0.55, metalness: 0.85, roughnessMap: noise });
  injectWorld(ironMat);
  const flagMat = pbr(canvasSet, { color: 0xb3282d, side: THREE.DoubleSide, roughness: 1 }); flagMat.shadowSide = THREE.DoubleSide;

  const ship = new THREE.Group();
  // geometry is collected per material and merged into one mesh each (draw-call budget)
  const buckets = new Map<THREE.Material, { geos: THREE.BufferGeometry[]; shadow: boolean }>();
  const ensureColor = (g: THREE.BufferGeometry) => { if (!g.attributes.color) g.setAttribute('color', new THREE.Float32BufferAttribute(new Array(g.attributes.position.count * 3).fill(1), 3)); if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Array(g.attributes.position.count * 2).fill(0), 2)); return g; };
  const add = (g: THREE.BufferGeometry, m: THREE.Material, shadow = true) => { let b = buckets.get(m); if (!b) { b = { geos: [], shadow }; buckets.set(m, b); } b.geos.push(ensureColor(g.index ? g.toNonIndexed() : g)); b.shadow = b.shadow || shadow; return null as unknown as THREE.Mesh; };
  const flushBuckets = () => { for (const [m, b] of buckets) { const g = mergeGeometries(b.geos, false); if (!g) continue; const mesh = new THREE.Mesh(g, m); mesh.castShadow = b.shadow; mesh.receiveShadow = true; ship.add(mesh); } buckets.clear(); };
  add(hullGeometry(), hullMat);
  add(deckGeometry(), deckMat);
  add(bulwarkGeometry(), hullMat);
  // cap rail
  const railParts: THREE.BufferGeometry[] = [];
  for (const side of [1, -1]) for (let i = 0; i < 30; i++) { const s0 = i / 30, s1 = (i + 1) / 30; railParts.push(tube(new THREE.Vector3((deckOutline(s0) - 0.03) * side, RAIL, (s0 - 0.5) * -L), new THREE.Vector3((deckOutline(s1) - 0.03) * side, RAIL, (s1 - 0.5) * -L), 0.07, 0.07, 5)); }
  add(mergeGeometries(railParts)!, sparMat);
  // keel, stem, rudder, stern post
  add(box(0.3, 0.5, L * 0.9, 0, KEEL - 0.1, 0, 0.5), hullMat);
  add(box(0.25, 3.2, 0.5, 0, KEEL + 1.4, L / 2 + 0.05, 0.5), hullMat);
  // deck furniture: hatches, deckhouse, capstan, skylight, boat
  add(box(2.2, 0.5, 3.0, 0, DECK + 0.25, -2.5, 0.7), deckMat);
  add(box(1.8, 0.45, 2.2, 0, DECK + 0.22, 6, 0.7), deckMat);
  add(box(2.6, 1.1, 3.2, 0, DECK + 0.55, 9.5, 0.7), deckMat);
  add(new THREE.CylinderGeometry(0.35, 0.4, 1.0, 10).translate(0, DECK + 0.5, -8.5), sparMat);
  add(box(0.5, 1.2, 0.5, 0, DECK + 0.6, L / 2 - 1.2, 0.7), sparMat); // tiller post / binnacle
  // gunports along the wale (dark recessed squares with lids), stern gallery windows, chainplates
  for (const side of [1, -1]) for (let k = 0; k < 4; k++) {
    const z = -8 + k * 5.2; const sIdx = 0.5 - z / L; const hb = deckOutline(sIdx);
    add(box(0.12, 0.7, 0.8, (hb - 0.02) * side, DECK - 0.05, z, 1), ironMat);
    add(box(0.08, 0.35, 0.85, (hb + 0.08) * side, DECK + 0.45, z, 1).rotateZ(side * 0.9), hullMat);
    for (const dz of [-1.2, 0, 1.2]) add(box(0.06, 1.2, 0.12, (hb + 0.03) * side, DECK - 0.55, z + dz + 2.6, 1), ironMat);
  }
  for (const x of [-1.6, -0.55, 0.55, 1.6]) { const g = box(0.8, 0.6, 0.1, x, DECK - 0.25, -L / 2 - 0.1, 1); add(g, ironMat); }
  add(box(3.4, 0.14, 0.3, 0, RAIL + 0.05, -L / 2 - 0.05, 1), sparMat);
  // hatch gratings: a lattice of thin battens on the hatch tops
  for (const [hx, hz, hw, hd] of [[0, -2.5, 2.2, 3.0], [0, 6, 1.8, 2.2]] as [number, number, number, number][]) {
    for (let i = 0; i <= 6; i++) add(box(0.06, 0.06, hd, hx - hw / 2 + hw * i / 6, DECK + 0.53, hz, 1), ironMat);
    for (let i = 0; i <= 8; i++) add(box(hw, 0.06, 0.06, hx, DECK + 0.53, hz - hd / 2 + hd * i / 8, 1), ironMat);
  }
  // rope coils, buckets and the helm
  for (const [rx, rz] of [[2.4, -5], [-2.6, 3], [1.8, 9.5], [-2.2, -10.5]]) add(new THREE.TorusGeometry(0.32, 0.1, 6, 14).rotateX(Math.PI / 2).translate(rx, DECK + 0.1, rz), ropeMat);
  for (const [bx, bz] of [[2.9, 1.5], [-3.0, -1.0]]) add(new THREE.CylinderGeometry(0.2, 0.16, 0.3, 8).translate(bx, DECK + 0.15, bz), sparMat);
  add(new THREE.TorusGeometry(0.55, 0.05, 6, 12).rotateZ(Math.PI / 2).translate(0, DECK + 1.1, -L / 2 + 2.2), sparMat);
  for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; add(tube(new THREE.Vector3(0, DECK + 1.1, -L / 2 + 2.2), new THREE.Vector3(0, DECK + 1.1 + Math.cos(a) * 0.7, -L / 2 + 2.2 + Math.sin(a) * 0.7), 0.025, 0.025, 4), sparMat); }
  // deck guns on carriages, run out through the bulwarks
  for (const side of [1, -1]) for (let k = 0; k < 4; k++) {
    const z = -8 + k * 5.2; const s = 0.5 - z / L; const x = (deckOutline(s) - 1.1) * side;
    add(box(0.9, 0.55, 1.3, x, DECK + 0.28, z, 1), sparMat);
    add(new THREE.CylinderGeometry(0.11, 0.16, 2.0, 8).rotateZ(Math.PI / 2).translate(x + 0.55 * side, DECK + 0.72, z), ironMat);
    for (const dz of [-0.45, 0.45]) add(new THREE.CylinderGeometry(0.2, 0.2, 0.12, 10).rotateZ(Math.PI / 2).translate(x, DECK + 0.2, z + dz), sparMat);
  }
  // ship's boat on deck (small lofted hull)
  { const bg = hullGeometry(); bg.scale(0.16, 0.16, 0.16); bg.translate(0, DECK + 0.55, 1.5); add(bg, deckMat); }
  // masts, yards, sails, rigging
  const masts = [{ z: L * 0.22, h: 23, yards: [14, 11.5, 8.5] }, { z: -L * 0.12, h: 25, yards: [15, 12, 9] }];
  const rig: THREE.BufferGeometry[] = [];
  const ratl: THREE.BufferGeometry[] = [];
  const sails: THREE.Mesh[] = [];
  const sailMeshes: { mesh: THREE.Mesh; phase: number; billow: number }[] = [];
  const addSail = (g: THREE.BufferGeometry, x: number, y: number, z: number, rotY: number, billow: number) => {
    const m = new THREE.Mesh(g, canvasMat); m.position.set(x, y, z); m.rotation.y = rotY; m.castShadow = true; m.receiveShadow = true;
    m.customDepthMaterial = makeDepthMaterial(canvasMat); ship.add(m); sails.push(m); sailMeshes.push({ mesh: m, phase: rng.range(0, 6), billow });
    // bolt rope and reef band: a rope along the head, leeches and foot, and a darker band a third of the way down
    g.computeBoundingBox(); const bb = g.boundingBox!;
    const corners = [new THREE.Vector3(bb.min.x, bb.max.y, 0), new THREE.Vector3(bb.max.x, bb.max.y, 0), new THREE.Vector3(bb.max.x, bb.min.y, 0), new THREE.Vector3(bb.min.x, bb.min.y, 0)];
    const edges: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 4; i++) edges.push(tube(corners[i], corners[(i + 1) % 4], 0.03, 0.03, 4, 6));
    const rm = new THREE.Mesh(mergeGeometries(edges)!, ropeMat); m.add(rm);
    return m;
  };
  for (const [mi, m] of masts.entries()) {
    const top = DECK + m.h;
    add(tube(new THREE.Vector3(0, DECK - 0.5, m.z), new THREE.Vector3(0, DECK + m.h * 0.62, m.z), 0.26, 0.2, 10, 6), sparMat);
    add(tube(new THREE.Vector3(0.12, DECK + m.h * 0.55, m.z), new THREE.Vector3(0.12, top, m.z), 0.15, 0.08, 8, 5), sparMat);
    add(box(1.6, 0.12, 1.2, 0, DECK + m.h * 0.6, m.z, 1), sparMat); // top platform
    add(new THREE.SphereGeometry(0.18, 8, 6).translate(0.12, top + 0.15, m.z), sparMat); // truck
    const yardHeights = [DECK + m.h * 0.36, DECK + m.h * 0.66, DECK + m.h * 0.86];
    m.yards.forEach((yl, yi) => {
      const y = yardHeights[yi]; const yaw = 0.12; // braced slightly
      const a = new THREE.Vector3(-yl / 2 * Math.cos(yaw), y, m.z - yl / 2 * Math.sin(yaw)), b = new THREE.Vector3(yl / 2 * Math.cos(yaw), y, m.z + yl / 2 * Math.sin(yaw));
      add(tube(a, b, 0.13, 0.13, 7, 4), sparMat);
      // lifts and braces
      rig.push(tube(a, new THREE.Vector3(0.1, Math.min(top, y + m.h * 0.22), m.z), 0.025, 0.025, 4, 12), tube(b, new THREE.Vector3(0.1, Math.min(top, y + m.h * 0.22), m.z), 0.025, 0.025, 4, 12));
      if (yi === 1) {
        // topsail set, hanging from the yard, sheeted to the lower yard
        addSail(sailGeometry(yl * 0.98, m.h * 0.34, 14, 'square'), 0, y - m.h * 0.17 - 0.1, m.z + 0.25, yaw, 0.9);
      } else {
        // furled: bundle along the yard
        add(tube(a.clone().add(new THREE.Vector3(0, -0.2, 0)), b.clone().add(new THREE.Vector3(0, -0.2, 0)), 0.22 + yi * 0.02, 0.22 + yi * 0.02, 8, 6), canvasMat);
      }
    });
    // shrouds and ratlines
    for (const side of [1, -1]) {
      const chains: THREE.Vector3[] = [];
      for (let k = 0; k < 5; k++) { const z = m.z + (k - 2) * 0.55; const s = 0.5 - z / L; const p = new THREE.Vector3((deckOutline(s) + 0.25) * side, DECK + 0.4, z); chains.push(p); rig.push(tube(p, new THREE.Vector3(0.15 * side, DECK + m.h * 0.6, m.z), 0.03, 0.03, 4, 20)); }
      for (let r = 1; r < 16; r++) { const t = r / 24; const y = DECK + 0.4 + (m.h * 0.6 - 0.4) * t; const p0 = chains[0].clone().lerp(new THREE.Vector3(0.15 * side, DECK + m.h * 0.6, m.z), t), p1 = chains[4].clone().lerp(new THREE.Vector3(0.15 * side, DECK + m.h * 0.6, m.z), t); p0.y = y; p1.y = y; ratl.push(tube(p0, p1, 0.015, 0.015, 3, 3)); }
      // topmast shrouds and backstay
      rig.push(tube(new THREE.Vector3((deckOutline(0.5 - (m.z - 2.5) / L) + 0.2) * side, DECK + 0.4, m.z - 2.5), new THREE.Vector3(0.12 * side, top - 0.4, m.z), 0.025, 0.025, 4, 30));
    }
    // stays
    if (mi === 0) { rig.push(tube(new THREE.Vector3(0.12, top - 0.3, m.z), new THREE.Vector3(0, DECK + 3.3, L / 2 + 8.2), 0.035, 0.035, 5, 30)); rig.push(tube(new THREE.Vector3(0, DECK + m.h * 0.6, m.z), new THREE.Vector3(0, DECK + 1.6, L / 2 + 4.5), 0.035, 0.035, 5, 30)); }
    else { rig.push(tube(new THREE.Vector3(0.12, top - 0.3, m.z), new THREE.Vector3(0, DECK + masts[0].h * 0.62, masts[0].z), 0.035, 0.035, 5, 30)); rig.push(tube(new THREE.Vector3(0, DECK + m.h * 0.6, m.z), new THREE.Vector3(0, DECK + 1.2, masts[0].z), 0.035, 0.035, 5, 30)); }
  }
  // bowsprit and jib
  const bsA = new THREE.Vector3(0, DECK + 1.0, L / 2 - 0.5), bsB = new THREE.Vector3(0, DECK + 3.4, L / 2 + 8.5);
  add(tube(bsA, bsB, 0.2, 0.1, 8, 4), sparMat);
  rig.push(tube(bsB, new THREE.Vector3(0, KEEL + 1.2, L / 2 + 0.3), 0.03, 0.03, 4, 12)); // bobstay
  { const jib = addSail(sailGeometry(7.5, 11.0, 12, 'tri'), 0, DECK + 9.2, L / 2 + 3.6, Math.PI / 2 + 0.25, 0.6); jib.rotation.z = -0.55; }
  // spanker (gaff sail) on the mainmast
  { const gaffA = new THREE.Vector3(0, DECK + 13.5, masts[1].z - 0.3), gaffB = new THREE.Vector3(0, DECK + 15.5, masts[1].z - 8.5); add(tube(gaffA, gaffB, 0.1, 0.07, 6, 3), sparMat);
    const boomA = new THREE.Vector3(0, DECK + 3.2, masts[1].z - 0.3), boomB = new THREE.Vector3(0, DECK + 3.2, masts[1].z - 10.5); add(tube(boomA, boomB, 0.12, 0.09, 6, 3), sparMat);
    const sp = addSail(sailGeometry(9.5, 11.5, 12, 'gaff'), 0, DECK + 9.0, masts[1].z - 5.0, Math.PI / 2, 0.5); sp.rotation.z = 0.0; }
  add(mergeGeometries(rig)!, ropeMat, false);
  add(mergeGeometries(ratl)!, ropeMat, false);
  // anchor cable to the water ahead
  { const pts = []; for (let i = 0; i <= 12; i++) { const t = i / 12; pts.push(new THREE.Vector3(1.6, DECK - 0.4 - 1.9 * t - 2.2 * t * t, L / 2 - 1.5 + 9 * t)); } const c = new THREE.CatmullRomCurve3(pts); add(new THREE.TubeGeometry(c, 16, 0.06, 5), ironMat, false); }
  // stern lantern
  const lantern = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), new THREE.MeshStandardMaterial({ color: 0x2a2520, emissive: 0xffb050, emissiveIntensity: 0, roughness: 0.4 }));
  lantern.position.set(0, RAIL + 1.3, -L / 2 + 0.2); ship.add(lantern);
  const lanternLight = new THREE.PointLight(0xffb050, 0, 18, 1.6); lanternLight.position.copy(lantern.position).add(new THREE.Vector3(0, -0.2, 0)); ship.add(lanternLight);
  // pennant and ensign (cloth, vertex-animated)
  const pennant = new THREE.Mesh(sailGeometry(4.5, 0.45, 14, 'square').translate(2.25, 0, 0), flagMat); pennant.position.set(0.12, DECK + masts[1].h + 0.3, masts[1].z);
  const ensign = new THREE.Mesh(sailGeometry(1.9, 1.2, 10, 'square').translate(0.95, 0, 0), flagMat); ensign.position.set(0, DECK + 15.6, masts[1].z - 8.5);
  for (const f of [pennant, ensign]) { f.castShadow = true; ship.add(f); }
  // cloth animation: sails billow to leeward and flutter; flags stream downwind
  injectWorld(canvasMat, { uniforms: { uBillow: { value: 1 } }, vertexPars: 'attribute vec2 aCloth; varying vec2 vCloth; varying vec2 vSailUv;', fragmentPars: 'varying vec2 vCloth; varying vec2 vSailUv;', replace: [
    ['#include <beginnormal_vertex>', /* glsl */ `
    vec3 objectNormal = vec3( normal );
    vCloth = aCloth;
    #ifdef USE_UV
    vSailUv = uv;
    #else
    vSailUv = vec2(0.5);
    #endif`],
    ['#include <begin_vertex>', /* glsl */ `
    vec3 transformed = vec3(position);
    #ifdef USE_UV
    { vec2 st = uv; float g = uWindSpeed / 6.0;
      float belly = sin(3.14159 * st.x) * sin(3.14159 * st.y);
      float flutter = sin(uTime * 4.0 + st.y * 9.0 + st.x * 3.0) * 0.05 * (1.0 - st.x) * g + sin(uTime * 6.3 + st.x * 12.0) * 0.025 * g;
      transformed.z += belly * 0.12 * sin(uTime * 0.8) * g + flutter; }
    #endif
  `],
    ['#include <map_fragment>', /* glsl */ `
    #ifdef USE_MAP
      vec4 sampledDiffuseColor = texture2D( map, vCloth );
      vec4 stain = texture2D( map, vCloth * 0.13 + 0.4 );
      // cloth panels (0.6 m), reef bands and a weathered foot
      float panel = 1.0 - 0.14 * smoothstep(0.93, 1.0, abs(fract(vCloth.x * 3.0) - 0.5) * 2.0);
      float reef = 1.0 - 0.1 * (smoothstep(0.02, 0.0, abs(fract(vCloth.y * 0.45 + 0.2) - 0.5) - 0.44));
      float foot = 1.0 - 0.12 * (1.0 - smoothstep(0.0, 0.35, vCloth.y / max(vCloth.y + 0.001, 1.0)));
      float cloth_ao = 1.0 - 0.28 * (1.0 - smoothstep(0.0, 0.12, vSailUv.x)) - 0.22 * smoothstep(0.9, 1.0, vSailUv.y) - 0.1 * (1.0 - smoothstep(0.0, 0.08, vSailUv.y));
      diffuseColor *= sampledDiffuseColor * mix(vec4(1.0), stain * 1.15, 0.6) * panel * reef * foot * cloth_ao;
    #endif`],
    ['#include <normal_fragment_maps>', /* glsl */ `
    #ifdef USE_NORMALMAP
      vec3 mapN = texture2D( normalMap, vCloth ).xyz * 2.0 - 1.0; mapN.xy *= normalScale;
      normal = normalize( tbn * mapN );
    #endif`],
    ['#include <roughnessmap_fragment>', /* glsl */ `
    float roughnessFactor = roughness;
    #ifdef USE_ROUGHNESSMAP
      roughnessFactor *= texture2D( roughnessMap, vCloth ).g;
    #endif`],
  ] });
  injectWorld(flagMat, { replace: [['#include <begin_vertex>', /* glsl */ `
    vec3 transformed = vec3(position);
    #ifdef USE_UV
    { float g = uWindSpeed / 6.0; float x = position.x; float w = sin(uTime * 7.0 - x * 2.6 + uv.y * 1.5) * 0.12 * x * g + sin(uTime * 11.0 - x * 5.0) * 0.04 * x * g;
      transformed.z += w; transformed.y += sin(uTime * 3.0 - x * 1.5) * 0.05 * x * g - 0.08 * x * (1.0 - g * 0.6); }
    #endif
  `]] });

  flushBuckets();
  // place at anchor, bow to the wind
  const [x, z] = vistaToWorld(LAYOUT.brig[0], LAYOUT.brig[1]);
  ship.position.set(x, 0, z);
  const head = LAYOUT.brigHeading * Math.PI / 180;
  ship.rotation.y = -head + Math.PI; // local +z is the bow here
  // flags stream downwind regardless of heading
  const wd = W.uWindDir.value; const windAz = Math.atan2(wd.x, -wd.y);
  for (const f of [pennant, ensign]) f.rotation.y = -(windAz + Math.PI / 2) - ship.rotation.y;
  group.add(ship);
  void sailMeshes;

  return {
    group,
    update(t) {
      ship.rotation.x = Math.sin(t * 0.62) * 0.012; ship.rotation.z = Math.sin(t * 0.47 + 1.3) * 0.022 + Math.sin(t * 1.9) * 0.004;
      ship.position.y = Math.sin(t * 0.55) * 0.14 + Math.sin(t * 1.3 + 0.7) * 0.05;
      const flick = 0.85 + 0.15 * Math.sin(t * 13.1) * Math.sin(t * 7.3 + 1.0);
      lanternLight.intensity = lanternLight.userData.base * flick;
    },
    apply(spec: SceneSpec, L: Lighting) {
      const night = L.night;
      const k = spec.style === 'stylized' ? 1.7 : 1; ship.scale.set(k, k, k);
      lanternLight.userData.base = 6 * night; (lantern.material as THREE.MeshStandardMaterial).emissiveIntensity = 4 * night;
      // R2: the hull is a silhouette whose wales and spars catch the moon; a faint cool self-light keeps it readable
      for (const m of [hullMat, sparMat, deckMat]) { m.emissive.setRGB(0.55, 0.7, 1.0, THREE.LinearSRGBColorSpace); m.emissiveIntensity = 0.0025 * night; }
    },
  };
}
