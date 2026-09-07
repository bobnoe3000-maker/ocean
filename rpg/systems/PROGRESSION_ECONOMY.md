# Progression and Economy

How the hero and companions grow, what gear is, where every currency comes from and goes, the fairness model at 1, 10, 50 and 200 hours, what is sold and why the world survives it, and the anti-grind rules.

Every hour-mark and every total below is derived from the rebuilt twenty-hour trace in [FIRST_REGION](../slice/FIRST_REGION.md) §7 — its clock table (§7.1), its experience ledger (§7.3b), its renown ledger (§7.3a) and its regard ledger (§7.3c) — extended by the pace model in §5 of this file. Where a number here disagrees with those ledgers or with [LIVING_WORLD](LIVING_WORLD.md) §4's deed table, they govern and this is the error. Combat numbers are in [COMBAT](COMBAT.md); class growth in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md); the session clock in [SESSION_UX](SESSION_UX.md) §5.

---

## 1. Hero growth

**Levels 1–25.** Experience to go from level `L` to `L+1` is `60 × L^1.6`, rounded.

| To reach | 2 | 5 | 8 | 10 | 12 | 15 | 20 | 25 |
|---|---|---|---|---|---|---|---|---|
| Cumulative | 60 | **1,141** | **4,334** | **8,023** | **13,194** | **24,119** | **52,127** | **94,381** |

The per-level costs for the first ten are 60, 182, 348, **551**, **788**, **1,055**, **1,350**, 1,671, **2,018**, 2,389; at level 15 it is 4,570, at 20 it is 7,241, and the last step, 24 to 25, is 9,694.

*(Round three's version of this row was rounded twice — the cost rounded, then re-rounded into the running sum — and printed six per-level costs and seven cumulatives the formula does not give. The rule is: round `60 × L^1.6` at each step, then add. `60 × 4^1.6 = 550.9 → 551`, not 553; `60 × 5^1.6 = 787.7 → 788`, not 786; and the cumulative to level 25 is 94,381, not 94,397. Every figure in this file that reads off the curve has been re-added from the rounded steps.)*

**Why the cap is 25 and not forty.** The campaign is about 400 world days ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5) at roughly two world days a played hour, which is **200 played hours**; §5 of this file models what those hours earn, and the answer is about 99,000 experience. `60 × L^1.6` asks 94,381 for level 25 and 104,729 for 26. So the cap is reached at about hour 195 by a player who works the campaign through, and not before — which is what a cap is for. A cap of 40 would have needed 326,800 experience, three and a third times what two hundred hours can pay, and it was a number with no model behind it.

**Sources of experience** (the model behind the numbers): quest outcomes by standing tier ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4: 60–120 Villager, 150–250 Hand, 300–500 Name, 700–1,000 Voice, 1,500–2,500 Force); fights, at `threat × 1.5` per enemy ([COMBAT](COMBAT.md) §1.8's measured threats) for the first fight of a kind at a site in a world-week, halving on each repeat there (a cutter is 18 the first time, 9 the second, 4 the third, then 2); discoveries (a site first seen 30; a dungeon layer 100; a stone ring 50); deeds outside quests (a contract witnessed 80; a militia drilled 60; a debt paid for someone 50).

**Which enemies a fight pays for, stated because the trace cannot be added up without it:** every enemy in an engagement the party resolves in its favour — killed, yielded or driven off — and **nothing at all for an engagement that never begins**. That is why the two hewers who step forward at the dam on Thaw 7 and are called off before a blow pay zero, and the four hewers driven off the Salt Hall door on the 21st pay in full. **Layer weight is a difficulty multiplier on `ER` and never touches the pay**: a salt-hound is worth 21 in a field and 21 in layer 2, and what the layer changes is how hard it is, not what it is worth.

**Which tier pays, stated so the total can be reproduced.** A quest's experience is paid at **the stake's tier, never the hero's**. The engine offers a quest at the hero's tier or one above it, and — when a low-tier trigger fires in a valley the hero has outgrown — one below, which is [ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4's down-scale case. In all three directions the pay is read off the stake: a lost flock is a Villager stake and pays 60–120 to a Villager and to a Voice, and an Address that carries a stake a tier above the hero pays at that stake's tier, which is how Vo1 pays a Name hero 900. This matters in the traced twenty hours because the rebuilt renown ledger ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3a) crosses **Name on Thaw 9, read at dawn on the 10th**, three days before the three Hand-tier quests H2, H1 and H3 are offered on the 13th, the 14th and the 16th. They are Hand stakes offered to a Name hero and they pay Hand's rate — **200, 200 and 250** — which is what holds the trace's quest total at 3,240 and the twenty-hour total at 4,536. Paid at the hero's tier instead they would be 300, 300 and 300, the quest total would be 3,490 and the twenty hours 4,786, and the design would be paying more for a smaller stake, which is a grind incentive and the opposite of §7's rules.

Over the first twenty hours ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3b) the traced player completes **nine quests (3,240), thirty enemies in nine engagements, ten discoveries (460) and two witnessed deeds (140)**.

**The fights, re-priced off the rate this file sets.** §7.3b prints 530 for the nine engagements and **not one of the nine reproduces** from `threat × 1.5` at the rewritten [COMBAT](COMBAT.md) §1.8 threats. Two of them print the engagement's `ER` as its pay (the picket at 46, the bridge at 102) and a third comes within four of it; the rest are neither. Enemy by enemy, at the rate:

| Engagement | Composition | `ER` | × 1.5 | §7.3b prints |
|---|---|---|---|---|
| Old Shore road, Thaw 1 | a salt-hound (14) | 14 | **21** | 30 |
| the hewers' dam, Thaw 7 | two hewers step forward and Rukk calls them off — **no engagement** | 0 | **0** | 40 |
| Hobb's Cross, Thaw 8 (Encounter A) | 3 cutters (12) + a slinger (10) | 46 | **69** | 46 |
| the Drowned Steps, Thaw 21 | 3 salt-hounds (14) + 2 salt-cranes (12) | 66 | **99** | 79 |
| the Salt Hall door, Thaw 21 | Rukk's crew: 4 Skerrow hewers (18) | 72 | **108** | 50 |
| the Salt Hall stair, Thaw 22 (Encounter B) | 4 salt-hounds + a Salted husk (30) | 86 | **129** | 82 |
| the flour-cart road, Thaw 29 | 2 cutters + a mud-eel (8) | 32 | **48** | 42 |
| the Rudd Bridge, Thaw 34 | Drusk (38) + 4 Chainmen (16) | 102 | **153** | 102 |
| the Old Shore deserters, Thaw 41 | 2 cutters + a rider (22) | 46 | **69** | 59 |
| | **thirty enemies** | | **696** | 530 |

Thirty enemies is §7.3b's own count and it is only thirty because the dam pays for none: the pay rule above is what makes the two figures agree. **The twenty-hour total is therefore 3,240 + 696 + 460 + 140 = 4,536**, which is level 8 (4,334) with 202 to spare, and level 9 is 6,005, so the trace's headline does not move. Quests are **71%** of it — the largest source by a factor of four — so the road to power is the road to standing, and grinding fights is a slow road that gets slower. ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3b must re-price its fights column, restate its running totals — 171 at Thaw 1, not 180, and 1,330 at Thaw 16, not 1,356 — correct level 8's threshold to 4,334, and cite this section rather than [COMBAT](COMBAT.md) §9, which says in as many words that it has never held a curve.)

**Per level:** +10 health (COMBAT §1: health is `90 + 10 × level`). **Every third level:** a knack — 3, 6, 9, 12, 15, 18, 21, 24, which is **eight picks from a class's twelve**, so no two heroes of a class are the same and none is stronger. **Level 15:** subclass, which §5 puts at about hour 72 — the second region's opening reward, not the first region's. Nothing else is gated by level; quests gate by standing, and the Fair/Even glyph tells the player when a fight is beyond them.

## 2. Companion growth

Companions share the hero's level (they gain the same experience from the same fights and quests when in the party, and catch up to the hero's level minus one when they rejoin after time apart — the world has been teaching them too). Each has one **role ability** upgraded at levels 5, 10, 16 and 22, and a **regard** for the hero (−100..+100) that changes with deeds that touch their agenda. At regard +40 a companion tells the hero the thing they have not said (Corva: why she wants the Stair; Ilune: what the Rudd Stones hold; Gulla: what Thrum owes the Stair); at +70 their agenda can be *settled* by a Voice quest the engine generates for them, after which they stay for the campaign. At −40 they leave. Companions are never bought, drawn or rolled: each is met in the world at a site and a state, and a region has five.

## 3. Gear

Gear is **named, made and tiered**; there are no random stats, no rarity colours and no drops of finished weapons. Five tiers: 1 village-made (Garrow Tull's forge), 2 town-made (Wickery's smith, Idren's imported Kest blades), 3 hold-forged (Thrum; needs Holds regard ≥ 0), 4 Stair-imported steel (Fallgate; needs Stair regard ≥ 0), 5 stone-bronze reworked by a Skerrow master (Force standing and a court's bronze). Each tier is one weapon per class-style (light, heavy, rod), one armour (leather, mail, hold-mail, Kest plate, bronze-laced), and a handful of tools (lamp, skin, cord, boat). Upgrading a tier is a purchase plus materials plus a smith who will do it (regard), or the hero's own trade if smith. A tier-2 heavy is 2 marks and 6 iron; tier-3 is 6 marks, 10 iron and Thrum's forge. Gear breaks only in one way: left in a dungeon at a death.

**Gear tiers are gated by regard, not by hours, and this is load-bearing.** The traced Fighter ends twenty hours with **five marks** in his purse (§4, itemised: 24½ in, 19½ out) — one short of tier 3's six, and one more sack of Court bronze at Kit's 1½ would close that gap in an evening. He still cannot buy tier 3, and the mark is not why: Holds regard is **−65** ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3c) and Marrock will not sell to him at any price. Tier 4 is shut for the same reason at Stair −70. The road back is in the world and is named: Marrock's Green contract at Thrum's gate (offered despite regard, because `witnessed_skerrow` is a door regard cannot shut), a Stand kept, a Skerrow word spoken aloud and kept, which is row 19 `kept_word` at weight 10 and the Holds at +10. That is the reason no store line can touch a gear tier: coin is not what a tier costs.

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
| Three Hand quests (H2, H1, H3) | 1 + 1 mark, and H3's witness-fee of 2 marks in iron — twelve bars at Marrock's 3 bits a bar, and [FIRST_REGION](../slice/FIRST_REGION.md) §7.2 says it "is the whole of it": Thrum's twelve marks for the strip go to **Reyne**, not to the hero | 4 |
| N1 | Corrow has no coin; the descent's pay is what the hero cuts out of it | 0 |
| Vo1 | Aud's ten marks, printed in the trace | 10 |
| "Corrow's Terms" | terms, not coin | 0 |
| Salvage | four sacks to Kit at 1½, in the Post's back room, no questions | 6 |
| The trade | a half-day at Garrow's forge on Thaw 2 (4 bits) and odd hours | ½ |
| Purses | thirty enemies at 2–10 bits, mostly cutters | 2 |
| Stand wages | **none.** The Stand day of the 18th was missed while the hero was offline and docked, and the rota was handed back at the gate on the 23rd rather than broken | 0 |
| | 42 + 40 + 36 + 200 + 120 + 10 + 40 = **488 bits** | **24½** |

| Spending | Model | Marks |
|---|---|---|
| Gear | tier-2 heavy, 2 marks — six of the witness-fee's twelve bars go into the blade and six are sold back at 3 bits to cover the rest, leaving 4 bits to find in coin ([FIRST_REGION](../slice/FIRST_REGION.md) §7.2) — and a tier-2 bow for Corva on the 27th (1) | 3 |
| Supplies | six road days at 8 bits (48), two dungeon days at 20 (40), eight beds at 2 (16), the Drill's bread (10) — **114 bits** | 5¾ |
| Companion shares | 20% of quest pay per companion in the party: Corva from Thaw 8 on 15 marks (3), Ilune from Thaw 13 on 4 (¾), Gulla on Vo1's ten (2) | 5¾ |
| A mule at Hobb's Cross, Thaw 35 | 4 marks and a bit a day thereafter | 4 |
| House repair at Sallowford | Garrow's approval, and nothing else | 1 |
| | 60 + 114 + 116 + 80 + 20 bits | **19½** |

**The hero ends the trace with five marks** — 488 bits in against 390 out: 98 bits — tier-2 gear, **no iron left** (§7.2: six of the twelve bars went into the blade, six were sold back to pay for it, and "the stock closes at zero bars"), a mule and a name. Five marks is one short of the six a hold-forged blade costs at Thrum, and the missing mark is the least of it: he could sell one more sack to Kit tomorrow and still not be sold to, because the Holds are at −65. Coin in the Hearth is for changing the world, not for banking, and the trace's last line about money is a purse that is nearly enough and a door that was never about the purse.

## 5. The fairness model

The world is the same for everyone. A paying player has cosmetics, side-chapters and prepaid conveniences; a free player has the same hero, companions, standing, gear, quests, dungeons and ending, in the same number of hours.

### The pace model, stated once

Five numbers, all measured off the trace, and every row of the table below falls out of them.

1. **Where an hour mark lands.** A session's real minutes are `2 × open world hours + paused minutes`, and across the trace the paused minutes equal the open-play minutes almost exactly ([SESSION_UX](SESSION_UX.md) §3), so a played hour is about **fifteen open world hours** — and the nine sessions' real lengths in [FIRST_REGION](../slice/FIRST_REGION.md) §7.1 say exactly which session and which scene an hour mark falls in.
2. **World days per played hour: 2.08.** 998 world hours over 20 played hours. A ninety-day season is therefore about **43 played hours** for the traced evening player, which is one region.
3. **Quest cadence: one quest per 2.2 played hours** — nine quests in the traced twenty — falling to **one per 2.5** at Name and above, because a Voice quest is an evening: Vo1 was set up in a four-minute check-in and played in one two-hour evening.
4. **Quest experience by tier**, midpoints from §1: Villager 90, Hand 200, Name 400, Voice 850, Force 2,000. Paid at the **stake's** tier, so a stretch of hours is priced by what the valley still has to offer and not by the hero's glyph.
5. **Non-quest experience: 65 an hour** in a fresh valley (1,296 over the first twenty hours: 696 of fights, 460 of discoveries, 140 of witnessed deeds), **49** in one already worked, because sixteen of the twenty-three discovery-points an hour are spent.

Running those forward, and every interval is printed with its mix so it can be checked:

| Hours | Quests at 2.5 h each | At the stake's tier | Non-quest | Ends at |
|---|---|---|---|---|
| 20 → 40 | 8 — region one's last season | 5 Voice stakes (4,250) + 3 Name (1,200) | 49 × 20 = 980 | **10,970** — level 11, region one finished |
| 40 → 50 | 4 — region two, fresh | 4 Voice (3,400) | 65 × 10 = 650 | **15,020** — level 12 |
| 50 → 150 | 40 | Voice (34,000) | 65 × 100 = 6,500 | **55,520** — where [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5 puts Force |
| 150 → 200 | 20 | Force (40,000) | 65 × 50 = 3,250 | **98,770** |

At Force the rate is `2,000 ÷ 2.5 + 65 = 865` an hour, so level 25's **94,381** falls at `150 + (94,381 − 55,520) ÷ 865` = **hour 195**. Level 15 and the subclass fall at `50 + (24,119 − 15,020) ÷ 405` = **hour 72**. Round three's version of this list printed the hours-20-to-40 total without its tier mix, which is the one interval a reader could not reproduce.

**Renown runs on a different clock**, because it counts heads and heads decay ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5). Its model at the two later marks:

- **Hour 50, about 500 — and it is a floor, not an estimate.** Hour 50 is world-day 104 (2.08 days a played hour), so every head of the trace's 402 is asked one question: *what weight does it hold, and when does that weight fall under 3?* The lifetimes are the deed table's own — w3 counts 10 days, w4 20, w5 30, w6 60, w7 90, w8 120, w9 150, w10 never ([LIVING_WORLD](LIVING_WORLD.md) §4).
  - **Two never-decaying leaders**, Halse Corrow and High Reeve Tull: **200**.
  - **Sixteen named heads still counting at day 104:** Sarane 20 (row 26, w10) · Idony 20 (row 5 raised her to w9 on Thaw 11 → day 161) · Aud 20 and Dell Coombe 5 (row 9, w10) · Ondrin 5 (row 26, w10) · Wat Hobb 5 (row 6 at +2 → w10) · Drusk 5 (row 12 at w10 on Thaw 34) · Pell 5 (w9, Thaw 11 → 161) · Hild 5 (w9, Thaw 13 → 163) · Ilune 2 (w10) · Bram 2 (row 2 at +2 +2 → w10) · Corva 2 (w9 → 158) · Gulla 2 (row 23, w9 → 191) · Orsa 2 (w9, Thaw 34 → 184) · Rukk 2 (w8, Thaw 7 → 127) · Tobbin 1 (w8, Thaw 1 → 121) = **103**.
  - **Twenty-seven folk at reach 1:** ten watchmen, four Chainmen, three Wickery levy men and the three Sallowford men, all rewritten at w9 on Thaw 34 → day 184 (20) · two Wrack sentries at row 26's w10 (2) · Col and two at Hobb's Cross at w8 → day 128 (3) · two village folk at w9 → day 163 (2) = **27**.
  - **Gone, and each on a date:** Garrow (w6, day 61) · Idren (w6, 69) · Marrock (w6 from the 7th, 67) · Kit (w6 from the 22nd, 82) · **Osk (w7 from the 11th, day 101 — three days before the mark)** · the two ford folk, the five hewers, the eight folk of the Thaw 35 notice.
  - **Region two's first ten hours** are worth what the trace's own first ten were worth in a fresh valley — **175** at Thaw 21 14:00 — and none of it has decayed, because those heads are at most twenty-one days old at day 104. Nothing here is priced above what the trace itself measured.
  - 200 + 103 + 27 + 175 = **505**, call it **about 500**: Voice with room (floor 350) and a little over half of Force's 900. It is a floor because it counts no head from hours 20–40 in region one — the Quay Fight's, Vo2's, N2's — which the trace does not name, and every one of those written at weight 9 is still counting at day 104.
  - *One head this cannot settle:* [FIRST_REGION](../slice/FIRST_REGION.md) §7.3a says five heads are rewritten at 8 and 10 on Thaw 16 without naming which five, and its Thaw 23 row reads Gulla's w4 off "Marrock's w6". Read one way Marrock and Reyne hold w8 from the 16th and both are still counting at day 104, which is 25 more; read the other they hold w6 and are gone by day 76. This model takes the second, because it is the reading §7.3a's own Thaw 23 arithmetic needs.
- **Hour 200, about 1,000.** [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5's Force table totals **910** at four regions and about 150 hours — 440 in seats (four leaders at 100 and two ring Speakers at 20), 135 held over in the Rudd valley after four seasons of decay, 110 in the Halse, 110 in the Twine, 55 at Fallgate and 60 in the Moot's other reeves; the six rows add to 910. The campaign's fifth region adds another valley's 110 against a further season of decay in the first four: about **1,000**, and the ceiling is real — there is no fifth reach-100 leader to find. **What that row assumes, said out loud:** at four hundred world days nothing under weight 10 survives untouched, and the trace's own never-decaying non-seat heads come to **46** (Ondrin 5, Wat Hobb 5, Drusk 5, Dell Coombe 5, Aud 20, Bram 2, Ilune 2, two Wrack sentries 2). The other 89 of that 135 are heads a Force hero has been back to the Rudd valley to rewrite. That is CLASSES §5's model and this file inherits it rather than re-deriving it; if a campaign never returns to its first valley, hour 200 is nearer 910.

**Standing is one global number** — a Voice hero who walks into the Halse valley is Voice there, because the seats and the letters travel — but the Halse's own people hold no memory of him, so their greetings are strangers' greetings until he does something in their valley. That is why renown grows region by region and never resets, and why Force needs four valleys rather than four hundred errands.

### The table

| Hours | Where the trace is | Free player | Paying player | Difference |
|---|---|---|---|---|
| **1** | Thaw 2, afternoon, in Sallowford (evening one, sixty real minutes in) | **Level 2** (171 XP: V3's 120, the Old Shore road's 30, the salt-hound's 21); **renown 15** — Villager, the glyph an ember; tier-1 gear from the hero's own forge; V3 done, nineteen ewes home and `court_mouth_seen`; a day at Garrow's anvil that added four bits and no heads; about 16 bits; no companion — Corva is at the mill until Thaw 8 | same | a cloak dye, if bought |
| **10** | Thaw 21 14:00, setting out across the Shelf for Corrow (evening four, sixty-eight minutes in) | **Level 5** (1,330 XP: six quests 990, three engagements 90, five discoveries 170, the ash contract 80); **renown 175** — Name since dawn on the 10th, the glyph a fire; two companions, Corva (Thaw 8) and Ilune (Thaw 13); a tier-2 heavy bought the previous afternoon, four flasks and four bandages; **about 15 bits, and that is the point of the hour** — the twelve iron bars have just become a blade and the bronze is not cut yet | same | house furnishings; a prepaid mule instead of the one bought at hour 17 |
| **50** | Green, about day 104: region one finished at hour 40, region two ten hours old | **Level 12** (15,020 XP; level 13 is 16,392); **renown about 500** — Voice, and not remotely Force; five companions met in region one and one settled; tier 2, or tier 3 **only if the Holds have been repaired** (the trace ends at −65 and Marrock's Green contract is the road back); subclass not yet — that is level 15, about hour 72 | same, plus the side-chapter *The Foot* if bought, which gives Kest-flavoured quests and one companion and no gear above tier 4, which region two already sells | a second hearth (a second campaign) |
| **200** | the campaign's end | **Level 25** (98,770 XP) — the cap, reached at about hour 195; subclass since hour 72; **renown about 1,000** — Force since about hour 150; tier-5 bronze-laced gear; every region open and the Fall's question in the hero's hands | same, plus every side-chapter | cosmetics, chapters, conveniences |

### The working behind one row, in full: hour one

Evening one runs Thaw 1 06:00 to Thaw 3 14:00 in two hours twelve minutes of real time, with 33 open world hours, 17 of rest and a 6-hour verb-day ([FIRST_REGION](../slice/FIRST_REGION.md) §7.1, row 1). Thaw 1 itself is 16 of those open hours — 06:00 to 22:00 — and the trace anchors its own front end: "the player's first three minutes end here" at 07:00, after creation, the Firstwater scene and one open world hour. So Thaw 1's paused minutes are cheap and its clock minutes are not.

Counting forward at two real minutes to the open world hour, plus the scenes: 07:00 at minute 3; the six hours down the Old Shore road at minute 17 (12 of clock, 2 for Wat Hobb's yard and the bridge); the strays, the Court's roofs and the first salt-hound at minute 23; the seven-hour drove at one mile an hour to Gorse End's pasture at **minute 39**, where Reyne is standing with a lamp. The deed sheet is minute 40.

That deed is **row 1 `found_stock`, base weight 6**, and its receivers are the row's own and nobody else: Tobbin who lost them at +2 (reach 1), Reyne the owner (5), Hild who warned the hero (5), Garrow at the Ford Inn door at 20:00 as the drove came through the ford (2), and two folk at the ford (1 each). **1 + 5 + 5 + 2 + 1 + 1 = renown 15**, and Moot +5 because Reyne holds the Moot's captaincy for the west. Experience: 120 for the quest, **21** for the hound (a salt-hound's threat is 14; `14 × 1.5 = 21`) and 30 for the Old Shore road — **171**, which is level 2 (60) and not yet level 3 (242).

The rest of the hour is Thaw 2: a rest to dawn (no real time), the half-day at Garrow's forge from 06:00 — a **verb-day**, which advances the clock six hours, costs no real minutes and pays 4 bits — and the walk up to Gorse End at 12:00, where Reyne uses the *heard* line to a hero he has never met, because Tobbin told him at the yard. The forge day writes row 57 `worked_the_trade` at weight 2, **which adds nobody**: renown stays at 15. The sixtieth real minute falls in Sallowford in the middle of Thaw 2's afternoon.

So hour one is **level 2 (171), renown 15, one quest, one fight, two discoveries, a trade day and no companion** — and the most instructive thing in it is the row that added nothing.

*(The old draft of this table read renown 12 at hour one. The ledger's first entry is 15 and always was; twelve was a number without a deed under it.)*

### Two honest notes on the table

**The hour-ten row lands four minutes before the biggest jump in the region.** Renown **175** at Thaw 21 14:00 becomes **277 at 22:00 the same evening** — `+102`: Halse Corrow's hundred at the Salt Hall door under the leader rule, and two Wrack sentries — and **297** by the evening's end at hour 12:20, after Kit's five on the 22nd and Merrin's notice and Gulla's two on the 23rd ([FIRST_REGION](../slice/FIRST_REGION.md) §7.3a). The hour mark is where it is because the clock puts it there, and the shape of the curve — flat for six sessions and then a hundred points in one fight at a door — is the standing system's actual shape and not a defect in the table.

**The hour-ten purse is derived, and it is the one figure in the table with a range on it.** By Thaw 21 14:00 the hero has taken 42 bits from the three Villager quests, 40 from H2 and H1, the witness-fee's twelve bars (spent that same afternoon on the blade), about 10 from the trade and about 20 in purses — **112 bits** — against the blade's 4-bit balance, 12 for oil, 8 for bandages, about 10 in beds, about 32 in road days and 32 in Corva's and Ilune's shares: **about 15 bits**. Two of those items — how many of the trace's six road days and how much of its two marks of purses fall before the 21st — are printed by [FIRST_REGION](../slice/FIRST_REGION.md) §7.2 only as twenty-hour totals, so the figure carries about ±10 bits. It is under a mark either way, which is the whole of what the row claims: the hero goes down into the Sunk Court broke, and comes out with six marks of bronze.

**The fifty-hour row is a fork, not a figure.** Tier-3 gear at fifty hours is available to a hero who has mended the Holds and shut to one who has not, and both are playing correctly. This is the one place in the fairness model where two free players legitimately differ, and the difference is a regard ledger, which no money can touch.

## 6. What is sold, and why the world survives it

Everything sold is priced once, in the store, in money. Nothing is sold for a currency that is also earned in play; nothing sold is a chance; nothing sold is a wait removed.

1. **Cosmetics.** Cloak and hood dyes; house furnishings for the Sallowford house (and later houses); companion garb; map styles (a Kest survey map, an Ulder water-map); portrait frames. Visible to others only in the sense that the hero's neighbours remark on them (a weight-1 memory: "Nice cloak"). No stat, no reach, no regard.
2. **Side-chapters.** Whole regions off the campaign's road, sold as chapters: *The Foot* (the Kest port below the Fall), *The Deep Court* (a court under the Still, by boat), *Kell in Winter*. Each is one to two evenings of the same engine and one companion, and none holds a tier, a subclass, a standing or a door the campaign needs. The five campaign regions and the map-changing end are free.
3. **Conveniences that are in the world already.** A **mule**, prepaid (4 marks at Hobb's Cross in-world; the prepaid one still eats a bit a day and can still be stolen by the Wrack). A **courier pass** (sell salvage from any site at Kit's price minus 10%; in-world, Wat Hobb's boy does the same run for 10 bits a time). A **second hearth** (a second hero slot; a free player gets one campaign at a time, and can finish it and start another). An **almanac** (the journal's rumours and map events kept for the whole campaign instead of the last season; a free player can buy the same book from Merrin Hale for 2 marks a season).

*Why the world survives it:* the only things a paying player has that a free player never gets are colours, side-valleys and a second save. No standing tier, level, ability, companion, gear tier, quest, door or fight is reachable by money. The engine's quests read the same state for both. The powers do not know who paid. A test the design holds itself to: **every store line must name the in-world way to get the same thing, or be cosmetic.** The mule names Hobb's Cross; the courier names Wat Hobb's boy; the almanac names Merrin Hale; the second hearth is a save slot; the chapters are places; the dyes are dyes.

*And the arithmetic backs it.* The three things that actually gate a hero — a gear tier, a standing tier and a subclass — are gated by a regard ledger (§3), a count of heads (§5) and an experience curve (§1) respectively, and there is no line in the store that writes to any of the three. The prepaid mule is the most generous thing sold and it saves four marks out of the **twenty-four and a half** a free player earns in twenty hours (§4) — a sixth of the purse, or about three played hours' income, or thirteen days at the anvil at 6 bits a day — and what it buys is carrying capacity, not a tier, a level, a head or an hour of the world's time, which passes at four hours to the real hour whether it is bought or not.

*What is deliberately not sold:* experience, coin, marks, materials, gear, companions, standing, regard, knacks, respecs, revives, scar removal, Salt easing, time skips, offline-cap raises, quest re-rolls, map reveals, difficulty changes, autobattle (it is free and first-class), and anything with a timer, key, pull, chest or pity attached. The offline cap is seven days for everyone; nobody can buy an eighth.

## 7. Anti-grind rules

1. **Experience from a repeated fight halves** each time the same enemy kind is fought at the same site within a world-week, and from the fourth fight it is 2 or less. Enemies do not respawn without a simulation cause (a band is *Sent* or *Raised*; a court's Salted wake by state), so there is nothing to farm that the world did not put there for a reason.
2. **Quests are seven-tenths of experience (3,240 of 4,536) and nearly all coin** — the next source, fights, is 696 — and the engine offers at most six at once, so the fastest road is always the world's road.
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
- *The business risk, plainly.* A game that sells colours and valleys earns less per player than one that sells power. The design accepts it, the pitch says so, and the twenty-four and a half marks a free player earns in twenty hours (§4) is the whole of the leverage anyone would have had.

## Decisions this round

1. **Everything with a number was re-derived from [FIRST_REGION](../slice/FIRST_REGION.md) §7's rebuilt ledgers.** Renown at hour one is 15 and not 12; at hour ten it is **175**, read off §7.3a's Thaw 14 row and not off the round-two draft's 179; the Holds are at −65 and not −35; the trace does nine quests in twenty hours and not fourteen; the Stand wages the old ledger counted were never earned, because the rota was handed back.
2. **The level cap moved from 40 to 25**, because two hundred played hours earn about 99,000 experience and `60 × L^1.6` asks 326,800 for level 40. The curve stays; the cap now falls where the campaign ends. Knacks move to every third level so that eight of a class's twelve are still picked.
3. **Supplies are a journey cost, not a daily tax.** "About 8 bits a world-day active" charged the hero for sleeping in his own village and made the ledger irreconcilable with the trace's actual purchases. The rate now says what it is for.
4. **Gear tiers are stated as regard gates, in §3, with the trace's own numbers**, because that is what makes the store's refusal to sell power structural rather than a promise.
5. **The fairness table's hour marks are located by the session clock**, so each row names the session, the world day and the scene it falls in. An hour mark that cannot be pointed at on the clock table is an assertion, and this file had four of them.
6. **The level curve is now rounded once, at each step, and the row re-added.** Twelve printed figures were wrong against this file's own formula — 551 and not 553, 1,141 and not 1,143, 94,381 and not 94,397 — because the row had been rounded twice. Nothing built on it moved except where it should: the cap falls at hour 195 rather than 197.
7. **The trace's fights are re-priced off `threat × 1.5` at [COMBAT](COMBAT.md) §1.8's rewritten threats, and the rule for what a fight pays is stated here** — every enemy in an engagement the party resolves in its favour, and nothing for an engagement that never begins. Not one of the nine engagements in [FIRST_REGION](../slice/FIRST_REGION.md) §7.3b reproduces from the rate; two of them print the engagement's `ER` as its pay. The twenty hours come to **4,536**, not 4,370, and the trace is still level 8. The figure that mattered most here was not the total but the missing rule: without it, "thirty enemies in nine engagements" and the nine compositions could not both be true.
8. **The coin ledger lost a mark it never earned and gained three-quarters of one it always spent.** H3's income row credited the hero with "Reyne's mark", where [FIRST_REGION](../slice/FIRST_REGION.md) §7.2 says the witness-fee of twelve iron bars "is the whole of it" and Thrum's twelve marks go to Reyne for the strip; and the supplies row printed 5 marks for 114 bits. In: **24½**. Out: **19½**. The purse at twenty hours is **five marks**, not seven — one short of a hold-forged blade, which makes §3's argument sharper rather than weaker, because the door was never shut by the price.
9. **What is sold and what is refused is unchanged, deliberately.** §6's three categories, its nineteen named refusals and the timer-key-pull-chest-pity clause behind them, and the test every store line must pass — *name the in-world way to get the same thing, or be cosmetic* — are as they were; the only figures that moved in that section are the free player's twenty-four and a half marks and the mule's share of them, both of which came out of §4's corrected ledger. A round that re-derives the economy is exactly the round in which the store's discipline must be seen not to move.
