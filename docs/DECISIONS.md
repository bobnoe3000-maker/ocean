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
