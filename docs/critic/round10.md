# Critic round 10 — Ocean look test, fourth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art. The bar is readability, shape language, painted water
and foam, sculpted vegetation, and colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` from HEAD `b82c3f6` ("Round 10 builder
pass (part 8): tighter stylised water lobe in the far field so the low-sun glitter is a path"; parts 1–8
of the round 10 builder pass are all in this HEAD). All ten shots were taken this round in the required
order, in the foreground, `--frames 4` throughout: sixteen full frames under `shots/critic10/` plus
fifty-three native-resolution crops (`*_crop_*.png`, nearest-neighbour upscaled where the source was 1×,
cut with a scratch pngjs script outside the repo). Every frame and crop cited below was opened and looked
at. No round 1–9 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0

What moved: the contour lines are gone from the hill and it is now a painted olive-and-tan mass with soft
sand patches (`shots/critic10/zoom300_crop_island.png`, `shots/critic10/landscape_crop_far.png`); the
white-cross window decal is gone and every window carries dark glazing bars
(`shots/critic10/zoom60_town_crop_walls.png`); the balconies have solid parapets instead of wire cages
(`shots/critic10/zoom60_town_crop_balconies.png`); the palm crown now sits on top of the trunk and the
trunk is a ringed painted column (`shots/critic10/zoom60_beach_crop_palm.png`); the town at 60 m still
holds — cracked plaster, cream/ochre/peach tints, chimneys with cowls, rain stains under sills
(`shots/critic10/zoom60_town.png`, `shots/critic10/hero_phone_crop_town.png`); the brig's hull, deck,
grates and rigging still read as one painted object (`shots/critic10/zoom120_brig_crop_deck.png`,
`shots/critic10/zoom120_brig_crop_bow.png`); lighthouse and mole boulders hold
(`shots/critic10/hero_phone_crop_mole.png`). What still fails the stylised bar: the quay lamp is the same
faceted black box on a stick (`shots/critic10/zoom60_town_crop_lamp.png`); the new parapets are flat,
untextured grey slabs that read as air-conditioning units bolted to the wall, with black voids behind
them (`shots/critic10/zoom60_town_crop_balconies.png`); the quay is the same regular radial flagstone
grid with stitch seams (`shots/critic10/zoom60_town_crop_quay.png`); the beach is still one diagonal
micro-ripple grain with moiré and no debris (`shots/critic10/zoom60_beach_crop_sand.png`); the roof is a
single tile module repeated in a regular grid at 60 m (`shots/critic10/zoom60_town_crop_roof.png`); the
fronds are still flat lime blades with a faint crease, not pinnate leaflets on a rachis
(`shots/critic10/zoom60_beach_crop_palm.png`, `shots/critic10/zoom120_brig_crop_palm.png`); the bushes
are still matte spheres (`shots/critic10/hero_phone_crop_hill.png`,
`shots/critic10/sun_check_crop_foreground.png`); the hill in the hero is an olive wash with a salmon
smear across the top rather than scrub, rock and sand masses (`shots/critic10/hero_phone_crop_hill.png`);
and a milky haze now sits over every 60 m frame, flattening the near materials
(`shots/critic10/zoom60_town_crop_far.png`, `shots/critic10/zoom60_beach_crop_foam.png`). To reach 8.5
under this direction: a modelled lantern with glass; thin rails with thickness and a textured parapet;
irregular hand-placed quay stones with a wet rounded edge; sand with macro colour, a seaweed line and
shells; a tile texture with row breaks and replacements; leaflets on the fronds; lobed bush volumes; a
hill painted as masses; and a crisp near field at 60 m.

### 2. Light — 6.5

The 17:30 hero light still carries the day: sun at 12.4° (sun y = 0.2145 in
`shots/critic10/hero_phone.json`, disc verified in `shots/critic10/sun_check_crop_sky.png`), long soft
shadows from hill, tower, brig, dock and lighthouse up-left across the water
(`shots/critic10/hero_phone.png`). The sun-check sea is now a glitter *path* with darker gold water
either side of it and under the headland — the round's one real light gain
(`shots/critic10/sun_check_crop_glitter.png`). The noon sun specular is damped: the basin is tight
glitter and sparse crests instead of a white sheet (`shots/critic10/contact_clear_12_crop_basin.png`).
The night keeps R2's structure on land — lantern pools on the quay, amber windows in varied warmth,
the dinghy lantern, the bow lantern with a warm reflection (`shots/critic10/night_phone_crop_town.png`,
`shots/critic10/night_phone_crop_brig.png`). Faults: the night basin is a pale grey marbled sheet with
broad soft streaks over most of its area — lighter than round 9 and nothing like a navy basin with a
narrow moon path (`shots/critic10/night_phone_crop_basin.png`, `shots/critic10/contact_clear_22_crop_basin.png`);
the lighthouse still throws a wide pale wash over the water south of the mole
(`shots/critic10/night_phone_crop_mole.png`); the jib is still a lit tan triangle in the dark and the
hull a black cut-out with no moon rim on rail or rigging (`shots/critic10/night_phone_crop_brig.png`);
the hill at night is pure black with no moon fill at all, so "moonlight silver on wave backs" has no
counterpart on land (`shots/critic10/night_phone_crop_hill.png`); in fog the sun shadows of the hill and
the lighthouse are at full strength and full length, where the weather sheet asks for 35% sun and soft
low-contrast shadows (`shots/critic10/fog_phone_crop_mole.png`, `shots/critic10/fog_phone.png`); there is
still no warm ground bounce on the shaded façades at 17:30 — the shade is a flat cool grey
(`shots/critic10/zoom60_town_crop_balconies.png`). To reach 8.5: a `#111C3C` basin with a narrow moon
path and a faint moon fill on the hill; a beam cone; an unlit jib and moon rim on the rigging; sun
stopped down in fog; a ground-bounce term.

### 3. Atmosphere — 5.5

The sky in the only frame that contains it now grades from a saturated ochre horizon through a warm
halo to a grey-lilac top with a sun disc; it is warmer and less green than round 9, but there is still
no cobalt zenith in the frame, no rose belt and no clouds (`shots/critic10/sun_check_crop_sky.png`).
The 17:30 fog is unchanged in structure: the far hill hazes to a sepia veil
(`shots/critic10/fog_phone_crop_hill.png`), the town keeps its colour under a grey veil
(`shots/critic10/fog_phone_crop_town.png`), and the basin from the brig to the bottom of the frame is a
saturated blue with the shallow arc drawn across it — the near water is neither crisp nor bluer-greyer,
it is simply the clear-weather water under a thin veil (`shots/critic10/fog_phone_crop_brig.png`,
`shots/critic10/fog_phone_crop_near_water.png`, `shots/critic10/contact_fog_175_crop_near_water.png`).
Two bands, not stacked depth layers. The noon fog is still an opaque grey-blue sheet over the whole
frame (`shots/critic10/contact_fog_12_crop_town.png`, `shots/critic10/contact_fog_12_crop_basin.png`).
The 22:00 fog is again the best cell: lantern points and a glowing lighthouse halo
(`shots/critic10/contact_fog_22_crop_mole.png`). New this round and wrong: haze now starts 70 m out,
which is closer than the 60 m preset's camera, so every 60 m frame carries a milky veil over roofs,
walls and the beach wash forty metres from the lens (`shots/critic10/zoom60_town_crop_far.png`,
`shots/critic10/zoom60_town_crop_smoke.png`, `shots/critic10/zoom60_beach_crop_foam.png`) — Sea of
Conquest's near field is crisp. Aerial perspective at 300 m: the far water at the top of the frame is a
slightly paler blue, still a hint (`shots/critic10/zoom300_crop_top.png`, `shots/critic10/zoom300_crop_bottom.png`).
Bloom is restrained. To reach 8.5: fog density driven by camera distance so the near chop stays crisp
and each farther layer goes bluer and flatter; lower noon albedo; a haze start beyond the 60 m camera
distance; a painted sky with blue zenith, rose belt and sculpted clouds; a real blue-grey shift on far
water.

### 4. Water — 7.0

The round's real gains are here. The noon basin is no longer marbled shore to shore: it is a cobalt
field with tight point glitter and sparse crests, with only a few bright white clumps near the mole and
at the bottom of the frame (`shots/critic10/contact_clear_12_crop_basin.png`, `shots/critic10/contact.png`).
The detached foam smear beside the jib is gone; a faint pale smear starts at the stem only
(`shots/critic10/zoom120_brig_crop_bow.png`, `shots/critic10/zoom120_brig_crop_sail.png`). At hero and
120 m the shoreline is now a noise-broken lace edge that blends into a pink-cream wet band
(`shots/critic10/hero_phone_crop_beach.png`, `shots/critic10/zoom120_brig_crop_shoreline_top.png`,
`shots/critic10/zoom60_beach_crop_wetband.png`, `shots/critic10/zoom60_beach_crop_foam.png`). The
300 m shallow ring is narrower and softer than the hard halo of round 9
(`shots/critic10/zoom300_crop_halo.png`, `shots/critic10/landscape_crop_island.png`). The banded
turquoise-to-cobalt gradient, painted brush chop and shadow-darkened water hold at every zoom
(`shots/critic10/zoom120_brig_crop_water.png`, `shots/critic10/zoom300_crop_bottom.png`,
`shots/critic10/hero_phone_crop_bottom.png`), and the low-sun glitter is now a path with dark water
beside it (`shots/critic10/sun_check_crop_glitter.png`). What still fails: the upper third of the 60 m
beach still ends in a stair-stepped sawtooth with a dark seam line under each tooth
(`shots/critic10/zoom60_beach_crop_shore.png`, `shots/critic10/zoom120_brig_crop_palm.png`); the shallow
arc across the harbour mouth fades softly on its outer edge but has an abrupt inner edge, so at hero
scale it reads as a milky band laid over the water rather than a sand bar
(`shots/critic10/hero_phone_crop_bottom.png`, `shots/critic10/fog_phone_crop_near_water.png`); the night
water is a pale grey marbled sheet rather than a navy basin (`shots/critic10/night_phone_crop_basin.png`);
the far sea in the sun check is still a gold sheet outside the path
(`shots/critic10/sun_check_crop_glitter.png`). To reach 8.5: the same noise-broken alpha on the whole
shoreline including the steep upper beach; a shallow arc that fades on both edges and follows a bar
shape; a navy night basin with a narrow moon path; darker blue-violet water outside the glitter path.

### 5. Scale and motion — 6.5

The 1.7× brig, dock, dinghies, barrels, lamp posts and lighthouse still agree with each other and with
the town at Sea of Conquest scale (`shots/critic10/hero_phone.png`, `shots/critic10/zoom120_brig_crop_deck.png`);
bushes vary in size and cluster (`shots/critic10/zoom300_crop_island.png`); palms vary in lean and
rotation and the crowns now sit on the trunks (`shots/critic10/zoom60_beach.png`,
`shots/critic10/zoom60_beach_crop_palm.png`); palms are out of the town footprint — none passes
through a façade in this round's frames (`shots/critic10/hero_phone_crop_town.png`); a gull is in the
hero (`shots/critic10/hero_phone.png`); chimney smoke finally exists (`shots/critic10/zoom60_town_crop_smoke.png`,
`shots/critic10/contact_clear_12_crop_town.png`). Still wrong: a chest and two barrels sit on the water in
front of the quay — the builder's "quay cargo on solid ground only" did not land
(`shots/critic10/hero_phone_crop_quay_left.png`, `shots/critic10/hero_phone_crop_beach.png`); a green
frond still shows through the mainsail (`shots/critic10/zoom120_brig_crop_sail.png`); the smoke reads as
a stationary grey haze patch lying on the roofs, not a rising plume with drift
(`shots/critic10/zoom60_town_crop_smoke.png`); the moored dinghies read as open wire hulls with no
planking or thwarts (`shots/critic10/hero_phone_crop_quay_left.png`, `shots/critic10/hero_phone_crop_quay_right.png`);
a black cube of cargo sits on the quay (`shots/critic10/hero_phone_crop_quay_right.png`); the sphere
bushes are still primitives. Palm sway, sail, flag, smoke and gull motion remain unverifiable from
stills. To reach 8.5: props clamped to land; an opaque sail; a plume with drift; planked dinghies;
lobed bushes; and a short motion capture.

### 6. Composition and squint test — 7.5

The hero holds its round 9 structure — warm town in the upper third, brig on the lower-left third
line, lighthouse lower-right, long diagonal shadows, a saturated basin owning the lower half
(`shots/critic10/hero_phone.png`); the landscape and 300 m frames read as a Sea of Conquest map tile,
now without contour lines and with a softer shallow ring (`shots/critic10/landscape.png`,
`shots/critic10/zoom300.png`); the noon thumbnail is now a cobalt basin with glitter instead of a white
pool (`shots/critic10/contact.png`, cell clear 12:00); the night thumbnail is owned by the lantern-lit
quay and lighthouse (`shots/critic10/contact.png`, cell clear 22:00). Against it: the upper quarter of
the hero is a muddy olive field with a salmon smear and scattered green dots, which is the weakest
passage in the frame at thumbnail (`shots/critic10/hero_phone_crop_hill.png`); the three fog cells are
still flat sheets at thumbnail (`shots/critic10/contact.png`); the shallow arc's abrupt inner edge
draws a curve across the harbour mouth (`shots/critic10/hero_phone_crop_bottom.png`); the 60 m frames
are veiled (`shots/critic10/zoom60_town.png`); there is still no horizon in the hero. To reach 8.5: a
painted hill; fog cells with depth; an arc that fades both ways; a crisp near field.

### 7. Budget and errors — 8.5

All sixteen per-shot JSON logs report zero console errors. Draw calls 109–156 (limit 300); triangles
984,757 at medium and 1,366,659–1,390,805 at high (limit 1.5 M) — down from 1,480,531 in round 9 after
the bush trim; texture memory 41.3 MB (limit 256). Device fps is honestly "not measured"
(`shots/critic10/hero_phone.json`: "not measured (headless SwiftShader; frameMs is smoke only)"). The
single warning on every shot is the environment's `THREE.WebGLRenderer: KHR_parallel_shader_compile
extension not supported`. Nit: device fps remains unmeasured, so this line cannot go higher.

### 8. Programmer-art checklist — 5.0 (automatic fail)

Two firm hits and four marginal; the noon white-stripe item and the detached smear are cleared. See the
checklist below.

## Programmer-art checklist

Stylised flat colour is not counted as a hit where it is a deliberate painted read with shading;
untextured placeholder surfaces still are.

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Lamp head still a faceted black box on a stick: `shots/critic10/zoom60_town_crop_lamp.png`. Balcony parapets are flat untextured grey slabs with black voids behind them: `shots/critic10/zoom60_town_crop_balconies.png`. Sails cleared as a painted read (seams, belly gradient): `shots/critic10/zoom120_brig_crop_sail.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** (marginal) | Beach is one diagonal micro-ripple grain with moiré across the whole strand: `shots/critic10/zoom60_beach_crop_sand.png`; roof is one tile module in a regular grid at 60 m: `shots/critic10/zoom60_town_crop_roof.png`. Water cleared: `shots/critic10/zoom120_brig_crop_water.png` |
| Shadow acne or missing shadows | clear | Long, soft shadows from hill, tower, brig, dock, palms and lighthouse: `shots/critic10/hero_phone.png`, `shots/critic10/zoom60_beach.png` |
| Grey nights | **HIT** (marginal) | Land is dark with lantern pools: `shots/critic10/night_phone_crop_town.png`. But the basin — most of the frame — is a pale grey marbled sheet, not navy: `shots/critic10/night_phone_crop_basin.png`, `shots/critic10/contact_clear_22_crop_basin.png` |
| Uniform blue water plane or white-stripe foam | clear | Noon marbling replaced by tight glitter and sparse crests: `shots/critic10/contact_clear_12_crop_basin.png`; narrow lace rim, banded gradient, chop, shadows: `shots/critic10/hero_phone_crop_beach.png`, `shots/critic10/hero_phone_crop_bottom.png` |
| Hard water-to-beach line | **HIT** | Upper third of the 60 m beach still ends in a stair-stepped sawtooth with a dark seam under each tooth: `shots/critic10/zoom60_beach_crop_shore.png`, `shots/critic10/zoom120_brig_crop_palm.png`. Lower beach, hero and 120 m are blended lace now: `shots/critic10/zoom60_beach_crop_wetband.png`, `shots/critic10/zoom120_brig_crop_shoreline_top.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms vary in lean and rotation: `shots/critic10/zoom60_beach.png`; bushes vary in size and cluster: `shots/critic10/zoom300_crop_island.png` |
| Fog as one colour | **HIT** (marginal) | 12:00 fog is an opaque grey-blue sheet: `shots/critic10/contact_fog_12_crop_town.png`; 17:30 fog is two bands with the clear-weather basin under a veil: `shots/critic10/fog_phone_crop_near_water.png`, `shots/critic10/fog_phone_crop_hill.png` |
| Sky without a sun | clear | Sun disc with halo at 12.4°: `shots/critic10/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | **HIT** (marginal) | Bushes are still perfect matte spheres: `shots/critic10/hero_phone_crop_hill.png`, `shots/critic10/sun_check_crop_foreground.png`; a black cube of cargo on the quay: `shots/critic10/hero_phone_crop_quay_right.png`. No text labels in any scene frame (the contact-sheet captions are harness chrome) |
| Recognisable low-poly asset kit | clear (marginal) | Same three or four house masses repeat forty times, tinted per house: `shots/critic10/hero_phone_crop_town.png`, `shots/critic10/zoom300_crop_island.png` |

Two firm hits (flat lamp and slab parapets; the sawtooth on the upper 60 m beach) plus four marginal
(beach grain and roof repeat; grey night basin; one-colour noon fog; sphere bushes and the cargo cube).
The round fails automatically.

## Ranked issues (most damaging first)

1. **The upper third of the 60 m beach still ends in a stair-stepped sawtooth with a dark seam under each tooth.** `shots/critic10/zoom60_beach_crop_shore.png`, `shots/critic10/zoom120_brig_crop_palm.png`. Fix: apply the noise-broken distance-to-shore alpha to the steep upper beach too; the clamped shore vertices must never be the visible edge.
2. **Lamp head a faceted black box; balcony parapets flat untextured grey slabs with black voids; no eaves. Fifth round for the lamp.** `shots/critic10/zoom60_town_crop_lamp.png`, `shots/critic10/zoom60_town_crop_balconies.png`. Fix: a modelled lantern with a glass cage and a cap; thin rails with thickness on a plastered parapet; close the voids; an eave overhang.
3. **Night basin a pale grey marbled sheet; lighthouse floods the water; jib glows; hull has no moon rim; hill pure black.** `shots/critic10/night_phone_crop_basin.png`, `shots/critic10/night_phone_crop_mole.png`, `shots/critic10/night_phone_crop_brig.png`, `shots/critic10/night_phone_crop_hill.png`. Fix: water toward `#111C3C` with a narrow moon path; a beam cone; an unlit jib; moon rim on rail and rigging; a faint cool moon fill on land.
4. **Fog is still two bands with the clear-weather basin under a veil; noon fog an opaque sheet; sun shadows at full strength in fog.** `shots/critic10/fog_phone_crop_near_water.png`, `shots/critic10/contact_fog_12_crop_town.png`, `shots/critic10/fog_phone_crop_mole.png`. Fix: density by camera distance so the near chop stays crisp; three depth layers each bluer and flatter (R4); sun at 35% with soft shadows; lower noon albedo.
5. **A milky haze now veils every 60 m frame (haze starts 70 m out, closer than the 60 m camera).** `shots/critic10/zoom60_town_crop_far.png`, `shots/critic10/zoom60_beach_crop_foam.png`, `shots/critic10/zoom60_town_crop_smoke.png`. Fix: start the haze beyond the 60 m preset's camera distance; keep the near field crisp.
6. **Bushes are matte spheres; the hero hill is an olive wash with a salmon smear across the top.** `shots/critic10/hero_phone_crop_hill.png`, `shots/critic10/sun_check_crop_foreground.png`. Fix: lobed irregular two-tone volumes; paint the hill as scrub, rock and sand masses with a value structure.
7. **The beach is one diagonal micro-grain with moiré; no debris.** `shots/critic10/zoom60_beach_crop_sand.png`. Fix: remove the single grain, add macro colour, a seaweed line, shells, driftwood.
8. **A chest and two barrels sit on the water in front of the quay; dinghies read as wire hulls; a black cargo cube on the quay.** `shots/critic10/hero_phone_crop_quay_left.png`, `shots/critic10/hero_phone_crop_quay_right.png`. Fix: clamp props to land; planked dinghies with thwarts; a textured crate.
9. **A frond shows through the mainsail; fronds are flat blades, not leaflets.** `shots/critic10/zoom120_brig_crop_sail.png`, `shots/critic10/zoom60_beach_crop_palm.png`. Fix: opaque sail; pinnate leaflets on a rachis with a darker underside.
10. **Quay is a radial flagstone grid with stitch seams.** `shots/critic10/zoom60_town_crop_quay.png`. Fix: irregular painted stones, continuous UVs, rounded wet edge.
11. **Chimney smoke reads as a grey haze patch lying on the roofs.** `shots/critic10/zoom60_town_crop_smoke.png`, `shots/critic10/contact_clear_12_crop_town.png`. Fix: a rising soft-particle plume with wind drift and fade.
12. **Roof is one tile module in a regular grid at 60 m.** `shots/critic10/zoom60_town_crop_roof.png`. Fix: row breaks, darker replacements, lichen patches, a ridge cap.
13. **Sky has no cobalt zenith in frame, no rose belt, no clouds.** `shots/critic10/sun_check_crop_sky.png`. Fix: a painted sky with sculpted clouds.
14. **The shallow arc has an abrupt inner edge; noon glitter clumps into white patches near the mole.** `shots/critic10/hero_phone_crop_bottom.png`, `shots/critic10/contact_clear_12_crop_basin.png`. Fix: fade the arc on both edges along a bar shape; cap the glitter clump size.
15. **Aerial perspective on far water at 300 m is a hint only.** `shots/critic10/zoom300_crop_top.png`. Fix: a blue-grey distance shift.

## Round 9 issues — status

| # | Round 9 issue | Status | Evidence |
|---|---|---|---|
| 1 | Shoreline a stair-stepped sawtooth at 60 m and 120 m; straight mesh seams in the wash | **improved** | Hero, 120 m and the lower 60 m beach are a blended lace with a wet band: `shots/critic10/zoom120_brig_crop_shoreline_top.png`, `shots/critic10/zoom60_beach_crop_wetband.png`; the upper 60 m beach is still a sawtooth with a dark seam: `shots/critic10/zoom60_beach_crop_shore.png` |
| 2 | Noon basin white marbling shore to shore | **fixed** | Cobalt basin with tight glitter and sparse crests; a few white clumps near the mole: `shots/critic10/contact_clear_12_crop_basin.png` |
| 3 | Fog two bands, near water blank; noon fog opaque | **unchanged** | `shots/critic10/fog_phone_crop_near_water.png`, `shots/critic10/fog_phone_crop_hill.png`, `shots/critic10/contact_fog_12_crop_town.png` |
| 4 | Lamp box; wire-cage rails; white-cross decal; bracket in a roof; gable void; no eaves | **improved** (marginal) | Decal gone, glazing bars in: `shots/critic10/zoom60_town_crop_walls.png`; rails now solid but flat grey slabs: `shots/critic10/zoom60_town_crop_balconies.png`; lamp unchanged: `shots/critic10/zoom60_town_crop_lamp.png`; no eaves: `shots/critic10/zoom60_town_crop_far.png` |
| 5 | Sky no zenith, rose belt or clouds; sun-check sea one gold sheet | **improved** | Glitter is now a path with darker water beside it: `shots/critic10/sun_check_crop_glitter.png`; sky warmer with a grey-lilac top, still no blue zenith, rose belt or clouds: `shots/critic10/sun_check_crop_sky.png` |
| 6 | Bushes matte spheres; hill contour lines and a tan-and-olive stain | **improved** | Contour lines gone, hill painted as olive-and-tan masses: `shots/critic10/zoom300_crop_island.png`; spheres unchanged and a salmon smear across the hero hill: `shots/critic10/hero_phone_crop_hill.png` |
| 7 | Night basin slate with smoky streaks; lighthouse floods; jib glows; no moon rim | **unchanged** (basin lighter) | `shots/critic10/night_phone_crop_basin.png`, `shots/critic10/night_phone_crop_mole.png`, `shots/critic10/night_phone_crop_brig.png` |
| 8 | Beach one diagonal micro-grain with moiré; no debris | **unchanged** | `shots/critic10/zoom60_beach_crop_sand.png` |
| 9 | Fronds flat blades pinned beside the trunk; through a house; through the mainsail | **improved** | Crown seated on the trunk and palms out of the town: `shots/critic10/zoom60_beach_crop_palm.png`, `shots/critic10/hero_phone_crop_town.png`; blades still flat and still through the mainsail: `shots/critic10/zoom120_brig_crop_sail.png` |
| 10 | Hard-edged turquoise ring round the island at 300 m | **improved** | Narrower, softer ring: `shots/critic10/zoom300_crop_halo.png`, `shots/critic10/landscape_crop_island.png` |
| 11 | Detached foam smear beside the jib | **fixed** | Only a stem smear remains: `shots/critic10/zoom120_brig_crop_bow.png`, `shots/critic10/zoom120_brig_crop_sail.png` |
| 12 | Quay a radial grid with stitch seams | **unchanged** | `shots/critic10/zoom60_town_crop_quay.png` |
| 13 | Chest and two barrels on the water off the beach | **unchanged** | `shots/critic10/hero_phone_crop_quay_left.png`, `shots/critic10/hero_phone_crop_beach.png` |
| 14 | No warm bounce in the 17:30 shade; no chimney smoke | **improved** (marginal) | Smoke present but reads as a haze patch: `shots/critic10/zoom60_town_crop_smoke.png`; shade still a flat cool grey: `shots/critic10/zoom60_town_crop_balconies.png` |
| 15 | Aerial perspective at 300 m a hint only | **unchanged** | `shots/critic10/zoom300_crop_top.png` |

Fixed 2, improved 7 (two marginal), unchanged 6 (one lighter). Of the four firm hits that carried the
automatic fail in round 9, two cleared (noon marbling; the white-stripe item it carried), two persist
(flat lamp, now joined by slab parapets; the sawtooth on the upper 60 m beach). The night basin has
become a marginal grey-night hit. New regression: near-field haze at 60 m.

## Budget lines (from `shots/critic10/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 156 | 1,390,805 | 41.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 156 | 1,390,805 | 41.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 156 | 984,757 | 41.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 109 | 1,366,659 | 41.3 | not measured |
| zoom120_brig (high, desktop) | 0 | 1 | 146 | 1,390,395 | 41.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 113 | 1,372,871 | 41.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 156 | 1,390,805 | 41.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 156 | 1,390,805 | 41.3 | not measured |
| landscape (high, phone-landscape, 1×) | 0 | 1 | 156 | 1,390,805 | 41.3 | not measured |
| sun_check (high, 1×, pitch 14 yaw 135 zoom 300) | 0 | 1 | 156 | 1,390,805 | 41.3 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not
supported` (environment). Triangles at high quality fell from 1,480,531 to 1,390,805 (109,195 of
headroom under the limit).

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** a modelled lantern; rails with thickness on a textured parapet; irregular quay stones; sand without a single grain; a roof texture with breaks; leaflets on the fronds; lobed bushes; a hill painted as masses; a crisp near field.
- **Light (6.5):** a navy night basin with a narrow moon path, a beam cone, an unlit jib, moon rim on the rigging and a faint moon fill on land; sun stopped down in fog; warm bounce in the 17:30 shade.
- **Atmosphere (5.5):** fog with distance-driven density, crisp near chop and per-layer blue shift; a noon fog that is not a sheet; haze that starts beyond the 60 m camera; a painted sky with blue zenith, rose belt and clouds; a real aerial shift on far water.
- **Water (7.0):** the shore alpha on the steep upper beach; a shallow arc that fades both ways; a navy night basin; darker water outside the glitter path.
- **Scale and motion (6.5):** props clamped to land; an opaque sail; a plume with drift; planked dinghies; a motion capture.
- **Composition (7.5):** a painted hill; fog cells with depth; an arc without a hard inner edge; a crisp 60 m frame.
- **Programmer art (5.0):** clear the two firm hits (lamp and slab parapets; upper-beach sawtooth) and the marginals (beach grain and roof repeat; grey night basin; noon fog sheet; sphere bushes and the cargo cube).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (5.0, two firm hits and four marginal), then atmosphere
(5.5); light and scale sit at 6.5, materials and water at 7.0, composition at 7.5; only budget and
errors (8.5) clears the bar. This round did the first two things it was told to do: the noon basin is
now cobalt with glitter instead of white marbling, the shoreline at hero and 120 m is a blended lace
with a wet band, the detached smear is gone, the contour lines are off the hill, the low-sun glitter is
a path, the decal is gone and the crowns sit on the trunks. But the sawtooth survives on the steep
upper beach at 60 m, the fog is untouched, the night basin has gone lighter and greyer, the lamp is the
same black box for a fifth round, the new parapets are grey slabs, the barrels still float in front of
the quay despite the commit message, and a new near-field haze veils every 60 m frame. Scores moved
from 6.5/6.5/5.5/6.0/6.5/7.5/8.5/4.5 in round 9 to 7.0/6.5/5.5/7.0/6.5/7.5/8.5/5.0: the gains are on
water and on the hill, nothing on fog or night. Against Sea of Conquest the hero, the noon cell and the
300 m tile are now a competent indie take on the same picture; the night, the fog cells and the 60 m
props are still not in the conversation. The next pass must be, in order: the upper-beach shore alpha;
the night basin and beam; fog by camera distance with the haze start pushed past the 60 m camera; then
the lantern, parapets, quay and sand — and the floating cargo, which was claimed fixed and is not.
