# Critic round 1 — Ocean look test

Judged against LOOK.md R1–R5 and the hero vista, not against "good for a web demo".
Build under judgement: preview at http://127.0.0.1:5174/ on 2026-09-04, 14 shots under
`shots/critic1/` (all `--frames 3`), plus four native-resolution crops of the hero frame.

Environment limitations, stated up front (none of these is a pass):

- All phone shots were taken at `--dpr 2`, not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time. Nothing about the score depends on the missing DPR.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills. Where the rubric
  asks for motion I score what a still can prove and say what is unverified.
- No preset ever shows sky or horizon (see composition). The sun disc, horizon gradient and
  "sky without a sun" item therefore cannot be verified from any frame; that is an issue
  in itself and is recorded as such, not as a pass.

Scale: 10 = indistinguishable from Sea of Conquest / Dredge / the reference photograph;
8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 4.5

Nothing in the frame carries the wear story LOOK.md §5 asks for. The sails are flat cream
quads with no weave, seams, reef bands or cloth shape, and the hull is a flat dark plank
sheet with no wale stripe (`shots/critic1/zoom60_brig.png`). Roofs are one uniform tile
pattern with no lichen, no missing or replaced tiles; walls do have plaster cracks and a
grime gradient, the one material that gets near the bar, but the windows are painted-on
dark rectangles with a white cross and no reveal depth (`shots/critic1/zoom60_town.png`).
The stone quay is a flat grey paving with a visibly repeating herringbone and no wet
darkening at the waterline; beach sand is a fine uniform dot grain that reads as tiling at
60 m, and the scrub hillside is a low-resolution green/brown blotch mottle
(`shots/critic1/zoom60_beach.png`, `shots/critic1/hero_phone_crop_town.png`,
`shots/critic1/hero_phone_crop_mole.png`). Normals do not read anywhere under the raking
17:30 light. To reach 8.5: real photographic sets (or procedural sets with macro variation
and detail layers), sail cloth with seams/bolt-ropes and geometry that fills, a hull with
wale, copper/tar line and rubbing wear, a wet dark band on quay and rock at the waterline,
lichen and missing tiles on roofs, per-building wall tint and stain variation.

### 2. Light — 5.0

Shadow direction and length are plausible for 17:30 (long, up-left, `shots/critic1/hero_phone.png`)
and the night is genuinely dark with warm lantern pools (`shots/critic1/night_phone.png`).
Everything else misses. The 17:30 sun is not 3000 K orange: lit walls in
`shots/critic1/zoom60_town.png` are pale cream, shade is neutral grey-green rather than
blue-violet, and there is no visible bounce warming shaded sand. Shadows are razor-hard at
every distance (the JSON warns `PCSS: shadow chunk layout unexpected, keeping PCF`), the
palm shadows on the beach are pixelated with blocky aliasing along every frond
(`shots/critic1/zoom60_beach.png`), and the hill/town shadow lands on the harbour water as
one giant flat slab that reads as a dark stain rather than shaded water
(`shots/critic1/hero_phone.png`, `shots/critic1/contact_clear_175.png`). At night every
window on every building is the same yellow rectangle and the lighthouse dumps a huge white
bloom pool on the water beside the mole (`shots/critic1/night_phone.png`). To reach 8.5:
sun colour and exposure that actually turn the walls orange-cream and the shade violet at
17:30, working PCSS/contact-hardening so shadows soften with distance, sky reflection in
shaded water so shadows on the sea read as water not paint, per-window emissive variation
and a lighthouse beam that reads as a beam, not a bloom disc.

### 3. Atmosphere — 4.0

No frame at any preset shows sky, horizon, sun disc or horizon gradient, so those cannot be
judged; the camera is effectively a map view (`shots/critic1/hero_phone.png`,
`shots/critic1/zoom300.png`). Aerial perspective is absent: at 300 m the far side of the
island is the same saturation and contrast as the near side (`shots/critic1/zoom300.png`).
Fog at 17:30 does have patchy density and objects do fade (`shots/critic1/fog_phone.png`,
`shots/critic1/contact_fog_175.png`), but it is a flat tan-grey overlay with cloud blobs
that looks like a 2-D noise layer: the near lighthouse at the bottom of the frame is as
fogged as the town, and there is no height structure. Worse, fog barely exists at the
other two times: `shots/critic1/contact_fog_12.png` is a slightly desaturated copy of
`shots/critic1/contact_clear_12.png` with the whole island still sharp, and
`shots/critic1/contact_fog_22.png` is near-identical to `shots/critic1/contact_clear_22.png`.
LOOK.md §4 asks for ~150 m visibility with the cliff gone at every hour. To reach 8.5:
fog density that is the same physical quantity at all three times, height fog with
distance-graded contrast/blue shift (R4's three layers), aerial perspective on the far
terrain at 300 m, and a framing that shows at least a band of sky so the sun disc and
horizon gradient can exist.

### 4. Water — 3.5

The 17:30 water is a uniform teal plane covered in a fine high-frequency noise; there is no
directional swell, no wind chop shapes, no crest foam, no sun reflection or glitter path,
and no reflections of quay, ship or lighthouse broken by the surface
(`shots/critic1/hero_phone_crop_shore.png`, `shots/critic1/hero_phone_crop_brig.png`,
`shots/critic1/zoom60_brig.png`). The shore is a soft beige gradient blurred into the
water with no wet-sand band, no foam line and no lapping edge (`shots/critic1/zoom60_beach.png`).
At noon the glitter is a dense white confetti spread uniformly across the whole field
rather than a tight path under the camera (`shots/critic1/noon_desktop_water.png`), and the
"shore foam" is a smeared white band around the outer beach (`shots/critic1/contact_clear_12.png`).
Water in shadow simply goes dark, and the ship's shadow on the water carries a horizontal
moiré striping (`shots/critic1/zoom60_brig.png`, upper-left). Shallows do carry a warm
green tint over the sand bar, which is the only point earned. To reach 8.5: a real
Gerstner/FFT swell aligned to the 6 m/s wind plus a chop layer, screen-space or planar
reflections broken by the normal, a sun glitter path at 17:30, crest foam driven by wave
Jacobian, a shoreline with wet sand darkening, foam line and receding sheet, and sky-lit
shadowed water.

### 5. Scale and motion — 5.0

Relative scale is acceptable: a three-storey house, a ~30 m brig, a ~100 m basin and a
lighthouse that agree (`shots/critic1/hero_phone.png`). Gulls are present and the flags are
curved quads, so something is animated. But the timber dock is a tiny sliver compared with
the quay (`shots/critic1/hero_phone_crop_town.png`), the sails are rigid planes with no fill
or belly (`shots/critic1/zoom60_brig.png`), and no chimney smoke is visible in any frame
despite the sprite listed in `assets/CREDITS.md` (`shots/critic1/hero_phone.png`,
`shots/critic1/night_phone.png`). Palm sway and sail/flag motion cannot be verified from a
still; the hillside bushes are identical green blobs in every frame
(`shots/critic1/hero_phone.png`, top). To reach 8.5: sails with wind-filled geometry,
visible smoke plumes leaning with the wind, a dock sized for the brig with boats alongside,
props on the quay (bollards, crates, rope coils, fenders), bush instances with varied
scale/rotation, and a short motion capture in a later round to prove the movers move.

### 6. Composition and squint test — 4.5

At thumbnail the hero reads as a satellite map: a tan island, a teal disc of water, a black
diagonal slab (`shots/critic1/contact.png`, `shots/critic1/zoom300.png`). In the full hero
frame the town is compressed into the top fifth, the brig is small on the left third, the
lower 60 % is empty water, and the dominant shape is the shadow slab rather than the port
(`shots/critic1/hero_phone.png`). There is no horizon band, so there is no depth stack of
water/land/sky as in R1 and R5. The eye goes to the shadow, then to the lighthouse, not to
the lit walls of the port. Landscape and desktop presets show the same near-nadir framing
(`shots/critic1/landscape.png`). To reach 8.5: verify the effective pitch really is 58°
and the target sits on the basin as LOOK.md §2 specifies (quay and town filling the upper
third, a hint of far water/sky), reduce or soften the cast slab, put the brig's lit sails
and the warm walls on the value hierarchy's top, and make the harbour mouth the bottom
anchor.

### 7. Budget and errors — 8.5

All fourteen JSON logs report zero console errors. Draw calls 92–158 (limit 300),
triangles 0.76 M at medium and 1.15–1.16 M at high (limit 1.5 M), texture memory 41.8 MB
(limit 256). Device fps is honestly "not measured". Two warnings recur on every high-quality
shot: `PCSS: shadow chunk layout unexpected, keeping PCF` (a shipped feature silently
falling back, which shows in the shadow score) and `KHR_parallel_shader_compile extension
not supported` (environment). Nit that keeps this at 8.5 rather than higher: 1.16 M
triangles for this simple scene leaves little headroom for the geometry the other lines
need, and a silently-disabled feature should be an error in a look test, not a warning.

### 8. Programmer-art checklist — 3.0 (automatic fail)

Multiple hits; see the checklist below.

## Programmer-art checklist

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Sails are flat cream quads, lighthouse is plain painted stripes, quay is a flat grey slab: `shots/critic1/zoom60_brig.png`, `shots/critic1/hero_phone_crop_mole.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces seen in any frame |
| Visible tiling or stretched UVs | **HIT** | Sand micro-grain repeats uniformly, quay herringbone repeats: `shots/critic1/zoom60_beach.png`, `shots/critic1/zoom60_town.png` |
| Shadow acne or missing shadows | clear (strictly) | Shadows present, no acne; but heavily aliased/pixelated palm shadows and stair-stepped slab edges: `shots/critic1/zoom60_beach.png`, `shots/critic1/hero_phone.png` — logged as issue 2 |
| Grey nights | clear | Night is navy/black with warm lantern and window pools: `shots/critic1/night_phone.png`, `shots/critic1/contact_clear_22.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | 17:30 water is a single-tone teal noise plane with no swell; noon shore foam is a smeared white band: `shots/critic1/hero_phone_crop_shore.png`, `shots/critic1/contact_clear_12.png` |
| Hard water-to-beach line | clear | The opposite defect: a blurred gradient with no wet sand or foam line: `shots/critic1/zoom60_beach.png` |
| Vegetation that does not move / identical instances | unverified for motion; **HIT** for instances | Hillside bushes are identical green blobs at every position: `shots/critic1/hero_phone.png` (top), `shots/critic1/zoom300.png` |
| Fog as one colour | clear at 17:30 | Patchy density visible in `shots/critic1/fog_phone.png`; but fog is nearly absent at 12:00 and 22:00 (issue 8) |
| Sky without a sun | unverifiable | No preset shows sky; no sun disc, no glitter path at 17:30 in `shots/critic1/hero_phone.png` |
| Placeholder primitives or text labels | **HIT** | Plain white block "tower" upper-left of town, flat grey box chimney, black-pin lamp posts, blob bushes: `shots/critic1/hero_phone.png`, `shots/critic1/zoom60_town.png` |
| Recognisable low-poly asset kit | **HIT** | Identical box houses with the same roof and window decals, palms built from serrated flat strips with visible polygon edges: `shots/critic1/hero_phone_crop_town.png`, `shots/critic1/zoom60_beach.png` |

Five hits. The round fails automatically.

## Ranked issues (most damaging first)

1. **Water is a static noise field.** No swell, no chop, no crest foam, no shoreline foam or wet sand, no sun reflection at 17:30, shadowed water is a flat dark stain. `shots/critic1/hero_phone_crop_shore.png`, `shots/critic1/zoom60_brig.png`, `shots/critic1/zoom60_beach.png`. Fix direction: proper swell + chop displacement aligned to wind, reflections broken by normals, Jacobian foam, wet-sand shoreline pass, sky lighting in shadowed water.
2. **Shadows are hard, aliased and stair-stepped at every scale**, and PCSS is silently disabled. `shots/critic1/zoom60_beach.png` (pixelated palm shadows), `shots/critic1/hero_phone.png` (slab with sawtooth edge), `shots/critic1/contact_clear_175.png`. Fix direction: make the PCSS chunk patch actually apply (treat the warning as fatal), higher-precision cascade fit, contact-hardening softening with distance.
3. **Sails, hull, flags are flat untextured planes.** `shots/critic1/zoom60_brig.png`. Fix direction: sail cloth with seams, bolt ropes, reef bands and wind belly geometry; hull with wale stripe, tar sheen, rubbing wear; flags with cloth normal.
4. **17:30 is not golden hour.** Walls pale cream, shade neutral, no bounce, no glitter path. `shots/critic1/zoom60_town.png`, `shots/critic1/hero_phone.png`. Fix direction: sun colour/intensity and exposure keyed to LOOK.md palettes (`#F2A15A` lit, `#5B6FA6` shade), ground bounce term, sun reflection on water.
5. **Framing reads as a map, no sky in any preset.** `shots/critic1/hero_phone.png`, `shots/critic1/zoom300.png`, `shots/critic1/landscape.png`. Fix direction: confirm the effective pitch and target match LOOK.md §2 (58°, basin-centred, town in the upper third); consider a slightly lower pitch or wider vertical FOV so a horizon/sky band exists and the sun disc and aerial perspective can be seen.
6. **Buildings are an identical kit with a placeholder tower.** Same box, roof, decal windows, no eaves or depth, plain white block tower. `shots/critic1/zoom60_town.png`, `shots/critic1/hero_phone_crop_town.png`. Fix direction: three or four footprints and roof pitches, window reveals with shutters as geometry, eaves, per-building tint/stain, model the tower (church/fort) or remove it.
7. **Terrain is a flat mottled ochre with a stair-stepped east shore.** The stepped edge shows in all six contact cells and at night, so it is geometry, not shadow. No aerial perspective at 300 m. `shots/critic1/zoom300.png`, `shots/critic1/night_phone.png`, `shots/critic1/contact_clear_175.png`. Fix direction: smooth the shore/cliff mesh silhouette, add rock/scrub macro variation and a cliff to the north, distance fog on terrain.
8. **Fog only exists at 17:30.** `shots/critic1/contact_fog_12.png` vs `shots/critic1/contact_clear_12.png`; `shots/critic1/contact_fog_22.png`. Fix direction: fog density independent of exposure/sun, verified at all three times against the ~150 m visibility spec.
9. **Noon glitter is uniform white confetti; noon shore foam is a white smear band.** `shots/critic1/noon_desktop_water.png`, `shots/critic1/contact_clear_12.png`. Fix direction: glitter from a real specular lobe with roughness so it concentrates under the sun's reflection; shore foam from depth + wave phase, not a distance band.
10. **Night: identical yellow windows on every building, lighthouse bloom pool, moon glitter blanketing the basin, a stray floating light rectangle in the upper right with no building under it.** `shots/critic1/night_phone.png`, `shots/critic1/contact_clear_22.png`. Fix direction: per-window random emissive on/off and warmth, a rotating beam volume instead of a base bloom, moon path narrowed, find and attach the orphan light.
11. **Palms are a low-poly kit.** Serrated flat-strip fronds with visible polygon edges, pixelated shadows. `shots/critic1/zoom60_beach.png`. Fix direction: alpha-cut frond cards with normal/translucency, varied frond count and droop, trunk ring texture.
12. **Quay and mole are a flat grey slab with no props or wet edge.** `shots/critic1/zoom60_town.png`, `shots/critic1/hero_phone_crop_mole.png`. Fix direction: rounded wet stone edge, bollards, crates, rope coils, fenders, tide stain.
13. **No chimney smoke visible; dock is a sliver.** `shots/critic1/hero_phone.png`, `shots/critic1/hero_phone_crop_town.png`. Fix direction: visible smoke plumes leaning downwind, a dock long enough for a boat alongside.
14. **Sand micro-tiling and a blurred shore gradient.** `shots/critic1/zoom60_beach.png`. Fix direction: macro variation layer, ripples, footprints/debris, wet band.
15. **Moiré striping in the ship's shadow on water.** `shots/critic1/zoom60_brig.png`. Fix direction: shadow sampling offset/bias on the water surface.

## Budget lines (from `shots/critic1/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 2 | 158 | 1,159,425 | 41.8 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 158 | 757,377 | 41.8 | not measured |
| zoom60_town (high, desktop) | 0 | 2 | 92 | 1,149,133 | 41.8 | not measured |
| zoom60_brig (high, desktop) | 0 | 2 | 155 | 1,158,873 | 41.8 | not measured |
| zoom300 (high, 1×) | 0 | 2 | 158 | 1,159,425 | 41.8 | not measured |
| night_phone (high, 2×) | 0 | 2 | 158 | 1,159,425 | 41.8 | not measured |
| fog_phone (high, 2×) | 0 | 2 | 158 | 1,159,425 | 41.8 | not measured |
| landscape (high, 1×) | 0 | 2 | 123 | 1,155,441 | 41.8 | not measured |
| noon_desktop_water (high, desktop) | 0 | 2 | 115 | 1,151,849 | 41.8 | not measured |
| zoom60_beach (high, desktop) | 0 | 2 | 115 | 1,151,849 | 41.8 | not measured |

Warnings: `PCSS: shadow chunk layout unexpected, keeping PCF` (high quality only) and
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (3.0, five hits — flat sails and quay,
tiling sand, a uniform water plane with a white foam band, identical bush instances and a
placeholder tower, a recognisable box-house/serrated-palm kit), with water (3.5) and
atmosphere (4.0) close behind; only budget and errors (8.5) clears the bar. The build is a
clean, correctly-budgeted, error-free scene layout with the right ingredients in the right
places, and the night frame shows that the lighting model can go somewhere. Against R1 and
R5 it is not in the same category: the reference frames are paintings of light on wet stone
and moving water seen from a low-gull camera with a horizon; this is a near-nadir map of a
tan island with a teal disc, a black slab and a kit of boxes on it. Nothing here would be
mistaken for Sea of Conquest or Dredge at any zoom.
