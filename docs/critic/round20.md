# Critic round 20 — Ocean look test, fourteenth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` written 19:57:16 UTC from HEAD
`fd4bd6c` ("Round 20 builder pass (part 2): bush count trimmed for triangle-budget margin";
`git log --oneline -1` confirms). Part 1 is `c811a99`: "opaque body beyond the shallows (no khaki
crescent), mirror at 0.12, narrow night moon path, softer fog planes, big tinted quay slabs, brighter day
panes" (`src/core/WorldUniforms.ts`, `src/ocean/Ocean.ts`, `src/port/Port.ts`, `src/world/World.ts`;
9 insertions / 8 deletions); part 2 is one line in `src/vegetation/Scrub.ts`. The first shot started 49 s
after the dist write. All ten shots were taken, in the required order, in the foreground, `--frames 4`
throughout: sixteen full frames under `shots/critic20/` plus fifty-seven native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled 1–5×, cut with a scratch pngjs script outside the repo).
Every frame and crop cited below was opened and looked at. No round 1–19 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.4–9.4 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0 (holds)

Two commit items touch materials. "Big tinted quay slabs" replaces the small running-bond grid with a
large one: slabs about 1.5 m across, each with the same pale highlight on its upper-left edge and the same
dark mortar line on its lower-right, laid in a perfectly regular half-offset bond; the tint variation is
there but at 3× the eye reads a stamped grid first (`shots/critic20/zoom60_town_crop_quay.png`,
`shots/critic20/zoom60_town.png` y 830–1080). Worse, the old small cobble grid is still underneath: it
shows through the grass verge as a chain-link lattice and runs right up to the new slab edge
(`shots/critic20/zoom60_town_crop_ground.png`, `shots/critic20/zoom60_town_crop_quay.png` top-left) —
"paving lifted off the shelf" from round 19 has not masked it. "Brighter day panes" is real: most shaded
windows now carry a pale blue-grey pane with mullions, but black voids remain on every façade — the upper
window of the white north face at 60 m, the mid-frame pink house, the top-right house at 120 m
(`shots/critic20/zoom60_town_crop_window.png` top window, `shots/critic20/zoom60_town_crop_shade.png`,
`shots/critic20/hero_phone_crop_town.png` x 660–760). Unchanged for a ninth round: the roof fleck pattern
repeats in diagonal rows every four tiles (`shots/critic20/zoom60_town_crop_roof.png`); shaded walls are a
flat blue-grey value (`shots/critic20/zoom60_town_crop_shade.png`); the foreshore wet strip is flat
lavender-grey with a regular row of blue-grey scallops on its water side (`shots/critic20/zoom60_beach_crop_wetband.png`,
`shots/critic20/zoom60_beach_crop_foam.png`); dry sand is a salmon blotch over a fine diagonal lattice
moiré (`shots/critic20/zoom60_beach_crop_sand.png`, `shots/critic20/zoom120_brig_crop_palm.png`); fronds are
flat lime blades in a starburst (`shots/critic20/zoom60_beach_crop_fronds.png`); mole boulders are grey
polygon cages in clear, night and fog (`shots/critic20/hero_phone_crop_mole.png`,
`shots/critic20/night_phone_crop_mole.png`, `shots/critic20/fog_phone_crop_mole.png`); the dock is a dark
pile of blocks with the rowboat clipping its end (`shots/critic20/hero_phone_crop_dock.png`). Still good:
the lit lime-washed walls with drawn cracks, sills, shutters, balcony shadows and vine stains
(`shots/critic20/zoom60_town_crop_walls.png`, `shots/critic20/zoom60_town_crop_shade.png` right); the
brig's deck, gratings, rail, hawse ring and rope coil (`shots/critic20/zoom120_brig_crop_bow.png`,
`shots/critic20/hero_phone_crop_brig.png`).
To 8.5: irregular slabs with broken corners, half stones and a rounded wet edge, and the cobble layer
removed from under the grass; glaze every window; per-house roof fleck noise; a warm bounce term in shade;
a wet band with gloss and grain; sand grain without a lattice; pinnate leaflets; solid boulders; a plank dock.

### 2. Light — 7.5 (holds)

The 17:30 sun is right: front-lit orange-cream walls, long violet shadows up-left at 4–5× object height,
the brig's long shadow lying across the basin toward the mole, tower and lighthouse shadows correct
(`shots/critic20/hero_phone.png`, `shots/critic20/hero_phone_crop_town.png`, `shots/critic20/zoom60_town.png`);
the glitter path into the sun at pitch 14 is still the project's best light
(`shots/critic20/sun_check_crop_glitter.png`); palm shadows cross the sand and wet band at 60 m
(`shots/critic20/zoom60_beach.png`). The "narrow night moon path" is narrower — a blade about 25 m wide
running from the quay toward the mole — but it is a white-grey blotchy sheet, not glitter, it stops dead
at a curved edge, and everything outside it is pure black: the left half of the basin and the whole lower
third of the frame measure rgb 0,0,0 (`shots/critic20/night_phone_crop_basin.png`,
`shots/critic20/night_phone_crop_left_water.png`, `shots/critic20/night_phone_crop_bottom.png`). The brig at
night is a faint navy silhouette with a stern lantern (`shots/critic20/night_phone_crop_brig.png`); the
lighthouse lamp is still a hard white crescent hotspot with no beam (`shots/critic20/night_phone_crop_mole.png`).
The palm shadow on the mainsail remains a green-grey curved stroke with a dotted tail; the palms are in the
120 m desktop frame's top-left corner now, but the shadow still reads as a stain on the cloth first
(`shots/critic20/zoom120_brig_crop_sail.png`, `shots/critic20/zoom120_brig.png`). Unchanged: the hill into the
sun is black with self-lit lime bushes (`shots/critic20/sun_check_crop_bottom.png`); fog casts full-strength
dock and brig shadows (`shots/critic20/fog_phone_crop_dock.png`, `shots/critic20/fog_phone_crop_brig.png`);
shaded walls have no bounce (`shots/critic20/zoom60_town_crop_shade.png`); the noon basin is a flat cyan
pool with a cobalt hole (`shots/critic20/contact_clear_12_crop_basin.png`). Holds at 7.5.
To 8.5: a glitter path along the moon azimuth with faint navy fill on wave backs over the whole basin; a
beam cone; bushes lit by the same sun as the ground; fog shadows at 30%; bounce in shade; a neutral-grey
sail shadow.

### 3. Atmosphere — 7.5 (holds)

"Softer fog planes" has softened the round 19 ring band: the darker grey-blue crescent across the lower
third of the fog frame is still there but with a gentler edge (`shots/critic20/fog_phone_crop_near_water.png`
y 300–500, `shots/critic20/fog_phone.png` y 2500–2900). Above it the fog remains one veil with a smooth
top-to-bottom gradient and no distance layers (`shots/critic20/fog_phone.png`). The bushes and town take the
fog well (`shots/critic20/fog_phone_crop_hill.png`, `shots/critic20/fog_phone_crop_town.png`); noon and 17:30
fog still differ (steel-blue versus lighter grey-blue: `shots/critic20/contact_fog_12_crop_basin.png`,
`shots/critic20/contact_fog_175_crop_basin.png`); night fog has warm lantern pools and halos though the
window colour has drifted back toward white (`shots/critic20/contact_fog_22_crop_town.png`). Unchanged: the
brig hull is a flat slate silhouette with every deck detail gone while the sails stay full cream
(`shots/critic20/fog_phone_crop_brig.png`); the dock is a full-strength dark slab
(`shots/critic20/fog_phone_crop_dock.png`); the boulders read as cages through the fog
(`shots/critic20/fog_phone_crop_mole.png`); the white sliver at the quay's right end shows in fog
(`shots/critic20/fog_phone_crop_quay_right.png`). The sky into the sun is a flat tan-to-grey gradient with a
disc and halo, no cobalt zenith, no rose belt, no cloud (`shots/critic20/sun_check_crop_sky.png`). Aerial
perspective on the far coast at 300 m is present but slight (`shots/critic20/zoom300_crop_top.png`). 7.5.
To 8.5: depth layers keyed to camera distance (R4), not a crescent; fog on the hull, dock and boulders; a
painted sky with a blue zenith, rose belt and clouds.

### 4. Water — 7.0 (holds)

The headline item, "opaque body beyond the shallows (no khaki crescent)", has removed the crescent's hard
edge but not the crescent. What is left is a broad tan-khaki haze in exactly the same place — starting at
the left edge below the brig's stern, sweeping across the frame and rising under the mole — with a soft
outer edge against the clean blue below and a lighter cyan ring above it near the ship
(`shots/critic20/hero_phone.png` y 2300–2700, `shots/critic20/hero_phone_crop_bottom.png`,
`shots/critic20/hero_phone_crop_band_edge.png`). It is fainter than round 19, and no longer reads as a
sandbar with an edge, but it is still a coloured stain centred on the camera nadir with no cause in the
scene. It is in every framing: khaki in the 17:30 contact (`shots/critic20/contact_clear_175_crop_bottom.png`),
khaki across the noon sparkle field (`shots/critic20/contact_clear_12_crop_sparkle.png`), a tan-cyan wash
in the harbour mouth at 300 m and in landscape (`shots/critic20/zoom300_crop_mouth.png`,
`shots/critic20/landscape_crop_basin.png`), a tan corner in the 60 m beach water
(`shots/critic20/zoom60_beach_crop_water.png` lower left), and a faint grey crescent in fog
(`shots/critic20/fog_phone_crop_near_water.png`). Good and unchanged: the open basin's long diagonal brush
strokes (`shots/critic20/hero_phone_crop_water.png`, `shots/critic20/zoom120_brig_crop_water.png`); the 120 m
lace rim with a soft inner fade and a translucent pale-green shallow band
(`shots/critic20/zoom120_brig_crop_shore_left.png`, `shots/critic20/zoom120_brig_crop_wash.png`); palm shadows
onto the water at 60 m (`shots/critic20/zoom60_beach.png`). Unchanged faults: the lavender wet strip with
regular scallops at 60 m (`shots/critic20/zoom60_beach_crop_wetband.png`); the rim a uniform bright outline
around the whole bay at 1× (`shots/critic20/landscape_crop_basin.png`, `shots/critic20/zoom300_crop_island.png`);
the white sliver at the right end of the quay (`shots/critic20/hero_phone_crop_quay_right.png`); the noon
basin a flat cyan pool with a cobalt hole and a dense field of hard white sparkle blobs
(`shots/critic20/contact_clear_12_crop_basin.png`, `shots/critic20/contact_clear_12_crop_sparkle.png`); no bow
foam, no mole foam, no hull or sail reflection (`shots/critic20/zoom120_brig_crop_bow.png`,
`shots/critic20/hero_phone_crop_mole.png`); deep water at 300 m a cobalt plane with faint streaks and no
swell (`shots/critic20/zoom300_crop_deep.png`); the night basin a white sheet over black
(`shots/critic20/night_phone_crop_basin.png`); the basin cyan rather than R1's blue-violet. 7.0.
To 8.5: kill the haze — the tilted framing should carry no sky reflection at all, and the shallow-to-deep
gradient must be authored in world space so it cannot follow the camera; then lace in tongues, a dark wet
line, the quay sliver gone, bow and mole foam, broken reflections, swell at 300 m, capped noon sparkle, a
real moon glitter path.

### 5. Scale and motion — 7.5 (holds)

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as one
place (`shots/critic20/hero_phone.png`, `shots/critic20/landscape.png`, `shots/critic20/zoom300.png`). The
jib is unchanged: a detached triangle hung off the bowsprit end with the forestay running past it
(`shots/critic20/hero_phone_crop_brig.png`, `shots/critic20/fog_phone_crop_brig.png`). The palm shadow on the
mainsail still reads as a mark on the cloth (`shots/critic20/zoom120_brig_crop_sail.png`). The dock is a
dark pile of blocks with the rowboat pushed into its end (`shots/critic20/hero_phone_crop_dock.png`); pale
translucent flecks sit over roofs and walls at 120 m and along the hill right of the tower
(`shots/critic20/hero_phone_crop_town.png` x 500–900 y 250–500, `shots/critic20/hero_phone_crop_hill.png`
x 350–560 y 640–760). Pennants and gulls are posed convincingly; motion is unverifiable from stills. 7.5.
To 8.5: bend the jib's luff onto the forestay with a hank line; a lighter plank dock; remove the flecks; a
motion capture.

### 6. Composition and squint test — 7.0 (holds)

At thumbnail the landscape and 300 m frames read as one painted island with a warm town
(`shots/critic20/landscape.png`, `shots/critic20/zoom300.png`, `shots/critic20/landscape_crop_left.png`). The
hero is better than round 19 — the tan crescent no longer has an edge, so it no longer reads as a sandbar —
but at squint the bottom third is still a warm smear under a cool basin, the second-largest tonal shape in
the frame after the town, and the eye still drops to it instead of climbing from the sails to the quay
(`shots/critic20/hero_phone.png`, `shots/critic20/hero_phone_crop_bottom.png`). The night is a wall of windows
over a black lower half with a white blotch on the right (`shots/critic20/night_phone.png`,
`shots/critic20/night_phone_crop_bottom.png`); the noon frame is a cyan pool with a sparkle field
(`shots/critic20/contact_clear_12_crop_basin.png`); the fog is a veil with a soft crescent in the lower third
(`shots/critic20/fog_phone.png`). The beach at 60 m still has nothing on the sand
(`shots/critic20/zoom60_beach.png`). 7.0.
To 8.5: the haze gone; moon on the near water; fog with distance planes; a banded noon basin; something on
the beach.

### 7. Budget and errors — 8.5 (holds)

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,451,239–1,475,385 at high quality (98.4% of the 1.5 M limit; 1,080,137 at
medium), textures 41.3 MB (limit 256). The part 2 commit says the bush count was trimmed for margin, yet
the high-quality triangle count is up 34,288 on round 19 (1,441,097 → 1,475,385) — whatever was added in
part 1 outweighs the trim, and the margin is now 24,615 triangles. Device fps not measured; headless p50
6.4–9.4 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 7.0 (holds; still a fail)

No clean hit. Marginal hits carried over: visible tiling on the quay (a bigger grid now, with the old
cobble grid ghosting through the grass and along the slab edge), roof fleck repeat
(`shots/critic20/zoom60_town_crop_quay.png`, `shots/critic20/zoom60_town_crop_ground.png`,
`shots/critic20/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic20/zoom60_beach_crop_sand.png`);
the regular scalloped edge on the wet strip (`shots/critic20/zoom60_beach_crop_wetband.png`); fog as one veil
above a soft crescent (`shots/critic20/fog_phone.png`, `shots/critic20/fog_phone_crop_near_water.png`); the
noon sparkle field of hard white blobs (`shots/critic20/contact_clear_12_crop_sparkle.png`); the pure-black
night foreground (`shots/critic20/night_phone_crop_bottom.png`); a near-uniform cobalt plane at 300 m
(`shots/critic20/zoom300_crop_deep.png`); the cause-less tan haze across the hero basin
(`shots/critic20/hero_phone_crop_bottom.png`) — softer than round 19's ring but still a reflection artefact
with colour and shape that nobody painted. Seven marginals, none cleared. 7.0.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls a flat value but deliberate (`shots/critic20/zoom60_town_crop_shade.png`); the lavender wet strip flat but inside a painted shoreline (`shots/critic20/zoom60_beach_crop_foam.png`) |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | regular slab grid with uniform edge highlight, cobble grid ghosting through grass and at the slab edge (`shots/critic20/zoom60_town_crop_quay.png`, `shots/critic20/zoom60_town_crop_ground.png`); roof repeat every four rows (`shots/critic20/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic20/zoom60_beach_crop_sand.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic20/hero_phone.png`, `shots/critic20/zoom60_beach.png`, `shots/critic20/zoom60_town_crop_shade.png`) |
| Grey nights | clear | night is near black with warm windows (`shots/critic20/night_phone.png`, `shots/critic20/night_phone_crop_town.png`); the pure-black lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | tan haze with no cause across the hero basin (`shots/critic20/hero_phone_crop_bottom.png`, `shots/critic20/hero_phone_crop_band_edge.png`); deep water at 300 m a near-flat cobalt plane (`shots/critic20/zoom300_crop_deep.png`); noon pool (`shots/critic20/contact_clear_12_crop_basin.png`); the rim a uniform bright outline at 1× (`shots/critic20/landscape_crop_basin.png`) but lace at 120 m desktop (`shots/critic20/zoom120_brig_crop_wash.png`) |
| Hard water-to-beach line | **hit (marginal)** | soft fade onto sand at 120 m (`shots/critic20/zoom120_brig_crop_shore_left.png`); regular blue-grey scallops on the water side of the wet strip at 3× (`shots/critic20/zoom60_beach_crop_wetband.png`); soft at 300 m (`shots/critic20/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic20/zoom60_beach.png`, `shots/critic20/zoom60_beach_crop_topleft.png`); motion unverifiable |
| Fog as one colour | **hit (marginal)** | bushes and town fogged (`shots/critic20/fog_phone_crop_hill.png`, `shots/critic20/fog_phone_crop_town.png`); above the soft crescent the fog is one veil with a gradient, hull a silhouette (`shots/critic20/fog_phone.png`, `shots/critic20/fog_phone_crop_brig.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic20/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **The tan-khaki haze across the hero's bottom third is still there — edge gone, colour and crescent shape kept; khaki at noon and in the 17:30 contact, tan-cyan in the harbour mouth at 300 m and landscape, tan in the 60 m beach corner, grey in fog.** `shots/critic20/hero_phone.png`, `shots/critic20/hero_phone_crop_bottom.png`, `shots/critic20/hero_phone_crop_band_edge.png`, `shots/critic20/contact_clear_175_crop_bottom.png`, `shots/critic20/contact_clear_12_crop_sparkle.png`, `shots/critic20/zoom300_crop_mouth.png`, `shots/critic20/landscape_crop_basin.png`, `shots/critic20/zoom60_beach_crop_water.png`, `shots/critic20/fog_phone_crop_near_water.png`. Fix: no sky reflection at all in the tilted framing (mirror 0.0, not 0.12) and author the shallow-to-deep gradient in world space from the seabed depth so nothing follows the camera nadir.
2. **Night: the moon path is a white-grey blotchy sheet about 25 m wide with a dead-stop edge on the right of the basin; the left half and the whole lower third are rgb 0,0,0; no beam, a hard crescent hotspot on the lamp; the brig a faint ghost.** `shots/critic20/night_phone.png`, `shots/critic20/night_phone_crop_basin.png`, `shots/critic20/night_phone_crop_left_water.png`, `shots/critic20/night_phone_crop_bottom.png`, `shots/critic20/night_phone_crop_mole.png`, `shots/critic20/night_phone_crop_brig.png`. Fix: a glitter path (sparse highlights, not a sheet) along the moon azimuth, faint navy fill on wave backs across the whole basin, a beam cone, moon on the rigging.
3. **Fog: one veil above a soft crescent, no distance layers; hull a slate silhouette under cream sails; dock full-strength; boulders cages; quay sliver.** `shots/critic20/fog_phone.png`, `shots/critic20/fog_phone_crop_near_water.png`, `shots/critic20/fog_phone_crop_brig.png`, `shots/critic20/fog_phone_crop_dock.png`, `shots/critic20/fog_phone_crop_mole.png`, `shots/critic20/fog_phone_crop_quay_right.png`. Fix: key the layers to camera distance (R4); fog the hull, dock and boulders; shadows at 30%.
4. **Town at 60 m: the new slab grid is as regular as the old one, the cobble grid still ghosts through the grass and along the slab edge, roof fleck repeat, black window voids on every façade, flat shaded walls.** `shots/critic20/zoom60_town_crop_quay.png`, `shots/critic20/zoom60_town_crop_ground.png`, `shots/critic20/zoom60_town_crop_roof.png`, `shots/critic20/zoom60_town_crop_window.png`, `shots/critic20/zoom60_town_crop_shade.png`. Fix: irregular slabs with broken corners and a rounded wet edge; delete the cobble layer under grass; per-house fleck noise; glaze every window; warm bounce in shade.
5. **Noon: the basin is a flat cyan pool with a cobalt hole; the sparkle field is a dense scatter of hard white blobs with the khaki haze across it.** `shots/critic20/contact_clear_12_crop_basin.png`, `shots/critic20/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure; cap clump coverage and soften the sparkle; no haze.
6. **The 60 m wet band is a flat lavender-grey strip with a regular row of blue-grey scallops on its water side; the rim a uniform outline at 1×.** `shots/critic20/zoom60_beach_crop_wetband.png`, `shots/critic20/zoom60_beach_crop_foam.png`, `shots/critic20/landscape_crop_basin.png`. Fix: darker, glossier wet sand with grain; break the scallop period with noise; split the lace into tongues with gaps.
7. **Dry sand a salmon blotch over a lattice moiré; nothing on the beach.** `shots/critic20/zoom60_beach_crop_sand.png`, `shots/critic20/zoom120_brig_crop_palm.png`, `shots/critic20/zoom60_beach.png`. Fix: a non-axis-aligned grain noise; a wrack line, a boat, rocks.
8. **Jib a detached triangle with the forestay running past it.** `shots/critic20/hero_phone_crop_brig.png`, `shots/critic20/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
9. **The palm shadow on the mainsail reads as a stain: a green-grey curved stroke with a dotted tail.** `shots/critic20/zoom120_brig_crop_sail.png`, `shots/critic20/zoom120_brig.png`. Fix: neutral-grey shadow tint on cloth and a sharper edge, or cut the shadow at the sail.
10. **Fronds flat lime blades in a starburst.** `shots/critic20/zoom60_beach_crop_fronds.png`, `shots/critic20/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
11. **Sky into the sun a flat tan-to-grey gradient, no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic20/sun_check_crop_sky.png`, `shots/critic20/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Mole boulders grey polygon cages in clear, night and fog; no foam at the mole.** `shots/critic20/hero_phone_crop_mole.png`, `shots/critic20/night_phone_crop_mole.png`, `shots/critic20/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
13. **Bushes lime lollipops with hard black blobs; a blurred dark smear across the hill; pale translucent flecks over roofs, walls and the hill right of the tower at 120 m.** `shots/critic20/hero_phone_crop_hill.png`, `shots/critic20/hero_phone_crop_town.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the flecks.
14. **Dock a dark pile of blocks with the rowboat clipping its end; white sliver at the right end of the quay in clear and fog.** `shots/critic20/hero_phone_crop_dock.png`, `shots/critic20/hero_phone_crop_quay_right.png`, `shots/critic20/fog_phone_crop_quay_right.png`. Fix: lighter plank albedo with plank lines and piles; move the boat off the dock; kill the sliver.
15. **Deep water at 300 m a near-flat cobalt plane with no swell; the basin cyan rather than R1's blue-violet; no bow foam or hull reflection; triangles at 98.4% of budget.** `shots/critic20/zoom300_crop_deep.png`, `shots/critic20/hero_phone_crop_water.png`, `shots/critic20/zoom120_brig_crop_bow.png`. Fix: swell banding at 300 m; shift the deep basin toward `#1E3A7A`; a bow collar and broken reflections; find 100 k triangles of headroom.

## Round 19 issues — status

| # | Round 19 issue | Status | Evidence |
|---|---|---|---|
| 1 | Tan-khaki crescent ring with a readable edge across the hero's bottom third; grey in fog, khaki at noon, cyan at 300 m and landscape | **improved (marginal)** — the edge is gone; the tan haze keeps the crescent's place, colour and shape in every framing | `shots/critic20/hero_phone_crop_bottom.png`, `shots/critic20/hero_phone_crop_band_edge.png`, `shots/critic20/contact_clear_175_crop_bottom.png`, `shots/critic20/zoom300_crop_mouth.png`, `shots/critic20/landscape_crop_basin.png`, `shots/critic20/zoom60_beach_crop_water.png`, `shots/critic20/fog_phone_crop_near_water.png` |
| 2 | Night: 40 m moon sheet on the right, left half and lower half black, no beam, crescent hotspot, brig a ghost | **improved (marginal)** — the sheet is narrower (~25 m) but still a white blotch with a hard stop; black elsewhere; hotspot, no beam, ghost brig unchanged | `shots/critic20/night_phone_crop_basin.png`, `shots/critic20/night_phone_crop_left_water.png`, `shots/critic20/night_phone_crop_bottom.png`, `shots/critic20/night_phone_crop_mole.png`, `shots/critic20/night_phone_crop_brig.png` |
| 3 | Fog depth planes a grey ring band; one veil above; slate hull; dock full-strength; boulders cages | **improved (marginal)** — the band is softer; everything else unchanged | `shots/critic20/fog_phone_crop_near_water.png`, `shots/critic20/fog_phone.png`, `shots/critic20/fog_phone_crop_brig.png`, `shots/critic20/fog_phone_crop_dock.png`, `shots/critic20/fog_phone_crop_mole.png` |
| 4 | Town at 60 m: quay grid under crack lines, roof repeat, half the shaded windows voids, flat shade, cobble ghost, shadow smudge | **improved (marginal)** — more windows glazed, bigger slabs; the grid is still a grid, the cobble ghost is more visible against the new slab edge, roof repeat and flat shade unchanged | `shots/critic20/zoom60_town_crop_quay.png`, `shots/critic20/zoom60_town_crop_ground.png`, `shots/critic20/zoom60_town_crop_roof.png`, `shots/critic20/zoom60_town_crop_window.png`, `shots/critic20/zoom60_town_crop_shade.png` |
| 5 | Noon basin a flat cyan pool with a cobalt hole; sparkle field of hard white blobs with the khaki ring | **unchanged** | `shots/critic20/contact_clear_12_crop_basin.png`, `shots/critic20/contact_clear_12_crop_sparkle.png` |
| 6 | 60 m wet band a flat lavender strip with scalloped edge; rim a uniform outline at 1× | **unchanged** | `shots/critic20/zoom60_beach_crop_wetband.png`, `shots/critic20/zoom60_beach_crop_foam.png`, `shots/critic20/landscape_crop_basin.png` |
| 7 | Dry sand a salmon blotch with a lattice moiré; nothing on the beach | **unchanged** | `shots/critic20/zoom60_beach_crop_sand.png`, `shots/critic20/zoom60_beach.png` |
| 8 | Jib a detached triangle | **unchanged** | `shots/critic20/hero_phone_crop_brig.png`, `shots/critic20/fog_phone_crop_brig.png` |
| 9 | Palm shadow on the mainsail reads as a stain | **unchanged** | `shots/critic20/zoom120_brig_crop_sail.png` |
| 10 | Fronds flat blades in a starburst | **unchanged** | `shots/critic20/zoom60_beach_crop_fronds.png`, `shots/critic20/zoom120_brig_crop_palm.png` |
| 11 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic20/sun_check_crop_sky.png`, `shots/critic20/sun_check_crop_bottom.png` |
| 12 | Mole boulders wire cages; no mole foam | **unchanged** | `shots/critic20/hero_phone_crop_mole.png`, `shots/critic20/fog_phone_crop_mole.png` |
| 13 | Bush lollipops; dark hill smear; white specks; roof flecks | **unchanged** | `shots/critic20/hero_phone_crop_hill.png`, `shots/critic20/hero_phone_crop_town.png` |
| 14 | Dock a pile of dark blocks; white sliver at the right end of the quay | **unchanged** | `shots/critic20/hero_phone_crop_dock.png`, `shots/critic20/hero_phone_crop_quay_right.png`, `shots/critic20/fog_phone_crop_quay_right.png` |
| 15 | Deep water flat at 300 m; basin cyan not blue-violet; no bow foam or reflection | **unchanged** | `shots/critic20/zoom300_crop_deep.png`, `shots/critic20/hero_phone_crop_water.png`, `shots/critic20/zoom120_brig_crop_bow.png` |

## Budget lines (from `shots/critic20/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,475,385 | 41.3 | 6.4 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,475,385 | 41.3 | 7.4 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,080,137 | 41.3 | 7.2–9.4 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.046 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,451,239 | 41.3 | 6.9 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,474,975 | 41.3 | 6.4 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,457,451 | 41.3 | 7.8 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,475,385 | 41.3 | 7.4 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,475,385 | 41.3 | 7.2 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,475,385 | 41.3 | 6.8 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,475,385 | 41.3 | 8.7 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 98.4% of the triangle limit, up
from 96.1% in round 19 despite the "trimmed for margin" commit. The one warning is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device fps: not
measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** irregular slabs and the cobble layer removed from under the grass; every window glazed; a non-repeating roof; a wet band with gloss and grain; sand grain; leaflets; solid boulders; a plank dock; bounce in shade.
- **Light (7.5):** a moon glitter path with fill and a beam; fog shadows stopped down; bushes lit like the ground; a banded noon basin; a shadow on the sail that reads as one.
- **Atmosphere (7.5):** distance-keyed fog layers, not a crescent; fog on the hull, dock and boulders; a painted sky.
- **Water (7.0):** the haze gone; lace in tongues; a dark wet line; the quay sliver gone; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; no flecks; a motion capture.
- **Composition (7.0):** the haze gone; moon on the near water; fog with depth; something on the beach.
- **Programmer art (7.0):** clear the marginals (slab/cobble/roof tiling and sand moiré, scalloped wet-strip edge, tan haze, single-veil fog, noon sparkle blobs, black night foreground, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials, water, composition and the programmer-art checklist at 7.0, then light,
atmosphere, scale and motion at 7.5; only budget and errors (8.5) clears the bar. Nothing moved a full
half-point. The round's four visual claims each land as a partial: the khaki crescent lost its edge but not
its colour or its place, so the hero's bottom third is a stain rather than a sandbar; the moon path is
narrower but is still a white sheet over a black basin; the fog crescent is softer but the fog is still one
veil; the quay slabs are bigger but they are the same stamped grid, with the old cobble grid now more visible
where it ghosts through the grass beside the new slab edge. The brighter day panes are the one item that
reads as intended, and it stops short of every window. The triangle count went up, not down. The rest of
the round 19 list — the black night, the noon pool, the scallops, the sand, the jib, the fronds, the
boulders, the sky, the dock, the flecks — is untouched for a ninth round. Scores: 7.0/7.5/7.5/7.0/7.5/7.0/8.5/7.0.
Against Sea of Conquest the 120 m brig frame, the 60 m beach shoreline and the landscape frame still read
as one painted harbour with the right light; the hero carries a haze it cannot explain, and the night, the
fog, the noon frame and the 60 m town still do not read as the reference.
