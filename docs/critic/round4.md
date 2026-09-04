# Critic round 4 — Ocean look test

Judged against LOOK.md R1–R5 and the hero vista, independently of rounds 1–3. Build under
judgement: preview at http://127.0.0.1:5174/ (HEAD `2f856e8`, "Round 4 builder pass: shore apron,
painted terraces only, sparse glints, dimmer beam, haze, framing") on 2026-09-04, twelve frames
under `shots/critic4/` (all `--frames 3`) plus twenty native-resolution crops cut from them
(`*_crop_*.png`, nearest-neighbour upscaled where the source was a 1× frame). Every frame and crop
cited below was opened and looked at; no round 1–3 screenshot is used as evidence.

Provenance caveats: at shooting time the working tree carried uncommitted edits to
`src/terrain/Heightfield.ts` and `src/world/World.ts`, and a second session was editing
`src/world/World.ts` and running its own shoot (`shots/r3/landscape_dev`) concurrently, so the
served build may differ from `2f856e8`; this report judges what the preview served. The
concurrent shoot also shared SwiftShader CPU time; no score depends on render time.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2`, not the 390×844 @3 preset; 3× exceeds this environment's
  SwiftShader render time. No score depends on the missing DPR.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- The coordinator halted shooting after the tenth frame set (twelve PNGs). The planned
  `landscape` (phone-landscape preset) and `sun_check` (`--pitch 14 --yaw 135 --zoom 300`) shots
  were **not taken**. Consequently the sun disc, the 17:30 horizon gradient, the glitter path and
  the landscape framing are **unverified** this round, not passed and not failed.
- No round-4 frame contains sky: every frame is at the hero pitch of 52°, where the 60° vertical
  FOV never reaches the horizon.
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.

Scale: 10 = indistinguishable from Sea of Conquest / Dredge / the reference photograph;
8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 5.5

Real gains: chimneys are now plastered stacks with a lip instead of black boxes, and the roof
tiles carry lichen spotting and a normal that reads under the low sun
(`shots/critic4/zoom60_town_crop_windows.png`); the mole boulders are irregular polyhedral lumps
instead of textured spheres (`shots/critic4/hero_phone_crop_mole.png`); the beach has a wet
darkening band with a wobbly wet-sand line (`shots/critic4/zoom60_beach.png`); the quay now ends
in a sand apron rather than a hard paving edge (`shots/critic4/hero_phone_crop_east_shore.png`).
But the surfaces the brief names first are still not photographic: the sails are flat cream
quads with faint seam stripes, no weave, no cloth shading, and the green-grey light-leak smear is
still on the foresail (`shots/critic4/zoom60_brig_crop_sail.png`); the pennant is a uniform flat
red quad with no lighting at all (same crop); the hull has no wale stripe or waterline band
(`shots/critic4/hero_phone_crop_brig.png`); windows are still flat pale-blue squares with a
white cross or plain black rectangles on the shaded face, doors are black rectangles, balconies
are unshaded bar cages, and the lamp-post head is a flat black box on a stick
(`shots/critic4/zoom60_town_crop_windows.png`, `shots/critic4/zoom60_town_crop_quay.png`); the
quay is still a flat regular flagstone grid with no wet tide band and a hard straight step
where it meets the inner cobble apron (`shots/critic4/zoom60_town_crop_quay.png`); the hillside
is now a flat olive-to-tan gradient with pale contour lines painted on it, which reads as a
topographic map, not rock and scrub (`shots/critic4/hero_phone_crop_hill.png`,
`shots/critic4/zoom300_crop_island.png`); the beach is one uniform micro-ripple grain with pink
blotches and no debris, and the palms are a desaturated grey-blue
(`shots/critic4/zoom60_beach.png`). To reach 8.5: sail cloth with weave, panels and belly
shading; a lit cloth flag; hull wale and waterline; window reveals with glass and shutters;
modelled lamp heads; wet band on quay and mole; rock outcrops and scrub on the slope instead of
contour lines; sand macro variation and debris.

### 2. Light — 6.5

The night remains the best frame and improved again: a navy-black basin, warm lantern pools
with visible posts on the quay, varied amber windows, true darkness on the slope
(`shots/critic4/night_phone.png`, `shots/critic4/night_phone_crop_town.png`); the brig's stern
lantern now throws a warm broken streak across the chop, which is the first reflection of any
kind this project has shown (`shots/critic4/night_phone_crop_brig.png`); and in clear air the
lighthouse no longer lays a flat quad on the water, only a lit lantern room and a soft specular
pool beneath (`shots/critic4/night_phone_crop_mole.png`, `shots/critic4/contact_clear_22_crop_mole.png`).
The topsail shadow on the water is now soft-edged instead of a hard trapezoid
(`shots/critic4/zoom60_brig.png`, left of the ship). Shadow softness stays distance-graded: tower
shadow soft across the hill, lamp-post shadow crisp on the quay
(`shots/critic4/hero_phone_crop_hill.png`, `shots/critic4/zoom60_town_crop_quay.png`). Still
wrong: shaded walls and ground are a neutral tan-grey with no violet sky fill and no ground
bounce (`shots/critic4/zoom60_town.png`, right-hand shaded façade;
`shots/critic4/hero_phone_crop_town.png`); the fog-night beam is still a flat trapezoid with a
hot blob under it (`shots/critic4/contact_fog_22_crop_beam.png`); moon glitter still blankets the
whole basin as a uniform grey speckle instead of a narrow path (`shots/critic4/night_phone.png`);
and the noon cell is dim and desaturated, reading closer to overcast dusk than 5800 K noon
(`shots/critic4/contact_clear_12.png`). To reach 8.5: violet sky-lit shade with a bounce term, a
volumetric or at least faded soft-edged beam in fog, a roughness-driven moon path, and a noon
exposure that reads as noon.

### 3. Atmosphere — 4.5

The only movement is a faint desaturation on the far side of the island at 300 m
(`shots/critic4/zoom300_crop_island.png`), which is the first hint of aerial perspective. Nothing
else changed: no frame this round contains sky, a sun disc, a horizon gradient or clouds (every
frame is at pitch 52; the planned sun check was not taken, so the sun disc stays unverified);
the fog is still one grey-blue tone with a 2-D cloud-blob pattern and its depth is still
inverted, the far town at the top of the frame being the sharpest thing in the shot while the
near water at the bottom is a featureless grey (`shots/critic4/fog_phone.png`,
`shots/critic4/fog_phone_crop_town.png`, `shots/critic4/fog_phone_crop_near_water.png`); the noon
fog is an opaque white sheet with a ghost town and dark tree smudges
(`shots/critic4/contact_fog_12.png`); lantern halos at 22:00 in fog remain the one thing R3/R4
would recognise (`shots/critic4/contact_fog_22.png`). To reach 8.5: fog density that increases
with distance from the camera, per-layer blue-grey shift, lower albedo at noon, a scattering sky
with a sun disc and a hero framing that includes a sky band.

### 4. Water — 4.5

The wind direction holds: elongated whitecap streaks run consistently across every frame, the
shallows show seabed through green-gold water at the mole and beach, and the beach now has a
wet band (`shots/critic4/hero_phone.png`, `shots/critic4/zoom60_beach.png`). The stern-lantern
streak at night is a real, surface-broken reflection (`shots/critic4/night_phone_crop_brig.png`).
Everything else is as it was. The foam is a uniform tan-pink stipple spread at one density over
the whole basin, with no swell shape, crest or trough beneath it, so at hero zoom it still reads
as sand smeared on the water (`shots/critic4/hero_phone_crop_water.png`,
`shots/critic4/hero_phone_crop_brig.png`). Nothing reflects in daylight: no hull, quay,
lighthouse or sail reflection (`shots/critic4/zoom60_brig.png`, `shots/critic4/hero_phone_crop_mole.png`).
Noon glitter is still bokeh confetti over the whole field with a white foam comet streaking off
the mole tip (`shots/critic4/contact_clear_12_crop_glitter.png`, `shots/critic4/contact_clear_12.png`).
The far water at 300 m is a regular diagonal cross-hatch lattice, a tiling normal at full
strength (`shots/critic4/zoom300_crop_top.png`). The 17:30 glitter is a handful of sparse
sparkles in the bottom right (`shots/critic4/zoom60_brig.png`, `shots/critic4/hero_phone.png`).
To reach 8.5: swell and chop displacement with Jacobian foam only on crests and along the
shore, white not sand-coloured, fading with distance; planar or SSR reflections broken by the
normal; a specular lobe that concentrates glitter; a distance fade and second octave on the
detail normal.

### 5. Scale and motion — 6.0

Scale agrees: three-storey houses, a ~30 m brig with deck guns and a stern lantern, a T-head
dock with a boat alongside, lamp posts, barrels and crates on the quay, moored dinghies in the
basin, gulls in every frame (`shots/critic4/hero_phone_crop_town.png`,
`shots/critic4/hero_phone_crop_brig.png`, `shots/critic4/night_phone_crop_town.png`). Palms have
varied lean and feathered fronds (`shots/critic4/zoom60_beach.png`). Chimney smoke is now
visible at hero zoom, but as flat whitish blotches painted over the roofs and walls rather than
plumes (`shots/critic4/hero_phone_crop_east_shore.png`, `shots/critic4/zoom60_town.png` top
left). Still wrong: the sails are rigid flat quads with no belly and the pennant a flat quad
(`shots/critic4/zoom60_brig_crop_sail.png`); a black crate still floats in open water off the
beach (`shots/critic4/zoom60_beach.png`, top right); hillside scrub is tiny sprite dots
(`shots/critic4/hero_phone_crop_hill.png`). The landscape preset was not shot this round, so its
framing is unverified. Palm sway, sail, flag, smoke and gull motion remain unverifiable from
stills. To reach 8.5: wind-filled sail geometry, a cloth flag, props kept on land, smoke as
plumes with volume, scrub with volume, and a short motion capture.

### 6. Composition and squint test — 6.0

The hero framing changed and the anchors hold: the warm town fills the upper third, the brig
sits on the lower-left third and the lighthouse on the lower-right third, and the eye does go
to the port (`shots/critic4/hero_phone.png`). The east-shore sawtooth is gone; the shoreline is a
smooth sand apron all the way round (`shots/critic4/hero_phone_crop_east_shore.png`,
`shots/critic4/zoom300_crop_island.png`). The hill is quieter than last round's zig-zag terraces,
but the pale contour lines are still the highest-contrast graphic in the top of the frame and
they read as a map (`shots/critic4/hero_phone_crop_hill.png`). The bottom 40% of the hero is empty
stippled water with nothing to look at; there is still no sky or horizon, so no water/land/sky
depth stack; and at thumbnail the contact cells still read as a tan disc, a teal disc and a
white-speckled disc (`shots/critic4/contact.png`). To reach 8.5: a calm modelled hillside, a
horizon band in the hero, a foam distribution that leaves the basin mostly dark so sails and
walls hold the value hierarchy, and something for the lower third to do (harbour mouth swell,
the glitter path, a second boat).

### 7. Budget and errors — 8.5

All eighteen JSON logs report zero console errors. Draw calls 82–114 (limit 300), down from
235 last round; triangles 0.81 M at medium and 1.20–1.22 M at high (limit 1.5 M); texture memory
45.3 MB (limit 256). Device fps is honestly "not measured". The single warning on every shot is
the environment's `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`.
The unmeasured device fps is the nit that keeps this at 8.5.

### 8. Programmer-art checklist — 4.0 (automatic fail)

Four hits; see the checklist below.

## Programmer-art checklist

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Sails flat cream quads with a light-leak smear, pennant a flat unlit red quad, windows flat white-cross decals or black rectangles, doors black rectangles, balcony rails unshaded bars, lamp head a black box, hillside a flat gradient with painted contour lines: `shots/critic4/zoom60_brig_crop_sail.png`, `shots/critic4/zoom60_town_crop_windows.png`, `shots/critic4/zoom60_town_crop_quay.png`, `shots/critic4/hero_phone_crop_hill.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** | Far water is a regular diagonal cross-hatch lattice at 300 m; beach a uniform micro-ripple grain: `shots/critic4/zoom300_crop_top.png`, `shots/critic4/zoom60_beach.png`. The east-shore stretch is cleared: `shots/critic4/hero_phone_crop_east_shore.png` |
| Shadow acne or missing shadows | clear | Shadows present and distance-graded; sail shadow on water now soft: `shots/critic4/zoom60_town_crop_quay.png`, `shots/critic4/hero_phone_crop_hill.png`, `shots/critic4/zoom60_brig.png` |
| Grey nights | clear | Navy-black basin with warm lantern and window pools and a stern-lantern streak: `shots/critic4/night_phone.png`, `shots/critic4/night_phone_crop_brig.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | Foam is a uniform stipple over the whole basin at every zoom; noon still has a white foam comet off the mole tip; 300 m water is a uniform speckled blue plane: `shots/critic4/hero_phone_crop_water.png`, `shots/critic4/contact_clear_12_crop_glitter.png`, `shots/critic4/zoom300.png` |
| Hard water-to-beach line | clear | Wet band and wobbly wet-sand line at 60 m, sand apron round the quay: `shots/critic4/zoom60_beach.png`, `shots/critic4/hero_phone_crop_east_shore.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms are alpha cards with varied lean and rotation: `shots/critic4/zoom60_beach.png` |
| Fog as one colour | **marginal, not counted** | 22:00 fog has halos: `shots/critic4/contact_fog_22.png`; but 17:30 fog is a single grey-blue tone with inverted depth and 12:00 is a white sheet: `shots/critic4/fog_phone_crop_near_water.png`, `shots/critic4/contact_fog_12.png`. One more round without a depth-graded colour shift and this becomes a hit |
| Sky without a sun | unverified | No round-4 frame contains sky; the sun check was not taken. Not counted as a hit or a pass |
| Placeholder primitives or text labels | **HIT** | The fog-night lighthouse beam is a flat hard-edged translucent trapezoid laid over the water with a bright blob under it, larger than last round; the lamp-post head is a black box: `shots/critic4/contact_fog_22_crop_beam.png`, `shots/critic4/contact_fog_22.png`, `shots/critic4/zoom60_town_crop_quay.png`. Cleared in clear air: `shots/critic4/night_phone_crop_mole.png`; boulders cleared: `shots/critic4/hero_phone_crop_mole.png`. No text labels |
| Recognisable low-poly asset kit | clear (marginal) | Balcony/arch variants, per-building tint, alpha palms: `shots/critic4/hero_phone_crop_town.png`; the identical window decal on every opening is logged under flat surfaces |

Four hits (the same four categories as round 3; within them the sphere boulders, the
clear-night beam quad and the east-shore stretch are cleared, while the flag, the lamp head, the
contour-line hill and the fog-night beam are new or worse). The round fails automatically.

## Ranked issues (most damaging first)

1. **Foam is a uniform tan-pink stipple over the whole basin at every zoom; no swell shape; no daylight reflections; noon glitter is confetti with a foam comet.** `shots/critic4/hero_phone_crop_water.png`, `shots/critic4/hero_phone_crop_brig.png`, `shots/critic4/contact_clear_12_crop_glitter.png`, `shots/critic4/zoom300.png`. Fix: foam from the Jacobian on crests and from depth at the shore only, white, fading with distance; planar/SSR reflections broken by the normal; glitter from a roughness-driven specular lobe.
2. **The hillside is a flat olive-to-tan gradient with pale contour lines painted on it, reading as a topographic map; no north cliff.** `shots/critic4/hero_phone_crop_hill.png`, `shots/critic4/zoom300_crop_island.png`. Fix: drop the painted terraces entirely; sculpt rock outcrops, scrub clusters with volume and a real cliff mesh; let the roofs lead.
3. **The fog-night lighthouse beam is a flat hard-edged trapezoid quad with a bright blob beneath it, bigger than last round.** `shots/critic4/contact_fog_22_crop_beam.png`, `shots/critic4/contact_fog_22.png`. Fix: a cone volume with radial and range falloff and soft edges, scattered by the fog density; never a screen-space quad.
4. **Sails are flat quads with seam stripes and a light-leak smear; the pennant is a flat unlit red quad.** `shots/critic4/zoom60_brig_crop_sail.png`, `shots/critic4/hero_phone_crop_brig.png`. Fix: belly geometry with cloth weave and panel seams, two-sided lighting without leaks, a lit cloth flag.
5. **Fog is one grey-blue tone with inverted depth (far town sharp, near water blank) at 17:30 and an opaque white sheet at 12:00.** `shots/critic4/fog_phone.png`, `shots/critic4/fog_phone_crop_town.png`, `shots/critic4/fog_phone_crop_near_water.png`, `shots/critic4/contact_fog_12.png`. Fix: density increasing with camera distance, per-layer blue-grey shift (R4), lower albedo at noon.
6. **No sky, sun disc, horizon gradient or aerial perspective in any frame; far water is a cross-hatch lattice to the edge of the frame.** `shots/critic4/zoom300_crop_top.png`, `shots/critic4/hero_phone.png`. Fix: scattering sky with a sun disc, a hero framing that includes a sky band, blue shift and contrast loss with distance, distance fade and second octave on the detail normal.
7. **Windows are flat white-cross decals or black rectangles, doors black rectangles, balcony rails unshaded bar cages, lamp heads black boxes.** `shots/critic4/zoom60_town_crop_windows.png`, `shots/critic4/zoom60_town_crop_quay.png`. Fix: window reveals with glass reflection and shutter geometry, modelled doors, rails that catch light, a lantern head with glass and a cap.
8. **17:30 shade is neutral tan-grey with no sky fill or bounce.** `shots/critic4/zoom60_town.png`, `shots/critic4/hero_phone_crop_town.png`. Fix: violet sky-lit shade toward `#5B6FA6`, ground-bounce warming shaded sand and wall bases.
9. **Quay and mole are a flat regular flagstone grid with no wet tide band and a hard straight step to the cobble apron.** `shots/critic4/zoom60_town_crop_quay.png`, `shots/critic4/hero_phone_crop_mole.png`. Fix: dark wet band with rounded stone edge, irregular flagstone sizes, blended apron transition.
10. **Moon glitter blankets the whole basin as uniform speckle.** `shots/critic4/night_phone.png`. Fix: narrow the moon path by roughness; darken water outside it.
11. **Noon reads as dim overcast dusk rather than 5800 K noon.** `shots/critic4/contact_clear_12.png`. Fix: raise noon exposure and saturation; keep the -2 EV only relative to a correctly bright hero.
12. **Chimney smoke is flat whitish blotches painted over roofs and walls.** `shots/critic4/hero_phone_crop_east_shore.png`, `shots/critic4/zoom60_town.png`. Fix: soft-particle plumes with depth fade and wind drift.
13. **Beach sand is one uniform micro-ripple grain with pink blotches, no debris; palms are grey-blue.** `shots/critic4/zoom60_beach.png`. Fix: macro dry/damp blend, seaweed line, footprints; warm the frond albedo.
14. **A crate floats in open water off the beach.** `shots/critic4/zoom60_beach.png` (top right). Fix: clamp props to land.
15. **The hero's lower 40% is empty stippled water; landscape framing and motion unverified.** `shots/critic4/hero_phone.png`. Fix: give the harbour mouth swell and glitter something to do; ship a landscape frame and a short motion capture with the next round.

## Round 3 issues — status

| # | Round 3 issue | Status | Evidence |
|---|---|---|---|
| 1 | Foam uniform stipple, no swell, no reflections, noon confetti and comet | **unchanged** | Stipple and comet identical: `shots/critic4/hero_phone_crop_water.png`, `shots/critic4/contact_clear_12_crop_glitter.png`; the only reflection is the night stern lantern: `shots/critic4/night_phone_crop_brig.png` |
| 2 | Lighthouse beam a flat trapezoid quad with a hot blob (night and fog-night) | **improved** | Clear night now shows a lit lantern room and a soft pool, no quad: `shots/critic4/night_phone_crop_mole.png`, `shots/critic4/contact_clear_22_crop_mole.png`; fog-night quad remains and is larger: `shots/critic4/contact_fog_22_crop_beam.png` |
| 3 | Hillside stepped terrace corrugation with zig-zag edges, no cliff | **unchanged** | Zig-zag steps replaced by painted contour lines on a flat gradient, same severity, still no cliff: `shots/critic4/hero_phone_crop_hill.png`, `shots/critic4/zoom300_crop_island.png` |
| 4 | Sails flat with light leak, hard sail shadow on water, flag flat | **improved** | Sail shadow on water is soft: `shots/critic4/zoom60_brig.png`; sails, leak smear and flat flag unchanged: `shots/critic4/zoom60_brig_crop_sail.png` |
| 5 | Far water lattice; sky flat with no sun disc; no aerial perspective | **improved** | Faint desaturation on the far island: `shots/critic4/zoom300_crop_island.png`; lattice unchanged: `shots/critic4/zoom300_crop_top.png`; sky unverified (no sky in any frame, sun check not taken) |
| 6 | East shore hard sawtooth staircase with smeared texture | **fixed** | Smooth sand apron: `shots/critic4/hero_phone_crop_east_shore.png`, `shots/critic4/zoom300_crop_island.png` |
| 7 | Fog one tone, depth inverted at 17:30, opaque sheet at 12:00 | **unchanged** | `shots/critic4/fog_phone.png`, `shots/critic4/fog_phone_crop_town.png`, `shots/critic4/fog_phone_crop_near_water.png`, `shots/critic4/contact_fog_12.png` |
| 8 | Windows flat decals, doors black rectangles, rails bar cages, chimney caps black boxes | **improved** | Chimneys are plastered stacks with a lip: `shots/critic4/zoom60_town_crop_windows.png`; windows, doors and rails unchanged: same crop, `shots/critic4/zoom60_town_crop_quay.png` |
| 9 | 17:30 shade neutral, no sky fill or bounce | **unchanged** | `shots/critic4/zoom60_town.png`, `shots/critic4/hero_phone_crop_town.png` |
| 10 | Quay and mole flat slab, no wet band, hard paving-to-sand edge, sphere boulders | **improved** | Polyhedral boulders and a sand apron: `shots/critic4/hero_phone_crop_mole.png`, `shots/critic4/hero_phone_crop_east_shore.png`; no wet band and a hard cobble-to-flagstone step: `shots/critic4/zoom60_town_crop_quay.png` |
| 11 | Moon glitter blankets the basin | **unchanged** | `shots/critic4/night_phone.png` |
| 12 | Beach one uniform grain, no macro variation or debris | **improved** | Wet band and wobbly wet line: `shots/critic4/zoom60_beach.png`; grain still uniform, pink blotches, no debris: same frame |
| 13 | Barrels and crates floating off the beach | **improved** | Basin props now read as moored dinghies: `shots/critic4/hero_phone_crop_town.png`; one crate still afloat: `shots/critic4/zoom60_beach.png` (top right) |
| 14 | Landscape preset cuts out brig and lighthouse | **unverified** | Landscape shot not taken this round (shooting halted by the coordinator) |
| 15 | Chimney smoke barely visible; motion unverifiable | **improved** | Smoke now visible, as flat white blotches: `shots/critic4/hero_phone_crop_east_shore.png`; motion still unverified |

Fixed 1, improved 8, unchanged 5, unverified 1. Of the four issues that carried the automatic
fail (water, hill, beam, sails) only the beam moved, and only in clear air.

## Budget lines (from `shots/critic4/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 114 | 1,218,187 | 45.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 114 | 811,875 | 45.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 82 | 1,203,373 | 45.3 | not measured |
| zoom60_brig (high, desktop) | 0 | 1 | 107 | 1,217,783 | 45.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 89 | 1,207,395 | 45.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 114 | 1,218,187 | 45.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 114 | 1,218,187 | 45.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 114 | 1,218,187 | 45.3 | not measured |
| landscape | not taken | — | — | — | — | — |
| sun_check | not taken | — | — | — | — | — |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile
extension not supported` (environment).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (4.0, four hits: flat sails, flag, windows, rails,
lamp heads and a contour-line hill; the far-water lattice; a uniform foam stipple with a noon
foam comet; a flat-quad beam in fog-night), with atmosphere (4.5) and water (4.5) next; only
budget and errors (8.5) clears the bar. This round did some honest small work: the east shore
is finally smooth, the boulders are rocks, the chimneys are chimneys, the sail shadow is soft,
the clear-night lighthouse is a lantern room over a pool instead of a polygon, the stern lantern
puts the first real reflection on the water, and draw calls halved. But the three surfaces that
own the frame did not move: the water is the same tan stipple that reflects nothing and tiles to
the edge, the sails are the same paper, and the hill traded a corrugation for contour lines and
now looks like an ordnance survey sheet draped over a dune. Against Sea of Conquest or Dredge
this is a tidy diorama under a good night, seen from a drone over a sea of speckles, with no sky
above it.
