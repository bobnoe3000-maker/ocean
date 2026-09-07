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

Each class has four **arc abilities** (the four petals under the thumb, [SESSION_UX](SESSION_UX.md) §2), a shared **dodge**, one **resource**, and four **field verbs** used out of combat in quests. The Adventure Engine's twelve verbs each have at least one solution per class; the table at the end of this section shows which, and **§2.5 gives every field verb its cost, its duration in world hours, what it needs, what it returns, how it fails and what the world sees** — the fictional descriptions below are the shorthand, §2.5 is the rule.

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

*Cannot:* stand in front of anything (no Hold; a Rogue who is seen is a Rogue who is being hit); break what is not locked (no Break: a dam is a Fighter's job); Draw (no Dowse — a Rogue tracks by eye, which fails in water); Drill or Rally; strip a Salted husk's crust (no Break, no Crack — the Rogue's arc answer to the Salted is Powder and the ground, and the Rogue's way out of the Salt Hall is the sluice, not the stair).

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

## 2.5 The twelve field verbs — how they resolve

A field verb is not a die roll. Nothing outside combat is random in the Hearth ([COMBAT](COMBAT.md) §1: "nothing is random except who a slinger shoots at first"), and the field verbs are no exception. Each is a **priced action against a stated world state**, and each has the same seven parts.

### Inputs
The site and its states; the hour and the weather; the schedules of every NPC at the site this hour ([LIVING_WORLD](LIVING_WORLD.md) §2); the powers' band positions ([LIVING_WORLD](LIVING_WORLD.md) §3); the hero's resource (stamina, water, coin), gear tier and Salt; the hero's `regard` with the people involved.

### State
Per verb: whether it is available here (its **needs** list), what it costs, how many world minutes it takes. Per site: the states a verb reads or writes — `breakable(n)`, `listening_spot`, `private`, `cover`, `bands`, `worked_water`, `dowsed_dry`, `spot_watched`. Per hero: `seen_document(type, power)`, `known_drawer`, `forgery_on_file(power)`, `stand_days`, `stand_missed`.

### Tick
1. The player opens the verb on a site or a person. The **confirm sheet** names three things and never more: the cost, the world hours, and the one state that would make it go wrong ("Drusk Fennick is in the yard until 18:00").
2. The cost is paid and the clock advances by the verb's duration, in the open, at two real minutes to the world hour.
3. The needs list is checked against state. All true → the verb **works** and returns what it returns. One false → it **falls short**: the cost is spent, nothing is returned, and the site or band is marked so the player is not invited to repeat it.
4. The go-wrong condition is checked against state. True → the verb **goes wrong**: it writes a deed against the hero from [LIVING_WORLD](LIVING_WORLD.md) §4, which is a memory with a weight and a lifetime, a regard delta, and something that surfaces later. A verb can work *and* go wrong in the same minute; the Rogue's Forge usually does.
5. Whoever is at the site this hour by their schedule saw it, and the deed table says what they remember. Night, fog and a site's `cover` state remove witnesses; a town in daylight never does. This is why the Rogue's verbs are timed to the hour and the Fighter's are not.

### Outputs
A state change, an item, or a fact written into the journal as a `heard(…)` or `seen(…)` flag the Adventure Engine can require as a precondition; a deed in the ledger; memories, regard and renown; and, where the verb changed something a person can see from outside, a map event.

**A verb without a failure state is not a verb.** Every one of the twelve has both kinds below: a *falls short* the player can plan around, and a *goes wrong* the world remembers.

### The Fighter's four

**Break** — doors, dams, cistern walls, sluice-wheels, a stone-cart's axle, a Salted husk's crust.
*Cost:* 10 stamina and 6 health per point of the target's `breakable` rating — the work, and what comes back at you. *Time:* 15 world minutes per point. *Needs:* rating ≤ the hero's break rating, which is **weapon tier + 1** (a Breaker's is tier + 2). Region-one ratings: a barred door or a slide-rope 1; a cart axle, a sluice-wheel, the hewers' log dam 2; a court's crust and wall-fittings 3; a cistern wall 3; a court's stone or a toll-house's course 4, which no base Fighter reaches. *Returns:* the state flips — `dam = broken`, `door = forced`, `sluice = open`, crust stripped for 10 s. *Falls short:* the rating is over the hero's — time and health spent, the thing gains `weakened` (−1 rating for the season), and the noise is made anyway. *Goes wrong:* a hostile band is at the site or within an hour's march (the sheet says so, because the planner's band positions are known state) — the noise brings them and the fight at the end cannot be declined. *The world sees:* deed 27 `broke_our_work`, w6, to the crew, the foreman and the owning power's factor; the owner power −15, doubled at one of its goal sites.

**Carry** — a hurt companion, a lame ewe, a sack of bronze, a body, a person who will not walk.
*Cost:* no resource, but while carrying: no dodge, no arc ability but Strike, and the burden takes every point of splash. *Time:* none — a Fighter carries at full speed where every other class carries at half and a carter's Haul carries double. *Needs:* one person, one beast or three sacks; hands free; and for a person, consent or unconsciousness. *Returns:* the burden arrives — deed 23 `carried_them_out`, w9, the strongest greeting in the game. *Falls short:* water. A ford above the knee, a flooded hall, a boat with nobody to row it — `burden_dropped`: sacks go to the silt, a person is left at the water's edge and must be fetched. *Goes wrong:* the burden dies. A carried person at 0 health is dead, and that is deed 43 `killed_kin` if they had kin here — weight 10, never decaying, with the village. *The world sees:* everyone at the arrival, and the beneficiary's whole kin line.

**Drill** — a militia band made worth something.
*Cost:* a world day, 06:00–18:00, and 10 bits for the men's bread; the hero travels nowhere that day. *Time:* one day; a further step needs a second Drill. *Needs:* a site with a `militia` state; **a Stillday**, which is the day the Vael drill ([WORLD](../world/WORLD.md) §2.7); the captain at regard ≥ 0 (Osk at Sallowford, Dell Coombe at Wickery, Reyne Gorse for the west's levy); and at least four of the band actually present by their schedules. *Returns:* `militia_quality(site) +1` for the season, cap 3 in region one — the band fights at that quality in every clash, played or rolled. Deed 10 `drilled_us`, w7 with the captain, w3 with each man, Moot +5. *Falls short:* fewer than four present, because a levy has taken them or `fields_busy` is on — the day and the bread are spent, quality unchanged, deed 51 `wasted_our_day`, w4 against, and the captain does not call the hero for the next muster. *Goes wrong:* the Stair reads a drilled town as an armed one. Every Drill writes `armed_the_town` and Stair −5; at Stair regard ≤ −60 the Chain's next *Send band* prefers that site. *The world sees:* the band, the captain, the town — this is the Fighter's fastest road into ordinary folk's memories.

**Stand** — a guard or escort contract, and the Fighter's Hand-tier income.
*Cost:* the day. A Stand day runs 06:00 to 18:00 at one site and the hero may not leave it; it advances the clock the way a rest does. It pays 15 bits at Hand, 1 mark at Name, 3 marks at Voice. *Time:* one day per contracted day; contracts run one day in six (Stilldays) or a named stretch — a march, a Parley, a cart to Wickery. *Needs:* a contract (powers *Post* Stand work at Hand and above) and the hero at the site at 06:00. *Returns:* the pay; the hero counts as **half a band of quality 2** in any clash at that site that day; and the decision the day is built on — whatever the schedules and the powers' moves put through the gate is the hero's to judge. Who is let in, whose cart is searched, whose name goes in the watch-book: each is its own deed (`let_them_through`, `turned_them_back`, and deed 36 `informed_on` if a name goes in the book). *Falls short:* nothing comes to the gate. The pay is paid anyway; Stand is a floor, like the trade. *Goes wrong:* absence. A missed rota day docks the pay and adds `stand_missed`; at three, deed 38 `broke_contract`, w7 with the employer — unless the hero returns the contract at the gate before the third miss, which writes `gave_back_the_watch` (w2, the employer only) and ends it clean, because handing back a watch in person is not the same as failing to appear — **w10 and never decaying if the employer is Skerrow**, because a Skerrow bargain is spoken aloud before a witness. *The world sees:* the employer, and every folk who passed the gate at w3.

### The Mage's four

**Dowse** — find water and what water has touched.
*Cost:* 10 water per band searched; dry, the thirst rule makes that 15 health and 10 Salt. *Time:* 20 world minutes per band. A site has three to six **bands** — the Old Shore road has four: the verge, the ruts, the ditch, the stones. *Needs:* the band must hold water that the sought thing touched, inside the ground's memory — Thaw mud 3 days, ploughed Lowmark 1, the Wend's leaf-mould 5, a court's silt 30, salt crust and swept flagstones 0, because the salt has already drunk it. *Returns:* what passed and when — how many, which way, whether they carried, whether one bled; a damp seam behind a wall; a drowned thing; a cistern or a spring. Written to the journal as a `seen(…)` flag the engine can require. *Falls short:* a dry band — water and minutes gone, and the band is marked `dowsed_dry` on the map and not offered again this season. *Goes wrong:* Dowsing a body, living or dead. That is a working on flesh and every Ulder witness reads it as a small Wring: deed 29 `drew_on_the_living`, w7, Quiet −10, and w8 against with the living person themselves. *The world sees:* deed 58 `drew_before_us`, w3, with every Vael and Kest at the site, and the flag `known_drawer` — which is the list the Stair keeps of people who dry salt-pans.

**Read** — stone speaks to a Drawer.
*Cost:* 15 water, and 5 Salt if the stone is dry, because there is no water in stone and the Drawer supplies it. *Time:* 30 world minutes per inscription. *Needs:* Age-of-Stone stone (a ring, a court's preamble wall, a stone-mark like the old ash) or a Skerrow contract **cut in iron or stone**. Kest paper cannot be Read: it never touched the water. A Mage cannot check a ledger; a Rogue can. *Returns:* the place's lore line and its age tags, plus one **clause** — what a Skerrow preamble binds about rivers, which river a ring can hold or loose, what a court called its own well. At Name the Holds pay a mark a reading and remember who read it ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §2). *Falls short:* crusted stone. A Salt Hall wall must have its crust stripped first (a Fighter's Break, a Shield's Crack); until then 15 water and half an hour buy a fragment. *Goes wrong:* Reading a **kept** ring without its keeper's leave — and a keeper is at their ring always. Deed 30 `read_our_stones`, w7, Quiet −15; a second offence sets `ring_closed` and the season's Salt-easing is refused. *The world sees:* the Quiet, always. The stones are the only thing they have left.

**Dry / Flood** — the dungeon-shaping verb, and the most expensive thing a Mage does.
*Cost:* **Dry** 40 water per room. **Flood** 25 water to open the way, plus the held water itself, which belongs to somebody. Dry-skinned in a court, a room is 60 health and 40 Salt — nearly half a crust for one hall. *Time:* 30 world minutes per room. *Needs:* **Dry** — an enclosed room, and somewhere for the water to go: the skin first, filled to full, then a drain, a cistern, a sluice or open ground below. **Flood** — a held body of water above the target: a cistern, a millrace, a sluice, or a ring's river-hold with the keeper's leave. *Returns:* `room_dry` (a stair that can be walked, a fitting that can be cut) or `site_flooded` for a stated span of hours — a yard the Chain's cart cannot cross, a ford the horses will not take, a hall the Salted are held under. Both are map events with a plain line, because a hall that empties is visible from outside. *Falls short:* no drain and a full skin — the water comes back inside the hour, the 40 is spent, and the hero is standing in it (`room_refilled`, marked on the site). *Goes wrong:* the water was **worked** — a salt-pan, a millrace, a well, a fish-pool — and nobody gave leave. Deed 28 `dried_their_water`, w8 with the owner, that power −25, and `drawer_hunted` if the owner is the Stair. This is exactly what Ilune did on Thaw 12 and exactly why the Chain is at Hild Marrow's door on the 13th. *The world sees:* everyone, downstream and up.

**Ease** — water put back into a body.
*Cost:* 15 water. *Time:* 5 seconds in a fight, 10 world minutes out of one; one Ease per patient per day. *Needs:* water in the skin or a source within arm's reach, and the patient's consent — an NPC at *hates* refuses, and an Ulder will not be Eased by a stranger unless someone they trust vouches. *Returns:* 15 health in the field; on an NPC with condition *hurt*, one day off the condition, to a floor of half its length. Three Eases in a village in a day is a healer's day and pays 10–20 bits at Hand. Deed 15 `eased_them`, w5, with the patient's household. *Falls short:* a scar, a bone, a Salted crust, or the dead. Ease is water, not medicine: only a kept ring touches Salt, and nothing raises anyone. *Goes wrong:* the **cheap Ease**. With a dry skin the working takes the nearest water, and the nearest water is the patient: 15 health given, 10 taken, and 10 Salt left in *them*. The sheet offers it in plain words and the deed is 29 `drew_on_the_living`, w7 against with the person you were helping. *The world sees:* the household, the kin, and the herb-wife whose trade you took.

### The Rogue's four

**Listen** — the rumour network, read directly.
*Cost:* one world hour standing still, and 2 bits if the spot must be bought (a settle, a drink). *Time:* one hour. *Needs:* a **listening spot** — the region has nine: the Ford Inn's settle, Sallowford's well, Hobb's Cross's stable, the Rudd Bridge's parapet, the Post inn's back room, Wickery's market cross, the counting-house yard wall, the quay boats, Corrow's Reach's fire — and **two or more NPCs at that site in that hour** by their schedules. *Returns:* every memory passed there that hour, verbatim, with its `told_by` and the passer's regard. Listen reads the meeting tick at certainty instead of its 0.3 chance ([LIVING_WORLD](LIVING_WORLD.md) §2), which is the Rogue's whole out-of-combat advantage: who is owed, who is afraid, and what a power will do next if anyone in the room knows it. Journal rumour lines, and a `heard(fact)` flag. *Falls short:* nobody meets — schedules are public and the player can learn to read them, but a levy, a festival or a `condition` override moves people. The hour and the drink are gone: "nothing but the fire." *Goes wrong:* someone arrives who already knows the hero — any NPC holding a hero-memory of weight 4 or more. Deed 34 `caught_listening`, w5, their power −10, `spot_watched` for ten days, and at the counting-house wall specifically `idren_marked_you`. *The world sees:* only the one who catches you, which is the point of the verb.

**Shadow** — follow a person through a schedule block.
*Cost:* the block. The hero does nothing else for 2–6 world hours and cannot fight; discovery ends it. *Time:* the block's length. *Needs:* `cover` at every site the target passes — a town, a wood, a crowded road, a night. Open Shelf, an empty spoke road by day and the inside of a hold have none; a Pathfinder carries cover with them. *Returns:* the target's next site and hour, their `condition`, every door flag on them, and the identity of one thing they carry — which is what writes `seen_document(type, power)`, the input a Forge needs. *Falls short:* the block ends where there is no cover — a lone farm, a barred gate. Hours spent; the trail stops at a door. *Goes wrong:* the target meets someone holding a hero-memory of weight 4 or more, or their power already has the hero `hunted`. Deed 35 `spotted_following`, w6, their power −10, and the target goes *wary* for ten days: they take the Stillday variant of their schedule and change their route, so the door the Shadow was for closes with them. Twice, and the route changes for good. *The world sees:* nobody — unless it goes wrong, and then the target's whole power.

**Forge** — a passage-writ, a seal, a letter, a day-order.
*Cost:* 5 bits of blank, wax and ink. *Time:* 30 world minutes. *Needs:* a site with `private` (a back room, a loft, a locked shop); and `seen_document(type, power)` set within the last 30 days — the Rogue must have *seen* a real one, by Shadow, by Listening at a weighing, or by being handed it. Four types exist in region one: a Stair passage-writ, a Company seal on a receipt, a Moot letter, a Chain day-order. *Returns:* one document that works **once**, on any reader below factor rank — a sergeant, a corporal, a bailiff's clerk, a hewers' foreman, a gate watch. *Falls short:* never. A Forge always produces a paper; the question is only who reads it, which is what makes this verb a decision rather than a check. *Goes wrong — and this is what makes a Forge fail:* it is read by its own author or by the power's factor (Idren knows his own hand; Sabel wrote the original), **or** the same type has already been Forged against that power this season, **or** it is carried back to the factor after it worked — which any Skerrow will do, because a Skerrow keeps papers the way he keeps words. Then deed 33 `forged_against`, w8 with the factor and never below 8 inside a season, that power −30, and `forgery_on_file(power)`: every later Forge against that power fails automatically until the Reckoning. At −60 the power's *hunted* rules apply. *Cannot be Forged at all:* a Skerrow contract, which is spoken aloud before a witness and cut in iron, and an Ulder's word, which is not written. *The world sees:* nothing, until it goes wrong; then a factor, a power, and usually a notice.

**Fence** — the Rogue's economy.
*Cost:* the fence's cut — 20% at Kit Ashby's, 30% at Corrow's Reach, 10% with a courier pass. *Time:* 30 world minutes. *Needs:* a fence at the site by their schedule at regard ≥ 0 (Kit: the Post's back room 16–22, the Shelf 10–16 on letter days; Wat Hobb's stable for anything on wheels; the Reach's fire for anything at all), and goods with an `origin` tag. *Returns:* coin at 80% of market for goods no counting-house will buy — Court bronze once `marrock_refuses_court_bronze` is set, Chain gear, a called debtor's cart — and the right to buy what a counting-house will not sell: oil by the case, blanks and wax, and a Wrack's word on where a band sleeps. *Falls short:* no fence there this hour, or the fence at *hates*. Nothing sells; the goods keep their weight and their tag. *Goes wrong:* goods with `owner_named` sold inside the owner's own town — Marrock's iron in Wickery, Idony's ledger in Sallowford. Kit refuses those; Corrow does not. Sold anyway: deed 32 `fenced_their_own`, w7 with the owner, their power −20, and the memory tick carries it to the owner within three days. *The world sees:* the fence — and if it goes wrong, the owner, their power, and the town's prices for the hero.

### The four trade verbs

The trade is a floor with a decision in it, not a ladder ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §7), and it resolves the same way.

| Verb | Cost · time | Needs | Returns | Falls short | Goes wrong |
|---|---|---|---|---|---|
| **Mend** | 3 bits of iron per piece · a world day | a forge at heat (Garrow's fire is out on Stilldays and after a `damage` event) | gear condition restored, or one tier-1 iron piece; 6–10 bits at a master's forge | no forge at heat: the day is spent at the bellows for 4 bits | never — but a day at the anvil is a day the powers moved |
| **Dress** | one bandage, or 3 plants and 30 minutes' gathering · 20 minutes | a Wend-edge or Lowmark gathering band, in season | 20 health out of combat, and a reading of a wound: what made it and how long ago | a scar, a crust or the dead — the same floor as Ease | plants gathered on the Shelf when `shelf_dry` are salt-burnt: the dressing costs the patient 5 health and writes `made_it_worse`, w4 against |
| **Boat** | free (or 1 bit for a ferry) · the crossing | a boat, and `river_flow` not high; on the Still, not `passes_closed` weather | crossings the roads do not offer; the Court's flooded halls at full speed, which is the fisher's hour in a flooded Salt Hall | flood or storm: the boat stays drawn up and the hero walks round | the boat is somebody's. Lost or stove in: deed 31 `stole_from_us` at w6 with its owner — and Osk's boat is the village's ferry |
| **Haul** | a cart and a beast (4 marks at Hobb's Cross) · road time | a road: no Wend track, no Shelf, no ford above the knee | double carry and town prices at the other end; 6–10 bits a run | `roads_slow` — half speed, and the cart is worth less than legs until Mid Thaw | a toll-house passed without paying is deed 46 `robbed_the_road`, Moot −20; and the Wrack watch the crossroads for exactly this cart |

### What the verbs cannot do

No field verb resolves a fight, opens a tier of gear, or produces coin above its stated rate. No field verb is a skill check the player can fail by luck. And no class's four cover every problem — that is what the table at the end of §2 and the companions in §4 are for.

---

## 2.6 The Mage and the Rogue, played

The bible's other session traces are Fighters ([SESSION_UX](SESSION_UX.md) §3, [FIRST_REGION](../slice/FIRST_REGION.md) §7). These two are not. Each plays one class's **four field verbs** in the first region with the region's named people, at a stated hour, with every cost paid and at least one verb failing. Renown is derived at the end of each from the deed table ([LIVING_WORLD](LIVING_WORLD.md) §4) and §5's rule, so both are addable.

### A fifteen-minute session, played as a Mage — "The Herb-wife's Guest", Thaw 12–13

**The hero:** level 4 Mage, trade herbalist, Hild Marrow's pupil. Skin 100. Salt 40. Renown 96 (Hand). Regard: Quiet +10, Stair +5, Moot 0, Holds −15, Wrack 0. Party: Corva (Bow). Doors held: `ondrin_owed` (this Mage solved V1 by Drawing the dam's pooled water through it, then climbing to the ring and asking Ondrin to loose the Rudd).

**State before.** Thaw 12, 20:00. Ilune has Dried a Company salt-pan (deed 28 `dried_their_water`, w8 with Vesk Idren, Stair −25, `drawer_hunted`) and is *fled* and *hurt (3 days)* in Hild's drying-loft. The Stair's Thaw 12 *Send band* has the Chain marching from the Pans; by their march time they reach Sallowford at **15:00 on the 13th**. Ondrin is held at the ring by the Quiet's river-hold; Osk is up again as of the 12th; the Rudd runs high with the ford at knee-and-a-half.

**Tick.**

**20:10, Hild's loft. Ease.** Ilune grey to the wrists, breathing like a cart. Consent: she is Ulder and the hero is a stranger to her, but Hild vouches, which is the needs list satisfied by a person rather than a state. 15 water (skin 100 → 85; Hild's well is ten steps away and refills are free — the constraint is dry places, not villages). *Hurt* 3 days → 2. Deed 15 `eased_them`, w5 with Ilune (+2 = w7), w5 with Hild's household. Renown +2 (Ilune, reach 2).

**Thaw 13, 08:00.** Hild's ask, which is the engine's H2. Seven hours to 15:00.

**08:20. Dowse, and it falls short.** The player Dowses the green outside Hild's door to learn what has already come up the road. The green is swept flag and stone kerb: a dry band, ground memory 0. 10 water (85 → 75), 20 world minutes, `dowsed_dry(Sallowford green)` on the map. Nothing returned. The confirm sheet said the band was dry; the player took the chance anyway, which is what a falls-short is for.

**08:40. Dowse, and it works.** The ford's mud, Thaw, ground memory three days. 10 water (75 → 65), 20 minutes. Returns: *eleven boots and two horses came up the spoke road at dusk on the 12th, stopped at the well, and went back down. One boot is Kest-nailed and stood by the well a long while.* Flag `seen(chain_scouted_sallowford)`. That closes a branch and the player can see it close: Drusk already knows which house has a light in its loft, so H2's *talk* branch is dead unless a Rogue is doing the talking. Two folk at the ford watch the working: deed 58 `drew_before_us`, w3, and `known_drawer` on the hero — **the verb that will save Ilune has just put the hero's name on the same list Ilune is on.** Renown +2.

**09:10.** Skin refilled at the well, 100. Ten seconds.

**09:30. Flood.** The plan is not to hide her but to make the road longer. The Wend path to the Rudd Stones is eight hours at Wend speed; leaving at 09:45 the party reaches the ring at 17:45. The Chain would arrive at 15:00, find the loft warm, and put horses on the path. So the hero raises the ford. *Needs:* a held body of water above the target — Fenn's Mill's race, two miles up, holding since the wheel restarted, and Bram Fenwright at *owes* (deed 2, w9) gives leave, which is what keeps this off row 28. 25 water (100 → 75) and six hours of the mill's grinding: `mill_idle(Fenn's, 6 h)`, four bits out of Bram's day, and a neutral memory, `asked_first`, w4. Returns `ford_impassable(Sallowford, 6 h)` from 10:00, and a map event: *the Rudd came up at noon with no rain in it.* Had Bram been at *hates*, the same working would have been deed 28, w8, `drawer_hunted` — the sheet says which of the two it is before the player commits.

**09:45–17:45. The Wend path.** Ilune cannot walk the last two hours. **Ease** again — a new day, so the once-per-patient rule allows it — 15 water (75 → 60), *hurt* 2 → 1. At 15:00, from the ridge above the beck, the party watches the Chain reach the far bank of a ford that is chest-deep, and turn downstream for Hobb's Cross and the lower bridge: two hours forty on. They will be at Hild's door at 17:40, after dark, and Drusk will not turn out a village at night without the reeve's word, and Idony Sallow's door is shut.

**17:45. The Rudd Stones. Read.** Ondrin gives leave — `ondrin_owed`, spent here — which is the one thing between this working and deed 30, `read_our_stones`, w7, Quiet −15. 15 water (60 → 45) and, because the stone is dry moor stone, **5 Salt: 40 → 45**. Returns the ring's clause: which river it holds and how (the Rudd, from its head, which is why the ford could be raised at all), and the line cut on the ninth stone — *the ring names the well the Court was built around*. Flag `well_named_by_stones`, which is a door into Sarane's Asking (Vo2) that a Fighter cannot open.

**17:50.** Sarane, who looks at the hero a long time, and then spends the ring's once-a-season easing on Ilune's Salt rather than the hero's. The player watches a decision they did not make.

**Outputs.** `ilune_hidden`; Ilune *fled* → with the party, **Ilune joins (Draw)**; Quiet +15 (now +25); Stair unchanged, because nothing the hero did was theirs; `known_drawer`; `well_named_by_stones`; `mill_idle` cleared at 16:00; a map event about a river that rose without rain, which will be a rumour at the Ford Inn for ten days.

**Renown this session, by the rule in §5** — Ilune 2 (w9, deed 13 `saved_keeper`), Sarane 20 (w9, same deed, +2 as the Speaker of the ring she keeps), two ford folk 2 (w3), two village folk who watched the Chain at Hild's door 2 (w3). Hild's and Idony's memories were raised, not created, so they add no heads. **+26 → 122, and at dawn on the 14th the tier reads Name.**

**What the player sees.** Fourteen real minutes: four in dialogue (paused), three in two Dowses and a Flood at two real minutes to the world hour, one in the map jump up the Wend, six at the ring. The away page, a light in a loft, a river that comes up like a slow argument, lamps on the wrong bank at dusk, and an Ulder Speaker looking at a Vael villager for rather too long. The world changed: a Quiet watcher out of the Stair's reach, a valley rumour with no explanation in it, and a Mage whose own name is now on the Company's list of people who dry things.

### An evening session, played as a Rogue — "Corrow's Letter", Thaw 20–23

**The hero:** level 5 Rogue, trade carter, tier-2 light. Stamina 100. Renown 177 (Name). Regard: Moot +15, Stair +5, Quiet +15, Holds −5, Wrack 0. Party: Ilune (Draw), and Kit Ashby (Blade) as of this session. Doors held: `ilune_hidden` — this Rogue's answer to H2 was the engine's own: a Forged passage-writ over the Company seal, read by a corporal at Hild's gate, which worked, and has not yet been read by anyone who matters.

**State before.** Thaw 20. The Stair's *Salvage* move has put a Skerrow crew under Rukk of Thrum into the Sunk Court on Kest pay, cutting the well-ring. Corrow's *Address* has fired: a letter, carried by Kit. `court_mouth_seen` is set from a Villager-tier errand on the Old Shore road. `seen_document(passage_writ, Stair)` was set on Thaw 12 and expires on the 42nd.

**Tick.**

**14:00. Listen, and it falls short.** Wickery's market cross, one hour, 2 bits for a pie from a stall that is a listening spot's price. But Merrin Hale keeps the board 8–12 and is at her shop by noon, and Aud Penhallow leaves the cross for the watch-house at 14:00. Nobody meets there this hour. An hour and two bits: *nothing but the fire*. The journal notes the spot's hours, which is the game teaching a Rogue to read a schedule.

**16:30. Listen, and it works.** The Post inn's back room. Kit Ashby is there 16–22 and Jory Quill is there always. Two NPCs, one hour, the meeting tick read at certainty instead of at 0.3. Returns three passed memories verbatim: Jory's `(hero, carried_duty, 4, told_by the quay)`; Kit's `(Corrow, wrote_to_the_hero, 6)` — which is how the letter reaches the hero at the hour Kit's schedule actually puts her indoors; and Kit's `(Stair, salvaging_the_court, 7)`, flag `heard(salvage_crew_at_the_court)`. Kit's regard is +20 and her agenda is Corrow's end: she joins. **Kit joins (Blade).** Deed 62 `named_at_the_inn` in reverse — the hero is the one listening.

**Thaw 21, 10:00–12:00. Shadow.** Anser Sabel, who walks the ledger down to the quay with Idren for the 10–12 weighing. Cover: a town in daylight has it. The confirm sheet names the one risk — *Kit Ashby is on the quay until 10:00*, and Kit holds a weight-6 hero-memory, so the sheet says to start at 10:00, not 09:00. Two world hours. Returns Sabel's next site and hour, his condition (*careful*), and the satchel: the day's sealed order to the salvage crew, and three blank Company writs. Flags `seen_document(day_order, Chain)`, `seen_document(passage_writ, Stair)` refreshed. Nobody sees; nothing is written; that is the verb working.

**12:30–13:00. Forge.** The Post's back room is `private`. 5 bits of wax, ink and a blank. Type: a Chain day-order, over the Company seal, in Sabel's hand as Shadowed. It works once, on a reader below factor rank. The sheet says so in those words, and it also says what makes it go wrong: *read by its author or the factor; the same type Forged against this power already this season; or carried back afterwards.* The third is not a state the player can see. That is the decision.

**Thaw 21, dusk. The Court.** Corrow at the outer stones with two Wrack and a lamp; the escorted descent to the Drowned Steps; hounds and cranes handled with Slip and Powder. At the inner stair a husk, which no Rogue arc answers: the party blinds it with Powder and goes past it along the flagstones, because a husk that cannot see does not follow, and the Rogue's route through this dungeon is the one that does not fight.

**22:00. The Salt Hall door.** Rukk's crew cutting the well-ring by lamplight. The Fighter's trace drives them off; this one hands Rukk a paper. Rukk is a hewers' foreman — below factor rank — and Skerrow, which means he reads a Company order as a contract's end: the crew packs its tools and goes up the silt-slide with what it has cut. `well_ring_intact` kept — deed 26 `kept_the_charge`, w10, never decaying, Quiet +20 doubled at their goal site to **+40** — and deed 52 `drove_off_our_crew`, w7 with Rukk, Stair −20. Corrow, who came expecting a fight and got a piece of paper: deed 22 `fought_beside` becomes something else in his mouth, w8, and he is reach 100 at his own camp, which the leader rule allows.

**Thaw 22. The Salt Hall, and the sluice.** Four sacks of stone-bronze cut from the hall's fittings (deed 53 `took_the_bronze`, w6, Quiet −20, Holds −15 — the same night's work costs and pays in the same two ledgers). Out by the sluice tunnel to the Salt Pans, an hour, because the stair is where the husks are.

**Thaw 23, 17:00. Fence.** Kit's back room, 30 minutes. Four sacks at 2 marks market, less her fifth: **6 marks 8 bits**. The fifth piece is a cut bronze bracket carrying Marrock's yard tally, lifted from the crew's gear — `owner_named`, in Marrock's own town. Kit will not take it: *falls short*, and the goods keep their tag. The player's three roads are the Reach's fire at a 30% cut, the pack, or Marrock's yard and a bracket handed back. The player carries it back: Holds +5, and Marrock says four words.

**Thaw 23, 19:00. The Forge goes wrong.** Rukk carried the day-order home, because a Skerrow keeps papers as he keeps words, and Marrock read it, and took it to the counting-house because a hold does not hold a Company's paper. Deed 33 `forged_against`, w8 with Vesk Idren, Stair −30 (now −45); `forgery_on_file(Stair)` until the Reckoning, so every Forge against the Company fails automatically for the rest of the season; and w8 with Marrock, Holds −20 — which closes the witness-fee door, because a man who forges a word is not a man the Holds will have witness one. Two days after the verb worked perfectly.

**Outputs.** `well_ring_intact` held for the campaign; `court_layer1_known`; `salvage_stopped(Court)` and the Stair's next *Salvage* comes with blades; Kit in the party; Quiet +35 (the ring's +40 against the bronze's −20), Wrack +15, Stair −45 (fifteen off *hunted*), Holds −40; `forgery_on_file(Stair)`; 6 marks 8 bits and a bracket returned.

**Renown this session** — Kit 5 (w6, raised into counting range and then some), Jory 5 (w3), Corrow 100 (w8, leader rule: his own camp), two Wrack sentries 2 (w4), Rukk 2 (w7 against — the name travels either way), Marrock 20 (w8 against), Idren 20 (w8 against), three Post folk 3 (w3). Sabel writes nothing, because the Shadow was not seen. **+157 → 334**, sixteen short of Voice, and more than half of it earned by people who now dislike the hero. That is the system working as designed: renown is how far the name travels, not how well it is thought of, and the colour is carried by regard and by the blue hearth glyph at a site with more *against* than *for*.

**What the player sees.** Fifty-five real minutes across two evenings. A schedule read wrong and an hour lost to it; a back room where three facts arrive at once; a bailiff who never looks up; a paper that empties a room without a blade drawn; four sacks and a bracket that will not sell; and, on the last evening, Marrock of Thrum in his yard with a folded order in his hand, saying: "This is your hand." The world changed: the Court's ring is whole, a Skerrow crew is off the Shelf, and the Company has a specimen of the hero's forgery in a drawer at Fallgate.

---

## 3. Growth to the campaign's end

Levels 1–25 ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §1 gives the curve). Region one carries the hero to about level 11. Each level: +10 health, and every third level a **knack** — a small permanent change to one arc ability chosen from three (Shove throws further; Bind holds a heartbeat longer; Slip costs less). Knacks are the expression layer; there are 12 per class and the campaign gives 8 picks (levels 3, 6, 9, 12, 15, 18, 21 and 24), so no two heroes of a class are the same and none is stronger. Subclass at 15 replaces two arc abilities with their subclass versions and adds one field verb. There is no respec by purchase: an Ulder keeper will re-teach a knack for a season's deed, once.

## 4. Companions are not classes

Companions have roles (Shield, Bow, Draw, Blade), not classes; they use companion abilities, level with the hero, and have stances rather than arcs ([COMBAT](COMBAT.md) §2). Each has a field verb of their own (Corva: bow-hunt; Ilune: Dowse; Gulla: Break; Kit: Fence; Osk: Drill) so that a party can cover verbs the hero's class cannot — which is the design reason companions exist out of combat.

---

## 5. Standing

Standing is not a bar the hero fills. It is a count of who in the Hearth holds a memory of the hero, weighted by how many people each of them talks to. It is computed from the living world's memory tables and nothing else.

### Inputs
Every NPC's memory list; each NPC's `reach`; each power's `regard[hero]`; the deed ledger (for display only).

### State
- **Renown** `R = Σ reach(n)` over every NPC `n` who holds a hero-memory of **weight 3 or more**, for or against. Reach: folk 1, tradesperson 2, notable 5, reeve or factor 20, power leader 100. A Speaker of the Quiet counts as a reeve (20), not a leader: the Ulder talk to few. Three rules make the sum honest:
  - **A head counts once, never a deed.** A hundred errands for Tobbin are one memory in one head. Repeating a deed raises the memory's weight, which lengthens its life; it adds nobody.
  - **Weight 1–2 does not travel.** A memory that has decayed to 2, or arrived as a shrug, is a name that has stopped moving. This is why renown *falls*.
  - **For and against both count.** Renown is how far the name travels, not how well it is thought of. The colour is carried by regard, by greetings, and by the hearth glyph, which burns blue at a site holding more *against* than *for*.
- **Regard** per power, −100..+100, from the deed table's deltas ([LIVING_WORLD](LIVING_WORLD.md) §4).
- **Tier**, from renown: **Villager** 0–19 · **Hand** 20–119 · **Name** 120–349 · **Voice** 350–899 · **Force** 900+.
- **Flags** of note: `scarred` (from death), `salted_visible` (Salt ≥ 300), `known_drawer`, `forgery_on_file`, `chain_sergeant`, `witnessed_skerrow`, and the campaign's doors.

### The population behind the numbers

The tier floors are not chosen for how they sound. They are set against the number of heads the Hearth can actually hold, and here is that number.

The Rudd valley holds about **1,020 people** ([LIVING_WORLD](LIVING_WORLD.md) §5). The simulation instantiates **85** of them: 25 named NPCs and a rolling pool of 60 promoted folk, and a board notice or a rumour cannot write to anyone else, because there is nobody else to write to. Summing the twenty-five named NPCs' reach ([FIRST_REGION](../slice/FIRST_REGION.md) §3) gives **368**. Sixty promoted folk at reach 1–2 give **60–120**. High Reeve Tull at Brenning, reachable from this valley by one notice and one letter, gives **100**.

**Region one's absolute renown ceiling is 528–588. In play a hero who does everything in it reaches about 450**, because promoted folk decay out of counting range in ten to sixty days and the pool evicts its weakest memory when a new face arrives.

So: **Hand 20** is a village's notables. **Name 120** is a village and a town's working people — a quarter of what the valley can hold. **Voice 350** is two thirds of it: every reeve, factor, Speaker and captain in the valley plus most of the town's trades, which is the honest meaning of "the valley knows your name". And **Force 900 cannot be reached in one region at all** — it is more than the valley can hold if every simulated head in it held the hero's name at once. That is deliberate and it is now arithmetically true; in round one it was arithmetically false, with a Voice floor of 500 against a ceiling of 588 and a Force floor of 2,000 against nothing.

Force is a campaign number and this is its model, at four regions worked and about 150 hours:

| Held at Force | Reach |
|---|---|
| Five seats: High Reeve Tull, Weighmaster Corradine, Hold-mother Brakka, the Wrack's leader, and two ring Speakers (20 each) | 440 |
| The Rudd valley's survivors of decay — four reeves and factors at 20, eight notables at 5, the folk still holding weight-6 deeds | 135 |
| The Halse valley, worked one season: a reeve, a factor, a Speaker, six notables, folk | 110 |
| The Twine valley, the same | 110 |
| Fallgate: a factor, four notables, the Stair's own folk | 55 |
| The Moot's other town reeves, at 20 each | 60 |
| **Total** | **910** |

Decay is what makes that hard rather than cumulative. A campaign runs about 400 world days ([LIVING_WORLD](LIVING_WORLD.md) §1 at roughly two world days a played hour). A weight-6 memory stops counting after 60 days and a weight-8 after 120; only weight 9, 10 and the seats survive four seasons untouched. **A hero reaches Force by holding four valleys' great deeds at once, not by adding up two hundred hours of errands** — which is the anti-grind rule stated as arithmetic rather than as a wish.

### Tick
**Renown is recomputed after every deed; the tier is read at dawn.** The number under the glyph moves the moment a memory is written — the player watches it move — and the *tier*, with the glyph, the greetings, the prices and what the engine will offer, changes at the next dawn. That is why a hero can stand at renown 28 on the evening of Thaw 7 and still be greeted as a Villager until the morning of the 8th.

Renown falls when memories decay: at each dawn every memory loses weight by the band rule ([LIVING_WORLD](LIVING_WORLD.md) §2), and a holder whose strongest hero-memory drops below 3 stops counting. A hero who does nothing for a season is forgotten by the folk and keeps the notables, the seats and the weight-10 deeds. Tiers use hysteresis: a tier is lost only when renown falls under 70% of its floor — Hand at 14, Name at 84, Voice at 245, Force at 630.

### Outputs
- **Who asks**: the engine offers quests at the tier ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4). Powers *Address* the hero at thresholds. At **Name**, through their local faces, with a condition each: the Wrack (Corrow) at regard ≥ −30; the Holds (Marrock) if `witnessed_skerrow`; the Stair (Idren) at regard ≥ 0; the Quiet (Sarane) at regard ≥ +10, or at any tier if Salt ≥ 300; the Moot (Aud) at regard ≥ +20. At **Voice**, the powers' seats (Brenning, Fallgate, Thrum's hall, the rings, the Reach) write without regard conditions. At **Force**, the seats court or oppose the hero in person. A power's Address can carry a stake a tier above the hero's standing ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4); that is how tiers are crossed.
- **Which doors**: notables at *owes* hide, lend, give keys; a factor at −80 refuses trade; a power at regard ≤ −60 sends a band for the hero (a *hunted* state that makes roads in its sites hostile).
- **Who fears**: enemy bands read regard: a Wrack band at Wrack regard ≥ +30 lets the hero pass; at ≤ −60 it seeks the hero out.
- **What it looks like**: the hearth glyph on the top strip (an ember at Villager, a flame at Hand, a fire at Name, a beacon at Voice, a hearth with the map behind it at Force); greeting lines; notices that name the hero; letters; the map's markers showing which powers court and which oppose ([SESSION_UX](SESSION_UX.md) §6).

### Losing standing
Renown falls by forgetting; regard falls by deeds. A death writes row 64, `came_back`, weight 5, to everyone at the site, and a rumour: it costs no renown, because people talk about a beating, but it costs regard with the power whose fight the hero lost. Betrayal writes the heavy rows — 33 `forged_against`, 36 `informed_on`, 38 `broke_contract`, 43 `killed_kin`, 47 `broke_the_seal` — at weight 8 to 10, decaying slowly or never. **The standing stays and its colour changes**, which the player can see: the hearth glyph at a site holding more *against* than *for* burns blue, and the greeting at *hates* is the same length as the greeting at *owes*.

### Worked example — one deed, added up

*Before:* Thaw 1, renown 0, tier Villager. Sallowford holds 31 souls; the simulation holds Idony (reach 20), Osk, Hild, Reyne (5 each), Garrow, Bram, Corva (2 each), Tobbin (1), and promoted folk as the engine needs them.

*Tick:* Thaw 1, quest V3, Tobbin's flock, all nineteen ewes home by 15:00. One deed: **row 1, `found_stock`**, base weight 6. The table's receivers, and nobody else: the herder who lost them, Tobbin, at +2 → w8, **reach 1**; the owner, Reyne Gorse, w6, **reach 5**; the one who warned the hero, Hild Marrow, w6, **reach 5**; and every NPC at the site that hour — Garrow Tull at the forge door as the flock came through, w6, **reach 2**, and two folk at the ford, promoted, w6, **reach 1 each**.

*After:* **renown 15.** Six heads, and the arithmetic is 1 + 5 + 5 + 2 + 1 + 1. Still Villager: the floor is 20.

*The day after, and the days after that:* Thaw 2 is a day at Garrow's forge — row 57, `worked_the_trade`, weight 2, raising the memory Garrow already holds. **It adds nobody, and renown stays at 15.** That is the anti-grind rule as arithmetic: a hundred days at the anvil is one head. The six heads from V3 hold their weight for thirty days before the first step down (weight 6–9 loses one every thirty days) and stop counting at Thaw 61, which is the weight column doing its work — **a deed at weight 6 buys sixty days of counting; a notice at weight 3 buys ten.**

*What the player sees:* on Thaw 3 the hearth glyph is an ember. Reyne, who has never spoken to the hero, uses the *heard* line at Gorse End on Thaw 2 because Tobbin told him at the yard ([LIVING_WORLD](LIVING_WORLD.md) §2's example, from the player's side). The number under the glyph reads 15, and tapping it lists the six names.

---

## 6. The road from villager to force — five milestones

Every milestone below states what the player **did**, the **arithmetic** from those deeds to the renown number, and what the **world** does about it. Nothing here is granted by a level, a purchase or a quest merely completing. The ledger is the twenty-hour Fighter of [FIRST_REGION](../slice/FIRST_REGION.md) §7, recomputed from the deed table; where §7 prints an older figure for the same day, the table and this ledger govern.

**The running ledger.** Each row adds only *new* heads; a raised memory adds none. Decay rows show renown falling, which it must be able to do.

| World day | What was done | Heads added (reach) | Renown |
|---|---|---|---|
| Thaw 1 | V3, the flock found (row 1, w6) | Tobbin 1, Reyne 5, Hild 5, Garrow 2, 2 ford folk 2 | **15** |
| Thaw 2 | a day at Garrow's forge (row 57) | **none** — the trade raises Garrow's memory and adds nobody; the anti-grind rule, visible in the ledger | 15 |
| Thaw 7–8 | V1: the hewers' dam broken, the river loosed at the ring (rows 2, 27) | Bram 2, Corva 2, Ondrin 5, Rukk 2, 2 hewers 2 | 28 |
| Thaw 8 | the Wrack picket driven off Hobb's Cross (row 6, w8) | Wat Hobb 5, Col 1, 2 folk 2 | **36 — Hand** at dawn on the 9th |
| Thaw 9 | V2: Sallowford's Quarter-day carried to the counting-house (row 4, w4) | Idren 20, Drusk 5, Sabel 2, Kit 5, 2 Chain folk 2 | 70 |
| Thaw 11 | Pell's letter carried home to Idony (row 5, w7) | Idony 20, Pell Tarn 5, Osk 5 | 100 |
| Thaw 13 | H2: Ilune hidden and moved to the Rudd Stones (row 13, w9) | Sarane 20, Ilune 2, 2 village folk 2 | **124 — Name** at dawn on the 14th |
| Thaw 14 | H1: the levy filled and led to Wickery's wall (row 8, w6) | Dell 5, Aud 20, 3 levy folk 3, Jory 5 (heard at the Post, w4) | 157 |
| Thaw 16 | H3: the Skerrow contract witnessed at the old ash (row 20, w6) | Marrock 20 (w2 → w6, now counting), 2 crew folk 2 | 179 |
| Thaw 21–22 | N1: Corrow met, the salvage crew driven off the well-ring (rows 26, 52) | Corrow 100, 2 Wrack sentries 2 | 281 |
| Thaw 23 | Merrin Hale's notice at Wickery names the hero (row 61, w3) | Merrin 5, 8 promoted folk 8 | 294 |
| Thaw 27 | Aud's Address answered in person; Gulla met at the iron-yard | Gulla 2 | 296 |
| Thaw 29 dawn | decay: V2's weight-4 witnesses fall to 2 and stop counting (Kit does not — Corrow's letter rewrote her on the 20th) | Drusk −5, Sabel −2, 2 Chain folk −2 | 287 |
| Thaw 30 | Drill on Wickery's watch (row 10) | 10 watchmen 10 | 297 |
| Thaw 33 dawn | decay: the notice's weight-3 memories fall to 2 | 8 promoted folk −8 | 289 |
| Thaw 34 | Vo1: the Rudd Bridge held, the toll-house stopped, Drusk's yield taken (rows 7, 9, 12) | High Reeve Tull 100, Orsa 2, 6 levy and watch folk 6, 8 folk from the valley's notices 8 | **405 — Voice** at dawn on the 35th |
| Thaw 40 dawn | decay: the watchmen's weight-3 memories fall to 2 | −10 | 395 |

At twenty hours the hero holds **395 of the region's 528–588**, in 50 of the 60 promoted-folk slots — which is why the last board notice was worth less than the first, and why the next one will be worth less again.

### Milestone 1 — Villager, renown 0

**Did:** nothing. A trade, a village, no destiny.
**Arithmetic:** zero heads hold a memory. There is nothing to add.
**World:** neighbours give errands, in the voice of neighbours. Idony says "Morning." Nobody outside Sallowford knows the hero exists.
**Can tilt:** a household — a wheel, a flock, a purse.

### Milestone 2 — Hand, renown 20, reached at 36 on Thaw 8 (hour ~3:45)

**Did:** found Tobbin's flock on the Shelf; broke the hewers' dam and climbed to the Rudd Stones for Ondrin's leave, so Fenn's wheel turned again; drove a Wrack picket off Wat Hobb's barn.
**Arithmetic:** 15 + 0 + 13 + 8 = 36. Four of those heads are notables (Hild, Reyne, Ondrin, Wat Hobb at 5 each) and the rest are folk and trades; not one is a reeve.
**World:** Reyne uses the *heard* line before he has met the hero, because Tobbin told him at the yard. Bram is at *owes* and will not be moved off it for half a year. Wat Hobb's greeting changes, and Wat Hobb hears every cart in the valley. The engine begins offering Hand-tier quests, which means quests with somebody else's livelihood in them.
**Can tilt:** a village — who goes to the levy, who is hidden, where a forest line falls.

### Milestone 3 — Name, renown 120, crossed at 124 on Thaw 13 (hour ~5:30)

**Did:** carried Sallowford's Quarter-day through a Wrack band at the Rudd Bridge and put it in Vesk Idren's hand; carried Pell Tarn's letter home to his aunt, who is the reeve; hid Ilune from the Chain and walked her to the Rudd Stones.
**Arithmetic:** 36 + 34 + 30 + 24 = 124. The step that makes Name is not a big fight: it is **the first three reeve-or-factor heads** — Vesk Idren at 20 on the 9th, Idony Sallow at 20 on the 11th, Sarane at 20 on the 13th. Sixty of the hundred and twenty-four is three people who each talk to twenty.
**World:** Jory Quill names the hero to their face at the Post without being told who they are. Kit Ashby can find the hero. Idren's ledger closes Sallowford's name for a season. Marrock, who has no memory yet, walks up the valley on the 16th — a thing that does not happen. Prices move with regard. The powers' local faces begin to *Address* the hero.
**Can tilt:** a town or a road — a mill's debt, a counting-house, a court's first layer.

### Milestone 4 — Voice, renown 350, crossed at 405 on Thaw 34 (hour ~16:00)

**Did:** went down into the Sunk Court with Halse Corrow and kept the well-ring whole against a Stair-paid crew; led Wickery's watch and Sallowford's levy at the Rudd Bridge and stopped the toll-house the Moot has refused for forty years, and took Drusk Fennick's yield rather than his life.
**Arithmetic:** 124 + 33 + 22 + 102 + 13 + 2 − 9 + 10 − 8 + 116 = 405. Two numbers carry it: **Corrow's 100 on Thaw 21 and High Reeve Tull's 100 on Thaw 34**, and both are leader writes under the leader rule — Corrow because the deed was done at his own camp, Tull because `toll_house = never` moved the Moot's first goal. Neither can be reached by rumour, by a notice or by a hundred errands. Everything else in the crossing is the valley's ordinary people, and twenty-seven points of them decayed away inside the same three weeks.
**World:** letters from Brenning and Fallgate in the same three days. Marrock offers a Skerrow contract despite regard, because a witness is a witness. Corrow writes a second time. Merrin's notice is on every board in the valley. Sarane sends word by Ilune. The Chain's bands on the Ring Road are *hunting*, because Stair regard has crossed −60. The glyph is a beacon.
**Can tilt:** a region — a toll-house, a court's depth, a town's quay: the first region's conflict, which is what the brief asks a first region to end in.

### Milestone 5 — Force, renown 900, not reachable in one valley (about 150 hours, four regions)

**Did**, and every line is a deed with a date in the ledger, not a rank: held Wickery through a Reckoning with its sway at 60 or better, which means a season of paid debts, filled levies and a wall that was drilled; carried the Rudd ledgers to Brenning and stood in the Moot while they were read aloud, which is High Reeve Tull's own goal reached in his own hall; witnessed a contract at Kell or Orrit that the Holds could not have got witnessed otherwise, which is the only way a Vael is remembered by a hold-mother; stood at the Halse Stones when the Closers asked for the ring and gave an answer the Speakers repeat; and made the Weighmaster at Fallgate write to the hero rather than about them — which happens when the Company's ledger has been changed by the hero's hand twice in two regions.
**Arithmetic:** the table in §5 — 440 in seats, 135 held over in the Rudd valley after four seasons of decay, 110 in the Halse, 110 in the Twine, 55 at Fallgate, 60 in the Moot's other reeves: **910**. Region one's own ceiling is 588, so **Force cannot be bought with more errands in the valley the hero was born in; it can only be reached by carrying weight-9-and-10 deeds into three more.**
**World:** the seats *Address* without conditions and in person — the Moot in session, the Weighmaster, the hold-mothers, the Speakers and the Wrack's leader. The map carries the hero's marks: a pass, a bridge, a court, a town's allegiance. Powers plan around the hero rather than about them: a Force hero holding a site with sway ≥ 60 gets one *Levy* a season out of it ([LIVING_WORLD](LIVING_WORLD.md) §3), which is the only place in the design where a player touches a power's move list.
**Can tilt:** the map — a pass closed, a town's allegiance, the Fall itself.

---

## Decisions this round

1. **Field verbs resolve against state, never against a roll.** The Hearth has no dice outside combat, so a check would have been a new system. Instead each verb has a needs list, a cost, a duration, a *falls short* and a *goes wrong*, and the confirm sheet shows all three before the player commits. Readable risk, not luck.
2. **Every verb's failure is a deed-table row.** `broke_our_work`, `dried_their_water`, `read_our_stones`, `caught_listening`, `spotted_following`, `forged_against`, `fenced_their_own`, `wasted_our_day`, `drew_on_the_living` exist so that a failed verb writes a memory with a weight, a lifetime and a surfacing, exactly like a success.
3. **Renown counts memories of weight 3 or more, for and against, one head at a time.** Round one counted every head at full reach regardless of weight, which let hearsay and board notices inflate the number without bound.
4. **The tier floors were rescaled to the region's real population**: Villager 0–19, Hand 20–119, Name 120–349, Voice 350–899, Force 900+. Round one's Voice floor of 500 and Force floor of 2,000 stood against a region ceiling of 528–588 — Voice was barely possible and Force was impossible. Voice is now two thirds of what a valley can hold, and Force is deliberately more than one valley can hold. The floors move; the fiction of each tier does not.
5. **Renown is recomputed after every deed; the tier is read at dawn.** This resolves the round-one contradiction between the Tick's "after every deed" and the trace's Villager-at-27 without changing either behaviour the player sees.
6. **A Forge fails when the wrong person reads it**, and one of the three ways is invisible at the moment of use (the paper being carried back), which is what makes the verb a decision rather than a check. The Rogue session plays that failure two days after the success.
7. **The Rogue has no crust answer and is not given one.** Powder and the ground are the class's answer to the Salted, and the sluice is its way out of the Salt Hall. Whether the husk's immunity list needs changing is COMBAT's question, not this file's.
8. **Where FIRST_REGION §7 prints renown figures from round one (12, 74, 146, 579), the ledger in §6 supersedes them.** The deed table is the source; the trace is a reading of it.
