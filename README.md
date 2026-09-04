# Ocean — look test (phase 1)

One island port, one anchored brig, three times of day, clear and fog. The
brief is `prototype_prompt.txt`; the look bible is `LOOK.md`; decisions in
`docs/DECISIONS.md`; critic scores in `docs/STATUS.json`; assets in
`assets/CREDITS.md`.

```
npm install
npm run textures      # bakes the procedural PBR sets to public/textures (~12 min)
npm run dev           # http://127.0.0.1:5173/
```

Scene spec via URL: `?time=17.5&weather=clear|fog&zoom=60|120|300&quality=low|medium|high&t=12&pause=1&hud=1&hide=ocean,shadows`

Screenshots (needs the dev server running):

```
node tools/shoot.mjs --out shots/hero                       # phone 390x844 @3
node tools/shoot.mjs --out shots/x --device desktop --zoom 60
node tools/shoot.mjs --contact --out shots/contact           # 3 times x 2 weathers
```

Each shot writes `.png` and `.json` (console errors, draw calls, triangles,
texture MB, frame-time percentiles labelled headless-smoke-only, budget lines).
