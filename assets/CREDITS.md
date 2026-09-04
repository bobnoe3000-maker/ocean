# Asset credits

Nothing ships that is not listed here.

| Asset | Source | Licence | Notes |
|---|---|---|---|
| `public/textures/*.ktx2` (sand, rock, scrub, planks, hull, plaster, tiles, canvas, rope, stone, bark, frond, waternormal, foam, noise, moon) | Procedural, `tools/gen-textures.mjs` (this repo) | CC0 | Stand-ins for the Poly Haven / ambientCG sets named in `LOOK.md` §5, which are unreachable from this environment (see `docs/DECISIONS.md` #1) |
| `public/textures/png/smoke.png` | Procedural, `tools/gen-textures.mjs` | CC0 | Sprite |
| `public/basis/basis_transcoder.{js,wasm}` | three.js `examples/jsm/libs/basis` (Binomial LLC) | Apache-2.0 | KTX2 transcoder |
| `tools/vendor/basis_encoder.{cjs,wasm}` (not shipped, gitignored) | github.com/BinomialLLC/basis_universal `webgl/encoder/build` | Apache-2.0 | Build-time encoder |
| Ship, buildings, palms, dock, lighthouse, props, gulls | Procedural geometry (this repo) | CC0 | No asset kits |
| Sky, stars, moon disc | Procedural (this repo) | CC0 | |

No HDRI is used: image-based lighting is baked from the procedural sky.
