# Adventure Engine

The Hearth does not carry a quest list. It carries lore tables, a living world ([LIVING_WORLD](LIVING_WORLD.md)), a hero with a standing and a history ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md)), companions with agendas, and an engine that reads all four and writes quests that name people, sit on the map and change the simulation when they end.

**Every table this engine draws from is printed in this file, in full** (§3.1–§3.11), followed by the procedure a person can run by hand with dice (§3.12), the twelve showcase quests with the table rows that produce each (§7), and three further quests generated at the table from ordinary undated state, with every roll shown (§7.5). Nothing here is counted and left unwritten; where round one's counts were wrong, §8 says so and gives the real number.

---

## 1. What the engine reads

| Input | Source | Examples |
|---|---|---|
| **Lore tables** | printed below, tagged by people, power, age, ring | 36 triggers (§3.1); 48 motives (§3.2); the voice rule (§3.3); 30 twists (§3.4); 25 site types (§3.5); 16 opposition kinds (§3.6); 14 giver roles and 8 stake types (§3.7); 12 verbs (§3.8); name tables — Vael 96 given + 60 bynames, Skerrow 48 + 3 holds, Ulder 36 + 12 rings, Kest 24 family + 36 given (§3.9); 60 rumour templates (§3.10); 14 notice templates (§3.11) |
| **World state** | the living world | site states (`wheel_stopped`, `dam`, `forest = cut`, `counting_house = burned`, `water_level`), band positions, debt ledger, weather, season flags, festival |
| **Hero** | standing tier, per-power regard, the deed ledger, door flags, class, trade | *Hand*, Stair +15, Wrack −25, `pell_tarn_named_by_hero`, Fighter, smith |
| **Companions** | each companion's agenda (a goal and a site) and regard for the hero | Corva: leave by the Stair; Ilune: report the Shelf to Sarane; Gulla: bronze for Thrum |
| **People** | NPC conditions, memories and schedules | Bram *ruined-pending*; Idony's regard −7; Tobbin at the pasture 6–12 |

The engine runs at dawn after the powers move, and again whenever the hero enters a town or village. It keeps at most three open quests per site and six in the hero's journal; it never offers a quest whose giver is dead, fled, or at *hates* (when the rolled giver is at *hates*, the role is re-rolled inside the site, and if no one in the role is willing the trigger waits — see Q14 in §7.5, where this rule fires).

## 2. The grammar

Every quest is one sentence with seven slots, and every slot is filled from state, never from a random table alone:

**GIVER** (a named NPC with a `condition` or a power's Post/Address move) · **REASON** (a motive from §3.2 whose cause list contains the trigger and whose preconditions match the giver's state) · **STAKE** (what changes if nothing is done — always a site state or an NPC condition, scaled to standing, §4) · **PLACE** (a site on the map whose state is the cause) · **OPPOSITION** (whatever band, creature, weather, paper or person the state says is in the way, §3.6) · **TWIST** (one entry from §3.4 whose preconditions match) · **CONSEQUENCE** (the deeds each outcome writes, §5).

The engine does not fill slots left to right. It starts from a **trigger**: a site state or NPC condition that the trigger table (§3.1) lists as a cause. From the trigger it finds the person who has the reason (the miller whose wheel stopped; the reeve whose village owes; the shepherd who lost the flock), and only then looks for a twist. If no twist's preconditions match, the quest is offered plain — a plain quest with a real reason still reads as authored, and about a third of quests are plain by design.

**Verbs.** Each quest carries one or two of the engine's twelve verbs, which decide what the player actually does: *investigate, carry, search, choose, hide, witness, parley, answer, hold, break, descend, lead* (§3.8). Verbs are tied to the trigger through the motive, and each class has out-of-combat solutions to each verb ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2).

## 3. Drawing from the lore so nothing reads generic

- **Names come from people.** A promoted folk NPC gets a name from their people's table (§3.9), a byname by their role and site (a Vael carter at Hobb's Cross is *Fenn Carter* or *Wat Hobb*), and, if Kest, the family first. The tables are large enough that the first region promotes about sixty folk without a repeat; a repeat inside one region is forbidden.
- **Motives have preconditions and voices.** Each of the 48 motives (§3.2) is a cause, a wanted outcome, a stake sentence and a pull toward one power. The people's voice is not a third table of hand-written phrasings but a rule (§3.3): a Skerrow says any motive as a contract, a Kest as a weight, an Ulder as a memory, a Vael as a hearth.
- **Places are causes, not backdrops.** The place is always the site whose state triggered the quest or the site of the opposition that the state put there. A quest cannot be set somewhere its cause did not happen.
- **Opposition is whoever is really there** (§3.6). Bands, creatures, weather and paper are read from state. If the Chain broke the bridge camp on Thaw 11, no quest on Thaw 12 has Wrack at the bridge.
- **Age tagging.** Every site type, opposition kind and motive carries an age tag (Stone, Cutting, Ships). The engine prefers a fill that touches two ages and forbids three fills from the same age in one quest unless the trigger is a festival.
- **Text.** Quest text is assembled from the motive's line in the giver's voice (§3.2 + §3.3), the giver's greeting tier ([LIVING_WORLD](LIVING_WORLD.md) §2), the place's description line for the weather and hour (§3.5, with per-site overrides from the region file), the twist's line (§3.4), and one rumour line for the street (§3.10). The writer's job is the tables, not the quests.

### 3.1 Triggers (36)

A trigger is a state, not an event: the engine reads it at dawn and at every town entry, and it stays live until the state changes. Roll `d36` to run the table blind; in play the engine takes every live trigger in range and scores them by proximity to the hero, the giver's regard and the shape signature (§6). "Scale" is the standing band the trigger usually reaches (V Villager, H Hand, N Name, Vo Voice, F Force).

| # | Trigger (state) | Set by | Motives it can raise | Scale |
|---|---|---|---|---|
| TR01 | `wheel_stopped`, `forge_cold`, `boat_holed`, `ferry_lost` | a dam, a flood, a theft, a death | M07, M03, M12 | V–H |
| TR02 | `dam`, `slide_jammed` | Holds *Build* at a Wend camp; a hero who broke one | M07, M16, M18 | V–H |
| TR03 | `river_flow = low` or `high` | Quiet *Ward*; season; a broken dam | M03, M19, M07 | V–N |
| TR04 | `well_unblessed`, `blessing_missed` | a keeper held at a ring; a village at odds with the Quiet | M31, M03, M11 | V–H |
| TR05 | `flock_lost`, `stock_strayed`, `cart_lost` | fog, a raid, a Wrack ride, a hound | M02, M23, M01 | V |
| TR06 | `debt_called(site)` | Stair *Call debt* | M05, M44, M27, M34 | V–N |
| TR07 | `quarter_day_due`, `reckoning_near` | season roll (Thaw 1, Reap 60) | M12, M05, M38 | V–N |
| TR08 | `seizure_pending(site, day)` | Stair *Seize* queued | M44, M26, M21 | H–N |
| TR09 | `band_at(site)` | any power's *Send band* | M13, M08, M45 | V–N |
| TR10 | `raid(site)`, `damage = burned/robbed` | Wrack *Raid*; a Chain reprisal | M01, M20, M45 | V–N |
| TR11 | `levy_called(site, n)` | Moot *Levy* | M14, M21, M22 | H |
| TR12 | `contract_pending(site)` | Holds or Stair *Parley* | M25, M15, M16 | H–N |
| TR13 | `forest = cut` or `warded` | Holds *Fell*; Quiet *Ward* | M16, M18, M09 | H–N |
| TR14 | `salvaging(court)` | Stair *Salvage* with a paid Skerrow crew | M40, M09, M28 | N |
| TR15 | `court_layer_surfaced`, `water_level` flip | season roll: the Still drops a finger | M09, M24, M39 | N–Vo |
| TR16 | `well_ring_intact = false` | a salvage crew that finished cutting | M09, M23, M39 | Vo |
| TR17 | `layer3_open`, `salted_walking` | a seal cut; the Shelf dry | M23, M24, M45 | N–Vo |
| TR18 | `drawer_hunted`, `hunted(NPC)`, `deserter_at(site)` | a Drawing the Stair paid for; a levy broken | M30, M08, M15 | H–N |
| TR19 | `salt_pans = closed` or `held` | a husk in the sheds; a Drawing; a raid | M06, M23, M35 | H–N |
| TR20 | `boats_idle`, `weir_dry`, `low_mark_drop` | the lake falling past a weir-line or a quay | M29, M19, M06 | V–H |
| TR21 | `build_pending`, `toll_house = built` | Stair *Build* | M47, M35, M13 | N–Vo |
| TR22 | `sergeant_absent`, `band_short` | a leader dead, fled or bought | M33, M22, M45 | N |
| TR23 | `condition(hurt / captive / ruined / fled)` on a duty-holder | anything | M12, M44, M01 | V–N |
| TR24 | `companion_agenda_near` | a companion's goal site within a day | M48, M24, M28 | V–Vo |
| TR25 | `festival_today`, Stillday | the calendar | M31, M36, M12 | V–N |
| TR26 | `storm`, `flooded`, `passes_closed`, `roads_slow` | weather roll; season flags | M42, M35, M01 | V–N |
| TR27 | `moot_sits`, `sway_contested`, `reeve_absent` | Moot business; a reeve taken or shamed | M36, M38, M47 | N–Vo |
| TR28 | `counting_house = burned` or intact-and-hated | Wrack goal 1; a season of called debts | M37, M38, M20 | N–Vo |
| TR29 | `ledger_disputed`, `writ_posted` | two papers that disagree | M26, M27, M44 | H–N |
| TR30 | `keeper_absent`, `ring_unkept`, `ward_failed` | an Ulder gone, dead or held | M11, M19, M31 | H–N |
| TR31 | `gallery_unpropped`, `timber_short(hold)` | a contract cut short; a warded wood | M18, M42, M15 | H–N |
| TR32 | `closers_active`, `rings_held(n)` | a Speaker turned Closer | M43, M19, M09 | Vo–F |
| TR33 | `hidden_stores`, `undeclared_salvage` | a weighing due on a house that is short | M27, M28, M34 | H–N |
| TR34 | `missing(NPC)`, `corpse_found(site)` | the Shelf, the Wend, the dark | M04, M24, M20 | V–N |
| TR35 | hero tier ↑ past a power's *Address* threshold | standing | M33, M41, M46, M47 | N–F |
| TR36 | `salt_rising(NPC)`, `drawer_untaught` | Drawing without a keeper | M10, M32, M09 | V–H |

### 3.2 Motives (48)

A motive is not a phrase. It is a slot with six fields: the **cause** (which triggers can raise it), **who plausibly holds it** (giver roles, §3.7), **what they want**, **what is at stake if nothing is done**, **which power it pulls toward** (whose regard moves, and who therefore gets a letter about the outcome), and its **age tag**. Scale is the standing band the motive is usually offered at; the trigger may lift it one tier (§4). Roll `d48`, or take the 2–4 motives the trigger names.

Every motive below is a thing that can only be wanted in the Hearth: a debt in a Kest book, a river a stone ring can hold, timber for a Skerrow gallery, salt in a Drawer's wrists, a court coming up out of the mud as the lake falls.

| # | Motive | Cause (triggers) | Held by | Wants → at stake if nothing is done | Pulls | Age | Scale | Verbs |
|---|---|---|---|---|---|---|---|---|
| M01 | **hungry-house** | TR10, TR26, TR23 | G01, G04, G12 | Bread or seed to Green → the household signs with the Stair or walks out to the Shelf; a Wrack recruit | Stair / Wrack | Ships | V–H | carry, investigate |
| M02 | **fear-of-master** | TR05, TR23 | G02, G12 | The lost thing back before the master counts → a beating, a lost place, a child on the road | none (household) | Cutting | V | search, carry |
| M03 | **the-water-is-wrong** | TR01, TR03, TR04, TR20 | G09, G07, G03 | The water put right at the well, the race or the ford → the village drinks brack, the mill stands, the rumours sour for a month | Quiet | Stone | V–H | investigate, parley |
| M04 | **a-body-on-the-mud** | TR34, TR17 | G12, G06, G01 | To know who it was and what took them → the missing are counted as Wrack, and the town believes the worst about the Shelf | Moot / Wrack | Stone | V–N | investigate, search |
| M05 | **debt-at-the-door** | TR06, TR07, TR29 | G03, G09, G04, G01 | Coin by the grace day, or the ledger re-read → the site goes into the Stair's book and a recruit goes to Corrow | Stair | Ships | V–N | carry, answer, hold |
| M06 | **the-price-of-salt** | TR19, TR20, TR26 | G12, G05, G08 | The pans working, or salt bought before the curing season → the winter's fish rot; the Stair's daily coin stops and it calls debts to cover it | Stair | Ships | H–N | investigate, break |
| M07 | **livelihood-stopped** | TR01, TR02, TR03 | G03, G12, G10 | The works turning again by a stated day → the trade fails, the debt lands, the household is ruined | Stair / Holds | Cutting | V–H | investigate, break, choose |
| M08 | **the-boy-is-with-them** | TR18, TR09, TR10 | G01, G09, G06 | Word, a pardon, or him home before the next raid → kin on both sides of a wall when the bands are counted | Wrack / Moot | Ships | V–N | parley, carry |
| M09 | **the-old-grief** | TR14, TR15, TR16, TR13 | G14, G07 | What the water held left where it is → a court robbed, a seal cut, the Salted up in the daylight | Quiet | Stone | H–F | descend, parley, witness |
| M10 | **thirst** | TR36, TR26 | G07, G14, G01 | Water carried, a ring's easing, or a keeper's hand for a Drawer going grey → a Drawer Salts and walks out to the Shelf, and the village loses its dowser | Quiet | Stone | V–H | carry, parley |
| M11 | **the-stones-are-untended** | TR30, TR04 | G09, G12, G14 | A keeper back at the ring before the season's storms → one more storm a season, an unheld river, a valley that blames the Ulder | Quiet | Stone | H | search, carry, parley |
| M12 | **duty-cannot-travel** | TR23, TR07, TR25 | G09, G08, G06, G04 | The duty done by another hand by the day it is due → the duty lapses and the penalty falls on the whole village | Moot / Stair | Ships | V–H | carry, answer |
| M13 | **the-road-is-watched** | TR09, TR21, TR10 | G04, G03, G09 | The road walked, or the watchers moved off it → carts stop, prices rise, the village turns inward and the inn empties | Moot / Stair | Ships | V–N | hold, investigate, lead |
| M14 | **the-ploughing-is-not-done** | TR11, TR26 | G09, G06, G01 | The levy filled without the village's own hands → a poor harvest, or a thin wall when the bands are counted | Moot | Cutting | H | choose, lead |
| M15 | **a-contract-half-made** | TR12, TR18, TR31 | G10, G05, G01 | The words said aloud, in order, before the right witness → the bargain is made on one man's word and the Quiet will not recognise it | Holds | Cutting | H–N | witness, parley |
| M16 | **the-line-is-in-the-wrong-place** | TR13, TR12, TR02 | G01, G14, G10 | The boundary held at the mark it was always held at → a ring's skirt is cut, or a farm loses the wood it heats with | Holds / Quiet | Cutting | H–N | witness, investigate, hold |
| M17 | **a-word-i-cannot-break** | TR12, TR29 | G10, G13, G05 | The breaker brought to the hold's word, or the debt paid in iron → to a Skerrow a broken contract is a killing; the hold closes its trade with the valley | Holds | Cutting | H–N | parley, hold, choose |
| M18 | **the-props-are-rotting** | TR31, TR13, TR02 | G10, G13, G05 | Props to the hold before the gallery goes → a gallery falls with Skerrow in it, and the Holds fell without a contract | Holds | Cutting | H–N | carry, parley, break |
| M19 | **the-flood-is-coming-back** | TR03, TR32, TR20 | G01, G14, G05 | The river loosed, or the Closers named out loud → low fields drown, the Shelf floods, a village moves uphill for good | Quiet | Stone | N–F | investigate, parley, choose |
| M20 | **who-lit-it** | TR10, TR28 | G09, G06, G05 | The hand that did it, with proof → the town blames its own, and a raid becomes a hanging | Moot / Stair | Ships | H–N | investigate, answer |
| M21 | **orders-i-dislike** | TR11, TR08, TR12 | G06, G08, G10 | The order carried out in a way he can live with → it is done badly, or refused, and the power remembers who was standing there | the ordering power | Cutting | H–N | choose, lead |
| M22 | **the-drill-is-a-joke** | TR22, TR09, TR11 | G06, G09 | His men worth something before the season turns → a wall that breaks at the first push, and the reeve taken | Moot | Cutting | H–N | lead, hold |
| M23 | **something-walks-by-day** | TR17, TR19, TR05 | G12, G08, G06, G05 | To know what changed out there, and the ground made walkable again → the Shelf trade stops, the pans close, and the Wrack have the mud to themselves | Stair / Wrack | Stone | N | investigate, hold, descend |
| M24 | **my-brother-is-down-there** | TR34, TR15, TR24 | G12, G11, G01 | A body, or the truth, up out of the dark → a family that cannot bury; a companion left below for good | Quiet / Wrack | Stone | H–N | descend, search |
| M25 | **bargain-needs-witness** | TR12 | G10, G13, G05 | A witness of standing the Holds will take → no contract, and the Holds proceed on one man's word or take what they want | Holds | Cutting | H–N | witness |
| M26 | **read-it-to-me** | TR29, TR08, TR07 | G01, G09, G08 | The paper read, checked against the other book, or copied → a debt of four marks where the ledger says three, and nobody in the room can read either | Stair | Ships | V–N | investigate, answer |
| M27 | **the-factor-must-not-know** | TR33, TR06, TR10 | G04, G01, G12 | The count kept off the book for one weighing → the last of a house's seed and stores go into the Stair's ledger | Stair (against) | Ships | H–N | hide, choose |
| M28 | **buy-it-before-they-do** | TR14, TR33, TR24 | G05, G12, G08 | The bronze, iron or salvage in his yard and not the rival's → the rival power arms itself, or funds a band, on what came out of the mud | Holds / Stair | Stone+Ships | H–N | carry, parley |
| M29 | **the-quay-is-short** | TR20, TR26, TR19 | G12, G04, G09 | The water reached again: weirs moved out, boats floated, the catch landed → the town's winter food, and a quay the lake has walked away from | Moot | Cutting | V–H | carry, investigate, lead |
| M30 | **hiding-someone** | TR18, TR23 | G07, G04, G01, G14 | The hunted kept, or moved, before the band arrives → the hunted taken, and the house that hid them marked | Quiet / Wrack | Ships | H–N | hide, answer, parley |
| M31 | **the-keeper-will-not-come-down** | TR04, TR30, TR25 | G09, G07, G01 | An Ulder brought down for the blessing, or their reason carried back to the village → a well unblessed all season, and a village that turns on the Quiet | Quiet / Moot | Stone | V–H | parley, carry |
| M32 | **teach-me** | TR36, TR23 | G07, G02, G14 | A teacher, a place, or one season's keeping for someone with a knack → an untaught Drawer Salts himself; a trade dies with the old man | Quiet | Stone | V–H | parley, carry, choose |
| M33 | **hire-the-name** | TR22, TR35 | G05, G09, G13 | The hero's name at the head of his men or his business → the post goes to someone worse and the power hardens | the hiring power | Ships | N–Vo | answer, choose |
| M34 | **keep-them-off-my-books** | TR06, TR10, TR33 | G05, G08, G09 | The debtors kept off the Shelf and the ledger kept whole → every three called debts become a Wrack band, and the Wrack come for the book | Stair | Ships | N | parley, carry, choose |
| M35 | **the-cart-must-go-through** | TR21, TR26, TR09 | G04, G05, G10 | This week's load over the crossing → the season's iron, flour or salt does not move, and every price in the valley steps up | Moot / Stair / Holds | Ships | H–N | carry, choose, hold |
| M36 | **a-place-at-the-table** | TR27, TR23 | G09, G01, G05 | The seat, or the vote, before the Moot sits → the town's voice goes to whoever paid for it | Moot / Stair | Cutting | N–Vo | parley, answer, choose |
| M37 | **the-ledgers-must-burn** | TR28, TR06 | G13, G12, G01 | The book that holds the valley gone → the debts stand, and the man who wanted it does it with three bands instead | Wrack | Ships | N–Vo | lead, hold, break |
| M38 | **the-ledgers-must-be-read** | TR29, TR27, TR07 | G09, G14, G01 | The ledgers read aloud before the town at the Reckoning → burning changes nothing (Fallgate keeps the copy), and the debts are settled by knives instead of by voices | Moot | Ships | N–Vo | parley, witness, choose |
| M39 | **the-shelf-is-ours** | TR15, TR16, TR09 | G13, G05, G14 | The mud held, and the rivals off it → whoever holds the Shelf holds the courts, the bronze and the road to the water | Wrack / Stair / Holds / Quiet | Stone | N–F | hold, lead, parley |
| M40 | **show-them-what-is-being-dug** | TR14, TR35 | G13, G14, G12, G08 | A witness with a name to see the cutting with their own eyes → the crews finish unseen and the seal goes | Wrack / Quiet | Stone | N | descend, parley |
| M41 | **the-town-i-was-reeve-of** | TR35, TR27 | G13, G09 | Terms with the place that cast him out, spoken on his own ground → a raid instead of a parley, at the season's end | Wrack | Ships | N–Vo | parley, choose |
| M42 | **the-pass-must-open** | TR26, TR31 | G10, G04, G05 | The road over or through opened, or the load carried the long way round → a hold eats its seed corn, or the Stair's door shuts on the whole Hearth | Holds / Stair | Cutting | H–Vo | carry, break, lead |
| M43 | **close-the-fall** | TR32, TR03 | G14, G01, G13 | The rings made to hold at once — or the ones who want it stopped → the Still rises, the Lowmark drowns, and every Drawer who takes part is Salted | Quiet | Stone | Vo–F | investigate, parley, choose |
| M44 | **my-home-is-being-taken** | TR08, TR06, TR23 | G01, G11, G03 | The door held, the writ broken, or the debt paid before the bailiff's day → a home in Kest hands and a family walking out onto the mud | Stair | Ships | H–N | hold, investigate, choose |
| M45 | **the-wall-is-not-ready** | TR09, TR22, TR17 | G09, G06, G05 | The wall, the gates and the men ready before the bands are counted → the town falls, or burns, and the reeve is taken | Moot / Stair | Cutting | N | lead, hold, carry |
| M46 | **hold-the-town** | TR10, TR28, TR35 | G09, G05, G06 | The town held and the quay kept when the bands come → the counting-house burns, the reeve is taken, the town changes hands | Moot / Stair | Ships | Vo | lead, hold, choose |
| M47 | **the-thing-we-have-refused-forty-years** | TR21, TR12, TR27 | G09, G13, G04 | The thing not built, and forty years of refusal made real → a toll on every cart out of the valley, forever, and a Moot that cannot say no again | Moot | Ships | N–Vo | lead, choose |
| M48 | **i-want-out-of-this-valley** | TR24, TR07 | G11, G02, G08 | Passage down the Stair, or a berth, or a reason to stay → the companion goes alone, and does not write | Stair | Ships | V–Vo | carry, choose, parley |

**Reading a row.** M07 says: when a wheel stops, a forge goes cold or a ferry is lost (TR01–TR03), the person who holds the motive is whoever owns the works (G03) or works them (G10, G12); what they want is the works turning by a stated day; what is at stake is the trade, the debt and the household; the power whose regard moves is the Stair (whose book gains the site) or the Holds (whose dam stopped it); the age is the Cutting; and the verbs are *investigate*, *break*, *choose*. That is quest V1 before a single word of prose exists.

### 3.3 The voice rule — how a motive comes out of a mouth (4 peoples × 3 rules = 12 cells)

Round one costed this as "48 motives × 4 peoples × 3 phrasings = 576 lines". That count was wrong and it is corrected here (§8): 576 hand-written phrasings would be 576 chances to write the same sentence twice. What the writer authors instead is **one line per motive** (the "wants" column above, which is the sentence the giver is trying to say) and **a twelve-cell voice rule** that puts any motive in any people's mouth. The rule is small enough to hold in the head and it is what makes a Skerrow miller and a Vael miller sound like different men with the same problem.

| People | What they measure it in | How they open | What they swear by | What they never say |
|---|---|---|---|---|
| **Vael** | the hearth and the household: days, mouths, the fire, the neighbours | a fact about a thing that is not working, then the ask | "by my hearth" | that they are afraid of the Kest by name |
| **Skerrow** | the contract: what was said aloud, before whom, and what it binds | the terms first, the reason after — often never | "it's stone" | anything they have not been paid or contracted to say |
| **Kest** | weight, price and the book: marks, bits, days of interest | the price of the problem, then the price of the answer | "what can be weighed can be owned" | that a thing might not be for sale |
| **Ulder** | memory and water: what was here before, what the water did | the memory, then the ask, with a long pause between | nothing; they state and wait | a threat, and any number |

**Worked: M07 *livelihood-stopped* in four voices, same motive, same trigger (`wheel_stopped` + `dam`), four different givers.**

- **Vael** (Bram Fenwright, miller): "The wheel's stood two days. The Quarter-day's called on me and if I can't grind by Mid Thaw, Vesk Idren has the mill and Corva has nothing."
- **Skerrow** (Habb of Thrum, hold-hand at the slide): "Terms: you clear the jam, Thrum weighs you two marks and a witness-fee in iron, and the crew stands off while you do it. Say it back to me and it's stone."
- **Kest** (Vesk Idren, factor): "A stopped wheel is three marks a season off this valley's flour and eleven bits a day of interest I am obliged to write down. Put it turning and I will weigh what that is worth to you."
- **Ulder** (Ondrin, keeper): "The Rudd ran under that mill before there was a mill. It is being held above and below, and only one of those is mine. … Go and see which."

The greeting tier ([LIVING_WORLD](LIVING_WORLD.md) §2) prefixes the line; the site's description line for the hour and weather (§3.5) follows it; the twist's line (§3.4) closes it. That is the whole prose assembly.

### 3.4 Twists (30)

A twist is not a surprise. It is a **precondition and an edit**: something already true in the world that changes the quest the engine has just built — adding a branch, swapping an opposition, putting a clock on it, or making one outcome cost something it would not otherwise cost. Eight families: **kin, debt, paper, agenda, place, season, old, door**. Roll `d30`, check the precondition, re-roll up to three times; if none passes, the quest is offered plain.

| # | Twist | Family | Precondition | What it changes about the quest already built | The line it adds |
|---|---|---|---|---|---|
| T01 | **the leader is kin** | kin | the opposition's leader has a kin link to the giver or to a named NPC at the giver's site | opposition will parley once before fighting; a non-violent branch opens; the kin NPC gets a memory either way | "That's a Sallowford face at the head of them." |
| T02 | **kin under arms on both sides** | kin | a *lead* or *hold* quest where the levy list and the opposing band share a kin pair | adds a *choose*: a gate opened, a man let out; win or lose, one of the pair dies unless the branch is spent | "Garrow's on the wall. His old apprentice is under it." |
| T03 | **the dead man's debt** | debt | a named NPC died within thirty days holding a Stair debt | the stake passes to the heir mid-quest, and the heir may become the second giver; the Reckoning becomes the deadline | "It was his. Now it's the girl's, and she's fourteen." |
| T04 | **two causes** | place | two live states at or above the place could each explain the trigger | fixing one leaves the stake half-solved; adds an *investigate* step and a second place | "The river's low below the dam too, which a dam does not do." |
| T05 | **the line on the map** | place | the outcome would move a boundary: `forest`, `sway`, a toll, a control | the outcome becomes a permanent site state, and a second power sends a watcher who must be dealt with in the room | "Cut to it and you cut the ring's skirt." |
| T06 | **the site is already taken** | place | a band moved to the place after the quest was generated | opposition is swapped for whoever is actually there at the hour of arrival; the giver did not know and will not believe it | "There's nobody at that camp but us, is what I was told." |
| T07 | **the way in is under water** | place | `river_flow = high`, rain, a flooded layer, a lost ferry | the approach becomes the obstacle: a boat, a ford at dusk, a Drawing; travel time doubles and oil or water is spent getting there | "You'll want Osk's boat, and Osk is abed." |
| T08 | **the giver would rather it were you** | agenda | the giver holds an order they dislike (M21, M14, M21-adjacent) and hero standing ≥ Hand | a branch where the hero takes the burden personally; the giver's memory of the outcome is weighted +2 either way | "Or I'll send you and Osk's lads and call it four." |
| T09 | **the giver is lying about the cause** | agenda | the giver's condition includes debt, shame or a deed of their own that made the trigger | an *investigate* step reveals it; then a *choose* about whether to say so in front of others | "He was at the sluice himself the night before. Ask him." |
| T10 | **the one who asks cannot pay** | debt | the giver's coin is below the tier's reward band | the reward becomes a thing, a favour or a door — a boat, a key, a bed at a ring, a witness-fee in iron, a name spoken to a reeve | "I've nothing. I've the boat, and I'll not need it if this goes wrong." |
| T11 | **companion-to-be** | agenda | the person at the centre of the quest is on the companion list and unmet | success adds a companion; failure sets their condition (*imprisoned*, *fled*, dead) and closes them for the campaign | "She could walk with you, after. She's nowhere else." |
| T12 | **the companion knows the place** | agenda | a party companion's agenda names the quest's site | they supply the way in — a route, a sentry's name, a boat — and demand a say in the outcome | "I've been down there. I'll show you, and then you'll listen to me." |
| T13 | **the enemy is under contract** | agenda | the opposition is Skerrow working under a contract that does not cover fighting or this task | they stand aside if the work is not touched; the fight is optional and the contract, not the crew, is the obstacle | "Contracted to build. Not to hold." |
| T14 | **the enemy tells the truth** | agenda | the opposition leader's goal is served by the hero knowing a true thing | a parley step before the fight; a fact that opens a door and cannot be unlearned | "I'll show you what they're cutting, and then you can decide whose knife you are." |
| T15 | **the hunted is the wrong person** | paper | a `hunted` NPC whose act was done by someone else at the same site | adds an *investigate* step and a *choose*: name the real one, or let it lie and carry it | "She was at the pans. She wasn't at the pans alone." |
| T16 | **the ledger's copy** | paper | a Kest ledger is at stake, `counting_house` intact, and a clerk's regard ≥ 0 | the destructive branch is revealed as pointless — Fallgate keeps the copy — and a parley branch opens in its place | "Burn it and Fallgate writes it out again by Reckoning." |
| T17 | **the paper names the hero** | paper | a deed ledger entry made the hero a party: `witnessed`, `informed_on`, a Stand contract, a surety | the hero cannot be neutral; one branch closes; the power's regard moves twice as far on this quest | "Your name's on the back of it. You put it there." |
| T18 | **the writ has a day on it** | paper | a seizure, levy, contract or Quarter-day with a dated deadline within six days | adds a clock the journal shows in days; a lapsed clock is a consequence, not a failure screen | "The twenty-sixth. Sabel is never late." |
| T19 | **a warning from the old people** | old | an Ulder, or a Vael taught by one, is within a day's walk of the giver's site | adds a true warning about the place — what wakes, what the mud does, what the stones hold — and a memory to the warner if it is heeded | "Not past the first stones, whatever you hear bleating." |
| T20 | **the ground remembers** | old | the place is Age of Stone: a court, a ring, the Old Shore, a drowned hall | one step of the quest can be solved by Drawing at a salt cost, reading what walked there; the Quiet gain a regard stake in the outcome | "Draw the puddle off the flags and you'll see what came through." |
| T21 | **the Salted was someone** | old | a husk or Salted at the place is identifiable — a name in a ledger, a ring, kin alive within the region | killing it writes a memory to the kin; a branch to bring proof back; the Quiet's regard on this quest doubles | "That's Harl Ferrow's coat. He walked out in Reap." |
| T22 | **the companion loses by it** | agenda | a party companion's agenda-object *is* the quest's stake (Gulla's bronze, Corva's passage, Kit's Corrow) | the winning branch costs the companion their goal: regard −20 unless a branch preserves it, and they say so out loud before the choice | "I'll go down with you. I won't help you drown it." |
| T23 | **a companion objects** | agenda | a party companion's agenda opposes the *giver* or the giver's power | they refuse one branch outright and leave the party if it is taken | "If you take his coin, I go back to the stones." |
| T24 | **the season is against it** | season | `roads_slow`, a storm rolled, `passes_closed`, `fields_busy`, `shelf_dry` | travel doubles or a resource halves; the fastest branch closes; the deadline bites a day earlier | "Four hours in this mud, not two." |
| T25 | **the festival is in the way** | season | `festival_today`, or a Stillday falls inside the deadline | nobody trades, the Ulder do not speak to strangers, and everyone is in one place: the quest becomes public and witnesses double | "It's Stillday. He'll not open the door and he'll not sell you rope." |
| T26 | **the water is falling** | season | a season roll flipped a Shelf site from drowned to surfaced, or the low-mark was newly cut | a new site appears mid-quest and becomes the place or the prize; whoever reaches it first holds it | "There's stone standing out of the mud that wasn't there last Reap." |
| T27 | **the paper is wrong** | paper | two ledgers or writs disagree and the hero can hold both | a non-violent branch that delays the power's move by ten days and marks a clerk | "The writ says four marks. Idony's book says three." |
| T28 | **the door you opened** | door | a door flag set by an earlier hero deed applies here: `ondrin_owed`, `pell_letter_delivered`, `hero_witnessed_skerrow`, `idren_marked_you`, `corrow_met` | one extra branch, or one closed; the giver names the old deed aloud, which is how the campaign shows it remembers | "You stood witness for Reyne in front of a Skerrow. That's why I'm asking you and not him." |
| T29 | **the other side offers** | door | two powers with opposite goals are both at *Address* threshold with the hero | a second letter arrives the same morning with a real counter-offer; refusing both is a live branch with its own consequence | "Two letters in one morning." |
| T30 | **nobody will say who asked** | door | the giver is a power's *Post* — a notice on a board, or a letter with no name on it | the giver is discovered mid-quest; the reward and the regard depend on who it turns out to be, and the hero cannot choose | "The board says the Moot will pay. The board is Merrin's hand, but the words aren't." |

### 3.5 Site types (25)

Round one counted 22 and printed none. The real table is **25**: the missing three were the hold gate, the shieling and the well shaft, without which the Rim, the Shoulders and the bottom of a court have no shape (§8). A site type is a **shape** (what the player walks and fights in), **who is there** (by schedule, by band, by creature), **what is worth taking**, **its danger**, its **age**, and the **states it can hold** — which is what makes it a quest place rather than scenery. Every named site in the region file is an instance of one of these.

| # | Site type | Ring | Shape in play | Who is there | Worth taking | Danger | Age | States it can hold |
|---|---|---|---|---|---|---|---|---|
| S01 | **Ford village** | Lowmark seam | a green, a ford or ferry, eight to fourteen doors, one inn, a well, a notice post; one road in, one out, a river across the middle | reeve, smith, herb-wife, innkeeper, twenty to forty folk on schedules | nothing worth stealing; everything worth keeping | a band that walks in; a flood; a search | Cutting | `debt_called`, `levy_called`, `well_unblessed`, `damage = flooded`, `hidden_stores`, `hunted(NPC)` |
| S02 | **Grange or farmstead** | Lowmark | a yard, a barn, a house, fields on three sides, one lane; fights happen in the yard and between the ricks | a farming family, hired hands, a dog, the militia captain if he farms | grain, stock, seed, a cart, a season's wool | fire; foragers; a bailiff's day | Cutting | `raid`, `harvest = poor/good`, `seizure_pending`, `stock_strayed`, `sway` |
| S03 | **Mill on a race** | Lowmark, on a river | a wheel, a race and sluice, a stone floor thick with flour, a loft, a bridge over the tail-race | a miller and family, carters at the door, a bailiff on a writ day | flour, the sluice itself, the mill's debt | a race that can be flooded or dried; a door that can be held | Cutting | `wheel_stopped`, `dam`, `river_flow`, `debt_called`, `seizure_pending`, `yard_flooded` |
| S04 | **Road inn and cart-yard** | road | a taproom, a yard, a stable, a barn, a lane crossing; the rumour hub of its stretch of road | innkeeper, carters, a hired mule, whoever is passing at that hour | stores, carts, a mule, what is said in the taproom | a raid on the stores; a road watched from the crossing | Ships | `raid`, `hidden_stores`, `band_at`, `damage = robbed`, `sway` |
| S05 | **Stone bridge and crossing** | Lowmark, Ring Road | a stone span, two approaches, a parapet with gaps that fight like doorways, a toll-house plot at one end | whoever holds it that week: militia, Chain, Wrack, masons | the crossing itself — every cart in a valley | a crossing that can be held by six against thirty; drowning below | Cutting | `band_at`, `build_pending(toll_house)`, `toll_house`, `bridge_shared`, `river_flow = high` |
| S06 | **Town wall and gate** | town | earth and timber (defence 30), a gate, a wall-walk, a muster yard inside | watch, militia, a captain, the levy from the villages | the town behind it | a wall is only as good as who is standing on it | Cutting | `wall damage`, `militia_quality`, `levy_filled`, `raid_expected`, `control` |
| S07 | **Market cross and notice board** | town | an open square, stalls on market days, a board, the reeve's table on Stillday | scribe, traders, everyone in town at some hour | reputation: the board is where a name becomes public | words; a notice is a deed with witnesses | Ships | `notice_posted`, `moot_sits`, `sway_contested`, `prices` |
| S08 | **Counting-house and yard** | town, Kest | a strong room, a ledger table, a weighing yard, a barracks door onto it | a factor, a clerk-bailiff, a Chain sergeant and six blades | ledgers, coin, writs, the debts of a whole valley | the best-guarded building in any town, and the one the Wrack want | Ships | `debt_called`, `ledger_disputed`, `counting_house = burned/intact`, `sergeant_absent`, `coin` |
| S09 | **Iron-yard or salvage yard** | town | a walled yard, a scale, stacked bar-iron and salvage, a forge shed at the back | a Holds factor or a quay fence, hold-hands, sellers with wet sacks | iron, stone-bronze, a price without questions | what is bought here arms someone | Stone+Ships | `salvage_for_sale`, `bronze_at`, `marrock_refuses_court_bronze`, `prices` |
| S10 | **Quay and low-mark post** | town, Shelf edge | a stone quay with the mud below it, boats drawn up, a notched post that records the lake's fall, a fish-hall | fishers, a fence, an innkeeper, everyone at the hour the boats come in | the catch, salvage, passage across the Shelf | the water is further out every year; the quay is going dry | Cutting | `boats_idle`, `weir_dry`, `low_mark_drop`, `catch`, `band_at` |
| S11 | **Watch-house and barracks** | town | a room with a slate of names, a cell, a drill green outside | a watch captain, ten watchmen, or a Chain sergeant and six blades | keys, a cell's occupant, a rota | the place a hero's own deeds are read back to them | Cutting | `militia_quality`, `imprisoned(NPC)`, `stand_contract`, `raid_expected` |
| S12 | **Reeve's house and Moot table** | town or village | one room with a ledger, a table, a bench for petitioners, a door people queue at on Stillday | a reeve, a clerk, whoever is waiting | the village's ledger, its coin, its word | a reeve can be shamed, bought, taken or replaced | Cutting | `debt_called`, `moot_sits`, `reeve_absent`, `sway`, `levy_called` |
| S13 | **Salt pans and boiling sheds** | Shelf, Stair-worked | shallow pans cut in the mud, plank walks between them, sheds with fires that never go out, a sluice from somewhere | salt-boilers, a Chain guard or two, a Kest overseer counting sacks | salt — the Stair's only daily coin in a valley | fire, brine, and whatever walks in off the mud at noon | Ships | `salt_pans = open/closed/held`, `salted_walking`, `sluice_sealed`, `drawer_hunted` |
| S14 | **Reed-bed and eel weirs** | Shelf edge | channels, reed walls higher than a man, staked weirs, pools that drop as the lake drops, no straight line anywhere | fishers at dawn, eel-men, a hidden boat, someone who does not want to be seen | eels, fish, a hidden way onto the Shelf that no band watches | reedbacks and mud-eels; getting lost; a rising channel | Cutting | `weir_dry`, `boats_idle`, `hidden_stores`, `band_at`, `corpse_found` |
| S15 | **Old Shore road** | Shelf | a raised drowned-age causeway of laid stone running along the first-age shoreline, sheep on it, mud either side at half speed | shepherds, Wrack riders, carters who dare, salt-hounds after dark | the only firm footing on the western Shelf | off it is mud; on it you are seen for a mile | Stone | `flock_lost`, `band_at`, `salted_walking`, `court_mouth_seen` |
| S16 | **Wrack camp** | Shelf | turf huts in a hollow, a driftwood palisade (defence 10), one fire, a look-out on a stone | debtors, deserters, a ledgerman, the half-Salted, kin of people in the towns | nothing; the Wrack have nothing. What is here is a parley | everyone here has a reason and a knife | Ships | `band_at`, `control`, `recruits_queued`, `corrow_met` |
| S17 | **Surfaced court, outer ring** | Shelf | nine stone roofs standing out of silt in a ring, a sentry fire, a silt slope down into the dark | Wrack sentries, a salvage crew by day, a salt-hound at night | daylight, rain-water in the stone basins, the way down | the mouth of a dungeon nobody has finished | Stone | `court_layer_surfaced`, `salvaging`, `court_mouth_seen`, `band_at` |
| S18 | **Drowned hall** | Shelf, court layer | open-roofed halls, a fathom of silt on the floors, flagstone paths under it, stairs going down into dark, a boat where someone drowned | salt-hounds in packs, salt-cranes on the roofs, a husk at the inner stair | stone-bronze fittings, six sacks a season; whatever the last party left | mud at half speed; oil burns; no water at all | Stone | `surfaced`, `layer_state`, `body_unfetched`, `salvaging` |
| S19 | **Salt hall and well-ring** | court layer, inner | one great hall round a central well, dry for the first time in an age, salt on every surface, a cistern in the wall, a sluice tunnel out | husks; a salt-warden if the ring is cut; a paid Skerrow crew cutting bronze | twenty sacks of stone-bronze; the cistern's water; the sluice as a way out | salt air halves oil; the ring is what holds the layer below shut | Stone | `dry`, `flooded`, `well_ring_intact`, `salvaging`, `sluice_sealed` |
| S20 | **The well shaft** | court, deepest | a shaft and the chamber round it, water dropping year by year, nine seats | the nine, who wake one at a time as the water falls | nothing. Nobody brings anything out of here | no return until the chamber is understood; the dark; each of the nine is a warden's strength | Stone | `sealed`, `layer3_opening`, `layer3_open` |
| S21 | **Hewers' camp and timber slide** | Wend | a cleared bank, huts, stacked timber, a slide down to the river, a float-pond made by a dam | a Skerrow crew under a foreman, contracted and counting days | timber, the slide, the dam that holds the pond | a jam that goes while you are standing on it; a crew with a contract and no interest in you | Cutting | `dam`, `slide_jammed`, `forest = cut`, `contract_pending`, `timber_short` |
| S22 | **Wend clearing and stone-mark** | Wend | a clearing on a track along a river, an old ash or a cut stone marking a boundary, Ulder ground off the track | hewers, a keeper who came down for this, a farmer who owns the strip | a boundary, and what grows on either side of it | you are being watched by whoever the wood belongs to | Cutting | `forest`, `boundary_dispute`, `contract_pending`, `stone_mark` |
| S23 | **Stone ring on the Shoulders** | Shoulders | nine stones twice a man's height on open moor, wind, a tarn below, a marked path up | a keeper, a Speaker at times, a stone-warden asleep at the centre | a night's easing of salt; a river held or loosed; weather | the warden wakes for the ring, not for you; the Quiet remember everything | Stone | `ring_unkept`, `keeper_absent`, `ward`, `river_flow`, `closers_active` |
| S24 | **Shieling and tarn** | Shoulders | a summer hut, a fold, a black tarn, sheep, the old water-line step in the ground beside it | Skerrow shepherds in summer, a Vael hand, nobody in Hold | a season's wool, a hidden thing put in the tarn, the high path | weather that turns in an hour; a long way from any door | Cutting | `stock_strayed`, `missing(NPC)`, `passes_closed`, `hidden_stores` |
| S25 | **Hold gate** | Rim | a gate cut into cliff below a pass, a hall inside, galleries running back, a forge that never goes out, the pass road above | a hold-mother, hold-hands, hewers off shift, a factor's clerk with a tally | iron, contracts, a road over the Rim, props they will pay for | you are inside a mountain that belongs to someone who does not forget | Cutting | `timber_short`, `gallery_unpropped`, `contract_pending`, `passes_closed` |

**Description lines.** Two per type — fair daylight, and dark or foul — printed below (50 lines). These are the engine's fallbacks; the region file authors six per *named* site (40 sites × 6 = 240 lines, [FIRST_REGION](../slice/FIRST_REGION.md) §8), and a named site's own line always wins. Round one costed six lines per *type*; that was the wrong object to cost and the count is corrected in §8.

| # | Fair, by day | Dark, wet or foul |
|---|---|---|
| S01 | Smoke from every roof, and one door open on a room where a fire is being kept in. | The green is a sheet of water and the ford is a noise; every shutter is closed but one. |
| S02 | The yard is swept, the barn is shut, and somebody is counting something aloud behind it. | The dog does not come out. The rick has been opened and not by a farmer. |
| S03 | Flour dust hangs in the light off the race, and the whole building is quietly shaking. | The wheel is still. You can hear the river going past it, which is the wrong sound. |
| S04 | Carts in the yard, a mule being backed into the shafts, and the taproom already loud. | One lamp in the taproom, the yard gate barred, and the stable empty of everything but straw. |
| S05 | The stone is warm, carts are queued at the narrow, and the river runs green underneath. | The parapet gaps are black and the water is up over the second step of the abutment. |
| S06 | Two men on the wall-walk and a gate that has not been shut in daylight for a year. | The gate is shut. There are more men on the walk than the town can spare. |
| S07 | Stalls, a queue at the board, and Merrin's hand on three new notices. | The board is a pale square in the dark and somebody is reading it who cannot read. |
| S08 | The scales are out in the yard and the door stands open on a room of ledgers. | Shutters, a lamp behind them, and two blades standing where the light does not reach. |
| S09 | Bar-iron stacked to the wall and a scale that has never been wrong. | The yard is stacked with wet sacks and nobody wants to say where they came from. |
| S10 | Boats on the mud, the fish-hall loud, and the low-mark post with this year's notch fresh. | The tide of mud has gone out further than the lamps reach; the boats lie over on their sides. |
| S11 | The slate of names is out on the sill and ten men are drilling badly on the green. | A cell, a lamp, a captain who is still awake, and the drill green empty. |
| S12 | The bench outside is full and the door is open onto a ledger and a clean table. | The ledger is shut and the reeve is sitting with it in the dark, doing sums. |
| S13 | White pans to the horizon, plank walks, smoke standing straight up off the sheds. | The fires are out. Salt crunches. There are tracks between the pans that are not boot tracks. |
| S14 | Reed walls, a heron, and the weir stakes standing in a foot of clear water. | The channels have dropped and the pools are thrashing; you cannot see six feet of anything. |
| S15 | Laid stone running straight across the mud, sheep on it, and a mile of view either way. | The causeway is a grey line and the mud each side is making the noise it makes at night. |
| S16 | Turf, one fire, a lookout on a stone who has seen you since you left the reeds. | The fire is banked and there are more people here than huts to hold them. |
| S17 | Nine roofs out of the silt, a sentry fire smoking, and the slope down into the dark. | The stones are wet, the fire is dead, and something has been up the slope and gone back. |
| S18 | Sky through the roofs, silt to the ankle, a boat on its side with a name cut in the thwart. | Your lamp reaches the flagstones and stops. The silt has been walked through recently. |
| S19 | Salt crusts every fitting, and the well-ring stands in the middle like a bronze mouth. | Salt eats the flame down to a bead. Something in the hall is dry and moving. |
| S20 | (there is no daylight here) | Nine seats round a shaft, and the water below is further down than it was. |
| S21 | The slide is running, logs going down like a held breath, the crew counting them off. | The pond is out and the jam stands over the slide in the dark like a wrecked roof. |
| S22 | A clearing, an old ash with a cut stone at its foot, and the wood quiet on both sides. | Rain in the canopy, and someone standing at the mark who was there before you. |
| S23 | Nine stones on open moor, wind, the tarn below, and the valley laid out under it. | The stones are a ring of black gaps and the wind has gone round the other way. |
| S24 | A hut, a fold, a black tarn, and the old water-line step in the grass beside it. | The cloud is down on the shieling and the sheep have been shut in for a reason. |
| S25 | A gate in a cliff, a forge glow in the hall behind it, and a tally-clerk at a table. | The gate is barred, the forge is banked, and the pass road above is under new snow. |

### 3.6 Opposition kinds (16)

Round one counted 14 and printed none. The real table is **16**: a refusal and a writ are separate kinds, and both are opposition that cannot be fought (§8). Opposition is read from state first; the die is only for a quest whose state names nobody. Every kind states **what puts it there**, **what it wants**, **what makes it stand down** (which is the non-violent branch), and **which class arc has an answer**, so a quest is never offered whose only solution one class does not own.

| # | Opposition | What puts it there | Shape | What it wants | What makes it stand down | Class answers | Age |
|---|---|---|---|---|---|---|---|
| O01 | **Chain band** | Stair *Send band*, a seizure, a hunt | a sergeant and four to six blades, quality 2 | to do the factor's business and be seen doing it | a writ that is wrong, a passage-writ, Stair regard ≥ +15, a better-witnessed paper | Fighter: hold a doorway. Mage: Mist, or flood the yard. Rogue: Forge a writ | Ships |
| O02 | **Cutters and deserters** | a broken band; Chain men who did not go home; a hunted camp | two to four, quality 1, no leader worth the name | coin, a pack, not to be recognised | being named aloud; a fight they can lose; a coin they can take | any: this is the fight the engine gives a tired party | Ships |
| O03 | **Contracted Skerrow crew** | Holds *Fell*, *Build*, or a Stair-paid *Salvage* | six to twelve hewers or masons with a foreman, quality 2, fight well but under terms | to finish the work they said aloud they would finish | not touching the work; a witnessed contract that says otherwise; their foreman's word | Fighter: Break the work and take the anger. Mage: Dry or flood the site. Rogue: Fence a second contract | Cutting |
| O04 | **Hold-hands under arms** | a broken contract, a hold's word, a gallery lost | eight, quality 2, and behind them a hold that does not forget | the word kept, or the iron paid | payment in iron, a witness of standing, a hold-mother's message | Fighter: stand and be counted. Mage: nothing they respect. Rogue: nothing they respect | Cutting |
| O05 | **Wrack band** | Wrack *Send band* or *Raid*; every three called debts | six, quality 2, led by a ledgerman or a half-Salted; a quarter of them have kin in the nearest village | the ledgers, the barns, and the towns afraid | kin at the head of it; Wrack regard ≥ 0; a name they have heard on the quay | Fighter: they respect a wall. Mage: Mist and move. Rogue: Listen at the fire first | Ships |
| O06 | **Wrack sentries and pickets** | a camp, a court mouth, or a crossing the Wrack are watching | two to six, quality 1–2; a lookout on a stone, or a picket that stops carts | to be told who you are, and whose the coin is, before you are past them | regard, a letter, a name, kin at the head of them, or Kit Ashby's word | any: this is a conversation with a knife in it | Ships |
| O07 | **Salted husk** | the Shelf after dark; a dry court; a seal cut | one, slow, armoured in crust, telegraphs every blow | nothing that can be asked for | it does not; it is put down or walked around | Fighter: Break the crust. Mage: Wring. Rogue: Powder's lime, then Cuts | Stone |
| O08 | **Salt-warden** | a court layer whose ring is cut; a set-piece | one, a warden's strength, with hounds | to keep what it was set to keep | leaving with nothing | all three, with a companion; never solo below tier 2 | Stone |
| O09 | **The nine** | `layer3_open` | nine, waking one at a time as the water drops | to hold back a water that is already gone | being understood — a Read, a Drawing, a thing put back | campaign-scale; not a region-one fight | Stone |
| O10 | **Salt-hound pack** | dry mud, a court, a night on the Shelf | two to four, fast, low health | meat | fire, a doorway, height | Fighter: hold. Mage: Fling. Rogue: Snare | Stone |
| O11 | **Shelf creatures** | reed-beds, weirs, drying pools, wet mud | salt-cranes, mud-eels, reedbacks: singly or in threes | to be left alone in the pool they are in | not going into the water | Fighter: reach. Mage: Dry the pool. Rogue: Snare and go round | Stone |
| O12 | **Stone-wardens** | a ring, a Quiet *Ward*, a Speaker's decision | one or two, quality 3, slow, immovable | the ring untouched | walking away from the stones | none: this is a fight the design intends the hero to lose or refuse | Stone |
| O13 | **Militia and town watch** | the hero on the wrong side of a wall; a Moot *Send band* | six to ten, quality 1–2, men the hero may have drilled | to do what the reeve said in front of their neighbours | the reeve's word; a name they know; standing | Fighter: they will not swing first. Mage: no. Rogue: Shadow past | Cutting |
| O14 | **A writ and a bailiff** | a seizure, a weighing, a called debt | one careful clerk, a paper, and the Chain a street away | the count to be correct and the day to be kept | a better paper, a second ledger, a surety, a re-weighing | Fighter: none — this is the fight a Fighter cannot win. Mage: Read it. Rogue: Forge, or Listen for the error | Ships |
| O15 | **A refusal** | a keeper who will not come down, a hold-mother's word, a reeve who will not have it | one person, standing still | to not be moved, and to have the reason understood | the reason met on its own terms — a promise, a witnessing, a thing carried | all three, out of combat; the Mage's Read and the Rogue's Listen shorten it | Stone / Cutting |
| O16 | **The ground and the season** | mud, salt air, the dark, thirst, storm, `roads_slow`, `passes_closed` | not a creature: a cost | nothing | preparation — oil, water, a boat, a mule, the right hour | Fighter: carry more. Mage: water is his to move. Rogue: knows the short way | any |

### 3.7 Giver roles (14) and stake types (8)

**Giver roles.** Reach is the standing weight ([LIVING_WORLD](LIVING_WORLD.md) §2). Roll `d14`, or take the roles the motive names; re-roll a role with nobody in it at this site, and re-roll a giver at *hates*.

| # | Role | Reach | Typical named holders (region one) | Motives they hold |
|---|---|---|---|---|
| G01 | smallholder, neighbour, householder | 1 | folk, promoted | M01, M05, M16, M19, M26, M27, M31, M36, M38, M43, M44 |
| G02 | hand, boy, apprentice | 1 | Tobbin; Col; Fenn Tull | M02, M32, M48 |
| G03 | tradesman with works (miller, smith, ferryman, boatwright) | 2 | Bram Fenwright; Garrow Tull; Osk | M03, M05, M07, M13, M44 |
| G04 | innkeeper or carter | 5 | Wat Hobb; Jory Quill | M01, M12, M13, M27, M29, M35, M42, M47 |
| G05 | Kest factor or Company officer | 20 | Vesk Idren; Vesk Corradine | M06, M20, M27, M28, M33, M34, M35, M36, M45, M46 |
| G06 | militia or watch captain | 5 | Reyne Gorse; Dell Coombe; Osk | M04, M08, M14, M20, M21, M22, M45, M46 |
| G07 | herb-wife, dowser, healer | 5 | Hild Marrow | M03, M09, M10, M30, M32 |
| G08 | clerk or bailiff | 2 | Anser Sabel; Merrin Hale | M12, M21, M23, M26, M28, M34, M40, M48 |
| G09 | reeve or headwoman | 20 | Idony Sallow; Aud Penhallow | M03, M05, M08, M11, M12, M14, M20, M22, M29, M31, M36, M38, M41, M45, M46, M47 |
| G10 | a hold's factor, hewers' foreman or hold-hand | 2–20 | Marrock of Thrum; Rukk of Thrum; Habb of Thrum | M07, M15, M16, M17, M18, M21, M25, M28, M35, M42 |
| G11 | a companion | own | Corva; Ilune; Gulla; Kit; Osk | M24, M44, M48 |
| G12 | shepherd, fisher, salvager, fence | 1–5 | Tobbin; Kit Ashby | M01, M02, M04, M06, M23, M24, M27, M28, M29, M37 |
| G13 | a power's leader, by letter or in person | 100 | Halse Corrow; Brakka of Thrum; High Reeve Tull; Vesk Corradine | M17, M18, M25, M33, M37, M39, M41, M43, M46, M47 |
| G14 | Speaker of the Quiet, or a ring's keeper | 5–20 | Sarane; Ondrin | M09, M10, M11, M19, M30, M31, M32, M38, M39, M43 |

**Stake types**, used by the shape signature (§6) and by the tier table (§4): **ST1** a household's livelihood · **ST2** a person (hidden, hunted, taken, lost, below) · **ST3** a site's working state (river, wheel, forest, pans, wall) · **ST4** a debt or a paper · **ST5** a boundary or a control (a line, a sway, a toll, a town) · **ST6** a body or a truth (what happened, and who knows) · **ST7** the hero's own position (a post, a seat, a name) · **ST8** a season's trade (the carts, the catch, the props, the salt).

### 3.8 Verbs (12)

What the player actually does. Each verb states its **shape in play**, what a **failure** looks like (the engine never has a failure screen — a failed verb is a consequence), and the class field-verbs that answer it ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2).

| Verb | Shape in play | Failure is | Fighter | Mage | Rogue |
|---|---|---|---|---|---|
| **investigate** | two or three sites, a state read at each, a conclusion the player draws and states aloud to an NPC | naming the wrong cause: it gets fixed and the stake stays | Break something open | Dowse; Read | Listen; Shadow |
| **carry** | a thing or a person moved between two sites against a clock, a road and whoever is on it | arriving after the day: the penalty falls | Carry (weight, speed) | move by Mist | Shadow the patrol |
| **search** | a site walked with a state hidden in it: tracks, a body, a flock, a door | dusk arrives; someone else finds it first | walk it fast, carry the hurt one | Dowse the mud | track and Listen |
| **choose** | two or more named parties want opposite outcomes and the hero says which, in front of them | not choosing is a choice: the world does the other thing | — | — | — |
| **hide** | a person or a thing kept from a search that arrives at a stated hour | the search finds it: conditions and doors are set | stand at the door | Mist; Dry the trail | Shadow; Forge a paper |
| **witness** | standing where a contract is spoken and saying the words back, or refusing to | the contract is made without standing, and nobody recognises it | — | Read the preamble | Fence a second copy |
| **parley** | one room, two agendas, terms that can be written down | terms nobody keeps; the band that was waiting outside comes in | Stand (presence counts) | Read the other side | Listen before entering |
| **answer** | a question with a price on it, asked by someone with power over the asker | silence is an answer; evasion is a memory | — | — | Forge, Fence |
| **hold** | a doorway, a bridge, a gate, a mill door, for a stated time | the door goes; the state flips to the other power | Hold — this is the Fighter's verb | Flood the approach | Snare the approach |
| **break** | a dam, a jam, a sluice, a slide, a cart, a wall: work destroyed on purpose | it goes while you are on it; or it does not go and the day is spent | Break | Draw the water through | cut the right rope at the right hour |
| **descend** | a dungeon layer with resources that run out and a return that must be found | the return is not found; the pack is left at the fall point | carry the oil | the cistern; Dry a passage | find the slide first |
| **lead** | other people's men, in a clash or a work party, with their names on a slate | they follow badly; a named man dies and his kin remember | Drill, Stand | — | Fence supplies |

`choose` is a verb the engine may only pair, never use alone: a quest whose only verb is *choose* is a menu. Round one used *choose* in six of twelve quests and *break* in none; §7.5's Q14 is a *break* quest and §6's signature rule now counts verbs across the last twelve offers.

### 3.9 Name tables

Printed in rows of twelve so a die or a count reaches any entry. Round one claimed Vael 140 + 80, Skerrow 60, Ulder 40, Kest 30 + 60 (410 names) and printed none; the real, printed table is **315** — Vael 96 given + 60 bynames, Skerrow 48 given + 3 holds, Ulder 36 given + 12 ring names, Kest 24 family + 36 given — which is what a region promoting sixty folk without a repeat actually needs, with room for four regions before a name is reused (§8).

**Vael given** (one or two syllables, plain):

| 01–12 | Bram · Osk · Hild · Reyne · Aud · Jory · Merrin · Dell · Tobbin · Corva · Garrow · Wenna |
|---|---|
| **13–24** | Idony · Kit · Ede · Col · Hal · Piet · Fenn · Wat · Bryn · Tam · Nesk · Ora |
| **25–36** | Pell · Rowe · Sef · Winna · Gell · Marn · Hesk · Lunn · Perr · Sil · Torl · Wilm |
| **37–48** | Ash · Bel · Cade · Dorn · Elt · Fay · Gow · Hesp · Ivet · Jenn · Kerrin · Larn |
| **49–60** | Mab · Nye · Oddy · Pen · Quenna · Rid · Sarl · Tetty · Umma · Vell · Wren · Yarr |
| **61–72** | Ammet · Bettin · Cadder · Denna · Effy · Fett · Gilly · Harl · Isk · Jann · Kenn · Liss |
| **73–84** | Morr · Nett · Oram · Poll · Renny · Sammen · Terr · Ubb · Verrin · Wilb · Adda · Benna |
| **85–96** | Cor · Dree · Elsy · Fenna · Gorrel · Hebb · Inny · Jubb · Kessy · Lonn · Mirra · Nolt |

**Vael bynames** (trade, place or parent; the engine picks by the folk's role and site before it rolls):

| 01–12 | Cooper · Fenwright · Sallow · Marrow · Gorse · Penhallow · Quill · Hale · Coombe · Tull · Hobb · Ashby |
|---|---|
| **13–24** | Tarn · Weirman · Ferrow · Salter · Boatwright · Carter · Milward · Fisk · Thack · Ossler · Wainer · Fuller |
| **25–36** | Dyer · Tanner · Hedger · Warren · Fordman · Bywell · Netherford · Millrace · Reedy · Marshman · Oxley · Barleyman |
| **37–48** | Hearthman · Stubbs · Croft · Byre · Winnow · Sheaf · Tallow · Hobbler · Rushen · Ling · Bracken · Sedge |
| **49–60** | Ford · Brookman · Ashen · Hazel · Alder · Rye · Barrow · Comb · Netley · Quarrier · Shepstone · Wold |

**Skerrow given** (hard, doubled consonants; a Skerrow away from the Rim always adds the hold: *of Thrum*, *of Kell*, *of Orrit* — the three holds are the whole byname table):

| 01–12 | Brakka · Marrock · Gulla · Rukk · Torv · Skell · Ott · Hemmet · Dagg · Bragg · Krett · Onn |
|---|---|
| **13–24** | Dorrik · Habb · Nurrik · Vogg · Sprett · Tulk · Grimma · Kesk · Borrik · Hessa · Drukk · Manno |
| **25–36** | Orrik · Perrik · Quarn · Rennock · Skagg · Torrun · Ulk · Vessa · Wodd · Yarrik · Bekk · Crann |
| **37–48** | Dranna · Ekk · Ferrik · Gubb · Hollik · Immet · Jorrun · Kadd · Lokk · Munna · Norrik · Pikk |

**Ulder given** (two or three syllables, stress on the first; instead of a byname, the ring they keep):

| 01–12 | Sarane · Ondrin · Ilune · Tessarin · Reval · Coreth · Ushe · Annune · Corune · Delarin · Eshane · Ferune |
|---|---|
| **13–24** | Gessarin · Halune · Iresh · Karune · Lesane · Merune · Nessarin · Oreth · Pelune · Resane · Sethrin · Tarune |
| **25–36** | Urane · Velune · Yshane · Amareth · Corethin · Dulane · Erune · Isarane · Marune · Olreth · Sulane · Tesune |

**Ulder rings** (12): the Rudd Stones · the Halse Stones · the Twine Stones · the Old Shore Stones · the Wind Nine · the Tarn Nine · the Broken Nine · the Grey Nine · the Water Nine · the Sister Stones · the Shoulder Stones · the Ash Stones.

**Kest family** (written first):

| 01–12 | Vesk · Anser · Drusk · Pellow · Marl · Tallis · Orme · Bessin · Rade · Sennet · Wharl · Ondek |
|---|---|
| **13–24** | Ferrant · Grisso · Halmer · Ivry · Jassen · Korro · Lestrin · Morden · Nastre · Ospry · Peskett · Quarrow |

**Kest given**:

| 01–12 | Corradine · Idren · Sabel · Fennick · Orsa · Tamsin · Aldine · Bettrys · Casserine · Dorrin · Ellery · Fanne |
|---|---|
| **13–24** | Garrick · Hessine · Ivane · Jorral · Kesterine · Lomas · Merrick · Nissane · Ottoline · Pallin · Quennet · Rosser |
| **25–36** | Sallis · Tavane · Ursell · Verrine · Wessa · Yorric · Ancret · Bellin · Cassin · Delane · Erlan · Follis |

**Promotion rule.** When the engine needs an unnamed folk to speak, it rolls their people's given table, then takes the byname from their role and site if one fits (a carter at Hobb's Cross is *Carter* or *Hobb*; a weir-man on the quay is *Weirman*), else rolls the byname table. The name is written to the region's used-name list and never reused in that region. A promoted folk NPC keeps a memory and a reach of 1 from that moment ([LIVING_WORLD](LIVING_WORLD.md) §2).

### 3.10 Rumour templates (60)

A rumour is how the world says a state out loud. Each template names **where it is heard** (site type and speaker role), **what fires it** (a state or a deed), its **variables**, and the line. The journal shows a rumour when the hero is at the site during a meeting that passes a memory ([LIVING_WORLD](LIVING_WORLD.md) §2); the away page and the notice board use the same table. Variables: `{N}` a named NPC, `{K}` their kin, `{S}` a site, `{P}` a power, `{H}` a hold, `{R}` a ring, `{n}` a number, `{d}` a day, `{hero}` the hero's name as that speaker says it.

| # | Heard at · from | Fires on | Line |
|---|---|---|---|
| R01 | inn (S04/S01) · innkeeper | `wheel_stopped` | "{N}'s wheel has stood {n} days. He's blaming the Skerrow, and the Kest, and the weather." |
| R02 | reeve's door (S12) · a neighbour in the queue | `debt_called(S)` | "They've called it on {S}. That's the third house this season." |
| R03 | counting-house yard (S08) · a clerk | `quarter_day_due` | "Grace runs to the {d}th. After that it doubles, and the Weighmaster doesn't write letters twice." |
| R04 | quay (S10) · a fisher | `low_mark_drop` | "New notch on the post. My father's mooring is forty paces of dry mud now." |
| R05 | market cross (S07) · a trader | `prices +` | "Bit a crossing at the bridge, so everything on this stall is a bit dearer. Take it up with the Company." |
| R06 | inn (S04) · a carter | `band_at(S)` | "Knives at {S}. I went round by the lane and lost half a day and I'll do it again tomorrow." |
| R07 | village green (S01) · a folk | `well_unblessed` | "No Ulder at the well this Firstwater. First time anyone can remember. It'll be a sour year." |
| R08 | ring path (S23) · a shepherd | `ward` active | "The keeper's holding the river. You can hear it not running." |
| R09 | inn (S01) · the herb-wife | `salt_rising(N)` | "{N}'s hands have gone grey to the second knuckle. Somebody should take them up to {R}." |
| R10 | hold gate (S25) · a tally-clerk | `timber_short({H})` | "Three galleries at {H} propped with what we cut last year. Next winter they'll be propped with prayers." |
| R11 | Wend track (S22) · a hewer | `forest = cut` | "To the ash, the contract said. Ask {N} where the ash stood." |
| R12 | iron-yard (S09) · the factor | `bronze_at(S)` | "Court bronze. I know it by the green. I'll weigh it and I'll not ask, but I'll remember." |
| R13 | quay (S10) · a fence | `salvaging(court)` | "Kest pay, Skerrow arms, and everything that comes up in a sack goes down the Stair by Green." |
| R14 | court mouth (S17) · a Wrack sentry | `court_layer_surfaced` | "Another roof came out of the mud in Reap. There's nine down there and we've seen four." |
| R15 | Shelf (S15) · a shepherd | `salted_walking` | "It came across the causeway at noon. Noon. They don't do that." |
| R16 | salt pans (S13) · a boiler | `salt_pans = closed` | "Fires out three days. No salt, no pay, and the fish are coming in anyway." |
| R17 | reed-beds (S14) · an eel-man | `weir_dry` | "The line's standing in mud. Either we drive it out again or we sell the boat." |
| R18 | inn (S04) · a drinker | `raid(S)` | "They took {N}'s barn at {S}. Left the seed corn, which tells you they're farmers too." |
| R19 | watch-house (S11) · a watchman | `militia_quality = 1` | "Ten of us and half have never held anything sharper than a scythe." |
| R20 | wall (S06) · a levy man | `levy_filled(S)` | "Six from {S} on the wall and the ploughing not done. Somebody's harvest is paying for this." |
| R21 | inn (S01) · a farmer | `fields_busy` | "You'll get no men out of this valley till the barley's in, Moot or no Moot." |
| R22 | market cross (S07) · the scribe | `notice_posted` | "That's {hero}'s name on the board. In my hand, but not my words." |
| R23 | Post inn (S04) · the innkeeper | hero tier ↑ Hand | "You're the one who fetched the boy's sheep off the Shelf, aren't you." |
| R24 | Post inn (S04) · the innkeeper | hero tier ↑ Name | "You're Sallowford's runner. The one Pell's lot let through." |
| R25 | any town · a trader | hero tier ↑ Voice | "That's the one who held the bridge. Don't take his money if you want it back with a story on it." |
| R26 | counting-house (S08) · the factor | Stair regard ≤ −60 | "The Company remembers weight. Ask on the Ring Road what it costs to be remembered." |
| R27 | ring (S23) · a keeper | Quiet regard ≥ +40 | "The stones know your feet. That is not a compliment; it is a fact." |
| R28 | Wrack camp (S16) · a debtor | Wrack regard ≥ +20 | "Corrow says you slept here. That's worth more out here than coin." |
| R29 | inn (S01) · a neighbour | `hunted(N)` | "The Chain were at {N}'s door asking after a grey-handed girl. {N} lied well." |
| R30 | inn (S04) · a carter | `deserter_at(S)` | "Two of the Company's own out at {S} with Wrack knives. Deserters keep the worst company: themselves." |
| R31 | quay (S10) · a fisher | `corpse_found(S)` | "Came up in the weir. Nobody's saying whose coat that is, and everybody knows." |
| R32 | village (S01) · kin | `missing(N)` | "Eight days. {K} still sets a place, and nobody has the heart to move it." |
| R33 | court (S18) · a salvager | `body_unfetched` | "There's a boat down there with a name cut in it. I'm not going past it again." |
| R34 | ring (S23) · a Speaker | `well_ring_intact = false` | "The ring is cut. What the water held will come up into the dry." |
| R35 | inn (S01) · the reeve | `seizure_pending(S, d)` | "The {d}th, they take {S}. {N} will stand in that door, and he shouldn't." |
| R36 | mill (S03) · the miller | `dam` | "They dammed my water for their timber and called it their gift." |
| R37 | bridge (S05) · a mason | `build_pending(toll_house)` | "Stone from {H}, blades from Fallgate. Five days and the valley pays for the privilege of leaving it." |
| R38 | market cross (S07) · a trader | `toll_house = built` | "Forty years the Moot said no. Took them five days to stop saying it." |
| R39 | reeve's house (S12) · a reeve | `moot_sits` | "The Moot sits at Reckoning. If nobody speaks for this valley, somebody will speak about it." |
| R40 | counting-house (S08) · a bailiff | `ledger_disputed` | "The writ says four. The village book says three. One of those was written by someone who can be dismissed." |
| R41 | inn (S04) · a drinker | `counting_house = burned` | "Twenty days and no debt in this valley can be collected. Twenty days is not forever, mind." |
| R42 | Wrack camp (S16) · a ledgerman | `recruits_queued` | "Three more called this month. The Company recruits for us better than we do." |
| R43 | wall (S06) · the captain | `raid_expected` | "Three bands on the mud and a wall that's held nothing since I was a boy." |
| R44 | town (S07) · a folk | `reeve_absent` | "Reeve's not been seen in two days and the watch is taking its orders from a Kest." |
| R45 | inn (S01) · a hand | `flock_lost` | "Nineteen ewes went onto the Shelf in the fog and {N}'s boy is going to wear it." |
| R46 | grange (S02) · a farmer | `harvest = poor` | "Half a crop and a full Quarter-day. You do that sum." |
| R47 | shieling (S24) · a Skerrow shepherd | `passes_closed` | "Pass shut Mid Hold. Anything you want off the Rim, want it now." |
| R48 | hold gate (S25) · a hold-hand | `contract_broken` | "A word was broken at {S}. {H} will not trade down that valley till it's paid in iron." |
| R49 | Wend (S22) · a keeper | `stone_mark` disputed | "The ash is a mark. It was a mark before there was a farm to mark." |
| R50 | ring (S23) · a keeper | `closers_active` | "Some of them at {R} have stopped saying *when the water comes back* and started saying *how*." |
| R51 | quay (S10) · a fence | `marrock_refuses_court_bronze` | "Yard won't take it. Back room will. Price is worse and the question is none." |
| R52 | inn (S04) · a carter | `roads_slow` | "Four hours to the ford in this. You'll want the mule and you'll want it shod." |
| R53 | village (S01) · a folk | `damage = flooded` | "The Rudd came through the low houses. Second time since the ring lost its skirt." |
| R54 | market cross (S07) · a trader | `festival_today` | "Longsun. Nobody weighs, nobody sues, and everybody drinks with the person they're suing." |
| R55 | any (S01/S04) · anyone | Stillday | "It's Stillday. Ask me tomorrow and I'll still say no, but politely." |
| R56 | inn (S04) · a drinker | `stand_missed(hero)` | "The Moot's paying somebody fifteen bits a day to be somewhere else, apparently." |
| R57 | counting-house (S08) · a clerk | `hero_is_chain_sergeant` | "The valley's own at the head of the Company's blades. Somebody's mother is crying about that." |
| R58 | ring (S23) · a keeper | `ondrin_owed` | "You made a promise at the stones. The stones do not forget, and neither does he." |
| R59 | quay (S10) · a fisher | `court_mouth_seen` | "Somebody's been to the outer stones and come back. That's a first this year." |
| R60 | inn (S01) · the herb-wife | `layer3_open` | "Nine of them sat down to hold the water. The water's gone. They're getting up." |

### 3.11 Notice templates (14)

A notice is a deed made public: it goes on a town board at the next dawn, is read by every NPC whose schedule passes the board (weight 3), and is the fastest way a name travels ([LIVING_WORLD](LIVING_WORLD.md) §4).

| # | Posted by | Fires on | Line |
|---|---|---|---|
| N01 | the Moot's scribe | a power's *Post* move | "The Moot will pay for word of {P}'s camps. Ask at the watch-house." |
| N02 | the Moot's scribe | hero completes a *Post* quest | "Word of the camps was brought by {hero} of {S}, and paid for." |
| N03 | a town reeve | a site saved or held | "{S} stands, and stood because {hero} was at the door of it." |
| N04 | a town reeve | a levy called | "Six from every village to the wall of {S}, thirty days, the Moot's pay." |
| N05 | the Stair's clerk | a debt called | "Notice to {N} of {S}: the Quarter-day is called, with grace to the {d}th." |
| N06 | the Stair's clerk | a seizure | "By writ, {S} passes to the Company on the {d}th. Objections in writing to the counting-house." |
| N07 | the Stair's clerk | a Company loss the Company wants named | "The Company offers {n} marks for the naming of those who broke the peace at {S}." |
| N08 | a hold's factor | a Skerrow contract witnessed | "Witnessed at {S}, before {hero}: {H} to fell to the mark, and no further. It is stone." |
| N09 | a hold's factor | a contract broken | "A word was broken at {S}. {H} trades no iron down this road until it is paid." |
| N10 | the Moot's scribe | a clash the hero led | "At {S}, on the {d}th, the Moot's men held. They were led by {hero}." |
| N11 | the Moot's scribe | a reeve taken, dead or fled | "The reeve's table at {S} sits empty. The Moot hears pleas at the cross on Stillday." |
| N12 | a keeper, by a Vael hand | a ring's ward begun or ended | "{R} holds the river until the {d}th. Do not water stock above the ford." |
| N13 | the Wrack (nailed, unsigned) | a Wrack *Raid* or *Parley* offer | "Every ledger in this town is a list of your neighbours. Ask who keeps it." |
| N14 | the Post inn | a hire, a boat, a bed, a companion seeking work | "{N} will guide to {S} and back for {n} bits, weather allowing, and takes no drunks." |

### 3.12 Rolling the engine by hand

The build scores where the table below rolls: the engine takes every live trigger in range and ranks it by proximity to the hero, the giver's regard and the shape signature (§6). A person with the world file, this file and four dice gets the same quests, which is the test this section exists to pass. Ten steps:

1. **Trigger.** Take the live states at and around the hero's site today. Blind: roll `d36` on §3.1 and re-roll until a trigger is live in the region this day. *(A trigger no state supports is not a quest; it is a lie.)*
2. **Motive.** The trigger names two to four motives (§3.1). Roll among them. Check the motive's cause list contains the trigger, and that its stake is real at this site today.
3. **Giver.** The motive names its roles (§3.2, §3.7). Roll among them; take the named NPC in that role at the site. Re-roll the role if nobody holds it here; re-roll the giver if they are dead, fled or at *hates*. If the role is folk, promote one from §3.9.
4. **Place.** No roll: the place is the site whose state is the cause, or the site the state put the opposition on. If the cause is an NPC condition, the place is where that condition can be undone.
5. **Opposition.** No roll if the state names one (a band, a crew, a bailiff, a keeper, the season). Otherwise roll `d16` on §3.6 and re-roll anything the state contradicts.
6. **Twist.** Roll `d30` on §3.4, check the precondition, re-roll up to three times. If none passes, the quest is plain — and about a third are.
7. **Verbs.** From the motive's verb list; one, or two if the twist adds a step. Never *choose* alone (§3.8).
8. **Stake and reward.** From the tier table (§4), read at the hero's standing, with the trigger allowed to lift it one tier.
9. **Text.** Motive line (§3.2) in the giver's voice (§3.3), prefixed by the greeting tier, followed by the place's description line for the hour and weather (§3.5, region overrides first), closed by the twist's line (§3.4). One rumour (§3.10) goes to the street the same day.
10. **Consequences.** Each branch gets a site state, a memory and (at Hand or above) a regard, from the deed table ([LIVING_WORLD](LIVING_WORLD.md) §4). A branch with an empty consequence list is not a branch; the engine refuses the quest until it has one (§5).

Three worked runs of this procedure, with every roll shown and every re-roll explained, are in §7.5.

## 4. Stakes scale with standing

| Tier | Who asks | What is at stake | Typical opposition | Reward band |
|---|---|---|---|---|
| **Villager** | a neighbour with a problem | a household: a flock, a wheel, a purse, a debt of three marks | weather, one creature, one band that may not even want a fight | 6–30 bits; 60–120 XP |
| **Hand** | the village's notables, a factor's clerk, a companion | a village: a levy, a hidden guest, a forest line | one band; the Chain; a Skerrow hewers' crew | 1–2 marks; 150–250 XP |
| **Name** | a reeve, a factor, a hold's iron-master, a Wrack leader by letter | a town or a road: a debt on a mill, a counting-house, a court's first layer | two bands; a court layer; a leader | 3–6 marks; 300–500 XP |
| **Voice** | a power, in its own voice, by letter or in person | a region: a toll-house, a court's depth, a town's quay | a clash the hero decides; a set piece | 8–15 marks and a door; 700–1,000 XP |
| **Force** (campaign) | the Moot in session, the Weighmaster, the hold-mothers, the Speakers, Corrow | the map: a pass, the Fall, a town's allegiance | armies; the Closers; the deep courts | sites, not coin |

The tier is read from standing at the moment of offering, with one rule above it: **a trigger's own scale may exceed the hero's tier by one.** A toll-house is a region-scale trigger; when the Moot Addresses a Name hero about it, the quest is offered at Voice scale with Voice stakes and rewards, and winning it is what puts the region's reeve, factor and seat into the hero's renown. Tiers are crossed by doing something a tier above your station, never by filling a bar. A Villager quest is never re-offered to a Voice hero as a stake; instead the same trigger becomes a Voice quest with the village's problem folded in as a twist (a Voice hero is asked to settle the dam by the Holds and the Moot together, and Bram's wheel is the twist).

## 5. Consequence feeds back

Every outcome of a quest is a list of deeds ([LIVING_WORLD](LIVING_WORLD.md) §4). A quest is not finished until its deeds are written. Outcomes always change at least one **site state** (so the map and the powers feel it), at least one **memory** (so people feel it) and, at Hand or above, at least one **regard** (so powers feel it). Outcomes may set **door flags** that later quests read as preconditions. A quest never rewards only coin and XP: the engine refuses an outcome whose consequence list is empty.

**This rule binds the safe branch and the walk-away branch too.** Round one broke its own rule three times — V2's "go round by Gorse End", V3's give-up and H2's failed Talk each ended with nothing written. All three are written out in §7; the general rule the engine applies is: *the branch where the hero does the careful thing still moves the world, because the world was moving anyway.* Going round by Gorse End means arriving late; giving up at dusk means five ewes feed a Wrack camp; a failed conversation at a door means the search happens.

A branch that opens a dungeon layer may only be offered if that layer exists in the region file. Where it does not, the engine offers the same branch with a deferral — the seal goes, and the layer opens in the next season, off-screen, as a map event — rather than a door into an unbuilt room.

## 6. Anchors and repetition

**Anchors** are hand-written: three in the first region — *Firstwater* (the opening morning: the well-blessing, the first Wrack sighting on the Shelf, the trade scene), *the Sunk Court* (the dungeon's structure, its layers and what is at the bottom, [FIRST_REGION](../slice/FIRST_REGION.md) §6), and *the Quay Fight* (the season's end: the Wrack's move on Wickery's counting-house). Anchors are written as site states with triggers and door flags, so the engine surrounds them with quests exactly as it surrounds any other state. The Sunk Court anchor, for instance, is three states (`layer1_surfaced`, `layer2_dry`, `layer3_well_sealed`) that four powers have goals about; the engine generates the approach, the parleys and the aftermath, and the anchor supplies the rooms.

**Repetition** is detected by *shape signature*: `(giver role, verb, stake type, opposition kind, twist family)` — all five now drawn from printed tables (§3.7, §3.8, §3.6, §3.4). The engine keeps the last twelve signatures offered in a region and applies four rules:

1. A new signature must differ from every one of the last twelve in **at least four of five** fields.
2. A **twist entry** may not repeat inside twelve offers; a **twist family** (kin, debt, paper, agenda, place, season, old, door) may not appear twice inside four. Round one's rule — "not twice in a row" — was too weak: it let T01 and T23 each appear twice inside the twelve showcase quests, which is why §7's Vo2 and Vo3 now carry T22 and T02, the entries that actually describe what happens in them.
3. No **verb** may carry more than a third of the last twelve offers. Round one's *choose* carried six of twelve and *break* carried none; the rule now forbids that shape.
4. Givers cool down three world days between offers; a site holds at most three open quests; and any quest whose text would produce the same first sentence as one in the journal is re-rolled with the next-best motive.

If nothing fits, the engine offers nothing — a quiet day is better than a stale one.

## 7. Twelve generated quests, and three more rolled at the table

Each of the twelve is given as the engine writes it to the journal (what the player reads), with the inputs that produced it and — new in this round — a **Produced by** line naming the exact table rows that make it, so a stranger can check the engine's work backwards before running it forwards. All twelve are from the first region, in one Thaw of 611 C.; the state they read is the state the traces in [FIRST_REGION](../slice/FIRST_REGION.md) produce. Three further quests, rolled from ordinary undated state with every die shown, are in §7.5.

### 7.1 Villager

**V1 — The Miller's Water**
*Inputs:* trigger `wheel_stopped` at Fenn's Mill (Holds' dam, Quiet's river-hold, Thaw 5) + `debt_called` on Bram Fenwright. Giver: Bram (condition *ruined-pending*, motive M07 *livelihood-stopped*, Vael phrasing). Place: the Hewers' Camp (cause). Opposition: one Holds band (hewers, quality 2), not hostile unless the dam is touched. Twist: T04 *two causes* (the river is also held by the Rudd Stones — precondition `river_flow = low` and `dam` both true). Verb: *investigate, choose*. Standing: Villager. Season: Thaw (`roads_slow`). Age tags: Cutting (dam, Skerrow claim), Stone (the stones' hold), Ships (the debt).
*Produced by:* TR01 `wheel_stopped` + TR06 `debt_called` → **M07** *livelihood-stopped*, Vael voice · giver **G03** (Bram, the works are his) · place **S03** Fenn's Mill, cause at **S21** the Hewers' Camp · opposition **O03** contracted Skerrow crew, with **O16** the river as the second obstacle · twist **T04** *two causes* (both `dam` and `river_flow = low` are live above the mill) · verbs *investigate, choose*, with *break* on the Fighter's branch · stake **ST1** · Villager. Signature `(G03, investigate, ST1, O03, place)`.
*Journal:* "Bram Fenwright stopped me at the ford, flour to the elbows and none of it new. 'The wheel's stood two days. The Quarter-day's called on me and if I can't grind by Mid Thaw, Vesk Idren has the mill and Corva has nothing. It's the Skerrow — they've dammed the Rudd above the Wend for their timber-slide. Go and look. I can't; I'd hit someone.' The Rudd is low even below the mill, lower than a dam would make it. Hild Marrow says the Rudd Stones can hold a river, and that Ondrin has not come down to bless the well this Firstwater, which he always does."
*Outcomes:* Break the dam (Fighter: break it; Mage: Draw the pooled water through it; Rogue: cut the slide-ropes at night): `dam = broken`, Holds regard −15, Bram `(hero, saved_livelihood, 9)`, but the river stays low until Ondrin looses it — Bram grinds slowly and pays half. Climb to the Rudd Stones and ask Ondrin to loose the river: he does, if the hero agrees to carry his answer to Sarane about the Hewers' Camp; `river_flow = normal`, Quiet regard +10, opens door `ondrin_owed`. Do both: the wheel turns, Bram pays the Quarter-day, `debt_called` is cleared, the Wrack loses a queued recruit. Pay the hewers to open the slide for two days (12 bits): the wheel turns twice; Holds regard +5; Bram grinds half his need. Do nothing by Mid Thaw: the Stair's next *Call debt* move seizes the mill (`fenn_mill_control = Stair`), Bram's condition becomes *ruined* and his schedule sends him to the Ford Inn all day; Corva's agenda hardens.

**V2 — Idony's Ledger**
*Inputs:* trigger `quarter_day_due` (season roll, Thaw 1) at Sallowford + `band_at(Rudd Bridge) = Wrack` (Thaw 5). Giver: Idony Sallow (reeve, motive M12 *duty-cannot-travel*: Osk, who normally carries the coin, has condition *hurt* — a Thaw 2 fall on the ice, rolled from his age). Place: the Rudd Bridge; destination Wickery counting-house. Opposition: Pell Tarn's band (Wrack, quality 2). Twist: T01 *kin* (precondition: an opposition leader with kin at the giver's site — Pell is Idony's nephew, from the kin table). Verb: *carry, answer*. Standing: Villager.
*Produced by:* TR07 `quarter_day_due` + TR09 `band_at(Rudd Bridge)` → **M12** *duty-cannot-travel* (Osk *hurt* is the condition that raises it) · giver **G09** (Idony, reeve) · place **S05** the Rudd Bridge, destination **S08** the counting-house · opposition **O06** a Wrack picket · twist **T01** *the leader is kin* (kin table: Pell is Idony's sister's boy) · verbs *carry, answer* · stake **ST4** · Villager. Signature `(G09, carry, ST4, O06, kin)`.
*Journal:* "Idony Sallow has three marks in a cloth — the whole village's Quarter-day — and nobody to carry it. Osk went over on the ice at the ford and is abed. 'Vesk Idren wants it by Thaw 10 or the interest doubles, and I will not have this village's name in his book twice. There are men at the bridge. Wrack, Tobbin says. Go round by Gorse End if you must.' Reyne Gorse says the men at the bridge are led by a Sallowford face: Pell Tarn, Idony's sister's boy, who ran from a debt in Reap."
*Outcomes:* At the bridge Pell's band stops the hero and, on learning whose coin it is, lets it pass — Pell asks the hero to carry a letter back to Idony ("tell her I'm not dead and I'm not sorry"). Deliver the coin: Stair regard +5, Idony `(hero, carried_duty, 6)`, the ledger reads *paid*. Deliver Pell's letter: Idony `(hero, carried_kin_word, 7)`, door `pell_letter_delivered` (opens H-tier "Pell's Pardon"). Tell Drusk Fennick at the counting-house who is at the bridge: the consequence example in [LIVING_WORLD](LIVING_WORLD.md) §4. Keep the coin (Rogue temptation, offered as a line): Idony *hates*, Sallowford givers close for a season, Wrack regard +10 (Pell hears). Go round by Gorse End: safe, six hours, arrives Thaw 10 at dusk — inside the grace day by four hours, and it still writes (§5). The ledger reads *paid, late*: `sallowford_marked_late` (Sabel notes the hour, and Sallowford's grace day next Quarter is the 8th, not the 10th); Idony `(hero, carried_duty, 4)` — the duty done, not the risk taken; Osk `(hero, went_round, 3)`, which the Ford Inn repeats as a joke for a week; Pell's letter is never offered and `pell_letter_delivered` stays shut, so when the Chain break the bridge camp on Thaw 11 the hero learns Pell was there from a rumour instead of from Pell, and Idony learns it from Reyne.

**V3 — Tobbin's Flock**
*Inputs:* trigger `flock_lost` at Gorse End pasture (Thaw 1 `roads_slow` + fog rolled; the Firstwater anchor's first Wrack sighting scattered the sheep; Tobbin is *folk* promoted at Firstwater). Giver: Tobbin (motive M02 *fear-of-master*: Reyne Gorse's sheep, Reyne's temper). Place: the Old Shore road onto the western Shelf, ending at the Sunk Court's outer stones. Opposition: a salt-hound (`shelf_dry` false in Thaw, so only one; the court's layer-1 creature list) and the mud. Twist: T19 *a warning from the old people* (precondition: an Ulder NPC in the village today — Ondrin's Firstwater visit was cancelled by the Quiet's river-hold, so the twist is filled by Hild, who "learned it from an Ulder"). Verb: *search*. Standing: Villager.
*Produced by:* TR05 `flock_lost` → **M02** *fear-of-master* · giver **G02** (Tobbin, the hand who will be blamed) · place **S15** the Old Shore road, ending at **S17** the court's outer ring · opposition **O10** a salt-hound and **O16** the mud · twist **T19** *a warning from the old people* — the precondition wants an Ulder within a day, Ondrin is held at the ring, so the roll falls to Hild, who was taught by one · verb *search* · stake **ST1** · Villager. Signature `(G02, search, ST1, O10, old)`.
*Journal:* "Tobbin, twelve, in tears behind the smithy: Reyne's flock bolted onto the Shelf in the fog when the Wrack riders went past, and Reyne will 'strap him raw' if the ewes aren't back by dark. Nineteen ewes. Hild caught my arm on the way out: 'Not past the first stones, whatever you hear bleating. The Court's dry this year. Things wake when it's dry.'"
*Outcomes:* Find the flock by the Old Shore road (Rogue: track; Mage: dowse the mud; Fighter: walk fast and carry the lame one): fourteen ewes on the road, five inside the outer stones with the salt-hound. Bring fourteen home: Tobbin `(hero, helped_find_flock, 6)`, Reyne `(hero, helped, 4)` via kin write, Reyne docks Tobbin's keep. Go past the stones for the five: a first fight with a Salted thing, Hild's warning proved, the Court's mouth *discovered* (a site state; the map shows it), Reyne `(hero, helped, 6)`, the flock whole; door `court_mouth_seen`. Give up at dusk: Tobbin is beaten (condition *hurt* three days), Tobbin `(hero, failed, 5)`, Reyne `(hero, failed_me, 4)`; and the five ewes are site state, not scenery — `gorse_end_stock = short` for the season (Wrack foragers off the Old Shore road take them within two days, which feeds Corrow's camp for a week and is a `wrack_fed` tick against the Moot's *Post* about the camps), Gorse End's wool goes into the Stair's book at Reckoning, and the Shelf stays blank on the map: `court_mouth_seen` is not written, so V3's own door into the Court's approach does not open and N1 comes later, by Kit's mouth instead of the hero's boots.

### 7.2 Hand

**H1 — Reyne's Levy**
*Inputs:* trigger Moot move *Levy* at Wickery (Thaw 3) propagated to the villages: `levy_called(Sallowford, 6)`. Giver: Reyne Gorse (militia captain, motive M21 *orders-I-dislike*, Vael phrasing). Place: Sallowford, the ford (drill), then the Ring Road to Wickery. Opposition: the season (`fields_busy` false in Thaw, but `roads_slow`) and the Wrack band at the bridge if still there. Twist: T08 *the giver would rather it were you* (precondition: hero standing ≥ Hand and class Fighter or a Fighter companion). Verb: *choose, lead*. Standing: Hand (the hero has reached 20+ reach: Sallowford knows the name).
*Produced by:* TR11 `levy_called(Sallowford, 6)` → **M21** *orders-i-dislike*, Vael voice · giver **G06** (Reyne, militia captain, who must send the names) · place **S01** Sallowford and its ford, then **S06** Wickery's wall · opposition **O16** the season (`roads_slow`, the ploughing) with **O06** at the bridge if the picket stands · twist **T08** *the giver would rather it were you* (standing ≥ Hand) · verbs *choose, lead* · stake **ST8** · Hand. Signature `(G06, lead, ST8, O16, agenda)`.
*Journal:* "Reyne Gorse has the Moot's letter and a face like a shut door. Wickery wants six from Sallowford for the wall, thirty days, Moot pay — which means no pay. 'Thirty-one souls in this village and you want me to send six with the ploughing not done? I'll send who you say. Or I'll send you and Osk's lads and call it four.' The names on his slate: Garrow Tull. Dell Sallow. The Marrow twins. Wat Hobb. Corva Fenwright."
*Outcomes:* Pick six from the slate: each name sent sets that NPC's schedule to *at Wickery wall* for thirty days (the smith gone means no repairs; Corva gone means her agenda advances alone — she will try the Stair without you). Go yourself with three: you and a companion count as four; `levy_filled(Sallowford)`, Moot regard +15, Reyne `(hero, took_my_burden, 8)`, and the hero's standing gains Dell Coombe's reach (5) at the wall. Refuse the levy for the village: Moot sway at Sallowford −10, Reyne `(hero, defied, 6)`, Moot regard −10, but the ploughing is done and Sallowford's `harvest` state stays *good* into Reap. Any choice writes `levy_611` as a door read by the Quay Fight anchor: a Wickery wall with Sallowford men on it holds better.

**H2 — The Herb-wife's Guest**
*Inputs:* trigger `drawer_hunted` — the Stair's *Send band* (Thaw 12) to the Salt Pans after a Quiet watcher Drew there and dried a Company salt-pan; the watcher, Ilune, has condition *fled* and is at Hild Marrow's (kin table: Hild was taught by Ilune's keeper). Giver: Hild (motive M30 *hiding-someone*). Place: Sallowford, Hild's house; the Chain arrives at 15:00 on Thaw 13 by the Stair band's march time. Opposition: Drusk Fennick and five Chain blades (quality 2). Twist: T11 *companion-to-be* (precondition: the hidden NPC is on the companion list). Verb: *hide, answer*. Standing: Hand.
*Produced by:* TR18 `drawer_hunted` → **M30** *hiding-someone* · giver **G07** (Hild, who has the loft and the debt to Ilune's keeper) · place **S01** Sallowford, Hild's house · opposition **O01** a Chain band (Drusk and five), with a march time derived from the Stair's *Send band* · twist **T11** *companion-to-be* (Ilune is on the companion list and unmet) · verbs *hide, answer* · stake **ST2** · Hand. Signature `(G07, hide, ST2, O01, agenda)`.
*Journal:* "Hild has an Ulder girl in her drying-loft, grey to the wrists, and the Kest are an hour up the road. Ilune of the Rudd Stones dried a Company salt-pan at the Shelf's edge — 'they were boiling the Court's water for salt, and the water remembers' — and Drusk Fennick wants her for the damage. Hild: 'They'll search. Idony won't stop them; she owes. You could talk to them, or she could not be here, or they could not get in.'"
*Outcomes:* Talk (any class; Rogue best): Drusk searches anyway unless the hero's Stair regard ≥ +15 or a Rogue *Forge* produces a passage-writ; success: Chain leaves, `ilune_hidden`, Ilune offers to walk with you (companion gained). Failure is written too: Drusk searches, finds the loft and takes her — Ilune *imprisoned* at Wickery (`ilune_imprisoned`, the door that offers the Name-tier quest to get her out), Hild `(Stair, harmed, 9)` and `(hero, stood_with_me, 5)` — she counts the trying — Drusk `(Sallowford, hid_something, 4)` written on the village, Quiet regard −15 (Sarane hears within two days), Stair +5, and the hero keeps a branch: holding the door is still on the table while the Chain are in the lane, and giving her up is now impossible, because she is already taken. Move her by night to the Rudd Stones (Mage: Mist; Rogue: shadow the patrol; Fighter: carry her pack and walk fast): 8 hours, Quiet regard +15, Sarane `(hero, saved_keeper, 9)`, Ilune joins later at the stones. Hold the door: a fight with the Chain in the village (Even at level 4 with a companion, because Osk's militia band stands at the other doors and counts in the clash; villagers witness; Stair regard −30, `idren_marked_you`, Moot regard +5 because Dell Coombe hears). Give her up: Stair +20, Quiet −40, Hild *hates*, Sallowford's herb-wife closes her door and her healing; Ilune's condition *imprisoned* at Wickery, a Name-tier quest to free her exists for the Quiet.

**H3 — The Hewers' Word**
*Inputs:* trigger `contract_pending` at the Wend edge — Holds' *Parley* move (Thaw 16) with Reyne Gorse (Gorse End owns the strip of Wend behind the pasture) for felling rights; a Skerrow contract needs a witness not party to it, of standing the Skerrow accept (≥ Hand). Giver: Marrock of Thrum (iron-factor in Wickery, motive M25 *bargain-needs-witness*, Skerrow phrasing). Place: the Wend edge above Gorse End. Opposition: Ondrin, present, objecting for the Quiet (not a fight; a *witness* contest). Twist: T05 *the line on the map* (precondition: a contract that changes a `forest` boundary). Verb: *witness*. Standing: Hand.
*Produced by:* TR12 `contract_pending` → **M25** *bargain-needs-witness*, Skerrow voice (terms first) · giver **G10** (Marrock, the hold's factor) · place **S22** the Wend clearing at the old ash, a stone-mark · opposition **O15** a refusal — Ondrin, standing at the mark for the Quiet · twist **T05** *the line on the map* · verb *witness* · stake **ST5** · Hand. Signature `(G10, witness, ST5, O15, place)`.
*Journal:* "Marrock of Thrum, who buys salvage on Wickery quay, has come up to Sallowford to find me, which is a thing that does not happen. 'Reyne Gorse sells Thrum the felling of the strip above his pasture, to the old ash. We need a witness the Holds will take, and you fetched a flock off the Shelf and stood the levy, so you'll do. Say the words after me and it's stone.' Ondrin was at the ash before we were. 'The old ash is a stone-mark. Cut to it and you cut the Rudd Stones' skirt. Cut to the beck instead and I'll say nothing.'"
*Outcomes:* Witness the contract to the ash: `forest(Rudd Wend edge) = cut` over ten days, Holds regard +15, Reyne +20 marks and `(hero, witnessed_for_me, 6)`, Quiet regard −20, Ondrin `(hero, cut_the_skirt, 8)`; the Rudd Stones' weather bonus for the valley is lost for the season (+1 storm). Witness to the beck: Holds regard +5 (they get timber, less), Quiet regard +10, Reyne +12 marks. Refuse: no contract; Holds regard −10; the Holds' next move is *Fell* without a contract, which is a clash with the Quiet's stone-wardens the hero is not in. Any witnessed contract writes `hero_witnessed_skerrow` — the Holds will now use the hero as a witness at Name tier, which is a door.

### 7.3 Name

**N1 — Corrow's Letter**
*Inputs:* trigger power *Address* — the Wrack's Address move fires when hero standing ≥ Name and Wrack regard ≥ −30 and `court_mouth_seen`. Giver: Halse Corrow by letter, carried by Kit Ashby (motive M40 *show-them-what-is-being-dug*, Vael phrasing, half-Salted). Place: the Sunk Court, outer court and layer 1 (the Drowned Steps). Opposition: the Court's layer-1 creatures (salt-hounds; a husk at the steps) and a Stair salvage band (the Stair's *Salvage* move, Thaw 20). Twist: T14 *the enemy tells the truth* (precondition: Stair band `salvaging` at a Quiet-goal site). Verb: *parley, descend*. Standing: Name (Wickery knows the name; Kit can find you).
*Produced by:* TR14 `salvaging(court)` + TR35 (the Wrack's *Address* threshold crossed) → **M40** *show-them-what-is-being-dug*, Vael voice, half-Salted · giver **G13** (Corrow, by letter, carried by Kit) · place **S17** → **S18** → the door of **S19** · opposition **O03** the paid Skerrow crew, with **O10** and **O07** on the way down · twist **T14** *the enemy tells the truth* · verbs *parley, descend* · stake **ST3** (`well_ring_intact`) · Name. Signature `(G13, parley, ST3, O03, agenda)`.
*Journal:* "Kit Ashby put a letter in my hand on the quay and walked off before I could refuse it. It is signed Halse Corrow, in a hand that shakes. 'You are the one Wickery talks about. I was Reeve here. Come to the Court at dusk on the 21st, alone or not, and I will show you what Vesk Idren is paying Skerrow to dig out of the second hall, and then you can decide whose knife you are.' Kit, later: 'He'll keep his word. It's the only thing he's got left that isn't salt.'"
*Outcomes:* Go: Corrow meets the party at the outer stones with two Wrack and walks them into layer 1 — an escorted descent, the Court's mouth and steps *explored* on the map; at the Salt Hall's door he shows a Stair salvage crew cutting stone-bronze from the hall's well-ring, and says the ring is what keeps the well below sealed (true; the anchor's `layer3_well_sealed` depends on `well_ring_intact`). Deeds: Wrack regard +15, `corrow_met`, `well_ring_seen`. Then the choice: drive off the salvage crew with Corrow (Stair regard −25, Holds −10 (they were the diggers), Quiet +20, `well_ring_intact` kept); walk away (nothing written but the sighting; the crew cuts the ring in four days: `well_ring_intact = false`, and layer 3 opens with what is in it); tell Idren afterwards (Stair +20, Wrack −40, and Corrow's next Address will be a threat). Don't go: nothing; Corrow's regard for the hero −10, and the ring is cut by Thaw 25.

**N2 — Idren's Chain**
*Inputs:* trigger `chain_sergeant_absent` — Drusk Fennick is *dead* or *fled* (state from H2's hold-the-door outcome or from a Wrack raid the hero was not in), and the Stair's factor needs a sergeant before the Quay Fight; Stair regard ≥ 0; standing ≥ Name. Giver: Vesk Idren (motive M33 *hire-the-name*, Kest phrasing). Place: Wickery counting-house. Opposition: O15 *a refusal* — Aud Penhallow's: she stops the hero at the market cross on the way in and says the Moot will not have its own valley's name in the Company's coat. Twist: T23 *a companion objects* (precondition: a companion whose agenda opposes the giver — Corva wants the Stair's passage, Ilune wants it gone; both apply, Ilune's is louder). Verb: *answer, choose*. Standing: Name.
*Produced by:* TR22 `sergeant_absent` + TR35 → **M33** *hire-the-name*, Kest voice (price first) · giver **G05** (Idren, factor) · place **S08** the counting-house · opposition **O15** a refusal — Aud Penhallow's, spoken at the market cross before the hero can answer · twist **T23** *a companion objects* (Ilune's agenda opposes the giver's power; Corva's runs the other way) · verbs *answer, choose* · stake **ST7** · Name. Signature `(G05, answer, ST7, O15, agenda)`.
*Journal:* "Vesk Idren does not look up from the ledger. 'You have a name in this town. I have six blades and no one to stand at their head, and the Wrack will be at this door before Green. Sergeant of the Chain at Wickery: a mark a day, the Company's writ on the Ring Road, and whatever you are owed in Fallgate, weighed and paid. I do not ask what you think of us. I ask what you weigh.' Aud Penhallow had stopped me at the cross on the way in — she had heard before I had: 'The Moot will not have this valley's own name inside that coat. I'll not stop you. I'll remember it.' Ilune, outside: 'If you take his coin, I go back to the stones.'"
*Outcomes:* Accept: `hero_is_chain_sergeant` (a door with a schedule: 6–10 at the counting-house each day or the writ lapses), Stair regard +30, Moot −20, Wrack −30, Ilune leaves the party (agenda), Corva's regard +10; the Quay Fight anchor puts the hero on the counting-house step. Refuse politely: Stair regard −5, Idren `(hero, refused_weight, 4)`, nothing closes. Refuse and name a price he will not pay (Rogue *Factor* line: "Burn Bram Fenwright's debt and I'll think about it"): 20% chance by the Stair's temper (patient) that he agrees: `fenn_mill_debt = cleared`, Stair +10, and the hero is *not* sergeant but is *owed*. Accept and use the writ to walk the Chain away from the Salt Pans: a Name deed for the Quiet inside a Stair door — allowed; the engine reads doors, not loyalties.

**N3 — The Wheel at Fenn's**
*Inputs:* trigger Stair move *Call debt* → *Seize* on Fenn's Mill (Thaw 24; the debt unpaid after V1's do-nothing branch, or paid half): `seizure_pending(Fenn's Mill, Thaw 26)`. Giver: Corva Fenwright (companion, agenda *leave by the Stair* now in tension with her father's ruin; motive M44 *my-home-is-being-taken*). Place: Fenn's Mill. Opposition: Drusk Fennick or his successor with four Chain blades and a Kest bailiff (Anser Sabel, promoted folk). Twist: T27 *the paper is wrong* (precondition: class Rogue in party or hero Rogue, and a Kest ledger present — the seizure writ cites a Quarter-day of 4 marks; the ledger says 3). Verb: *hold, investigate*. Standing: Name.
*Produced by:* TR08 `seizure_pending(Fenn's Mill, Thaw 26)` → **M44** *my-home-is-being-taken* · giver **G11** (Corva, whose agenda now runs against her own home) · place **S03** Fenn's Mill · opposition **O01** the Chain with **O14** a writ and a bailiff behind them · twist **T27** *the paper is wrong* (two ledgers disagree and the hero can hold both) · verbs *hold, investigate* · stake **ST1** · Name. Signature `(G11, hold, ST1, O01, paper)`.
*Journal:* "Corva has not spoken since Wickery. Then: 'They take the mill on the 26th. My father will stand in the door and Drusk will put him down and then it's the Shelf for him, like Pell. I wanted to leave this valley. I did not want it burned behind me.' The writ is nailed to the mill door. Idren's clerk has written *four marks*; Idony's ledger, which I carried, says three. Sabel the bailiff is a careful woman who has never been wrong in her life."
*Outcomes:* Pay the difference and the arrears (8 marks): `fenn_mill_debt = cleared`, Bram `(hero, saved_home, 10)`, Corva regard +30 and her agenda softens to *see the Foot, then come home*. Show the discrepancy (Rogue *Forge*/*Listen*, or any hero with Idony's ledger in the pack): Sabel withdraws the writ for ten days for re-weighing; Stair regard −10; Idren `(hero, caught_my_clerk, 7)`; `seizure_pending` delayed to Green. Hold the door: a Fair fight at level 7 with two companions; win: the Chain retreats, `idren_marked_you`, Stair −35, Moot +10, Sallowford's Moot sway +10, Bram's mill *held*, and a Chain band is *Sent* next dawn — the mill becomes a site the powers contest (the engine's next quest at the mill is a Voice quest). Mage alternative: flood the millrace and the yard for a day (`yard_flooded`; the Chain cannot bring the cart; seizure delayed three days; Salt cost 10). Lose: Bram *ruined*, a Wrack recruit, Corva leaves for the Stair alone, `corva_gone`.

### 7.4 Voice

**Vo1 — The Toll-house at Rudd Bridge**
*Inputs:* trigger Stair move *Build* toll-house at the Rudd Bridge (Thaw 30; the Stair's goal 3, made legal by a Holds' Parley for stone) → `build_pending(toll_house, Rudd Bridge, 3 days)`. Giver: the Moot, in Reeve Aud Penhallow's voice (power *Address*: standing Name or above with Moot regard ≥ +20; the stake is a tier above the hero's standing, §4; motive M47 *the-thing-we-have-refused-forty-years*). Place: the Rudd Bridge. Opposition: two Chain bands and a Holds masons' band; the Moot has one militia band at Wickery and the hero's levy men if `levy_611` was filled. Twist: T29 *the other side offers* (precondition: two powers with opposite goals both at Address threshold — the Stair's letter arrives the same day: "Stand aside and Sallowford's road is toll-free for a generation, in writing"). Verb: *lead, choose*. Standing: Name, offered at Voice scale; the played clash and the notice it earns are what make Voice.
*Produced by:* TR21 `build_pending(toll_house, Rudd Bridge, 3 days)` → **M47** *the-thing-we-have-refused-forty-years* · giver **G09** (Aud, reeve, speaking for the Moot) · place **S05** the Rudd Bridge · opposition **O01** two Chain bands with **O03** masons who are contracted to build and not to hold · twist **T29** *the other side offers* (both powers at *Address* threshold the same morning) · verbs *lead, choose* · stake **ST5** · offered at Voice scale to a Name hero by §4's one-tier rule. Signature `(G09, lead, ST5, O01, door)`.
*Journal:* "Two letters in one morning. Aud Penhallow, Reeve of Wickery, for the Moot: 'They are building it. Stone from Thrum, blades from Fallgate, at the Rudd Bridge, where every cart from your valley crosses. Forty years the Moot has said no. I have one band and a wall to keep. If you will lead what Sallowford sent, and Dell's men, I will put you at the bridge with the Moot's word behind you.' And Vesk Idren, for the Company: 'A toll-house at the bridge is inevitable. What is not inevitable is who pays. Stand aside and I will write Sallowford's carts free of it for a generation, under seal.'"
*Outcomes:* Lead the Moot's men: a played clash (party + 1 militia band + the levy men vs 2 Chain bands + masons): Even at level 9 with a Fighter or Captain-leaning hero, Overmatched otherwise unless the hero *breaks* the stone-cart first (Rogue night action, −1 masons' band). Win: `toll_house = never` for this campaign at this bridge, Moot regard +40, Stair −50, Holds −15, the hero's standing gains High Reeve Tull's memory (reach 100) — the first Brenning letter arrives. Lose: the toll-house is built; Sallowford's carts pay 1 bit a crossing forever; Moot −10 (they blame themselves), and the hero's death-cost rules apply. Take the Stair's seal: `toll_house = built`, `sallowford_toll_free` (a door: the village's prices never rise), Moot −40, Stair +40, Idony `(hero, sold_the_road, 9)` — and Idony, who *owes* the Stair, understands: her greeting is the *knows* line, not *hates*. Parley (Voice heroes can call one): with Marrock witnessing, a Skerrow-bound contract that the toll-house is built but the Moot collects half — possible only with Holds regard ≥ +20 and a Rogue *Factor* or a Voice Mage's *Read* of the Cutting preamble; writes `bridge_shared`.

**Vo2 — Sarane's Asking**
*Inputs:* trigger `well_ring_intact = false` (the salvage crew finished; N1's walk-away branch, or N1 never taken) → `layer3_opening(Sunk Court, 6 days)`. Giver: Sarane of the Rudd Stones (Quiet *Address*: standing Name or above, Quiet regard ≥ +10; the stake is a tier above; motive M09 *the-old-grief*, Ulder phrasing). Place: the Sunk Court, layer 2 (the Salt Hall) and the door of layer 3 (the Well). Opposition: the Salt Hall's Salted (husks, a salt-warden) and a Stair-paid Skerrow salvage band still cutting. Twist: T22 *the companion loses by it* (Gulla's agenda-object is the stake: bronze for Thrum; she will not help flood the hall). Verb: *descend, choose*. Standing: Voice.
*Produced by:* TR16 `well_ring_intact = false` → **M09** *the-old-grief*, Ulder voice (memory, then the ask) · giver **G14** (Sarane, Speaker) · place **S19** the Salt Hall and the door of **S20** · opposition **O08** a salt-warden with husks, and **O03** the crew still cutting · twist **T22** *the companion loses by it* — Gulla's agenda-object *is* the stake: the bronze in the hall is what the flooding drowns (round one filed this as T23, which is the wrong row: Gulla does not object to Sarane, she objects to losing Thrum's winter) · verbs *descend, choose* · stake **ST5** (a permanent change to the map) · Voice. Signature `(G14, descend, ST5, O08, agenda)`.
*Journal:* "Sarane came down to Sallowford. The village stood in its doorways. 'The ring is cut. The well under the Court will open in six days and what the water held will come up into the dry, and the Kest will pay Skerrow to carry it out in sacks. I am asking you to go down and flood the Salt Hall. There is water in the Court's cistern still; a Drawer can loose it, or a strong back can break the cistern wall, or a quiet hand can open the old sluice. It will cost you the bronze in that hall. It cost us more.' Gulla: 'That bronze is Thrum's winter. I'll go down with you. I won't help you drown it.'"
*Outcomes:* Flood the hall: `court_layer2_flooded` (permanent door: layer 2 is a boat-and-breath dungeon from now on; the Salted below are held; Sarane `(hero, kept_the_well, 10)`; Quiet regard +40; Holds −30; Stair −20; Gulla leaves unless her regard ≥ +40, in which case she stays and says nothing for ten days). Take the bronze first, then flood (a race against the cistern's water and the Salted: the hall's twenty sacks are worth 40 marks at Marrock's): Holds +10, Quiet +25, Gulla stays. Take the bronze and leave the well: `layer3_open`, the Well becomes the region's deepest dungeon, the Quiet's regard −50, and the Wrack's Salted double for the season (a map event: "Things are walking up from the Court by daylight"). Refuse Sarane: nothing changes but the ring cut, and the Well opens on its own six days later.

**Vo3 — The Quay Fight**
*Inputs:* trigger the season's anchor — Wrack goal 1 ("Wickery's counting-house burned") reaches a *Raid* with three bands: on Thaw 82 in the unplayed season, earlier or later in a played one, and as a *Parley* instead if the door `ledgers_to_be_read` is set (built up over the season by called debts; see [FIRST_REGION](../slice/FIRST_REGION.md) §5 and §7). Giver: whichever power the hero's regard is highest with at Voice (Moot: Aud; Stair: Idren; Wrack: Corrow by letter) — the engine offers the anchor in that power's voice; here Moot (motive M46 *hold-the-town*). Place: Wickery quay, the counting-house, the Post inn. Opposition: three Wrack bands with a salt-warden; Corrow himself if `corrow_met`. Twist: T02 *kin under arms on both sides* (Pell Tarn leads a band if alive; the Sallowford levy on the wall grew up with him). Verb: *lead, hold, choose*. Standing: Voice.
*Produced by:* TR10 `raid(Wickery)` reaching the anchor + TR28 → **M46** *hold-the-town* · giver **G13** (a power in its own voice; the engine picks the power whose regard is highest, here the Moot through Aud) · place **S10** the quay, **S08** the counting-house, **S06** the wall · opposition **O05** three Wrack bands with **O08** a salt-warden · twist **T02** *kin under arms on both sides* — the Sallowford levy on the wall and Pell's company under it (round one filed this as T01, which describes the giver's kin, not a wall with kin on both faces) · verbs *lead, hold, choose* · stake **ST5** · Voice. Signature `(G13, hold, ST5, O05, kin)`.
*Journal:* "Aud Penhallow, at dawn, the bell going: 'They're on the Shelf, three companies, and Halse is with them. They want the counting-house and they want me. The wall will hold if the men on it don't know the men under it. Yours do. I am asking you to take the quay.' From the wall: Pell Tarn at the head of the middle company, waving at Garrow Tull."
*Outcomes:* Hold the quay and the counting-house: `wickery_held`, `counting_house = intact`, Moot +40, Stair +20, Wrack −50; Corrow retreats to the Court; Pell Tarn dies unless the hero *chooses* to open the west gate for Sallowford's kin to slip out (a Rogue or anyone with `pell_letter_delivered`); High Reeve Tull's letter; the hero is a Voice the Moot will send for. Hold the quay, let the ledgers burn (the hero orders the wall to hold and the Chain to fall back): `counting_house = burned` (20 days; every called debt in the Rudd valley is uncollectable until it is rewritten from Fallgate's copy at Reckoning), Moot +20, Stair −40, Wrack +10, Bram, Idony and thirty debtors `(hero, freed_us, 8)` — the hero's standing jumps by their reach; Idren `(hero, let_it_burn, 10)`. Open the town: `wickery_control = Wrack` for the season, Aud *fled*, Moot −60, Stair −60, Wrack +60, the Ring Road west closed to Kest carts; the hero is Corrow's Voice and the region's next quests come from the Shelf. Lose the fight: the counting-house burns anyway, Aud is taken, Wickery's sway falls to nobody's, and the hero wakes at Hobb's Cross three days later with a scar and Wickery's memory of a defence that failed.

---


### 7.5 Three more, rolled at the table (quests thirteen, fourteen, fifteen)

The twelve above sit on dated anchor days. These three do not: each is rolled from **ordinary, undated state** on a day the season table has nothing written against, using only §3.1–§3.12 and four dice. Every roll is shown, including the two that failed a precondition and were re-rolled. The hero states are three points of one campaign — Villager at Thaw 19, Hand at Thaw 24, Name at Thaw 46 — in a run that has done V3, V1, V2 and H3 and has not yet done the bridge.

---

**Q13 — The Line Is In A Field**

*World state, Wickery, Thaw 19, ordinary day, clear:* the low-mark's notch was cut at Firstwater and the water has gone out past the old weir line — `weir_dry`, `boats_idle` at the quay, `roads_slow` still on. No power move is dated to this day. Hero: renown 14, **Villager**, Moot +0, Quiet +10, Stair +5.

| Field | Die | Roll | Row hit | Check |
|---|---|---|---|---|
| Trigger | d36 | **20** | TR20 `boats_idle`, `weir_dry`, `low_mark_drop` | live at S10 today ✔ |
| Motive | d3 of TR20's {M29, M19, M06} | **1** | **M29 the-quay-is-short** | cause list contains TR20 ✔; stake real — the eel run starts when the Rudd warms ✔ |
| Giver | d3 of M29's {G12, G04, G09} | **1** | **G12** fisher / weir-man | no named G12 fisher at Wickery in the region's 25 → promote |
| — name | d96 given | **26** | **Rowe** | byname taken by role and site, not rolled: a weir-man on the quay is **Weirman** (bynames, 14) |
| Place | none | — | **S14** the eel weirs and reed-beds below the quay, cause; **S10** the quay, giver's site | the site whose state is the cause ✔ |
| Opposition | d16 (no band in state) | **11** | **O11 Shelf creatures** | S14's stated danger is reedbacks and mud-eels ✔ no contradiction |
| Twist | d30 | **26** | **T26 the water is falling** | precondition: a low-mark newly cut ✔ passes first roll |
| Verbs | d3 of M29's {carry, investigate, lead} | **2**, then **1** | *investigate*, then *carry* (the twist adds a step) | *choose* not used alone ✔ |
| Tier | — | — | Villager (renown 14) | stake **ST1/ST8** at household scale; 6–30 bits, 60–120 XP |

*Signature* `(G12, investigate, ST8, O11, season)` — differs from all twelve in four or five fields ✔

*Journal:* "Rowe Weirman is on the quay looking at his own weir line, which stands forty paces up in dry mud. 'Drove those stakes with my father in the Reap the water was at the top of them. Eel run starts when the Rudd warms, and I've a line standing in a field. I want them out where the water went — three days with two backs, and I've one. There's things in the pools between here and there that bite, and I'll not take my boy.' Out past the third stake from the end, where the mud has dried and split, something green is standing that is not a stake."

*How that paragraph was assembled (step 9):* greeting tier *no memory* → the motive's want in the **Vael** voice (a fact about a thing that is not working, then the ask; measured in days, backs and mouths) → **S10**'s fair-day description line ("Boats on the mud … the low-mark post with this year's notch fresh") compressed to the mud and the line → **O11**'s danger stated as the giver knows it → **T26**'s line ("There's stone standing out of the mud that wasn't there last Reap") rewritten to the thing the hero can see from the quay. The street gets **R04** the same day: "New notch on the post. My father's mooring is forty paces of dry mud now."

*Outcomes:*
- **Re-drive the line out** (a day's work with the hero's back — Fighter *Carry* the stakes two at a time; Mage *Dowse* the old channel and *Dry* a pool to work in; Rogue knows which pools to walk round): `weir_line = out`, `boats_idle` cleared at Wickery for the season, the catch holds. Rowe `(hero, worked_with_me, 8)`; Jory Quill, who buys the eels, `(hero, helped_the_quay, 4)`; Moot sway at Wickery +5. 20 bits and a basket. 110 XP.
- **Lift the green thing** — it is a mooring-post of the Age of Stone, stone-bronze, and the corner of a court's outer wall is under it: a **new site** enters the region's table, `court_edge(Wickery reach) = surfaced`, which the engine will generate at from that day. Sell it to Kit in the back room (1 mark 10): `shelf_post_lifted`, Quiet −10, Kit `(hero, brought_me_stone, 6)`, and Marrock's yard turns down the next one.
- **Leave it and tell an Ulder** (Hild will carry the word; Ilune if met): `court_edge_marked`, Quiet +10, Sarane `(hero, told_us_first, 6)` — and the Quiet's next *Ward* covers the Wickery reach, which the Stair's salvage plan reads as an obstacle.
- **Say yes and not go**: the run passes. `catch = poor` at Wickery through Thaw and Green; fish +10% at every inn in the valley; Rowe `(hero, said_he_would, 3)`; and the Stair buys the short catch cheap for the Salt Pans, which is the same machine at its small end.

---

**Q14 — The Slide at the Hewers' Camp**

*World state, the Rudd Wend, Thaw 24, ordinary day, Stillday, rain:* the hero broke the dam on Thaw 7 (V1), so the float-pond above the slide is gone; the ash-strip contract was witnessed **to the beck** (H3), so Thrum got two thirds of the timber it costed. State: `slide_jammed`, `timber_short(Thrum)`, `roads_slow`. No power move is dated to this day; the Holds' planner has *Fell* and *Parley* both under-scoring while the timber it already cut is lying in the shallows. Hero: renown 90, **Hand**, Holds −15, Quiet +20.

| Field | Die | Roll | Row hit | Check |
|---|---|---|---|---|
| Trigger | d36 | **31** | TR31 `gallery_unpropped`, `timber_short(H)` | live at S25 and S21 ✔ |
| Motive | d3 of {M18, M42, M15} | **1** | **M18 the-props-are-rotting** | cause list contains TR31 ✔ |
| Giver | d3 of M18's {G10, G13, G05} | **1** | **G10** hold's hand / foreman | named G10 at S21 is **Rukk of Thrum**, who holds `(hero, broke_our_work_twice, 9)` **against** → *hates* → refused by §1 → re-roll inside the role |
| — name | d48 Skerrow given | **14** | **Habb**, + hold from the site → **Habb of Thrum** | no memory of the hero ✔ |
| Place | none | — | **S21** the Hewers' Camp and its slide, cause; **S25** Thrum's gate, destination | ✔ |
| Opposition | none (state names it) | — | **O16 the ground and the season** — the jam, the meltwater, the rain; **O03** the crew is present and stands off, contracted to fell and float, not to clear | "opposition is whoever is really there" ✔ |
| Twist | d30 | **8** | T08 *the giver would rather it were you* | precondition: giver holds an order he dislikes — Habb holds terms, not orders → **fails**, re-roll |
| Twist | d30 | **24** | **T24 the season is against it** | `roads_slow` live ✔ passes |
| Verbs | d3 of M18's {carry, parley, break} | **3**, then **1** | ***break***, then *carry* | first *break* quest in the set ✔ |
| Tier | — | — | Hand (renown 90) | stake **ST3**; 1–2 marks, 150–250 XP — paid Skerrow-fashion, in iron and terms |

*Signature* `(G10, break, ST3, O16, season)` — differs from all twelve and from Q13 in four or five fields ✔

*Journal:* "Habb of Thrum came down the Wend track on a Stillday, which tells you how it is at the hold — Skerrow keep no Stillday, and no Vael would have walked it in this. 'Terms. You break the jam at the slide and walk the first load of props up to the gate. Thrum weighs you two marks and twelve bars, the crew stands off while you do it and lifts no hand either way. That's the whole of it.' Then, because I had not said yes: 'The pond's gone — somebody put an axe in that dam in Thaw. Contract says fell and float. There's no float. Three galleries under Rudd's Head are propped with last year's cut and one of them talks at night. Say it back to me and it's stone.' Four hours up the track in this, not two."

*Outcomes:*
- **Break the jam** (Fighter: *Break* the key log and be off it before it goes; Mage: Draw the meltwater up behind the head of it and let the water do the pushing, then *Dry* the shallows to walk the logs out — 30 water, 8 Salt; Rogue: cut the two binding withies at the right hour and be on the bank): `slide_jammed` cleared, `props_to_thrum`. Holds +15; Habb `(hero, kept_terms, 8)`; the tally-clerk carries it to Brakka, `(hero, keeps_skerrow_words, 6)` at reach 100. 2 marks and 12 iron; 220 XP. **And the map:** with props at the gate the Holds' planner scores *Parley* above *Fell* for the next strip — the Wend's line holds another season, which the Quiet see (Quiet +5, `holds_parley_pending`).
- **Break it badly** (alone, in the dark, or with the withies cut in the wrong order): the jam goes and takes a third of the timber down the Rudd and out onto the Shelf. `slide_jammed` cleared, `props_to_thrum` half; Holds +5; Habb `(hero, tried, 4)`; eight logs on the mud below Wickery become salvage Kit sells to the boat-builders (`wickery_timber +`), and the Holds hear whose hand it was by Green.
- **Refuse the terms and offer a witnessing instead** (needs `hero_witnessed_skerrow`): a second contract, spoken at the camp, pays the crew to clear their own jam and takes a further strip above the beck as the price. Holds +20, Quiet −15, `forest(strip above the beck) = pending`, Reyne 6 marks, Ondrin `(hero, sold_the_skirt_slowly, 7)`. The props go up; the wood does not come back.
- **Nothing**: in Green the third gallery under Rudd's Head falls with two Skerrow in it. Holds −20, `gallery_fallen(Thrum)`, and the Holds' planner takes *Fell* in the Rudd Wend without a contract — a clash with the Quiet's stone-wardens the hero is not in, and the valley pays for it in weather.

---

**Q15 — The Fiftieth**

*World state, Hobb's Cross, Thaw 46, ordinary day, clear:* the Wrack forage on Thaw 7 took half of Wat Hobb's stores; his Quarter-day was short; the Stair's planner called his debt on the 44th and set the weighing for the 50th. State: `debt_called(Hobb's Cross)`, `writ_posted(Thaw 50)`, `damage = robbed`, `hidden_stores` available. No anchor, no dated event. Hero: renown 210, **Name**, Moot +25, Stair +5, Holds +5 with `hero_witnessed_skerrow`, and a Stand contract on Wickery's wall.

| Field | Die | Roll | Row hit | Check |
|---|---|---|---|---|
| Trigger | d36 | **6** | TR06 `debt_called(site)` | live at S04 ✔ |
| Motive | d4 of TR06's {M05, M44, M27, M34} | **3** | **M27 the-factor-must-not-know** | cause list contains TR06 ✔; the stores exist and are countable ✔ |
| Giver | d3 of M27's {G04, G01, G12} | **1** | **G04** innkeeper / carter → **Wat Hobb** | at *owes* (`hero, drove_off_wrack, 8`) ✔ not dead, fled or hating ✔ |
| Place | none | — | **S04** Hobb's Cross inn and cart-yard, cause; **S08** the counting-house, second site | ✔ |
| Opposition | none (state names it) | — | **O14 a writ and a bailiff** — Anser Sabel, careful, with the Chain a street away | the opposition kind a Fighter cannot fight ✔ |
| Twist | d30 | **28** | **T28 the door you opened** | precondition: an earlier deed's flag applies — `hero_witnessed_skerrow` (H3) and the Moot's Stand rota ✔ passes |
| Verbs | M27's list | both | *hide, choose* | ✔ |
| Tier | — | — | Name (renown 210) | stake **ST4**; the reward band is a door and a debt, not coin — Wat has none (T10's condition is also live) |

*Signature* `(G04, hide, ST4, O14, door)` — no fight in it anywhere, and four or five fields from every other quest in the set ✔

*Journal:* "Wat Hobb has the yard gate shut at midday, which he has not done since the raid. 'Fifty barrels short since the seventh, and the Company's writ says they weigh me on the fiftieth. What's in that barn is Col's place, next year's seed and the flour for the road, and if Sabel counts it, it's Idren's by dusk. I'm not asking you to lie for me. I'm asking you to be up the farm lane with a cart on the morning of the fiftieth.' Then he looks at me properly. 'You stood witness for Reyne Gorse in front of a Skerrow. I know what that's worth up this valley. And I know what it's worth if it comes off.'"

*Outcomes:*
- **Move the stores up the farm lane** (Rogue: *Shadow* the cart and leave a second tally that agrees with itself; Mage: *Dry* the barn floor so the drag does not read; Fighter: *Carry* it in one night): `hobbs_cross_stores_hidden`. Sabel's count comes up short and she writes it short, because she is careful and not stupid: `sabel_suspects_hero` — her regard −10, and she will re-weigh Hobb's Cross at the Reckoning with the Chain standing in the yard. Wat `(hero, saved_my_yard, 10)`; Col keeps his place; the carters' route stays Wat's; Moot sway at Hobb's Cross +5. No coin: a bed, a cart and a mule at Hobb's Cross for the campaign. 380 XP.
- **Move them and be seen** (the hero's Stand day falls on the 50th and the wall notices, or Sabel walks the lane): the writ stands, the yard is seized — `hobbs_cross_control = Stair` — and the door the twist named **closes**: a witness caught inside a false count is no witness. `hero_witnessed_skerrow` struck; Holds −25; Marrock will not use the hero again this campaign and Brakka is told by the next tally. The Moot docks the Stand pay; Dell says nothing about it, which is worse.
- **Stand surety** (4 marks of the hero's own, in front of Sabel, at the counting-house): `hobb_debt_paid`, Stair +10, Idren `(hero, paid_another_man's_weight, 6)`, Sabel `(hero, dealt_straight, 7)`; Wat `(hero, paid_for_me, 10)` and will not take the hero's coin for a bed again. And the recruit Hobb's Cross was three days from sending the Wrack never leaves: `recruits_queued −1`, which the Quay Fight's band count reads at the season's end.
- **Take it to the table** (ask Sabel to weigh at the Reckoning with the Moot's ledger open beside hers; needs Stair regard ≥ 0 or N3's `caught_my_clerk`): `weighing_deferred(Hobb's Cross, Reap 60)`, Stair −5, Moot +10, Aud `(hero, brought_it_to_the_table, 7)` — and Hobb's Cross joins the slate of debts that M38 *the-ledgers-must-be-read* reads at the Reckoning.
- **Nothing**: the weighing happens on the 50th, the barn goes into the book, and Col walks down to Wickery for work he will not find and is at Corrow's Reach by Reap (`wrack_recruit +1`). Wat's greeting drops from *owes* to *knows*, and the inn's rumour for the season is R18 with the hero's name not in it.

---

**What the three prove.** All three came out of state nobody dated: a lake that fell past a weir line, a jam left by the hero's own axe, and a barn that was robbed six weeks earlier. None of them is a fetch or a cull: one is a day's work with a stranger and a decision about a piece of bronze, one is a *break* with a Skerrow contract standing off to watch, and one has no enemy in it at all — a careful woman with a correct piece of paper. Each names people with reasons, each puts its stake on a site the map already shows, and each writes site state, memory and regard on every branch including the branch where the hero does nothing.

---

## 8. Sizes, corrections and risks

### 8.1 What is printed here, counted honestly

| Table | Round one claimed | Printed here | Where |
|---|---|---|---|
| Triggers | not counted | **36** | §3.1 |
| Motives | 48 | **48** | §3.2 |
| Motive phrasings | 48 × 4 peoples × 3 = 576 lines | **48 motive lines + a 12-cell voice rule** — see 8.2 | §3.2, §3.3 |
| Twists | 30 | **30**, each with precondition, edit and line | §3.4 |
| Site types | 22 | **25** | §3.5 |
| Site-type description lines | 22 × 6 = 132 | **25 × 2 = 50** — see 8.2 | §3.5 |
| Opposition kinds | 14 | **16** | §3.6 |
| Giver roles / stake types | not counted | **14 / 8** | §3.7 |
| Verbs | 12 named in prose | **12**, each with shape, failure and three class answers | §3.8 |
| Names | 410 (Vael 140+80, Skerrow 60, Ulder 40, Kest 30+60) | **315** (Vael 96 + 60, Skerrow 48 + 3 holds, Ulder 36 + 12 rings, Kest 24 + 36) — see 8.2 | §3.9 |
| Rumour templates | 60 | **60** | §3.10 |
| Notice templates | 14 | **14** | §3.11 |
| Map-event templates | 60, counted here | **moved**: they belong to the map-change step of the simulation ([LIVING_WORLD](LIVING_WORLD.md) §3) and are counted there, not twice | — |
| Deed table | counted in LIVING_WORLD | **not this file's** — every consequence above cites it | [LIVING_WORLD](LIVING_WORLD.md) §4 |

**Authored entries in this file: 292 table rows** (36 triggers + 48 motives + 4 voice-rule rows + 30 twists + 25 site types + 25 description rows carrying 50 lines + 16 opposition kinds + 14 giver roles + 8 stake types + 12 verbs + 60 rumours + 14 notices) **and 315 names — 607 in all**, against round one's estimate of "about 1,200 engine lines, one writer for eight weeks". The eight weeks was the right order and the wrong shape: what is printed here is about **two writer-weeks**, and the remaining six go to the per-region content it feeds — 40 named sites × 6 description lines (240) and each new region's own site instances, which the region files own ([FIRST_REGION](../slice/FIRST_REGION.md) §8). The engine's grammar does not grow per region; only the sites, the names and the anchors do.

### 8.2 Five counts that were wrong, and why

1. **576 motive phrasings → 48 lines and a rule.** Four peoples × three phrasings each was a plan to write the same sentence 576 times and then pick one. The thing that actually makes a Skerrow and a Vael sound different is not per-motive prose, it is register: what they measure a problem in, how they open, what they swear by, what they never say. That is twelve cells (§3.3), it applies to all 48 motives and to every motive a later region adds, and it is testable — the four voices of M07 are printed and no two could be swapped. **Down: 576 → 60.**
2. **22 site types → 25.** The claimed 22 had no hold gate, no shieling and no well shaft, which means the Rim, the Shoulders and the bottom of a court had no shape and three of the first region's own sites were instances of nothing. **Up: 22 → 25.**
3. **132 site-type description lines → 50.** Six lines per *type* is the wrong object to author: a type is a fallback, and a named site deserves its own six (the region file's 40 × 6 = 240). Two per type — fair, and dark-or-foul — is what the fallback needs. **Down: 132 → 50, with 240 relocated to the region file where they were already counted.**
4. **410 names → 315.** The claim was sized for nothing in particular. The requirement is: a region promotes about sixty folk, no repeat inside a region, and four regions before a name comes round again. Vael 96 given × 60 bynames is 5,760 combinations, which is four regions with room to spare; 140 given names would have been 44 that never get used. **Down: 410 → 315.**
5. **14 opposition kinds → 16.** A writ and a refusal are different opposition, they are the two kinds that cannot be fought, and the twelve quests use both (H3's Ondrin at the ash; N3's bailiff; N2's Aud at the cross; Q15's Sabel). **Up: 14 → 16.**

### 8.3 Two rules that were too weak, and are now stated

- **Repetition.** "A twist family may not appear twice in a row" let T01 and T23 each appear twice inside the twelve showcase quests and let *choose* carry six of twelve while *break* carried none. §6 now states four rules — four-of-five signature difference against the last twelve, no twist entry inside twelve and no family inside four, no verb above a third of the last twelve, giver cooldowns — and §7's Vo2 and Vo3 are re-cited to the twist rows that actually describe them (T22, T02).
- **Empty consequences.** §5's "the engine refuses an outcome whose consequence list is empty" was broken by three branches in this file's own showcase — V2's safe road, V3's giving up, H2's failed conversation. All three are written out in §7, and the general rule is now stated: *the careful branch still moves the world, because the world was moving anyway.*

### 8.4 Output per season, and risks

- **Output.** The first region generates about 40–60 quests over one Thaw with a normal player, of which a player sees 20–30. Fifteen are written out in this file. The other 25–45 come from the same 36 triggers against the season's states; §7.5 shows three of them being made from days the season table leaves blank, which is where the engine actually lives.
- **Risk: sameness.** Twelve verbs and 48 motives can still feel like a wheel by the third season. Mitigation: the standing tiers change the *scale* of the same trigger; the age rule mixes the fills; the signature rule now counts verbs as well as twists; and every region adds its own sites, names and anchors, never its own grammar. QA measures it: a sameness count over the last twenty-four offers, run in the text harness against the baseline season.
- **Risk: nonsense.** A twist whose precondition drifted (the kin died last week) produces a line that names a dead man. Mitigation: every precondition is re-checked at offer *and* at each dialogue line; a failed check drops the twist and re-phrases, never the quest. Q14 shows the same rule catching a *giver* — Rukk hates the hero, so the role re-rolls and a new Skerrow is promoted.
- **Risk: the engine outruns the player.** Six open quests with stakes on timers can feel like a chore list. Mitigation: at most two open quests per site carry a deadline; the journal orders by deadline; a lapsed deadline is a consequence, not a failure screen — the world just did the other thing.
- **Risk: the tables make the quests but not the prose.** The assembly in §7.5's Q13 is the test: greeting tier + motive want in the people's register + site description line + opposition as the giver knows it + twist line. If a writer cannot assemble a paragraph from those five without adding a sixth thing out of their own head, the tables are short a column, and the fix is a column and not a hand-written quest.
