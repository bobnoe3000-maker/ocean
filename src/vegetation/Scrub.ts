import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rng } from '../core/Rng';
import { Heightfield, LAYOUT, vistaToWorld } from '../terrain/Heightfield';
import { loadTex } from '../materials/Textures';
import { SWAY_VERTEX, SWAY_VERTEX_PARS, makeDepthMaterial } from '../materials/Helpers';
import { injectWorld } from '../core/WorldUniforms';
import { Extra } from '../world/World';

// Mediterranean scrub: grey-green bushes built from leaf quads around a core,
// instanced across the slopes with per-instance rotation, scale and wind sway.
function bushGeometry(rng: Rng, detail: number): THREE.BufferGeometry {
  // sculpted blob: a flattened icosphere with lumpy noise displacement and a painted top-light gradient
  const g = mergeVertices(new THREE.IcosahedronGeometry(1, detail));
  const pos = g.attributes.position as THREE.BufferAttribute;
  const lumps = Array.from({ length: 5 }, () => new THREE.Vector3(rng.range(-1, 1), rng.range(-0.3, 1), rng.range(-1, 1)).normalize());
  const col: number[] = [], sway: number[] = [];
  for (let i = 0; i < pos.count; i++) {
    const v = new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i));
    let d = 1; for (const l of lumps) d += 0.18 * Math.max(0, v.dot(l) - 0.55);
    d += rng.range(-0.03, 0.03);
    v.multiplyScalar(d); v.y = v.y * 0.72 + 0.72; v.x *= 1.1;
    pos.setXYZ(i, v.x, v.y, v.z);
    const top = THREE.MathUtils.clamp(v.y / 1.5, 0, 1);
    col.push(0.5 + 0.45 * top, 0.62 + 0.38 * top, 0.28 + 0.2 * top);
    void 0;
    sway.push(0.3 + 0.5 * top, i * 0.37);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setAttribute('aSway', new THREE.Float32BufferAttribute(sway, 2));
  g.computeVertexNormals(); return g;
}

export async function buildScrub(hf: Heightfield, seed: number, quality: 'low' | 'medium' | 'high'): Promise<Extra> {
  const group = new THREE.Group(); group.name = 'scrub';
  const noiseTex = await loadTex('noise');
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1.0, metalness: 0, color: 0x9fb07a, envMapIntensity: 0.35 });
  void noiseTex;
  injectWorld(mat);
  injectWorld(mat, { vertexPars: SWAY_VERTEX_PARS, uniforms: { uSwayAmp: { value: 0.12 } }, replace: [['#include <begin_vertex>', `vec3 transformed = vec3(position);\n${SWAY_VERTEX}`]] });
  const rng = new Rng(seed * 77 + 11);
  const count = quality === 'low' ? 260 : quality === 'medium' ? 420 : 440;
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
    const density = 0.08 + 0.92 * Math.pow(Math.max(0, cl), 1.6); if (rng.next() > density) continue;
    const tree = rng.next() < 0.06;
    spots.push({ u, w, s: tree ? rng.range(2.4, 3.4) : rng.range(0.7, 1.6) });
  }
  const variants = [bushGeometry(rng.fork(1), 2), bushGeometry(rng.fork(2), 2), bushGeometry(rng.fork(3), 2)];
  const per: number[][] = [[], [], []]; spots.forEach((_, i) => per[i % 3].push(i));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3();
  variants.forEach((geo, vi) => {
    const ids = per[vi]; if (!ids.length) return;
    const mesh = new THREE.InstancedMesh(geo, mat, ids.length);
    ids.forEach((id, k) => {
      const sp = spots[id]; const [x, z] = vistaToWorld(sp.u, sp.w); const y = hf.heightWorld(x, z) - 0.1;
      e.set(0, rng.range(0, 6.28), 0); q.setFromEuler(e); sc.set(sp.s * rng.range(0.9, 1.3), sp.s * rng.range(0.7, 1.1), sp.s * rng.range(0.9, 1.3));
      m4.compose(new THREE.Vector3(x, y, z), q, sc); mesh.setMatrixAt(k, m4);
      const fam = rng.next(); const c = fam < 0.4 ? new THREE.Color(0.62, 0.66, 0.42) : fam < 0.75 ? new THREE.Color(0.7, 0.74, 0.6) : new THREE.Color(0.38, 0.52, 0.3); c.multiplyScalar(rng.range(0.85, 1.15)); mesh.setColorAt(k, c);
    });
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
    mesh.customDepthMaterial = makeDepthMaterial(mat);
    group.add(mesh);
  });
  return { group };
}
