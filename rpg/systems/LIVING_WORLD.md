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

Every named NPC (twenty-five in the first region; see [FIRST_REGION](../slice/FIRST_REGION.md) §3) has a schedule, a memory, and a role in a power (or none). Unnamed folk ("a carter", "two fishers") are drawn from name tables when the engine needs them to speak, and then become named and keep a memory like anyone else (the engine promotes them; see [ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §3).

**The promoted pool.** A region holds **sixty** promoted folk at once, on top of its twenty-five named NPCs. When the pool is full the promoted NPC with the lowest-weight hero-memory is demoted and that memory is dropped — nobody else in the region can hold one. This is not a save-file economy; it is the ceiling that makes standing finite and forgetting real. A region contains about a thousand people (§5) and the simulation will only ever hold eighty-five of them, so **there is a hard maximum on how many heads can carry the hero's name in one valley**, and [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5 does the arithmetic on it.

### Inputs
World hour; season flags; the NPC's home site, workplace and haunts; the NPC's `condition` (well, hurt, indebted, bereaved, ruined, fled, dead); events witnessed or heard (from the consequence system).

### State
Per NPC:
- `schedule`: a table of hour-ranges → (site, activity), with a weekday variant and a Stillday variant, and overrides by `condition` and by season flag. Example, Garrow Tull the smith: 6–18 forge (Sallowford), 18–21 the Ford Inn, 21–6 home; Stillday: 8–11 militia drill at the ford, then inn. Override, `condition = hurt`: home all day.
- `memory`: up to eight entries of `(subject, act, weight 1–10, day, told_by)`. Subject is an NPC, the hero, or a power. Act is a tag from the deed table (helped, harmed, saved, robbed, witnessed, paid, cheated, killed_kin, fought_beside, lied_to, defended_site …). Weight is set by the deed table. When a ninth memory arrives the lowest-weight one is dropped.
- `regard[hero]`: −100..+100, the sum of hero-memory weights signed by whether the act was for or against this NPC or their power, decayed with the memories.
- `reach`: how many people this NPC talks to in a week: folk 1, tradesperson 2, notable (innkeeper, herb-wife, militia captain, keeper) 5, reeve, factor or Speaker of the Quiet 20, power leader 100. Reach is what standing is made of ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5) — and it counts there only while the NPC's hero-memory is at **weight 3 or more**, so a name that is only half-heard is a name that has stopped travelling.

### Tick
- **Each world hour**: place the NPC per schedule (with overrides). If two NPCs are at the same site in the same hour, they *meet*. On a meeting, each passes their strongest hero-memory (and their strongest power-memory) to the other with probability 0.3, at weight −2 (minimum 1), tagged `told_by`. Notices on a town board give weight 3 to every **instantiated** NPC whose schedule passes the board that day, and promote at most **eight** folk per notice. A board cannot write to people the simulation does not hold: a notice in Wickery reaches the named people who pass the market cross and eight townsfolk, not four hundred.
- **Each dawn**: memories of weight 1–5 lose one weight every ten days; weight 6–9 every thirty days; weight 10 (kin killed, home saved, home burned, a Skerrow contract broken) never decays. A memory at weight 0 is gone.
- **On event**: the consequence system (section 4) writes memories directly to witnesses and to the NPCs the deed table names (a debt paid writes to the factor; a sheep found writes to the shepherd and his master).
- **The leader rule**: an NPC of reach 100 — Halse Corrow, Brakka of Thrum, High Reeve Tull, Weighmaster Corradine — takes a hero-memory only from a deed done at their own seat, a deed that moves one of their power's three ranked goals, or a letter they wrote themselves. Leaders do not collect rumours, and no meeting passes one to them. Four people in the Hearth are worth a hundred heads each, and they are reached by doing something, never by being talked about.

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

A **deed** is anything the hero does that the deed table lists, and the deed table is printed in full below. It has **64 entries** for the first region: 26 *for* someone, 29 *against* someone, 9 *witnessed* (neither for nor against, but seen). Every memory weight, regard delta and renown figure anywhere in this bible is read off these rows. If a number in another file disagrees with a row here, the row is right and the number is a draft that has not been recomputed.

### How to read a row

- **Act tag** is what the memory is called in an NPC's memory list and in the engine's preconditions.
- **Weight** is the base memory weight written to the deed's witnesses. Named targets take it **+2**; the target's kin (from the kin table) take it **−2**; a beneficiary whose whole living or life it was takes **+2 more**, to a maximum of 10.
- **Counts / gone** is the memory's life in days, derived from the decay rule in §2 (weight 1–5 loses 1 every ten days; 6–9 every thirty; 10 never). *Counts* is how long it stays at weight 3 or more, which is how long it feeds renown ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5); *gone* is when it reaches 0 and leaves the NPC's list. w3 = 10/30 · w4 = 20/40 · w5 = 30/50 · w6 = 60/80 · w7 = 90/110 · w8 = 120/140 · w9 = 150/170 · w10 = never.
- **Who takes it** lists receivers *beyond* the standing rule, which always applies: every NPC at the site in that hour, the named targets, and the targets' kin. Where a row names a power leader, the **leader rule** applies: an NPC of reach 100 takes a hero-memory only from a deed at their own seat, a deed that moves one of their power's three ranked goals, or a letter they wrote themselves. Leaders do not collect rumours.
- **Regard** is the delta to `regard[hero]` for the named powers. Two multipliers, and no others: **×2** if the deed's site or state is named in that power's three goals (§3); **×3** if the deed ends one of those goals for the season. A deed that touches no goal takes the base.
- **Writes** is the site state, condition or door flag set. **Surfaces as** is where the player meets it again — a greeting tier, a price, a notice, a schedule change, a door the engine reads.
- A deed appears in the ledger once and writes once. Doing the same thing again for the same people **raises the weight of the existing memory** (to the row's cap) and adds no new heads, which is the anti-grind rule ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §7) expressed as arithmetic.

### 4a. Twenty-six deeds *for* someone

| # | Act tag | The deed | w · counts/gone | Who takes it (beyond witnesses, targets, kin) | Regard | Writes | Surfaces as |
|---|---|---|---|---|---|---|---|
| 1 | `found_stock` | animals, goods or a person's tools lost to the mud, the wood or a raid, found and brought back | 6 · 60/80 | the herder or servant who lost them (+2), the one who warned the hero | owner's power +5 | clears `flock_lost`, `goods_lost` | the owner's greeting to *knows*; the herder tells it at the yard next morning; the engine offers that giver again one tier up |
| 2 | `saved_livelihood` | a mill, wheel, boat, forge, pan or field put back to work | 9 · 150/170 | the owner (+2, and +2 more if it is the whole living), the household | the power that stopped it −15; the power that wanted it working +10 | clears `wheel_stopped`, `pans_closed`, `field_flooded` | the owner at *owes* for half a year; their ruin-quest never fires; the engine may use their site as a base |
| 3 | `saved_home` | a seizure paid off, delayed or turned away | 10 · never | the householder (+2), the bailiff (w5 *against*), the town's reeve | Stair −20; Moot +10 | clears `seizure_pending`; door `saved(name)` | a house that will hide the hero; a notice; a Wrack recruit that never arrives |
| 4 | `carried_the_dues` | coin, tally or goods carried to their destination through a road with a band on it | 4 · 20/40 | the sender, the receiver, the receiver's clerk | receiving power +5 | `quarter_day_paid(site)` | the *knows* line; the factor's ledger closes a name for a season; the next carry offered at a tier up |
| 5 | `carried_kin_word` | a letter or word carried between people a power has divided | 7 · 90/110 | sender and receiver (+2 each), both kin lines | the dividing power −5 if it learns | `letter_delivered(name)`; a door | a reeve's *owes* line; a pardon or ransom quest becomes possible |
| 6 | `drove_off_raiders` | a band beaten off a site the hero does not own | 8 · 120/140 | the site's people (all present), the owner (+2), the beaten band's survivors (w6 *against*) | site's power +10; beaten power −10 | site `sway` +10 for its holder | a rumour that names the hero at every inn on that road; the beaten band avoids the hero, or hunts |
| 7 | `defended_site` | stood in a played clash on the holder's side and the site held | 9 · 150/170 | the holder (+2), every band member who lived, the town | holder's power +15; loser −15 | site `sway` +20 | the notice table fires; a power's Address threshold crosses; the site's next quest is the hero's |
| 8 | `filled_the_levy` | a muster answered and filled, with names on a slate | 6 · 60/80 | the captain (+2), the reeve, every man on the slate and their kin | Moot +15 | `levy_filled(site)` | six folk schedules move for thirty days; the wall's captain greets the hero at the gate; a Stand contract is offered |
| 9 | `led_us` | led a band in a clash and it won | 10 · never | every man who lived, the captain, the reeve, the power's seat (leader rule: a goal moved) | that power +15 | door `led(site, day)` | the seat writes; men name the hero to their children; the engine may hand the hero a band |
| 10 | `drilled_us` | a Drill day on a militia band | 7 · 90/110 | the captain (+2), each man (w3), the town's reeve | Moot +5; Stair −5 (`armed_the_town`) | `militia_quality(site) +1` for the season | the band's quality in every clash it fights; the watch opens the gate after dark |
| 11 | `stood_the_day` | a Stand contract day kept at a gate, a march or a table | 3 · 10/30 | the employer, everyone who passed the gate that day (folk, w3) | employer's power +5 per contract, not per day | `stand_days +1` | ordinary townspeople know the face before the name — the fastest way a Fighter's renown reaches folk |
| 12 | `spared_them` | a yield accepted; a prisoner let walk | 9 · 150/170 | the spared (+2, and +2 more if their life), their band, their power's factor | that power +10, even at war | door `spared(name)` | the spared one turns up again: a sergeant who will not draw on the hero, a rider who warns them |
| 13 | `saved_keeper` | a hunted person moved out of a power's reach | 9 · 150/170 | the hidden (+2), their power's Speaker or leader, the one who hid them, the hunter (w4 *against*) | hunted's power +15; hunter's power −20 | door `hidden(name)` | an Ulder Speaker walks down out of the Wend; a companion; a season's teaching |
| 14 | `hid_the_hunted` | sheltered someone through a search without moving them | 8 · 120/140 | the hidden (+2), the householder, the searchers (w4, `hid_something`) | hunter's power −15 | `search_failed(site)` | the searcher comes back with more men; the sheltered one's kin open doors |
| 15 | `eased_them` | Ease, Dress or a bought physician on a hurt person | 5 · 30/50 | the patient (+2), their household | none | one day off `hurt` | the patient's greeting; the herb-wife's price; a household that answers questions |
| 16 | `healed_the_house` | a site's condition — flux, flood, fire damage — cleared by work or coin | 7 · 90/110 | every person at the site, the reeve | site's power +10 | clears `damage` | the site's schedules return to normal; a rumour with the hero's name in it |
| 17 | `paid_their_debt` | the hero's own coin paid against another's ledger | 8 · 120/140 | the debtor (+2), the factor (w6, positive), the kin | Stair +10; Wrack −5 (a recruit lost) | clears `debt_called(site)` | the debtor at *owes*; the Wrack counts one band fewer at the season's end |
| 18 | `gave_the_price` | gear, food, coin or a beast given in need, unasked | 5 · 30/50 | the taker (+2), witnesses | none | — | the *knows* line; the taker's kin remember it longer than the taker does |
| 19 | `kept_word` | a promise the hero stated aloud, kept, with the promisee alive to see it | 8 · 120/140 (**10 · never** if the promisee is Skerrow) | the promisee (+2), everyone who heard the promise | that people's power +10 | door `kept(promise)` | a hold that will contract with the hero; an Ulder who teaches; the Skerrow rule made personal |
| 20 | `witnessed_for_me` | stood as witness to a contract, and the reading favoured this party | 6 · 60/80 | both parties, the objector (w4 *against*), the witnessing people's factor | favoured power +10; objecting power −10 | `contract_witnessed`, and the boundary it moves | `hero_witnessed_skerrow`; the Holds' Address; a witness-fee of 2 marks in iron |
| 21 | `brokered` | a Parley the hero arranged that both sides signed | 9 · 150/170 | both factors, both seats (leader rule: a goal froze), the site's town | both powers +15 | one goal frozen for a season | two powers' letters in one morning; the engine's next quest is the one the peace makes possible |
| 22 | `fought_beside` | fought alongside a named NPC and both walked away | 6 · 60/80 | the NPC (+2), their band, their kin | their power +5 | `fought_beside(name)` | a companion offer; a band that lets the hero pass; the name used at the inn without explanation |
| 23 | `carried_them_out` | a downed person carried out of a fight or a dungeon | 9 · 150/170 | the carried (+2, and +2 more: it was their life), their kin, everyone who saw the return | their power +10 | door `carried_out(name)` | the strongest greeting in the game; that kin asks for the hero by name for a year |
| 24 | `brought_the_dead_home` | a body recovered and named | 8 · 120/140 | the kin (+2, and w10 for a parent or a child), the village, whoever keeps the ground | the kin's power +5 | clears `missing(name)`; `grave(site)` | a grave on the map; kin who will hide the hero; Kit Ashby's brother is this deed waiting to happen |
| 25 | `taught_them` | a trade, a knack or a drill taught to one named person | 6 · 60/80 | the taught (+2), their master, the village | none | `taught(name)` | that person returns as a promoted NPC with the hero's habits; a smith who works at cost |
| 26 | `kept_the_charge` | an Ulder or Skerrow charge kept: a ring, a well-ring, a stone-mark, a contract's iron | 10 · never | the keeper (+2), the Speaker, every Ulder in the region | that power +20 | `well_ring_intact`, `stone_mark_held` | the campaign's doors; the Quiet Address at any tier; the Closers begin to count the hero as an argument |

### 4b. Twenty-nine deeds *against* someone

| # | Act tag | The deed | w · counts/gone | Who takes it (beyond witnesses, targets, kin) | Regard | Writes | Surfaces as |
|---|---|---|---|---|---|---|---|
| 27 | `broke_our_work` | a built thing broken: a dam, a slide, a wheel, a cart, a palisade | 6 · 60/80 | the crew present, the foreman (+2), the owning power's factor | owner power −15 | the thing's state (`dam = broken`) | the foreman knows the hero's face for eighty days; the power's next Build comes with a guard |
| 28 | `dried_their_water` | a worked water dried or taken: a salt-pan, a millrace, a well, a fish-pool | 8 · 120/140 | the owner (+2), the workers, the factor | owner power −25 | `drawer_hunted` if the owner is the Stair | a band Sent to the site; the Chain at a door three days later; a herb-wife's loft with a light in it |
| 29 | `drew_on_the_living` | a Drawing worked on a body, living or dead, without leave | 7 · 90/110 | the body's owner or kin (+2), every Ulder witness (w8), Vael witnesses (w5, fear) | Quiet −10; −25 if the body was living and an Ulder saw | door `wrung(name)` | the Quiet withdraw teaching; a village that will not take the hero in; the Wrack take an interest |
| 30 | `read_our_stones` | a kept ring Read without its keeper's leave | 7 · 90/110 | the keeper (+2), the ring's Speaker | Quiet −15 | `ring_closed(site)` on a second offence | the season's Salt-easing refused; the ring's weather-hold withheld from the valley |
| 31 | `stole_from_us` | goods taken from a site whose owner is a named NPC | 6 · 60/80 | the owner (+2), the household, the site's power | that power −15 | `theft(site)` | prices +20%; a watch that searches the pack; a plea at the market cross |
| 32 | `fenced_their_own` | an owner's goods sold inside the owner's own town | 7 · 90/110 | the owner (+2), the fence (w4, neutral), the town's factor | owner's power −20 | `fenced_named_goods(owner)` | the owner learns within three days by the memory tick; a yard that closes to the hero |
| 33 | `forged_against` | a forged document read by its author or its power's factor, or carried back to them | 8 · 120/140 | the factor (+2), the clerk whose hand it copied, everyone it passed | that power −30 | `forgery_on_file(power)` until the Reckoning | every later Forge against that power fails; the Chain asks for the hero by name; the factor's *hates* line |
| 34 | `caught_listening` | caught at a listening spot by someone who already knows the hero | 5 · 30/50 | the catcher (+2), whoever they tell | their power −10 | `spot_watched(site, 10 days)`; `idren_marked_you` at the counting-house wall | the spot is useless for ten days; a door that was open shuts |
| 35 | `spotted_following` | a Shadow discovered | 6 · 60/80 | the target (+2), their power's factor | their power −10 | target *wary* for ten days | the target takes the Stillday variant and a new route; twice and the route changes for good |
| 36 | `informed_on` | a person named to a power that hunts them | 7 · 90/110 | the told power's factor (w7, *for*), the named (w9 *against*), their kin (w7), their band | the told power +15; the named's power −25 | `named_by_hero(name)` — never decays | the band Sent that night; the kin's silence; the price of the hero's next parley |
| 37 | `lied_to` | a stated lie the world later disproves — a false tally counts, and the Kest read it hardest | 6 · 60/80 | the lied-to (+2), everyone who was in the room | their power −10; Stair −15 if it was a weight or a tally | `lied(name)` | that NPC's greeting drops one tier permanently; the engine will not use them as a giver for twenty days |
| 38 | `broke_contract` | a Stand, a Skerrow bargain or a Moot commission abandoned | 7 · 90/110 (**10 · never** if Skerrow) | the employer (+2), the witness to the bargain, that people's factor | that power −20; Holds −40 for a Skerrow bargain | `broke_contract(power)` | no Skerrow contracts with the hero again this campaign; a Moot commission never offered twice |
| 39 | `refused_the_call` | a levy, a muster or a plea refused in front of the people | 5 · 30/50 | the caller (+2), everyone present | that power −10 | `refused(call)` | the call goes to someone else and the engine follows them; village willingness −1 for twenty days |
| 40 | `let_it_be_taken` | stood by while a site was seized, burned or taken | 6 · 60/80 | the losers (all present; the owner +2), the taking power (w3, positive) | losing power −15; taking power +5 | the site's control change | the ruined household's condition and schedule; a Wrack recruit; the same quest again one tier up |
| 41 | `burned_the_ledger` | a counting-house's book destroyed | 9 · 150/170 | the factor (+2), the clerks, every debtor in the book (w6, *for*), the Wrack's leader (leader rule: goal 1) | Stair −40; Wrack +25; Moot −10 (the Moot's chest is in that book) | `counting_house = burned` (20 days) | every valley debt suspended, then rewritten from Fallgate's copy; the Chain hunts; the Wrack sings about it |
| 42 | `burned_them_out` | a building fired with people's living in it | 9 · 150/170 | the household (+2, w10), the village, the kin | the site's power −30 | `damage = burned` | a village that will not open a door; a kin-quest against the hero at Name |
| 43 | `killed_kin` | killed an NPC who has named kin in the region | 10 · never | the kin (w10), the village, the power | that power −30 | `killed(name)` — never decays | a kin-quest; a closed door; a greeting that never softens; the Skerrow read it as bargain-breaking if a contract bound the dead |
| 44 | `killed_theirs` | killed members of a power's band in a fight the hero began | 6 · 60/80 | the survivors, their sergeant, the factor | that power −15 | `blood(power) +1` | the power's bands read the hero as a target; the *hunted* threshold one deed nearer |
| 45 | `beat_a_yield` | killed someone who had yielded, in view | 8 · 120/140 | everyone who saw, the dead's power (w9), the hero's companions | that power −25; Moot −10 (the Vael do not do this) | `killed_a_yield` | every companion's regard −15 and an agenda scene; no parley quests for a season; the Wrack respect it, which is its own problem |
| 46 | `robbed_the_road` | a purse, a toll or a cart taken on a public road | 7 · 90/110 | the robbed (+2), every carter on that road (w4), the Moot's reeve | Moot −20; Wrack +10 | `road_unsafe(segment)` | carters' prices; a watch at the crossroads; Wat Hobb's greeting, which is the valley's weather-vane |
| 47 | `broke_the_seal` | a warded thing cut, opened or carried off: a well-ring, a stone-mark, a grave | 10 · never | the keeper (+2), the Speaker, every Ulder in the region | Quiet −50 | `well_ring_intact = false`, `layer3_opening(6 days)` | the worst door in the campaign; the Salted range further; the Closers count the hero as their argument |
| 48 | `sold_the_road` | a public good traded for a private seal | 9 · 150/170 | the reeve (+2), the town, the buying power (w6, positive) | the sold-out power −40; the buyer +40 | the door the seal buys | a village that understands and does not forgive; a permanent price change; a notice the Moot writes about the hero |
| 49 | `left_them_below` | a companion or an NPC abandoned in a dungeon or a fight | 9 · 150/170 (**10** if they died) | the abandoned if they live, their kin, everyone who saw the hero come out alone | their power −20 | `left_below(name)` | a permanent line in the quay's greetings; companions' regard −20; a rescue the hero can no longer be given |
| 50 | `brought_them_down` | a deed that ends with a named person imprisoned, ruined or Salted | 8 · 120/140 | the fallen (+2), their household, the power that took them (w5, positive) | fallen's power −20; taking power +15 | their `condition` change | the kin's quest; the village's rumour tone for a season; a Wrack recruit with a name |
| 51 | `wasted_our_day` | a Drill, a muster or a promised day that produced nothing | 4 · 20/40 | the captain (+2), the men | that power −5 | `wasted(site, day)` | the captain does not call the hero for the next muster; the band's quality unchanged when it matters |
| 52 | `drove_off_our_crew` | a working crew driven off a site by force or by paper | 7 · 90/110 | the foreman (+2), the crew, the paying power's factor | paying power −20; the site's owning power +10 | `work_stopped(site)` | the foreman knows the hero anywhere in the region; the next crew comes with blades |
| 53 | `took_the_bronze` | salvage taken from a court a power claims | 6 · 60/80 | the claiming factor (+2), the buyers, the Quiet (w7, *against*) | Holds or Stair −15; Quiet −20 | `salvaged(site, sacks)` | Marrock's refusal; a fence's cut; the Quiet's Address delayed a season |
| 54 | `crossed_the_ward` | Ulder ground walked at night, a ring entered, a marked track left | 5 · 30/50 | the keeper, any Ulder in that wood | Quiet −10 | `trespass(site)` | the Wend's paths lengthen, because the Ulder stop guiding; an Ulder companion's agenda scene |
| 55 | `broke_the_road` | a bridge, ford, slide or ferry destroyed | 8 · 120/140 | every settlement the road serves through its reeve (w6), the carters, whoever built it | Moot −25; whoever wanted it broken +15 | `road_broken(segment)`, travel +2 h | the whole valley's prices; a Moot plea; a Voice quest to rebuild it |
| 56 | `hunted_them` | pursued and taken a person for a power's bounty | 7 · 90/110 | the taken (+2, w9), their kin, their band, the paying factor (w6, positive) | paying power +20; the taken's power −25 | `taken(name)` | the kin's door; the band's ambushes on that road; the bounty in coin and in the greeting of everyone who saw the rope |

### 4c. Nine deeds the world merely *witnessed*

Neither for nor against: seen, and remembered as a fact about the hero. These are how a reputation acquires a colour rather than a size.

| # | Act tag | The deed | w · counts/gone | Who takes it | Regard | Writes | Surfaces as |
|---|---|---|---|---|---|---|---|
| 57 | `worked_the_trade` | a world-day at the forge, the loft, the boat or the cart | 2 · —/20 | the master (+2 → w4), the village | none | 6–10 bits | below the renown threshold on its own; three days with one master raises the memory to 4 and the master to *knows* |
| 58 | `drew_before_us` | a Drawing seen by people who do not Draw | 3 · 10/30 | every Vael and Kest witness; Ulder witnesses take w5 | none | `known_drawer` | the Stair's list of people who dry salt-pans; a village that asks the hero to bless a well, or to leave it |
| 59 | `seen_in_company` | seen with an Ulder, at the Wrack's fire, or carrying a hold's iron | 2 · —/20 | everyone at the site (the *party seen with* is named in the tag) | none | `seen_with(power)` | at w2 it counts for nothing until a second sighting raises it to 4 — then the town has decided what the hero is |
| 60 | `wears_the_salt` | a visible crust seen (Salt ≥ 300) | 4 · 20/40 | every witness; Ulder witnesses take w6 | Quiet: no change, but the Address threshold opens at any tier | `salted_visible` | the *Salted* greeting; children moved indoors; the Wrack's welcome; a price for lodging |
| 61 | `posted` | the hero's name written on a town's notice board | 3 · 10/30 | every instantiated NPC whose schedule passes the board that day, and up to eight promoted folk | the posting power +5 | `posted(site, day)` | the fastest legitimate way for a name to reach a town's folk — and the only one, since the board cannot write to people the simulation does not hold |
| 62 | `named_at_the_inn` | a rumour that names the hero passed at an inn or a quay | 3 · 10/30 | the two NPCs who met (the memory tick, §2) | none | rumour line in the journal if the hero is present | the *heard* greeting from strangers; ten days later it is gone unless the hero gives it something new |
| 63 | `went_below` | seen going into or coming out of the Sunk Court | 4 · 20/40 | the quay, the Reach's sentries, Kit Ashby (+2) | Quiet −5; Wrack +5 | `went_below(count)` | Drusk asking where the hero slept; the Quiet's watchers; the price of salvage before it is sold |
| 64 | `came_back` | returned from a death, or walked away from a fight in view (`ran`) | 5 · 30/50 (`ran`: 2 · —/20) | everyone at the site | none | `scarred`, or nothing | the scar on the portrait and in the greeting ("You came back, then"); `ran` at w2 counts for nothing unless it happens twice in one town |

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
*Tick — the choice:* the player says "Wrack, five of them, led by Pell Tarn." Deed: **row 36, `informed_on`**. Base weight 7, read straight off the table with no adjustment: the Stair is the told power (+15), the Wrack is the named man's (−25), and neither the bridge nor Pell is named in a power's three goals, so no multiplier applies. Witnesses: Idren (factor, reach 20), Drusk (5), two Chain blades (folk, 1 each). Targets: Pell Tarn (weight 9, victim), Idony Sallow (kin of target: 7). Regard: Stair +15, Wrack −25, Moot 0. Site: none. Door flag: `pell_tarn_named_by_hero`. Notice: none (informing is not posted). Letter: Stair regard 0 → +15, below threshold, no letter.
*After:* Idren has `(hero, informed_on, 7)`; Idony has `(hero, informed_on_kin, 7)` from the kin write, and her regard for the hero drops to −7 even before anyone tells her — it will reach her in dialogue when the Chain marches on the bridge and someone asks how they knew. Pell Tarn's band state gets `hunted`; the Stair's next dawn move is *Send band* to the Rudd Bridge; a clash rolls on Thaw 11 (Chain 1 band × 10 × 2 + 0 = 20 vs Wrack 1 × 10 × 2 = 20; even odds); say the Chain win: Pell's band loses six men and flees to Corrow's Reach; map event "The Chain broke the Wrack camp at the Rudd Bridge".
*What the player sees:* on Thaw 11 the Ford Inn rumour: "The Kest hit the bridge camp. Someone told them." On Thaw 12 Idony, at *knows-against* tier: "Osk says you came back from Wickery with the Chain's thanks. I'll not ask what for." Her price for village labour rises 20%. The door flag closes the engine's quest "Pell's Letter" (a Hand quest where Pell asks the hero to broker a pardon) and opens "Idony's Silence" (Idony asks nothing of the hero for twenty days, which the engine expresses as no Sallowford givers offering work until the flag ages or the hero makes a weight-8 deed for the village). Ten days later Pell Tarn, if alive, is `hunted` and the Wrack's regard −25 means the Sunk Court's parley quest (N1) is offered at a worse price: Halse Corrow's letter says "I know what you told the Kest. Come anyway."

---

## 5. Sizes, costs and risks

- **NPCs**: 25 scheduled in the first region, each with 3 schedule variants (weekday, Stillday, condition override) of 4–6 hour-blocks: about 375 schedule rows. Folk are unscheduled until promoted; a promoted folk NPC gets the generic schedule for their role (10 role schedules).
- **Memory**: 8 slots × (25 named + up to 60 promoted) = 680 memory slots maximum; trivial to hold and to save.
- **Population and the standing ceiling**: the Rudd valley holds about **1,020 people** — Sallowford 31, Fenn's Mill 6, Gorse End 14, Hobb's Cross 9, eleven farms ~90, Wickery 400, Thrum 400, the Wrack ~60 on the Shelf, ~12 Ulder in the Wend and at the ring. The simulation instantiates 85 of them (25 named + 60 promoted). Summing the named NPCs' reach ([FIRST_REGION](../slice/FIRST_REGION.md) §3) gives **368**; sixty promoted folk at reach 1–2 give **60–120**; High Reeve Tull, reachable from the valley by letter, gives 100. **The absolute renown a hero can hold in region one is therefore 528–588, and about 450 in practice.** Every tier floor in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5 is set against that number rather than against the fiction, which is why Force (900) cannot be reached in one valley.
- **Deed table**: 64 entries printed in §4 (26 for, 29 against, 9 witnessed), each with weight, receivers, regard, state and surfacing. Round one estimated 64 with a 26/26/12 split; the printed table came out 26/29/9 — the count held, the split moved, because the failure states of the twelve field verbs ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5) each needed a row of their own and four "witnessed" ideas turned out to be one parameterised row (`seen_in_company`).
- **Powers**: 5 planners × ~14 moves × ~40 sites in the region: the dawn tick evaluates about 2,800 move-site pairs per day, cheap; the offline cap of seven days bounds it.
- **Runaway risk**: a power could win the region while the hero is away. Dampers: the offline cap; clash odds are `own/(own+other)`, so nobody wins a run of clashes cheaply; `Raise band` costs coin the Wrack and Moot mostly lack; and a town's wall (defence 30) means a town needs three bands against a garrison of one. The Wrack cannot take Wickery on its own in one season; that is by construction, and the season's arc ([FIRST_REGION](../slice/FIRST_REGION.md) §5) shows what it does instead.
- **Legibility risk**: the player must be able to see why the world changed. Every map event carries a plain-language line written from a 60-entry template table per event type, filled with the names involved; the away page lists at most seven lines, prioritised by proximity to the hero's home and by the hero's regard with the powers involved.

---

## Decisions this round

1. **Renown counts memories of weight 3 or more, and nothing else.** Weight 1–2 ("someone mentioned you once") does not travel. This makes renown fall smoothly as memories decay instead of hanging on hearsay, and it is what stops a board notice from being worth a town.
2. **A board notice writes only to instantiated NPCs and promotes at most eight folk.** Round one's Voice crossing added ~245 unpromoted folk in two days, which the simulation cannot hold. It now cannot happen.
3. **The promoted pool is sixty per region and evicts its weakest memory.** This turns the memory budget from a save-file note into the design's standing ceiling.
4. **The leader rule.** Reach-100 NPCs take memories only from deeds at their seat, deeds that move their goals, or letters they wrote. Without it, one rumour reaching Brakka was worth a hundred heads and the tiers collapsed.
5. **The deed table is authoritative over every other file.** Where a quest in ADVENTURE_ENGINE §7 or the trace in FIRST_REGION §7 prints a regard or renown figure that the table does not produce, the table governs and the figure is a draft. The two regard multipliers (×2 at a power's goal site, ×3 for ending a goal) reproduce the showcase quests' larger numbers — Vo1's Stair −50 is `sold_the_road`-scale base −15 against a goal ended, N1's Quiet +20 is `kept_the_charge` base +20 at a goal site.
6. **The deed table is 64 entries, as counted in round one, but split 26/29/9 rather than 26/26/12.** Stated here because the count in FIRST_REGION §8 is still right and its split, if it is ever printed there, is not.
