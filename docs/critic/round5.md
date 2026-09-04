# Critic round 5 — Ocean look test

Judged against LOOK.md R1–R5 and the hero vista, independently of rounds 1–4. Build under
judgement: preview at http://127.0.0.1:5174/ (HEAD `881d535`, "Thinner fog bank and haze", on top of
`7cdfc14` "Round 5 builder pass: calm sea, subtle broken terrace walls, no beam, lit pennant, lighter
fog, cooler bounce, palm translucency") on 2026-09-04. All ten planned shots were taken this round,
in the required order, `--frames 3` throughout, sixteen PNGs under `shots/critic5/` plus forty
native-resolution crops (`*_crop_*.png`, nearest-neighbour upscaled where the source was 1×). Every
frame and crop cited below was opened and looked at; no round 1–4 screenshot is used as evidence.

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

### 1. Materials — 6.0

Better than last round on the town: lime-wash plaster carries cracks, rain streaks under sills and
ochre staining at the base, roof tiles have a normal that reads under the low sun and a few
whitened patches, chimneys are plastered stacks, and windows are now dark reveals with grey glass
and pale frames rather than white-cross decals (`shots/critic5/zoom60_town.png`,
`shots/critic5/zoom60_town_crop_windows.png`, `shots/critic5/zoom60_town_crop_roof.png`). Palms
are green with frond translucency and varied lean (`shots/critic5/zoom60_beach.png`). The
lighthouse has a stained plaster body and a proper lantern-room railing
(`shots/critic5/hero_phone_crop_mole.png`). What still is not photographic: the sails are flat
cream quads with faint seam stripes and the green-grey light-leak smear is still on the foresail;
the pennant is a lit but textureless red-orange quad; the hull has no wale stripe or waterline
band; the rigging is a bright orange line that reads as plastic
(`shots/critic5/zoom60_brig_crop_sail.png`, `shots/critic5/hero_phone_crop_brig.png`). Balconies
are still unshaded wire cages on stone slabs, the lamp-post head is a flat teal box on a stick, the
quay is a regular flagstone grid with no wet band meeting a hexagonal cobble apron at a hard
straight step (`shots/critic5/zoom60_town_crop_windows.png`, `shots/critic5/zoom60_town_crop_quay.png`).
The dock deck is a blobby low-resolution plank texture and three crates float on the water beside
it (`shots/critic5/hero_phone_crop_dock.png`). Roofs are paper-thin sheets with no eave overhang or
under-eave shadow (`shots/critic5/zoom60_town_crop_roof.png`). The hillside is a smooth tan-olive
dune with faint pale contour lines and blurred tan smudges where the "broken terrace walls" sit;
there is no rock, no outcrop and no north cliff anywhere on the island
(`shots/critic5/hero_phone_crop_hill.png`, `shots/critic5/landscape_crop_hill.png`,
`shots/critic5/zoom300_crop_island.png`). The beach is one uniform micro-ripple grain with pink
blotches and no debris (`shots/critic5/zoom60_beach.png`, `shots/critic5/zoom60_beach_crop_shore.png`).
The mole boulders are pale and dry to the waterline (`shots/critic5/hero_phone_crop_mole.png`).
To reach 8.5: sail cloth with weave, panel seams and belly shading, no leak; a cloth flag; hull
wale and waterline; rope-coloured rigging; modelled lamp heads and rails that catch light; wet
tide band on quay, mole and boulders; irregular flagstones and a blended apron; rock outcrops and
volumetric scrub on the slope; eaves; sand macro variation and debris.

### 2. Light — 7.0

The hero light is now the strongest thing in the project. Long soft shadows from the hill, the
tower and the lighthouse stretch four to five times object height across the basin, soften with
distance (the tower shadow is a soft blur on the hill, the lamp-post shadow crisp on the quay) and
the water takes them as a darker, less specular band that gives the basin real depth
(`shots/critic5/hero_phone.png`, `shots/critic5/hero_phone_crop_hill.png`,
`shots/critic5/zoom60_town_crop_quay.png`). Sun-facing walls are orange-cream toward `#F4B77C`; shaded
walls now carry a cool grey-green cast instead of last round's neutral tan
(`shots/critic5/zoom60_town_crop_roof.png`, right-hand wall), though it is green-grey rather than
the violet of R1/R5 and there is still no visible warm bounce on shaded sand or wall bases. Noon
now reads as noon: bright, white light, blue water, short shadows (`shots/critic5/contact_clear_12.png`).
The sun check verifies a sun disc at the right elevation (sun vector y = 0.215, 12.4°) with a soft
halo and a warm horizon band (`shots/critic5/sun_check_crop_sky.png`). Night remains good: navy-black
basin, warm lamp-post pools on the quay with visible posts, varied amber windows, a true-black
slope, the stern lantern throwing a warm broken streak, the lighthouse lantern-room lit over a
soft pool with no beam quad (`shots/critic5/night_phone.png`, `shots/critic5/night_phone_crop_town.png`,
`shots/critic5/night_phone_crop_brig.png`, `shots/critic5/night_phone_crop_mole.png`). Still wrong:
the moon light is a mottled silver blanket over the whole basin rather than a narrow path
(`shots/critic5/night_phone_crop_basin.png`); the sun-check glitter path blows out to pure white and
bleeds onto the near shore (`shots/critic5/sun_check_crop_glitter.png`); the 17:30 sky is a single
warm-grey haze with no blue zenith. To reach 8.5: violet sky fill with a ground-bounce term, a
roughness-driven moon path, an exposure that holds the glitter path short of clipping, and a
scattering sky.

### 3. Atmosphere — 5.0

For the first time a frame contains sky, and it has a sun disc, a warm cream-to-ochre horizon band
and a slight blue-grey shift on the far water and far island (`shots/critic5/sun_check_crop_sky.png`,
`shots/critic5/zoom300_crop_island.png`, `shots/critic5/landscape.png`). But the sky is one monotone
warm-grey haze gradient from horizon to top of frame, with no blue zenith, no rose belt opposite,
no clouds and no visible scattering; it reads as fog colour, not a 17:30 sky
(`shots/critic5/sun_check.png`). The near terrain in the sun check is a dark olive-brown mud slope with
a hard-edged pale fog sheet intersecting it at the bottom left and grey haze blobs sitting on the
ground (`shots/critic5/sun_check_crop_foreground.png`). Fog is thinner than last round but structurally
identical: at 17:30 it is a single grey-blue tone, the far town at the top of the frame is the
sharpest object in the shot while the near water at the bottom is a featureless grey field, so
depth is still inverted (`shots/critic5/fog_phone.png`, `shots/critic5/fog_phone_crop_town.png`,
`shots/critic5/fog_phone_crop_near_water.png`, `shots/critic5/contact_fog_175_crop_near.png`); at noon
the fog is an opaque white sheet with the foam comet showing through it
(`shots/critic5/contact_fog_12.png`, `shots/critic5/contact_fog_12_crop_mole.png`). The 22:00 fog with
lantern halos is still the only cell R3/R4 would recognise (`shots/critic5/contact_fog_22_crop_mole.png`).
Bloom is restrained everywhere except the sun-check glitter. To reach 8.5: a scattering sky with a
blue zenith and rose belt, fog density that increases with camera distance and shifts each layer
blue-grey, lower fog albedo at noon, no fog cards intersecting terrain, and a hero framing that
includes a sky band.

### 4. Water — 5.0

The tan-pink foam stipple is gone. The basin is now a calm blue-teal with a soft directional
ripple, shallows show a sand-tinted seabed at the beaches and the mole, the wet-sand line is soft
and wobbly, and the long shadows lie on the surface convincingly (`shots/critic5/hero_phone.png`,
`shots/critic5/hero_phone_crop_water.png`, `shots/critic5/zoom60_beach_crop_shore.png`). That is a real
improvement in the hero. But what replaced the stipple is a single fine diagonal-streak normal at
one scale over the whole field: there is no swell, no chop hierarchy, and at 300 m and in the
sun-check horizon the far water is a regular diagonal lattice to the edge of the frame
(`shots/critic5/hero_phone_crop_bottom.png`, `shots/critic5/zoom300_crop_top.png`,
`shots/critic5/sun_check_crop_sky.png`). Nothing reflects in daylight: no hull, quay, lighthouse or
sail reflection at any zoom (`shots/critic5/zoom60_brig.png`, `shots/critic5/hero_phone_crop_mole.png`).
There is no bow foam, no foam at the mole, and only faint white flecks at the beach
(`shots/critic5/zoom60_brig.png`, `shots/critic5/zoom60_beach_crop_shore.png`). Noon glitter is still
bokeh confetti over the whole basin and the white foam comet still streaks off the mole tip
(`shots/critic5/contact_clear_12_crop_glitter.png`). The sun-check glitter path is a clipped white
smear rather than a field of sparkles (`shots/critic5/sun_check_crop_glitter.png`). The night stern
lantern streak remains the only surface-broken reflection (`shots/critic5/night_phone_crop_brig.png`).
To reach 8.5: swell plus chop with a second octave and a distance fade on the detail normal;
Jacobian foam on crests and depth foam at shore and mole, white; planar or SSR reflections broken
by the normal; a specular lobe that concentrates glitter without clipping; delete the comet.

### 5. Scale and motion — 6.0

Scale agrees: three-storey houses, a ~30 m brig with deck guns, boats and a stern lantern, a
T-head dock, lamp posts, barrels and a rope coil on the quay, moored dinghies, gulls in every
daylight frame (`shots/critic5/hero_phone_crop_town.png`, `shots/critic5/hero_phone_crop_brig.png`,
`shots/critic5/hero_phone_crop_east_shore.png`). The landscape preset now frames the whole island with
the brig and the lighthouse in shot (`shots/critic5/landscape.png`). Palms have varied lean and
rotation and cast their own shadows (`shots/critic5/zoom60_beach.png`). The pennant now has a wind
shape and is lit (`shots/critic5/zoom60_brig_crop_sail.png`). Chimney smoke is present as faint grey
wisps over the roofs, less blotchy than last round but still flat smudges
(`shots/critic5/hero_phone_crop_town.png`). Still wrong: the sails are rigid flat quads with no belly;
three crates float on the basin beside the dock and one still floats off the beach
(`shots/critic5/hero_phone_crop_dock.png`, `shots/critic5/zoom60_beach_crop_crate.png`); hillside scrub is
tiny sprite dots (`shots/critic5/hero_phone_crop_hill.png`); the dock deck reads as a blurred
low-resolution slab rather than planks on pilings (`shots/critic5/hero_phone_crop_dock.png`). Palm
sway, sail, flag, smoke and gull motion remain unverifiable from stills. To reach 8.5: wind-filled
sail geometry, props clamped to land, smoke with volume and drift, scrub with volume, a dock with
real planks, and a short motion capture.

### 6. Composition and squint test — 6.5

The hero is the best frame the project has produced: the warm town fills the upper third, the brig
sits on the lower-left third line and the lighthouse on the lower-right, the long shadows draw a
diagonal from the town down through the brig, and the calm basin lets the sails and lit walls hold
the value hierarchy (`shots/critic5/hero_phone.png`). At thumbnail the clear contact cells now read
as noon, golden hour and night rather than three discs (`shots/critic5/contact.png`). Weaknesses:
the lower 40% of the hero is still a featureless streaked plane with nothing for the eye to do; the
hill behind the town is a blank tan dune with faint contour lines that still read as a map
(`shots/critic5/hero_phone_crop_hill.png`); there is still no sky or horizon in the hero, so no
water/land/sky depth stack; the landscape frame is an island on a flat blue disc with no horizon
(`shots/critic5/landscape.png`); the three fog cells are grey sheets at thumbnail
(`shots/critic5/contact.png`). To reach 8.5: a horizon band in the hero, a modelled hillside and cliff,
harbour-mouth swell and a glitter path in the lower third, and fog with depth layers.

### 7. Budget and errors — 8.5

All sixteen JSON logs report zero console errors. Draw calls 82–112 (limit 300); triangles 0.80 M at
medium and 1.19–1.21 M at high (limit 1.5 M); texture memory 45.3 MB (limit 256). Device fps is
honestly "not measured". The single warning on every shot is the environment's
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`. The unmeasured device fps
is the nit that keeps this at 8.5.

### 8. Programmer-art checklist — 4.5 (automatic fail)

Four hits; see the checklist below.

## Programmer-art checklist

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Sails flat cream quads with the light-leak smear, pennant a textureless flat quad, lamp head a flat teal box, balcony rails unshaded bar cages, dock deck a blurred slab: `shots/critic5/zoom60_brig_crop_sail.png`, `shots/critic5/zoom60_town_crop_quay.png`, `shots/critic5/zoom60_town_crop_windows.png`, `shots/critic5/hero_phone_crop_dock.png`. Windows are cleared this round: `shots/critic5/zoom60_town_crop_windows.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** | Far water is a regular diagonal lattice at 300 m and at the sun-check horizon; beach is a uniform micro-ripple grain: `shots/critic5/zoom300_crop_top.png`, `shots/critic5/sun_check_crop_sky.png`, `shots/critic5/zoom60_beach_crop_shore.png` |
| Shadow acne or missing shadows | clear | Shadows present, long and distance-graded on hill, quay and water: `shots/critic5/hero_phone.png`, `shots/critic5/hero_phone_crop_hill.png`, `shots/critic5/zoom60_town_crop_quay.png` |
| Grey nights | clear | Navy-black basin, lantern and window pools, black slope: `shots/critic5/night_phone.png`, `shots/critic5/night_phone_crop_town.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | The noon foam comet still streaks white off the mole tip in clear and fog: `shots/critic5/contact_clear_12_crop_glitter.png`, `shots/critic5/contact_fog_12_crop_mole.png`. The stipple is cleared; the basin is close to a uniform streaked plane but carries shallows, shadows and a soft normal, so that half is marginal: `shots/critic5/hero_phone_crop_bottom.png` |
| Hard water-to-beach line | clear | Soft wet band and wobbly line: `shots/critic5/zoom60_beach_crop_shore.png`; sand apron round the quay: `shots/critic5/hero_phone_crop_east_shore.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Varied lean and rotation, per-palm shadows: `shots/critic5/zoom60_beach.png` |
| Fog as one colour | **HIT** | Warned last round; unchanged in structure. 17:30 fog is one grey-blue tone with inverted depth (far town sharpest, near water blank), 12:00 is a white sheet: `shots/critic5/fog_phone.png`, `shots/critic5/fog_phone_crop_near_water.png`, `shots/critic5/fog_phone_crop_town.png`, `shots/critic5/contact_fog_12.png`. 22:00 halos are the only depth cue: `shots/critic5/contact_fog_22_crop_mole.png` |
| Sky without a sun | clear (verified this round) | Sun disc with halo at 12.4° over a warm horizon band: `shots/critic5/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | clear | The fog-night beam quad is gone; only a lantern halo remains: `shots/critic5/contact_fog_22_crop_mole.png`. Boulders are polyhedral rocks: `shots/critic5/hero_phone_crop_mole.png`. The lamp-head box is logged under flat surfaces. No text labels |
| Recognisable low-poly asset kit | clear (marginal) | Per-building tint, balcony and shutter variants, alpha palms: `shots/critic5/hero_phone_crop_town.png` |

Four hits (flat sails/flag/lamp/rails/dock; far-water and beach tiling; the noon foam comet; one-colour
fog). Two categories cleared since round 4 (placeholder primitives, sky without a sun) and one
entered (fog as one colour, as warned). The round fails automatically.

## Ranked issues (most damaging first)

1. **Water is a single-scale streaked plane: no swell, no chop hierarchy, a diagonal lattice at 300 m and the horizon, no daylight reflections, no bow or mole foam; noon glitter is confetti with the foam comet.** `shots/critic5/hero_phone_crop_bottom.png`, `shots/critic5/zoom300_crop_top.png`, `shots/critic5/zoom60_brig.png`, `shots/critic5/contact_clear_12_crop_glitter.png`. Fix: swell plus chop octaves with distance fade, Jacobian and depth foam in white, planar/SSR reflections broken by the normal, a concentrated specular lobe, delete the comet.
2. **Fog is one grey-blue tone with inverted depth at 17:30 and a white sheet at 12:00.** `shots/critic5/fog_phone.png`, `shots/critic5/fog_phone_crop_near_water.png`, `shots/critic5/fog_phone_crop_town.png`, `shots/critic5/contact_fog_12.png`. Fix: density rising with camera distance, per-layer blue-grey shift (R4), lower albedo at noon, near water keeps its chop detail.
3. **Sails are flat quads with the light-leak smear; the pennant is a textureless quad.** `shots/critic5/zoom60_brig_crop_sail.png`, `shots/critic5/hero_phone_crop_brig.png`. Fix: belly geometry, weave and panel seams, two-sided lighting without the leak, cloth flag.
4. **The hillside is a bare tan dune with faint contour lines and smudges; no rock, no north cliff.** `shots/critic5/hero_phone_crop_hill.png`, `shots/critic5/landscape_crop_hill.png`, `shots/critic5/zoom300_crop_island.png`. Fix: remove the contour lines, sculpt outcrops and a cliff mesh, scrub with volume.
5. **The sky is a monotone warm-grey haze: no blue zenith, no rose belt, no clouds; the glitter path clips to white; a fog sheet intersects the near terrain.** `shots/critic5/sun_check.png`, `shots/critic5/sun_check_crop_sky.png`, `shots/critic5/sun_check_crop_glitter.png`, `shots/critic5/sun_check_crop_foreground.png`. Fix: scattering sky, exposure that holds the glitter, fog volume that does not clip geometry.
6. **Lamp heads are teal boxes, balconies unshaded bar cages, rigging bright orange.** `shots/critic5/zoom60_town_crop_quay.png`, `shots/critic5/zoom60_town_crop_windows.png`, `shots/critic5/zoom60_brig_crop_sail.png`. Fix: modelled lantern with glass and cap, rails with thickness that catch light, rope-coloured rigging.
7. **Quay and mole have no wet tide band; regular flagstone grid meets a hex cobble apron at a hard straight step; boulders dry to the waterline.** `shots/critic5/zoom60_town_crop_quay.png`, `shots/critic5/hero_phone_crop_mole.png`. Fix: dark wet band with rounded edge, irregular stones, blended apron.
8. **Crates float on the water beside the dock and off the beach; the dock deck is a blurred slab.** `shots/critic5/hero_phone_crop_dock.png`, `shots/critic5/zoom60_beach_crop_crate.png`. Fix: clamp props to land, real plank geometry on pilings.
9. **Moon light is a mottled blanket over the whole basin rather than a path.** `shots/critic5/night_phone_crop_basin.png`, `shots/critic5/night_phone.png`. Fix: narrow the moon path by roughness, darken outside it.
10. **17:30 shade is green-grey, not violet, and there is no warm bounce on shaded sand or wall bases.** `shots/critic5/zoom60_town_crop_roof.png`, `shots/critic5/hero_phone_crop_town.png`. Fix: sky fill toward `#5B6FA6`, ground-bounce term.
11. **Hull has no wale stripe or waterline band.** `shots/critic5/hero_phone_crop_brig.png`. Fix: pale wale and a dark waterline on the hull texture.
12. **Beach is one uniform grain with pink blotches and no debris.** `shots/critic5/zoom60_beach_crop_shore.png`, `shots/critic5/zoom60_beach.png`. Fix: macro dry/damp blend, seaweed line, footprints.
13. **Roofs are paper-thin sheets with no eaves or under-eave shadow.** `shots/critic5/zoom60_town_crop_roof.png`. Fix: eave overhang geometry.
14. **Chimney smoke is faint flat smudges.** `shots/critic5/hero_phone_crop_town.png`. Fix: soft-particle plumes with depth fade and drift.
15. **The hero's lower 40% is an empty streaked plane and there is no sky in the hero or landscape.** `shots/critic5/hero_phone.png`, `shots/critic5/landscape.png`. Fix: harbour-mouth swell and glitter in the lower third; a framing that admits a horizon band.

## Round 4 issues — status

| # | Round 4 issue | Status | Evidence |
|---|---|---|---|
| 1 | Foam uniform tan stipple, no swell, no reflections, noon confetti and comet | **improved** | Stipple gone, basin calm and shadowed: `shots/critic5/hero_phone_crop_water.png`; no swell, no daylight reflection, confetti and comet unchanged: `shots/critic5/zoom60_brig.png`, `shots/critic5/contact_clear_12_crop_glitter.png` |
| 2 | Hillside contour-line map, no cliff | **improved** | Contour lines fainter, terraces reduced to smudges: `shots/critic5/hero_phone_crop_hill.png`; still a bare dune with no rock or cliff: `shots/critic5/landscape_crop_hill.png` |
| 3 | Fog-night lighthouse beam a flat trapezoid with a hot blob | **fixed** | Lantern halo only, no quad: `shots/critic5/contact_fog_22_crop_mole.png`, `shots/critic5/contact_fog_22.png` |
| 4 | Sails flat with light-leak smear; pennant a flat unlit quad | **improved** | Pennant is lit and wind-shaped: `shots/critic5/zoom60_brig_crop_sail.png`; sails and the smear unchanged: same crop |
| 5 | Fog one tone, inverted depth at 17:30, opaque sheet at 12:00 | **unchanged** | Thinner but same structure: `shots/critic5/fog_phone.png`, `shots/critic5/fog_phone_crop_near_water.png`, `shots/critic5/contact_fog_12.png` |
| 6 | No sky, sun disc, horizon or aerial perspective; far-water lattice | **improved** | Sun disc and horizon band verified: `shots/critic5/sun_check_crop_sky.png`; faint blue shift on the far island: `shots/critic5/zoom300_crop_island.png`; sky monotone, lattice unchanged: `shots/critic5/zoom300_crop_top.png` |
| 7 | Windows flat decals, doors black, rails bar cages, lamp heads boxes | **improved** | Windows are reveals with glass and frames: `shots/critic5/zoom60_town_crop_windows.png`; rails and lamp box unchanged: `shots/critic5/zoom60_town_crop_quay.png` |
| 8 | 17:30 shade neutral tan-grey, no sky fill or bounce | **improved** | Shaded walls carry a cool cast: `shots/critic5/zoom60_town_crop_roof.png`; green-grey not violet, no bounce: `shots/critic5/hero_phone_crop_town.png` |
| 9 | Quay and mole flat flagstone grid, no wet band, hard step to apron | **unchanged** | `shots/critic5/zoom60_town_crop_quay.png`, `shots/critic5/hero_phone_crop_mole.png` |
| 10 | Moon glitter blankets the basin as uniform speckle | **improved** | Now mottled with dark patches instead of even speckle, still the whole basin: `shots/critic5/night_phone_crop_basin.png` |
| 11 | Noon reads as dim overcast dusk | **fixed** | Bright white light, blue water, short shadows: `shots/critic5/contact_clear_12.png` |
| 12 | Chimney smoke flat white blotches | **improved** | Fainter grey wisps, still flat: `shots/critic5/hero_phone_crop_town.png` |
| 13 | Beach uniform grain with pink blotches; palms grey-blue | **improved** | Palms green with translucency: `shots/critic5/zoom60_beach.png`; sand unchanged: `shots/critic5/zoom60_beach_crop_shore.png` |
| 14 | A crate floats off the beach | **unchanged** | Still afloat, plus three by the dock: `shots/critic5/zoom60_beach_crop_crate.png`, `shots/critic5/hero_phone_crop_dock.png` |
| 15 | Hero lower 40% empty; landscape framing and motion unverified | **improved** | Landscape verified with brig and lighthouse in frame: `shots/critic5/landscape.png`; lower third still empty: `shots/critic5/hero_phone_crop_bottom.png`; motion unverified |

Fixed 2, improved 10, unchanged 3. Of the four issues that carried the automatic fail last round
(water, hill, beam, sails), the beam is fixed, the water and hill are better but still fail their
categories, and the sails did not move.

## Budget lines (from `shots/critic5/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| sun_check (high, 1×, pitch 14 yaw 135 zoom 300) | 0 | 1 | 112 | 1,209,415 | 45.3 | not measured |
| landscape (high, phone-landscape, 1×) | 0 | 1 | 112 | 1,209,415 | 45.3 | not measured |
| hero_phone (high, 2×) | 0 | 1 | 112 | 1,209,415 | 45.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 112 | 803,103 | 45.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 82 | 1,194,657 | 45.3 | not measured |
| zoom60_brig (high, desktop) | 0 | 1 | 105 | 1,209,011 | 45.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 89 | 1,198,679 | 45.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 112 | 1,209,415 | 45.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 112 | 1,209,415 | 45.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 112 | 1,209,415 | 45.3 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile
extension not supported` (environment).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (4.5, four hits: flat sails, flag, lamp heads,
rails and dock; far-water and beach tiling; the noon foam comet; one-colour fog), then atmosphere
(5.0) and water (5.0); only budget and errors (8.5) clears the bar. This was the most honest round so
far: the calm sea and the long distance-graded shadows turn the hero into a frame with real depth
and a value hierarchy, the noon cell finally looks like noon, the fog-night beam is gone, the sun
disc exists, the windows are openings and the palms are palms. Against Sea of Conquest and the
Symi photograph it now reads as a competent indie diorama under good light. But the surfaces that
own a pirate world still are not there: the sea is a streaked plane that reflects nothing and
tiles to the horizon, the sails are paper with a leak in them, the island is a sand dune with a map
drawn on it under a sky that is one shade of haze, and the fog is a sheet rather than a volume.
Round 6 has to be the water, the fog, the sails and the hill, in that order.
