# Classes and Standing

Three disciplines — **Fighter, Mage, Rogue** — each with verbs in combat and out of it, a growth line from level one to the campaign's end, things it cannot do, and a subclass roadmap the base leaves room for. Then the **standing** system: how the Hearth measures a name, and the road from villager to force at five milestones. Combat numbers are in [COMBAT](COMBAT.md); growth and gear in [PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md); the world's memory in [LIVING_WORLD](LIVING_WORLD.md).

---

## 1. Start: a trade and a bent

The hero is a villager of Sallowford ([FIRST_REGION](../slice/FIRST_REGION.md)). At creation the player chooses a **trade** (four: smith, herbalist, fisher, carter) and a **class**. The trade is who the hero has been; the class is the bent the trade has shown. A Fighter-smith has the arms from the anvil; a Mage-herbalist learned to dowse from Hild Marrow, who learned from an Ulder; a Rogue-carter knows every road and who pays no toll. Any pairing is allowed; each trade gives one out-of-combat verb and one relationship in the village:

| Trade | Verb | Village tie |
|---|---|---|
| Smith | **Mend** — repair gear and village tools at a forge; make tier-1 iron | Garrow Tull, master |
| Herbalist | **Dress** — make bandages from gathered plants; read a wound | Hild Marrow, teacher |
| Fisher | **Boat** — handle a boat on the Still and the Court's flooded halls | Osk, whose boat it was |
| Carter | **Haul** — a cart on the roads: carry double, sell in Wickery at town prices | Wat Hobb of Hobb's Cross |

No class starts with standing. Standing at creation is 0: nobody outside the village knows the hero, and inside it they know a smith's hand, not a name.

## 2. The three classes

Each class has four **arc abilities** (the four petals under the thumb, [SESSION_UX](SESSION_UX.md) §2), a shared **dodge**, one **resource**, and four **field verbs** used out of combat in quests. The Adventure Engine's twelve verbs each have at least one solution per class; the table at the end of this section shows which.

### Fighter — the one who stands

*Fantasy:* the strong back of the valley. Where a Fighter stands, a line holds: a door, a bridge, a ford, a wall. The Fighter is the class the Moot levies, the Chain hires, the Holds respect and the Wrack recruit, and the class whose worth every villager already understands.

*Resource:* **Stamina** 100, regenerating 10 a second; abilities cost stamina and the Fighter never runs dry for long.

*Arc:* **Strike** (weapon hit; free; a heavy weapon's third Strike in a chain is a *Cleave*, hitting all in front) · **Shove** (knock back two metres, interrupt a telegraph; 15 stamina; 6-second cooldown) · **Hold** (brace: block 80% from the front for two seconds, then a counter-Strike at ×1.5; 20; 8s) · **Rally** (companions and hero: +20% damage for six seconds and 10 health; 25; 20s).

*Field verbs:* **Break** (doors, dams, cistern walls, a stone-cart's axle; anything with a `breakable` state) · **Carry** (a hurt companion, a lame ewe, a sack of bronze, at full speed; other classes carry at half) · **Drill** (train a village's militia: a day at a site with a `militia` state raises its quality by one for a season; Sallowford's band goes from quality 1 to 2) · **Stand** (an escort or a guard contract: the Fighter's presence at a site counts as half a band in a clash, and powers offer *Stand* work at Hand tier).

*Growth 1–40:* Strike chains lengthen (three hits at 1, four at 10, five at 20); Hold's counter grows; Rally reaches further; at 15 the Fighter chooses a subclass. By the campaign's end a Fighter with Voice standing is a **line**: a hero whose Stand counts as a full band, whose Drill makes quality-3 militia, who can Hold a gate against a salt-warden for the two seconds a Mage needs.

*Cannot:* find what is hidden (no Dowse, no Listen); talk a door open (no Forge, no Factor); cross water without a boat or a bridge; use Drawing at all. A Fighter alone in the Court's flooded halls is a Fighter who needs a companion.

*Subclass roadmap (chosen at level 15, three options):* **Warden** — Hold becomes a wall (block all sides, four seconds), Stand counts as a band, the Warden's site gains defence; for the player who holds. **Breaker** — two-handed; Cleave on every Strike, Break works on court walls and Salted husks' crust, Shove throws; for the player who goes through. **Captain** — Rally becomes orders (two companions get a third stance, *Charge*), Drill trains two bands a season, the Moot and the Holds offer band command at Name; for the player who leads. The base class leaves room by never touching multi-side blocking, wall-breaking or a third stance.

### Mage — the one who draws

*Fantasy:* a villager who learned that water remembers, and who carries a waterskin the way others carry a blade. The Mage is quiet, useful, watched: the Quiet see a pupil, the Stair sees a tool, the Skerrow see a leak, the Wrack sees what they will become.

*Resource:* **Water**: a skin holding 100. Every working spends water. The skin refills at any water source (a river, well, pool, rain, the Still: full in ten seconds); on the dry Shelf and in the Court's upper halls there is none, and the skin is a countdown. **Thirst rule:** a working with an empty skin costs health equal to 1.5 × its water cost and adds Salt equal to its water cost. **Salt** is a lifetime counter: every 100 Salt is a permanent *crust* (−10% maximum health, a grey mark on the portrait, and the *Salted* greeting from Ulder who see it). A kept stone ring eases 25 Salt once a season. At 500 Salt the hero's portrait is more grey than not, the Quiet stop teaching, and the Wrack's Address threshold drops; at 1,000 the campaign's last door opens on the Shelf and no other closes — but nothing ever stops the hero from playing.

*Arc:* **Fling** (a fist of water: 6 damage at 8 metres, slows 20% for two seconds; costs 2) · **Bind** (freeze one target's feet: rooted 2.5 seconds, immune to a second Bind for 8; 20; 8s) · **Mist** (fog over the party for three seconds: enemies lose their target, ranged shots miss, the party moves at full speed; 25; 20s) · **Wring** (pull the water out of one target: 30 damage at once and 10 a second for three seconds; double against the Salted; forbidden by the Quiet on the living — each living Wring writes a weight-6 memory to any Ulder witness; 30; 12s).

*Field verbs:* **Dowse** (find water and what water has touched: tracks in mud, a hidden door behind a damp seam, a drowned thing, a body; the Mage's answer to *search* and *investigate*) · **Read** (a stone ring or a court's inscription speaks to a Drawer: lore lines and the ages' preambles, and the Skerrow contract's water-clauses) · **Dry / Flood** (open a passage by drying it, at a cost of 40 water per room, or close one by loosing a cistern; the dungeon-shaping verb, and the verb Sarane asks for in Vo2) · **Ease** (tend a companion's wounds with water: 15 health over five seconds; 15 water).

*Growth 1–40:* the skin grows (120 at 10, 150 at 20, 200 at 30); Fling gains a second slow; Bind holds two targets at 20; Mist lengthens; at 15 a subclass. By the campaign's end a Voice Mage can hold a river with a ring, dry a court's hall, and be argued with by the Closers as an equal.

*Cannot:* hold a line (no Hold, no Stand; a Mage who is struck from the front is a villager being struck); break a door (no Break); fight dry — on the Shelf every working is a wound; hide a working from the Quiet (every Wring on the living is remembered); command (no Rally, no Drill).

*Subclass roadmap (level 15):* **Stonereader** — Read becomes speech with the stones (a ring's *Ward* move on request, the weather in the valley), Ease becomes a mend, Salt eases 50 a season; the Quiet's Mage. **Tidecaller** — Bind and Flood are battlefield verbs: a wet field where every enemy is slowed, a hall filled to the knee; control. **Saltwalker** — Wring on the living without memory-cost, draw from enemies' bodies instead of the skin (every Wring refills 15), and the crusts come faster; the Wrack's Mage, and the only road to the Closers' plan from the inside. The base leaves room by keeping Read to lore, Flood to rooms, and Wring priced.

### Rogue — the one who slips

*Fantasy:* the one who is not where you look. The Rogue moves along the edges of the valley — the ford at night, the counting-house yard, the quay under the Post inn — and comes back knowing what the reeve owes and what the factor wrote. The Rogue's out-of-combat life is the game's rumour engine made flesh.

*Resource:* **Stamina** 100, regenerating 10 a second, like the Fighter; but Rogue abilities are cheaper and shorter and reward chaining.

*Arc:* **Cut** (fast light hit; free; every Cut from behind is a *Mark* at ×2) · **Slip** (dash three metres through a target, invulnerable for half a second, ending behind it; the next Cut within two seconds is ×3; 20; 5s) · **Snare** (thrown cord: root for two seconds, cannot be shrugged by brutes; 15; 10s) · **Powder** (thrown salt-and-lime: blinds up to three enemies for 2.5 seconds — they swing at nothing; 25; 18s).

*Field verbs:* **Listen** (eavesdrop: stand at a site's *listening spot* for a world hour and read every memory passed at that site that hour — the Rogue sees the rumour network directly; the Rogue's answer to *investigate*) · **Shadow** (follow an NPC through a schedule block unseen: learn their next site, their condition, and any door flag on them; opens *hide* and *carry* routes) · **Forge** (a passage-writ, a Company seal, a Moot letter: made from a real one seen; works once per document type per power; a failed Forge is a weight-8 memory with the factor) · **Fence** (sell salvage at Kit Ashby's quay prices without Marrock's questions; buy what the counting-house would not sell; the Rogue's economy).

*Growth 1–40:* Slip chains (two Slips at 10, three at 20); Snare holds two at 20; Powder blinds five; at 15 a subclass. By the campaign's end a Voice Rogue can walk into Fallgate's weigh-house, read the Weighmaster's ledger and leave a Moot letter in it.

*Cannot:* stand in front of anything (no Hold; a Rogue who is seen is a Rogue who is being hit); break what is not locked (no Break: a dam is a Fighter's job); Draw (no Dowse — a Rogue tracks by eye, which fails in water); Drill or Rally.

*Subclass roadmap (level 15):* **Nightwalk** — Slip becomes invisible for two seconds, Mark ×4, Shadow through a whole day; the knife. **Factor** — Forge becomes a real trade (a Rogue *Factor* can hold a debt, sell it, and stand as a Kest-style broker at Name; Fence at every quay); the ledger. **Pathfinder** — the Wend and Shelf at road speed, the party unambushed, tracking in water; the road. The base keeps Slip visible, Forge one-shot and travel at map speed to leave these rooms empty.

### Verbs against the engine's verbs

| Engine verb | Fighter | Mage | Rogue |
|---|---|---|---|
| investigate | walk and ask (slow, honest) | Dowse | Listen |
| carry | Carry, at speed | Ease on the road | Shadow the patrols round |
| search | Carry the lame; cover ground | Dowse | track by eye |
| choose | Drill/Stand offers a third option | Read offers a third option | Forge/Fence offers a third option |
| hide | hold the door | Mist and move by night | Forge a writ; Shadow the search |
| witness | the Holds trust a Fighter's word most | Read the water-clauses | Factor line (subclass) or Listen for the catch |
| parley | Stand (a half-band at the table) | Read (speak to the Ulder as a pupil) | Listen beforehand (know their price) |
| answer | Rally the village | Ease the hurt | Fence the goods |
| hold | Hold, Stand | Flood the yard | Snare, Powder, Slip away |
| break | Break | Dry/Flood | pick the lock instead |
| descend | Carry, Break crust | Dry/Flood halls, Dowse the well | Slip past, Powder the hounds |
| lead | Drill, Rally, Captain | Mist the charge | Shadow, break the stone-cart at night |

---

## 3. Growth to the campaign's end

Levels 1–40 ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §1 gives the curve). Region one carries the hero to about level 9. Each level: +10 health, and every fourth level a **knack** — a small permanent change to one arc ability chosen from three (Shove throws further; Bind holds a heartbeat longer; Slip costs less). Knacks are the expression layer; there are 12 per class and the campaign gives 10 picks, so no two heroes of a class are the same and none is stronger. Subclass at 15 replaces two arc abilities with their subclass versions and adds one field verb. There is no respec by purchase: an Ulder keeper will re-teach a knack for a season's deed, once.

## 4. Companions are not classes

Companions have roles (Shield, Bow, Draw, Blade), not classes; they use companion abilities, level with the hero, and have stances rather than arcs ([COMBAT](COMBAT.md) §2). Each has a field verb of their own (Corva: bow-hunt; Ilune: Dowse; Gulla: Break; Kit: Fence; Osk: Drill) so that a party can cover verbs the hero's class cannot — which is the design reason companions exist out of combat.

---

## 5. Standing

Standing is not a bar the hero fills. It is a count of who in the Hearth holds a memory of the hero, weighted by how many people each of them talks to. It is computed from the living world's memory tables and nothing else.

### Inputs
Every NPC's memory list; each NPC's `reach`; each power's `regard[hero]`; the deed ledger (for display only).

### State
- **Renown** `R = Σ reach(n)` over every NPC `n` holding at least one hero-memory (weight ≥ 1). Reach: folk 1, tradesperson 2, notable 5, reeve or factor 20, power leader 100. A Speaker of the Quiet counts as a reeve (20), not a leader: the Ulder talk to few.
- **Regard** per power, −100..+100 ([LIVING_WORLD](LIVING_WORLD.md) §3).
- **Tier**, from renown: **Villager** 0–19 · **Hand** 20–99 · **Name** 100–499 · **Voice** 500–1,999 · **Force** 2,000+.
- **Flags** of note: `scarred` (from death), `salted_visible` (Salt ≥ 300), `chain_sergeant`, `witnessed_skerrow`, and the campaign's doors.

### Tick
Recomputed at dawn and after every deed. Renown *falls* when memories decay: a hero who does nothing for a season is forgotten by the folk (weight ≤ 5 memories decay in ten-day steps) and keeps only the notables' and the powers' memories. Tiers use hysteresis: a tier is lost only when renown falls under 70% of its floor, so a Name hero drops to Hand at 70, not 99.

### Outputs
- **Who asks**: the engine offers quests at the tier ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4). Powers *Address* the hero at thresholds. At **Name**, through their local faces, with a condition each: the Wrack (Corrow) at regard ≥ −30; the Holds (Marrock) if `witnessed_skerrow`; the Stair (Idren) at regard ≥ 0; the Quiet (Sarane) at regard ≥ +10, or at any tier if Salt ≥ 300; the Moot (Aud) at regard ≥ +20. At **Voice**, the powers' seats (Brenning, Fallgate, Thrum's hall, the rings, the Reach) write without regard conditions. At **Force**, the seats court or oppose the hero in person. A power's Address can carry a stake a tier above the hero's standing ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4); that is how tiers are crossed.
- **Which doors**: notables at *owes* hide, lend, give keys; a factor at −80 refuses trade; a power at regard ≤ −60 sends a band for the hero (a *hunted* state that makes roads in its sites hostile).
- **Who fears**: enemy bands read regard: a Wrack band at Wrack regard ≥ +30 lets the hero pass; at ≤ −60 it seeks the hero out.
- **What it looks like**: the hearth glyph on the top strip (an ember at Villager, a flame at Hand, a fire at Name, a beacon at Voice, a hearth with the map behind it at Force); greeting lines; notices that name the hero; letters; the map's markers showing which powers court and which oppose ([SESSION_UX](SESSION_UX.md) §6).

### Losing standing
Renown falls by forgetting. Regard falls by deeds. A death writes a weight-5 *beaten_at(site)* memory to everyone at the site and a rumour; it costs no renown (people talk about a beating) but costs regard with the power whose fight the hero lost. Betrayal (informing, breaking a witnessed contract, a living Wring before Ulder) writes weight-8 to −10 memories that decay slowly or never; the standing stays but its colour changes, which is visible: the hearth glyph at a site with more *against* than *for* memories burns blue.

### Worked example
*Before:* Thaw 1, renown 0, tier Villager. Sallowford's people: 22 folk (reach 1), 6 tradespeople (2), Osk, Hild, Reyne (5 each), Idony (20).
*Tick:* Thaw 1–2, V3 (Tobbin's flock, all nineteen ewes) and the smithy day. Memories: Tobbin (1), Reyne (5, via kin write), Hild (5, she warned you), Garrow (2, he saw you carry the ewe), two folk at the ford (1 + 1). Renown 15: still Villager. Thaw 9–11, V2 (Idony's Ledger delivered at Wickery on the 9th, Pell's letter carried home on the 11th): Idony (20), Osk (5), Idren (20), Drusk (5), Kit Ashby (5, she was on the quay), Wat Hobb (5), four folk (4). Renown 79: **Hand**.
*After:* Reyne offers H1 the next dawn ("the giver would rather it were you"). Marrock, who has no memory yet, does not — until Thaw 16, when the Wickery quay's tradespeople and Jory Quill's inn have passed the "carried Sallowford's coin through the Wrack" rumour (a dozen weight-2 and weight-3 memories, renown +30 in a week), a Speaker of the Quiet holds a weight-9 memory, and Reyne's contract needs a witness.
*What the player sees:* on Thaw 3 the hearth glyph is an ember; on Thaw 11 it is a flame and the away page says "People in Sallowford are saying your name." Idony's greeting moves from "Morning." to "There you are. I've something that wants carrying." At the Post inn in Wickery on Thaw 14, Jory Quill: "You're Sallowford's runner, aren't you? The one Pell's lot let through." The hero has been *named* by a stranger for the first time.

## 6. The road from villager to force — five milestones

| Milestone | Renown | What earns it (typical) | What the world does | What the hero can now tilt |
|---|---|---|---|---|
| **1. Villager** | 0 | nothing; a trade | neighbours give errands; nobody outside the village knows the name | a household: a wheel, a flock, a purse |
| **2. Hand** (hour ~4) | 20 | two village deeds carried to their ends; the village's notables remember | the village's notables ask first; Reyne's slate has your name; the first stranger says it | a village: who goes to the levy; who is hidden; where a forest line falls |
| **3. Name** (hour ~7) | 100 | a town's tradespeople talk; a factor or reeve holds a memory; a power posts a notice with the name on it | Kit can find you; Idren offers work; Corrow writes; the Post inn's greeting names you; prices move with regard | a town or a road: a mill's debt; a counting-house; a court's first layer |
| **4. Voice** (hour ~17) | 500 | a power leader's memory (Aud, Idren, Marrock, Sarane, Corrow) plus most of Wickery; a witnessed contract or a played clash | letters from two powers in one morning; a band lets you pass or seeks you out; the Moot sends for you; Sarane comes down to the village | a region: a toll-house; a court's depth; a town's quay — the first region's conflict |
| **5. Force** (campaign) | 2,000 | Brenning's and Fallgate's memories; a site held (sway ≥ 60); a pass or a court changed | the Moot in session, the Weighmaster, the hold-mothers, the Speakers and Corrow all Address without conditions; the map carries the hero's marks | the map: a pass closed, a town's allegiance, the Fall itself |

Each milestone is earned by deeds the world witnessed, measured by memories the world holds, and shown by what the world says and sends. No milestone is granted by level, by purchase or by a script; the numbers above are the traces in [FIRST_REGION](../slice/FIRST_REGION.md) §7 read off at their hours.
