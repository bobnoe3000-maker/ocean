# Critic — Round 3

Judged against `rpg_design_prompt.txt` and against my own round 2 report. I read all ten bible files in
full. I re-added both renown ledgers by hand from the deed table and cross-checked the total from the
other end; I checked all 110 trigger→motive draws against all 48 cause lists by script and then walked
fifteen of them by eye; I rolled an eighteenth and a nineteenth quest from the printed tables with a
printed die stream; I played three paper sessions (a Fighter's first three minutes, a Rogue's fifteen,
a Mage's evening); I re-ran §6's three repetition rules, the level curve, the season formula and the
pace model with a calculator; and I re-walked the smell checklist. Every claim below cites a file and a
section or line.

**Verdict up front: this round does not pass. Four lines move up, four hold, none falls.** Scores:
world 8.0, living world **8.5**, adventure engine 8.0, classes and standing **8.5**, combat 7.5,
economy/session/UX 8.0, feasibility 8.0, design smells **8.5**. Four lines reach 8.5 for the first time.

**The claim that mattered most is true.** The two renown ledgers reproduce each other exactly, and both
reproduce under my own arithmetic from the printed rows. That was the round's stated object and it is
done, verified three ways. So is the link fix: 110 draws, 0 broken. So is the showcase's cap check.

What is left is the same shape of problem as round two, one layer further out: **the ledger reached the
two files that derive from it and did not reach the two files that show it to the player**, and **two of
the ten files have now gone three rounds without being opened** — `world/WORLD.md` (4,533 words in all
three rounds) and `systems/COMBAT.md` (4,687 in all three) — which is exactly where the four unchanged
issues live.

---

## 1. The ledgers, re-added by hand

This was the round's central claim, so I did it three ways: forwards from the deed table, across the two
files, and backwards from the final head count.

### 1.1 Do the two files agree with each other?

**Yes, at every point where both print a figure.** `CLASSES_AND_STANDING` §6 prints 23 rows;
`FIRST_REGION` §7.3a prints 29 (it splits a day into one row per deed where §6 groups by day). Comparing
day-end totals:

| Day | §7.3a | §6 | Day | §7.3a | §6 |
|---|---|---|---|---|---|
| Thaw 1 | 15 | 15 | Thaw 22 | 282 | 282 |
| Thaw 2 | 15 | 15 | Thaw 23 | 297 | 297 |
| Thaw 7 | 67 | 67 | Thaw 27 | 297 | 297 |
| Thaw 8 | 79 | 79 | Thaw 29 | 293 | 293 |
| Thaw 9 | 128 | 128 | Thaw 30 | 303 | 303 |
| Thaw 11 | 139 | 139 | Thaw 33 | 285 | 285 |
| Thaw 13 | 143 | 143 | Thaw 34 | 394 | 394 |
| Thaw 14 | 175 | 175 | Thaw 35 | 402 | 402 |
| Thaw 16 | 175 | 175 | Thaw 39–42 | 402 | 402 |
| Thaw 21 | 277 | 277 | Thaw 40 | 402 | 402 |

**Nineteen day-end totals, identical.** The four intra-day figures both files print also match — 42 and
67 on the 7th, 71 on the 8th, 280 at the Thaw 34 dawn. Where §6 groups, the grouped delta equals the sum
of §7.3a's split deltas: Thaw 14 is 27 + 5 = 32; Thaw 23 is 13 + 2 = 15; Thaw 34 is 3 + 100 + 11 = 114.
Round two's four discrepancies (Marrock missing from the 7th, Ondrin's five with no row, Drusk missing
from the 34th, Merrin's decay missed on the 33rd) are all closed, and closed correctly.

### 1.2 Does the ledger reproduce from `LIVING_WORLD` §4?

**Yes.** I looked up every row and wrote to everyone its *Who takes it* column names. The arithmetic,
in full, deltas in my own hand:

- **Thaw 1, row 1 `found_stock` w6.** Receivers: the herder who lost them (+2) = Tobbin w8 · reach 1; the
  owner Reyne · 5; "the one who warned the hero" Hild · 5; witnesses Garrow · 2 and two ford folk · 1+1.
  **+15 → 15.** ✔
- **Thaw 2, row 57 `worked_the_trade` w2.** Cap 4; Garrow holds 6. **+0 → 15.** ✔
- **Thaw 7 10:00, row 27 `broke_our_work` w6.** "the crew present, the foreman (+2), the owning power's
  factor": Rukk 2 + five hewers 5 + Marrock 20. **+27 → 42.** ✔ (Six Skerrow at the camp, which §7.2's
  scene states; round two counted the two who stepped forward.)
- **Thaw 7 18:00, row 65 `moved_them` w6.** "the one who moved (+2), everyone who heard the asking, their
  power's Speaker": Ondrin 5 + Sarane 20, and Sarane is at the ring at all hours by §3 row 11. **+25 → 67.** ✔
- **Thaw 8 16:00, row 2 `saved_livelihood` w9.** Owner +2 +2 (whole living) = w10: Bram 2 + Corva 2. **+4 → 71.** ✔
- **Thaw 8 dusk, row 6 `drove_off_raiders` w8.** Wat Hobb +2 = 5, Col 1, two yard folk 2; "the beaten
  band's survivors" writes to nobody because `COMBAT` §7 Encounter A kills all four. **+8 → 79.** ✔
- **Thaw 9 10:00, row 4 `carried_the_dues` w4.** "the sender, the receiver, the receiver's clerk" plus
  witnesses: Idony 20 (named party, w6) + Idren 20 (w6) + Sabel 2 + Drusk 5 + two blades 2. **+49 → 128.** ✔
- **Thaw 11 18:00, row 5 `carried_kin_word` w7.** Pell 5 (+2 → w9), Osk 5 (in his 18–21 inn block, and his
  *hurt* window now closes on the 10th), Dell Sallow 1 (kin at −2 → w5). Idony raised, adds nothing.
  **+11 → 139.** ✔
- **Thaw 13 20:00, row 13 `saved_keeper` w9.** Ilune 2 (+2, capped at 10), two village folk 2; Sarane and
  Hild rewritten; Drusk takes the row's *hunter* w4. **+4 → 143.** ✔
- **Thaw 14 15:00, row 8 `filled_the_levy` w6.** Dell Coombe 5 (+2 → w8), Aud 20, Hal and Piet 2; Corva and
  Dell Sallow already counted. **+27 → 170.** ✔ · **19:00, row 62 via the meeting tick:** Jory 5. **+5 → 175.** ✔
- **Thaw 16, rows 20 + 19 + 26.** Every receiver counted. **+0 → 175.** ✔
- **Thaw 21 22:00, rows 26 + 52.** Corrow 100 (leader rule: his second seat, the Wrack's third goal, and he
  is standing there), two sentries 2; row 52's foreman, crew and paying factor all counted. **+102 → 277.** ✔
- **Thaw 22, rows 53 + 63.** Kit 5. **+5 → 282.** · **row 64 `ran` w2: +0.** ✔
- **Thaw 23, row 61 `posted` w3:** Merrin 5 + eight promoted folk 8 = **+13 → 295**; **row 62:** Gulla 2 =
  **+2 → 297.** ✔
- **Thaw 29 dawn, decay.** The 9th's w4s reach 2 on day 29: Sabel −2, two blades −2. Drusk holds the 13th's
  w4; Idony and Idren were written at 6. **−4 → 293.** ✔
- **Thaw 30, row 10 `drilled_us` w7.** Ten watchmen at w3 = 10; captain and reeve counted. **+10 → 303.** ✔
  (Thaw 30 is a Stillday by §5's list, which `CLASSES` §2.5's Drill needs.)
- **Thaw 33 dawn, decay.** The 23rd's w3s reach 2: eight folk −8, Merrin −5; Drusk's 13th w4 reaches 2: −5.
  **−18 → 285.** ✔
- **Thaw 34 dawn, decay.** Jory's 14th w4 reaches 2: −5. **−5 → 280.** ✔
- **Thaw 34 07:00, rows 7 + 9 + 12.** Three Wickery levy men 3; High Reeve Tull 100 (row 9 names the seat and
  a goal moved); Drusk back at w10 = 5, four Chainmen 4, Orsa 2. **+114 → 394.** ✔
- **Thaw 35 dawn, row 61.** Eight promoted folk 8. **+8 → 402.** ✔
- **Thaw 39–42, rows 22 + 23.** Every receiver counted. **+0.** **Thaw 40: no decay** (the drill's w3 was
  replaced at w9 on the 34th and the clock restarted). **402.** ✔

**All three agree. `ledger_verified: true`.**

### 1.3 The check from the other end

§7.3a offers a reader's check and it holds: 24 named-or-promoted-and-named heads at 360 (I re-added them:
1+5+5+2+2+20+5+20+2+2+5+20+20+5+5+5+2+5+20+100+5+2+100+2 = **360**) plus 42 folk at reach 1 (2+5+1+2+1+2+1+1+2+10+4+3+8 = **42**) = **402**, arrived at from the far end. The promoted-pool count also holds:
counting every weight-3-or-more write to an unnamed person gives 52 before the Thaw 35 notice, plus the
two Chain blades of the 9th, who still hold a slot at weight 2 — **54 of 60**, and 46 before that dawn,
which is exactly what §7.2 claims.

### 1.4 Four things I found while doing it

These do not break the total. They are printed numbers that do not reproduce.

1. **"Eleven hours" is twenty-five.** Drusk decays out at the Thaw 33 **dawn** (§7.3a books it there) and
   is rewritten at Thaw 34 07:00. That is 25 world hours. `FIRST_REGION` §7.2, §7.3a rule 3 and §7.3a's
   Thaw 34 row all say "eleven hours after decaying out of it".
2. **"Five heads that were once in the ledger are not in it" — it is thirteen.** §7.3a's closing check
   names Sabel, two Chain blades, Merrin and Jory. The eight promoted folk of the 23rd's notice also fell
   on the 33rd and were never rewritten; they are correctly absent from the 42-folk count and incorrectly
   absent from the sentence.
3. **Row 62's printed weight is 3 and both ledgers write it at 4.** `LIVING_WORLD` §4c row 62
   `named_at_the_inn` is "3 · 10/30". Both ledgers write Jory (Thaw 14) and Gulla (Thaw 23) at w4, citing
   the meeting tick's "strongest memory at −2" off a w6 source. The tick is right and the row is wrong,
   and `LIVING_WORLD` §4's preamble says the row governs. The endpoint is unaffected (both heads are
   rewritten or outside the window) but two intermediate day-end totals depend on it.
4. **`LIVING_WORLD` §2's own worked example contradicts the table it introduces.** It gives Tobbin
   `(hero, helped_find_flock, 6, Thaw 1)` — an act tag that is not a row, at a weight row 1 `found_stock`
   contradicts (the herder takes +2 → w8) — and states that **Reyne Gorse has no hero-memory on Thaw 1**
   and picks one up at w4 by the meeting tick on the 2nd, where both ledgers write him at w6 as row 1's
   named owner on the 1st. `CLASSES` §5's worked example carries the same scene with the flock home "by
   15:00" and Garrow "at the forge door", against §6's and §7.2's 22:00 and the Ford Inn door.

---

## 2. Fifteen sampled trigger→motive links

I extracted §3.1's *Motives it can raise* column and §3.2's *Cause* column mechanically and checked all
110 draws against all 48 cause lists. **36 triggers, 48 motives, 110 draws, 141 cause entries, 0 broken.**
The documented asymmetry is exactly right: the cause lists are the longer set, and no draw is illegal.
Then I walked fifteen by eye — the fourteen the designer claims to have fixed by adding the trigger, the
one fixed by correcting the draw, and ten drawn at random (some overlap):

| Draw | In §3.1's list | In the motive's cause list | Sane? |
|---|---|---|---|
| TR01 → M12 *duty-cannot-travel* | ✔ | TR01, TR07, TR23, TR25 ✔ | a lost ferry is a duty that cannot travel ✔ |
| TR05 → M01 *hungry-house* | ✔ | TR05, TR10, TR23, TR26 ✔ | ✔ |
| TR10 → M45 *the-wall-is-not-ready* | ✔ | TR09, TR10, TR17, TR22 ✔ | ✔ |
| TR16 → M23 *something-walks-by-day* | ✔ | TR05, TR16, TR17, TR19 ✔ | a cut well-ring is what lets something walk ✔ |
| TR17 → M24 *my-brother-is-down-there* | ✔ | TR15, TR17, TR24, TR34 ✔ | ✔ |
| TR19 → **M29** *the-quay-is-short* | ✔ (M35 struck) | TR20, TR26, **TR19** ✔ | correcting the draw, not the list, was the right fix ✔ |
| TR25 → M36 *a-place-at-the-table* | ✔ | TR23, TR25, TR27 ✔ | a Moot that sits on a festival ✔ |
| TR28 → M38 *the-ledgers-must-be-read* | ✔ | TR07, TR27, TR28, TR29 ✔ | M38's own stake says burning changes nothing ✔ |
| TR29 → M27 *the-factor-must-not-know* | ✔ | TR06, TR10, TR29, TR33 ✔ | ✔ |
| TR29 → M44 *my-home-is-being-taken* | ✔ | TR06, TR08, TR23, TR29 ✔ | a posted writ *is* a home being taken ✔ |
| TR30 → M19 *the-flood-is-coming-back* | ✔ | TR03, TR20, TR30, TR32 ✔ | ✔ |
| TR32 → M09 *the-old-grief* | ✔ | TR13–16, TR32, TR36 ✔ | ✔ |
| TR34 → M20 *who-lit-it* | ✔ | TR10, TR28, TR34 ✔ | "a body come up out of the mud" is in M20's own want ✔ |
| TR35 → M47 *the-thing-we-have-refused-forty-years* | ✔ | TR12, TR21, TR27, TR35 ✔ | ✔ |
| TR36 → M09 | ✔ | as above ✔ | ✔ |

Ten more at random, all legal: TR23→M01, TR06→M44, TR26→M35, TR20→M06, TR27→M38, TR03→M07, TR25→M12,
TR10→M45, TR16→M23, TR30→M19. **The script's claim is true.** Round two's issue 2 is closed.

I also re-ran §6's own checks. **Rule 1:** all 66 pairs of the twelve differ in four or five of five
fields; the distribution is 44 pairs at five, 22 at four, none at three. ✔ **Rule 3:** 22 verb slots
across the twelve — answer 3, choose 3, lead 3, descend 2, hold 2, investigate 2, parley 2, break 1,
carry 1, hide 1, search 1, witness 1 — maximum 3 against a cap of 4, and `break` is no longer zero. ✔
**Twist families:** kin 2, debt 2, place 4, agenda 4, companion 4, paper 5, old 3, season 3, door 3 = 30,
exactly as §3.4 states. ✔ **Rule 2 is the one that does not close cleanly:** in the printed order of the
twelve, *place* sits at positions 4 (V1, T04) and 6 (H3, T05) — two apart, inside four. §6 defends it by
converting days to offers, and the conversion works only if "offers" means the 40–60 the region generates
rather than the 20–30 a player sees; the same paragraph prints both numbers.

---

## 3. Two more quests, rolled at the table

Dice from a printed, reproducible stream (Python `Random(1811)` and `Random(1911)`), consumed in order,
every re-roll shown. I did not choose the outcomes.

### 3.1 Quest eighteen — *The Fires Are Out*

*State:* the traced Fighter's own campaign continued. **Green 12, Wickery.** Carried from §7.2/§7.4:
`well_ring_intact` held, `toll_house = never`, the mill turning, `marrock_refuses_court_bronze`,
`salt_pans = closed` since Thaw 39 (a husk came up the sluice the hero broke on the 22nd), Pellow Orsa
the new Chain sergeant, Stair −70 and *hunting*, Moot +100, `ledgers_to_be_read` pending with Aud.
Green flags: `shelf_dry`, `fields_busy`. Hero: **Voice**. Party: Corva (Bow), Gulla (Shield).

| Step | Die | Roll | Row | Check |
|---|---|---|---|---|
| Trigger | d36 | **36** | TR36 `salt_rising(NPC)`, `drawer_untaught` | no NPC is going grey in this run and no untaught Drawer is named — **not live, re-roll** (§3.12 step 1) |
| Trigger | d36 | **21** | TR21 `build_pending`, `toll_house = built` | `toll_house = never` for this bridge, this campaign — **not live, re-roll** |
| Trigger | d36 | **34** | **TR34 `missing(NPC)`, `corpse_found(site)`** | live: two Chainmen dead in the Salt Pans since Thaw 39 and the Stair has not gone back ✔ |
| Motive | d3 of TR34's {M04, M24, M20} | **1** | **M04 *a-body-on-the-mud*** | cause list TR34, TR17 contains TR34 ✔; stake real — "the missing are counted as Wrack, and the town believes the worst about the Shelf" is exactly what a shut pan with two dead in it does ✔ |
| Giver | d3 of M04's {G12, G06, G01} | **2** | **G06** watch captain → **Dell Coombe** | reach 5, at *owes* (row 9, w10 from the bridge), alive, not fled ✔ |
| Place | none | — | **S13** the Salt Pans (the cause); **S11** the watch-house (giver) | the place is the site whose state is the cause ✔ |
| Opposition | none (state names it) | — | **O07 a Salted husk** with **O16 the ground and the season** (`shelf_dry`, salt air, no water) | ✔ |
| Twist | d30 | **3** | T03 *the dead man's debt* | precondition wants a named NPC dead inside thirty days holding a Stair debt; the two dead are the Company's own men — **fails, re-roll** |
| Twist | d30 | **12** | T12 *the companion knows the place* | precondition wants a party companion's agenda to name the site; Gulla's names the Court, Corva's names the Stair as a power — **fails, re-roll** |
| Twist | d30 | **6** | **T06 *the site is already taken*** | precondition: a band moved to the place after the quest was generated — the Pans are the Stair's only daily coin (S13) and it is at −20 marks a day, so Orsa's band is there reopening the sheds ✔ third roll, inside step 6's cap; family *place* has not appeared inside four ✔ |
| Verbs | M04's list | both (the twist adds a step) | ***investigate, search*** | `choose` not used ✔ |
| Tier | — | — | stake **ST6** (a body, and a truth) | see the finding below |

*Signature* `(G06, investigate, ST6, O07, place)`. Against the last twelve offers of this run — V3, V2,
V1, H2, H1, H3, N1, Vo1, "Corrow's Terms" — the closest is four fields, so rule 1 clears. *But against
**V1**, `(G03, investigate, ST1, O03, place)`, it differs in only three of five*, and V1 is out of the
window only because it was offered ninety-six days ago. `investigate` + `place` is a common pair and the
five-field signature has less resolution than §6 implies.

*Journal (assembled by step 9 — greeting tier* owes *→ M04's want in the Vael register → S13's dark-line
→ O07 as the giver knows it → T06's line):*

> "Dell Coombe has the slate out on the sill and nothing on it. 'Fires out at the pans since Thaw
> thirty-nine. Two of Idren's men in there and nobody has been back for them, which tells you what the
> Company thinks a blade is worth. Nine weeks, and Wickery has decided what did it, and what Wickery has
> decided is that the whole Shelf walks now. My watch will not go past the reeds after dark and half of
> them will not go at noon. Go out and see what is between those pans and come back and tell me the true
> thing, whatever it costs the man who tells it.' Then, at the door: 'There's nobody at that camp but us,
> is what I was told.'"

The street gets **R16** the same day: *"Fires out three days. No salt, no pay, and the fish are coming in
anyway."* (**R15** is also live and would fire on the Shelf.)

*Outcomes:* **Bring the two up and name them** — row **24** `brought_the_dead_home`, w8, the Pans' hands
and whoever keeps the ground; clears `corpse_found`, writes `grave(Wickery)`. **Seal the sluice head and
put the pans back to work** (Fighter *Break* rating 3, or a Mage's *Flood* from the Salt Hall cistern) —
row **2** `saved_livelihood`, w9, whose deed line names a **pan** explicitly: the owner (the Stair, +2)
and the workers; "the power that stopped it −15" — which is the hero, nine weeks ago, with his own axe.
**Arrive and find Orsa's band in the sheds** (T06's edit): the opposition is swapped for whoever is
actually there, the giver did not know and will not believe it, and the hero is at Stair −70 and *hunted*.
**Say nothing and leave it** — row **39** `refused_the_call`, w5, Dell +2 → w7 and the watch; Moot −10;
the pans stay shut, the Stair's daily coin stays off, and its next move is to call farm debts to cover it,
which is Wrack recruits.

**Two findings from this roll.**

- **There is no deed row for a truth told at the hero's own cost.** M04's want is "to know who it was and
  what took them"; stake type ST6 is "a body or **a truth** (what happened, and who knows)". The table has
  row 24 for the body and row 37 `lied_to` for the lie. Saying aloud that the thing came through a sluice
  the hero broke — the branch the quest is built around — writes nothing. This is the same shape of gap
  round two found for *parley*, which round three closed with row 65; it is one motive further along.
- **The quest lands squarely on `ADVENTURE_ENGINE` §4's down-scale case and the rule cannot be executed.**
  M04's scale is V–N and the hero is Voice. §4 says "A Villager quest is never re-offered to a Voice hero
  as a stake; instead the same trigger becomes a Voice quest with the village's problem folded in as a
  twist" — with no mechanism for choosing the Voice-scale stake and no worked example anywhere. Meanwhile
  `PROGRESSION_ECONOMY` §1 now states the opposite resolution, and states it well: "a quest's experience is
  paid at **the stake's tier, never the hero's** … a lost flock is a Villager stake and pays 60–120 to a
  Villager and to a Voice." Two files, two answers, and §4 was not updated.

### 3.2 Quest nineteen — *The Seed Under Seal*

*State:* a **different run** — one in which the hero did V3 and H1 and nothing else, so the baseline
season (§5) stands. **Thaw 26, Sallowford, 08:00, rain.** Live: `dam` and `wheel_stopped` (Thaw 5);
`fenn_mill_control = Stair` and Bram *ruined* (the Thaw 24–26 seizure); `debt_called(Sallowford)` and
Idony *indebted-called* (Thaw 10); Ilune *imprisoned* (13); `contract(ash strip) unwitnessed` (16);
`salvaging(Court)` (20); a second Chain band raised (25); the Holds felling to the ash from the 26th;
`well_unblessed`; `roads_slow`. Hero: **Rogue**, trade carter, level 4, renown 62, **Hand**. Party: Osk.

| Step | Die | Roll | Row | Check |
|---|---|---|---|---|
| Trigger | d36 | **23** | **TR23 `condition(ruined)` on a duty-holder** | live: Bram is *ruined* as of the 24th and the valley's flour was his duty ✔ |
| Motive | d3 of TR23's {M12, M44, M01} | **1** | **M12 *duty-cannot-travel*** | cause list TR01, TR07, TR23, TR25 contains TR23 ✔; stake real — Sallowford's seed is in a loft under Anser Sabel's seal and the sowing does not wait ✔ |
| Giver | d4 of M12's {G09, G08, G06, G04} | **1** | **G09** reeve → **Idony Sallow** | reach 20; holds row 8's w6 from H1, so *knows*, not *hates*; her *indebted-called* override puts her at her table 6–20 ✔ |
| Place | none | — | **S03** Fenn's Mill (where the condition can be undone), **S08** the counting-house | ✔ |
| Opposition | none (state names it) | — | **O14 a writ and a bailiff** — Sabel, with the Chain a street away | the kind a Fighter cannot fight ✔ |
| Twist | d30 | **7** | T07 *the way in is under water* | precondition wants high water; the dam is up, so the Rudd below it is **low** — V1's whole premise — **fails, re-roll** |
| Twist | d30 | **12** | T12 *the companion knows the place* | Osk's agenda is Sallowford's band, not the mill — **fails, re-roll** |
| Twist | d30 | **22** | T22 *the companion loses by it* | the stake is not Osk's agenda-object — **fails.** Third re-roll spent: **the quest is offered plain** (§3.12 step 6) |
| Verbs | M12's list {carry, answer} | **2** | ***answer*** | no twist, so one verb (step 7) |
| Tier | — | — | Hand; stake **ST8** | 1–2 marks, 150–250 XP |

*Journal:*

> "Idony Sallow has not left her table in sixteen days, which is what *indebted-called* looks like from
> the outside. 'Bram's mill went to the Kest on the twenty-fourth and he is at the inn from eight in the
> morning. Sallowford's seed is in his loft under Anser Sabel's seal, and the sowing does not wait for a
> ledger. Thirty-one souls, and the green is a sheet of water and every shutter on it is shut but mine.
> Sabel will not break a seal for me — I owe the Company three marks myself and she knows the day. She is
> a careful woman with a correct piece of paper and six blades a street away. Go and be asked what I would
> be asked, and answer it better than I would.'"

The street gets **R02**: *"They've called it on Sallowford. That's the third house this season."*

*Outcomes:* **Answer with a second paper** (Rogue *Forge* a Moot letter, or *Fence* the seed out through
Wat Hobb's cart) — row **3** `saved_home`, **w10, never decaying**, whose deed line is "a seizure paid off,
**delayed** or turned away": Bram +2 at the cap, Sabel at the row's own w5 *against*, Idony as the reeve;
Stair −20, Moot +10 — with Forge's own go-wrong live, row **33** `forged_against` if Sabel reads it.
**Answer straight and pay the arrears** — row **17** `paid_their_debt`, w8; shut at Hand by coin, which is
T10's condition arriving without T10. **Say nothing** — §3.8's "silence is an answer": row **39**
`refused_the_call`, w5, Idony +2 → w7 and the green; Moot −10; the seed goes into the book at the
Reckoning, `harvest = poor` into Reap, and the Wrack take a third recruit out of the village. **Say yes
and not go** — row **66** `broke_word`, w6 *against*, the row added this round: Idony +2 → w8; the engine
will not use her as a giver for twenty days, which closes Sallowford.

**Do the caps hold for quests the designer did not choose? Yes — and the plain quest is unspecified.**

- Rule 1: `(G09, answer, ST8, O14, —)` differs from all twelve in four or five fields **on any reading of
  the fifth**. Rule 3: `answer` stands at 3 of the last twelve offers in this run, under the cap of 4.
  Rule 4: no giver twice inside three days, no site with three open quests. **The caps hold.**
- **But the signature has no defined value for a plain quest, and §3.12 step 6 says "about a third are".**
  If a null twist family is a value, §6 rule 2 forbids two plain quests inside four, which contradicts a
  third of the output. If it is not a value, rule 1's "four of five" has four fields to work with for a
  third of the output. §6 states neither, and the anti-repetition system is the design's own answer to its
  own biggest named risk (§8.4, "risk: sameness").
- **§3.4 and §3.12 print two rates for the same event.** §3.4: "a blind d30 with three re-rolls fails the
  family rule on (13/30)⁴ = 3.4% of quests, which are offered plain." §3.12 step 6: "If none passes, the
  quest is plain — and about a third are." Ten times apart, unreconciled, on facing pages. (The 3.4% is
  also 3.5%: (13/30)⁴ = 0.03526.)
- **The round-three split of *agenda* into *agenda* + *companion* fixed a distribution problem and created
  a precondition problem.** All four *companion* twists need a party companion whose agenda names the site
  or is the stake. Osk's agenda is his village's militia band, so all four are dead for this party, and two
  of my three re-rolls landed on them. §3.4's blocking model counts only the family rule and does not model
  precondition failure at all — which is what actually failed, five times out of six across my two rolls.

**Do they read as authored?** Q18 does, and it is the better of the two: the thing that shut the pans came
up a sluice the hero broke nine weeks earlier for an unrelated reason, the giver is a watch captain who
owes the hero his life, and the twist puts the hunting power in the room. Nobody is generic and every
element is state the hero made. Q19 is thinner — one verb, no twist, a bailiff and a correct paper — and
it is a fair, undramatic quest rather than a generic one; the deed rows on all four branches are what keep
it honest. Together they are the right answer to "does the engine work for a stranger": yes, and it works
better the more history the state has in it.

---

## 4. Three paper sessions

All three classes have now been played in a session by somebody (the bible plays a Fighter, a Mage and a
Rogue; I played a Rogue, a Mage and a Rogue in round two), so none remains untried. I chose the three
combinations nobody has traced: **a Fighter's first three minutes**, **a Rogue's fifteen on a quest
written for a Fighter and re-written for a Mage**, and **a Mage's evening**, which no file anywhere plays.
`[HOLE: …]` marks where I had to invent or could not resolve.

### 4.1 The three-minute session — a **Fighter**, Thaw 1 06:00

The app opens cold. **Creation is now a screen** (`SESSION_UX` §1, "Creation — the first screen anyone
sees"): a name with a suggest button off the printed Vael table, a trade with its §2.5 verb and its master
in the village, a class shown as its four arc petals *and* its four field verbs, and a hand. "Renown 0, no
memories, no letters, no marks on the map beyond the village … Creation writes nothing to the world."
**Round two's hole 1 is closed, and closed better than I asked for** — showing the field verbs at the class
tap is the right idea.

06:00, the well: the Firstwater anchor, dialogue, paused. 06:00→07:00 in the open is one world hour, two
real minutes. 07:00, Tobbin behind the smithy: **V3 accepted.**

`[HOLE 1: the Firstwater override still has no hours. FIRST_REGION §7.2 says "everyone is at the well
because it is Firstwater's hour, an override"; LIVING_WORLD §1 lists festival_today as a season flag and
§3 says schedules take season-flag overrides, but not one of the twenty-five schedules in §3 prints a
festival variant. Only Ondrin's row mentions Firstwater at all, and only to say he is not coming. I cannot
say who is still at the well at 07:00, which is what the Rogue's Listen and the Mage's Dowse need in this
same hour.]`

`[HOLE 2: the hour-one three-minute session still ends with no world change. SESSION_UX §3 opens "Every
session ends with a world change the player can name" and the brief requires it of the three-minute
session by name. FIRST_REGION §7.2 still offers "a quest accepted, a shepherd's name in the journal and a
marker seven miles down the valley" — a journal change and a map change, no deed, no site state, no
memory, and the ledger's first entry is fifteen world hours later at 22:00. SESSION_UX §3 has answered
this for its own flagship example, the Thaw 11 errand, which now ends with row 5 and a door; it has not
answered it for the first three minutes anybody plays.]`

**A finding, not a hole: the Fighter is the one class with nothing to do in the first hour.** Break needs
a `breakable`; Carry needs a burden; Drill needs a Stillday, and Thaw 1 is not one (§5's list starts at
day 6); Stand needs a contract, which powers *Post* at Hand and above. A Rogue can Listen at Sallowford's
well — one of the nine printed listening spots, and the Firstwater crowd guarantees the two NPCs the need
list wants — and a Mage can Dowse the ford. The trace's own class, and the class the tutorial is written
around, is the only one whose out-of-combat kit is inert at hour one.

**Completes, with two holes.** (Round two: three.)

### 4.2 The fifteen-minute session — a **Rogue** on V1, Thaw 6–7

`SESSION_UX` §3 writes this session for a Mage and it is the best new page in the file. The Rogue's road
through the same quest is unwritten, so I walked it.

Thaw 6 dusk, the Ford Inn: Bram idle-angry by his `wheel_stopped` override ✔ (§3 row 3, 10–20 Ford Inn).

`[HOLE 3: Hild Marrow cannot be at the Ford Inn on Thaw 6. Her schedule (FIRST_REGION §3 row 6) is
"18–20 Ford Inn on rain days, else her house". The away page for the gap — printed identically in
LIVING_WORLD §1, FIRST_REGION §7.2 and SESSION_UX §4 — is "Rain, then clear, then fog tonight", and §7.2
opens the scene "Thaw 6, dusk, fog". Hild is at home. She is the one who delivers V1's second cause —
"the Rudd is low below the dam too" — which is what makes T04 two causes and what sends the hero to the
ring at all. This is a new schedule contradiction in the same round that fixed three others.]`

Thaw 7, four hours up the Wend track at half speed, walked: the Hewers' Camp at 10:00 ✔ (§1's table).
Rukk states Thrum's claim. Now the Rogue's answer.

`[HOLE 4: the Rogue has no *break*. ADVENTURE_ENGINE V1's outcome offers "Rogue: cut the slide-ropes at
night"; §3.8's break row gives the Rogue "cut the right rope at the right hour"; CLASSES §2's verb table
gives the Rogue "pick the lock instead". CLASSES §2.5 gives the Rogue Listen, Shadow, Forge and Fence, and
not one of them touches a `breakable`. Three files name a Rogue answer and none of them resolves it.]`

`[HOLE 5: "at night" and "the right hour" still have no clock. SESSION_UX §1 Zone A now specifies the
screen — "Long-pressing the clock glyph is where LIVING_WORLD §1's pass-time action lives … the world
hours it will cost, and one line on what the powers do meanwhile" — which is a good answer. But
LIVING_WORLD §1's Tick still lists three advances and only three: open play, map travel, rest to the next
dawn. The UI is specified for a rule that does not exist in the file SESSION_UX cites, and SESSION_UX's own
preamble says that file governs.]`

So I take the second road, and **it works, and row 65 is why.** Six hours up to the Rudd Stones (16:00),
Ondrin at the ring at all hours ✔. The ask is a *parley*, resolved by **row 65 `moved_them`** — Ondrin +2
→ w8 · 5, Sarane the Speaker · 20, **+25**, identical to the Fighter's. A Rogue with no Read and no Break
completes V1 because the row added this round is class-agnostic. That is the clearest single demonstration
in the bible that row 65 was the right row to add.

Then back six hours to the camp (22:00) and 12 bits to the hewers to open the slide — V1's third branch,
row **18** `gave_the_price` — because loosing the river alone does not turn the wheel while the dam
stands, which V1 states in as many words.

**Completes, with three holes — and it is a forty-five-minute session, not a fifteen-minute one.** The
Mage's road is seven open world hours (10:00 → 17:00, `SESSION_UX` §3's own budget of 15:45). The
Fighter's is about the same. The Rogue's is seventeen, because with no *break* verb he must do two of
V1's three branches where the others do one. Nothing states that a quest's session length is class-
dependent, and `SESSION_UX` §5's "a fifteen-minute venture spends six to twelve world hours" is the
Fighter's and the Mage's number.

### 4.3 The evening session — a **Mage**, Thaw 20–23, the descent

No Mage evening exists anywhere in the bible: `CLASSES` §2.6's Mage is a fifteen-minute session and
`SESSION_UX` §3's evening is the traced Fighter. `FIRST_REGION` §7.1 row 5: Thaw 20 14:00 → Thaw 23 19:00,
3 h 28, 52 open world hours.

Thaw 20 14:00, the quay: Kit's letter at the hour a letter day puts her there ✔. A tier-2 rod (2 marks),
four flasks, four bandages. Thaw 21: four hours of Shelf, walked, first traversal ✔. Rain on the 16th–20th
away page, so layer 0's stone basins hold water and the skin fills at 100 (§6's own resource line for the
outer court — a nice piece of design that only a Mage ever reads). Dusk, Corrow, **row 67 `came_and_looked`
at w2, and the number does not move** ✔. The Drowned Steps: three hounds and two cranes, both Fling ×2 by
`COMBAT` §1, about thirty water. And then:

`[HOLE 6: Fling has no rate of fire. COMBAT §1 gives it damage (`4 + 2 × tier`) and CLASSES §2 gives it a
cost (2), a range and a slow — and no cooldown and no cast time, where Bind, Mist and Wring all have one
and the Fighter's and Rogue's basic attacks inherit the weapon table's 0.8 s and 1.4 s. It is the only
basic attack in the game with no cadence. COMBAT §7's own Encounter B implies two different rates in one
fight: "Flings it twice (16 each)" inside 2.5 s is about 1.2 s a cast, and "hound 3 at 6 s (three Flings)"
across the 4–6 s window is about 0.7 s. The Mage's damage per second — and therefore her water per fight,
which is the whole of her resource model — is not computable from the documents.]`

Salt Hall door at 22:00: `PR 110` against `ER 72`, Fair ✔ (the numbers are level- and tier-based, so the
Mage's party rating is the Fighter's). §3.6's O03 gives the Mage "Dry or flood the site", and the Court's
cistern is held water ✔. **Row 26 `kept_the_charge` w10, Corrow 100, two sentries** — identical to the
Fighter's ledger. Thaw 22: `COMBAT` §7's Encounter B is *written* for a Mage, which is the one place the
bible already has this evening's beat ✔; the cistern; four sacks; §6 names **Dry** as one of layer 2's
three sluice openers, so the Mage has the Fighter's Break-free route out ✔. Thaw 23: Marrock, Kit, Merrin's
notice. **Renown 297** by §7.3a ✔.

`[HOLE 7: the oil budget still cannot be checked. §6 says a flask is four hours on the surface and two in
the salt, that layer 2 halves it, and that "a full descent and return needs six flasks and the region
sells them four at a time". §7.2 buys four and says four is right. Counting the trace's own hours below
ground — 18:00 to midnight on the 21st and 08:00 to dusk on the 22nd, most of the second day in layer 2 —
comes to about sixteen world hours, which is five flasks at best and eight at the salt rate. No layer
states its own oil rate or the hours a descent through it takes, so the one resource the dungeon design
rests on is the one number a player cannot plan against.]`

**Completes, with two holes.**

### 4.4 Hole count

| Session | Class | Holes |
|---|---|---|
| 3-min | Fighter | 2 — the Firstwater override's hours; no world change at the end |
| 15-min | Rogue | 3 — Hild's rain-only inn block on a fog night; the Rogue's *break*; no wait rule in `LIVING_WORLD` §1 |
| Evening | Mage | 2 — Fling has no rate of fire; the descent's oil budget |

**Seven holes, against twelve in round one and twelve in round two.** More important than the count is the
kind: round one's twelve were "the rule does not exist"; round two's nine were "the rule exists and does
not cover the use another file makes of it"; five of these seven are single missing numbers or single
schedule lines. Two are new (Hild; Fling's rate) and both were found by playing a combination nobody had
played. Three of round two's twelve are gone outright: the creation screen, the deed row for a refusal met,
and the deed row for a promise broken.

---

## 5. The eight rubric lines

### Line 1 — World: **8.0** *(round 2: 8.0; round 1: 8.0)*

`world/WORLD.md` has now gone **three rounds without being opened** — 4,533 words in all three — so this
line is what I judged twice before. It remains a genuinely original, drawable, coherent world: four
peoples, five powers, three ages, a map with one shape, a one-page contract Part Two honours heading by
heading, and history that is load-bearing in play rather than decorative. That last is more provable than
ever: every one of the 25 site types, 16 opposition kinds and 48 motives carries an age tag, and both of
my rolled quests drew across two ages without my choosing it.

All four defects from round one are live for the third time. **The one page is 543 words against the 474
its own footer claims** (I stripped the markdown and counted; round two got 551 by a different strip —
either way the claim is 13–15% out). **"The only way anyone gets in"** still stands on the page against
§2.2's Skerrow, who got in by mining through the Rim from outside, and `PITCH.md` repeats the absolute.
**"The Stair"** still names a road and a company within four paragraphs of each other on the page.
And **nothing anywhere gives a cause for the Still's continued fall** — the Skerrow cut the notch six
hundred years ago and the lake is still dropping a finger a season, which is the clock that surfaces every
dungeon and starts every Shelf dispute. `DECISIONS` item 8 gives the design reason ("a geological clock
that surfaces new dungeons and disputes forever") and no in-world one.
*To 8.5:* one sentence for the lake, one clause for the Stair, one qualifier for the Fall, one corrected
number. This is the cheapest half-point on the board and it has now been offered three times.

### Line 2 — Living world: **8.5** *(8.0; 7.5)*

**The deed table is now the vocabulary it claimed to be, and I proved it two ways.** Every one of the 67
rows is printed with a distinct act tag; I extracted them mechanically and checked every `row N \`tag\``
citation in all ten files — **92 citations, all correct**. The three new rows are the right three: **65
`moved_them`** puts a number under an act the trace and the engine were both performing without one (and
is what lets a Rogue finish V1 — §4.2); **66 `broke_word`** gives every "say yes and not go" branch a
consequence and my Q19 used it; **67 `came_and_looked`** is what lets `FIRST_REGION` §3 say "meeting
Corrow writes nothing" and mean something arithmetic. Appending rather than inserting so that no citation
moves is the correct discipline. The decay rule is stated once and applied at four dawns; a new write
restarting the clock is stated and does real work three times; the promoted-pool eviction is now **worked
on the region's own numbers** and I counted the 54 of 60 independently; and the leader rule is finally
stated as **a gate, never a receiver**, which correctly keeps Brakka out of H3 while letting Corrow in at
the Salt Hall door. Round two's issues 1, 4 and 5 are all closed.

Against it: **the 60 map-event templates are still counted and never printed** (§5), for the third round —
the one place round one's exact complaint survives, and the away page's whole vocabulary. **The file's own
§2 worked example contradicts its own §4 table** (§1.4 above): a non-row act tag, a weight the row
contradicts, and Reyne holding no memory on Thaw 1 where both ledgers write him at w6. **Row 62's printed
w3 is overridden at w4 by both ledgers.** The worked dawn is still one of 450 power-days and one of five
planners.
*To 9:* print the sixty map-event templates; rewrite §2's worked example off row 1; fix row 62's weight or
say the tick sets it; work an ordinary dawn for a second planner.

### Line 3 — Adventure engine: **8.0** *(8.0; 7.0)*

This is the hardest score in the report and it is the top of 8.0, not the bottom.

**Six of round two's engine findings are closed and I verified every one of them.** All 110 trigger→motive
draws are legal (§2 above), and the 110-vs-141 asymmetry is correctly explained rather than hidden. §6's
rule 1 holds across all 66 pairs; rule 3 holds with `choose` at 3 and `break` at 1 where round two had 6
and 0; the twist table is nine families of two to five and the *agenda* split is the right cut, made for a
stated reason. The showcase now speaks the deed table. §3.4's "the line is a sense, not a script", with
step 9 rewriting it into the giver's register, is a real answer to round two's fourth finding and a better
one than the second line I asked for. Four more empty-consequence branches are written out. §7.5's three
rolls remain checkable, and my own two (§3) came out of the tables without my choosing anything.

What holds it at 8.0 is not quest quality — that is now demonstrably good — but three gaps in the rules
*around* the quests, two of which I hit by rolling:

1. **The shape signature is undefined for a plain quest, and §3.12 says about a third are plain.** Either
   reading of a null twist family breaks something (§3.2). The repetition detector is the design's own
   answer to its own biggest named risk, and it does not specify its behaviour for a third of its input.
2. **Two rates for the same event.** §3.4's 3.4% and §3.12's "about a third", printed on facing pages.
   §3.4's blocking model also counts only the family rule, where in my two rolls preconditions failed five
   times and the family rule never fired.
3. **§4's down-scale rule is unworked, and is now broken by the bible's own flagship trace three times.**
   `FIRST_REGION` §7.3a says so itself: the hero is Name from dawn on Thaw 10, so H2, H1 and H3 on the
   13th, 14th and 16th are "offered *one tier below the hero's standing*, which is exactly §4's down-scale
   case" — and §4's printed rule is that this never happens. `PROGRESSION_ECONOMY` §1 states the correct
   behaviour cleanly and §4 was not updated to match.

Smaller: **rule 2 clears only by a days-to-offers conversion** the same paragraph makes ambiguous;
`ADVENTURE_ENGINE` V1 still offers "Mage: Draw the pooled water through it" as a way to break the dam,
which `SESSION_UX` §3 now correctly refuses on screen; three branches of the fifteen still name no deed row
(Vo1's Parley, which is row 21 `brokered`, and two of N2's); Q15's giver check cites `drove_off_wrack`,
which is not a row (row 6 is `drove_off_raiders`); and Vo3's *Parley* shape remains one clause.
*To 8.5:* one paragraph in §6 saying what a plain quest's signature is; one number reconciled in §3.4;
§4's down-scale worked once, at Villager and at Voice side by side, and made to agree with
`PROGRESSION_ECONOMY` §1.

### Line 4 — Classes and standing: **8.5** *(8.0; 6.5)*

**The ledger reproduces. That was the round's stated object and it is the thing that moves this line.**
Two files, nineteen identical day-end totals, and an independent re-derivation from the printed rows that
lands on 402 from both ends (§1). The seventeen errors are real errors and thirteen of them the designer
found without me; the four I found are all closed; and the fixes are not patches but consequences of two
rules that were implied and are now stated (a new write restarts the clock; a head counts once by its
strongest memory). §2.5 remains the best writing in the set and §2.6 still plays a Mage and a Rogue at
proper length. N2's "20% chance by the Stair's temper" is gone, replaced by a deterministic price test —
round two's complaint answered exactly.

Against it, and all of it is bookkeeping in the same file: **§2's three class blocks still say "Growth
1–40"** where §3 of the same file says "Levels 1–25", and the Mage's 200-water skin is promised at level
30, which is above the cap. **§5's worked example** still has the flock home by 15:00 and Garrow at the
forge door, where §6's own ledger row and §7.2 have 22:00 and the Ford Inn door. **§2's verb table** still
routes Mist as a field verb, Rally as the answer to *answer* and a Rogue lock-pick through abilities §2.5
does not resolve — and `ADVENTURE_ENGINE` §3.8's own table prints "—" for the Fighter and the Mage on
*answer*, so the two tables disagree about whether those classes have an answer at all. **§2.5 names
`gave_back_the_watch`, `let_them_through`, `turned_them_back` and `made_it_worse` as deeds** with weights
and no rows.
*To 9:* six words in three headers; one worked example re-run off the ledger; the four verb-table routes
resolved or struck; four act tags given rows or renamed.

### Line 5 — Combat, dungeons and autobattle: **7.5** *(7.5; 7.5)*

`systems/COMBAT.md` is byte-identical across three rounds (4,687 words in all three), and this line cannot
move until somebody opens it. The file's strengths are as I found them twice: fifteen enemies each with a
role, a telegraph, a class weakness and a threat; ratings that recompute (I checked all three encounters —
`PR` 54, 127 and 156, `ER` 46, 86 and 157, and the Fair/Even reads are right); an autobattle policy written
as an implementable priority list; parity defined operationally; six runs whose divergences are the right
shape. The region file also now contains the divergence I asked for in round one and did not get in round
two: `FIRST_REGION` §7.2's Thaw 34 yield — "autobattle kills here, and this is the one divergence in the
trace where the hand's version leaves the world better."

**Precisely what holds it down:**

1. **The Mage's basic attack has no rate of fire** (§4.3, hole 6). This is new, it is load-bearing, and it
   means no reader can compute a Mage's damage or her water cost per fight.
2. **The armour/multiplier order is still not stated as a rule.** It is now *inferable* from four worked
   lines that all use multiply-then-subtract — the husk at `70 − 3 = 67`, the dismounted rider at
   `(9×3) − 1 = 26`, Pell at `(9×3) − 2 = 25`, Kit at `(9×2) − 2 = 16` — and contradicted by a fifth, the
   zero-armour slinger printed at 26 where the same order gives 27. A rule that exists only as an
   inference from examples, one of which is wrong, is not a rule.
3. **§2 rule 2 still contradicts §1's own table.** "No enemy is immune to a whole class … the counter is
   always on the same class's arc," against a husk row whose Weak-to column reads "Wring ×2; Crack/Break
   strips crust" and names nothing on the Rogue's arc. There are now **three answers in three files**:
   `COMBAT` §1 (none), `ADVENTURE_ENGINE` §3.6 O07 ("Powder's lime, then Cuts"), and `CLASSES` Decision 7
   ("the Rogue has no crust answer and is not given one").
4. **Layer 3 is designed and still never played**, and `FIRST_REGION` §6 misreads its own encounter:
   "`PR` about 156 against `ER` 110" is called **Even**, and by `COMBAT` §1's own definition (`Fair` if
   `ER ≤ PR`) 110 ≤ 156 is **Fair**.
5. **The descent's resource maths still cannot be checked** (§4.3, hole 7).
6. The parity claim's "147 simulations per pass" arithmetic is right (38 + 11 = 49 × 3 levels) and remains
   an assertion about a harness that does not exist.
*To 8.5:* a cooldown for Fling; one sentence for the armour order and the slinger's 26 corrected to 27;
amend rule 2 or put Powder in the husk's row; correct Even to Fair; play one descent into layer 3 with its
oil counted.

### Line 6 — Economy, session and UX: **8.0** *(7.0; 7.5)*

**A full point, and the largest move in the round.** `PROGRESSION_ECONOMY` went from 2,308 words to 5,250
and `SESSION_UX` from 2,520 to 6,492, and both were rebuilt rather than patched.

What is genuinely good, and I checked all of it: **§5's season formula reproduces to the digit at every
one of its five rows** — `96 + 21.7P` and `2160P ÷ (96 + 21.7P)` give 2.9, 10.1, 18.4, 25.2 and 43.3
played hours against the printed 3, 10, 18, 25 and 43 — and it replaces an assertion that was off by an
order of magnitude, which the file says out loud. The **creation screen** is specified and grants nothing,
and showing the four field verbs at the class tap is a better idea than the brief asked for. The **verb
failure screen** — greyed with the unmet need printed, *falls short* with the cost spent, *goes wrong*
with a deed row — is the best argument in the bible for the field-verb system, and the Mage's two shaping
petals greyed at the hewers' dam is a scene that teaches the whole design in one frame. The **pass-time
action has a home** (Zone A). The **gear-tier regard gate**, argued with the trace's own numbers — seven
marks in the purse, tier 3 costs six, and the Holds are at −65 — is the strongest structural
anti-pay-to-win argument in the set, because it makes the store's refusal to sell power a consequence of
the simulation rather than a promise. The pace model reproduces exactly at three of its four intervals
(hours 40–50, 50–150 and 150–200 all land on the printed totals to the digit). The fairness model is
recomputed at 1, 10, 50 and 200 and holds at every mark.

**What holds it under 8.5 is that the rebuilt ledger did not reach the two files that show it to the
player:**

- **`SESSION_UX` §3's three-minute session — the flagship of the flagship length — still carries round
  two's numbers.** "Renown 70, **Hand since dawn on the 9th**" and "Row 5 … Idony (20), Pell (5), Osk by
  the fire (5). **Renown 70 → 100**", against the derivation's **128 → 139** with Pell 5, Osk 5 and Dell
  Sallow 1, and **Name at dawn on the 10th**. The file re-derived its clock and not its ledger.
- **`SESSION_UX` §3's evening session** reads "**Renown 179 → 281**" and "**Renown 294**" against
  **175 → 277** and **297**.
- **`PROGRESSION_ECONOMY` §5's "Two honest notes" and its Decision 1** carry the same three stale figures
  — 179, 281, 294 — in a paragraph printed directly beneath a table that gets 175 right.
- **`SESSION_UX` §3's own footnote asks `FIRST_REGION` for a change it has already made** (Osk's *hurt*
  window is Thaw 2–10 in §3 row 5 and in Decision 17).
- **The Mage's fifteen-minute session omits row 65** at the exact site and hour the Fighter trace writes
  it: "Ondrin looses the river. `river_flow = normal`; `ondrin_owed`; Quiet +10" — no row, no Sarane, no
  renown, where the same act on the same evening writes +25 in both ledgers.
- **`PROGRESSION_ECONOMY` §1's level curve is wrong against its own formula in twelve printed figures.**
  `60 × L^1.6` gives 551, 788, 1,055, 1,350, 1,671, 2,018 where the file prints 553, 786, 1,057, 1,352,
  1,681, 2,020; cumulatives are 1,141 / 4,334 / 8,023 / 13,194 / 24,119 / 52,127 / **94,381** against the
  printed 1,143 / 4,338 / 8,039 / 13,210 / 24,135 / 52,143 / **94,397**. `FIRST_REGION` §7.3b uses the
  *correct* values at levels 3–7 (242, 590, 1,141, 1,929, 2,984) and the wrong one at 8, and cites
  `COMBAT` §9 for it — a section that contains no experience curve at all.
- Small: §4's income ledger adds "plus **Reyne's mark**" to H3 where §7.2 says the witness-fee "is the
  whole of it"; `FIRST_REGION` §8 still says nine screens where `SESSION_UX` §8 says eleven; the
  fifteen-minute session is class-dependent by a factor of two and no file says so (§4.2).
*To 8.5:* re-derive `SESSION_UX` §3's two sessions and `PROGRESSION_ECONOMY` §5's two notes from §7.3a;
recompute §1's curve; give the Mage session row 65; delete the stale footnote.

### Line 7 — Feasibility and honesty: **8.0** *(8.0; 7.5)*

The self-correction is again the best thing here and it went further than round two's. `FIRST_REGION`
§7.3a's "What re-deriving cost, and where the round-two draft was wrong" lists **all seventeen errors,
names the four the critic found and the thirteen he did not**, and states what each one moved.
`PROGRESSION_ECONOMY` Decision 5 says "an hour mark that cannot be pointed at on the clock table is an
assertion, and this file had four of them". `SESSION_UX` Decision 6 says "the number was wrong and the
finding underneath it is the more interesting thing". §8.2's five corrected counts stand, four of them
downward. The month-three falsifiable checkpoint with a named cut is still the right way to defend a
schedule. The counts I could check are honest: 292 table rows re-add exactly (36+48+4+30+25+25+16+14+8+12+60+14), 315 names re-add exactly, 607 in all; the deed table is 67 split 27/31/9 and the split is
right; the Court is 23 rooms of which 11 carry an encounter.

Against it:

- **`docs/STATUS.json` is still stale, and stale in a new way.** It now carries `"round": 2` and round
  two's scores over **round one's word counts** — `total_words: 39693` against an actual 101,180, and
  `ADVENTURE_ENGINE` at 6,001 against 30,021 — and **round one's open issues**, including the 4,343-vs-4,370
  experience discrepancy that round two recorded as closed. The brief requires this file current.
- **Two of ten files have not been opened in three rounds**, and every one of the four unchanged issues
  lives in them.
- **Three claims are stated slightly stronger than the artefact.** "Every branch of all fifteen quests now
  names the deed row it writes" — three do not. "All 39 free-text act tags now cite printed deed rows" —
  true inside §7's consequence lists, which I verified, and not true of `LIVING_WORLD` §2's own worked
  example, of `CLASSES` §2.5's four named deeds without rows, of §2.6's `carried_duty` and `asked_first`,
  or of Q15's `drove_off_wrack`. "The two files now print the same twenty-three rows" — the totals agree;
  §7.3a prints 29 rows and §6 prints 23.
- **Counted and unprinted persists** beyond the map events: 38 field encounters, 60 greetings, 24 items,
  36 knacks, 20 companion agenda scenes, and 240 named-site description lines against 50 fallbacks printed.
*To 8.5:* regenerate `STATUS.json` from the files; open `WORLD.md` and `COMBAT.md`; soften the three
claims to what the documents actually contain.

### Line 8 — Design smells: **8.5** *(8.0; 5.0)* — **no hit**

All sixteen items clear, several emphatically. Higher than round two because the largest of its three
watch items — the derivation gap under item 13 — is closed at its worst point, and closed by derivation
rather than by assertion: the renown ledger now reproduces from the table that governs it, under my
arithmetic and not the designer's. Item 11 gained three session examples it did not have (creation, the
pass-time screen, the verb-failure screen) and lost none. Not 9 because two watch items are unchanged and
one of them, Vo3's *Parley*, is the ending the twenty-hour trace exists to set up.

---

## 6. The design-smell checklist, item by item

| # | Smell | Verdict | Evidence |
|---|---|---|---|
| 1 | A world needing more than one page, or >4 peoples / >5 powers / >3 ages | **CLEAR** | `WORLD` Part One stands alone; four peoples (§2.3), five powers (§2.4), three ages (§2.2), §2.9 forbids a fourth or a sixth forever. *Nit, third round:* the page is **543 words** by my count against the 474 the footer claims. |
| 2 | Gacha or energy under another name | **CLEAR** | `PROGRESSION` §6's not-sold list names every disguise and refuses each — "timer, key, pull, chest or pity"; §7 rule 6 forbids "daily anything"; the offline cap is seven days for everyone and "nobody can buy an eighth". `SESSION_UX` §5 adds the honest version: a check-in player crosses a season in three played hours and **finishes it**. |
| 3 | Anything sold that buys power or skips the world | **CLEAR, and stronger than round two** | The store-line test holds line by line, and `PROGRESSION` §3 now makes it structural rather than a promise: the traced hero ends with seven marks against a six-mark tier-3 blade and **cannot buy it**, because Holds regard is −65. "The three things that actually gate a hero … are gated by a regard ledger, a count of heads and an experience curve, and there is no line in the store that writes to any of the three." |
| 4 | A chosen one, a prophecy, or a hero starting with standing | **CLEAR — and now shown on screen** | `SESSION_UX` §1's creation: "Renown 0, no memories, no letters, no marks on the map beyond the village … a hero who starts with standing is a design smell and this screen is where the design refuses it." `CLASSES` §6 Milestone 1: "Did: nothing." |
| 5 | Factions that only react to the hero | **CLEAR — emphatically** | `LIVING_WORLD` §3: "Powers never read the hero's location and never wait for the hero." `FIRST_REGION` §5 runs ninety days with nobody playing and ends in a worse valley; §4 works one dawn with goal distances, rank weights, priced moves and two ruled illegal, and shows five of its own dated outputs moving when the hero moves the state. |
| 6 | Lore that never touches play | **CLEAR** | Every motive, site type and opposition kind carries an age tag; both quests I rolled drew across two ages without my choosing it. §3.2's preamble is the rule and it holds: "a debt in a Kest book, a river a stone ring can hold, salt in a Drawer's wrists." |
| 7 | A generated quest that reads as a template, names nobody, or connects to nothing | **CLEAR** | Fifteen in the file and two of my own; every one names people with reasons on a site whose state caused it, and step 4 forbids a place that is not the cause. *Watch, unchanged:* **O02 "cutters and deserters"** is still the explicit generic filler — "any: this is the fight the engine gives a tired party" — and names nobody. *New watch:* my Q19 came out **plain** — one verb, no twist — which §3.12 says happens about a third of the time and which §6 has no signature for. A plain quest is not a template, but it is the thinnest thing the engine makes and a third is a lot of them. |
| 8 | A class with no identity out of combat | **CLEAR — emphatically** | `CLASSES` §2.5 gives all twelve verbs a cost, a duration, a needs list, a return, a *falls short* and a *goes wrong*; `SESSION_UX` §2.5 puts all five of a hero's verbs in the thumb's corner and shows two of them being refused on screen with reasons. *Nit:* the Fighter's four are all inert in the game's first hour (§4.1). |
| 9 | A system with no decision in it | **CLEAR** | The Stand contract's decision and hand-back rule stand. *Nit, unchanged:* **Drill** still has none — a day, a Stillday, a site, quality +1 — and its only decision is which town. |
| 10 | An autobattle strictly better or strictly worse than play | **CLEAR, narrowly** | `COMBAT` §7's three pairs are unchanged and remain the right shape (2 s slower / 2 health better; 2 s faster / 11 water poorer; 8 s slower / one more ledger burned). `FIRST_REGION` §7.2's Thaw 34 adds the divergence round one asked for from the other side: the hand takes Drusk's yield where "autobattle kills … and this is the one divergence in the trace where the hand's version leaves the world better". Still no divergence where the *world* ends better on autobattle. |
| 11 | A feature listed without a session example | **CLEAR** | Three new session examples this round — creation, the pass-time screen, and the three-outcome verb-failure screen — and all twelve field verbs remain played. *Two watch items, unchanged, and I am naming them now so the fourth round cannot be surprised:* **Vo3's `Parley` shape** — the ending the twenty-hour trace exists to set up, via the `ledgers_to_be_read` door it closes on — is still **one clause**, with no journal text and no outcomes, while the `Raid` shape is written in full; and **layer 3 is designed and never played**, with its own difficulty read wrong (Even for a Fair fight) and its oil budget uncheckable. If neither moves in round four I will fire this item. |
| 12 | Placeholder names | **CLEAR** | No stubs, no brackets, no "Faction 2"; I re-checked every proper noun added this round. *Nit, unchanged:* Vael given 37–96, Skerrow 25–48 and Ulder 13–36 are visible alphabet walks — about 60% of the 315 — which is the tell of a table written to a count rather than to a people. |
| 13 | Numbers without a model behind them | **CLEAR — and this is where the round's damage still is, though it has halved** | Every model is present and the biggest of them now reproduces: I re-derived a forty-two-day renown ledger from the deed table head by head and it landed on 402 from both ends. The season formula, the pace model at three of four intervals, the party and encounter ratings, the 292 + 315 = 607 count, the 67-row split and the promoted-pool count all re-add. What still fails is derivation, not modelling: `PROGRESSION` §1's curve in twelve figures; three stale renown figures in `SESSION_UX` §3 and three more in `PROGRESSION` §5; the fights column, where a lone salt-hound is 30 XP against `threat × 1.5` = 21 (and the Drowned Steps 79 against ~64) though the column still sums to 530; "eleven hours" for twenty-five; "five heads" for thirteen; 3.4% against "about a third"; Even against Fair; nine screens against eleven. A mis-derived number is an arithmetic failure and not this smell, so this stays clear — for the second round running, and it is again the first thing I would fix. |
| 14 | A screen that needs two hands or landscape | **CLEAR — and much better argued** | `SESSION_UX` §1–2 give five zones with percentages, a 60 × 70 mm thumb rule, a 12 mm minimum, one optional out-of-corner touch, and §7's accessibility page makes autobattle the accessibility mode with three telegraph channels. |
| 15 | Any name, place, god, race or artefact from another IP | **CLEAR** | I re-checked every proper noun added this round — the twelve ring names, Habb of Thrum, Rowe Weirman, Pellow Orsa, the three new deed rows' tags. All original. The Ulder remain structurally elf-adjacent and lift nothing. |
| 16 | "TBD" anywhere | **CLEAR** | Grepped all ten files: zero. |

**No hits.** Two watch items: item 11 (Vo3's Parley shape; layer 3 unplayed) and item 13 (the derivation
residue). Item 7's O02 and the plain quest are a third, quieter one.

---

## 7. Round two's fifteen issues

| # | Round-two issue | Status | Evidence |
|---|---|---|---|
| 1 | The renown ledger does not reproduce from the deed table | **FIXED** | Nineteen day-end totals identical across both files; re-derived from the rows by hand and cross-checked from the head count (360 + 42 = 402). All four named discrepancies closed. |
| 2 | Fifteen of 110 trigger→motive links broken | **FIXED** | All 110 checked against all 48 cause lists: **0 broken**. Fourteen fixed by adding the trigger to the cause list, one by correcting the draw (TR19's M35 → M29), and both routes are the right route in each case. |
| 3 | §6 rules 2–3 broken by the showcase | **IMPROVED** | Rule 3 now holds: 22 verb slots, maximum 3 against a cap of 4, `break` at 1 where it was 0, and two illegal verbs correctly struck for being outside their motives' lists. Rule 1 holds across all 66 pairs. **Rule 2 clears only by converting days to offers**, and *place* still sits two apart in the printed order of the twelve. |
| 4 | The showcase quests do not speak the deed table | **FIXED** | 92 `row N \`tag\`` citations across all ten files, all correct. Two contradicted weights corrected. *Residue:* three branches still name no row, and Q15's giver check cites a tag that is not one. |
| 5 | No deed row for *parley*, no mirror to `kept_word` | **FIXED** | Rows 65 `moved_them`, 66 `broke_word`, 67 `came_and_looked`, appended so no citation moved; the count restated honestly as 67 (27/31/9) in three files. Row 65 is used at three sites and is what lets a Rogue finish V1. |
| 6 | `SESSION_UX` §3 and `PROGRESSION_ECONOMY` §4–5 contradict the rebuilt trace | **IMPROVED** | Both files rebuilt at more than double length; the clock, the season formula, creation, the verb screen and the fairness table are new and correct. **But the three-minute session still reads 70 → 100 and "Hand since the 9th", the evening session 179 → 281 → 294, and §5's two notes and Decision 1 the same three figures.** |
| 7 | `COMBAT`: armour order; the husk's Rogue answer | **UNCHANGED** | File untouched for a third round. And Fling's missing rate of fire found this round, which is worse than either. |
| 8 | No wait or pass-time action | **IMPROVED** | `SESSION_UX` §1 Zone A specifies the screen properly. `LIVING_WORLD` §1's Tick still lists three advances and no wait, and it is the file SESSION_UX cites and says governs. |
| 9 | §4's down-scale is stated and never worked | **UNCHANGED — and now contradicted** | Still unworked; now broken three times by `FIRST_REGION` §7.2's own trace, which §7.3a says out loud, and answered differently by `PROGRESSION_ECONOMY` §1. |
| 10 | Four class answers route through unresolved abilities | **IMPROVED** | The Mage's *break* is resolved, and elegantly — `SESSION_UX` §3 greys both shaping petals at the dam with their needs printed, which is a better answer than a new rule. `ADVENTURE_ENGINE` V1 and §3.8 still print "Draw the water through"; Mist as a field verb, Rally as *answer* and the Rogue lock-pick are unresolved. |
| 11 | Twist families lopsided; one line per twist | **FIXED** | Nine families of 2–5, verified by count; the *agenda*/*companion* split is made for a stated reason. §3.4's "the line is a sense, not a script" plus step 9's rewrite answers the second half. *New residual:* all four *companion* twists die for a party whose companions do not name the site, and §3.4's blocking model does not model precondition failure at all. |
| 12 | `WORLD.md`'s four defects | **UNCHANGED** | File untouched for a third round; 543 words against 474. |
| 13 | `STATUS.json` stale | **IMPROVED** | Round and scores are current. Word counts and open issues are still **round one's**. |
| 14 | Vo3's `Parley` shape is one clause | **UNCHANGED** | Only the `Raid` shape is written, and the trace's last act sets the door that leads to the other one. |
| 15 | The Thaw 39 away page without a cause; three schedule contradictions | **FIXED, for all four named** | The Pans now close because the hero broke the sluice-wheel on the 22nd — a better line than the baseline's. Garrow meets the drove at the Ford Inn door at 20:00; Idren takes the coin at the quay at ten where he weighs; Kit is on the Shelf and enters the ledger on the 22nd instead; Osk's *hurt* window closed to Thaw 2–10. *New:* Hild's rain-only inn block on a fog night, and Reyne using the *heard* line the morning after standing in his own yard with a lamp holding row 1's w6. |

**Six fixed, five improved, four unchanged** — and the four unchanged are all in the two files nobody
opened.

---

## 8. Ranked issues for round four

Most damaging first. **Open `COMBAT.md` and `WORLD.md`.** Everything else is arithmetic and cross-reference.

| # | File · section | Issue | Fix direction |
|---|---|---|---|
| 1 | `systems/COMBAT.md` §1–2 | Three rounds unopened. **Fling has no rate of fire**, so a Mage's damage and water-per-fight are not computable. The armour/multiplier order is still not a rule and one of its five worked instances (the zero-armour slinger at 26) contradicts the other four. §2 rule 2 still contradicts §1's husk row, with three different answers in three files. | A cooldown for Fling; one sentence for the order and 26 → 27; amend rule 2 or put Powder in the husk's Weak-to. |
| 2 | `systems/SESSION_UX.md` §3 · `systems/PROGRESSION_ECONOMY.md` §5 | The rebuilt ledger did not reach the two files that show it: the three-minute session reads 70 → 100 and "Hand since dawn on the 9th" (ledger: 128 → 139, Name at dawn on the 10th); the evening session and §5's two notes and Decision 1 read 179 / 281 / 294 (ledger: 175 / 277 / 297). | Re-derive both sessions and both notes from `FIRST_REGION` §7.3a. |
| 3 | `systems/ADVENTURE_ENGINE.md` §6 · §3.4 · §3.12 | The shape signature has no defined value for a plain quest and §3.12 says about a third are plain; and §3.4's 3.4% and §3.12's "about a third" are two rates for one event. §3.4's blocking model ignores precondition failure, which is what actually fails. | One paragraph on the plain quest's signature; reconcile the two rates; model precondition failure or say the 3.4% is family-rule-only. |
| 4 | `systems/ADVENTURE_ENGINE.md` §4 · `systems/PROGRESSION_ECONOMY.md` §1 | §4's down-scale rule is unworked and is broken three times by `FIRST_REGION` §7.2's own trace, which §7.3a admits; `PROGRESSION_ECONOMY` §1 states the opposite resolution and states it well. | Work it once — the same trigger at Villager and at Voice, side by side — and make §4 agree with §1. |
| 5 | `world/WORLD.md` Part One and §2.1–2.2 | Three rounds unopened: **543 words against the 474 claimed**; "the only way anyone gets in" against §2.2's Skerrow, repeated in `PITCH.md`; "the Stair" naming a road and a company on the same page; and **no cause anywhere for the Still's continued fall**, which is the clock that surfaces every dungeon. | Four sentences, one clause and one number. |
| 6 | `docs/STATUS.json` | Round-two scores over round-**one** word counts (39,693 against 101,180; `ADVENTURE_ENGINE` 6,001 against 30,021) and round-one open issues, several closed two rounds ago. | Regenerate from the files each round; it takes a script. |
| 7 | `systems/LIVING_WORLD.md` §2 · §4c | The file's own worked example contradicts its own table: `helped_find_flock` at w6 against row 1 `found_stock` at w8, and Reyne holding no memory on Thaw 1 against both ledgers. Row 62's printed w3 is written at w4 by both ledgers. And the **60 map-event templates are still counted and never printed**, third round. | Rewrite §2's example off row 1; fix row 62's weight or state that the tick sets it; print the sixty templates. |
| 8 | `slice/FIRST_REGION.md` §7.2 · `systems/CLASSES_AND_STANDING.md` §5 | Reyne Gorse "who has never spoken to the hero" uses the *heard* line on Thaw 2, the morning after standing at Gorse End with a lamp and taking row 1's w6 as the owner; §5's example still says 15:00 and the forge door. | Move the Thaw 2 beat to a head that is genuinely at *heard*, or drop it; re-run §5's example off §7.3a. |
| 9 | `systems/ADVENTURE_ENGINE.md` Vo3 · `slice/FIRST_REGION.md` §6 | The two watch items under smell 11, both two rounds old: Vo3's `Parley` shape is one clause with no journal text and no outcomes, and it is the shape the trace's own ending sets up; layer 3 is designed and never played, its encounter called **Even** where `PR 156` against `ER 110` is **Fair**, and its oil budget uncheckable because no layer states its hours at its own rate. | Write Vo3's Parley as a full quest; play one descent with the flasks counted; correct Even to Fair. |
| 10 | `slice/FIRST_REGION.md` §3 rows 1–25 | Hild's Ford Inn block is rain-only and Thaw 6 is fog, so V1's second cause is delivered by an NPC her schedule puts at home. No schedule carries a `festival_today` variant, so the Firstwater override still has no hours — which is what a Rogue's or a Mage's first playable hour needs. | Move Hild's block to "rain or fog", or move the scene; add a Firstwater variant to the eight Sallowford schedules. |
| 11 | `systems/CLASSES_AND_STANDING.md` §2 | Three "Growth 1–40" headers against §3's "Levels 1–25", with the Mage's 200-water skin promised at level 30. The verb table still routes Mist, Rally-as-*answer* and a Rogue lock-pick through abilities §2.5 does not resolve, while `ADVENTURE_ENGINE` §3.8 prints "—" for the Fighter and Mage on the same verb. §2.5 names `gave_back_the_watch`, `let_them_through`, `turned_them_back` and `made_it_worse` as deeds with no rows. | Re-scale the three growth lines to 25; resolve or strike the three verb routes and reconcile the two tables; give the four tags rows or rename them. |
| 12 | `systems/PROGRESSION_ECONOMY.md` §1 | The level curve is wrong against its own formula in twelve figures (551 not 553, 788 not 786, 1,055 not 1,057, 1,350 not 1,352, 1,671 not 1,681, 2,018 not 2,020; cumulatives 1,141 / 4,334 / 8,023 / 13,194 / 24,119 / 52,127 / 94,381). `FIRST_REGION` §7.3b uses the right values at 3–7, the wrong one at 8, and cites `COMBAT` §9, which contains no curve. | Recompute the row; fix the level-8 threshold and the citation. |
| 13 | `slice/FIRST_REGION.md` §7.3b · §7.3a | The fights column sums to 530 but three of nine engagements do not reproduce from `threat × 1.5`: a lone salt-hound at 30 where 14 × 1.5 = 21; the Drowned Steps 79 against ~64; the Salt Hall door 50 against ~41. "Eleven hours" is twenty-five. "Five heads … are not in it" is thirteen. | Re-price the nine engagements off the rate; correct the two sentences. |
| 14 | `systems/LIVING_WORLD.md` §1 · `systems/SESSION_UX.md` §1 | The pass-time action has a screen in Zone A that cites a rule `LIVING_WORLD` §1's Tick does not contain. | Add the fourth advance to the Tick with its world-hour cost and what the powers do meanwhile. |
| 15 | `systems/ADVENTURE_ENGINE.md` §3.4 · `systems/LIVING_WORLD.md` §4 | All four *companion* twists require a companion whose agenda names the site or is the stake, and the region's five companions have three such agendas between them, so the family is dead for many parties. And there is still no deed row for **a truth told at the hero's own cost** — M04's whole want, and half of stake type ST6. | Loosen two companion preconditions or move two entries; add one row for a truth named in public. |

---

## 9. Verdict

**Fail — but this is the round the arithmetic stopped being the story.** The claim that mattered most is
true: the two renown ledgers reproduce each other at nineteen day-end totals, and both reproduce under my
own hand from the sixty-seven printed rows, deed by deed and receiver by receiver, landing on 402 from
both directions and on 54 of 60 promoted slots by an independent count. That is the thing round two said
was one afternoon's work and the difference between 8.0 and 8.5, and it was done, and it moved two lines.
So did the link fix — 110 draws, 0 broken, checked by script and then by eye — and the showcase's caps,
which I re-ran and which hold, and which held again for two quests I rolled myself with a printed die
stream. Three deed rows were added for exactly the three acts the system was performing without one, and
one of them, `moved_them`, is what lets a Rogue finish the region's second quest with a class kit that
cannot break anything. `PROGRESSION_ECONOMY` and `SESSION_UX` were rebuilt at more than double length and
the best of what is in them — the season formula that reproduces at all five rows, the creation screen
that grants nothing, the three-outcome verb-failure screen, the gear tier gated by a regard ledger the
store cannot touch — is ship-quality. Seven holes in three paper sessions against twelve and twelve.
What is left is smaller than what was left last round and it is the same species: **the derivation reached
the files that own the numbers and stopped one link short of the files that display them**, so the
flagship three-minute session still tells the player he is a Hand at renown 70 on a morning the ledger
makes him a Name at 128; and **two of the ten files have now gone three rounds unopened**, which is where
all four unchanged issues live and why combat has sat at 7.5 since round one. Neither of those needs a new
idea. One of them needs a spreadsheet and half a day; the other needs somebody to open `COMBAT.md` and
give the Mage's Fling a cooldown, the armour order a sentence, and the husk a Rogue. Do those two things
and four lines move together — and then the design is arguing about layer 3 and Vo3's parley, which is a
much better argument to be having in round four.
