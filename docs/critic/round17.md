# Critic round 17 — Ocean look test, eleventh round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` (written 16:03 UTC) from HEAD `7457735`
("Docs: round 16 column in the report"; `git log --oneline -1` confirms). Its parent `c54dc14` is "Round 17
builder pass (part 1): glassy shallows over sand with an opaque collar only, no scrub below the high-water
mark, wider noisy bay-floor blend, faint moonlit hint on the brig". There is no part 2 this round. All ten
shots were taken, in the required order, in the foreground, `--frames 4` throughout: sixteen full frames
under `shots/critic17/` plus fifty-six native-resolution crops (`*_crop_*.png`, nearest-neighbour upscaled
1–3×, cut with a scratch pngjs script outside the repo). Every frame and crop cited below was opened and
looked at. No round 1–16 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.1–10.2 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 6.5

Nothing in the material set moved this round. The 60 m foreshore is the same three-band strip as round 16:
dry sand, then a flat grey-blue mirror slab with a hard toothed edge on which the palm shadows terminate in
a comb of vertical teeth (`shots/critic17/zoom60_beach_crop_wetband.png`), then a cream strip carrying a
fine horizontal line lattice, then a crumpled chalk sheet with a hard jagged inner edge and green algae
blotches (`shots/critic17/zoom60_beach_crop_shore.png`, `shots/critic17/zoom60_beach_crop_foam.png`). The
"glassy shallows over sand" of the commit message is that slab: it mirrors the sky as one flat value with
no darkening, no gloss falloff and no grain. Dry sand is still a salmon blotch over a lattice moiré with no
grain, drift lines or wrack (`shots/critic17/zoom60_beach_crop_sand.png`); fronds are flat lime blades in
a starburst (`shots/critic17/zoom60_beach_crop_fronds.png`, `shots/critic17/zoom120_brig_crop_palm.png`).
The town at 60 m is unchanged for a sixth round: the quay is a stamped running-bond grid of identical
stones (`shots/critic17/zoom60_town_crop_quay.png`), the roof fleck repeats every four rows
(`shots/critic17/zoom60_town_crop_roof.png`), windows are black voids and shaded walls flat
(`shots/critic17/zoom60_town_crop_window.png`), the cobble pattern ghosts through the grass verge
(`shots/critic17/zoom60_town_crop_ground.png`). Still good: the lit lime-washed walls with drawn cracks,
sills and rain staining (`shots/critic17/zoom60_town_crop_walls.png`), and the brig's deck, grates, rail,
bow and rope coil (`shots/critic17/zoom120_brig_crop_deck.png`, `shots/critic17/zoom120_brig_crop_bow.png`).
Mole boulders remain grey wire cages (`shots/critic17/hero_phone_crop_mole.png`); the dock a dark pile of
blocks (`shots/critic17/hero_phone_crop_dock.png`). Holds at 6.5.
To 8.5: a wet band that is darker, glossier sand with a soft noise-broken upper edge and shadows that
cross it; sand grain with drift lines and a wrack line; irregular quay stones with half stones and a
rounded wet edge; per-house roof fleck noise; warm bounce in shade and a dim interior tint in windows;
solid painted boulders; pinnate leaflets on a drooping rachis; a lighter plank dock with visible piles.

### 2. Light — 7.5

The 17:30 sun still does its job: front-lit orange-cream walls, long violet shadows up-left at 4–5× object
height, correct tower and lighthouse shadows (`shots/critic17/hero_phone.png`,
`shots/critic17/hero_phone_crop_town.png`, `shots/critic17/zoom60_town.png`); the glitter path into the sun
at pitch 14 remains the project's best light (`shots/critic17/sun_check_crop_glitter.png`). The one gain is
small: the brig now carries a faint blue-grey moon hint on deck and hull at 22:00, so it is no longer a
single lantern in a void (`shots/critic17/night_phone_crop_brig.png`). The palm shadow on the mainsail now
has its cause in frame — the same dark bands run across the water from the palms to the ship
(`shots/critic17/zoom120_brig.png`) — but on the cloth it is still a blurred green-grey bar with a dotted
tail, so it reads as a shadow on second look and as a stain on first
(`shots/critic17/zoom120_brig_crop_sail.png`). Unchanged: the moon sheet is 40 m wide and the whole lower
half of the frame is pure black (`shots/critic17/night_phone_crop_basin.png`,
`shots/critic17/night_phone_crop_bottom.png`); no beam from the lamp, just a glow
(`shots/critic17/night_phone_crop_mole.png`); the noon basin is one flat cyan pool with a cobalt hole and a
luminous pale arc at the outer beach (`shots/critic17/contact_clear_12_crop_basin.png`); the hill into the
sun is black with self-lit lime bushes (`shots/critic17/sun_check_crop_bottom.png`); fog casts
full-strength dock and brig shadows (`shots/critic17/fog_phone_crop_dock.png`,
`shots/critic17/fog_phone_crop_brig.png`); shaded walls have no bounce
(`shots/critic17/zoom60_town_crop_window.png`). Holds at 7.5.
To 8.5: a narrow moon path along the moon azimuth with faint moon fill on wave backs across the whole
basin; a beam cone; bushes lit by the same sun as the ground; shadows at 30% in fog; a warm bounce term in
shade; a noon basin with its banding back; a crisper, neutral-grey shadow on the sail.

### 3. Atmosphere — 7.0

Unchanged. The fog is one veil with a smooth top-to-bottom gradient (`shots/critic17/fog_phone.png`,
`shots/critic17/fog_phone_crop_near_water.png`); there are no depth layers; the instanced bushes sit
unfogged as lime dots on the greyed hill (`shots/critic17/fog_phone_crop_hill.png`); the brig hull is a
flat slate silhouette with all deck detail gone while its sails stay full cream
(`shots/critic17/fog_phone_crop_brig.png`); the mole boulders read as wire cages through the fog
(`shots/critic17/fog_phone_crop_mole.png`); night-fog windows are white, not amber, with only the lantern
pools warm (`shots/critic17/contact_fog_22_crop_town.png`); fog 12:00 and 17:30 are near-identical
(`shots/critic17/contact_fog_12_crop_basin.png`, `shots/critic17/contact_fog_175_crop_basin.png`,
`shots/critic17/contact.png`). The sky into the sun is a flat tan-to-grey gradient with a sun disc and halo,
no cobalt zenith, no rose belt, no cloud (`shots/critic17/sun_check_crop_sky.png`). Aerial perspective on
the far coast at 300 m is present but slight (`shots/critic17/zoom300_crop_top.png`). Holds at 7.0.
To 8.5: three depth layers in fog with fogged instances; fog on the hull, not only the sails; amber
emissives in night fog; different fog at noon and 17:30; a painted sky with a blue zenith, a rose belt and
clouds.

### 4. Water — 7.0 (down from 7.5)

The open basin still carries its long diagonal brush strokes and reads as a painted surface from quay to
mole (`shots/critic17/hero_phone_crop_water.png`, `shots/critic17/zoom60_beach_crop_water.png`,
`shots/critic17/landscape_crop_basin.png`), and the quay wall and dock meet it cleanly
(`shots/critic17/hero_phone_crop_shore_left.png`, `shots/critic17/hero_phone_crop_dock.png`). What dropped
the line: the shore. At 120 m the "opaque collar only" is a solid chalk-white band 6–10 m wide along the
whole beach with a scalloped outer edge, green blotches at its foot, and a lavender-grey glassy strip
between it and the dry sand (`shots/critic17/zoom120_brig_crop_shore_left.png`,
`shots/critic17/zoom120_brig.png`) — heavier than round 16's translucent collar, and closer to a painted
white stripe than to lace. The grey-brown smudge still bleeds over the upper beach
(`shots/critic17/zoom120_brig_crop_wash.png`). At 60 m nothing changed: flat mirror slab with a toothed
edge, then a chalk sheet with a hard jagged inner edge
(`shots/critic17/zoom60_beach_crop_wetband.png`, `shots/critic17/zoom60_beach_crop_shore.png`). The basin
itself is more uniformly saturated cyan than R1's blue-violet deep water; the milky pale band with no
visible cause still lies across the hero's bottom third with a pale ring at the bay mouth
(`shots/critic17/hero_phone_crop_bottom.png`, `shots/critic17/hero_phone.png`). The noon basin is a flat
cyan pool with a cobalt hole and a luminous arc at the beach, and the sparkle field over the lower right is
still a dense scatter of hard white blobs (`shots/critic17/contact_clear_12_crop_basin.png`,
`shots/critic17/contact_clear_12_crop_sparkle.png`). The white sliver at the right end of the quay is
there in clear and fog (`shots/critic17/hero_phone_crop_quay_right.png`,
`shots/critic17/fog_phone_crop_quay_right.png`). No bow foam, no mole foam, no hull or sail reflection
(`shots/critic17/zoom120_brig_crop_bow.png`, `shots/critic17/hero_phone_crop_mole.png`). Deep water at 300
m is a cobalt plane with faint streaks and no swell (`shots/critic17/zoom300_crop_deep.png`); the night
path is a 40 m sheet (`shots/critic17/night_phone_crop_basin.png`).
To 8.5: a 1–2 m cream lace broken into tongues, not a band; a wet dark line, not a mirror slab; remove the
milk band and the quay sliver; bow and mole foam; broken reflections; cap the noon sparkle and give the
noon basin its banding back; swell at 300 m; a narrow moon path; R1's blue-violet in the deep basin.

### 5. Scale and motion — 7.5

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as one
place (`shots/critic17/hero_phone.png`, `shots/critic17/landscape.png`, `shots/critic17/zoom300.png`). The
jib is unchanged: a detached triangle hung off the bowsprit end with the forestay running past it
(`shots/critic17/zoom120_brig_crop_jib.png`, `shots/critic17/hero_phone_crop_brig.png`,
`shots/critic17/fog_phone_crop_brig.png`). The palm shadow on the mainsail now has matching shadow bands on
the water between palms and ship (`shots/critic17/zoom120_brig.png`), which is the first time it has had a
visible cause; the mark itself is still a soft green-grey smear (`shots/critic17/zoom120_brig_crop_sail.png`).
The dock is a dark pile of blocks (`shots/critic17/hero_phone_crop_dock.png`); white specks still sit along
the hill right of the tower (`shots/critic17/hero_phone_crop_hill.png`); the pennants and gulls are posed
convincingly but motion is unverifiable from stills. Holds at 7.5.
To 8.5: bend the jib's luff onto the forestay with a hank line; a crisper shadow on the cloth; a lighter
plank dock; remove the specks; a motion capture.

### 6. Composition and squint test — 7.5

The hero's basin is one continuous painted surface and the eye path — sunlit sails, brig shadow to the
lighthouse, up the turquoise to the warm town — is intact; `shots/critic17/landscape.png` and
`shots/critic17/zoom300.png` read as one painted island at thumbnail, and
`shots/critic17/landscape_crop_left.png` shows the island's west cape reading as sculpted terrain. Against
it: the milky band across the bottom third still flattens the foreground
(`shots/critic17/hero_phone_crop_bottom.png`); the beach at 60 m still has nothing to look at but a blotch,
a slab and a chalk sheet (`shots/critic17/zoom60_beach.png`); the night is a wall of windows over a black
lower half (`shots/critic17/night_phone.png`, `shots/critic17/night_phone_crop_town.png`); the noon frame
is a cyan pool with a sparkle field (`shots/critic17/contact_clear_12_crop_basin.png`); the fog has no
depth (`shots/critic17/fog_phone.png`). Holds at 7.5.
To 8.5: kill the milk band; a beach with a wrack line, a boat and rocks; the moon on the near water; fog
with three planes; a noon basin with banding.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,416,951–1,441,097 at high quality (96.1% of the 1.5 M limit; 1,038,649 at
medium), textures 41.3 MB (limit 256). Device fps not measured; headless p50 6.1–10.2 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 6.5 (automatic fail)

The 60 m foreshore is still a hit: a flat grey-blue mirror slab with a toothed, aliased edge against the
dry sand, palm shadows ending on it in comb teeth, and a hard jagged inner edge on the chalk sheet — a hard
water-to-beach line (`shots/critic17/zoom60_beach_crop_wetband.png`,
`shots/critic17/zoom60_beach_crop_shore.png`). The 120 m collar is now an opaque white band along the
whole beach (`shots/critic17/zoom120_brig_crop_shore_left.png`); it is crumpled rather than flat, so it
is a marginal hit on the white-stripe item, not a clean one. Marginal hits carried over: visible tiling on
the quay grid and roof fleck repeat, paving ghost under the grass
(`shots/critic17/zoom60_town_crop_quay.png`, `shots/critic17/zoom60_town_crop_roof.png`,
`shots/critic17/zoom60_town_crop_ground.png`); sand lattice moiré (`shots/critic17/zoom60_beach_crop_sand.png`);
fog as one colour with unfogged bushes (`shots/critic17/fog_phone.png`,
`shots/critic17/fog_phone_crop_hill.png`); the noon sparkle field of hard white blobs
(`shots/critic17/contact_clear_12_crop_sparkle.png`); the black night foreground
(`shots/critic17/night_phone_crop_bottom.png`); a near-uniform cobalt plane at 300 m
(`shots/critic17/zoom300_crop_deep.png`). Holds at 6.5; still a fail.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls flat but deliberate (`shots/critic17/zoom60_town_crop_window.png`); the grey foreshore slab is judged under the hard-line item |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | quay grid, roof repeat every four rows (`shots/critic17/zoom60_town_crop_quay.png`, `shots/critic17/zoom60_town_crop_roof.png`); sand lattice moiré (`shots/critic17/zoom60_beach_crop_sand.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic17/hero_phone.png`); comb-tooth termini on the slab edge are an edge artefact, not acne (`shots/critic17/zoom60_beach_crop_wetband.png`) |
| Grey nights | clear | night is near black with warm windows (`shots/critic17/night_phone.png`); the pure-black lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | **hit (marginal)** | opaque white collar 6–10 m wide at 120 m (`shots/critic17/zoom120_brig_crop_shore_left.png`); deep water at 300 m a near-flat cobalt plane (`shots/critic17/zoom300_crop_deep.png`); milk band (`shots/critic17/hero_phone_crop_bottom.png`); noon pool (`shots/critic17/contact_clear_12_crop_basin.png`) |
| Hard water-to-beach line | **hit (60 m)** | flat grey-blue slab with a toothed aliased edge against the dry sand; chalk sheet with a hard jagged inner edge (`shots/critic17/zoom60_beach_crop_wetband.png`, `shots/critic17/zoom60_beach_crop_shore.png`); at 300 m the line is soft (`shots/critic17/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic17/zoom60_beach.png`, `shots/critic17/zoom60_beach_crop_topleft.png`); motion unverifiable |
| Fog as one colour | marginal | one veil with a gradient, bushes unfogged (`shots/critic17/fog_phone.png`, `shots/critic17/fog_phone_crop_hill.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic17/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **The 60 m foreshore is unchanged: a flat grey-blue mirror slab with a toothed, aliased edge against the dry sand; palm shadows end on it in comb teeth; below it a pale lattice strip and a chalk sheet with a hard jagged inner edge.** `shots/critic17/zoom60_beach_crop_wetband.png`, `shots/critic17/zoom60_beach_crop_shore.png`, `shots/critic17/zoom60_beach.png`. Fix: no sky-mirror term on sand — the wet band is darker, glossier sand with a soft noise-broken upper edge; shadows must cross it, not stop on it.
2. **The 120 m shore is now an opaque chalk-white band 6–10 m wide along the whole beach, with a scalloped outer edge, green blotches at its foot, a lavender glassy strip inside it and a grey-brown smudge over the dry sand.** `shots/critic17/zoom120_brig_crop_shore_left.png`, `shots/critic17/zoom120_brig_crop_wash.png`, `shots/critic17/zoom120_brig.png`. Fix: 1–2 m cream lace in tongues with a soft inner fade and a wet dark line behind it; kill the green channel and the beach-side smudge.
3. **Fog is one veil: no depth layers, unfogged bushes, full-strength dock and brig shadows, brig hull a slate silhouette under cream sails, night-fog windows white, fog 12:00 and 17:30 near-identical.** `shots/critic17/fog_phone.png`, `shots/critic17/fog_phone_crop_hill.png`, `shots/critic17/fog_phone_crop_dock.png`, `shots/critic17/fog_phone_crop_brig.png`, `shots/critic17/contact_fog_22_crop_town.png`, `shots/critic17/contact.png`. Fix: three banded depth planes (R4); fog the instanced bushes and the hull; shadows at 30%; amber emissives.
4. **Night: moon sheet 40 m wide over the right half of the basin, left half and the whole lower half of the frame pure black, no beam; the brig is a faint blue ghost.** `shots/critic17/night_phone_crop_basin.png`, `shots/critic17/night_phone_crop_bottom.png`, `shots/critic17/night_phone_crop_brig.png`, `shots/critic17/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon azimuth, a faint moon fill on wave backs and rigging everywhere, a beam cone.
5. **A milky pale band with no visible cause across the hero's bottom third, with a pale ring at the bay mouth.** `shots/critic17/hero_phone_crop_bottom.png`, `shots/critic17/hero_phone.png`. Fix: remove the near-camera mist/desaturation term at 17:30 clear, or tie it to a glitter path with a sun-side gradient.
6. **Noon: the basin is a flat cyan pool with a cobalt hole and a luminous pale arc at the beach; the sparkle field over the lower right is a dense scatter of hard white blobs.** `shots/critic17/contact_clear_12_crop_basin.png`, `shots/critic17/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure; cap clump coverage and soften the sparkle; tone the glassy-shallows arc down.
7. **Town unchanged at 60 m: quay a stamped running-bond grid, roof fleck repeat every four rows, shaded walls flat, void black windows, paving ghost under the grass.** `shots/critic17/zoom60_town_crop_quay.png`, `shots/critic17/zoom60_town_crop_roof.png`, `shots/critic17/zoom60_town_crop_window.png`, `shots/critic17/zoom60_town_crop_ground.png`. Fix: irregular stones with half stones and a rounded wet edge; per-house fleck noise; warm bounce in shade; dim interior tint; mask the paving under grass.
8. **Dry sand a salmon blotch over a lattice moiré instead of grain.** `shots/critic17/zoom60_beach_crop_sand.png`, `shots/critic17/zoom120_brig_crop_palm.png`. Fix: low-contrast drift lines and a wrack line; a non-axis-aligned grain noise.
9. **Jib a detached triangle with the forestay running past it.** `shots/critic17/zoom120_brig_crop_jib.png`, `shots/critic17/hero_phone_crop_brig.png`, `shots/critic17/fog_phone_crop_brig.png`. Fix: bend the luff to the forestay with a hank line.
10. **Fronds flat lime blades in a starburst.** `shots/critic17/zoom60_beach_crop_fronds.png`, `shots/critic17/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
11. **Sky into the sun a flat tan-to-grey gradient, no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic17/sun_check_crop_sky.png`, `shots/critic17/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
12. **Mole boulders read as grey wire cages, in clear and fog; no foam at the mole.** `shots/critic17/hero_phone_crop_mole.png`, `shots/critic17/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
13. **Bushes lime lollipops with hard black blobs; a blurred dark smear across the hill; white specks right of the tower.** `shots/critic17/hero_phone_crop_hill.png`, `shots/critic17/zoom300_crop_top.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the specks.
14. **Dock a dark pile of blocks; white sliver at the right end of the quay in clear and fog.** `shots/critic17/hero_phone_crop_dock.png`, `shots/critic17/hero_phone_crop_quay_right.png`, `shots/critic17/fog_phone_crop_quay_right.png`. Fix: lighter plank albedo with plank lines and piles; kill the sliver where the wall meets the beach.
15. **Deep water at 300 m a near-flat cobalt plane; the sail shadow still a soft green smear; no bow foam or hull reflection.** `shots/critic17/zoom300_crop_deep.png`, `shots/critic17/zoom120_brig_crop_sail.png`, `shots/critic17/zoom120_brig_crop_bow.png`. Fix: swell banding at 300 m; a crisper neutral shadow on cloth; a bow collar and broken reflections.

## Round 16 issues — status

| # | Round 16 issue | Status | Evidence |
|---|---|---|---|
| 1 | 60 m foreshore: flat grey-lavender slab, toothed edge, comb-tooth shadow termini, chalk sheet with a hard inner edge | **unchanged** | `shots/critic17/zoom60_beach_crop_wetband.png`, `shots/critic17/zoom60_beach_crop_shore.png`, `shots/critic17/zoom60_beach.png` |
| 2 | "Thin shore sheet" a 6–10 m collar at 120 m with a saw-toothed edge, algae blotches and a smudge on the sand | **unchanged / heavier** — the collar is now an opaque white band; smudge and blotches remain | `shots/critic17/zoom120_brig_crop_shore_left.png`, `shots/critic17/zoom120_brig_crop_wash.png`, `shots/critic17/zoom120_brig.png` |
| 3 | Fog one veil: no depth layers, unfogged bushes, full shadows, slate hull, white night-fog windows, 12:00 = 17:30 | **unchanged** | `shots/critic17/fog_phone.png`, `shots/critic17/fog_phone_crop_hill.png`, `shots/critic17/fog_phone_crop_dock.png`, `shots/critic17/fog_phone_crop_brig.png`, `shots/critic17/contact_fog_22_crop_town.png`, `shots/critic17/contact_fog_12_crop_basin.png`, `shots/critic17/contact_fog_175_crop_basin.png` |
| 4 | Night: 40 m moon sheet, lower half black, brig invisible, no beam | **improved (marginal)** — brig now a faint blue-grey ghost with deck detail; sheet, black lower half and missing beam unchanged | `shots/critic17/night_phone_crop_brig.png`, `shots/critic17/night_phone_crop_basin.png`, `shots/critic17/night_phone_crop_bottom.png`, `shots/critic17/night_phone_crop_mole.png` |
| 5 | Milky pale band across the hero's bottom third | **unchanged** | `shots/critic17/hero_phone_crop_bottom.png`, `shots/critic17/hero_phone.png` |
| 6 | Noon basin a flat cyan pool with a glow arc; sparkle field of hard white blobs | **unchanged** | `shots/critic17/contact_clear_12_crop_basin.png`, `shots/critic17/contact_clear_12_crop_sparkle.png` |
| 7 | Town unchanged at 60 m: quay grid, roof repeat, flat shade, void windows, paving ghost | **unchanged** | `shots/critic17/zoom60_town_crop_quay.png`, `shots/critic17/zoom60_town_crop_roof.png`, `shots/critic17/zoom60_town_crop_window.png`, `shots/critic17/zoom60_town_crop_ground.png` |
| 8 | Dry sand a salmon blotch with a lattice moiré | **unchanged** | `shots/critic17/zoom60_beach_crop_sand.png`, `shots/critic17/zoom120_brig_crop_palm.png` |
| 9 | Jib a detached triangle | **unchanged** | `shots/critic17/zoom120_brig_crop_jib.png`, `shots/critic17/hero_phone_crop_brig.png` |
| 10 | Fronds flat blades in a starburst | **unchanged** | `shots/critic17/zoom60_beach_crop_fronds.png`, `shots/critic17/zoom120_brig_crop_palm.png` |
| 11 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic17/sun_check_crop_sky.png`, `shots/critic17/sun_check_crop_bottom.png` |
| 12 | Mole boulders wire cages; no mole foam | **unchanged** | `shots/critic17/hero_phone_crop_mole.png`, `shots/critic17/fog_phone_crop_mole.png` |
| 13 | Bush lollipops; dark hill smear; roofline specks | **unchanged** | `shots/critic17/hero_phone_crop_hill.png`, `shots/critic17/zoom300_crop_top.png` |
| 14 | Dock a pile of dark blocks; white sliver at the right end of the quay | **unchanged** | `shots/critic17/hero_phone_crop_dock.png`, `shots/critic17/hero_phone_crop_quay_right.png`, `shots/critic17/fog_phone_crop_quay_right.png` |
| 15 | Deep water flat at 300 m; sail palm-shadow reads as a stain; no bow foam or reflection | **improved (sail only)** — the palm shadow bands now run across the water to the ship so the mark has a cause; the mark itself is still a soft green smear; 300 m plane and bow unchanged | `shots/critic17/zoom120_brig.png`, `shots/critic17/zoom120_brig_crop_sail.png`, `shots/critic17/zoom300_crop_deep.png`, `shots/critic17/zoom120_brig_crop_bow.png` |

## Budget lines (from `shots/critic17/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.8 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 8.4 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,038,649 | 41.3 | 7.5–10.2 | per cell |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,416,951 | 41.3 | 6.1 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,440,687 | 41.3 | 8.6 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,423,163 | 41.3 | 6.5 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.0 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,441,097 | 41.3 | 6.6 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 7.7 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,441,097 | 41.3 | 6.5 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.1% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** a foreshore with no slab and no comb teeth; sand grain and a wrack line; irregular quay stones; a non-repeating roof; leaflets; solid boulders; clustered bushes; bounce in shade; a plank dock.
- **Light (7.5):** a narrow moon path with moon fill and a beam; fog shadows stopped down; bushes lit like the ground; a banded noon basin.
- **Atmosphere (7.0):** three fog depth planes with fogged instances and hull; amber emissives in night fog; different noon and 17:30 fog; a painted sky.
- **Water (7.0):** a 1–2 m lace, not an opaque band; a wet dark line, not a mirror slab; the milk band and the quay sliver gone; bow and mole foam; broken reflections; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; a crisper sail shadow; no specks; a motion capture.
- **Composition (7.5):** milk band gone; a beach with something in it; moon on the near water; fog with depth.
- **Programmer art (6.5):** clear the hard line and slab at 60 m and the opaque band at 120 m; clear the marginals (quay/roof tiling, sand moiré, single-colour fog with unfogged bushes, noon sparkle blobs, black night foreground, flat 300 m plane).

## Verdict

**FAIL.** Lowest lines: materials and programmer-art checklist at 6.5, then atmosphere and water at 7.0,
light, scale and composition at 7.5; only budget and errors (8.5) clears the bar. This was the smallest pass
yet. It moved two things, both by a hair: the brig at 22:00 is now a faint blue-grey ghost instead of a
single lantern in a void, and the palm shadow on the mainsail now has its cause visible as shadow bands on
the water. Everything it aimed at on the shore went the other way or nowhere: the "glassy shallows" at 60 m
are the same flat sky-mirror slab with the same toothed edge and the same comb of shadow teeth, and the
"opaque collar" at 120 m is a heavier chalk-white band than last round's translucent one, which is why the
water line drops to 7.0. The milk band, the quay sliver, the noon pool and sparkle, the one-veil fog, the
black night foreground, and the whole round 14–16 list of town, sand, jib, fronds, boulders, sky, bushes and
dock are untouched for a sixth round. Scores: 6.5/7.5/7.0/7.0/7.5/7.5/8.5/6.5. Against Sea of Conquest the
120 m and 300 m basin still reads as a painted harbour and the landscape frame reads as one island at
thumbnail; the 60 m shore, the 120 m shoreline, the night, the fog and the 60 m town do not, and the
hard-shoreline hit fails the checklist on its own.
