# Critic round 3 — Ocean look test

Judged against LOOK.md R1–R5 and the hero vista, independently of rounds 1 and 2. Build under
judgement: preview at http://127.0.0.1:5174/ (commit `e3f6853`, "Round 3 builder pass") on
2026-09-04, 16 frames under `shots/critic3/` (all `--frames 3`), plus fourteen native-resolution
crops cut from those frames (`*_crop_*.png`, nearest-neighbour upscaled where the source was a
1× phone frame). Every frame and crop listed below was opened and looked at; no round 1 or
round 2 screenshot is used as evidence here. Provenance caveat: at shooting time the working
tree carried uncommitted edits to `src/ocean/Ocean.ts`, `src/ships/Brig.ts`,
`src/terrain/Terrain.ts`, `src/world/World.ts`, `src/core/Spec.ts` and `tools/shoot.mjs`, so the
served build may differ from `e3f6853`; this report judges what the preview served.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2`, not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time. No score depends on the missing DPR.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills. Where the rubric
  asks for motion I score what a still proves and say what is unverified.
- The sky check was shot at `--pitch 25 --zoom 300` because the vertical FOV is 60° and the
  horizon only enters the frame below pitch ~30; the hero pitch is 52. So the sky evidence
  (`shots/critic3/sky_check.png`) is from a non-hero framing. At 17:30 the sun is at azimuth 277
  and the camera looks along 142, so the sun disc is behind the camera in that view; its
  absence there is expected, and the sun disc therefore remains unverified in every frame.

Scale: 10 = indistinguishable from Sea of Conquest / Dredge / the reference photograph;
8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 5.5

Real gains: palms and bushes are now alpha-card fronds with feathered silhouettes and varied
lean (`shots/critic3/zoom60_beach.png`), the lighthouse carries stone with a salt gradient and a
ring of boulders at the mole tip (`shots/critic3/hero_phone_crop_mole.png`), roofs carry pale
lichen spotting over the tile normal (`shots/critic3/zoom60_town.png`), walls keep their cracks
and rain runoff, and windows now come in balcony and arch variants
(`shots/critic3/zoom60_town_crop_windows.png`). But the surfaces the brief names first are
still not photographic: the sails are flat cream quads with faint vertical seam stripes, no
weave, no cloth shading and a green-grey light-leak smear across the mainsail
(`shots/critic3/zoom60_brig_crop_sail.png`); the hull has no wale stripe or waterline band
(`shots/critic3/hero_phone_crop_brig.png`); every window is the same flat white-cross decal,
doors are solid black rectangles, the balconies are unshaded thin-bar cages hanging in front
of the wall, and chimney caps are flat black boxes (`shots/critic3/zoom60_town_crop_windows.png`,
`shots/critic3/zoom60_town.png`); the quay and mole are a flat paving grid with no wet
darkening and a hard straight paving-to-sand edge (`shots/critic3/hero_phone_crop_mole.png`,
`shots/critic3/hero_phone_crop_east_shore.png`); the boulders are smooth textured spheres; the
beach is one uniform micro-ripple grain with no debris (`shots/critic3/zoom60_beach.png`); and
the hillside is a stepped terrace corrugation with a zig-zag edge on every step
(`shots/critic3/hero_phone_crop_hill.png`). Normals still only read on plaster cracks and the
roof tiles. To reach 8.5: sail cloth with weave, panels and belly shading; hull wale and
waterline; window reveals and shutters with modelled bars; wet band on quay and mole; real
rock outcrops and scrub on the slope instead of terraces; sand macro variation and debris.

### 2. Light — 6.0

The night is the best frame this project has produced: a navy-black basin, warm lantern pools
on the quay with visible posts, varied amber windows, a lit lantern room on the lighthouse
instead of a bloom disc, a stern lantern on the brig, and true darkness on the slopes
(`shots/critic3/night_phone.png`, `shots/critic3/night_phone_crop_town.png`). Shadow softness is
now distance-graded: the bell-tower shadow across the town is soft while the lamp-post shadow
on the quay is crisp (`shots/critic3/hero_phone_crop_hill.png`, `shots/critic3/zoom60_town.png`).
17:30 lit walls are orange-cream. Still wrong: shaded walls, alleys and sand are a neutral
grey-green with no sky-blue fill and no ground bounce (`shots/critic3/zoom60_town.png`,
`shots/critic3/hero_phone_crop_town.png`); the topsails still cast a hard-edged dark trapezoid
onto the water (`shots/critic3/zoom60_brig.png`, left of the ship); the lighthouse "beam" at
night is a flat translucent trapezoid laid over the water with straight edges and a bright
specular blob beneath it (`shots/critic3/night_phone_crop_mole.png`, `shots/critic3/contact_fog_22.png`);
moon glitter still blankets the whole basin as a uniform grey speckle rather than a path
(`shots/critic3/night_phone.png`, `shots/critic3/contact_clear_22.png`). To reach 8.5:
violet sky-lit shade with a bounce term, a volumetric or at least soft-edged and faded beam,
a narrow roughness-driven moon path, and a water shadow that softens with distance.

### 3. Atmosphere — 4.5

For the first time a frame shows a horizon (`shots/critic3/sky_check.png`), but what is above
it is a flat grey-teal wash sliding to a muddy tan at the horizon: no rose belt opposite the
sun, no sun disc anywhere (expected in this view, unverified in all others), no clouds, and
no aerial perspective at all on the island, which keeps full contrast against the far water
(`shots/critic3/sky_check_crop_top.png`, `shots/critic3/zoom300.png`). Fog: lantern halos now
exist at 22:00 (`shots/critic3/contact_fog_22.png`), which is a genuine fix, but the fog is still
a single tan-grey tone with a 2-D cloud-blob pattern, the 12:00 fog is an opaque grey sheet
with a pink ghost town (`shots/critic3/contact_fog_12.png`), and at 17:30 the depth is inverted:
the far hillside at the top of the frame is the sharpest thing in the shot while the near
water at the bottom is the thickest, the opposite of R4 (`shots/critic3/fog_phone.png`,
`shots/critic3/fog_phone_crop_town.png`). The hero frame still has no sky. To reach 8.5:
distance-graded blue shift and contrast loss on terrain, fog density that increases with
distance from the camera, per-layer colour shift, a sun disc and a real horizon gradient at
17:30, and a hero framing that includes a sky band.

### 4. Water — 4.5

The basin finally has a wind direction: elongated whitecap streaks run consistently across
every frame and the shallows show seabed through green-gold water at the mole and beach
(`shots/critic3/hero_phone.png`, `shots/critic3/zoom60_beach.png`). Everything else fails the
reference. The foam is a uniform stipple of pink-tan streaks spread at the same density over
the entire basin at every zoom, from 60 m to 300 m, with no swell shape, crest or trough
under it, so at hero zoom it reads as sand smeared on the water
(`shots/critic3/hero_phone_crop_shore.png`, `shots/critic3/hero_phone_crop_mole.png`,
`shots/critic3/landscape.png`, `shots/critic3/zoom300.png`). Nothing reflects: no hull, quay,
lighthouse or sail reflection at any zoom (`shots/critic3/hero_phone_crop_brig.png`,
`shots/critic3/zoom60_brig.png`). Noon glitter is still large bokeh confetti over the whole
field and a white foam comet still streaks off the mole tip with a white band around the outer
beach (`shots/critic3/contact_clear_12.png`). The far water to the horizon is a coarse regular
lattice of blue and pale lozenges, i.e. a tiling normal map at full strength
(`shots/critic3/sky_check_crop_top.png`). The 17:30 glitter is a handful of sparse sparkles
(`shots/critic3/zoom60_brig.png`, lower right). To reach 8.5: swell and chop displacement with
Jacobian foam only on crests and along the shore, planar or SSR reflections broken by the
normal, a specular lobe that concentrates glitter, foam colour that is white not sand, a
distance fade for the detail normal and a second octave at a different scale.

### 5. Scale and motion — 6.0

Scale agrees: three-storey houses, a ~30 m brig with deck guns, a T-head dock a boat can lie
alongside, lamp posts with heads, boulders, barrels and crates on the quay, gulls in every
frame (`shots/critic3/hero_phone_crop_shore.png`, `shots/critic3/hero_phone_crop_brig.png`).
Palms now have varied lean and feathered fronds (`shots/critic3/zoom60_beach.png`). Still wrong:
the sails are rigid flat quads with no belly and the pennant is a flat two-curve quad
(`shots/critic3/zoom60_brig_crop_sail.png`); several barrels and crates sit in the water off the
beach as if floating (`shots/critic3/hero_phone_crop_shore.png`, top centre and left); chimney
smoke is barely visible at hero zoom (`shots/critic3/hero_phone_crop_town.png`); hillside scrub
is tiny sprite dots on terraces (`shots/critic3/hero_phone_crop_hill.png`); the landscape
preset frames only water and the dock, with the brig and lighthouse cut out
(`shots/critic3/landscape.png`). Palm sway, sail, flag, smoke and gull motion remain
unverifiable from stills. To reach 8.5: wind-filled sail geometry, cloth flag, props kept on
land or turned into moored buoys, denser smoke, scrub with volume, a landscape framing that
keeps the three anchors, and a short motion capture.

### 6. Composition and squint test — 5.5

At full size the eye goes to the port: the warm town fills the upper third, the brig sits on
the lower-left third and the lighthouse on the lower-right third as LOOK.md §2 asks
(`shots/critic3/hero_phone.png`). The cast shadow across the basin is softer than before and
no longer a black slab. But the top of the frame is a band of stepped terraces with zig-zag
edges that is the busiest, highest-contrast texture in the shot and competes with the roofs
(`shots/critic3/hero_phone_crop_hill.png`); the hero still has no sky or horizon, so there is no
water/land/sky depth stack; the east shore shows a hard sawtooth staircase silhouette with
smeared texture (`shots/critic3/hero_phone_crop_east_shore.png`,
`shots/critic3/landscape_crop_east_shore.png`); the uniform foam stipple flattens the basin into
one texture; and at thumbnail the contact cells still read as a tan disc, a teal disc and a
white-speckled disc (`shots/critic3/contact.png`). To reach 8.5: a calm hillside, a horizon band
in the hero, a shore silhouette without teeth, and a foam distribution that leaves the basin
mostly dark so the sails and walls hold the value hierarchy.

### 7. Budget and errors — 8.5

All fifteen JSON logs report zero console errors. Draw calls 80–235 (limit 300), triangles
0.83 M at medium and 1.22–1.24 M at high (limit 1.5 M), texture memory 45.3 MB (limit 256).
Device fps is honestly "not measured". The single warning on every shot is the environment's
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported`. Triangle headroom
was recovered (1.48 M → 1.24 M at high) while draw calls rose from 159 to 235; that is the nit
that keeps this at 8.5 rather than higher, together with the unmeasured device fps.

### 8. Programmer-art checklist — 4.0 (automatic fail)

Four hits; see the checklist below.

## Programmer-art checklist

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Sails are flat cream quads with a light-leak smear, windows flat white-cross decals, doors black rectangles, balcony rails unshaded bars, chimney caps black boxes, quay and mole a flat paving grid: `shots/critic3/zoom60_brig_crop_sail.png`, `shots/critic3/zoom60_town_crop_windows.png`, `shots/critic3/hero_phone_crop_mole.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** | Far water is a regular blue/pale lattice to the horizon; east shore sawtooth with smeared stretched texture; beach a uniform micro-ripple grain: `shots/critic3/sky_check_crop_top.png`, `shots/critic3/hero_phone_crop_east_shore.png`, `shots/critic3/landscape_crop_east_shore.png`, `shots/critic3/zoom60_beach.png` |
| Shadow acne or missing shadows | clear | Shadows present and distance-graded: `shots/critic3/zoom60_town.png`, `shots/critic3/hero_phone_crop_hill.png`. Hard sail-shadow block on water logged as issue 4 |
| Grey nights | clear | Navy-black basin with warm lantern and window pools: `shots/critic3/night_phone.png`, `shots/critic3/night_phone_crop_town.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | Foam is a uniform stipple over the whole basin at every zoom; noon still has a white foam comet off the mole tip and a white band around the outer beach; 300 m water is a uniform speckled blue plane: `shots/critic3/hero_phone_crop_shore.png`, `shots/critic3/contact_clear_12.png`, `shots/critic3/zoom300.png` |
| Hard water-to-beach line | clear | Soft wet band and irregular edge at 60 m: `shots/critic3/zoom60_beach.png`. The hard paving-to-sand and quay-to-water edges are logged under materials |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms are alpha cards with varied lean and rotation: `shots/critic3/zoom60_beach.png`, `shots/critic3/hero_phone_crop_town.png` |
| Fog as one colour | **marginal, not counted** | 22:00 fog has halos and 17:30 has density structure: `shots/critic3/contact_fog_22.png`, `shots/critic3/fog_phone.png`; but 12:00 is a single grey sheet and no time shows a colour shift with depth: `shots/critic3/contact_fog_12.png` |
| Sky without a sun | unverified | Sky visible only at pitch 25 with the sun behind the camera: `shots/critic3/sky_check.png`; no frame shows a sun disc; logged as issue 5, not counted as a hit or a pass |
| Placeholder primitives or text labels | **HIT** | The lighthouse beam is a flat translucent trapezoid quad laid on the water; the mole boulders are textured spheres: `shots/critic3/night_phone_crop_mole.png`, `shots/critic3/contact_fog_22.png`, `shots/critic3/hero_phone_crop_mole.png`. No text labels |
| Recognisable low-poly asset kit | clear (marginal) | Balcony/arch variants, per-building tint, alpha palms and bushes break the kit read: `shots/critic3/hero_phone_crop_town.png`; the identical white-cross window decal on every opening is logged under flat surfaces |

Four hits (down from four in round 2 with a different mix: the vegetation/kit hit is cleared,
the flat beam quad is new). The round fails automatically.

## Ranked issues (most damaging first)

1. **Foam is a uniform pink-tan stipple over the whole basin at every zoom; no swell shape, no reflections; noon glitter is confetti with a foam comet.** `shots/critic3/hero_phone_crop_shore.png`, `shots/critic3/hero_phone_crop_mole.png`, `shots/critic3/zoom300.png`, `shots/critic3/contact_clear_12.png`. Fix direction: foam only from the Jacobian on crests and from depth at the shore, white not sand-coloured, fade with distance; add reflections broken by the normal; glitter from a roughness-driven specular lobe.
2. **The lighthouse beam is a flat translucent trapezoid quad on the water with straight edges and a hot specular blob under it, in the night and in the 22:00 fog.** `shots/critic3/night_phone_crop_mole.png`, `shots/critic3/contact_fog_22.png`, `shots/critic3/contact_clear_22.png`. Fix direction: a cone volume with radial and range falloff and soft edges, seen from the lantern room; in clear air barely visible, in fog a soft scattered wedge.
3. **The hillside is a stepped terrace corrugation with zig-zag step edges that dominates the top third of the hero and of the fog frame; no north cliff.** `shots/critic3/hero_phone_crop_hill.png`, `shots/critic3/fog_phone_crop_town.png`, `shots/critic3/zoom300_crop_island.png`. Fix direction: replace the ridge function with rock outcrops, scrub clusters and a real cliff mesh; lower the slope's contrast so the roofs lead.
4. **Sails are flat quads with a light-leak smear and cast a hard trapezoid shadow on the water; the flag is a flat quad.** `shots/critic3/zoom60_brig_crop_sail.png`, `shots/critic3/zoom60_brig.png`, `shots/critic3/hero_phone_crop_brig.png`. Fix direction: belly geometry with cloth weave and panel seams, two-sided lighting without leaks, shadow softening on the water, cloth flag.
5. **Far water is a regular tiling lattice to the horizon; the sky is a flat wash with no sun disc, rose belt or aerial perspective on the island.** `shots/critic3/sky_check_crop_top.png`, `shots/critic3/sky_check.png`, `shots/critic3/zoom300.png`. Fix direction: distance fade and second octave on the detail normal; scattering-based sky with sun disc and anti-solar belt; blue shift and contrast loss on terrain with distance.
6. **East shore is a hard sawtooth staircase with smeared stretched texture, in both the hero and landscape frames.** `shots/critic3/hero_phone_crop_east_shore.png`, `shots/critic3/landscape_crop_east_shore.png`. Fix direction: smooth the heightfield shore mask at every aspect, project the shore texture planar rather than stretched down the step faces.
7. **Fog is one tan-grey tone, is inverted in depth at 17:30 (far hill sharp, near water thick) and is an opaque sheet at 12:00.** `shots/critic3/fog_phone.png`, `shots/critic3/fog_phone_crop_town.png`, `shots/critic3/contact_fog_12.png`. Fix direction: density increasing with camera distance, per-layer blue-grey shift (R4), lower albedo at noon.
8. **Windows are identical flat white-cross decals; doors are black rectangles; balcony rails are unshaded bar cages; chimney caps are black boxes.** `shots/critic3/zoom60_town_crop_windows.png`, `shots/critic3/zoom60_town.png`. Fix direction: window reveals with glass reflection and shutter geometry, modelled door with frame, rail geometry that catches light, capped chimney pots.
9. **17:30 shade is neutral grey-green with no sky fill or bounce.** `shots/critic3/zoom60_town.png`, `shots/critic3/hero_phone_crop_town.png`. Fix direction: violet sky-lit shade toward `#5B6FA6`, ground-bounce warming shaded sand and wall bases.
10. **Quay and mole are a flat paving slab with no wet band, a hard straight paving-to-sand edge and sphere boulders.** `shots/critic3/hero_phone_crop_mole.png`, `shots/critic3/hero_phone_crop_east_shore.png`. Fix direction: dark wet tide band with rounded stone edge, blended quay end, irregular boulder meshes.
11. **Moon glitter blankets the whole basin as uniform speckle.** `shots/critic3/night_phone.png`, `shots/critic3/contact_clear_22.png`. Fix direction: narrow the moon path by roughness; darken water outside the path.
12. **Beach sand is one uniform micro-ripple grain with no macro variation or debris.** `shots/critic3/zoom60_beach.png`. Fix direction: macro blend of dry/damp patches, seaweed line, footprints.
13. **Barrels and crates sit on the water off the beach as if floating.** `shots/critic3/hero_phone_crop_shore.png`. Fix direction: clamp props to land or convert those in water to moored buoys.
14. **Landscape preset shows only water and the dock; brig and lighthouse are cut out.** `shots/critic3/landscape.png`. Fix direction: fit the framing to the three anchors in landscape as in portrait.
15. **Chimney smoke is barely visible at hero zoom; motion of palms, sails, flags, smoke, gulls unverifiable.** `shots/critic3/hero_phone_crop_town.png`. Fix direction: denser, longer plumes; a short frame sequence capture so motion can be judged.

## Round 2 issues — status

| # | Round 2 issue | Status | Evidence |
|---|---|---|---|
| 1 | Water is a static noise field (no swell, chop, foam, reflections; blotchy shadow water; confetti glitter) | **improved** | Wind-aligned whitecap streaks give a direction and the shadow-water blotch is gone: `shots/critic3/hero_phone.png`; but the foam is uniform stipple, there are still no reflections and noon glitter is still confetti: `shots/critic3/hero_phone_crop_shore.png`, `shots/critic3/contact_clear_12.png` |
| 2 | Sails, hull and flags are flat planes | **unchanged** | Sail is a flat quad with a bolt rope and a light-leak smear, flag a flat quad: `shots/critic3/zoom60_brig_crop_sail.png` |
| 3 | No sky, horizon or sun disc at any pitch | **improved** | Horizon and sky now render at pitch 25: `shots/critic3/sky_check.png`; sky is a flat wash, no sun disc verified, hero still has no sky: `shots/critic3/sky_check_crop_top.png`, `shots/critic3/hero_phone.png` |
| 4 | Fog one grey tone, 12:00 sheet, no halos at 22:00 | **improved** | Halos at 22:00: `shots/critic3/contact_fog_22.png`; single tone, 12:00 sheet and now inverted depth remain: `shots/critic3/contact_fog_12.png`, `shots/critic3/fog_phone_crop_town.png` |
| 5 | Windows and doors are identical painted decals | **improved** | Balcony and arch variants, per-building placement: `shots/critic3/zoom60_town_crop_windows.png`; the pane itself is still the same flat white-cross decal, doors black rectangles |
| 6 | Sail shadow hard block on water, light leaks through mainsail | **unchanged** | Hard trapezoid left of the ship, green smear on the sail: `shots/critic3/zoom60_brig.png`, `shots/critic3/zoom60_brig_crop_sail.png` |
| 7 | Hillside dune corrugation, no north cliff | **unchanged** | Ridges are broader and the zig-zag step edges more visible: `shots/critic3/hero_phone_crop_hill.png`, `shots/critic3/zoom300_crop_island.png` |
| 8 | Night: lighthouse bloom disc with projected pool; moon glitter blankets basin | **improved** | Lantern room now lit, no bloom disc: `shots/critic3/night_phone_crop_mole.png`; the beam is a flat quad with a hot blob and glitter still blankets: `shots/critic3/night_phone.png` |
| 9 | 17:30 shade neutral, no bounce or sky fill | **unchanged** | `shots/critic3/zoom60_town.png`, `shots/critic3/hero_phone_crop_town.png` |
| 10 | Quay and mole flat slabs, repeating stone, no wet edge | **improved** | Larger irregular flagstones, boulders, lamp heads: `shots/critic3/hero_phone_crop_mole.png`, `shots/critic3/zoom60_town.png`; still no wet band, hard paving-to-sand edge |
| 11 | East shore sawtooth in landscape preset | **unchanged** | Now visible in the hero too: `shots/critic3/hero_phone_crop_east_shore.png`, `shots/critic3/landscape_crop_east_shore.png` |
| 12 | Shadow softness uniform, not distance-graded | **fixed** | Tower shadow soft at distance, lamp-post shadow crisp near: `shots/critic3/hero_phone_crop_hill.png`, `shots/critic3/zoom60_town.png` |
| 13 | Far water regular ripple lattice at 300 m | **unchanged** | Lattice runs to the horizon at full strength: `shots/critic3/sky_check_crop_top.png` |
| 14 | Palms comb-strip fronds, bushes faceted blobs | **fixed** | Alpha-card fronds and leaf-card bushes with varied lean: `shots/critic3/zoom60_beach.png` |
| 15 | Dock a stub, smoke speckles, lamp posts pins | **improved** | T-head dock with a boat alongside, lamp heads: `shots/critic3/hero_phone_crop_shore.png`; smoke still barely visible: `shots/critic3/hero_phone_crop_town.png` |

Fixed 2, improved 8, unchanged 5. Of the five core lines from round 2 (water, sails,
framing, glitter, ship shadow) only water moved, and only partly.

## Budget lines (from `shots/critic3/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 235 | 1,235,171 | 45.3 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 235 | 828,859 | 45.3 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 80 | 1,219,565 | 45.3 | not measured |
| zoom60_brig (high, desktop) | 0 | 1 | 222 | 1,234,487 | 45.3 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 148 | 1,226,279 | 45.3 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 235 | 1,235,171 | 45.3 | not measured |
| night_phone (high, 2×) | 0 | 1 | 235 | 1,235,171 | 45.3 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 235 | 1,235,171 | 45.3 | not measured |
| landscape (high, 1×) | 0 | 1 | 158 | 1,229,907 | 45.3 | not measured |
| sky_check (high, 1×, pitch 25) | 0 | 1 | 235 | 1,235,171 | 45.3 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile
extension not supported` (environment).

## Verdict

**FAIL.** Lowest line: programmer-art checklist (4.0, four hits: flat sails, windows, rails
and quay; the far-water lattice and the east-shore sawtooth; a uniform foam stipple with a
noon foam comet; a flat-quad lighthouse beam), with atmosphere (4.5) and water (4.5) next;
only budget and errors (8.5) clears the bar. This round did real work: the night frame is
the first one I would show anyone, the palms and bushes are no longer a kit, shadows soften
with distance, the dock has a head, the mole has boulders, the town has balconies and arches,
fog has halos, and a horizon finally exists at pitch 25. But the water — the surface that
fills two thirds of every frame — swapped a noise field for a uniform foam stipple, still
reflects nothing and still tiles to the horizon; the sails are still paper; the hillside got
louder, not quieter; and the new beam is a flat polygon that would be cut from any shipping
build on sight. Against Sea of Conquest or Dredge this is a well-built diorama under a
plausible night, seen from a drone over a sea of speckles.
