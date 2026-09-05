import * as THREE from 'three';

// One atmosphere model shared by the sky dome (GLSL), the sun light, the
// environment map and the fog (CPU port below). Single scattering, Rayleigh +
// Mie, Earth-scale, with a multiple-scattering boost and a ground bounce term.

export const ATMO = {
  Re: 6371e3, Ra: 6471e3, Hr: 8000, Hm: 1200,
  betaR: new THREE.Vector3(5.8e-6, 13.5e-6, 33.1e-6),
  betaM: 15e-6, mieG: 0.76,
  sunIntensity: 22.0,     // radiance scale of the solar disc before atmosphere (scene units)
  moonIntensity: 22.0 * 0.0025, // artistic: moon lit night reads at +8 EV
};

export const ATMO_GLSL = /* glsl */ `
const float Re = 6371e3; const float Ra = 6471e3; const float Hr = 8000.0; const float Hm = 1200.0;
const vec3 betaR = vec3(5.8e-6, 13.5e-6, 33.1e-6); const vec3 betaM = vec3(15e-6);
const float mieG = 0.76;
vec2 raySphere(vec3 ro, vec3 rd, float r) {
  float b = dot(ro, rd); float c = dot(ro, ro) - r * r; float d = b * b - c;
  if (d < 0.0) return vec2(1e9, -1e9);
  d = sqrt(d); return vec2(-b - d, -b + d);
}
// Radiance arriving at ro from direction rd for light direction ld (unit) with radiance li.
vec3 scatter(vec3 ro, vec3 rd, vec3 ld, vec3 li, int N, int M) {
  vec2 t = raySphere(ro, rd, Ra);
  float tmax = t.y;
  vec2 tg = raySphere(ro, rd, Re);
  if (tg.x > 0.0) tmax = min(tmax, tg.x);
  float seg = tmax / float(N);
  float mu = dot(rd, ld);
  float phR = 3.0 / (16.0 * 3.14159265) * (1.0 + mu * mu);
  float g2 = mieG * mieG;
  float phM = 3.0 / (8.0 * 3.14159265) * ((1.0 - g2) * (1.0 + mu * mu)) / ((2.0 + g2) * pow(1.0 + g2 - 2.0 * mieG * mu, 1.5));
  vec3 sumR = vec3(0.0), sumM = vec3(0.0);
  float odR = 0.0, odM = 0.0;
  for (int i = 0; i < 16; i++) {
    if (i >= N) break;
    vec3 p = ro + rd * (float(i) + 0.5) * seg;
    float h = length(p) - Re;
    float hr = exp(-h / Hr) * seg, hm = exp(-h / Hm) * seg;
    odR += hr; odM += hm;
    vec2 tl = raySphere(p, ld, Ra);
    float segL = tl.y / float(M);
    float odLR = 0.0, odLM = 0.0;
    bool ok = true;
    for (int j = 0; j < 8; j++) {
      if (j >= M) break;
      vec3 q = p + ld * (float(j) + 0.5) * segL;
      float hq = length(q) - Re;
      if (hq < -200.0) { ok = false; break; }
      odLR += exp(-hq / Hr) * segL; odLM += exp(-hq / Hm) * segL;
    }
    if (ok) {
      vec3 tau = betaR * (odR + odLR) + betaM * 1.1 * (odM + odLM);
      vec3 att = exp(-tau);
      sumR += att * hr; sumM += att * hm;
    }
  }
  // 2.2x: crude multiple-scattering compensation, tuned against reference skies
  return li * (sumR * betaR * phR + sumM * betaM * phM) * 2.2;
}
vec3 transmittance(vec3 ro, vec3 ld, int M) {
  vec2 tl = raySphere(ro, ld, Ra);
  float segL = tl.y / float(M);
  float odLR = 0.0, odLM = 0.0;
  for (int j = 0; j < 8; j++) {
    if (j >= M) break;
    vec3 q = ro + ld * (float(j) + 0.5) * segL;
    float hq = length(q) - Re;
    if (hq < -200.0) return vec3(0.0);
    odLR += exp(-hq / Hr) * segL; odLM += exp(-hq / Hm) * segL;
  }
  return exp(-(betaR * odLR + betaM * 1.1 * odLM));
}
`;

// ---------------------------------------------------------------- CPU port
const tmp = { v: new THREE.Vector3(), p: new THREE.Vector3(), q: new THREE.Vector3() };
function raySphere(ro: THREE.Vector3, rd: THREE.Vector3, r: number): [number, number] {
  const b = ro.dot(rd); const c = ro.dot(ro) - r * r; let d = b * b - c;
  if (d < 0) return [1e9, -1e9];
  d = Math.sqrt(d); return [-b - d, -b + d];
}
export function transmittanceCPU(ro: THREE.Vector3, ld: THREE.Vector3, M = 8): THREE.Vector3 {
  const tl = raySphere(ro, ld, ATMO.Ra); const segL = tl[1] / M;
  let odLR = 0, odLM = 0;
  for (let j = 0; j < M; j++) {
    tmp.q.copy(ro).addScaledVector(ld, (j + 0.5) * segL);
    const hq = tmp.q.length() - ATMO.Re;
    if (hq < -200) return new THREE.Vector3(0, 0, 0);
    odLR += Math.exp(-hq / ATMO.Hr) * segL; odLM += Math.exp(-hq / ATMO.Hm) * segL;
  }
  return new THREE.Vector3(
    Math.exp(-(ATMO.betaR.x * odLR + ATMO.betaM * 1.1 * odLM)),
    Math.exp(-(ATMO.betaR.y * odLR + ATMO.betaM * 1.1 * odLM)),
    Math.exp(-(ATMO.betaR.z * odLR + ATMO.betaM * 1.1 * odLM)));
}
export function scatterCPU(ro: THREE.Vector3, rd: THREE.Vector3, ld: THREE.Vector3, li: number, N = 12, M = 4): THREE.Vector3 {
  const t = raySphere(ro, rd, ATMO.Ra); let tmax = t[1];
  const tg = raySphere(ro, rd, ATMO.Re); if (tg[0] > 0) tmax = Math.min(tmax, tg[0]);
  const seg = tmax / N; const mu = rd.dot(ld);
  const phR = 3 / (16 * Math.PI) * (1 + mu * mu);
  const g = ATMO.mieG, g2 = g * g;
  const phM = 3 / (8 * Math.PI) * ((1 - g2) * (1 + mu * mu)) / ((2 + g2) * Math.pow(1 + g2 - 2 * g * mu, 1.5));
  const sumR = new THREE.Vector3(), sumM = new THREE.Vector3();
  let odR = 0, odM = 0;
  for (let i = 0; i < N; i++) {
    tmp.p.copy(ro).addScaledVector(rd, (i + 0.5) * seg);
    const h = tmp.p.length() - ATMO.Re;
    const hr = Math.exp(-h / ATMO.Hr) * seg, hm = Math.exp(-h / ATMO.Hm) * seg;
    odR += hr; odM += hm;
    const tl = raySphere(tmp.p, ld, ATMO.Ra); const segL = tl[1] / M;
    let odLR = 0, odLM = 0, ok = true;
    for (let j = 0; j < M; j++) {
      tmp.q.copy(tmp.p).addScaledVector(ld, (j + 0.5) * segL);
      const hq = tmp.q.length() - ATMO.Re;
      if (hq < -200) { ok = false; break; }
      odLR += Math.exp(-hq / ATMO.Hr) * segL; odLM += Math.exp(-hq / ATMO.Hm) * segL;
    }
    if (ok) {
      const ax = Math.exp(-(ATMO.betaR.x * (odR + odLR) + ATMO.betaM * 1.1 * (odM + odLM)));
      const ay = Math.exp(-(ATMO.betaR.y * (odR + odLR) + ATMO.betaM * 1.1 * (odM + odLM)));
      const az = Math.exp(-(ATMO.betaR.z * (odR + odLR) + ATMO.betaM * 1.1 * (odM + odLM)));
      sumR.x += ax * hr; sumR.y += ay * hr; sumR.z += az * hr;
      sumM.x += ax * hm; sumM.y += ay * hm; sumM.z += az * hm;
    }
  }
  return new THREE.Vector3(
    li * (sumR.x * ATMO.betaR.x * phR + sumM.x * ATMO.betaM * phM) * 2.2,
    li * (sumR.y * ATMO.betaR.y * phR + sumM.y * ATMO.betaM * phM) * 2.2,
    li * (sumR.z * ATMO.betaR.z * phR + sumM.z * ATMO.betaM * phM) * 2.2);
}

// Sun and moon positions. Latitude 30 N, declination +12 (mid April): 12:00 -> 72 deg,
// 17:30 -> 12 deg, sunset 18:40. Azimuth clockwise from north; +x east, -z north.
const LAT = 30 * Math.PI / 180, DEC = 12 * Math.PI / 180;
export function sunDirection(hours: number): THREE.Vector3 {
  const H = (hours - 12) * 15 * Math.PI / 180;
  const sinEl = Math.sin(LAT) * Math.sin(DEC) + Math.cos(LAT) * Math.cos(DEC) * Math.cos(H);
  const el = Math.asin(Math.max(-1, Math.min(1, sinEl)));
  const cosAz = (Math.sin(DEC) - Math.sin(el) * Math.sin(LAT)) / (Math.cos(el) * Math.cos(LAT));
  let az = Math.acos(Math.max(-1, Math.min(1, cosAz)));
  if (H > 0) az = 2 * Math.PI - az;
  return new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
}
export function moonDirection(hours: number): THREE.Vector3 {
  // Waxing gibbous moon, high in the south-east through the evening, over the camera's shoulder.
  const t = ((hours - 18) / 12) * Math.PI; // rises 18:00, sets 06:00
  const el = Math.max(-0.3, Math.sin(t)) * 0.9;
  const az = (120 + (hours - 18) * 10) * Math.PI / 180;
  return new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el));
}
