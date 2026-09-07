# Critic — Round 2

Judged against `rpg_design_prompt.txt` and against my own round 1 report. I read all ten bible files in
full, counted every table the engine claims to print, rolled a sixteenth and a seventeenth quest from
those tables by hand, re-added the renown ledger against the deed table, re-ran the offline clock with a
calculator, played three paper sessions (one as a Mage, one as a Rogue), and re-walked the standing road
and the smell checklist. Every claim below cites a file and a section.

**Verdict up front: this round does not pass.** No line reaches 8.5. But it is a large, honest round:
five lines move up, one moves down, one holds, and the round-one design-smell hit is cleared outright.
The single structural fact of round one — *the bible counts its tables instead of writing them, and
traces its clock instead of running it* — is **no longer true**. The tables are printed and I checked
every count; the clock is rebuilt and every gap divides exactly by four. What replaces it is a smaller
and more ordinary problem: **the new tables were written but not yet used to re-derive the documents
that depend on them**, and **five of the ten files were not opened this round**, so the numbers under
them now disagree with the numbers above them.

---

## 1. The reproducibility test: two quests rolled from the printed tables

Round one's finding was that I could not generate a thirteenth quest because the tables did not exist.
This round I generated two, using only `ADVENTURE_ENGINE` §3.1–§3.12 and four dice, taking neither the
file's own three worked rolls (§7.5, Q13–Q15) nor any of the twelve showcase quests as a model. Every
roll, every failed precondition and every re-roll is shown. I did not choose the outcomes; where a roll
sent me somewhere awkward I went there and reported what I found.

**First, the file's own three rolls check out.** Before rolling my own I verified Q13, Q14 and Q15
backwards against the printed tables. Q13's `d96 = 26` really is **Rowe** (§3.9, Vael given, row 25–36,
second entry) and byname 14 really is **Weirman** (row 13–24, second entry); Q14's `d48 = 14` really is
**Habb** (§3.9, Skerrow, row 13–24, second entry); every trigger, motive, giver-role, opposition, twist
and verb index lands on the row the file says it lands on; Q14's honest re-roll (T08 fails because a
Skerrow foreman "holds terms, not orders") is a real precondition failure honestly shown. **This is the
thing round one said was impossible, and it is now possible.**

### 1.1 Quest sixteen — *The Well Nobody Blessed*

*State:* a run in which the hero did V3, V2 and the Pell letter but never took V1 or H2, so the baseline
season (`FIRST_REGION` §5) stands: `well_unblessed` since Thaw 1, `wheel_stopped` and `dam` still up,
Ilune *imprisoned* at Wickery since Thaw 13, `contract(ash strip) unwitnessed` since Thaw 16. Hero:
**Hand**, renown 96, Quiet +0, Stair +5, Moot +10. Day: **Thaw 18, Sallowford** — a **Stillday**
(`FIRST_REGION` §5, flags) with nothing dated against it in the season table.

| Step | Die | Roll | Row | Check |
|---|---|---|---|---|
| Trigger | d36 | **30** | TR30 `keeper_absent`, `ring_unkept`, `ward_failed` | not live — Ondrin and Sarane are both at the ring (`FIRST_REGION` §3 rows 10–11); Ilune is a watcher, not a keeper. **Re-roll** (§3.12 step 1) |
| Trigger | d36 | **4** | **TR04 `well_unblessed`** | live at S01 since Thaw 1 ✔ |
| Motive | d3 of TR04's {M31, M03, M11} | **2** | M03 *the-water-is-wrong* | cause list contains TR04 ✔, stake real ✔ — **but** the only achievable half of M03's want here is the mill race, whose signature would be `(G07, investigate, ST3, O03, …)` against V1's `(G03, investigate, ST1, O03, place)`: 3 of 5 fields differ, which **fails §6 rule 1**. V1 was offered on Thaw 6 in this run. **Re-roll** |
| Motive | d3 | **1** | **M31 *the-keeper-will-not-come-down*** | cause list TR04, TR30, TR25 contains TR04 ✔; wants "an Ulder brought down for the blessing, **or their reason carried back**" — the second half is still achievable eighteen days after Firstwater ✔ |
| Giver | d3 of M31's {G09, G07, G01} | **1** | **G09 reeve** → **Idony Sallow** | not dead, fled or at *hates*; at *owes* (w9, row 5, Thaw 11) ✔ |
| Place | none | — | **S23** the Rudd Stones (where the condition can be undone, §3.12 step 4); giver's site **S01** Sallowford | ✔ |
| Opposition | none (state names it) | — | **O15 a refusal** — Ondrin, standing still | ✔ the kind that cannot be fought |
| Twist | d30 | **19** | T19 *a warning from the old people* | precondition passes (Hild is a Vael taught by an Ulder, in the village) — **but T19 was used by V3 on Thaw 1**, and §6 rule 2 forbids a twist entry inside twelve offers. **Re-roll** |
| Twist | d30 | **25** | **T25 *the festival is in the way*** | precondition: "a Stillday falls inside the deadline" — Thaw 18 **is** a Stillday ✔ |
| Verbs | M31's list | both (the twist adds a step) | ***parley, carry*** | *choose* not used alone ✔ |
| Tier | — | — | Hand (renown 96); stake **ST6** (a truth, and who knows it); 1–2 marks, 150–250 XP | ✔ |

*Signature* `(G09, parley, ST6, O15, season)` — differs from all fifteen in four or five fields ✔

*Journal (assembled by §3.12 step 9: greeting tier* owes *→ M31's want in the Vael register of §3.3 →
S01's fair-day description line → O15 as the giver knows it → T25's line):*

> "Idony Sallow's door is open on a room where a fire is being kept in, and there is smoke off every roof
> in Sallowford, because it is Stillday and nobody is anywhere else. 'Whatever you need — no. It's what I
> need. Eighteen days and no Ulder down to that well. Hild boils everything and half the village drinks it
> anyway, and by Longsun somebody will say the flux came out of that water, and then it is not a well, it
> is a grievance, and it is mine. My grandmother could not have told you what the blessing does and neither
> can I. Go up to the stones and ask Ondrin why he did not come. If he will not come now, bring me the
> reason, by my hearth, so that I have something to say on the green.' Reyne Gorse, at the gate: 'It's
> Stillday. He'll not open his mouth today, and to him you're a stranger.'"

The street gets **R07** the same day (§3.10): *"No Ulder at the well this Firstwater. First time anyone
can remember. It'll be a sour year."*

*Outcomes:* **Carry his reason back** — the Quiet held the Rudd for ten days against a Skerrow
timber-slide and the blessing was the price: row 5 `carried_kin_word`, w7, Ondrin +2 (w9, reach 5, a new
head), Idony +2 (already counted); `village_knows_why`; Sallowford's rumour tone goes from sour to wary;
Quiet +5; 15 bits and the Moot's ledger closed on the well for the season. **Fetch him down anyway** —
needs Quiet ≥ +10 or `ondrin_owed`, neither of which this run holds, or a Mage who Reads the ring with
leave: `well_blessed`, the sour state clears, Quiet +10. **Say yes and not go** — the state persists and
Sallowford's willingness falls for twenty days. **Tell the village the reason in the wrong words** — the
Quiet's regard in the village drops and the Holds gain by it.

### 1.2 Quest seventeen — *The Boat With A Name In It*

*State:* the traced Fighter's campaign continued into **Green 41, Wickery quay**, an ordinary day with
nothing in any table against it. `shelf_dry` is on (a Green flag, `WORLD` §2.7), so the Salted range
further and layer 1's hounds run in packs of four rather than V3's one. `well_ring_intact` is held,
`marrock_refuses_court_bronze` is set, `body_unfetched` has been a state of S18 since 607. Hero:
**Name**, renown 210. Party: Gulla (Shield), Corva (Bow).

| Step | Die | Roll | Row | Check |
|---|---|---|---|---|
| Trigger | d36 | **24** | **TR24 `companion_agenda_near`** | live: Gulla's agenda-object is the bronze in the Salt Hall, two hours across the Shelf ✔ |
| Motive | d3 of TR24's {M48, M24, M28} | **2** | **M24 *my-brother-is-down-there*** | cause list TR34, TR15, TR24 contains TR24 ✔; stake real — S18 holds `body_unfetched` and `FIRST_REGION` §6 puts Kit's brother's boat in layer 1 ✔ |
| Giver | d3 of M24's {G12, G11, G01} | **1** | **G12 salvager/fence** → **Kit Ashby** | reach 5, regard +20, not at *hates* ✔ |
| Place | none | — | **S18** the Drowned Steps (the cause); **S10** the quay (giver) | ✔ |
| Opposition | none (state names it) | — | **O10 salt-hound pack** (two to four; four, because `shelf_dry`) with **O16 the ground and the season** — salt air, oil, the mud at half speed | ✔ |
| Twist | d30 | **21** | T21 *the Salted was someone* | precondition wants an identifiable Salted — a name in a ledger, a ring, kin alive. The region names no husk. **Fails; re-roll** |
| Twist | d30 | **12** | **T12 *the companion knows the place*** | precondition: a party companion's agenda names the site ✔ (Gulla's is the Court) |
| Verbs | M24's list | both | ***descend, search*** | ✔ |
| Tier | — | — | Name (renown 210); stake **ST2** (a person); 3–6 marks, 300–500 XP | ✔ |

*Signature* `(G12, descend, ST2, O10, agenda)` — four or five fields from all fifteen ✔ **in this run**;
see the finding below.

*Journal:*

> "Kit Ashby has boats on the mud and the fish-hall loud behind her and she is looking at neither. 'Gulla's
> been at me a week about that hall. If you're taking her down you'll go past the second stair, and there's
> a boat lying over on its side down there with a name cut in the thwart. Four years I have paid other
> people not to go past it. My mother still sets a place at Longsun and I would like her to stop. The mud's
> dry this month, so it isn't two hounds any more, it's four, and they're up on the flags where the walking
> is good. By my hearth, I am not asking you to carry me down there. I am asking you to bring him up.'"

The street gets **R33** (§3.10): *"There's a boat down there with a name cut in it. I'm not going past it
again."*

*Outcomes:* **Bring him up** — **row 24 `brought_the_dead_home`**, w8, Kit as kin +2 → w10; clears
`missing(Ashby)`, writes `grave(Wickery)`; Wrack +5; a grave on the map and, in the row's own words, "kin
who will hide the hero". **Bring him up and cut the six sacks of wall bronze on the way** — row 53
`took_the_bronze`, w6, Quiet −20, Holds −15, and because `marrock_refuses_court_bronze` is already set,
the only buyer is Kit's back room at her fifth: the hero fences the grave-goods to the sister. **Take
Gulla's hour in the hall first** — three to five husks against `PR ≈ 110`: Even to Overmatched, and a
companion down here is row 49 `left_them_below`. **Say yes and not go** — the boat is still there and so
is the place at the table.

### 1.3 Verdict on the two

**They read as authored, and the tables did most of the work.** Q17 in particular is a quest I could not
have written from round one's document set and did not write from my own head: the joint — *a
companion's errand takes the party past a different person's dead* — comes out of TR24 meeting M24, and
the deed table had **row 24 waiting with the note "Kit Ashby's brother is this deed waiting to happen"**
before I rolled it. R33 was in the rumour table. The season flag turned two hounds into four without my
deciding it. The place is the cause. Nobody is generic. That is line 3 doing the job it exists for, and
it is the largest single improvement in this round.

**Four things went wrong while I did it, and all four are findings, not nits.**

1. **Fifteen of the 110 trigger→motive links in §3.1 are broken.** §3.12 step 2 requires that "the
   motive's cause list contains the trigger." I checked every link in §3.1 against every cause list in
   §3.2. These fifteen fail: TR01→M12, TR05→M01, TR10→M45, TR16→M23, TR17→M24, TR19→M35, TR25→M36,
   TR28→M38, TR29→M27, TR29→M44, TR30→M19, TR32→M09, TR34→M20, TR35→M47, TR36→M09. A hand-roller
   re-rolls on 13.6% of motive draws and the engine as written would refuse those pairs. The two tables
   were authored separately and never cross-validated. *(Note the irony: my own Q17 is built on
   TR24→M24, which is legal, while the neighbouring TR17→M24 is not.)*
2. **Twist families are too few and too lopsided for §6's new rule.** The thirty twists split kin 2,
   debt 2, place 4, agenda **8**, paper 5, old 3, season 3, door 3. §6 rule 2 forbids a family "twice
   inside four" — but *agenda* is 27% of the table and its two commonest preconditions (a party
   companion's agenda names the site; a companion objects) are true almost whenever the party is a
   party. With a three-re-roll cap, agenda will be the only passing twist often enough that the rule is
   unsatisfiable. My Q17 drew agenda; §7.5's Q13 and Q14 both drew *season*, back to back, in the file's
   own demonstration.
3. **`descend` and `witness` each have one site family behind them in region one**, so any second Court
   quest collides on §6 rule 1 unless its twist family differs. Q17 `(G12, descend, ST2, O10, agenda)`
   against Vo2 `(G14, descend, ST5, O08, agenda)` differs in only 3 of 5 and **would be refused** in any
   campaign that had offered Vo2. Mine stands only because this run kept the ring and Vo2 never fired.
4. **The prose assembly loses its last sentence whenever a twist's line is wrong.** T12's printed line is
   "I've been down there. I'll show you" — and Gulla has *not* been down there (`FIRST_REGION` §3 row 13:
   "Thaw 27 on: **asks the hero to take her** to the Court"). §8.4's mitigation says a drifted precondition
   "drops the twist and re-phrases" — but each twist has exactly **one** line and there is no rule for
   producing the re-phrase. Step 9's five-part assembly becomes a four-part assembly with a hole where
   the closer was. I wrote Q17's closing sentence myself; §8.4's own test ("if a writer cannot assemble a
   paragraph from those five without adding a sixth thing out of their own head, the tables are short a
   column") is failed here, by the file's own standard.

---

## 2. Arithmetic verification

I added everything by hand. Two of the three big rebuilds are **correct to the digit**. The third is not.

### 2.1 The offline clock (`FIRST_REGION` §7.1) — correct, all of it

Round one's finding was that six of seven gaps broke the four-hours-per-real-hour rule. **All eight gaps
in the rebuilt table are exact and none exceeds the 168-hour cap:**

19×4=76 → Thaw 3 14:00 + 76 h = Thaw 6 18:00 ✔ · 12×4=48 → Thaw 11 12:00 ✔ · 6¼×4=25 → Thaw 12 20:00 ✔ ·
22½×4=90 → Thaw 20 14:00 ✔ · 21¼×4=85 → Thaw 27 08:00 ✔ · 14½×4=58 → Thaw 33 06:00 ✔ · 3×4=12 → Thaw 33
20:00 ✔ · 22½×4=90 → Thaw 39 14:00 ✔.

Every session's span equals open play + travel + rest + verb-days (56, 66, 7, 96, 77, 84, 2, 48, 78 —
all nine check), every open-play figure × 2 minutes is inside the stated real length, the column totals
are right (293 + 33 + 170 + 18 = 514), the real-time total is exactly 20 h 00 (1,200 minutes), and
514 + 484 = 998 world hours = 41 d 14 h, which is Thaw 1 06:00 → Thaw 42 20:00. **Round-one issue 5 is
fixed and it is the cleanest fix in the round.** One nit: the "verb-days 6" in session one is a
*half*-day at the forge paying 4 bits, and neither `CLASSES` §2.5's Mend (a world day) nor `LIVING_WORLD`
row 57 (`worked_the_trade`, a world-day, 6–10 bits) has a half-day rate.

### 2.2 The experience ledger (`FIRST_REGION` §7.3b) — correct

Quests 3,240 + fights 530 + discoveries 460 + witnessed 140 = **4,370**, each category re-adds, and I
walked the running total through all fourteen checkpoints (180 · 420 · 466 · 626 · 826 · 1,026 · 1,356 ·
1,645 · 2,257 · 2,299 · 2,359 · 3,361 · 3,420 · 4,370): every step is the stated items and nothing else.
Round-one issue on 4,343 vs 4,370 is closed and correctly closed against the economy file's model.

### 2.3 The renown ledger (`FIRST_REGION` §7.3a and `CLASSES` §6) — **four discrepancies**

The two ledgers agree with each other row for row, and every row's stated heads add to its stated total
(15, 28, 36, 70, 100, 124, 157, 179, 281, 294, 296, 287, 297, 289, 405, 395 — all check, and §6's inline
sum `124 + 33 + 22 + 102 + 13 + 2 − 9 + 10 − 8 + 116 = 405` is right). But both files state that the
deed table governs (`FIRST_REGION` preamble: "Where a number here disagrees … they govern and this file
is wrong"), and **the ledger does not reproduce from the printed rows.**

**Discrepancy 1, and the first one I found — Marrock is twenty renown missing from Thaw 7.** The Thaw
7–8 row cites rows 2 and 27 and adds "Bram 2, Corva 2, Ondrin 5, Rukk 2, 2 hewers 2". `LIVING_WORLD` row
27 `broke_our_work` names its receivers as "**the crew present, the foreman (+2), the owning power's
factor**". The Holds' factor in this region is **Marrock of Thrum, reach 20** (`FIRST_REGION` §3 row 18).
By the printed row he takes a **w6** memory on Thaw 7 and counts from that dawn. The ledger instead
introduces Marrock on **Thaw 16** as "w2 → w6, now counting" — a w2 sighting from the Post on Thaw 14 —
and never explains where row 27's factor write went. **Every renown figure from Thaw 7 to Thaw 16 is
twenty light**: Hand would be crossed at 56 rather than 36, and the Name crossing on Thaw 13 would read
144, not 124.

**Discrepancy 2 — Ondrin's five comes from no row at all.** The same Thaw 7–8 row cites only rows 2
and 27. Row 2 `saved_livelihood` names "the owner (+2), the household" (Bram, Corva). Row 27 names the
crew, the foreman and the factor (2 hewers, Rukk, Marrock). **Neither names Ondrin**, whose entire
involvement is that he loosed a river when asked — a *parley*, for which the 64-row table has no entry
(see §5 below). `ADVENTURE_ENGINE` V1 writes that branch as "Quiet regard +10, opens door `ondrin_owed`"
with **no act tag and no memory weight**, so there is nothing to count and the ledger counts 5 anyway.

**Discrepancy 3 — Drusk should come back into range on Thaw 34 and does not.** The Thaw 34 row cites
rows 7, 9 and **12**. Row 12 `spared_them` writes w9 to "**the spared (+2**, and +2 more if their life),
their band, their power's factor" — Drusk Fennick, reach 5, who was decayed out on Thaw 29 and is now
re-written at w10 (capped). The ledger adds "Orsa 2" from his band and omits Drusk. **Renown on Thaw 34
is 410, not 405, and 400 at twenty hours, not 395.** (If a *fled* NPC is meant to stop counting, no file
says so, and Drusk holds a weight-10 memory of the person who spared him.)

**Discrepancy 4 — Merrin Hale's decay is missed on Thaw 33.** Row 61 `posted`, w3, is taken by "every
instantiated NPC whose schedule passes the board that day, **and** up to eight promoted folk". Merrin
Hale (reach 5, named NPC 21) keeps the board 8–12 and is added on Thaw 23. w3 loses one every ten days,
so on Thaw 33 she falls to w2 exactly as the eight folk do. The Thaw 33 decay row removes the eight and
keeps Merrin. **Renown on Thaw 33 is 284, not 289.**

**Three schedule contradictions inside the same trace**, of exactly the kind round one caught with Kit
(and which was fixed for her Thaw 20 scene):

- **Garrow Tull, Thaw 1, ~21:00.** The ledger's first row counts "Garrow at the forge door as the flock
  came through, w6, reach 2". The drove reaches Gorse End at 22:00 having come up through Sallowford;
  Garrow's schedule (§3 row 1) is 6–18 forge, 18–21 Ford Inn, 21–6 home. He is not at the forge door at
  any hour that flock could have passed it.
- **Vesk Idren, Thaw 9, ~10:00–11:00.** "The counting-house: Idren takes the coin without looking up."
  His schedule (§3 row 15) is 10–12 **the quay (weighing)**.
- **Kit Ashby, Thaw 9, ~10:00–11:00.** "Kit Ashby watches from the back room." Her schedule (§3 row 20)
  is 10–14 **the Shelf**; the back room is her 16–22 block.

**One world event with no cause.** The Thaw 35→39 away page announces "The Salt Pans have closed: a
Salted thing walked into them by day." In the baseline (§5) that happens on Thaw 66 and its cause is
stated in §6: `layer3_open` on Thaw 34 → the nine wake one a day → `salted_walking` by Thaw 40. **In this
run the well-ring was kept on Thaw 22, layer 3 is sealed, and `shelf_dry` is a Green flag**, so TR17's
two setters ("a seal cut; the Shelf dry") are both false. The trace's own signature achievement is
undone by its own away page four days later.

**Two draft weights survive in `ADVENTURE_ENGINE` §7** that the deed table contradicts. V2 writes "Idony
`(hero, carried_duty, 6)`" where row 4 `carried_the_dues` is **w4** (and both ledgers use 4, and the whole
Thaw 29 decay row depends on 4). V3 writes "Tobbin `(hero, helped_find_flock, 6)`, Reyne `(hero,
helped, 4)`" where row 1 `found_stock` gives the herder **w8** and the owner **w6** (and both ledgers use
8 and 6). The showcase quests were not recomputed against the table that now governs them.

---

## 3. Three paper sessions, with holes

Traced strictly from the documents. A Rogue in the first, a Mage in the second, a Rogue in the third —
and none of them is one the bible already writes. `[HOLE: …]` marks where I had to invent.

### 3.1 The three-minute session — a Rogue's first three minutes, Thaw 1 06:00

The app opens cold.

`[HOLE 1: the creation screen. SESSION_UX §8 still counts "creation" among nine screens and §1 still
does not describe it; FIRST_REGION §7.2 still says only "Creation: name, trade smith, class Fighter."
DECISIONS logs it open rather than fixing it. This is the first screen every player ever sees.]`

06:00, the well: the Firstwater anchor — Idony waiting for an Ulder who does not come, Sabel riding
through with the Stair's book, Reyne shouting from the pasture. This is dialogue and therefore paused
(`LIVING_WORLD` §1). 06:00→07:00 in the open is one world hour, two real minutes. At 07:00 Tobbin behind
the smithy: **V3 accepted**. `FIRST_REGION` §7.2 now marks this explicitly as where the first three
minutes end — round one's complaint that no hour-one three-minute session existed is **answered**, and
the arithmetic works.

A Rogue has a second option the trace does not use: **Listen** at Sallowford's well, one of the nine
listed listening spots (`CLASSES` §2.5), one world hour, 2 bits. Its needs list wants "two or more NPCs
at that site in that hour by their schedules."

`[HOLE 2: the Firstwater override has no hours. FIRST_REGION §7.2 says "everyone is at the well because
it is Firstwater's hour, an override"; no schedule in §3 carries a Firstwater variant, and §3 states only
weekday, Stillday and condition variants. I cannot tell whether anyone is still at the well at 07:00,
which is precisely what the Rogue's first verb needs to know.]`

`[HOLE 3: the session ends with no world change. SESSION_UX §3 opens with "Every session ends with a
world change the player can name," and the brief requires it of the three-minute session by name.
FIRST_REGION §7.2 offers "a quest accepted, a shepherd's name in the journal and a marker seven miles
down the valley" — no deed is written, no site state flips, no memory is created, and the renown ledger's
first entry is Thaw 1 **22:00**, fifteen world hours later. The hour-one three-minute session now exists
and does not meet the rule it was written to meet.]`

**Completes, with three holes.** (Round one: five, and the session did not complete.)

### 3.2 The fifteen-minute session — a **Mage** playing V1, Thaw 6–7

Not the file's Mage session (H2, `CLASSES` §2.6), which is good and which I checked separately; this is
`SESSION_UX` §3's own fifteen-minute example, which is written for a Fighter, played by the class that is
supposed to have another road through it.

Thaw 6 dusk, the Ford Inn: Bram, idle-angry by his `wheel_stopped` override ✔ (schedule §3 row 3
supports it). Hild by the fire with the second cause ✔. Thaw 7, four hours up the Wend at half speed to
the Hewers' Camp ✔ (`roads_slow`, §1's table). Rukk states Thrum's claim. Now the Mage's answer.

`[HOLE 4: the Mage has no rule for* break*. ADVENTURE_ENGINE §3.8's verb table gives the Mage's answer to
*break* as "Draw the water through", and V1's own outcome line offers "Mage: Draw the pooled water
through it." CLASSES §2.5 — which is this round's fix, and a good one — gives the Mage exactly four field
verbs. **Dry** needs "an enclosed room, and somewhere for the water to go" and returns `room_dry`; a
float-pond behind a log dam is neither. **Flood** needs "a held body of water above the target" and
returns `site_flooded` for a span of hours, not `dam = broken`. Neither produces V1's stated state. The
verbs were given rules and the uses the other files make of them were not checked against those rules.]`

`[HOLE 5: Mist is a field verb in two tables and a combat ability in the third. CLASSES §2's verb table
gives the Mage's answer to *hide* as "Mist and move by night" and to *carry* as "move by Mist";
ADVENTURE_ENGINE §3.8 repeats both. §2.5 does not list Mist among the Mage's four and gives it no cost,
duration, needs, return or failure outside the three-second combat fog in §2. Same for the Fighter's
"Rally the village" as the answer to *answer*, and the Rogue's "pick the lock instead" as the answer to
*break* — neither Rally-as-a-field-verb nor any lock-picking exists in §2.5.]`

I take the second road instead: up to the Rudd Stones (five hours, ten at Thaw speed) and **Read** the
ring. Needs: Age-of-Stone stone ✔, and for a **kept** ring the keeper's leave — Ondrin is at the ring at
all hours (§3 row 10) ✔. 15 water, 30 minutes, 5 Salt because the moor stone is dry ✔. Returns "which
river a ring can hold or loose" ✔ — exactly the fact V1 needs. Then I ask him to loose it.

`[HOLE 6: no deed row for a refusal met, which is the *parley* verb's whole business. Fourteen of
forty-eight motives carry *parley*; O15 "a refusal" is one of two opposition kinds that cannot be fought;
and the 64-row deed table has no entry for talking a standing person into moving. The nearest three are
row 5 `carried_kin_word` (a word carried, not a mind changed), row 16 `healed_the_house` (whose stated
conditions are "flux, flood, fire damage") and row 21 `brokered` (a Parley the hero *arranged that both
sides signed*, w9, writing to both factors and both seats — far too heavy for a well). V1 therefore
writes Ondrin's branch with a regard delta, a door flag and no memory at all, and the renown ledger
counts him anyway (§2.3, discrepancy 2). There is also no mirror to row 19 `kept_word`: a promise made
aloud and broken has no row, which is why Q13's own fourth outcome has to invent `said_he_would` at w3.]`

`[HOLE 7: still no wait or pass-time action. LIVING_WORLD §1 still gives three advances — open play at
two real minutes to the hour, map travel, and rest to the next dawn. V1's Rogue branch is "cut the
slide-ropes at night"; §7.5's Q14, written this round, has "cut the two binding withies at the right
hour"; H2's second branch is "move her by night"; CLASSES §2.5 prices Listen and Shadow by the hour and
Forge by the document. DECISIONS logs this open. Rest solves a Stillday (it lands on the next dawn); it
cannot deliver dusk.]`

**Completes on the Read road, with four holes.** (Round one: four, on H2.)

### 3.3 The evening session — a **Rogue** running Q17, Green 41–42

Thaw's roads are long gone; the Shelf is dry. 14:00 Wickery quay, Kit's ask (§1.2 above). 16:00
**Listen** in the Post's back room to learn where the Stair's new salvage crew is — Kit 16–22 and Jory
always ✔, two NPCs, the meeting tick read at certainty ✔. 06:00 the next morning, four miles of Shelf
walked at 2 mph (2 hours) to the outer stones; three flasks bought at 3 bits (`PROGRESSION` §4) against
`FIRST_REGION` §6's "oil burns fast in the salt air (half duration)".

The Drowned Steps: four hounds instead of V3's one, because `shelf_dry`. Slip, Snare, Powder — the
Rogue's arc handles hounds cleanly (`COMBAT` §1: salt-hound 45/0, weak to Fling ×2; the Rogue has no
Fling and does not need one). At the inner stair, the husk.

`[HOLE 8: armour and multiplier order, unchanged from round one and now logged as open in DECISIONS. A
tier-2 Mark on the husk (armour 3) is either (9×2)−3 = 15 or (9−3)×2 = 12; a Slip follow-up at ×3 is 24
or 18. On the salt-warden (armour 5) it is 13 or 8. COMBAT §1 says only "Armour subtracts flat from
every hit". This is a 50–100% swing on every armoured enemy in the region and it decides whether the
Rogue's descent is possible at all.]`

I do what `CLASSES` §2.6's Rogue session does — Powder the husk and walk past it on the flagstones. This
is a real answer and it is now played, which is more than round one had. But `COMBAT` §2 rule 2 still
reads "No enemy is immune to a whole class. Immunities are to one ability, and the counter is always on
the same class's arc," and `COMBAT` §1's husk row still lists its weaknesses as "Wring ×2; Crack/Break
strips crust" with nothing on the Rogue's arc. `CLASSES` Decision 7 declines to change it and hands the
question to COMBAT; COMBAT was not opened this round. The rule and the table still contradict each other.

The boat, the body, the carry out (Corva at half speed; a Rogue is not a Fighter). Row 24 fires cleanly.
Then the choice about the six sacks in the walls, which is the best beat in the quest and comes free from
`marrock_refuses_court_bronze`.

`[HOLE 9: the twist's line is false and there is no re-phrase. §1.2 above. T12 says "I've been down
there"; Gulla has not.]`

`[HOLE 10: no row for a promise broken.]` *(Counted once, in §3.2, hole 6; listed here because this
session's "say yes and not go" branch hits it again.)*

`[HOLE 11: §4's down-scaling rule is stated and never worked. M24 is an H–N motive. Run this quest for
the Voice hero the twenty-hour trace actually produces and §4 says "A Villager quest is never re-offered
to a Voice hero as a stake; instead the same trigger becomes a Voice quest with the village's problem
folded in as a twist" — with no mechanism for choosing the Voice-scale stake and no worked example
anywhere. All fifteen quests in the file are offered at the hero's tier or one above it. The
down-scale case is the *common* case for a hero in a valley he has already worked, and FIRST_REGION
§7.2's own last three hours are exactly it — where the file resolves it by hand-writing a thirteenth
quest, "Corrow's Terms", rather than by the rule.]`

`[HOLE 12: layer 3 is designed and never played. FIRST_REGION §6's five rooms, the one-Salted-a-day
waking clock, the rising Sump, oil at a quarter and three stated returns are a real design and a real
fix of round-one issue 9. There is no session example anywhere in the bible, and the resource maths
cannot be checked from what is written: "a full descent and return needs six flasks" at thirty minutes
each is three hours of light, against a descent whose length in world hours is never stated.]`

**Completes, with five holes.**

### 3.4 Hole count

| Session | Class | Holes |
|---|---|---|
| 3-min | Rogue | 3 — creation screen; the Firstwater override's hours; no world change at the end |
| 15-min | Mage | 4 — the Mage's *break*; Mist/Rally/lock-pick as unresolved field verbs; no deed row for *parley* or a broken promise; no wait action |
| Evening | Rogue | 5 — armour/multiplier order; the false twist line; the missing row (again); §4's unworked down-scale; layer 3 unplayed |

**Twelve holes, the same count as round one — but a different order of hole.** Round one's twelve were
"the rule does not exist"; nine of these twelve are "the rule exists and does not cover the use that
another file makes of it." Three (creation, the wait action, the armour order) are round one's holes
verbatim, now logged in `DECISIONS` as open rather than fixed.

---

## 4. The standing trace

Followed through `CLASSES` §5–6 and `FIRST_REGION` §7.3a. At each milestone: what did the player **do**,
and how does the **world** show it?

**The measurement now has a model, and that is the round's second-biggest fix.** `LIVING_WORLD` §5 and
`CLASSES` §5 both derive the same ceiling from the same population: 1,020 people in the valley, 85
instantiated (25 named + a 60-slot promoted pool that evicts its weakest memory), named reach summing to
368, promoted folk 60–120, High Reeve Tull 100 → **528–588, about 450 in practice**. The floors were then
rescaled *to that number*: Hand 20, Name 120, Voice 350, Force 900. Round one's Voice-500-against-a-
588-ceiling and Force-2,000-against-nothing are gone. Renown now counts only memories at weight 3 or
more, which is what stops a board notice being worth a town — and the deed table's `counts/gone` column
(w3 = 10/30, w6 = 60/80, w9 = 150/170, w10 never) makes decay a schedule rather than a mood. **This is
the best single idea in the bible and it is now arithmetically honest.**

**Milestone 1 — Villager, 0.** Unchanged, and correctly not a milestone.

**Milestone 2 — Hand, 36 on Thaw 8.** Did: the flock off the Shelf; the dam broken and the river loosed;
a Wrack picket driven off Wat Hobb's barn. World: Reyne uses the *heard* line before he has met the hero;
Bram at *owes*; Wat Hobb's greeting changes, and Wat Hobb hears every cart. Earned, and shown by mouths.
*But the arithmetic is 20 light from Thaw 7* (§2.3, discrepancy 1) and 5 of the 36 come from a row that
does not exist (discrepancy 2).

**Milestone 3 — Name, 124 on Thaw 13.** Did: the Quarter-day through a Wrack band; Pell's letter home;
Ilune hidden and walked to the stones. The file's own reading of the crossing is the sharpest sentence in
the standing system: *"The step that makes Name is not a big fight: it is the first three reeve-or-factor
heads. Sixty of the hundred and twenty-four is three people who each talk to twenty."* That is the
design explaining itself.

**Milestone 4 — Voice, 405 on Thaw 34. Halse Corrow's hundred is now earned.** This was round one's
sharpest complaint and `FIRST_REGION` §3's "The two heads worth a hundred, and what a leader's word is
worth" answers it in three moves, all of which hold up:

- The hundred has a **biography**, not a role: Corrow was Reeve of Wickery for eleven years to 606, and
  the hundred is counted — "about sixty Wrack on the Shelf who take his word as an order, and about
  forty in Wickery and on the Ring Road who were his people first: Kit Ashby's boats, four of Wat Hobb's
  carters, the quaymen, and every debtor family whose son is out on the mud."
- The **leader rule** (`LIVING_WORLD` §2) forbids the cheap road: a reach-100 NPC takes a memory only
  from a deed at their own seat, a deed that moves one of their power's three ranked goals, or a letter
  they wrote themselves. No rumour, no notice, no meeting tick reaches them.
- **Meeting Corrow writes nothing.** The dusk meeting at the outer stones is `came_and_looked` at weight
  2, and weight 2 does not travel. What writes is row 26 `kept_the_charge`, weight 10, never decaying,
  four hours later at the Salt Hall door — the Wrack's third ranked goal, done at Corrow's second seat.
  "A hero who takes N1's letter, crosses four miles of Shelf, meets Corrow, hears him out and goes home
  has 281 minus 100." **This is the correct answer and it is well made.** The trace shows the hundred
  landing on Thaw 22, not Thaw 20 or 21.

**Is the Voice crossing at 405 against 528–588 credible?** Yes, and better than credible — it is the
most interesting number in the design. Voice is two thirds of everything the valley can hold. Two heads
carry two hundred of it and **both were bought by going somewhere**: the Salt Hall door and the Rudd
Bridge. Twenty-seven points decayed away inside the same three weeks and the ledger shows them going.
Fifty of the sixty promoted slots are full, so the second notice is worth less than the first — and the
trace *says so*, in the file, as a design consequence. The best paragraph in the whole set is the last
one of §7.2: three real hours of the region's best quest, "Corrow's Terms", and **the ledger does not
move**, because every head in it is already counted. That is a designer showing you the ceiling from the
inside instead of hiding it.

**Milestone 5 — Force, 900, not reachable in one valley.** Now a model rather than a table row: five
seats at 440, the Rudd valley's survivors of decay at 135, two more valleys at 110 each, Fallgate 55,
the Moot's other reeves 60 = 910, over a 400-world-day campaign in which a w6 memory stops counting at 60
days and a w8 at 120. "A hero reaches Force by holding four valleys' great deeds at once, not by adding
up two hundred hours of errands." Round one asked for the fifth milestone to be traced; it is not traced,
but it is now *derived*, and the derivation is the thing that was missing.

**Verdict: the road is earned, the world shows it at every milestone, and the measurement is now honest
in its model and wrong in its arithmetic by 20 renown at Thaw 7, 5 at Thaw 33 and 5 at Thaw 34.** The
gap between "the ledger is a reading of the deed table" and "the ledger reproduces from the deed table"
is one afternoon's work and it is the difference between line 4 at 8.0 and line 4 at 8.5.

---

## 5. The eight rubric lines

### Line 1 — World: **8.0** *(round 1: 8.0)*

`world/WORLD.md` was **not opened this round** (4,533 words in both rounds), so this line is exactly what
I judged before: an original, coherent, drawable world with four peoples, five powers, three ages, a
one-page contract that Part Two honours heading by heading, and history that is load-bearing in play via
the age-tag rule — which is now *demonstrably* load-bearing, because every one of the 25 site types, 16
opposition kinds and 48 motives in `ADVENTURE_ENGINE` §3 carries an age tag and I used them. All four of
round one's defects are live: **no cause anywhere for the Still's continued fall**, which is the clock
that surfaces every dungeon; "the Stair" still names both the Kest road and the Kest company on the page
with no disambiguating clause; "the only way anyone gets in" still stands against §2.2's Skerrow breaking
in from outside (and `PITCH.md` repeats it); and the footer still claims **474 words** against a page I
count at **551** (round one counted 535; either way the claim is 13–16% out, for a second round).
*To 8.5:* the four things round one asked for, none of which needs a new idea.

### Line 2 — Living world: **8.0** *(7.5)*

**The 64-entry deed table is printed in full** (§4a 26 / §4b 30 / §4c 8 — I counted the rows), and it is
a serious artefact: act tag, base weight, a `counts/gone` life derived from the decay bands, receivers
beyond the standing rule, per-power regard with two stated multipliers, the state it writes and where it
surfaces. Round one's issue 4 is closed. **Every schedule closes twenty-four hours** with a stated
default (home asleep; with the band for people who have no home here), which is issue 15's first half.
The **planner-vs-dated-list seam** is resolved by declaration — "the dates below are the planner's output
for the Thaw-1 state, run forward with nobody playing … not a script the planner obeys" — plus one dawn
worked in full (`FIRST_REGION` §4, the Stair on Thaw 3, with goal distances × rank weights and four moves
priced, two of them illegal for stated reasons) and **five dates shown moving** when the hero moves the
state. The memory budget and the standing ceiling are reconciled. Against it: **the 60 map-event
templates are still counted and never printed** (§5, "a 60-entry template table per event type") — the
one place in this file where round one's exact complaint survives, and the away page reads from it; the
worked dawn is one of 450 power-days and only one of five planners is ever scored; the promoted pool's
eviction rule is stated and never shown evicting; and the deed table is not used as the vocabulary it
claims to be (§6, smell 13 below).
*To 8.5:* print the 60 map-event templates; work one ordinary dawn for the other four powers; show one
eviction from the promoted pool; make the quests' act tags the table's act tags.

### Line 3 — Adventure engine: **8.0** *(7.0)*

The biggest move in the round, and it is real. I counted every table and every count is honest: **36
triggers, 48 motives, 30 twists, 25 site types with 50 description lines, 16 opposition kinds, 14 giver
roles, 8 stake types, 12 verbs, 315 names, 60 rumours, 14 notices** — and the file's own "292 table rows
+ 315 names = 607" re-adds exactly. §8.2's "five counts that were wrong, and why" corrects **four counts
downward**, including the headline (1,200 lines → 607) and its own writer estimate (eight weeks → two),
and the reasoning is better design and not just smaller numbers: the **twelve-cell voice rule** replacing
576 per-motive phrasings is the right object, and the four voices of M07 prove it — a Vael miller, a
Skerrow hold-hand, a Kest factor and an Ulder keeper with one problem, and no two lines swappable. §3.12
is a genuine ten-step hand procedure and I ran it twice (§1). §7.5's three rolls are all checkable and
all correct. §5's empty-consequence rule is now enforced and the three round-one violations are written
out. Against it: **fifteen of 110 trigger→motive links are broken** (§1.3); **§6's new rules 2 and 3 are
broken by the file's own showcase** — `choose` still carries **six of twelve** against a rule capping any
verb at four, `break` still carries **zero**, and twist family *agenda* carries **five of twelve** with
four violations of "not twice inside four" (positions 4–5, 7–8, 5–7, 8–11), while §8.3 announces the
rules as the fix; **§7.5's own Q13 and Q14 are both `season`-family, back to back**; §4's down-scaling is
stated and never worked; the twist table's family distribution fights §6 structurally; each twist has one
line with no rule for the re-phrase its own risk section requires; and roughly 60% of the 315 names are a
visible alphabet walk (Ash · Bel · Cade · Dorn · Elt · Fay …), which is the tell of a table written to a
count.
*To 8.5:* fix the fifteen links; re-verb the twelve showcase quests so `choose` is at four and `break` at
one or two; re-twist them so no family repeats inside four; work §4's down-scale once; give every twist a
second line.

### Line 4 — Classes and standing: **8.0** *(6.5)*

**§2.5 is the best new writing in the round.** Twelve field verbs, each with inputs, state, a five-step
tick, cost, duration in world time, a needs list, what it returns, a ***falls short*** the player can
plan around and a ***goes wrong*** the world remembers, each of the latter tied to a numbered deed row.
The decision not to introduce a die outside combat is right, and the confirm sheet ("the cost, the world
hours, and the one state that would make it go wrong") is a better instrument than the check I asked for
in round one. Forge's three failure modes, one of which is invisible at the moment of use, is a genuinely
elegant piece of design. **§2.6 plays a Mage and a Rogue** at proper length, uses all eight of their field
verbs, fails one of each, and derives the renown at the end from the deed rows — which clears round one's
smell hit. The standing model now has a population behind it and the tiers were rescaled to it; the
dawn/deed recompute contradiction is stated once and obeyed in three files. Against it: the ledger in §6
does not reproduce from the deed table (§2.3 — four discrepancies, one of them 20 renown across nine
world days); §2's own verb table and `ADVENTURE_ENGINE` §3.8 still route **four** class answers through
abilities §2.5 does not resolve (Mist as a field verb, Rally as an answer, "Draw the water through" as
*break*, a Rogue lock-pick); the deed table has no row for *parley*, which fourteen motives carry, and no
mirror to `kept_word`; and N2's "20% chance by the Stair's temper" is now in direct contradiction with
§2.5's opening line, "Nothing outside combat is random in the Hearth."
*To 8.5:* re-derive the ledger head by head from the printed rows; add the missing rows; delete or
resolve the four unresolved verb answers; make N2 deterministic.

### Line 5 — Combat, dungeons and autobattle: **7.5** *(7.5)*

`systems/COMBAT.md` was **not opened this round** (4,687 words in both rounds). The file's own strengths
are as I found them: numbers with models that recompute, fifteen enemies each with a role, a telegraph, a
class weakness and a threat, an autobattle policy written as an implementable priority list, parity
defined operationally, and six encounter runs whose divergences are the right shape. What moved is in the
region file: **layer 3 is now designed** to the standard of layers 1–2 — five named rooms, a one-Salted-
a-day waking clock, a Sump that rises a foot per waking so the way in closes behind you, no water, oil at
a quarter, three stated returns including a Read that buys a season and explicitly not a cure — and the
11-vs-23 room count is reconciled by saying the two counts describe different objects, which they do.
Round-one issue 9 is closed, and `ADVENTURE_ENGINE` §5's new deferral rule ("the engine offers the same
branch with a deferral … rather than a door into an unbuilt room") generalises it correctly. But the two
combat defects are **unchanged and now openly declined**: the husk still has no Rogue-arc entry in
`COMBAT` §1's Weak-to column while §2 rule 2 still asserts that every immunity has a same-class counter,
and `CLASSES` Decision 7 says "the Rogue has no crust answer and is not given one" without amending the
rule that forbids it; and the armour/multiplier order is still unstated, still swinging a Rogue's Mark
50–100% on every armoured enemy in the region. Layer 3 is designed and never played (§3.3, hole 12), and
its resource maths cannot be checked.
*To 8.5:* amend `COMBAT` §2 rule 2 to say what it now means, or give the Rogue's arc a crust answer;
state the armour order in one sentence; play one descent into layer 3.

### Line 6 — Economy, session and UX: **7.0** *(7.5)*

**Down half a point.** `SESSION_UX.md` (2,520 words) and `PROGRESSION_ECONOMY.md` (2,308) were both
untouched, and the files that *were* rebuilt moved the numbers under them:

- `SESSION_UX` §3's **three-minute session** — the flagship example of the flagship session length —
  still runs the Thaw 11 errand as "Wickery → Sallowford, 3 hours; arrive Thaw 11, 10:00. Idony is at the
  reeve's table," and still says "the hearth glyph flickers from ember to flame — Sallowford knows the
  name … *World change:* a door opened and a tier gained." `FIRST_REGION` §7.1 **rebuilt this exact
  session** to six hours at Thaw speed arriving 18:00, which is when Idony leaves her table for the Ford
  Inn, and the new ledger crosses Hand on Thaw 9, two days earlier. The one example the rebuild had to
  carry with it is the one it did not.
- `PROGRESSION_ECONOMY` §5's fairness table still reads **renown 12** at hour 1 (ledger: 15), **~180** at
  hour 10 (ledger: 281–294), and §4 still reads "the Holds, at **−35**, will not yet sell" (§7.3c: −65).
- The **creation screen** and the **wait action** are both still unspecified and are now logged as open
  in `DECISIONS`.
- The hour-one three-minute session exists and ends with no world change (§3.1, hole 3).

Against that, three real gains: the **Stand contract now has a decision in it** ("whatever the schedules
and the powers' moves put through the gate is the hero's to judge … who is let in, whose cart is
searched, whose name goes in the watch-book") **and a hand-back rule**, which is the honest answer to a
rota in an offline-safe game and closes round one's closest brush with smell 9; a second three-minute
session exists (the Thaw 33 two-letter check-in, 8 real minutes) so the bible no longer prints one
session twice; and the store discipline and the not-sold list remain the best-written pages in the set.
*To 8.5:* rewrite `SESSION_UX` §3's three examples from the rebuilt trace; correct the three
`PROGRESSION_ECONOMY` numbers; specify creation; add a wait action; give the hour-one session a deed.

### Line 7 — Feasibility and honesty: **8.0** *(7.5)*

This round is unusually honest even by the previous round's standard. `ADVENTURE_ENGINE` §8.2 corrects
four of its own counts **downward** and explains each; `FIRST_REGION` §7.1 rebuilds the clock forwards
and prints "the three checks a reader can run", all three of which I ran and all three of which pass;
§7.3b itemises the XP total into the four categories the economy file already modelled; and the
ten-month plan is now defended not by an invented comparable but by a **falsifiable month-three
checkpoint with a named cut** — "the baseline season must reproduce in the text harness with no
hand-placed events; if it does not, ship with layer 3 sealed and Vo2's opening branch removed, which
costs five rooms, one encounter kind and one quest branch and nothing else." That is a better answer than
the comparable I asked for, and the risk list now names the thing most designers hide: "§7.1's twenty
hours are half open play and half dialogue, map, journal, shops and confirm sheets, and that is a claim
this design is making rather than hiding."

Against it: **`docs/STATUS.json` is stale** — `"round": 1`, round-one scores, round-one open issues that
this round closed, and round-one word counts (`ADVENTURE_ENGINE` at 6,001 against an actual 25,651). The
brief requires it current. The 60 map-event templates are still counted and unwritten. **Five of ten
files were not opened**, and the contradictions in line 6 are the direct cost. And the region file states
one world event with no cause in its own rules (the Thaw 39 Salted at the Salt Pans, §2.3).
*To 8.5:* bring `STATUS.json` current; print the map-event templates; re-derive the five untouched files'
numbers from the rebuilt ones; fix or explain the Thaw 39 away page.

### Line 8 — Design smells: **8.0** *(5.0)* — **no hit**

Round one's single hit (item 11) is cleared decisively: all twelve field verbs now appear in a played
session, and two of the three sessions are not Fighters. All sixteen items are clear, several of them
emphatically. Not higher because three items are one edit from being hits — see §6.

---

## 6. The design-smell checklist, item by item

| # | Smell | Verdict | Evidence |
|---|---|---|---|
| 1 | A world needing more than one page, or >4 peoples / >5 powers / >3 ages | **CLEAR** | `WORLD` Part One stands alone; four peoples (§2.3), five powers (§2.4), three ages (§2.2), and §2.9 forbids a fourth or a sixth forever. *Nit, twice now:* the page is 551 words (my count; round one's was 535) against the 474 the footer claims. |
| 2 | Gacha or energy under another name | **CLEAR** | `PROGRESSION` §6's not-sold list names every disguise and refuses it; §7 rule 6 forbids "daily anything"; the offline cap is seven days for everyone and "nobody can buy an eighth". Nothing added this round touches it. |
| 3 | Anything sold that buys power or skips the world | **CLEAR** | The store-line test ("every store line must name the in-world way to get the same thing, or be cosmetic") still holds line by line. |
| 4 | A chosen one, a prophecy, or a hero starting with standing | **CLEAR** | `CLASSES` §1: "Standing at creation is 0." §6 Milestone 1: "Did: nothing." |
| 5 | Factions that only react to the hero | **CLEAR — emphatically, and better than round one** | `LIVING_WORLD` §3: "Powers never read the hero's location and never wait for the hero." `FIRST_REGION` §5 still runs ninety days with nobody playing; **new this round**, §4 works one dawn of the planner in full with goal distances, rank weights, priced moves and two moves ruled illegal, and shows five of its own dated outputs moving when the hero moves the state. |
| 6 | Lore that never touches play | **CLEAR** | Every one of the 48 motives, 25 site types and 16 opposition kinds carries an age tag and states what only the Hearth could want; §3.2's preamble is the rule ("a debt in a Kest book, a river a stone ring can hold, salt in a Drawer's wrists"). |
| 7 | A generated quest that reads as a template, names nobody, or connects to nothing | **CLEAR** | Fifteen in the file and two of my own, all naming people with reasons on sites whose state caused them. The promotion rule forces a name; step 4 forbids a place that is not the cause. *Watch:* **O02 "cutters and deserters"** is explicitly the generic filler — "any: this is the fight the engine gives a tired party" — and names nobody. It is opposition, not a quest, so it is not a hit; it is the one row in §3.6 that could become one. |
| 8 | A class with no identity out of combat | **CLEAR — emphatically** | `CLASSES` §2.5 gives each of the twelve verbs a cost, a duration, needs, a return, a *falls short* and a *goes wrong*, and §2.6 plays all eight Mage and Rogue verbs. |
| 9 | A system with no decision in it | **CLEAR** | Round one's closest line, the Stand contract, now has one ("who is let in, whose cart is searched, whose name goes in the watch-book: each is its own deed") and a hand-back rule. *Nit:* **Drill** still has none — a day, a site, a Stillday, quality +1 — and its only decision is which town. |
| 10 | An autobattle strictly better or strictly worse than play | **CLEAR, narrowly** | `COMBAT` §7's three pairs are unchanged and remain the right shape: A, the AI is 2 s slower and 2 health better; B, 2 s faster and 11 water poorer; C, 8 s slower and one more ledger burned. Round one asked for a divergence leaving the world *better* on autobattle and there still is none, but B leaves the hero untouched and faster, which is close enough that the trade is not one-directional. |
| 11 | **A feature listed without a session example** — round one's hit | **CLEARED** | All twelve field verbs are now played: Fighter's Break ×3, Carry, Drill and Stand in `FIRST_REGION` §7.2; Mage's Ease, Dowse (twice, one failing), Flood and Read in `CLASSES` §2.6; Rogue's Listen (twice, one failing), Shadow, Forge (working, then failing two days later) and Fence in the same section. Companion agenda scenes are played (Corva's +40 on the quay; Ilune stepping out at the bridge). *Three watch items, none of which I fire:* layer 3 is designed and never played; **Vo3's `Parley` shape — the ending the twenty-hour trace actually sets up, via the `ledgers_to_be_read` door — is one clause with no journal text and no outcomes**, while only the `Raid` shape is written; and three of four festivals are honestly disclosed as having no scene. The Vo3 one is the closest, and it is issue 14 below. |
| 12 | Placeholder names | **CLEAR** | No stubs, no brackets, no "Faction 2". *Nit:* ~60% of the 315 names are an alphabet walk, which is a table written to a count rather than to a people — legible as filler but not as a placeholder. |
| 13 | Numbers without a model behind them | **CLEAR, but this is where the round's damage is** | The models are all there and most reproduce: `60 × L^1.6`, `PR = Σ(10+4L+5t)`, `ER = Σ threat`, `R = Σ reach`, the population count, the Force table, the deed table's decay bands, the offline clock. **What fails is the derivation, not the model** — §2.3's four renown discrepancies, the two draft weights in `ADVENTURE_ENGINE` §7, roughly forty act tags across the fifteen quests that are not rows in the printed 64 (`helped_find_flock` for row 1's `found_stock`; `carried_duty` for row 4's `carried_the_dues`; `told_us_first`, `kept_terms`, `said_he_would`, `dealt_straight`, `saved_my_yard` for nothing at all), the three `PROGRESSION_ECONOMY` numbers, and **N2's "20% chance by the Stair's temper" now standing in flat contradiction to `CLASSES` §2.5's "Nothing outside combat is random in the Hearth"** — the one die in the design that no model supports and one file now forbids. Also unmodelled: Q14's "30 water, **8 Salt**" for a Drawing worked beside a river, where §2.5 charges Salt only on a dry skin. A model that contradicts itself is still not the same smell as a number with no model, so this stays clear — but it is the first thing I would fix. |
| 14 | A screen that needs two hands or landscape | **CLEAR** | `SESSION_UX` §1–2 unchanged; the one out-of-corner touch is still declared optional. |
| 15 | Any name, place, god, race or artefact from another IP | **CLEAR** | I re-checked every proper noun added this round — 315 names, 25 site types, 12 ring names, three holds. All original. The Ulder remain structurally elf-adjacent and lift nothing. |
| 16 | "TBD" anywhere | **CLEAR** | Grepped all ten files: zero. |

**No hits.** Three watch items: item 11 (Vo3's Parley shape), item 13 (the derivation gap), item 7
(O02).

---

## 7. Round one's fifteen issues

| # | Round-one issue | Status | Evidence |
|---|---|---|---|
| 1 | Engine tables counted, never written | **FIXED** | I counted all of them: 36 / 48 / 30 / 25+50 / 16 / 14+8 / 12 / 315 / 60 / 14. §8.1's "292 rows + 315 names = 607" re-adds. I generated quests 16 and 17 from them (§1). |
| 2 | Twelve field verbs have no resolution rule | **FIXED** | `CLASSES` §2.5, each with cost, world-hours, needs, returns, *falls short*, *goes wrong* and a numbered deed row. *Residue:* four class answers in §2's table and `ADVENTURE_ENGINE` §3.8 still route through unresolved abilities (§3.2, hole 5). |
| 3 | Renown asserted, not derived; tiers exceed the population | **IMPROVED** | Population model (1,020 / 85 / 528–588) and rescaled floors (20 / 120 / 350 / 900) are real and correct. The ledger still does not reproduce from the rows: four discrepancies (§2.3). |
| 4 | The 64-entry deed table is counted and never printed | **FIXED** | `LIVING_WORLD` §4a–c, 26 + 30 + 8 = 64, each with weight, `counts/gone`, receivers, regard, writes and surfacing. |
| 5 | Six of seven offline advances break the clock rule | **FIXED** | All eight gaps × 4 exact; all nine session spans reconcile; totals reconcile to the world hour (§2.1). |
| 6 | Planner vs dated lists; 425 unaccounted power-days | **IMPROVED** | The planner is declared authoritative, one dawn is worked with scored moves, five dates are shown moving. One dawn of 450; one power of five. |
| 7 | The husk has no Rogue-arc answer; `COMBAT` §2 rule 2 broken | **UNCHANGED** | `COMBAT` not opened. `CLASSES` Decision 7 declines it and hands it back. The Rogue session plays a Powder-and-walk-past, which is a mitigation, not the rule's repair. |
| 8 | No wait or pass-time action | **UNCHANGED** | Logged open in `DECISIONS`. Q14, written this round, adds a new by-night branch ("cut the two binding withies at the right hour"). |
| 9 | Layer 3 undesigned while Vo2 opens it | **FIXED** | `FIRST_REGION` §6 "Layer 3, designed": five rooms, a waking clock, no resources, three stated returns; and `ADVENTURE_ENGINE` §5's deferral rule generalises it. Never played. |
| 10 | One three-minute session, printed twice, both mid-campaign | **IMPROVED** | An hour-one one (Thaw 1 06:00–07:00) and a second check-in (Thaw 33, two letters) exist. The hour-one one ends with no world change, and `SESSION_UX` §3 still prints the superseded Thaw 11 version. |
| 11 | The Still's continued fall has no cause | **UNCHANGED** | `WORLD` not opened. |
| 12 | "The Stair" ambiguous; "only way in" absolute; 474 words wrong | **UNCHANGED** | `WORLD` not opened; the page is 551 words by my count. |
| 13 | Dawn-recompute contradiction; two V3 renown lists | **IMPROVED** | The rule is stated once and obeyed in three files ("recomputed after every deed; the tier is read at dawn"), and the V3 list is one list in both ledgers. But `ADVENTURE_ENGINE` §7's V2 and V3 still print pre-deed-table weights (w6/w4 against rows 4 and 1). |
| 14 | Three branches with empty consequence lists | **FIXED** | V2's Gorse End road now writes `sallowford_marked_late` and three memories; V3's give-up writes `gorse_end_stock = short` and a Wrack feed; H2's failed Talk writes `ilune_imprisoned`, four memories and three regards. §5 states the general rule. |
| 15 | Nights unassigned; Kit contradicts her schedule | **IMPROVED** | All 25 schedules close 24 hours with a stated default, and Kit's letter hour is fixed. But the trace now breaks three other schedules (Garrow Thaw 1, Idren and Kit Thaw 9 — §2.3). |

**Six fixed, five improved, four unchanged.**

---

## 8. Ranked issues for round three

Most damaging first. Nine of the fifteen are half a day's arithmetic; that is the shape of this round.

| # | File · section | Issue | Fix direction |
|---|---|---|---|
| 1 | `slice/FIRST_REGION.md` §7.3a · `systems/CLASSES_AND_STANDING.md` §6 | The renown ledger does not reproduce from the deed table it says governs it: Marrock missing from Thaw 7 by row 27 (−20 for nine days), Ondrin's 5 from no row at all, Drusk missing on Thaw 34 by row 12 (+5), Merrin's decay missing on Thaw 33 (−5). | Re-derive every row head by head from the printed receivers, or state the exclusions as rules. |
| 2 | `systems/ADVENTURE_ENGINE.md` §3.1 vs §3.2 | Fifteen of 110 trigger→motive links are broken: the motive's own cause list does not contain the trigger that sends work to it. Listed in §1.3. | Add the missing trigger to each motive's cause list, or drop the link from §3.1. |
| 3 | `systems/ADVENTURE_ENGINE.md` §6 rules 2–3 vs §7.1–7.4 | The showcase breaks the rules §8.3 announces as the fix: `choose` 6 of 12 against a cap of 4, `break` 0 of 12; twist family *agenda* 5 of 12 with four "twice inside four" violations. §7.5's own Q13 and Q14 are both `season`. | Re-verb and re-twist the twelve, and re-roll one of Q13/Q14. |
| 4 | `systems/ADVENTURE_ENGINE.md` §7 · `systems/LIVING_WORLD.md` §4 | The showcase quests do not speak the deed table's language: ~40 free-text act tags that are not rows, and two weights that contradict rows 1 and 4. | Rewrite every consequence as `row N, weight w, receivers`. |
| 5 | `systems/LIVING_WORLD.md` §4 | No deed row for *parley* (14 motives carry it; O15 is one of two unfightable oppositions), no mirror to row 19 `kept_word` for a promise broken, and row 5's "the dividing power −5" is meaningless when both parties belong to one power. | Add two or three rows; the table has room. |
| 6 | `systems/SESSION_UX.md` §3 · `systems/PROGRESSION_ECONOMY.md` §4–5 | Untouched files whose numbers now contradict the rebuilt trace: the three-minute example (3 h / 10:00 / reeve's table vs 6 h / 18:00 / Ford Inn; ember→flame two days late), renown 12 and ~180, Holds −35. | Re-derive all three session examples and the fairness table from `FIRST_REGION` §7. |
| 7 | `systems/COMBAT.md` §1–2 | Armour vs multiplier order still unstated (a 50–100% swing on every armoured enemy); the husk's Weak-to column still has no Rogue entry while §2 rule 2 asserts one. | One sentence for the order; amend rule 2 to say "or a non-damage answer on the class's arc", and put Powder in the husk's row. |
| 8 | `systems/LIVING_WORLD.md` §1 | Still no wait or pass-time action, while the engine keeps writing by-night branches (V1, H2, Q14). | A wait-until action with a world-hour cost, and one line on what the powers do while you wait. |
| 9 | `systems/ADVENTURE_ENGINE.md` §4 | The down-scale rule (a low-tier trigger for a high-tier hero) is stated and never worked, and it is the common case for a hero in a valley he has finished. | Work one: the same trigger at Villager and at Voice, side by side. |
| 10 | `systems/CLASSES_AND_STANDING.md` §2 · `systems/ADVENTURE_ENGINE.md` §3.8 | Four class answers route through abilities §2.5 does not resolve: Mist as a field verb, Rally as an *answer*, "Draw the water through" as *break*, a Rogue lock-pick. | Resolve them in §2.5 or replace them with verbs that exist. |
| 11 | `systems/ADVENTURE_ENGINE.md` §3.4 | Twist families are 8 agenda / 5 paper / 4 place / 3 old / 3 season / 3 door / 2 kin / 2 debt, which makes §6's family rule unsatisfiable under a three-re-roll cap; and each twist has one line with no rule for the re-phrase §8.4 requires. | Rebalance toward six per family; give every twist a second line and a rule for choosing between them. |
| 12 | `world/WORLD.md` Part One and §2.1 | Round one's four, untouched: no cause for the Still's fall; "the Stair" ambiguous on the page; "the only way anyone gets in" over-absolute; 474 claimed against 551. | Four sentences, one paragraph, one number. |
| 13 | `docs/STATUS.json` | Stale at round 1: old scores, old word counts (`ADVENTURE_ENGINE` 6,001 vs 25,651), and open issues this round closed. The brief requires it current. | Regenerate it each round. |
| 14 | `systems/ADVENTURE_ENGINE.md` Vo3 | The `Parley` shape of the region's own ending — the shape the twenty-hour trace sets up by setting `ledgers_to_be_read` — is one clause; only the `Raid` shape is written. | Write it as a full quest with journal text and outcomes, or say the door leads to Green. |
| 15 | `slice/FIRST_REGION.md` §7.2 | The Thaw 39 away page closes the Salt Pans to a Salted walking by day in a run where the seal is intact and `shelf_dry` is false; and three schedule contradictions in the trace (Garrow Thaw 1, Idren and Kit Thaw 9). | Give the Pans a cause the run supports, or drop the line; move the three scenes to the hours the schedules allow. |

---

## 9. Verdict

**Fail.** The lowest line is **economy, session and UX at 7.0**, and it is the only line that went down —
not because anything in it got worse, but because two of its files were never opened while the files that
measure them were rebuilt, so the three-minute session, the fairness table and the hero's own renown at
hour one now say three different things. Everything else moved the right way. Round one's structural
charge — that the bible counted its tables instead of writing them and traced its clock instead of
running it — is **answered in full**: I counted all ten engine tables and the 64 deeds and every count is
honest; §8.2 corrects four of its own numbers downward and explains each, including its headline; the
twenty-hour clock is rebuilt forwards and every one of its checks passes with a calculator; the field
verbs have costs, durations and two kinds of failure apiece; the Mage and the Rogue are played; Halse
Corrow's hundred is now bought at the Salt Hall door rather than handed over at a meeting, and the file
says so in as many words; and I rolled two quests from the printed tables in an afternoon and both read
as authored, one of them landing on a deed row that had been written and waiting for it. The design-smell
hit is cleared. What is left is not a design problem but a bookkeeping one, and it is the same problem in
nine places: **the new tables are the authority and the old documents were not re-derived from them** —
the renown ledger drops receivers its own rows name, the showcase quests speak forty act tags the deed
table does not contain, `choose` still carries half the twelve against a rule written this round to
forbid it, fifteen trigger-to-motive links point at motives that do not accept them, and five files
still carry round-one numbers. None of that needs a new idea. It needs one person with the deed table,
the trigger table and a spreadsheet, going through every number in `ADVENTURE_ENGINE` §7,
`FIRST_REGION` §7, `SESSION_UX` §3 and `PROGRESSION_ECONOMY` §5 and making them read off the tables the
designer has now, admirably, actually written. That is one round of work, and after it four lines move
together to 8.5.
