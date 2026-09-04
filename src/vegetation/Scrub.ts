import * as THREE from 'three';
import { Rng } from '../core/Rng';
import { Heightfield, LAYOUT, vistaToWorld } from '../terrain/Heightfield';
import { loadTex } from '../materials/Textures';
import { SWAY_VERTEX, SWAY_VERTEX_PARS, makeDepthMaterial } from '../materials/Helpers';
import { injectWorld } from '../core/WorldUniforms';
import { Extra } from '../world/World';

// Mediterranean scrub: grey-green bushes built from leaf quads around a core,
// instanced across the slopes with per-instance rotation, scale and wind sway.
function bushGeometry(rng: Rng, cards: number): THREE.BufferGeometry {
  // crossed alpha cards around the centre, slightly tilted, so the bush has volume from above
  const pos: number[] = [], nrm: number[] = [], uv: number[] = [], col: number[] = [], sway: number[] = [], idx: number[] = [];
  const R = 0.9;
  for (let i = 0; i < cards; i++) {
    const a = (i / cards) * Math.PI + rng.range(-0.2, 0.2); const tilt = rng.range(-0.25, 0.25);
    const d = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)); const up = new THREE.Vector3(Math.sin(tilt) * -d.z, Math.cos(tilt), Math.sin(tilt) * d.x);
    const c = new THREE.Vector3(rng.range(-0.15, 0.15), 0.55, rng.range(-0.15, 0.15));
    const q = [c.clone().addScaledVector(d, -R).addScaledVector(up, -R * 0.55), c.clone().addScaledVector(d, R).addScaledVector(up, -R * 0.55), c.clone().addScaledVector(d, R).addScaledVector(up, R * 0.55), c.clone().addScaledVector(d, -R).addScaledVector(up, R * 0.55)];
    const n = d.clone().cross(up).normalize().lerp(new THREE.Vector3(0, 1, 0), 0.6).normalize(); const base = pos.length / 3; const tint = rng.range(0.85, 1.15);
    for (const [k, p] of q.entries()) { pos.push(p.x, p.y, p.z); nrm.push(n.x, n.y, n.z); uv.push([0, 1, 1, 0][k], [0, 0, 1, 1][k]); col.push(tint, tint * 0.98, tint * 0.9); sway.push(0.5 + 0.4 * (k >= 2 ? 1 : 0), a); }
    idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  }
  // a horizontal top card for the crown seen from above
  { const c = new THREE.Vector3(0, 0.95, 0); const base = pos.length / 3; const s = R * 0.85;
    for (const [k, p] of [[-s, -s], [s, -s], [s, s], [-s, s]].entries()) { pos.push(c.x + p[0], c.y, c.z + p[1]); nrm.push(0, 1, 0); uv.push([0, 1, 1, 0][k], [0, 0, 1, 1][k]); col.push(1.05, 1.03, 0.95); sway.push(0.9, 1.0); }
    idx.push(base, base + 2, base + 1, base, base + 3, base + 2); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setAttribute('aSway', new THREE.Float32BufferAttribute(sway, 2));
  g.setIndex(idx); return g;
}

export async function buildScrub(hf: Heightfield, seed: number, quality: 'low' | 'medium' | 'high'): Promise<Extra> {
  const group = new THREE.Group(); group.name = 'scrub';
  const card = await loadTex('leafcard.png', { srgb: true, repeat: false });
  const mat = new THREE.MeshStandardMaterial({ map: card, side: THREE.DoubleSide, vertexColors: true, alphaTest: 0.4, roughness: 0.7, metalness: 0, color: 0xc9d0b0 });
  injectWorld(mat);
  injectWorld(mat, { vertexPars: SWAY_VERTEX_PARS, uniforms: { uSwayAmp: { value: 0.12 } }, replace: [['#include <begin_vertex>', `vec3 transformed = vec3(position);\n${SWAY_VERTEX}`]] });
  const rng = new Rng(seed * 77 + 11);
  const count = quality === 'low' ? 400 : quality === 'medium' ? 900 : 1300;
  const spots: { u: number; w: number; s: number }[] = [];
  const bc = LAYOUT.bayC;
  let tries = 0;
  while (spots.length < count && tries++ < count * 30) {
    const u = rng.range(-330, 260), w = rng.range(-60, 430);
    const h = hf.height(u, w); if (h < 2.5 || h > 70) continue;
    const sd = hf.coastSD(u, w); if (sd < 4) continue;
    const dx = u - bc[0], dw = w - bc[1]; const r = Math.hypot(dx, dw); const th = Math.atan2(dw, dx) * 180 / Math.PI;
    if (r > 74 && r < 138 && th > 28 && th < 152) continue; // town terrace
    const [x, z] = vistaToWorld(u, w); const n = hf.normalWorld(x, z); if (n[1] < 0.55) continue;
    const cl = 0.5 + 0.5 * Math.sin(u * 0.045 + 1.3) * Math.cos(w * 0.038 + 0.4) + 0.3 * Math.sin(u * 0.11 - w * 0.07);
    const density = 0.3 + 0.7 * Math.max(0, cl); if (rng.next() > density) continue;
    const tree = rng.next() < 0.06;
    spots.push({ u, w, s: tree ? rng.range(2.4, 3.4) : rng.range(0.7, 1.6) });
  }
  const variants = [bushGeometry(rng.fork(1), 3), bushGeometry(rng.fork(2), 4), bushGeometry(rng.fork(3), 4)];
  const per: number[][] = [[], [], []]; spots.forEach((_, i) => per[i % 3].push(i));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3();
  variants.forEach((geo, vi) => {
    const ids = per[vi]; if (!ids.length) return;
    const mesh = new THREE.InstancedMesh(geo, mat, ids.length);
    ids.forEach((id, k) => {
      const sp = spots[id]; const [x, z] = vistaToWorld(sp.u, sp.w); const y = hf.heightWorld(x, z) - 0.1;
      e.set(0, rng.range(0, 6.28), 0); q.setFromEuler(e); sc.set(sp.s * rng.range(0.9, 1.3), sp.s * rng.range(0.7, 1.1), sp.s * rng.range(0.9, 1.3));
      m4.compose(new THREE.Vector3(x, y, z), q, sc); mesh.setMatrixAt(k, m4);
    });
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
    { const d = makeDepthMaterial(mat); d.map = card; d.alphaTest = 0.4; mesh.customDepthMaterial = d; }
    group.add(mesh);
  });
  return { group };
}
