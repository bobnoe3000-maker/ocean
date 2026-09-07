# Living World

Four systems run the Hearth whether or not the hero is on screen: **people** (schedules and memory), **powers** (the faction simulation), **time** (day, week, season, weather) and **consequence** (how a choice is recorded, propagated and shown). Each is specified below as inputs, state, tick, outputs and a worked example. The world they simulate is [WORLD.md](../world/WORLD.md); the quests they feed are made by the [Adventure Engine](ADVENTURE_ENGINE.md); how the player sees them is in [SESSION_UX](SESSION_UX.md); the concrete first-region instance is in [FIRST_REGION](../slice/FIRST_REGION.md).

One clock drives everything. The **world-tick** is one world hour. Systems that need finer time (combat) run inside a world hour; systems that need coarser time (powers) act at dawn on the day-tick.

---

## 1. Time and seasons

### Inputs
Real time elapsed in session (hero in the open); map travel (distance ÷ speed); rest (to next dawn); real time elapsed offline.

### State
`world_clock` (year, season 1–4, day 1–90, hour 0–23); `weather[region]` (clear, rain, storm, snow, fog; set per region per day); `season_flags` (roads_slow, fields_busy, passes_closed, shelf_dry, festival_today).

### Tick
- **In the open** (walking a site, fighting, exploring a dungeon): one world hour per two real minutes. Paused in dialogue, shops, menus, the journal, the map.
- **Map travel** between sites: instant for the player; the clock advances by distance ÷ speed. Road 3 miles per hour; Wend or Shelf 2; either at half speed when `roads_slow`. Sallowford to Wickery (8 miles, road) is 3 hours; to Fenn's Mill (2 miles) is 1.
- **Rest** at an inn, home or camp: to the next dawn (6:00).
- **Offline**: four world hours per real hour away, to a cap of seven world days per absence. Ten minutes away is nothing; six hours is a day; a week is seven days; a month is also seven days. The cap is a design rule: the world moves without you, but it cannot end without you.
- **Dawn (6:00)**: the day-tick. Weather is rolled per region (Thaw: 40% rain, 10% storm, 10% fog; Green: 15% rain, 5% storm; Reap: 30% rain, 20% storm; Hold: 40% snow, 20% fog), then modified by the stones (a kept ring: −1 storm per season in its valley; unkept: +1). Season flags are recomputed. Then powers move (section 3). Then every NPC's memory decays (section 2).
- **Season roll** (day 90 → day 1): festival day set; the Quarter-day (Thaw 1) and Reckoning (Reap 60) fire their debt events; the Still's low-mark drops one finger and one Shelf site's `water_level` state flips from *drowned* to *surfaced* if any is due.

### Outputs
The clock and weather glyphs on the top strip; road speeds; who is where (schedules read the hour); which shops are open; which quests are possible (the engine reads `season_flags`); the "while you were away" page (section 4).

### Worked example
*Before:* Thaw 3, 611 C., 14:00. Hero at Sallowford. Weather in the Rudd valley: rain. `roads_slow` on. Player closes the app.
*Tick:* Player returns nineteen real hours later. Offline advance = 19 × 4 = 76 hours → clamped by nothing (cap is 168). Clock becomes Thaw 6, 18:00. Three dawns have passed: three weather rolls (rain, clear, fog), three power moves each for five powers, three memory decays.
*After:* Thaw 6, 18:00, fog. The hewers' dam upstream (a Holds move on Thaw 4) has lowered the Rudd at Fenn's Mill; Bram Fenwright's schedule has switched from *milling* to *idle-angry* (his mill state is `wheel_stopped`). The Wrack sent a band to the Rudd Bridge on Thaw 5 and it is still there.
*What the player sees:* the "While you were away" page: "Three days. Rain, then clear, then fog tonight. The mill at Fenn's has stopped: the Skerrow have dammed the Rudd above the Wend. Men with knives are camped at the Rudd Bridge. Idony Sallow asked after you twice." Then the field, at dusk, in fog.

---

## 2. People: schedules and memory

Every named NPC (twenty in the first region; see [FIRST_REGION](../slice/FIRST_REGION.md) §3) has a schedule, a memory, and a role in a power (or none). Unnamed folk ("a carter", "two fishers") are drawn from name tables when the engine needs them to speak, and then become named and keep a memory like anyone else (the engine promotes them; see [ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §3).

### Inputs
World hour; season flags; the NPC's home site, workplace and haunts; the NPC's `condition` (well, hurt, indebted, bereaved, ruined, fled, dead); events witnessed or heard (from the consequence system).

### State
Per NPC:
- `schedule`: a table of hour-ranges → (site, activity), with a weekday variant and a Stillday variant, and overrides by `condition` and by season flag. Example, Garrow Tull the smith: 6–18 forge (Sallowford), 18–21 the Ford Inn, 21–6 home; Stillday: 8–11 militia drill at the ford, then inn. Override, `condition = hurt`: home all day.
- `memory`: up to eight entries of `(subject, act, weight 1–10, day, told_by)`. Subject is an NPC, the hero, or a power. Act is a tag from the deed table (helped, harmed, saved, robbed, witnessed, paid, cheated, killed_kin, fought_beside, lied_to, defended_site …). Weight is set by the deed table. When a ninth memory arrives the lowest-weight one is dropped.
- `regard[hero]`: −100..+100, the sum of hero-memory weights signed by whether the act was for or against this NPC or their power, decayed with the memories.
- `reach`: how many people this NPC talks to in a week: folk 1, tradesperson 2, notable (innkeeper, herb-wife, militia captain, keeper) 5, reeve, factor or Speaker of the Quiet 20, power leader 100. Reach is what standing is made of ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5).

### Tick
- **Each world hour**: place the NPC per schedule (with overrides). If two NPCs are at the same site in the same hour, they *meet*. On a meeting, each passes their strongest hero-memory (and their strongest power-memory) to the other with probability 0.3, at weight −2 (minimum 1), tagged `told_by`. Notices on a town board give weight 3 to every NPC whose schedule passes the board that day.
- **Each dawn**: memories of weight 1–5 lose one weight every ten days; weight 6–9 every thirty days; weight 10 (kin killed, home saved, home burned, a Skerrow contract broken) never decays. A memory at weight 0 is gone.
- **On event**: the consequence system (section 4) writes memories directly to witnesses and to the NPCs the deed table names (a debt paid writes to the factor; a sheep found writes to the shepherd and his master).

### Outputs
- **Where people are** when the hero arrives (the smith is at the inn at dusk; the reeve is at the Moot on Stillday).
- **Greeting line**: picked by the NPC's strongest hero-memory and `regard`. Tiers: *no memory* ("Morning."); *heard* (`told_by` set, weight ≤ 3: "You're the one Osk talks about."); *knows* (weight 4–7: "Good to see you. How's the arm?"); *owes* (weight ≥ 8 for: "Whatever you need."); *hates* (weight ≥ 8 against: "Get out of my shop.").
- **Price and access**: shop prices scale by `regard`: +20% at −50 or worse, −10% at +50 or better, refused at −80. Doors: an NPC at *owes* will hide the hero, lend a boat, give a key; at *hates* will report the hero to their power.
- **Rumours**: a meeting that passes a memory also generates a rumour line for the journal if the hero is at the site ("Heard at the Ford Inn: the miller says the Skerrow dammed the Rudd").

### Worked example
*Before:* Thaw 2, 9:00. Tobbin (shepherd, folk, reach 1) has memory `(hero, helped_find_flock, 6, Thaw 1)`. Reyne Gorse (militia captain, reach 5) has no hero-memory. Reyne's regard for the hero is 0.
*Tick:* 9:00–10:00 both are at Gorse End (Tobbin's schedule: 6–12 the Gorse End pasture; Reyne's: 8–12 the Gorse End yard). They meet. Roll 0.3: pass. Reyne gains `(hero, helped_find_flock, 4, Thaw 2, told_by Tobbin)`. Regard for the hero: +4.
*After:* Reyne carries a weight-4 memory. At 13:00 he walks to the Ford Inn (his schedule) and meets Jory Quill? No — Jory is in Wickery; he meets Garrow Tull (reach 2). Roll: fail. At dawn Thaw 12 the memory decays to 3.
*What the player sees:* Walking into Gorse End yard on Thaw 2 afternoon, Reyne, who has never spoken to the hero, says: "You're the one who fetched the boy's sheep off the Shelf. Not everyone would go down there." The hero's standing meter has risen by 5 (Reyne's reach). If the hero comes back on Thaw 15 without any new deed, Reyne says "Morning. Sheep again, is it?" — the *heard* line at weight 3.

---

## 3. Powers: the faction simulation

Five powers ([WORLD.md](../world/WORLD.md) §2.4). Each is a small planner that acts at dawn.

### Inputs
Season flags; every site's `control`, `sway` and `damage`; each power's own resources; the debt ledger (which farms and towns owe the Stair how much); the hero's `regard` with the power and the hero's standing tier (only to decide whether to *address* the hero; never to decide whether to act).

### State
Per power:
- `coin` (marks). Moot 0 (they have a debt, not a treasury), Stair 4,000, Holds 600, Quiet 0, Wrack 120 at game start.
- `arms`: bands. A band is six fighters with a quality 1–3 (militia 1, Chain or hewers 2, Salted-led Wrack 2, a court's Salted 3). Start: Moot 6 bands (seasonal: halved when `fields_busy`), Stair 5, Holds 4, Quiet 1 (stone-wardens), Wrack 5.
- `sites`: list of held sites with `sway` 0–100 (how much the site's people do what the power says). A site is *controlled* by the power with sway ≥ 60.
- `goals`: three, ranked, from the power's agenda; each goal names a site type or a power and a condition ("no Stair toll-house on the Ring Road"; "hold debt on ≥ 70% of Lowmark farms"; "hewers' camp in the Rudd Wend"; "Sunk Court layer 2 unrobbed"; "Wickery's counting-house burned").
- `moves`: the move list, common to all with power-specific entries: **Raise band** (coin → arms; 40 marks per band, needs a held site with sway ≥ 60), **Send band** (to any site within two days' march), **Build** (60 marks and a band on site: three days for a dam, palisade or camp; five for a toll-house of stone), **Buy debt / Call debt** (Stair only), **Levy** (Moot only: raise militia at a town with sway ≥ 60; costs sway 10 at harvest), **Fell** (Holds only: turn a Wend site's `forest` state to `cut`, needs a band there three days), **Salvage** (a band at a surfaced court gains 20 marks of stone-bronze per day and risks a Salted encounter), **Raid** (Wrack: a band hits a site, burns a ledger or a barn, takes coin, drops the site's sway for the controller by 15), **Ward** (Quiet: keeper at a ring turns the valley's weather; or *Hold* a river: `river_flow` low for ten days), **Parley** (two powers at one site: a contract, at a coin price, that freezes one goal for a season), **Post** (a notice on a town board: a job for the hero at a standing threshold — this is a quest anchor the engine fills), **Address** (a letter or messenger to the hero: only if standing tier ≥ the power's threshold; see [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5).

### Tick (each dawn, each power, in a fixed order: Quiet, Holds, Moot, Stair, Wrack)
1. **Score goals**: for each goal, distance from satisfied (0 = done) × rank weight (3, 2, 1).
2. **Pick a move**: for each legal move, estimate its reduction of goal distance minus its cost in coin and bands, and add the power's *temper* (Stair patient: prefers Buy/Build; Wrack hot: prefers Raid/Send; Holds: Fell/Salvage; Moot: Levy/Send/Parley; Quiet: Ward/Parley, and *never* Raid unless a Closer speaker holds the ring). Take the best; ties go to the cheaper.
3. **Resolve**: apply the move. If it puts two powers' bands on one site, run a **clash**: `strength = bands × 10 × quality + site_defence` (village 5, palisade 15, town wall 30, court 20, camp 10); each side wins with probability `own / (own + other)`. The loser loses a band and leaves; the winner's sway at the site rises by 20, the loser's falls by 20. If the hero's party is present and fighting, add the party rating ([COMBAT](COMBAT.md) §7) to that side and the clash is *played*, not rolled: the hero's fight is the clash's outcome.
4. **Map change**: any site whose control flips, or whose `damage` or `forest` or `river_flow` or `water_level` state changes, writes a **map event** with a plain-language line. Map events are what the "away" page, the notice boards, the rumour lines and the map's markers all read.
5. **Recruit**: the Wrack gains one band for every three debts called since the last Reckoning (recorded by the Stair's Call debt move); the Moot loses one when it levies at harvest.

Powers never read the hero's location and never wait for the hero. They read standing only to decide whether the hero is worth a letter.

### Outputs
Map events; site states; notices and letters; band positions (which decide road ambushes and who is at a site when the hero arrives); the debt ledger; the power's regard for the hero (changed by deeds, section 4).

### Worked example (the world changing with the hero absent)
*Before:* Thaw 3 dawn. Holds: coin 600, bands 4 (one at Thrum, one at the Hewers' Camp on the Rudd's edge of the Wend), goal 1 "Rudd Wend site `forest` = cut" at distance 1. Quiet: one band (stone-wardens) at the Rudd Stones; goal 1 "Rudd Wend unfelled" at distance 0 (satisfied so far). Hero: asleep at Sallowford, or not playing.
*Tick, Thaw 3:* Quiet moves first: highest-scoring move is *Ward* (Hold the Rudd: `river_flow = low` for ten days — the Quiet's temper picks the river over a clash; the low river makes the hewers' float-and-slide impossible). Holds move: *Build* (a timber-slide dam at the Hewers' Camp; 60 marks; band on site; three days). Moot: *Levy* at Wickery (bands 6 → 7; sway at Wickery 70 → 65 because it is Thaw and boats are launching). Stair: *Call debt* on Fenn's Mill (the Quarter-day interest is two days late; the ledger marks it *called*; a recruit is queued for the Wrack). Wrack: *Send band* to the Rudd Bridge (its goal 2, "Wickery afraid", is served by a band on the Ring Road near the town).
*Tick, Thaw 4–5:* Holds' dam completes on Thaw 5 (map event: "The Skerrow have dammed the Rudd above Fenn's Mill"). With `river_flow = low` **and** the dam, Fenn's Mill's state goes `wheel_stopped` (map event). Bram Fenwright's condition becomes *ruined-pending* (his debt is called and his wheel is stopped); his schedule flips to *idle-angry*; his memory gains `(Holds, harmed, 8)` and `(Stair, harmed, 8)`.
*After:* Thaw 6. Two powers have changed a river, a forest edge and a household without anyone in the valley asking the hero anything.
*What the player sees:* the away page (section 1's example); on the map, a dam marker above the Wend and a knife marker at the Rudd Bridge; a rumour at the Ford Inn: "Bram's wheel has stopped. He's blaming the Skerrow, and the Kest, and the weather." And the Adventure Engine, reading `wheel_stopped` + `debt_called` + a giver with reason (Bram) + a place on the map (the dam) + an opposition (a Holds band), generates the quest "The Miller's Water" ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §7, quest V1).

### What the hero can tilt
- **A clash**: by being present and fighting, the hero converts a roll into a played fight. At Voice standing a party of three with tier-3 gear is worth about one band of quality 2, so a hero can swing any one-band-against-one-band clash and tip a two-against-one.
- **A move's cost**: a Parley the hero witnesses (Skerrow contracts need a witness) binds; a hero can refuse to witness.
- **A resource**: the hero can pay a debt, break a dam, ease a keeper, burn a ledger, carry coin, or deliver a band's hire. Each is a deed that writes to site state, and the powers plan from site state.
- **Never**: the hero cannot command a power's move list until Force standing, and even then only by holding a site (a Force hero who holds Wickery's sway ≥ 60 gets one *Levy* per season from its militia).

---

## 4. Consequence: recording, propagating, showing

A **deed** is anything the hero does that the deed table lists. The table has 64 entries in the first region (26 for-someone, 26 against-someone, 12 neutral-witnessed); each entry gives the act tag, the base memory weight, which NPCs and powers receive the memory, the regard deltas per power, the standing change (via reach) and the site state it writes.

### Inputs
A deed (from a quest outcome, a fight outcome, a dialogue choice, a trade, a death); the site; the witnesses (every NPC at the site that hour); the season.

### State
`deed_ledger`: the campaign's complete list of hero deeds, `(day, site, act, targets, witnesses)`, never pruned. This is the campaign memory. Everything else — NPC memories, regard, standing, site states — is derived from it and *does* prune, which is how "the world remembers for a while" and "the campaign remembers forever" coexist: an old deed nobody remembers in dialogue can still be found in a ledger, a scar, a burned barn or an Ulder who was told.

### Tick
1. Append to `deed_ledger`.
2. Write memories: to every witness at the deed's base weight; to the deed's named targets at base weight (+2 if they are the direct beneficiary or victim); to the target's kin (from the kin table) at base −2.
3. Apply regard deltas to powers. Apply site state changes (a ledger burned: `counting_house = burned` for 20 days; a dam broken: `dam = broken`, river flow restored; a levy refused: Moot sway at the village −10).
4. Queue a **notice** (if the deed is in the notice table: saved a site, killed a leader, witnessed a contract, paid a public debt) at the nearest town board for the next dawn.
5. Queue a **letter** if any power's regard for the hero crossed a threshold (±30, ±60, ±90) or the hero's standing tier changed: letters arrive at the hero's home or the last inn slept at, one to three days later.
6. Mark any **door** state: a deed can permanently set a flag on an NPC or site (`bram_trusts`, `idren_marked_you`, `court_layer2_flooded`, `pell_tarn_dead`). Door flags are read by the engine as preconditions and by schedules as overrides. They never decay.

### Outputs
Memories, regard, standing, site states, notices, letters, door flags, and — read together by the engine — the shape of the hero's next quests.

### Worked example (a choice that closes a door and is remembered)
*(This is the informing branch of quest V2. The twenty-hour trace in [FIRST_REGION](../slice/FIRST_REGION.md) §7 does not take it; it is shown here because it closes a door.)*

*Before:* Thaw 9. Quest "Idony's Ledger" ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) quest V2): the hero carries Sallowford's three-mark Quarter-day to Vesk Idren in Wickery and meets the Wrack band at the Rudd Bridge. Its leader is Pell Tarn, Idony's nephew, who lets the village's coin pass and asks the hero to carry a letter back to Idony. The hero, at Wickery, is asked by Idren's Chain sergeant Drusk Fennick what was seen at the bridge.
*Tick — the choice:* the player says "Wrack, five of them, led by Pell Tarn." Deed: `informed_on(Pell Tarn) → Stair`. Base weight 7. Witnesses: Idren (factor, reach 20), Drusk (5), two Chain blades (folk, 1 each). Targets: Pell Tarn (weight 9, victim), Idony Sallow (kin of target: 7). Regard: Stair +15, Wrack −25, Moot 0. Site: none. Door flag: `pell_tarn_named_by_hero`. Notice: none (informing is not posted). Letter: Stair regard 0 → +15, below threshold, no letter.
*After:* Idren has `(hero, informed_on, 7)`; Idony has `(hero, informed_on_kin, 7)` from the kin write, and her regard for the hero drops to −7 even before anyone tells her — it will reach her in dialogue when the Chain marches on the bridge and someone asks how they knew. Pell Tarn's band state gets `hunted`; the Stair's next dawn move is *Send band* to the Rudd Bridge; a clash rolls on Thaw 11 (Chain 1 band × 10 × 2 + 0 = 20 vs Wrack 1 × 10 × 2 = 20; even odds); say the Chain win: Pell's band loses six men and flees to Corrow's Reach; map event "The Chain broke the Wrack camp at the Rudd Bridge".
*What the player sees:* on Thaw 11 the Ford Inn rumour: "The Kest hit the bridge camp. Someone told them." On Thaw 12 Idony, at *knows-against* tier: "Osk says you came back from Wickery with the Chain's thanks. I'll not ask what for." Her price for village labour rises 20%. The door flag closes the engine's quest "Pell's Letter" (a Hand quest where Pell asks the hero to broker a pardon) and opens "Idony's Silence" (Idony asks nothing of the hero for twenty days, which the engine expresses as no Sallowford givers offering work until the flag ages or the hero makes a weight-8 deed for the village). Ten days later Pell Tarn, if alive, is `hunted` and the Wrack's regard −25 means the Sunk Court's parley quest (N1) is offered at a worse price: Halse Corrow's letter says "I know what you told the Kest. Come anyway."

---

## 5. Sizes, costs and risks

- **NPCs**: 20 scheduled in the first region, each with 3 schedule variants (weekday, Stillday, condition override) of 4–6 hour-blocks: about 300 schedule rows. Folk are unscheduled until promoted; a promoted folk NPC gets the generic schedule for their role (10 role schedules).
- **Memory**: 8 slots × (20 named + up to 60 promoted) = 640 memory slots maximum; trivial to hold and to save.
- **Powers**: 5 planners × ~14 moves × ~40 sites in the region: the dawn tick evaluates about 2,800 move-site pairs per day, cheap; the offline cap of seven days bounds it.
- **Runaway risk**: a power could win the region while the hero is away. Dampers: the offline cap; clash odds are `own/(own+other)`, so nobody wins a run of clashes cheaply; `Raise band` costs coin the Wrack and Moot mostly lack; and a town's wall (defence 30) means a town needs three bands against a garrison of one. The Wrack cannot take Wickery on its own in one season; that is by construction, and the season's arc ([FIRST_REGION](../slice/FIRST_REGION.md) §5) shows what it does instead.
- **Legibility risk**: the player must be able to see why the world changed. Every map event carries a plain-language line written from a 60-entry template table per event type, filled with the names involved; the away page lists at most seven lines, prioritised by proximity to the hero's home and by the hero's regard with the powers involved.
