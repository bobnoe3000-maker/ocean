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
