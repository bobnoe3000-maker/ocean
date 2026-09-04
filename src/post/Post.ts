import * as THREE from 'three';
import { EffectComposer, RenderPass, EffectPass, BloomEffect, ToneMappingEffect, ToneMappingMode, VignetteEffect, NoiseEffect, BlendFunction, SMAAEffect, HueSaturationEffect, BrightnessContrastEffect, KernelSize, SepiaEffect } from 'postprocessing';

export class Post {
  readonly composer: EffectComposer;
  readonly bloom: BloomEffect;
  readonly tone: ToneMappingEffect;
  readonly noise: NoiseEffect;
  readonly vignette: VignetteEffect;
  readonly grade: HueSaturationEffect;
  readonly contrast: BrightnessContrastEffect;
  readonly warm: SepiaEffect;

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
    this.warm = new SepiaEffect({ intensity: 1 }); this.warm.blendMode.opacity.value = 0;
    const smaa = new SMAAEffect();
    const effects = quality === 'low' ? [this.bloom, this.tone, this.vignette] : [smaa, this.bloom, this.tone, this.warm, this.grade, this.contrast, this.vignette, this.noise];
    this.composer.addPass(new EffectPass(camera, ...effects));
    void KernelSize;
  }
  setSize(w: number, h: number): void { this.composer.setSize(w, h); }
  setNight(night: number): void { this.grade.saturation -= 0.42 * night; this.contrast.contrast += 0.06 * night; }
  // golden hour: a touch of warm tint that fades out by mid-morning and at night
  setStyle(stylized: boolean): void { this.grade.saturation = stylized ? 0.36 : 0.18; this.contrast.contrast = stylized ? 0.1 : 0.04; this.bloom.intensity = stylized ? 0.55 : 0.32; this.bloom.luminanceMaterial.threshold = stylized ? 0.85 : 1.0; }
  setGolden(g: number): void { this.warm.blendMode.opacity.value = 0.16 * g; this.grade.saturation += 0.1 * g; }
  render(dt: number): void { this.composer.render(dt); }
}
