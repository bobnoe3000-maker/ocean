import * as THREE from 'three';
import { ATMO, moonDirection, scatterCPU, sunDirection, transmittanceCPU } from '../core/Atmosphere';
import { W } from '../core/WorldUniforms';
import { Sky } from '../sky/Sky';
import { SceneSpec } from '../core/Spec';
import { FORWARD } from '../terrain/Heightfield';
import { setPCSSParams } from './PCSS';

// Key light (sun by day, moon by night), image-based lighting baked from the
// sky dome, exposure, and the fog colours, all from the one atmosphere model.
export class Lighting {
  readonly key = new THREE.DirectionalLight(0xffffff, 1);
  readonly fill = new THREE.DirectionalLight(0xffffff, 0); // moon while the sun is still up (twilight), unused otherwise
  exposure = 1;
  private pmrem: THREE.PMREMGenerator;
  private envRT: THREE.WebGLRenderTarget | null = null;
  readonly sunE = new THREE.Vector3(); readonly skyE = new THREE.Vector3(); readonly moonE = new THREE.Vector3();
  night = 0;

  constructor(private renderer: THREE.WebGLRenderer, private scene: THREE.Scene, private sky: Sky) {
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.key.castShadow = true;
    this.key.shadow.mapSize.set(2048, 2048);
    this.key.shadow.bias = -0.0004; this.key.shadow.normalBias = 0.08; this.key.shadow.radius = 2;
    scene.add(this.key, this.key.target, this.fill);
  }

  setShadowQuality(size: number, radius: number): void {
    this.key.shadow.mapSize.set(size, size);
    this.key.shadow.radius = radius;
    if (this.key.shadow.map) { this.key.shadow.map.dispose(); this.key.shadow.map = null; }
  }

  // Fit the shadow frustum to the visible footprint around the camera target.
  fitShadow(target: THREE.Vector3, zoom: number, lightDir: THREE.Vector3): void {
    const half = zoom * 1.75;
    const c = target.clone().addScaledVector(new THREE.Vector3(FORWARD[0], 0, FORWARD[1]), zoom * 0.5);
    this.key.position.copy(c).addScaledVector(lightDir, 900);
    this.key.target.position.copy(c);
    const cam = this.key.shadow.camera;
    cam.left = -half; cam.right = half; cam.top = half; cam.bottom = -half; cam.near = 200; cam.far = 1800;
    cam.updateProjectionMatrix();
    this.key.shadow.normalBias = 0.03 + zoom * 0.0009;
    this.key.shadow.bias = -0.0005;
    setPCSSParams(cam.far - cam.near, half * 2, this.key.shadow.mapSize.x);
  }

  apply(spec: SceneSpec): void {
    const sunDir = sunDirection(spec.time), moonDir = moonDirection(spec.time);
    W.uSunDir.value.copy(sunDir); W.uMoonDir.value.copy(moonDir);
    const ro = new THREE.Vector3(0, ATMO.Re + 60, 0);
    const fogMul = spec.weather === 'fog' ? 0.35 : 1;
    // irradiance of each light at the ground
    const trS = transmittanceCPU(ro, sunDir);
    const sunUp = THREE.MathUtils.smoothstep(sunDir.y, -0.02, 0.06);
    this.sunE.copy(trS).multiplyScalar(ATMO.sunIntensity * sunUp * fogMul);
    const trM = transmittanceCPU(ro, moonDir);
    const moonUp = THREE.MathUtils.smoothstep(moonDir.y, -0.02, 0.08);
    this.moonE.copy(trM).multiply(new THREE.Vector3(0.72, 0.86, 1.0)).multiplyScalar(ATMO.moonIntensity * moonUp * fogMul);
    // sky irradiance estimate: sample a few directions
    const dirs = [[0, 1, 0], [0.7, 0.7, 0], [-0.7, 0.7, 0], [0, 0.7, 0.7], [0, 0.7, -0.7], [0.5, 0.3, 0.5], [-0.5, 0.3, -0.5], [0.5, 0.3, -0.5], [-0.5, 0.3, 0.5]];
    this.skyE.set(0, 0, 0);
    for (const d of dirs) {
      const rd = new THREE.Vector3(d[0], d[1], d[2]).normalize();
      this.skyE.add(scatterCPU(ro, rd, sunDir, ATMO.sunIntensity, 8, 3).multiplyScalar(rd.y));
      this.skyE.add(scatterCPU(ro, rd, moonDir, ATMO.moonIntensity, 6, 2).multiplyScalar(rd.y));
    }
    this.skyE.multiplyScalar(Math.PI * 2 / dirs.length);

    this.night = 1 - THREE.MathUtils.smoothstep(sunDir.y, -0.10, 0.02);
    W.uNight.value = this.night;
    // key light: sun, or moon when the sun is down
    const useMoon = sunDir.y < -0.06;
    const dir = useMoon ? moonDir : sunDir;
    const E = useMoon ? this.moonE : this.sunE;
    const lum = 0.2126 * E.x + 0.7152 * E.y + 0.0722 * E.z;
    this.key.color.setRGB(E.x / Math.max(lum, 1e-4), E.y / Math.max(lum, 1e-4), E.z / Math.max(lum, 1e-4), THREE.LinearSRGBColorSpace);
    this.key.intensity = lum;
    this.key.visible = lum > 1e-4;
    W.uSunColor.value.copy(useMoon ? this.moonE : this.sunE);
    // twilight fill: moon as a second light while the sun is low but up
    const fillE = useMoon ? this.sunE : this.moonE;
    const fl = 0.2126 * fillE.x + 0.7152 * fillE.y + 0.0722 * fillE.z;
    this.fill.intensity = fl; this.fill.visible = fl > 1e-4;
    if (fl > 1e-4) this.fill.color.setRGB(fillE.x / fl, fillE.y / fl, fillE.z / fl, THREE.LinearSRGBColorSpace);
    this.fill.position.copy(useMoon ? sunDir : moonDir).multiplyScalar(900); this.fill.target.position.set(0, 0, 0);
    this.keyDir = dir.clone();

    // fog / aerial perspective colours from the same model
    const hz = (az: THREE.Vector3, el: number) => new THREE.Vector3(az.x, 0, az.z).normalize().multiplyScalar(Math.cos(el)).setY(Math.sin(el));
    const perp = new THREE.Vector3(-dir.z, 0, dir.x).normalize();
    const skyCol = (rd: THREE.Vector3) => scatterCPU(ro, rd, sunDir, ATMO.sunIntensity, 10, 4).add(scatterCPU(ro, rd, moonDir, ATMO.moonIntensity, 8, 3));
    const horizonSide = skyCol(hz(perp, 0.14)).add(skyCol(hz(perp.clone().negate(), 0.14))).multiplyScalar(0.5);
    const horizonSun = skyCol(hz(dir, 0.10));
    const zenith = skyCol(new THREE.Vector3(0, 1, 0));
    const avgUnused = zenith;
    if (spec.weather === 'fog') {
      // mist: bright, desaturated, lit by the whole sky and the sun
      // a sunlit bank: droplets are lit by the clear sun from above plus the whole sky, like a white cloud top
      const sunClear = this.sunE.clone().multiplyScalar(1 / fogMul);
      const bank = sunClear.multiplyScalar(0.55 * Math.max(sunDir.y, 0.12)).add(this.skyE).add(this.moonE.clone().multiplyScalar(1.5)).multiplyScalar(0.85 / Math.PI);
      const l = 0.2126 * bank.x + 0.7152 * bank.y + 0.0722 * bank.z;
      W.uFogSky.value.copy(bank).lerp(new THREE.Vector3(l, l, l), 0.35);
      W.uFogSun.value.copy(bank).multiplyScalar(1.25).add(horizonSun.clone().multiplyScalar(0.15));
      void avgUnused;
      // a bank of mist on the water: dense but shallow, so the hills and mast tops stand clear of it
      W.uFogDensity.value = 0.024; W.uFogHeight.value = 18; W.uFogSunPow.value = 3; W.uFogPatch.value = 1; W.uFogHaze.value = 0.0028;
    } else {
      W.uFogSky.value.copy(horizonSide).multiplyScalar(0.7);
      W.uFogSun.value.copy(horizonSun).multiplyScalar(0.8);
      W.uFogDensity.value = 0.00009; W.uFogHeight.value = 600; W.uFogSunPow.value = 10; W.uFogPatch.value = 0; W.uFogHaze.value = 0.0;
    }
    // exposure: key on the brightest lambertian white in the scene
    const white = (v: THREE.Vector3) => (0.2126 * v.x + 0.7152 * v.y + 0.0722 * v.z) / Math.PI;
    // fog dims the sun but the eye does not fully compensate: key on the clear-sky sun
    const keyLum = white(this.sunE) / fogMul * (0.6 + 0.4 * fogMul) * Math.max(sunDir.y, 0.12) + white(this.moonE) * 2.5 + white(this.skyE) * 1.0 + 0.0004;
    this.exposure = THREE.MathUtils.clamp((0.38 + 0.16 * THREE.MathUtils.smoothstep(sunDir.y, 0.3, 0.9)) / keyLum, 0.05, 80);

    // scotopic night: the eye trades brightness for sensitivity, the scene stays dark
    this.exposure *= 1 - 0.45 * this.night;

    this.bakeEnvironment();
  }
  keyDir = new THREE.Vector3(0, 1, 0);

  private bakeEnvironment(): void {
    // Sun disc excluded: the directional light carries the direct term.
    this.sky.uniforms.uIncludeSun.value = 0; this.sky.uniforms.uStars.value = 0; this.sky.uniforms.uFogOnSky.value = 1;
    const s = new THREE.Scene(); s.add(this.sky.mesh);
    // ground bounce: a warm sand disc below the horizon so shaded surfaces pick up bounced light
    const gE = this.sunE.clone().multiplyScalar(Math.max(W.uSunDir.value.y, 0)).add(this.skyE).add(this.moonE.clone().multiplyScalar(Math.max(W.uMoonDir.value.y, 0)));
    const ground = new THREE.Mesh(new THREE.CircleGeometry(5000, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4 * gE.x / Math.PI, 0.38 * gE.y / Math.PI, 0.34 * gE.z / Math.PI), side: THREE.DoubleSide }));
    ground.rotation.x = -Math.PI / 2; ground.position.y = -30; s.add(ground);
    if (this.envRT) this.envRT.dispose();
    this.envRT = this.pmrem.fromScene(s, 0.02, 1, 12000);
    this.scene.environment = this.envRT.texture;
    this.scene.environmentIntensity = 1.7;
    this.sky.uniforms.uIncludeSun.value = 1; this.sky.uniforms.uStars.value = 1;
    this.scene.add(this.sky.mesh);
  }
}
