import * as THREE from 'three';
import { EffectComposer, RenderPass, EffectPass, BloomEffect, ToneMappingEffect, ToneMappingMode, VignetteEffect, NoiseEffect, BlendFunction, SMAAEffect, HueSaturationEffect, BrightnessContrastEffect, KernelSize } from 'postprocessing';

export class Post {
  readonly composer: EffectComposer;
  readonly bloom: BloomEffect;
  readonly tone: ToneMappingEffect;
  readonly noise: NoiseEffect;
  readonly vignette: VignetteEffect;
  readonly grade: HueSaturationEffect;
  readonly contrast: BrightnessContrastEffect;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, quality: 'low' | 'medium' | 'high') {
    this.composer = new EffectComposer(renderer, { frameBufferType: THREE.HalfFloatType, multisampling: 0 });
    this.composer.addPass(new RenderPass(scene, camera));
    this.bloom = new BloomEffect({ luminanceThreshold: 1.0, luminanceSmoothing: 0.4, intensity: 0.32, mipmapBlur: true, radius: 0.72, levels: quality === 'low' ? 5 : 8 });
    this.tone = new ToneMappingEffect({ mode: ToneMappingMode.AGX });
    this.vignette = new VignetteEffect({ offset: 0.28, darkness: 0.42 });
    this.noise = new NoiseEffect({ premultiply: true, blendFunction: BlendFunction.SCREEN });
    this.noise.blendMode.opacity.value = 0.045;
    this.grade = new HueSaturationEffect({ saturation: 0.18 });
    this.contrast = new BrightnessContrastEffect({ brightness: 0.0, contrast: 0.04 });
    const smaa = new SMAAEffect();
    const effects = quality === 'low' ? [this.bloom, this.tone, this.vignette] : [smaa, this.bloom, this.tone, this.grade, this.contrast, this.vignette, this.noise];
    this.composer.addPass(new EffectPass(camera, ...effects));
    void KernelSize;
  }
  setSize(w: number, h: number): void { this.composer.setSize(w, h); }
  setNight(night: number): void { this.grade.saturation = 0.18 - 0.42 * night; this.contrast.contrast = 0.04 + 0.06 * night; }
  render(dt: number): void { this.composer.render(dt); }
}
