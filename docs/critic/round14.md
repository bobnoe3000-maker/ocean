# Critic round 14 — Ocean look test, eighth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` (written 12:01 UTC) from HEAD `24a76c4`
(11:42 UTC; `git log --oneline -1` confirms). This HEAD carries "Round 14 builder pass (part 1)" (graded haze
banded into three soft depth layers, source-only in round 13) and "(part 2)" (076ddff: smooth bay-floor
slope change, broad-noise wet band, sand macro drifts, self-lit foam collar, near-black night body with a
moon glitter path, stronger noon damping, softer fog sun, dimmer night-fog windows). All ten shots were
taken this round, in the required order, in the foreground, `--frames 4` throughout: sixteen full frames
under `shots/critic14/` plus fifty-four native-resolution crops (`*_crop_*.png`, nearest-neighbour
upscaled 1–3×, cut with a scratch pngjs script outside the repo). Every frame and crop cited below was
opened and looked at. No round 1–13 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.3–9.8 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 6.5

What moved: the hillside behind the town now carries wind-ripple drift lines instead of a bare beige field
(`shots/critic14/hero_phone_crop_hill.png`, `shots/critic14/zoom300_crop_top.png`), and the interior
plateau reads as dune and scrub rather than grey tarmac patches (`shots/critic14/zoom300_crop_top.png`);
the palm trunks are ringed rather than wicker (`shots/critic14/zoom60_beach_crop_sand.png`); the brig's deck,
grates, rail and bow remain the best material set in the scene (`shots/critic14/zoom120_brig_crop_deck.png`);
the walls, drawn cracks, recessed shutters, sills and chimneys hold at 60 m
(`shots/critic14/zoom60_town_crop_walls.png`, `shots/critic14/zoom60_town_crop_smoke.png`). What fails the
stylised bar, and why this line drops half a point: the beach at 60 m got worse, not better. The dry sand is
now a tan field with one large salmon-pink blotch across it that reads as a stain, not a drift
(`shots/critic14/zoom60_beach_crop_wetband.png`, `shots/critic14/zoom60_beach.png`); the wet band is
still a Voronoi honeycomb of pink-brown cells with pale seams, and it is now visible at 120 m as well, as a
leopard-print strip the whole length of the beach (`shots/critic14/zoom60_beach_crop_wetband.png`,
`shots/critic14/zoom60_beach_crop_shore.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`); the foam
collar beside it is a chalky cream sheet with a crumpled-paper texture, 8–10 m wide, with green and pink
mottles along its inner edge (`shots/critic14/zoom60_beach_crop_foam.png`,
`shots/critic14/zoom120_brig_crop_shore_left.png`). In the town nothing moved: the quay is the same
running-bond grid of stamped slabs (`shots/critic14/zoom60_town_crop_quay.png`,
`shots/critic14/zoom60_town_crop_lamp.png`); the roof tile module still repeats its pale fleck pattern every
four rows (`shots/critic14/zoom60_town_crop_roof.png`, `shots/critic14/zoom60_town_crop_window.png`); the
shaded side walls are a flat khaki-grey with no bounce and some windows are black voids
(`shots/critic14/zoom60_town_crop_window.png`, `shots/critic14/zoom60_town_crop_smoke.png`); the grass
strip still carries the paving ghost at its outer edge (`shots/critic14/zoom60_town_crop_ground.png`); the
mole's boulders are grey wire cages (`shots/critic14/hero_phone_crop_mole.png`,
`shots/critic14/fog_phone_crop_mole.png`); the fronds are flat lime blades in a starburst
(`shots/critic14/zoom60_beach_crop_sand.png`, `shots/critic14/hero_phone_crop_palms.png`); the bushes are
lime lobes with hard shadow blobs on a hill that carries a large blurred dark smear
(`shots/critic14/hero_phone_crop_hill.png`). To reach 8.5: sand with painted grain, ripple lines and a
wrack line, no blotch; a wet band that is darker, glossier sand with no cell pattern at any zoom; a narrow
cream lace, not a sheet; irregular quay stones with a rounded wet edge; a non-repeating roof; pinnate
leaflets; solid painted boulders; clustered bushes with a soft contact shadow; warm bounce in shade.

### 2. Light — 7.5

What moved: the night water body is now near black with the town's lantern pools and warm windows the only
light, which is the right R2 foundation (`shots/critic14/night_phone.png`,
`shots/critic14/night_phone_crop_town.png`); the lighthouse's night halo stays tight to the lamp room
(`shots/critic14/night_phone_crop_mole.png`); the 17:30 shadows — lighthouse band, mast shadows, dock
shadow, palm shadows on the roofs — are soft, long and all in one direction
(`shots/critic14/hero_phone.png`, `shots/critic14/hero_phone_crop_dock.png`,
`shots/critic14/hero_phone_crop_palms.png`, `shots/critic14/zoom120_brig_crop_water.png`); the sun-side
walls are orange-cream against violet shade in the hero and the 17:30 glitter path into the sun shows wave
structure (`shots/critic14/hero_phone_crop_town.png`, `shots/critic14/sun_check_crop_glitter.png`). What
fails: the moon path is still a broad marbled grey sheet with black holes across the right half of the
basin rather than a narrow glitter path (`shots/critic14/night_phone_crop_basin.png`); the whole lower
half of the night frame is pure black — the crop `shots/critic14/night_phone_crop_bottom.png` is 100%
black pixels — and the brig is invisible but for one stern lantern, with no moon on the hull or the near
water (`shots/critic14/night_phone_crop_brig.png`); there is still no beam
(`shots/critic14/night_phone_crop_mole.png`); in fog the dock's shadow is still a hard dark bar and the
brig's shadow a dark ellipse at clear-weather strength (`shots/critic14/fog_phone_crop_dock.png`,
`shots/critic14/fog_phone.png`, `shots/critic14/contact_fog_175_crop_brig.png`); shaded walls remain a
flat cool grey without warm bounce (`shots/critic14/zoom60_town_crop_window.png`); into the sun the hill
is near black with self-lit lime bushes (`shots/critic14/sun_check_crop_bottom.png`); bushes still read
faintly lime under the moon (`shots/critic14/night_phone_crop_hill.png`). To reach 8.5: a narrow moon
glitter path with a faint moon fill on hull and near water; a beam; sun at 35% in fog with soft low-contrast
shadows; warm bounce in shade; bushes lit by the same sun as the ground.

### 3. Atmosphere — 6.5

What moved: there is now a visible distance gradient in the fog frame — the town and hill are greyed
hardest, the mid-basin less, the near water least (`shots/critic14/fog_phone.png`,
`shots/critic14/fog_phone_crop_town.png`, `shots/critic14/contact_fog_175_crop_near_water.png`); the
night-fog windows are dimmer than last round (`shots/critic14/contact_fog_22_crop_town.png`); the
clear-weather aerial haze holds at 300 m (`shots/critic14/zoom300.png`, `shots/critic14/landscape.png`).
What fails: it is a haze gradient, not fog. The near water at the bottom of the phone frame is a saturated
clear-weather cobalt with a crisp diagonal brush — R4 asks for grey-green near water with only the near
chop carrying detail — so the fog reads as a grey wash laid over the top third of the picture
(`shots/critic14/fog_phone_crop_near_water.png`, `shots/critic14/contact_fog_175_crop_near_water.png`);
there are no distinct depth layers, the bushes on the hill still punch through unfogged as lime dots
(`shots/critic14/fog_phone_crop_hill.png`, `shots/critic14/contact_fog_12_crop_town.png`); the brig's hull
in fog is a flat slate silhouette with a full shadow (`shots/critic14/fog_phone_crop_brig.png`); the fog 12:00
and fog 17:30 cells are near-identical (`shots/critic14/contact.png`); the night-fog windows are pale
white-blue, not amber (`shots/critic14/contact_fog_22_crop_town.png`); the sky into the sun is still a flat
tan-to-grey gradient with a small white disc, no cobalt zenith, no rose belt, no clouds
(`shots/critic14/sun_check_crop_sky.png`). The score holds at 6.5: the gradient is real but the fog still
fails every R4 criterion but one. To reach 8.5: fog density that reaches the near water (grey-green,
low-contrast chop), three bluer flatter depth layers, fogged instances, shadows at 35%, emissives kept
warm, a painted sky with clouds.

### 4. Water — 7.0

What moved: **the khaki shallow ring across the hero's bottom third is gone.** The basin now grades smoothly
from turquoise at the beach through cerulean to cobalt at the mouth with no inner edge
(`shots/critic14/hero_phone.png`, `shots/critic14/hero_phone_crop_bottom.png`,
`shots/critic14/hero_phone_crop_water.png`); at 300 m the chalky lavender ring around the harbour mouth
is replaced by a soft turquoise shoal rim (`shots/critic14/zoom300_crop_island.png`,
`shots/critic14/landscape.png`); the painted diagonal chop is consistent at every zoom
(`shots/critic14/zoom120_brig_crop_water.png`, `shots/critic14/zoom60_beach_crop_water.png`,
`shots/critic14/zoom300_crop_bottom.png`); the night body is near black (`shots/critic14/night_phone.png`).
What fails, and why the ring gain is cancelled: the self-lit foam collar is now a bright white ring around
the entire basin. Along the quay wall it is a lilac-white stripe of even width with a hard water-side edge
and no break where the wall meets the water (`shots/critic14/hero_phone_crop_quay_right.png`,
`shots/critic14/hero_phone_crop_shore_left.png`); along the beach it is a chalky cream sheet 8–10 m wide
(`shots/critic14/zoom60_beach_crop_foam.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`); at the
western spit it is a white foam blob that reads as a smudge on the picture in the hero, the fog frame, the 300 m
tile and the landscape (`shots/critic14/hero_phone_crop_bottom.png`,
`shots/critic14/fog_phone_crop_near_water.png`, `shots/critic14/zoom300_crop_island.png`); the noon glitter
is still a white-out blanket of clumps with the pure-white blob on the left beach
(`shots/critic14/contact_clear_12_crop_basin.png`); the moon path is a marbled grey sheet and the night
foreground is pure black (`shots/critic14/night_phone_crop_basin.png`,
`shots/critic14/night_phone_crop_bottom.png`); the wet band is a honeycomb at 60 m and 120 m
(`shots/critic14/zoom60_beach_crop_wetband.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`).
To reach 8.5: a narrow cream lace with a soft inner fade and dark wet sand behind it; a broken collar
against the quay wall, not a stripe; no foam blob on the spit; capped noon glitter; a narrow moon path.

### 5. Scale and motion — 7.5

What moved: nothing of substance. The brig's 1.7× scale still agrees with the dock, lighthouse and town
(`shots/critic14/hero_phone_crop_brig.png`, `shots/critic14/zoom300_crop_island.png`); gulls are present
in every clear frame, the pennants stream to leeward and the topsails hang loose
(`shots/critic14/zoom120_brig.png`); chimney smoke is a visible pale plume
(`shots/critic14/zoom60_town_crop_smoke.png`); the dinghies are planked (`shots/critic14/hero_phone_crop_dock.png`).
What fails: the jib is still a detached triangle floating off the bowsprit in every frame, with the forestay
running past it (`shots/critic14/zoom120_brig_crop_jib.png`, `shots/critic14/hero_phone_crop_brig.png`,
`shots/critic14/fog_phone_crop_brig.png`); the timber dock at 120 m reads as a dark brown pile of blocks
rather than a plank deck on piles (`shots/critic14/hero_phone_crop_dock.png`,
`shots/critic14/fog_phone_crop_dock.png`); the palm shadow on the mainsail — judged on how it reads — is a
soft grey-green smudge with no frond shape, and because the palms that cast it stand 40 m away across
water on which their shadow does not show, it reads as a stain on the cloth rather than a shadow
(`shots/critic14/zoom120_brig_crop_sail.png`, `shots/critic14/zoom120_brig.png`); the string of white specks
along the roofline left of the tower is still there (`shots/critic14/hero_phone_crop_hill.png`); motion is
unverifiable from stills. To reach 8.5: a jib bent to the forestay; a lighter dock with visible piles and
plank lines; fade far-caster shadows on cloth or show the palm's shadow on the water so the sail mark has a
cause; remove the specks; a motion capture.

### 6. Composition and squint test — 7.5

The hero is a cleaner picture than in round 13: with the ring gone the eye enters on the brig's sunlit sails,
follows the lighthouse's soft shadow band up to the warm walls and rests on the town
(`shots/critic14/hero_phone.png`); the 300 m tile and the landscape frame read as an island of dune and
scrub with the town as the warm accent and a real distance shift on the far water
(`shots/critic14/zoom300.png`, `shots/critic14/landscape.png`); the night is an R2 read at thumbnail
(`shots/critic14/night_phone.png`, `shots/critic14/night_phone_crop_town.png`). What fails: the bright
white foam ring is now the highest-contrast shape in the hero and outlines the basin like the rim of a
swimming pool (`shots/critic14/hero_phone.png`, `shots/critic14/hero_phone_crop_quay_right.png`); the 60 m
beach frame is a salmon blotch, a honeycomb and a chalk sheet with nothing for the eye to rest on
(`shots/critic14/zoom60_beach.png`); the fog cell is a grey wash over a clear-blue foreground
(`shots/critic14/fog_phone.png`); the night frame's lower half is empty black
(`shots/critic14/night_phone.png`); the sun_check frame is a golden path over a black foreground
(`shots/critic14/sun_check.png`). To reach 8.5: tone the collar down to a lace; give the beach grain and a
wrack line; fog with depth; moon on the near water.

### 7. Budget and errors — 8.5

Zero console errors in all sixteen frames; one warning per frame (`THREE.WebGLRenderer:
KHR_parallel_shader_compile extension not supported` — environment). Draw calls 109–156 (limit 300);
triangles 1,406,647–1,430,793 at high (limit 1.5 M — 95.4% of the limit, unchanged), 1,028,345 at medium;
texture memory 41.3 MB (limit 256). Device fps not measured. Evidence: `shots/critic14/*.json`, summarised
in the budget section below.

### 8. Programmer-art checklist — 6.0 (automatic fail)

Three marginal hits of round 13 remain and one of them has hardened: the self-lit foam collar is now an
even bright white stripe around the whole basin including the quay wall, which is the checklist's
"white-stripe foam" as written. Visible tiling (quay grid, roof repeat, honeycomb wet band now at two
zooms) and fog as one colour with unfogged instances stay marginal hits; the noon white-out and the black
night foreground stay marginal. Item-by-item below.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | plastered walls with cracks, sills and shutters — `shots/critic14/zoom60_town_crop_walls.png`; deck and grates — `shots/critic14/zoom120_brig_crop_deck.png`; the shaded side walls (`shots/critic14/zoom60_town_crop_window.png`) are painted flat colour with shading and are scored under materials, not here |
| Default Three.js materials | clear | nothing reads as MeshStandard grey — `shots/critic14/zoom60_town.png`, `shots/critic14/hero_phone_crop_mole.png` |
| Visible tiling or stretched UVs | **hit (marginal)** | quay a running-bond grid of stamped slabs — `shots/critic14/zoom60_town_crop_quay.png`, `shots/critic14/zoom60_town_crop_lamp.png`; roof fleck pattern repeats every four rows — `shots/critic14/zoom60_town_crop_roof.png`; honeycomb cell pattern on the wet band at 60 m and 120 m — `shots/critic14/zoom60_beach_crop_wetband.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`; paving ghost at the grass edge — `shots/critic14/zoom60_town_crop_ground.png` |
| Shadow acne or missing shadows | clear | shadows present everywhere in one direction with a penumbra on the long ones — `shots/critic14/hero_phone_crop_dock.png`, `shots/critic14/zoom120_brig_crop_water.png` |
| Grey nights | clear | basin near black, lanterns warm, alleys dark — `shots/critic14/night_phone_crop_town.png`, `shots/critic14/night_phone.png` |
| Uniform blue water plane or white-stripe foam | **hit** | self-lit foam collar an even bright white stripe around the basin and along the quay wall — `shots/critic14/hero_phone_crop_quay_right.png`, `shots/critic14/hero_phone_crop_shore_left.png`, `shots/critic14/hero_phone.png`; noon basin a white-out of glitter clumps — `shots/critic14/contact_clear_12_crop_basin.png`; night foreground a flat black plane — `shots/critic14/night_phone_crop_bottom.png` |
| Hard water-to-beach line | clear | smooth curved shore at 60 m, 120 m and the quay end; the collar's outer edge grades into the turquoise — `shots/critic14/zoom60_beach_crop_shore.png`, `shots/critic14/zoom120_brig_crop_shoreline_top.png`, `shots/critic14/hero_phone_crop_quay_right.png` |
| Vegetation that does not move / identical rotation | clear (unverifiable) | palm crowns differ in rotation and lean — `shots/critic14/zoom60_beach_crop_sand.png`; motion not verifiable from stills |
| Fog as one colour | **hit (marginal)** | fog a grey veil with a distance gradient but no depth layers, near water clear-weather cobalt, bushes unfogged — `shots/critic14/fog_phone_crop_near_water.png`, `shots/critic14/fog_phone_crop_hill.png`, `shots/critic14/contact_fog_12_crop_town.png` |
| Sky without a sun | clear | sun disc present — `shots/critic14/sun_check_crop_sky.png` |
| Placeholder primitives or text labels | clear | bushes are lobed volumes — `shots/critic14/hero_phone_crop_hill.png`; mole boulders are irregular clumps though they read as wire cages — `shots/critic14/hero_phone_crop_mole.png`; no labels in any frame |
| Recognisable low-poly asset kit | clear | all procedural — `shots/critic14/zoom60_town.png` |

## Ranked issues (most damaging first)

1. **Fog is still a veil over a clear-weather picture: the near water is saturated cobalt with a crisp brush, no depth layers, bushes unfogged, shadows at full strength, brig hull a flat slate silhouette, night-fog windows white not amber, fog 12:00 and 17:30 near-identical.** `shots/critic14/fog_phone.png`, `shots/critic14/fog_phone_crop_near_water.png`, `shots/critic14/fog_phone_crop_hill.png`, `shots/critic14/fog_phone_crop_dock.png`, `shots/critic14/fog_phone_crop_brig.png`, `shots/critic14/contact_fog_22_crop_town.png`, `shots/critic14/contact.png`. Fix: fog density that reaches the camera — grey-green low-contrast near water — with three bluer flatter layers behind it (R4); fog on the instanced bushes; sun at 35%; keep emissives amber.
2. **The self-lit foam collar is a bright white ring around the whole basin: an even lilac-white stripe along the quay wall, a chalky crumpled 8–10 m sheet along the beach, a white blob on the western spit.** `shots/critic14/hero_phone_crop_quay_right.png`, `shots/critic14/hero_phone_crop_shore_left.png`, `shots/critic14/zoom60_beach_crop_foam.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`, `shots/critic14/hero_phone_crop_bottom.png`, `shots/critic14/zoom300_crop_island.png`. Fix: a 1–2 m cream lace with a soft inner fade, broken into tongues by the chop; no collar against a vertical wall, only a thin wet line and occasional splash; kill the spit blob.
3. **The 60 m beach: the wet band is a honeycomb of pink-brown cells with pale seams, now visible at 120 m too; the dry sand carries one large salmon-pink blotch instead of grain.** `shots/critic14/zoom60_beach_crop_wetband.png`, `shots/critic14/zoom60_beach_crop_shore.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`, `shots/critic14/zoom60_beach.png`. Fix: wet band as darker, glossier sand with a soft upper edge, no cellular noise; sand macro variation as long low-contrast drift lines and a wrack line, not a blotch.
4. **Night: moon path a broad marbled grey sheet with black holes; the lower half of the frame pure black; the brig invisible; no beam.** `shots/critic14/night_phone_crop_basin.png`, `shots/critic14/night_phone_crop_bottom.png`, `shots/critic14/night_phone_crop_brig.png`, `shots/critic14/night_phone_crop_mole.png`. Fix: a narrow glitter path along the moon azimuth; a faint moon fill on wave backs, hull and rigging across the whole basin; a beam cone.
5. **Noon glitter still a white-out blanket with a pure-white blob on the left beach.** `shots/critic14/contact_clear_12_crop_basin.png`, `shots/critic14/contact.png`. Fix: cap clump size and coverage; tone-map the sun path; clamp shore foam at noon exposure.
6. **Town unchanged at 60 m: quay a stamped grid, roof fleck repeat every four rows, shaded walls flat khaki-grey, void windows, paving ghost at the grass edge.** `shots/critic14/zoom60_town_crop_quay.png`, `shots/critic14/zoom60_town_crop_roof.png`, `shots/critic14/zoom60_town_crop_window.png`, `shots/critic14/zoom60_town_crop_ground.png`. Fix: irregular stones with half stones and a rounded wet edge; per-house fleck noise; a warm bounce term in shade; dim interior tint in the void windows.
7. **Fronds flat lime blades in a starburst.** `shots/critic14/zoom60_beach_crop_sand.png`, `shots/critic14/hero_phone_crop_palms.png`, `shots/critic14/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
8. **Jib a detached triangle with the forestay running past it.** `shots/critic14/zoom120_brig_crop_jib.png`, `shots/critic14/hero_phone_crop_brig.png`, `shots/critic14/fog_phone_crop_brig.png`. Fix: bend the jib's luff to the forestay with a visible hank line.
9. **Sky into the sun a flat tan-to-grey gradient — no cobalt zenith, rose belt or clouds; the hill black with self-lit bushes.** `shots/critic14/sun_check_crop_sky.png`, `shots/critic14/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
10. **Mole boulders read as grey wire cages.** `shots/critic14/hero_phone_crop_mole.png`, `shots/critic14/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base.
11. **Bushes lime lollipops with hard black shadow blobs; a large blurred dark smear across the hill behind the town.** `shots/critic14/hero_phone_crop_hill.png`, `shots/critic14/zoom300_crop_top.png`. Fix: clustered bushes with a soft contact shadow; remove the smear.
12. **Timber dock reads as a dark pile of blocks.** `shots/critic14/hero_phone_crop_dock.png`, `shots/critic14/fog_phone_crop_dock.png`. Fix: lighter plank albedo with visible plank lines and piles; less self-shadow.
13. **The palm shadow on the mainsail reads as a stain — a soft smudge with no frond shape and no visible shadow on the water between palm and sail; white specks along the roofline left of the tower.** `shots/critic14/zoom120_brig_crop_sail.png`, `shots/critic14/hero_phone_crop_hill.png`. Fix: fade far-caster shadows on cloth (or let the palm shadow show on the water so the mark has a cause); remove the specks.
14. **Night windows are identical rectangles at one brightness across the whole town.** `shots/critic14/night_phone_crop_town.png`. Fix: vary window brightness and warmth per house, a few dark.
15. **Fog frame: the lilac foam ring shows through the fog at full brightness while the town is greyed.** `shots/critic14/contact_fog_12_crop_town.png`, `shots/critic14/fog_phone_crop_dock.png`. Fix: fog the collar with everything else.

## Round 13 issues — status

| # | Round 13 issue | Status | Evidence |
|---|---|---|---|
| 1 | Fog a single veil, no depth layers, noon fog a sheet, unfogged bushes, full shadows, night-fog windows white | **improved (marginal)** — a distance gradient now exists and the night-fog windows are dimmer; still one veil with clear cobalt near water, unfogged bushes, full shadows, white windows | `shots/critic14/fog_phone.png`, `shots/critic14/fog_phone_crop_near_water.png`, `shots/critic14/fog_phone_crop_hill.png`, `shots/critic14/fog_phone_crop_dock.png`, `shots/critic14/contact_fog_22_crop_town.png` |
| 2 | Shallow arc across the hero's bottom third — bigger, brighter khaki ring | **fixed** — smooth turquoise-to-cobalt grade, no ring at 120 m or 300 m | `shots/critic14/hero_phone.png`, `shots/critic14/hero_phone_crop_bottom.png`, `shots/critic14/zoom300_crop_island.png`, `shots/critic14/landscape.png` |
| 3 | 60 m beach: featureless salmon sand, Voronoi honeycomb wet band, wide lilac foam sheet | **unchanged (worse)** — honeycomb now visible at 120 m too; sand has a salmon blotch instead of grain; foam a chalky crumpled sheet | `shots/critic14/zoom60_beach_crop_wetband.png`, `shots/critic14/zoom60_beach_crop_foam.png`, `shots/critic14/zoom120_brig_crop_shore_left.png` |
| 4 | Night: moon path marbled with black holes, lower half black, no beam, no moon on hull | **improved (marginal)** — water body now near black rather than grey; path still a marbled sheet, foreground still black, no beam, brig invisible | `shots/critic14/night_phone.png`, `shots/critic14/night_phone_crop_basin.png`, `shots/critic14/night_phone_crop_bottom.png`, `shots/critic14/night_phone_crop_brig.png` |
| 5 | Noon glitter white-out with a white blob on the beach | **unchanged** | `shots/critic14/contact_clear_12_crop_basin.png` |
| 6 | Quay a grid; roof module repeats every four rows | **unchanged** | `shots/critic14/zoom60_town_crop_quay.png`, `shots/critic14/zoom60_town_crop_roof.png` |
| 7 | Fronds flat blades in a starburst; wicker trunk | **improved (marginal)** — trunks now ringed; fronds unchanged | `shots/critic14/zoom60_beach_crop_sand.png`, `shots/critic14/hero_phone_crop_palms.png` |
| 8 | Jib a detached triangle | **unchanged** | `shots/critic14/zoom120_brig_crop_jib.png`, `shots/critic14/hero_phone_crop_brig.png` |
| 9 | Sky flat tan gradient; hill black into the sun | **unchanged** | `shots/critic14/sun_check_crop_sky.png`, `shots/critic14/sun_check_crop_bottom.png` |
| 10 | Mole boulders read as wire cages | **unchanged** | `shots/critic14/hero_phone_crop_mole.png`, `shots/critic14/fog_phone_crop_mole.png` |
| 11 | Bush sprinkle with hard blobs; hill beige smear; plateau tarmac | **improved (marginal)** — hill carries drift ripples and the plateau reads as dune and scrub; bushes and a large dark smear remain | `shots/critic14/hero_phone_crop_hill.png`, `shots/critic14/zoom300_crop_top.png` |
| 12 | Shaded walls flat grey; void windows | **unchanged** | `shots/critic14/zoom60_town_crop_window.png`, `shots/critic14/zoom60_town_crop_smoke.png` |
| 13 | Timber dock a pile of dark blocks | **unchanged** | `shots/critic14/hero_phone_crop_dock.png`, `shots/critic14/fog_phone_crop_dock.png` |
| 14 | Foam collar mottles at 120 m; quay collar a flat cream band | **unchanged (worse)** — collar now a bright self-lit white stripe around the basin and the quay wall; mottles remain | `shots/critic14/hero_phone_crop_quay_right.png`, `shots/critic14/zoom120_brig_crop_shore_left.png`, `shots/critic14/zoom60_beach_crop_foam.png` |
| 15 | Roofline specks; sail shadow a mark with no visible caster | **unchanged** — specks remain; the sail mark reads as a stain even with palms in the 120 m frame | `shots/critic14/hero_phone_crop_hill.png`, `shots/critic14/zoom120_brig_crop_sail.png` |

## Budget lines (from `shots/critic14/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,430,793 | 41.3 | 7.7 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,430,793 | 41.3 | 8.2 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,028,345 | 41.3 | 6.6–9.8 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.05 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,406,647 | 41.3 | 6.3 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,430,383 | 41.3 | 8.6 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,412,859 | 41.3 | 8.2 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,430,793 | 41.3 | 7.7 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,430,793 | 41.3 | 6.5 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,430,793 | 41.3 | 7.4 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,430,793 | 41.3 | 7.1 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 95.4% of the triangle limit. The one
warning is `THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device
fps: not measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (6.5):** sand with grain and a wrack line, no blotch; a wet band that is not a cell pattern at any zoom; a narrow lace; irregular quay stones; a non-repeating roof; leaflets; solid boulders; clustered bushes; bounce in shade.
- **Light (7.5):** a narrow moon path with moon fill and a beam; sun stopped down in fog; warm bounce in shade; bushes lit like the ground.
- **Atmosphere (6.5):** fog that reaches the near water with three depth layers and fogged instances; warm emissives in fog; a painted sky.
- **Water (7.0):** a lace instead of a white ring; no collar on the quay wall; no spit blob; capped noon glitter; a moon path.
- **Scale and motion (7.5):** a jib on the forestay; a lighter dock; a sail mark with a cause or none; no roofline specks; a motion capture.
- **Composition (7.5):** tone the collar down; a beach with something to look at; fog with depth; moon on the near water.
- **Programmer art (6.0):** clear the white-stripe collar; clear the marginals (quay/roof/wet-band tiling; single-colour fog with unfogged bushes; noon white-out and black night foreground).

## Verdict

**FAIL.** Lowest line: programmer-art checklist at 6.0, then materials and atmosphere at 6.5, water at 7.0,
light, scale and composition at 7.5; only budget and errors (8.5) clears the bar. This round fixed the
issue ranked second last time — the khaki shallow ring across the hero's bottom third is gone and the basin
grades cleanly from turquoise to cobalt at every zoom, which makes the hero the best-composed frame the
project has produced — and it put the night water body where R2 wants it, near black. Against that, the
same pass replaced the ring with a bright self-lit foam collar that now outlines the whole basin like a
swimming-pool rim and runs as an even white stripe along the quay wall, which is the checklist's
white-stripe foam by its own wording; the beach at 60 m went backwards, with the honeycomb wet band now
showing at 120 m and a salmon blotch on the sand where grain should be; and the fog gained a distance
gradient but still leaves the near water in clear-weather cobalt, so it reads as a grey wash over the top
of the picture rather than weather. Nothing in the town moved for a third round. Scores go from
7.0/7.5/6.5/7.0/7.5/7.5/8.5/6.5 in round 13 to 6.5/7.5/6.5/7.0/7.5/7.5/8.5/6.0: materials down half a
point on the beach, programmer art down half a point on the collar, water holding because the ring gain and
the collar loss cancel, everything else unmoved. Against Sea of Conquest the hero, the night thumbnail and
the 300 m tile are a clean indie take on the same picture — the harbour outline and the water banding are
now drawn rather than rasterised — but the foam, the beach, the fog and the 60 m town are still a
generation short. What is missing for a pass, in order: turn the collar into a lace and take it off the
quay wall; fog that reaches the camera; a wet band that is sand, not cells; a moon path with fill and a beam;
then the quay stones, the roof repeat, the fronds and the jib.
