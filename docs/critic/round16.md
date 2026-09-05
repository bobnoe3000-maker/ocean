# Critic round 16 — Ocean look test, tenth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` (written 14:42 UTC) from HEAD `67415b3`
("Docs: round 15 column in the report"; `git log --oneline -1` confirms). Its parent `08171e9` is "Round 16
builder pass (part 1): dredge to the quay wall, gentle foreshore, noise-broken bay slope blend, thin shore
sheet that is collar, flattened night normals for a narrow moon path, brighter sky fill in mist". There is
no part 2 this round. All ten shots were taken, in the required order, in the foreground, `--frames 4`
throughout: sixteen full frames under `shots/critic16/` plus fifty-one native-resolution crops
(`*_crop_*.png`, nearest-neighbour upscaled 1–4×, cut with a scratch pngjs script outside the repo). Every
frame and crop cited below was opened and looked at. No round 1–15 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.1–10.0 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 6.5

What moved: the steep foreshore bank is gone — at 60 m the sand now runs down to the water on a gentle
slope (`shots/critic16/zoom60_beach.png`), and at 120 m the shore is a soft pale sheet over turquoise with
no honeycomb and no bank (`shots/critic16/zoom120_brig_crop_shore_left.png`). The brig's deck, grates,
rail and bow remain the best material set in the scene (`shots/critic16/zoom120_brig_crop_deck.png`,
`shots/critic16/hero_phone_crop_brig.png`), and the lit lime-washed walls with drawn cracks and sills still
hold (`shots/critic16/zoom60_town_crop_walls.png`, `shots/critic16/hero_phone_crop_town.png`). What did not
move: the flat grey-lavender mirror slab between dry sand and water is still there at 60 m — it has lost
its bank but not its flatness, and the palm shadows on the dry sand still terminate on its edge in a comb
of vertical teeth (`shots/critic16/zoom60_beach_crop_wetband.png`); below it the wet strip is a pale cream
band with a fine horizontal line lattice, then a 3–6 m crumpled chalk sheet with a hard, jagged left edge
(`shots/critic16/zoom60_beach_crop_shore.png`). The dry sand is still the salmon blotch over a lattice
moiré with no grain (`shots/critic16/zoom60_beach_crop_sand.png`). New at 120 m: a grey mottled smudge
bleeds over the dry sand behind the shore sheet, reading as smoke on the beach
(`shots/critic16/zoom120_brig_crop_wash.png`, top-left). Nothing in the town moved for a fifth round: the
quay is a stamped running-bond grid of identical stones, the roof fleck repeats every four rows, shaded
walls are flat, windows are black voids, the cobble pattern ghosts through the grass verge
(`shots/critic16/zoom60_town_crop_quay.png`, `shots/critic16/zoom60_town_crop_roof.png`,
`shots/critic16/zoom60_town_crop_window.png`, `shots/critic16/zoom60_town_crop_ground.png`). Mole boulders
are grey wire cages (`shots/critic16/hero_phone_crop_mole.png`); fronds are flat lime blades in a starburst
(`shots/critic16/zoom60_beach_crop_fronds.png`, `shots/critic16/zoom120_brig_crop_palm.png`); the dock is a
dark pile of blocks (`shots/critic16/hero_phone_crop_dock.png`). Score holds at 6.5: the bank is gone, the
slab, the teeth, the blotch and the town are not.
To 8.5: a wet band that is darker, glossier sand with a soft upper edge — no sky-mirror slab, no comb
teeth; sand grain with drift lines and a wrack line; irregular quay stones with half stones and a rounded
wet edge; per-house roof fleck noise; warm bounce in shade and a dim interior tint in windows; solid
painted boulders; pinnate leaflets on a drooping rachis; a lighter plank dock with visible piles.

### 2. Light — 7.5

The 17:30 sun still does its job: front-lit orange-cream walls, long violet shadows up-left at 4–5× object
height, correct lighthouse and tower shadows (`shots/critic16/hero_phone.png`,
`shots/critic16/hero_phone_crop_town.png`, `shots/critic16/zoom60_town.png`); the glitter path into the sun
at pitch 14 remains the project's best light (`shots/critic16/sun_check_crop_glitter.png`). Two real gains:
the bright cyan "underwater light" band along the quay wall is gone — the water meets the wall in the same
key as the basin (`shots/critic16/hero_phone_crop_quay_right.png`, `shots/critic16/hero_phone_crop_shore_left.png`)
— and the cyan halo around the dock is gone (`shots/critic16/hero_phone_crop_dock.png`). At noon the
burnt-out cyan-white ring at the wall is also gone, but the whole basin is now a flat saturated cyan pool
with a darker cobalt hole in the middle and a pale glow arc at the outer beach edge
(`shots/critic16/contact_clear_12_crop_basin.png`). The night moved a little: the moon sheet is now
confined to the right half of the basin with soft feathered edges and a fine hatch texture instead of
marbling, but it is still a sheet 40 m wide, not a narrow path, and the left half of the basin and the
whole lower half of the frame are pure black; the brig is invisible except for one lantern, and there is
still no beam from the lighthouse lamp (`shots/critic16/night_phone_crop_basin.png`,
`shots/critic16/night_phone_crop_bottom.png`, `shots/critic16/night_phone_crop_brig.png`,
`shots/critic16/night_phone_crop_mole.png`). Unchanged: the hill into the sun is black with self-lit lime
bushes (`shots/critic16/sun_check_crop_bottom.png`); fog casts full-strength dock and brig shadows
(`shots/critic16/fog_phone_crop_dock.png`, `shots/critic16/fog_phone_crop_brig.png`); shaded walls have no
bounce (`shots/critic16/zoom60_town_crop_window.png`).
To 8.5: a narrow moon path along the moon azimuth with faint moon fill on hull, rigging and wave backs
across the whole basin; a beam cone; bushes lit by the same sun as the ground; shadows at 30% in fog; a
warm bounce term in shade; a noon basin that is not one cyan pool.

### 3. Atmosphere — 7.0

The fog is brighter and bluer this round ("brighter sky fill in mist"): the near water is a soft
periwinkle grey-blue with a smooth top-to-bottom gradient (`shots/critic16/fog_phone_crop_near_water.png`),
the town greys down evenly (`shots/critic16/fog_phone_crop_town.png`), and the lanterns carry soft warm
halos in night fog (`shots/critic16/contact_fog_22_crop_town.png`). What is still missing is the same list
as last round: there are no depth layers — the frame is one veil (`shots/critic16/fog_phone.png`); the
instanced bushes sit unfogged as lime dots on the greyed hill (`shots/critic16/fog_phone_crop_hill.png`);
the brig hull is a flat slate silhouette with all deck detail gone while its sails stay full cream
(`shots/critic16/fog_phone_crop_brig.png`); the mole boulders read as wire cages through the fog
(`shots/critic16/fog_phone_crop_mole.png`); night-fog windows are white, not amber
(`shots/critic16/contact_fog_22_crop_town.png`); fog 12:00 and 17:30 are near-identical
(`shots/critic16/contact_fog_12_crop_basin.png`, `shots/critic16/contact_fog_175_crop_basin.png`,
`shots/critic16/contact.png`), and in fog 12:00 a pale luminous arc now shows at the bay's outer edge. The
sky into the sun is unchanged: a flat tan-to-grey gradient with a sun disc and halo, no cobalt zenith, no
rose belt, no cloud (`shots/critic16/sun_check_crop_sky.png`). Aerial perspective on the far coast at 300 m
is present but slight (`shots/critic16/zoom300_crop_top.png`). Score holds at 7.0: brighter is not deeper.
To 8.5: three depth layers in fog with fogged instances; fog on the hull, not only the sails; amber
emissives in night fog; different fog at noon and 17:30; a painted sky with a blue zenith, a rose belt
and clouds.

### 4. Water — 7.5

Gains: the swimming-pool rim along the quay wall is gone at 17:30 — the wall meets the water cleanly with a
faint darker line, in the same hue family as the basin (`shots/critic16/hero_phone_crop_quay_right.png`,
`shots/critic16/hero_phone_crop_shore_left.png`); the dock's cyan halo is gone
(`shots/critic16/hero_phone_crop_dock.png`); the brush texture of the open basin — long diagonal strokes,
turquoise-to-cobalt banding — is as good as it has been at every zoom (`shots/critic16/hero_phone_crop_water.png`,
`shots/critic16/zoom120_brig_crop_water.png`, `shots/critic16/zoom300_crop_island.png`,
`shots/critic16/landscape_crop_basin.png`). What holds it below 8: the milky pale band with no visible
cause still lies across the hero's bottom third (`shots/critic16/hero_phone_crop_bottom.png`,
`shots/critic16/hero_phone.png`); the "thin shore sheet" is not thin — at 120 m it is a 6–10 m pale
lavender collar with a saw-toothed dark edge where the chop shows through, green algae blotches inside it,
and a grey smudge bleeding onto the dry sand (`shots/critic16/zoom120_brig_crop_wash.png`,
`shots/critic16/zoom120_brig_crop_shore_left.png`); at 60 m it is still a 3–6 m crumpled chalk sheet with a
hard jagged inner edge and green blotches (`shots/critic16/zoom60_beach_crop_foam.png`,
`shots/critic16/zoom60_beach_crop_shore.png`), sitting below a flat grey mirror slab
(`shots/critic16/zoom60_beach_crop_wetband.png`). The noon basin is now one flat cyan pool with a dark
centre and the sparkle field over the lower right is still a dense scatter of hard white blobs
(`shots/critic16/contact_clear_12_crop_basin.png`, `shots/critic16/contact_clear_12_crop_sparkle.png`).
The white sliver at the right end of the quay is still there in clear and fog
(`shots/critic16/hero_phone_crop_quay_right.png`, `shots/critic16/fog_phone_crop_quay_right.png`). No bow
foam, no foam at the mole, no hull or sail reflection (`shots/critic16/hero_phone_crop_brig.png`,
`shots/critic16/hero_phone_crop_mole.png`). Deep water at 300 m is a flat cobalt plane with faint streaks
and no swell (`shots/critic16/zoom300_crop_deep.png`); the night path is a 40 m sheet
(`shots/critic16/night_phone_crop_basin.png`). Score holds at 7.5: one rim removed, one collar widened.
To 8.5: a 1–2 m cream lace broken into tongues, not a sheet; a wet dark line, not a mirror slab; remove the
milk band and the quay sliver; bow and mole foam; broken reflections; cap the noon sparkle and give the
noon basin its banding back; swell at 300 m; a narrow moon path.

### 5. Scale and motion — 7.5

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as one
place (`shots/critic16/hero_phone.png`, `shots/critic16/landscape.png`, `shots/critic16/zoom300.png`). The
jib is unchanged: a detached triangle hung off the bowsprit end with the forestay running past it, in every
frame it appears in (`shots/critic16/zoom120_brig_crop_jib.png`, `shots/critic16/hero_phone_crop_brig.png`,
`shots/critic16/fog_phone_crop_brig.png`). The palm shadow on the mainsail is a soft green-grey bar with a
fainter feathery tail; with the palms in the same frame and no matching shadow on the water between palm
and sail it still reads as a stain on the cloth (`shots/critic16/zoom120_brig_crop_sail.png`,
`shots/critic16/zoom120_brig.png`). The dock is a dark pile of blocks (`shots/critic16/hero_phone_crop_dock.png`);
white specks still run along the roofline right of the tower (`shots/critic16/hero_phone_crop_hill.png`);
the pennants and gulls are posed convincingly but motion is unverifiable from stills.
To 8.5: bend the jib's luff onto the forestay with a hank line; show the palm shadow on the water or fade
far-caster shadows on cloth; a lighter plank dock; remove the specks; a motion capture.

### 6. Composition and squint test — 7.5

Without the cyan rim and the dock halo the hero's basin is one continuous painted surface, and the eye
path — sunlit sails, brig shadow to the lighthouse, up the turquoise to the warm town — is intact;
`shots/critic16/landscape.png` and `shots/critic16/zoom300.png` read as one painted island at thumbnail.
Against it: the milky band across the bottom third still flattens the foreground
(`shots/critic16/hero_phone.png`, `shots/critic16/hero_phone_crop_bottom.png`); the beach at 60 m still has
nothing to look at but a blotch, a slab and a chalk sheet (`shots/critic16/zoom60_beach.png`); the night is
a wall of windows over a black lower half (`shots/critic16/night_phone.png`,
`shots/critic16/night_phone_crop_town.png`); the noon frame is a cyan pool with a sparkle field
(`shots/critic16/contact_clear_12_crop_basin.png`); the fog has no depth (`shots/critic16/fog_phone.png`).
To 8.5: kill the milk band; a beach with a wrack line, a boat and rocks; the moon on the near water; fog
with three planes; a noon basin with banding.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,416,951–1,441,097 at high quality (96.1% of the 1.5 M limit; 1,038,649 at
medium), textures 41.3 MB (limit 256). Device fps not measured; headless p50 6.1–10.0 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 6.5 (automatic fail)

The 60 m foreshore is still a hit: a flat grey-lavender slab with a toothed, aliased edge against the dry
sand and a hard jagged inner edge on the chalk sheet — a hard water-to-beach line
(`shots/critic16/zoom60_beach_crop_wetband.png`, `shots/critic16/zoom60_beach_crop_shore.png`). The steep
bank and its vertically smeared sand are gone, which is the only reason this does not drop. Marginal hits
carried over: visible tiling on the quay grid and roof fleck repeat, paving ghost under the grass
(`shots/critic16/zoom60_town_crop_quay.png`, `shots/critic16/zoom60_town_crop_roof.png`,
`shots/critic16/zoom60_town_crop_ground.png`); sand lattice moiré (`shots/critic16/zoom60_beach_crop_sand.png`);
fog as one colour with unfogged bushes (`shots/critic16/fog_phone.png`, `shots/critic16/fog_phone_crop_hill.png`);
the noon sparkle field of hard white blobs (`shots/critic16/contact_clear_12_crop_sparkle.png`); the black
night foreground (`shots/critic16/night_phone_crop_bottom.png`); a uniform cobalt plane at 300 m
(`shots/critic16/zoom300_crop_deep.png`). Holds at 6.5; still a fail.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls flat but deliberate (`shots/critic16/zoom60_town_crop_window.png`); the grey foreshore slab is judged under the hard-line item |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | quay grid, roof repeat every four rows (`shots/critic16/zoom60_town_crop_quay.png`, `shots/critic16/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic16/zoom60_beach_crop_sand.png`); the smeared bank of round 15 is gone (`shots/critic16/zoom60_beach_crop_wetband.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic16/hero_phone.png`); the comb-tooth shadow termini on the slab edge are an edge artefact, not acne (`shots/critic16/zoom60_beach_crop_wetband.png`) |
| Grey nights | clear | night is near black with warm windows (`shots/critic16/night_phone.png`); the pure-black lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | marginal | quay rim cleared; deep water at 300 m a flat cobalt plane (`shots/critic16/zoom300_crop_deep.png`); milk band (`shots/critic16/hero_phone_crop_bottom.png`); noon pool (`shots/critic16/contact_clear_12_crop_basin.png`) |
| Hard water-to-beach line | **hit (60 m)** | flat grey slab with a toothed aliased edge against the dry sand; chalk sheet with a hard jagged inner edge (`shots/critic16/zoom60_beach_crop_wetband.png`, `shots/critic16/zoom60_beach_crop_shore.png`); at 120 m and 300 m the line is soft (`shots/critic16/zoom120_brig_crop_shore_left.png`, `shots/critic16/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic16/zoom60_beach.png`); motion unverifiable |
| Fog as one colour | marginal | one veil with a gradient, bushes unfogged (`shots/critic16/fog_phone.png`, `shots/critic16/fog_phone_crop_hill.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic16/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **The 60 m foreshore is still a flat grey-lavender mirror slab with a toothed, aliased edge against the dry sand; palm shadows end on it in a comb of vertical teeth; below it a pale lattice strip and a chalk sheet with a hard jagged inner edge.** `shots/critic16/zoom60_beach_crop_wetband.png`, `shots/critic16/zoom60_beach_crop_shore.png`, `shots/critic16/zoom60_beach.png`. Fix: no sky-mirror term on sand — the wet band is darker, glossier sand with a soft noise-broken upper edge; shadows must cross it, not stop on it.
2. **The "thin shore sheet" is a 6–10 m pale lavender collar at 120 m with a saw-toothed dark outer edge, green algae blotches, and a grey smudge bleeding onto the dry sand; at 60 m a 3–6 m crumpled chalk sheet.** `shots/critic16/zoom120_brig_crop_wash.png`, `shots/critic16/zoom120_brig_crop_shore_left.png`, `shots/critic16/zoom60_beach_crop_foam.png`. Fix: 1–2 m cream lace in tongues with a soft inner fade; kill the green channel and the beach-side smudge.
3. **Fog is one veil: no depth layers, unfogged bushes, full-strength dock and brig shadows, brig hull a slate silhouette under cream sails, night-fog windows white, fog 12:00 and 17:30 near-identical.** `shots/critic16/fog_phone.png`, `shots/critic16/fog_phone_crop_hill.png`, `shots/critic16/fog_phone_crop_dock.png`, `shots/critic16/fog_phone_crop_brig.png`, `shots/critic16/contact_fog_22_crop_town.png`, `shots/critic16/contact.png`. Fix: three banded depth planes (R4); fog the instanced bushes and the hull; shadows at 30%; amber emissives.
4. **Night: moon sheet 40 m wide over the right half of the basin, left half and the whole lower half of the frame pure black, brig invisible, no beam.** `shots/critic16/night_phone_crop_basin.png`, `shots/critic16/night_phone_crop_bottom.png`, `shots/critic16/night_phone_crop_brig.png`, `shots/critic16/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon azimuth, a faint moon fill on wave backs, hull and rigging everywhere, a beam cone.
5. **A milky pale band with no visible cause across the hero's bottom third.** `shots/critic16/hero_phone_crop_bottom.png`, `shots/critic16/hero_phone.png`. Fix: remove the near-camera mist/desaturation term at 17:30 clear, or tie it to a glitter path with a sun-side gradient.
6. **Noon: the basin is one flat cyan pool with a dark cobalt hole in the centre and a pale glow arc at the beach; the sparkle field over the lower right is a dense scatter of hard white blobs.** `shots/critic16/contact_clear_12_crop_basin.png`, `shots/critic16/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure; cap clump coverage and soften the sparkle.
7. **Town unchanged at 60 m: quay a stamped running-bond grid, roof fleck repeat every four rows, shaded walls flat, void black windows, paving ghost under the grass.** `shots/critic16/zoom60_town_crop_quay.png`, `shots/critic16/zoom60_town_crop_roof.png`, `shots/critic16/zoom60_town_crop_window.png`, `shots/critic16/zoom60_town_crop_ground.png`. Fix: irregular stones with half stones and a rounded wet edge; per-house fleck noise; warm bounce in shade; dim interior tint; mask the paving under grass.
8. **Dry sand a salmon blotch over a lattice moiré instead of grain.** `shots/critic16/zoom60_beach_crop_sand.png`, `shots/critic16/zoom120_brig_crop_palm.png`. Fix: low-contrast drift lines and a wrack line; a non-axis-aligned grain noise.
9. **Jib a detached triangle with the forestay running past it.** `shots/critic16/zoom120_brig_crop_jib.png`, `shots/critic16/hero_phone_crop_brig.png`, `shots/critic16/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
10. **Fronds flat lime blades in a starburst.** `shots/critic16/zoom60_beach_crop_fronds.png`, `shots/critic16/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
11. **Sky into the sun a flat tan-to-grey gradient, no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic16/sun_check_crop_sky.png`, `shots/critic16/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Mole boulders read as grey wire cages, in clear and fog; no foam at the mole.** `shots/critic16/hero_phone_crop_mole.png`, `shots/critic16/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
13. **Bushes lime lollipops with hard black blobs; a large blurred dark smear across the hill; white specks along the roofline right of the tower.** `shots/critic16/hero_phone_crop_hill.png`, `shots/critic16/zoom300_crop_top.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the specks.
14. **Dock a dark pile of blocks; white sliver at the right end of the quay in clear and fog.** `shots/critic16/hero_phone_crop_dock.png`, `shots/critic16/hero_phone_crop_quay_right.png`, `shots/critic16/fog_phone_crop_quay_right.png`. Fix: lighter plank albedo with plank lines and piles; kill the sliver where the wall meets the beach.
15. **Deep water at 300 m a flat cobalt plane; the sail palm-shadow reads as a stain; no bow foam or hull reflection.** `shots/critic16/zoom300_crop_deep.png`, `shots/critic16/zoom120_brig_crop_sail.png`, `shots/critic16/hero_phone_crop_brig.png`. Fix: swell banding at 300 m; fade far-caster shadows on cloth; a bow collar and broken reflections.

## Round 15 issues — status

| # | Round 15 issue | Status | Evidence |
|---|---|---|---|
| 1 | 60 m foreshore: steep bank, smeared sand, flat grey slab with a jagged aliased edge, comb-tooth shadow termini | **improved** — bank and smear gone; slab, toothed edge and comb termini remain | `shots/critic16/zoom60_beach_crop_wetband.png`, `shots/critic16/zoom60_beach_crop_shore.png`, `shots/critic16/zoom60_beach.png` |
| 2 | Dredged basin a bright cyan band along the quay wall and around the dock; noon cyan-white ring | **fixed** — wall and dock clean at 17:30, no ring at noon; the noon basin is now a flat cyan pool (new, issue 6) | `shots/critic16/hero_phone_crop_quay_right.png`, `shots/critic16/hero_phone_crop_dock.png`, `shots/critic16/contact_clear_12_crop_basin.png` |
| 3 | Fog one veil: no depth layers, unfogged bushes, full shadows, slate hull, white night-fog windows, 12:00 = 17:30 | **unchanged** — brighter and bluer, still one veil | `shots/critic16/fog_phone.png`, `shots/critic16/fog_phone_crop_hill.png`, `shots/critic16/fog_phone_crop_dock.png`, `shots/critic16/fog_phone_crop_brig.png`, `shots/critic16/contact_fog_22_crop_town.png`, `shots/critic16/contact.png` |
| 4 | Night: marbled moon sheet with black holes, lower half black, brig invisible, no beam, identical windows | **improved (marginal)** — sheet confined to the right half with soft edges and no marbling; everything else unchanged | `shots/critic16/night_phone_crop_basin.png`, `shots/critic16/night_phone_crop_bottom.png`, `shots/critic16/night_phone_crop_brig.png`, `shots/critic16/night_phone_crop_mole.png`, `shots/critic16/night_phone_crop_town.png` |
| 5 | Milky pale band across the hero's bottom third | **unchanged** | `shots/critic16/hero_phone_crop_bottom.png`, `shots/critic16/hero_phone.png` |
| 6 | Beach wash a 3–6 m chalk sheet with algae blotches; no bow foam; no mole foam | **unchanged / worse at 120 m** — the sheet is now a 6–10 m collar with a saw-toothed edge and a smudge on the sand | `shots/critic16/zoom60_beach_crop_foam.png`, `shots/critic16/zoom120_brig_crop_wash.png`, `shots/critic16/hero_phone_crop_brig.png`, `shots/critic16/hero_phone_crop_mole.png` |
| 7 | Town unchanged at 60 m: quay grid, roof repeat, flat shade, void windows, paving ghost | **unchanged** | `shots/critic16/zoom60_town_crop_quay.png`, `shots/critic16/zoom60_town_crop_roof.png`, `shots/critic16/zoom60_town_crop_window.png`, `shots/critic16/zoom60_town_crop_ground.png` |
| 8 | Dry sand a salmon blotch with a lattice moiré | **unchanged** | `shots/critic16/zoom60_beach_crop_sand.png`, `shots/critic16/zoom120_brig_crop_palm.png` |
| 9 | Jib a detached triangle | **unchanged** | `shots/critic16/zoom120_brig_crop_jib.png`, `shots/critic16/hero_phone_crop_brig.png` |
| 10 | Fronds flat blades in a starburst | **unchanged** | `shots/critic16/zoom60_beach_crop_fronds.png`, `shots/critic16/zoom120_brig_crop_palm.png` |
| 11 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic16/sun_check_crop_sky.png`, `shots/critic16/sun_check_crop_bottom.png` |
| 12 | Mole boulders wire cages | **unchanged** | `shots/critic16/hero_phone_crop_mole.png`, `shots/critic16/fog_phone_crop_mole.png` |
| 13 | Bush lollipops; dark hill smear; roofline specks | **unchanged** | `shots/critic16/hero_phone_crop_hill.png`, `shots/critic16/zoom300_crop_top.png` |
| 14 | Dock a pile of dark blocks with a cyan halo | **improved** — halo gone; still a dark pile of blocks | `shots/critic16/hero_phone_crop_dock.png`, `shots/critic16/fog_phone_crop_dock.png` |
| 15 | Deep water flat at 300 m; noon sparkle field; sail stain; right-quay sliver | **unchanged** | `shots/critic16/zoom300_crop_deep.png`, `shots/critic16/contact_clear_12_crop_sparkle.png`, `shots/critic16/zoom120_brig_crop_sail.png`, `shots/critic16/hero_phone_crop_quay_right.png` |

## Budget lines (from `shots/critic16/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.7 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.3 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,038,649 | 41.3 | 6.9–10.0 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.05 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,416,951 | 41.3 | 7.0 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,440,687 | 41.3 | 9.9 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,423,163 | 41.3 | 6.1 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 6.9 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.2 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 9.7 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 6.4 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.1% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** a foreshore with no slab and no comb teeth; sand grain and a wrack line; irregular quay stones; a non-repeating roof; leaflets; solid boulders; clustered bushes; bounce in shade; a plank dock.
- **Light (7.5):** a narrow moon path with moon fill and a beam; fog shadows stopped down; bushes lit like the ground; a banded noon basin.
- **Atmosphere (7.0):** three fog depth planes with fogged instances and hull; amber emissives in night fog; different noon and 17:30 fog; a painted sky.
- **Water (7.5):** a 1–2 m lace, not a collar; the milk band and the quay sliver gone; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; a sail mark with a cause; no specks; a motion capture.
- **Composition (7.5):** milk band gone; a beach with something in it; moon on the near water; fog with depth.
- **Programmer art (6.5):** clear the hard line and slab at 60 m; clear the marginals (quay/roof tiling, sand moiré, single-colour fog with unfogged bushes, noon sparkle blobs, black night foreground, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials and programmer-art checklist at 6.5, then atmosphere at 7.0, water,
light, scale and composition at 7.5; only budget and errors (8.5) clears the bar. This was another small
pass, and it removed what it aimed at: the cyan pool rim along the quay wall and around the dock is gone at
every hour, the burnt noon ring is gone, the steep smeared bank on the 60 m foreshore is gone, and the
night's moon sheet has soft edges instead of marbling. The hero basin is now one continuous painted surface
from wall to mole, the closest the project has come to R1's water. But every gain has a residue: the
foreshore kept its flat grey mirror slab and the comb of shadow teeth on its edge, so the hard-shoreline
hit still fails the checklist on its own; the "thin" shore sheet came back at 120 m as a 6–10 m saw-edged
collar with a grey smudge on the sand; the noon basin traded a ring for a flat cyan pool; the milk band,
the quay sliver, the fog veil, the black night foreground and the entire round 14–15 list of town, jib,
fronds, boulders, sky, bushes and dock are untouched for a fifth round. Scores hold at
6.5/7.5/7.0/7.5/7.5/7.5/8.5/6.5 — identical to round 15, because the removals and the residues are of the
same weight. Against Sea of Conquest the 120 m and 300 m basin reads as a painted harbour; the 60 m shore,
the night, the fog and the 60 m town do not.
