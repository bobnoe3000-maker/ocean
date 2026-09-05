# Critic round 13 — Ocean look test, seventh round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` from HEAD `eccfbc4` (`git log
--oneline -1` confirms; the eight "Round 13 builder pass (part 1..8)" commits a4d6236 → e8007bd are in
this HEAD; the tip commit "Round 14 builder pass (part 1): graded haze banded into three soft depth
layers" says "source only", so the haze layering is not in the frames judged here). All ten shots were
taken this round, in the required order, in the foreground, `--frames 4` throughout: sixteen full frames
under `shots/critic13/` plus fifty-two native-resolution crops (`*_crop_*.png`, nearest-neighbour
upscaled 2–4× where the source was 1× or the detail was small, cut with a scratch pngjs script outside the
repo). Every frame and crop cited below was opened and looked at. No round 1–12 screenshot is used as
evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only, p50 6.6–9.9 ms).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm, not a frond drawn through the cloth. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0

What moved: the roof now carries a ridge cap — a proper chevron ridge row along the top of every house —
and the tiles have row breaks and pale replacements (`shots/critic13/zoom60_town_crop_roof.png`,
`shots/critic13/zoom60_town_crop_rails.png`); the quay slabs vary in width and their seams wobble, so the
paving is a running bond rather than a stamped grid, though it is still a grid
(`shots/critic13/zoom60_town_crop_quay.png`, `shots/critic13/zoom60_town_crop_lamp.png`); the grass strip
in front of the houses is now grass with only a faint diamond ghost left at its outer edge
(`shots/critic13/zoom60_town_crop_ground.png`); the sand weave is gone
(`shots/critic13/zoom60_beach_crop_sand.png`); the walls, drawn cracks, recessed shuttered windows, sills
and chimneys hold at 60 m (`shots/critic13/zoom60_town_crop_walls.png`,
`shots/critic13/zoom60_town_crop_window.png`); the brig's deck, grates, rail and bow remain the best material
set in the scene (`shots/critic13/zoom120_brig_crop_deck.png`, `shots/critic13/zoom120_brig_crop_sail.png`).
What fails the stylised bar: the sand is now a featureless salmon-pink field with no grain, ripple or debris —
the weave was replaced by nothing (`shots/critic13/zoom60_beach_crop_sand.png`,
`shots/critic13/zoom60_beach_crop_wetband.png`); the wet band is a Voronoi honeycomb of tan cells with pale
seams, which reads as leopard print or bubble wrap rather than wet sand
(`shots/critic13/zoom60_beach_crop_wetband.png`, `shots/critic13/zoom60_beach_crop_shore.png`,
`shots/critic13/zoom120_brig_crop_shore_left.png`); the roof tile module still repeats with the same fleck
pattern every four rows (`shots/critic13/zoom60_town_crop_roof.png`); the fronds are still flat lime blades
in a starburst on a wicker trunk (`shots/critic13/zoom60_beach_crop_palm.png`); the mole's boulders read at
2× as grey wire cages rather than rock (`shots/critic13/hero_phone_crop_mole.png`,
`shots/critic13/fog_phone_crop_mole.png`); the bushes are lime lobes with hard shadow blobs on a hill that
still carries the beige cloud smear (`shots/critic13/hero_phone_crop_hill.png`); the interior plateau's
rock reads as grey tarmac patches (`shots/critic13/zoom300_crop_top.png`,
`shots/critic13/landscape_crop_far.png`); the shaded side walls are a flat khaki-grey
(`shots/critic13/zoom60_town_crop_window.png`, `shots/critic13/zoom60_town_crop_smoke.png`). To reach 8.5:
sand with painted grain, ripple lines and a wrack line; a wet band that is a darker, glossier sand, not a cell
pattern; irregular quay stones with a rounded wet edge; a roof with non-repeating breaks; pinnate leaflets;
solid painted boulders on the mole; clustered bushes with a soft contact shadow; painted rock; warm bounce in
shade.

### 2. Light — 7.5

What moved: **the lighthouse shadow now has a penumbra** — the band across the basin softens and fades as it
runs up-left from the mole, and the far end near the brig is a soft wash, not a stripe
(`shots/critic13/hero_phone.png`, `shots/critic13/hero_phone_crop_mole.png`,
`shots/critic13/zoom120_brig_crop_water.png`); the brig's mast shadows and the dock's shadow are soft and in
the same direction (`shots/critic13/hero_phone_crop_brig.png`, `shots/critic13/hero_phone_crop_dock.png`);
the jib no longer glows at night — the brig is a silhouette with one stern lantern
(`shots/critic13/night_phone_crop_brig.png`); the lighthouse's night halo is tight to the lamp room instead of
flooding the basin (`shots/critic13/night_phone_crop_mole.png`); the palm shadow on the mainsail is a soft
grey feather rather than a crisp frond (`shots/critic13/zoom120_brig_crop_sail.png`); the 17:30 horizon
under the sun keeps tone and the glitter path shows wave structure
(`shots/critic13/sun_check_crop_glitter.png`); the night town is warm windows and lantern pools on the paving
(`shots/critic13/night_phone_crop_town.png`). What fails: the night moon path is still a marbled grey sheet
with black holes across the right half of the basin, and the whole lower half of the night frame is pure
black with no moon on the water or the hull (`shots/critic13/night_phone_crop_basin.png`,
`shots/critic13/night_phone_crop_bottom.png`, `shots/critic13/night_phone.png`); there is still no beam
(`shots/critic13/night_phone_crop_mole.png`); the fog cells keep full-strength sun shadows — the dock's
shadow is a hard black bar and the brig's hull is black under fog
(`shots/critic13/fog_phone.png`, `shots/critic13/fog_phone_crop_brig.png`,
`shots/critic13/contact_fog_12_crop_town.png`); shaded walls remain a flat cool grey without warm bounce
(`shots/critic13/zoom60_town_crop_window.png`); into the sun the hill is near black with self-lit lime
bushes (`shots/critic13/sun_check_crop_bottom.png`); bushes still read faintly lime under the moon
(`shots/critic13/night_phone_crop_hill.png`). To reach 8.5: a narrow moon glitter path and a faint moon fill
on hull and near water; a beam; sun at 35% in fog; warm bounce in shade; bushes lit by the same sun as the
ground.

### 3. Atmosphere — 6.5

What moved: nothing in the fog. Clear-weather aerial haze holds — the far water at 300 m lifts to a
blue-grey and the island's far rim greys off (`shots/critic13/zoom300_crop_top.png`,
`shots/critic13/landscape_crop_far.png`); the 60 m frames stay crisp to the far roofs
(`shots/critic13/zoom60_town.png`). What fails, unchanged for a fifth round: fog is still a single grey-blue
veil laid over the clear-weather scene — the near chop at the bottom of the phone frame is as dull as the far
roofs, the shallow arc and the clear blue foreground show through it, there are no depth layers
(`shots/critic13/fog_phone.png`, `shots/critic13/fog_phone_crop_near_water.png`,
`shots/critic13/contact_fog_175_crop_near_water.png`); the hillside in fog is an opaque grey-brown sheet with
lime bushes punching through unfogged (`shots/critic13/fog_phone_crop_hill.png`,
`shots/critic13/contact_fog_12_crop_town.png`); the night-fog windows go white instead of amber
(`shots/critic13/contact_fog_22_crop_town.png`); the sky into the sun is a flat tan-to-grey gradient with a
small white disc, no cobalt zenith, no rose belt, no clouds (`shots/critic13/sun_check_crop_sky.png`). The
tip commit says a three-layer haze exists in source; it is not in the build judged. To reach 8.5: fog
density by camera distance with three bluer, flatter depth layers (R4) and fogged instances; a noon fog that
is not a sheet; emissives kept warm in fog; a painted sky with clouds.

### 4. Water — 7.0

What moved: **the shoreline sawtooth is gone at every zoom.** The upper 60 m beach is a smooth curve with
no teeth, ledge or seam (`shots/critic13/zoom60_beach_crop_shore.png`, `shots/critic13/zoom60_beach.png`);
the 120 m shoreline is a continuous curve with a foam lace on the wet line
(`shots/critic13/zoom120_brig_crop_shoreline_top.png`, `shots/critic13/zoom120_brig_crop_palm.png`); the
quay end and the beach under the town in the hero frame are smooth with a soft foam collar
(`shots/critic13/hero_phone_crop_quay_right.png`, `shots/critic13/hero_phone_crop_shore_left.png`); the
painted chop is a consistent diagonal brush at every zoom and the deep-to-turquoise banding reads
(`shots/critic13/hero_phone_crop_bottom.png`, `shots/critic13/zoom300_crop_bottom.png`); the chevron ripple
repeat beside the mole at night is not visible this round (`shots/critic13/night_phone_crop_mole.png`).
What fails: the shallow arc across the bottom third of the hero is **more** prominent than in round 12 — a
broad khaki-to-cream ring with a defined inner edge that reads as a halo painted on the picture
(`shots/critic13/hero_phone_crop_arc.png`, `shots/critic13/hero_phone.png`,
`shots/critic13/contact_fog_175_crop_near_water.png`); at 60 m the foam collar is a lilac-grey scratched
sheet six to eight metres wide with a fairly hard inner edge to the turquoise, and the wet band beside it is
a Voronoi honeycomb (`shots/critic13/zoom60_beach_crop_foam.png`, `shots/critic13/zoom60_beach_crop_wetband.png`,
`shots/critic13/zoom60_beach_crop_shore.png`); the foam collar still carries pink and green mottles at 120 m
(`shots/critic13/zoom120_brig_crop_shore_left.png`); at 300 m the ring around the harbour mouth is chalky
lavender-white rather than a turquoise shoal (`shots/critic13/landscape_crop_island.png`,
`shots/critic13/zoom300_crop_island.png`); the noon glitter is still a white-out blanket of clumps with a
pure-white blob on the left beach (`shots/critic13/contact_clear_12_crop_basin.png`); the moon path is a
marbled grey sheet and the night foreground is pure black (`shots/critic13/night_phone_crop_basin.png`,
`shots/critic13/night_phone_crop_bottom.png`); the quay's foam collar is an even flat cream band
(`shots/critic13/hero_phone_crop_quay_right.png`). To reach 8.5: an arc faded both ways along a bar shape;
a narrow foam lace with a soft inner fade and dark wet sand behind it; turquoise, not lavender, shallows at
300 m; capped noon glitter; a narrow moon path.

### 5. Scale and motion — 7.5

What moved: the palm shadow on the mainsail reads as a soft cast shadow rather than a stain, though with no
palm in the 120 m frame near enough to explain it a player will still pause on it
(`shots/critic13/zoom120_brig_crop_sail.png`); chimney smoke is a visible pale plume
(`shots/critic13/zoom60_town_crop_smoke.png`); the brig's 1.7× scale still agrees with the dock, lighthouse
and town (`shots/critic13/hero_phone_crop_brig.png`, `shots/critic13/landscape_crop_island.png`); gulls
are present in every clear frame, the pennants stream to leeward and the topsails hang loose
(`shots/critic13/zoom120_brig.png`); the dinghies are planked (`shots/critic13/hero_phone_crop_dock.png`).
What fails: the jib is still a detached triangle floating off the bowsprit in every frame
(`shots/critic13/hero_phone_crop_brig.png`, `shots/critic13/fog_phone_crop_brig.png`,
`shots/critic13/zoom120_brig.png`); the timber dock at 120 m reads as a heavy pile of dark brown blocks
rather than a plank deck on piles (`shots/critic13/hero_phone_crop_dock.png`); a string of white specks
still hangs along the roofline left of the tower (`shots/critic13/hero_phone_crop_hill.png`); motion is
unverifiable from stills. To reach 8.5: a jib bent to the forestay; a lighter dock with visible piles and
plank lines; remove the roofline specks; a motion capture.

### 6. Composition and squint test — 7.5

The hero still reads as a painting at thumbnail: warm walls in the upper third, the brig on the lower-left
third line, the lighthouse on the right, and now the lighthouse's softened shadow no longer drags the eye
away from the brig (`shots/critic13/hero_phone.png`); the 300 m tile and the landscape frame read as an
island of scrub, dune and rock with the town as the warm accent and a real distance shift on the far water
(`shots/critic13/zoom300.png`, `shots/critic13/landscape.png`); the night is a proper R2 read at thumbnail
(`shots/critic13/night_phone.png`). What fails: the khaki shallow ring across the bottom third is now the
largest single shape in the hero and reads as a halo on the picture (`shots/critic13/hero_phone.png`,
`shots/critic13/hero_phone_crop_arc.png`); the 60 m beach frame is a low-contrast wash of salmon, lilac and
turquoise with nothing for the eye to rest on (`shots/critic13/zoom60_beach.png`); the fog cell is a flat
grey wash with no depth to read (`shots/critic13/fog_phone.png`); the sun_check frame is a golden path
over a black foreground (`shots/critic13/sun_check.png`); the night frame's lower half is empty black
(`shots/critic13/night_phone.png`). To reach 8.5: fade the arc, put grain and a wrack line on the beach,
layer the fog, put moon on the near water.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen frames; one warning per frame (`KHR_parallel_shader_compile` not
supported — environment). Draw calls 109–156 (limit 300); triangles 1,406,647–1,430,793 at high (limit
1.5 M — 95.4% of the limit, down from 96.6% in round 12), 1,028,345 at medium; texture memory 41.3 MB
(limit 256). Device fps not measured. Evidence: `shots/critic13/*.json`, summarised in the budget section
below.

### 8. Programmer-art checklist — 6.5 (automatic fail)

The firm hit of rounds 9–12 (hard water-to-beach line as a grid sawtooth) is **cleared**. Three marginal
hits remain: visible tiling (quay grid, roof module repeat, the new Voronoi cell pattern on the wet band);
fog as one colour with unfogged instances; the noon glitter white-out and the black night foreground.
Item-by-item below.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | plastered walls with cracks, sills and shutters — `shots/critic13/zoom60_town_crop_walls.png`; iron rails and a table on the terrace — `shots/critic13/zoom60_town_crop_rails.png`. Painted flat colour with shading (walls, hull, sails, bushes) is not counted; the featureless salmon sand at 60 m (`shots/critic13/zoom60_beach_crop_sand.png`) is a painted surface with a soft gradient and is scored under materials, not here. |
| Default Three.js materials | clear | nothing reads as MeshStandard grey — `shots/critic13/zoom60_town.png`, `shots/critic13/zoom120_brig_crop_deck.png` |
| Visible tiling or stretched UVs | **hit (marginal)** | quay a running-bond grid of slabs — `shots/critic13/zoom60_town_crop_quay.png`; roof fleck pattern repeats every four rows — `shots/critic13/zoom60_town_crop_roof.png`; Voronoi cell pattern on the wet band — `shots/critic13/zoom60_beach_crop_wetband.png`; faint paving ghost at the grass edge — `shots/critic13/zoom60_town_crop_ground.png` |
| Shadow acne or missing shadows | clear | shadows present everywhere in one direction with a penumbra on the long ones — `shots/critic13/hero_phone_crop_dock.png`, `shots/critic13/zoom120_brig_crop_water.png` |
| Grey nights | clear | basin navy-black, lanterns warm, alleys dark — `shots/critic13/night_phone_crop_town.png` (the grey marbled moon path is a water issue, not a grey floor) |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | noon basin a white-out of glitter clumps — `shots/critic13/contact_clear_12_crop_basin.png`; night foreground a flat black plane — `shots/critic13/night_phone_crop_bottom.png`; quay foam collar an even flat cream band — `shots/critic13/hero_phone_crop_quay_right.png` |
| Hard water-to-beach line | **clear** | smooth curved shore at 60 m — `shots/critic13/zoom60_beach_crop_shore.png`; at 120 m — `shots/critic13/zoom120_brig_crop_shoreline_top.png`; at the quay end — `shots/critic13/hero_phone_crop_quay_right.png`; the foam lace has a soft outer edge and the wet band grades into the sand |
| Vegetation that does not move / identical rotation | clear (unverifiable) | palm crowns differ in rotation and lean — `shots/critic13/zoom60_beach_crop_palm.png`; motion not verifiable from stills |
| Fog as one colour | **hit (marginal)** | fog a single grey-blue veil with no depth layers, bushes unfogged — `shots/critic13/fog_phone_crop_hill.png`, `shots/critic13/fog_phone_crop_near_water.png`; noon fog an opaque sheet — `shots/critic13/contact_fog_12_crop_town.png` |
| Sky without a sun | clear | sun disc present — `shots/critic13/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | clear | bushes are lobed volumes — `shots/critic13/hero_phone_crop_hill.png`; the mole boulders are irregular clumps, though they read as wire cages — `shots/critic13/hero_phone_crop_mole.png`; no labels in any frame |
| Recognisable low-poly asset kit | clear | all procedural — `shots/critic13/zoom60_town.png` |

## Ranked issues (most damaging first)

1. **Fog is still a single veil: no depth layers, near chop as dull as the far roofs, the arc and the clear blue showing through, noon fog an opaque sheet, bushes unfogged, sun shadows at full strength, night-fog windows white.** `shots/critic13/fog_phone.png`, `shots/critic13/fog_phone_crop_near_water.png`, `shots/critic13/fog_phone_crop_hill.png`, `shots/critic13/fog_phone_crop_brig.png`, `shots/critic13/contact_fog_12_crop_town.png`, `shots/critic13/contact_fog_22_crop_town.png`. Fix: ship the three-layer haze that the tip commit says exists in source; density by camera distance; fog on instanced bushes; sun at 35%; keep emissives warm.
2. **The shallow arc across the bottom third of the hero is a bigger, brighter khaki ring than last round, with a defined inner edge.** `shots/critic13/hero_phone_crop_arc.png`, `shots/critic13/hero_phone.png`, `shots/critic13/contact_fog_175_crop_near_water.png`, `shots/critic13/landscape_crop_island.png`. Fix: fade both edges of the bar along its shape, drop its brightness, and keep it turquoise rather than khaki or lavender.
3. **The 60 m beach: sand is a featureless salmon field, the wet band is a Voronoi honeycomb, and the foam collar is a wide lilac-grey sheet.** `shots/critic13/zoom60_beach_crop_sand.png`, `shots/critic13/zoom60_beach_crop_wetband.png`, `shots/critic13/zoom60_beach_crop_foam.png`, `shots/critic13/zoom60_beach.png`. Fix: painted sand grain with ripple lines and a wrack line; wet band as darker glossier sand; a narrow cream lace with a soft inner fade.
4. **Night: moon path a marbled grey sheet with black holes; lower half of the frame pure black; no beam; no moon on the hull.** `shots/critic13/night_phone_crop_basin.png`, `shots/critic13/night_phone_crop_bottom.png`, `shots/critic13/night_phone_crop_brig.png`, `shots/critic13/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon direction; faint moon fill on water and hull; a beam cone.
5. **Noon glitter a white-out blanket with a pure-white blob on the beach.** `shots/critic13/contact_clear_12_crop_basin.png`, `shots/critic13/contact_clear_12_crop_ring.png`. Fix: cap clump size and coverage; tone-map the sun path; clamp shore foam at noon exposure.
6. **Quay paving still a grid (running bond with wobble) and the roof module repeats every four rows.** `shots/critic13/zoom60_town_crop_quay.png`, `shots/critic13/zoom60_town_crop_roof.png`. Fix: irregular stone sizes with occasional half stones and a rounded wet edge; break the roof repeat with per-house fleck noise.
7. **Fronds flat lime blades in a starburst; wicker trunk.** `shots/critic13/zoom60_beach_crop_palm.png`, `shots/critic13/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a rachis; ringed trunk.
8. **Jib a detached triangle in every frame.** `shots/critic13/hero_phone_crop_brig.png`, `shots/critic13/fog_phone_crop_brig.png`. Fix: bend the jib to the forestay with a visible hank line.
9. **Sky into the sun a flat tan gradient — no cobalt zenith, rose belt or clouds; hill black with self-lit bushes.** `shots/critic13/sun_check_crop_sky.png`, `shots/critic13/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
10. **Mole boulders read as grey wire cages.** `shots/critic13/hero_phone_crop_mole.png`, `shots/critic13/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base.
11. **Bushes a uniform sprinkle with hard black shadow blobs; hill beige cloud smear; plateau rock as grey tarmac.** `shots/critic13/hero_phone_crop_hill.png`, `shots/critic13/zoom300_crop_top.png`, `shots/critic13/landscape_crop_far.png`. Fix: clustered bushes with soft contact shadow; remove the smear; painted rock.
12. **Shaded walls flat cool grey with no warm bounce; some windows black voids.** `shots/critic13/zoom60_town_crop_window.png`, `shots/critic13/zoom60_town_crop_smoke.png`. Fix: warm bounce term from lit ground; a dim interior tint in the void windows.
13. **Timber dock at 120 m reads as a heavy pile of dark blocks.** `shots/critic13/hero_phone_crop_dock.png`. Fix: lighter plank albedo with visible plank lines and piles; less self-shadow.
14. **Foam collar at 120 m still carries pink and green mottles; the quay collar is a flat cream band.** `shots/critic13/zoom120_brig_crop_shore_left.png`, `shots/critic13/hero_phone_crop_quay_right.png`. Fix: plain cream foam with lace; a broken collar against the quay wall.
15. **White specks along the roofline left of the tower; palm shadow on the sail still reads as a mark with no visible caster.** `shots/critic13/hero_phone_crop_hill.png`, `shots/critic13/zoom120_brig_crop_sail.png`. Fix: remove the specks; fade far-caster shadows on cloth.

## Round 12 issues — status

| # | Round 12 issue | Status | Evidence |
|---|---|---|---|
| 1 | Shoreline sawtooth at 60 m and 120 m and at the quay end | **fixed** — smooth curve at every zoom, no teeth, ledge or seam | `shots/critic13/zoom60_beach_crop_shore.png`, `shots/critic13/zoom120_brig_crop_shoreline_top.png`, `shots/critic13/zoom120_brig_crop_palm.png`, `shots/critic13/hero_phone_crop_quay_right.png` |
| 2 | Fog a single veil, noon sheet, unfogged bushes, full shadows, night-fog windows white | **unchanged** | `shots/critic13/fog_phone_crop_near_water.png`, `shots/critic13/fog_phone_crop_hill.png`, `shots/critic13/contact_fog_12_crop_town.png`, `shots/critic13/contact_fog_22_crop_town.png` |
| 3 | Lighthouse shadow a hard-edged 90 m band | **fixed** — penumbra widens along the band, far end a soft wash | `shots/critic13/hero_phone_crop_mole.png`, `shots/critic13/zoom120_brig_crop_water.png`, `shots/critic13/hero_phone.png` |
| 4 | Night moon path marbled; lower half black; jib glows; no beam; no moon rim on hull | **improved (marginal)** — jib no longer glows, lighthouse halo tight; path still marbled, foreground still black, no beam | `shots/critic13/night_phone_crop_brig.png`, `shots/critic13/night_phone_crop_mole.png`, `shots/critic13/night_phone_crop_basin.png`, `shots/critic13/night_phone_crop_bottom.png` |
| 5 | Quay a rigid grid of identical slabs, ghosting through the grass | **improved** — slab widths vary and seams wobble, grass strip opaque but for a faint ghost at its edge; still a grid | `shots/critic13/zoom60_town_crop_quay.png`, `shots/critic13/zoom60_town_crop_ground.png` |
| 6 | Noon glitter white-out | **unchanged** | `shots/critic13/contact_clear_12_crop_basin.png` |
| 7 | Shallow arc abrupt inner edge, khaki smear | **unchanged (worse)** — ring larger and brighter | `shots/critic13/hero_phone_crop_arc.png`, `shots/critic13/hero_phone.png` |
| 8 | Roof one module in a grid, no ridge cap, offset seam | **improved** — ridge cap and row breaks present; module fleck repeat remains | `shots/critic13/zoom60_town_crop_roof.png`, `shots/critic13/zoom60_town_crop_rails.png` |
| 9 | Fronds flat blades; wicker trunk | **unchanged** | `shots/critic13/zoom60_beach_crop_palm.png` |
| 10 | Sand a weave with a salmon cast; wet band pink; foam mottled; no debris | **improved (marginal)** — weave gone, but sand now featureless salmon, wet band a Voronoi honeycomb, mottles remain, no debris seen | `shots/critic13/zoom60_beach_crop_sand.png`, `shots/critic13/zoom60_beach_crop_wetband.png`, `shots/critic13/zoom120_brig_crop_shore_left.png` |
| 11 | Sky flat tan gradient; hill black into the sun | **unchanged** | `shots/critic13/sun_check_crop_sky.png`, `shots/critic13/sun_check_crop_bottom.png` |
| 12 | Jib a detached triangle | **unchanged** | `shots/critic13/hero_phone_crop_brig.png`, `shots/critic13/fog_phone_crop_brig.png` |
| 13 | Bush sprinkle with hard blobs; hill smear; plateau tarmac | **unchanged** | `shots/critic13/hero_phone_crop_hill.png`, `shots/critic13/zoom300_crop_top.png` |
| 14 | Shaded walls flat grey; void windows | **unchanged** | `shots/critic13/zoom60_town_crop_window.png`, `shots/critic13/zoom60_town_crop_smoke.png` |
| 15 | Sail shadow crisp; roofline specks; chevron ripple at night | **improved** — sail shadow soft; chevron repeat not seen; specks remain | `shots/critic13/zoom120_brig_crop_sail.png`, `shots/critic13/night_phone_crop_mole.png`, `shots/critic13/hero_phone_crop_hill.png` |

## Budget lines (from `shots/critic13/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | exposure |
|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,430,793 | 41.3 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,430,793 | 41.3 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,028,345 | 41.3 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.05 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,406,647 | 41.3 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,430,383 | 41.3 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,412,859 | 41.3 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,430,793 | 41.3 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,430,793 | 41.3 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,430,793 | 41.3 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,430,793 | 41.3 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 95.4% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** sand with grain and a wrack line; a wet band that is not a cell pattern; irregular quay stones; a non-repeating roof; leaflets; solid mole boulders; clustered bushes; painted rock; bounce in shade.
- **Light (7.5):** a narrow moon path with moon fill and a beam; sun stopped down in fog; warm bounce in shade; bushes lit like the ground.
- **Atmosphere (6.5):** fog by camera distance with layers and fogged instances; a noon fog that is not a sheet; warm emissives in fog; a painted sky.
- **Water (7.0):** an arc faded both ways; a narrow lace with a soft inner fade; turquoise shallows at 300 m; capped noon glitter; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; no roofline specks; a motion capture.
- **Composition (7.5):** fade the arc; a beach with something to look at; fog with depth; moon on the near water.
- **Programmer art (6.5):** clear the marginals (quay/roof/wet-band tiling; single-colour fog with unfogged bushes; noon white-out and black night foreground).

## Verdict

**FAIL.** Lowest lines: atmosphere and programmer-art checklist at 6.5, then materials and water at 7.0,
light, scale and composition at 7.5; only budget and errors (8.5) clears the bar. This round did the one
thing four rounds of notes asked for first: the shoreline is a smooth curve at 60 m, 120 m and at the quay
end, and the firm programmer-art hit is cleared — the builder's decision 37 (a 1.8 m step in the height
function at the coast contour) was the real cause and the fix holds in every frame. The lighthouse shadow
now has a penumbra, the jib no longer glows at night, the lighthouse halo is contained, the roof has a
ridge cap and row breaks, and the quay slabs vary. Against that, the fog was not touched for a fifth round
and remains the lowest line; the shallow arc across the hero's bottom third got bigger and brighter, not
softer; and the beach at 60 m traded a fabric weave for a featureless salmon field with a Voronoi
honeycomb wet band and a wide lilac foam sheet — it is smoother but it is not yet sand. Scores moved from
7.0/7.0/6.5/6.5/7.5/7.5/8.5/5.5 in round 12 to 7.0/7.5/6.5/7.0/7.5/7.5/8.5/6.5: light up half a point on
the penumbra and the night fixes, water up half on the shoreline, programmer art up a full point on the
cleared firm hit; materials hold because the roof gain is cancelled by the sand and wet band; atmosphere,
scale and composition hold because nothing that drives them moved. Against Sea of Conquest the hero, the
night thumbnail and the 300 m tile are now a clean indie take on the same picture — the harbour outline
finally reads as drawn rather than rasterised — but at 60 m the beach, the palms and the fog are still a
generation short. What is missing for a pass is, in order: fog with depth (ship the layered haze); an arc
that fades; sand with grain and a plain lace; a moon path with fill and a beam; then the quay stones, the
roof repeat, the fronds and the jib.
