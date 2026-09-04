# Critic round 7 — Ocean look test, first round under STYLISED REALISM

Judged against LOOK.md section 0 and the reference frames in their revised roles: Sea of Conquest R1
(golden-hour harbour) and R2 (port at night) are the primary references, R5 (Symi/Hydra photograph) is
the palette reference, R3/R4 (Dredge) keep their role for dusk and fog mood. 10 = indistinguishable from
Sea of Conquest's world art. A physically plausible look is no longer the bar; readability, shape
language, painted water and foam, sculpted vegetation, and colour and light quality are.

Build under judgement: preview at http://127.0.0.1:5174/ (HEAD `7002400`, "Stylised realism pass:
painted texture sets, authored foam collar and lace, cloth sail meshes, sculpted fronds and blob bushes,
stylised default") on 2026-09-04. All ten shots were taken this round, in the required order, in the
foreground, `--frames 4` throughout: sixteen full frames under `shots/critic7/` plus forty-one
native-resolution crops (`*_crop_*.png`, nearest-neighbour upscaled where the source was 1×). Every
frame and crop cited below was opened and looked at. No round 1–6 screenshot is used as evidence.

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

The direction change bought real ground in the town: roofs are painted half-round tiles in uneven rows
with pale worn tiles and a lichen wash, plaster carries cracks and rain staining, the per-house tints
(cream, ochre, dusty pink, peach) sit close to R1's palette, and the hull, deck planks, grates and
rigging read as one painted object (`shots/critic7/zoom60_town.png`, `shots/critic7/zoom60_town_crop_roof.png`,
`shots/critic7/zoom120_brig_crop_deck.png`). The sails are now a legitimate painted read rather than a
programmer quad: panel seams, a belly gradient and a curved pennant with a seam
(`shots/critic7/zoom120_brig_crop_sail.png`). What still fails even a stylised bar: the lamp head is the
same faceted box on a stick (`shots/critic7/zoom60_town_crop_lamp.png`); balconies are unshaded wire cages
and the white-cross window decal is on several houses (`shots/critic7/zoom60_town_crop_windows.png`,
`shots/critic7/zoom60_town.png`); a black balcony bracket floats detached inside a roof
(`shots/critic7/zoom60_town_crop_roof.png`); roofs are paper-thin sheets with no eave; the quay is still a
regular radial flagstone grid with stitch seams where the bands meet and a hard step to the hex apron
(`shots/critic7/zoom60_town_crop_quay.png`); the sand is one flat peach tint with a single diagonal
micro-ripple grain and nothing else on it (`shots/critic7/zoom60_beach_crop_sand.png`); the hillside still has
the pale contour lines drawn on it (`shots/critic7/hero_phone_crop_hill.png`,
`shots/critic7/landscape_crop_hill.png`); the "blob bushes" are flat-shaded icospheres with visible facets
(`shots/critic7/hero_phone_crop_hill.png`, `shots/critic7/sun_check_crop_foreground.png`); and the palm fronds
are six to eight flat pale-lime blades, not sculpted fronds (`shots/critic7/zoom60_beach_crop_palm.png`).
To reach 8.5 under this direction: a modelled lantern and rails with thickness; eaves; hand-placed
irregular quay stones with a dark wet band; a beach with macro colour variation, a wet band and debris;
delete the contour term and paint the hill as scrub, rock and sand masses; bushes as smooth sculpted
volumes with a two-tone paint; fronds with a spine, droop and a darker underside.

### 2. Light — 5.5

The 17:30 hero light still carries the project: the sun sits at 12.4° (sun y = 0.2145 in the JSON,
disc verified in `shots/critic7/sun_check_crop_sky.png`), walls face it in R5's `#F4B77C` range, and the
hill, tower, brig and lighthouse throw long soft-edged shadows up-left across the basin that darken the
water as R1 does (`shots/critic7/hero_phone.png`, `shots/critic7/hero_phone_crop_mole.png`). The night town is
now the best it has been and is close to R2: per-window amber variation, warm lantern pools on the quay,
true darkness in the alleys, a lit lighthouse (`shots/critic7/night_phone_crop_town.png`,
`shots/critic7/night_phone_crop_mole.png`). But the night basin is a flat pale sky-blue field, brighter than
every lantern, with the foam collars glowing white-lilac and the brig a pure black cut-out with no rigging
glint (`shots/critic7/night_phone.png`, `shots/critic7/night_phone_crop_basin.png`,
`shots/critic7/night_phone_crop_brig.png`, `shots/critic7/contact_clear_22_crop_basin.png`). R2 is near-black
water with a narrow moon path and lantern streaks; this is a swimming pool under floodlights, and it is
the single worst frame of the round. The sun-check glitter path still clips to cream-white and floods the
harbour and shore (`shots/critic7/sun_check_crop_glitter.png`). The 17:30 shade has picked up a faint blue
tint on the left-hand house but there is still no warm bounce on shaded sand or wall bases
(`shots/critic7/zoom60_town.png`, `shots/critic7/hero_phone_crop_town.png`). To reach 8.5: night water at
`#111C3C` with a moon path and lantern streaks, a rim of moonlight on the sails, sky fill toward
`#5B6FA6` with a ground-bounce term, and an exposure that holds the glitter.

### 3. Atmosphere — 4.5

Unchanged in structure and the weakest line. The sky in the only frame that contains it is one
warm-grey haze gradient from an ochre horizon band to a taupe top, no blue zenith, no rose belt, no
clouds (`shots/critic7/sun_check_crop_sky.png`, `shots/critic7/sun_check.png`). The near terrain in the sun
check is a dark mud slope with pale wet-sheen patches and a flat pale ledge intersecting it at the left
(`shots/critic7/sun_check_crop_foreground.png`). The 17:30 fog is one grey-lilac veil: the near water at the
bottom of the frame is a featureless blue-grey field while the town at the top keeps its colour and edge
detail, the inverse of R4 (`shots/critic7/fog_phone.png`, `shots/critic7/fog_phone_crop_near_water.png`,
`shots/critic7/fog_phone_crop_town.png`, `shots/critic7/fog_phone_crop_brig.png`); the noon fog is an opaque
milky sheet (`shots/critic7/contact_fog_12.png`); the 22:00 fog is the pale-blue night basin seen through a
veil (`shots/critic7/contact_fog_22.png`). There is no visible aerial perspective anywhere: the 300 m frame's
far water is the same cobalt as the near water (`shots/critic7/zoom300_crop_top.png`,
`shots/critic7/zoom300.png`). Bloom is restrained except in the glitter path. To reach 8.5 under this
direction: a painted sky with a blue zenith, a rose belt opposite the sun and a few sculpted clouds; fog
whose density rises with distance so the near chop stays crisp and each farther layer goes bluer and
flatter (R4); noon fog with lower albedo; a blue-grey shift on the far water at 300 m.

### 4. Water — 6.0

This is where the direction change helped most. The basin is now a banded turquoise-to-cobalt gradient
with a painted two-tone chop, the shallows are a lighter green-turquoise, shadows darken the water, and
at 300 m and in the hero's lower third the old diagonal lattice is gone, replaced by soft brush streaks
that hold up at both zooms (`shots/critic7/hero_phone.png`, `shots/critic7/hero_phone_crop_bottom.png`,
`shots/critic7/zoom300_crop_bottom.png`, `shots/critic7/zoom120_brig_crop_water.png`). The foam ring around the
island reads at 300 m and in landscape the way R1's does (`shots/critic7/zoom300.png`,
`shots/critic7/landscape.png`). Up close the foam collar falls apart: it is a wide milky lilac-grey haze band
with cream flecks and a soft fade on the water side, no lace edge, no defined collar, and it reads as
mist lying on the shallows rather than foam (`shots/critic7/hero_phone_crop_beach.png`,
`shots/critic7/zoom60_beach_crop_foam.png`, `shots/critic7/zoom120_brig.png`). Where it meets the sand the water
mesh ends in a hard stair-stepped polygon edge with a dark wavy stroke offset from it
(`shots/critic7/zoom60_beach_crop_shore.png`, `shots/critic7/zoom120_brig_crop_shoreline.png`). There is no foam at
the brig's bow or at the mole (`shots/critic7/hero_phone_crop_brig.png`, `shots/critic7/hero_phone_crop_mole.png`);
the noon foam comet still streaks off the mole tip with a clipped white core
(`shots/critic7/contact_clear_12_crop_mole.png`, `shots/critic7/contact_fog_12_crop_mole.png`); noon still has
white confetti across the whole basin (`shots/critic7/contact_clear_12.png`); the night water is a pale
sky-blue sheet (`shots/critic7/night_phone_crop_basin.png`); the hull reflection from round 6 is gone and nothing
reflects, which under R2 still matters for lantern streaks. To reach 8.5: an authored foam collar with a
crisp lace edge and a soft inner fade, foam at bow and mole, a soft alpha shoreline instead of a mesh
edge, delete the comet and confetti, night water near-black with a moon path and lantern streaks.

### 5. Scale and motion — 6.5

The 1.7× brig now sits in the basin at Sea of Conquest's readable scale, with deck guns, grates, boats,
a bowsprit and a jib on the forestay; the dock, dinghies, barrels and lamp posts agree with it
(`shots/critic7/hero_phone.png`, `shots/critic7/hero_phone_crop_dock.png`, `shots/critic7/zoom120_brig_crop_deck.png`).
The palms have varied lean and rotation and cast long shadows; gulls appear in the daylight frames
(`shots/critic7/zoom60_beach.png`, `shots/critic7/hero_phone.png`). Still wrong: a crate sits on the water at the
beach edge (`shots/critic7/zoom60_beach_crop_crate.png`); palm fronds pass straight through a house façade and
its window (`shots/critic7/zoom60_town_crop_palm.png`); a balcony bracket floats inside a roof
(`shots/critic7/zoom60_town_crop_roof.png`); no chimney smoke is visible anywhere in the hero
(`shots/critic7/hero_phone_crop_town.png`); the palm trunks join the crown off-centre so the crown reads as a
star pinned beside the trunk (`shots/critic7/zoom60_beach_crop_palm.png`); the bushes are identical-scale
icospheres scattered without clumping (`shots/critic7/hero_phone_crop_hill.png`). Palm sway, sail, flag, smoke
and gull motion remain unverifiable from stills. To reach 8.5: props clamped to land, collision-free
vegetation placement, visible smoke plumes with drift, bush clumps of varied size, and a short motion
capture.

### 6. Composition and squint test — 7.0

The best line this round. The hero framing holds (warm town in the upper third, brig on the lower-left
third line, lighthouse on the lower-right, long shadows on the diagonal), and the saturated turquoise
basin against the orange roofs now reads as a painting at thumbnail: the clear 12:00 and 17:30 contact
cells and the 300 m and landscape frames look like a Sea of Conquest map tile
(`shots/critic7/hero_phone.png`, `shots/critic7/contact.png`, `shots/critic7/zoom300.png`, `shots/critic7/landscape.png`,
`shots/critic7/landscape_crop_harbour.png`). Weaknesses: the milky foam haze eats the lower-left of the hero
and reads as a cloud over the shallows (`shots/critic7/hero_phone_crop_beach.png`); there is still no sky or
horizon in the hero or landscape frame; the hill still reads as a contour map
(`shots/critic7/landscape_crop_hill.png`); the night thumbnail is owned by a glowing pale pool instead of the
lantern-lit quay (`shots/critic7/contact_clear_22.png`); the three fog cells are grey sheets at thumbnail
(`shots/critic7/contact.png`). To reach 8.5: a horizon band, a painted hillside, a dark night basin and fog
cells with depth layers.

### 7. Budget and errors — 8.5

All sixteen JSON logs report zero console errors. Draw calls 109–156 (limit 300); triangles 1.03 M at
medium and 1.45–1.47 M at high (limit 1.5 M); texture memory 41.3 MB (limit 256). Device fps is
honestly "not measured". The single warning on every shot is the environment's
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`. Two nits: the high-quality
triangle count is now 1,473,603, only 26 k under the limit, so the next bush or frond pass tips it; and
device fps remains unmeasured.

### 8. Programmer-art checklist — 3.5 (automatic fail)

Six hits, two of them new this round; see the checklist below.

## Programmer-art checklist

Stylised flat colour is not counted as a hit where it is a deliberate painted read with shading;
untextured placeholder surfaces still are.

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Lamp head a faceted box on a stick; balcony rails unshaded wire cages; sand a flat peach plane with one micro grain: `shots/critic7/zoom60_town_crop_lamp.png`, `shots/critic7/zoom60_town_crop_windows.png`, `shots/critic7/zoom60_beach_crop_sand.png`. Sails and pennant are cleared as a painted read (seams, belly gradient): `shots/critic7/zoom120_brig_crop_sail.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** (marginal) | Beach is a single diagonal micro-ripple grain over the whole strand: `shots/critic7/zoom60_beach_crop_sand.png`, `shots/critic7/zoom120_brig_crop_palms.png`. Water is cleared: no lattice at 300 m or in the hero: `shots/critic7/zoom300_crop_bottom.png`, `shots/critic7/hero_phone_crop_bottom.png` |
| Shadow acne or missing shadows | clear | Long, soft, distance-graded shadows from hill, tower, brig, palms and lighthouse: `shots/critic7/hero_phone.png`, `shots/critic7/zoom60_beach.png`; the round 6 dithered band on the foresail is gone: `shots/critic7/zoom120_brig_crop_sail.png` |
| Grey nights | **HIT** | The night basin is a flat pale sky-blue ambient sheet brighter than the lanterns; the night is not moon and lanterns: `shots/critic7/night_phone.png`, `shots/critic7/night_phone_crop_basin.png`, `shots/critic7/contact_clear_22_crop_basin.png`. The town itself is cleared: `shots/critic7/night_phone_crop_town.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | The noon foam comet still streaks off the mole tip with a clipped white core, clear and fog: `shots/critic7/contact_clear_12_crop_mole.png`, `shots/critic7/contact_fog_12_crop_mole.png`. The plane itself is cleared: banded gradient, chop, shadows: `shots/critic7/hero_phone.png` |
| Hard water-to-beach line | **HIT** (new) | The water mesh ends in a stair-stepped polygon edge against the sand with a dark stroke offset from it: `shots/critic7/zoom60_beach_crop_shore.png`, `shots/critic7/zoom120_brig_crop_shoreline.png`, `shots/critic7/zoom60_beach.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms vary in lean and rotation: `shots/critic7/zoom60_beach.png`; bushes vary in size: `shots/critic7/hero_phone_crop_hill.png` |
| Fog as one colour | **HIT** | 17:30 fog is one grey-lilac veil with a blank near-water field and the far town sharpest; 12:00 is an opaque sheet: `shots/critic7/fog_phone_crop_near_water.png`, `shots/critic7/fog_phone_crop_town.png`, `shots/critic7/contact_fog_12.png` |
| Sky without a sun | clear | Sun disc with halo at 12.4°: `shots/critic7/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | **HIT** (new, marginal) | Bushes are flat-shaded icospheres with visible facets, not sculpted volumes: `shots/critic7/hero_phone_crop_hill.png`, `shots/critic7/sun_check_crop_foreground.png`. No text labels; boulders are polyhedral rocks: `shots/critic7/hero_phone_crop_mole.png` |
| Recognisable low-poly asset kit | clear (marginal) | The town is dense and tinted per house, but the same three or four house masses repeat forty times: `shots/critic7/hero_phone_crop_town.png`, `shots/critic7/zoom300_crop_island.png` |

Six hits (flat lamp/rails/sand; beach grain; the pale-blue night basin; the noon comet; the stair-stepped
shoreline; one-colour fog; faceted bush primitives count within the six as a marginal hit). The round
fails automatically.

## Ranked issues (most damaging first)

1. **The night basin is a flat pale sky-blue sheet brighter than every lantern; the brig is a black cut-out.** `shots/critic7/night_phone.png`, `shots/critic7/night_phone_crop_basin.png`, `shots/critic7/night_phone_crop_brig.png`, `shots/critic7/contact_clear_22_crop_basin.png`. Fix: night water near `#111C3C`, a narrow moon path, lantern streaks, a moon rim on sails and rigging; the foam collar must go dark at night too.
2. **The shoreline is a hard stair-stepped mesh edge between water and sand.** `shots/critic7/zoom60_beach_crop_shore.png`, `shots/critic7/zoom120_brig_crop_shoreline.png`. Fix: extend the water plane under the beach and fade it with a depth/alpha shoreline; remove the offset dark stroke.
3. **The foam collar is a milky haze band with no lace edge and no foam at bow or mole; the noon comet and confetti remain.** `shots/critic7/hero_phone_crop_beach.png`, `shots/critic7/zoom60_beach_crop_foam.png`, `shots/critic7/hero_phone_crop_brig.png`, `shots/critic7/contact_clear_12_crop_mole.png`, `shots/critic7/contact_clear_12.png`. Fix: a painted collar with a crisp outer lace, a narrow bright band and a soft inner fade; bow and mole foam sprites; delete the comet and the noon confetti.
4. **Fog is one colour with inverted depth; noon fog is an opaque sheet.** `shots/critic7/fog_phone_crop_near_water.png`, `shots/critic7/fog_phone_crop_town.png`, `shots/critic7/contact_fog_12.png`. Fix: density rising with camera distance, per-layer blue-grey shift (R4), near chop kept crisp, lower albedo at noon.
5. **The sky is a monotone warm-grey haze; the sun-check glitter clips and floods the harbour; a pale ledge intersects the near slope.** `shots/critic7/sun_check_crop_sky.png`, `shots/critic7/sun_check_crop_glitter.png`, `shots/critic7/sun_check_crop_foreground.png`. Fix: painted sky with a blue zenith, rose belt and clouds; hold the glitter under white; no cards through terrain.
6. **The hillside still has contour lines and the bushes are faceted icospheres.** `shots/critic7/hero_phone_crop_hill.png`, `shots/critic7/landscape_crop_hill.png`, `shots/critic7/sun_check_crop_foreground.png`. Fix: delete the contour term, paint the hill as scrub, rock and sand masses, smooth two-tone bush volumes in clumps.
7. **Palm crowns are flat pale blades pinned beside the trunk, and fronds clip through a house.** `shots/critic7/zoom60_beach_crop_palm.png`, `shots/critic7/zoom120_brig_crop_palms.png`, `shots/critic7/zoom60_town_crop_palm.png`. Fix: fronds with a spine, droop and darker underside, crown seated on the trunk, placement that respects buildings.
8. **The beach is one flat peach tint with a single micro grain, no wet band, no debris.** `shots/critic7/zoom60_beach_crop_sand.png`, `shots/critic7/zoom60_beach.png`. Fix: macro dry/damp colour masses, a darker wet band, seaweed line, shells and driftwood.
9. **Lamp head is a faceted box; balcony rails are wire cages; the white-cross window decal persists.** `shots/critic7/zoom60_town_crop_lamp.png`, `shots/critic7/zoom60_town_crop_windows.png`, `shots/critic7/zoom60_town.png`. Fix: modelled lantern with glass, rails with thickness, drop the decal variant.
10. **Quay is a radial flagstone grid with stitch seams, a hard step to the hex apron and no wet band.** `shots/critic7/zoom60_town_crop_quay.png`, `shots/critic7/hero_phone_crop_dock.png`. Fix: irregular painted stones, continuous UVs, dark rounded wet band, blended apron.
11. **A balcony bracket floats inside a roof; roofs are paper-thin with no eaves.** `shots/critic7/zoom60_town_crop_roof.png`. Fix: clamp balcony parts to façades, add an eave overhang.
12. **A crate sits on the water at the beach edge.** `shots/critic7/zoom60_beach_crop_crate.png`. Fix: clamp props to land.
13. **No warm bounce in the 17:30 shade.** `shots/critic7/hero_phone_crop_town.png`, `shots/critic7/zoom60_town.png`. Fix: sky fill toward `#5B6FA6` and a ground-bounce term.
14. **No chimney smoke visible.** `shots/critic7/hero_phone_crop_town.png`. Fix: soft-particle plumes with drift.
15. **No aerial perspective on far water at 300 m; the same house masses repeat forty times.** `shots/critic7/zoom300_crop_top.png`, `shots/critic7/zoom300_crop_island.png`. Fix: a blue-grey distance shift, three or four more house silhouettes.

## Round 6 issues — status

| # | Round 6 issue | Status | Evidence |
|---|---|---|---|
| 1 | Water single-scale diagonal lattice at 300 m and in the hero's lower third; noon confetti and comet; glitter clips | **improved** | Lattice gone, banded gradient with painted brush chop: `shots/critic7/zoom300_crop_bottom.png`, `shots/critic7/hero_phone_crop_bottom.png`; comet, confetti and clipping remain: `shots/critic7/contact_clear_12_crop_mole.png`, `shots/critic7/contact_clear_12.png`, `shots/critic7/sun_check_crop_glitter.png` |
| 2 | Night basin a high-contrast silver churn brighter than the lanterns | **unchanged** (worse) | Now a flat pale sky-blue sheet, still brighter than the lanterns: `shots/critic7/night_phone_crop_basin.png`, `shots/critic7/contact_clear_22_crop_basin.png` |
| 3 | Fog one grey-blue tone, near water blank, far town sharpest, noon a white sheet | **unchanged** | `shots/critic7/fog_phone_crop_near_water.png`, `shots/critic7/fog_phone_crop_town.png`, `shots/critic7/contact_fog_12.png` |
| 4 | Sails flat quads with a dithered shadow band; pennant a textureless quad | **improved** | Panel seams, belly gradient, no dithered band, curved pennant with a seam: `shots/critic7/zoom120_brig_crop_sail.png`; still a flat cream tone with no cloth paint: same crop |
| 5 | Hull reflection a blocky, detached, nearest-upsampled patch; nothing else reflects | **not applicable** | Surface-broken reflections are no longer the bar; the reflection has been removed and no object reflects: `shots/critic7/hero_phone_crop_brig.png`, `shots/critic7/hero_phone_crop_dock.png`. Lantern streaks at night (R2) are still owed and logged under issue 1 |
| 6 | Sky a monotone warm-grey haze; a fog sheet intersects the near terrain | **unchanged** | `shots/critic7/sun_check_crop_sky.png`, `shots/critic7/sun_check_crop_foreground.png` |
| 7 | Hillside contour lines; outcrops flat blotches; no north cliff | **improved** (marginal) | Bushes now have volume and the north slope has rock and pool masses: `shots/critic7/zoom300_crop_island.png`; contour lines still drawn, bushes faceted, no cliff: `shots/critic7/hero_phone_crop_hill.png`, `shots/critic7/landscape_crop_hill.png` |
| 8 | Crates float on the basin beside the dock and off the beach | **improved** | Barrels and crates sit on the sand by the dock: `shots/critic7/hero_phone_crop_dock.png`; one crate still on the water at the beach: `shots/critic7/zoom60_beach_crop_crate.png` |
| 9 | Quay a regular flagstone grid with stitch lines, hard step, no wet band | **unchanged** | `shots/critic7/zoom60_town_crop_quay.png` |
| 10 | Lamp head a faceted box; balcony rails cages; white-cross decal | **unchanged** | `shots/critic7/zoom60_town_crop_lamp.png`, `shots/critic7/zoom60_town_crop_windows.png`, `shots/critic7/zoom60_town.png` |
| 11 | Night windows near-uniform white-cream | **fixed** | Amber-varied windows in temperature and intensity, dark alleys, lantern pools: `shots/critic7/night_phone_crop_town.png` |
| 12 | 17:30 shade neutral grey with no warm bounce | **improved** (marginal) | Shaded façades carry a faint blue tint: `shots/critic7/zoom60_town.png`; still no warm bounce on sand or wall bases: `shots/critic7/hero_phone_crop_town.png` |
| 13 | Beach uniform grain with pink blotches, no debris; circular ripple decals by the dock | **improved** (marginal) | Ripple decals gone: `shots/critic7/hero_phone_crop_dock.png`; grain, flat tint and lack of debris unchanged: `shots/critic7/zoom60_beach_crop_sand.png` |
| 14 | Roofs paper-thin with no eaves | **unchanged** | `shots/critic7/zoom60_town_crop_roof.png` |
| 15 | Chimney smoke barely visible; scrub sprite dots | **improved** (marginal) / smoke worse | Scrub is now blob volumes: `shots/critic7/hero_phone_crop_hill.png`; no smoke visible at all: `shots/critic7/hero_phone_crop_town.png` |

Fixed 1, improved 7 (four marginal), unchanged 6 (one worse), not applicable 1. Of the four categories
that carried the automatic fail in round 6 (flat surfaces, tiling, comet, one-colour fog) none cleared,
and two new hits arrived with the new water: the stair-stepped shoreline and the pale-blue night basin.

## Budget lines (from `shots/critic7/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 156 | 1,473,603 | 41.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 156 | 1,029,355 | 41.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 109 | 1,449,457 | 41.3 | not measured |
| zoom120_brig (high, desktop) | 0 | 1 | 146 | 1,473,193 | 41.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 113 | 1,455,669 | 41.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 156 | 1,473,603 | 41.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 156 | 1,473,603 | 41.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 156 | 1,473,603 | 41.3 | not measured |
| landscape (high, phone-landscape, 1×) | 0 | 1 | 156 | 1,473,603 | 41.3 | not measured |
| sun_check (high, 1×, pitch 14 yaw 135 zoom 300) | 0 | 1 | 156 | 1,473,603 | 41.3 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not
supported` (environment). Triangles at high quality rose from 1.31 M to 1.47 M with the frond and bush
meshes and now sit 26 k under the limit.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** a modelled lantern and rails with thickness; eaves; irregular wet-banded quay stones; a beach with macro variation, wet band and debris; a painted hillside without contour lines; smooth two-tone bush volumes; fronds with spine and underside.
- **Light (5.5):** a near-black night basin with a moon path and lantern streaks; a moon rim on the brig; warm bounce in the 17:30 shade; a glitter path that does not clip.
- **Atmosphere (4.5):** a painted sky with blue zenith, rose belt and clouds; fog with distance-driven density and per-layer blue shift; lower noon fog albedo; aerial perspective on far water.
- **Water (6.0):** a crisp lace-edged foam collar; bow and mole foam; a soft alpha shoreline instead of a mesh edge; no comet or confetti; dark night water.
- **Scale and motion (6.5):** props clamped to land; vegetation that does not clip buildings; a seated palm crown; visible smoke; a motion capture.
- **Composition (7.0):** a horizon band; a painted hill; a night thumbnail owned by the lanterns; fog cells with depth.
- **Programmer art (3.5):** clear all six hits: lamp/rails/sand; beach grain; pale-blue night; the comet; the stair-stepped shoreline; one-colour fog; and the faceted bush primitives.

## Verdict

**FAIL.** Lowest line: programmer-art checklist (3.5, six hits, two of them new), then atmosphere
(4.5) and light (5.5); only budget and errors (8.5) clears the bar. The direction change helped in the
right places: the basin is finally a banded turquoise-to-cobalt painting with no lattice, the town's
tiles, plaster and tints sit close to R1, the 1.7× brig reads at Sea of Conquest scale, the night town
is close to R2, and at 300 m and in landscape the island now looks like a Sea of Conquest map tile
instead of a tech demo. It also broke things: the new water plane ends in a stair-stepped edge against
the sand, the foam collar is a milky haze rather than painted lace, and the night basin, the frame R2
is about, is a floodlit pale-blue pool. Against Sea of Conquest the daytime hero at phone size reads as
a good indie take on the same idea; up close the lamp boxes, wire cages, contour lines, flat sand and
faceted bushes give it away, and the night, the fog and any frame with sky are still not in the
conversation. Scores moved from 6.5/6.5/5.0/5.5/6.5/6.5/8.5/4.5 in round 6 to
6.5/5.5/4.5/6.0/6.5/7.0/8.5/3.5: water and composition gained, light and atmosphere lost to the night
and the fog, and the programmer-art count went up. The direction is right; the execution is one more
full pass on water edges, night and fog away from being judged on art rather than on defects.
