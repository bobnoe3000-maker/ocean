import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { Rng } from '../core/Rng';
import { Heightfield, vistaToWorld } from '../terrain/Heightfield';
import { loadSet, loadTex } from '../materials/Textures';
import { pbr, SWAY_VERTEX, SWAY_VERTEX_PARS, makeDepthMaterial } from '../materials/Helpers';
import { injectWorld } from '../core/WorldUniforms';
import { Extra } from '../world/World';

function palmGeometry(rng: Rng): { bark: THREE.BufferGeometry; frond: THREE.BufferGeometry } {
  const H = rng.range(5.5, 9.5);
  const lean = new THREE.Vector2(rng.range(-1, 1), rng.range(-1, 1)).normalize().multiplyScalar(rng.range(0.4, 1.8));
  const bend = rng.range(0.6, 1.4);
  const trunkAt = (t: number) => new THREE.Vector3(lean.x * Math.pow(t, bend), H * t, lean.y * Math.pow(t, bend));
  // trunk
  const RS = 8, LS = 16;
  const tp: number[] = [], tn: number[] = [], tu: number[] = [], ts: number[] = [], ti: number[] = [];
  for (let j = 0; j <= LS; j++) {
    const t = j / LS; const c = trunkAt(t);
    const r = 0.2 + 0.22 * Math.pow(1 - t, 1.6) + (t < 0.08 ? 0.14 * (1 - t / 0.08) : 0);
    const tang = trunkAt(Math.min(1, t + 0.01)).sub(trunkAt(Math.max(0, t - 0.01))).normalize();
    const ax = new THREE.Vector3(1, 0, 0).cross(tang).normalize(); const az = tang.clone().cross(ax).normalize();
    for (let i = 0; i <= RS; i++) {
      const a = (i / RS) * Math.PI * 2; const nrm = ax.clone().multiplyScalar(Math.cos(a)).add(az.clone().multiplyScalar(Math.sin(a)));
      const p = c.clone().addScaledVector(nrm, r);
      tp.push(p.x, p.y, p.z); tn.push(nrm.x, nrm.y, nrm.z); tu.push(i / RS, t * H / 1.6); ts.push(t * t, 0);
    }
  }
  for (let j = 0; j < LS; j++) for (let i = 0; i < RS; i++) { const a = j * (RS + 1) + i, b = a + RS + 1; ti.push(a, a + 1, b, a + 1, b + 1, b); }
  const trunk = new THREE.BufferGeometry();
  trunk.setAttribute('position', new THREE.Float32BufferAttribute(tp, 3)); trunk.setAttribute('normal', new THREE.Float32BufferAttribute(tn, 3));
  trunk.setAttribute('uv', new THREE.Float32BufferAttribute(tu, 2)); trunk.setAttribute('aSway', new THREE.Float32BufferAttribute(ts, 2));
  trunk.setAttribute('color', new THREE.Float32BufferAttribute(new Array(tp.length).fill(1), 3));
  trunk.setIndex(ti);
  const top = trunkAt(1);
  // coconuts and crown base (bark material)
  const barkParts: THREE.BufferGeometry[] = [trunk];
  for (let k = 0; k < rng.int(4) + 3; k++) {
    const s = new THREE.SphereGeometry(0.16, 6, 5); const a = rng.range(0, 6.28);
    s.translate(top.x + Math.cos(a) * 0.32, top.y - 0.25 + rng.range(-0.1, 0.1), top.z + Math.sin(a) * 0.32);
    s.setAttribute('aSway', new THREE.Float32BufferAttribute(new Array(s.attributes.position.count * 2).fill(0).map((_, i) => (i % 2 === 0 ? 1 : 0)), 2));
    s.setAttribute('color', new THREE.Float32BufferAttribute(new Array(s.attributes.position.count * 3).fill(0.7), 3));
    barkParts.push(s);
  }
  // fronds: chunky sculpted ribbons (stylised realism): a thick curved blade with a rounded tip, lighter toward the tip
  const fp: number[] = [], fn: number[] = [], fu: number[] = [], fs: number[] = [], fc: number[] = [], fi: number[] = [];
  const N = 12 + rng.int(4);
  const a0 = rng.range(0, 6.28);
  for (let f = 0; f < N; f++) {
    const age = f / (N - 1);
    const az = a0 + f * 2.399963;
    const el = THREE.MathUtils.degToRad(55 - 105 * Math.pow(age, 1.1) + rng.range(-8, 8));
    const L = rng.range(3.0, 4.2) * (1 - 0.12 * age);
    const dir = new THREE.Vector3(Math.cos(az) * Math.cos(el), Math.sin(el), Math.sin(az) * Math.cos(el));
    const droop = rng.range(0.7, 1.3) + age * 0.8;
    const ph = rng.range(0, 6.28);
    const dead = age > 0.88;
    const base: [number, number, number] = dead ? [0.5, 0.36, 0.18] : [0.16 + 0.06 * rng.next(), 0.36 + 0.1 * rng.next(), 0.13];
    const tip: [number, number, number] = dead ? [0.62, 0.48, 0.26] : [0.36 + 0.08 * rng.next(), 0.56, 0.2];
    const rachis = (t: number) => top.clone().addScaledVector(dir, L * t).add(new THREE.Vector3(0, -droop * t * t * (dead ? 2.0 : 1), 0));
    const SEG = 7; const b0 = fp.length / 3;
    for (let sgi = 0; sgi <= SEG; sgi++) {
      const t = sgi / SEG; const c = rachis(t); const tang = rachis(Math.min(1, t + 0.02)).sub(rachis(Math.max(0, t - 0.02))).normalize();
      const side = new THREE.Vector3(-tang.z, 0, tang.x).normalize();
      // blade width: narrow at the stem, widest at 40%, rounded tip
      const wdt = L * 0.085 * Math.sin(Math.PI * Math.pow(t, 0.8)) + 0.03;
      const sag = 0.18 * wdt; // edges fold down into a V
      const l = c.clone().addScaledVector(side, -wdt).add(new THREE.Vector3(0, -sag, 0)), r = c.clone().addScaledVector(side, wdt).add(new THREE.Vector3(0, -sag, 0));
      const nrm = side.clone().cross(tang).normalize().lerp(new THREE.Vector3(0, 1, 0), 0.7).normalize();
      const flex = 0.7 + t * 1.3;
      const col = [base[0] + (tip[0] - base[0]) * t, base[1] + (tip[1] - base[1]) * t, base[2] + (tip[2] - base[2]) * t];
      for (const [pt, v] of [[l, 0], [c.clone().add(new THREE.Vector3(0, 0.02, 0)), 0.5], [r, 1]] as [THREE.Vector3, number][]) { fp.push(pt.x, pt.y, pt.z); fn.push(nrm.x, nrm.y, nrm.z); fu.push(t, v); fs.push(flex, ph); fc.push(col[0] * (v === 0.5 ? 1.12 : 1), col[1] * (v === 0.5 ? 1.12 : 1), col[2]); }
      if (sgi > 0) { const k = b0 + sgi * 3; fi.push(k - 3, k, k - 2, k - 2, k, k + 1, k - 2, k + 1, k - 1, k - 1, k + 1, k + 2); }
    }
  }
  const frond = new THREE.BufferGeometry();
  frond.setAttribute('position', new THREE.Float32BufferAttribute(fp, 3)); frond.setAttribute('normal', new THREE.Float32BufferAttribute(fn, 3));
  frond.setAttribute('uv', new THREE.Float32BufferAttribute(fu, 2)); frond.setAttribute('aSway', new THREE.Float32BufferAttribute(fs, 2));
  frond.setAttribute('color', new THREE.Float32BufferAttribute(fc, 3)); frond.setIndex(fi);
  const bark = mergeGeometries(barkParts, false)!;
  return { bark, frond };
}

export async function buildPalms(hf: Heightfield, seed: number): Promise<Extra> {
  const group = new THREE.Group(); group.name = 'palms';
  const [barkSet, noiseTex] = await Promise.all([loadSet('bark'), loadTex('noise')]);
  const rng = new Rng(seed * 31 + 5);
  const barkMat = pbr(barkSet, { vertexColors: true });
  const frondMat = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, vertexColors: true, roughness: 0.9, metalness: 0, envMapIntensity: 0.35 });
  void noiseTex;
  // leaf translucency: sunlight through the fronds keeps them green under a low sun
  injectWorld(frondMat, { fragmentPars: 'uniform vec3 uSunColor;', replace: [['#include <emissivemap_fragment>', 'totalEmissiveRadiance += diffuseColor.rgb * vec3(0.9, 1.1, 0.6) * uSunColor * 0.05 * max(uSunDir.y, 0.0) * 4.0;']] });
  for (const m of [barkMat, frondMat]) {
    injectWorld(m, { vertexPars: SWAY_VERTEX_PARS, uniforms: { uSwayAmp: { value: 0.35 } }, replace: [['#include <begin_vertex>', `vec3 transformed = vec3(position);\n${SWAY_VERTEX}`]] });
  }
  // placements: beach clumps, a few by the town, a line behind the quay
  const spots: [number, number][] = [];
  const clumps: [number, number, number, number][] = [[-95, -12, 26, 11], [-70, 22, 18, 7], [-120, 30, 22, 8], [-60, 62, 14, 5], [-55, 132, 12, 5], [-20, 150, 12, 4], [60, 160, 18, 6], [-140, 55, 16, 5], [-100, -40, 20, 6], [10, 140, 14, 4], [-75, 100, 8, 3], [40, 135, 10, 3]];
  for (const [cu, cw, r, n] of clumps) for (let i = 0; i < n; i++) {
    for (let tries = 0; tries < 12; tries++) {
      const a = rng.range(0, 6.28), d = Math.sqrt(rng.next()) * r; const u = cu + Math.cos(a) * d, w = cw + Math.sin(a) * d;
      const h = hf.height(u, w); const sd = hf.coastSD(u, w);
      if (h > 0.9 && h < 9 && sd > 3 && !spots.some(([su, sw]) => Math.hypot(su - u, sw - w) < 3.2)) { spots.push([u, w]); break; }
    }
  }
  const variants = [0, 1, 2].map(() => palmGeometry(rng.fork(rng.int(1000))));
  const per: number[][] = [[], [], []];
  spots.forEach((_, i) => per[i % 3].push(i));
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3();
  variants.forEach((v, vi) => {
    const ids = per[vi]; if (!ids.length) return;
    const geo = mergeGeometries([v.bark, v.frond], true)!;
    const mesh = new THREE.InstancedMesh(geo, [barkMat, frondMat], ids.length);
    ids.forEach((id, k) => {
      const [u, w] = spots[id]; const [x, z] = vistaToWorld(u, w); const y = hf.heightWorld(x, z) - 0.15;
      e.set(rng.range(-0.06, 0.06), rng.range(0, 6.28), rng.range(-0.06, 0.06)); q.setFromEuler(e);
      const s = rng.range(0.8, 1.25); sc.set(s, s, s);
      m4.compose(new THREE.Vector3(x, y, z), q, sc); mesh.setMatrixAt(k, m4);
    });
    mesh.castShadow = true; mesh.receiveShadow = true; mesh.frustumCulled = false;
    mesh.customDepthMaterial = makeDepthMaterial(frondMat);
    group.add(mesh);
  });
  return { group };
}
