# Critic round 9 — Ocean look test, third round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art. The bar is readability, shape language, painted water
and foam, sculpted vegetation, and colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` from HEAD `36f977b` ("Round 9 builder
pass: waves die at the beach, narrow foam rim with shallow lace only, matte bushes, lighter graded haze,
stronger sun stop-down"). All ten shots were taken this round in the required order, in the foreground,
`--frames 4` throughout: sixteen full frames under `shots/critic9/` plus fifty-one native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled where the source was 1×, cut with a scratch pngjs script
outside the repo). Every frame and crop cited below was opened and looked at. No round 1–8 screenshot is
used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 6.5

What holds: the town at 60 m is still the strongest set and is close to R1 — painted half-round tiles in
uneven rows with pale worn tiles, cracked and rain-stained plaster, cream/ochre/pink/peach tints, chimneys
with cowls (`shots/critic9/zoom60_town.png`, `shots/critic9/hero_phone_crop_town.png`); the brig's tarred
hull, deck planks, grates, boats, rope coil and rigging read as one painted object
(`shots/critic9/zoom120_brig_crop_deck.png`, `shots/critic9/zoom120_brig_crop_bow.png`); the lighthouse and
mole boulders hold (`shots/critic9/hero_phone_crop_mole.png`). New this round: the bushes are matte — the
hard specular dot is gone and they read as soft two-value green volumes with a shadow
(`shots/critic9/hero_phone_crop_hill.png`); the beach wet band is a soft pale gradient with a darker damp
line (`shots/critic9/zoom60_beach_crop_wetband.png`). What still fails the stylised bar: the bushes are still
perfect spheres, just matte ones (`shots/critic9/hero_phone_crop_hill.png`,
`shots/critic9/sun_check_crop_foreground.png`); the hillside still carries pale contour lines drawn across
it, now with a large tan-and-olive "map stain" across the top of the island
(`shots/critic9/hero_phone_crop_hill.png`, `shots/critic9/zoom300_crop_island.png`); the sand is still one
diagonal micro-ripple grain with a moiré cross-hatch at 60 m (`shots/critic9/zoom60_beach_crop_sand.png`);
the lamp head is the same faceted black box on a stick (`shots/critic9/zoom60_town_crop_lamp.png`);
balconies are unshaded wire cages (`shots/critic9/zoom60_town_crop_balconies.png`); the white-cross window
decal is still on the pink house (`shots/critic9/zoom60_town_crop_decal.png`); roofs are paper-thin sheets,
a black bracket still floats inside a roof and a black void still sits under one gable
(`shots/critic9/zoom60_town_crop_bracket.png`, `shots/critic9/zoom60_town_crop_eave.png`); the quay is the same
regular radial flagstone grid with stitch seams (`shots/critic9/zoom60_town_crop_quay.png`); palm fronds are
flat pale-lime blades with the crown pinned beside the trunk (`shots/critic9/zoom60_beach_crop_palm.png`).
To reach 8.5 under this direction: irregular, lobed two-tone bush volumes rather than spheres; delete the
contour term and paint the hill as scrub, rock and sand masses; a sand with macro colour and debris and
no single grain; a modelled lantern and rails with thickness; eaves; hand-placed irregular quay stones
with a wet band; fronds with a spine, droop and darker underside.

### 2. Light — 6.5

The 17:30 hero light still carries the day: sun at 12.4° (sun y = 0.2145 in
`shots/critic9/hero_phone.json`, disc verified in `shots/critic9/sun_check_crop_sky.png`), long soft shadows
from hill, tower, brig, dock and lighthouse up-left across the water (`shots/critic9/hero_phone.png`), and
the stronger stop-down has pulled the sun-check sea back from a clipped white sheet to a gold sheet with
visible ripple structure and a darker fringe under the headland
(`shots/critic9/sun_check_crop_glitter.png`). The night keeps R2's structure — lantern pools on the quay,
amber windows in varied warmth, the dock lantern on the dinghy, the bow lantern with a warm reflection,
the lighthouse beam (`shots/critic9/night_phone.png`, `shots/critic9/night_phone_crop_town.png`,
`shots/critic9/night_phone_crop_mole.png`). Faults: the night basin has gone from near-black to a slate
blue-grey with broad soft pale streaks that read as smoke over the water, not a narrow moon path, and the
lighthouse now throws a wide pale wash over the whole water south of the mole
(`shots/critic9/night_phone_crop_basin.png`, `shots/critic9/night_phone_crop_mole.png`); the jib is still a
flat saturated orange-yellow triangle glowing in the dark, and the hull is a black cut-out with no moon
rim on rail or rigging (`shots/critic9/night_phone_crop_brig.png`); the sun-check sea is still one gold sheet
with no dark water anywhere and the whole harbour inside it is filled with the same glitter
(`shots/critic9/sun_check.png`, `shots/critic9/sun_check_crop_glitter.png`); there is still no warm bounce on
shaded sand or shaded walls at 17:30 — the shaded façade is a flat tan (`shots/critic9/zoom60_town_crop_shade.png`).
To reach 8.5: a navy basin (`#111C3C`) with a narrow moon path, moon rim on sails and rigging, an unlit
jib, a lighthouse beam that is a cone not a floodlight, a glitter path that leaves dark water beside it,
sky fill toward `#5B6FA6` with a ground-bounce term.

### 3. Atmosphere — 5.5

Improved, still the weakest line with programmer art. The 17:30 fog is now a lighter graded veil and it
finally hazes the far hill more than the near water: the hill at the top of the frame is a low-contrast
sepia with the bushes barely showing (`shots/critic9/fog_phone_crop_hill.png`), the town keeps colour but
loses edge contrast (`shots/critic9/fog_phone_crop_town.png`), and the brig sits in a blue veil
(`shots/critic9/fog_phone_crop_brig.png`). But the near water at the bottom of the frame is still a flat
blue-grey field with faint diagonal streaks and no crisp chop — the one thing R4 says must stay sharp
(`shots/critic9/fog_phone_crop_near_water.png`, `shots/critic9/contact_fog_175_crop_near_water.png`); the
whole frame is still one sepia-to-blue wash with two bands, not stacked depth layers. The noon fog is
still an opaque pink-grey sheet through which only the roofs and dark windows ghost
(`shots/critic9/contact_fog_12_crop_town.png`, `shots/critic9/contact.png`). The 22:00 fog is again the best
cell: lantern points with soft halos and a glowing lighthouse (`shots/critic9/contact_fog_22_crop_mole.png`).
The sky in the only frame that contains it grades from a saturated ochre horizon through a warm halo to a
grey-green top with a sun disc; there is still no blue zenith, no rose belt opposite the sun and no
clouds (`shots/critic9/sun_check_crop_sky.png`). Aerial perspective at 300 m: the far water at the top of
the frame is a slightly lighter cobalt, still a hint only (`shots/critic9/zoom300_crop_top.png`,
`shots/critic9/zoom300_crop_bottom.png`). Bloom is restrained. To reach 8.5: a painted sky with blue zenith,
rose belt and sculpted clouds; fog density rising with camera distance so the near chop stays crisp and
each farther layer goes bluer and flatter; lower noon albedo; a real blue-grey shift on far water.

### 4. Water — 6.0

The round's real gain. The fifteen-metre white collar is gone: the beach now carries a narrow cream foam
rim with a lace edge and a pale turquoise shallow band that fades into the sand
(`shots/critic9/hero_phone.png`, `shots/critic9/hero_phone_crop_beach.png`, `shots/critic9/hero_phone_crop_town.png`,
`shots/critic9/zoom60_beach_crop_wetband.png`); the two cloud-like cream patches in the harbour mouth are
gone and the shallow bar there reads as a pale turquoise arc (`shots/critic9/hero_phone_crop_bottom.png`);
the banded turquoise-to-cobalt gradient, painted brush chop and shadow-darkened water hold at every zoom
(`shots/critic9/hero_phone_crop_bottom.png`, `shots/critic9/zoom300_crop_bottom.png`,
`shots/critic9/zoom120_brig.png`); a faint pale bow smear now starts at the stem instead of floating beside
the jib (`shots/critic9/zoom120_brig_crop_bow.png`). What still fails: the shoreline is still a stair-stepped
sawtooth where the wash meets the sand, along the whole 60 m beach and at the top of the 120 m frame —
now rendered as a row of pale triangular teeth in the lace instead of a mesh silhouette, and no less
visible (`shots/critic9/zoom60_beach.png`, `shots/critic9/zoom60_beach_crop_shore.png`,
`shots/critic9/zoom120_brig_crop_shoreline_top.png`); the lace carries straight mesh seams — a hard diagonal
edge and a rectangular corner in the wash (`shots/critic9/zoom60_beach_crop_foam.png`,
`shots/critic9/zoom60_beach_crop_wetband.png`); the noon basin is still covered in heavy white marbling
shore to shore (`shots/critic9/contact_clear_12_crop_basin.png`, `shots/critic9/contact.png`); a detached
pale foam smear still lies on open water beside the jib (`shots/critic9/zoom120_brig_crop_jib.png`); at 300 m
the shallow band is a hard-edged turquoise ring drawn round the whole island, with the deep water a
featureless cobalt beyond it (`shots/critic9/zoom300.png`, `shots/critic9/zoom300_crop_halo.png`); the night
water is a lighter slate with smoky streaks rather than a navy basin (`shots/critic9/night_phone_crop_basin.png`);
the sun-check sea is one gold glitter sheet (`shots/critic9/sun_check_crop_glitter.png`). To reach 8.5: a
shoreline blended with a noise-broken alpha, not triangles; no seams in the lace; a noon basin with tight
glitter and sparse crests; no detached smears; a shallow ring that fades with depth instead of a hard
inner edge; a navy night basin with a narrow moon path.

### 5. Scale and motion — 6.5

The 1.7× brig, dock, dinghies, barrels, lamp posts and lighthouse still agree with each other and with
the town at Sea of Conquest scale (`shots/critic9/hero_phone.png`, `shots/critic9/hero_phone_crop_beach.png`,
`shots/critic9/zoom120_brig_crop_deck.png`); bushes are clustered in varied sizes
(`shots/critic9/zoom300_crop_island.png`); palms vary in lean and rotation and a gull is in the hero
(`shots/critic9/zoom60_beach.png`, `shots/critic9/hero_phone.png`). Still wrong, all unchanged from round 8: a
chest and two barrels sit on the water off the beach (`shots/critic9/hero_phone_crop_beach.png`); palm
fronds pass through a house façade and a chimney (`shots/critic9/zoom60_town_crop_palm.png`); a green frond
shows through the mainsail (`shots/critic9/zoom120_brig_crop_sail.png`, `shots/critic9/hero_phone_crop_brig.png`);
a balcony bracket floats inside a roof (`shots/critic9/zoom60_town_crop_bracket.png`); the palm crown is
pinned beside the trunk (`shots/critic9/zoom60_beach_crop_palm.png`); no chimney smoke anywhere in the hero
(`shots/critic9/hero_phone_crop_town.png`). Palm sway, sail, flag, smoke and gull motion remain unverifiable
from stills. To reach 8.5: props clamped to land, collision-free vegetation, an opaque sail, smoke plumes
with drift, a seated crown, and a short motion capture.

### 6. Composition and squint test — 7.5

The hero is the best it has been under this direction: the warm town in the upper third, the brig on the
lower-left third line, the lighthouse lower-right, long diagonal shadows, and the lower half is now owned
by the brig and the saturated basin instead of white bands (`shots/critic9/hero_phone.png`); the landscape
and 300 m frames read as a Sea of Conquest map tile (`shots/critic9/landscape.png`,
`shots/critic9/zoom300.png`); the night thumbnail is owned by the lantern-lit quay and the lighthouse
(`shots/critic9/contact.png`, cell clear 22:00). Against it: the noon cell is still a white-marbled pool
(`shots/critic9/contact.png`, `shots/critic9/contact_clear_12_crop_basin.png`); the three fog cells are still
flat sheets at thumbnail; the hill still reads as a contour map with a tan-and-olive stain across the top
(`shots/critic9/zoom300_crop_island.png`, `shots/critic9/landscape.png`); the hard turquoise ring at 300 m
reads as a halo drawn round the island (`shots/critic9/zoom300.png`); there is still no horizon in the
hero. To reach 8.5: a noon basin without marbling, fog cells with depth layers, a painted hill, a shallow
ring that fades.

### 7. Budget and errors — 8.5

All fifteen per-shot JSON logs report zero console errors. Draw calls 109–156 (limit 300); triangles
1,070,883 at medium and 1,456,385–1,480,531 at high (limit 1.5 M); texture memory 41.3 MB (limit 256).
Device fps is honestly "not measured" (`shots/critic9/hero_phone.json`: "not measured (headless
SwiftShader; frameMs is smoke only)"). The single warning on every shot is the environment's
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`. Nits: the high-quality
triangle count is unchanged at 1,480,531, 19,469 under the limit, so any further mesh pass must be paid
for elsewhere; device fps remains unmeasured.

### 8. Programmer-art checklist — 4.5 (automatic fail)

Four firm hits and two marginal; the white collar stripe is cleared. See the checklist below.

## Programmer-art checklist

Stylised flat colour is not counted as a hit where it is a deliberate painted read with shading;
untextured placeholder surfaces still are.

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Lamp head a faceted black box on a stick; balcony rails unshaded wire cages: `shots/critic9/zoom60_town_crop_lamp.png`, `shots/critic9/zoom60_town_crop_balconies.png`. Sails cleared as a painted read (seams, belly gradient): `shots/critic9/zoom120_brig_crop_sail.png`; the jib is a seamless flat triangle but shaded: `shots/critic9/zoom120_brig_crop_jib.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** (marginal) | Beach is one diagonal micro-ripple grain with a moiré cross-hatch across the whole strand: `shots/critic9/zoom60_beach_crop_sand.png`, `shots/critic9/zoom60_beach.png`. Water cleared: `shots/critic9/zoom300_crop_bottom.png`, `shots/critic9/hero_phone_crop_bottom.png` |
| Shadow acne or missing shadows | clear | Long, soft shadows from hill, tower, brig, dock, palms and lighthouse: `shots/critic9/hero_phone.png`, `shots/critic9/zoom60_beach.png` |
| Grey nights | clear | Dark basin, lantern pools, dark hill and alleys: `shots/critic9/night_phone.png`, `shots/critic9/night_phone_crop_town.png`. Nit: the basin has lightened to slate with smoky streaks: `shots/critic9/night_phone_crop_basin.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | The collar stripe is **cleared** — narrow rim with lace: `shots/critic9/hero_phone_crop_beach.png`, `shots/critic9/hero_phone.png`. The noon basin is still white marbling shore to shore: `shots/critic9/contact_clear_12_crop_basin.png`, `shots/critic9/contact.png`. The plane itself is cleared (banded gradient, chop, shadows): `shots/critic9/hero_phone_crop_bottom.png` |
| Hard water-to-beach line | **HIT** | The wash still ends against the sand in a stair-stepped sawtooth along the whole beach, now a row of pale triangular teeth in the lace: `shots/critic9/zoom60_beach_crop_shore.png`, `shots/critic9/zoom60_beach.png`, `shots/critic9/zoom120_brig_crop_shoreline_top.png`; straight mesh seams in the wash: `shots/critic9/zoom60_beach_crop_foam.png`, `shots/critic9/zoom60_beach_crop_wetband.png`. At hero scale the edge is soft: `shots/critic9/hero_phone_crop_beach.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms vary in lean and rotation: `shots/critic9/zoom60_beach.png`; bushes vary in size and cluster: `shots/critic9/zoom300_crop_island.png` |
| Fog as one colour | **HIT** (marginal) | 17:30 fog is now graded and hazes the far hill more than the town, but the near water is still a blank field and the frame is two bands, not layers: `shots/critic9/fog_phone_crop_hill.png`, `shots/critic9/fog_phone_crop_near_water.png`; 12:00 fog is an opaque pink-grey sheet: `shots/critic9/contact_fog_12_crop_town.png` |
| Sky without a sun | clear | Sun disc with halo at 12.4°: `shots/critic9/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | **HIT** (marginal) | Bushes are matte now but are still perfect spheres, a primitive rather than a sculpted volume: `shots/critic9/hero_phone_crop_hill.png`, `shots/critic9/sun_check_crop_foreground.png`. No text labels |
| Recognisable low-poly asset kit | clear (marginal) | Same three or four house masses repeat forty times, tinted per house: `shots/critic9/hero_phone_crop_town.png`, `shots/critic9/zoom300_crop_island.png` |

Four firm hits (flat lamp/rails; noon marbling; the sawtooth shoreline; and, counted with the marbling, the
white-stripe item) plus two marginal (beach grain; one-colour noon fog; sphere bushes — counted as two
marginals because the fog is half-cleared). The round fails automatically.

## Ranked issues (most damaging first)

1. **The shoreline is still a stair-stepped sawtooth at 60 m and 120 m, now drawn as triangular teeth in the lace; the wash carries straight mesh seams.** `shots/critic9/zoom60_beach_crop_shore.png`, `shots/critic9/zoom60_beach.png`, `shots/critic9/zoom120_brig_crop_shoreline_top.png`, `shots/critic9/zoom60_beach_crop_foam.png`. Fix: drive the shore blend from a noise-broken distance-to-shore alpha in the shader; never let mesh vertices or triangle edges be the shoreline.
2. **The noon basin is white marbling shore to shore.** `shots/critic9/contact_clear_12_crop_basin.png`, `shots/critic9/contact.png`. Fix: at 12:00 replace the marbling with tight point glitter and sparse crests; foam only at the mole and bow.
3. **Fog is still two bands, the near water blank, the noon fog an opaque sheet.** `shots/critic9/fog_phone_crop_near_water.png`, `shots/critic9/fog_phone_crop_hill.png`, `shots/critic9/contact_fog_12_crop_town.png`. Fix: density by camera distance so the near chop stays crisp; three depth layers each bluer and flatter (R4); lower noon albedo.
4. **Lamp head a faceted box; balcony rails wire cages; white-cross decal; bracket in a roof; black gable void; no eaves. Fourth round unchanged.** `shots/critic9/zoom60_town_crop_lamp.png`, `shots/critic9/zoom60_town_crop_balconies.png`, `shots/critic9/zoom60_town_crop_decal.png`, `shots/critic9/zoom60_town_crop_bracket.png`, `shots/critic9/zoom60_town_crop_eave.png`. Fix: modelled lantern with glass, rails with thickness, drop the decal, clamp balcony parts, close the gable, add eave overhang.
5. **The sky has no blue zenith, rose belt or clouds; the sun-check sea is one gold glitter sheet.** `shots/critic9/sun_check_crop_sky.png`, `shots/critic9/sun_check_crop_glitter.png`. Fix: painted sky with sculpted clouds; a glitter path that leaves dark water either side.
6. **Bushes are matte spheres; the hillside still has contour lines and a tan-and-olive stain across the top of the island.** `shots/critic9/hero_phone_crop_hill.png`, `shots/critic9/zoom300_crop_island.png`. Fix: lobed irregular volumes; delete the contour term; paint scrub, rock and sand masses.
7. **Night basin has lightened to slate with smoky streaks; the lighthouse floods the water; the jib glows; no moon rim on the brig.** `shots/critic9/night_phone_crop_basin.png`, `shots/critic9/night_phone_crop_mole.png`, `shots/critic9/night_phone_crop_brig.png`. Fix: water toward `#111C3C` with a narrow moon path; a beam cone; an unlit jib; moon rim on rail and rigging.
8. **The beach is one diagonal micro-grain with moiré; no debris.** `shots/critic9/zoom60_beach_crop_sand.png`. Fix: remove the single grain, add macro colour, seaweed line, shells, driftwood.
9. **Palm fronds are flat blades pinned beside the trunk, pass through a house and show through the mainsail.** `shots/critic9/zoom60_beach_crop_palm.png`, `shots/critic9/zoom60_town_crop_palm.png`, `shots/critic9/zoom120_brig_crop_sail.png`. Fix: fronds with spine, droop and underside; seated crown; placement that respects buildings; opaque sail.
10. **At 300 m the shallow band is a hard-edged turquoise ring round the island.** `shots/critic9/zoom300.png`, `shots/critic9/zoom300_crop_halo.png`. Fix: fade the shallow colour with depth; break the ring with the sand bar and reef shapes.
11. **A detached foam smear lies on open water beside the jib.** `shots/critic9/zoom120_brig_crop_jib.png`. Fix: delete; keep foam at the stem only.
12. **Quay is a radial flagstone grid with stitch seams.** `shots/critic9/zoom60_town_crop_quay.png`. Fix: irregular painted stones, continuous UVs, rounded wet edge.
13. **A chest and two barrels sit on the water off the beach.** `shots/critic9/hero_phone_crop_beach.png`. Fix: clamp props to land.
14. **No warm bounce in the 17:30 shade; no chimney smoke.** `shots/critic9/zoom60_town_crop_shade.png`, `shots/critic9/hero_phone_crop_town.png`. Fix: sky fill and ground-bounce term; soft-particle plumes.
15. **Aerial perspective on far water at 300 m is a hint only.** `shots/critic9/zoom300_crop_top.png`. Fix: a blue-grey distance shift.

## Round 8 issues — status

| # | Round 8 issue | Status | Evidence |
|---|---|---|---|
| 1 | Shoreline a stair-stepped sawtooth where the wash meets the sand | **unchanged** | Same sawtooth, now drawn as pale teeth in the lace, plus straight seams in the wash: `shots/critic9/zoom60_beach_crop_shore.png`, `shots/critic9/zoom120_brig_crop_shoreline_top.png`, `shots/critic9/zoom60_beach_crop_foam.png` |
| 2 | Foam collar a uniform ~15 m white band round the whole basin | **fixed** | Narrow cream rim with lace and a soft shallow band: `shots/critic9/hero_phone.png`, `shots/critic9/hero_phone_crop_beach.png`, `shots/critic9/zoom60_beach_crop_wetband.png` |
| 3 | Two cream patches in the harbour mouth; noon basin marbled shore to shore | **improved** | Patches gone, harbour-mouth bar a pale turquoise arc: `shots/critic9/hero_phone_crop_bottom.png`; noon marbling unchanged: `shots/critic9/contact_clear_12_crop_basin.png` |
| 4 | Fog depth inverted, one colour per band; noon fog opaque | **improved** (marginal) | Far hill now hazes more than the town: `shots/critic9/fog_phone_crop_hill.png`; near water still blank, noon still opaque: `shots/critic9/fog_phone_crop_near_water.png`, `shots/critic9/contact_fog_12_crop_town.png` |
| 5 | Sky no zenith, rose belt or clouds; glitter clips and floods | **improved** (marginal) | Stop-down leaves ripple structure in the glitter: `shots/critic9/sun_check_crop_glitter.png`; sky unchanged, sea still one gold sheet: `shots/critic9/sun_check_crop_sky.png`, `shots/critic9/sun_check.png` |
| 6 | Bushes glossy spheres; hill contour lines and stain | **improved** (marginal) | Bushes matte, no specular dot: `shots/critic9/hero_phone_crop_hill.png`; still spheres; contour lines and stain still drawn: same crop, `shots/critic9/zoom300_crop_island.png` |
| 7 | Lamp a faceted box; rails wire cages; white-cross decal | **unchanged** | `shots/critic9/zoom60_town_crop_lamp.png`, `shots/critic9/zoom60_town_crop_balconies.png`, `shots/critic9/zoom60_town_crop_decal.png` |
| 8 | Palm fronds flat blades pinned beside the trunk; through a house; through the mainsail | **unchanged** | `shots/critic9/zoom60_beach_crop_palm.png`, `shots/critic9/zoom60_town_crop_palm.png`, `shots/critic9/zoom120_brig_crop_sail.png` |
| 9 | Beach one diagonal micro-grain with moiré; no debris | **unchanged** | `shots/critic9/zoom60_beach_crop_sand.png` |
| 10 | Night jib orange-yellow; no rigging glint; basin grey not navy | **unchanged** (basin worse) | Jib and hull unchanged: `shots/critic9/night_phone_crop_brig.png`; basin lighter slate with smoky streaks: `shots/critic9/night_phone_crop_basin.png` |
| 11 | Quay a radial grid with stitch seams and a hard step | **unchanged** | `shots/critic9/zoom60_town_crop_quay.png` |
| 12 | Bracket floats inside a roof; no eaves; black gable void | **unchanged** | `shots/critic9/zoom60_town_crop_bracket.png`, `shots/critic9/zoom60_town_crop_eave.png` |
| 13 | Crate on the water at the beach edge | **unchanged** | Chest and two barrels on the water: `shots/critic9/hero_phone_crop_beach.png` |
| 14 | No warm bounce in the 17:30 shade; no chimney smoke | **unchanged** | `shots/critic9/zoom60_town_crop_shade.png`, `shots/critic9/hero_phone_crop_town.png` |
| 15 | Aerial perspective at 300 m a hint; no bow foam plume | **improved** (marginal) | A faint bow smear now starts at the stem: `shots/critic9/zoom120_brig_crop_bow.png`; far water unchanged: `shots/critic9/zoom300_crop_top.png` |

Fixed 1, improved 5 (four marginal), unchanged 9 (one worse). Of the five firm hits that carried the
automatic fail in round 8, one cleared (the white collar stripe), four persist (flat lamp/rails; beach
grain; noon marbling; the sawtooth shoreline) and the one-colour-fog hit softened to marginal; the
sphere-bush hit stays marginal.

## Budget lines (from `shots/critic9/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 156 | 1,480,531 | 41.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 156 | 1,480,531 | 41.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 156 | 1,070,883 | 41.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 109 | 1,456,385 | 41.3 | not measured |
| zoom120_brig (high, desktop) | 0 | 1 | 146 | 1,480,121 | 41.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 113 | 1,462,597 | 41.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 156 | 1,480,531 | 41.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 156 | 1,480,531 | 41.3 | not measured |
| landscape (high, phone-landscape, 1×) | 0 | 1 | 156 | 1,480,531 | 41.3 | not measured |
| sun_check (high, 1×, pitch 14 yaw 135 zoom 300) | 0 | 1 | 156 | 1,480,531 | 41.3 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not
supported` (environment). Triangles at high quality are unchanged at 1,480,531, 19,469 under the limit.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** lobed bush volumes, not spheres; a hill without contour lines or a map stain; sand without a single grain; a modelled lantern and rails; eaves; irregular quay stones; fronds with spine and underside.
- **Light (6.5):** a navy night basin with a narrow moon path and a beam cone; an unlit jib and moon rim on the rigging; a glitter path with dark water beside it; warm bounce in the 17:30 shade.
- **Atmosphere (5.5):** a painted sky with blue zenith, rose belt and clouds; fog with distance-driven density, crisp near chop and per-layer blue shift; lower noon albedo; a real aerial shift on far water.
- **Water (6.0):** a shoreline blended by noise-broken alpha with no sawtooth or seams; no noon marbling; no detached smears; a shallow ring that fades; a navy night basin.
- **Scale and motion (6.5):** props clamped to land; vegetation that does not clip buildings or sails; a seated crown; visible smoke; a motion capture.
- **Composition (7.5):** a noon cell without marbling; fog cells with depth; a painted hill; no halo ring at 300 m.
- **Programmer art (4.5):** clear the four firm hits (lamp/rails; noon marbling; sawtooth shoreline; and the white-stripe item it carries) and the marginals (beach grain, noon fog sheet, sphere bushes).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (4.5, four firm hits and two marginal), then atmosphere
(5.5) and water (6.0); only budget and errors (8.5) clears the bar. This round did what round 8 was told
to do first: the white collar is gone, the harbour-mouth clouds are gone, and at phone size the 17:30 hero
is now a saturated basin with a narrow lace rim, the brig and the shadows owning the lower half — the
closest the daytime frame has come to R1. The bushes went matte and the fog now hazes the far hill more
than the near quay. But the shoreline is still a sawtooth wherever the camera gets within 120 m, the noon
basin is still marbled white, the noon fog is still a sheet, the sky is still without a zenith or a cloud,
and the whole 60 m props list — lamp box, wire cages, decal, floating bracket, gable void, flagstone grid,
flat fronds, sand grain, crate on the water, no smoke — has now survived four rounds untouched. The night
slipped: the basin lightened to a smoky slate and the lighthouse floods the water. Scores moved from
6.5/6.5/5.0/5.5/6.5/7.0/8.5/4.0 in round 8 to 6.5/6.5/5.5/6.0/6.5/7.5/8.5/4.5: every gain is on the water
and the hero composition, nothing on materials, light or scale. Against Sea of Conquest the hero and the
300 m tile are a good indie take on the same picture; the shoreline at 60 m, the noon and fog cells and
the props at 60 m are not yet in the conversation. The next pass has to be the shoreline alpha first,
then the noon basin and fog layers, then the 60 m props list — in that order, and this time the props
list cannot be skipped again.
