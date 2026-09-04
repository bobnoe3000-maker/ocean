import * as THREE from 'three';
import { injectWorld, W } from '../core/WorldUniforms';
import { PbrSet } from './Textures';

export function pbr(set: PbrSet, opts: { repeat?: [number, number]; color?: number; roughness?: number; metalness?: number; side?: THREE.Side; vertexColors?: boolean; envMapIntensity?: number; emissive?: number; emissiveIntensity?: number } = {}): THREE.MeshStandardMaterial {
  const m = new THREE.MeshStandardMaterial({
    color: opts.color ?? 0xffffff, roughness: opts.roughness ?? 1, metalness: opts.metalness ?? 1, side: opts.side ?? THREE.FrontSide, vertexColors: opts.vertexColors ?? false,
    emissive: opts.emissive ?? 0x000000, emissiveIntensity: opts.emissiveIntensity ?? 1,
  });
  // clone textures so each material gets its own repeat (three shares one uv transform per material)
  const rep = opts.repeat ?? [1, 1];
  const clone = (t: THREE.Texture) => { const c = t.clone(); c.repeat.set(rep[0], rep[1]); c.needsUpdate = true; return c; };
  m.map = clone(set.map); m.normalMap = clone(set.normalMap);
  const orm = clone(set.ormMap); m.roughnessMap = orm; m.metalnessMap = orm; m.aoMap = orm;
  m.envMapIntensity = opts.envMapIntensity ?? 1;
  injectWorld(m);
  return m;
}

export function tube(a: THREE.Vector3, b: THREE.Vector3, r0: number, r1 = r0, seg = 6, vRepeat = 1): THREE.BufferGeometry {
  const d = b.clone().sub(a); const len = d.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1, false);
  const uv = g.attributes.uv as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * vRepeat);
  g.translate(0, len / 2, 0);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
  g.applyQuaternion(q); g.translate(a.x, a.y, a.z);
  return g;
}

export function box(w: number, h: number, d: number, x = 0, y = 0, z = 0, uvScale = 1): THREE.BufferGeometry {
  const g = new THREE.BoxGeometry(w, h, d);
  // planar-ish uv in metres for tiling sets
  const uv = g.attributes.uv as THREE.BufferAttribute; const pos = g.attributes.position as THREE.BufferAttribute; const n = g.attributes.normal as THREE.BufferAttribute;
  for (let i = 0; i < uv.count; i++) {
    const px = pos.getX(i), py = pos.getY(i), pz = pos.getZ(i); const nx = Math.abs(n.getX(i)), ny = Math.abs(n.getY(i));
    if (nx > 0.5) uv.setXY(i, pz * uvScale, py * uvScale); else if (ny > 0.5) uv.setXY(i, px * uvScale, pz * uvScale); else uv.setXY(i, px * uvScale, py * uvScale);
  }
  g.translate(x, y, z); return g;
}

// Wind sway for vegetation / cloth. Expects attribute aSway = (flex, phase).
export const SWAY_VERTEX_PARS = /* glsl */ `attribute vec2 aSway; uniform float uSwayAmp;`;
export const SWAY_VERTEX = /* glsl */ `
{
  vec3 ip = vec3(0.0);
  #ifdef USE_INSTANCING
    ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
  #endif
  float ph = aSway.y + dot(ip.xz, vec2(0.37, 0.71));
  float g = uWindSpeed / 6.0;
  float s1 = sin(uTime * 1.15 + ph) * 0.55 + sin(uTime * 2.6 + ph * 1.7) * 0.3 + sin(uTime * 0.31 + ph * 0.4) * 0.4;
  float flex = aSway.x;
  vec2 wd = normalize(uWindDir);
  vec3 off = vec3(wd.x, 0.0, wd.y) * (0.35 + 0.65 * s1) * flex * flex * uSwayAmp * g;
  off += vec3(-wd.y, 0.0, wd.x) * sin(uTime * 3.7 + ph * 2.3) * flex * 0.18 * uSwayAmp * g;
  off.y -= length(off.xz) * 0.25;
  transformed += off;
}`;

export function makeDepthMaterial(mat: THREE.Material): THREE.MeshDepthMaterial {
  const d = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  d.side = mat.side;
  d.userData.__world = (mat.userData as { __world?: unknown[] }).__world;
  d.onBeforeCompile = mat.onBeforeCompile;
  d.customProgramCacheKey = () => 'depth:' + (mat.customProgramCacheKey?.() ?? '');
  return d;
}

export { W };
