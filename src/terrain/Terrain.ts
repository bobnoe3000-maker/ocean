import * as THREE from 'three';
import { Heightfield, GRID, RIGHT, FORWARD, LAYOUT } from './Heightfield';
import { injectWorld } from '../core/WorldUniforms';
import { loadSet, loadTex, PbrSet } from '../materials/Textures';

export class Terrain {
  mesh!: THREE.Mesh;
  depthTexture!: THREE.DataTexture; // height in metres, R channel, half float
  readonly group = new THREE.Group();
  material!: THREE.MeshStandardMaterial;

  constructor(private hf: Heightfield, private segments: number) {}

  async build(): Promise<void> {
    const [sand, rock, scrub, stone, noise] = await Promise.all([loadSet('sand'), loadSet('rock'), loadSet('scrub'), loadSet('stone'), loadTex('noise', { srgb: false })]);
    this.buildDepthTexture();
    this.buildMesh(sand, rock, scrub, stone, noise);
  }

  private buildDepthTexture(): void {
    const N = 1024; const data = new Uint16Array(N * N);
    const half = GRID.size / 2;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const x = GRID.cx - half + (i / (N - 1)) * GRID.size, z = GRID.cz - half + (j / (N - 1)) * GRID.size;
      data[j * N + i] = THREE.DataUtils.toHalfFloat(this.hf.heightWorld(x, z));
    }
    const t = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.HalfFloatType);
    t.minFilter = t.magFilter = THREE.LinearFilter; t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping; t.generateMipmaps = false; t.needsUpdate = true;
    this.depthTexture = t;
  }

  private buildMesh(sand: PbrSet, rock: PbrSet, scrub: PbrSet, stone: PbrSet, noise: THREE.Texture): void {
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
        tStoneA: { value: stone.map }, tStoneN: { value: stone.normalMap }, tStoneO: { value: stone.ormMap },
        tNoise: { value: noise }, tHeight: { value: this.depthTexture }, uGrid: { value: new THREE.Vector4(GRID.cx, GRID.cz, GRID.size, 0) },
        uVista: { value: new THREE.Matrix3().set(RIGHT[0], RIGHT[1], 0, FORWARD[0], FORWARD[1], 0, 0, 0, 1) },
        uBay: { value: new THREE.Vector4(LAYOUT.bayC[0], LAYOUT.bayC[1], 76, 136) },
      },
      vertexPars: 'varying vec3 vWNormal;',
      vertexMain: 'vWNormal = normalize(mat3(modelMatrix) * objectNormal);',
      fragmentPars: /* glsl */ `
        uniform sampler2D tSandA, tSandN, tSandO, tRockA, tRockN, tRockO, tScrubA, tScrubN, tScrubO, tStoneA, tStoneN, tStoneO, tNoise;
        uniform mat3 uVista; uniform vec4 uBay; uniform sampler2D tHeight; uniform vec4 uGrid;
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
          vec4 nz3 = texture2D(tNoise, P.xz * 0.0012 + 0.61);
          float macro = nz.r * 2.0 - 1.0;
          float slope = 1.0 - N.y;
          float rockW = smoothstep(0.16, 0.42, slope + (nz2.g - 0.5) * 0.25 + macro * 0.08);
          // outcrops: patches of bare rock on the ridges and shoulders, from a low-frequency cell field
          float outcrop = smoothstep(0.56, 0.72, nz.a * 0.6 + nz3.b * 0.4 + macro * 0.15) * smoothstep(0.03, 0.1, slope + (nz2.r - 0.5) * 0.1) * smoothstep(4.0, 12.0, P.y);
          rockW = max(rockW, outcrop);
          rockW = max(rockW, smoothstep(26.0, 40.0, P.y + (nz2.g - 0.5) * 10.0) * smoothstep(0.02, 0.08, slope));
          // height from the 1 m heightfield texture: the shore contour is smooth, not the mesh's polyline
          float hTex = texture2D(tHeight, (P.xz - uGrid.xy) / uGrid.z + 0.5).r;
          float h = mix(P.y, hTex, 1.0 - smoothstep(1.5, 6.0, abs(P.y))) - uSeaLevel;
          vec2 vis = (uVista * vec3(P.x, P.z, 1.0)).xy;
          vec2 bd = vis - uBay.xy; float br = length(bd); float bth = degrees(atan(bd.y, bd.x));
          // sand: the shore band everywhere, dunes only around the bay; the interior plateau is scrub and rock, not a tan stain
          float sandW = (1.0 - rockW) * (1.0 - smoothstep(2.2, 5.5, h + (nz2.r - 0.5) * 2.5 + macro * 1.5)) * max(1.0 - smoothstep(135.0, 165.0, br), 1.0 - smoothstep(1.0, 2.2, h));
          float scrubW = (1.0 - rockW) * (1.0 - sandW) * smoothstep(0.0, 0.8, h);
          sandW = (1.0 - rockW) * (1.0 - scrubW);
          // town terrace: packed earth and worn cobbles between the houses
          float townW = smoothstep(uBay.z - 4.0, uBay.z + 2.0, br) * (1.0 - smoothstep(uBay.w - 12.0, uBay.w + 6.0, br + (nz2.r - 0.5) * 14.0)) * smoothstep(26.0, 36.0, bth) * (1.0 - smoothstep(146.0, 156.0, bth)) * (1.0 - rockW) * smoothstep(0.3, 1.2, h);
          sandW *= 1.0 - townW; scrubW *= 1.0 - townW;
          // terraces behind the town: dry-stone retaining walls painted along the height contours
          // (terrace walls read as pale contour lines from the vista camera; the stylised hill is painted as masses instead)
          float terrW = 0.0;
          float contour = fract(hTex / 3.4);
          float wallLine = smoothstep(0.88, 0.93, contour) * (1.0 - smoothstep(0.97, 1.0, contour)) * terrW * smoothstep(0.35, 0.6, nz2.a * 0.6 + nz.g * 0.4) * 0.55;
          float wallShade = smoothstep(0.55, 0.8, contour) * (1.0 - smoothstep(0.8, 0.95, contour)) * terrW * 0.25;
          vec3 albedo = vec3(0.0); vec3 wN = vec3(0.0); float rough = 0.0; float ao = 0.0;
          if (sandW > 0.004) {
            // sand: the ripple grain is softened (it read as one diagonal micro-pattern with moire) and a second,
            // coarser sample breaks its repeat; macro colour comes from two noise scales
            Surf sS = planar(tSandA, tSandN, tSandO, vec2(P.x, -P.z) * 0.5, nz.g, N);
            Surf sS2 = planar(tSandA, tSandN, tSandO, vec2(-P.z, P.x) * 0.13 + 0.37, nz.g, N);
            sS.a = mix(sS.a, sS2.a, 0.45); sS.n = normalize(mix(sS.n, sS2.n, 0.5));
            sS.a *= mix(vec3(0.86, 0.82, 0.74), vec3(1.05, 1.02, 0.98), smoothstep(0.3, 0.7, nz3.g * 0.6 + nz.a * 0.4));
            sS.a *= mix(vec3(0.94, 0.9, 0.84), vec3(1.0), smoothstep(0.35, 0.65, nz2.g));
            albedo += sS.a * sandW; wN += normalize(mix(N, sS.n, 0.4)) * sandW; rough += sS.r * sandW; ao += sS.ao * sandW; }
          if (rockW > 0.004) { Surf sR = triplanar(tRockA, tRockN, tRockO, P * 0.14, nz.g, N); albedo += sR.a * rockW; wN += sR.n * rockW; rough += sR.r * rockW; ao += sR.ao * rockW; }
          if (scrubW > 0.004) { Surf sC = planar(tScrubA, tScrubN, tScrubO, vec2(P.x, -P.z) * 0.33, nz.g, N); sC.a *= mix(vec3(0.6, 0.6, 0.52), vec3(1.0, 1.0, 0.95), smoothstep(0.3, 0.7, nz3.r)); sC.a = mix(sC.a, vec3(dot(sC.a, vec3(0.333))) * vec3(0.56, 0.8, 0.46), 0.7); sC.a *= mix(vec3(1.0), vec3(0.5, 0.66, 0.42), smoothstep(0.4, 0.75, nz3.g + nz.a * 0.3)); // green masses, not tan: the golden sun warms them enough albedo += sC.a * scrubW; wN += sC.n * scrubW; rough += sC.r * scrubW; ao += sC.ao * scrubW; }
          if (townW > 0.004) {
            Surf sT = planar(tStoneA, tStoneN, tStoneO, vec2(P.x, -P.z) * 0.9, nz.g, N);
            Surf sD = planar(tScrubA, tScrubN, tScrubO, vec2(P.x, -P.z) * 0.5 + 0.37, nz.g, N);
            float cob = smoothstep(0.35, 0.65, nz2.a + (nz.b - 0.5) * 0.4);
            vec3 ta = mix(sD.a * vec3(1.05, 0.98, 0.9), sT.a * vec3(0.95, 0.93, 0.9), cob);
            albedo += ta * townW; wN += normalize(mix(sD.n, sT.n, cob)) * townW; rough += mix(sD.r, sT.r, cob) * townW; ao += mix(sD.ao, sT.ao, cob) * townW;
          }
          wN = normalize(wN);
          // macro colour variation (kills tiling, adds patchiness)
          albedo *= (0.86 + 0.28 * nz.a) * (0.9 + 0.2 * nz3.g);
          albedo = mix(albedo, albedo * vec3(0.93, 0.9, 0.86), sandW * smoothstep(0.45, 0.7, nz3.r) * 0.6);
          albedo = mix(albedo, albedo * vec3(1.06, 1.0, 0.92), macro * 0.5 + 0.5);
          // scree and darker damp sand at the cliff foot
          albedo = mix(albedo, albedo * 0.8, rockW * (1.0 - smoothstep(0.0, 6.0, h)) * 0.6);
          // wet band along the waterline
          float wave = (nz2.b - 0.5) * 0.5 + sin(uTime * 0.7 + P.x * 0.05) * 0.15;
          float wet = 1.0 - smoothstep(-0.2, 1.4, h + wave);
          wet = max(wet, 1.0 - smoothstep(-0.05, 0.5, h)) * (1.0 - rockW * 0.4);
          albedo *= mix(1.0, 0.5, wet);
          rough = mix(rough, 0.12, wet * 0.95);
          // terrace walls: grey stone with a shadowed base, and a strip of bare earth above each wall
          if (wallLine > 0.004) { Surf sW = triplanar(tStoneA, tStoneN, tStoneO, P * 0.7, nz.g, N); albedo = mix(albedo, sW.a * 0.55, wallLine); wN = normalize(mix(wN, sW.n, wallLine)); rough = mix(rough, sW.r, wallLine); }
          albedo *= 1.0 - wallShade * 0.35;
          // shore wash: the water's foam collar is painted onto the sand just above and below the waterline,
          // so the terrain mesh's cut through the water plane is invisible (both sides carry the same collar)
          {
            float lace = texture2D(tNoise, P.xz * 0.08 + uWindDir * uTime * 0.01).b;
            float washEdge = 0.55 + (lace - 0.5) * 0.7 + 0.25 * sin(uTime * 0.7 + P.x * 0.05 + P.z * 0.03);
            float wash = (1.0 - smoothstep(washEdge - 0.25, washEdge + 0.25, h)) * smoothstep(-1.4, -0.4, h) * sandW;
            albedo = mix(albedo, vec3(0.93, 0.95, 0.94), wash * 0.9 * (1.0 - 0.8 * uNight));
            rough = mix(rough, 0.6, wash);
          }
          // wrack line: dark weed and debris left at the high-tide mark
          float wrack = (1.0 - smoothstep(0.0, 0.35, abs(h - 0.75 + (nz2.g - 0.5) * 0.5))) * smoothstep(0.35, 0.7, nz2.a + nz.b * 0.3) * sandW;
          albedo = mix(albedo, vec3(0.2, 0.15, 0.1), wrack * 0.95);
          rough = mix(rough, 0.6, wrack * 0.5);
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
