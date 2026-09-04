import { launch } from './shoot.mjs';
const b = await launch(); const p = await b.newPage();
await p.setViewportSize({ width: 390, height: 844 });
await p.goto('http://127.0.0.1:5174/?quality=low&' + (process.argv[2] || ''));
await p.waitForFunction(() => window.__readyDone === true, undefined, { timeout: 600000 });
const r = await p.evaluate(() => {
  const w = window.__ocean.world; const out = [];
  w.scene.traverse((o) => { if (o.isMesh && o.material && o.material.map && o.material.side === 2 && o.geometry.attributes.position.count > 50 && o.parent && o.parent.parent && o.parent.parent.name === 'brig') {
    o.updateWorldMatrix(true, false); const n = new (o.position.constructor)(0, 0, 1).transformDirection(o.matrixWorld); const bb = o.geometry.boundingBox || (o.geometry.computeBoundingBox(), o.geometry.boundingBox);
    out.push({ pos: o.position.toArray().map(v => +v.toFixed(1)), rot: [o.rotation.x, o.rotation.y, o.rotation.z].map(v => +v.toFixed(2)), worldNormal: n.toArray().map(v => +v.toFixed(2)), size: bb.getSize(new (o.position.constructor)()).toArray().map(v => +v.toFixed(1)) }); } });
  return out;
});
console.log(JSON.stringify(r)); await b.close();
