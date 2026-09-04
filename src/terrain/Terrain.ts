import * as THREE from 'three';
import { Heightfield, GRID } from './Heightfield';
import { injectWorld } from '../core/WorldUniforms';
import { loadSet, loadTex, PbrSet } from '../materials/Textures';

export class Terrain {
  mesh!: THREE.Mesh;
  depthTexture!: THREE.DataTexture; // height in metres, R channel, half float
  readonly group = new THREE.Group();
  material!: THREE.MeshStandardMaterial;

  constructor(private hf: Heightfield, private segments: number) {}

  async build(): Promise<void> {
    const [sand, rock, scrub, noise] = await Promise.all([loadSet('sand'), loadSet('rock'), loadSet('scrub'), loadTex('noise', { srgb: false })]);
    this.buildDepthTexture();
    this.buildMesh(sand, rock, scrub, noise);
  }

  private buildDepthTexture(): void {
    const N = 512; const data = new Uint16Array(N * N);
    const half = GRID.size / 2;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const x = GRID.cx - half + (i / (N - 1)) * GRID.size, z = GRID.cz - half + (j / (N - 1)) * GRID.size;
      data[j * N + i] = THREE.DataUtils.toHalfFloat(this.hf.heightWorld(x, z));
    }
    const t = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.HalfFloatType);
    t.minFilter = t.magFilter = THREE.LinearFilter; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.generateMipmaps = false; t.needsUpdate = true;
    this.depthTexture = t;
  }

  private buildMesh(sand: PbrSet, rock: PbrSet, scrub: PbrSet, noise: THREE.Texture): void {
    const S = this.segments, half = GRID.size / 2;
    const geo = new THREE.PlaneGeometry(GRID.size, GRID.size, S, S);
    geo.rotateX(-Math.PI / 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i) + GRID.cx, z = pos.getZ(i) + GRID.cz;
      pos.setXYZ(i, x, this.hf.heightWorld(x, z), z);
    }
    geo.computeVertexNormals();
    geo.computeBoundingSphere();
    void half;

    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, metalness: 0 });
    this.material = mat;
    injectWorld(mat, {
      uniforms: {
        tSandA: { value: sand.map }, tSandN: { value: sand.normalMap }, tSandO: { value: sand.ormMap },
        tRockA: { value: rock.map }, tRockN: { value: rock.normalMap }, tRockO: { value: rock.ormMap },
        tScrubA: { value: scrub.map }, tScrubN: { value: scrub.normalMap }, tScrubO: { value: scrub.ormMap },
        tNoise: { value: noise },
      },
      vertexPars: 'varying vec3 vWNormal;',
      vertexMain: 'vWNormal = normalize(mat3(modelMatrix) * objectNormal);',
      fragmentPars: /* glsl */ `
        uniform sampler2D tSandA, tSandN, tSandO, tRockA, tRockN, tRockO, tScrubA, tScrubN, tScrubO, tNoise;
        uniform float uSeaLevel;
        varying vec3 vWNormal;
        vec3 unpackN(vec3 c) { return c * 2.0 - 1.0; }
        // Two samples at different scales/rotation, blended: kills visible repetition.
        vec4 sampleAT(sampler2D t, vec2 uv, float n) {
          vec2 uv2 = mat2(0.8, 0.6, -0.6, 0.8) * uv * 2.63 + 0.37;
          return mix(texture2D(t, uv), texture2D(t, uv2), 0.5 + 0.3 * n);
        }
        struct Surf { vec3 a; vec3 n; float r; float ao; };
        Surf planar(sampler2D A, sampler2D Nm, sampler2D O, vec2 uv, float n, vec3 N) {
          Surf s; vec4 a = sampleAT(A, uv, n); vec4 nn = sampleAT(Nm, uv, n); vec4 o = sampleAT(O, uv, n);
          vec3 tn = unpackN(nn.xyz);
          // tangent = world x, bitangent = world -z (uv.y grows toward -z)
          vec3 T = normalize(cross(vec3(0.0, 0.0, -1.0), N)); vec3 B = cross(N, T);
          s.a = a.rgb; s.n = normalize(T * tn.x + B * tn.y + N * tn.z); s.r = o.g; s.ao = o.r; return s;
        }
        Surf triplanar(sampler2D A, sampler2D Nm, sampler2D O, vec3 p, float n, vec3 N) {
          vec3 bw = pow(abs(N), vec3(4.0)); bw /= (bw.x + bw.y + bw.z);
          vec2 ux = p.zy, uy = p.xz, uz = p.xy;
          vec4 ax = sampleAT(A, ux, n), ay = sampleAT(A, uy, n), az = sampleAT(A, uz, n);
          vec4 ox = sampleAT(O, ux, n), oy = sampleAT(O, uy, n), oz = sampleAT(O, uz, n);
          vec3 nx = unpackN(sampleAT(Nm, ux, n).xyz), ny = unpackN(sampleAT(Nm, uy, n).xyz), nz = unpackN(sampleAT(Nm, uz, n).xyz);
          // whiteout blend
          nx = vec3(nx.xy + N.zy, abs(nx.z) * N.x); ny = vec3(ny.xy + N.xz, abs(ny.z) * N.y); nz = vec3(nz.xy + N.xy, abs(nz.z) * N.z);
          Surf s; s.a = ax.rgb * bw.x + ay.rgb * bw.y + az.rgb * bw.z;
          s.n = normalize(nx.zyx * bw.x + ny.xzy * bw.y + nz.xyz * bw.z);
          vec4 o = ox * bw.x + oy * bw.y + oz * bw.z; s.r = o.g; s.ao = o.r; return s;
        }
      `,
      replace: [
        ['#include <normal_fragment_maps>', /* glsl */ `
          vec3 N = normalize(vWNormal);
          vec3 P = vWPos;
          vec4 nz = texture2D(tNoise, P.xz * 0.004);
          vec4 nz2 = texture2D(tNoise, P.xz * 0.035 + 0.3);
          float macro = nz.r * 2.0 - 1.0;
          float slope = 1.0 - N.y;
          float rockW = smoothstep(0.30, 0.55, slope + (nz2.g - 0.5) * 0.25 + macro * 0.08);
          float h = P.y - uSeaLevel;
          float sandW = (1.0 - rockW) * (1.0 - smoothstep(2.2, 5.5, h + (nz2.r - 0.5) * 2.5 + macro * 1.5));
          float scrubW = (1.0 - rockW) * (1.0 - sandW) * smoothstep(0.0, 0.8, h);
          sandW = (1.0 - rockW) * (1.0 - scrubW);
          Surf sS = planar(tSandA, tSandN, tSandO, vec2(P.x, -P.z) * 0.5, nz.g, N);
          Surf sR = triplanar(tRockA, tRockN, tRockO, P * 0.14, nz.g, N);
          Surf sC = planar(tScrubA, tScrubN, tScrubO, vec2(P.x, -P.z) * 0.33, nz.g, N);
          vec3 albedo = sS.a * sandW + sR.a * rockW + sC.a * scrubW;
          vec3 wN = normalize(sS.n * sandW + sR.n * rockW + sC.n * scrubW);
          float rough = sS.r * sandW + sR.r * rockW + sC.r * scrubW;
          float ao = sS.ao * sandW + sR.ao * rockW + sC.ao * scrubW;
          // macro colour variation (kills tiling, adds patchiness)
          albedo *= 0.86 + 0.28 * nz.a;
          albedo = mix(albedo, albedo * vec3(1.06, 1.0, 0.92), macro * 0.5 + 0.5);
          // scree and darker damp sand at the cliff foot
          albedo = mix(albedo, albedo * 0.8, rockW * (1.0 - smoothstep(0.0, 6.0, h)) * 0.6);
          // wet band along the waterline
          float wave = (nz2.b - 0.5) * 0.5 + sin(uTime * 0.7 + P.x * 0.05) * 0.15;
          float wet = 1.0 - smoothstep(-0.2, 0.9, h + wave);
          wet = max(wet, 1.0 - smoothstep(-0.05, 0.35, h)) * (1.0 - rockW * 0.4);
          albedo *= mix(1.0, 0.55, wet);
          rough = mix(rough, 0.22, wet * 0.9);
          // underwater: darker, smoother, slightly green
          float under = 1.0 - smoothstep(-0.3, 0.05, h);
          albedo = mix(albedo, albedo * vec3(0.7, 0.8, 0.75), under);
          diffuseColor.rgb *= albedo;
          roughnessFactor = rough;
          normal = normalize((viewMatrix * vec4(wN, 0.0)).xyz);
          float terrainAO = ao;
        `],
        ['#include <map_fragment>', ''],
        ['#include <roughnessmap_fragment>', 'float roughnessFactor = roughness;'],
        ['#include <aomap_fragment>', 'reflectedLight.indirectDiffuse *= mix(1.0, terrainAO, 0.9); reflectedLight.indirectSpecular *= mix(1.0, terrainAO, 0.9);'],
      ],
    });
    // roughnessmap_fragment is included before normal_fragment_maps in three's
    // standard shader, so roughnessFactor is declared before we assign it.
    const mesh = new THREE.Mesh(geo, mat);
    mesh.receiveShadow = true; mesh.castShadow = true;
    mesh.frustumCulled = false;
    this.mesh = mesh;
    this.group.add(mesh);
  }
}
