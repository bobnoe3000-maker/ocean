# Critic round 21 — Ocean look test, fifteenth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` written 21:20:02 UTC from HEAD
`e373491` ("Round 21 builder pass (part 2): night navy floor at a seventh of the strength (the first pass
lit the sea like day)"; `git log --oneline -1` confirms). Part 1 is `df0d14f`: "cooled and reduced sky
reflection on the water (no tan band), self-lit navy night floor, soft-edged moon path, day-readable
window panes, packed-earth town ground with small setts, budget trims" (`src/ocean/Ocean.ts`,
`src/port/Port.ts`, `src/terrain/Terrain.ts`, `src/vegetation/Palms.ts`, `src/vegetation/Scrub.ts`;
14 insertions / 9 deletions); part 2 is one line in `src/ocean/Ocean.ts`. The first shot started 51 s
after the dist write. All ten shots were taken, in the required order, in the foreground, `--frames 4`
throughout: sixteen full frames under `shots/critic21/` plus sixty-five native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled 1–5×, cut with a scratch pngjs script outside the repo).
Every frame and crop cited below was opened and looked at. No round 1–20 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.1–9.4 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0 (holds)

One round 20 item is genuinely fixed: the cobble lattice that ghosted through the grass verge behind the
quay is gone, replaced by a packed-earth strip with grass tufts and a soft lamp-post shadow across it
(`shots/critic21/zoom60_town_crop_ground.png`, `shots/critic21/zoom60_town.png` y 700–1000). The quay
slabs themselves are the same stamped half-bond grid as round 20: every slab about 1.5 m, the same pale
highlight on the upper-left edge and the same blue-grey mortar line lower-right, no broken corner, no half
stone, no wet rounding at the water edge (`shots/critic21/zoom60_town_crop_quay.png`,
`shots/critic21/zoom60_town_crop_lamp.png`). "Day-readable window panes" is partly real: the panes on the
lit façades are pale blue-grey with mullions (`shots/critic21/zoom60_town_crop_walls.png`), but every
window still carries a pure-black rectangle beside the pane (the open shutter) and doorways are black
voids — the white north face at 60 m, the shaded east wall, the tower-side house
(`shots/critic21/zoom60_town_crop_window.png`, `shots/critic21/zoom60_town_crop_shade.png`,
`shots/critic21/zoom60_town_crop_topright.png`). Unchanged for a tenth round: the roof fleck pattern
repeats in diagonal rows every four tiles (`shots/critic21/zoom60_town_crop_roof.png`); shaded walls are a
single blue-grey value with drawn cracks and no bounce (`shots/critic21/zoom60_town_crop_shade.png`); the
foreshore wet strip is a flat lavender-grey band with a regular scallop row on its water side
(`shots/critic21/zoom60_beach_crop_wetband.png`, `shots/critic21/zoom60_beach_crop_foam.png`); dry sand is
a salmon blotch over a fine diagonal weave moiré (`shots/critic21/zoom60_beach_crop_sand.png`,
`shots/critic21/zoom120_brig_crop_shore_left.png`); fronds are flat lime blades in a starburst
(`shots/critic21/zoom60_beach_crop_fronds.png`, `shots/critic21/zoom120_brig_crop_palm.png`); mole boulders
are grey polygon cages in clear, night and fog (`shots/critic21/hero_phone_crop_mole.png`,
`shots/critic21/night_phone_crop_mole.png`, `shots/critic21/fog_phone_crop_mole.png`); the dock is a dark
pile of blocks with the rowboat clipping its end (`shots/critic21/hero_phone_crop_dock.png`,
`shots/critic21/fog_phone_crop_dock.png`). Still good: the lit lime-washed walls with cracks, sills,
shutters, balcony shadows and vine stains (`shots/critic21/zoom60_town_crop_walls.png`); the brig's deck,
gratings, rail, hawse ring and rope coil (`shots/critic21/zoom120_brig_crop_bow.png`); the dock planking
under the night lamp (`shots/critic21/night_phone_crop_dock.png`).
To 8.5: irregular slabs with broken corners, half stones and a rounded wet edge; shutters and doors with
a value, not black; per-house roof fleck noise; a warm bounce term in shade; a wet band with gloss and
grain; sand grain without a weave; pinnate leaflets; solid boulders; a lighter plank dock by day.

### 2. Light — 7.5 (holds)

The 17:30 sun is right: front-lit orange-cream walls, long violet shadows up-left at 4–5× object height,
the brig's long shadow across the basin, tower and lighthouse shadows correct
(`shots/critic21/hero_phone.png`, `shots/critic21/hero_phone_crop_town.png`, `shots/critic21/zoom60_town.png`);
the glitter path into the sun at pitch 14 is still the project's best light
(`shots/critic21/sun_check_crop_glitter.png`, `shots/critic21/sun_check_crop_town.png`); palm shadows cross
the sand and wet band at 60 m (`shots/critic21/zoom60_beach.png`, `shots/critic21/zoom60_beach_crop_topleft.png`).
The night is better in one specific way: the "navy floor" has removed the rgb 0,0,0 areas — the lower third
now measures rgb 0,0,27 and the left basin 1,2,26, a faint navy with visible chop grain rather than a
hole (`shots/critic21/night_phone_crop_bottom.png`, `shots/critic21/night_phone_crop_left_water.png`), and
the dock lamp now throws a warm pool with a halo over readable planks (`shots/critic21/night_phone_crop_dock.png`).
The "soft-edged moon path" is soft-edged, but it is still a white-grey blotchy sheet about 25 m wide with
swirled pale wisps in it, not glitter (`shots/critic21/night_phone_crop_basin.png`,
`shots/critic21/night_phone.png` x 1000–1560 y 1200–2000). The lighthouse lamp is still a hard white
crescent hotspot with no beam (`shots/critic21/night_phone_crop_mole.png`); the brig at night is a navy
silhouette whose deck now faintly reads, with one stern lantern (`shots/critic21/night_phone_crop_brig.png`);
the hill behind the town is pure black (`shots/critic21/night_phone_crop_hill.png`, mean rgb 2,1,0). The
palm shadow on the mainsail is unchanged — a green-grey curved stroke with a dotted tail that reads as a
stain on the cloth first (`shots/critic21/zoom120_brig_crop_sail.png`). Unchanged: the hill into the sun
is black with self-lit lime bushes (`shots/critic21/sun_check_crop_bottom.png`); fog casts full-strength
dock and brig shadows (`shots/critic21/fog_phone_crop_dock.png`, `shots/critic21/fog_phone_crop_brig.png`);
shaded walls have no bounce (`shots/critic21/zoom60_town_crop_shade.png`); the noon basin is a flat cyan
pool with a cobalt hole (`shots/critic21/contact_clear_12_crop_basin.png`). Holds at 7.5.
To 8.5: a glitter path of sparse highlights along the moon azimuth over the navy fill; a beam cone; moon
on the hill and rigging; bushes lit by the same sun as the ground; fog shadows at 30%; bounce in shade;
a neutral-grey sail shadow.

### 3. Atmosphere — 7.5 (holds)

Nothing in the two commits touches fog or sky, and nothing moved. The fog frame is one veil with a smooth
top-to-bottom gradient and no distance layers; the lighter grey-tan crescent across the lower third is
still there with a soft edge (`shots/critic21/fog_phone.png` y 2300–2900,
`shots/critic21/fog_phone_crop_near_water.png` y 0–400). The bushes and town take the fog well
(`shots/critic21/fog_phone_crop_hill.png`, `shots/critic21/fog_phone_crop_town.png`); noon and 17:30 fog
still differ (`shots/critic21/contact_fog_12_crop_basin.png`, `shots/critic21/contact_fog_175_crop_basin.png`);
night fog has warm lantern pools and halos, but the windows are near-white and the lighthouse lamp is a
large white blob (`shots/critic21/contact_fog_22_crop_town.png`, `shots/critic21/contact_fog_22_crop_basin.png`).
Unchanged: the brig hull is a flat slate silhouette with every deck detail gone while the sails stay full
cream (`shots/critic21/fog_phone_crop_brig.png`); the dock a full-strength dark slab
(`shots/critic21/fog_phone_crop_dock.png`); the boulders read as cages through the fog
(`shots/critic21/fog_phone_crop_mole.png`); the white sliver at the quay's right end shows in fog
(`shots/critic21/fog_phone_crop_quay_right.png`). The sky into the sun is a flat tan-to-grey gradient with
a small disc and halo, no cobalt zenith, no rose belt, no cloud (`shots/critic21/sun_check_crop_sky.png`).
Aerial perspective on the far coast at 300 m is present but slight (`shots/critic21/zoom300_crop_top.png`).
7.5.
To 8.5: depth layers keyed to camera distance (R4), not a crescent; fog on the hull, dock and boulders;
a painted sky with a blue zenith, rose belt and clouds.

### 4. Water — 7.0 (holds)

The headline claim, "cooled and reduced sky reflection on the water (no tan band)", does not survive the
hero frame. The band is in the same place — starting at the left edge below the brig's stern, sweeping
across the lower third and rising under the mole — and it is still khaki-olive, with a soft outer edge
against clean blue and a pale cyan halo ring on its inner side near the ship
(`shots/critic21/hero_phone.png` y 2300–2800, `shots/critic21/hero_phone_crop_bottom.png`,
`shots/critic21/hero_phone_crop_band_edge.png`). It may be a shade cooler than round 20; it is not gone.
It is in every framing: khaki with a soft edge in the 17:30 contact
(`shots/critic21/contact_clear_175_crop_bottom.png`), a khaki bank with a bright glitter core across the
noon sparkle field (`shots/critic21/contact_clear_12_crop_sparkle.png`), a tan-cyan wash in the harbour
mouth at 300 m and in landscape (`shots/critic21/zoom300_crop_mouth.png`,
`shots/critic21/landscape_crop_basin.png`), a lighter grey-tan crescent in fog
(`shots/critic21/fog_phone_crop_near_water.png`). Good and unchanged: the open basin's diagonal brush-stroke
chop (`shots/critic21/hero_phone_crop_water.png`, `shots/critic21/zoom120_brig_crop_water.png`); the 120 m
lace rim with a soft inner fade and a translucent pale-green shallow band
(`shots/critic21/zoom120_brig_crop_wash.png`, `shots/critic21/zoom120_brig_crop_shore_left.png`); palm
shadows onto the water at 60 m (`shots/critic21/zoom60_beach_crop_water.png`). Unchanged faults: the
lavender wet strip with regular scallops at 60 m (`shots/critic21/zoom60_beach_crop_wetband.png`,
`shots/critic21/zoom60_beach_crop_foam.png`); the rim a uniform bright outline around the whole bay at 1×
(`shots/critic21/landscape_crop_basin.png`, `shots/critic21/zoom300_crop_island.png`); the white sliver at
the right end of the quay (`shots/critic21/hero_phone_crop_quay_right.png`); the noon basin a flat cyan
pool with a cobalt hole and a dense field of hard white sparkle blobs
(`shots/critic21/contact_clear_12_crop_basin.png`, `shots/critic21/contact_clear_12_crop_sparkle.png`); no
bow foam, no mole foam, no hull or sail reflection (`shots/critic21/zoom120_brig_crop_bow.png`,
`shots/critic21/hero_phone_crop_mole.png`); deep water at 300 m a cobalt plane with faint streaks and no
swell (`shots/critic21/zoom300_crop_deep.png`); the basin cyan rather than R1's blue-violet. The night
basin is the one improvement: a navy floor under the moon sheet instead of black
(`shots/critic21/night_phone_crop_basin.png`). 7.0.
To 8.5: kill the band — no sky reflection at all in the tilted framing, and a shallow-to-deep gradient
authored in world space from seabed depth so nothing follows the camera nadir; then lace in tongues, a
dark wet line, the quay sliver gone, bow and mole foam, broken reflections, swell at 300 m, capped noon
sparkle, a real moon glitter path.

### 5. Scale and motion — 7.5 (holds)

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as
one place (`shots/critic21/hero_phone.png`, `shots/critic21/landscape.png`, `shots/critic21/zoom300.png`).
The jib is unchanged: a detached triangle hung off the bowsprit end with the forestay running past it
(`shots/critic21/hero_phone_crop_brig.png`, `shots/critic21/fog_phone_crop_brig.png`). The palm shadow on
the mainsail still reads as a mark on the cloth (`shots/critic21/zoom120_brig_crop_sail.png`). The dock is
a dark pile of blocks with the rowboat pushed into its end (`shots/critic21/hero_phone_crop_dock.png`);
pale translucent flecks sit over roofs and walls at 120 m and at 60 m
(`shots/critic21/hero_phone_crop_town.png` x 500–900, `shots/critic21/zoom60_town_crop_topright.png`,
`shots/critic21/zoom60_town_crop_roof.png` top-left). New this round: a row of four or five dark dashes
floats off the brig's starboard quarter, outside the rail, with no object attached
(`shots/critic21/zoom120_brig_crop_stern.png` x 300–450 y 280–380). Pennants and gulls are posed
convincingly; motion is unverifiable from stills. 7.5.
To 8.5: bend the jib's luff onto the forestay with a hank line; a lighter plank dock; remove the flecks
and the floating dashes; a motion capture.

### 6. Composition and squint test — 7.0 (holds)

At thumbnail the landscape and 300 m frames read as one painted island with a warm town
(`shots/critic21/landscape.png`, `shots/critic21/zoom300.png`, `shots/critic21/landscape_crop_left.png`,
`shots/critic21/landscape_crop_right.png`). The hero at squint is what it was: the bottom third is a warm
khaki smear under a cool basin, the second-largest tonal shape after the town, and the eye still drops to
it instead of climbing from the sails to the quay (`shots/critic21/hero_phone.png`,
`shots/critic21/hero_phone_crop_bottom.png`). The night frame is better composed than round 20 — the navy
floor gives the lower half a plane instead of a void and the moon sheet no longer has a hard right edge —
but it is still a wall of windows over a dark half with a white blotch on the right
(`shots/critic21/night_phone.png`, `shots/critic21/night_phone_crop_basin.png`). The noon frame is a cyan
pool with a sparkle field (`shots/critic21/contact_clear_12_crop_basin.png`); the fog is a veil with a soft
crescent in the lower third (`shots/critic21/fog_phone.png`). The beach at 60 m still has nothing on the
sand (`shots/critic21/zoom60_beach.png`). 7.0.
To 8.5: the band gone; moon glitter on the near water; fog with distance planes; a banded noon basin;
something on the beach.

### 7. Budget and errors — 8.5 (holds)

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,432,135–1,456,281 at high quality (97.1% of the 1.5 M limit; 1,068,233
at medium), textures 41.3 MB (limit 256). "Budget trims" is real this time: high-quality triangles are
down 19,104 on round 20 (1,475,385 → 1,456,281) and medium down 11,904; the margin is 43,719 triangles.
Device fps not measured; headless p50 6.1–9.4 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 7.0 (holds; still a fail)

No clean hit. One marginal cleared: the cobble grid ghosting through the grass is gone
(`shots/critic21/zoom60_town_crop_ground.png`). One marginal downgraded but not cleared: the night
foreground is no longer rgb 0,0,0, but it is a featureless navy plane at rgb 0,0,27
(`shots/critic21/night_phone_crop_bottom.png`). Marginal hits carried over: visible tiling on the quay slab
grid and the roof fleck repeat (`shots/critic21/zoom60_town_crop_quay.png`,
`shots/critic21/zoom60_town_crop_roof.png`); sand weave moiré (`shots/critic21/zoom60_beach_crop_sand.png`);
the regular scalloped edge on the wet strip (`shots/critic21/zoom60_beach_crop_foam.png`); fog as one veil
above a soft crescent (`shots/critic21/fog_phone.png`, `shots/critic21/fog_phone_crop_near_water.png`); the
noon sparkle field of hard white blobs (`shots/critic21/contact_clear_12_crop_sparkle.png`); a near-uniform
cobalt plane at 300 m (`shots/critic21/zoom300_crop_deep.png`); the cause-less khaki band across the hero
basin (`shots/critic21/hero_phone_crop_bottom.png`). Six marginals, one cleared, one softened. 7.0.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls a flat value but deliberate (`shots/critic21/zoom60_town_crop_shade.png`); the lavender wet strip flat but inside a painted shoreline (`shots/critic21/zoom60_beach_crop_foam.png`) |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | regular slab grid with uniform edge highlight (`shots/critic21/zoom60_town_crop_quay.png`, `shots/critic21/zoom60_town_crop_lamp.png`); roof repeat every four rows (`shots/critic21/zoom60_town_crop_roof.png`); sand weave moiré (`shots/critic21/zoom60_beach_crop_sand.png`); the cobble ghost under grass is cleared (`shots/critic21/zoom60_town_crop_ground.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic21/hero_phone.png`, `shots/critic21/zoom60_beach.png`, `shots/critic21/zoom60_town_crop_ground.png`) |
| Grey nights | clear | night is navy-black with warm windows and lamp pools (`shots/critic21/night_phone.png`, `shots/critic21/night_phone_crop_town.png`, `shots/critic21/night_phone_crop_dock.png`); the featureless navy lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | khaki band with no cause across the hero basin (`shots/critic21/hero_phone_crop_bottom.png`, `shots/critic21/hero_phone_crop_band_edge.png`, `shots/critic21/contact_clear_175_crop_bottom.png`); deep water at 300 m a near-flat cobalt plane (`shots/critic21/zoom300_crop_deep.png`); noon pool (`shots/critic21/contact_clear_12_crop_basin.png`); the rim a uniform bright outline at 1× (`shots/critic21/landscape_crop_basin.png`) but lace at 120 m desktop (`shots/critic21/zoom120_brig_crop_wash.png`) |
| Hard water-to-beach line | **hit (marginal)** | soft fade onto sand at 120 m (`shots/critic21/zoom120_brig_crop_shore_left.png`); regular blue-grey scallops on the water side of the wet strip at 3–4× (`shots/critic21/zoom60_beach_crop_wetband.png`, `shots/critic21/zoom60_beach_crop_foam.png`); soft at 300 m (`shots/critic21/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic21/zoom60_beach.png`, `shots/critic21/zoom60_beach_crop_topleft.png`); motion unverifiable |
| Fog as one colour | **hit (marginal)** | bushes and town fogged (`shots/critic21/fog_phone_crop_hill.png`, `shots/critic21/fog_phone_crop_town.png`); above the soft crescent the fog is one veil with a gradient, hull a silhouette (`shots/critic21/fog_phone.png`, `shots/critic21/fog_phone_crop_brig.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic21/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own (`shots/critic21/contact.png`) |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **The khaki band across the hero's bottom third is still there despite "no tan band" — same place, same crescent shape, same soft edge and cyan inner halo; khaki at noon and in the 17:30 contact, tan-cyan in the harbour mouth at 300 m and landscape, grey-tan in fog.** `shots/critic21/hero_phone.png`, `shots/critic21/hero_phone_crop_bottom.png`, `shots/critic21/hero_phone_crop_band_edge.png`, `shots/critic21/contact_clear_175_crop_bottom.png`, `shots/critic21/contact_clear_12_crop_sparkle.png`, `shots/critic21/zoom300_crop_mouth.png`, `shots/critic21/landscape_crop_basin.png`, `shots/critic21/fog_phone_crop_near_water.png`. Fix: reflection term to zero in the tilted framing and the shallow-to-deep gradient authored in world space from seabed depth; verify by checking that the band does not move when `--lu/--lw` moves the target.
2. **Night: the moon path is a soft-edged but still white-grey blotchy sheet about 25 m wide with swirled wisps; the rest of the basin is a featureless navy plane; no beam, a hard crescent hotspot on the lamp; the hill pure black.** `shots/critic21/night_phone.png`, `shots/critic21/night_phone_crop_basin.png`, `shots/critic21/night_phone_crop_bottom.png`, `shots/critic21/night_phone_crop_left_water.png`, `shots/critic21/night_phone_crop_mole.png`, `shots/critic21/night_phone_crop_hill.png`. Fix: a glitter path of sparse highlights along the moon azimuth over the navy fill; a beam cone; faint moonlight on the hill and rigging.
3. **Fog: one veil above a soft crescent, no distance layers; hull a slate silhouette under cream sails; dock full-strength; boulders cages; quay sliver; night-fog windows near-white and the lamp a white blob.** `shots/critic21/fog_phone.png`, `shots/critic21/fog_phone_crop_near_water.png`, `shots/critic21/fog_phone_crop_brig.png`, `shots/critic21/fog_phone_crop_dock.png`, `shots/critic21/fog_phone_crop_mole.png`, `shots/critic21/fog_phone_crop_quay_right.png`, `shots/critic21/contact_fog_22_crop_town.png`. Fix: key the layers to camera distance (R4); fog the hull, dock and boulders; shadows at 30%; amber windows in night fog.
4. **Town at 60 m: the slab grid is unchanged, every window has a black shutter block beside the pane and every doorway is a black void, roof fleck repeat, flat shaded walls, white flecks over roofs.** `shots/critic21/zoom60_town_crop_quay.png`, `shots/critic21/zoom60_town_crop_window.png`, `shots/critic21/zoom60_town_crop_shade.png`, `shots/critic21/zoom60_town_crop_roof.png`, `shots/critic21/zoom60_town_crop_topright.png`. Fix: irregular slabs with broken corners and a rounded wet edge; shutters and doors painted, not black; per-house fleck noise; warm bounce in shade; remove the flecks.
5. **Noon: the basin is a flat cyan pool with a cobalt hole; the sparkle field is a dense scatter of hard white blobs with a khaki bank across it.** `shots/critic21/contact_clear_12_crop_basin.png`, `shots/critic21/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure; cap clump coverage and soften the sparkle; no band.
6. **The 60 m wet band is a flat lavender-grey strip with a regular row of blue-grey scallops on its water side; the rim a uniform outline at 1×.** `shots/critic21/zoom60_beach_crop_wetband.png`, `shots/critic21/zoom60_beach_crop_foam.png`, `shots/critic21/landscape_crop_basin.png`. Fix: darker, glossier wet sand with grain; break the scallop period with noise; split the lace into tongues with gaps.
7. **Dry sand a salmon blotch over a diagonal weave moiré; nothing on the beach.** `shots/critic21/zoom60_beach_crop_sand.png`, `shots/critic21/zoom120_brig_crop_shore_left.png`, `shots/critic21/zoom60_beach.png`. Fix: a non-axis-aligned grain noise; a wrack line, a boat, rocks.
8. **Jib a detached triangle with the forestay running past it.** `shots/critic21/hero_phone_crop_brig.png`, `shots/critic21/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
9. **The palm shadow on the mainsail reads as a stain: a green-grey curved stroke with a dotted tail.** `shots/critic21/zoom120_brig_crop_sail.png`. Fix: neutral-grey shadow tint on cloth and a sharper edge, or cut the shadow at the sail.
10. **Fronds flat lime blades in a starburst.** `shots/critic21/zoom60_beach_crop_fronds.png`, `shots/critic21/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
11. **Sky into the sun a flat tan-to-grey gradient with no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic21/sun_check_crop_sky.png`, `shots/critic21/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Mole boulders grey polygon cages in clear, night and fog; no foam at the mole.** `shots/critic21/hero_phone_crop_mole.png`, `shots/critic21/night_phone_crop_mole.png`, `shots/critic21/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
13. **Bushes lime lollipops with hard black blobs; a blurred dark smear across the hill; pale translucent flecks over roofs and walls.** `shots/critic21/hero_phone_crop_hill.png`, `shots/critic21/hero_phone_crop_town.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the flecks.
14. **Dock a dark pile of blocks with the rowboat clipping its end by day; white sliver at the right end of the quay in clear and fog; floating dark dashes off the brig's starboard quarter.** `shots/critic21/hero_phone_crop_dock.png`, `shots/critic21/hero_phone_crop_quay_right.png`, `shots/critic21/fog_phone_crop_quay_right.png`, `shots/critic21/zoom120_brig_crop_stern.png`. Fix: lighter plank albedo by day with piles; move the boat off the dock; kill the sliver; attach or remove the dashes.
15. **Deep water at 300 m a near-flat cobalt plane with no swell; the basin cyan rather than R1's blue-violet; no bow foam or hull reflection.** `shots/critic21/zoom300_crop_deep.png`, `shots/critic21/hero_phone_crop_water.png`, `shots/critic21/zoom120_brig_crop_bow.png`. Fix: swell banding at 300 m; shift the deep basin toward `#1E3A7A`; a bow collar and broken reflections.

## Round 20 issues — status

| # | Round 20 issue | Status | Evidence |
|---|---|---|---|
| 1 | Tan-khaki haze across the hero's bottom third; khaki at noon and 17:30 contact, tan-cyan at 300 m and landscape, grey in fog | **unchanged** — "no tan band" claimed; the band is the same khaki crescent with the same soft edge and cyan inner halo in every framing | `shots/critic21/hero_phone_crop_bottom.png`, `shots/critic21/hero_phone_crop_band_edge.png`, `shots/critic21/contact_clear_175_crop_bottom.png`, `shots/critic21/contact_clear_12_crop_sparkle.png`, `shots/critic21/zoom300_crop_mouth.png`, `shots/critic21/landscape_crop_basin.png`, `shots/critic21/fog_phone_crop_near_water.png` |
| 2 | Night: moon sheet with dead-stop edge, left half and lower third rgb 0,0,0, no beam, hotspot, ghost brig | **improved** — navy floor everywhere (rgb 0,0,27 at the bottom, 1,2,26 at left), the sheet's edge is soft, the dock lamp pools; the sheet is still a white blotch, no beam, hotspot, hill black | `shots/critic21/night_phone_crop_bottom.png`, `shots/critic21/night_phone_crop_left_water.png`, `shots/critic21/night_phone_crop_basin.png`, `shots/critic21/night_phone_crop_mole.png`, `shots/critic21/night_phone_crop_dock.png`, `shots/critic21/night_phone_crop_hill.png` |
| 3 | Fog one veil above a soft crescent; slate hull; dock full-strength; boulders cages; quay sliver | **unchanged** | `shots/critic21/fog_phone.png`, `shots/critic21/fog_phone_crop_near_water.png`, `shots/critic21/fog_phone_crop_brig.png`, `shots/critic21/fog_phone_crop_dock.png`, `shots/critic21/fog_phone_crop_mole.png`, `shots/critic21/fog_phone_crop_quay_right.png` |
| 4 | Town at 60 m: slab grid, cobble ghost through grass, roof repeat, black window voids, flat shade | **improved** — the cobble ghost is gone (packed earth with grass tufts); more panes glazed; the slab grid, roof repeat, black shutter blocks and doors, flat shade unchanged | `shots/critic21/zoom60_town_crop_ground.png`, `shots/critic21/zoom60_town_crop_quay.png`, `shots/critic21/zoom60_town_crop_window.png`, `shots/critic21/zoom60_town_crop_roof.png`, `shots/critic21/zoom60_town_crop_shade.png` |
| 5 | Noon basin a flat cyan pool with a cobalt hole; sparkle field of hard white blobs with the khaki haze | **unchanged** | `shots/critic21/contact_clear_12_crop_basin.png`, `shots/critic21/contact_clear_12_crop_sparkle.png` |
| 6 | 60 m wet band a flat lavender strip with scalloped edge; rim a uniform outline at 1× | **unchanged** | `shots/critic21/zoom60_beach_crop_wetband.png`, `shots/critic21/zoom60_beach_crop_foam.png`, `shots/critic21/landscape_crop_basin.png` |
| 7 | Dry sand a salmon blotch with a lattice moiré; nothing on the beach | **unchanged** | `shots/critic21/zoom60_beach_crop_sand.png`, `shots/critic21/zoom60_beach.png` |
| 8 | Jib a detached triangle | **unchanged** | `shots/critic21/hero_phone_crop_brig.png`, `shots/critic21/fog_phone_crop_brig.png` |
| 9 | Palm shadow on the mainsail reads as a stain | **unchanged** | `shots/critic21/zoom120_brig_crop_sail.png` |
| 10 | Fronds flat blades in a starburst | **unchanged** | `shots/critic21/zoom60_beach_crop_fronds.png`, `shots/critic21/zoom120_brig_crop_palm.png` |
| 11 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic21/sun_check_crop_sky.png`, `shots/critic21/sun_check_crop_bottom.png` |
| 12 | Mole boulders wire cages; no mole foam | **unchanged** | `shots/critic21/hero_phone_crop_mole.png`, `shots/critic21/fog_phone_crop_mole.png` |
| 13 | Bush lollipops; dark hill smear; white flecks over the town | **unchanged** | `shots/critic21/hero_phone_crop_hill.png`, `shots/critic21/hero_phone_crop_town.png`, `shots/critic21/zoom60_town_crop_topright.png` |
| 14 | Dock a pile of dark blocks; white sliver at the right end of the quay | **unchanged** by day (the night dock reads better under its lamp) | `shots/critic21/hero_phone_crop_dock.png`, `shots/critic21/hero_phone_crop_quay_right.png`, `shots/critic21/fog_phone_crop_quay_right.png`, `shots/critic21/night_phone_crop_dock.png` |
| 15 | Deep water flat at 300 m; basin cyan not blue-violet; no bow foam or reflection; triangles at 98.4% | **improved (budget only)** — triangles down to 97.1%; the water items unchanged | `shots/critic21/zoom300_crop_deep.png`, `shots/critic21/hero_phone_crop_water.png`, `shots/critic21/zoom120_brig_crop_bow.png`, `shots/critic21/hero_phone.json` |

## Budget lines (from `shots/critic21/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,456,281 | 41.3 | 7.1 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,456,281 | 41.3 | 8.5 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,068,233 | 41.3 | 6.3–9.4 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.046 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,432,135 | 41.3 | 7.6 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,455,871 | 41.3 | 7.7 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,438,347 | 41.3 | 6.1 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,456,281 | 41.3 | 9.4 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,456,281 | 41.3 | 7.6 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,456,281 | 41.3 | 7.7 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,456,281 | 41.3 | 9.4 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 97.1% of the triangle limit, down
from 98.4% in round 20. The one warning is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device fps: not
measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** irregular slabs; painted shutters and doors instead of black; a non-repeating roof; a wet band with gloss and grain; sand grain; leaflets; solid boulders; a plank dock by day; bounce in shade.
- **Light (7.5):** a moon glitter path with a beam; moonlight on the hill; fog shadows stopped down; bushes lit like the ground; a banded noon basin; a shadow on the sail that reads as one.
- **Atmosphere (7.5):** distance-keyed fog layers, not a crescent; fog on the hull, dock and boulders; a painted sky.
- **Water (7.0):** the band gone; lace in tongues; a dark wet line; the quay sliver gone; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; no flecks or floating dashes; a motion capture.
- **Composition (7.0):** the band gone; moon glitter on the near water; fog with depth; something on the beach.
- **Programmer art (7.0):** clear the marginals (slab/roof tiling and sand moiré, scalloped wet-strip edge, khaki band, single-veil fog, noon sparkle blobs, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials, water, composition and the programmer-art checklist at 7.0, then light,
atmosphere, scale and motion at 7.5; only budget and errors (8.5) clears the bar. No line moved. Of the
round's six visual claims, two land: the cobble grid under the grass is gone, and the night basin has a
navy floor with a soft-edged moon sheet and a lamp-lit dock instead of a black void with a hard-edged
blotch. Two are partial: more day panes are glazed but every shutter and door is still a black block, and
the triangle count came down 19 k rather than the 100 k that would give real headroom. The headline claim
fails: "no tan band" is a khaki band in exactly the place it was, with the same soft edge and cyan halo,
in the hero, the 17:30 contact, the noon contact, the harbour mouth at 300 m and landscape, and in fog.
The rest of the round 20 list — the fog veil, the slab grid, the roof repeat, the noon pool, the
scallops, the sand, the jib, the fronds, the boulders, the sky, the dock, the flecks — is untouched for a
tenth round. Scores: 7.0/7.5/7.5/7.0/7.5/7.0/8.5/7.0. Against Sea of Conquest the 120 m brig frame, the
60 m beach shoreline and the landscape frame still read as one painted harbour with the right light; the
hero carries a band it cannot explain, and the night (closer now), the fog, the noon frame and the 60 m
town still do not read as the reference.
