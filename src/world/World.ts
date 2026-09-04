import * as THREE from 'three';
import { SceneSpec } from '../core/Spec';
import { W } from '../core/WorldUniforms';
import { initTextures, textureMemoryBytes, loadTex } from '../materials/Textures';
import { Sky } from '../sky/Sky';
import { Lighting } from '../lighting/Lighting';
import { Heightfield, FORWARD, LAYOUT, TARGET, vistaToWorld } from '../terrain/Heightfield';
import { Terrain } from '../terrain/Terrain';
import { Ocean } from '../ocean/Ocean';
import { Post } from '../post/Post';
import { installPCSS } from '../lighting/PCSS';

export interface Stats {
  calls: number; triangles: number; programs: number; textureMB: number; geometries: number; textures: number;
  frameMs: { p50: number; p95: number; p99: number; n: number; headless_smoke_only: boolean };
  spec: SceneSpec; exposure: number; sun: number[]; size: number[];
}

export interface Extra { group: THREE.Object3D; update?(t: number, dt: number): void; apply?(spec: SceneSpec, L: Lighting): void }

export class World {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera: THREE.PerspectiveCamera;
  readonly sky = new Sky();
  readonly lighting: Lighting;
  readonly hf: Heightfield;
  terrain!: Terrain; ocean!: Ocean; post!: Post;
  spec: SceneSpec;
  extras: Extra[] = [];
  private frameTimes: number[] = [];
  private last = performance.now();
  animT = 0;
  readonly target = new THREE.Vector3();

  constructor(canvas: HTMLCanvasElement, spec: SceneSpec) {
    this.spec = spec;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.NoToneMapping;
    this.renderer.shadowMap.enabled = true;
    if (spec.quality === 'high') { installPCSS(); this.renderer.shadowMap.type = THREE.BasicShadowMap; } else this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 3));
    this.renderer.info.autoReset = false;
    initTextures(this.renderer);
    this.camera = new THREE.PerspectiveCamera(50, 1, 1, 12000);
    this.scene.add(this.camera);
    this.lighting = new Lighting(this.renderer, this.scene, this.sky);
    this.hf = new Heightfield(spec.seed);
  }

  async build(): Promise<void> {
    const q = this.spec.quality;
    await this.sky.load();
    W.tFogNoise.value = await loadTex('noise');
    this.terrain = new Terrain(this.hf, q === 'low' ? 192 : q === 'medium' ? 288 : 384);
    await this.terrain.build();
    this.scene.add(this.terrain.group);
    this.ocean = new Ocean(this.terrain.depthTexture, q === 'low' ? 160 : q === 'medium' ? 240 : 320);
    await this.ocean.build();
    this.scene.add(this.ocean.group);
    const [bx, bz] = vistaToWorld(LAYOUT.brig[0], LAYOUT.brig[1]);
    this.ocean.setHull(bx, bz, LAYOUT.brigHeading * Math.PI / 180, 14, 3.4);
    this.lighting.setShadowQuality(q === 'low' ? 1024 : q === 'medium' ? 2048 : 4096, q === 'high' ? 3 : 2);
    this.post = new Post(this.renderer, this.scene, this.camera, q);
    this.resize();
    this.apply(this.spec);
  }

  addExtra(e: Extra): void { this.extras.push(e); this.scene.add(e.group); }

  resize(): void {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.post?.setSize(w * this.renderer.getPixelRatio(), h * this.renderer.getPixelRatio());
    this.camera.aspect = w / h;
    this.placeCamera();
  }

  placeCamera(): void {
    const pitch = 58 * Math.PI / 180;
    const [tx, tz] = vistaToWorld(TARGET[0] + this.spec.lu, TARGET[1] + this.spec.lw); this.target.set(tx, 0, tz);
    const aspect = Math.max(this.camera.aspect, 390 / 844);
    const halfH = Math.tan(this.camera.fov * Math.PI / 360);
    const D = this.spec.zoom / (2 * halfH * aspect);
    const f = new THREE.Vector3(FORWARD[0], 0, FORWARD[1]);
    this.camera.position.copy(this.target).addScaledVector(f, -D * Math.cos(pitch)).add(new THREE.Vector3(0, D * Math.sin(pitch), 0));
    this.camera.lookAt(this.target);
    this.camera.near = Math.max(0.5, D * 0.04); this.camera.far = 14000;
    this.camera.updateProjectionMatrix();
  }

  apply(spec: SceneSpec): void {
    this.spec = spec;
    this.animT = spec.t;
    W.uTime.value = this.animT;
    this.placeCamera();
    this.lighting.apply(spec);
    this.lighting.fitShadow(this.target, spec.zoom, this.lighting.keyDir);
    this.renderer.toneMappingExposure = this.lighting.exposure;
    this.post.setNight(this.lighting.night);
    this.ocean.uniforms.uNightF.value = this.lighting.night;
    this.sky.uniforms.uIncludeSun.value = spec.sun ? 1 : 0;
    const hide = spec.hide.split(',').filter(Boolean);
    this.ocean.group.visible = !hide.includes('ocean'); this.terrain.group.visible = !hide.includes('terrain'); this.sky.mesh.visible = !hide.includes('sky');
    for (const e of this.extras) e.group.visible = !hide.includes(e.group.name);
    this.renderer.shadowMap.enabled = !hide.includes('shadows');
    for (const e of this.extras) e.apply?.(spec, this.lighting);
    this.frameTimes.length = 0;
  }

  frame(): void {
    const now = performance.now();
    const dt = Math.min(0.1, (now - this.last) / 1000); this.last = now;
    if (!this.spec.pause) this.animT += dt;
    W.uTime.value = this.animT;
    for (const e of this.extras) e.update?.(this.animT, dt);
    if (!this.post) return;
    this.renderer.info.reset();
    this.post.render(dt);
    this.frameTimes.push(performance.now() - now);
    if (this.frameTimes.length > 240) this.frameTimes.shift();
  }

  stats(): Stats {
    const ft = [...this.frameTimes].sort((a, b) => a - b);
    const pc = (p: number) => (ft.length ? ft[Math.min(ft.length - 1, Math.floor(p * ft.length))] : 0);
    const info = this.renderer.info;
    const rt = this.renderer.getSize(new THREE.Vector2()).multiplyScalar(this.renderer.getPixelRatio());
    return {
      calls: info.render.calls, triangles: info.render.triangles, programs: info.programs?.length ?? 0,
      textureMB: Math.round(textureMemoryBytes() / 1048576 * 10) / 10, geometries: info.memory.geometries, textures: info.memory.textures,
      frameMs: { p50: pc(0.5), p95: pc(0.95), p99: pc(0.99), n: ft.length, headless_smoke_only: true },
      spec: this.spec, exposure: this.lighting.exposure, sun: W.uSunDir.value.toArray(), size: [rt.x, rt.y],
    };
  }
}
