import { World } from './world/World';
import { specFromURL, SceneSpec } from './core/Spec';
import { buildExtras } from './world/Extras';

declare global {
  interface Window {
    __ready: Promise<void>;
    __ocean: { apply(spec: Partial<SceneSpec>): void; stats(): unknown; settle(frames: number): Promise<void>; capture(): string; world: World; errors: string[] };
  }
}

const errors: string[] = [];
window.addEventListener('error', (e) => errors.push(String(e.message)));
window.addEventListener('unhandledrejection', (e) => errors.push(String(e.reason)));

const canvas = document.getElementById('c') as HTMLCanvasElement;
const spec = specFromURL();
const world = new World(canvas, spec);
const hud = document.getElementById('hud')!;
if (spec.hud) hud.classList.remove('hidden');

let frames = 0; const waiters: { n: number; res: () => void }[] = [];
function loop(): void {
  requestAnimationFrame(loop);
  world.frame();
  frames++;
  for (let i = waiters.length - 1; i >= 0; i--) if (frames >= waiters[i].n) { waiters[i].res(); waiters.splice(i, 1); }
  if (spec.hud && frames % 15 === 0) {
    const s = world.stats();
    hud.textContent = `t=${world.spec.time} ${world.spec.weather} z=${world.spec.zoom} | ${s.calls} calls ${(s.triangles / 1000).toFixed(0)}k tris ${s.textureMB}MB | ${s.frameMs.p50.toFixed(1)}ms`;
  }
}

window.__ready = (async () => {
  try {
    await world.build();
    await buildExtras(world);
    world.apply(world.spec);
    window.addEventListener('resize', () => world.resize());
    await world.renderer.compileAsync(world.scene, world.camera);
  } catch (e) {
    errors.push('build failed: ' + (e instanceof Error ? e.stack || e.message : String(e)));
    console.error(e);
  }
  loop();
  await new Promise<void>((res) => waiters.push({ n: frames + 3, res }));
  (window as unknown as { __readyDone: boolean }).__readyDone = true;
})();

window.__ocean = {
  world, errors,
  apply(p) { world.apply({ ...world.spec, ...p }); },
  stats: () => world.stats(),
  settle: (n) => new Promise<void>((res) => waiters.push({ n: frames + n, res })),
  // render one frame and read the canvas back in the same task (no preserveDrawingBuffer needed)
  capture: () => { world.frame(); return canvas.toDataURL('image/png'); },
};
