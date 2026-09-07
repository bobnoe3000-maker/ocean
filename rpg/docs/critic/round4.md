# Critic — Round 4

Judged against `rpg_design_prompt.txt` and against my own round 3 report. I read all ten bible files in
full. I recomputed both runs of one hand/autobattle pair from the printed rules alone, then a Mage's
water-per-fight, a Rogue's time-to-kill and the whole four-layer descent budget; I re-priced all nine
engagements from `COMBAT` §1.8's threats and re-added every running total in the experience ledger; I
re-ran the twist-rate derivation, both gates and the fixed point, and re-did the 0.7σ check; I counted the
one page's words two ways; I re-derived the level curve to level 25; I checked §6's rule 1 across all 120
pairs of the sixteen signatures by script and rule 3 by hand; I re-added the clock table's three checks,
the pace model's four intervals and the hour-fifty renown floor head by head; I played three paper sessions
in three combinations nobody has played; and I re-walked the smell checklist item by item. Every claim
below cites a file and a section or line.

**Verdict up front: this round passes.** Scores: world **8.5**, living world **8.5**, adventure engine
**8.5**, classes and standing **8.5**, combat/dungeons/autobattle **8.5**, economy/session/UX **8.5**,
feasibility/honesty **8.5**, design smells **8.5** — no smell hit. Eight of eight at the bar, four lines
moving, four holding, none falling.

**Combat verified: yes, at the model; no, at one of the six runs.** The thing that mattered is true — a
reader with a pencil can now compute damage per second, resource per fight and time to kill for any hero,
companion and enemy in the game, and I did it independently for all three classes and got the file's
numbers. The dungeon budget reproduces to the digit at every cell. One encounter's illustration does not
reproduce: Encounter A undercounts the enemy swings that land by about a quarter, and the hero ends at 44
under my arithmetic against the printed 62. **The finding that run exists to make — that the hand/auto
trade reverses, ten health for a second and a third — survives my recomputation intact.** That is the
difference between an illustration with an error in it and a model with a hole in it, and this is the
first round of the four where combat is the former.

**XP verified: yes.** 696 and 4,536 both reproduce from `COMBAT` §1.8's threats and `PROGRESSION` §1's
rules, as do all fourteen running totals and every level threshold. One disagreement, reported in §2.

---

## 1. Combat, recomputed by hand

### 1.1 Encounter A — the picket at Hobb's Cross, both runs, from the rules alone

`COMBAT` §7 Encounter A. Party: Fighter level 3, tier-1 heavy (12 damage, 1.4 s recovery), leather (2),
health 120, knack Wide Cleave. Corva (Bow) level 3, tier-1, health 110. Enemies: three Wrack cutters
(55 health, armour 1, 8 per 1.5 s, 16 every fourth swing) and a slinger (40, armour 0).

**Ratings.** `PR = 2 × (10 + 4×3 + 5×1) = 2 × 27 = 54` ✔ printed 54. `ER = 3×12 + 10 = 46` ✔ printed 46.
`46 ≤ 54`, **Fair** ✔ (§1.9). Enemy pool `3×55 + 40 = 205` ✔ printed 205.

**Damage out, by hand.** Nine taps in the window, six Strikes and three Cleaves; the third of a heavy chain
is a Cleave (§1.4) and three Cleaves at two cutters each gives `6 + 6 = 12` hits. By §1.1's order (multiply,
then subtract armour) an ordinary hit is `12 − 1 = 11`, a Rallied one `(12 × 1.2) − 1 = 13.4 → 13`, and the
Hold counter `(12 × 1.5) − 1 = 17`. `12 × 11 + 3 × 2 + 17 = 132 + 6 + 17 = **155**` ✔ exactly the file's.

**First disagreement.** Corva's ten arrows are counted at 8 apiece. `6 + 2 × tier = 8` is right at tier 1
(§1.7), and it is right against the slinger at armour 0 — five arrows, 40, dead at 6.0 s ✔. But the other
five go into **cutter C3, armour 1**, and §1.1 subtracts armour from every hit: `8 − 1 = 7`. Corva's total
is `40 + 35 = 75`, not 80, and damage out is **230, not the printed 235**. The overkill absorbs it — 230
still exceeds 205 — but it is the file's own rule broken in the file's own flagship run.

**Second disagreement: the beats do not fall on the printed cadence.** At 1.4 s recovery C1 takes five hits
and dies on the fifth. On a grid from 0.0 that is 5.6 s; the file says **6.6 s**, which needs first contact at
1.0. Take that: taps at 1.0, 2.4, 3.8, 5.2, 6.6 ✔ C1 dead at 6.6. But then **Rally at 6.8 is 0.2 s after a
tap whose recovery is 1.4 s**, and §1.2 says recovery is "the time before the arc accepts the next tap" —
one arc, one clock, which is the reading §1.5 itself uses when it prices Hold's brace at "1.4 Strikes". And
the Cleave at 8.2 sits on no grid reachable from either. The aggregate (nine taps plus a Rally plus a 2 s
brace inside about 14 s) is right; the four printed beat times are decoration.

**Third disagreement, and the one that moves a number: the swings are undercounted.** The file counts
thirteen ordinary swings and three heavies — sixteen swings from three cutters. Count them from the printed
lifetimes: C1 alive 1.0→6.6, C2 1.0→12.6, C3 1.0→14.8 is 5.6 + 11.6 + 13.8 = **31 cutter-seconds at a 1.5 s
cadence = 21 swings**, of which every fourth is the heavy: **5 heavy, 16 ordinary**. Corva is not a target —
§1.2 makes a Bow companion kite anything under 4 m/s and a cutter is 3 — so all of them reach the hero.

- **File:** `11 × 6 + 2 × 1 = 68`; `120 − 68 + 10 = 62`. Internally consistent ✔.
- **Mine:** fourteen unblocked at 6 and two blocked at 1 = `84 + 2 = 86`, five heavies dodged; `120 − 86 + 10
  = **44/120**`. Party `44 + 95 = 139/230 = 60%` — still a win, still above §4's 40% party line.
- **Autobattle**, same method over a 13.5 s fight: about 20 swings, 15 ordinary, none blocked: `90`;
  `120 − 90 + 10 = **34/120**`.

**So the trade reproduces and the numbers do not.** The file's gap is `62 − 52 = 10`; mine is `44 − 34 = 10`,
the same size, the same direction, from the same cause (the two swings a hand blocks to 1 and the policy
eats at 6). §10's headline claim — that the recomputation reverses the hand/auto trade and makes the hand's
edge **defence** rather than speed — is true under my arithmetic as well as the file's. What is wrong is a
swing count, not a model.

**Fourth, smaller: the narration and the arithmetic block different things.** "The player Holds at 9.6 as C2
and C3 both wind up, blocking both to 1" — a wind-up is the 16, and §1.1 gives a blocked heavy
`(16 − 2) × 0.2 = 2.8 → 3`, not 1. The arithmetic underneath blocks two *ordinary* swings (`6 × 0.2 = 1.2 →
1` ✔) and dodges all the heavies. Two readings of the same two seconds.

### 1.2 Encounter B — the Salt Hall stair, both runs

Party ratings: `PR = 44 + 39 + 44 = 127` ✔; `ER = 4×14 + 30 = 86`, ×1.25 = 107.5 ✔ **Fair**. Companion
health by §1.7's own formula: Ilune `80 + 10×6 = 140` ✔ (the round-three 130 broke it and is corrected),
Gulla `100 + 60 = 160` ✔, hero `90 + 60 = 150` ✔.

Every damage figure obeys §1.1: Fling on a hound `8 × 2 = 16` ✔, on the husk `8 − 3 = 5` ✔, Wring
`(35 × 2) − 3 = 67` ✔ and `(10 × 2) − 3 = 17` a tick ✔, crust off `70` and `20` ✔; a hound bites Gulla for
`8 − 4 = 4` ✔, Braced `(16 − 4) × 0.4 = 4.8 → 5` ✔; the husk `20 − 4 = 16` ✔ and Braced `6.4 → 6` ✔.
The 0.8 s Fling cadence holds across both runs and the husk's death at 13.7 s and 11.0 s both reproduce
step by step.

**Two cell errors, both self-limiting.**

1. **t = 4.8, Ilune's Flings on h4 go 12, 24, 48.** At 12 a cast the third reaches **36**; h4 dies on her
   fourth at **5.6 s**, not 4.8. The file's own water column proves it: "Ilune water 80 − 16 − 15 = 49" is
   **eight casts**, four on h2 and four on h4. The timeline row is wrong and the total is right. The husk
   arrives at 8.0 regardless, so nothing downstream moves except the hero, who eats one more bite (132, not 138).
2. **t = 2.4, "Gulla 112".** `160 − 16 − 16 − 12 = **116**`. The autobattle run says so in as many words
   ("Gulla −44 by 2.3, as by hand"), and every later figure in the hand table — 107, 127, 111, 105, **89** —
   is correct off 116. One cell.

**One undercount in the autobattle run.** The husk reaches Gulla at about 9.0 and dies at 11.0; at 20 per
2 s that is two hits, and one is counted. Gulla ends 91, not 107; the party 85% rather than 88%, still
above the hand's 82%. Direction survives.

**The trade, and the crack in it.** Autobattle is 2.7 s faster, twelve health better on the hero and
eighteen on Gulla, and twenty water poorer. Water is the hand's only edge. **And `COMBAT` §3.2 puts the
Court's cistern one room later**, where both refill to 100 — so the twenty water the rationing hand saved
is erased before the layer it was saved for. §6.1 cites that refill as the *defence* of Mage parity
("every dungeon layer has a refill within one room of its hardest fight") without noticing that the same
sentence deletes the hand's only advantage in the file's own flagship Mage encounter. This is the sharpest
thing left in the combat file and it is a design argument, not an arithmetic one.

### 1.3 A Mage's water per fight and a Rogue's time to kill, computed independently

**Mage.** Fling 8 at 0.8 s: `8 ÷ 0.8 = 10.0` dps at armour 0, `6 ÷ 0.8 = 7.5` at 2, `4 ÷ 0.8 = 5.0` at 4 —
all three ✔ §1.5. Water: 2 per cast at 0.8 s is **2.5 a second**, so 25 per ten seconds ✔ and a 100 skin is
**40 s of Flinging** ✔. (§1.5's parenthetical "12 casts + 1 spare" is 24 water, not 25; the rate is right and
the gloss is not.)

Against a husk I rebuilt the three seconds cast by cast: Wring at 0.0 for 67 (husk 53), bleed 17 and a Fling
5 at 1.0 (31), Fling at 1.8 (26), bleed at 2.0 (9), Fling at 2.6 (4), bleed at 3.0 → **dead at 3.0 s for one
Wring and three Flings = 30 + 6 = 36 water** ✔ exactly §1.5's. A second husk inside Wring's 12 s cooldown is
Flings at `5 ÷ 0.8 = 6.25` dps: `120 ÷ 6.25 = 19.2 s` ✔ printed 19. The pair at **22 s** ✔.

§3.1's planning rate: 50 water against raw `ER` 86 is 0.58 ✔ "about 0.6 water per point of raw ER".

**Rogue.** Front Cut on the husk `9 − 3 = 6`, Slip-window `(9 × 3) − 3 = 24` every 5 s. Per five seconds:
`5 ÷ 0.8 = 6.25` taps, one at 24 and 5.25 at 6 = 55.5, **11.1 dps** ✔, and `120 ÷ 11.1 = **10.8 s**` ✔.
The §1.5 summary line reproduces the same way at all three armours: `(27 + 5.25×9)/5 = 14.85 → 14.8` ✔,
`(25 + 5.25×7)/5 = 12.35 → 12.3` ✔, `(23 + 5.25×5)/5 = 9.85 → 9.8` ✔. (The 45 stamina is loose — three Slips
in 10.8 s is 60 — but regen pays 108 in the same window, so it never binds, which is what the row says.)

**Fighter.** Strike on the husk `15 − 3 = 12` per 1.4 s = 8.57 → 8.6 ✔; the counter `(15 × 1.5) − 3 = 19.5 →
20` ✔ "returns 20"; the Hold loop over its 8 s cooldown costs 2 s of Striking (17) and returns 20, so **+3
per 8 s = +0.4 dps** ✔ — a genuinely elegant piece of derivation. `120 ÷ 8.9 = 13.5 → **13.4 s**` ✔.

**Encounter C, spot checks.** `PR = 3 × 52 = 156` ✔; `ER = 48 + 20 + 44 + 45 = 157` ✔ Even by one ✔. Every
Rogue number obeys §1.1, including the correction: the Slip-window Cut on a zero-armour slinger is
`9 × 3 = **27**`, and the file says out loud that the 26 printed for three rounds was wrong. Pell's kill
reproduces: hero `(25 + 4×7)/4 = 13.25 → 13.3` plus Kit's `16 ÷ 0.8 = 20` is 33.3, and `220 ÷ 33 = 6.7 s`
✔. **The mop-up does not:** "165 health against the party's 36 a second, done at 22 s" — `165 ÷ 36 = 4.6 s`,
which finishes at 18.6, not 22.

### 1.4 The bottom of layer four

`COMBAT` §3.2, recomputed cell by cell. Layer 1 the Inner Stair `ER 58 × 1.1 = 63.8 → 64` ✔, health
`1.2 × 64 = 76.8 → 77` ✔, 4 lit-hours at 4 per flask = **1.0** ✔. Layer 2 the Salt Threshold 75 and the
Sluice Mouth 68 = 143 ✔, `1.2 × 143 = 171.6 → 172` ✔, 4 lit-hours at the salt rate of 2 = **2.0** ✔. Layer 3
the Ring Stair `110 × 1.5 = 165` ✔, `1.2 × 165 = 198` ✔, 1.5 lit-hours at 0.5 = **3.0** ✔. Totals 372 raw,
**447** of health, **6.0 flasks** ✔ — and 6.0 is what `FIRST_REGION` §6 independently says a full descent
needs, written before the rate existed.

Party pool: hero `90 + 80 = 170`, Kit `80 + 80 = 160`, Gulla `100 + 80 = 180` = **510** ✔; eight bandages at
30 = 240; **750**. `750 − 447 = **303**` ✔ exactly the printed figure. **A party stands at the Drum's door
with 303 of 750, the sixth flask lit and half an hour of it in the Drum's air.** That reproduces.

So does the finding underneath it. I added the effective column of all eleven rooms —
`28+46+57+62+64+75+113+68+165+165+165` = **1,008** ✔ — and `1.2 × 1,008 = **1,210**`, against 750. The Court
cannot be cleared in one descent, and the file says so rather than letting a reader find out. *(§10 item 5
prints **1,012** for the same number: a transposition.)*

**Two basis problems around the edge of this good work.** §1.9's planning number of 1.2 is measured from the
three runs at 1.6, 1.0 and 1.2, and the 1.0 is Encounter B read against its **raw** `ER` 86 (against effective
107 it is 0.78) — then §3.2 applies 1.2 to **effective** `ER`. Conservative, but unstated. And
`SESSION_UX` §3 takes the Salt Hall door at "`ER` 72 … about 86 health", raw, on the same evening `COMBAT`
§10 says that fight's effective rating is 90.

### 1.5 What else I checked in the combat file, and what it cost

- **§1.8's raw damage per second column reproduces for thirteen of fifteen kinds** under my arithmetic,
  including the ones that fold a telegraph in: cutter `(8+8+8+16)/6 = 6.7` ✔, hound `(3.44×8+16)/4 = 10.9` ✔,
  ledgerman `86/6 = 14.3` ✔, warden `415/30 = 13.8` ✔, chainman `50/4.8 = 10.4` ✔, sergeant `62/4.8 = 12.9`
  ✔, hewer `50/4.2 = 11.9` ✔. **The rider's 8.0 is `12 ÷ 1.5` with its 22-damage charge left out**, alone
  among the telegraphed kinds; and the stone-warden's 16.0 implies a slam every 10 s that is not printed.
  Both are breaches of §2 rule 7's own promise that a fight never needs a number the tables do not hold.
- **§1.9's threat model reproduces at all four worked kinds:** `120 ÷ 10 = 12` ✔, `(120 − 8) ÷ 8 = 14` ✔,
  `(120 − 10) ÷ 1 = 110` ✔, `120 ÷ 4 = 30` ✔. It is honestly circular and says so ("`ER ≤ PR` is true by
  construction at `PR = 120`"), which is the right way to state a calibration. Eleven of the fifteen threats
  are not derived, and the four that are rest on a harness result (see line 7).
- **§9's room table reproduces at every one of the eleven rows**, and the layer weight settles the
  Even-versus-Fair disagreement round three found — `110 × 1.5 = 165` against `PR 156` is **Even**, and the
  region file's judgement was right. A rule was found rather than a number changed, which is the better fix.
- **§7's runs now agree with the files that quote them:** `FIRST_REGION` §7.2 prints 14.8 s and hero 62 for
  Encounter A and says what moved.

---

## 2. The XP re-pricing, re-priced

Rate: `threat × 1.5` per enemy (`PROGRESSION` §1), threats from `COMBAT` §1.8, nothing for an engagement
that never begins.

| Engagement | Composition | Σ threat | × 1.5 | File |
|---|---|---|---|---|
| Old Shore road, Thaw 1 | hound 14 | 14 | **21** | 21 ✔ |
| the hewers' dam, Thaw 7 | no engagement | 0 | **0** | 0 ✔ |
| Hobb's Cross, Thaw 8 | 3 cutters 36 + slinger 10 | 46 | **69** | 69 ✔ |
| the Drowned Steps, Thaw 21 | 3 hounds 42 + 2 cranes 24 | 66 | **99** | 99 ✔ |
| the Salt Hall door, Thaw 21 | 4 hewers 72 | 72 | **108** | 108 ✔ |
| the Salt Hall stair, Thaw 22 | 4 hounds 56 + husk 30 | 86 | **129** | 129 ✔ |
| the flour-cart road, Thaw 29 | 2 cutters 24 + eel 8 | 32 | **48** | 48 ✔ |
| the Rudd Bridge, Thaw 34 | Drusk 38 + 4 chainmen 64 | 102 | **153** | 153 ✔ |
| the Old Shore deserters, Thaw 41 | 2 cutters 24 + rider 22 | 46 | **69** | 69 ✔ |
| | **30 enemies** | | **696** | 696 ✔ |

I re-priced all nine, not four. **696 reproduces**, and so does the enemy count: 1+0+4+5+4+5+3+5+3 = **30**,
which is only thirty because the dam pays for none — the rule that makes the count and the compositions the
same object, and the round's best small piece of reasoning.

Quests `120+120+100+200+200+250+400+900+950 = **3,240**` ✔. Discoveries
`30+30+50+30+30+30+100+30+100+30 = **460**` in ten items ✔. Deeds `80 + 60 = 140` ✔.
**`3,240 + 696 + 460 + 140 = 4,536`** ✔.

**Every one of the fourteen running totals reproduces:** 171 (V3 120 + hound 21 + road 30) · 371 (V1 120 +
camp 30 + ring 50) · 440 (+69) · 600 (V2 100 + bridge 30 + Wickery 30) · 800 · 1,000 · 1,330 (H3 250 + ash
80) · 1,697 (stones 30 + layer 1 100 + 99 + 108 + Reach 30) · 2,356 (N1 400 + layer 2 100 + 129 + pans 30) ·
2,404 · 2,464 · 3,517 (Vo1 900 + 153) · 3,586 · **4,536**. And the curve behind them: I recomputed
`60 × L^1.6` at every step and the cumulatives land on **1,141 / 4,334 / 8,023 / 13,194 / 24,119 / 52,127 /
94,381**, exactly as printed, with level 26 at 104,729 ✔ — round three's twelve wrong figures are all
corrected, and 4,536 is level 8 with 202 to spare against level 9's 6,005 ✔.

**My one disagreement, and it is the halving rule.** Experience halves for "the first fight of a kind at a
**site** in a world-week". Salt-hounds are fought at the Drowned Steps on Thaw 21 and again at the Salt Hall
stair on Thaw 22 — one day apart, two rooms of the same dungeon. If a "site" is the Sunk Court, the second
four hounds pay half: `4 × 10.5 + 45 = 87`, the fights column is **654** and the twenty hours **4,494** —
still level 8, headline unmoved. If a "site" is a room, 696 stands. **No file says which**, and the Court is
a single named site everywhere else in the bible (`S17`–`S20` are its layers, and the region file's site
list holds it as one place). It is the only place in the nine where the rule can bite, and it bites.

---

## 3. The twist rate: is 0.48 derived?

**Yes, and the derivation survives being re-run.**

**Gate one.** I counted the liveness table's ticks by column: Q13 **4**, Q14 **8**, Q15 **11**, Q16 **7** —
each matching its printed total — **30 live cells of 120 = 0.25** ✔. The thirteen rows dead in all four
states are exactly thirteen (T01, T02, T03, T06, T08, T11, T12, T14, T15, T16, T22, T23, T30) ✔, and the
two clusters the file names are right: four need a person the world has not placed, four are the whole
*companion* family.

**Gate two follows from the printed preconditions.** In a twelve-offer window, `12(1−q)` twisted offers hold
their own entries; rule 2's family half holds the families of the last three twisted offers — `3(1−q)`
families at `30 ÷ 9 = 3.33` entries, of which `3(1−q)` are already held, adding `2.33 × 3(1−q) = 7(1−q)`.
`B = 19(1−q)` ✔. This is a correct reading of §6 rule 2 as printed ("no entry inside the last twelve offers,
no family inside the last four"), and the independence assumption between the two gates is the only
modelling liberty taken.

**The fixed point re-run.** `q = 0.480` → `1−q = 0.520` → `B = 9.88` → `p = 0.25 × (1 − 0.329) = 0.1677` →
`q = 0.8323⁴ = 0.4799` ✔. **0.48, to two places, is the fixed point.** The struck 3.4% is also, as the file
admits against itself, 3.53%.

**The 0.7σ check is honest arithmetic and partly in-sample.** Four passes in fifteen rolls is 0.267; with
`B ≈ 6` at four-to-twelve offers of history, `p = 0.25 × 0.8 = 0.20`, expectation 3.0, `σ = √(15 × .2 × .8)
= 1.55`, `(4 − 3) ÷ 1.55 = **0.65**` ✔ "0.7 of a standard deviation". The honest arithmetic is honest. But
**nine of the fifteen rolls are Q13, Q14, Q15 and Q16 — the four quests whose world-states gate one was
read from.** Only the six from my round-three rolls are out of sample, and those give one pass in six
against 1.2 expected, which agrees too. The check is right and the file should say which half of it is
independent.

**What I hold against it is not the derivation but the response to it.** Half the engine's output is plain;
a quarter of the twist table is dead in every printed state; the *companion* family, split out last round
for a stated reason, is four of thirteen entries that never fire. §3.4 measures all of this beautifully and
§6 gives the plain quest a rigorous signature — and nothing is loosened, moved or added. The file has
learned exactly what is wrong with its twist table and decided to live with it in one paragraph.

**The rest of §6 reproduces under my own script.** All 120 pairs of the sixteen signatures: **84 at five
fields, 36 at four, none at three** — the file's figures to the pair — and Q16 sits at four against exactly
the four quests it names (H1, N1, Vo2, Q14). Rule 3: 22 verb slots across the twelve, highest three
(*choose*, *lead*, *answer*) against a cap of four ✔. And rule 2's days-to-offers conversion is now resolved
in the direction that binds: the closest family pair is eleven days, so the rule clears if the region offers
one quest per 2.75 days — **33 in a season**, against §8.4's band starting at 40. Round three's ambiguity is
gone, and gone the right way round. *(One residue: `ADVENTURE_ENGINE` §7.2's H2 still prints its signature
with the family `agenda`; T11 moved to `companion` in the round-three split, and §6's own table says so.)*

---

## 4. The world's new cause, judged as design

`world/WORLD.md` was opened for the first time in four rounds and all four of round one's defects are
closed. **The one page reproduces at 529 whitespace tokens and 517 without the standalone dashes**, which
are the two figures its own footer prints — the first time in four rounds a word count in this bible has
matched my count of it. "The only way in for anyone who cannot mine" resolves the Skerrow contradiction and
`PITCH.md` now carries the same qualifier. "The Kest company named for its road" disambiguates the Stair on
the page that names both.

**Is the cause consistent with the Cutting?** Yes, and it is better than consistent: it is the same object.
§2.2 has the Skerrow break into the bowl chasing "a soft banded stone, easy to follow and easy to work, that
dips south under the notch and is still down there"; §2.1 has the Ebb wearing toward that same band. The
thing that caused the first fall is the thing that will cause the next one, six hundred years later, and
neither sentence needed the other rewritten to make it true.

**Does the arithmetic close?** I checked it four ways and it does. A finger a season is "a foot in four
years" — 3 inches a year, so a finger is ¾ of an inch, consistent. Six hundred years at 3 in/yr is
**150 feet** ✔ "some hundred and fifty feet since the Cutting". A floor falling "a foot in fifty paces"
means 3 inches of drop is **12.5 paces** ✔ "a dozen paces of new mud a year". And two miles of new Shelf at
that rate is about three and a half centuries, against a town founded "in two hundred years" after a Cutting
six hundred years ago ✔. Twenty feet of sound rock at 3 in/yr is **80 years** ✔. A world whose geology
divides evenly is a world somebody actually built.

**Do the four views produce play rather than trivia?** Yes, and this is the part that earns the score. Each
answer is the answer that serves the people who give it, each is falsifiable, and the falsifying objects are
props in region one rather than dialogue: **Wickery's low-mark post**, notched four times a year by
`LIVING_WORLD` §1's own season tick and stood in front of on Thaw 9 of the trace; **Thrum's cut-tally**, a
slate at the gate that Marrock will read to anyone the Holds are not refusing and Brakka to anyone at all,
each for a stated reason; and **the Sunk Court's well**, full and still, against the Vael's answer. The
Kest's answer dies against the two records agreeing to the finger over four hundred years; the Vael's dies
at the well; and the design's refusal to let any NPC settle it — "the Skerrow say it constantly and are
discounted for saying it" — turns a piece of cosmology into a thing a player assembles. `FIRST_REGION` §2's
new paragraph names which two of the three the valley holds, and §1 gives each prop a description, an owner
and a reason someone will show it to you.

**Is the horizon actionable?** Yes. Eighty years by the Holds' tally, forty by Brakka's, "a tally, not a
prophecy", inside a child's lifetime, and §2.9 forbids it ever becoming a prophecy. Five powers' current
goals are re-derived from it in one paragraph each — the Stair buying ahead of it, the Holds' nine-year
standing offer to armour the sill, the Closers as the horizon's own faction, Tull's "not my lifetime", and
Corrow, "the only leader in the Hearth who wants it to fall faster". §2.4's agendas stop being five
appetites and become five answers to one question, and `PITCH` says the campaign ends on that question. The
lake is now the spine.

**Three things against it.**

1. **`FIRST_REGION` §2 overclaims one prop.** "Two of them are props a hero can stand in front of in the
   traced twenty hours: Wickery's low-mark post and Thrum's cut-tally." **The traced twenty hours never
   reach Thrum** — it is not in §7.1's nine sessions, not in §7.2's itinerary and not among §7.3b's ten
   discoveries, and §1 says it is two days' walk and the region's only site reached on foot.
2. **The Ulder's answer has no prop.** §2.1's second disproof — that the fall went on unchanged through
   decades when every western ring was kept and decades when none was — needs a record of ring-keeping, and
   no file has one. The other three tests have objects; this one has a 260-year-old Speaker, and §2.1's own
   rule is that no NPC settles it.
3. **The friend test leaves two things.** I told the page to an imagined friend from Part One alone. What
   they got right: the bowl, the ring road, the four rings, the falling lake, four peoples, three ages, five
   powers, the price of magic, and that they start as nobody. What they would misunderstand: **the Salted
   read as a fifth people** — the page has them walking the Shelf "with the Wrack and what came out of the
   courts", and nothing on the page says a Salted is a person who went too deep rather than a kind of thing
   (§2.9 has decided; the page has not said); and **the fourth town has no river** — three rivers, four
   towns at the compass points, and no clue that the southern one is the Kest-built gate on the gorge. Both
   are one clause. Round three's two friend-test failures (the Skerrow who mined in; the two Stairs) are
   gone.

---

## 5. Three paper sessions

Three combinations nobody has played: a **Mage's first three minutes**, a **Fighter's fifteen on H2** (which
`CLASSES` §2.6 plays as a Mage), and a **Rogue's evening descent to layer 3**, which no file anywhere plays
for any class. `[HOLE: …]` marks where I had to invent or could not resolve.

### 5.1 Three minutes — a **Mage**, Thaw 1 06:00

Creation is a screen and grants nothing (`SESSION_UX` §1): a name off the Vael table, a trade (herb; Dress;
Hild Marrow), the class shown as its four petals **and** its four field verbs, a hand. Renown 0, no
memories, no letters. Then the field, at the well, in the Firstwater crowd.

`[HOLE 1: the Firstwater override still has no hours — fourth round. FIRST_REGION §7.2 says "everyone is at
the well because it is Firstwater's hour, an override"; LIVING_WORLD §1 makes festival_today a season flag
and §3 lets schedules take season-flag overrides, and not one of the twenty-five schedules in FIRST_REGION
§3 prints a festival variant. Three of the four people in the anchor scene contradict their own rows at
06:00 — Idony is at her house until 8, Reyne at the farmhouse until 8, Garrow at his forge from 6. Only
Ondrin's row mentions Firstwater, to say he is not coming. This now costs more than it did in round three,
because a Mage's first available verb writes to a roster I cannot read: **Dowse** at the ford is 10 water
and 20 world minutes and writes deed 58 `drew_before_us`, w3, "with every Vael and Kest at the site", plus
the flag `known_drawer`. The one deed a Mage can do in the game's first hour has receivers the file does not
print.]`

07:00, Tobbin behind the smithy: **V3 accepted**. One world hour, two real minutes; the away page is not
in play; the whole session is about three minutes with the creation screen.

`[HOLE 2: the game's first three minutes still end with no deed, no site state and no memory — unchanged
from round three. SESSION_UX §3 opens "Every session ends with a world change the player can name" and has
answered it handsomely for its own flagship (the Thaw 11 errand ends with row 5, a door and +11 under the
glyph). FIRST_REGION §7.2's opening still ends with "a quest accepted, a shepherd's name in the journal and
a marker seven miles down the valley" — a journal change and a map change. The Mage could end it with a
Dowse, which would be a real world change; hole 1 is what stops the arithmetic.]`

**A finding, not a hole, and a pleasant one:** the Mage is the class with the most to do in the first hour,
where round three found the Fighter with nothing. Dowse needs only a band that holds water; the ford has
four.

**Completes, two holes.**

### 5.2 Fifteen minutes — a **Fighter** on H2, Thaw 13 08:00

State from `CLASSES` §2.6: Ilune *fled* and *hurt* in Hild's loft; the Chain reach Sallowford at 15:00;
seven hours. §2.6 plays this as a Mage, who Floods the ford to lengthen the road. What does a Fighter do?

His four verbs are Break, Carry, Drill, Stand. **Drill is correctly refused** — it needs a Stillday and
`FIRST_REGION` §5 lists Thaw 6, 12, 18…, so the 13th is not one, and the petal greys with its need printed
(`SESSION_UX` §2.5). **Stand needs a contract a power has Posted**, and no power posts a watch on a
fugitive. That leaves **Carry**: eight hours up the Wend path to the Rudd Stones, at full speed because a
Fighter carries at full speed where every other class halves. Leave at 08:30, arrive 16:30; the Chain reach
an empty loft at 15:00. Clean, class-shaped, and one hour better than the Mage's road, which is what a
Fighter should buy.

`[HOLE 3: Carry falls short at water, and nobody says whether there is water in the way. CLASSES §2.5's
Carry: "Falls short: water. A ford above the knee … a person is left at the water's edge." §2.6's own state
line says "the Rudd runs high with the ford at knee-and-a-half". Hild's loft is in Sallowford, which is a
ford-village; whether the Wend path to the Rudd Stones leaves Sallowford's own bank is in no file —
FIRST_REGION §1's distance table gives hours, not crossings. The one class the quest's own answer is
written for cannot be told whether its verb works.]`

`[HOLE 4: the two verb tables still disagree about what a Fighter's answer even is, and this is the fourth
round. ADVENTURE_ENGINE §3.8's `hide` row gives the Fighter "stand at the door"; CLASSES §2's gives "hold
the door". Neither is the *Stand* verb and neither is a field verb at all — "Hold" is an arc ability, and
using it means fighting Drusk and six blades (`ER 38 + 6×16 = 134` against a PR of about 110: Even), which
is the search finding her, which is H2 failing. Round three found this shape on the Rogue's missing *break*;
it is the same gap, one class over.]`

Take the Carry road and assume the path is on the near bank. Eight hours in the Wend with a burden is a real
piece of design, and — for the first time — a computable one: `COMBAT` §9's Wend encounters run `ER` 20–72,
a reedback charges at 7 m/s for 15, and §2.5 says a carrying Fighter has no dodge and no ability but Strike.
The burden takes splash and Ilune has 140 health. The tension is stated, priced and survivable.

**Completes, two holes**, at eight open world hours — inside `SESSION_UX` §5's stated six-to-twelve band, so
the class-dependent session length round three found on V1 is bounded here even though it is still unstated.

### 5.3 An evening — a **Rogue**, the Sunk Court to the bottom

Party: Rogue level 8, Kit, Gulla. `PR 156`. Six flasks, eight bandages. The budget in §1.4 above is this
run, and it reproduces: the party reaches the Drum's door with **303 of 750**, one fight in them.

The class-specific play is good and computable. Against the Inner Stair's husk the Rogue is 10.8 s alone,
or about 8 with Gulla's Crack; §1.8's answers table gives him **Powder and the ground** and prices the lack
of a crust-stripper in seconds rather than leaving him with nothing, which was round three's complaint. The
Ring Stair is one abreast by design, which is exactly the room a Slip-Mark class wants.

`[HOLE 5: a Rogue's way out of layer 3 after the second waking does not exist without splitting the party,
and splitting the party changes the room's difficulty band. FIRST_REGION §6 gives three returns. The Ring
Stair closes when the second of the nine wakes and floods its lowest turn ("a swim in the dark with a
burden, which is the fisher trade's Boat verb and nobody else's"). **The Names** is "Read by any Drawer",
and a Rogue is not a Drawer. **The Sluice Head** opens to "a Fighter's Break (rating 3), a Mage's Flood from
the Salt Hall cistern, or the sluice-wheel turned from above by a companion left there" — so a Rogue party
must leave Kit or Gulla two layers up. That drops `PR` from 156 to 104, and by COMBAT §1.9's own bands the
Ring Stair's effective 165 goes from **Even** (165 ≤ 203) to **Overmatched** (165 > 135). No file states
this. COMBAT §6 (e) says "no Fair fight and no dungeon room in §9 requires a Bind, a Powder or a rationed
resource to pass", which is true and does not cover a room whose band is moved by the party a class has to
split in order to leave.]`

`[HOLE 6: the descent budget is a party pool and no rule distributes it across three bodies. COMBAT §3.2
spends 447 of a 750 pool; §8 makes a companion at 0 in a dungeon a body to carry out or leave, for the
campaign; and §1.2 gives the Shield the Taunt that draws the hits. Gulla's 180 is 24% of the pool and she is
the target of most of what is spent from it. Whether the traced descent puts a Shield down twice before
layer 3 is not computable from the printed rules, and it is the one thing that decides whether the budget
is a plan or a funeral. This hole is new, and it was created by the good work: there was no budget to
distribute in round three.]`

**Completes, two holes.**

### 5.4 Hole count

| Session | Class | Holes |
|---|---|---|
| 3-min | Mage | 2 — the Firstwater override's hours; no world change at the end |
| 15-min | Fighter | 2 — Carry's ford; the two verb tables' Fighter answer to *hide* |
| Evening | Rogue | 2 — a Rogue's return from layer 3; the descent budget's distribution across bodies |

**Six holes, against twelve in round one, twelve in round two and seven in round three.** Two of the six
are round three's, unfixed (holes 1 and 2). Two are round three's issue 11 arriving on a second class. Two
are new and both were created by new material — which is the healthy kind of new hole, and both are one
sentence each.

---

## 6. The eight rubric lines

### Line 1 — World: **8.5** *(8.0; 8.0; 8.0)*

`world/WORLD.md` opened for the first time and all four standing defects closed at once. The one page
reproduces at **517 / 529 words** under my own count, both figures as printed. The Fall's absolute is
qualified on the page and in `PITCH`. The Stair is disambiguated where it is named. And the falling lake has
a cause that is the Cutting's own cause continuing, whose arithmetic closes at four independent points
(§4), which four peoples answer four self-interested ways, only one of which is right, which is falsifiable
by three objects and a hero can stand in front of two of them in region one, and whose horizon is a
disputed tally that is the campaign's stated end and from which three of five powers' current goals are
re-derived. The lore is now load-bearing at the level of props, not tags. Everything else stands as I found
it three times: four peoples, five powers, three ages, a map with one shape, §2.9 forbidding a fourth or a
sixth forever, and Part Two honouring the page heading by heading.
*To 9:* correct `FIRST_REGION` §2's claim that Thrum's cut-tally is reached in the traced twenty hours (it
is not); give the Ulder's answer an object the way the other three have one, or say which region holds it;
and one clause on the page saying a Salted is made, not born.

### Line 2 — Living world: **8.5** *(8.5; 8.0; 7.5)*

Holds, and two real things were added. **§1's Tick now has four advances, not three** — the verb-day and
passing time, which eighteen of the traced twenty hours' world-hours run on, and which `SESSION_UX` §1 had
been citing this file for since round three. **The season turn now writes the notch** in every quay post and
every hold's cut-tally, four times a year, which is how `WORLD` §2.1's argument becomes decidable from
inside the simulation rather than from a lore paragraph — a system tick producing the evidence for a piece
of cosmology is the best single answer to "lore that touches play" in the set. The deed table's 67 rows,
the decay rule, the promoted-pool eviction, the leader rule as a gate and the reach ladder are as I verified
them in round three.

Against it, all three in their fourth round: **the sixty map-event templates are counted and never printed**
(§5), and they are the entire vocabulary of the away page; **§2's own worked example contradicts §4 row 1
three ways** — a `helped_find_flock` act tag that is not a row, a weight row 1 contradicts, and Reyne Gorse
holding no hero-memory on Thaw 1 where three files now write him at w6 on Thaw 1; and **row 62's printed w3
is written at w4** by both ledgers and by `SESSION_UX` §3.
*To 9:* print the sixty templates; rewrite §2's example off row 1; fix row 62's weight or say the meeting
tick overrides it; work an ordinary dawn for a second planner.

### Line 3 — Adventure engine: **8.5** *(8.0; 8.0; 7.0)*

All three of round three's named blockers are closed, and closed by derivation. **The plain quest has a
signature** — a sixth value `—`, argued rule by rule, with the right conclusions (rule 1 gets stricter of
its own accord, rule 2 must not apply because forbidding an outcome that happens on 0.48 of offers is
arithmetically impossible, rule 3 loosens) and a worked plain quest that got there by four failed rolls.
**The twist rate is one figure and it is derived**: two gates, a liveness table counted cell by cell against
four printed world states, a blocking model read off rule 2, and a fixed point I re-iterated to 0.480, with
the old 3.4% struck and its own mis-multiplication admitted. **§4's down-scale rule is worked**: the window
`H−1 ≤ S ≤ H+1`, three edits, the same trigger played at Villager and at Voice side by side from a printed
seed, and §4 now agreeing with `PROGRESSION` §1 instead of contradicting it. Add the day-to-offer conversion
resolved in the direction that binds (33 offers a season is the floor; the band starts at 40), rule 1
reproducing across all 120 pairs under my script, and sixteen quests of which the four I have rolled myself
came out of the tables without my choosing anything.

Against it: the 0.7σ check is arithmetically honest and **nine of its fifteen rolls are the quests gate one
was read from**; §7.2's H2 still prints the pre-split twist family in its signature; the two verb tables
still disagree in five cells; O02 "cutters and deserters" is still the named generic; and **the design
response to the derivation is one paragraph** — thirteen of thirty twists are dead in every printed state,
four of them the family created last round to fix a distribution problem, and not one precondition was
loosened.
*To 9:* loosen or move two *companion* preconditions; re-run the rate check on rolls made against states the
liveness table did not read; write Vo3's Parley shape in full; give O02 a name.

### Line 4 — Classes and standing: **8.5** *(8.5; 8.0; 6.5)*

Holds, and it is the weakest 8.5 on the board. What the rubric asks for is emphatically there: three classes
with distinct verbs in and out of combat, twelve field verbs each priced with a cost, a duration, a needs
list, a return, a *falls short* and a *goes wrong*, a subclass roadmap the base classes visibly leave room
for, and the road from villager to force at five milestones derived head by head from a deed table. §2.5 is
still the best writing in the set. §6 now prints §7.3a's ledger, and §5's "renown 28" is corrected to 67.

Against it, and every item is in its fourth round: **three "Growth 1–40" headers** against §3's "Levels
1–25" in the same file, with the Mage's 200-water skin promised at **level 30**, above a cap the file's own
§3 states; **§5's worked example still has the flock home by 15:00 and Garrow at the forge door**, against
§6's own ledger row four pages later and `FIRST_REGION` §7.2's 22:00 and Ford Inn door; **six act tags named
as deeds with no rows** (`gave_back_the_watch`, `let_them_through`, `turned_them_back`, `made_it_worse`,
`carried_duty`, `asked_first`); and §2's verb table disagreeing with `ADVENTURE_ENGINE` §3.8 on *answer*,
*witness*, *lead*, the Mage's Mist and the Rogue's break — which my fifteen-minute session walked into.
*To 9:* six words in three headers and one in the Mage's growth line; §5's example re-run off §6's own
table; six act tags given rows or renamed; the two verb tables reconciled cell by cell.

### Line 5 — Combat, dungeons and autobattle: **8.5** *(7.5; 7.5; 7.5)*

A full point, from the file that has held this line down since round one, and I checked enough of it by hand
to be confident the move is real rather than long.

**What is now true.** Every ability, companion ability and enemy carries a recovery, a cooldown, a range, a
speed and a rate; Fling has a cadence and a Mage therefore has a damage-per-second and a water-per-fight,
and both reproduce under my arithmetic (§1.3). The armour order is a rule in seven steps and every damage
figure I checked in three encounters obeys it, including the correction the file makes against itself
(26 → 27). §1.5's dps and time-to-kill tables reproduce at every cell I tested for all three classes, and
the Fighter's Hold loop's `+0.4` falls out of an 8-second cooldown — derivation, not assertion. §2 rule 2
and the husk row are reconciled, and all fifteen kinds have a named line of play on each of three arcs with
the Rogue's price stated in seconds. Threat is measured against the Fair line by a stated procedure and all
four worked derivations reproduce. The layer weight resolves round three's Even-versus-Fair by finding a
rule rather than changing a number. **And the dungeon is costed to its bottom and the whole budget
reproduces to the digit** — 447 of health, 6.0 flasks against `FIRST_REGION`'s independent six, 303 of 750
at the Drum's door — with the finding that the Court cannot be cleared in one descent falling out of its own
arithmetic. Parity is shown per class with the mechanism for each divergence, and there is now a structural
divergence where autobattle leaves the world better. The tuning burden is corrected upward, against
interest, from 147 to 441.

**What is not.** **Encounter A does not reproduce**: Corva's arrows ignore armour, the beats do not fall on
the printed cadence, the narration blocks two heavies where the arithmetic blocks two ordinary swings, and
the swing count is a quarter short, so the hero ends at 44 under my pencil and 62 under the file's — though
the ten-health trade the run exists to demonstrate reproduces exactly. Encounter B has two cell errors and
undercounts one husk hit. Encounter C's mop-up runs 3.4 s past its own stated rate. §10 prints 1,012 where
§3.2 gives 1,210. The planning number is measured on raw `ER` and applied to effective. The rider's charge
and the stone-warden's slam have no interval, against §2 rule 7's own promise. And the sharpest one is a
design argument: **the Mage's only hand advantage in Encounter B is twenty water, and §3.2 puts a full
refill one room later**, which §6.1 cites as the defence of Mage parity without noticing it erases the edge
it is defending.

That is a model a team can build from, with errors in its illustrations. It is not a model with holes in it,
which is what 7.5 was for.
*To 9:* recount Encounter A's swings and re-run all three pairs off the count; 1,012 → 1,210; state whether
the planning number is raw or effective and apply it one way; give the rider and the stone-warden their
intervals; and answer the cistern — either move it, or say plainly that a Mage's rationing pays in field
fights and not in the Court.

### Line 6 — Economy, session and UX: **8.5** *(8.0; 7.0; 7.5)*

Round three's list was four items and all four are done and verified. `SESSION_UX` §3's three-minute session
reads **128 → 139, Name since dawn on the 10th**; its evening reads **175 → 277 → 282 → 297**;
`PROGRESSION` §5's hour marks read 15 and 175; the stale footnote is withdrawn with a sentence saying the
ask is withdrawn; and the Mage's fifteen-minute session writes **row 65** at the ring, where round three
found the Fighter writing +25 and the Mage writing nothing. **The level curve reproduces at all twelve
figures under my own computation** and the cumulative to 25 is 94,381. On top of that: the twenty-hour
experience ledger re-prices and re-adds (§2); the clock table's three checks all reproduce — 514 in-session
hours, 293 open, 484 offline, 998 to the hour, twenty played hours to the minute; the pace model now
reproduces at **all four** intervals (10,970 / 15,020 / 55,520 / 98,770, the cap at hour 195, the subclass at
hour 72); the hour-fifty renown floor adds to 505 head by head under my addition; and the coin ledger gives
back the mark it never earned. The store's discipline is unchanged and the file says it is unchanged on
purpose, which is the right instinct in a round that re-derived the economy.
*To 9:* fix Reyne's *heard* line, which `PROGRESSION` §5's own hour-one working contradicts three paragraphs
after listing him as a row-1 receiver at reach 5; apply the layer weight to the Salt Hall door's health cost;
and say whether a quest's session length is class-dependent and by how much.

### Line 7 — Feasibility and honesty: **8.5** *(8.0; 8.0; 7.5)*

`STATUS.json` is regenerated and correct — I checked all ten word counts against `wc -w` and the total sums
— and it now carries **three named open issues that are honest about what is not derivable**, including one
where the design states which of two readings it took and why, and prices the residue at 5% of a
fifty-hour figure and zero in the traced twenty. Both files that had gone three rounds unopened are opened.
§8's counts are corrected (eleven screens, 441 runs). `PROGRESSION` Decision 7 says "not one of the nine
engagements reproduces"; `FIRST_REGION` §7.3b prints the old fights figure beside the new and says which one
moved; `COMBAT` §10 lists every printed outcome that changed and why, including one that reverses a
conclusion the file had held for three rounds. Self-correction remains the best habit in this bible.

Against it: **`COMBAT` presents twelve parity medians (§6.1) and four threat measurements (§1.9) as harness
output, and no line in the file says the harness does not exist.** In a docs-only phase that is the one place
this bible claims to have measured what it has reasoned, and it is the largest new assertion in 24,000 new
words — the more so because each median is in fact argued from a stated policy difference and would lose
nothing by being labelled a model. Beside it: `FIRST_REGION` §2 claims a prop the trace does not reach; §2
rule 7 promises every fight number is on a table and two are not; and counted-and-unprinted persists for the
sixty map-event templates (fourth round), 60 greetings, 24 items, 20 companion agenda scenes and 240 site
lines — though the 36 knacks round three listed there are now printed in full.
*To 9:* one clause on §6.1 and §1.9 — "modelled from the rules; the harness is the month-three checkpoint";
correct §2's Thrum claim; print the sixty templates.

### Line 8 — Design smells: **8.5** *(8.5; 8.0; 5.0)* — **no hit**

All sixteen clear; the checklist is §7. Round three's largest watch item — the derivation residue under
item 13 — lost five of its six named instances and gained one new one. Round three's item 7 watch (the plain
quest) is answered with a derived rate and a signature. Item 1's word-count nit is gone: the page's own
figure reproduces. Not 9 because **Vo3's Parley shape is unchanged for a third round** — one clause, no
journal text, no outcomes, and it is the ending the twenty-hour trace exists to set up — and because item 13
gained the harness claim in the same round it lost five older instances. I said in round three that I would
fire item 11 if neither of its two watch items moved; **layer 3 moved substantially** — costed to the
bottom, its Even reading derived from a rule, its oil budget checkable and checked — so I do not fire it. It
is now the oldest unaddressed item in the set and it is one round from being a hit.

---

## 7. The design-smell checklist, item by item

| # | Smell | Verdict | Evidence |
|---|---|---|---|
| 1 | A world needing more than one page, or >4 peoples / >5 powers / >3 ages | **CLEAR** | `WORLD` Part One stands alone at **517 words by my own count, exactly the figure it prints** (529 counting dashes, also as printed); four peoples §2.3, five powers §2.4, three ages §2.2, §2.9 forbidding a fourth or a sixth forever. Round three's 13% word-count nit is closed. |
| 2 | Gacha or energy under another name | **CLEAR** | `PROGRESSION` §6's not-sold list names every disguise and refuses each — "timer, key, pull, chest or pity"; §7 rule 6 forbids "daily anything"; the offline cap is seven days for everyone and "nobody can buy an eighth". `SESSION_UX` §5 proves the honest version arithmetically: a check-in player crosses a season in three played hours and finishes it. |
| 3 | Anything sold that buys power or skips the world | **CLEAR** | Every store line names its in-world route or is a colour, and §6's arithmetic is structural: the three things that gate a hero are a regard ledger, a count of heads and an experience curve, and no store line writes to any of the three. The traced hero ends on **five marks** against a six-mark tier-3 blade and could not buy it at any purse, because Holds regard is −65. The most generous thing sold saves four marks of the 24½ a free player earns in twenty hours. |
| 4 | A chosen one, a prophecy, or a hero starting with standing | **CLEAR — and now doubly refused** | `SESSION_UX` §1's creation grants nothing and says why. And `WORLD` §2.9 now has to refuse a prophecy explicitly, because the round added a horizon: "§2.1's horizon is a tally kept by miners, disputed by everyone, and wrong by forty years in either direction depending on who is reading it." A dated future that nobody is fated to meet is the correct shape. |
| 5 | Factions that only react to the hero | **CLEAR — emphatically** | `LIVING_WORLD` §3: "Powers never read the hero's location and never wait for the hero." `FIRST_REGION` §5 runs ninety days with nobody playing. And `WORLD` §2.1's "Who is acting on it now" gives all five a position on the sill nine years before the hero exists. |
| 6 | Lore that never touches play | **CLEAR — and this is the round it stopped being arguable** | The falling lake is now decided by objects: a low-mark post cut by `LIVING_WORLD` §1's season tick, a slate at Thrum's gate two NPCs will read aloud for stated reasons, and a still well at the bottom of the region's dungeon. Every motive, site type and opposition kind still carries an age tag. |
| 7 | A generated quest that reads as a template, names nobody, or connects to nothing | **CLEAR** | Sixteen quests, all naming people with reasons on sites whose state caused them; step 4 forbids a place that is not the cause. Round three's new watch — the plain quest — is answered: the rate is derived at 0.48, the signature is defined, and Q16 is a worked plain quest that closes on its motive's own stake sentence and is not thin. *Watch, unchanged:* **O02 "cutters and deserters"** is still the named generic — "any: this is the fight the engine gives a tired party". |
| 8 | A class with no identity out of combat | **CLEAR — emphatically** | Twelve field verbs with seven parts each and three outcomes each; five in the thumb's corner; two shown being refused on screen with their needs printed. *Nit:* the Fighter's four are still inert in the game's first hour, though the Mage's are not (§5.1). |
| 9 | A system with no decision in it | **CLEAR** | *Nit, unchanged:* **Drill** still has none — a day, a Stillday, a site, quality +1, and the only decision is which town. |
| 10 | An autobattle strictly better or strictly worse than play | **CLEAR, and better argued than in any previous round** | Three pairs with divergences in three different currencies — Encounter A the hand's defence for the AI's speed, B the hand's water for the AI's speed and health, C the hand's speed and one ledger for the AI's hero health — plus §6.1's structural divergence in autobattle's favour: the retreat rule has no pride, so the policy loses fewer companions, and a companion alive is a world state. *Watch, new:* the Mage pair is the one where the hand's only edge is a resource, and §3.2 refills it one room later. |
| 11 | A feature listed without a session example | **CLEAR, and this is now the closest call on the checklist** | Layer 3 moved from "designed and never played" to costed, budgeted and difficulty-derived (§1.4). Three new session examples last round stand. *But `ADVENTURE_ENGINE` Vo3's `Parley` shape is unchanged for a third round* — one clause, no journal text, no outcomes — and it is the shape the twenty-hour trace's own last act sets up, named as a live branch in three files. It is one branch of an anchor whose other branch is written in full, which is why this is not a hit; it is the single most likely hit in round five and I am naming it as such. |
| 12 | Placeholder names | **CLEAR** | No stubs, no brackets, no "Faction 2". *Nit, unchanged:* the given-name tables remain visible alphabet walks in about 60% of 315. |
| 13 | Numbers without a model behind them | **CLEAR — and the residue is now smaller than the models** | Everything round three listed here is closed and I verified each: the level curve at twelve figures, the three stale renown figures in two files, the fights column at all nine engagements, Even against Fair, nine screens against eleven. The models that now reproduce under my own arithmetic are the arc's dps, three time-to-kill lines, the threat derivation, the layer weights, the whole descent budget, the twist rate's fixed point, rule 1 across 120 pairs, the clock table's three checks, the pace model's four intervals, the season formula, the hour-fifty renown floor and the one page's word count. What remains is arithmetic in illustrations — Encounter A's swing count, §10's 1,012, the raw/effective `ER` basis — which is a different and lesser failure. *New watch:* §6.1's twelve parity medians and §1.9's four threat measurements are presented as harness output in a document whose harness is a month-three checkpoint. That is the one place in 124,000 words where a number is claimed rather than shown, and it wants one clause. |
| 14 | A screen that needs two hands or landscape | **CLEAR** | Five zones with percentages, a 60 × 70 mm thumb rule, a 12 mm minimum, one optional out-of-corner touch, autobattle as the accessibility mode with three telegraph channels. |
| 15 | Any name, place, god, race or artefact from another IP | **CLEAR** | I re-checked every proper noun added this round — the sill, the Ebb's band, Vesk Corradine, the Patient and the Closers, the knack names, the arc ability names. All original. Nothing lifts. |
| 16 | "TBD" anywhere | **CLEAR** | Grepped all ten files and `STATUS.json`: zero. |

**No hits.** One near call (item 11, Vo3's Parley), two watch items (item 13's harness claim; item 10's
cistern), and two long-standing nits (Drill's decision; the name tables).

---

## 8. Round three's fifteen issues

| # | Round-three issue | Status | Evidence |
|---|---|---|---|
| 1 | `COMBAT` §1–2: Fling's rate, the armour order, rule 2 versus the husk row | **FIXED** | Fling at 0.8 s and 2 water; §1.1's seven-step order with five worked lines and the slinger corrected 26 → 27; all fifteen kinds given an answer on all three arcs with the Rogue's husk price in seconds. I verified the order in three encounters and the rates in three time-to-kill computations. |
| 2 | `SESSION_UX` §3 and `PROGRESSION` §5 carry the pre-ledger renown figures | **FIXED** | 128 → 139 and Name since the 10th; 175 → 277 → 282 → 297; §5's hour marks 15 and 175; the stale footnote withdrawn by name. |
| 3 | The plain quest has no signature; two rates for one event | **FIXED** | §6's sixth value `—` argued rule by rule; §3.4's 0.48 derived through two gates to a fixed point I re-ran. |
| 4 | §4's down-scale unworked and contradicted by `PROGRESSION` §1 | **FIXED** | `H−1 ≤ S ≤ H+1`, three edits, the same trigger worked at Villager and Voice side by side, and §4 now agreeing with §1 in as many words. |
| 5 | `WORLD.md`'s four defects | **FIXED** | Word count reproduces at 517/529; the Fall's absolute qualified in two files; the Stair disambiguated on the page; the lake given a cause whose arithmetic closes four ways and whose evidence is three props in region one. |
| 6 | `STATUS.json` stale | **FIXED** | Round, note, ten correct word counts summing to 124,281, and three honestly named open issues. |
| 7 | `LIVING_WORLD` §2's example, row 62's weight, the sixty map events | **UNCHANGED** | All three, fourth round. §2 still writes `helped_find_flock` at w6 and gives Reyne no memory on Thaw 1; row 62 still prints w3 and is written at w4 by three files; §5 still counts sixty templates and prints none. |
| 8 | Reyne's *heard* line; `CLASSES` §5's 15:00 and the forge door | **UNCHANGED — and now in a third file** | `PROGRESSION` §5's hour-one working lists Reyne as a row-1 receiver at reach 5 and then, three paragraphs later, has him use the *heard* line "to a hero he has never met". `CLASSES` §5 still says 15:00 and the forge door against §6's own row. |
| 9 | Vo3's Parley shape; layer 3 unplayed, Even for Fair, uncheckable oil | **IMPROVED** | Layer 3 costed to the bottom with lit-hours, flasks and health, its **Even** reading derived from the new layer weight rather than corrected, and the six-flask figure reproducing from two independent directions. **Vo3's Parley is unchanged.** |
| 10 | Hild's rain-only inn block on a fog night; the Firstwater override's hours | **UNCHANGED** | §3 row 6 still reads "18–20 Ford Inn on rain days"; §7.2's Thaw 6 is still "dusk, fog" with Hild by the fire delivering V1's second cause. No schedule carries a `festival_today` variant. |
| 11 | `CLASSES` §2's Growth 1–40, the verb-table routes, four act tags with no rows | **UNCHANGED** | Three headers, a level-30 skin above a cap of 25, six orphan act tags, and five cells where §2 and `ADVENTURE_ENGINE` §3.8 disagree — which my fifteen-minute Fighter session walked into. |
| 12 | `PROGRESSION` §1's level curve wrong in twelve figures | **FIXED** | Recomputed and re-added; I get 551, 788, 1,055, 1,350, 1,671, 2,018 and 1,141 / 4,334 / 8,023 / 13,194 / 24,119 / 52,127 / 94,381 — the printed row exactly — with the double-rounding named as the cause. |
| 13 | The fights column; "eleven hours"; "five heads" | **IMPROVED** | The nine engagements are re-priced off the rate and **all nine reproduce under my arithmetic**, as do thirty enemies, 696 and 4,536 and every running total. The two sentences are unchanged: Drusk's return is still "eleven hours" after a decay the ledger books at the Thaw 33 dawn (25 world hours), and "five heads … are not in it" still omits the eight promoted folk of the 23rd's notice. |
| 14 | No wait or pass-time action in the file that owns the clock | **FIXED** | `LIVING_WORLD` §1's Tick now has four advances, with the verb-day and passing time specified, priced in world hours, costed at zero real minutes, and barred in a dungeon below layer 0. |
| 15 | Companion twists dead for most parties; no row for a truth told at the hero's own cost | **IMPROVED** | §3.4's liveness table measures the problem exactly — all four *companion* entries dead in all four printed states — and names it as the availability problem the family split did not solve. Nothing was loosened, and there is still **no deed row for a truth named in public at the hero's own cost**, which is half of stake type ST6. |

**Eight fixed, three improved, four unchanged.** The four unchanged are all bookkeeping in files whose
systems are sound, and three of them are single sentences.

---

## 9. The punch-list, if a polish round is wanted

The set passes, so this is not a round-five gate; it is what I would hand a team on the way into phase 2,
most damaging first.

| # | File · section | Issue |
|---|---|---|
| 1 | `systems/COMBAT.md` §7 Encounter A | The swing count is about a quarter short (16 against 21), Corva's arrows ignore cutter armour, the beats do not fall on the 1.4 s cadence, and the narration blocks two heavies where the arithmetic blocks two ordinary swings. The hero ends at 44, not 62; the ten-health trade the run exists to show survives. |
| 2 | `systems/COMBAT.md` §6.1 · §1.9 | Twelve parity medians and four threat measurements are presented as harness output in a document whose harness is the month-three checkpoint. One clause fixes it: modelled from the rules, to be measured. |
| 3 | `systems/ADVENTURE_ENGINE.md` Vo3 | The Parley shape is one clause in its third round, and it is the ending the twenty-hour trace sets up. This is the most likely smell hit in the set. |
| 4 | `systems/CLASSES_AND_STANDING.md` §2 · `ADVENTURE_ENGINE` §3.8 | Three "Growth 1–40" headers and a level-30 skin against a cap of 25; six act tags named as deeds with no rows; five cells where the two verb tables disagree, including the Fighter's answer to *hide* and the Rogue's to *break*. |
| 5 | `systems/LIVING_WORLD.md` §2 · §4c · §5 | §2's worked example contradicts §4 row 1 three ways; row 62's w3 is written at w4 by three files; the sixty map-event templates are counted and never printed, fourth round. |
| 6 | `systems/PROGRESSION_ECONOMY.md` §5 · `slice/FIRST_REGION.md` §7.2 · `systems/LIVING_WORLD.md` §2 | Reyne Gorse uses the *heard* line to a hero whose w6 memory he has held since Thaw 1, in three files, one of which lists him as the receiver three paragraphs earlier. |
| 7 | `slice/FIRST_REGION.md` §3 rows 1–25 | Hild's inn block is rain-only and Thaw 6 is fog; no schedule carries a `festival_today` variant, so the Firstwater override still has no hours and the game's first playable deed has receivers nobody can name. |
| 8 | `systems/COMBAT.md` §1.9 · §3.2 · `SESSION_UX` §3 | The planning number is measured on raw `ER` and applied to effective; `SESSION_UX` applies it raw to a fight `COMBAT` §10 rates at effective 90. Pick one basis. |
| 9 | `systems/COMBAT.md` §3.2 · §8 | The descent budget is a party pool with no rule distributing it across three bodies, and the Shield is both a quarter of the pool and the target of most of it. |
| 10 | `slice/FIRST_REGION.md` §6 · `systems/COMBAT.md` §6 | A Rogue's return from layer 3 after the second waking requires leaving a companion two layers up, which moves the Ring Stair from Even to Overmatched by the file's own bands. |
| 11 | `systems/ADVENTURE_ENGINE.md` §3.4 · `LIVING_WORLD` §4 | Thirteen of thirty twists are dead in every printed state, four of them the *companion* family; and there is still no deed row for a truth told at the hero's own cost. |
| 12 | `slice/FIRST_REGION.md` §2 · `world/WORLD.md` §2.1 | §2 claims Thrum's cut-tally is a prop the traced twenty hours reach; the trace never goes to Thrum. And the Ulder's answer is the one of §2.1's three tests with no object anywhere. |
| 13 | `systems/COMBAT.md` §10 · §1.8 | 1,012 against §3.2's own 1,210; the rider's raw dps omits its charge; the rider's charge and the stone-warden's slam have no interval, against §2 rule 7. |
| 14 | `slice/FIRST_REGION.md` §7.3a · `systems/PROGRESSION_ECONOMY.md` §1 | "Eleven hours" is twenty-five; "five heads" is thirteen; and the halving rule does not say whether a dungeon room or the dungeon is a "site", which is worth 42 experience in the traced twenty hours. |
| 15 | `world/WORLD.md` Part One · `ADVENTURE_ENGINE` §7.2 | One clause saying a Salted is made and not born, and one saying which town has no river; and H2's printed signature still carries the pre-split twist family. |

---

## 10. Verdict

**Pass.** Eight lines at 8.5, no design-smell hit, and this is the round the two files nobody had opened got
opened and turned out to hold the two things the design was missing rather than the two things it was
hiding. `COMBAT.md` went from a file with no cadences to a file in which I could compute, with a pencil and
nothing else, a Mage's water for a fight, a Rogue's seconds against a husk, a Fighter's Hold loop, four
threat values, eleven room ratings and the exact health, oil and water a party has left at the bottom of the
Sunk Court — 303 of 750, the sixth flask lit — and I got the file's numbers every time. `WORLD.md` gave the
falling lake a cause that is the Cutting's own cause still running, whose arithmetic closes at four
independent points, which four peoples answer four self-serving ways, of which one is right and disbelieved
for being convenient, and which a player settles by standing in front of a notched post at Wickery and a
slate at Thrum's gate rather than by being told. That is what "lore that touches play" is supposed to mean
and this bible had not achieved it before. Around those two, the round did the unglamorous work as well: the
twist rate is one derived figure with a fixed point I re-ran rather than two assertions ten times apart; the
down-scale rule is worked at two tiers from a printed seed and now agrees with the file that contradicted
it; the plain quest — half the engine's output — has a signature argued rule by rule; the experience ledger
re-prices to 696 and 4,536 and every one of its fourteen running totals reproduces; the level curve is
right at all twelve figures; the clock table's three checks, the pace model's four intervals and the
hour-fifty renown floor all re-add under my arithmetic; and the tuning burden was corrected upward by three
times, against the designer's own interest, which is the habit that has made this set worth reading.
What is left is real and it is small: a swing count in one illustration, six words in three headers, a
greeting given to a man who is standing in the ledger three lines above it, sixty templates counted for a
fourth round, and one quest branch that has been a clause since round two. None of it changes a system, an
outcome or a claim the design rests on, which is the definition of the bar it has reached. **Phase 2 should
test the combat model first and test it in the harness the parity medians were written as if it already
had** — build the 441-run pass, run Encounter A, and see whether twenty-one cutter swings or sixteen come
out the other end; everything else in this set has now been checked by somebody, and that is the one number
that has only ever been checked by me.
