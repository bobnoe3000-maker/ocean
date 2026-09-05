import * as THREE from 'three';
import { injectWorld } from '../core/WorldUniforms';
import { loadTex } from '../materials/Textures';
import { GRID } from '../terrain/Heightfield';

// Gerstner swell + chop on a centre-dense grid, standard PBR lighting with
// depth-based colour, shore and crest foam, detail normals and SSS.
export class Ocean {
  mesh!: THREE.Mesh;
  material!: THREE.MeshPhysicalMaterial;
  readonly group = new THREE.Group();
  readonly uniforms = {
    tHeight: { value: null as THREE.Texture | null },
    tWaterN: { value: null as THREE.Texture | null },
    tRipple: { value: null as THREE.Texture | null },
    uNightF: { value: 0 },
    uFogF: { value: 0 },
    tRefl: { value: null as THREE.Texture | null },
    uReflMatrix: { value: new THREE.Matrix4() },
    uReflF: { value: 0 },
    uStyle: { value: 0 },
    tFoam: { value: null as THREE.Texture | null },
    tNoise: { value: null as THREE.Texture | null },
    uGrid: { value: new THREE.Vector4(GRID.cx, GRID.cz, GRID.size, 0) },
    uHull: { value: new THREE.Vector4(0, 0, 0, 0) }, // x,z centre, w = heading (rad), y = half length
    uHullW: { value: 3.5 },
    uSwell: { value: 1.0 },
    uChop: { value: 1.0 },
    uDeep: { value: new THREE.Color(0x0a2d5e) },
    uShallow: { value: new THREE.Color(0x1c8f80) },
    uSSS: { value: new THREE.Color(0x2fbf9a) },
  };

  constructor(private depthTexture: THREE.Texture, private segments: number) {}

  async build(): Promise<void> {
    const [wn, rip, foam, noise] = await Promise.all([loadTex('waternormal'), loadTex('ripple'), loadTex('foam'), loadTex('noise')]);
    this.uniforms.tHeight.value = this.depthTexture; this.uniforms.tWaterN.value = wn; this.uniforms.tRipple.value = rip; this.uniforms.tFoam.value = foam; this.uniforms.tNoise.value = noise;

    const N = this.segments, EXT = 24000;
    const geo = new THREE.BufferGeometry();
    const verts = new Float32Array((N + 1) * (N + 1) * 3);
    const shape = (t: number) => Math.sign(t) * Math.pow(Math.abs(t), 3.2) * EXT;
    let k = 0;
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
      const x = shape((i / N) * 2 - 1), z = shape((j / N) * 2 - 1);
      verts[k++] = x; verts[k++] = 0; verts[k++] = z;
    }
    const idx = new Uint32Array(N * N * 6); k = 0;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1;
      idx[k++] = a; idx[k++] = c; idx[k++] = b; idx[k++] = b; idx[k++] = c; idx[k++] = d;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.computeBoundingSphere();

    const mat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0, transparent: true, depthWrite: true, side: THREE.FrontSide, ior: 1.7, specularIntensity: 1.0 });
    mat.envMapIntensity = 1.9;
    this.material = mat;
    injectWorld(mat, {
      uniforms: this.uniforms,
      vertexPars: /* glsl */ `
        uniform float uSwell, uChop; uniform vec4 uGrid; uniform sampler2D tHeight;
        varying vec3 vWN; varying float vJ; varying float vDepth; varying float vCrest;
        // wave: dir(xz), wavelength, amplitude, steepness
        void gerstner(vec2 d, float L, float A, float Q, float speedMul, vec2 p, float t, inout vec3 disp, inout vec3 dPx, inout vec3 dPz) {
          float k = 6.2831853 / L; float c = sqrt(9.81 / k) * speedMul; float f = k * dot(d, p) - c * k * t;
          float s = sin(f), co = cos(f); float qa = Q * A;
          disp += vec3(d.x * qa * co, A * s, d.y * qa * co);
          dPx += vec3(-d.x * d.x * qa * k * s, d.x * A * k * co, -d.x * d.y * qa * k * s);
          dPz += vec3(-d.x * d.y * qa * k * s, d.y * A * k * co, -d.y * d.y * qa * k * s);
        }

float hfield(sampler2D t, vec2 uv) { return texture2D(t, clamp(uv, 0.0, 1.0)).r; } // hardware bilinear (R16F is filterable on GLES3)
        float terrainH(vec2 xz) { vec2 uv = (xz - uGrid.xy) / uGrid.z + 0.5; return hfield(tHeight, uv); }
      `,
      vertexMain: '',
      replace: [
        ['#include <begin_vertex>', /* glsl */ `
          vec3 transformed = vec3(position);
          {
            vec2 p = position.xz; float t = uTime;
            float th = terrainH(p);
            float depth = clamp(-th, 0.0, 30.0);
            float shoal = smoothstep(0.0, 7.0, depth) * smoothstep(0.4, 5.0, depth);           // waves shrink in the shallows and die well before the beach (the mesh is ~10 m coarse there)
            vec2 wd = normalize(uWindDir);
            mat2 rot = mat2(0.96, 0.28, -0.28, 0.96);
            vec3 disp = vec3(0.0), dPx = vec3(0.0), dPz = vec3(0.0);
            float sw = uSwell * shoal;
            gerstner(wd, 52.0, 0.85 * sw, 0.5, 1.0, p, t, disp, dPx, dPz);
            gerstner(rot * wd, 33.0, 0.45 * sw, 0.55, 1.0, p, t, disp, dPx, dPz);
            gerstner(wd * mat2(0.94, -0.34, 0.34, 0.94), 20.0, 0.24 * sw, 0.55, 1.0, p, t, disp, dPx, dPz);
            // Jacobian from the swell only: whitecaps come from the long waves, not the chop
            float Jswell = (1.0 + dPx.x) * (1.0 + dPz.z) - dPx.z * dPz.x;
            float ch = uChop * shoal;
            gerstner(rot * rot * wd, 9.5, 0.07 * ch, 0.6, 1.1, p, t, disp, dPx, dPz);
            gerstner(wd * mat2(0.87, 0.5, -0.5, 0.87), 6.2, 0.045 * ch, 0.7, 1.15, p, t, disp, dPx, dPz);
            gerstner(wd * mat2(0.87, -0.5, 0.5, 0.87), 4.1, 0.03 * ch, 0.7, 1.2, p, t, disp, dPx, dPz);
            transformed += disp;
            // on steep shores a trough between two mesh vertices would dip below the seabed and let the sand poke
            // through as a tooth: keep every shore vertex a hair above the bed (fragments over dry sand are discarded)
            { float thD = terrainH(transformed.xz); if (thD >= -0.05) transformed.y = 0.0; else if (thD > -3.0) transformed.y = max(transformed.y, thD + 0.05); } // land vertices sit flat at sea level: no lifted sheet over the sand
            vec3 tx = vec3(1.0, 0.0, 0.0) + dPx, tz = vec3(0.0, 0.0, 1.0) + dPz;
            vWN = normalize(cross(tz, tx));
            // Jacobian of the horizontal displacement: < 1 near breaking crests
            vJ = Jswell;
            vDepth = -terrainH(transformed.xz) + transformed.y;
            vCrest = disp.y;
          }
        `],
        ['#include <beginnormal_vertex>', 'vec3 objectNormal = vec3(0.0, 1.0, 0.0);'],
      ],
      fragmentPars: /* glsl */ `
        uniform sampler2D tWaterN, tRipple, tFoam, tNoise, tHeight, tRefl;
float hfield(sampler2D t, vec2 uv) { return texture2D(t, clamp(uv, 0.0, 1.0)).r; } // hardware bilinear (R16F is filterable on GLES3)
 uniform vec4 uHull, uGrid; uniform float uHullW; uniform float uNightF, uFogF, uReflF, uStyle; uniform mat4 uReflMatrix;
        uniform vec3 uDeep, uShallow, uSSS; uniform vec3 uSunColor;
        varying vec3 vWN; varying float vJ; varying float vDepth; varying float vCrest;
        float sdCapsule(vec2 p, vec2 a, vec2 b, float r) { vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h) - r; }
      `,
    });
    // second hook for the fragment side (keeps the replace list readable)
    injectWorld(mat, { replace: [
        ['#include <normal_fragment_maps>', /* glsl */ `
          vec3 P = vWPos; float t = uTime;
          vec2 wd = normalize(uWindDir);
          // depth from the rest water level (sea level 0), not the displaced surface: the shoreline then follows the
          // smooth 1 m heightfield and never the wave-lifted triangles of the ocean mesh (no sawtooth on the sand)
          float depthTex = -hfield(tHeight, (P.xz - uGrid.xy) / uGrid.z + 0.5);
          float depth = max(mix(vDepth, depthTex, 1.0 - smoothstep(6.0, 12.0, vDepth)), 0.0);
          float sunHigh = smoothstep(0.45, 0.85, uSunDir.y);
          // detail normals: two scales scrolled with the wind, weaker in the far field
          float distF = clamp((length(P - cameraPosition) - 120.0) / 700.0, 0.0, 1.0);
          // four octaves from two textures, rotated against each other so no direction repeats
          // wind-aligned frame: detail ripples are stretched along the wind (streaks), never a lattice
          mat2 toWind = mat2(wd.x, -wd.y, wd.y, wd.x);   // rotates so x runs along the wind
          mat2 fromWind = mat2(wd.x, wd.y, -wd.y, wd.x);
          vec2 pw = toWind * P.xz;
          float dcam = length(P - cameraPosition);
          float nearF = 1.0 - smoothstep(80.0, 260.0, dcam);
          float farF = smoothstep(0.35, 1.0, distF);
          vec3 n0 = texture2D(tWaterN, pw / vec2(140.0, 60.0) + vec2(t * 0.01, 0.0)).xyz * 2.0 - 1.0;
          vec3 n1 = texture2D(tWaterN, pw / vec2(26.0, 11.0) + vec2(t * 0.05, 0.0) + 0.3).xyz * 2.0 - 1.0;
          vec3 n2 = texture2D(tRipple, pw / vec2(7.5, 3.2) + vec2(t * 0.14, 0.02 * sin(t * 0.3))).xyz * 2.0 - 1.0;
          vec3 n3 = texture2D(tRipple, pw / vec2(2.4, 1.1) + vec2(t * 0.3, 0.0) + 0.6).xyz * 2.0 - 1.0;
          float glassy = smoothstep(1500.0, 6000.0, length(P - cameraPosition));
          vec2 nx = (n0.xy * (0.35 + 0.35 * farF) + n1.xy * 0.5 * (1.0 - 0.6 * farF) + n2.xy * 0.45 * nearF + n3.xy * 0.2 * nearF * nearF) * (1.0 - 0.85 * glassy) * (1.0 - 0.7 * uNightF);
          nx = fromWind * nx;
          vec3 dn = normalize(vec3(nx.x * 0.9 * (1.0 - 0.45 * uStyle), 1.6, nx.y * 0.9 * (1.0 - 0.45 * uStyle)));
          vec3 Nw = normalize(vWN);
          vec3 T = normalize(cross(vec3(0.0, 0.0, 1.0), Nw)); vec3 B = cross(Nw, T);
          vec3 wN = normalize(T * dn.x + Nw * dn.y + B * dn.z);
          wN = normalize(mix(wN, Nw, distF * 0.7));
          // foam: shore, crests, hull
          vec4 fo = texture2D(tFoam, P.xz / 9.0 + wd * t * 0.03);
          vec4 fo2 = texture2D(tFoam, P.xz / 3.1 - wd * t * 0.05 + 0.3);
          float foamTex = fo.r * 0.6 + fo2.r * 0.4;
          float kph = 6.2831853 / 52.0; float surge = 0.5 + 0.5 * sin(kph * dot(wd, P.xz) - sqrt(9.81 / kph) * kph * t + fo.g * 3.0);
          float shoreLine = 1.0 - smoothstep(0.0, 1.0 + fo.g * 1.0 + surge * 1.4, depth);
          float shoreFoam = shoreLine * smoothstep(0.5 - shoreLine * 0.3 - surge * 0.25, 0.9, foamTex) * (0.55 + 0.45 * surge);
          // wash against steep shores: the seabed gradient from the heightfield
          vec2 guv = (P.xz - uGrid.xy) / uGrid.z + 0.5; float gs = 2.5 / uGrid.z;
          float gx = hfield(tHeight, guv + vec2(gs, 0.0)) - hfield(tHeight, guv - vec2(gs, 0.0)); float gz = hfield(tHeight, guv + vec2(0.0, gs)) - hfield(tHeight, guv - vec2(0.0, gs));
          float steep = smoothstep(1.2, 3.5, length(vec2(gx, gz)));
          shoreFoam = max(shoreFoam, steep * (1.0 - smoothstep(0.0, 1.5, depth)) * smoothstep(0.45, 0.75, foamTex + 0.25 * surge) * 0.35);
          vec4 fs = texture2D(tFoam, (toWind * P.xz) / vec2(24.0, 4.0) + vec2(t * 0.06, 0.0));
          float crest = (1.0 - smoothstep(0.2, 0.42, vJ)) * smoothstep(0.6, 0.88, fs.r * 0.7 + foamTex * 0.3 + vCrest * 0.2) * 0.7;
          vec2 hd = vec2(sin(uHull.w), -cos(uHull.w));
          float dh = sdCapsule(P.xz, uHull.xz + hd * uHull.y, uHull.xz - hd * uHull.y, uHullW);
          float hullFoam = (1.0 - smoothstep(-0.2, 1.0 + fo.g * 0.6, dh)) * smoothstep(0.35, 0.75, foamTex + 0.12 * sin(t * 1.3 + fo.g * 6.0)) * 0.85;
          float foam = clamp(shoreFoam * 0.9 + crest + hullFoam, 0.0, 1.0);
          // water body colour: absorption with depth, sky-lit scatter in shallows
          float k = 1.0 - exp(-depth * 0.16);
          vec3 body = mix(uShallow, uDeep, k);
          // alpha: seabed shows through in the shallows, no hard line at the beach
          float alpha = 1.0 - exp(-depth * 0.55);
          alpha = mix(alpha, 1.0, foam * 0.9);
          alpha = mix(alpha, 1.0, distF * 0.3);
          vec3 styleEmis = vec3(0.0);
          if (uStyle > 0.5) {
            // stylised realism: banded depth gradient, painted foam rims, opaque saturated body
            float d1 = smoothstep(0.0, 2.5, depth), d2 = smoothstep(2.5, 9.0, depth), d3 = smoothstep(9.0, 26.0, depth);
            vec3 c0 = vec3(0.32, 0.78, 0.70), c1 = vec3(0.04, 0.42, 0.50), c2 = vec3(0.015, 0.16, 0.36), c3 = vec3(0.006, 0.06, 0.22);
            body = mix(mix(mix(c0, c1, d1), c2, d2), c3, d3);
            float dayF = 1.0 - uNightF;
            // painted foam: a solid collar along every shore whose inner edge is scalloped by a lace texture,
            // then sparse lace streaks fading out over the next few metres, all breathing with the swell
            vec4 lace = texture2D(tFoam, P.xz / 6.0 + wd * t * 0.02);
            vec4 lace2 = texture2D(tFoam, (toWind * P.xz) / vec2(14.0, 3.0) + vec2(t * 0.05, 0.0) + 0.5);
            float collarEdge = 0.5 + 0.35 * surge + (lace.g - 0.5) * 0.7;
            float collar = 1.0 - smoothstep(collarEdge - 0.12, collarEdge + 0.12, depth);
            float laceBand = (1.0 - smoothstep(collarEdge, collarEdge + 2.2, depth)) * smoothstep(0.6, 0.68, lace2.r * 0.6 + lace.r * 0.4 + 0.1 * surge);
            float hullWake = (1.0 - smoothstep(0.2, 3.6, dh)) * smoothstep(0.42, 0.55, lace.r + 0.15 * sin(t * 1.1 + lace.g * 5.0));
            foam = clamp(max(max(collar, laceBand * 0.8), hullWake), 0.0, 1.0) * (0.06 + 0.94 * dayF);
            // opaque body, but fade out in the last half metre so the terrain mesh never cuts a hard polyline through the collar
            // the collar and the first hand-span of water are opaque paint, and the sheet runs a few centimetres past the
            // field's shoreline: where the 2 m terrain grid dips below the plane on the land side, the water covers the
            // wet-sand notch instead of exposing it (the sand wins by depth wherever the grid is above the plane)
            alpha = max(max(max(alpha, 0.72) * smoothstep(0.05, 0.5, depth), foam * 0.97), 0.95 * (1.0 - smoothstep(0.02, 0.35, depth)) * smoothstep(-0.25, -0.18, depthTex));
            if (depthTex < -0.25) discard;
            body = mix(body * 0.04, body, dayF); // near black at night (R2): the moon path and the lanterns do the talking
            styleEmis = body * 0.35 * dayF + vec3(0.06) * foam * dayF; // the collar is lightly self-lit so it stays cream in shade
          }
          diffuseColor.rgb = mix(body * (uStyle > 0.5 ? 0.8 : 0.5), vec3(0.97), foam);
          diffuseColor.a = alpha;
          // stylised: a tighter lobe so the low-sun glitter is a path with dark water either side, not a gold sheet
          roughnessFactor = mix(0.07 + smoothstep(60.0, 300.0, dcam) * 0.07 * (1.0 - 0.6 * uStyle) + distF * mix(0.12, 0.04, uStyle) + uNightF * 0.04 + uFogF * 0.25 + uStyle * (0.14 - 0.1 * sunHigh), 0.85, foam);
          normal = normalize((viewMatrix * vec4(wN, 0.0)).xyz);
          float waterFoam = foam; float waterDepth = depth; vec3 waterN = wN; vec3 waterStyleEmis = styleEmis;
        `],
        ['#include <map_fragment>', ''],
        ['#include <roughnessmap_fragment>', 'float roughnessFactor = roughness;'],
        ['#include <lights_fragment_end>', /* glsl */ `
          #include <lights_fragment_end>
          // night water is near black (R2): the sky-lit specular floor is cut so only the moon path and lanterns read
          reflectedLight.indirectSpecular *= 1.0 - 0.85 * uNightF;
          // a high sun over a chopped surface lights the whole near field white: keep the noon glitter to sparse points
          reflectedLight.directSpecular *= (1.0 - 0.72 * sunHigh * uStyle) * (1.0 - 0.75 * uNightF * uStyle); // night: a narrow moon path, not a marbled sheet
          if (uReflF > 0.0) {
            vec4 rc = uReflMatrix * vec4(vWPos, 1.0);
            vec2 ruv = rc.xy / rc.w + waterN.xz * 0.045 * (1.0 - distF);
            if (ruv.x > 0.0 && ruv.x < 1.0 && ruv.y > 0.0 && ruv.y < 1.0) {
              vec3 refl = texture2D(tRefl, ruv).rgb;
              vec3 Vr = normalize(cameraPosition - vWPos);
              float f0 = 0.035; float fres = f0 + (1.0 - f0) * pow(1.0 - max(dot(Vr, waterN), 0.0), 5.0);
              // replace the sky-only indirect specular where the mirror image has content
              float lum = dot(refl, vec3(0.2126, 0.7152, 0.0722));
              float has = smoothstep(0.0, 0.02, lum);
              // under a high sun the mirror image is a white sky sheet smeared by the chop: ease it toward the IBL term
              reflectedLight.indirectSpecular = mix(reflectedLight.indirectSpecular, refl * fres * (1.0 - waterFoam) * 1.1, has * uReflF * (1.0 - 0.6 * sunHigh));
            }
          }
        `],
        ['#include <emissivemap_fragment>', /* glsl */ `
          totalEmissiveRadiance += waterStyleEmis * (1.0 - waterFoam) * 1.3;
          // sub-surface light through the wave backs, lit from behind by the sun
          vec3 V = normalize(cameraPosition - vWPos);
          float back = pow(clamp(dot(V, -uSunDir + waterN * 0.35), 0.0, 1.0), 4.0);
          float thick = smoothstep(0.0, 1.2, vCrest + 0.3) * smoothstep(0.0, 4.0, waterDepth);
          totalEmissiveRadiance += uSSS * uSunColor * back * thick * 0.02 * (1.0 - waterFoam);
          // sun glitter: extra sharp specular lobe from the finest normals
          vec3 Hh = normalize(V + uSunDir);
          float glit = pow(clamp(dot(waterN, Hh), 0.0, 1.0), 900.0) * smoothstep(0.0, 0.05, uSunDir.y);
          // moon glitter: a narrow sparkle path on the wave backs at night (the key is the moon then, so uSunDir is the moon)
          totalEmissiveRadiance += uSunColor * glit * uNightF * uStyle * 3.0 * (1.0 - 0.9 * uFogF) * (1.0 - waterFoam) * (1.0 - distF);
        `],
    ] });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true; mesh.frustumCulled = false; mesh.renderOrder = 5;
    this.mesh = mesh; this.group.add(mesh);
  }

  setHull(x: number, z: number, headingRad: number, halfLen: number, halfWidth: number): void {
    this.uniforms.uHull.value.set(x, halfLen, z, headingRad); this.uniforms.uHullW.value = halfWidth;
  }
}
