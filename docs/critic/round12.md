# Critic round 12 — Ocean look test, sixth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` from HEAD `939734b` ("Round 12 builder
pass (part 6): opaque first hand-span of water so discarded shore slivers never show the clear colour"; the
six "Round 12 builder pass (part 1..6)" commits 30418cd → 939734b are all in this HEAD). All ten shots were
taken this round, in the required order, in the foreground, `--frames 4` throughout: sixteen full frames
under `shots/critic12/` plus fifty-three native-resolution crops (`*_crop_*.png`, nearest-neighbour
upscaled 2–5× where the source was 1× or the detail was small, cut with a scratch pngjs script outside the
repo). Every frame and crop cited below was opened and looked at. No round 1–11 screenshot is used as
evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only, p50 6–11 ms).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm, not a frond drawn through the cloth. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0

What moved: the balcony parapet slabs are gone — balconies are now thin iron rails throwing crisp shadows
on a terrace with a table and chairs (`shots/critic12/zoom60_town_crop_rails.png`); the black cube on the
quay is a dark hand cart with a bronze rim (`shots/critic12/hero_phone_crop_crate.png`); the dinghies show
floorboards and thwarts instead of glass hulls (`shots/critic12/hero_phone_crop_quay_right.png`,
`shots/critic12/hero_phone_crop_dock.png`); roofs vary per house in tint and tile offset
(`shots/critic12/hero_phone_crop_town.png`); the walls, drawn cracks, recessed shuttered windows and
chimneys still hold at 60 m (`shots/critic12/zoom60_town_crop_walls.png`,
`shots/critic12/zoom60_town_crop_window.png`); the brig's deck, grates and rail remain the best material set
in the scene (`shots/critic12/zoom120_brig_crop_deck.png`). What still fails the stylised bar: the quay
paving is a rotated but still rigid grid of identical rectangular slabs with dark seams
(`shots/critic12/zoom60_town_crop_quay.png`, `shots/critic12/zoom60_town_crop_lamp.png`); the roof is one
tile module in a strict grid with pale flecks, no ridge cap and a visible seam where two houses' offsets
meet (`shots/critic12/zoom60_town_crop_roof.png`); the quay slab grid ghosts through the grass strip in
front of the houses as a faint diamond mesh (`shots/critic12/zoom60_town_crop_mesh.png`,
`shots/critic12/zoom60_town_crop_ground.png`); the sand is still a diagonal fabric weave with a salmon cast
and no debris (`shots/critic12/zoom60_beach_crop_sand.png`); the fronds are flat lime blades in a
starburst with a translucent tan dead blade and a wicker-basket trunk
(`shots/critic12/zoom60_beach_crop_palm.png`, `shots/critic12/zoom60_beach_crop_wetband.png`); the
bushes are lime lobes with hard black shadow blobs on a hill that still carries the beige cloud smear
(`shots/critic12/hero_phone_crop_hill.png`); the interior plateau's rock reads as grey tarmac patches
(`shots/critic12/zoom300_crop_top.png`, `shots/critic12/landscape_crop_far.png`). To reach 8.5: irregular
painted quay stones with size variation and a rounded wet edge; a roof with row breaks, replacements and a
ridge cap; a grass strip that does not show the paving through it; sand without a weave; pinnate leaflets;
clustered bushes with a soft contact shadow; painted rock.

### 2. Light — 7.0

What moved: **shadow directions now agree** — the tower's shadow falls up-left
(`shots/critic12/hero_phone_crop_hill.png`), the dock's shadow now lies up-left of the pier
(`shots/critic12/hero_phone_crop_dock.png`), the building and lamp-post shadows at 60 m all run up-left
(`shots/critic12/zoom60_town.png`, `shots/critic12/zoom60_town_crop_lamp.png`), and the long band across the
basin is the lighthouse's own shadow thrown up-left from the mole to the brig, the same direction as
everything else (`shots/critic12/hero_phone_crop_shadow.png`, `shots/critic12/zoom120_brig_crop_water.png`);
the palm shadow on the mainsail reads as a soft cast shadow, not a frond in the cloth
(`shots/critic12/zoom120_brig_crop_sail.png`); the 17:30 horizon under the sun keeps tone instead of
blowing to white across the whole far sea (`shots/critic12/sun_check_crop_glitter.png`); the night town is
warm windows and lantern pools on the paving (`shots/critic12/night_phone_crop_town.png`). What fails: the
lighthouse shadow is a hard-edged band along its whole 90 m length — a shadow that long must soften with
distance and it does not, so it still reads as a stripe painted across the basin
(`shots/critic12/hero_phone_crop_shadow.png`, `shots/critic12/zoom120_brig_crop_water.png`); the night moon
path is still a marbled grey sheet with black holes rather than a narrow glitter path, and the whole lower
half of the night frame is pure black with no moon on the water or the hull
(`shots/critic12/night_phone_crop_basin.png`, `shots/critic12/night_phone_crop_bottom.png`); the jib glows
amber at night far from any lantern (`shots/critic12/night_phone_crop_brig.png`); the lighthouse floods a
halo with no beam (`shots/critic12/night_phone_crop_mole.png`); the fog cells keep full-strength sun shadows
under the dock and the brig (`shots/critic12/fog_phone_crop_town.png`,
`shots/critic12/contact_fog_12_crop_town.png`); shaded walls remain a flat cool grey without warm bounce
(`shots/critic12/zoom60_town_crop_walls.png`); into the sun the hill is near black with self-lit lime bushes
(`shots/critic12/sun_check_crop_bottom.png`). To reach 8.5: a penumbra that widens along the lighthouse
shadow; a narrow moon path and a faint moon fill on hull and water; an unlit jib; a beam; sun at 35% in fog;
warm bounce in shade.

### 3. Atmosphere — 6.5

What moved: clear-weather aerial haze is now visible — the far water at 300 m lifts to a blue-grey and the
island's far rim greys off (`shots/critic12/zoom300_crop_top.png`, `shots/critic12/landscape_crop_far.png`);
the 60 m frames stay crisp to the far roofs (`shots/critic12/zoom60_town.png`). What fails, unchanged for a
fourth round: fog is still a single grey-blue veil laid over the clear-weather scene — no depth layers, the
near chop as dull as the far, the shallow arc and the clear blue foreground showing through it
(`shots/critic12/fog_phone.png`, `shots/critic12/fog_phone_crop_near_water.png`,
`shots/critic12/contact_fog_175_crop_near_water.png`); the noon fog cell is an opaque grey sheet with lime
bushes punching through unfogged (`shots/critic12/contact_fog_12_crop_town.png`,
`shots/critic12/fog_phone_crop_hill.png`); the night-fog windows go white instead of amber
(`shots/critic12/contact_fog_22_crop_town.png`); the sky into the sun is a flat tan-to-grey gradient with a
small white disc, no cobalt zenith, no rose belt, no clouds (`shots/critic12/sun_check_crop_sky.png`). To
reach 8.5: fog density by camera distance with three bluer, flatter depth layers (R4) and fogged instances;
a noon fog that is not a sheet; emissives kept warm in fog; a painted sky with clouds.

### 4. Water — 6.5

What moved: the shore slivers no longer show the clear colour — the shoreline on the 120 m frame carries an
opaque cream foam collar with a wet band (`shots/critic12/zoom120_brig_crop_shore_left.png`); the lower
60 m beach still has a soft foam lace over a turquoise shoal (`shots/critic12/zoom60_beach_crop_foam.png`);
the grey foam smear beside the hull is gone (`shots/critic12/hero_phone_crop_brig.png`); the painted chop is
a consistent diagonal brush at every zoom (`shots/critic12/hero_phone_crop_bottom.png`,
`shots/critic12/zoom300_crop_bottom.png`); the moon path is narrower than round 11
(`shots/critic12/night_phone_crop_basin.png`). What fails: **the stair-stepped sawtooth is unchanged** —
on the upper 60 m beach the shore is a zigzag of 2 m teeth with a pale ledge and a dark seam under each
(`shots/critic12/zoom60_beach_crop_shore.png`), and on the 120 m shoreline the new opaque foam collar
follows the same stepped outline, so the grid is now drawn in cream instead of in blue
(`shots/critic12/zoom120_brig_crop_shoreline_top.png`, `shots/critic12/zoom120_brig_crop_palm.png`); the
quay end in the hero frame shows the same stepped edge and a stray dark rope-like squiggle on the water
(`shots/critic12/hero_phone_crop_quay_edge.png`); the shallow arc still ends in a defined inner edge and a
khaki smear across the bottom third (`shots/critic12/hero_phone_crop_bottom.png`,
`shots/critic12/contact_fog_175_crop_near_water.png`); the noon glitter is still a white-out blanket of
clumps (`shots/critic12/contact_clear_12_crop_basin.png`); the moon path is still a marbled grey sheet, not
a glitter path, and the night foreground is pure black (`shots/critic12/night_phone_crop_basin.png`,
`shots/critic12/night_phone_crop_bottom.png`); the wet band is salmon-pink and the foam collar carries
pink and green mottles that read as coral rather than foam (`shots/critic12/zoom60_beach_crop_wetband.png`,
`shots/critic12/zoom120_brig_crop_shore_left.png`); a repeating chevron ripple pattern shows in the water
beside the mole at night (`shots/critic12/night_phone_crop_mole.png`); the quay's foam collar is an even
flat cream band with no lace (`shots/critic12/hero_phone_crop_town.png`). To reach 8.5: a shore edge from a
smooth distance field with noise that never shows the grid at any zoom; an arc faded both ways; a narrow
moon path; capped noon glitter; dark wet sand.

### 5. Scale and motion — 7.5

What moved: chimney smoke is a visible pale plume drifting off the chimney
(`shots/critic12/zoom60_town_crop_smoke.png`); the dinghies are planked (`shots/critic12/hero_phone_crop_dock.png`);
the cube is a hand cart (`shots/critic12/hero_phone_crop_crate.png`); the mark on the mainsail is now
readable as a cast shadow rather than a frond through the cloth (`shots/critic12/zoom120_brig_crop_sail.png`);
the brig's 1.7× scale still agrees with the dock, lighthouse and town
(`shots/critic12/hero_phone_crop_brig.png`, `shots/critic12/landscape_crop_island.png`); gulls are present
in every clear frame, the pennants stream to leeward and the topsails hang loose
(`shots/critic12/zoom120_brig.png`). What fails: the jib is still a detached triangle floating off the
bowsprit in every frame (`shots/critic12/hero_phone_crop_brig.png`, `shots/critic12/fog_phone_crop_brig.png`,
`shots/critic12/night_phone_crop_brig.png`); the palm shadow on the sail is crisp for a caster 40 m away
and, with no palm in the 120 m frame near enough to explain it, a player reads a stain before a shadow
(`shots/critic12/zoom120_brig_crop_sail.png`); a string of white specks still hangs along the back roofline
in the hero frame (`shots/critic12/hero_phone_crop_hill.png`); motion is unverifiable from stills. To reach
8.5: a jib bent to the forestay; a softer, fainter far-caster shadow; remove the roofline specks; a motion
capture.

### 6. Composition and squint test — 7.5

The hero still reads as a painting at thumbnail: warm walls in the upper third, the brig on the lower-left
third line, the lighthouse on the right (`shots/critic12/hero_phone.png`); the 300 m tile and the landscape
frame read as an island of scrub, dune and rock with the town as the warm accent and a real distance shift
on the far water (`shots/critic12/zoom300.png`, `shots/critic12/landscape.png`); the night is a proper R2
read at thumbnail (`shots/critic12/night_phone.png`). What fails: the lighthouse shadow band still drags the
eye from the brig to the lighthouse instead of up the shallows to the quay
(`shots/critic12/hero_phone.png`, `shots/critic12/hero_phone_crop_shadow.png`); the khaki shallow arc across
the bottom third still reads as a smear on the picture (`shots/critic12/hero_phone_crop_bottom.png`); the
fog cell is a flat grey wash with no depth to read (`shots/critic12/fog_phone.png`); the sun_check frame is
a blown path over a black foreground (`shots/critic12/sun_check.png`); the night frame's lower half is empty
black (`shots/critic12/night_phone.png`). To reach 8.5: soften the band, fade the arc, layer the fog, put
moon on the near water.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen frames; one warning per frame (`KHR_parallel_shader_compile` not
supported — environment). Draw calls 109–156 (limit 300); triangles 1,424,631–1,448,777 at high (limit
1.5 M — high quality now sits at 96.6% of the limit, up from 93%, with almost no headroom for the fixes
above), 1,046,329 at medium; texture memory 41.3 MB (limit 256). Device fps not measured. Evidence:
`shots/critic12/*.json`, summarised in the budget section below.

### 8. Programmer-art checklist — 5.5 (automatic fail)

One firm hit (hard water-to-beach line as a grid sawtooth at 60 m and 120 m, unchanged), three marginal
(visible tiling on quay, roof and sand plus the paving grid ghosting through the grass; fog as one colour
with unfogged instances; noon glitter as white patches and a black night foreground). The flat-slab and
black-cube hit of round 11 is cleared. Item-by-item below.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | parapet slabs replaced by rails on a plastered terrace — `shots/critic12/zoom60_town_crop_rails.png`; the black cube is a rimmed cart — `shots/critic12/hero_phone_crop_crate.png`. Painted flat colour with shading (walls, hull, sails, bushes) is not counted. |
| Default Three.js materials | clear | nothing reads as MeshStandard grey — `shots/critic12/zoom60_town.png`, `shots/critic12/zoom120_brig_crop_deck.png` |
| Visible tiling or stretched UVs | **hit (marginal)** | quay a rotated grid of identical slabs — `shots/critic12/zoom60_town_crop_quay.png`; roof one module in a strict grid with an offset seam — `shots/critic12/zoom60_town_crop_roof.png`; paving grid ghosting through the grass — `shots/critic12/zoom60_town_crop_mesh.png`; sand a repeating weave — `shots/critic12/zoom60_beach_crop_sand.png`; chevron ripple repeat beside the mole at night — `shots/critic12/night_phone_crop_mole.png` |
| Shadow acne or missing shadows | clear | shadows present everywhere and now in one direction — `shots/critic12/hero_phone_crop_dock.png`, `shots/critic12/zoom60_town.png` |
| Grey nights | clear | basin navy-black, lanterns warm, alleys dark — `shots/critic12/night_phone_crop_town.png` (the grey marbled moon path is a water issue, not a grey floor) |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | noon basin a white-out of glitter clumps — `shots/critic12/contact_clear_12_crop_basin.png`; night foreground a flat black plane — `shots/critic12/night_phone_crop_bottom.png`; quay foam collar an even flat cream band — `shots/critic12/hero_phone_crop_town.png` |
| Hard water-to-beach line | **hit (firm)** | stair-stepped sawtooth with pale ledge and dark seam on the upper 60 m beach — `shots/critic12/zoom60_beach_crop_shore.png`; the same sawtooth, now traced by the opaque foam collar, on the 120 m shoreline — `shots/critic12/zoom120_brig_crop_shoreline_top.png`, `shots/critic12/zoom120_brig_crop_palm.png`; stepped edge at the quay end — `shots/critic12/hero_phone_crop_quay_edge.png` |
| Vegetation that does not move / identical rotation | clear (unverifiable) | palm crowns differ in rotation and lean — `shots/critic12/zoom60_beach_crop_shadows.png`; motion not verifiable from stills |
| Fog as one colour | **hit (marginal)** | fog a single grey-blue veil with no depth layers, bushes unfogged — `shots/critic12/fog_phone_crop_hill.png`, `shots/critic12/fog_phone_crop_near_water.png`; noon fog an opaque sheet — `shots/critic12/contact_fog_12_crop_town.png` |
| Sky without a sun | clear | sun disc present — `shots/critic12/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | clear | bushes are lobed volumes — `shots/critic12/hero_phone_crop_hill.png`; the cube is gone — `shots/critic12/hero_phone_crop_crate.png`; no labels in any frame |
| Recognisable low-poly asset kit | clear | all procedural — `shots/critic12/zoom60_town.png` |

## Ranked issues (most damaging first)

1. **Shoreline is still a stair-stepped sawtooth on the upper 60 m beach and on the 120 m shoreline, where the new opaque foam collar traces the same 2 m teeth.** `shots/critic12/zoom60_beach_crop_shore.png`, `shots/critic12/zoom120_brig_crop_shoreline_top.png`, `shots/critic12/zoom120_brig_crop_palm.png`, `shots/critic12/hero_phone_crop_quay_edge.png`. Fix: the visible shore edge must come from a smooth distance-to-shore field with noise evaluated per pixel; no collar, sliver or discard that follows terrain vertices.
2. **Fog is still a single veil: no depth layers, near chop dull, clear blue and the arc showing through, noon fog an opaque sheet, bushes unfogged, sun shadows at full strength, night-fog windows white.** `shots/critic12/fog_phone_crop_near_water.png`, `shots/critic12/fog_phone_crop_hill.png`, `shots/critic12/contact_fog_12_crop_town.png`, `shots/critic12/contact_fog_22_crop_town.png`. Fix: density by camera distance; three bluer flatter layers; fog on instanced bushes; sun at 35%; keep emissives warm.
3. **The lighthouse shadow is a hard-edged 90 m band across the basin.** `shots/critic12/hero_phone_crop_shadow.png`, `shots/critic12/zoom120_brig_crop_water.png`. Fix: penumbra widening with distance from the caster (PCSS or a distance-scaled blur on the water shadow term) so the far end is a soft wash.
4. **Night moon path a marbled grey sheet with black holes; lower half of the frame pure black; jib glows; no beam; no moon rim on the hull.** `shots/critic12/night_phone_crop_basin.png`, `shots/critic12/night_phone_crop_bottom.png`, `shots/critic12/night_phone_crop_brig.png`, `shots/critic12/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon direction; faint moon fill on water and hull; unlit jib; beam cone.
5. **Quay paving a rigid grid of identical slabs, now also ghosting through the grass strip in front of the houses.** `shots/critic12/zoom60_town_crop_quay.png`, `shots/critic12/zoom60_town_crop_mesh.png`. Fix: irregular painted stones with size variation and a rounded wet edge; an opaque grass strip.
6. **Noon glitter a white-out blanket of clumps across the basin.** `shots/critic12/contact_clear_12_crop_basin.png`. Fix: cap clump size and coverage; tone-map the sun path.
7. **Shallow arc still ends in a defined inner edge with a khaki smear across the bottom third.** `shots/critic12/hero_phone_crop_bottom.png`, `shots/critic12/contact_fog_175_crop_near_water.png`. Fix: fade both edges along a bar shape.
8. **Roof one tile module in a strict grid with an offset seam between houses and no ridge cap.** `shots/critic12/zoom60_town_crop_roof.png`. Fix: row breaks, replacements, ridge cap; hide the seam under the cap.
9. **Fronds flat lime blades in a starburst; dead frond a translucent tan blade; wicker trunk.** `shots/critic12/zoom60_beach_crop_palm.png`, `shots/critic12/zoom60_beach_crop_wetband.png`. Fix: pinnate leaflets on a rachis; opaque dead frond; ringed trunk.
10. **Sand a fabric weave with a salmon cast; wet band pink; foam collar mottled pink and green; no debris.** `shots/critic12/zoom60_beach_crop_sand.png`, `shots/critic12/zoom60_beach_crop_wetband.png`, `shots/critic12/zoom120_brig_crop_shore_left.png`. Fix: remove the weave; darker wet sand; plain cream foam; seaweed line and shells.
11. **Sky into the sun a flat tan gradient — no cobalt zenith, rose belt or clouds; hill black with self-lit bushes.** `shots/critic12/sun_check_crop_sky.png`, `shots/critic12/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Jib a detached triangle in every frame.** `shots/critic12/hero_phone_crop_brig.png`, `shots/critic12/fog_phone_crop_brig.png`. Fix: bend the jib to the forestay with a visible hank line.
13. **Bushes a uniform sprinkle with hard black shadow blobs; hill beige cloud smear; plateau rock as grey tarmac.** `shots/critic12/hero_phone_crop_hill.png`, `shots/critic12/zoom300_crop_top.png`. Fix: clustered bushes with soft contact shadow; remove the smear; painted rock.
14. **Shaded walls flat cool grey with no warm bounce; some windows black voids.** `shots/critic12/zoom60_town_crop_walls.png`, `shots/critic12/zoom60_town_crop_smoke.png`. Fix: warm bounce term from lit ground; a dim interior tint in the void windows.
15. **Palm shadow on the mainsail is crisp for a 40 m caster and reads as a stain; white specks along the back roofline; chevron ripple repeat beside the mole at night.** `shots/critic12/zoom120_brig_crop_sail.png`, `shots/critic12/hero_phone_crop_hill.png`, `shots/critic12/night_phone_crop_mole.png`. Fix: soften and fade far-caster shadows; remove the specks; break the ripple repeat.

## Round 11 issues — status

| # | Round 11 issue | Status | Evidence |
|---|---|---|---|
| 1 | Shoreline sawtooth at 60 m and 120 m | **unchanged** — same sawtooth at 60 m; at 120 m the opaque foam collar now traces the teeth | `shots/critic12/zoom60_beach_crop_shore.png`, `shots/critic12/zoom120_brig_crop_shoreline_top.png` |
| 2 | Three shadow directions in one frame | **fixed** — tower, dock, buildings, lamp and lighthouse all throw up-left; the band is the lighthouse shadow in the same direction (its hard edge is a new light issue, #3) | `shots/critic12/hero_phone_crop_dock.png`, `shots/critic12/hero_phone_crop_hill.png`, `shots/critic12/hero_phone_crop_shadow.png` |
| 3 | Fog a single veil, noon sheet, unfogged bushes, full shadows | **unchanged** | `shots/critic12/fog_phone_crop_near_water.png`, `shots/critic12/fog_phone_crop_hill.png`, `shots/critic12/contact_fog_12_crop_town.png` |
| 4 | Night moon path marbled sheet; jib glows; no beam; hill black | **improved (marginal)** — path narrower but still a marbled sheet; jib still glows; no beam; foreground now pure black | `shots/critic12/night_phone_crop_basin.png`, `shots/critic12/night_phone_crop_brig.png`, `shots/critic12/night_phone_crop_mole.png`, `shots/critic12/night_phone_crop_bottom.png` |
| 5 | Slab parapets; black void window; no eaves; black crate | **improved** — parapets are rails; crate is a cart; some void windows and no eaves remain | `shots/critic12/zoom60_town_crop_rails.png`, `shots/critic12/hero_phone_crop_crate.png`, `shots/critic12/zoom60_town_crop_smoke.png` |
| 6 | Quay a rigid diamond grid | **unchanged** — rotated mapping, same identical-slab grid, now ghosting through the grass | `shots/critic12/zoom60_town_crop_quay.png`, `shots/critic12/zoom60_town_crop_mesh.png` |
| 7 | Noon glitter white-out; 17:30 horizon blows out | **improved** — horizon keeps tone; noon white-out unchanged | `shots/critic12/sun_check_crop_glitter.png`, `shots/critic12/contact_clear_12_crop_basin.png` |
| 8 | Frond through mainsail; blade fronds | **improved** — mark reads as a cast shadow; fronds still blades | `shots/critic12/zoom120_brig_crop_sail.png`, `shots/critic12/zoom60_beach_crop_palm.png` |
| 9 | Roof one module in a grid | **unchanged** — per-house tint and offset added, grid and missing ridge cap remain, offset seam visible | `shots/critic12/zoom60_town_crop_roof.png` |
| 10 | Sand a weave, wet band pink, no debris | **unchanged** | `shots/critic12/zoom60_beach_crop_sand.png`, `shots/critic12/zoom60_beach_crop_wetband.png` |
| 11 | Shallow arc abrupt inner edge | **unchanged** | `shots/critic12/hero_phone_crop_bottom.png` |
| 12 | Chimney smoke invisible | **fixed** — visible pale plume with drift | `shots/critic12/zoom60_town_crop_smoke.png` |
| 13 | Sky no zenith, belt or clouds | **unchanged** | `shots/critic12/sun_check_crop_sky.png` |
| 14 | Dinghy glass hull; plateau tarmac; bush sprinkle with hard blobs | **improved** — dinghies planked; tarmac and sprinkle remain | `shots/critic12/hero_phone_crop_dock.png`, `shots/critic12/zoom300_crop_top.png`, `shots/critic12/hero_phone_crop_hill.png` |
| 15 | Aerial perspective at 300 m a hint; night-fog windows white | **improved** — far water and far rim now shift blue-grey; night-fog windows still white | `shots/critic12/zoom300_crop_top.png`, `shots/critic12/landscape_crop_far.png`, `shots/critic12/contact_fog_22_crop_town.png` |

## Budget lines (from `shots/critic12/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | exposure |
|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,448,777 | 41.3 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,448,777 | 41.3 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,046,329 | 41.3 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.05 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,424,631 | 41.3 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,448,367 | 41.3 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,430,843 | 41.3 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,448,777 | 41.3 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,448,777 | 41.3 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,448,777 | 41.3 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,448,777 | 41.3 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.6% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** irregular quay stones; a roof with breaks and a ridge cap; an opaque grass strip; sand without a weave; leaflets; clustered bushes with soft shadows; rock that is not tarmac.
- **Light (7.0):** a penumbra on the lighthouse shadow; a narrow moon path, a beam, an unlit jib and a moon rim; sun stopped down in fog; warm bounce in shade.
- **Atmosphere (6.5):** fog by camera distance with layers and fogged instances; a noon fog that is not a sheet; warm emissives in fog; a painted sky.
- **Water (6.5):** a shore edge that never shows the grid at any zoom; an arc faded both ways; a moon path; capped noon glitter; dark wet sand and plain foam.
- **Scale and motion (7.5):** a jib on the forestay; a softer far-caster shadow; no roofline specks; a motion capture.
- **Composition (7.5):** soften the band; fade the arc; fog with depth; moon on the near water.
- **Programmer art (5.5):** clear the firm hit (grid sawtooth at 60 m and 120 m) and the marginals (quay/roof/sand tiling and the paving ghost; single-colour fog with unfogged bushes; noon white-out and black night foreground).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (5.5, one firm hit and three marginal), then atmosphere and
water at 6.5; light and materials at 7.0, scale and composition at 7.5; only budget and errors (8.5) clears
the bar. This round fixed the two things a Sea of Conquest player would have noticed first after the
shoreline: the shadows now agree — tower, dock, buildings, lamp post and lighthouse all throw up-left, and
the band across the basin is a legitimate lighthouse shadow rather than a third sun — and the smoke, dinghy
floorboards, iron balcony rails and hand cart are real improvements at 60 m; the far water finally shifts
blue-grey at 300 m and the horizon under the sun no longer blows out. But the single most-cited issue of
rounds 9, 10 and 11 is still there: the shoreline is a 2 m sawtooth on the upper 60 m beach, and on the
120 m shoreline the new opaque foam collar simply traces the same teeth in cream. The fog was not touched
for a fourth round. Scores moved from 7.0/6.5/6.0/6.5/7.0/7.5/8.5/5.0 in round 11 to
7.0/7.0/6.5/6.5/7.5/7.5/8.5/5.5: light up half a point on the shadow agreement, atmosphere up half on the
clear-weather haze, scale up half on the smoke and props, programmer art up half on the cleared slab and
cube hit; materials and water hold because the quay, roof, sand, fronds, arc and shoreline did not move.
Against Sea of Conquest the hero, the night thumbnail and the 300 m tile remain a competent indie take on
the same picture — closer than round 11 at thumbnail, no closer at 60 m. This was the sixth and final round
under the stylised direction: what is missing for a pass is, in order, a shore edge computed as a smooth
field at every zoom; fog with depth; a penumbra on the long lighthouse shadow; a narrow moon path with moon
fill and a beam; then the quay stones, the roof cap, the sand and the fronds.
