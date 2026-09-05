# Critic round 19 — Ocean look test, thirteenth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` written 18:43:09 UTC from HEAD
`a992ff4` ("Docs: round 18 column in the report"; `git log --oneline -1` confirms). The brief said HEAD
carries the round 19 builder pass; it is one commit up. Its parent `91140b5` is "Round 19 builder pass
(part 1): whisper-strength mirror (no reflected horizon band), stronger fog depth planes and darker noon
mist, navy night water, dual-scale quay stone, sky-lit window panes by day, paving lifted off the shelf"
(`src/core/WorldUniforms.ts`, `src/lighting/Lighting.ts`, `src/ocean/Ocean.ts`, `src/port/Port.ts`,
`src/world/World.ts`; 18 insertions / 8 deletions). There is no part 2. The first shot started 45 s after
the dist write. All ten shots were taken, in the required order, in the foreground, `--frames 4`
throughout: sixteen full frames under `shots/critic19/` plus fifty-eight native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled 1–4×, cut with a scratch pngjs script outside the repo).
Every frame and crop cited below was opened and looked at. No round 1–18 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.5–8.5 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0 (holds)

Two of the five commit items touch materials and both are marginal. "Sky-lit window panes by day" is real
but partial: on the shaded north faces about half the openings now carry a pale blue-grey pane with
mullions, the other half stay pure black voids, so a single façade reads as a mix of glazed windows and
open holes (`shots/critic19/zoom60_town_crop_window.png`, left house; `shots/critic19/hero_phone_crop_town.png`).
"Dual-scale quay stone" adds faint dark crack lines over the paving, but underneath it is the same stamped
running-bond grid of identical rectangular stones with a uniform pale highlight edge, and the grid is
what the eye sees (`shots/critic19/zoom60_town_crop_quay.png`). Unchanged for an eighth round: the roof
fleck pattern repeats every four rows (`shots/critic19/zoom60_town_crop_roof.png`); shaded walls are a
flat blue-grey value (`shots/critic19/zoom60_town_crop_window.png`, left wall); the cobble grid still
ghosts through the grass verge to the right of the middle house despite "paving lifted off the shelf"
(`shots/critic19/zoom60_town_crop_ground.png`, upper right; `shots/critic19/zoom60_town.png` x 1100–1900,
y 750–850). The foreshore is where round 18 left it: a cream lace rim, a flat lavender-grey wet strip with
a regular row of dark scallops on its water-side edge at 4×, no gloss falloff, no grain
(`shots/critic19/zoom60_beach_crop_foam.png`, `shots/critic19/zoom60_beach_crop_wetband.png`); dry sand is a
salmon blotch over a fine lattice moiré (`shots/critic19/zoom60_beach_crop_sand.png`); fronds are flat lime
blades in a starburst (`shots/critic19/zoom60_beach_crop_fronds.png`). Mole boulders are grey wire cages in
clear and fog (`shots/critic19/hero_phone_crop_mole.png`, `shots/critic19/fog_phone_crop_mole.png`); the
dock is a dark pile of blocks (`shots/critic19/hero_phone_crop_dock.png`). Still good: lit lime-washed walls
with drawn cracks, sills, shutters and rain staining (`shots/critic19/zoom60_town_crop_walls.png`,
`shots/critic19/zoom60_town_crop_window_lit.png`); the brig's deck, gratings, rail and rope coil
(`shots/critic19/zoom120_brig_crop_deck.png`, `shots/critic19/zoom120_brig_crop_bow.png`).
To 8.5: glaze every window, not half; irregular quay stones with half stones and a rounded wet edge, not
crack lines over a grid; per-house roof fleck noise; a warm bounce term in shade; a wet band with gloss and
grain; sand grain without a lattice; pinnate leaflets; solid painted boulders; a plank dock.

### 2. Light — 7.5 (holds)

The 17:30 sun is still right: front-lit orange-cream walls, long violet shadows up-left at 4–5× object
height, correct tower and lighthouse shadows (`shots/critic19/hero_phone.png`,
`shots/critic19/hero_phone_crop_town.png`, `shots/critic19/zoom60_town.png`); the glitter path into the sun
at pitch 14 remains the project's best light (`shots/critic19/sun_check_crop_glitter.png`); palm shadows
cross the wet band onto the water at 60 m (`shots/critic19/zoom60_beach.png`). The palm shadow on the
mainsail is now a defined curved grey-green stroke with a dotted trailing edge rather than a blur, but with
no palm in the 120 m frame near the ship it still reads as a stain or a tear in the cloth first and a
shadow second (`shots/critic19/zoom120_brig_crop_sail.png`); at 120 m phone it is a faint grey smudge
(`shots/critic19/hero_phone_crop_brig.png`). Unchanged: the moon sheet is a 40 m wide grey-white patch on
the right half of the basin and the whole lower half of the night frame is pure black
(`shots/critic19/night_phone_crop_basin.png`, `shots/critic19/night_phone_crop_bottom.png`,
`shots/critic19/night_phone_crop_left_water.png`); "navy night water" is not readable anywhere in the
frame except as a faint blue cast on the brig's deck (`shots/critic19/night_phone_crop_brig.png`); the
lighthouse lamp now shows a hard white crescent hotspot instead of a beam, which reads as a slice of moon
sitting on the lamp room (`shots/critic19/night_phone_crop_mole.png`); the hill into the sun is black with
self-lit lime bushes (`shots/critic19/sun_check_crop_bottom.png`); fog casts full-strength dock and brig
shadows (`shots/critic19/fog_phone_crop_dock.png`, `shots/critic19/fog_phone_crop_brig.png`); shaded walls
have no bounce (`shots/critic19/zoom60_town_crop_window.png`); the noon basin is one flat cyan pool with a
cobalt hole (`shots/critic19/contact_clear_12_crop_basin.png`). A soft grey shadow blob with fuzzy edges
sits across the grass and paving in front of the middle house at 60 m and reads as a smudge, not a cast
shadow (`shots/critic19/zoom60_town_crop_window_lit.png`, lower half). Holds at 7.5.
To 8.5: a narrow moon path along the moon azimuth with faint moon fill on wave backs across the whole
basin; a beam cone, not a crescent; bushes lit by the same sun as the ground; shadows at 30% in fog; a warm
bounce term in shade; a neutral-grey sail shadow with a palm in frame to explain it.

### 3. Atmosphere — 7.5 (up from 7.0)

Three of the six fog faults from round 18 moved. The instanced bushes on the hill now take the fog and sit
as muted grey-green shapes instead of lime dots (`shots/critic19/fog_phone_crop_hill.png`); the noon and
17:30 fogs are now different — noon a darker, steelier blue basin under a pale veil, 17:30 a lighter
grey-blue (`shots/critic19/contact_fog_12_crop_basin.png`, `shots/critic19/contact_fog_175_crop_basin.png`,
`shots/critic19/contact.png`); night-fog windows are a warm cream rather than white, with the lantern
pools and their water reflections warm (`shots/critic19/contact_fog_22_crop_town.png`). Against it: the
"stronger depth planes" do not read as planes. What appears is a darker grey band curving across the
lower third of the fog frame below the lighthouse, the same crescent shape as the tan ring in the hero,
with a readable edge against the lighter blue below it (`shots/critic19/fog_phone_crop_near_water.png`,
top; `shots/critic19/fog_phone.png` y 2500–2900) — a ring around the camera nadir, not a distance layer.
Above it the fog is still one veil with a smooth top-to-bottom gradient (`shots/critic19/fog_phone.png`);
the brig hull is still a flat slate silhouette with all deck detail gone while its sails stay full cream
(`shots/critic19/fog_phone_crop_brig.png`); the dock is full-strength dark (`shots/critic19/fog_phone_crop_dock.png`);
the mole boulders read as wire cages through the fog (`shots/critic19/fog_phone_crop_mole.png`). The sky
into the sun is unchanged: a flat tan-to-grey gradient with a sun disc and halo, no cobalt zenith, no rose
belt, no cloud (`shots/critic19/sun_check_crop_sky.png`). Aerial perspective on the far coast at 300 m is
present but slight (`shots/critic19/zoom300_crop_top.png`). 7.5.
To 8.5: depth layers keyed to distance from camera (R4), not a ring; fog on the hull, not only the sails;
the dock and boulders fogged; a painted sky with a blue zenith, a rose belt and clouds.

### 4. Water — 7.0 (down from 7.5)

The round is defined by the hero's bottom third. The pale milky band of round 18 has been replaced by
something worse: a broad tan-khaki crescent that starts at the left edge below the beach, sweeps under the
brig's stern, crosses the frame and rises again past the mole, with a curved, readable outer edge against
the turquoise below it and the cobalt basin above (`shots/critic19/hero_phone.png` y 1900–2900,
`shots/critic19/hero_phone_crop_bottom.png`, `shots/critic19/hero_phone_crop_veil_edge.png`). It has
colour now — tan, the sky colour toward the sun — and a shape, a ring centred on the camera nadir, which
is what the "whisper-strength mirror" is reflecting: the horizon band the commit says it removed. It has
no cause in the scene; it reads as a sandbar or a stain. The same ring is grey in fog
(`shots/critic19/fog_phone_crop_near_water.png`), khaki across the noon sparkle field
(`shots/critic19/contact_clear_12_crop_sparkle.png`, top), and a pale cyan haze in the harbour mouth at
300 m and in landscape (`shots/critic19/zoom300.png` y 470–520, `shots/critic19/landscape_crop_basin.png`
bottom). Everything else holds where round 18 left it. Good: the open basin's long diagonal brush strokes
(`shots/critic19/hero_phone_crop_water.png`, `shots/critic19/zoom120_brig_crop_water.png`,
`shots/critic19/zoom60_beach_crop_water.png`); the 120 m lace rim with a soft inner fade and a translucent
pale-green shallow band (`shots/critic19/zoom120_brig_crop_shore_left.png`,
`shots/critic19/zoom120_brig_crop_wash.png`); the palm shadows running across the wet band onto the water at
60 m (`shots/critic19/zoom60_beach.png`). Unchanged faults: the lavender wet strip with regular dark
scallops at 60 m (`shots/critic19/zoom60_beach_crop_foam.png`); the rim a uniform bright outline around the
whole bay at 1× (`shots/critic19/landscape_crop_basin.png`, `shots/critic19/zoom300_crop_island.png`); the
white sliver at the right end of the quay in clear and fog (`shots/critic19/hero_phone_crop_quay_right.png`,
`shots/critic19/fog_phone_crop_quay_right.png`); the noon basin a flat cyan pool with a cobalt hole and a
dense field of hard white sparkle blobs (`shots/critic19/contact_clear_12_crop_basin.png`,
`shots/critic19/contact_clear_12_crop_sparkle.png`); no bow foam, no mole foam, no hull or sail reflection
(`shots/critic19/zoom120_brig_crop_bow.png`, `shots/critic19/hero_phone_crop_mole.png`); deep water at
300 m a cobalt plane with faint streaks and no swell (`shots/critic19/zoom300_crop_deep.png`); the night
path a 40 m sheet over black (`shots/critic19/night_phone_crop_basin.png`); the basin cyan rather than
R1's blue-violet. 7.0.
To 8.5: kill the ring — no reflected sky at all in the tilted top-down framing, or a mirror term clamped
so the horizon band never enters the frame; then the round 18 list: lace in tongues, a dark wet line, the
quay sliver gone, bow and mole foam, broken reflections, swell at 300 m, capped noon sparkle, a moon path.

### 5. Scale and motion — 7.5 (holds)

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as one
place (`shots/critic19/hero_phone.png`, `shots/critic19/landscape.png`, `shots/critic19/zoom300.png`). The
jib is unchanged: a detached triangle hung off the bowsprit end with the forestay running past it
(`shots/critic19/zoom120_brig_crop_jib.png`, `shots/critic19/hero_phone_crop_brig.png`,
`shots/critic19/fog_phone_crop_brig.png`). The palm shadow on the mainsail is crisper but still reads as a
mark on the cloth (`shots/critic19/zoom120_brig_crop_sail.png`). The dock is a dark pile of blocks
(`shots/critic19/hero_phone_crop_dock.png`); white specks still sit along the hill right of the tower
(`shots/critic19/hero_phone.png` x 1000–1200, y 500–600); pennants and gulls are posed convincingly but
motion is unverifiable from stills. Holds at 7.5.
To 8.5: bend the jib's luff onto the forestay with a hank line; a lighter plank dock; remove the specks; a
motion capture.

### 6. Composition and squint test — 7.0 (down from 7.5)

At thumbnail the landscape and 300 m frames still read as one painted island with a warm town
(`shots/critic19/landscape.png`, `shots/critic19/zoom300.png`, `shots/critic19/landscape_crop_left.png`).
The hero does not hold any more: the tan crescent across the bottom third is the largest single shape in
the frame after the town, it sits directly under the brig, and at squint it reads as a sandbar cutting the
basin in two — the eye stops on it instead of climbing from the sails to the quay
(`shots/critic19/hero_phone.png`, `shots/critic19/hero_phone_crop_bottom.png`). The night is a wall of
windows over a black lower half (`shots/critic19/night_phone.png`, `shots/critic19/night_phone_crop_town.png`,
`shots/critic19/night_phone_crop_bottom.png`); the noon frame is a cyan pool with a sparkle field
(`shots/critic19/contact_clear_12_crop_basin.png`); the fog has a grey ring where its depth should be
(`shots/critic19/fog_phone.png`). The beach at 60 m still has nothing on the sand — no wrack, boat or rock
(`shots/critic19/zoom60_beach.png`). 7.0.
To 8.5: remove the ring; moon on the near water; fog with distance planes; a noon basin with banding;
something on the beach.

### 7. Budget and errors — 8.5 (holds)

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,416,951–1,441,097 at high quality (96.1% of the 1.5 M limit; 1,038,649 at
medium), textures 41.3 MB (limit 256). Device fps not measured; headless p50 6.5–8.5 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 7.0 (holds; still a fail)

No clean hit. Marginal hits carried over: visible tiling on the quay grid and roof fleck repeat, paving
ghost under the grass (`shots/critic19/zoom60_town_crop_quay.png`, `shots/critic19/zoom60_town_crop_roof.png`,
`shots/critic19/zoom60_town_crop_ground.png`); sand lattice moiré (`shots/critic19/zoom60_beach_crop_sand.png`);
the regular scalloped edge on the wet strip at 60 m (`shots/critic19/zoom60_beach_crop_foam.png`); fog as
one veil above a ring band (`shots/critic19/fog_phone.png`, `shots/critic19/fog_phone_crop_near_water.png`) —
the bushes now take fog, which clears half of that item; the noon sparkle field of hard white blobs
(`shots/critic19/contact_clear_12_crop_sparkle.png`); the black night foreground
(`shots/critic19/night_phone_crop_bottom.png`); a near-uniform cobalt plane at 300 m
(`shots/critic19/zoom300_crop_deep.png`). New marginal: the cause-less tan ring across the hero basin
(`shots/critic19/hero_phone_crop_bottom.png`) sits under "uniform water plane / painted band" — it is a
reflection artefact, not a shape anyone painted. Six marginals in, one half-cleared, one added. 7.0.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls a flat value but deliberate (`shots/critic19/zoom60_town_crop_window.png`); the lavender wet strip flat but inside a painted shoreline (`shots/critic19/zoom60_beach_crop_shore.png`) |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | quay grid under the new crack lines, roof repeat every four rows (`shots/critic19/zoom60_town_crop_quay.png`, `shots/critic19/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic19/zoom60_beach_crop_sand.png`); cobble ghost under grass (`shots/critic19/zoom60_town_crop_ground.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic19/hero_phone.png`, `shots/critic19/zoom60_beach.png`); the fuzzy blob at 60 m is a soft shadow, not acne (`shots/critic19/zoom60_town_crop_window_lit.png`) |
| Grey nights | clear | night is near black with warm windows (`shots/critic19/night_phone.png`); the pure-black lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | tan ring with no cause across the hero basin (`shots/critic19/hero_phone_crop_bottom.png`, `shots/critic19/hero_phone_crop_veil_edge.png`); deep water at 300 m a near-flat cobalt plane (`shots/critic19/zoom300_crop_deep.png`); noon pool (`shots/critic19/contact_clear_12_crop_basin.png`); the rim a uniform bright outline at 1× (`shots/critic19/landscape_crop_basin.png`) but lace at 120 m desktop (`shots/critic19/zoom120_brig_crop_wash.png`) |
| Hard water-to-beach line | **hit (marginal)** | soft fade onto sand (`shots/critic19/zoom60_beach_crop_shore.png`); regular dark scallops on the water-side edge of the wet strip at 4× (`shots/critic19/zoom60_beach_crop_foam.png`); soft at 300 m (`shots/critic19/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic19/zoom60_beach.png`, `shots/critic19/zoom60_beach_crop_topleft.png`); motion unverifiable |
| Fog as one colour | **hit (marginal, half-cleared)** | bushes now fogged (`shots/critic19/fog_phone_crop_hill.png`); above the ring band the fog is still one veil with a gradient, hull a silhouette (`shots/critic19/fog_phone.png`, `shots/critic19/fog_phone_crop_brig.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic19/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **A tan-khaki crescent ring with no cause across the hero's bottom third — the reflected sky horizon band from the new mirror term, centred on the camera nadir; grey in fog, khaki at noon, pale cyan at 300 m and landscape.** `shots/critic19/hero_phone.png`, `shots/critic19/hero_phone_crop_bottom.png`, `shots/critic19/hero_phone_crop_veil_edge.png`, `shots/critic19/fog_phone_crop_near_water.png`, `shots/critic19/contact_clear_12_crop_sparkle.png`, `shots/critic19/zoom300.png`, `shots/critic19/landscape_crop_basin.png`. Fix: no sky reflection in the tilted framing at all, or clamp the reflected direction so the horizon band can never enter the frame; the water body colour must come from the painted gradient alone.
2. **Night: moon sheet 40 m wide over the right half of the basin, left half and the whole lower half pure black, "navy water" not visible, no beam — a hard white crescent hotspot on the lamp instead; the brig a faint ghost.** `shots/critic19/night_phone_crop_basin.png`, `shots/critic19/night_phone_crop_bottom.png`, `shots/critic19/night_phone_crop_left_water.png`, `shots/critic19/night_phone_crop_brig.png`, `shots/critic19/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon azimuth, a faint navy moon fill on wave backs everywhere in frame, a beam cone, moon on the rigging.
3. **Fog "depth planes" read as a grey ring band across the lower third, not distance layers; above it one veil; hull a slate silhouette under cream sails; dock full-strength; boulders wire cages.** `shots/critic19/fog_phone.png`, `shots/critic19/fog_phone_crop_near_water.png`, `shots/critic19/fog_phone_crop_brig.png`, `shots/critic19/fog_phone_crop_dock.png`, `shots/critic19/fog_phone_crop_mole.png`. Fix: key the layers to camera distance (R4), fog the hull, dock and boulders, shadows at 30%.
4. **Town at 60 m: quay still a stamped grid under the new crack lines, roof fleck repeat, half the shaded windows still black voids, shaded walls flat, cobble ghost under the grass, a fuzzy shadow smudge across the ground.** `shots/critic19/zoom60_town_crop_quay.png`, `shots/critic19/zoom60_town_crop_roof.png`, `shots/critic19/zoom60_town_crop_window.png`, `shots/critic19/zoom60_town_crop_ground.png`, `shots/critic19/zoom60_town_crop_window_lit.png`. Fix: irregular stones with half stones and a rounded wet edge; per-house fleck noise; glaze every window; warm bounce in shade; mask paving under grass fully.
5. **Noon: the basin is a flat cyan pool with a cobalt hole; the sparkle field is a dense scatter of hard white blobs with the khaki ring across it.** `shots/critic19/contact_clear_12_crop_basin.png`, `shots/critic19/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure; cap clump coverage and soften the sparkle; no ring.
6. **The 60 m wet band is a flat lavender-grey strip with a regular row of dark scallops on its water-side edge; the rim a uniform outline at 1×.** `shots/critic19/zoom60_beach_crop_foam.png`, `shots/critic19/zoom60_beach_crop_wetband.png`, `shots/critic19/landscape_crop_basin.png`. Fix: darker, glossier wet sand with grain; break the scallop period with noise; split the lace into tongues with gaps.
7. **Dry sand a salmon blotch over a lattice moiré; nothing on the beach.** `shots/critic19/zoom60_beach_crop_sand.png`, `shots/critic19/zoom120_brig_crop_palm.png`, `shots/critic19/zoom60_beach.png`. Fix: a non-axis-aligned grain noise; a wrack line, a boat, rocks.
8. **Jib a detached triangle with the forestay running past it.** `shots/critic19/zoom120_brig_crop_jib.png`, `shots/critic19/hero_phone_crop_brig.png`, `shots/critic19/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
9. **The palm shadow on the mainsail reads as a stain or tear: a curved grey-green stroke with a dotted tail, no palm nearby in the 120 m frame.** `shots/critic19/zoom120_brig_crop_sail.png`, `shots/critic19/hero_phone_crop_brig.png`. Fix: neutral-grey shadow tint on cloth, sharper edge, and either move the anchorage so the palm is in frame or cut the shadow at the sail.
10. **Fronds flat lime blades in a starburst.** `shots/critic19/zoom60_beach_crop_fronds.png`, `shots/critic19/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
11. **Sky into the sun a flat tan-to-grey gradient, no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic19/sun_check_crop_sky.png`, `shots/critic19/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Mole boulders grey wire cages in clear and fog; no foam at the mole.** `shots/critic19/hero_phone_crop_mole.png`, `shots/critic19/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
13. **Bushes lime lollipops with hard black blobs; a blurred dark smear across the hill; white specks right of the tower; pale translucent flecks scattered over roofs and walls at 120 m.** `shots/critic19/hero_phone_crop_hill.png`, `shots/critic19/hero_phone.png`, `shots/critic19/hero_phone_crop_town.png`, `shots/critic19/zoom300_crop_top.png`. Fix: clustered bushes with a soft contact shadow; remove the smear, the specks and the roof flecks.
14. **Dock a dark pile of blocks; white sliver at the right end of the quay in clear and fog.** `shots/critic19/hero_phone_crop_dock.png`, `shots/critic19/hero_phone_crop_quay_right.png`, `shots/critic19/fog_phone_crop_quay_right.png`. Fix: lighter plank albedo with plank lines and piles; kill the sliver where the wall meets the beach.
15. **Deep water at 300 m a near-flat cobalt plane with no swell; the basin uniformly cyan rather than R1's blue-violet; no bow foam or hull reflection.** `shots/critic19/zoom300_crop_deep.png`, `shots/critic19/hero_phone_crop_water.png`, `shots/critic19/zoom120_brig_crop_bow.png`. Fix: swell banding at 300 m; shift the deep basin toward `#1E3A7A`; a bow collar and broken reflections.

## Round 18 issues — status

| # | Round 18 issue | Status | Evidence |
|---|---|---|---|
| 1 | Fog one veil: no depth layers, unfogged bushes, full shadows, slate hull, white night-fog windows, 12:00 = 17:30 | **improved** — bushes fogged, noon and 17:30 now differ, night-fog windows warm cream; depth "planes" arrive as a grey ring band; hull, dock shadows and boulders unchanged | `shots/critic19/fog_phone_crop_hill.png`, `shots/critic19/contact_fog_12_crop_basin.png`, `shots/critic19/contact_fog_175_crop_basin.png`, `shots/critic19/contact_fog_22_crop_town.png`, `shots/critic19/fog_phone_crop_near_water.png`, `shots/critic19/fog_phone_crop_brig.png`, `shots/critic19/fog_phone_crop_dock.png` |
| 2 | Night: 40 m moon sheet, lower half black, brig a faint ghost, no beam | **unchanged** — plus a new hard crescent hotspot on the lamp | `shots/critic19/night_phone_crop_basin.png`, `shots/critic19/night_phone_crop_bottom.png`, `shots/critic19/night_phone_crop_brig.png`, `shots/critic19/night_phone_crop_mole.png` |
| 3 | Milky pale band across the hero's bottom third | **unchanged (regressed)** — the band is now a tan crescent ring with a readable edge, present in fog, noon, 300 m and landscape | `shots/critic19/hero_phone_crop_bottom.png`, `shots/critic19/hero_phone_crop_veil_edge.png`, `shots/critic19/fog_phone_crop_near_water.png`, `shots/critic19/contact_clear_12_crop_sparkle.png` |
| 4 | Town unchanged at 60 m: quay grid, roof repeat, flat shade, void windows, paving ghost | **improved (marginal)** — half the shaded windows now glazed; crack lines over the quay grid; grid, roof repeat, flat shade and paving ghost remain | `shots/critic19/zoom60_town_crop_window.png`, `shots/critic19/zoom60_town_crop_quay.png`, `shots/critic19/zoom60_town_crop_roof.png`, `shots/critic19/zoom60_town_crop_ground.png` |
| 5 | Noon basin a flat cyan pool with a cobalt hole; sparkle field of hard white blobs | **unchanged** | `shots/critic19/contact_clear_12_crop_basin.png`, `shots/critic19/contact_clear_12_crop_sparkle.png` |
| 6 | 60 m wet band a flat lavender strip with scalloped edge; rim a uniform outline | **unchanged** | `shots/critic19/zoom60_beach_crop_foam.png`, `shots/critic19/zoom60_beach_crop_wetband.png`, `shots/critic19/landscape_crop_basin.png` |
| 7 | Dry sand a salmon blotch with a lattice moiré | **unchanged** | `shots/critic19/zoom60_beach_crop_sand.png`, `shots/critic19/zoom120_brig_crop_palm.png` |
| 8 | Jib a detached triangle | **unchanged** | `shots/critic19/zoom120_brig_crop_jib.png`, `shots/critic19/hero_phone_crop_brig.png` |
| 9 | Fronds flat blades in a starburst | **unchanged** | `shots/critic19/zoom60_beach_crop_fronds.png`, `shots/critic19/zoom120_brig_crop_palm.png` |
| 10 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic19/sun_check_crop_sky.png`, `shots/critic19/sun_check_crop_bottom.png` |
| 11 | Mole boulders wire cages; no mole foam | **unchanged** | `shots/critic19/hero_phone_crop_mole.png`, `shots/critic19/fog_phone_crop_mole.png` |
| 12 | Bush lollipops; dark hill smear; roofline specks | **unchanged** | `shots/critic19/hero_phone_crop_hill.png`, `shots/critic19/hero_phone.png`, `shots/critic19/zoom300_crop_top.png` |
| 13 | Dock a pile of dark blocks; white sliver at the right end of the quay | **unchanged** | `shots/critic19/hero_phone_crop_dock.png`, `shots/critic19/hero_phone_crop_quay_right.png`, `shots/critic19/fog_phone_crop_quay_right.png` |
| 14 | Deep water flat at 300 m; basin cyan not blue-violet | **unchanged** | `shots/critic19/zoom300_crop_deep.png`, `shots/critic19/hero_phone_crop_water.png` |
| 15 | Sail shadow a smear; no bow foam or reflection | **improved (marginal)** — the shadow is a defined stroke now but still reads as a stain; bow foam and reflection unchanged | `shots/critic19/zoom120_brig_crop_sail.png`, `shots/critic19/zoom120_brig_crop_bow.png` |

## Budget lines (from `shots/critic19/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 6.5 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.2 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,038,649 | 41.3 | 6.7–8.5 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.046 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,416,951 | 41.3 | 7.0 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,440,687 | 41.3 | 7.1 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,423,163 | 41.3 | 7.2 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.4 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.6 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.1 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.3 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.1% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** every window glazed; irregular quay stones, not crack lines over a grid; a non-repeating roof; a wet band with gloss and grain; sand grain; leaflets; solid boulders; a plank dock; bounce in shade.
- **Light (7.5):** a moon path with fill and a beam; fog shadows stopped down; bushes lit like the ground; a banded noon basin; a shadow on the sail that reads as one.
- **Atmosphere (7.5):** distance-keyed fog layers, not a ring; fog on the hull, dock and boulders; a painted sky.
- **Water (7.0):** the ring gone; lace in tongues; a dark wet line; the quay sliver gone; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; no specks; a motion capture.
- **Composition (7.0):** the ring gone; moon on the near water; fog with depth; something on the beach.
- **Programmer art (7.0):** clear the marginals (quay/roof tiling and sand moiré, scalloped wet-strip edge, ring band, single-veil fog above the ring, noon sparkle blobs, black night foreground, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials, water, composition and the programmer-art checklist at 7.0, then light,
atmosphere, scale and motion at 7.5; only budget and errors (8.5) clears the bar. The fog work is the one
real gain — the bushes take fog, noon and 17:30 finally differ, night-fog windows are warm — and it lifts
atmosphere to 7.5. Everything else in the eighteen-line diff either does not read (the dual-scale quay is a
grid with crack lines; the navy night water is invisible; the glazed panes cover half the windows) or
makes things worse: the "whisper-strength mirror" has put the reflected horizon back into the water as a
tan crescent ring across the hero's bottom third, with colour and an edge the round 18 milk band did not
have, and the same ring shows grey in fog and khaki at noon. The hero frame, which is the frame that
matters, is worse than last round; water and composition drop half a point each. The rest of the round 18
list — the black night, the noon pool, the 60 m town, the scallops, the sand, the jib, the fronds, the
boulders, the sky, the dock — is untouched for an eighth round. Scores: 7.0/7.5/7.5/7.0/7.5/7.0/8.5/7.0.
Against Sea of Conquest the 120 m brig frame, the 60 m beach and the landscape frame still read as one
painted harbour; the hero now carries a stain across its foreground, and the night, the fog, the noon frame
and the 60 m town still do not read as the reference.
