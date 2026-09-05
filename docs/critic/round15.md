# Critic round 15 — Ocean look test, ninth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` (written 13:19 UTC) from HEAD `27a8eba`
(13:05 UTC; `git log --oneline -1` confirms). This HEAD carries "Round 15 builder pass (part 1)" (e4d6f2a:
dredged basin at the quay wall, foreshore climbs out within 2.5 m, narrow foam rim, no self-lit collar,
wash lace off the cell noise channel, desaturated water in mist — 12 changed lines in `src/ocean/Ocean.ts`,
`src/terrain/Heightfield.ts`, `src/terrain/Terrain.ts`). There is no part 2 this round. All ten shots were
taken, in the required order, in the foreground, `--frames 4` throughout: sixteen full frames under
`shots/critic15/` plus sixty native-resolution crops (`*_crop_*.png`, nearest-neighbour upscaled 1–3×,
cut with a scratch pngjs script outside the repo). Every frame and crop cited below was opened and looked
at. No round 1–14 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 5.6–10.7 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 6.5

What moved: the Voronoi honeycomb wet band is gone at both 60 m and 120 m — the shore at 120 m is now a
smooth pale wash over green-turquoise shallows with no cell pattern (`shots/critic15/zoom120_brig_crop_shore_left.png`,
`shots/critic15/zoom120_brig_crop_wash.png`), and the brig's deck, grates, rail and bow remain the best
material set in the scene (`shots/critic15/zoom120_brig_crop_deck.png`, `shots/critic15/hero_phone_crop_brig.png`).
What replaced the honeycomb is a new fault of the same weight: the "foreshore climbs out within 2.5 m"
change makes a short steep bank whose sand texture is smeared into vertical streaks, capped by a flat
grey-lavender slab of sky reflection with a hard, jagged, aliased edge against the dry sand; the palm
shadows end on that edge in a comb of vertical teeth (`shots/critic15/zoom60_beach_crop_wetband.png`,
`shots/critic15/zoom60_beach_crop_shore.png`, `shots/critic15/zoom60_beach.png`). The dry sand still carries
the single salmon-pink blotch instead of grain, and at 3× a faint diamond-lattice moiré shows through it
(`shots/critic15/zoom60_beach_crop_sand.png`). Nothing in the town moved for a fourth round: the quay is a
stamped running-bond grid of identical stones, the roof fleck repeats every four rows, shaded walls are flat
khaki, windows are black voids, and the cobble pattern ghosts through the grass verge
(`shots/critic15/zoom60_town_crop_quay.png`, `shots/critic15/zoom60_town_crop_roof.png`,
`shots/critic15/zoom60_town_crop_window.png`, `shots/critic15/zoom60_town_crop_ground.png`); the lit
walls with drawn cracks and sills still hold (`shots/critic15/zoom60_town_crop_walls.png`). Mole boulders
are grey wire cages (`shots/critic15/hero_phone_crop_mole.png`); fronds are flat lime blades in a starburst
(`shots/critic15/zoom60_beach_crop_fronds.png`, `shots/critic15/zoom120_brig_crop_palm.png`); the dock is a
dark pile of blocks (`shots/critic15/hero_phone_crop_dock.png`). Score holds at 6.5: one fault out, one
fault in, town untouched.
To 8.5: a wet band that is darker glossier sand with a soft upper edge and no bank, no slab, no smear;
sand grain with drift lines and a wrack line, no blotch; irregular quay stones with half stones and a
rounded wet edge; per-house roof fleck noise; warm bounce in shade and a dim interior tint in windows;
solid painted boulders; pinnate leaflets on a drooping rachis; a lighter plank dock with visible piles.

### 2. Light — 7.5

The 17:30 sun still does its job on the town and the brig: front-lit orange-cream walls, long violet
shadows up-left, 4–5× object height, the lighthouse and tower shadows correct
(`shots/critic15/hero_phone.png`, `shots/critic15/hero_phone_crop_town.png`, `shots/critic15/zoom60_town.png`).
The glitter path into the sun at pitch 14 is a genuine highlight of the project
(`shots/critic15/sun_check_crop_glitter.png`). Against that, nothing on this line moved: the night is a
marbled grey moon sheet with black holes rather than a narrow path, the lower half of the frame is pure
black, the brig is invisible except for one lantern, and there is no beam from the lighthouse lamp
(`shots/critic15/night_phone.png`, `shots/critic15/night_phone_crop_basin.png`,
`shots/critic15/night_phone_crop_bottom.png`, `shots/critic15/night_phone_crop_brig.png`,
`shots/critic15/night_phone_crop_mole.png`); the hill into the sun is black with self-lit lime bushes
(`shots/critic15/sun_check_crop_bottom.png`); the fog still casts full-strength dock and brig shadows
(`shots/critic15/fog_phone_crop_dock.png`, `shots/critic15/fog_phone.png`); shaded walls have no bounce
(`shots/critic15/zoom60_town_crop_window.png`). New this round, the dredged basin puts a bright cyan band
along the whole quay wall and around the dock that reads as a light source under the water rather than a
depth change (`shots/critic15/hero_phone_crop_quay_right.png`, `shots/critic15/hero_phone_crop_dock.png`),
and at noon it burns out into a cyan-white halo ring (`shots/critic15/contact_clear_12_crop_basin.png`).
To 8.5: a narrow moon path along the moon azimuth with faint moon fill on hull, rigging and wave backs
across the basin; a beam cone; bushes lit by the same sun as the ground; shadows at 30% in fog; a warm
bounce term in shade; a dredge band that darkens rather than glows.

### 3. Atmosphere — 7.0

Up half a point, and earned: the fog now reaches the camera. The near water in `fog_phone` is a
desaturated grey-blue with a soft brush, not clear-weather cobalt (`shots/critic15/fog_phone_crop_near_water.png`,
`shots/critic15/contact_fog_175_crop_near_water.png`), the town greys down evenly
(`shots/critic15/fog_phone_crop_town.png`), and the lanterns and lighthouse carry soft halos in night fog
(`shots/critic15/contact_fog_22_crop_town.png`). What is still missing: there are no depth layers — the
frame is one veil with a top-to-bottom gradient, not R4's three bluer flatter planes
(`shots/critic15/fog_phone.png`); the instanced bushes sit unfogged as lime dots on the greyed hill
(`shots/critic15/fog_phone_crop_hill.png`); the brig hull is a flat slate silhouette with all deck detail
gone while its sails stay full cream (`shots/critic15/fog_phone_crop_brig.png`,
`shots/critic15/contact_fog_175_crop_brig.png`); the mole boulders read as wire cages through the fog
(`shots/critic15/fog_phone_crop_mole.png`); night-fog windows are white, not amber
(`shots/critic15/contact_fog_22_crop_town.png`); fog 12:00 and 17:30 are near-identical
(`shots/critic15/contact.png`). The sky into the sun is unchanged: a flat tan-to-grey gradient with a sun
disc and halo, no cobalt zenith, no rose belt, no cloud (`shots/critic15/sun_check_crop_sky.png`). Aerial
perspective on the far coast at 300 m is present but slight (`shots/critic15/zoom300_crop_top.png`).
To 8.5: three depth layers in fog with fogged instances; fog on the hull, not only the sails; a sun at
35% in fog; amber emissives in night fog; a painted sky with a blue zenith, a rose belt and clouds.

### 4. Water — 7.5

Up half a point. Both of last round's worst water faults are gone: the self-lit white collar around the
basin is off, and the quay wall meets the water without a stripe (`shots/critic15/hero_phone_crop_quay_right.png`,
`shots/critic15/hero_phone.png`); the honeycomb wash is off the cell channel and the beach wash at 120 m is
a soft pale sheet over turquoise (`shots/critic15/zoom120_brig_crop_shore_left.png`,
`shots/critic15/zoom120_brig_crop_wash.png`). The painted brush texture of the open basin is the best it has
been — long diagonal strokes, turquoise-to-cobalt banding, readable at every zoom
(`shots/critic15/hero_phone_crop_water.png`, `shots/critic15/zoom120_brig_crop_water.png`,
`shots/critic15/zoom300_crop_island.png`). What holds it below 8: the dredged basin is a hard bright cyan
band along the entire quay wall and around the dock, a swimming-pool rim in a different key from the rest
of the basin (`shots/critic15/hero_phone_crop_quay_right.png`, `shots/critic15/hero_phone_crop_dock.png`,
`shots/critic15/zoom300_crop_island.png`), and at noon it is an overexposed cyan-white ring
(`shots/critic15/contact_clear_12_crop_basin.png`). A milky pale band with no visible cause lies across the
hero's bottom third (`shots/critic15/hero_phone_crop_bottom.png`, `shots/critic15/hero_phone.png`). The wash
is still a 3–6 m crumpled chalk sheet at 60 m, not a 1–2 m lace of tongues, with green algae blotches in it
(`shots/critic15/zoom60_beach_crop_foam.png`), and the foreshore slab above it is a flat grey mirror
(`shots/critic15/zoom60_beach_crop_wetband.png`). There is no bow foam, no foam at the mole, and no
reflection of hull or sails on the surface (`shots/critic15/hero_phone_crop_brig.png`,
`shots/critic15/hero_phone_crop_mole.png`). A white sliver still sits at the right end of the quay
(`shots/critic15/hero_phone_crop_quay_right.png`, `shots/critic15/fog_phone_crop_quay_right.png`). The deep
water at 300 m is a flat cobalt plane with faint streaks and no swell (`shots/critic15/zoom300_crop_deep.png`);
the noon glitter is still a dense sparkle field over the lower right (`shots/critic15/contact_clear_12_crop_basin.png`);
the night path is a marbled sheet (`shots/critic15/night_phone_crop_basin.png`).
To 8.5: a dredge that darkens the water at the wall in the same hue family; a 1–2 m cream lace broken into
tongues; a wet dark line, not a mirror slab, on the foreshore; bow and mole foam; broken sail and hull
reflections; remove the milk band and the quay sliver; cap the noon sparkle; a narrow moon path.

### 5. Scale and motion — 7.5

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as
one place (`shots/critic15/hero_phone.png`, `shots/critic15/landscape.png`). The jib is unchanged: a
detached triangle hung off the bowsprit end with the forestay running past it, in every frame it appears
in (`shots/critic15/zoom120_brig_crop_jib.png`, `shots/critic15/hero_phone_crop_brig.png`,
`shots/critic15/fog_phone_crop_brig.png`). The palm shadow on the mainsail is a soft blurred bar with a
fainter feathery tail; with the palms in frame it still reads as a stain because nothing on the water
between palm and sail carries the same shadow (`shots/critic15/zoom120_brig_crop_sail.png`,
`shots/critic15/zoom120_brig.png`). The dock is a dark pile of blocks with a cyan halo
(`shots/critic15/hero_phone_crop_dock.png`); white specks still run along the roofline left of the tower
(`shots/critic15/hero_phone_crop_hill.png`); the pennants and gulls are posed convincingly but motion is
unverifiable from stills.
To 8.5: bend the jib's luff onto the forestay with a hank line; either show the palm shadow on the water or
fade far-caster shadows on cloth; a lighter plank dock; remove the specks; a motion capture.

### 6. Composition and squint test — 7.5

Without the collar the hero is the cleanest it has been: the eye enters on the sunlit sails, follows the
brig's shadow to the lighthouse and up the turquoise to the warm town, and the thumbnail
(`shots/critic15/landscape.png`, `shots/critic15/zoom300.png`) reads as one painted island. Two new
elements fight it: the cyan pool rim along the quay pulls the eye to the wall instead of the town, and the
milky band across the bottom third flattens the foreground (`shots/critic15/hero_phone.png`,
`shots/critic15/hero_phone_crop_bottom.png`). The beach at 60 m has nothing to look at but a blotch and a
slab (`shots/critic15/zoom60_beach.png`); the night has a wall of identical windows and a black lower half
(`shots/critic15/night_phone.png`, `shots/critic15/night_phone_crop_town.png`); the fog has no depth
(`shots/critic15/fog_phone.png`).
To 8.5: kill the rim and the milk band; a beach with a wrack line, a boat and rocks; night with the moon on
the near water; fog with three planes.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,416,311–1,440,457 at high quality (96.0% of the 1.5 M limit; 1,038,009 at
medium), textures 41.3 MB (limit 256). Device fps not measured; headless p50 5.6–10.7 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 6.5 (automatic fail)

The white-stripe foam collar that failed round 14 is cleared (`shots/critic15/hero_phone_crop_quay_right.png`,
`shots/critic15/hero_phone_crop_shore_left.png`). New hit: stretched UVs and a hard water-to-beach line on
the 60 m foreshore bank — sand texture smeared into vertical streaks under a flat grey slab with a jagged
aliased edge (`shots/critic15/zoom60_beach_crop_wetband.png`, `shots/critic15/zoom60_beach_crop_shore.png`).
Marginal hits carried over: visible tiling on the quay grid and roof fleck repeat, paving ghost under the
grass (`shots/critic15/zoom60_town_crop_quay.png`, `shots/critic15/zoom60_town_crop_roof.png`,
`shots/critic15/zoom60_town_crop_ground.png`), fog as one colour with unfogged bushes
(`shots/critic15/fog_phone_crop_hill.png`), the noon cyan-white ring and sparkle field
(`shots/critic15/contact_clear_12_crop_basin.png`), the black night foreground
(`shots/critic15/night_phone_crop_bottom.png`), and a uniform cobalt plane at 300 m
(`shots/critic15/zoom300_crop_deep.png`). Up half a point for clearing the collar; still a fail.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls flat khaki but deliberate (`shots/critic15/zoom60_town_crop_window.png`) |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit** | stretched sand on the foreshore bank (`shots/critic15/zoom60_beach_crop_wetband.png`); quay grid, roof repeat every four rows (`shots/critic15/zoom60_town_crop_quay.png`, `shots/critic15/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic15/zoom60_beach_crop_sand.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic15/hero_phone.png`); comb-tooth shadow termini on the bank are an edge artefact, not acne (`shots/critic15/zoom60_beach_crop_wetband.png`) |
| Grey nights | clear | night is near black with warm windows (`shots/critic15/night_phone.png`); lower half pure black is a separate fault |
| Uniform blue water plane or white-stripe foam | marginal | collar cleared; deep water at 300 m a flat cobalt plane (`shots/critic15/zoom300_crop_deep.png`); milk band (`shots/critic15/hero_phone_crop_bottom.png`) |
| Hard water-to-beach line | **hit (60 m)** | grey slab with a jagged aliased edge against dry sand (`shots/critic15/zoom60_beach_crop_wetband.png`, `shots/critic15/zoom60_beach_crop_shore.png`); at 120 m and 300 m the line is soft (`shots/critic15/zoom120_brig_crop_shore_left.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic15/zoom60_beach.png`); motion unverifiable |
| Fog as one colour | marginal | one veil with a gradient, bushes unfogged (`shots/critic15/fog_phone.png`, `shots/critic15/fog_phone_crop_hill.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic15/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **The 60 m foreshore: a short steep bank with vertically smeared sand under a flat grey-lavender mirror slab whose edge against the dry sand is hard, jagged and aliased; palm shadows end in a comb of teeth.** `shots/critic15/zoom60_beach_crop_wetband.png`, `shots/critic15/zoom60_beach_crop_shore.png`, `shots/critic15/zoom60_beach.png`. Fix: no bank — keep the foreshore slope shallow and make the wet band darker glossier sand with a soft upper edge, triplanar or world-space sand UVs, no sky-mirror term on sand.
2. **The dredged basin is a bright cyan band along the whole quay wall and around the dock, a pool rim in a different key from the basin; at noon it burns to a cyan-white ring.** `shots/critic15/hero_phone_crop_quay_right.png`, `shots/critic15/hero_phone_crop_dock.png`, `shots/critic15/contact_clear_12_crop_basin.png`, `shots/critic15/zoom300_crop_island.png`. Fix: dredged water should go darker and bluer at the wall, not brighter; clamp shallow brightness at noon exposure.
3. **Fog is one veil: no depth layers, unfogged bushes, full-strength dock and brig shadows, brig hull a slate silhouette, night-fog windows white, fog 12:00 and 17:30 near-identical.** `shots/critic15/fog_phone.png`, `shots/critic15/fog_phone_crop_hill.png`, `shots/critic15/fog_phone_crop_dock.png`, `shots/critic15/fog_phone_crop_brig.png`, `shots/critic15/contact_fog_22_crop_town.png`, `shots/critic15/contact.png`. Fix: three banded depth planes (R4); fog the instanced bushes and the hull; shadows at 30%; keep emissives amber.
4. **Night: moon path a marbled grey sheet with black holes, lower half of the frame pure black, brig invisible, no beam, windows identical rectangles at one brightness.** `shots/critic15/night_phone_crop_basin.png`, `shots/critic15/night_phone_crop_bottom.png`, `shots/critic15/night_phone_crop_brig.png`, `shots/critic15/night_phone_crop_mole.png`, `shots/critic15/night_phone_crop_town.png`. Fix: a narrow glitter path along the moon azimuth, a faint moon fill on wave backs, hull and rigging, a beam cone, per-house window brightness and warmth with some dark.
5. **A milky pale band with no visible cause across the hero's bottom third.** `shots/critic15/hero_phone_crop_bottom.png`, `shots/critic15/hero_phone.png`. Fix: remove the near-camera mist/desaturation term at 17:30 clear, or tie it to a glitter path with a sun-side gradient.
6. **Beach wash still a 3–6 m crumpled chalk sheet with green algae blotches at 60 m; no bow foam; no mole foam.** `shots/critic15/zoom60_beach_crop_foam.png`, `shots/critic15/hero_phone_crop_brig.png`, `shots/critic15/hero_phone_crop_mole.png`. Fix: 1–2 m cream lace in tongues with a soft inner fade; a bow collar; splash at the mole boulders.
7. **Town unchanged at 60 m: quay a stamped running-bond grid, roof fleck repeat every four rows, shaded walls flat khaki, void black windows, paving ghost under the grass.** `shots/critic15/zoom60_town_crop_quay.png`, `shots/critic15/zoom60_town_crop_roof.png`, `shots/critic15/zoom60_town_crop_window.png`, `shots/critic15/zoom60_town_crop_ground.png`. Fix: irregular stones with half stones and a rounded wet edge; per-house fleck noise; warm bounce in shade; dim interior tint in windows; mask the paving under grass.
8. **Dry sand a salmon blotch with a lattice moiré instead of grain.** `shots/critic15/zoom60_beach_crop_sand.png`, `shots/critic15/zoom120_brig_crop_palm.png`. Fix: low-contrast drift lines and a wrack line; a non-axis-aligned grain noise.
9. **Jib a detached triangle with the forestay running past it.** `shots/critic15/zoom120_brig_crop_jib.png`, `shots/critic15/hero_phone_crop_brig.png`, `shots/critic15/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
10. **Fronds flat lime blades in a starburst.** `shots/critic15/zoom60_beach_crop_fronds.png`, `shots/critic15/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
11. **Sky into the sun a flat tan-to-grey gradient, no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic15/sun_check_crop_sky.png`, `shots/critic15/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Mole boulders read as grey wire cages, in clear and fog.** `shots/critic15/hero_phone_crop_mole.png`, `shots/critic15/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base.
13. **Bushes lime lollipops with hard black blobs; a large blurred dark smear across the hill; white specks along the roofline left of the tower.** `shots/critic15/hero_phone_crop_hill.png`, `shots/critic15/zoom300_crop_top.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the specks.
14. **Dock a dark pile of blocks.** `shots/critic15/hero_phone_crop_dock.png`, `shots/critic15/fog_phone_crop_dock.png`. Fix: lighter plank albedo with visible plank lines and piles.
15. **Deep water at 300 m a flat cobalt plane; the noon sparkle field still dense over the lower right; the sail palm-shadow reads as a stain; a white sliver at the right quay end.** `shots/critic15/zoom300_crop_deep.png`, `shots/critic15/contact_clear_12_crop_basin.png`, `shots/critic15/zoom120_brig_crop_sail.png`, `shots/critic15/hero_phone_crop_quay_right.png`. Fix: swell banding at 300 m; cap clump coverage at noon; fade far-caster shadows on cloth; kill the sliver.

## Round 14 issues — status

| # | Round 14 issue | Status | Evidence |
|---|---|---|---|
| 1 | Fog a veil over a clear picture: near water cobalt, no depth layers, bushes unfogged, full shadows, slate hull, white night-fog windows | **improved** — near water now desaturated grey-blue; everything else unchanged | `shots/critic15/fog_phone_crop_near_water.png`, `shots/critic15/fog_phone.png`, `shots/critic15/fog_phone_crop_hill.png`, `shots/critic15/fog_phone_crop_dock.png`, `shots/critic15/contact_fog_22_crop_town.png` |
| 2 | Self-lit foam collar a white ring around the basin and along the quay wall; spit blob | **fixed** — collar off, quay wall clean, no spit blob at 300 m | `shots/critic15/hero_phone_crop_quay_right.png`, `shots/critic15/hero_phone_crop_shore_left.png`, `shots/critic15/zoom300_crop_island.png` |
| 3 | 60 m beach: honeycomb wet band at 60 m and 120 m; salmon blotch on dry sand | **improved / new fault** — honeycomb gone at both zooms; blotch remains; a smeared bank with a grey slab and aliased edge replaces the cells | `shots/critic15/zoom120_brig_crop_shore_left.png`, `shots/critic15/zoom60_beach_crop_wetband.png`, `shots/critic15/zoom60_beach_crop_sand.png` |
| 4 | Night: marbled moon sheet, lower half black, brig invisible, no beam | **unchanged** | `shots/critic15/night_phone_crop_basin.png`, `shots/critic15/night_phone_crop_bottom.png`, `shots/critic15/night_phone_crop_brig.png`, `shots/critic15/night_phone_crop_mole.png` |
| 5 | Noon glitter white-out with a white beach blob | **improved (marginal)** — sparkle confined to the lower right, no beach blob; a new cyan-white ring at the quay wall | `shots/critic15/contact_clear_12_crop_basin.png`, `shots/critic15/contact.png` |
| 6 | Town unchanged at 60 m: quay grid, roof repeat, flat shade, void windows, paving ghost | **unchanged** | `shots/critic15/zoom60_town_crop_quay.png`, `shots/critic15/zoom60_town_crop_roof.png`, `shots/critic15/zoom60_town_crop_window.png`, `shots/critic15/zoom60_town_crop_ground.png` |
| 7 | Fronds flat blades in a starburst | **unchanged** | `shots/critic15/zoom60_beach_crop_fronds.png`, `shots/critic15/zoom120_brig_crop_palm.png` |
| 8 | Jib a detached triangle | **unchanged** | `shots/critic15/zoom120_brig_crop_jib.png`, `shots/critic15/hero_phone_crop_brig.png` |
| 9 | Sky flat tan gradient; hill black into the sun | **unchanged** | `shots/critic15/sun_check_crop_sky.png`, `shots/critic15/sun_check_crop_bottom.png` |
| 10 | Mole boulders wire cages | **unchanged** | `shots/critic15/hero_phone_crop_mole.png`, `shots/critic15/fog_phone_crop_mole.png` |
| 11 | Bush lollipops with hard blobs; dark hill smear | **unchanged** | `shots/critic15/hero_phone_crop_hill.png`, `shots/critic15/zoom300_crop_top.png` |
| 12 | Dock a pile of dark blocks | **unchanged** — now with a cyan halo | `shots/critic15/hero_phone_crop_dock.png`, `shots/critic15/fog_phone_crop_dock.png` |
| 13 | Sail mark a stain; roofline specks | **unchanged** | `shots/critic15/zoom120_brig_crop_sail.png`, `shots/critic15/hero_phone_crop_hill.png` |
| 14 | Night windows identical rectangles at one brightness | **unchanged** | `shots/critic15/night_phone_crop_town.png` |
| 15 | Foam ring shows through fog at full brightness | **fixed (by removal)** — no collar to show; the right-quay sliver still shows in fog | `shots/critic15/fog_phone_crop_quay_right.png`, `shots/critic15/fog_phone.png` |

## Budget lines (from `shots/critic15/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,440,457 | 41.3 | 7.7 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,440,457 | 41.3 | 6.9 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,038,009 | 41.3 | 7.4–10.7 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.05 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,416,311 | 41.3 | 5.9 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,440,047 | 41.3 | 7.0 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,422,523 | 41.3 | 5.6 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,440,457 | 41.3 | 8.0 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,440,457 | 41.3 | 7.4 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,440,457 | 41.3 | 6.4 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,440,457 | 41.3 | 6.8 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.0% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** a foreshore without a bank, slab or smear; sand grain and a wrack line; irregular quay stones; a non-repeating roof; leaflets; solid boulders; clustered bushes; bounce in shade; a plank dock.
- **Light (7.5):** a narrow moon path with moon fill and a beam; fog shadows stopped down; bushes lit like the ground; a dredge that darkens, not glows.
- **Atmosphere (7.0):** three fog depth planes with fogged instances and hull; amber emissives in night fog; a painted sky.
- **Water (7.5):** the quay rim and the milk band gone; a 1–2 m lace; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; a sail mark with a cause; no specks; a motion capture.
- **Composition (7.5):** rim and milk band gone; a beach with something in it; moon on the near water; fog with depth.
- **Programmer art (6.5):** clear the foreshore stretch and hard line at 60 m; clear the marginals (quay/roof tiling, single-colour fog with unfogged bushes, noon ring, black night foreground, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials and programmer-art checklist at 6.5, then atmosphere at 7.0, water,
light, scale and composition at 7.5; only budget and errors (8.5) clears the bar. This was a small,
targeted pass — twelve lines — and it did what it set out to do: the self-lit collar that outlined the
basin like a pool rim is gone, the honeycomb wash is gone at every zoom, and the fog finally touches the
near water. The hero frame without the collar is the cleanest composition the project has produced and
the open basin's brush texture is the closest thing in the scene to R1's painted water. But the same pass
introduced two faults of the size it removed: the dredged basin is a bright cyan band along the whole
quay wall that reads as an underwater light and burns to a white ring at noon, and the "climb out within
2.5 m" foreshore is, at 60 m, a smeared bank with a flat grey mirror on top and an aliased edge — a
stretched-UV, hard-shoreline hit that keeps the checklist failing on its own. Everything else on the
round 14 list — night, town, jib, fronds, boulders, sky, bushes, dock, specks, windows — is untouched
for a fourth round. Scores go from 6.5/7.5/6.5/7.0/7.5/7.5/8.5/6.0 in round 14 to
6.5/7.5/7.0/7.5/7.5/7.5/8.5/6.5: atmosphere, water and programmer art each up half a point on genuine
removals, materials flat because one artefact swapped for another. Against Sea of Conquest the basin now
reads as a painted harbour from 120 m; the shore, the night, the fog and the 60 m town do not.
