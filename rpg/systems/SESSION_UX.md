# Session and UX

A phone in one hand, held upright. This file describes creation, the portrait screen zone by zone, the thumb map, how the twelve field verbs are reached and how one fails on screen, the three session lengths and what each ends with, offline return, how the living world and the hero's standing are shown on a phone, and accessibility.

Everything with a clock in it is derived from [FIRST_REGION](../slice/FIRST_REGION.md) §7.1, the twenty-hour trace rebuilt forwards from the four-world-hours-per-real-hour rule; the world it shows is [LIVING_WORLD](LIVING_WORLD.md); the standing it shows is [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5; the verbs its petals fire are [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5; the fights it controls are in [COMBAT](COMBAT.md). Where a number here disagrees with those, they govern and this is the error.

---

## 1. The screen, zone by zone

The layout is described on a 9:19.5 portrait phone in five horizontal zones, from the top. Percentages are of screen height. The **thumb zone** is the bottom 40% and the right (or, mirrored, left) 60% of width: everything the player must touch in a fight lives there, within 70 mm of the corner the hand holds.

**Zone A — the strip (0–7%).** Left: the world clock as a glyph pair — season (a bud, a sun, a sheaf, a snowflake) and hour (a sun-arc that fills) — with the day's weather glyph. Centre: the **hearth glyph**, the hero's standing (an ember at Villager, a flame at Hand, a fire at Name, a beacon at Voice, a hearth with the map behind it at Force), which burns blue at a site where the hero is more resented than thanked, and under it the renown number. Right: coin, as marks and bits, and a small pack weight. Tapping the strip opens the journal (Zone E). **Long-pressing the clock glyph** is where [LIVING_WORLD](LIVING_WORLD.md) §1's pass-time action lives when the site allows it: a list of the next few hours with what each is for ("18:00 — Idony at the Ford Inn"), the world hours it will cost, and one line on what the powers do meanwhile. Nothing in Zone A needs to be tapped in a fight.

**Zone B — the field (7–58%).** The world, seen from above and a little behind, the hero at the lower third so the thumb never covers what is coming. NPCs carry a name when within 6 m and a small glyph for their greeting tier (nothing, a dot, a hand, a hearth, a blue hearth). Enemies carry a health bar and, on a telegraph, a widening ring under their feet. A **target lock** appears on the nearest hostile; tapping another enemy in Zone B moves it (this is the one in-fight touch outside the thumb zone, and it is optional: the arc fires at the lock, and the lock follows the policy's priority when the player does not touch it). Out of a fight, tapping a person or a thing in Zone B **selects it as a verb's target** — the petals below redraw for what that target supports. A pulsing **objective chip** appears here in set pieces (the ledgers, the gate) and is tapped once to set it.

**Zone C — the line (58–63%).** One line of text: the current rumour, the giver's last sentence, the quest's next step, or in a fight the encounter glyph and a two-word read of the situation ("Two behind"). Never a paragraph.

**Zone D — the thumb zone (63–100%).** The right (or left) 60%: the **arc** — four petals fanned around the corner, in a quarter-circle at 22–48 mm from it, reachable without moving the grip.

*In a fight* the petals are the class's four arc abilities, always in the same order (basic at the bottom, then interrupt or control, block or escape, then the big one at the top). Each petal shows its cooldown as a fill and its cost as a rim. **Tap** fires at the lock; **hold and drag** aims (Fling, Snare, Powder, Shove) and releases on lift. In the arc's centre, at the corner, the **hearth button**: tap to quick-use (a bandage, a drink from the skin); **long-press** to toggle **autobattle**, which turns the arc gold and lets the player watch, or keeps aiming petals live so the player can interject one ability at any time without turning autobattle off (an interjection pre-empts the policy for that ability's duration; the policy resumes).

*Out of a fight* the same four petals become the class's **four field verbs** ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5) in the same four positions, and the hearth button becomes the hero's **trade verb** where the site supports one. §2.5 of this file describes that screen in full. The petals swap back the instant a hostile enters the field, and the swap is the only animation the arc has.

The left (or right) 40% of Zone D and all of the lower field is the **movement surface**: touch anywhere and drag to move, the stick appearing where the thumb landed; **flick** to dodge in the flick's direction. Because the same thumb moves and taps, the hero stops for the instant of a tap; every ability is instant on tap, and the movement stick re-acquires on the next touch without a dead zone. Two **companion chips** sit at the top-left of Zone D (mirrored: top-right), each a portrait with its stance glyph; tap to cycle *Close / Free / Back*.

**Zone E — the drawer.** Swipe up from Zone C (or tap the strip) to open the drawer over the field: four tabs in a row at thumb height — **Journal** (quests by deadline, rumours by day, letters, notices copied from boards, and the away pages filed under their days), **Map** (the one shape: the bowl, drawn as a Vael would draw it, with the first region's sites marked and the powers' marks on them — a knife for a band, a stone for a hold, a scale for a counting-house, a ring for a kept stone, a flame for a burned site, a wave for a flooded one; tap a site to travel, and the clock shows the hours it will cost and whether the trip is a jump or a walk), **People** (everyone the hero has a memory with, their greeting tier, their last known site, and, for companions, regard and agenda), **Pack** (gear by slot, supplies with counts, materials, and the trade's tools). The drawer is closed by a swipe down. Map travel and rest are the only actions in the drawer; everything else is reading.

**Dialogue.** A speaker's line at the bottom of the field, above the arc, with two to four answers as full-width bars in the thumb zone. Tap to answer; no timers. Long conversations are two or three exchanges; the journal keeps them.

**Creation — the first screen anyone sees.** One screen, four taps, no scroll, and it grants nothing.

- **A name**, typed, with a suggest button that draws from the Vael name table.
- **A trade**, one of four, each of which is a verb in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5's trade table and a master in the village: *smith* (Mend; Garrow Tull), *herb* (Dress; Hild Marrow), *boat* (Boat; Osk), *cart* (Haul; Wat Hobb at Hobb's Cross). The tap shows the verb's one-line cost and return, so the choice is a choice about play and not about flavour.
- **A class**, one of three, shown as its four arc petals and its four field verbs on a miniature of the arc — Fighter (Break, Carry, Drill, Stand), Mage (Dowse, Read, Dry/Flood, Ease), Rogue (Listen, Shadow, Forge, Fence) — with one line each. The player sees the thumb layout they will use before they choose the hand that uses it.
- **A hand**, left or right, which mirrors Zone D and the companion chips and can be changed at any time in settings.

Then the field, at Sallowford, at Thaw 1 06:00, in the Firstwater crowd. **Renown 0, no memories, no letters, no marks on the map beyond the village.** Creation writes nothing to the world: it chooses which verbs the thumb will have and who in the village already knows the hero's face, and that is all — a hero who starts with standing is a design smell and this screen is where the design refuses it. A face is chosen from six and a cloak colour from four; both are cosmetic and both are also in the store, which is the store's whole shape ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §6).

## 2. The thumb map

Everything a fight needs is in the corner: four petals (abilities), the hearth button (quick-use; autobattle), the movement surface (move; flick to dodge), two stance chips (companions). Everything a fight does not need is out of the corner: the target lock (optional), the objective chip (once), the strip and the drawer (never in a fight). Mirroring is one setting and flips Zone D and the chips. The design rule: **a fight can be won with one thumb that never leaves the bottom-right 60 × 70 mm, and a fight can be watched with one long-press.** The hero's position in the lower third of the field keeps the thumb off the enemies.

Out of a fight the corner does not change shape. The same four petal positions, the same centre, the same 12 mm minimum, the same reach — which is why a player who has learned to fight has already learned to Break a dam, Read a ring or Listen at a settle.

## 2.5 The twelve field verbs on the screen

[CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5 gives twelve field verbs — four per class — plus four trade verbs, of which a hero has one. A hero therefore reaches **five verbs**, and all five are in the thumb's corner.

**Where they are.** Out of combat the four arc petals are the class's four field verbs, in the same order they hold in a fight: bottom petal the cheap, common one (Fighter Break, Mage Dowse, Rogue Listen); then the one that needs a person (Carry, Ease, Shadow); then the one that needs a day or a room (Drill, Dry/Flood, Forge); then the one that needs a contract or a fence at the top (Stand, Read, Fence). The hearth button at the corner is the trade verb — Mend at a forge at heat, Dress at a gathering band in season, Boat at a boat, Haul at a cart on a road — and is dark everywhere else.

**How one is fired.** Tap a target in Zone B (a dam, a person, a ring, a settle, a site) or nothing at all for verbs that take the site; then tap the petal. The petal opens the **confirm sheet**, which is the only modal screen in the game and is paused. It says three things and never more, exactly as §2.5 specifies:

> **Break — the hewers' dam**
> 20 stamina, 12 health · 30 world minutes
> *Nobody within an hour's march.*

The third line is the go-wrong condition read against live state, in plain words, whichever way it reads: "*Nobody within an hour's march*" or "*Garrow Tull is at the settle until 21:00*". A full-width commit bar sits at the bottom of the sheet in the thumb zone; a swipe down cancels and costs nothing.

**What a verb failing looks like.** Three different things, and the screen shows all three differently, because §2.5 gives verbs three outcomes and not two.

1. **Cannot be fired here.** The petal is greyed and its rim carries the unmet need in four or five words. A Mage standing at the hewers' log dam sees *Flood — needs held water above* and *Dry — needs an enclosed room*: her two shaping verbs, both refused, both saying why, before a drop of water is spent. This is the commonest failure in play and it costs nothing but a road.
2. **Falls short.** The verb fires, the cost is paid, the clock advances, and nothing is returned. The sheet that follows is one line — "*Nothing but the fire.*" — and the site or band is marked so the player is not invited to repeat it: a `dowsed_dry` band greys on the map, a `spot_watched` settle carries a small closed eye for ten days.
3. **Goes wrong.** The verb writes a deed against the hero from [LIVING_WORLD](LIVING_WORLD.md) §4. The screen says so in the same three-line shape as a deed done well, and the difference is only the words: the row, who now holds it, and what it changed. A verb can work *and* go wrong in the same minute, and then the player gets both sheets, in that order, which is the point: the rumour was worth having and the master saw you take it.

**Why it is not a menu.** The verb is aimed at a thing in the world, priced against state the player can read on the same screen (the hour in Zone A, the people in Zone B, the water or stamina on the rim), and committed with the same thumb that fights. No verb is a dice roll and none can be failed by luck ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5), so the confirm sheet is a full statement of the risk and not a warning label.

## 3. Three sessions

Every session ends with a world change the player can name. Three clocks and only three ([LIVING_WORLD](LIVING_WORLD.md) §1): **open play** at one world hour per two real minutes; **map travel and rest**, instant for the player; and **offline** at four world hours per real hour, capped at seven world days. Dialogue, the away page, the map, the journal, shops and the confirm sheets are paused.

Across the whole traced twenty hours those paused minutes come to almost exactly the open-play minutes — 293 open world hours are 586 real minutes of a 1,200-minute total ([FIRST_REGION](../slice/FIRST_REGION.md) §7.1) — so the planning rule for a session is **four real minutes per open world hour: two of clock and two of screens.** Every budget below is printed so it can be checked.

A Rogue plays the first, a Mage the second and the traced Fighter the third.

### The three-minute session: an errand, played as a **Rogue**

This is the trace's own third session, [FIRST_REGION](../slice/FIRST_REGION.md) §7.1 row 3: **Thaw 11 12:00 → Thaw 11 19:00**, four real minutes, one hour of open play and six hours of map travel. It is the first session in the game that is not mid-campaign, and it is the flagship: a phone taken out on a walk.

*State on opening.* Renown 70, Hand since dawn on the 9th, the glyph a flame. The hero is at Wickery, where the last session closed at noon on the 9th. `roads_slow` is on. In the journal: Pell Tarn's letter, taken at the Rudd Bridge on the 9th, addressed to his aunt, who is the reeve of Sallowford.

| | Real | World |
|---|---|---|
| Away page: "Two days. Rain. The Chain are asking at the Post who was at the bridge. Reyne Gorse has the Moot's levy letter and wants you." | 0:15 | *paused* |
| Drawer → Map → Sallowford. The sheet reads **6 h** (eight miles of road at half speed) and **a jump**, because the hero has stood in Sallowford. Commit. | 0:20 | 12:00 → 18:00 |
| Arrive at the ford at 18:00, walk in. Idony has left her table at 18:00 for the Ford Inn, which is where the six hours put the hero and is the reason this errand lands at dusk and not at dawn. | 0:20 | 18:00, open |
| Pell's letter across the settle. Two lines and one decision: give it, or keep it and hold a reeve's nephew's life in the pack. | 1:20 | *paused* |
| **Deed sheet.** Row 5 `carried_kin_word`, w7 — Idony (20), Pell (5), Osk by the fire (5). **Renown 70 → 100**, and the player watches the number move under the glyph. Writes `letter_delivered(Pell)` and the door "Pell's Pardon". | 0:25 | — |
| **Listen** at the Ford Inn's settle, one of the region's nine listening spots. The confirm sheet: *2 bits · 1 world hour · Garrow Tull is at the settle until 21:00.* Garrow holds a weight-6 memory of the hero from Thaw 1, and Listen goes wrong when someone who already knows the hero is there. Take it anyway. | 2:00 | 18:00 → 19:00, open |
| **Two sheets.** *Works:* every memory passed at the settle that hour, verbatim — Hild telling Garrow that the Chain went to her door, and who told them. `heard(chain_asked_at_hild's)`. *Goes wrong:* row 34 `caught_listening`, w5 — Garrow, the hero's own master, at +2 to w7. Moot −10. `spot_watched(Ford Inn, 10 days)`. Garrow adds **no head**: he has held one since the flock came home. **Renown stays 100.** | 0:40 | — |
| Close. | **4:00** | Thaw 11 19:00 |

*World change, named:* a door opened that did not exist at noon — Pell's Pardon is now a quest the engine can build — a reeve moved to *owes*, the valley's fastest rumour spot closed to the hero for ten days, and the number under the glyph thirty points higher than it was four minutes ago.

*The shorter version.* A player who takes the jump and does not Listen closes at **2 minutes 20** with the letter delivered, which is the floor of the three-minute session; a player who does Listen pays two real minutes for the one world hour and gets the rumour and the bruise. Both end with something changed, which is the rule.

*(This session's third head is Osk, as the ledger in [FIRST_REGION](../slice/FIRST_REGION.md) §7.3a counts him. Osk's `hurt` override there currently runs Thaw 2–12 and keeps him in his hut at all hours; for him to be by the Ford Inn's fire on the 11th the window must read Thaw 2–10. That is the one change this session needs from a file it does not own, and it is listed as such.)*

### The fifteen-minute session: a venture, played as a **Mage**

*The Miller's Water* (V1), Thaw 7 — the same quest the traced Fighter runs, taken by the class that has to solve it another way. The Fighter Breaks the hewers' dam. **A Mage cannot**, and the screen says so before she spends anything: her Dry and Flood petals are greyed at the dam with their needs printed, because a float-pond behind a log dam is not an enclosed room and there is no held water above the dam itself. Her road is the ring.

*State on opening.* Level 3, renown 28, Villager still by the dawn read. Water 100, Salt 0. Corva has not joined. At the Hewers' Camp at 10:00, where the last session left off; `roads_slow` on.

| | Real | World |
|---|---|---|
| Away page and the journal's next step. | 0:15 | *paused* |
| Rukk of Thrum states Thrum's claim: "Every field in this bowl is our gift; we'll dam our own gift if we like." | 0:45 | 10:00, open |
| The dam selected in Zone B. **Flood** greyed: *needs held water above.* **Dry** greyed: *needs an enclosed room.* Nothing is spent; the Mage turns round. | 0:20 | — |
| Six world hours up the track and the moor to the Rudd Stones, walked at two real minutes to the hour, because it is a first traversal and the map will not jump a road the hero has not stood on. Rain the whole way; the Wend's leaf-mould is the only thing in the region that keeps water five days, which is a line Zone C gives her on the climb and which she will want later. | **12:00** | 10:00 → 16:00, open |
| Ondrin at the ring, as a keeper always is. He will not simply loose the Rudd for the asking. | 0:40 | *paused* |
| **Read** the ring. The sheet: *15 water, 5 Salt (the moor stone is dry) · 30 world minutes · Ondrin is the keeper and is giving leave.* Commit. Returns the clause — which river a ring can hold or loose — which is exactly the fact V1 needs and which no Fighter in the region can get. | 0:35 | 16:00 → 16:30, open |
| **Deed sheet.** Row 58 `drew_before_us`, w3, Ulder witnesses at w5: Ondrin (5). **Renown 28 → 33.** Writes `known_drawer` — the flag that puts the hero on the Stair's list of people who dry salt-pans, which is the price the Mage pays for the road the Fighter does not take. | 0:25 | — |
| The asking, and the promise stated aloud: that the hero will tell Reyne Gorse the old ash is a stone-mark before any Skerrow contract touches it. Ondrin looses the river. `river_flow = normal`; `ondrin_owed`; Quiet +10. | 0:45 | 16:30 → 17:00, open |
| Close at the ring, in the rain, four hours' walk from a bed. | **15:45** | Thaw 7 17:00 |

*World change, named:* the Rudd runs. Fenn's Mill grinds again tonight whether or not the player is watching, which means Bram Fenwright pays his Quarter-day on the 10th, which means the *Seize* queued against him on the 24th never fires and the Wrack's second recruit of the season never arrives — three consequences the player will meet on three different away pages ([FIRST_REGION](../slice/FIRST_REGION.md) §7.2, Thaw 20).

*Where the minutes went:* twelve of the fifteen are the climb. That is the design's answer and not its accident — [FIRST_REGION](../slice/FIRST_REGION.md) §1's rule that a first traversal is walked is what makes the region's roads content rather than a loading screen, and it is why a fifteen-minute session covers seven world hours while a four-minute one covers seven as well, all of them jumped.

*Two roads, one quest, and neither is the other's discount.* The Fighter's Break costs 20 stamina, 12 health and half an hour, breaks the dam, and writes row 27 `broke_our_work` — the Holds at −15 and a foreman who knows his face for eighty days. The Mage's Read costs 15 water, 5 Salt and a six-hour climb, breaks nothing, and writes `known_drawer` and a promise that will be called in on Thaw 16. Same quest, same state at the end (`river_flow = normal`), different ledgers.

### The evening session: a descent, played by the traced **Fighter**

[FIRST_REGION](../slice/FIRST_REGION.md) §7.1 row 5, verbatim: **Thaw 20 14:00 → Thaw 23 19:00**, three hours twenty-eight minutes of real time at play hours **8:52 to 12:20**, covering 77 world hours — 52 of open play, 4 of travel, 21 of rest. Two to four world days is what an evening covers, every time, because rest jumps to dawn and the descent does not.

*Thaw 20.* Kit Ashby is on the quay at 14:00 because a letter day puts her there, unloading, and a letter she carries leaves her hand as the boat empties: **N1, Corrow's Letter** — dusk on the 21st at the Court's outer stones. The afternoon is shops, which are paused: a tier-2 heavy at Wickery's smith (2 marks), four flasks of oil (12 bits, and four because the Salt Hall halves them), four bandages. Dell Coombe docks the Stand day missed on the 18th while the hero was away. Rest at the Post.

*Thaw 21.* The morning in the town, then four hours across the Shelf — travel, because the party is the hero, Corva and Ilune and the route is now known. Dusk at the outer stones: Corrow, two Wrack, a lamp. **The meeting writes nothing**: `came_and_looked` at weight 2, which does not travel, and the number under the glyph does not move — the hundred that Corrow is worth is not the price of a conversation. The escorted descent to the Drowned Steps: three hounds and two cranes, the drowned boat, six sacks of bronze noted in the walls. The Salt Hall door at 22:00, Rukk's crew cutting the well-ring by lamplight for Kest pay, and the choice. Driving them off is **Fair** (`PR 110` against `ER 72`) and takes forty seconds. **Row 26 `kept_the_charge`, weight 10, never decaying** — the Wrack's third goal, at Corrow's second seat, which is where his hundred lands. Row 52 `drove_off_our_crew` with Rukk. Up the slide at midnight to a Wrack camp that beds a Moot levy's Fighter, which has not happened before. **Renown 179 → 281.**

*Thaw 22.* The Salt Hall stair (COMBAT §7's Encounter B, Break stripping the husk's crust where the written version uses a Shield's Crack), the cistern, four sacks cut from the hall's fittings — row 53 `took_the_bronze`, Holds −15 and Quiet −20, the same night's work costing in two ledgers at once. Break on the sluice-wheel opens the tunnel to the Salt Pans; six Chain under a new corporal at dusk, an *Even* fight declined, and row 64's `ran` at weight 2, which counts for nothing unless it happens twice in one town. Wickery by 22:00; Kit buys four sacks at 1½ marks in the back room. **Level 6.**

*Thaw 23, and the best five minutes in the region.* Marrock's yard: "Not from you. Not from there." Kit's warning that Drusk is asking where the hero slept (row 63 `went_below`, Quiet −5). And Merrin Hale's hand on the Moot's notice at the market cross with the hero's name in it — row 61 `posted`, w3: Merrin (5) and **eight promoted folk (8), the board's maximum and the whole of what a notice can do**. Then the Stand rota handed back at the gate rather than broken, which costs nothing and keeps the Moot's +5. **Renown 294.** Close at 19:00.

*World change, named:* `well_ring_intact` kept for the campaign; `marrock_refuses_court_bronze`; the outer stones, both layers, Corrow's Reach and the Salt Pans on the map; Stair −25, Holds −25, Quiet −5, Wrack +15; a hundred-head leader who did not know the hero on Thursday; and the hero's name on a town's board.

**A long evening is rewarded** by the world's density, not by a bonus: the engine keeps offering, dungeon layers are long, world-days keep passing so that the faction moves a shorter player would read on an away page happen while this one watches — a band arrives at the bridge as they cross it — and the offline cap, which is the only thing in the design that throttles anybody, cannot apply to a player who is in the world.

## 4. Offline return: the away page

On open, if more than one world hour has passed offline: one card. The advance is arithmetic and is printed on the card's back: **real hours away × 4, to a cap of 168 world hours**. Ten minutes away is nothing; six hours is a day; a week is seven days; a month is also seven days.

Top: "*N* days. *Weather.*" Then at most seven lines, chosen by the consequence system in this order — anything that touched the hero's home or party; letters arrived; map events in the hero's region by proximity; power moves the hero's regard makes personal; the season's flag changes; a rumour. Each line is a map-event template filled with names ([LIVING_WORLD](LIVING_WORLD.md) §5). Below: "Letters: 2" and "Journal: 1 deadline passed" as tappable chips. One tap dismisses; the page is kept in the journal under the day.

*The trace's first gap, checked:* the player closes on Thaw 3 at 14:00 and returns nineteen real hours later. 19 × 4 = 76 world hours, under the cap, so the clock reads **Thaw 6 18:00**. Three dawns have passed: three weather rolls, fifteen power moves, three memory decays.
*The page:* "Three days. Rain, then clear, then fog tonight. — The mill at Fenn's has stopped: the Skerrow have dammed the Rudd above the Wend. — Men with knives are camped at the Rudd Bridge. — Idony Sallow asked after you twice."

Then the field, at dusk, in fog. Nothing on that page was written for the player; every line is a power's move or a memory tick that would have run had the app never been opened.

## 5. Sessions on the clock

**What a session spends.** From [FIRST_REGION](../slice/FIRST_REGION.md) §7.1's nine sessions: a three-minute errand spends **two to seven world hours** (rows 3 and 7 spend 7 and 2); a fifteen-minute venture spends **six to twelve**, or a night more if it ends in a rest, which jumps to dawn; an evening spends **two to four world days** (the seven evenings span 48, 56, 66, 77, 78, 84 and 96 hours).

**What a season costs, and this is the number the old draft of this file got wrong.** The world's calendar runs at four hours to the real hour whether or not anyone is playing, so how many *played* hours a ninety-day season costs depends entirely on how much of the day the player is in it. Let `P` be real hours played per calendar day. In session the trace advances the world 25.7 world hours per played hour (514 in-session world hours over 20 played hours, §7.1); away, it advances 4 per real hour. So:

> world hours per calendar day = `4 × (24 − P) + 25.7 × P` = `96 + 21.7 P`
> played hours to cross a 90-day season = `2,160 P ÷ (96 + 21.7 P)`

| The player | Played per day | World days per calendar day | Played hours per season | Calendar days per season |
|---|---|---|---|---|
| Two errands a day | 8 min | 4.1 | **3** | 22 |
| Half an hour | 30 min | 4.5 | **10** | 20 |
| An hour | 1 h | 4.9 | **18** | 18 |
| An hour and a half | 1½ h | 5.4 | **25** | 17 |
| The traced evening player | 3 h 24 | 7.1 | **43** | 13 |

The trace is the bottom row: twenty played hours and 121 away is 141 real hours — five days and twenty-one hours — and it reaches Thaw 42, half the season, which is 43 played hours for the whole of it. [FIRST_REGION](../slice/FIRST_REGION.md) §7.4's "about forty hours for an evening player and twenty-five for a daily one" is this table's last two rows, and "a daily one" means an hour and a half a day, not a check-in.

**What that means, said plainly.** A light player sees the season mostly through away pages and a heavy player sees it mostly through play, and **both finish it**, because the region's anchors — the Quarter-day, the Reckoning, the Quay Fight — are on the world's calendar and not on the player's. The light player's three hours are not a worse three hours: they are the same deeds, the same doors and the same ending, told at four hours to the minute with the connective tissue read rather than walked. The heavy player's forty-three are not bought advantage: they buy more of the valley seen, more heads met and a higher renown ceiling reached inside the same season, which is the only thing time has ever been allowed to buy here.

**And the cap protects the lapsed player.** Seven world days per absence means a player who is away six weeks loses six weeks minus seven days of world time — the world waits. Nobody can buy an eighth day ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §6) and nobody loses anything by not opening the app, because there is no daily mechanic to miss.

## 6. Showing the living world and the hero's standing

- **The number and the glyph.** Renown is recomputed after every deed and the number under the hearth glyph moves while the player watches; the **tier** is read at dawn ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5), so the glyph, the greetings, the prices and what the engine offers all change together at one moment the player can be present for. That is why the number reads 36 on the evening of Thaw 8 and the glyph is still an ember, and why it is a flame at breakfast on the 9th. Tapping the glyph lists the heads: every person holding a memory, what they hold, and what it is worth. The player never sees a bar.
- **Rumours.** Zone C's line changes at every site entry and every world hour in the open; the journal keeps the last thirty by day. Rumours are the memory system's meetings, seen from the outside: "Heard at the Post: Reyne's sold the strip above the pasture to Thrum. Someone stood witness." A Rogue does not wait for them — Listen reads the same tick at certainty for a world hour and two bits.
- **Notice boards.** Every town and village has one; it lists the powers' *Post* moves (jobs at a standing threshold, with the hero's name on them from Name upward), the Moot's levies, the Stair's called debts by name — this is how the player learns who will join the Wrack next — and the reeve's bans. Reading a notice copies it to the journal. A notice reaches at most eight promoted folk, which is the whole of what a board can do, and the second notice in a town is worth less than the first because the pool is already holding the first one's names.
- **Letters.** Arrive at the hero's home or last inn, one to three days after a power's regard crosses a threshold or a tier changes; they are the powers' voices. The journal keeps them; the People tab shows who has written.
- **The map that changes.** Markers are site states: a dam, a knife, a scale, a flame, a wave, a stone, a ring gone dark. A site's control is a coloured rim (Moot green, Stair grey, Holds rust, Quiet blue, Wrack black), and each rim carries a glyph as well, so colour is never the only signal. Tapping a marker gives the map-event line and the day it happened. The map is the same one shape at every scale — the region is a wedge of the bowl, and pinching out shows the whole bowl with the other regions greyed.
- **Greetings.** Every NPC's first line is the memory tier ([LIVING_WORLD](LIVING_WORLD.md) §2). The player sees who says the name, who says "Morning," and who shuts the door. A greeting at *hates* is the same length as one at *owes*, because standing keeps its size and changes its colour.
- **Prices.** Shop prices show the regard modifier as a plain word beside the price: "(neighbour's price)", "(Kest price)", "(not to you)". A power at −60 or worse is how the player learns a road has become hostile, before any band appears on it.
- **The People tab** is the standing screen: it lists the heads that hold the hero's name and what each holds, which is exactly what renown counts.

## 7. Accessibility

One thumb, either hand (mirror). Petals and chips at a minimum of 12 mm; the movement surface is the whole lower field so there is nothing small to find; the confirm sheet's commit bar is full width. **Autobattle is the accessibility mode** and is first-class by design, so a player who cannot flick or tap fast plays the whole campaign on a long-press and the stance chips. Telegraphs are a ring, a sound and a haptic pulse, so any one channel is enough. Text scales to 150% without reflowing the arc; dialogue and confirm sheets have no timers; Zone C and every confirm sheet — including a greyed petal's needs line, which is the screen's main way of saying no — can be read aloud by the system screen reader with the field paused. Reduce-motion swaps the Mist and water effects for outlines. The offline cap, the seven-day ceiling and the absence of daily mechanics mean there is nothing a player loses by not opening the app.

## 8. Sizes and risks

**Screens: eleven.** The field; the drawer's four tabs; the away page; dialogue; the confirm sheet; the store; creation; the set-piece objective overlay.

**Risks.**
- *The shared thumb.* Moving and tapping with one digit means the hero stops on every tap. The design accepts it — abilities are instant, enemies telegraph at 0.6 s, the dodge is a flick and not a button — and COMBAT §6's parity policy proves a stationary tap is survivable at Fair.
- *Zone C carrying too much.* One line, and the journal for the rest.
- *The verb petals swapping under the thumb.* A hostile entering the field turns five field verbs into four abilities in the same four positions. Mitigation: the swap is animated once, the petal glyphs are different shapes and not just different icons, and no verb can be fired in the first 0.5 s after a swap.
- *The confirm sheet's third line.* It is the whole risk model on one line of a phone, and it has to be true. The mitigation is that the go-wrong conditions in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5 are all readable from state the simulation already holds — band positions, schedules, memory weights — so the line is generated, never authored, and cannot go stale.
- *The light player's season.* §5's table says a check-in player crosses a season in three played hours. The risk is that they meet the region as a stack of away pages. The mitigation is the away page's ordering rule (home and party first) and the fact that quests are not on the calendar; the honest statement of the residual risk is that this design's lightest player reads more of the world than they walk, and it is by construction, not by neglect.

## Decisions this round

1. **The field verbs are the arc, out of combat.** A separate verb menu would have been a second control language and a second thing to learn. The petals swap; the corner does not move. The trade verb takes the hearth button, which has nothing to do out of a fight.
2. **A verb fails in three visible ways, not one** — greyed with its need printed, *falls short* with the cost spent, *goes wrong* with a deed row — because [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2.5 gives it three and a screen that showed only success and failure would be lying about the system underneath it.
3. **Creation is specified and grants nothing.** Four taps, and the class tap shows the four field verbs as well as the four abilities, because the out-of-combat identity is half of what is being chosen.
4. **The three session examples are re-derived from [FIRST_REGION](../slice/FIRST_REGION.md) §7.1 and printed with their real-minute budgets.** The old draft's three-minute errand ran three hours to a reeve at her table; the rebuilt clock makes it six hours to a reeve at an inn, and the difference was the whole of round two's complaint against this file.
5. **A Rogue plays the three minutes and a Mage the fifteen.** The Mage's road through V1 exists because her two shaping verbs are *refused on screen* at the dam, which is a better argument for the verb system than any road that worked.
6. **§5's season table replaces an assertion with a formula.** The old "twenty-five hours for someone who opens the app once or twice a day" was off by an order of magnitude: at four world hours to the real hour, a two-errand player crosses a season in three played hours. The number was wrong and the finding underneath it is the more interesting thing.
