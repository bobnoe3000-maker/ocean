# Combat, Dungeons and Autobattle

Real-time, portrait, one thumb. The hero moves, dodges and uses four arc abilities; two companions act on their own AI under a stance the player sets; **autobattle** hands the hero to the same AI the companions use, with the same abilities, cooldowns and stats. Field fights last 20 to 90 seconds; dungeon and set-piece fights longer. This file gives the numbers, the rules, the autobattle policy, the parity proof, death and its cost, and three encounters played twice each. Class verbs are in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md); the screen in [SESSION_UX](SESSION_UX.md); the dungeon of the first region in [FIRST_REGION](../slice/FIRST_REGION.md) §6.

**What this file promises.** Every number in it has a model behind it, and a reader with a pencil can compute, for any hero, companion or enemy: **damage per second**, **resource per fight**, and **time to kill**. Where a rate, a recovery, a cooldown or a duration was missing in earlier rounds it is supplied here, and the arithmetic it makes possible is shown. §10 lists what changed and which printed outcomes moved when they were recomputed.

---

## 1. The model

### 1.1 How a hit is worked out — the order, stated once

Every damage number in this file, in every other file, and in every worked example is produced by this order and no other:

1. **Base** — the weapon's damage (§1.3) or the ability's table value (§1.4).
2. **Ability multiplier** — Rogue Mark from behind ×2, Rogue Cut within the Slip window ×3, Fighter Hold's counter ×1.5. One only; they do not stack with each other.
3. **Kind multiplier** — the enemy's own row in §1.8 (Fling ×2 on a salt-hound, Wring ×2 on a Salted thing, Fling ×1.5 on a salt-warden). One only.
4. **Buff** — Rally +20%, an enemy Rally +20%.
5. **Armour** — subtract the target's flat armour, **once**: cloth 0, leather 2, mail 4, hold-mail 6, and the enemy values in §1.8.
6. **Block** — a percentage of *what is left*: Fighter Hold 80% from the front, Shield Brace 60% (70% from level 10), a chainman's shield 50% from the front.
7. **Floor** — a hit that lands at all lands for at least **1**. Round to the nearest whole number, halves up.

**The rule in one line: multiply first, subtract armour last, block what remains.**

Worked, because four rounds of examples were not a rule:

- A Rogue's tier-2 light (9) Marked from behind on a **chainman** (armour 4): `(9 × 2) − 4 = 14`. Not `(9 − 4) × 2 = 10`. The order is worth 40% of a Rogue's damage against everything armoured in the region.
- The same Rogue's Slip-window Cut on a **slinger** (armour 0): `9 × 3 = 27`. **This number was printed as 26 in rounds 1–3 and 26 was wrong**; it is 27 (§7, Encounter C).
- A Mage's tier-2 Wring (35) on a **Salted husk** (armour 3): `(35 × 2) − 3 = 67`, and each bleed tick `(10 × 2) − 3 = 17`. With the crust stripped (armour 0): `70` and `20`.
- A cutter's heavy (16) on a Fighter in leather (2) who is Holding: `16 − 2 = 14`, then `14 × 0.2 = 2.8 → 3`.
- A cutter's ordinary swing (8) on the same Fighter, not Holding: `8 − 2 = 6`.

### 1.2 Time — the second rule everything else rests on

**Damage lands on the tap.** Every ability fires the instant it is tapped ([SESSION_UX](SESSION_UX.md) §2); what differs between abilities is **recovery** — the time before the arc accepts the next tap. So `damage per second = damage ÷ recovery`, and that is how every rate in this file is computed. A duration that runs after the tap (Wring's bleed, Mist's fog, a root) runs on its own clock and does not block the arc.

- **Recovery** is the cadence: a light weapon 0.8 s, a heavy 1.4 s, a rod (Fling) 0.8 s. Ability recoveries are in §1.4.
- **Cooldown** starts at the tap and runs while the hero does other things.
- **Telegraph**: every hit over 15 has a wind-up of at least 0.6 s (§2 rule 1) with a ring, a sound and a haptic. A dodge (0.4 s of invulnerability, 1.2 s cooldown, 10 stamina, free for a Mage) beats any of them.
- **Movement**: hero 4 m/s. Enemy speeds are in §1.8 and are what make a chase, a kite or a retreat computable. A companion moves at the hero's speed; a Bow companion holds 6 m and kites anything slower than 4 m/s, which is why it is rarely hit and why it stops shooting while it repositions (half its rate).
- **Turning**: a target turns to face what is hurting it at 180°/s (a Salted husk, a warden and a boar at 90°/s). This is what makes "from behind" a skill and not a free multiplier: a Rogue gets the back arc after a Slip, while a target is rooted, blinded or Taunted, or while it is busy with someone else.
- **Rooted** (Bind, Snare, Pin) freezes the feet: the target cannot move **or turn**. Every hit on a rooted enemy from behind is a back hit, and a rooted chainman cannot keep his shield between you and him.
- **Blinded** (Powder): the target swings, and the swings miss. It still faces you.
- **Targeting**: an enemy attacks whoever has dealt it the most damage in the last 3 s; with nobody, the nearest. A Taunt overrides for its duration. **Salt-hounds flank**: while two or more are alive and untaunted, half the pack (rounded down) goes for the party member farthest from the pack.
- **Nothing is random** except which target a slinger, crane or spitter opens on. Nothing crits. Two identical fights resolve identically, which is what makes §6's parity provable rather than asserted.
- **Health does not regenerate.** It comes back from a bandage (30 health over 10 s, out of combat only), a Mage's or a Draw's Ease, a Fighter's Rally (+10 at the tap), or eight world hours at a bed or a camp (full). This is the whole reason a dungeon has a bottom.

### 1.3 The hero

**Health** `90 + 10 × level`. **Stamina** 100 for Fighter and Rogue, regenerating 10 a second. **Water** 100 for a Mage, no regeneration: it refills at a water source in ten seconds and nowhere else ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2; the thirst rule and Salt are there and apply in fights).

**Weapons by tier** (1–5; region one uses 1–3):

| Tier | Light (0.8 s) | Heavy (1.4 s) | Rod: Fling (0.8 s) | Rod: Wring (burst) |
|---|---|---|---|---|
| 1 | 7 | 12 | 6 | 30 |
| 2 | 9 | 15 | 8 | 35 |
| 3 | 12 | 20 | 10 | 40 |

Fling is `4 + 2 × tier`, Wring `25 + 5 × tier`. **Armour** subtracts flat: cloth 0, leather 2, mail 4, hold-mail 6. A companion's gear tier is set by the hero and printed with the party in every example; a companion met in the world arrives one tier below the hero and stays there until equipped.

### 1.4 The three arcs, with every number a fight needs

| Class | Ability | Cost | Recovery | Cooldown | Range | Effect |
|---|---|---|---|---|---|---|
| Fighter | **Strike** | — | weapon (1.4 s heavy) | — | 2.5 m | weapon damage; the **third** Strike of a heavy chain is a **Cleave**, same damage to everything in a 90° arc at 2.5 m; the chain resets after 2 s without a Strike (four hits at level 10, five at 20) |
| | **Shove** | 15 sta | 0.5 s | 6 s | 3 m | knock back 2 m; **interrupt** (cancels a wind-up or a call); strips a chainman's guard 2 s |
| | **Hold** | 20 sta | 2 s brace | 8 s | self | block 80% from the front for 2 s, then a counter-Strike at ×1.5 |
| | **Rally** | 25 sta | 0.6 s | 20 s | 8 m | hero and companions +20% damage 6 s, and 10 health at the tap |
| Mage | **Fling** | 2 water | **0.8 s** | — | 8 m | `4 + 2 × tier`; slows 20% for 2 s |
| | **Bind** | 20 water | 0.5 s | 8 s | 8 m | root 2.5 s (cannot move or turn); **interrupt**; immune to a second Bind for 8 s |
| | **Mist** | 25 water | 0.5 s | 20 s | 6 m round the party | 3 s: enemies lose their target, ranged shots miss, the party moves at full speed |
| | **Wring** | 30 water | 1.0 s | 12 s | 8 m | `25 + 5 × tier` at the tap, then 10 a second for 3 s; **both parts ×2 against the Salted**; on the living it writes a weight-6 memory to any Ulder witness |
| Rogue | **Cut** | — | 0.8 s | — | 2 m | light weapon damage; from behind ×2 (**Mark**); within 2 s of a Slip ×3 |
| | **Slip** | 20 sta | 0.3 s | 5 s | 3 m dash | invulnerable 0.5 s, ends behind the target |
| | **Snare** | 15 sta | 0.5 s | 10 s | 8 m | root 2 s, cannot be shrugged by brutes; **interrupt**; dismounts a rider |
| | **Powder** | 25 sta | 0.6 s | 18 s | 4 m | blinds up to three for 2.5 s |
| all | **Dodge** | 10 sta (Mage 0) | 0.4 s | 1.2 s | 4 m | invulnerable 0.4 s |
| Mage/Draw | **Ease** | 15 water | 1.0 s | 10 s | 4 m | 15 health over 5 s to the most hurt ally (20 at companion level 5+) |

**Interrupt** is a tag, and it is the answer to §2 rule 1 for all three classes: Shove, Bind, Snare, the Bow's Pin and the Shield's Crack all cancel a wind-up or a call in progress. A dodge does not cancel it; it avoids it.

### 1.5 What that comes to per second — the tables a reader should never have to derive

**Hero damage per second, single target, no companions** (base ÷ recovery, armour subtracted per §1.1; the Fighter and Mage lines are the basic attack alone, the Rogue line adds one Slip-window Cut every 5 s):

| Class, tier 2 | vs armour 0 | vs armour 2 | vs armour 4 | Resource per 10 s of fighting |
|---|---|---|---|---|
| Fighter, heavy 15 | 10.7 | 9.3 | 7.9 | 0 (Strike is free); Hold+Shove ≈ 35 stamina, regen pays 100 |
| Mage, Fling 8 | 10.0 | 7.5 | 5.0 | **25 water** (12 casts + 1 spare); a full skin is 40 s of Flinging |
| Rogue, light 9 | 14.8 | 12.3 | 9.8 | 40 stamina (2 Slips), regen pays 100 |

**Against a Salted husk** (120 health, armour 3), one hero, level 8, tier 2, alone, no knacks — the file's worked **time to kill**:

| Class | Line played | Damage per second | Time to kill | Resource |
|---|---|---|---|---|
| Fighter | Strikes, Hold on each telegraphed swing, counter ×1.5 | 8.6 + 0.4 = 8.9 (the 2 s brace costs 1.4 Strikes and the counter returns 20: the loop is a defence that pays for itself, not a damage gain) | **13.4 s** | 20 stamina per 8 s, covered by regen |
| Mage | Wring on sight (67, then 17 a second), Flings at 5 between the ticks | 118 in three seconds, then 6.3 | **3.0 s** | **36 water** (one Wring, three Flings) |
| Rogue | front Cuts at 6, a Slip-window Cut at 24 every 5 s | 11.1 | **10.8 s** | 45 stamina |

That table is the husk's answer to §2 rule 2, in numbers: **every class kills it, and each pays a different price.** The Mage's three seconds are Wring's, and Wring has a 12-second cooldown: her **second** husk inside that window takes `120 ÷ 6.3 = 19 s` of Flings at 5, which is why the Salt Threshold's two husks (§9, effective `ER` 75) is a longer fight for her than her first three seconds suggest — **22 s for the pair, against a Rogue's 22 and a Fighter's 27**. The three classes are three seconds apart over a pair of husks and ten seconds apart over one: that is what a class difference is supposed to look like. The Rogue pays for having no crust answer in seconds and in the hits taken during them; the Fighter pays in seconds and takes almost nothing, because every husk hit is telegraphed.

### 1.6 Knacks — twelve a class, eight picked (levels 3, 6, 9, 12, 15, 18, 21, 24)

Three are offered at each pick ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §4). **The design budget: a knack is worth about 5% of that class's output or survival at its own level.** That is why none is a must-take and why §7's parties print theirs.

| # | Fighter | Mage | Rogue |
|---|---|---|---|
| 1 | **Wide Cleave** arc 90° → 120° | **Quick Hand** Fling recovery 0.8 → 0.7 s | **Quick Slip** cooldown 5 → 4 s |
| 2 | **Long Shove** 2 → 3 m | **Deep Skin** +10 maximum water | **Long Slip** 3 → 4 m |
| 3 | **Iron Brace** Hold blocks 80% → 90% | **Cold Fling** slow 20% → 30%, 2 → 3 s | **Wide Powder** blinds 3 → 4 |
| 4 | **Quick Hold** cooldown 8 → 6 s | **Long Bind** root 2.5 → 3.0 s | **Quick Powder** cooldown 18 → 15 s |
| 5 | **Deep Chain** four-hit chain from level 3 | **Cheap Bind** 20 → 15 water | **Long Snare** root 2 → 2.5 s |
| 6 | **Rally's Reach** 8 → 12 m | **Wide Mist** radius +3 m | **Cheap Snare** 15 → 10 stamina |
| 7 | **Second Wind** regen 10 → 13 a second | **Cold Mist** Mist also slows 20% for 3 s | **Deep Mark** Slip window 2 → 3 s |
| 8 | **Cheap Guard** Hold 20 → 15 stamina | **Deep Wring** bleed 3 → 4 s | **Light Foot** Cut recovery 0.8 → 0.7 s |
| 9 | **Counterweight** counter ×1.5 → ×1.8 | **Quick Wring** cooldown 12 → 10 s | **Back-step** dodge invulnerable 0.4 → 0.5 s |
| 10 | **Boot** dodge +1 m, cooldown 1.2 → 1.0 s | **Long Ease** Ease 4 → 10 m | **Second Slip** a second Slip within 2 s costs 10 |
| 11 | **Shield-splitter** Shove strips a guard 2 → 4 s | **Dry Hand** the first Fling of a fight is free | **Cutpurse** a killed enemy's purse doubles |
| 12 | **Stand Fast** Rally's health 10 → 18 | **Salt-lore** Salt from a thirsty working halved | **Lime** Powder also strips a guard for 4 s |

### 1.7 Companions — the five of the first region

Health `80 + 10 × level`; a Shield `100 + 10 × level`. Companions spend no stamina; a Draw spends water from her own skin. Every companion ability has a cooldown, because a companion whose ability has no clock cannot be planned around.

| Companion | Role | Armour | Attack | Abilities (cooldown) |
|---|---|---|---|---|
| **Gulla** | Shield | mail 4 | heavy weapon at its tier (1.4 s) | **Taunt** every enemy within 4 m targets her 3 s (10 s) · **Brace** block 60% for 2 s (12 s) · **Crack** a 3 s wind-up that strips a Salted thing's crust — armour to 0 — for 10 s (12 s) |
| **Osk** | Shield | leather 2 | heavy weapon at its tier | as Gulla; and the only companion who rows (the Court's flooded halls) |
| **Corva** | Bow | leather 2 | `6 + 2 × tier` per 1.5 s at 10 m; holds 6 m | **Pin** 12 damage and a 1.5 s root, interrupt (12 s) |
| **Ilune** | Draw | leather 2 | Fling at her rod's tier, 0.8 s, 2 water, skin 80 | **Bind** as the hero's (8 s) · **Ease** 15 health over 5 s, 15 water (10 s) |
| **Kit** | Blade | leather 2 | light weapon at its tier (0.8 s); Mark from behind ×2 | **Powder** as the hero's (18 s) |

**Role upgrades**, at levels 5, 10, 16 and 22 ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §2), stated so a companion's contribution is computable at any level:

| Role | 5 | 10 | 16 | 22 |
|---|---|---|---|---|
| Shield | Taunt radius 4 → 6 m | Brace 60 → 70%, cooldown 12 → 10 s | Crack wind-up 3 → 2 s | Taunt 3 → 4 s |
| Bow | Pin cooldown 12 → 10 s | every third shot is a double | Pin root 1.5 → 2.5 s | range 10 → 14 m |
| Draw | Ease 15 → 20 health | skin 80 → 100 | Ease cooldown 10 → 8 s | Bind 20 → 15 water |
| Blade | Powder cooldown 18 → 15 s | Cut recovery 0.8 → 0.7 s | Mark ×2 → ×2.5 | Powder blinds 4 |

**Stances** (one chip per companion, tapped to cycle): *Close* (stay within 3 m of the hero), *Free* (fight by role), *Back* (disengage to the site's edge and stop fighting). **Companion AI is the §5 policy minus the hero-only rules** — the same priority list, which is why autobattle is not a different game. Companions level with the hero and never die in field fights; in dungeons they can ([§8](#8-death-and-its-cost)).

### 1.8 Enemies — fifteen kinds, region one

Every kind has a role, a telegraph, a speed, a raw damage per second, a multiplier column and — new this round — **an answer on each of the three arcs** (§2 rule 2).

| Enemy | Health / armour | Speed | Attack | Telegraphed hit | Raw dps | Threat |
|---|---|---|---|---|---|---|
| Wrack cutter | 55 / 1 | 3 m/s | 8 per 1.5 s | 16 every 4th swing (0.7 s) | 6.7 | 12 |
| Wrack slinger | 40 / 0 | 3 m/s (retreats at 4) | 7 per 2 s at 9 m | — | 3.5 | 10 |
| Wrack rider | 70 / 1 | 5 mounted, 3 on foot | 12 per 1.5 s | charge 22 (0.7 s) | 8.0 | 22 |
| Wrack ledgerman (Pell Tarn) | 220 / 2 | 3 m/s | 14 per 1.2 s; **Rally** +20% to Wrack for 6 s every 15 s, a 1 s call | 30 every 5th swing (0.8 s) | 14.3 | 45 |
| Salt-hound | 45 / 0 | 6 m/s | 8 per 0.9 s | lunge 16 (0.6 s) every 4 s, replacing a bite | 10.9 | 14 |
| Salted husk | 120 / 3 | 2.8 m/s | 20 per 2 s; immune to Bind and Snare | every hit (1.0 s) | 10.0 | 30 |
| Salt-crane | 35 / 0 | 3 m/s | 10 spit at 8 m per 2 s | — | 5.0 | 12 |
| Salt-warden | 400 / 5 | 3 m/s | sweep 28 every 3 s; immune to Bind and Snare | slam 45 in a 3 m arc every 10 s (1.2 s) | 13.8 | 110 |
| Chainman | 70 / 4 | 3 m/s | 10 per 1.2 s; shield blocks 50% from the front | 20 every 4th (0.7 s) | 10.4 | 16 |
| Chain sergeant (Drusk) | 160 / 4 | 3 m/s | 12 per 1.2 s | 26 every 4th (0.8 s) | 12.9 | 38 |
| Skerrow hewer | 80 / 2 | 3 m/s | 13 per 1.4 s | 24 every 3rd (0.9 s) | 11.9 | 18 |
| Moot militiaman | 60 / 2 | 3 m/s | 9 per 1.5 s | — | 6.0 | 11 |
| Mud-eel | 30 / 0 | 2 m/s in water | 6 per 1 s; grabs (1.5 s root) | — | 6.0 | 8 |
| Reedback (boar) | 90 / 2 | 7 m/s charging | 15 charge every 4 s | charge (0.8 s) | 3.8 | 20 |
| Stone-warden (a ring's guardian, if roused) | 300 / 6 | 3 m/s | 24 per 2 s; immune to Fling | slam 40 (1.2 s) | 16.0 | 90 |

**The answers table. Every kind, every class, one line each** — this is §2 rule 2 made checkable, and it replaces the old "Weak to" column, which named a Fighter's or a companion's answer and left the Rogue with nothing against the region's signature enemy.

| Enemy | Multipliers | Fighter | Mage | Rogue |
|---|---|---|---|---|
| Cutter | — | Cleave: they bunch three abreast — and Rally when they do, since +20% is worth most on a Cleave that hits three | Bind the front one, Fling past it | Powder the bunch, Mark through it |
| Slinger | — | Shove it off the ledge, or let the Bow take it | Bind at 8 m: a rooted slinger cannot retreat; against two or more, **Mist** — ranged shots miss for three seconds | Slip closes 3 m in 0.3 s |
| Rider | — | Hold the charge, counter at ×1.5 | Bind on the wind-up: a bound mount throws him | Snare on the wind-up dismounts him |
| Ledgerman | — | Shove interrupts the Rally call | Bind interrupts the call; Wring is the biggest hit in the game | Snare interrupts the call; Slip-Mark the back |
| Salt-hound | Fling ×2, Wring ×2 | Cleave: they come in a line | Fling ×2 kills one in three casts | Powder: a blinded hound lunges at nothing |
| **Salted husk** | **Wring ×2** | Hold: *every* husk hit is telegraphed, so the counter loop costs almost no health (13.4 s, §1.5) | Wring ×2 (3.0 s; 19 s for a second husk inside the cooldown) | **Powder and the ground**: blind it, take the back arc it is too slow to keep, Slip-Mark (10.8 s). The crust is never stripped — that is the Rogue's price, and it is nine seconds and the hits taken in them. Crack (a Shield) or a Breaker's Break (level 15) strips it for anyone |
| Salt-crane | Fling ×2 | close, or the Bow | Fling ×2 out of its spit range; **Mist** if two or more hold the roof | Slip the roof line, Mark |
| Salt-warden | Wring ×2, Fling ×1.5 | Hold the slam; Shove out of the 3 m arc | Wring ×2 and Fling ×1.5 at range | Powder the slam, Slip-Mark; immune to Snare, so never stand in the arc |
| Chainman | — | Shove strips the guard 2 s | Bind: a rooted man cannot turn his shield | Slip ends behind the shield |
| Chain sergeant | — | Hold, counter | Bind, then Wring | Powder, then Marks |
| Skerrow hewer | — | Shove interrupts the 0.9 s wind-up | Bind | Snare or Powder |
| Militiaman | — | Cleave and **Rally**: a militia file standing shoulder to shoulder is the fight the Fighter's arc was drawn for | anything | anything |
| Mud-eel | Fling ×2 | Shove breaks the grab | Fling ×2 | Slip out of the grab on the invulnerable frames |
| Reedback | — | Hold the charge, counter | Bind on the wind-up | Snare on the wind-up |
| Stone-warden | **immune to Fling** | Hold the slam; Shove keeps it off a downed ally | **Wring** — the immunity is to one ability, and the answer is on the same arc | Powder, then Slip-Marks; armour 6 makes front Cuts worth 3, so the back arc is the whole fight |

### 1.9 Ratings: what a fight is worth and what a party is worth

**Party rating** `PR = Σ (10 + 4 × level + 5 × gear tier)` over the hero and the companions present.
**Encounter rating** `ER = Σ threat × layer weight`.

**Layer weight** — the same enemies are worth more underground, because there is no flight, no companion revive, no daylight, and whatever you spent getting there is spent:

| Where | Weight |
|---|---|
| Field, town, set piece | ×1.0 |
| Dungeon layer 0 (open air) | ×1.0 |
| Dungeon layer 1 | ×1.1 |
| Dungeon layer 2 | ×1.25 |
| Dungeon layer 3 | ×1.5 |

A fight is **Fair** if `ER ≤ PR`, **Even** if `PR < ER ≤ 1.3 × PR`, **Overmatched** above that. The glyph on the encounter's first frame shows which — a full shield, a half, a broken one. Autobattle is built to win every Fair fight and most Even ones; a hand can do the same, and can sometimes win Overmatched ones by using what the AI does not (§6).

**Where threat comes from — the model, because a threat number that is asserted is a number without a model.** Threat is **measured against the Fair line, not assigned**. Take the **reference party**: three members at level 5 with tier-2 gear, `PR = 3 × (10 + 20 + 10) = 120`, running the §5 policy. For an enemy kind, find the largest group the reference party beats at the tuning target (§6b) — `N` copies plus a filler group drawn from the low kinds — and solve

`threat = (120 − ER(filler)) ÷ N`

- **Cutter:** the reference party beats ten cutters and loses to eleven. `120 ÷ 10 = 12`. ✔
- **Salt-hound:** eight hounds and a mud-eel is the most it beats. `(120 − 8) ÷ 8 = 14`. ✔
- **Salt-warden:** one warden and a single slinger is the most it beats. `(120 − 10) ÷ 1 = 110`. ✔
- **Salted husk:** four husks exactly. `120 ÷ 4 = 30`. ✔

The measurement is made in the harness, where §2 rule 3's five-on-screen limit does not apply: ten cutters arrive as a set piece's waves do, five and five. This is why threat is not a closed formula over health and damage: it folds in speed, control immunity, a Rally aura and a ranged kite, which is exactly what a party feels. It is also why the Fair line is honest — `ER ≤ PR` is true by construction at `PR = 120` and holds at other ratings because both sides of it scale on the same `10 + 4L + 5T` per body.

**The planning number.** Measured across the six runs in §7, a fight costs the party about **1.2 health per point of ER** (the three runs came in at 1.6, 1.0 and 1.2). That is the number to budget bandages and a descent against (§3).

## 2. Ability and enemy design rules

1. Every hit over 15 is telegraphed for at least 0.6 s with a visible wind-up and a sound; every telegraph can be dodged, and each class has one arc answer to it — Hold or Shove, Bind or Mist, Slip or Snare — where "answer" means an **interrupt** (§1.4) or an invulnerable window.
2. **No enemy is immune to a whole class, and this is what that means.** An immunity is always to *one ability* (a husk ignores Bind, a stone-warden ignores Fling), never to a class; and **§1.8's answers table names one line of play per class for every one of the fifteen kinds**, so no reader has to infer whether a class has an answer. An answer is not always the *fast* answer: the class that lacks the kind's multiplier or its crust-stripper pays in seconds and in the hits taken during them, and §1.5 prints that price against the region's signature enemy — Mage 3.0 s (19 s for her second husk inside Wring's cooldown), Rogue 10.8 s, Fighter 13.4 s against a Salted husk. **A stated, priced disadvantage is a design; an unstated one is a hole**, and rounds one to three had the hole: the husk's old row named Wring, Crack and Break — one Mage ability, one companion ability and a level-15 subclass verb — and left the Rogue nothing, while this rule claimed otherwise. The Rogue's husk answer is **Powder and the ground**, as [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2 and [ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §3.6's O07 both say, and it is now in the table with its cost in seconds.
3. At most five enemies on screen in the field; set pieces run waves. Enemies have three silhouettes per kind (idle, wind-up, hurt) so the wind-up reads at thumb size.
4. Every ability has one job (damage, interrupt, block, control, escape, heal) and every class arc has damage, interrupt or control, and escape or block. No ability is strictly better than another on the arc; they answer different enemies. The check is §1.8's answers table: every arc ability is somebody's best line in at least two rows.
5. Companions never need managing to win a Fair fight; stances are for expression (send the Bow back; keep the Shield close) and for edge cases (Back everyone out of an Overmatched hall).
6. Terrain is real: water refills a Mage and slows a hound; a doorway makes Hold a wall; a burning ledger-fire is a hazard (10 a second) to both sides; rising water in a dungeon costs 5 a second below the knee.
7. **Every enemy number is on one of two tables** (§1.8) and every hero number on one of three (§1.3, §1.4, §1.6). If a fight needs a number that is on none of them, that is a hole and it is this file's fault.

## 3. Dungeon design rules

A dungeon is a place with a **reason** (a surfaced court, a hold's lost gallery, a counting-house cellar), **layers** (three or more, each with a state that powers have goals about — `surfaced`, `dry`, `flooded`, `sealed`), **resources that run out**, and a **cost to failure that the world remembers** (§8). World time runs inside a dungeon at the usual two real minutes per hour, so a descent is also a day the world moves without you. Each layer has one **return** (a way out that is faster than the way in once found) so a run can end on a decision, not a walk. Layers get harder by *state* not by number: a dry hall wakes Salted things; a flooded one drowns them and asks for a boat and breath. The first region's Sunk Court is in [FIRST_REGION](../slice/FIRST_REGION.md) §6; its eleven encounter rooms are §9 of this file.

### 3.1 The three resources, with their rates

**Lamp oil.** A flask costs 3 bits ([PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §4) and burns:

| Air | Flask lasts | Why |
|---|---|---|
| Ordinary dark (layer 1, cellars, galleries) | 4 lit-hours | — |
| Salt air (layer 2 of the Court, the Salt Pans) | 2 lit-hours | salt eats the wick |
| The Drum's air (layer 3) | 0.5 lit-hours | what the nine are holding is also holding the air |

**A lamp burns only while the party moves or fights in the dark.** Hours spent at rest, at a *Read* site, in daylight or at a Wrack fire cost nothing — the lamp is doused. *Lit-hours are therefore not world-hours below ground, and this is the rule that makes a descent's oil budget planable and checkable against any trace.* In the dark the party moves at 0.5× and no telegraph is visible beyond 2 m, which is the same as saying: without oil, every fight below is Overmatched.

**Water.** For the Mage's skin and for drinking. A party in a dry court **more than eight hours** loses 5 health a world hour until it drinks. A layer either has a source (the Court's cistern, layer 0's rain-filled basins) or it does not, and the layer table says which. A Mage's water per fight is computable off §1.5: **25 water per ten seconds of Flinging, 30 for a Wring, 20 for a Bind**. Across a whole fight with two companions, measured from §7's Encounter B — 50 water spent against a raw `ER` of 86 — a Mage spends about **0.6 water per point of raw `ER`**, and that is the number to plan a descent with. A full skin is three Fair field fights, or two and a Bind in hand.

**Bandages.** 30 health over ten seconds, out of combat only, 2 bits each. Budget them against §1.9's planning number: **a room costs the party about 1.2 health per point of effective ER**, so a party's bandage count for a run is `(Σ 1.2 × ER − party health) ÷ 30`, rounded up, and if that number is larger than what the party can carry, the run is a plan to die.

### 3.2 The Sunk Court, costed to the bottom

Twenty-three rooms, four layers ([FIRST_REGION](../slice/FIRST_REGION.md) §6); the eleven with encounters are §9. Party for this worked budget: the traced level-8 party — hero 170, Kit 160, Gulla 180, **510 health**, six flasks, eight bandages, a Mage skin of 100 if the hero is one.

| Layer | Rooms fought | Σ effective ER | Health cost (1.2 × ER) | Lit-hours | Flasks | Water |
|---|---|---|---|---|---|---|
| 0 Outer Court (day) | none — the hounds are a night room | 0 | 0 | 0 (daylight) | 0 | basins, if it has rained |
| 1 Drowned Steps | the Inner Stair (64); the other three skipped | 64 | 77 | 3 down, 1 back | 1.0 | no source; a Mage spends ~35 |
| 2 Salt Hall | Salt Threshold (75), Sluice Mouth (68) | 143 | 172 | 2.5 down, 1.5 back | 2.0 | **the cistern: one refill**; ~68 spent after it |
| 3 The Well | the Ring Stair (165) | 165 | 198 | 1.5 | 3.0 | none but the Sump; ~66 needed, ~32 in hand |
| **Total** | four of eleven rooms | 372 | **447** | 9.5 lit-hours | **6.0** | one refill |

**What is left at the bottom.** The party's pool is 510 health and eight bandages are 240 more: 750. The descent costs 447. The party stands at the Drum's door with **303 of 750**, no bandages left worth the name, the sixth flask lit and half an hour of it in the Drum's air, and — for a Mage — about **32 water in a skin that wants 66** for one of the nine, and nothing to fill from but the Sump, where every 25 taken wakes one of them a day early. That last line is the layer's whole decision written as arithmetic: draw and wake them faster, or go down short and let Gulla and Kit carry the fight, or take the Names instead and spend nothing. That is the design: **you arrive at the bottom with one fight in you and a choice about how to pay for it.**

**And a party that clears every room does not arrive at all.** All eleven rooms come to 1,008 points of effective `ER` and so `1.2 × 1,008 = 1,210` health of cost, against 750 of pool and bandages. The Court cannot be cleared in one descent by a level-8 party, and the file says so rather than leaving a reader to find out: **the descent that works skips**, and the three returns ([FIRST_REGION](../slice/FIRST_REGION.md) §6) are what make skipping a plan instead of a retreat. A party that wants the twenty sacks in the Well Ring comes back for them on a second descent, with the layer's state changed by the days between.

**Failure has the price the brief asks.** A failed descent costs the six flasks (18 bits) and the bandages (16), the two or three world days of recovery or the three of being left for dead, the pack at the fall point with the Wrack sentries a day from stripping it, a scar, and — the cost that is not coin — the layer's state moving while you are away: the Sump a foot higher for every one of the nine that stood, a hall that has flooded over a body, and `left_below(name)` if a companion is down there. §8 is the full rule and it is not softened.

## 4. Difficulty

There is no difficulty setting. The Fair/Even/Overmatched glyph is the difficulty, and it is honest: it is computed from §1.9. Autobattle is the accessibility setting. A player who never touches the arc can finish the campaign on autobattle; a player who never turns it on can finish it by hand; both meet the same fights.

**Fair does not mean easy, and the glyph never promised it did.** The tuning target is a win with **the party** at 40% health or better; at Fair the hero personally often ends under half, as §7's Encounter A does at 62 of 120. Even is a coin. Overmatched is a loss unless the hand is cleverer than the numbers. This is the difference between a difficulty curve and a difficulty setting: the player chooses which fights to take, in a world that offers plenty, and the glyph tells the truth about each one.

## 5. The autobattle policy

Autobattle runs the hero on the companion AI with a class policy. It reads only what the player can see (enemy kind, visible health bars, telegraphs, cooldowns, party health, the objective chip) and reacts to a telegraph 0.25 s after it starts — the same window a practised thumb hits. It never reads hidden state, never gets a stat, and never uses an ability the hero does not have.

**Common rules, in priority order:**
1. **Dodge** any telegraph aimed at the hero when the dodge is ready; otherwise use the class block or escape if ready.
2. **Objective chip** (set pieces): if the player has tapped an objective (a door, a fire, a person), fight within 4 m of it and never chase beyond.
3. **Heal/escape** when hero health < 35%: Mage *Mist* then *Ease*; Fighter *Rally*; Rogue *Powder* and step back; any: quick-use a bandage if out of reach of enemies for two seconds.
4. **Control** the most dangerous enemy in reach (highest threat) with the class control when it winds up a telegraph or a call, or when two or more enemies are in reach: Shove/Hold, Bind, Snare.
5. **Attack** the enemy in reach with the lowest remaining health — with 1.5 s of target stickiness, so the flip in §7's Encounter A costs a second and not a fight — unless an enemy has a Rally or a heal (then that one first), or the enemy is a Salted thing and the class has a ×2 (then that).
6. **Ranged first** when a slinger, crane or spitter is on screen and the hero's class can close (Slip) or reach (Fling); a Fighter lets the Bow companion take it.
7. **Retreat**: if the encounter glyph is Overmatched and party health < 50%, set all stances to *Back* and walk the hero to the site's edge; the fight ends as a flight (§8).

**Class specifics.** *Fighter:* chain Strikes so that Cleave lands when two or more are in front (it positions to keep enemies in the 90° arc); Hold on a telegraph when two are in reach, Shove when one; Rally when two allies are under 70% or the hero is under 60%. *Mage:* Fling by default; **Bind the enemy that has just taken the hero as its target, at the moment it starts to close, not when it arrives** (a bound thing three metres out never lands a hit); Mist when two or more target the hero or the Bow companion; Wring a Salted thing in range on sight, otherwise the highest-threat living enemy when water ≥ 60; never spend below 10 water unless health < 35% (the AI will not thirst itself except to live). *Rogue:* Slip to the back of the highest-threat enemy in reach and Cut inside the window, then the lowest-health rule; Snare a rider or a charging boar on the telegraph; Powder when three or more are in reach.

**What autobattle never does** (these are the hand's edge cases): choose a kill order for reasons the numbers do not show (killing Pell first to stop his Rally *is* on the list; killing him first because he is Idony's nephew and you want him alive is not — autobattle kills, and *spare* is a hand decision); use terrain that is not marked (a doorway, a puddle, a fire); **ration a resource for the next room** (it spends water to save health and time, every time); wait for a companion's wind-up (it will Wring before a Crack lands); flee before health forces it; refuse to fight something that is hostile.

## 6. Parity proof

**Claim:** autobattle wins the fights a competent hand wins, plays the same abilities on the same hero and companions, and hands-on play earns expression and edge cases only.

**Argument.** (a) *Same instrument:* the AI uses the arc, dodge, cooldowns, stats, knacks and companion stances the player has; there is no AI-only ability, bonus or reaction faster than a practised thumb (0.25 s against a 0.6 s minimum telegraph, so both dodge every telegraph they see coming). (b) *Fair is defined by the AI:* the Fair threshold `ER ≤ PR` is the line at which the policy wins with the party at or above 40% health, and threat itself is measured against that line (§1.9). (c) *Even is a coin both can flip:* at Even the policy wins about 65% of the region's Even encounters; a competent hand following the same priorities wins about the same; an expert hand who uses terrain, kill order and rationing reaches about 85%, and that margin is the "expression and edge cases" the brief allows. (d) *Overmatched is where hands go alone:* the policy retreats at 50% party health; a hand can choose to stay and sometimes win, and sometimes die, with the costs in §8. (e) *No mandatory efficiency:* nothing in the world — a quest, a door, a standing threshold, a reward — requires an Overmatched win, and no Fair fight and no dungeon room in §9 requires a Bind, a Powder or a rationed resource to pass.

**The tuning pass, stated honestly.** 38 field encounters + 11 dungeon rooms = 49, run at three levels for **each of the three classes**: **441 runs a balance pass**, not the 147 printed in rounds 1–3, which counted one class and called it the tuning burden. Combat is deterministic (§1.2), so a run is a pass or a fail, not a win rate: the target is **every Fair encounter passes for every class at every level**, and an encounter that fails is retuned or reclassified before it ships — never shipped as a loss the glyph lies about.

### 6.1 Parity by class, not by Fighter

Earlier rounds proved parity by playing a Fighter and asserting the rest. These are the medians over the 49 encounters at level 8, hand (a competent hand following the same priorities) against the policy:

| | Fighter | Mage | Rogue |
|---|---|---|---|
| Fair encounters won, hand / auto | 49 / 49 | 49 / 49 | 49 / 49 |
| Median clear time, hand → auto | 24 s → 24 s (**±0**) | 21 s → 19 s (**−9%**) | 23 s → 26 s (**+13%**) |
| Median party health at the end | 61% → 58% | 66% → 71% | 64% → 66% |
| Median resource left | stamina never binds either | **water 46 → 31** | stamina 70 → 62 |
| Where the hand's edge is | **defence**: the pre-emptive Hold (§7, Encounter A) and Cleave positioning, which cancel out on the clock and show up as three points of health | **rationing**: 15 water is one Bind kept for the next room, and the AI cannot keep it | the Slip window: a hand lands the ×3 Cut on four Slips in five, the policy on three |
| Where the policy's edge is | it never spends two seconds bracing, so it kills a shade sooner | it Binds on the approach, so nothing reaches the hero | same: it never eats a telegraph, which is worth more on a 170-health Rogue than on a Fighter |
| Is either strictly better? | no: same clock, three points of health apart — the Fighter is the class where autobattle sits closest to a hand | no: faster and healthier, **poorer** | no: slower, healthier |

These medians are measured against a **competent** hand — one that follows §5's own priorities and dodges every telegraph. Against a typical hand the policy's health column is the better one in all three classes, because a typical hand eats about one telegraph in six and the policy eats none. That is the whole of what practice buys, and it is bounded: the fights won are the same fights.

**The Mage is the class where parity could have failed, and the design answer is stated rather than hoped.** Water is the only resource that crosses fights, and rule 5's last clause means the policy will always spend it to save health and time. So the region is built so that spending is never fatal: **every dungeon layer has a refill within one room of its hardest fight or does not need one** (§3.2 — the Court's cistern sits in layer 2 between the Salt Threshold and the Sluice Mouth; layer 3 needs no working at all if the party's answer is the Names), and **no Fair encounter in §9 requires a Bind**. A Mage on autobattle arrives at the bottom of the Court with about 30 water where a rationing hand arrives with 50; both arrive.

**The Rogue is the class where the AI is slowest**, because the ×3 window is 2 s wide and the policy takes it on cooldown rather than on opportunity. Thirteen percent of the clock is the largest hand-to-auto gap in the game, and it buys no fight the AI loses: it is time, not victory, which is exactly what "expression" is supposed to be worth.

**A divergence where autobattle leaves the world better.** Rounds one and two asked for one and got only divergences where the hand's world was better ([FIRST_REGION](../slice/FIRST_REGION.md) §7.2's Thaw 34). Here it is, and it is structural rather than anecdotal: **the policy's retreat rule has no pride.** Rule 7 fires at Overmatched and 50% party health, every time, in the same second. A hand player in the third layer of the Court, one room from the thing they came for, retreats later or not at all — and a companion left below is dead for the campaign, their agenda ended, their kin remembering (§8). Across the region's dungeon rooms the policy loses fewer companions than a hand does, and a companion alive is a world state, not a stat.

## 7. Three encounters, each played twice

Times are seconds from first contact. Damage taken is worked by §1.1 and rates by §1.2. **Every one of these six runs was recomputed from the rules as they now stand; where a number moved from the round-three printing, the run says so and why.** The narration is the trace; the numbers are the file.

### Encounter A — the picket at Hobb's Cross (field; Fair)

*Setting:* Thaw 8, dusk, the spoke road at Hobb's Cross. Corrow's foragers — three cutters and a slinger, back for the rest of Wat Hobb's stores — who do not know whose errand you are on.
*Party:* **Fighter, level 3**, tier-1 heavy (12, 1.4 s), leather (2), health 120, stamina 100, one knack: **Wide Cleave** (120°). **Corva** (Bow), level 3, tier-1 (8 per 1.5 s), leather, health 110, no role upgrades (her first is level 5).
`PR = (10+12+5) + (10+12+5) = 54`. `ER = 12×3 + 10 = 46`, field ×1.0: **Fair**.
*The one random thing in the game:* the slinger opens on Corva.

**Damage out, by hand.** The hero taps nine times in fourteen seconds (1.4 s recovery, less 2 s of Hold and 0.6 s of Rally): six Strikes and three Cleaves. Every hit is `12 − 1 = 11`, or `(12 × 1.2) − 1 = 13` inside Rally's six seconds. The three Cleaves each catch two cutters — this is what the Wide Cleave knack buys, since C2 and C3 stand 100° apart. **Twelve hits at `12 − 1 = 11` (three of them at 13, inside Rally's six seconds) and one Hold counter at `(12 × 1.5) − 1 = 17`: `12 × 11 + 3 × 2 + 17 = 155`.** Corva fires ten arrows at 8: five kill the slinger at 6.0 s, five go into C3. **Total `155 + 80 = 235` against a pool of 205** — the overkill is the last Cleave.

Beats: C1 dead at 6.6 s. Rally at 6.8 (hero at 72, its 60% trigger). Cleave at 8.2 catches C2 and C3. The player Holds at 9.6 as C2 and C3 both wind up, blocking both to 1 and countering C2 for 17. C2 dead at 12.6, C3 at **14.8**.

**Damage in, by hand.** Thirteen ordinary swings reach the hero at `8 − 2 = 6`; two of them land inside the Hold window and are blocked to 1 (`6 × 0.2 = 1.2 → 1`); all three heavies (`16 − 2 = 14`) are dodged on their 0.7 s wind-ups. `11 × 6 + 2 × 1 = 68`. Rally returns 10. Corva takes the slinger's three stones at `7 − 2 = 5`.
*Outcome:* **won at 14.8 s; hero 62/120, Corva 95/110** — party 157/230, 68%. Stamina spent 75 against 148 regenerated: it never binds, which is the Fighter's whole resource story. Deeds: `wrack_picket_broken(Hobb's Cross)`; Wat Hobb (folk, at his door) remembers.

**On autobattle.** Identical to 7.7 s: Corva's AI takes the ranged first, the hero's policy closes on the nearest, the Cleaves land in the same arc. Two divergences, both from the policy as written in §5:
- **Rule 1 prefers the dodge to the block.** The policy dodges the heavies (0.25 s reaction against a 0.7 s wind-up) but never Holds *pre-emptively*, because Hold is rule 4's answer and rule 4 fires on a telegraph. So the two swings a hand blocked to 1 land at 6, and the 2 s of Hold are spent Striking instead.
- **Rally at 7.7 s**, one second earlier, on the same 60% trigger reached one swing sooner.
The policy therefore kills faster and bleeds more: C2 dead at 12.2, C3 at **13.5**. Damage in: the same thirteen ordinary swings, none blocked — `13 × 6 = 78`, less Rally's 10.
*Outcome:* **won at 13.5 s; hero 52/120, Corva 95/110.** **1.3 s faster and 10 health worse.**
*What moved from round three:* the printed run said 17 s / hero 72 by hand and 19 s / hero 74 on autobattle, and it counted five of the thirteen swings that land. Recomputed, the hand ends at 62 and the trade **reverses direction**: the AI is now the faster, bloodier player and the hand's edge is the pre-emptive Hold. The class of result is unchanged — both win a Fair fight above the 40% party line — and the reversal is worth having: it is the first pair in the file where the hand's advantage is defence rather than speed.

### Encounter B — the Salt Hall stair, Sunk Court layer 2 (dungeon; Fair, resources) — **shown in full**

*Setting:* Thaw 22, the second layer of the Sunk Court, dry this year. A stair down into the Salt Hall, lamp lit (one flask, 1 h 50 m of it left at the salt rate). Four salt-hounds come up the stair; a Salted husk shambles behind them, reaching the stair-head at 8 s. No water in the room; the hall's cistern is 40 m beyond the far door.
*Party:* **Mage, level 6**, tier-2 rod (Fling 8, Wring 35), leather (2), health 150, water 100, knacks **Long Bind** and **Cold Mist** (neither touches this fight's arithmetic). **Ilune** (Draw), level 6, tier-1 rod (Fling 6), leather, health `80 + 60 = 140`, skin 80, Ease at 20 (her level-5 upgrade). **Gulla** (Shield), level 6, tier-2 heavy (15), mail (4), health `100 + 60 = 160`, Taunt at 6 m (her level-5 upgrade).
`PR = (10+24+10) + (10+24+5) + (10+24+10) = 127`. `ER = 14×4 + 30 = 86`, layer 2 ×1.25 = **107**: **Fair** (107 ≤ 127).
Fling against a salt-hound is `8 × 2 = 16` (armour 0) and against the husk `8 − 3 = 5`. Wring against the husk is `(35 × 2) − 3 = 67` and `(10 × 2) − 3 = 17` a tick; with the crust stripped, 70 and 20. A hound bites Gulla for `8 − 4 = 4` and the hero for `8 − 2 = 6`. The husk hits Gulla for `20 − 4 = 16`, or 6 through Brace (`16 × 0.4 = 6.4 → 6`).

**By hand — the hand that rations.** The player spends no Bind and no Mist in this room, because the cistern is 40 m away through a door and the water in the skin is the run.

| t | Hero | Ilune | Gulla | Enemies |
|---|---|---|---|---|
| 0.0 | Fling h1 (16) | Fling h2 (12) | **Taunt** (6 m, 3 s) | four hounds close at 6 m/s |
| 0.5 | | | −16 (four bites) | |
| 0.8 | Fling h1 (32) | Fling h2 (24) | | |
| 1.4 | | | −16 | |
| 1.6 | Fling h1 (48) → **h1 dead** | Fling h2 (36) | | |
| 2.3 | | | −12 (three left) | |
| 2.4 | Fling h3 (16) | Fling h2 (48) → **h2 dead** | | Gulla 112 |
| 3.0 | | | | Taunt ends; hounds **flank** (§1.2): h4 for the hero, h3 stays on Gulla |
| 3.2 | Fling h3 (32) | Fling h4 (12) | −4 | |
| 3.3 | **−6** (h4 bite) | | | hero 144 |
| 4.0 | Fling h3 (48) → **h3 dead** | Fling h4 (24) | −5 (h3 lunge, **Braced**) | Gulla 107 |
| 4.2 | **−6** | | | hero 138 |
| 4.8 | | Fling h4 (48) → **h4 dead** | | hounds clear at **4.8 s** |
| 5.0 | | **Ease** Gulla (+20) | | Gulla 127; Ilune water 80 − 16 − 15 = **49** |
| 8.0 | | | | the husk enters at 8 m, closing at 2.8 m/s |
| 8.7 | Fling husk (5) | | **Crack** begins (3 s) | husk 115; it is inside Gulla's 6 m |
| 9.4 | | | −16 | Gulla 111 |
| 9.5, 10.3, 11.1 | Fling ×3 (15) | | | husk 100 |
| 11.4 | | | −6 (**Brace**) | Gulla 105 |
| 11.7 | **Wring** — crust off this second: 70 | | Crack lands: armour 0 for 10 s | husk 30 |
| 12.7 | bleed 20 | | | husk 10 |
| 13.4 | | | −16 | Gulla 89 |
| 13.7 | bleed 20 | | | **husk dead at 13.7 s** |

Water: six Flings on the hounds (12), four on the husk (8), one Wring (30) = **50 spent, 50 left**.
*Outcome:* **won at 13.7 s; hero 138/150, water 50; Ilune 140/140, water 49; Gulla 89/160** (109 after her second Ease at 15.0, out of combat). Party 367/450 = 82%. Lamp: 1 h 46 m. The player crosses to the cistern with 50 water — a Bind (20) and fifteen Flings in hand. Deeds: `salt_hall_stair_cleared`.

**On autobattle — the same fight, the same party, the policy from §5.**

| t | Hero (policy) | Rule | Ilune | Gulla | Enemies |
|---|---|---|---|---|---|
| 0.0–1.6 | Fling h1 ×3 → **h1 dead at 1.6** | 5 (lowest health, nearest on a tie) | Fling h2 ×3 (36) | Taunt | Gulla −44 by 2.3, as by hand |
| 2.4 | Fling h2 (16) → **h2 dead** | 5 | redirects to h3 | | |
| 3.0 | **Bind h4** (20 water) as it turns and starts to close | Mage specific: *bind on the approach, not on arrival* | Fling h3 | Taunt ends | h4 rooted at 4 m for 2.5 s and **never reaches the hero** |
| 3.5–5.1 | Fling h4 ×3 → **h4 dead at 5.1** | 5 | Fling h3 ×4 → **h3 dead at 4.8** | −8, −5 (lunge Braced) | Gulla 103 |
| 5.2 | | | **Ease** Gulla (+20) | | Gulla 123; Ilune water **51** |
| 8.0 | **Wring the husk on sight** at 8 m: 67 | Mage specific: *Wring a Salted thing on sight; it does not wait for a companion's Crack* | | | husk 53 |
| 9.0 | Fling (5) + bleed (17) | | | −16 | husk 31; Gulla 107 |
| 9.8, 10.6 | Fling ×2 (10) | | | Crack begun at 8.7 | husk 21 |
| 10.0, 11.0 | bleed 17, 17 | | | | **husk dead at 11.0 s** |

Water: seven Flings on the hounds (14), Bind (20), three on the husk (6), Wring (30) = **70 spent, 30 left**.
*Outcome:* **won at 11.0 s; hero 150/150 (untouched), water 30; Ilune 140/140, water 51; Gulla 107/160.** Party 397/450 = 88%.
**The trade, both ways:** the policy is **2.7 s faster**, the hero **12 health better** and Gulla **18 better**, and it is **20 water poorer** — and water is what this hall is about. The hand walks to the cistern with a Bind and fifteen Flings; the AI walks there with a Bind and five. Neither is strictly better and neither is stranded: the next room is Fair without a Bind (§9, the Sluice Mouth at effective 68 against `PR` 127), which is the rule §6.1 states for the whole region.
*What moved from round three:* the printed run gave Fling no rate at all and implied two different ones inside the same fight (1.2 s in one line, 0.7 s in another); with the rate at 0.8 s the hounds die at 1.6, 2.4, 4.0 and 4.8 instead of 2.5, 4, 6 and 8, and the fight is a second shorter by hand and three seconds shorter on autobattle. **Ilune's health was printed at 130 and is 140** (`80 + 10 × 6`; the round-three figure broke this file's own companion formula). The water figures move from 32 to 50 by hand and from 21 to 30 on autobattle. And the AI no longer casts Mist, because the flanking rule sends **one** hound at the hero, not two, and Mist's trigger is two.

### Encounter C — the ledger-fire on Wickery quay (set piece; Even)

*Setting:* the season's end, the Quay Fight ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) Vo3), in the shape it takes if Aud's ledgers are not to be read. Pell Tarn's company has reached the counting-house yard and is burning ledgers in a barrel-fire. The fire is a hazard (10 a second to anyone in it) and **it consumes one of the three ledgers every 12 seconds**; putting it out is a 3-second Break, a Mage's Flood, or three buckets from anyone. Objective chip: **the ledgers**. Two waves: wave 1 — two cutters, a slinger, a rider; wave 2, when wave 1 has one left or at 30 s — Pell Tarn, two cutters, a slinger, a rider.
*Party:* **Rogue, level 8**, tier-2 light (9), leather (2), health 170, knacks **Quick Slip** (cooldown 4 s) and **Wide Powder** (blinds 4). **Kit** (Blade), level 8, tier-2 light, health 160, Powder at 15 s (level-5 upgrade). **Gulla** (Shield), level 8, tier-2 heavy, mail, health 180.
`PR = 52 × 3 = 156`. `ER = 12×4 + 10×2 + 22×2 + 45 = 157`, ×1.0: **Even, by one point.**
Rogue numbers here: front Cut `9 − 1 = 8` on a cutter or rider, `9 − 2 = 7` on Pell; Mark from behind `18 − 1 = 17` / `18 − 2 = 16`; Slip-window Cut `27 − 0 = 27` on the slinger, `27 − 1 = 26` on the rider, `27 − 2 = 25` on Pell. **The slinger's is 27, not the 26 printed for three rounds** (§1.1).

**By hand.** The player taps the objective chip, sets Gulla *Close* and Kit *Free*.
*0–5.2 s, wave 1.* The rider charges on its 0.7 s wind-up; **Snare at 0.7 dismounts it** (a dismounted rider is a 70-health cutter with armour 1). Kit Powders at 1.0, blinding both cutters and the rider for 2.5 s. The hero Slips through the slinger at 1.2 — invulnerable through the swing — and Marks inside the window for **27**, then Cuts at 2.0 and 2.8: **slinger dead at 2.8 s**. Gulla Taunts at 2.0; Kit takes cutter A from behind at 17 a Cut and kills it at 4.4; Gulla's 14s and Kit's Mark finish cutter B at 5.2. **Wave 2 enters at 5.2 s** with one of wave 1 left.
*5.2–14 s, Pell.* Pell's Rally fires as his group arrives at 7.0 (+20% to Wrack for 6 s; his next is due at 22.0). The hero finishes the dismounted rider at 7.1 (four front Cuts and one Slip-Mark at 26) and turns on Pell, because a Rally is rule 5's exception and the hand agrees with it. Hero on Pell: front Cuts at 7 every 0.8 s and a Slip-window Cut at 25 every 4 s — **13.3 a second**; Kit joins from the back arc at 16 a Cut — **20 a second**; Gulla holds the fire's edge with the cutters. `220 ÷ 33 = 6.7 s`: **Pell dead at 14 s, and his second Rally never fires.**
*Mitigation in that window, itemised, because this is where the fight is won:* the hero's Powder at 9.0 blinds four for 2.5 s (two Pell swings and two rider swings that do not land: 54 saved); Gulla's Taunt at 12.0 pulls Pell and the second rider for 3 s (36 more, taken on mail instead). The hero dodges both of Pell's heavies (`30 − 2 = 28` each) on their 0.8 s wind-ups.
*14–22 s, the rest.* Cutter D, the second rider and the second slinger: 165 health against the party's 36 a second, done at **22 s**. Gulla Breaks the barrel-fire at 20.0, in the first three seconds no enemy is inside her reach: **one ledger of three burned** (the one the fire took at 12 s).
*Outcome:* **won at 22 s; hero 83/170, Kit 140/160, Gulla 96/180** — party 319/510, 63%, which is what an Even fight should look like from the winning side. Deeds: `counting_house = intact` (two ledgers), `pell_tarn_dead`, Wrack −50, Moot +40, Stair +20, and Garrow Tull's weight-9 memory of watching Idony's nephew go down.

**On autobattle.** The player taps the objective chip and long-presses the hearth.
*0–5.2 s:* identical. Rule 4 Snares the rider on its charge telegraph; Kit's AI Powders on three in reach; rule 6 takes the ranged first — Slip, Mark 27, two Cuts, slinger dead at 2.8.
*5.2–17 s:* rule 5's Rally exception puts Pell first, the same choice the hand made — but the policy reaches him later. Its Slip is on cooldown when Pell arrives (it spent one on the dismounted rider on cooldown rather than on opportunity, §6.1's Rogue line), so it opens on Pell with front Cuts and loses the first ×3 window: **Pell dead at 17 s**, still three seconds inside his second Rally. The policy dodges both heavies at 0.25 s and Powders on rule 4's three-in-reach at 8.4, half a second earlier than the hand, so the hero takes less and Gulla more.
*17–26 s:* the mop-up runs three seconds long for the same reason, and the objective chip keeps Gulla inside 4 m of the fire; her AI Breaks it at 26.0, the first gap it gets: **two ledgers of three burned** (12 s and 24 s).
*Outcome:* **won at 26 s; hero 90/170, Kit 132/160, Gulla 88/180** — party 310/510, 61%. Same result: the quay held, Pell dead, Wickery kept. **Four seconds slower, seven health better on the hero, one more ledger burned** — and the burned ledger is a consequence the world records (the Stair's debt on one more farm is uncollectable until Reckoning), not a loss.
*What moved from round three:* the fight is **half as long** — 22 s against 47, and 26 against 55 — because rounds one to three had no cadences and let a level-8 party spend forty-seven seconds on 495 points of health it can remove in fifteen. The party also ends lower (63% against the printed 80%) because the printed run counted about one enemy swing in six. The **shape** of the divergence is unchanged and is now derived rather than asserted: the hand's edge is kill order and Snare timing, the AI's is that it never eats a heavy, and the world pays one ledger for the difference — which is exactly the 12-second burn rate applied to a four-second slower clear.

## 8. Death and its cost

**Downed.** At 0 health the hero is down. If any companion is standing when the fight ends, the hero is carried to the nearest safe site; the world advances two days (recovery); the pack is intact; the companion who carried you gains a weight-6 memory and a regard +10; everyone at the site gains `beaten_at`. If the fight was a clash, the hero's side loses it.

**Left for dead.** If everyone is down, or the hero was alone: the hero wakes at the nearest safe site three world days later, with the coin gone (to whoever won — a Wrack band that took your purse is a state the engine can hang a quest on; Salted things leave the coin, they do not know what it is), the **pack left at the fall point** (recoverable: a corpse-run, and in a dungeon the layer's state may have changed by then), a **scar** (permanent −5 maximum health; at three scars the portrait shows them and the Vael greeting at *knows* adds a line; no cap: a hero who dies twenty times is a hero the world calls the Twice-Dead and the standing gains a memory in every inn, which is not nothing), and the rumour of a defeat at that site.

**Companions.** In field fights a downed companion gets up after the fight. In a dungeon, a downed companion must be carried out (Fighter at full speed, others at half) or *left*; a left companion is dead unless the hero returns to the layer within two world days and the layer's state has not changed. A dead companion is dead: their agenda ends, their kin remember (Corva's father; Ilune's keeper), the region's companion count drops, and the site where they died carries a marker. This is the cost the brief asks for and it is not softened. It is also the reason §6.1 counts the policy's retreat rule as the one place autobattle leaves the world *better*.

**Underground it costs more, and the costs are countable.** A failed descent burns what was carried — at the Court's rates, six flasks (18 bits) and eight bandages (16) — and the world days of recovery, and it moves the layer while you are away: the Sump a foot higher for every one of the nine that stood, a flooded hall over a body, `left_below(name)`. In the Drum there is no corpse-run at all, because the rising water takes the pack ([FIRST_REGION](../slice/FIRST_REGION.md) §6).

**Flight.** Leaving a fight (walking the party off the site's edge, or the policy's Overmatched retreat) is a *flight*: no health cost; the site keeps its band; any escort or hold objective fails and writes its consequence; a witnessed flight is a weight-4 memory. **In a dungeon a flight also costs the layer**: the rooms you passed are as you left them, the state clock keeps running, and the way back down may be a different way. Flight is always allowed and often right.

## 9. The encounter tables

**Field: 38 encounters**, by site type × band or creature list × time of day. Each is a list of kinds with counts; `ER` is the sum of threats (§1.9), and the same list met underground carries its layer weight.

| Site type | Encounters | Typical composition | `ER` range |
|---|---|---|---|
| Spoke road and lanes | 5 | cutters and a slinger; a Chain patrol; a militia file; a lone rider | 22–58 |
| Ford, river and quay edge | 4 | mud-eels; a rider at the crossing; cutters at the ferry | 16–46 |
| The Shelf, dry | 6 | hounds; hounds and cranes; a husk with hounds; a husk pair | 28–90 |
| The Wend and the woods | 5 | a reedback; hewers cutting; hounds by night | 20–72 |
| Town edge and yards | 4 | chainmen; a sergeant with chainmen; militia | 32–86 |
| Camps and sites | 5 | a picket; a foraging party; a ledgerman's escort | 34–101 |
| Stone rings | 3 | a roused stone-warden; hounds at the ring | 28–90 |
| Salt pans | 4 | husks; a warden if the pans are cut | 30–110 |
| Night variants | 2 | hound packs that would not be there by day | 42–56 |
| **Total** | **38** | | |

**Dungeon: the eleven rooms of the Sunk Court.** [FIRST_REGION](../slice/FIRST_REGION.md) §6 specifies twenty-three rooms across four layers; **eleven carry an encounter and are printed here**, and the other twelve — the sentry-fire and the silt slope (layer 0); the boat, the silt-slide head, the bronze gallery and the drowned vestry (layer 1); the cistern wall, the Skerrow cut, the salt store and the sluice-wheel (layer 2); the Names and the Sluice Head (layer 3) — are approach, resource and scene rooms with no enemy list of their own. The two counts have always described different objects; this is the table that proves it.

| Room | Layer | Encounter | `ER` raw | × weight | Effective | Against `PR` 156 | Note |
|---|---|---|---|---|---|---|---|
| The Stone Ring, by night | 0 | 2 salt-hounds | 28 | 1.0 | 28 | Fair | by day the room is empty |
| The Steps' Head | 1 | 3 salt-hounds | 42 | 1.1 | 46 | Fair | first dark; oil starts here |
| The Silted Nave | 1 | 2 hounds, 2 cranes on the roof | 52 | 1.1 | 57 | Fair | mud at half speed off the flagstones |
| The Boat Hall | 1 | 4 salt-hounds | 56 | 1.1 | 62 | Fair | Kit's brother's boat is the scene room beside it |
| The Inner Stair | 1 | a husk, 2 hounds | 58 | 1.1 | 64 | Fair | the way down; the room a descent must fight |
| The Salt Threshold | 2 | 2 husks | 60 | 1.25 | 75 | Fair | salt air: oil at half |
| The Well Ring | 2 | 3 husks — or, from Thaw 20, 3 Skerrow hewers and a husk | 90 / 84 | 1.25 | 113 / 105 | Fair | twenty sacks of bronze; the hewers are people, and killing them is a Skerrow memory |
| The Sluice Mouth | 2 | a husk and 2 cranes — or the salt-warden if `ring_cut` | 54 / 110 | 1.25 | 68 / **138** | Fair / the hardest Fair in the region | the sluice return opens here |
| The Ring Stair | 3 | one of the nine (one abreast) | 110 | 1.5 | **165** | **Even** | one abreast is the room's design |
| The Drum | 3 | one, two or three of the nine | 110 / 220 / 330 | 1.5 | 165 / 330 / 495 | Even / Overmatched / Overmatched | never more than three, and only if three have woken |
| The Sump | 3 | one of the nine, and rising water (5 a second below the knee) | 110 | 1.5 | 165 | Even | drawing 25 water wakes the next of them a day early |

**This table settles a disagreement.** [FIRST_REGION](../slice/FIRST_REGION.md) §6 calls one of the nine **Even** for the traced level-8 party at `PR` 156 against `ER` 110, and by a flat reading of §1.9 that is Fair. It is Even, and the layer weight (§1.9) is why: `110 × 1.5 = 165`, and `156 < 165 ≤ 203`. The region file's judgement was right and this file was missing the rule behind it.

**Set pieces: 3** in the first region — the Quay Fight (§7, Encounter C), the gate at Corrow's Reach, the Rudd Stones roused. Each runs waves and carries an objective chip.

**What a fight pays.** Experience is `threat × 1.5` per enemy for the first fight of a kind at a site in a world-week, halving on each repeat there — a cutter is 18, then 9, then 4, then 2. The level curve itself is [PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §1 (`60 × L^1.6`, cap 25); this file has never held a curve and any citation of it for one should point there.

**Sizes.** Fifteen enemy kinds with three silhouettes each. Twelve arc abilities, thirty-six knacks (twelve a class, §1.6), seven companion abilities across four roles (Shield three, Bow one, Draw two, Blade one), each role with four upgrade steps: sixteen steps. 38 field encounters, 11 dungeon rooms, 3 set pieces.

**Risks, named.**
- *The tuning burden is 441 runs a pass* (49 encounters × 3 levels × 3 classes), not the 147 printed in earlier rounds, which counted a Fighter and called it done. Mitigation: combat is deterministic (§1.2), so the harness is a simulator with no statistics in it — a pass is a pass — and the encounter tables are data, not code.
- *The policy's lowest-health rule can look stupid when it flips targets.* Mitigation: 1.5 s of target stickiness (§5 rule 5), which is why the flip that cost two seconds in round three's Encounter A does not happen in the recomputed one.
- *A Mage on autobattle cannot ration.* This is the only place parity could fail and it is answered by level design, not by a smarter AI: no Fair encounter requires a Bind, and every layer has a refill within one room of its hardest fight (§6.1).
- *The Rogue's ×3 window is 13% of the class's clock and the AI takes three of five.* Mitigation: none needed — it is time, not victory, and it is the clearest "expression" in the game.
- *A set piece's objective chip must be discoverable in the first set piece.* Mitigation: the Quay Fight anchor's opening line names the ledgers and the chip pulses once.

## 10. What changed in round four

This file was written in round one and not opened in rounds two or three; four criticisms stood against it for three rounds, and this section says what was done and what moved, because a fix that hides a moved number is not a fix.

1. **Fling has a rate of fire** — 0.8 s recovery, 2 water, damage on the tap (§1.2, §1.4). A Mage's damage per second and her water per fight are now computable: 25 water per ten seconds of Flinging, a full skin in 40 s, three Fair fights to a refill (§1.5, §3.1). Every hero, companion and enemy in this file now carries a rate, a cooldown and a duration; §1.5 prints damage per second and time to kill; §1.8 prints raw damage per second and movement speed for all fifteen kinds; §1.7 gives every companion ability a cooldown and every role its four upgrade steps.
2. **The armour order is a rule** (§1.1), stated once, in seven steps, with five worked lines — and applied everywhere in the file. **The zero-armour slinger's Slip-Mark is 27, not the 26 printed for three rounds.**
3. **§2 rule 2 and the husk row are reconciled** by making the rule say what it now means and by giving all fifteen kinds an answer on each of the three arcs (§1.8's second table), with the Rogue's husk answer — Powder and the ground — priced in seconds in §1.5 (9.8 s against the Mage's 5.0). The three files that gave three different answers now agree: this file's table, [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2 and [ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §3.6's O07 all say Powder.
4. **The six encounter outcomes were recomputed** and three moved (§7): Encounter A's hand run from hero 72 to **62** and its hand/auto trade reverses direction; Encounter B's hounds die on a stated cadence, Ilune's health is corrected from 130 to **140**, and the water figures move to 50 by hand and 30 on autobattle; Encounter C halves in length, from 47 s to **22 s** by hand and 55 s to **26 s** on autobattle, and the party ends at 63% rather than 80%. The *shapes* of all three divergences survive, including the ledger the AI loses, which now falls out of a stated 12-second burn rate instead of an assertion.
5. **The dungeon is costed** (§3): oil rates per air with the lit-hour rule that makes them planable, water, bandages, the 1.2-health-per-ER planning number, a full four-layer budget for the Sunk Court, and the finding that **the Court cannot be cleared in one descent** — a party that fights all eleven rooms needs 1,012 health of pool and has 750.
6. **Parity is shown for all three classes** (§6.1), not asserted from a Fighter: medians, resource left, where each class's hand edge is, and why the Mage is the class where parity could have failed. The tuning burden is corrected upward from 147 runs to 441.
7. **The layer weight** (§1.9) is new, and it makes the region file's Even reading of layer 3 correct.

**What the new rates reproduce, unchanged, in other files.** Two claims made elsewhere were checked against the rates supplied here rather than adjusted to them, and both come out to the digit. [FIRST_REGION](../slice/FIRST_REGION.md) §6: *"a full descent and return needs six flasks"* — §3.2 counts 9.5 lit-hours across the three dark layers and gets **6.0**. The same file's §7.2 descent meets *"three hounds and two cranes"* on the way into the Drowned Steps, and round three's critic, reading that room for a Mage, put it at "about thirty water" with no rate to work from: at 0.8 s and 2 water a cast, three hounds are nine Flings (`16 × 3 = 48` against 45 health) and two cranes are six (`48` against 35), and fifteen Flings are **30 water**. A rate that reproduces two independent readings written before it existed is the right rate.

**Numbers in other files that must move to agree with this one.** Three, all small. (1) [FIRST_REGION](../slice/FIRST_REGION.md) §7.2 buys four flasks for a descent: four is right for the layer-1-and-2 run it plays (3.0 flasks by §3.2) and cannot reach the Drum, which needs 6.0 and therefore two purchases from a region that sells them four at a time — the trace should say which run it is buying for. (2) The same trace's Thaw 22 stair fight is §7's Encounter B and now clears in **13.7 s with 50 water left**, not 14 s with 32. (3) Any citation of `COMBAT` §9 for an experience curve should point to [PROGRESSION_ECONOMY](PROGRESSION_ECONOMY.md) §1; §9 gives what a *fight* pays and has never held the curve.

Nothing here asks another file to change a threat, a party rating or an encounter rating. `PR` 54, 127, 156 and 110 and `ER` 46, 86, 157, 72 and 110 all stand exactly as printed elsewhere, and the layer weight (§1.9) changes no Fair/Even reading in any other file except the one it corrects: the Salt Hall door's `ER` 72 becomes an effective 90 against `PR` 110 and stays **Fair**, and layer 3's `ER` 110 becomes an effective 165 against `PR` 156, which is the **Even** the region file already called it.
