# Progression and Economy

How the hero and companions grow, what gear is, where every currency comes from and goes, the fairness model at 1, 10, 50 and 200 hours, what is sold and why the world survives it, and the anti-grind rules.

Every hour-mark and every total below is derived from the rebuilt twenty-hour trace in [FIRST_REGION](../slice/FIRST_REGION.md) §7 — its clock table (§7.1), its experience ledger (§7.3b), its renown ledger (§7.3a) and its regard ledger (§7.3c) — extended by the pace model in §5 of this file. Where a number here disagrees with those ledgers or with [LIVING_WORLD](LIVING_WORLD.md) §4's deed table, they govern and this is the error. Combat numbers are in [COMBAT](COMBAT.md); class growth in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md); the session clock in [SESSION_UX](SESSION_UX.md) §5.

---

## 1. Hero growth

**Levels 1–25.** Experience to go from level `L` to `L+1` is `60 × L^1.6`, rounded.

| To reach | 2 | 5 | 8 | 10 | 12 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|---|---|
| Cumulative | 60 | 1,143 | **4,338** | 8,039 | 13,210 | 24,135 | 52,143 | **94,397** |

The per-level costs for the first ten are 60, 182, 348, 553, 786, 1,057, 1,352, 1,681, 2,020, 2,389; at level 15 it is 4,570, at 20 it is 7,241, and the last step, 24 to 25, is 9,694.

**Why the cap is 25 and not forty.** The campaign is about 400 world days ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5) at roughly two world days a played hour, which is **200 played hours**; §5 of this file models what those hours earn, and the answer is about 97,000 experience. `60 × L^1.6` asks 94,397 for level 25 and 104,745 for 26. So the cap is reached at about hour 197 by a player who works the campaign through, and not before — which is what a cap is for. A cap of 40 would have needed 326,800 experience, three and a third times what two hundred hours can pay, and it was a number with no model behind it.

**Sources of experience** (the model behind the numbers): quest outcomes by standing tier ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4: 60–120 Villager, 150–250 Hand, 300–500 Name, 700–1,000 Voice, 1,500–2,500 Force); fights, at `threat × 1.5` per enemy for the first fight of a kind at a site in a world-week, halving on each repeat there (a cutter is 18 the first time, 9 the second, 4 the third, then 2); discoveries (a site first seen 30; a dungeon layer 100; a stone ring 50); deeds outside quests (a contract witnessed 80; a militia drilled 60; a debt paid for someone 50).

Over the first twenty hours ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3b) the traced player completes **nine quests (3,240), thirty enemies in nine engagements (530), ten discoveries (460) and two witnessed deeds (140): 4,370**, which is level 8 with thirty-two to spare. Quests are 74% of that — the file's "about three-quarters" — so the road to power is the road to standing, and grinding fights is a slow road that gets slower.

**Per level:** +10 health (COMBAT §1: health is `90 + 10 × level`). **Every third level:** a knack — 3, 6, 9, 12, 15, 18, 21, 24, which is **eight picks from a class's twelve**, so no two heroes of a class are the same and none is stronger. **Level 15:** subclass, which §5 puts at about hour 74 — the second region's opening reward, not the first region's. Nothing else is gated by level; quests gate by standing, and the Fair/Even glyph tells the player when a fight is beyond them.

## 2. Companion growth

Companions share the hero's level (they gain the same experience from the same fights and quests when in the party, and catch up to the hero's level minus one when they rejoin after time apart — the world has been teaching them too). Each has one **role ability** upgraded at levels 5, 10, 16 and 22, and a **regard** for the hero (−100..+100) that changes with deeds that touch their agenda. At regard +40 a companion tells the hero the thing they have not said (Corva: why she wants the Stair; Ilune: what the Rudd Stones hold; Gulla: what Thrum owes the Stair); at +70 their agenda can be *settled* by a Voice quest the engine generates for them, after which they stay for the campaign. At −40 they leave. Companions are never bought, drawn or rolled: each is met in the world at a site and a state, and a region has five.

## 3. Gear

Gear is **named, made and tiered**; there are no random stats, no rarity colours and no drops of finished weapons. Five tiers: 1 village-made (Garrow Tull's forge), 2 town-made (Wickery's smith, Idren's imported Kest blades), 3 hold-forged (Thrum; needs Holds regard ≥ 0), 4 Stair-imported steel (Fallgate; needs Stair regard ≥ 0), 5 stone-bronze reworked by a Skerrow master (Force standing and a court's bronze). Each tier is one weapon per class-style (light, heavy, rod), one armour (leather, mail, hold-mail, Kest plate, bronze-laced), and a handful of tools (lamp, skin, cord, boat). Upgrading a tier is a purchase plus materials plus a smith who will do it (regard), or the hero's own trade if smith. A tier-2 heavy is 2 marks and 6 iron; tier-3 is 6 marks, 10 iron and Thrum's forge. Gear breaks only in one way: left in a dungeon at a death.

**Gear tiers are gated by regard, not by hours, and this is load-bearing.** The traced Fighter ends twenty hours with seven marks in his purse — more than tier 3's six — and cannot buy tier 3, because Holds regard is **−65** ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3c) and Marrock will not sell to him at any price. Tier 4 is shut for the same reason at Stair −70. The road back is in the world and is named: Marrock's Green contract at Thrum's gate (offered despite regard, because `witnessed_skerrow` is a door regard cannot shut), a Stand kept, a Skerrow word spoken aloud and kept, which is row 19 `kept_word` at weight 10 and the Holds at +10. That is the reason no store line can touch a gear tier: coin is not what a tier costs.

## 4. Currencies: every source and sink

Two coins, three material families, and standing. There is no premium currency of any kind.

**Coin.** Silver **marks** and copper **bits**, twenty bits to a mark, both Kest-minted. A day's labour is 6 bits; a loaf 1; an inn bed 2; a flask of lamp oil 3; a bandage 2; a bucket of Shelf water 1 (rivers are free); a ferry crossing 1; a Stair toll, where a toll-house stands, 1 per cart.

| Sources of coin | Model |
|---|---|
| Quest pay (the main source) | by tier: 6–30 bits, 1–2 marks, 3–6 marks, 8–15 marks; Force pays in sites. A power with no coin pays in kind, and the design lets it: the Wrack pay in beds, roads and names, which is why N1 and "Corrow's Terms" pay nothing at the counting-house and a great deal everywhere else |
| Salvage sold to Marrock (Holds) or Kit (fence) | stone-bronze 2 marks a sack at Marrock's, 1½ at Kit's without questions; Court layer 1 yields about 6 sacks a season |
| The hero's trade | a world-day at the forge, loft, boat or cart earns 6–10 bits and a village memory (weight 2); a half-day 4 |
| Stand and Drill contracts (Fighter), Fence and Forge work (Rogue), Ease and Read (Mage) | Stand 15 bits a day at Hand, 1 mark at Name, 3 at Voice; three Eases in a village is a healer's day at 10–20 bits; the Holds pay a mark a reading at Name |
| Enemy purses | cutters carry 2–6 bits; the Chain carry their pay (10); Salted things carry nothing |

| Sinks of coin | Model |
|---|---|
| Supplies, **bought for a journey and not paid as a daily tax** | a day on the road, away from a settled site: about 8 bits (oil, bread, a bandage). A dungeon day: 20, because oil burns fast in salt air. A day in or near a village: the bed, 2 bits, and nothing else, because the hero eats where they sleep |
| Gear tiers | 2 / 6 / 15 / 40 marks by tier, plus materials — and the regard in §3 |
| Companion shares | each companion takes 20% of quest pay while in the party (they have lives to fund; Gulla sends hers to Thrum) |
| Beds, ferries, tolls, courier | 1–2 bits each; a toll-house makes the valley's prices rise 5% (the world's cost of losing Vo1) |
| Debts and gifts | paying someone else's Quarter-day (3 marks) or arrears (8) is the hero's biggest standing purchase and the game's most expensive line |
| A mule (carry double; feed 1 bit a day) | 4 marks at Hobb's Cross |
| House repair and furnishing at Sallowford | 1–5 marks; purely cosmetic and remembered by neighbours |

**Materials.** *Iron* (Holds; 3 bits a bar at Marrock's; the smith trade makes tier-1 from it); *timber and hide* (Wend and Lowmark; free to gather, sold 1 bit); *stone-bronze* (the courts; the Holds' whole agenda; 2 marks a sack). Materials have no sink but gear, tools and the village's repairs, so they do not accumulate into a second economy.

**Standing** is not spent, ever. It is measured ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5).

### The twenty-hour ledger, itemised

Read off [FIRST_REGION](../slice/FIRST_REGION.md) §7.2 scene by scene, at the rates above.

| Income | Model | Marks |
|---|---|---|
| Three Villager quests (V3, V1, V2) | 12 + 20 + 10 bits, and Bram's twenty is printed in the trace | 2 |
| Three Hand quests (H2, H1, H3) | 1 + 1 mark, and H3's witness-fee of 2 marks in iron (twelve bars) plus Reyne's mark | 5 |
| N1 | Corrow has no coin; the descent's pay is what the hero cuts out of it | 0 |
| Vo1 | Aud's ten marks, printed in the trace | 10 |
| "Corrow's Terms" | terms, not coin | 0 |
| Salvage | four sacks to Kit at 1½, in the Post's back room, no questions | 6 |
| The trade | a half-day at Garrow's forge on Thaw 2 (4 bits) and odd hours | ½ |
| Purses | thirty enemies at 2–10 bits, mostly cutters | 2 |
| Stand wages | **none.** The Stand day of the 18th was missed while the hero was offline and docked, and the rota was handed back at the gate on the 23rd rather than broken | 0 |
| | | **25½** |

| Spending | Model | Marks |
|---|---|---|
| Gear | tier-2 heavy (2 marks and 6 of the twelve iron bars) and a tier-2 bow for Corva on the 27th (1) | 3 |
| Supplies | six road days at 8 bits, two dungeon days at 20, eight beds at 2, the Drill's bread at 10 | 5 |
| Companion shares | 20% of quest pay per companion in the party: Corva from Thaw 8 on 15 marks (3), Ilune from Thaw 13 on 4 (¾), Gulla on Vo1's ten (2) | 5¾ |
| A mule at Hobb's Cross, Thaw 35 | 4 marks and a bit a day thereafter | 4 |
| House repair at Sallowford | Garrow's approval, and nothing else | 1 |
| | | **18¾** |

**The hero ends the trace with about seven marks**, tier-2 gear, six bars of iron, a mule and a name. Seven marks is more than the six a hold-forged blade costs at Thrum, and he cannot buy one, because the Holds are at −65. Coin in the Hearth is for changing the world, not for banking, and the trace's last line about money is a purse that is large enough and a door that is shut anyway.

## 5. The fairness model

The world is the same for everyone. A paying player has cosmetics, side-chapters and prepaid conveniences; a free player has the same hero, companions, standing, gear, quests, dungeons and ending, in the same number of hours.

### The pace model, stated once

Five numbers, all measured off the trace, and every row of the table below falls out of them.

1. **Where an hour mark lands.** A session's real minutes are `2 × open world hours + paused minutes`, and across the trace the paused minutes equal the open-play minutes almost exactly ([SESSION_UX](SESSION_UX.md) §3), so a played hour is about **fifteen open world hours** — and the nine sessions' real lengths in [FIRST_REGION](../slice/FIRST_REGION.md) §7.1 say exactly which session and which scene an hour mark falls in.
2. **World days per played hour: 2.08.** 998 world hours over 20 played hours. A ninety-day season is therefore about **43 played hours** for the traced evening player, which is one region.
3. **Quest cadence: one quest per 2.2 played hours** up to Name (nine quests in twenty hours), falling to **one per 2.5** at Name and above, because a Voice quest is an evening — Vo1 was set up in a four-minute check-in and played in one two-hour evening.
4. **Quest experience by tier**, midpoints from §1: Villager 90, Hand 200, Name 400, Voice 850, Force 2,000.
5. **Non-quest experience: 56 an hour** in a fresh valley (1,130 over the first twenty hours), **40** in one already worked, because the discoveries are spent.

Running those forward: **4,370 at hour 20; 10,620 at hour 40**, which is region one finished at level 11; **14,580 at hour 50**; **54,180 at hour 150**, which is where [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5 puts Force; **96,980 at hour 200**, which passes level 25's 94,397 at about hour 197. Level 15 and the subclass fall at about hour 74.

**Renown runs on a different clock**, because it counts heads and heads decay ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5). Its model at the two later marks:

- **Hour 50, about 440.** Two never-decaying leaders, Halse Corrow and High Reeve Tull, at 100 each = 200. Region one's other survivors at world-day 104, counted by their rows' lifetimes: Sarane 20 (row 13, w9, 150 days), Idony 20 (row 5, w7, 90 days, counting to day 101), Aud 20 and Dell 5 (row 9, w10, never), Ondrin 5 (row 26, w10, never), Wat Hobb 5 (row 6, w8, 120 days), Osk 5, Pell 5, Drusk 5 (row 12, w9), Bram 2 (row 2, w9), Rukk 2, the three companions 6, the six levy and watch folk of row 9 at 6, and Orsa 2 — **about 120**. Everything else in the 395 — the notice boards, the trade witnesses, the Quarter-day's clerks — has decayed below weight 3. Region two's first ten hours, worked at Voice, buy a reeve, a factor and a few notables: **about 120**. 200 + 120 + 120 = **440**, which is Voice with room and is half of Force.
- **Hour 200, about 1,000.** [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5's Force table totals **910** at four regions and about 150 hours — 440 in seats, 135 held over in the Rudd valley after four seasons of decay, 110 in the Halse, 110 in the Twine, 55 at Fallgate and 60 in the Moot's other reeves. The campaign's fifth region adds another valley's 110 against a further season of decay in the first four: about **1,000**, and the ceiling is real — there is no fifth reach-100 leader to find.

**Standing is one global number** — a Voice hero who walks into the Halse valley is Voice there, because the seats and the letters travel — but the Halse's own people hold no memory of him, so their greetings are strangers' greetings until he does something in their valley. That is why renown grows region by region and never resets, and why Force needs four valleys rather than four hundred errands.

### The table

| Hours | Where the trace is | Free player | Paying player | Difference |
|---|---|---|---|---|
| **1** | Thaw 2, afternoon, in Sallowford (evening one, sixty real minutes in) | **Level 2** (180 XP); **renown 15** — Villager, the glyph an ember; tier-1 gear from the hero's own forge; V3 done, nineteen ewes home and `court_mouth_seen`; a day at Garrow's anvil that added four bits and no heads; about 16 bits; no companion — Corva is at the mill until Thaw 8 | same | a cloak dye, if bought |
| **10** | Thaw 21 14:00, setting out across the Shelf for Corrow (evening four, sixty-eight minutes in) | **Level 5** (1,356 XP); **renown 179** — Name since dawn on the 14th, the glyph a fire; two companions, Corva (Thaw 8) and Ilune (Thaw 13); a tier-2 heavy bought the previous afternoon, four flasks and four bandages; about 2 marks; the Court's outer stones on the map and Corrow's letter in the journal | same | house furnishings; a prepaid mule instead of the one bought at hour 17 |
| **50** | Green, about day 104: region one finished at hour 40, region two ten hours old | **Level 12** (14,580 XP); **renown about 440** — Voice, and not remotely Force; five companions met in region one and one settled; tier 2, or tier 3 **only if the Holds have been repaired** (the trace ends at −65 and Marrock's Green contract is the road back); subclass not yet — that is level 15, about hour 74 | same, plus the side-chapter *The Foot* if bought, which gives Kest-flavoured quests and one companion and no gear above tier 4, which region two already sells | a second hearth (a second campaign) |
| **200** | the campaign's end | **Level 25** (96,980 XP) — the cap, reached at about hour 197; subclass since hour 74; **renown about 1,000** — Force since about hour 150; tier-5 bronze-laced gear; every region open and the Fall's question in the hero's hands | same, plus every side-chapter | cosmetics, chapters, conveniences |

### The working behind one row, in full: hour one

Evening one runs Thaw 1 06:00 to Thaw 3 14:00 in two hours twelve minutes of real time, with 33 open world hours, 17 of rest and a 6-hour verb-day ([FIRST_REGION](../slice/FIRST_REGION.md) §7.1, row 1). Thaw 1 itself is 16 of those open hours — 06:00 to 22:00 — and the trace anchors its own front end: "the player's first three minutes end here" at 07:00, after creation, the Firstwater scene and one open world hour. So Thaw 1's paused minutes are cheap and its clock minutes are not.

Counting forward at two real minutes to the open world hour, plus the scenes: 07:00 at minute 3; the six hours down the Old Shore road at minute 17 (12 of clock, 2 for Wat Hobb's yard and the bridge); the strays, the Court's roofs and the first salt-hound at minute 23; the seven-hour drove at one mile an hour to Gorse End's pasture at **minute 39**, where Reyne is standing with a lamp. The deed sheet is minute 40.

That deed is **row 1 `found_stock`, base weight 6**, and its receivers are the row's own and nobody else: Tobbin who lost them at +2 (reach 1), Reyne the owner (5), Hild who warned the hero (5), Garrow at the forge door as the flock came through (2), and two folk at the ford (1 each). **1 + 5 + 5 + 2 + 1 + 1 = renown 15**, and Moot +5 because Reyne holds the Moot's captaincy for the west. Experience: 120 for the quest, 30 for the hound, 30 for the Old Shore road — **180**, which is level 2 (60) and not yet level 3 (242).

The rest of the hour is Thaw 2: a rest to dawn (no real time), the half-day at Garrow's forge from 06:00 — a **verb-day**, which advances the clock six hours, costs no real minutes and pays 4 bits — and the walk up to Gorse End at 12:00, where Reyne uses the *heard* line to a hero he has never met, because Tobbin told him at the yard. The forge day writes row 57 `worked_the_trade` at weight 2, **which adds nobody**: renown stays at 15. The sixtieth real minute falls in Sallowford in the middle of Thaw 2's afternoon.

So hour one is **level 2, renown 15, one quest, one fight, two discoveries, a trade day and no companion** — and the most instructive thing in it is the row that added nothing.

*(The old draft of this table read renown 12 at hour one. The ledger's first entry is 15 and always was; twelve was a number without a deed under it.)*

### Two honest notes on the table

**The hour-ten row lands four minutes before the biggest jump in the region.** Renown 179 at Thaw 21 14:00 becomes **281 at 22:00 the same evening**, when the well-ring is kept at the Salt Hall door and Halse Corrow's hundred lands, and **294** by the evening's end at hour 12:20. The hour mark is where it is because the clock puts it there, and the shape of the curve — flat for six sessions and then a hundred points in one fight at a door — is the standing system's actual shape and not a defect in the table.

**The fifty-hour row is a fork, not a figure.** Tier-3 gear at fifty hours is available to a hero who has mended the Holds and shut to one who has not, and both are playing correctly. This is the one place in the fairness model where two free players legitimately differ, and the difference is a regard ledger, which no money can touch.

## 6. What is sold, and why the world survives it

Everything sold is priced once, in the store, in money. Nothing is sold for a currency that is also earned in play; nothing sold is a chance; nothing sold is a wait removed.

1. **Cosmetics.** Cloak and hood dyes; house furnishings for the Sallowford house (and later houses); companion garb; map styles (a Kest survey map, an Ulder water-map); portrait frames. Visible to others only in the sense that the hero's neighbours remark on them (a weight-1 memory: "Nice cloak"). No stat, no reach, no regard.
2. **Side-chapters.** Whole regions off the campaign's road, sold as chapters: *The Foot* (the Kest port below the Fall), *The Deep Court* (a court under the Still, by boat), *Kell in Winter*. Each is one to two evenings of the same engine and one companion, and none holds a tier, a subclass, a standing or a door the campaign needs. The five campaign regions and the map-changing end are free.
3. **Conveniences that are in the world already.** A **mule**, prepaid (4 marks at Hobb's Cross in-world; the prepaid one still eats a bit a day and can still be stolen by the Wrack). A **courier pass** (sell salvage from any site at Kit's price minus 10%; in-world, Wat Hobb's boy does the same run for 10 bits a time). A **second hearth** (a second hero slot; a free player gets one campaign at a time, and can finish it and start another). An **almanac** (the journal's rumours and map events kept for the whole campaign instead of the last season; a free player can buy the same book from Merrin Hale for 2 marks a season).

*Why the world survives it:* the only things a paying player has that a free player never gets are colours, side-valleys and a second save. No standing tier, level, ability, companion, gear tier, quest, door or fight is reachable by money. The engine's quests read the same state for both. The powers do not know who paid. A test the design holds itself to: **every store line must name the in-world way to get the same thing, or be cosmetic.** The mule names Hobb's Cross; the courier names Wat Hobb's boy; the almanac names Merrin Hale; the second hearth is a save slot; the chapters are places; the dyes are dyes.

*And the arithmetic backs it.* The three things that actually gate a hero — a gear tier, a standing tier and a subclass — are gated by a regard ledger (§3), a count of heads (§5) and an experience curve (§1) respectively, and there is no line in the store that writes to any of the three. The prepaid mule is the most generous thing sold and it saves four marks out of the twenty-five a free player earns in twenty hours: about a day and a half of the world's time, in a game where the world's time passes at four hours to the real hour whether it is bought or not.

*What is deliberately not sold:* experience, coin, marks, materials, gear, companions, standing, regard, knacks, respecs, revives, scar removal, Salt easing, time skips, offline-cap raises, quest re-rolls, map reveals, difficulty changes, autobattle (it is free and first-class), and anything with a timer, key, pull, chest or pity attached. The offline cap is seven days for everyone; nobody can buy an eighth.

## 7. Anti-grind rules

1. **Experience from a repeated fight halves** each time the same enemy kind is fought at the same site within a world-week, and from the fourth fight it is 2 or less. Enemies do not respawn without a simulation cause (a band is *Sent* or *Raised*; a court's Salted wake by state), so there is nothing to farm that the world did not put there for a reason.
2. **Quests are three-quarters of experience and nearly all coin**, and the engine offers at most six at once, so the fastest road is always the world's road.
3. **Standing cannot be ground.** Renown counts people, not deeds; a hundred errands for Tobbin are one memory in one head. A new tier needs new heads, and new heads are at new sites and higher stakes. The trace shows it twice on purpose: the forge day on Thaw 2 that adds nobody, and the three hours of the region's best quest on Thaw 39–42 that move the number by zero because every head in it is already counted.
4. **The trade is a floor, not a ladder**: a day at the forge pays 6–10 bits at every level and never more; it exists so a player who is broke and out of quests can eat, sleep and make a tier-1 blade, not so that they can buy tier 3 by smithing for a week — and tier 3 is not for sale to them anyway (§3).
5. **Companion shares** keep coin from accumulating: a full party costs 40% of every quest's pay.
6. **No daily anything.** Festivals are seasonal and the world's, not the player's; there is no login reward, no streak, no chest. A player who opens the app twice a day crosses a season in three played hours ([SESSION_UX](SESSION_UX.md) §5) and loses nothing by the two hundred other minutes.

## 8. Sizes and risks

Items: 5 tiers × (3 weapons + 1 armour + 4 tools) = 40 gear items for the campaign, 24 in region one. Materials: 3 families, 7 items. Store lines at launch: 12 cosmetics, 1 side-chapter, 4 conveniences.

**Risks.**
- *Deflation at Force.* A hero who holds a site with sway ≥ 60 gets a levy, not coin, so late-campaign income stays flat by design, and the late sinks — bronze gear at 40 marks, other people's arrears at 8, a toll-house's stone — are large enough to absorb it.
- *The regard gate on gear.* Tiers 3 and 4 can both be shut at once to a hero who has fought everybody, and §5's fifty-hour row admits it. Mitigation: five powers, and no quest in the region requires a tier above 2. The residual risk is a player who reaches hour fifty on tier-2 gear and reads it as being behind, which is a communication problem — the answer on screen is the shop's price line, "(not to you)", which names the power and not the purse.
- *The cap at 25.* It is derived from a two-hundred-hour campaign and a measured earning rate, so if the campaign grows the curve must be re-derived rather than the cap raised. That is a maintenance rule and it is written here so that nobody raises it quietly.
- *The business risk, plainly.* A game that sells colours and valleys earns less per player than one that sells power. The design accepts it, the pitch says so, and the twenty-five marks a free player earns in twenty hours is the whole of the leverage anyone would have had.

## Decisions this round

1. **Everything with a number was re-derived from [FIRST_REGION](../slice/FIRST_REGION.md) §7's rebuilt ledgers.** Renown at hour one is 15 and not 12; at hour ten it is 179 and not "about 180 by accident"; the Holds are at −65 and not −35; the trace does nine quests in twenty hours and not fourteen; the Stand wages the old ledger counted were never earned, because the rota was handed back.
2. **The level cap moved from 40 to 25**, because two hundred played hours earn about 97,000 experience and `60 × L^1.6` asks 326,800 for level 40. The curve stays; the cap now falls where the campaign ends. Knacks move to every third level so that eight of a class's twelve are still picked.
3. **Supplies are a journey cost, not a daily tax.** "About 8 bits a world-day active" charged the hero for sleeping in his own village and made the ledger irreconcilable with the trace's actual purchases. The rate now says what it is for.
4. **Gear tiers are stated as regard gates, in §3, with the trace's own numbers**, because that is what makes the store's refusal to sell power structural rather than a promise.
5. **The fairness table's hour marks are located by the session clock**, so each row names the session, the world day and the scene it falls in. An hour mark that cannot be pointed at on the clock table is an assertion, and this file had four of them.
