export type Weather = 'clear' | 'fog';
export type Quality = 'low' | 'medium' | 'high';
export type Device = 'phone' | 'phone-landscape' | 'desktop';

export interface SceneSpec {
  time: number;        // hours, 0..24
  weather: Weather;
  zoom: number;        // visible water width in metres, portrait (60 | 120 | 300)
  quality: Quality;
  seed: number;
  device: Device;
  t: number;           // animation time in seconds at capture
  pause: boolean;      // freeze animation time
  hud: boolean;
  sun: boolean;        // debug: draw sun disc
  hide: string;        // debug: comma list of groups to hide (ocean,terrain,sky,...)
  lu: number; lw: number; // camera target offset from the hero target, vista metres (right, forward)
  pitch: number;       // camera pitch from horizontal, degrees (hero 52)
  yaw: number;         // camera yaw offset from the hero direction, degrees (positive turns right)
}

export const HERO: SceneSpec = {
  time: 17.5, weather: 'clear', zoom: 120, quality: 'high', seed: 1, device: 'phone', t: 12, pause: false, hud: false, sun: true, hide: '', lu: 0, lw: 0, pitch: 52, yaw: 0,
};

export function specFromURL(): SceneSpec {
  const q = new URLSearchParams(location.search);
  const num = (k: string, d: number) => (q.has(k) ? Number(q.get(k)) : d);
  const str = <T extends string>(k: string, d: T, allowed: readonly T[]): T => {
    const v = q.get(k) as T | null; return v && allowed.includes(v) ? v : d;
  };
  const bool = (k: string, d: boolean) => (q.has(k) ? q.get(k) !== '0' && q.get(k) !== 'false' : d);
  return {
    time: num('time', HERO.time),
    weather: str('weather', HERO.weather, ['clear', 'fog'] as const),
    zoom: num('zoom', HERO.zoom),
    quality: str('quality', HERO.quality, ['low', 'medium', 'high'] as const),
    seed: num('seed', HERO.seed),
    device: str('device', HERO.device, ['phone', 'phone-landscape', 'desktop'] as const),
    t: num('t', HERO.t),
    pause: bool('pause', HERO.pause),
    hud: bool('hud', HERO.hud),
    sun: bool('sun', HERO.sun),
    hide: q.get('hide') || '',
    lu: num('lu', 0), lw: num('lw', 0),
    pitch: Math.min(80, Math.max(10, num('pitch', HERO.pitch))),
    yaw: num('yaw', 0),
  };
}
