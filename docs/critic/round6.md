# Critic round 6 (final) — Ocean look test

Judged against LOOK.md R1–R5 and the hero vista, independently of rounds 1–5. Build under
judgement: preview at http://127.0.0.1:5174/ (HEAD `d31cca2`, "Round 6 builder pass: reflections ship,
distance-dominated fog with height gradient, more outcrops, iron lamp caps, darker rigging, wet
boulders") on 2026-09-04. All ten shots were taken this round, in the required order, `--frames 4`
throughout, sixteen PNGs under `shots/critic6/` plus thirty-eight native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled where the source was 1×). Every frame and crop cited below
was opened and looked at; no round 1–5 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52
  still never reaches the horizon.

Scale: 10 = indistinguishable from Sea of Conquest / Dredge / the reference photograph;
8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 6.5

Real gains this round. The roof tiles are individual half-rounds in uneven rows with whitened and
darker replacements, the chimneys are plastered stacks with brick caps, plaster carries cracks and
rain staining (`shots/critic6/zoom60_town_crop_roof.png`, `shots/critic6/zoom60_town.png`). The rigging
is finally rope-dark instead of orange plastic (`shots/critic6/zoom60_brig_crop_deck.png`), the dock is
real planks on visible pilings (`shots/critic6/hero_phone_crop_dock.png`), the mole boulders show a
darker wet base (`shots/critic6/hero_phone_crop_mole.png`) and the lamp caps are dark iron
(`shots/critic6/zoom60_town_crop_lamp.png`). What still is not photographic: the sails are flat cream
quads with hairline seam stripes and a speckled green-grey band across the foresail that reads as
dithered shadow acne along the mast shadow (`shots/critic6/zoom60_brig_crop_sail.png`); the pennant is
a textureless red-orange quad (`shots/critic6/zoom60_brig.png`); the lamp head is still a faceted box on
a stick, only darker; the balconies are unshaded wire cages on slabs and a white-cross window decal has
returned on one house (`shots/critic6/zoom60_town_crop_windows.png`, `shots/critic6/zoom60_town_crop_roof.png`);
the quay is a regular radial flagstone grid with visible stitch lines where the bands meet and a hard
straight step to the hex cobble apron, no wet band anywhere (`shots/critic6/zoom60_town_crop_quay.png`,
`shots/critic6/hero_phone_crop_east_shore.png`); roofs are still paper-thin with no eave or under-eave
shadow (`shots/critic6/zoom60_town_crop_roof.png`); the sand is one uniform micro-ripple grain with pink
blotches and no debris (`shots/critic6/zoom60_beach_crop_shore.png`); the hillside still has the pale
contour lines drawn on it and the new outcrops are flat grey-green blotches rather than rock
(`shots/critic6/hero_phone_crop_hill.png`, `shots/critic6/zoom300_crop_island.png`); the yard is a pale
unshaded cylinder that blows to cream (`shots/critic6/zoom60_brig_crop_deck.png`). To reach 8.5: sail
cloth with weave, panel seams and belly, no shadow band; a cloth flag; a modelled lantern; rails with
thickness; irregular wet-banded quay stones and a blended apron; eaves; sculpted rock and volumetric
scrub; sand macro variation and debris.

### 2. Light — 6.5

The 17:30 hero light is still the project's best asset: long shadows from hill, tower and lighthouse
stretch four to five times object height across the basin, soften with distance and darken the water
as a less specular band (`shots/critic6/hero_phone.png`, `shots/critic6/hero_phone_crop_hill.png`,
`shots/critic6/zoom60_town_crop_quay.png`). Sun-facing walls sit near `#F4B77C`; the sun check verifies
a disc at the right elevation (sun y = 0.215, 12.4°) with a soft halo
(`shots/critic6/sun_check_crop_sky.png`). Noon reads as noon (`shots/critic6/contact_clear_12.png`). But
the night has regressed: the moon light is now a high-contrast silver-white churn over the whole
basin with dark cloud-shaped holes, brighter than the lantern pools and nothing like R2's narrow moon
path (`shots/critic6/night_phone_crop_basin.png`, `shots/critic6/contact_clear_22_crop_basin.png`,
`shots/critic6/night_phone.png`); the windows are near-uniform white-cream rectangles rather than varied
amber (`shots/critic6/night_phone_crop_town.png`). The lantern pools, stern-lantern streak and lit
lighthouse remain good (`shots/critic6/night_phone_crop_brig.png`, `shots/critic6/night_phone_crop_mole.png`).
The 17:30 shade is neutral grey rather than violet and there is still no warm bounce on shaded sand or
wall bases (`shots/critic6/hero_phone_crop_east_shore.png`, `shots/critic6/zoom60_town_crop_roof.png`); the
sun-check glitter path still clips to white and bleeds onto the harbour and shore
(`shots/critic6/sun_check_crop_glitter.png`). To reach 8.5: a roughness-driven moon path with the rest
of the basin near `#111C3C`, amber-varied windows, violet sky fill with a ground-bounce term, and an
exposure that holds the glitter path.

### 3. Atmosphere — 5.0

Unchanged in structure. The sky is one warm-grey haze gradient from an ochre horizon band to a taupe
top of frame, with no blue zenith, no rose belt, no clouds and no visible scattering
(`shots/critic6/sun_check_crop_sky.png`, `shots/critic6/sun_check.png`). The near terrain in the sun check
is still a dark mud slope with a hard-edged pale fog sheet intersecting it top-left and grey haze
blobs sitting on the ground (`shots/critic6/sun_check_crop_foreground.png`). The fog now has a height
term (the brig at sea level fades more than the town up the slope), but the result is still one
grey-blue tone: in the fog hero the near water at the bottom of the frame is a featureless grey field
while the far town at the top is the sharpest object in the shot
(`shots/critic6/fog_phone_crop_near_water.png`, `shots/critic6/fog_phone_crop_town.png`,
`shots/critic6/fog_phone_crop_brig.png`, `shots/critic6/contact_fog_175_crop_near.png`); at noon the fog
is an opaque white sheet with the foam comet showing through it
(`shots/critic6/contact_fog_12.png`, `shots/critic6/contact_fog_12_crop_mole.png`). The 22:00 fog with
lantern halos is still the only cell R3/R4 would recognise (`shots/critic6/contact_fog_22_crop_mole.png`).
Aerial perspective on the far water at 300 m is a faint blue-grey shift (`shots/critic6/zoom300_crop_top.png`).
Bloom is restrained everywhere except the sun-check glitter. To reach 8.5: a scattering sky with blue
zenith and rose belt; fog density rising with camera distance so the near water keeps its chop and each
farther layer goes bluer and flatter (R4); lower albedo at noon; no fog cards intersecting terrain.

### 4. Water — 5.5

Better than round 5 in three places: there is now a visible mid-scale chop with two-tone colour across
the basin, the hull casts a reflection, and there are small white foam flecks at the bow and stern
waterline (`shots/critic6/zoom60_brig.png`, `shots/critic6/hero_phone_crop_reflection.png`). The shallows
show a sand-tinted seabed and the wet-sand line is soft (`shots/critic6/zoom60_beach_crop_shore.png`). But
the reflection is a blocky, nearest-upsampled, jagged-edged tan patch that sits detached from the hull
and reads as a rendering bug rather than a surface-broken reflection
(`shots/critic6/zoom60_brig_crop_reflection.png`, `shots/critic6/hero_phone_crop_reflection.png`); nothing
else reflects (no quay, lighthouse or sail) at any zoom. The detail normal is still one diagonal streak
scale over the whole field: the hero's lower 40% and the whole 300 m frame are a regular diagonal
lattice with no swell hierarchy (`shots/critic6/hero_phone_crop_bottom.png`, `shots/critic6/zoom300_crop_bottom.png`,
`shots/critic6/zoom300_crop_top.png`). Noon glitter is still bokeh confetti over the whole basin and the
white foam comet still streaks off the mole tip (`shots/critic6/contact_clear_12_crop_glitter.png`). The
night basin is a silver churn (`shots/critic6/night_phone_crop_basin.png`) and the sun-check glitter clips
(`shots/critic6/sun_check_crop_glitter.png`). No foam at the mole. To reach 8.5: swell plus chop octaves
with a distance fade; a filtered, properly registered reflection broken by the normal; Jacobian crest
foam and depth foam at mole and shore in white; a concentrated specular lobe; delete the comet.

### 5. Scale and motion — 6.5

Scale agrees: three-storey houses, a ~30 m brig with deck guns and grates, a T-head dock now with real
plank rows on pilings, lamp posts, barrels, rope coil, moored dinghies, gulls in every daylight frame
(`shots/critic6/hero_phone_crop_town.png`, `shots/critic6/hero_phone_crop_dock.png`,
`shots/critic6/zoom60_brig_crop_deck.png`, `shots/critic6/hero_phone.png`). Palms have varied lean and
rotation and cast their own shadows (`shots/critic6/zoom60_beach_crop_palm.png`). The pennant is
wind-shaped (`shots/critic6/zoom60_brig.png`). Still wrong: three crates float on the basin beside the
dock and one floats off the beach (`shots/critic6/hero_phone_crop_dock.png`,
`shots/critic6/zoom60_beach_crop_crate.png`); the sails are rigid flat quads with no belly
(`shots/critic6/zoom60_brig_crop_sail.png`); hillside scrub is flat sprite dots
(`shots/critic6/hero_phone_crop_hill.png`); chimney smoke is barely visible flat wisps
(`shots/critic6/hero_phone_crop_town.png`); there are odd circular ripple decals on the sand beside the
dock (`shots/critic6/hero_phone_crop_dock.png`). Palm sway, sail, flag, smoke and gull motion remain
unverifiable from stills. To reach 8.5: wind-filled sail geometry, props clamped to land, smoke with
volume and drift, scrub with volume, and a short motion capture.

### 6. Composition and squint test — 6.5

The hero framing holds: warm town in the upper third, brig on the lower-left third line, lighthouse on
the lower-right, long shadows drawing the diagonal, and the chop now gives the lower third some texture
where round 5 had a blank plane (`shots/critic6/hero_phone.png`). At thumbnail the clear contact cells
read as noon, golden hour and night (`shots/critic6/contact.png`). Weaknesses: there is still no sky or
horizon in the hero or the landscape frame, so no water/land/sky depth stack
(`shots/critic6/landscape.png`); the hill behind the town still reads as a map with contour lines
(`shots/critic6/hero_phone_crop_hill.png`, `shots/critic6/landscape_crop_hill.png`); the night thumbnail is
now dominated by a white churning basin instead of the lantern-lit quay
(`shots/critic6/contact_clear_22.png`); the three fog cells are grey sheets at thumbnail
(`shots/critic6/contact.png`). To reach 8.5: a horizon band in the hero, a modelled hillside and cliff,
a night basin that stays dark outside the moon path, and fog with depth layers.

### 7. Budget and errors — 8.5

All sixteen JSON logs report zero console errors. Draw calls 105–156 (limit 300); triangles 0.90 M at
medium and 1.28–1.31 M at high (limit 1.5 M); texture memory 45.3 MB (limit 256). Device fps is
honestly "not measured". The single warning on every shot is the environment's
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`. Draw calls rose from 112 to
156 with the reflection pass and triangles from 1.21 M to 1.31 M, both still inside budget. The
unmeasured device fps is the nit that keeps this at 8.5.

### 8. Programmer-art checklist — 4.5 (automatic fail)

Four hits; see the checklist below.

## Programmer-art checklist

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Sails flat cream quads with a dithered shadow band, pennant a textureless quad, lamp head a faceted box, balcony rails unshaded bar cages, yard an unshaded cylinder: `shots/critic6/zoom60_brig_crop_sail.png`, `shots/critic6/zoom60_brig.png`, `shots/critic6/zoom60_town_crop_lamp.png`, `shots/critic6/zoom60_town_crop_windows.png`, `shots/critic6/zoom60_brig_crop_deck.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** | Water is a regular diagonal lattice at 300 m and in the hero's lower third; beach is a uniform micro-ripple grain: `shots/critic6/zoom300_crop_bottom.png`, `shots/critic6/zoom300_crop_top.png`, `shots/critic6/hero_phone_crop_bottom.png`, `shots/critic6/zoom60_beach_crop_shore.png` |
| Shadow acne or missing shadows | clear (marginal) | Shadows present, long and distance-graded: `shots/critic6/hero_phone.png`, `shots/critic6/zoom60_town_crop_quay.png`. The speckled band on the foresail reads as dithered acne along the mast shadow and is logged under flat surfaces: `shots/critic6/zoom60_brig_crop_sail.png` |
| Grey nights | clear | Black slope, navy basin outside the moon sheet, lantern and window pools: `shots/critic6/night_phone.png`, `shots/critic6/night_phone_crop_town.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | The noon foam comet still streaks white off the mole tip in clear and fog: `shots/critic6/contact_clear_12_crop_glitter.png`, `shots/critic6/contact_fog_12_crop_mole.png`. The plane itself is cleared: chop, shallows, shadows and a reflection: `shots/critic6/zoom60_brig.png` |
| Hard water-to-beach line | clear | Soft wet band and wobbly line: `shots/critic6/zoom60_beach_crop_shore.png`; sand apron round the quay: `shots/critic6/hero_phone_crop_east_shore.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Varied lean and rotation, per-palm shadows: `shots/critic6/zoom60_beach_crop_palm.png` |
| Fog as one colour | **HIT** | 17:30 fog is one grey-blue tone with a blank near-water field and the far town sharpest; 12:00 is a white sheet: `shots/critic6/fog_phone_crop_near_water.png`, `shots/critic6/fog_phone_crop_town.png`, `shots/critic6/contact_fog_175_crop_near.png`, `shots/critic6/contact_fog_12.png`. 22:00 halos are the only depth cue: `shots/critic6/contact_fog_22_crop_mole.png` |
| Sky without a sun | clear | Sun disc with halo at 12.4° over a warm horizon band: `shots/critic6/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | clear | Boulders are polyhedral rocks, dock has pilings, no beam quad, no text: `shots/critic6/hero_phone_crop_mole.png`, `shots/critic6/hero_phone_crop_dock.png`, `shots/critic6/contact_fog_22_crop_mole.png`. The lamp-head box is logged under flat surfaces |
| Recognisable low-poly asset kit | clear (marginal) | Per-building tint, balcony and shutter variants, alpha palms: `shots/critic6/hero_phone_crop_town.png` |

Four hits (flat sails/flag/lamp/rails/yard; water lattice and beach grain; the noon foam comet;
one-colour fog). The same four categories as round 5. The round fails automatically.

## Ranked issues (most damaging first)

1. **Water is still a single-scale diagonal lattice in the hero's lower third and at 300 m; noon glitter is confetti with the foam comet; the sun-check glitter clips.** `shots/critic6/hero_phone_crop_bottom.png`, `shots/critic6/zoom300_crop_bottom.png`, `shots/critic6/zoom300_crop_top.png`, `shots/critic6/contact_clear_12_crop_glitter.png`, `shots/critic6/sun_check_crop_glitter.png`. Fix: swell plus chop octaves with a distance fade on the detail normal, a concentrated specular lobe held short of clipping, delete the comet.
2. **Night basin regressed: the moon light is a high-contrast silver churn over the whole basin, brighter than the lanterns.** `shots/critic6/night_phone_crop_basin.png`, `shots/critic6/contact_clear_22_crop_basin.png`, `shots/critic6/night_phone.png`. Fix: narrow the moon path by roughness and the sky-reflection term, keep the rest of the basin near `#111C3C`.
3. **Fog is one grey-blue tone; the near water is a blank field while the far town is sharpest; noon fog is a white sheet.** `shots/critic6/fog_phone_crop_near_water.png`, `shots/critic6/fog_phone_crop_town.png`, `shots/critic6/contact_fog_12.png`. Fix: density rising with camera distance, per-layer blue-grey shift (R4), lower albedo at noon, near water keeps its chop.
4. **Sails are flat quads with a dithered shadow band; the pennant is a textureless quad.** `shots/critic6/zoom60_brig_crop_sail.png`, `shots/critic6/zoom60_brig.png`, `shots/critic6/hero_phone_crop_brig.png`. Fix: belly geometry, weave and panel seams, shadow bias on the cloth, cloth flag.
5. **The hull reflection is a blocky, nearest-upsampled, detached patch that reads as a bug.** `shots/critic6/zoom60_brig_crop_reflection.png`, `shots/critic6/hero_phone_crop_reflection.png`. Fix: bilinear/blurred reflection sample, correct plane registration, break it by the normal, and reflect the quay and lighthouse too.
6. **The sky is a monotone warm-grey haze; a fog sheet intersects the near terrain in the sun check.** `shots/critic6/sun_check_crop_sky.png`, `shots/critic6/sun_check_crop_foreground.png`. Fix: scattering sky with blue zenith and rose belt; fog volume that does not clip geometry.
7. **The hillside still has contour lines drawn on it; outcrops are flat grey-green blotches; no north cliff.** `shots/critic6/hero_phone_crop_hill.png`, `shots/critic6/zoom300_crop_island.png`, `shots/critic6/landscape_crop_hill.png`. Fix: remove the contour term, sculpt outcrop and cliff meshes with a rock normal, scrub with volume.
8. **Crates float on the water beside the dock and off the beach.** `shots/critic6/hero_phone_crop_dock.png`, `shots/critic6/zoom60_beach_crop_crate.png`. Fix: clamp props to land.
9. **Quay is a regular flagstone grid with stitch lines between radial bands, a hard step to the hex apron and no wet tide band.** `shots/critic6/zoom60_town_crop_quay.png`, `shots/critic6/hero_phone_crop_east_shore.png`, `shots/critic6/hero_phone_crop_mole.png`. Fix: irregular stones, continuous UVs, dark rounded wet band, blended apron.
10. **Lamp head is a faceted box; balcony rails are unshaded cages; a white-cross window decal has returned.** `shots/critic6/zoom60_town_crop_lamp.png`, `shots/critic6/zoom60_town_crop_windows.png`, `shots/critic6/zoom60_town_crop_roof.png`. Fix: modelled lantern with glass, rails with thickness, remove the decal variant.
11. **Night windows are near-uniform white-cream, not varied amber.** `shots/critic6/night_phone_crop_town.png`. Fix: per-window temperature and intensity toward `#F6C97A`.
12. **17:30 shade is neutral grey with no warm bounce.** `shots/critic6/hero_phone_crop_east_shore.png`, `shots/critic6/zoom60_town_crop_roof.png`. Fix: sky fill toward `#5B6FA6`, ground-bounce term.
13. **Beach is one uniform grain with pink blotches and no debris; circular ripple decals sit on the sand by the dock.** `shots/critic6/zoom60_beach_crop_shore.png`, `shots/critic6/hero_phone_crop_dock.png`. Fix: macro dry/damp blend, seaweed line, remove or redesign the decals.
14. **Roofs are paper-thin with no eaves or under-eave shadow.** `shots/critic6/zoom60_town_crop_roof.png`. Fix: eave overhang geometry.
15. **Chimney smoke is barely visible flat wisps; scrub is sprite dots.** `shots/critic6/hero_phone_crop_town.png`, `shots/critic6/hero_phone_crop_hill.png`. Fix: soft-particle plumes with drift; scrub with volume.

## Round 5 issues — status

| # | Round 5 issue | Status | Evidence |
|---|---|---|---|
| 1 | Water single-scale streaked plane, no reflections, no foam, confetti and comet | **improved** | Chop and a hull reflection exist, bow foam flecks: `shots/critic6/zoom60_brig.png`; lattice, confetti and comet remain: `shots/critic6/zoom300_crop_bottom.png`, `shots/critic6/contact_clear_12_crop_glitter.png` |
| 2 | Fog one tone, inverted depth at 17:30, white sheet at 12:00 | **improved** (marginal) | Height term fades the brig more than before: `shots/critic6/fog_phone_crop_brig.png`; near water still blank, town still sharpest, noon still a sheet: `shots/critic6/fog_phone_crop_near_water.png`, `shots/critic6/contact_fog_12.png` |
| 3 | Sails flat with light-leak smear; pennant a textureless quad | **unchanged** | `shots/critic6/zoom60_brig_crop_sail.png`, `shots/critic6/zoom60_brig.png` |
| 4 | Hillside bare dune with contour lines; no rock, no cliff | **improved** | More grey outcrop patches on the north slope: `shots/critic6/zoom300_crop_island.png`; contour lines still drawn, outcrops flat, no cliff: `shots/critic6/hero_phone_crop_hill.png`, `shots/critic6/landscape_crop_hill.png` |
| 5 | Sky monotone haze; glitter clips; fog sheet intersects terrain | **unchanged** | `shots/critic6/sun_check_crop_sky.png`, `shots/critic6/sun_check_crop_glitter.png`, `shots/critic6/sun_check_crop_foreground.png` |
| 6 | Lamp heads teal boxes, balconies cages, rigging orange | **improved** | Rigging rope-dark: `shots/critic6/zoom60_brig_crop_deck.png`; lamp cap dark iron but still a box: `shots/critic6/zoom60_town_crop_lamp.png`; cages unchanged: `shots/critic6/zoom60_town_crop_windows.png` |
| 7 | Quay and mole no wet band, hard step, boulders dry | **improved** | Boulders show a wet dark base: `shots/critic6/hero_phone_crop_mole.png`; quay grid, hard step and missing wet band unchanged: `shots/critic6/zoom60_town_crop_quay.png` |
| 8 | Crates float beside dock and beach; dock a blurred slab | **improved** | Dock is real planks on pilings: `shots/critic6/hero_phone_crop_dock.png`; crates still afloat: same crop, `shots/critic6/zoom60_beach_crop_crate.png` |
| 9 | Moon light a mottled blanket, not a path | **unchanged** (worse) | Now a high-contrast silver churn over the whole basin: `shots/critic6/night_phone_crop_basin.png`, `shots/critic6/contact_clear_22_crop_basin.png` |
| 10 | 17:30 shade green-grey, no bounce | **unchanged** | Neutral grey, no bounce: `shots/critic6/hero_phone_crop_east_shore.png` |
| 11 | Hull no wale stripe or waterline band | **unchanged** | `shots/critic6/hero_phone_crop_brig.png`, `shots/critic6/zoom60_brig_crop_reflection.png` |
| 12 | Beach uniform grain, pink blotches, no debris | **unchanged** | `shots/critic6/zoom60_beach_crop_shore.png` |
| 13 | Roofs paper-thin, no eaves | **unchanged** | `shots/critic6/zoom60_town_crop_roof.png` |
| 14 | Chimney smoke flat smudges | **unchanged** | `shots/critic6/hero_phone_crop_town.png` |
| 15 | Hero lower 40% empty; no sky in hero or landscape | **improved** | Chop texture and reflection in the lower third: `shots/critic6/hero_phone.png`; still no sky: `shots/critic6/landscape.png` |

Fixed 0, improved 7, unchanged 8 (one of them worse). Of the four categories that carried the
automatic fail last round (flat surfaces, tiling, comet, one-colour fog), none cleared.

## Budget lines (from `shots/critic6/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 156 | 1,307,287 | 45.3 | not measured |
| sun_check (high, 1×, pitch 14 yaw 135 zoom 300) | 0 | 1 | 156 | 1,307,287 | 45.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 156 | 900,975 | 45.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 105 | 1,281,797 | 45.3 | not measured |
| zoom60_brig (high, desktop) | 0 | 1 | 143 | 1,306,871 | 45.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 111 | 1,285,817 | 45.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 156 | 1,307,287 | 45.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 156 | 1,307,287 | 45.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 156 | 1,307,287 | 45.3 | not measured |
| landscape (high, phone-landscape, 1×) | 0 | 1 | 156 | 1,307,287 | 45.3 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile
extension not supported` (environment).

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** cloth sails and flag with weave, seams and belly; a modelled lantern and rails with thickness; irregular wet-banded quay stones with a blended apron; eaves; sculpted rock on the slope; sand macro variation and debris.
- **Light (6.5):** a night basin that is dark outside a narrow roughness-driven moon path; amber-varied windows; violet sky fill and warm ground bounce in the 17:30 shade; a glitter path that does not clip.
- **Atmosphere (5.0):** a scattering sky with a blue zenith and rose belt; fog whose density rises with camera distance and shifts each layer bluer (R4) instead of one tone; noon fog with lower albedo; no fog cards intersecting terrain.
- **Water (5.5):** swell plus chop octaves with a distance fade so nothing tiles at 300 m; a filtered, registered reflection of hull, quay and lighthouse broken by the normal; white crest and shore/mole foam; no confetti and no comet.
- **Scale and motion (6.5):** props clamped to land; wind-filled sail geometry; smoke and scrub with volume; a motion capture proving palms, sails, flags, smoke and gulls move.
- **Composition (6.5):** a horizon band in the hero and landscape framing; a modelled hillside and cliff instead of a contour map; a night thumbnail owned by the lanterns, not the moon sheet; fog cells with depth layers.
- **Programmer art (4.5):** clear all four hits: flat sails/flag/lamp/rails/yard; water lattice and beach grain; the noon foam comet; one-colour fog.

## Verdict

**FAIL.** Lowest line: programmer-art checklist (4.5, the same four hits as round 5), then atmosphere
(5.0) and water (5.5); only budget and errors (8.5) clears the bar. This final round moved the right
small things (rope rigging, tiled roofs, a dock on pilings, wet boulders, iron lamp caps, a first
hull reflection, chop in the basin) and broke one big thing (the night basin is now a silver churn).
Against Sea of Conquest and the Symi photograph the 17:30 hero reads as a competent indie diorama
under very good light; the night, the fog and any frame that includes sky or open water still read as
a tech demo. Since round 1 the scores moved from 4.5/5.0/4.0/3.5/5.0/4.5/8.5/3.0 to
6.5/6.5/5.0/5.5/6.5/6.5/8.5/4.5: every art line gained one to two points, the light and the town
carried most of it, and the sea, the sky and the fog, the three surfaces a pirate world is made of,
never got past programmer-art territory. Phase 1 does not pass; the list above is exactly what is
missing and why.
