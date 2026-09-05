# Critic round 18 — Ocean look test, twelfth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` written 17:21:13 UTC from HEAD
`ad8f97a` ("Docs: round 17 column in the report"; `git log --oneline -1` confirms — the brief said HEAD
carries the builder pass; it is one commit up). Its parent `341d3d7` is "Round 18 builder pass (part 1):
tight foam rim and shallow lace band, painted body beyond the glassy shallows, no mirror in the shallows,
wet-rim wash, sand drifts on dry sand only" (touches `src/ocean/Ocean.ts` and `src/terrain/Terrain.ts`
only, 9 insertions / 7 deletions). There is no part 2. First shot started 45 s after the dist write. All
ten shots were taken, in the required order, in the foreground, `--frames 4` throughout: sixteen full
frames under `shots/critic18/` plus fifty-four native-resolution crops (`*_crop_*.png`, nearest-neighbour
upscaled 1–4×, cut with a scratch pngjs script outside the repo). Every frame and crop cited below was
opened and looked at. No round 1–17 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.1–9.6 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0 (up from 6.5)

The one material that moved is the foreshore, and it moved the right way. At 60 m the sky-mirror slab is
gone: the beach now runs dry salmon-tan sand, a darker grey-tan wet band, a tight cream foam rim one to two
metres wide with a crumpled edge, then translucent pale-green shallows fading to turquoise
(`shots/critic18/zoom60_beach.png`, `shots/critic18/zoom60_beach_crop_shore.png`,
`shots/critic18/zoom60_beach_crop_wetband.png`). The palm shadows now cross the wet band and continue as
darker bands on the water instead of ending in comb teeth (`shots/critic18/zoom60_beach.png`, top edge).
The new sand drifts read as soft dark diagonal streaks on the dry sand and are a plausible first pass
(`shots/critic18/zoom60_beach_crop_wetband.png`, left third). Against it: the wet band is a flat
lavender-grey strip with no gloss falloff and no grain, and its water-side edge is a row of regular dark
scallops at 3× (`shots/critic18/zoom60_beach_crop_foam.png`); dry sand is still a salmon blotch over a
lattice moiré (`shots/critic18/zoom60_beach_crop_sand.png`); fronds are flat lime blades in a starburst
(`shots/critic18/zoom60_beach_crop_fronds.png`, `shots/critic18/zoom120_brig_crop_palm.png`). The town at
60 m is unchanged for a seventh round: quay a stamped running-bond grid of identical stones
(`shots/critic18/zoom60_town_crop_quay.png`), roof fleck repeating every four rows
(`shots/critic18/zoom60_town_crop_roof.png`), windows black voids and shaded walls flat
(`shots/critic18/zoom60_town_crop_window.png`), cobbles ghosting through the grass verge
(`shots/critic18/zoom60_town_crop_ground.png`). Still good: the lit lime-washed walls with drawn cracks,
sills and rain staining (`shots/critic18/zoom60_town_crop_walls.png`) and the brig's deck, rail, bow and
rope coil (`shots/critic18/zoom120_brig_crop_bow.png`). Mole boulders remain grey wire cages
(`shots/critic18/hero_phone_crop_mole.png`); the dock a dark pile of blocks
(`shots/critic18/hero_phone_crop_dock.png`).
To 8.5: a wet band that is darker, glossier sand with grain, not a grey strip; a wrack line; irregular quay
stones with half stones and a rounded wet edge; per-house roof fleck noise; warm bounce in shade and a dim
interior tint in windows; solid painted boulders; pinnate leaflets on a drooping rachis; a plank dock.

### 2. Light — 7.5

The 17:30 sun still does its job: front-lit orange-cream walls, long violet shadows up-left at 4–5× object
height, correct tower and lighthouse shadows (`shots/critic18/hero_phone.png`,
`shots/critic18/hero_phone_crop_town.png`, `shots/critic18/zoom60_town.png`); the glitter path into the sun
at pitch 14 remains the project's best light (`shots/critic18/sun_check_crop_glitter.png`). New this round:
palm shadows now run across the wet band and onto the water at 60 m
(`shots/critic18/zoom60_beach.png`), which removes the comb-tooth termini. Unchanged: the moon sheet is a
40 m wide grey patch on the right half of the basin and the whole lower half of the frame is pure black
(`shots/critic18/night_phone_crop_basin.png`, `shots/critic18/night_phone_crop_bottom.png`); no beam from
the lamp, just a glow (`shots/critic18/night_phone_crop_mole.png`); the brig at 22:00 is a faint blue-grey
ghost (`shots/critic18/night_phone_crop_brig.png`); the noon basin is one flat cyan pool with a cobalt
hole (`shots/critic18/contact_clear_12_crop_basin.png`); the hill into the sun is black with self-lit lime
bushes (`shots/critic18/sun_check_crop_bottom.png`); fog casts full-strength dock and brig shadows
(`shots/critic18/fog_phone_crop_dock.png`, `shots/critic18/fog_phone_crop_brig.png`); shaded walls have
no bounce (`shots/critic18/zoom60_town_crop_window.png`). The palm shadow on the mainsail is still a
blurred green-grey bar with a dotted tail — it reads as a stain first and a shadow second
(`shots/critic18/zoom120_brig_crop_sail.png`). Holds at 7.5.
To 8.5: a narrow moon path along the moon azimuth with faint moon fill on wave backs across the whole
basin; a beam cone; bushes lit by the same sun as the ground; shadows at 30% in fog; a warm bounce term in
shade; a noon basin with its banding back; a crisper, neutral-grey shadow on the sail.

### 3. Atmosphere — 7.0

Unchanged. The fog is one veil with a smooth top-to-bottom gradient (`shots/critic18/fog_phone.png`,
`shots/critic18/fog_phone_crop_near_water.png`); there are no depth layers; the instanced bushes sit
unfogged as lime dots on the greyed hill (`shots/critic18/fog_phone_crop_hill.png`); the brig hull is a
flat slate silhouette with all deck detail gone while its sails stay full cream
(`shots/critic18/fog_phone_crop_brig.png`); the mole boulders read as wire cages through the fog
(`shots/critic18/fog_phone_crop_mole.png`); night-fog windows are white, not amber, with only the lantern
pools warm (`shots/critic18/contact_fog_22_crop_town.png`); fog 12:00 and 17:30 are near-identical
(`shots/critic18/contact_fog_12_crop_basin.png`, `shots/critic18/contact_fog_175_crop_basin.png`,
`shots/critic18/contact.png`). The sky into the sun is a flat tan-to-grey gradient with a sun disc and halo,
no cobalt zenith, no rose belt, no cloud (`shots/critic18/sun_check_crop_sky.png`). Aerial perspective on
the far coast at 300 m is present but slight (`shots/critic18/zoom300_crop_top.png`). Holds at 7.0.
To 8.5: three depth layers in fog with fogged instances; fog on the hull, not only the sails; amber
emissives in night fog; different fog at noon and 17:30; a painted sky with a blue zenith, a rose belt and
clouds.

### 4. Water — 7.5 (up from 7.0)

The shore is the story of this round and it is a real gain. At 120 m the opaque chalk band is gone; in its
place a one-to-two-metre cream lace rim with a crumpled outer edge, a soft inner fade onto a lavender-grey
wet strip, and a translucent pale-green shallow band that fades into the turquoise body
(`shots/critic18/zoom120_brig_crop_shore_left.png`, `shots/critic18/zoom120_brig_crop_wash.png`,
`shots/critic18/zoom120_brig.png`). The grey-brown smudge over the upper beach has been replaced by soft
drift streaks (`shots/critic18/zoom120_brig_crop_palm.png`). At 60 m the mirror slab and its toothed
edge are gone (`shots/critic18/zoom60_beach_crop_wetband.png`, `shots/critic18/zoom60_beach_crop_shore.png`);
what remains is a regular row of dark scallops along the water-side edge of the wet strip at 3×
(`shots/critic18/zoom60_beach_crop_foam.png`). At 300 m and in landscape the rim reads as a thin bright
outline around the whole bay (`shots/critic18/landscape_crop_basin.png`,
`shots/critic18/zoom300_crop_island.png`) — acceptable at thumbnail, but it is a uniform line, not tongues.
The open basin still carries its long diagonal brush strokes and reads as a painted surface
(`shots/critic18/hero_phone_crop_water.png`, `shots/critic18/zoom60_beach_crop_water.png`,
`shots/critic18/zoom120_brig_crop_water.png`). Unchanged faults: the milky pale band with no visible cause
across the hero's bottom third (`shots/critic18/hero_phone_crop_bottom.png`, `shots/critic18/hero_phone.png`);
the white sliver at the right end of the quay in clear and fog (`shots/critic18/hero_phone_crop_quay_right.png`,
`shots/critic18/fog_phone_crop_quay_right.png`); the noon basin a flat cyan pool with a cobalt hole and a
dense field of hard white sparkle blobs (`shots/critic18/contact_clear_12_crop_basin.png`,
`shots/critic18/contact_clear_12_crop_sparkle.png`); no bow foam, no mole foam, no hull or sail reflection
(`shots/critic18/zoom120_brig_crop_bow.png`, `shots/critic18/hero_phone_crop_mole.png`); deep water at
300 m a cobalt plane with faint streaks and no swell (`shots/critic18/zoom300_crop_deep.png`); the night
path a 40 m sheet (`shots/critic18/night_phone_crop_basin.png`); the basin more uniformly cyan than R1's
blue-violet deep water.
To 8.5: break the lace into tongues with gaps; a darker, glossier wet line instead of the lavender strip;
remove the milk band and the quay sliver; bow and mole foam; broken reflections; cap the noon sparkle and
give the noon basin its banding back; swell at 300 m; a narrow moon path; R1's blue-violet in the deep
basin.

### 5. Scale and motion — 7.5

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as one
place (`shots/critic18/hero_phone.png`, `shots/critic18/landscape.png`, `shots/critic18/zoom300.png`). The
jib is unchanged: a detached triangle hung off the bowsprit end with the forestay running past it
(`shots/critic18/zoom120_brig_crop_jib.png`, `shots/critic18/hero_phone_crop_brig.png`,
`shots/critic18/fog_phone_crop_brig.png`). The palm shadow on the mainsail has its cause in frame (the same
bands cross the water from the palms to the ship, `shots/critic18/zoom120_brig.png`), but the mark itself is
still a soft green-grey smear (`shots/critic18/zoom120_brig_crop_sail.png`). The dock is a dark pile of
blocks (`shots/critic18/hero_phone_crop_dock.png`); white specks still sit along the hill right of the
tower (`shots/critic18/hero_phone_crop_hill.png`); pennants and gulls are posed convincingly but motion is
unverifiable from stills. Holds at 7.5.
To 8.5: bend the jib's luff onto the forestay with a hank line; a crisper shadow on the cloth; a lighter
plank dock; remove the specks; a motion capture.

### 6. Composition and squint test — 7.5

The hero's basin is one continuous painted surface and the eye path — sunlit sails, brig shadow to the
lighthouse, up the turquoise to the warm town — is intact; `shots/critic18/landscape.png` and
`shots/critic18/zoom300.png` read as one painted island at thumbnail, and
`shots/critic18/landscape_crop_left.png` shows the west cape reading as sculpted terrain with a soft
shoreline. The beach at 60 m now has a shoreline worth looking at
(`shots/critic18/zoom60_beach.png`), but nothing on the sand itself — no wrack, boat or rock. Against
it: the milky band across the bottom third still flattens the foreground
(`shots/critic18/hero_phone_crop_bottom.png`); the night is a wall of windows over a black lower half
(`shots/critic18/night_phone.png`, `shots/critic18/night_phone_crop_town.png`); the noon frame is a cyan
pool with a sparkle field (`shots/critic18/contact_clear_12_crop_basin.png`); the fog has no depth
(`shots/critic18/fog_phone.png`). Holds at 7.5.
To 8.5: kill the milk band; a beach with a wrack line, a boat and rocks; the moon on the near water; fog
with three planes; a noon basin with banding.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,416,951–1,441,097 at high quality (96.1% of the 1.5 M limit; 1,038,649 at
medium), textures 41.3 MB (limit 256). Device fps not measured; headless p50 6.1–9.6 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 7.0 (up from 6.5; still a fail)

The clean hit of rounds 14–17 — the hard water-to-beach line at 60 m — is cleared to marginal: no slab, no
comb teeth, a soft inner fade onto the sand (`shots/critic18/zoom60_beach_crop_shore.png`), but the
water-side edge of the wet strip is still a regular row of dark scallops at 3×
(`shots/critic18/zoom60_beach_crop_foam.png`). The 120 m white band is cleared: the rim is a one-to-two
metre lace (`shots/critic18/zoom120_brig_crop_shore_left.png`). Marginal hits carried over: visible tiling
on the quay grid and roof fleck repeat, paving ghost under the grass
(`shots/critic18/zoom60_town_crop_quay.png`, `shots/critic18/zoom60_town_crop_roof.png`,
`shots/critic18/zoom60_town_crop_ground.png`); sand lattice moiré (`shots/critic18/zoom60_beach_crop_sand.png`);
fog as one colour with unfogged bushes (`shots/critic18/fog_phone.png`,
`shots/critic18/fog_phone_crop_hill.png`); the noon sparkle field of hard white blobs
(`shots/critic18/contact_clear_12_crop_sparkle.png`); the black night foreground
(`shots/critic18/night_phone_crop_bottom.png`); a near-uniform cobalt plane at 300 m
(`shots/critic18/zoom300_crop_deep.png`). No clean hit this round; six marginals. 7.0.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls flat but deliberate (`shots/critic18/zoom60_town_crop_window.png`); the lavender wet strip is a flat value but sits inside a painted shoreline (`shots/critic18/zoom60_beach_crop_shore.png`) |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | quay grid, roof repeat every four rows (`shots/critic18/zoom60_town_crop_quay.png`, `shots/critic18/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic18/zoom60_beach_crop_sand.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic18/hero_phone.png`); palm shadows now cross the wet band onto the water (`shots/critic18/zoom60_beach.png`) |
| Grey nights | clear | night is near black with warm windows (`shots/critic18/night_phone.png`); the pure-black lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | deep water at 300 m a near-flat cobalt plane (`shots/critic18/zoom300_crop_deep.png`); milk band (`shots/critic18/hero_phone_crop_bottom.png`); noon pool (`shots/critic18/contact_clear_12_crop_basin.png`); the rim is a uniform bright outline at 1× landscape (`shots/critic18/landscape_crop_basin.png`) but lace at 120 m desktop (`shots/critic18/zoom120_brig_crop_wash.png`) |
| Hard water-to-beach line | **hit (marginal, was clean)** | slab and comb teeth gone; soft fade onto sand (`shots/critic18/zoom60_beach_crop_shore.png`); regular dark scallops on the water-side edge of the wet strip at 3× (`shots/critic18/zoom60_beach_crop_foam.png`); at 300 m the line is soft (`shots/critic18/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic18/zoom60_beach.png`, `shots/critic18/zoom60_beach_crop_topleft.png`); motion unverifiable |
| Fog as one colour | **hit (marginal)** | one veil with a gradient, bushes unfogged (`shots/critic18/fog_phone.png`, `shots/critic18/fog_phone_crop_hill.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic18/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **Fog is one veil: no depth layers, unfogged bushes, full-strength dock and brig shadows, brig hull a slate silhouette under cream sails, night-fog windows white, fog 12:00 and 17:30 near-identical.** `shots/critic18/fog_phone.png`, `shots/critic18/fog_phone_crop_hill.png`, `shots/critic18/fog_phone_crop_dock.png`, `shots/critic18/fog_phone_crop_brig.png`, `shots/critic18/contact_fog_22_crop_town.png`, `shots/critic18/contact.png`. Fix: three banded depth planes (R4); fog the instanced bushes and the hull; shadows at 30%; amber emissives.
2. **Night: moon sheet 40 m wide over the right half of the basin, left half and the whole lower half of the frame pure black, no beam; the brig is a faint blue ghost.** `shots/critic18/night_phone_crop_basin.png`, `shots/critic18/night_phone_crop_bottom.png`, `shots/critic18/night_phone_crop_brig.png`, `shots/critic18/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon azimuth, a faint moon fill on wave backs and rigging everywhere, a beam cone.
3. **A milky pale band with no visible cause across the hero's bottom third.** `shots/critic18/hero_phone_crop_bottom.png`, `shots/critic18/hero_phone.png`. Fix: remove the near-camera mist/desaturation term at 17:30 clear, or tie it to a glitter path with a sun-side gradient.
4. **Town unchanged at 60 m: quay a stamped running-bond grid, roof fleck repeat every four rows, shaded walls flat, void black windows, paving ghost under the grass.** `shots/critic18/zoom60_town_crop_quay.png`, `shots/critic18/zoom60_town_crop_roof.png`, `shots/critic18/zoom60_town_crop_window.png`, `shots/critic18/zoom60_town_crop_ground.png`. Fix: irregular stones with half stones and a rounded wet edge; per-house fleck noise; warm bounce in shade; dim interior tint; mask the paving under grass.
5. **Noon: the basin is a flat cyan pool with a cobalt hole; the sparkle field over the lower right is a dense scatter of hard white blobs.** `shots/critic18/contact_clear_12_crop_basin.png`, `shots/critic18/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure; cap clump coverage and soften the sparkle.
6. **The 60 m wet band is a flat lavender-grey strip with a regular row of dark scallops on its water-side edge; the rim is a uniform outline rather than tongues.** `shots/critic18/zoom60_beach_crop_foam.png`, `shots/critic18/zoom60_beach_crop_wetband.png`, `shots/critic18/landscape_crop_basin.png`. Fix: darker, glossier wet sand with grain instead of a grey value; break the scallop period with noise; split the lace into tongues with gaps.
7. **Dry sand a salmon blotch over a lattice moiré.** `shots/critic18/zoom60_beach_crop_sand.png`, `shots/critic18/zoom120_brig_crop_palm.png`. Fix: a non-axis-aligned grain noise; a wrack line; keep the new drift streaks.
8. **Jib a detached triangle with the forestay running past it.** `shots/critic18/zoom120_brig_crop_jib.png`, `shots/critic18/hero_phone_crop_brig.png`, `shots/critic18/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
9. **Fronds flat lime blades in a starburst.** `shots/critic18/zoom60_beach_crop_fronds.png`, `shots/critic18/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
10. **Sky into the sun a flat tan-to-grey gradient, no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic18/sun_check_crop_sky.png`, `shots/critic18/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
11. **Mole boulders read as grey wire cages, in clear and fog; no foam at the mole.** `shots/critic18/hero_phone_crop_mole.png`, `shots/critic18/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
12. **Bushes lime lollipops with hard black blobs; a blurred dark smear across the hill; white specks right of the tower.** `shots/critic18/hero_phone_crop_hill.png`, `shots/critic18/zoom300_crop_top.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the specks.
13. **Dock a dark pile of blocks; white sliver at the right end of the quay in clear and fog.** `shots/critic18/hero_phone_crop_dock.png`, `shots/critic18/hero_phone_crop_quay_right.png`, `shots/critic18/fog_phone_crop_quay_right.png`. Fix: lighter plank albedo with plank lines and piles; kill the sliver where the wall meets the beach.
14. **Deep water at 300 m a near-flat cobalt plane with no swell; the basin uniformly cyan rather than R1's blue-violet.** `shots/critic18/zoom300_crop_deep.png`, `shots/critic18/hero_phone_crop_water.png`. Fix: swell banding at 300 m; shift the deep basin toward `#1E3A7A`.
15. **The sail shadow still a soft green smear; no bow foam or hull reflection.** `shots/critic18/zoom120_brig_crop_sail.png`, `shots/critic18/zoom120_brig_crop_bow.png`. Fix: a crisper neutral shadow on cloth; a bow collar and broken reflections.

## Round 17 issues — status

| # | Round 17 issue | Status | Evidence |
|---|---|---|---|
| 1 | 60 m foreshore: flat grey-blue mirror slab, toothed edge, comb-tooth shadow termini, chalk sheet with a hard inner edge | **fixed (slab, teeth, chalk sheet); residual scallops on the wet strip's outer edge** | `shots/critic18/zoom60_beach.png`, `shots/critic18/zoom60_beach_crop_wetband.png`, `shots/critic18/zoom60_beach_crop_shore.png`, `shots/critic18/zoom60_beach_crop_foam.png` |
| 2 | 120 m shore an opaque chalk-white band 6–10 m wide with green blotches, lavender glassy strip and grey-brown smudge on the sand | **fixed** — one-to-two metre lace with a soft inner fade; smudge replaced by drift streaks; a lavender wet strip remains inside the lace | `shots/critic18/zoom120_brig_crop_shore_left.png`, `shots/critic18/zoom120_brig_crop_wash.png`, `shots/critic18/zoom120_brig_crop_palm.png` |
| 3 | Fog one veil: no depth layers, unfogged bushes, full shadows, slate hull, white night-fog windows, 12:00 = 17:30 | **unchanged** | `shots/critic18/fog_phone.png`, `shots/critic18/fog_phone_crop_hill.png`, `shots/critic18/fog_phone_crop_dock.png`, `shots/critic18/fog_phone_crop_brig.png`, `shots/critic18/contact_fog_22_crop_town.png`, `shots/critic18/contact_fog_12_crop_basin.png`, `shots/critic18/contact_fog_175_crop_basin.png` |
| 4 | Night: 40 m moon sheet, lower half black, brig a faint ghost, no beam | **unchanged** | `shots/critic18/night_phone_crop_basin.png`, `shots/critic18/night_phone_crop_bottom.png`, `shots/critic18/night_phone_crop_brig.png`, `shots/critic18/night_phone_crop_mole.png` |
| 5 | Milky pale band across the hero's bottom third | **unchanged** | `shots/critic18/hero_phone_crop_bottom.png`, `shots/critic18/hero_phone.png` |
| 6 | Noon basin a flat cyan pool with a glow arc; sparkle field of hard white blobs | **unchanged** | `shots/critic18/contact_clear_12_crop_basin.png`, `shots/critic18/contact_clear_12_crop_sparkle.png` |
| 7 | Town unchanged at 60 m: quay grid, roof repeat, flat shade, void windows, paving ghost | **unchanged** | `shots/critic18/zoom60_town_crop_quay.png`, `shots/critic18/zoom60_town_crop_roof.png`, `shots/critic18/zoom60_town_crop_window.png`, `shots/critic18/zoom60_town_crop_ground.png` |
| 8 | Dry sand a salmon blotch with a lattice moiré | **improved (marginal)** — drift streaks added; blotch and moiré remain | `shots/critic18/zoom60_beach_crop_sand.png`, `shots/critic18/zoom60_beach_crop_wetband.png`, `shots/critic18/zoom120_brig_crop_palm.png` |
| 9 | Jib a detached triangle | **unchanged** | `shots/critic18/zoom120_brig_crop_jib.png`, `shots/critic18/hero_phone_crop_brig.png` |
| 10 | Fronds flat blades in a starburst | **unchanged** | `shots/critic18/zoom60_beach_crop_fronds.png`, `shots/critic18/zoom120_brig_crop_palm.png` |
| 11 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic18/sun_check_crop_sky.png`, `shots/critic18/sun_check_crop_bottom.png` |
| 12 | Mole boulders wire cages; no mole foam | **unchanged** | `shots/critic18/hero_phone_crop_mole.png`, `shots/critic18/fog_phone_crop_mole.png` |
| 13 | Bush lollipops; dark hill smear; roofline specks | **unchanged** | `shots/critic18/hero_phone_crop_hill.png`, `shots/critic18/zoom300_crop_top.png` |
| 14 | Dock a pile of dark blocks; white sliver at the right end of the quay | **unchanged** | `shots/critic18/hero_phone_crop_dock.png`, `shots/critic18/hero_phone_crop_quay_right.png`, `shots/critic18/fog_phone_crop_quay_right.png` |
| 15 | Deep water flat at 300 m; sail shadow a smear; no bow foam or reflection | **unchanged** | `shots/critic18/zoom300_crop_deep.png`, `shots/critic18/zoom120_brig_crop_sail.png`, `shots/critic18/zoom120_brig_crop_bow.png` |

## Budget lines (from `shots/critic18/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 6.8 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.4 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,038,649 | 41.3 | 6.6–9.6 | per cell |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,416,951 | 41.3 | 6.2 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,440,687 | 41.3 | 7.7 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,423,163 | 41.3 | 6.1 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.6 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.6 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.1 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.6 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.1% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** a wet band with gloss and grain, not a grey strip; sand grain and a wrack line; irregular quay stones; a non-repeating roof; leaflets; solid boulders; clustered bushes; bounce in shade; a plank dock.
- **Light (7.5):** a narrow moon path with moon fill and a beam; fog shadows stopped down; bushes lit like the ground; a banded noon basin.
- **Atmosphere (7.0):** three fog depth planes with fogged instances and hull; amber emissives in night fog; different noon and 17:30 fog; a painted sky.
- **Water (7.5):** lace in tongues, not an outline; a dark wet line; the milk band and the quay sliver gone; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; a crisper sail shadow; no specks; a motion capture.
- **Composition (7.5):** milk band gone; something on the beach; moon on the near water; fog with depth.
- **Programmer art (7.0):** clear the six marginals (quay/roof tiling and sand moiré, scalloped wet-strip edge, single-colour fog with unfogged bushes, noon sparkle blobs, black night foreground, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials, atmosphere and programmer-art checklist at 7.0, then light, water, scale
and composition at 7.5; only budget and errors (8.5) clears the bar. This was the first round since 14 that
fixed what it aimed at. The shoreline — the clean checklist hit that failed rounds 14 through 17 on its own —
is now a shoreline: no mirror slab, no comb teeth, no chalk sheet at 60 m, and a one-to-two metre lace
instead of an opaque white band at 120 m, with palm shadows crossing the wet sand onto the water. That is
worth +0.5 on materials, water and the checklist. It is a nine-line diff, though, and everything else on the
round 17 list — fog with no depth, the black night foreground, the milk band, the noon pool and sparkle,
the 60 m town, the jib, the fronds, the boulders, the sky, the dock — is untouched for a seventh round, and
the new wet strip is a flat lavender value with a scalloped outer edge that needs one more pass. Scores:
7.0/7.5/7.0/7.5/7.5/7.5/8.5/7.0. Against Sea of Conquest the 120 m basin, the beach at 120 m and the
landscape frame now read as one painted harbour; the night, the fog, the noon frame and the 60 m town
still do not.
