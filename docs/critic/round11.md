# Critic round 11 — Ocean look test, fifth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` from HEAD `c90daec` ("Docs: decision 34
(shore slivers, shader dump check)"; the eight "Round 11 builder pass (part 1..8)" commits d11fd6b → 67f231e
are all in this HEAD). All ten shots were taken this round, in the required order, in the foreground,
`--frames 4` throughout: sixteen full frames under `shots/critic11/` plus fifty-nine native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled 2–3× where the source was 1×, cut with a scratch pngjs script
outside the repo). Every frame and crop cited below was opened and looked at. No round 1–10 screenshot is
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

### 1. Materials — 7.0

What moved: the quay lamp is finally a lantern — a verdigris cap over pale glass on a dark post, with the
post throwing a long shadow up the quay (`shots/critic11/zoom60_town_crop_lamp.png`); the bushes are no
longer spheres but lobed two-tone lime/olive volumes (`shots/critic11/hero_phone_crop_hill.png`,
`shots/critic11/hero_phone_crop_tower.png`); the hill is painted as scrub, rock and dune masses instead of
a wash (`shots/critic11/zoom300_crop_island.png`, `shots/critic11/landscape_crop_far.png`); the sand grain
is softer, with a second scale and a warm macro tint, and the moiré is mostly gone
(`shots/critic11/zoom60_beach_crop_sand.png`); the quay paving no longer has stitch seams
(`shots/critic11/zoom60_town_crop_quay.png`); the walls, chimneys, cracked plaster and glazing bars still
hold at 60 m (`shots/critic11/zoom60_town_crop_walls.png`, `shots/critic11/zoom60_town_crop_far.png`); the
brig's deck, grates, hatches and rail are the best material set in the scene
(`shots/critic11/zoom120_brig_crop_deck.png`). What still fails the stylised bar: the quay is now a rigid
diamond grid of identical stones with dark seams — a different tiling, not painted stone
(`shots/critic11/zoom60_town_crop_quay.png`); the roof is still one tile module in a strict grid with a few
pale flecks and no ridge cap or row break (`shots/critic11/zoom60_town_crop_roof.png`,
`shots/critic11/zoom60_town_crop_smoke.png`); the balcony parapets and sills are still flat, untextured
grey slabs and one window is a black void (`shots/critic11/zoom60_town_crop_balconies.png`); the sand is a
fabric weave with a salmon cast rather than sand, with no debris (`shots/critic11/zoom60_beach_crop_sand.png`,
`shots/critic11/zoom60_beach_crop_foam.png`); the fronds are still flat lime blades in a starburst, one
dead frond a translucent tan blade (`shots/critic11/zoom60_beach_crop_palm.png`,
`shots/critic11/zoom60_beach_crop_palm_shadow.png`); the bushes carry a hard black shadow blob and a
uniform sprinkle distribution at 300 m (`shots/critic11/zoom300_crop_top.png`); the hill still has a salmon
cloud smear across the sand patches (`shots/critic11/hero_phone_crop_tower.png`); the interior plateau's
"rock" reads as grey tarmac patches (`shots/critic11/zoom300_crop_top.png`). To reach 8.5: irregular
painted quay stones with a rounded wet edge; a roof with row breaks, replacements and a ridge cap; a
plastered parapet with rails of thickness; sand without a weave; pinnate leaflets; bushes with a soft
contact shadow and clustering.

### 2. Light — 6.5

What moved: the night is no longer grey — the basin is navy-black, the quay lanterns throw warm pools on
the paving and streak in the water, the windows are amber, the dock lamp reflects as a short warm streak
(`shots/critic11/night_phone_crop_town.png`, `shots/critic11/night_phone_crop_basin.png`,
`shots/critic11/contact_clear_22_crop_basin.png`); the bell tower throws a long shadow up-left and the lamp
post's shadow at 60 m is long and sharp (`shots/critic11/hero_phone_crop_hill.png`,
`shots/critic11/zoom60_town_crop_lamp.png`); palm shadows on the beach are long and soft
(`shots/critic11/zoom60_beach_crop_shadows.png`). What fails: **shadow directions disagree within one
frame** — the tower's shadow falls up-left (`shots/critic11/hero_phone_crop_tower.png`,
`shots/critic11/hero_phone_crop_hill.png`), the dock's shadow lies down-left of the pier
(`shots/critic11/hero_phone_crop_dock_shadow.png`), and a hard straight dark band runs from the brig
down-right to the lighthouse (`shots/critic11/hero_phone_crop_shadow.png`,
`shots/critic11/zoom120_brig_crop_water.png`) while the mainsail's own shadow lies up-left of the sail in
the same 120 m frame — three directions for one sun; the night moon path is a broad grey marbled sheet, not
a narrow path, and the hill is pure black with the bushes still lime (`shots/critic11/night_phone_crop_basin.png`,
`shots/critic11/night_phone_crop_hill.png`); the jib still glows tan at night and the hull has no moon rim
(`shots/critic11/night_phone_crop_brig.png`); the lighthouse still floods a halo with no beam
(`shots/critic11/night_phone_crop_mole.png`); in fog the dock and brig shadows are at full clear-weather
strength (`shots/critic11/fog_phone_crop_town.png`, `shots/critic11/contact_fog_12_crop_town.png`); shade
on walls is still a flat cool grey with no warm bounce (`shots/critic11/zoom60_town_crop_walls.png`); the
17:30 horizon band under the sun blows out to white across the whole far sea
(`shots/critic11/sun_check_crop_glitter.png`). To reach 8.5: one shadow direction on land and water; a
narrow moon path; a beam; an unlit jib and moon rim; sun at 35% with soft shadows in fog; warm bounce.

### 3. Atmosphere — 6.0

What moved: the near-field haze that veiled every 60 m frame in round 10 is gone — the 60 m town and beach
frames are crisp to the far row of roofs (`shots/critic11/zoom60_town_crop_far.png`,
`shots/critic11/zoom60_beach_crop_foam.png`); the 300 m tile has a faint blue lift on the far water
(`shots/critic11/zoom300_crop_top.png`). What fails: fog is still two bands — a grey-blue veil over the
whole frame with the clear-weather basin under it, no depth layers, the near chop as dull as the far
(`shots/critic11/fog_phone.png`, `shots/critic11/fog_phone_crop_near_water.png`,
`shots/critic11/contact_fog_175_crop_near_water.png`); the noon fog cell is an opaque grey sheet
(`shots/critic11/contact_fog_12_crop_town.png`, `shots/critic11/contact_fog_12_crop_basin.png`); the bushes
are not fogged at all — lime dots punch through the grey hill (`shots/critic11/fog_phone_crop_hill.png`);
the night-fog windows go white instead of amber (`shots/critic11/contact_fog_22_crop_town.png`); the sky
into the sun is a flat tan-to-grey gradient with a small white disc, no cobalt zenith, no rose belt, no
clouds (`shots/critic11/sun_check_crop_sky.png`); aerial perspective on far water at 300 m is still a
hint (`shots/critic11/zoom300_crop_top.png`, `shots/critic11/landscape.png`). To reach 8.5: fog density
by camera distance with three bluer, flatter depth layers (R4) and fogged instances; a painted sky with
clouds; a real blue-grey shift on far water.

### 4. Water — 6.5

What moved: the lower 60 m beach has a soft cream foam lace with a wet band and a turquoise shoal
(`shots/critic11/zoom60_beach_crop_foam.png`, `shots/critic11/zoom60_beach_crop_wetband.png`); the night
basin is navy with lantern streaks (`shots/critic11/night_phone_crop_basin.png`); the 300 m shallow ring
is soft (`shots/critic11/zoom300_crop_halo.png`); the painted chop is a consistent diagonal brush
(`shots/critic11/hero_phone_crop_bottom.png`). What fails, and regressed: the shoreline is a stair-stepped
sawtooth following the 2 m grid with a pale ledge and a dark seam under each tooth on the upper 60 m
beach (`shots/critic11/zoom60_beach_crop_shore.png`, `shots/critic11/zoom60_beach_crop_shadows.png`) and
now also on the 120 m shoreline above the brig, where round 10 had blended lace
(`shots/critic11/zoom120_brig_crop_shoreline_top.png`, `shots/critic11/zoom120_brig_crop_palm.png`); the
hard straight dark band from the brig to the lighthouse cuts the basin in two
(`shots/critic11/zoom120_brig_crop_water.png`, `shots/critic11/hero_phone_crop_shadow.png`); the night
moon path is a wide grey marbled sheet with black holes, not a glitter path
(`shots/critic11/night_phone_crop_basin.png`); the noon glitter is a white-out blanket of clumps over the
whole basin (`shots/critic11/contact_clear_12_crop_basin.png`); the shallow arc still ends in an abrupt
inner edge and a milky patch at right (`shots/critic11/hero_phone_crop_bottom.png`,
`shots/critic11/contact_fog_175_crop_near_water.png`); the wet band is salmon-pink instead of dark wet sand
(`shots/critic11/zoom60_beach_crop_foam.png`); a grey translucent foam smear hangs beside the hull
(`shots/critic11/zoom120_brig_crop_water.png`); the foreground water at night is pure black
(`shots/critic11/night_phone_crop_bottom.png`). To reach 8.5: a shore alpha that never shows the grid at any
zoom; one consistent shadow on water; a narrow moon path; capped noon glitter; an arc faded both ways.

### 5. Scale and motion — 7.0

What moved: the barrels are on the dock deck and the crates are rotated about their own centres
(`shots/critic11/hero_phone_crop_quay_left.png`, `shots/critic11/hero_phone_crop_dock_shadow.png`); the
brig's 1.7× scale still agrees with the dock, lighthouse and town (`shots/critic11/hero_phone_crop_brig.png`,
`shots/critic11/landscape_crop_island.png`); gulls are present as white specks
(`shots/critic11/zoom300_crop_halo.png`, `shots/critic11/fog_phone.png`); the pennants stream to leeward
and the topsails hang loose (`shots/critic11/zoom120_brig_crop_sail.png`). What fails: a palm frond still
shows through the mainsail (`shots/critic11/zoom120_brig_crop_sail.png`,
`shots/critic11/zoom120_brig_crop_deck.png`); the dinghy at the quay still has a glass hull with the water
showing through (`shots/critic11/hero_phone_crop_quay_left.png`); the black cargo cube is still on the
quay (`shots/critic11/hero_phone_crop_quay_right.png`); chimney smoke is now so thin it is invisible — only
pale bloom specks drift over the roofs (`shots/critic11/hero_phone_crop_smoke.png`,
`shots/critic11/zoom60_town_crop_smoke.png`); the jib is a detached triangle in every frame
(`shots/critic11/fog_phone_crop_brig.png`); motion is unverifiable from stills. To reach 8.5: an opaque
sail; planked dinghies; a textured crate; a visible plume with drift; a motion capture.

### 6. Composition and squint test — 7.5

The hero still reads as a painting at thumbnail: warm walls in the upper third, the brig on the lower-left
third line, the lighthouse on the right (`shots/critic11/hero_phone.png`); the 300 m tile now reads as
an island of scrub, dune and rock with the town as the warm accent (`shots/critic11/zoom300.png`,
`shots/critic11/landscape.png`); the night is a proper R2 read at thumbnail
(`shots/critic11/night_phone.png`). What fails: the dark band from the brig drags the eye to the
lighthouse instead of up the shallows to the quay (`shots/critic11/hero_phone.png`); the milky shallow arc
across the bottom third reads as a smear on the picture (`shots/critic11/hero_phone_crop_bottom.png`); the
fog cell is a flat grey wash with no depth to read (`shots/critic11/fog_phone.png`); the sun_check frame is
a blown horizon over a black foreground (`shots/critic11/sun_check.png`). To reach 8.5: remove the band,
fade the arc, layer the fog.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen frames; one warning per frame (`KHR_parallel_shader_compile` not
supported — environment). Draw calls 109–156 (limit 300); triangles 1,370,871–1,395,017 at high, 988,969 at
medium (limit 1.5 M — high quality sits at 93% of the limit with no headroom for the fixes above); texture
memory 41.3 MB (limit 256). Device fps not measured. Evidence: `shots/critic11/*.json`, summarised in the
budget section below.

### 8. Programmer-art checklist — 5.0 (automatic fail)

Two firm hits (hard water-to-beach line as a grid sawtooth at 60 m and 120 m; flat untextured parapet slabs
and the black crate), three marginal (visible tiling on quay, roof and sand; fog as one colour with unfogged
instances; noon glitter as white patches). Item-by-item below.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | **hit (firm)** | balcony parapets and sills are flat untextured grey slabs, one window a black void — `shots/critic11/zoom60_town_crop_balconies.png`; black cargo cube on the quay — `shots/critic11/hero_phone_crop_quay_right.png`. Painted flat colour with shading (walls, hull, sails, bushes) is not counted. |
| Default Three.js materials | clear | nothing reads as MeshStandard grey — `shots/critic11/zoom60_town.png`, `shots/critic11/zoom120_brig_crop_deck.png` |
| Visible tiling or stretched UVs | **hit (marginal)** | quay a rigid diamond grid of identical stones — `shots/critic11/zoom60_town_crop_quay.png`; roof one module in a strict grid — `shots/critic11/zoom60_town_crop_roof.png`; sand a repeating weave — `shots/critic11/zoom60_beach_crop_sand.png` |
| Shadow acne or missing shadows | clear (but see light) | shadows present everywhere; the direction contradiction is scored under Light — `shots/critic11/hero_phone_crop_shadow.png` |
| Grey nights | clear | basin navy-black, lanterns warm, alleys dark — `shots/critic11/night_phone_crop_town.png`, `shots/critic11/night_phone_crop_basin.png` (the grey marbled moon path is a water issue, not a grey floor) |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | noon basin a white-out of glitter clumps — `shots/critic11/contact_clear_12_crop_basin.png`; foreground water at night a flat black plane — `shots/critic11/night_phone_crop_bottom.png` |
| Hard water-to-beach line | **hit (firm)** | stair-stepped sawtooth with pale ledge and dark seam on the upper 60 m beach — `shots/critic11/zoom60_beach_crop_shore.png`; the same sawtooth on the 120 m shoreline — `shots/critic11/zoom120_brig_crop_shoreline_top.png` |
| Vegetation that does not move / identical rotation | clear (unverifiable) | palm crowns differ in rotation and lean — `shots/critic11/zoom60_beach_crop_palm_shadow.png`; motion not verifiable from stills |
| Fog as one colour | **hit (marginal)** | fog a single grey-blue veil with no depth layers, bushes unfogged — `shots/critic11/fog_phone_crop_hill.png`, `shots/critic11/fog_phone_crop_near_water.png`; noon fog an opaque sheet — `shots/critic11/contact_fog_12_crop_town.png` |
| Sky without a sun | clear | sun disc present — `shots/critic11/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | clear (bushes) / **hit (marginal, crate)** | bushes are lobed volumes now — `shots/critic11/hero_phone_crop_tower.png`; the black cube on the quay remains — `shots/critic11/hero_phone_crop_quay_right.png`; no labels in any frame |
| Recognisable low-poly asset kit | clear | all procedural — `shots/critic11/zoom60_town.png` |

## Ranked issues (most damaging first)

1. **Shoreline is a stair-stepped sawtooth with a pale ledge and dark seam on the upper 60 m beach and, new this round, on the 120 m shoreline above the brig.** `shots/critic11/zoom60_beach_crop_shore.png`, `shots/critic11/zoom120_brig_crop_shoreline_top.png`, `shots/critic11/zoom120_brig_crop_palm.png`. Fix: the sliver discard exposes the grid; the visible shore edge must come from a smooth distance-to-shore field with noise, never from terrain vertices.
2. **Three shadow directions in one frame: tower up-left, dock down-left, brig band down-right to the lighthouse.** `shots/critic11/hero_phone_crop_tower.png`, `shots/critic11/hero_phone_crop_dock_shadow.png`, `shots/critic11/hero_phone_crop_shadow.png`, `shots/critic11/zoom120_brig_crop_water.png`. Fix: one sun for land and water; remove the projected band; shadows on water from the same shadow map as land.
3. **Fog is still a single veil: two bands, no depth layers, near chop dull, noon fog an opaque sheet, bushes unfogged, sun shadows at full strength.** `shots/critic11/fog_phone_crop_near_water.png`, `shots/critic11/fog_phone_crop_hill.png`, `shots/critic11/contact_fog_12_crop_town.png`, `shots/critic11/fog_phone_crop_town.png`. Fix: density by camera distance; three bluer flatter layers; fog on instanced bushes; sun at 35%.
4. **Night moon path a broad grey marbled sheet with black holes; jib glows; no beam; hill black with lime bushes.** `shots/critic11/night_phone_crop_basin.png`, `shots/critic11/night_phone_crop_brig.png`, `shots/critic11/night_phone_crop_mole.png`, `shots/critic11/night_phone_crop_hill.png`. Fix: a narrow glitter path along the moon direction; unlit jib; beam cone; faint moon fill and darkened bushes.
5. **Balcony parapets and sills are flat untextured grey slabs; a window is a black void; no eaves; the black crate is still on the quay.** `shots/critic11/zoom60_town_crop_balconies.png`, `shots/critic11/hero_phone_crop_quay_right.png`. Fix: plastered parapet with rails of thickness; close the void; eave overhang; textured crate.
6. **Quay paving is a rigid diamond grid of identical stones.** `shots/critic11/zoom60_town_crop_quay.png`. Fix: irregular painted stones with size variation, a rounded wet edge, moss in the seams not on the slabs.
7. **Noon glitter is a white-out blanket of clumps across the basin; the 17:30 horizon under the sun blows to white.** `shots/critic11/contact_clear_12_crop_basin.png`, `shots/critic11/sun_check_crop_glitter.png`. Fix: cap clump size and coverage; tone-map the sun path.
8. **Frond through the mainsail; fronds flat blades; dead frond a translucent tan blade.** `shots/critic11/zoom120_brig_crop_sail.png`, `shots/critic11/zoom60_beach_crop_palm.png`. Fix: opaque sail; pinnate leaflets on a rachis.
9. **Roof one tile module in a strict grid at 60 m.** `shots/critic11/zoom60_town_crop_roof.png`, `shots/critic11/zoom60_town_crop_smoke.png`. Fix: row breaks, replacements, ridge cap.
10. **Sand is a fabric weave with a salmon cast; wet band pink; no debris.** `shots/critic11/zoom60_beach_crop_sand.png`, `shots/critic11/zoom60_beach_crop_foam.png`. Fix: remove the weave; darker wet sand; seaweed line and shells.
11. **Shallow arc still ends in an abrupt inner edge with a milky patch.** `shots/critic11/hero_phone_crop_bottom.png`, `shots/critic11/contact_fog_175_crop_near_water.png`. Fix: fade both edges along a bar shape.
12. **Chimney smoke has vanished — only bloom specks over the roofs.** `shots/critic11/hero_phone_crop_smoke.png`, `shots/critic11/zoom60_town_crop_smoke.png`. Fix: a visible rising plume with drift.
13. **Sky into the sun a flat tan gradient — no cobalt zenith, rose belt or clouds.** `shots/critic11/sun_check_crop_sky.png`. Fix: painted sky with clouds.
14. **Dinghy hull glass at the quay; interior plateau rock reads as grey tarmac; bushes a uniform sprinkle with hard shadow blobs.** `shots/critic11/hero_phone_crop_quay_left.png`, `shots/critic11/zoom300_crop_top.png`, `shots/critic11/hero_phone_crop_tower.png`. Fix: planked dinghy; painted rock; clustered bushes with soft contact shadow.
15. **Aerial perspective on far water at 300 m still a hint; night-fog windows go white.** `shots/critic11/zoom300_crop_top.png`, `shots/critic11/contact_fog_22_crop_town.png`. Fix: blue-grey distance shift; keep emissives warm in fog.

## Round 10 issues — status

| # | Round 10 issue | Status | Evidence |
|---|---|---|---|
| 1 | Upper 60 m beach sawtooth | **unchanged (regressed)** — still a grid sawtooth at 60 m, and now also at 120 m where round 10 had lace | `shots/critic11/zoom60_beach_crop_shore.png`, `shots/critic11/zoom120_brig_crop_shoreline_top.png` |
| 2 | Lamp black box; slab parapets; no eaves | **improved** — lamp is a verdigris-capped lantern; parapets still flat grey slabs; no eaves | `shots/critic11/zoom60_town_crop_lamp.png`, `shots/critic11/zoom60_town_crop_balconies.png` |
| 3 | Night basin grey; lighthouse floods; jib glows; no moon rim; hill black | **improved** — basin navy with lantern streaks; moon path a wide grey marbled sheet; jib still glows; no beam; no rim; hill black | `shots/critic11/night_phone_crop_basin.png`, `shots/critic11/night_phone_crop_brig.png`, `shots/critic11/night_phone_crop_mole.png` |
| 4 | Fog two bands; noon fog opaque; full shadows | **unchanged** — plus unfogged bushes | `shots/critic11/fog_phone_crop_near_water.png`, `shots/critic11/contact_fog_12_crop_town.png`, `shots/critic11/fog_phone_crop_hill.png` |
| 5 | Milky haze in every 60 m frame | **fixed** | `shots/critic11/zoom60_town_crop_far.png`, `shots/critic11/zoom60_beach_crop_foam.png` |
| 6 | Sphere bushes; hill an olive wash with salmon smear | **improved** — lobed two-tone bushes; hill painted as masses; salmon smear remains; hard shadow blobs | `shots/critic11/hero_phone_crop_tower.png`, `shots/critic11/zoom300_crop_island.png` |
| 7 | Beach micro-grain moiré; no debris | **improved** — softer grain with macro colour, moiré mostly gone; still a weave, pink cast, no debris | `shots/critic11/zoom60_beach_crop_sand.png` |
| 8 | Chest and barrels on the water; wire dinghies; black cube | **improved** — barrels on the deck; dinghy still glass; cube remains | `shots/critic11/hero_phone_crop_quay_left.png`, `shots/critic11/hero_phone_crop_quay_right.png` |
| 9 | Frond through mainsail; blade fronds | **unchanged** | `shots/critic11/zoom120_brig_crop_sail.png`, `shots/critic11/zoom60_beach_crop_palm.png` |
| 10 | Quay radial grid with stitch seams | **improved (marginal)** — seams gone; now a rigid diamond grid | `shots/critic11/zoom60_town_crop_quay.png` |
| 11 | Smoke a haze patch | **unchanged** — now effectively invisible | `shots/critic11/hero_phone_crop_smoke.png` |
| 12 | Roof one module in a grid | **improved (marginal)** — lichen flecks added; grid and missing ridge cap remain | `shots/critic11/zoom60_town_crop_roof.png` |
| 13 | Sky no zenith, belt or clouds | **unchanged** | `shots/critic11/sun_check_crop_sky.png` |
| 14 | Shallow arc abrupt inner edge; noon glitter clumps | **unchanged** | `shots/critic11/hero_phone_crop_bottom.png`, `shots/critic11/contact_clear_12_crop_basin.png` |
| 15 | Aerial perspective at 300 m a hint | **unchanged** | `shots/critic11/zoom300_crop_top.png` |

## Budget lines (from `shots/critic11/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | exposure |
|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,395,017 | 41.3 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,395,017 | 41.3 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 988,969 | 41.3 | 0.080 / 0.252 / 6.183 / 0.105 / 0.303 / 16.04 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,370,871 | 41.3 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,394,607 | 41.3 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,377,083 | 41.3 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,395,017 | 41.3 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,395,017 | 41.3 | 0.303 |
| landscape (1×) | 0 | 1 | 156 | 1,395,017 | 41.3 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,395,017 | 41.3 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 93% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** irregular quay stones; a roof with breaks and a ridge cap; parapets with rails on plaster; sand without a weave; leaflets; clustered bushes with soft shadows; rock that is not tarmac.
- **Light (6.5):** one shadow direction on land and water; a narrow moon path, a beam, an unlit jib and a moon rim; sun stopped down in fog; warm bounce in shade; a horizon that does not blow out.
- **Atmosphere (6.0):** fog by camera distance with layers and fogged instances; a noon fog that is not a sheet; a painted sky; a real aerial shift on far water.
- **Water (6.5):** a shore edge that never shows the grid at any zoom; no projected band; a moon path; capped noon glitter; an arc faded both ways; dark wet sand.
- **Scale and motion (7.0):** an opaque sail; a planked dinghy; a textured crate; a visible plume; a motion capture.
- **Composition (7.5):** remove the band; fade the arc; fog with depth.
- **Programmer art (5.0):** clear the two firm hits (grid sawtooth at 60 m and 120 m; slab parapets and the crate) and the marginals (quay/roof/sand tiling; single-colour fog with unfogged bushes; noon white-out).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (5.0, two firm hits and three marginal), then atmosphere
(6.0); light and water sit at 6.5, scale at 7.0, materials at 7.0, composition at 7.5; only budget and
errors (8.5) clears the bar. This round did real work on the right things: the lamp is a lantern, the
bushes are lobed volumes, the hill is painted as masses, the near-field haze is gone from the 60 m frames,
the barrels are on the dock, and the night is finally navy with warm lantern pools — the night thumbnail is
the first frame in eleven rounds that could sit beside R2 without embarrassment. But the shoreline
regressed: the sliver discard in parts 7 and 8 put the 2 m grid sawtooth back on the 120 m shoreline as
well as the 60 m beach, so the single most-cited issue of rounds 9 and 10 is worse, not better. The fog was
not touched for a third round, and the frame now also shows three shadow directions at once — a tower
throwing up-left, a dock throwing down-left and a brig throwing a hard band down-right to the lighthouse —
which is the kind of error a Sea of Conquest player would notice before anything else. Scores moved from
7.0/6.5/5.5/7.0/6.5/7.5/8.5/5.0 in round 10 to 7.0/6.5/6.0/6.5/7.0/7.5/8.5/5.0: atmosphere and scale up
half a point each on the haze and the barrels, water down half a point on the shoreline regression.
Against Sea of Conquest the hero, the night thumbnail and the 300 m tile are a competent indie take on the
same picture; the 60 m props, the fog cells and the shoreline are still not in the conversation. The next
pass must be, in order: the shore edge from a smooth field at every zoom; one shadow direction; fog by
camera distance with layers; a narrow moon path and beam; then the parapets, quay stones and crate.
