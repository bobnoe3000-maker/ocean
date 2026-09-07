# Progression and Economy

How the hero and companions grow, what gear is, where every currency comes from and goes, the fairness model at 1, 10, 50 and 200 hours, what is sold and why the world survives it, and the anti-grind rules. Combat numbers are in [COMBAT](COMBAT.md); class growth in [CLASSES_AND_STANDING](CLASSES_AND_STANDING.md); the living world's prices and doors in [LIVING_WORLD](LIVING_WORLD.md).

---

## 1. Hero growth

**Levels 1–40.** Experience to go from level `L` to `L+1` is `60 × L^1.6`, rounded: 60, 182, 348, 553, 786, 1,057, 1,352, 1,681, 2,020, 2,389 (levels 1–10); 8,230 at level 20; 14,900 at 30; 22,000 at 39. Total to level 10: 10,430; to 20: about 56,000; to 40: about 460,000.

**Sources of experience** (the model behind the numbers): quest outcomes by standing tier ([ADVENTURE_ENGINE](ADVENTURE_ENGINE.md) §4: 60–120 Villager, 150–250 Hand, 300–500 Name, 700–1,000 Voice, and at Force 1,500–2,500); fights, at `threat × 1.5` per enemy for the first fight of a kind at a site in a world-week, halving on each repeat there (a cutter is 18 the first time, 9 the second, 4 the third, then 2); discoveries (a site first seen 30; a dungeon layer 100; a stone ring 50); deeds outside quests (a contract witnessed 80; a militia drilled 60; a debt paid for someone 50). Over the first twenty hours ([FIRST_REGION](../slice/FIRST_REGION.md) §7) the traced player completes nine quests (3,240), about thirty fights (530), ten discoveries (460) and two witnessed deeds (140): 4,370, which is level 8 with thirty to spare. Quests are about three-quarters of all experience by design, so the road to power is the road to standing, and grinding fights is a slow road that gets slower.

**Per level:** +10 health. **Every fourth level:** a knack (§3 of the classes file). **Level 15:** subclass. Nothing else is gated by level; quests gate by standing, and the Fair/Even glyph tells the player when a fight is beyond them.

## 2. Companion growth

Companions share the hero's level (they gain the same experience from the same fights and quests when in the party, and catch up to the hero's level minus one when they rejoin after time apart — the world has been teaching them too). Each has one **role ability** upgraded at levels 5, 10, 20 and 30, and a **regard** for the hero (−100..+100) that changes with deeds that touch their agenda. At regard +40 a companion tells the hero the thing they have not said (Corva: why she wants the Stair; Ilune: what the Rudd Stones hold; Gulla: what Thrum owes the Stair); at +70 their agenda can be *settled* by a Voice quest the engine generates for them, after which they stay for the campaign. At −40 they leave. Companions are never bought, drawn or rolled: each is met in the world at a site and a state, and a region has five.

## 3. Gear

Gear is **named, made and tiered**; there are no random stats, no rarity colours and no drops of finished weapons. Five tiers: 1 village-made (Garrow Tull's forge), 2 town-made (Wickery's smith, Idren's imported Kest blades), 3 hold-forged (Thrum; needs Holds regard ≥ 0), 4 Stair-imported steel (Fallgate; region two), 5 stone-bronze reworked by a Skerrow master (Force standing and a court's bronze). Each tier is one weapon per class-style (light, heavy, rod), one armour (leather, mail, hold-mail, Kest plate, bronze-laced), and a handful of tools (lamp, skin, cord, boat). Upgrading a tier is a purchase plus materials plus a smith who will do it (regard), or the hero's own trade if smith. A tier-2 heavy is 2 marks and 6 iron; tier-3 is 6 marks, 10 iron and Thrum's forge. Gear breaks only in one way: left in a dungeon at a death.

## 4. Currencies: every source and sink

Two coins, three material families, and standing. There is no premium currency of any kind.

**Coin.** Silver **marks** and copper **bits**, twenty bits to a mark, both Kest-minted. A day's labour is 6 bits; a loaf 1; an inn bed 2; a flask of lamp oil 3; a bandage 2; a bucket of Shelf water 1 (rivers are free); a ferry crossing 1; a Stair toll, where a toll-house stands, 1 per cart.

| Sources of coin | Model |
|---|---|
| Quest pay (the main source) | by tier: 6–30 bits, 1–2 marks, 3–6 marks, 8–15 marks; Force pays in sites |
| Salvage sold to Marrock (Holds) or Kit (fence) | stone-bronze 2 marks a sack at Marrock's, 1½ at Kit's without questions; Court layer 1 yields about 6 sacks a season |
| The hero's trade | a world-day at the forge, loft, boat or cart earns 6–10 bits and a village memory (weight 2) |
| Stand and Drill contracts (Fighter), Factor work (Rogue subclass), Ease and Read (Mage) | 10–20 bits a world-day at Hand, a mark at Name |
| Enemy purses | cutters carry 2–6 bits; the Chain carry their pay (10); Salted things carry nothing |

| Sinks of coin | Model |
|---|---|
| Supplies (oil, bandages, water, food on the road) | about 8 bits a world-day active; a dungeon day 20 |
| Gear tiers | 2 / 6 / 15 / 40 marks by tier, plus materials |
| Companion shares | each companion takes 20% of quest pay while in the party (they have lives to fund; Gulla sends hers to Thrum) |
| Beds, ferries, tolls, courier | 1–2 bits each; a toll-house makes the valley's prices rise 5% (the world's cost of losing Vo1) |
| Debts and gifts | paying someone else's Quarter-day (3 marks) or arrears (8) is the hero's biggest standing purchase and the game's most expensive line |
| A mule (carry double; feed 1 bit a day) | 4 marks at Hobb's Cross |
| House repair and furnishing at Sallowford | 1–5 marks; purely cosmetic and remembered by neighbours |

**Materials.** *Iron* (Holds; 3 bits a bar at Marrock's; the smith trade makes tier-1 from it); *timber and hide* (Wend and Lowmark; free to gather, sold 1 bit); *stone-bronze* (the courts; the Holds' whole agenda; 2 marks a sack). Materials have no other sink than gear, tools and the village's repairs, so they do not accumulate into a second economy.

**Standing** is not spent, ever. It is measured ([CLASSES_AND_STANDING](CLASSES_AND_STANDING.md) §5).

**A twenty-hour ledger** (the trace in [FIRST_REGION](../slice/FIRST_REGION.md) §7): income about 19½ marks of quest pay and Stand wages, 6 of salvage (four sacks to Kit), 1½ of trade, a witness-fee in iron and purses = 27 marks. Spending: 3 on gear and iron (tier 2 by hour 8), 4 on supplies, 8 in companion shares, 4 on a mule, 1 on the house, 1 on beds and the ferry = 21. The hero ends the trace with six marks, tier-2 gear, a mule and a name, and six marks is a hold-forged blade's price at Thrum — which the Holds, at −35, will not yet sell. Coin in the Hearth is for changing the world, not for banking.

## 5. The fairness model

The world is the same for everyone. A paying player has cosmetics, side-chapters and prepaid conveniences; a free player has the same hero, companions, standing, gear, quests, dungeons and ending, in the same number of hours.

| Hours | Free player (normal pace) | Paying player | Difference |
|---|---|---|---|
| **1** | Level 2, tier-1 gear, the trade, one Villager quest done (V3), renown 12, the Court's mouth seen, no companion yet (Corva is at the mill) | same | a cloak dye, if bought |
| **10** | Level 6, tier-2 weapon, two companions (Corva, Ilune), Name standing (renown ~180), the Sunk Court's first two layers explored, Corrow writing letters and the Moot's notice carrying the name | same | furnishings in the Sallowford house; a mule prepaid instead of bought at hour 7 |
| **50** | Level 14, subclass not yet (15), tier-3 hold-forged gear, Voice in the Rudd valley and Hand in the Halse valley (region two), four companions met, one settled, the Fall's toll question decided one way or the other | same, plus the side-chapter *The Foot* (the Kest port outside the Fall) if bought, which gives Kest-flavoured quests and one companion, and no gear above tier 4, which region two already sells | a second hero slot (a second campaign) |
| **200** | Level 32–36, subclass, tier-5 bronze-laced gear, Force standing, the campaign's map question (the Fall) in the hero's hands, every region open | same, plus every side-chapter | cosmetics, chapters, conveniences |

*How the pace is modelled:* the twenty-hour trace gives level 8 and Voice; regions two to five are each 30–45 hours at the same density (14 quests per 20 hours; stakes and experience scale with tier), so level 14 at 50 hours and Force at about 150 hours fall out of the curve. "Normal pace" means the player takes the quests the engine offers and does not repeat fights. A faster player is not richer, only earlier.

## 6. What is sold, and why the world survives it

Everything sold is priced once, in the store, in money. Nothing is sold for a currency that is also earned in play; nothing sold is a chance; nothing sold is a wait removed.

1. **Cosmetics.** Cloak and hood dyes; house furnishings for the Sallowford house (and later houses); companion garb; map styles (a Kest survey map, an Ulder water-map); portrait frames. Visible to others only in the sense that the hero's neighbours remark on them (a weight-1 memory: "Nice cloak"). No stat, no reach, no regard.
2. **Side-chapters.** Whole regions off the campaign's road, sold as chapters: *The Foot* (the Kest port below the Fall), *The Deep Court* (a court under the Still, by boat), *Kell in Winter*. Each is one to two evenings of the same engine and one companion, and none holds a tier, a subclass, a standing or a door the campaign needs. The five campaign regions and the map-changing end are free.
3. **Conveniences that are in the world already.** A **mule**, prepaid (4 marks at Hobb's Cross in-world; the prepaid one still eats a bit a day and can still be stolen by the Wrack). A **courier pass** (sell salvage from any site at Kit's price minus 10%; in-world, Wat Hobb's boy does the same run for 10 bits a time). A **second hearth** (a second hero slot; a free player gets one campaign at a time, and can finish it and start another). An **almanac** (the journal's rumours and map events kept for the whole campaign instead of the last season; a free player can buy the same book from Merrin Hale for 2 marks a season).

*Why the world survives it:* the only things a paying player has that a free player never gets are colours, side-valleys and a second save. No standing tier, level, ability, companion, gear tier, quest, door or fight is reachable by money. The engine's quests read the same state for both. The powers do not know who paid. A test the design holds itself to: **every store line must name the in-world way to get the same thing, or be cosmetic.** The mule names Hobb's Cross; the courier names Wat Hobb's boy; the almanac names Merrin Hale; the second hearth is a save slot; the chapters are places; the dyes are dyes.

*What is deliberately not sold:* experience, coin, marks, materials, gear, companions, standing, regard, knacks, respecs, revives, scar removal, Salt easing, time skips, offline-cap raises, quest re-rolls, map reveals, difficulty changes, autobattle (it is free and first-class), and anything with a timer, key, pull, chest or pity attached. The offline cap is seven days for everyone; nobody can buy an eighth.

## 7. Anti-grind rules

1. **Experience from a repeated fight halves** each time the same enemy kind is fought at the same site within a world-week, and from the fourth fight it is 2 or less. Enemies do not respawn without a simulation cause (a band is *Sent* or *Raised*; a court's Salted wake by state), so there is nothing to farm that the world did not put there for a reason.
2. **Quests are about three-quarters of experience and nearly all coin**, and the engine offers at most six at once, so the fastest road is always the world's road.
3. **Standing cannot be ground.** Renown counts people, not deeds; a hundred errands for Tobbin are one memory in one head. A new tier needs new heads, and new heads are at new sites and higher stakes.
4. **The trade is a floor, not a ladder**: a day at the forge pays 6–10 bits at every level and never more; it exists so a player who is broke and out of quests can eat, sleep, and make a tier-1 blade, not so that they can buy tier 3 by smithing for a week.
5. **Companion shares** keep coin from accumulating: a full party costs 40% of every quest's pay.
6. **No daily anything.** Festivals are seasonal and the world's, not the player's; there is no login reward, no streak, no chest.

## 8. Sizes and risks

Items: 5 tiers × (3 weapons + 1 armour + 4 tools) = 40 gear items for the campaign, 24 in region one. Materials: 3 families, 7 items. Store lines at launch: 12 cosmetics, 1 side-chapter, 4 conveniences. The economic risk is deflation at Force: a hero who holds a site with sway ≥ 60 gets a levy, not coin, so late-campaign income stays flat by design, and the late sinks (bronze gear, other people's debts, a toll-house's stone) are large. The business risk is plain: a game that sells colours and valleys earns less per player than one that sells power; the design accepts it, and the pitch says so.
