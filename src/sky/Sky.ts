import * as THREE from 'three';
import { ATMO, ATMO_GLSL } from '../core/Atmosphere';
import { W } from '../core/WorldUniforms';
import { loadTex } from '../materials/Textures';

// Sky dome: per-pixel single scattering, sun disc, moon (textured), stars.
// Rendered once into a PMREM for image-based lighting and every frame as the
// background (the per-frame cost is only the visible sky pixels).
export class Sky {
  readonly mesh: THREE.Mesh;
  readonly material: THREE.ShaderMaterial;
  readonly uniforms = {
    uSunDir: W.uSunDir, uMoonDir: W.uMoonDir, uTime: W.uTime,
    uSunI: { value: ATMO.sunIntensity }, uMoonI: { value: ATMO.moonIntensity },
    uIncludeSun: { value: 1 }, uStars: { value: 1 },
    tMoon: { value: null as THREE.Texture | null },
    uFogDensity: W.uFogDensity, uFogHeight: W.uFogHeight, uFogSky: W.uFogSky, uFogSun: W.uFogSun, uFogSunPow: W.uFogSunPow, uNight: W.uNight,
    uFogOnSky: { value: 1 }, tFogNoise: W.tFogNoise, uFogPatch: W.uFogPatch,
  };

  constructor() {
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms, side: THREE.BackSide, depthWrite: false, depthTest: true,
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() { vDir = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w * 0.99999; }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        ${ATMO_GLSL}
        uniform vec3 uSunDir, uMoonDir; uniform float uSunI, uMoonI, uIncludeSun, uStars, uTime, uNight, uFogOnSky;
        uniform sampler2D tMoon;
        uniform float uFogDensity, uFogHeight, uFogSunPow; uniform vec3 uFogSky, uFogSun;
        varying vec3 vDir;
        float hash13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.yzx + 33.33); return fract((p.x + p.y) * p.z); }
        vec3 stars(vec3 d) {
          // cells on a cube-ish parameterisation; brightness follows a steep distribution
          vec3 a = abs(d); vec2 uv; float f;
          if (a.x >= a.y && a.x >= a.z) { uv = d.yz / a.x; f = 1.0; } else if (a.y >= a.z) { uv = d.xz / a.y; f = 2.0; } else { uv = d.xy / a.z; f = 3.0; }
          vec3 col = vec3(0.0);
          for (int i = 0; i < 2; i++) {
            float sc = i == 0 ? 180.0 : 90.0;
            vec2 g = uv * sc; vec2 c = floor(g); vec2 fr = fract(g);
            vec3 seed = vec3(c, f * 7.0 + float(i) * 13.0 + sign(d.x + d.y + d.z + 0.001) * 3.0);
            float r = hash13(seed);
            if (r > 0.92) {
              vec2 off = vec2(hash13(seed + 1.0), hash13(seed + 2.0));
              float dd = length(fr - off) * (i == 0 ? 1.0 : 0.55);
              float b = pow(hash13(seed + 3.0), 6.0) * 2.2 + 0.08;
              float s = (1.0 - smoothstep(0.0, 0.12, dd)) * b;
              vec3 tint = mix(vec3(0.75, 0.85, 1.0), vec3(1.0, 0.9, 0.75), hash13(seed + 4.0));
              col += tint * s;
            }
          }
          return col;
        }
        void main() {
          vec3 rd = normalize(vDir);
          vec3 ro = vec3(0.0, Re + 60.0, 0.0);
          vec3 sun = scatter(ro, rd, uSunDir, vec3(uSunI), 12, 4);
          vec3 moon = scatter(ro, rd, uMoonDir, vec3(uMoonI) * vec3(0.85, 0.92, 1.0), 8, 3);
          vec3 col = sun + moon;
          float night = 1.0 - smoothstep(-0.12, 0.05, uSunDir.y);
          // stars fade with twilight and with atmospheric extinction near the horizon
          if (uStars > 0.5) col += stars(rd) * night * 0.9 * smoothstep(-0.05, 0.25, rd.y) * uSunI * 0.012;
          // moon disc
          {
            float cosA = dot(rd, uMoonDir);
            float ang = acos(clamp(cosA, -1.0, 1.0));
            float R = 0.0093; // 0.53 deg diameter
            if (ang < R * 1.02 && uMoonDir.y > -0.05) {
              vec3 mx = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0))); vec3 my = cross(mx, uMoonDir);
              vec2 muv = vec2(dot(rd, mx), dot(rd, my)) / R * 0.5 + 0.5;
              vec3 tex = texture2D(tMoon, muv).rgb;
              // waxing gibbous: shade the disc by a sun-lit hemisphere
              vec3 nrm = vec3((muv - 0.5) * 2.0, sqrt(max(0.0, 1.0 - dot((muv - 0.5) * 2.0, (muv - 0.5) * 2.0))));
              float lit = clamp(dot(nrm, normalize(vec3(-0.6, 0.15, 0.78))), 0.0, 1.0);
              float edge = 1.0 - smoothstep(R * 0.96, R * 1.02, ang);
              vec3 tr = transmittance(ro, uMoonDir, 4);
              col += tex * lit * uSunI * 0.02 * tr * edge;
            }
          }
          if (uIncludeSun > 0.5) {
            float cosA = dot(rd, uSunDir);
            float ang = acos(clamp(cosA, -1.0, 1.0));
            float R = 0.0047; // 0.53 deg
            vec3 tr = transmittance(ro, uSunDir, 6);
            float disc = (1.0 - smoothstep(R * 0.9, R * 1.1, ang)) * (1.0 - 0.35 * smoothstep(0.0, R, ang)); // limb darkening
            col += tr * uSunI * 40.0 * disc;
            col += tr * uSunI * 0.35 * pow(max(cosA, 0.0), 350.0); // corona glow
          }
          // fog and haze on the sky itself
          if (uFogOnSky > 0.5) {
            float H = uFogHeight; float yc = 60.0;
            float integ = rd.y > 0.02 ? H / rd.y * exp(-yc / H) : H / 0.02 * exp(-yc / H) * (1.0 + (0.02 - rd.y) * 40.0);
            float od = uFogDensity * integ;
            float fog = 1.0 - exp(-od);
            vec3 ld = mix(uSunDir, uMoonDir, uNight);
            float sunW = pow(max(dot(rd, ld), 0.0), uFogSunPow);
            col = mix(col, mix(uFogSky, uFogSun, sunW), clamp(fog, 0.0, 1.0));
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const geo = new THREE.SphereGeometry(6000, 48, 24);
    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -10;
  }

  async load(): Promise<void> { this.uniforms.tMoon.value = await loadTex('moon', { srgb: true, repeat: false }); }
}
