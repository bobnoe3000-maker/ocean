import * as THREE from 'three';

// Planar reflection of the scene in the water plane (y = 0), rendered once per
// frame at reduced resolution with the water hidden and everything below the
// plane clipped. The ocean shader samples it with normal-perturbed screen uv.
export class Reflection {
  readonly target: THREE.WebGLRenderTarget;
  readonly camera = new THREE.PerspectiveCamera();
  readonly textureMatrix = new THREE.Matrix4();
  private plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  private clip = [new THREE.Plane(new THREE.Vector3(0, 1, 0), 0.05)];
  scale: number;

  constructor(private renderer: THREE.WebGLRenderer, scale = 0.5) {
    this.scale = scale;
    this.target = new THREE.WebGLRenderTarget(256, 256, { type: THREE.HalfFloatType, depthBuffer: true, samples: 0 });
    this.target.texture.minFilter = THREE.LinearFilter; this.target.texture.magFilter = THREE.LinearFilter;
  }

  setSize(w: number, h: number): void { this.target.setSize(Math.max(64, Math.round(w * this.scale)), Math.max(64, Math.round(h * this.scale))); }

  render(scene: THREE.Scene, mainCamera: THREE.PerspectiveCamera, hide: THREE.Object3D[]): void {
    const cam = this.camera;
    // mirror the camera across the plane
    const pos = mainCamera.getWorldPosition(new THREE.Vector3());
    const dir = mainCamera.getWorldDirection(new THREE.Vector3());
    const rp = pos.clone(); rp.y = -rp.y;
    const rd = dir.clone(); rd.y = -rd.y;
    cam.position.copy(rp);
    // reflect the camera's own up vector across the plane (as three's Reflector does)
    const rot = new THREE.Matrix4().extractRotation(mainCamera.matrixWorld);
    const up = new THREE.Vector3(0, 1, 0).applyMatrix4(rot); up.y = -up.y;
    cam.up.copy(up);
    cam.lookAt(rp.clone().add(rd));
    cam.fov = mainCamera.fov; cam.aspect = mainCamera.aspect; cam.near = mainCamera.near; cam.far = mainCamera.far;
    cam.updateProjectionMatrix(); cam.updateMatrixWorld();
    this.textureMatrix.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.textureMatrix.multiply(cam.projectionMatrix).multiply(cam.matrixWorldInverse);

    const vis = hide.map((o) => o.visible); hide.forEach((o) => { o.visible = false; });
    const prevRT = this.renderer.getRenderTarget(); const prevClip = this.renderer.clippingPlanes; const prevShadow = this.renderer.shadowMap.autoUpdate;
    this.renderer.clippingPlanes = this.clip; this.renderer.shadowMap.autoUpdate = false;
    this.renderer.setRenderTarget(this.target);
    this.renderer.clear();
    this.renderer.render(scene, cam);
    this.renderer.setRenderTarget(prevRT); this.renderer.clippingPlanes = prevClip; this.renderer.shadowMap.autoUpdate = prevShadow;
    hide.forEach((o, i) => { o.visible = vis[i]; });
    void this.plane;
  }
}
