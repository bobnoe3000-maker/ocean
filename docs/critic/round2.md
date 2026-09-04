# Critic round 2 — Ocean look test

Judged against LOOK.md R1–R5 and the hero vista, independently of round 1. Build under
judgement: preview at http://127.0.0.1:5174/ (commit `aecb97c`, "Round 2 builder pass") on
2026-09-04, 16 frames under `shots/critic2/` (all `--frames 3`), plus eight native-resolution
crops cut from those frames (`*_crop_*.png`). Every frame and crop listed below was opened
and looked at; no round 1 screenshot is used as evidence here.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2`, not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time. No score depends on the missing DPR.
- Device fps is **not measured** (headless SwiftShader; `frameMs` is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills. Where the rubric
  asks for motion I score what a still proves and say what is unverified.
- No frame shows sky or horizon, including the explicit sky check at `--pitch 30 --zoom 300`
  (`shots/critic2/sky_check.png`, `shots/critic2/sky_check_crop_top.png`: water reaches the
  top edge). The sun disc, horizon gradient and "sky without a sun" item therefore remain
  unverifiable and are recorded as an open issue, not a pass.

Scale: 10 = indistinguishable from Sea of Conquest / Dredge / the reference photograph;
8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 5.0

Walls are the one surface approaching the bar: plaster with cracks, rain-runoff staining and
a grime gradient at the base, now tinted per building in ochre, pink, cream and rust
(`shots/critic2/zoom60_town.png`, `shots/critic2/zoom60_town_crop_windows.png`,
`shots/critic2/hero_phone_crop_town.png`). The lighthouse now carries a stone texture with a
salt-stain gradient instead of painted stripes (`shots/critic2/hero_phone_crop_mole.png`).
Everything else is still short of photographic: windows and doors are flat painted decals
(black rectangle, white cross, flat shutters, no reveal depth) repeated identically across
every façade (`shots/critic2/zoom60_town_crop_windows.png`); roofs are one tile pattern
with no lichen, moss or replaced tiles; sails are flat cream quads with only a faint seam
grid and no cloth shading, the hull is a dark plank sheet without wale stripe, tar sheen or
rubbing wear (`shots/critic2/zoom60_brig.png`); the quay is a uniform grey flagstone grid and
the mole a repeating checker with no wet darkening at the waterline
(`shots/critic2/zoom60_town_crop_windows.png`, `shots/critic2/hero_phone_crop_mole.png`,
`shots/critic2/night_phone_crop_mole.png`). Normals still do not read under the raking 17:30
light on any surface except the plaster cracks. To reach 8.5: window and door geometry with
reveals and shutters, roof macro variation (lichen, missing/replacement tiles, ridge tiles),
sail cloth with bolt-ropes, reef bands and belly geometry, a hull with wale and waterline
band, wet dark band on quay and mole stone, and per-building roof tint.

### 2. Light — 5.5

Improvements are real: 17:30 lit walls are now orange-cream rather than pale
(`shots/critic2/zoom60_town.png`), palm shadows on the beach are soft-edged instead of
pixelated (`shots/critic2/zoom60_beach.png`), the PCSS-fallback warning is gone from every
JSON, and the hill/town shadow across the basin is less of a black slab because sky-lit water
now shows through it (`shots/critic2/hero_phone.png`). The night has warm lantern pools along
the quay, a stern lantern on the brig with a warm reflection, and true darkness on the slopes
(`shots/critic2/night_phone.png`). Still missing: shaded walls and shaded sand are neutral
grey-brown, not the blue-violet of R1/R5, and there is no bounce warming in shade
(`shots/critic2/hero_phone_crop_town.png`); shadow softness is uniform rather than growing
with distance (the lamp-post shadow on the quay and the building shadow across the square are
equally crisp in `shots/critic2/zoom60_town.png`); the topsails throw a large hard-edged dark
rectangle onto the water and a bright patch is lit through the mainsail
(`shots/critic2/zoom60_brig.png`); at night the lighthouse is a white bloom disc with a
projected rectangular pool of light on the water beside the mole, and moon glitter still
blankets the whole basin as white confetti (`shots/critic2/night_phone_crop_mole.png`,
`shots/critic2/contact_clear_22.png`). To reach 8.5: sky-coloured shade (violet at 17:30),
a ground-bounce term, contact-hardening shadows, a lighthouse beam instead of a base bloom,
a narrow moon path.

### 3. Atmosphere — 4.5

Fog now exists at all three times, which fixes the worst round 1 hole
(`shots/critic2/contact_fog_12.png`, `shots/critic2/contact_fog_175.png`,
`shots/critic2/contact_fog_22.png`), and the 17:30 phone fog has height structure: the basin
is filled, the hill town and the near lighthouse read clearer
(`shots/critic2/fog_phone.png`). But the fog is still a single grey-tan tone with a 2-D
cloud-blob pattern rather than R4's blue-grey depth layers, the 12:00 fog is a near-opaque
grey sheet with the town as pink ghosts (`shots/critic2/contact_fog_12.png`), and lights in
the 22:00 fog are sharp white dots with no halos (`shots/critic2/contact_fog_22.png`,
LOOK.md §4 asks for soft halos). No frame at any preset or pitch shows sky, horizon, sun disc
or horizon gradient (`shots/critic2/sky_check.png`, `shots/critic2/sky_check_crop_top.png`,
`shots/critic2/zoom300.png`). At 300 m the far side of the island has the same contrast and
saturation as the near side; there is no aerial perspective
(`shots/critic2/zoom300.png`). To reach 8.5: a framing in which a horizon band exists, blue
shift and contrast loss with distance on the terrain, fog with per-layer colour shift and
light halos, and a sun disc.

### 4. Water — 4.0

The shoreline is better: at 60 m the seabed shows through the shallows, there is a darker
wet-sand band and a thin irregular edge line, and the beach-to-water transition is no longer
a blurred gradient (`shots/critic2/zoom60_beach.png`). The rest is where it was. The 17:30
basin is a single-tone teal noise field with no directional swell, no chop shapes, no crest
foam and no reflections of ship, quay or lighthouse
(`shots/critic2/hero_phone_crop_shore.png`, `shots/critic2/hero_phone_crop_brig.png`,
`shots/critic2/landscape.png`). Shadowed water shows a coarse green-teal blotch patchwork
that reads as a low-resolution caustic texture (`shots/critic2/zoom60_brig.png`, left half;
`shots/critic2/zoom60_beach.png`, top right). At 300 m and at pitch 30 the far water shows a
regular ripple lattice, i.e. a tiling normal map (`shots/critic2/sky_check_crop_top.png`).
Noon glitter is still dense uniform white confetti over the whole field rather than a path
under the sun, and a white foam smear still sits on the outer beach and at the mole tip
(`shots/critic2/contact_clear_12.png`). The 17:30 shallows carry sparse white specks that
read as noise, not foam (`shots/critic2/zoom60_beach.png`). To reach 8.5: Gerstner/FFT swell
aligned to the wind plus chop, reflections broken by the surface normal, Jacobian crest foam,
a specular lobe that concentrates glitter, a shoreline foam line and receding sheet, and a
non-repeating detail normal at distance.

### 5. Scale and motion — 5.5

Relative scale is coherent: three-storey houses, a ~30 m brig, a ~100 m basin, a lighthouse
and a bell tower that agree (`shots/critic2/hero_phone.png`). New this round: barrels, crates,
rope coils and small boats on and beside the quay (`shots/critic2/hero_phone_crop_shore.png`),
faint chimney smoke plumes drifting downwind over the roofs (`shots/critic2/zoom60_town.png`,
two translucent plumes right of the chimneys), gulls in every frame. Still wrong: the sails
are rigid flat rectangles with no belly (`shots/critic2/zoom60_brig.png`); the dock is still
a short stub relative to the brig (`shots/critic2/hero_phone_crop_shore.png`); the smoke
reads as sparse pale speckles at hero zoom (`shots/critic2/hero_phone_crop_town.png`); the
beach bushes are two faceted blobs (`shots/critic2/zoom60_beach.png`); the lamp posts are
black pins with a square head (`shots/critic2/zoom60_town.png`). Palm sway, sail and flag
motion remain unverifiable from stills. To reach 8.5: wind-filled sail geometry, a dock sized
for a boat alongside, denser smoke, modelled lamp posts and bushes, and a short motion capture.

### 6. Composition and squint test — 5.0

The town now fills the upper third with warm, saturated walls and roofs and is the most
colourful mass in the frame, so at full size the eye does go to the port first
(`shots/critic2/hero_phone.png`); the brig sits on the lower-left third and the lighthouse on
the lower-right third as LOOK.md §2 asks. But the frame is still a near-nadir map with no
sky or horizon at any zoom, pitch or aspect (`shots/critic2/landscape.png`,
`shots/critic2/zoom300.png`, `shots/critic2/sky_check.png`), so there is no water/land/sky
depth stack as in R1 and R5. At thumbnail the contact cells still read as a tan disc, a teal
disc and a dark diagonal (`shots/critic2/contact.png`), the hillside behind the town is a
band of broad dune-like ripples that competes with the roofs
(`shots/critic2/hero_phone.png`, top), and the shadow slab across the basin remains the
dominant diagonal. To reach 8.5: a framing with a horizon band, a hillside that reads as
scrub and rock rather than corrugation, a softer cast slab, and a value hierarchy with the
sunlit sails and warm walls on top.

### 7. Budget and errors — 8.5

All fifteen JSON logs report zero console errors. Draw calls 79–159 (limit 300), triangles
1.06 M at medium and 1.47–1.48 M at high (limit 1.5 M), texture memory 41.8 MB (limit 256).
Device fps is honestly "not measured". The `PCSS: shadow chunk layout unexpected` warning
from round 1 is gone; the one remaining warning is the environment's
`KHR_parallel_shader_compile extension not supported`. Nit that keeps this at 8.5: high
quality now sits at 99 % of the triangle budget before any of the geometry the other lines
need (sail cloth, window reveals, dock, props), so the next round has essentially no
triangle headroom without reclaiming it.

### 8. Programmer-art checklist — 3.5 (automatic fail)

Four hits; see the checklist below.

## Programmer-art checklist

| Item | Result | Evidence |
|---|---|---|
| Flat or untextured surfaces | **HIT** | Sails are flat cream quads with a faint grid, quay a flat grey grid, lamp posts black pins: `shots/critic2/zoom60_brig.png`, `shots/critic2/zoom60_town_crop_windows.png` |
| Default Three.js materials | clear | No default-grey Phong/Standard surfaces in any frame |
| Visible tiling or stretched UVs | **HIT** | Mole checker paving repeats visibly, far water shows a regular ripple lattice: `shots/critic2/hero_phone_crop_mole.png`, `shots/critic2/night_phone_crop_mole.png`, `shots/critic2/sky_check_crop_top.png` |
| Shadow acne or missing shadows | clear | Shadows present, palm shadows now soft: `shots/critic2/zoom60_beach.png`. Hard sail-shadow block on water logged as issue 6 |
| Grey nights | clear | Navy/black night with warm lantern and window pools: `shots/critic2/night_phone.png`, `shots/critic2/contact_clear_22.png` |
| Uniform blue water plane or white-stripe foam | **HIT** | 17:30 basin is a single-tone teal noise plane with no swell; noon foam is still a white smear at the mole tip and outer beach: `shots/critic2/hero_phone_crop_shore.png`, `shots/critic2/contact_clear_12.png` |
| Hard water-to-beach line | clear | Wet band and soft irregular edge at 60 m: `shots/critic2/zoom60_beach.png` |
| Vegetation that does not move / identical instances | motion unverified; instances clear | Palms vary in lean and rotation, hillside scrub is varied specks: `shots/critic2/zoom60_beach.png`, `shots/critic2/hero_phone.png`. Faceted beach bushes logged under the kit item |
| Fog as one colour | clear (marginal) | Density varies and has height structure at 17:30: `shots/critic2/fog_phone.png`; but 12:00 fog is close to a single grey sheet: `shots/critic2/contact_fog_12.png` (issue 4) |
| Sky without a sun | unverifiable | No sky in any frame, including `shots/critic2/sky_check.png` at pitch 30; counted as issue 3, not as a pass |
| Placeholder primitives or text labels | clear | Bell tower is now modelled with a tile roof and openings: `shots/critic2/hero_phone_crop_town.png`; no text labels |
| Recognisable low-poly asset kit | **HIT** | Identical box houses with the same painted window/shutter decal on every façade, faceted blob bushes, comb-strip palm fronds: `shots/critic2/zoom60_town_crop_windows.png`, `shots/critic2/zoom60_beach.png` |

Four hits (down from five). The round fails automatically.

## Ranked issues (most damaging first)

1. **Water is still a static noise field.** No swell, chop, crest foam or reflections; shadowed water is a blotchy caustic patchwork; noon glitter is uniform confetti. `shots/critic2/hero_phone_crop_shore.png`, `shots/critic2/zoom60_brig.png`, `shots/critic2/contact_clear_12.png`. Fix direction: swell + chop displacement aligned to the 6 m/s wind, reflections broken by normals, Jacobian foam, specular glitter lobe, higher-resolution caustic/shadow sampling.
2. **Sails, hull and flags are flat planes.** `shots/critic2/zoom60_brig.png`. Fix direction: sail cloth with bolt-ropes, reef bands and wind belly geometry; hull with wale stripe, waterline band and tar sheen.
3. **No sky, horizon or sun disc at any pitch or zoom**, so atmosphere and composition cannot reach the references. `shots/critic2/sky_check.png`, `shots/critic2/sky_check_crop_top.png`, `shots/critic2/landscape.png`. Fix direction: verify that `--pitch` actually reaches the camera and that the water plane/far clip do not hide the horizon; make a horizon band part of the hero framing.
4. **Fog is one grey tone with a cloud-blob pattern; 12:00 fog is a sheet; no light halos at 22:00.** `shots/critic2/contact_fog_12.png`, `shots/critic2/contact_fog_22.png`, `shots/critic2/fog_phone.png`. Fix direction: distance-graded colour shift toward blue-grey (R4 layers), lower fog albedo at noon, halo sprites or scattering around lanterns and windows.
5. **Windows and doors are identical painted decals on every house.** `shots/critic2/zoom60_town_crop_windows.png`, `shots/critic2/hero_phone_crop_town.png`. Fix direction: window geometry with reveals, sills and shutters, three or four window variants, per-building placement.
6. **Sail shadow is a hard dark block on the water and light leaks through the mainsail.** `shots/critic2/zoom60_brig.png`. Fix direction: shadow bias/normal offset on the water, two-sided sail shadowing, softening with distance.
7. **Hillside reads as dune corrugation, not a Mediterranean scrub slope; no cliff to the north.** `shots/critic2/hero_phone.png` (top), `shots/critic2/zoom300.png`. Fix direction: break the terrace bands with rock outcrops and scrub clusters, add the LOOK.md north cliff, distance haze on terrain.
8. **Night: lighthouse is a bloom disc with a projected pool; moon glitter blankets the basin.** `shots/critic2/night_phone_crop_mole.png`, `shots/critic2/contact_clear_22.png`. Fix direction: beam volume from the lantern room, narrow the moon path by roughness, tone the pool to a lantern reflection.
9. **17:30 shade is neutral grey-brown with no bounce or blue sky fill.** `shots/critic2/hero_phone_crop_town.png`, `shots/critic2/zoom60_town.png`. Fix direction: sky-lit shade colour toward `#5B6FA6`, ground-bounce term warming shaded sand.
10. **Quay and mole are flat grey slabs with repeating stone and no wet edge.** `shots/critic2/zoom60_town_crop_windows.png`, `shots/critic2/hero_phone_crop_mole.png`. Fix direction: stone macro variation, rounded wet edge with tide stain, bollards.
11. **East shore is still a geometric sawtooth in the landscape preset.** `shots/critic2/landscape_crop_east_shore.png`, `shots/critic2/hero_phone.png` (right edge). Fix direction: the heightfield shore mask should apply at every aspect; smooth the mesh silhouette.
12. **Shadow softness is uniform, not graded with distance.** `shots/critic2/zoom60_town.png`, `shots/critic2/zoom60_beach.png`. Fix direction: working PCSS/contact hardening.
13. **Far water shows a regular ripple lattice at 300 m.** `shots/critic2/sky_check_crop_top.png`, `shots/critic2/zoom300.png`. Fix direction: second detail normal at a different scale, fade high frequency with distance.
14. **Palms are still comb-strip fronds; beach bushes are faceted blobs.** `shots/critic2/zoom60_beach.png`. Fix direction: alpha-cut frond cards with translucency, modelled bushes with varied silhouettes.
15. **Dock is a stub; smoke reads as speckles at hero zoom; lamp posts are pins.** `shots/critic2/hero_phone_crop_shore.png`, `shots/critic2/hero_phone_crop_town.png`, `shots/critic2/zoom60_town.png`. Fix direction: lengthen the dock with a boat alongside, denser smoke sprites, modelled lamp posts.

## Round 1 issues — status

| # | Round 1 issue | Status | Evidence |
|---|---|---|---|
| 1 | Water is a static noise field | **unchanged** (shore band improved) | `shots/critic2/hero_phone_crop_shore.png`, `shots/critic2/zoom60_brig.png`; wet band in `shots/critic2/zoom60_beach.png` |
| 2 | Shadows hard, aliased, PCSS silently disabled | **improved** | Palm shadows soft, no warning in any JSON: `shots/critic2/zoom60_beach.png`; softness still not distance-graded: `shots/critic2/zoom60_town.png` |
| 3 | Sails, hull, flags flat planes | **unchanged** | `shots/critic2/zoom60_brig.png` (faint seam grid only) |
| 4 | 17:30 not golden hour | **improved** | Walls orange-cream: `shots/critic2/zoom60_town.png`; shade still neutral, no bounce: `shots/critic2/hero_phone_crop_town.png` |
| 5 | Framing reads as a map, no sky | **unchanged** | `shots/critic2/sky_check.png`, `shots/critic2/landscape.png`, `shots/critic2/zoom300.png` |
| 6 | Identical building kit, placeholder tower | **improved** | Tower modelled, per-building tint, dense town: `shots/critic2/hero_phone_crop_town.png`; windows still identical decals: `shots/critic2/zoom60_town_crop_windows.png` |
| 7 | Stair-stepped east shore, no aerial perspective | **improved** | Hero shore contour smooth: `shots/critic2/hero_phone.png`; sawtooth persists in landscape: `shots/critic2/landscape_crop_east_shore.png`; no aerial perspective: `shots/critic2/zoom300.png` |
| 8 | Fog only at 17:30 | **fixed** | `shots/critic2/contact_fog_12.png`, `shots/critic2/contact_fog_22.png` |
| 9 | Noon glitter confetti, white foam smear | **unchanged** | `shots/critic2/contact_clear_12.png` |
| 10 | Night: identical windows, bloom pool, blanket glitter, orphan light | **improved** | Window brightness varies, orphan light gone, brig stern lantern: `shots/critic2/night_phone.png`; bloom pool and blanket glitter remain: `shots/critic2/night_phone_crop_mole.png` |
| 11 | Palms low-poly kit, pixelated shadows | **improved** | Two-segment drooping leaflets, soft shadows: `shots/critic2/zoom60_beach.png`; fronds still flat comb strips |
| 12 | Quay/mole flat, no props or wet edge | **improved** | Barrels, crates, rope coils, boats: `shots/critic2/hero_phone_crop_shore.png`; no wet edge, mole checker unchanged: `shots/critic2/hero_phone_crop_mole.png` |
| 13 | No chimney smoke, dock a sliver | **improved** | Smoke plumes visible: `shots/critic2/zoom60_town.png`; dock still a stub: `shots/critic2/hero_phone_crop_shore.png` |
| 14 | Sand micro-tiling, blurred shore gradient | **improved** | Rippled sand, wet band, irregular edge: `shots/critic2/zoom60_beach.png` |
| 15 | Moiré in ship shadow on water | **unchanged** | Striping replaced by a coarse blotch patchwork and a hard sail block: `shots/critic2/zoom60_brig.png` |

Fixed 1, improved 9, unchanged 5. None of the five core lines (water, sails, framing, glitter, ship shadow) moved.

## Budget lines (from `shots/critic2/*.json`)

| Shot | Errors | Warnings | Draw calls (≤300) | Triangles (≤1.5 M) | Texture MB (≤256) | Device fps |
|---|---|---|---|---|---|---|
| hero_phone (high, 2×) | 0 | 1 | 159 | 1,484,571 | 41.8 | not measured |
| contact cells ×6 (medium, 1×) | 0 | 1 | 159 | 1,061,699 | 41.8 | not measured |
| zoom60_town (high, desktop) | 0 | 1 | 79 | 1,471,271 | 41.8 | not measured |
| zoom60_brig (high, desktop) | 0 | 1 | 156 | 1,484,019 | 41.8 | not measured |
| zoom60_beach (high, desktop) | 0 | 1 | 116 | 1,476,995 | 41.8 | not measured |
| zoom300 (high, 1×) | 0 | 1 | 159 | 1,484,571 | 41.8 | not measured |
| night_phone (high, 2×) | 0 | 1 | 159 | 1,484,571 | 41.8 | not measured |
| fog_phone (high, 2×) | 0 | 1 | 159 | 1,484,571 | 41.8 | not measured |
| landscape (high, 1×) | 0 | 1 | 130 | 1,480,927 | 41.8 | not measured |
| sky_check (high, 1×, pitch 30) | 0 | 1 | 159 | 1,484,571 | 41.8 | not measured |

The single warning on every shot is `THREE.WebGLRenderer: KHR_parallel_shader_compile
extension not supported` (environment). The round 1 PCSS warning no longer appears.

## Verdict

**FAIL.** Lowest line: programmer-art checklist (3.5, four hits: flat sails and quay,
repeating mole stone and far-water lattice, a uniform teal water plane with a noon foam
smear, an identical-decal house kit with blob bushes), with water (4.0) and atmosphere (4.5)
next; only budget and errors (8.5) clears the bar. This round moved the scene from a sparse
sketch to a dense, tinted, propped port with a modelled tower, smoke, soft palm shadows,
fog at every hour and a shoreline that finally has a wet band — all real, and the town at
hero zoom is the first thing in this project that looks like a place. But the three things
that make R1 and R5 what they are — moving, reflecting water; sails and hull that read as
cloth and tarred timber; a horizon with a sun in it — did not change at all, and the frame is
still a near-nadir map at every pitch tried. Against Sea of Conquest or Dredge this is a
well-arranged diorama seen from a drone, not a painting of light on water.
