import { World } from './World';
import { buildPalms } from '../vegetation/Palms';
import { buildPort } from '../port/Port';
import { buildBrig } from '../ships/Brig';
// Scene content beyond terrain, ocean and sky. A module that throws is
// logged and skipped; the world keeps rendering.
export async function buildExtras(world: World): Promise<void> {
  const mods: [string, () => Promise<import('./World').Extra>][] = [
    ['palms', () => buildPalms(world.hf, world.spec.seed)],
    ['port', () => buildPort(world.hf, world.spec.seed)],
    ['brig', () => buildBrig(world.spec.seed)],
  ];
  for (const [name, fn] of mods) {
    try { world.addExtra(await fn()); } catch (e) { console.error(`module ${name} failed`, e); window.__ocean?.errors.push(`module ${name} failed: ${e instanceof Error ? e.message : String(e)}`); }
  }
}
