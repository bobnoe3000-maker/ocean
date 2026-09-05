# Decisions and assumptions (phase 1 look test)

Recorded as they were made. Newest at the bottom.

1. **Egress policy blocks the photographic asset sources.** `polyhaven.com`,
   `dl.polyhaven.org`, `ambientcg.com`, `sketchfab.com`, `cdn.jsdelivr.net`,
   `unpkg.com`, `huggingface.co`, `archive.org` and every other texture host
   probed answer 403 on CONNECT from this session's proxy. Reachable:
   `registry.npmjs.org` and `raw.githubusercontent.com`. Consequence: every PBR
   set is procedural (`tools/gen-textures.mjs`), authored to carry the wear story
   of the intended set named in `LOOK.md` §5. When the hosts open, the sets drop
   in by file name. This is reported, not routed around.
2. **KTX2 pipeline.** The Basis Universal WASM encoder (Apache-2.0, fetched from
   the BinomialLLC GitHub raw tree into `tools/vendor/`, gitignored) encodes
   PNG → KTX2 UASTC + Zstd with mipmaps. Three's `KTX2Loader` transcodes to
   ASTC/ETC2 on mobile and BC7 on desktop. Generated textures are gitignored;
   `npm run textures` rebuilds them (about 12 minutes on 4 cores).
3. **Headless GPU.** Chromium runs on SwiftShader (ANGLE Vulkan). It supports
   WebGL2, float render targets and every compressed format, but one 3× DPR
   portrait frame takes seconds. Frame times in `shoot.mjs` JSON are labelled
   `headless_smoke_only`. Device fps is reported as **not measured**; no real
   device was reachable from this session.
4. **One atmosphere model everywhere.** Sky dome, sun colour, environment map
   (PMREM of the dome without the sun disc plus a ground-bounce disc), fog
   inscatter colours and exposure all come from the same single-scattering
   model (`src/core/Atmosphere.ts`, GLSL and TS ports). Fog is a height-fog
   integral with a sun-forward phase, not a single colour.
5. **Sun path.** Latitude 30 N, declination +12: 12:00 → 72°, 17:30 → 12.4°,
   sunset 18:40, so 22:00 is fully dark with a gibbous moon at 40°. The vista is
   rotated so the camera looks along azimuth 250 and the 17:30 sun sits 27° to
   the right of the view axis: side-lit walls, long shadows to the left, glitter
   path on the right.
6. **Exposure** is keyed automatically to the horizontal lambertian white under
   sun + sky (+ moon at night), then tone mapped with AgX. This is the
   "eye adaptation" the time-of-day sheet asks for; at 22:00 it sits about
   +8 EV above 17:30.
7. **Camera**: vertical FOV 50°, pitch 58°, zoom = visible width in metres at
   the target for portrait (aspect clamped to ≥ 390/844 for landscape and
   desktop so the width stays the same and the desktop preset is a real zoom-in).
8. **Anchored brig airs its topsails** (topsails set, courses and topgallants
   furled, spanker and jib set) so sails and flags still move as the rubric
   requires while the ship is plausibly at anchor, bow to the wind.
9. **Reversed-argument `smoothstep`** is undefined in GLSL and misrenders on
   ANGLE; all such calls were rewritten as `1 - smoothstep(lo, hi, x)`.
10. **Budget accounting.** Draw calls and triangles come from `renderer.info`
    with auto-reset disabled so all post-processing passes are counted. Texture
    memory is the sum of KTX2 mip payloads plus 4 bytes × pixels × 1.33 for
    uncompressed textures; render targets are not included.
11. **Shadows**: one 4096² PCF cascade fitted to the visible footprint (2048²
    medium, 1024² low). No PCSS yet; "softer with distance" is on the open list.
12. **Fog is a bank, not a veil.** With the camera 240 m above the water, a
    uniform layer reads as a flat sheet from above. The fog preset is a shallow
    (16 m scale height), dense layer whose density is modulated by a wind-drifted
    noise field, so mist pools over the basin, thins over the town and leaves
    the hills and mast tops clear (R4 layering). Exposure in fog keys on the
    clear-sky sun so the bank stays luminous without blowing out.
13. **Headless shots read the canvas directly** (`toDataURL` in the same task as
    the render) because Playwright's compositor capture exceeded ten minutes at
    3× DPR on SwiftShader. Critic shots run against a static `vite build`
    served on port 5174 so builder edits on the dev server never reload a page
    mid-capture.
14. **Whitecaps come from the swell Jacobian only.** Including the chop waves in
    the Jacobian made foam speckle the whole basin at 6 m/s.
15. **Shore masks read a 1 m heightfield texture, not the vertex height.** The
    terrain mesh (2.2 m at high) interpolates height linearly per triangle, so
    the waterline, wet band and foam followed a polyline and stair-stepped.
    Sampling the 1024² half-float heightfield gives a smooth contour at no
    mesh cost; the same texture drives water depth.
16. **Terrace walls and outcrops are painted, not modelled.** Retaining walls
    on the slope behind the town are stone stripes along height contours of
    the heightfield texture; outcrops are noise patches of the rock set.
    Geometric walls would need a 1 m mesh over the whole slope.
17. **Hero pitch 52°.** The brief says 58°; at 240 m altitude that reads as a
    map (critic round 1). 52° stays inside the full spec's 50–65° range and
    keeps the top-down read while façades and the slope show. `pitch` is a
    scene-spec parameter so the critic can check the horizon at 30°.
18. **Vertical FOV 60°.** With 50° no preset could ever show the horizon
    (critic round 2 checked pitch 30). At 60° the horizon enters the frame
    below pitch 30°, so the sky and sun disc can be judged at `pitch=25`
    while the hero stays at 52°.
19. **Shadow light size is four times the sun's angular diameter.** The true
    0.53° gives a 7 cm penumbra on an 8 m palm, invisible at 10 px/m. The
    exaggeration makes mast and cliff shadow tips visibly soften with
    distance, which the rubric asks for.
20. **Water detail normals are wind-aligned and anisotropic**, sampled in a
    frame rotated to the wind so ripples read as streaks, and the far field
    hands over to a 140 m octave so no lattice repeats at 300 m. Glints come
    from the GGX lobe of a smooth sea (roughness 0.06), not an added term.
21. **Vegetation is alpha cards.** Palm fronds are three-segment strips with a
    procedural frond card; bushes are three or four crossed leaf-cluster cards
    plus a top card. Shadows use alpha-tested depth materials.
22. **Ocean grid reaches 24 km** on a centre-dense grid so the horizon is
    water, not a mesh edge; beyond 1.5 km the detail normals fade so the far
    sea goes glassy and hands the horizon to aerial perspective.
23. **`yaw` and `pitch` scene parameters** exist for the critic only: the hero
    keeps a fixed yaw, but the atmosphere lines (sun disc, horizon gradient,
    glitter path) can only be judged looking toward the sun, e.g.
    `pitch=14 yaw=135 zoom=300` at 17:30.
24. **The cliff rises behind a shore apron.** Any slope steeper than the mesh
    can resolve (about 1:1.5 at 2.2 m vertices) crosses the water plane as a
    sawtooth. The plateau term is now masked to zero within 34 m of the coast,
    so the shore is always a gentle rock-and-sand apron and the cliff face
    starts inland. Geometric terrace steps were removed for the same reason.
25. **Fog bank plus haze.** The patchy bank alone made the far hills sharper
    than the near water (critic round 3 read it as inverted depth). A uniform
    haze term (0.0035/m, about 850 m visibility) restores distance fall-off
    underneath the bank.
26. **Island form.** Wide presets showed a single sand mound. A rocky western
    headland and a northern ridge spine give the island two shoulders and a
    crest; both are soft-max blended so the coast stays smooth.
27. **Exposure stops down when the sun disc is in frame** (about -1.5 EV,
    view dependent) so the sun-facing sky keeps its gradient; the hero view,
    with the sun behind the camera, is unaffected.
28. **Planar reflections** (medium and high tiers). The scene is rendered once
    more per frame from the camera mirrored in the water plane, at 0.35–0.5
    resolution, water hidden, clipped at the plane, after the main pass so the
    shadow map of the frame is reused (one frame of lag is invisible on a fixed
    camera). The ocean shader replaces its sky-only indirect specular with the
    mirror image, perturbed by the surface normal, wherever the image has
    content; halved at night so the moon glow does not blotch. Roughly +50
    draw calls; the low tier keeps the sky-only reflection.
29. **Style switch for the look comparison.** `style=stylized` changes only
    three things on top of the same scene and lighting: the water becomes a
    banded depth gradient with painted foam rims and a mostly opaque body,
    the brig and gulls scale 1.7x and 1.6x, and the grade adds saturation,
    contrast and bloom. Everything else (PBR materials, PCSS shadows, IBL,
    town, terrain) is untouched, so the side-by-side isolates the art
    direction question from the tech.
30. **Direction changed to stylised realism** after six physically based
    rounds plateaued at 4.5 to 6.5. The user chose it on the side-by-side
    frame (`shots/compare/side_by_side.png`). What changes: painted-look
    texture sets (`TEX_STYLE=painted`: albedo softened and saturated, normals
    at half strength), a banded water gradient with an authored foam collar
    and lace, sails as curved cloth meshes with the belly baked into the
    geometry, sculpted ribbon fronds and blob bushes instead of cards, 1.7x
    ship scale, a lighter cooler haze instead of a fog bank, and a saturated
    grade. What does not change: the atmosphere model, PCSS shadows,
    image-based lighting, the town, the terrain and the harness. `style=real`
    keeps the old look for comparison.
31. **Shoreline from the rest water level.** Three rounds of sawtooth at the
    beach had one cause: the ocean fragment's depth was taken from the
    wave-displaced surface, so any triangle lifted by swell was drawn over the
    sand as a pale tooth and cut off at its neighbour's edge. Depth (and so
    the alpha cut, the collar and the banding) now comes from sea level minus
    the 1 m heightfield texture, which is smooth; the terrain-side wash still
    paints the run-up. The same pass eases the planar reflection under a high
    sun (the noon basin was a white sky sheet smeared by the chop) and cuts
    the water's sky-lit specular floor at night so the basin sits near black
    with only the moon path and the lanterns reading, as in R2.
32. **Painted sky tint over the physical sky.** The single-scattering model
    gives an olive-yellow dome at 17:30 and never the cobalt zenith and rose
    belt of R1/R5. In the stylised style the sky shader keeps the physical
    luminance and pulls the hue toward a painted gradient (cobalt zenith,
    rose belt low on the sun's side, warm horizon), fading with twilight.
    The same shader renders the IBL, so shaded walls pick up the blue. The
    haze now starts 70 m from the camera (near chop and rigging stay crisp)
    and thins and cools under a high sun so the noon mist is a layer, not a
    grey sheet. `style=real` is untouched.
33. **Round 10 forensics.** Three long-running checklist hits turned out to
    have mechanical causes rather than art ones. The "milky haze at 60 m"
    was the chimney smoke: large low-alpha point sprites lying over the
    roofs (now smaller, thinner and rising faster). The floating chests were
    crates rotated with `rotateY` after being translated, which swings them
    around the world origin (now rotated about their own centre). The
    returning beach sawtooth was the shore clamp lifting ocean vertices that
    sit over land, which drew a sheet above the sand from the tilted camera
    (land vertices now sit flat at sea level; only vertices over water are
    clamped to the bed). Reading the crops before touching the art saved a
    round each.
34. **Shore slivers and a shader lesson.** The last beach sawtooth was the
    terrain's own 2 m grid: on a steep shore its triangles interpolate above
    sea level where the smooth 1 m heightfield is below it, so pale sand
    slivers stand above the water plane in a tooth pattern. The terrain
    fragment now discards those slivers (heightfield below sea level, mesh
    above it) and the water covers them. Diagnosing it needed the compiled
    fragment shader dumped from the browser, which also caught a build where
    a line comment appended mid-statement had swallowed a closing brace and
    silently removed the whole terrain: GLSL edits are checked with a
    dev-server shot and its console log before any build is judged.
35. **Mirror images read as shadows.** Round 11 saw "three shadow
    directions" in the hero: the tower's real shadow, plus the dock's and
    the brig's planar reflections, which from a 52-degree camera stretch
    away from the object like hard dark shadows in the wrong direction. The
    stylised style now blends the mirror at 0.45 (0.07 at night) so
    reflections stay a soft tint under the IBL, which is how R1 treats
    them. The discarded shore slivers from decision 34 also went back: an
    ocean fragment of 10 percent alpha over a discarded seabed showed the
    clear colour as a pale ledge. The slivers are now painted as the water
    beside them (shallow body and the same collar) so the eye reads the
    smooth heightfield contour.
