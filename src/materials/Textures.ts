import * as THREE from 'three';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';

export interface PbrSet { map: THREE.Texture; normalMap: THREE.Texture; ormMap: THREE.Texture }

let loader: KTX2Loader | null = null;
let textureBytes = 0;
const cache = new Map<string, Promise<THREE.Texture>>();

export function initTextures(renderer: THREE.WebGLRenderer): void {
  loader = new KTX2Loader().setTranscoderPath('/basis/').detectSupport(renderer);
}
export function textureMemoryBytes(): number { return textureBytes; }

function account(t: THREE.Texture): void {
  const img = t.image as { width: number; height: number };
  const mips = (t as THREE.CompressedTexture).mipmaps;
  if (mips && mips.length) {
    for (const m of mips) textureBytes += (m as unknown as { data: ArrayBufferView }).data.byteLength;
  } else {
    textureBytes += img.width * img.height * 4 * (t.generateMipmaps ? 1.333 : 1);
  }
}

export function loadTex(name: string, opts: { srgb?: boolean; repeat?: boolean; aniso?: number } = {}): Promise<THREE.Texture> {
  const key = name + JSON.stringify(opts);
  let p = cache.get(key);
  if (!p) {
    p = new Promise<THREE.Texture>((resolve, reject) => {
      const done = (t: THREE.Texture) => {
        t.colorSpace = opts.srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
        t.wrapS = t.wrapT = opts.repeat === false ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
        t.anisotropy = opts.aniso ?? 8;
        t.needsUpdate = true;
        account(t);
        resolve(t);
      };
      if (name.endsWith('.png')) {
        new THREE.TextureLoader().load('/textures/png/' + name, (t) => { t.flipY = false; t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; done(t); }, undefined, reject);
      } else {
        loader!.load('/textures/' + name + '.ktx2', done, undefined, reject);
      }
    });
    cache.set(key, p);
  }
  return p;
}

export async function loadSet(name: string, aniso = 8): Promise<PbrSet> {
  const [map, normalMap, ormMap] = await Promise.all([
    loadTex(name + '_albedo', { srgb: true, aniso }), loadTex(name + '_normal', { aniso }), loadTex(name + '_orm', { aniso }),
  ]);
  return { map, normalMap, ormMap };
}

export function applySet(mat: THREE.MeshStandardMaterial, set: PbrSet, repeat = 1, repeatV = repeat): void {
  mat.map = set.map; mat.normalMap = set.normalMap;
  mat.roughnessMap = set.ormMap; mat.aoMap = set.ormMap; mat.metalnessMap = set.ormMap;
  mat.map.repeat.set(repeat, repeatV);
  // Note: three shares one uv transform (map's) across all maps unless per-map transform is set
  mat.normalMap.repeat.set(repeat, repeatV); mat.roughnessMap.repeat.set(repeat, repeatV);
  mat.needsUpdate = true;
}
