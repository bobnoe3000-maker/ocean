# Phase 1 look test — report

Every score below is the critic's, taken from `docs/critic/round*.json`.
Nothing is a builder self-score. Screenshot evidence for each claim is in the
round reports under `docs/critic/` and the frames under `shots/critic*/`.

## Outcome

**The look test did not pass.** Six build-judge rounds were run, the maximum
the brief allows. The final round scores 6.5 on materials, light, scale and
motion and composition, 5.5 on water, 5.0 on atmosphere, 8.5 on budget and
errors, and 4.5 on the programmer-art checklist, which still carries four hits
and is therefore an automatic fail. Console errors were zero in every shot of
every round. On the critic's own scale the world moved from programmer art
(3.0 to 5.0 in round 1) to a competent indie diorama under good light; it is
not AAA and is not close to Sea of Conquest, Dredge or the Symi photograph.

## Scores by round

| Line | R1 | R2 | R3 | R4 | R5 | R6 |
|---|---|---|---|---|---|---|
| Materials | 4.5 | 5.0 | 5.5 | 5.5 | 6.0 | 6.5 |
| Light | 5.0 | 5.5 | 6.0 | 6.5 | 7.0 | 6.5 |
| Atmosphere | 4.0 | 4.5 | 4.5 | 4.5 | 5.0 | 5.0 |
| Water | 3.5 | 4.0 | 4.5 | 4.5 | 5.0 | 5.5 |
| Scale and motion | 5.0 | 5.5 | 6.0 | 6.0 | 6.0 | 6.5 |
| Composition | 4.5 | 5.0 | 5.5 | 6.0 | 6.5 | 6.5 |
| Budget and errors | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 |
| Programmer-art checklist | 3.0 | 3.5 | 4.0 | 4.0 | 4.5 | 4.5 |

Pass requires every line at or above 8.5 with zero console errors.

Stylised-realism rounds (scored against Sea of Conquest R1/R2):

| Line | R7 | R8 | R9 | R10 | R11 | R12 | R13 | R14 | R15 |
|---|---|---|---|---|---|---|---|---|---|
| Materials | 6.5 | 6.5 | 6.5 | 7.0 | 7.0 | 7.0 | 7.0 | 6.5 | 6.5 |
| Light | 5.5 | 6.5 | 6.5 | 6.5 | 6.5 | 7.0 | 7.5 | 7.5 | 7.5 |
| Atmosphere | 4.5 | 5.0 | 5.5 | 5.5 | 6.0 | 6.5 | 6.5 | 6.5 | 7.0 |
| Water | 6.0 | 5.5 | 6.0 | 7.0 | 6.5 | 6.5 | 7.0 | 7.0 | 7.5 |
| Scale and motion | 6.5 | 6.5 | 6.5 | 6.5 | 7.0 | 7.5 | 7.5 | 7.5 | 7.5 |
| Composition | 7.0 | 7.0 | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 | 7.5 |
| Budget and errors | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 | 8.5 |
| Programmer-art checklist | 3.5 | 4.0 | 4.5 | 5.0 | 5.0 | 5.5 | 6.5 | 6.0 | 6.5 |

## What the critic still lists as missing for a pass (round 6, verbatim)

- materials (6.5): cloth sails and flag with weave, seams and belly; a modelled lantern and rails with thickness; irregular wet-banded quay stones with a blended apron; eaves; sculpted rock on the slope; sand macro variation and debris
- light (6.5): a night basin dark outside a narrow roughness-driven moon path; amber-varied windows; violet sky fill and warm ground bounce in the 17:30 shade; a glitter path that does not clip
- atmosphere (5.0): a scattering sky with blue zenith and rose belt; fog density rising with camera distance and shifting each layer bluer (R4) instead of one tone; lower-albedo noon fog; no fog cards intersecting terrain
- water (5.5): swell plus chop octaves with a distance fade so nothing tiles at 300 m; a filtered, registered reflection of hull, quay and lighthouse broken by the normal; white crest and shore/mole foam; no confetti and no comet
- scale_motion (6.5): props clamped to land; wind-filled sail geometry; smoke and scrub with volume; a motion capture proving palms, sails, flags, smoke and gulls move
- composition (6.5): a horizon band in the hero and landscape framing; a modelled hillside and cliff instead of a contour map; a night thumbnail owned by the lanterns; fog cells with depth layers
- programmer_art (4.5): clear all four hits: flat sails/flag/lamp/rails/yard; water lattice and beach grain; the noon foam comet; one-colour fog

## Highest-ranked open issues at the end (round 6)

- Water is a single-scale diagonal lattice in the hero's lower third and at 300 m; noon glitter is confetti with the foam comet; sun-check glitter clips
- Night basin regressed: moon light is a high-contrast silver churn over the whole basin, brighter than the lanterns
- Fog is one grey-blue tone; near water blank, far town sharpest; noon fog a white sheet
- Sails are flat quads with a dithered shadow band; pennant a textureless quad
- Hull reflection is a blocky, nearest-upsampled, detached patch that reads as a bug
- Sky is a monotone warm-grey haze; a fog sheet intersects the near terrain in the sun check
- Hillside still has contour lines drawn on it; outcrops are flat grey-green blotches; no north cliff
- Crates float on the water beside the dock and off the beach

## Budget (round 6 hero, phone 2x, high tier)

| Line | Limit | Measured |
|---|---|---|
| Draw calls | 300 | 156 |
| Triangles | 1.5 M | 1307287 (medium tier 900975) |
| Texture memory | 256 MB | 45.3 MB |
| Device fps | 60 sustained, 30 floor | **not measured**: no reference device was reachable from this session; headless SwiftShader frame times are smoke only |

## Environment limitations that shaped the result

- `polyhaven.com`, `ambientcg.com` and `sketchfab.com` are denied by the
  session's egress policy (403 on CONNECT), so every PBR set is procedural.
  The materials line was capped by this from the start; the intended sets are
  named in `LOOK.md` and drop in by file name.
- Rendering is SwiftShader (software). A 3x-DPR phone frame at the high tier
  exceeds the practical capture time, so the critic judged 2x phone frames and
  1x 1080p desktop close-ups. Motion (sails, flags, palms, gulls, smoke) could
  only be judged from stills and was never credited.
- No device was reachable, so the fps budget line is reported as not measured
  in every round rather than as a pass.
- Each critic round costs about an hour of wall time on this renderer, which
  bounded the work to the six rounds the brief allows.

## What moved, and what did not

Fixed across the rounds: PCSS shadows that actually ship in the production
bundle (round 1 shipped hard shadows because the bundle strips the GLSL
comment the patch keyed on); the stair-stepped east shore; fog that exists at
noon and night; the placeholder tower; identical bushes; the floating props;
the flat-quad lighthouse beam; the sky-without-sun (the disc is now verified
at 12.4 degrees); the uniform foam stipple, which turned out to be sun glints
from an over-steep normal octave rather than foam.

Never cleared: sails read as flat quads from a 52 degree camera; the far water
tiles at 300 m; fog stays one tone; the noon foam streak off the mole tip;
the hillside reads as a contour map rather than sculpted rock; the sky is a
warm haze without a blue zenith or rose belt in the one view that shows it.

## Direction change: stylised realism (rounds 7 onward)

After round 6 the user reviewed a side-by-side of the physically based hero
against a stylised-realism variant (`shots/compare/side_by_side.png`) and
chose stylised realism in the manner of Sea of Conquest. Rounds 7 onward are
scored against that reference. Round 7 (first stylised build): materials 6.5,
light 5.5, atmosphere 4.5, water 6.0, scale and motion 6.5, composition 7.0,
budget 8.5, checklist 3.5; water and composition rose, light fell because the
night basin flooded, and the checklist picked up new hits (stair-stepped
shore, faceted bushes, flat sand) that the round 8 build addresses. Later
rounds are appended to the score table in `docs/STATUS.json`.

## What phase 2 needs before this look can pass

1. Photographic PBR sets from the sources the brief names. The procedural
   stand-ins are the ceiling on materials and on half the checklist hits.
2. A real device in the loop. Fps was never measured, and the SwiftShader
   iteration cost (an hour per critic round) is the main reason six rounds
   did not converge.
3. An FFT or multi-octave spectrum ocean with a screen-space or filtered
   planar reflection and Jacobian foam. The Gerstner-plus-normal-map water
   was rewritten three times and never got above 5.5.
4. Sails as simulated or pre-deformed cloth meshes with thickness, not planes,
   and a night light rig where lanterns, not the moon, own the basin.
5. A sculpted island mesh at 1 m near the shore and the town, so terraces,
   cliffs and rock are geometry rather than painted contours.
6. A ray-marched or LUT atmosphere with multiple scattering and a height fog
   volume that layers with distance, judged in views that contain the sky.
