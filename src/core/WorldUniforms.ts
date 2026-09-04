import * as THREE from 'three';

// Uniforms shared by every material: time, wind, sun, and the aerial
// perspective fog. Injected through onBeforeCompile so built-in lighting,
// shadows and IBL stay intact.
export const W = {
  uTime: { value: 0 },
  uWindDir: { value: new THREE.Vector2(0.38, -0.92) },   // blowing from SSW toward NNE (unit, xz)
  uWindSpeed: { value: 6 },
  uSunDir: { value: new THREE.Vector3(0, 1, 0) },
  uSunColor: { value: new THREE.Vector3(1, 1, 1) },
  uMoonDir: { value: new THREE.Vector3(0, 1, 0) },
  uFogDensity: { value: 0.00025 },
  uFogHeight: { value: 900 },
  uFogSky: { value: new THREE.Vector3(0.5, 0.6, 0.8) },
  uFogSun: { value: new THREE.Vector3(1, 0.8, 0.6) },
  uFogSunPow: { value: 6 },
  uSeaLevel: { value: 0 },
  uNight: { value: 0 },
  tFogNoise: { value: null as THREE.Texture | null },
  uFogPatch: { value: 0 },
  uFogHaze: { value: 0 },
};

export const FOG_PARS = /* glsl */ `
uniform float uFogDensity; uniform float uFogHeight; uniform vec3 uFogSky; uniform vec3 uFogSun; uniform float uFogSunPow;
uniform vec3 uSunDir; uniform vec3 uMoonDir; uniform float uNight; uniform sampler2D tFogNoise; uniform float uFogPatch; uniform float uFogHaze;
varying vec3 vWPos;
vec3 applyAerial(vec3 color, vec3 wpos) {
  vec3 d = wpos - cameraPosition; float dist = length(d); vec3 rd = d / max(dist, 1e-3);
  float yc = cameraPosition.y, yp = wpos.y;
  float H = uFogHeight;
  float dy = yp - yc;
  float integ = abs(dy) > 1.0 ? H / dy * (exp(-yc / H) - exp(-yp / H)) : exp(-yc / H);
  // patchy bank: density modulated by a wind-drifted noise field sampled where the ray ends
  float fpatch = 1.0;
  if (uFogPatch > 0.0) { vec2 wd = normalize(uWindDir); vec4 n = texture2D(tFogNoise, wpos.xz * 0.0035 + wd * uTime * 0.004); vec4 n2 = texture2D(tFogNoise, wpos.xz * 0.012 - wd * uTime * 0.006 + 0.3); fpatch = mix(1.0, 0.25 + 1.5 * smoothstep(0.25, 0.8, n.r * 0.7 + n2.g * 0.3), uFogPatch); }
  float od = uFogDensity * integ * dist * fpatch + uFogHaze * dist;
  float fog = 1.0 - exp(-od);
  vec3 ld = mix(uSunDir, uMoonDir, uNight);
  float mu = max(dot(rd, ld), 0.0);
  float sunW = pow(mu, uFogSunPow);
  vec3 inscatter = mix(uFogSky, uFogSun, sunW);
  return mix(color, inscatter, clamp(fog, 0.0, 1.0));
}
`;

export interface WorldHooks {
  vertexPars?: string; vertexMain?: string; fragmentPars?: string; fragmentMain?: string;
  uniforms?: Record<string, THREE.IUniform>; noFog?: boolean; replace?: [string, string][];
}

// Idempotent: hooks accumulate on the material; the shared declarations are emitted once.
export function injectWorld(mat: THREE.Material, hooks: WorldHooks = {}): void {
  const ud = mat.userData as { __world?: WorldHooks[] };
  if (!ud.__world) {
    ud.__world = [];
    mat.onBeforeCompile = (shader) => {
      const all = ud.__world!;
      const vp = all.map((h) => h.vertexPars || '').join('\n'), vm = all.map((h) => h.vertexMain || '').join('\n');
      const fp = all.map((h) => h.fragmentPars || '').join('\n'), fm = all.map((h) => h.fragmentMain || '').join('\n');
      const noFog = all.some((h) => h.noFog);
      Object.assign(shader.uniforms, W);
      for (const h of all) Object.assign(shader.uniforms, h.uniforms || {});
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\nuniform float uTime; uniform vec2 uWindDir; uniform float uWindSpeed; varying vec3 vWPos;\n${vp}`)
        .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>\n{ vec4 wp4 = modelMatrix * vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n wp4 = modelMatrix * instanceMatrix * vec4(transformed, 1.0);\n#endif\n vWPos = wp4.xyz; }\n${vm}`);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>\nuniform float uTime; uniform vec2 uWindDir;\n${FOG_PARS}\n${fp}`)
        .replace('#include <fog_fragment>', noFog ? '' : `gl_FragColor.rgb = applyAerial(gl_FragColor.rgb, vWPos);\n${fm}`);
      for (const h of all) for (const [a, b] of h.replace || []) {
        shader.vertexShader = shader.vertexShader.replace(a, b);
        shader.fragmentShader = shader.fragmentShader.replace(a, b);
      }
    };
    mat.customProgramCacheKey = () => 'world:' + ud.__world!.map((h) => (h.vertexPars || '').length + ':' + (h.fragmentPars || '').length + ':' + (h.vertexMain || '').length + ':' + (h.fragmentMain || '').length + ':' + (h.replace || []).map((r) => r[0].length + r[1].length).join(',')).join('|');
  }
  ud.__world.push(hooks);
}
