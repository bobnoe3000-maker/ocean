# Critic round 22 — Ocean look test, sixteenth round under STYLISED REALISM

Judged against LOOK.md section 0: Sea of Conquest R1 (golden-hour harbour) and R2 (port at night) are
the primary references, R5 the palette reference, R3/R4 (Dredge) for dusk and fog mood. 10 =
indistinguishable from Sea of Conquest's world art; the bar is readability, shape language, painted water
and foam, sculpted vegetation, colour and light quality.

Build under judgement: preview at http://127.0.0.1:5174/, `dist/` written 23:03:02 UTC from HEAD
`43419a3` ("Docs: round 21 column, decision 39 (coast-distance crease, transform-order lids, turquoise)";
`git log --oneline -1` confirms). That commit is docs only and sits directly on `333d901`, "Round 22
builder pass (part 1): smooth-min coast distance (no crease ring across the harbour mouth), clean
turquoise painted water, gun barrels inboard and gunport lids hinged in place, mid-value shutters and
doors, faint night beam" (`src/ocean/Ocean.ts`, `src/port/Port.ts`, `src/ships/Brig.ts`,
`src/terrain/Heightfield.ts`; 13 insertions / 11 deletions). The first shot started 68 s after the dist
write. All ten shots were taken, in the required order, in the foreground, `--frames 4` throughout:
sixteen full frames under `shots/critic22/` plus seventy-four native-resolution crops (`*_crop_*.png`,
nearest-neighbour upscaled 1–5×, cut with a scratch pngjs script outside the repo). Every frame and crop
cited below was opened and looked at. No round 1–21 screenshot is used as evidence.

Environment limitations, stated up front (none of these is a pass):

- Phone shots were taken at `--dpr 2` (1560×3376), not the 390×844 @3 preset; 3× exceeds this
  environment's SwiftShader render time.
- Device fps is **not measured** (headless SwiftShader; `frameMs` p50 6.2–10.5 ms is smoke only).
- Motion (palms, sails, flags, smoke, gulls) cannot be verified from stills.
- The only frame containing sky is `sun_check` (pitch 14, yaw 135); the hero framing at pitch 52 never
  reaches the horizon.
- Note of fact taken into account: the feather-shaped mark on the mainsail at 120 m is the cast shadow of a
  beach palm. It is judged below on how it reads, not as a bug.

Scale: 8.5 = AAA with nits; 7 = good indie; 5 = programmer art.

## Rubric

### 1. Materials — 7.0 (holds)

"Mid-value shutters and doors" is real but only half applied. On the lit orange and cream façades at 60 m
the shutters beside the panes are now blue-grey slatted panels with a value, and the cream house has a
grey panel door under a stone lintel (`shots/critic22/zoom60_town_crop_window.png`,
`shots/critic22/zoom60_town_crop_door.png`, `shots/critic22/zoom60_town_crop_walls.png`). On every
shaded wall — the white house top-left, the grey tower-side house — the shutters are still pure-black
rectangles that read as holes, and the white house's doorway is still a black void
(`shots/critic22/zoom60_town_crop_shade.png`, `shots/critic22/zoom60_town_crop_shutter_shade.png`,
`shots/critic22/zoom60_town_crop_topright.png`). The gun barrels are inboard on carriages and the deck
reads as a deck (`shots/critic22/zoom120_brig_crop_deck.png`, `shots/critic22/zoom120_brig_crop_bow.png`).
Unchanged for an eleventh round: the quay is the same stamped half-bond slab grid with the same pale
upper-left highlight and blue-grey lower-right mortar on every slab, no broken corner, no half stone, no
wet rounding at the edge (`shots/critic22/zoom60_town_crop_quay.png`, `shots/critic22/zoom60_town_crop_lamp.png`);
the roof fleck pattern repeats in diagonal rows every four tiles (`shots/critic22/zoom60_town_crop_roof.png`);
shaded walls are one blue-grey value with drawn cracks and no bounce
(`shots/critic22/zoom60_town_crop_shade.png`); dry sand is a salmon blotch over a fine diagonal weave
moiré (`shots/critic22/zoom60_beach_crop_sand.png`, `shots/critic22/zoom60_beach_crop_wetband.png` left
edge); fronds are flat lime blades in a starburst (`shots/critic22/zoom60_beach_crop_fronds.png`,
`shots/critic22/zoom120_brig_crop_palm.png`); mole boulders are grey polygon cages in clear, night and fog
(`shots/critic22/hero_phone_crop_mole.png`, `shots/critic22/night_phone_crop_mole.png`,
`shots/critic22/fog_phone_crop_mole.png`); the dock is a dark pile of blocks with the rowboat clipping its
end (`shots/critic22/hero_phone_crop_dock.png`, `shots/critic22/fog_phone_crop_dock.png`). The one
material gain of the round is the foreshore: the flat lavender strip is now a foam collar with grain and
streaks over a darker wet-sand band (`shots/critic22/zoom60_beach_crop_foam.png`), but it is water, not
sand, that improved. Still good: the lit lime-washed walls with cracks, sills, balcony shadows and vine
stains (`shots/critic22/zoom60_town_crop_walls.png`); the brig's deck, gratings, hawse ring and rope coil
(`shots/critic22/zoom120_brig_crop_bow.png`); the dock planks under the night lamp
(`shots/critic22/night_phone_crop_dock.png`).
To 8.5: irregular slabs with broken corners and a rounded wet edge; shutters and doors with a value on
shaded walls too; per-house roof fleck noise; a warm bounce term in shade; sand grain without a weave;
pinnate leaflets; solid boulders; a lighter plank dock by day.

### 2. Light — 7.5 (holds)

The 17:30 sun is right: front-lit orange-cream walls, long violet shadows up-left at 4–5× object height,
the brig's long shadow across the basin, the tower's shadow across the hill, dock and mole shadows on the
water (`shots/critic22/hero_phone.png`, `shots/critic22/hero_phone_crop_town.png`,
`shots/critic22/contact_clear_175_crop_basin.png`); the glitter path into the sun at pitch 14 is still
the project's best light (`shots/critic22/sun_check_crop_glitter.png`, `shots/critic22/sun_check_crop_town.png`);
palm shadows cross sand and shallows at 60 m (`shots/critic22/zoom60_beach.png`,
`shots/critic22/zoom60_beach_crop_water.png`). Night gains two small things: the brig carries a bow
lantern with a reflection (`shots/critic22/night_phone_crop_brig.png`), and the "faint night beam" is a
soft warm fan of bloom spilling from the lamp onto the mole slab and lighthouse body
(`shots/critic22/night_phone_crop_mole.png`, `shots/critic22/night_phone_crop_beam.png`). It is not a
beam — nothing sweeps the water — and the lamp itself is still a hard white crescent hotspot. The moon
path is the same white-grey blotchy sheet about 25 m wide with swirled wisps
(`shots/critic22/night_phone_crop_basin.png`); the lower half is the same featureless navy plane, mean
rgb 0,0,25 at the bottom and 3,3,26 at left (`shots/critic22/night_phone_crop_bottom.png`,
`shots/critic22/night_phone_crop_left_water.png`); the hill is black, mean rgb 1,1,0
(`shots/critic22/night_phone_crop_hill.png`). The palm shadow on the mainsail is a green-tinted feathered
stroke with a dotted tail; it reads a little more like fronds than in round 21 but the green tint still says
"mark on cloth" before "shadow" (`shots/critic22/zoom120_brig_crop_sail.png`). Unchanged: the hill into
the sun is black with self-lit lime bushes (`shots/critic22/sun_check_crop_bottom.png`); fog casts
full-strength dock and brig shadows (`shots/critic22/fog_phone_crop_dock.png`,
`shots/critic22/fog_phone_crop_brig.png`); shaded walls have no bounce
(`shots/critic22/zoom60_town_crop_shade.png`); the noon basin is a cyan pool with a cobalt hole in its
centre (`shots/critic22/contact_clear_12_crop_basin.png`). Holds at 7.5.
To 8.5: a glitter path of sparse highlights along the moon azimuth over the navy fill; a beam cone across
the water; moon on the hill and rigging; bushes lit by the same sun as the ground; fog shadows at 30%;
bounce in shade; a neutral-grey sail shadow.

### 3. Atmosphere — 7.5 (holds)

The grey-tan crescent across the fog's lower third is gone with the band; the near water is now an even
slate-blue gradient, mean rgb 68,98,125 at the bottom against 88,109,132 mid-basin
(`shots/critic22/fog_phone_crop_near_water.png`). But the fog is still one veil with a smooth
top-to-bottom gradient and no distance planes (`shots/critic22/fog_phone.png`,
`shots/critic22/contact_fog_12_crop_basin.png`, `shots/critic22/contact_fog_175_crop_basin.png`). The
bushes and town take the fog well (`shots/critic22/fog_phone_crop_hill.png`,
`shots/critic22/fog_phone_crop_town.png`). Unchanged: the brig hull is a flat slate silhouette with every
deck detail gone while the sails stay cream (`shots/critic22/fog_phone_crop_brig.png`); the dock a
full-strength dark slab (`shots/critic22/fog_phone_crop_dock.png`); the boulders read as cages through
the fog (`shots/critic22/fog_phone_crop_mole.png`); the white sliver at the quay's right end shows in fog
(`shots/critic22/fog_phone_crop_quay_right.png`); night-fog windows are near-white and the lighthouse
lamp a white blob with a warm fan (`shots/critic22/contact_fog_22_crop_town.png`,
`shots/critic22/contact_fog_22_crop_basin.png`). The sky into the sun is a flat tan-to-grey gradient with a
small disc and halo, no cobalt zenith, no rose belt, no cloud (`shots/critic22/sun_check_crop_sky.png`).
Aerial perspective on the far coast at 300 m is present but slight (`shots/critic22/zoom300_crop_top.png`).
7.5.
To 8.5: depth layers keyed to camera distance (R4); fog on the hull, dock and boulders; amber windows in
night fog; a painted sky with a blue zenith, rose belt and clouds.

### 4. Water — 7.5 (up from 7.0)

The khaki band is gone. Not cooler, not fainter — gone, in every framing. The hero's bottom third
measures mean rgb 0,101,135 against 1,96,139 mid-basin, a clean teal-to-cobalt gradient with diagonal
brush chop and no crescent, no soft edge, no cyan halo (`shots/critic22/hero_phone_crop_bottom.png`,
`shots/critic22/hero_phone_crop_band_edge.png`, `shots/critic22/hero_phone.png`); the 17:30 contact
(`shots/critic22/contact_clear_175_crop_bottom.png`), the noon sparkle field
(`shots/critic22/contact_clear_12_crop_sparkle.png`), the harbour mouth at 300 m and in landscape
(`shots/critic22/zoom300.png`, `shots/critic22/landscape_crop_basin.png`) and the fog near water
(`shots/critic22/fog_phone_crop_near_water.png`) all agree. The claimed crease ring across the harbour
mouth is likewise absent: turquoise fades into cobalt smoothly at 300 m and in landscape
(`shots/critic22/landscape_crop_basin.png`, `shots/critic22/landscape_crop_right.png`). The 60 m
foreshore is better: the flat lavender strip with its scallop row is replaced by a foam collar with grain
and streaks, then a translucent turquoise shallow band, then cerulean — banding that follows the shore
(`shots/critic22/zoom60_beach_crop_foam.png`, `shots/critic22/zoom60_beach_crop_water.png`,
`shots/critic22/zoom60_beach_crop_shallow.png`). The 120 m lace rim with its soft inner fade and
pale-green shallow band is still the best water in the set (`shots/critic22/zoom120_brig_crop_wash.png`,
`shots/critic22/zoom120_brig_crop_shore_left.png`). What the fix exposes: the hero basin at 120 m is now
one near-uniform turquoise plane — no lace at the quay wall or the mole, no shallow-to-deep banding
across the basin, no hull or sail reflection, no bow foam (`shots/critic22/hero_phone.png`,
`shots/critic22/hero_phone_crop_water.png`, `shots/critic22/hero_phone_crop_quay_right.png`,
`shots/critic22/zoom120_brig_crop_bow.png`). At 3× the foam collar's outer edge against the turquoise is
a hard stair-stepped sawtooth (`shots/critic22/zoom60_beach_crop_wetband.png`,
`shots/critic22/zoom60_beach_crop_shallow.png` top-left). Unchanged: the rim a uniform pale outline
around the whole coast at 1× (`shots/critic22/landscape_crop_left.png`,
`shots/critic22/zoom300_crop_island.png`); the white sliver at the right end of the quay
(`shots/critic22/hero_phone_crop_quay_right.png`); the noon basin a cyan pool with a cobalt hole and a
dense field of hard white sparkle blobs (`shots/critic22/contact_clear_12_crop_basin.png`,
`shots/critic22/contact_clear_12_crop_sparkle.png`); no mole foam
(`shots/critic22/hero_phone_crop_mole.png`); deep water at 300 m a cobalt plane with faint diagonal
streaks and no swell (`shots/critic22/zoom300_crop_deep.png`); the basin cyan rather than R1's
blue-violet; the moon path a white sheet (`shots/critic22/night_phone_crop_basin.png`). 7.5.
To 8.5: lace at the quay wall and mole; a shallow-to-deep band authored across the basin from seabed
depth; broken hull and sail reflections; bow and mole foam; a soft outer foam edge at 60 m; the quay
sliver gone; swell at 300 m; capped noon sparkle and no cobalt hole; a real moon glitter path.

### 5. Scale and motion — 7.5 (holds)

The 1.7× brig against the town, the dock, the rowboats and the lighthouse agree, and the frame reads as
one place (`shots/critic22/hero_phone.png`, `shots/critic22/landscape.png`, `shots/critic22/zoom300.png`).
"Gun barrels inboard" lands: the guns sit on carriages on deck with muzzles inboard
(`shots/critic22/zoom120_brig_crop_deck.png`). "Gunport lids hinged in place" does not: the lids are a
row of six thin dark slats along the starboard quarter, angled consistently but hanging in open water
with a gap of blue between them and the hull — round 21's floating dashes, now longer
(`shots/critic22/zoom120_brig_crop_stern.png`; the port side shows the same offset,
`shots/critic22/zoom120_brig_crop_deck.png` lower left). The jib is unchanged: a detached triangle hung
off the bowsprit end with the forestay running past it (`shots/critic22/hero_phone_crop_brig.png`,
`shots/critic22/zoom120_brig_crop_jib.png`, `shots/critic22/fog_phone_crop_brig.png`). The palm shadow on
the mainsail still reads as a mark on the cloth (`shots/critic22/zoom120_brig_crop_sail.png`). The dock is
a dark pile of blocks with the rowboat pushed into its end (`shots/critic22/hero_phone_crop_dock.png`);
pale translucent flecks and a bluish blur sit over the top-left roofs at 120 m and over the pink house at
60 m (`shots/critic22/hero_phone_crop_town.png`, `shots/critic22/zoom60_town_crop_ground.png` left).
Pennants and gulls are posed convincingly; the rowboat at the dock now carries a lantern at night
(`shots/critic22/night_phone_crop_dock.png`). Motion is unverifiable from stills. 7.5.
To 8.5: lids on the hull surface following the tumblehome; the jib's luff on the forestay with a hank
line; a lighter plank dock; remove the flecks; a motion capture.

### 6. Composition and squint test — 7.5 (up from 7.0)

With the band gone the hero at squint finally reads as it was designed: a warm terracotta crescent over a
cool clean basin, the brig and its shadow the second shape, the eye climbing from the sails to the quay
instead of dropping to a khaki smear (`shots/critic22/hero_phone.png`, `shots/critic22/hero_phone_crop_bottom.png`).
The landscape and 300 m frames read as one painted island with a warm town and a smooth harbour mouth
(`shots/critic22/landscape.png`, `shots/critic22/zoom300.png`, `shots/critic22/landscape_crop_basin.png`,
`shots/critic22/landscape_crop_left.png`). The cost is that the basin's lower two thirds are now one flat
tonal shape with nothing in them but chop — no lace, no reflection, no wake — so the frame is quieter
than R1, not richer. The night frame is still a wall of windows over a navy half with a white blotch on
the right (`shots/critic22/night_phone.png`, `shots/critic22/night_phone_crop_basin.png`); the noon frame
a cyan pool with a sparkle field (`shots/critic22/contact_clear_12_crop_sparkle.png`); the fog a veil
(`shots/critic22/fog_phone.png`); the beach at 60 m has nothing on the sand
(`shots/critic22/zoom60_beach.png`). 7.5.
To 8.5: lace and reflections to give the basin a second value; moon glitter on the near water; fog with
distance planes; a banded noon basin; something on the beach.

### 7. Budget and errors — 8.5 (holds)

Zero console errors in all sixteen logs; the one warning per frame is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Draw calls
109–156 (limit 300), triangles 1,420,585–1,444,731 at high quality (96.3% of the 1.5 M limit; 1,056,683
at medium), textures 41.3 MB (limit 256). High-quality triangles are down 11,550 on round 21
(1,456,281 → 1,444,731) and medium down the same; the margin is 55,269 triangles. Device fps not
measured; headless p50 6.2–10.5 ms is smoke only.
To 8.5+: a real-device fps number; headroom below 90% on triangles at high.

### 8. Programmer-art checklist — 7.5 (up from 7.0; still a fail)

No clean hit. Two marginals cleared: the cause-less khaki band across the hero basin
(`shots/critic22/hero_phone_crop_bottom.png`, `shots/critic22/hero_phone_crop_band_edge.png`) and the
regular scallop row on the wet strip (`shots/critic22/zoom60_beach_crop_foam.png`). Marginals carried
over: visible tiling on the quay slab grid and the roof fleck repeat, and the sand weave moiré
(`shots/critic22/zoom60_town_crop_quay.png`, `shots/critic22/zoom60_town_crop_roof.png`,
`shots/critic22/zoom60_beach_crop_sand.png`); a near-uniform cobalt plane at 300 m and the noon pool with
its sparkle blobs (`shots/critic22/zoom300_crop_deep.png`, `shots/critic22/contact_clear_12_crop_basin.png`,
`shots/critic22/contact_clear_12_crop_sparkle.png`); fog as one veil above an even gradient
(`shots/critic22/fog_phone.png`, `shots/critic22/fog_phone_crop_near_water.png`). One new lesser marginal:
the foam collar's outer edge is a hard stair-step at 3× (`shots/critic22/zoom60_beach_crop_wetband.png`).
Four marginals, one softened. 7.5.

## Programmer-art checklist

| Item | Status | Evidence |
|---|---|---|
| Flat or untextured surfaces | clear | painted albedo everywhere; shaded walls a flat value but deliberate (`shots/critic22/zoom60_town_crop_shade.png`); the night navy plane is featureless but is a lit water surface (`shots/critic22/night_phone_crop_bottom.png`) |
| Default Three.js materials | clear | none seen |
| Visible tiling or stretched UVs | **hit (marginal)** | regular slab grid with uniform edge highlight (`shots/critic22/zoom60_town_crop_quay.png`, `shots/critic22/zoom60_town_crop_lamp.png`); roof repeat every four rows (`shots/critic22/zoom60_town_crop_roof.png`); sand weave moiré (`shots/critic22/zoom60_beach_crop_sand.png`) |
| Shadow acne or missing shadows | clear | shadows present and correctly directed (`shots/critic22/hero_phone.png`, `shots/critic22/zoom60_beach.png`, `shots/critic22/zoom60_town_crop_topright.png`) |
| Grey nights | clear | night is navy-black with warm windows, lamp pools and a bow lantern (`shots/critic22/night_phone.png`, `shots/critic22/night_phone_crop_town.png`, `shots/critic22/night_phone_crop_brig.png`); the featureless navy lower half is a separate fault |
| Uniform blue water plane or white-stripe foam | **hit (marginal, softened)** | khaki band cleared (`shots/critic22/hero_phone_crop_bottom.png`); hero basin a clean gradient with chop but no lace or reflection (`shots/critic22/hero_phone_crop_water.png`); deep water at 300 m a near-flat cobalt plane (`shots/critic22/zoom300_crop_deep.png`); noon pool with cobalt hole (`shots/critic22/contact_clear_12_crop_basin.png`); rim a uniform outline at 1× (`shots/critic22/landscape_crop_left.png`) but lace at 120 m desktop (`shots/critic22/zoom120_brig_crop_wash.png`) |
| Hard water-to-beach line | **hit (marginal, softened)** | scallop row cleared, foam collar with grain (`shots/critic22/zoom60_beach_crop_foam.png`); outer edge of the collar a hard stair-step at 3× (`shots/critic22/zoom60_beach_crop_wetband.png`, `shots/critic22/zoom60_beach_crop_shallow.png`); soft at 120 m and 300 m (`shots/critic22/zoom120_brig_crop_shore_left.png`, `shots/critic22/zoom300_crop_island.png`) |
| Vegetation that does not move / identical rotation | clear (stills) | palms lean and rotate differently (`shots/critic22/zoom60_beach.png`, `shots/critic22/zoom60_beach_crop_topleft.png`); motion unverifiable |
| Fog as one colour | **hit (marginal)** | bushes and town fogged (`shots/critic22/fog_phone_crop_hill.png`, `shots/critic22/fog_phone_crop_town.png`); the crescent is gone but the fog is one veil with a gradient and no distance planes, hull a silhouette (`shots/critic22/fog_phone.png`, `shots/critic22/fog_phone_crop_near_water.png`, `shots/critic22/fog_phone_crop_brig.png`) |
| Sky without a sun | clear | sun disc and halo present (`shots/critic22/sun_check_crop_sky.png`) |
| Placeholder primitives or text labels | clear | none in any frame; contact-sheet captions are the harness's own (`shots/critic22/contact.png`) |
| Recognisable low-poly asset kit | clear | none |

## Ranked issues (most damaging first)

1. **Night: the moon path is still a white-grey blotchy sheet about 25 m wide with swirled wisps; the lower half a featureless navy plane (rgb 0,0,25); the lamp a hard white crescent with only a bloom fan onto the mole, no beam across the water; the hill pure black.** `shots/critic22/night_phone.png`, `shots/critic22/night_phone_crop_basin.png`, `shots/critic22/night_phone_crop_bottom.png`, `shots/critic22/night_phone_crop_left_water.png`, `shots/critic22/night_phone_crop_mole.png`, `shots/critic22/night_phone_crop_beam.png`, `shots/critic22/night_phone_crop_hill.png`. Fix: a glitter path of sparse highlights along the moon azimuth over the navy fill; a beam cone that lights the water; faint moonlight on the hill and rigging.
2. **Fog: one veil with no distance planes; hull a slate silhouette under cream sails; dock full-strength; boulders cages; quay sliver; night-fog windows near-white and the lamp a white blob.** `shots/critic22/fog_phone.png`, `shots/critic22/fog_phone_crop_near_water.png`, `shots/critic22/fog_phone_crop_brig.png`, `shots/critic22/fog_phone_crop_dock.png`, `shots/critic22/fog_phone_crop_mole.png`, `shots/critic22/fog_phone_crop_quay_right.png`, `shots/critic22/contact_fog_22_crop_town.png`. Fix: key the layers to camera distance (R4); fog the hull, dock and boulders; shadows at 30%; amber windows in night fog.
3. **Town at 60 m: the slab grid is unchanged; shutters and doorways on every shaded wall are still pure black; roof fleck repeat; flat shaded walls with no bounce; translucent flecks and blur over roofs.** `shots/critic22/zoom60_town_crop_quay.png`, `shots/critic22/zoom60_town_crop_shade.png`, `shots/critic22/zoom60_town_crop_shutter_shade.png`, `shots/critic22/zoom60_town_crop_roof.png`, `shots/critic22/hero_phone_crop_town.png`, `shots/critic22/zoom60_town_crop_ground.png`. Fix: irregular slabs with broken corners and a rounded wet edge; the mid-value shutter and door treatment applied to shaded faces too; per-house fleck noise; warm bounce in shade; remove the flecks.
4. **The hero basin at 120 m is one near-uniform turquoise plane: no lace at the quay wall or mole, no shallow-to-deep banding across the basin, no hull or sail reflection, no bow or mole foam; deep water at 300 m a cobalt plane with no swell.** `shots/critic22/hero_phone.png`, `shots/critic22/hero_phone_crop_water.png`, `shots/critic22/hero_phone_crop_mole.png`, `shots/critic22/zoom120_brig_crop_bow.png`, `shots/critic22/zoom300_crop_deep.png`. Fix: lace collars at the quay and mole; a seabed-depth band across the basin; broken reflections under the hull and sails; a bow collar; swell banding at 300 m.
5. **Noon: the basin is a cyan pool with a cobalt hole in its centre; the sparkle field is a dense scatter of hard white blobs.** `shots/critic22/contact_clear_12_crop_basin.png`, `shots/critic22/contact_clear_12_crop_sparkle.png`. Fix: keep the turquoise-to-cobalt banding at noon exposure and remove the hole; cap clump coverage and soften the sparkle.
6. **Gunport lids are thin dark slats hanging in open water off both quarters with a gap between them and the hull; the jib is a detached triangle with the forestay running past it.** `shots/critic22/zoom120_brig_crop_stern.png`, `shots/critic22/zoom120_brig_crop_deck.png`, `shots/critic22/zoom120_brig_crop_jib.png`, `shots/critic22/hero_phone_crop_brig.png`. Fix: place the lids on the hull surface following the tumblehome at each station; bend the jib's luff to the forestay with a hank line.
7. **The 60 m foam collar's outer edge is a hard stair-step at 3×; the rim a uniform outline at 1×; dry sand a salmon blotch over a diagonal weave moiré; nothing on the beach.** `shots/critic22/zoom60_beach_crop_wetband.png`, `shots/critic22/zoom60_beach_crop_shallow.png`, `shots/critic22/landscape_crop_left.png`, `shots/critic22/zoom60_beach_crop_sand.png`, `shots/critic22/zoom60_beach.png`. Fix: a soft, noise-broken outer edge on the collar; split the lace into tongues with gaps; a non-axis-aligned grain noise; a wrack line, a boat, rocks.
8. **The palm shadow on the mainsail reads as a green-tinted stain with a dotted tail.** `shots/critic22/zoom120_brig_crop_sail.png`. Fix: neutral-grey shadow tint on cloth and a sharper edge, or cut the shadow at the sail.
9. **Fronds flat lime blades in a starburst.** `shots/critic22/zoom60_beach_crop_fronds.png`, `shots/critic22/zoom120_brig_crop_palm.png`. Fix: pinnate leaflets on a drooping rachis.
10. **Sky into the sun a flat tan-to-grey gradient with no cobalt zenith, rose belt or cloud; the hill black with self-lit bushes.** `shots/critic22/sun_check_crop_sky.png`, `shots/critic22/sun_check_crop_bottom.png`. Fix: painted sky with clouds; bushes lit by the same sun as the ground.
11. **Mole boulders grey polygon cages in clear, night and fog; no foam at the mole.** `shots/critic22/hero_phone_crop_mole.png`, `shots/critic22/night_phone_crop_mole.png`, `shots/critic22/fog_phone_crop_mole.png`. Fix: solid painted boulders with a lit top and a wet dark base; splash at the boulders.
12. **Bushes lime lollipops with hard black blobs; a blurred dark smear along the hill ridge; pale flecks over roofs and walls.** `shots/critic22/hero_phone_crop_hill.png`, `shots/critic22/zoom300_crop_island.png`, `shots/critic22/hero_phone_crop_town.png`. Fix: clustered bushes with a soft contact shadow; remove the smear and the flecks.
13. **Dock a dark pile of blocks with the rowboat clipping its end by day; white sliver at the right end of the quay in clear and fog.** `shots/critic22/hero_phone_crop_dock.png`, `shots/critic22/hero_phone_crop_quay_right.png`, `shots/critic22/fog_phone_crop_quay_right.png`. Fix: lighter plank albedo by day with piles; move the boat off the dock; kill the sliver.
14. **The basin is cyan rather than R1's blue-violet; the hero water has one texture (diagonal brush chop) at every distance.** `shots/critic22/hero_phone_crop_bottom.png`, `shots/critic22/hero_phone_crop_water.png`, `shots/critic22/zoom120_brig_crop_water.png`. Fix: shift the deep basin toward `#1E3A7A`; vary chop scale with depth and distance.
15. **Triangles at 96.3% of the limit at high quality.** `shots/critic22/hero_phone.json`. Fix: 100 k of real headroom.

## Round 21 issues — status

| # | Round 21 issue | Status | Evidence |
|---|---|---|---|
| 1 | Khaki band across the hero's bottom third; khaki at noon and 17:30 contact, tan-cyan at 300 m and landscape, grey-tan in fog | **fixed** — gone in every framing; hero bottom rgb 0,101,135 against mid-basin 1,96,139; no crescent, edge or halo | `shots/critic22/hero_phone_crop_bottom.png`, `shots/critic22/hero_phone_crop_band_edge.png`, `shots/critic22/contact_clear_175_crop_bottom.png`, `shots/critic22/contact_clear_12_crop_sparkle.png`, `shots/critic22/landscape_crop_basin.png`, `shots/critic22/fog_phone_crop_near_water.png` |
| 2 | Night: moon sheet a white blotch; basin a navy plane; no beam; hotspot; hill black | **improved (marginal)** — a bow lantern with reflection on the brig and a warm bloom fan from the lamp onto the mole; sheet, navy plane (rgb 0,0,25), hotspot and black hill unchanged | `shots/critic22/night_phone_crop_brig.png`, `shots/critic22/night_phone_crop_mole.png`, `shots/critic22/night_phone_crop_beam.png`, `shots/critic22/night_phone_crop_basin.png`, `shots/critic22/night_phone_crop_bottom.png`, `shots/critic22/night_phone_crop_hill.png` |
| 3 | Fog one veil above a soft crescent; slate hull; dock full-strength; boulders cages; quay sliver; night-fog windows white | **improved (crescent only)** — the lower-third crescent is gone; everything else unchanged | `shots/critic22/fog_phone_crop_near_water.png`, `shots/critic22/fog_phone_crop_brig.png`, `shots/critic22/fog_phone_crop_dock.png`, `shots/critic22/fog_phone_crop_mole.png`, `shots/critic22/fog_phone_crop_quay_right.png`, `shots/critic22/contact_fog_22_crop_town.png` |
| 4 | Town at 60 m: slab grid, black shutter blocks and doors, roof repeat, flat shade, white flecks | **improved** — shutters and doors have a value on lit façades; still black on shaded walls; slab grid, roof repeat, flat shade, flecks unchanged | `shots/critic22/zoom60_town_crop_window.png`, `shots/critic22/zoom60_town_crop_door.png`, `shots/critic22/zoom60_town_crop_shade.png`, `shots/critic22/zoom60_town_crop_shutter_shade.png`, `shots/critic22/zoom60_town_crop_quay.png`, `shots/critic22/zoom60_town_crop_roof.png` |
| 5 | Noon basin a flat cyan pool with a cobalt hole; sparkle blobs with the khaki bank | **improved (bank only)** — the khaki bank is gone; pool, hole and blobs unchanged | `shots/critic22/contact_clear_12_crop_basin.png`, `shots/critic22/contact_clear_12_crop_sparkle.png` |
| 6 | 60 m wet band a flat lavender strip with a scallop row; rim a uniform outline at 1× | **improved** — foam collar with grain and streaks, scallop row gone; a hard stair-step outer edge at 3× instead; rim outline unchanged | `shots/critic22/zoom60_beach_crop_foam.png`, `shots/critic22/zoom60_beach_crop_wetband.png`, `shots/critic22/landscape_crop_left.png` |
| 7 | Dry sand a salmon blotch over a weave moiré; nothing on the beach | **unchanged** | `shots/critic22/zoom60_beach_crop_sand.png`, `shots/critic22/zoom60_beach.png` |
| 8 | Jib a detached triangle | **unchanged** | `shots/critic22/hero_phone_crop_brig.png`, `shots/critic22/zoom120_brig_crop_jib.png` |
| 9 | Palm shadow on the mainsail reads as a stain | **unchanged** | `shots/critic22/zoom120_brig_crop_sail.png` |
| 10 | Fronds flat blades in a starburst | **unchanged** | `shots/critic22/zoom60_beach_crop_fronds.png`, `shots/critic22/zoom120_brig_crop_palm.png` |
| 11 | Sky flat tan gradient; hill black with self-lit bushes | **unchanged** | `shots/critic22/sun_check_crop_sky.png`, `shots/critic22/sun_check_crop_bottom.png` |
| 12 | Mole boulders cages; no mole foam | **unchanged** | `shots/critic22/hero_phone_crop_mole.png`, `shots/critic22/night_phone_crop_mole.png`, `shots/critic22/fog_phone_crop_mole.png` |
| 13 | Bush lollipops; hill smear; white flecks over the town | **unchanged** | `shots/critic22/hero_phone_crop_hill.png`, `shots/critic22/hero_phone_crop_town.png`, `shots/critic22/zoom300_crop_island.png` |
| 14 | Dock a pile of dark blocks with the rowboat clipping it; quay sliver; floating dashes off the starboard quarter | **unchanged** — the dashes are now gunport lids, longer, still floating off the hull | `shots/critic22/hero_phone_crop_dock.png`, `shots/critic22/hero_phone_crop_quay_right.png`, `shots/critic22/fog_phone_crop_quay_right.png`, `shots/critic22/zoom120_brig_crop_stern.png` |
| 15 | Deep water flat at 300 m; basin cyan not blue-violet; no bow foam or reflection; triangles at 97.1% | **improved (budget only)** — triangles down to 96.3%; the water items unchanged | `shots/critic22/zoom300_crop_deep.png`, `shots/critic22/hero_phone_crop_water.png`, `shots/critic22/zoom120_brig_crop_bow.png`, `shots/critic22/hero_phone.json` |

Builder claims not on the round 21 list: "no crease ring across the harbour mouth" — confirmed absent at
300 m and in landscape (`shots/critic22/landscape_crop_basin.png`, `shots/critic22/zoom300.png`); "gun
barrels inboard" — confirmed (`shots/critic22/zoom120_brig_crop_deck.png`); "gunport lids hinged in place"
— not confirmed, the lids float off the hull (`shots/critic22/zoom120_brig_crop_stern.png`).

## Budget lines (from `shots/critic22/*.json`)

| Shot | errors | warnings | calls | triangles | tex MB | frameMs p50 (smoke) | exposure |
|---|---|---|---|---|---|---|---|
| hero_phone (dpr 2) | 0 | 1 | 156 | 1,444,731 | 41.3 | 6.9 | 0.252 |
| night_phone (dpr 2) | 0 | 1 | 156 | 1,444,731 | 41.3 | 6.6 | 6.183 |
| contact ×6 (medium, 1×) | 0 | 1 each | 156 | 1,056,683 | 41.3 | 6.4–10.5 | 0.081 / 0.252 / 6.183 / 0.106 / 0.304 / 16.046 |
| zoom60_town (desktop) | 0 | 1 | 109 | 1,420,585 | 41.3 | 7.2 | 0.252 |
| zoom120_brig (desktop) | 0 | 1 | 146 | 1,444,321 | 41.3 | 8.7 | 0.252 |
| zoom60_beach (desktop) | 0 | 1 | 113 | 1,426,797 | 41.3 | 6.2 | 0.252 |
| zoom300 (1×) | 0 | 1 | 156 | 1,444,731 | 41.3 | 8.5 | 0.252 |
| fog_phone (dpr 2) | 0 | 1 | 156 | 1,444,731 | 41.3 | 7.3 | 0.304 |
| landscape (1×) | 0 | 1 | 156 | 1,444,731 | 41.3 | 8.1 | 0.252 |
| sun_check (1×) | 0 | 1 | 156 | 1,444,731 | 41.3 | 6.8 | 0.252 |

Limits: 300 calls, 1.5 M triangles, 256 MB. All within; high quality at 96.3% of the triangle limit, down
from 97.1% in round 21. The one warning is
`THREE.WebGLRenderer: KHR_parallel_shader_compile extension not supported` (environment). Device fps: not
measured.

## Still missing for a pass (one line per rubric line below 8.5)

- **Materials (7.0):** irregular slabs; shutters and doors with a value on shaded walls; a non-repeating roof; sand grain; leaflets; solid boulders; a plank dock by day; bounce in shade.
- **Light (7.5):** a moon glitter path with a beam that lights the water; moonlight on the hill; fog shadows stopped down; bushes lit like the ground; a banded noon basin without a hole; a shadow on the sail that reads as one.
- **Atmosphere (7.5):** distance-keyed fog layers; fog on the hull, dock and boulders; a painted sky.
- **Water (7.5):** lace at the quay and mole; a seabed-depth band across the basin; broken reflections; bow and mole foam; a soft collar edge; the quay sliver gone; swell at 300 m; capped noon sparkle; a moon path.
- **Scale and motion (7.5):** lids on the hull; a jib on the forestay; a lighter dock; no flecks; a motion capture.
- **Composition (7.5):** a second value in the basin (lace, reflections); moon glitter on the near water; fog with depth; something on the beach.
- **Programmer art (7.5):** clear the marginals (slab/roof tiling and sand moiré, the 300 m plane and noon pool, single-veil fog, the stair-step collar edge).

## Verdict

**FAIL.** Lowest line: materials at 7.0; then light, atmosphere, water, scale and motion, composition and
the programmer-art checklist at 7.5; only budget and errors (8.5) clears the bar. Three lines moved up by
half a point — water, composition and programmer art — and all three for the same reason: the khaki band
that has sat across the hero's bottom third since round 18 is gone, cleanly, in every framing, and with
it the noon bank, the harbour-mouth wash and the fog crescent. That is the first structural fix in four
rounds and it changes the hero at squint from a warm-over-khaki-over-cyan stack into the warm-town-over-
cool-basin picture R1 asks for. Of the round's other claims, three land (no crease ring, guns inboard, a
grainy foam collar replacing the scalloped strip), two are partial (mid-value shutters and doors on lit
walls only; a bloom fan on the mole rather than a beam) and one does not land (the gunport lids still
float off the hull). What the fix exposes is the next problem: the basin at 120 m is now one clean
turquoise plane with nothing in it — no lace at the quay wall or mole, no depth band, no reflection, no
foam — so the water is correct rather than painted. Against Sea of Conquest this build has the town, the
light and the ship; it is missing the water's second value, the night's glitter and beam, the fog's depth,
and the material irregularity at 60 m that separates AAA from good indie.
