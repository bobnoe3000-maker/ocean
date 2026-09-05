# Critic round 8 — Ocean look test, second round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) keep their role for dusk and fog. 10 =
indistinguishable from Sea of Conquest's world art. The bar is readability, shape language, painted water
and foam, sculpted vegetation, and colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` built 2026-09-05 00:11:41 from HEAD
`2b2f42c` ("Foam collar off at night", on top of `41a02d2` "Round 8 builder pass: night water and dimmed
shore wash, crisper lace and bow foam, graded cool-to-warm haze, bluer sky, smooth clustered bushes, sand
mottling"). All ten shots were taken this round in the required order, in the foreground, `--frames 4`
throughout: sixteen full frames under `shots/critic8/` plus sixty native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled where the source was 1×, cut with a scratch pngjs script
outside the repo). Every frame and crop cited below was opened and looked at. No round 1–7 screenshot is
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

What holds: the town is the strongest material set in the scene and is close to R1 at 60 m — painted
half-round tiles in uneven rows with pale worn tiles, plaster with cracks and rain staining, per-house
cream/ochre/dusty-pink/peach tints, chimneys with cowls (`shots/critic8/zoom60_town.png`,
`shots/critic8/hero_phone_crop_town.png`); the brig's tarred hull, deck planks, grates, boats and rigging
read as one painted object (`shots/critic8/zoom120_brig_crop_deck.png`); the lighthouse and mole boulders
hold up in the hero (`shots/critic8/hero_phone_crop_mole.png`). New this round: the bushes are smooth and
clustered instead of faceted (`shots/critic8/hero_phone_crop_hill.png`), and the sand carries pale mottling
and a darker line at the water (`shots/critic8/zoom60_beach.png`, `shots/critic8/zoom60_beach_crop_wetband.png`).
What still fails even a stylised bar: the bushes are now glossy plastic spheres with a hard specular dot,
not sculpted two-tone volumes (`shots/critic8/hero_phone_crop_hill.png`, `shots/critic8/sun_check_crop_foreground.png`);
the sand under the mottling is still one diagonal micro-ripple grain with a moiré stripe
(`shots/critic8/zoom60_beach_crop_sand.png`); the hillside still has pale contour lines drawn across it
(`shots/critic8/hero_phone_crop_hill.png`, `shots/critic8/zoom300_crop_island.png`); the lamp head is the same
faceted box on a stick (`shots/critic8/zoom60_town_crop_lamp.png`); balconies are unshaded wire cages
(`shots/critic8/zoom60_town_crop_balconies.png`); the white-cross window decal is still on the pink house
(`shots/critic8/zoom60_town_crop_decal.png`); roofs are paper-thin sheets with no eave and a black void
under one gable (`shots/critic8/zoom60_town_crop_eave.png`); a black bracket still floats inside a roof
(`shots/critic8/zoom60_town_crop_bracket.png`); the quay is the same regular radial flagstone grid with stitch
seams and a hard step to the apron (`shots/critic8/zoom60_town_crop_quay.png`); palm fronds are flat pale-lime
blades (`shots/critic8/zoom60_beach_crop_palm.png`). To reach 8.5 under this direction: matte, two-tone,
irregular bush volumes; delete the contour term and paint the hill as scrub, rock and sand masses; a sand
with macro colour and debris and no single grain; a modelled lantern and rails with thickness; eaves;
hand-placed irregular quay stones with a wet band; fronds with a spine, droop and darker underside.

### 2. Light — 6.5

The night is the round's real gain and now sits close to R2: the basin is near-black with silver moon
streaks, the quay lanterns pool warm on the flagstones, windows vary in amber, the lighthouse throws a
warm beam onto the water, the dock lantern lights the dinghy, and the brig carries a bow lantern with a
warm reflection (`shots/critic8/night_phone.png`, `shots/critic8/night_phone_crop_town.png`,
`shots/critic8/night_phone_crop_basin.png`, `shots/critic8/night_phone_crop_mole.png`,
`shots/critic8/night_phone_crop_dock.png`); the hill is true dark with only bush highlights
(`shots/critic8/night_phone_crop_hill.png`). The 17:30 hero light still carries the day: sun at 12.4°
(sun y = 0.2145 in `shots/critic8/hero_phone.json`, disc verified in `shots/critic8/sun_check_crop_sky.png`),
long soft shadows from hill, tower, brig and lighthouse up-left across the water (`shots/critic8/hero_phone.png`).
Nits and faults: the night jib is a flat saturated orange-yellow triangle that reads as a lit lampshade in
the dark, and the brig has no rigging or rail glint (`shots/critic8/night_phone_crop_brig.png`); the night
water is neutral charcoal-grey rather than R2's navy `#111C3C`; the sun-check glitter still clips to
cream-white and floods the whole sea and harbour (`shots/critic8/sun_check_crop_glitter.png`,
`shots/critic8/sun_check.png`); the 17:30 shade has only a faint peach tint on one wall base and no warm bounce
on shaded sand (`shots/critic8/zoom60_town_crop_shade.png`, `shots/critic8/hero_phone_crop_town.png`). To reach
8.5: a navy night basin with a narrow moon path, moon rim on sails and rigging, an unlit jib, a glitter
path that holds under white, sky fill toward `#5B6FA6` with a ground-bounce term.

### 3. Atmosphere — 5.0

Slightly better in structure, still the weakest line. The sky in the only frame that contains it now
grades from an ochre horizon band through a warm haze to a cool grey-blue top, with a sun disc and halo
(`shots/critic8/sun_check_crop_sky.png`); there is still no blue zenith, no rose belt opposite the sun and no
clouds. The 17:30 fog is now a graded veil, blue-grey at the bottom and sepia-brown at the top
(`shots/critic8/fog_phone.png`), but the depth is still inverted: the near water at the bottom of the frame is
a featureless blue-grey field with a faint diagonal streak (`shots/critic8/fog_phone_crop_near_water.png`,
`shots/critic8/contact_fog_175_crop_near_water.png`), while the town at the top keeps its colour and edge
detail behind a sepia wash (`shots/critic8/fog_phone_crop_town.png`, `shots/critic8/contact_fog_175_crop_town.png`)
and the brig keeps full silhouette contrast (`shots/critic8/fog_phone_crop_brig.png`); it reads as a sepia photo
filter, not R4's stacked depth layers. The noon fog is an opaque pink-beige sheet through which only the
dark windows ghost (`shots/critic8/contact_fog_12_crop_town.png`, `shots/critic8/contact.png`). The 22:00 fog is the
best cell: lantern points with soft halos and a glowing lighthouse (`shots/critic8/contact_fog_22_crop_mole.png`).
Aerial perspective at 300 m is a hint at most: the far water at the top of the frame is a slightly lighter
cobalt than the near water (`shots/critic8/zoom300_crop_top.png`, `shots/critic8/zoom300_crop_bottom.png`). Bloom is
restrained except in the glitter. To reach 8.5: a painted sky with blue zenith, rose belt and sculpted
clouds; fog density rising with camera distance so the near chop stays crisp and each farther layer goes
bluer and flatter; lower noon albedo; a real blue-grey shift on far water.

### 4. Water — 5.5

The banded turquoise-to-cobalt gradient, painted brush chop and shadow-darkened water still hold at every
zoom (`shots/critic8/hero_phone.png`, `shots/critic8/hero_phone_crop_bottom.png`, `shots/critic8/zoom300_crop_bottom.png`,
`shots/critic8/zoom120_brig.png`), the night water is finally dark with moon streaks
(`shots/critic8/night_phone_crop_basin.png`), the foam collar now has a crisp cream lace edge on the water side
(`shots/critic8/zoom60_beach_crop_foam.png`, `shots/critic8/zoom120_brig_crop_shoreline.png`), and the noon mole comet
is gone (`shots/critic8/contact_clear_12_crop_mole.png`). But the collar itself has become a uniform bright
white wash band roughly fifteen metres wide around the entire basin and beach, a white stripe at hero
scale (`shots/critic8/hero_phone.png`, `shots/critic8/hero_phone_crop_beach.png`, `shots/critic8/zoom120_brig_crop_collar.png`,
`shots/critic8/landscape.png`); its landward edge is now a large stair-stepped sawtooth where the wash mesh
ends against the sand, bigger and more visible than round 7's polyline
(`shots/critic8/zoom60_beach_crop_shore.png`, `shots/critic8/zoom60_beach.png`, `shots/critic8/zoom120_brig_crop_shoreline.png`);
two large cream patches with lace edges lie on the water in the harbour mouth and read as clouds or a
white sandbar, not as breaking swell (`shots/critic8/hero_phone_crop_patch.png`, `shots/critic8/hero_phone.png`,
`shots/critic8/fog_phone.png`); the noon basin is covered in heavy white marbling from shore to shore, worse
than round 7's confetti (`shots/critic8/contact_clear_12_crop_basin.png`, `shots/critic8/contact.png`); there is no
foam plume at the bow, only a detached pale smear on open water beside the jib
(`shots/critic8/zoom120_brig_crop_bow.png`, `shots/critic8/zoom120_brig_crop_jib.png`); and the sun-check sea is one
clipped glitter sheet (`shots/critic8/sun_check_crop_glitter.png`). To reach 8.5: a collar two to four
metres wide with a lace edge, a narrow bright band and a soft inner fade, blended into the sand with alpha
instead of a mesh edge; delete the harbour-mouth patches or paint them as a turquoise sand bar with foam
only on its seaward lip; a noon basin with tight glitter and sparse crests; a bow foam sprite; a navy
night basin.

### 5. Scale and motion — 6.5

The 1.7× brig, dock, dinghies, barrels, lamp posts and lighthouse agree with each other and with the town
at Sea of Conquest scale (`shots/critic8/hero_phone.png`, `shots/critic8/hero_phone_crop_dock.png`,
`shots/critic8/zoom120_brig_crop_deck.png`); the bushes are now clustered in varied sizes
(`shots/critic8/zoom300_crop_island.png`); palms vary in lean and rotation and a gull is in the hero
(`shots/critic8/zoom60_beach.png`, `shots/critic8/hero_phone_crop_gull.png`). Still wrong: a crate sits on the water
at the beach edge (`shots/critic8/hero_phone_crop_beach.png`); palm fronds pass through a house façade and a
chimney (`shots/critic8/zoom60_town_crop_palm.png`); a palm frond shows through the mainsail, either a
transparency or a depth fault (`shots/critic8/zoom120_brig_crop_sail.png`); a balcony bracket floats inside a
roof (`shots/critic8/zoom60_town_crop_bracket.png`); the palm crown is pinned beside the trunk rather than on it
(`shots/critic8/zoom60_beach_crop_palm.png`); no chimney smoke is visible anywhere in the hero
(`shots/critic8/hero_phone_crop_town.png`). Palm sway, sail, flag, smoke and gull motion remain unverifiable
from stills. To reach 8.5: props clamped to land, collision-free vegetation, an opaque sail, smoke plumes
with drift, a seated crown, and a short motion capture.

### 6. Composition and squint test — 7.0

The hero framing holds: warm town in the upper third, brig on the lower-left third line, lighthouse on the
lower-right, long shadows on the diagonal, and the 300 m and landscape frames read as a Sea of Conquest map
tile (`shots/critic8/hero_phone.png`, `shots/critic8/zoom300.png`, `shots/critic8/landscape.png`). The night thumbnail
is now owned by the lantern-lit quay and the lighthouse, as R2 is (`shots/critic8/contact.png`, cell clear 22:00).
Against it: the white collar ring and the two cream patches now own the lower half of the hero and the
landscape frame and pull the eye off the port (`shots/critic8/hero_phone.png`, `shots/critic8/landscape.png`); the
noon cell is a white-marbled pool (`shots/critic8/contact.png`); the three fog cells are still flat sheets at
thumbnail; the hill still reads as a contour map with a dark stain across it
(`shots/critic8/zoom300_crop_island.png`, `shots/critic8/landscape.png`); there is still no horizon in the hero.
To reach 8.5: a narrow collar, no harbour-mouth patches, fog cells with depth layers, a painted hill.

### 7. Budget and errors — 8.5

All fifteen per-shot JSON logs report zero console errors. Draw calls 109–156 (limit 300); triangles
1,070,883 at medium and 1,456,385–1,480,531 at high (limit 1.5 M); texture memory 41.3 MB (limit 256).
Device fps is honestly "not measured". The single warning on every shot is the environment's
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`. Two nits: the high-quality
triangle count rose again to 1,480,531 and is now 19,469 under the limit, so any further mesh pass must
be paid for elsewhere; device fps remains unmeasured.

### 8. Programmer-art checklist — 4.0 (automatic fail)

Five firm hits and one marginal; the pale-blue night is cleared. See the checklist below.

## Programmer-art checklist

Stylised flat colour is not counted as a hit where it is a deliberate painted read with shading;
untextured placeholder surfaces still are.

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Lamp head a faceted box on a stick; balcony rails unshaded wire cages: `shots/critic8/zoom60_town_crop_lamp.png`, `shots/critic8/zoom60_town_crop_balconies.png`. Sails cleared as a painted read (seams, belly gradient): `shots/critic8/zoom120_brig.png`; the jib is a seamless flat triangle but shaded: `shots/critic8/zoom120_brig_crop_jib.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** (marginal) | Beach is still one diagonal micro-ripple grain with a moiré stripe across the whole strand under the new mottling: `shots/critic8/zoom60_beach_crop_sand.png`, `shots/critic8/zoom60_beach.png`. Water cleared: `shots/critic8/zoom300_crop_bottom.png`, `shots/critic8/hero_phone_crop_bottom.png` |
| Shadow acne or missing shadows | clear | Long, soft shadows from hill, tower, brig, palms and lighthouse: `shots/critic8/hero_phone.png`, `shots/critic8/zoom60_beach.png` |
| Grey nights | clear (**fixed**) | Near-black basin, moon streaks, lantern pools, dark hill and alleys: `shots/critic8/night_phone.png`, `shots/critic8/night_phone_crop_basin.png`, `shots/critic8/night_phone_crop_hill.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | The foam collar is a uniform ~15 m white wash band around the whole basin: `shots/critic8/hero_phone.png`, `shots/critic8/zoom120_brig_crop_collar.png`, `shots/critic8/landscape.png`; the noon basin is white marbling shore to shore: `shots/critic8/contact_clear_12_crop_basin.png`. The plane itself is cleared (banded gradient, chop, shadows): `shots/critic8/hero_phone.png`. The mole comet is gone: `shots/critic8/contact_clear_12_crop_mole.png` |
| Hard water-to-beach line | **HIT** (worse) | The wash mesh ends against the sand in a large stair-stepped sawtooth along the whole beach: `shots/critic8/zoom60_beach_crop_shore.png`, `shots/critic8/zoom60_beach.png`, `shots/critic8/zoom120_brig_crop_shoreline.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms vary in lean and rotation: `shots/critic8/zoom60_beach.png`; bushes vary in size and cluster: `shots/critic8/zoom300_crop_island.png` |
| Fog as one colour | **HIT** | 17:30 fog is a two-band sepia-over-blue-grey veil with a blank near-water field and the far town sharpest; 12:00 is an opaque pink-beige sheet: `shots/critic8/fog_phone_crop_near_water.png`, `shots/critic8/fog_phone_crop_town.png`, `shots/critic8/contact_fog_12_crop_town.png` |
| Sky without a sun | clear | Sun disc with halo at 12.4°: `shots/critic8/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | **HIT** (marginal) | Bushes are now smooth but are glossy spheres with a specular dot, still a primitive rather than a sculpted volume: `shots/critic8/hero_phone_crop_hill.png`, `shots/critic8/sun_check_crop_foreground.png`. No text labels |
| Recognisable low-poly asset kit | clear (marginal) | Same three or four house masses repeat forty times, tinted per house: `shots/critic8/hero_phone_crop_town.png`, `shots/critic8/zoom300_crop_island.png` |

Five firm hits (flat lamp/rails; beach grain; the white collar stripe and noon marbling; the sawtooth
shoreline; one-colour fog) plus one marginal (sphere bushes). The round fails automatically.

## Ranked issues (most damaging first)

1. **The shoreline is a large stair-stepped sawtooth where the wash mesh meets the sand, on every beach.** `shots/critic8/zoom60_beach_crop_shore.png`, `shots/critic8/zoom60_beach.png`, `shots/critic8/zoom120_brig_crop_shoreline.png`. Fix: extend the wash under the sand and fade it with a distance/alpha term; never let a mesh silhouette be the shoreline.
2. **The foam collar is a uniform ~15 m white band around the whole basin and beach; it owns the lower half of the hero.** `shots/critic8/hero_phone.png`, `shots/critic8/hero_phone_crop_beach.png`, `shots/critic8/zoom120_brig_crop_collar.png`, `shots/critic8/landscape.png`. Fix: two to four metres wide, lace edge outward, narrow bright band, soft inner fade, wider only where swell meets the mole.
3. **Two large cream patches with lace edges sit on the water in the harbour mouth and read as clouds; the noon basin is white marbling shore to shore.** `shots/critic8/hero_phone_crop_patch.png`, `shots/critic8/contact_clear_12_crop_basin.png`, `shots/critic8/contact.png`. Fix: delete or repaint as a turquoise sand bar with foam only on the seaward lip; noon gets tight glitter and sparse crests.
4. **Fog depth is still inverted and one colour per band; noon fog is an opaque sheet.** `shots/critic8/fog_phone_crop_near_water.png`, `shots/critic8/fog_phone_crop_town.png`, `shots/critic8/contact_fog_12_crop_town.png`. Fix: density by camera distance, near chop crisp, each farther layer bluer and flatter (R4), lower noon albedo.
5. **The sky has no blue zenith, rose belt or clouds; the glitter clips and floods the harbour.** `shots/critic8/sun_check_crop_sky.png`, `shots/critic8/sun_check_crop_glitter.png`. Fix: painted sky with sculpted clouds; hold the glitter under white.
6. **Bushes are glossy plastic spheres; the hillside still has contour lines and a dark stain across it.** `shots/critic8/hero_phone_crop_hill.png`, `shots/critic8/sun_check_crop_foreground.png`, `shots/critic8/zoom300_crop_island.png`. Fix: matte two-tone irregular volumes; delete the contour term; paint scrub, rock and sand masses.
7. **Lamp head is a faceted box; balcony rails are wire cages; the white-cross decal persists.** `shots/critic8/zoom60_town_crop_lamp.png`, `shots/critic8/zoom60_town_crop_balconies.png`, `shots/critic8/zoom60_town_crop_decal.png`. Fix: modelled lantern with glass, rails with thickness, drop the decal.
8. **Palm fronds are flat blades pinned beside the trunk, pass through a house and show through the mainsail.** `shots/critic8/zoom60_beach_crop_palm.png`, `shots/critic8/zoom60_town_crop_palm.png`, `shots/critic8/zoom120_brig_crop_sail.png`. Fix: fronds with spine, droop and underside; seated crown; placement that respects buildings; opaque sail.
9. **The beach is one diagonal micro-grain with a moiré stripe under the mottling; no debris.** `shots/critic8/zoom60_beach_crop_sand.png`. Fix: remove the single grain, add macro colour, seaweed line, shells, driftwood.
10. **Night jib is a saturated orange-yellow triangle; no rigging glint; basin is grey rather than navy.** `shots/critic8/night_phone_crop_brig.png`, `shots/critic8/night_phone_crop_basin.png`. Fix: unlit jib, moon rim on rigging and sails, water toward `#111C3C`.
11. **Quay is a radial flagstone grid with stitch seams and a hard step to the apron.** `shots/critic8/zoom60_town_crop_quay.png`. Fix: irregular painted stones, continuous UVs, rounded wet edge.
12. **A bracket floats inside a roof; roofs have no eaves; a black void under one gable.** `shots/critic8/zoom60_town_crop_bracket.png`, `shots/critic8/zoom60_town_crop_eave.png`. Fix: clamp balcony parts, add eave overhang, close the gable.
13. **A crate sits on the water at the beach edge.** `shots/critic8/hero_phone_crop_beach.png`. Fix: clamp props to land.
14. **No warm bounce in the 17:30 shade; no chimney smoke.** `shots/critic8/zoom60_town_crop_shade.png`, `shots/critic8/hero_phone_crop_town.png`. Fix: sky fill and ground-bounce term; soft-particle plumes.
15. **Aerial perspective on far water at 300 m is a hint only; no bow foam plume.** `shots/critic8/zoom300_crop_top.png`, `shots/critic8/zoom120_brig_crop_bow.png`. Fix: a blue-grey distance shift; a bow foam sprite.

## Round 7 issues — status

| # | Round 7 issue | Status | Evidence |
|---|---|---|---|
| 1 | Night basin a flat pale sky-blue sheet; brig a black cut-out | **fixed** | Near-black basin with moon streaks, lantern pools, bow lantern and reflection, lit dock and lighthouse: `shots/critic8/night_phone.png`, `shots/critic8/night_phone_crop_basin.png`, `shots/critic8/night_phone_crop_dock.png`. Nits: orange jib, no rigging glint: `shots/critic8/night_phone_crop_brig.png` |
| 2 | Shoreline a hard stair-stepped mesh edge | **unchanged** (worse) | The sawtooth moved to the landward edge of the wash and grew: `shots/critic8/zoom60_beach_crop_shore.png`, `shots/critic8/zoom120_brig_crop_shoreline.png` |
| 3 | Foam collar a milky haze, no lace, no bow/mole foam; comet and confetti | **improved** (marginal) | Crisp lace on the water side and the comet gone: `shots/critic8/zoom60_beach_crop_foam.png`, `shots/critic8/contact_clear_12_crop_mole.png`; collar now a wide uniform white band, noon marbling worse, no bow plume: `shots/critic8/zoom120_brig_crop_collar.png`, `shots/critic8/contact_clear_12_crop_basin.png`, `shots/critic8/zoom120_brig_crop_bow.png` |
| 4 | Fog one colour with inverted depth; noon opaque | **improved** (marginal) | Graded cool-to-warm veil and good 22:00 halos: `shots/critic8/fog_phone.png`, `shots/critic8/contact_fog_22_crop_mole.png`; depth still inverted, near water blank, noon opaque: `shots/critic8/fog_phone_crop_near_water.png`, `shots/critic8/fog_phone_crop_town.png`, `shots/critic8/contact_fog_12_crop_town.png` |
| 5 | Sky a monotone haze; glitter clips; ledge through slope | **improved** (marginal) | Top of sky now cool grey-blue: `shots/critic8/sun_check_crop_sky.png`; no zenith blue, rose belt or clouds; glitter still clips and floods; ledge still there: `shots/critic8/sun_check_crop_glitter.png`, `shots/critic8/sun_check_crop_foreground.png` |
| 6 | Hill contour lines; faceted icosphere bushes | **improved** | Bushes smooth and clustered: `shots/critic8/hero_phone_crop_hill.png`, `shots/critic8/zoom300_crop_island.png`; now glossy spheres; contour lines still drawn: same crops |
| 7 | Palm crowns flat blades pinned beside the trunk; fronds through a house | **unchanged** | `shots/critic8/zoom60_beach_crop_palm.png`, `shots/critic8/zoom60_town_crop_palm.png`; new: frond through the mainsail: `shots/critic8/zoom120_brig_crop_sail.png` |
| 8 | Beach one flat peach tint, single grain, no wet band or debris | **improved** (marginal) | Pale mottling and a dark line at the water: `shots/critic8/zoom60_beach.png`, `shots/critic8/zoom60_beach_crop_wetband.png`; grain and moiré unchanged, no debris: `shots/critic8/zoom60_beach_crop_sand.png` |
| 9 | Lamp a faceted box; rails wire cages; white-cross decal | **unchanged** | `shots/critic8/zoom60_town_crop_lamp.png`, `shots/critic8/zoom60_town_crop_balconies.png`, `shots/critic8/zoom60_town_crop_decal.png` |
| 10 | Quay a radial grid with stitch seams, hard step, no wet band | **unchanged** | `shots/critic8/zoom60_town_crop_quay.png` |
| 11 | Bracket floats inside a roof; no eaves | **unchanged** | `shots/critic8/zoom60_town_crop_bracket.png`, `shots/critic8/zoom60_town_crop_eave.png` |
| 12 | Crate on the water at the beach edge | **unchanged** | `shots/critic8/hero_phone_crop_beach.png` |
| 13 | No warm bounce in the 17:30 shade | **improved** (marginal) | A faint peach tint on one shaded wall base: `shots/critic8/zoom60_town_crop_shade.png`; none on shaded sand: `shots/critic8/hero_phone_crop_town.png` |
| 14 | No chimney smoke | **unchanged** | `shots/critic8/hero_phone_crop_town.png` |
| 15 | No aerial perspective at 300 m; same house masses repeat | **improved** (marginal) | Far water a touch lighter at the top of the frame: `shots/critic8/zoom300_crop_top.png`; houses unchanged: `shots/critic8/zoom300_crop_island.png` |

Fixed 1, improved 7 (six marginal), unchanged 7 (one worse). Of the six hits that carried the automatic
fail in round 7, one cleared (the pale-blue night), four persist (flat lamp/rails, beach grain, one-colour
fog, the shoreline edge, which got worse) and the comet hit was replaced by the white collar stripe and the
noon marbling; the faceted-bush hit softened to a marginal sphere-primitive hit.

## Budget lines (from `shots/critic8/*.json`)

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
supported` (environment). Triangles at high quality rose from 1,473,603 to 1,480,531 and sit 19,469 under
the limit.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** matte two-tone bush volumes; a hill without contour lines; sand without a single grain; a modelled lantern and rails; eaves; irregular quay stones with a wet band; fronds with spine and underside.
- **Light (6.5):** a navy night basin with a moon path; an unlit jib and a moon rim on the rigging; a glitter path that does not clip; warm bounce in the 17:30 shade.
- **Atmosphere (5.0):** a painted sky with blue zenith, rose belt and clouds; fog with distance-driven density and per-layer blue shift; lower noon albedo; a real aerial shift on far water.
- **Water (5.5):** a narrow lace-edged collar blended into the sand; no sawtooth; no harbour-mouth patches; no noon marbling; a bow foam sprite.
- **Scale and motion (6.5):** props clamped to land; vegetation that does not clip buildings or sails; a seated crown; visible smoke; a motion capture.
- **Composition (7.0):** a lower third owned by the brig and the shallows rather than white bands; fog cells with depth; a painted hill.
- **Programmer art (4.0):** clear the five firm hits (lamp/rails; beach grain; white collar stripe and noon marbling; sawtooth shoreline; one-colour fog) and the sphere bushes.

## Verdict

**FAIL.** Lowest line: programmer-art checklist (4.0, five firm hits and one marginal), then atmosphere
(5.0) and water (5.5); only budget and errors (8.5) clears the bar. The night was the frame R2 is about
and the builder fixed it: a dark basin with moon streaks, warm lantern pools, a bow lantern, a lit
lighthouse beam — at phone size the 22:00 frame is now the closest this project has come to Sea of
Conquest. The daytime hero paid for it: the foam collar that was a milky haze in round 7 is now a wide,
uniform white band around the whole basin with a sawtooth mesh edge on its landward side, two cream
patches float in the harbour mouth like clouds, and the noon basin is marbled white from shore to shore,
so the lower half of the hero is owned by white shapes instead of the brig and the turquoise shallows.
Everything at 60 m the round 7 list named — lamp boxes, wire cages, the decal, the floating bracket, the
missing eaves, the flagstone grid, the flat fronds, the contour lines, the crate on the water — is
untouched, and the bushes went from faceted to glossy plastic. Scores moved from
6.5/5.5/4.5/6.0/6.5/7.0/8.5/3.5 in round 7 to 6.5/6.5/5.0/5.5/6.5/7.0/8.5/4.0: light and atmosphere
gained on the night and the graded haze, water lost on the collar, and the programmer-art count fell by
one. Against Sea of Conquest the night is a good indie take on the same picture and the 300 m tile still
reads; the daytime hero has gone backwards at the shoreline, and the fog and sky are still not in the
conversation. The next pass has to be the shoreline and collar first, then the fog, then the 60 m props
list that has now survived three rounds unchanged.
