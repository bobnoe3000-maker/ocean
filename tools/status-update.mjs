// Fold a critic round into docs/STATUS.json: node tools/status-update.mjs <round> <commit>
import fs from 'node:fs';
const [round, commit] = process.argv.slice(2);
const st = JSON.parse(fs.readFileSync('docs/STATUS.json', 'utf8'));
const c = JSON.parse(fs.readFileSync(`docs/critic/round${round}.json`, 'utf8'));
st.updated = new Date().toISOString();
st.rounds = st.rounds.filter((r) => r.round !== Number(round));
st.rounds.push({ round: Number(round), scores: c.scores, pass: c.pass, console_errors: c.console_errors, programmer_art_hits: c.programmer_art_hits, report: `docs/critic/round${round}.md`, screenshots: c.screenshots, commit: commit || null });
const best = st.rounds.map((r) => ({ round: r.round, min_score: Math.min(...Object.values(r.scores)) })).sort((a, b) => b.min_score - a.min_score)[0];
st.best = best;
st.open_issues = c.top_issues;
const heroPath = (c.screenshots || []).find((p) => /hero/.test(p) && p.endsWith('.png'));
if (heroPath && fs.existsSync(heroPath.replace('.png', '.json'))) {
  const h = JSON.parse(fs.readFileSync(heroPath.replace('.png', '.json'), 'utf8'));
  st.budget = { reference_device_fps: 'not measured (no device reachable; headless SwiftShader only)', draw_calls: h.stats.calls, triangles: h.stats.triangles, texture_mb: h.stats.textureMB, measured_on: heroPath.replace('.png', '.json') };
}
fs.writeFileSync('docs/STATUS.json', JSON.stringify(st, null, 2));
console.log('STATUS.json updated for round', round, JSON.stringify(c.scores), 'pass:', c.pass);
