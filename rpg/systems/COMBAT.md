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

**Hero damage per second, single target, no companions** (base ÷ recovery, armour subtracted per §1.1; the Rogue line includes one Slip-window Cut every 5 s, the Fighter line one Hold counter every 8 s):

| Class, tier 2 | vs armour 0 | vs armour 2 | vs armour 4 | Resource per 10 s of fighting |
|---|---|---|---|---|
| Fighter, heavy 15 | 10.7 | 9.3 | 7.9 | 0 (Strike is free); Hold+Shove ≈ 35 stamina, regen pays 100 |
| Mage, Fling 8 | 10.0 | 7.5 | 5.0 | **25 water** (12 casts + 1 spare); a full skin is 40 s of Flinging |
| Rogue, light 9 | 15.6 | 13.2 | 10.7 | 40 stamina (2 Slips), regen pays 100 |

**Against a Salted husk** (120 health, armour 3), one hero, level 8, tier 2, alone, no knacks — the file's worked **time to kill**:

| Class | Line played | Damage per second | Time to kill | Resource |
|---|---|---|---|---|
| Fighter | Strikes, Hold on each telegraphed swing, counter ×1.5 | 8.6 + 2.5 = 11.1 | **10.8 s** | 20 stamina per 8 s, covered by regen |
| Mage | Wring on sight (67 + 3 × 17 = 118), then Flings at 5 | 118 in 4 s, then 6.3 | **5.0 s** | **32 water** (one Wring, one Fling) |
| Rogue | front Cuts at 6, a Slip-window Mark at 24 every 5 s, Powder for 2.5 s of back-Marks at 15 | 12.3 | **9.8 s** | 45 stamina |

That table is the husk's answer to §2 rule 2, in numbers: **every class kills it; the Mage kills it twice as fast; the Rogue pays for having no crust answer in seconds and in the damage taken during them.**

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
| Cutter | — | Cleave: they bunch three abreast | Bind the front one, Fling past it | Powder the bunch, Mark through it |
| Slinger | — | Shove it off the ledge, or let the Bow take it | Bind at 8 m: a rooted slinger cannot retreat | Slip closes 3 m in 0.3 s |
| Rider | — | Hold the charge, counter at ×1.5 | Bind on the wind-up: a bound mount throws him | Snare on the wind-up dismounts him |
| Ledgerman | — | Shove interrupts the Rally call | Bind interrupts the call; Wring is the biggest hit in the game | Snare interrupts the call; Slip-Mark the back |
| Salt-hound | Fling ×2, Wring ×2 | Cleave: they come in a line | Fling ×2 kills one in three casts | Powder: a blinded hound lunges at nothing |
| **Salted husk** | **Wring ×2** | Hold: *every* husk hit is telegraphed, so the counter loop is free damage (10.8 s, §1.5) | Wring ×2 (5.0 s) | **Powder and the ground**: blind it, take the back arc it is too slow to keep, Slip-Mark (9.8 s). The crust is never stripped — that is the Rogue's price, and it is nine seconds and the hits taken in them. Crack (a Shield) or a Breaker's Break (level 15) strips it for anyone |
| Salt-crane | Fling ×2 | close, or the Bow | Fling ×2 out of its spit range | Slip the roof line, Mark |
| Salt-warden | Wring ×2, Fling ×1.5 | Hold the slam; Shove out of the 3 m arc | Wring ×2 and Fling ×1.5 at range | Powder the slam, Slip-Mark; immune to Snare, so never stand in the arc |
| Chainman | — | Shove strips the guard 2 s | Bind: a rooted man cannot turn his shield | Slip ends behind the shield |
| Chain sergeant | — | Hold, counter | Bind, then Wring | Powder, then Marks |
| Skerrow hewer | — | Shove interrupts the 0.9 s wind-up | Bind | Snare or Powder |
| Militiaman | — | anything | anything | anything |
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

This is why threat is not a closed formula over health and damage: it folds in speed, control immunity, a Rally aura and a ranged kite, which is exactly what a party feels. It is also why the Fair line is honest — `ER ≤ PR` is true by construction at `PR = 120` and holds at other ratings because both sides of it scale on the same `10 + 4L + 5T` per body.

**The planning number.** Measured across the six runs in §7, a fight costs the party about **1.2 health per point of ER** (the three runs came in at 1.6, 1.0 and 1.2). That is the number to budget bandages and a descent against (§3).

## 2. Ability and enemy design rules

1. Every hit over 15 is telegraphed for at least 0.6 s with a visible wind-up and a sound; every telegraph can be dodged, and each class has one arc answer to it — Hold or Shove, Bind or Mist, Slip or Snare — where "answer" means an **interrupt** (§1.4) or an invulnerable window.
2. **No enemy is immune to a whole class, and this is what that means.** An immunity is always to *one ability* (a husk ignores Bind, a stone-warden ignores Fling), never to a class; and **§1.8's answers table names one line of play per class for every one of the fifteen kinds**, so no reader has to infer whether a class has an answer. An answer is not always the *fast* answer: the class that lacks the kind's multiplier or its crust-stripper pays in seconds and in the hits taken during them, and §1.5 prints that price against the region's signature enemy — Mage 5.0 s, Fighter 10.8 s, Rogue 9.8 s against a Salted husk. **A stated, priced disadvantage is a design; an unstated one is a hole**, and rounds one to three had the hole: the husk's old row named Wring, Crack and Break — one Mage ability, one companion ability and a level-15 subclass verb — and left the Rogue nothing, while this rule claimed otherwise. The Rogue's husk answer is **Powder and the ground**, as [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §2 and [ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §3.6's O07 both say, and it is now in the table with its cost in seconds.
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

**Water.** For the Mage's skin and for drinking. A party in a dry court **more than eight hours** loses 5 health a world hour until it drinks. A layer either has a source (the Court's cistern, layer 0's rain-filled basins) or it does not, and the layer table says which. A Mage's water per fight is computable off §1.5: **25 water per ten seconds of Flinging, 30 for a Wring, 20 for a Bind** — a full skin is three Fair fights, or two and a Bind in hand.

**Bandages.** 30 health over ten seconds, out of combat only, 2 bits each. Budget them against §1.9's planning number: **a room costs the party about 1.2 health per point of effective ER**, so a party's bandage count for a run is `(Σ 1.2 × ER − party health) ÷ 30`, rounded up, and if that number is larger than what the party can carry, the run is a plan to die.

### 3.2 The Sunk Court, costed to the bottom

Twenty-three rooms, four layers ([FIRST_REGION](../slice/FIRST_REGION.md) §6); the eleven with encounters are §9. Party for this worked budget: the traced level-8 party — hero 170, Kit 160, Gulla 180, **510 health**, six flasks, eight bandages, a Mage skin of 100 if the hero is one.

| Layer | Rooms fought | Σ effective ER | Health cost (1.2 × ER) | Lit-hours | Flasks | Water |
|---|---|---|---|---|---|---|
| 0 Outer Court (day) | none — the hounds are a night room | 0 | 0 | 0 (daylight) | 0 | basins, if it has rained |
| 1 Drowned Steps | the Inner Stair (64); the other three skipped | 64 | 77 | 3 down, 1 back | 1.0 | none |
| 2 Salt Hall | Salt Threshold (75), Sluice Mouth (68) | 143 | 172 | 2.5 down, 1.5 back | 2.0 | **the cistern: one refill** |
| 3 The Well | the Ring Stair (165) | 165 | 198 | 1.5 | 3.0 | none but the Sump |
| **Total** | four of eleven rooms | 372 | **447** | 12.5 lit-hours | **6.0** | one refill |

**What is left at the bottom.** 447 health of a pool of 510 plus 240 (eight bandages) = 750: the party stands at the Drum's door with about **300 health of 750 spent down to 303**, no bandages worth keeping, the sixth flask lit and half an hour of it left, and — for a Mage — about 60 water and nothing to fill from but the Sump, where every 25 taken wakes one of the nine a day early. That is the design: **you arrive at the bottom with one fight in you.**

**And a party that clears every room does not arrive at all.** All eleven rooms come to 1,012 health of cost against 750 of pool and bandages. The Court cannot be cleared in one descent by a level-8 party, and the file says so rather than leaving a reader to find out: **the descent that works skips**, and the three returns ([FIRST_REGION](../slice/FIRST_REGION.md) §6) are what make skipping a plan instead of a retreat. A party that wants the twenty sacks in the Well Ring comes back for them on a second descent, with the layer's state changed by the days between.

**Failure has the price the brief asks.** A failed descent costs the six flasks (18 bits) and the bandages (16), the two or three world days of recovery or the three of being left for dead, the pack at the fall point with the Wrack sentries a day from stripping it, a scar, and — the cost that is not coin — the layer's state moving while you are away: the Sump a foot higher for every one of the nine that stood, a hall that has flooded over a body, and `left_below(name)` if a companion is down there. §8 is the full rule and it is not softened.

## 4. Difficulty

There is no difficulty setting. The Fair/Even/Overmatched glyph is the difficulty, and it is honest: it is computed from §1.9. Autobattle is the accessibility setting. A player who never touches the arc can finish the campaign on autobattle; a player who never turns it on can finish it by hand; both meet the same fights.

**Fair does not mean easy, and the glyph never promised it did.** The tuning target is a win with **the party** at 40% health or better; at Fair the hero personally often ends under half, as §7's Encounter A does at 62 of 120. Even is a coin. Overmatched is a loss unless the hand is cleverer than the numbers. This is the difference between a difficulty curve and a difficulty setting: the player chooses which fights to take, in a world that offers plenty, and the glyph tells the truth about each one.
