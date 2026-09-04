import { launch } from './shoot.mjs';
const b = await launch(); const p = await b.newPage();
p.on('console', (m) => { if (m.type() === 'error') console.log('ERR', m.text()); });
await p.setViewportSize({ width: 390, height: 844 });
await p.goto('http://127.0.0.1:5173/?' + (process.argv[2] || ''));
await p.evaluate(() => window.__ready);
const r = await p.evaluate(() => {
  const w = window.__ocean.world; const hf = w.hf;
  const pts = [[0,0],[-24,6],[-15,40],[-95,-5],[20,-14],[-55,108],[100,60],[0,-150],[-15,200]];
  return {
    cam: w.camera.position.toArray().map(v=>+v.toFixed(1)), target: w.target.toArray(),
    heights: pts.map(([u,wv]) => ({ u, w: wv, h: +hf.height(u,wv).toFixed(2), sd: +hf.coastSD(u,wv).toFixed(1) })),
    hw00: hf.heightWorld(0,0), depthTexSample: (() => { const t = w.terrain.depthTexture; const N = t.image.width; const d = t.image.data; const i = Math.round(N/2)*N + Math.round(N/2); return d[i]; })(),
    exposure: w.lighting.exposure, sunE: w.lighting.sunE.toArray().map(v=>+v.toFixed(3)), skyE: w.lighting.skyE.toArray().map(v=>+v.toFixed(3)), sun: w.lighting.keyDir.toArray().map(v=>+v.toFixed(3)),
    fogSky: Object.values(w.lighting.constructor ? {} : {}), 
    oceanBS: w.ocean.mesh.geometry.boundingSphere.radius, terrainBS: w.terrain.mesh.geometry.boundingSphere.center.toArray().map(v=>+v.toFixed(0)),
  };
});
console.log(JSON.stringify(r, null, 1)); await b.close();
