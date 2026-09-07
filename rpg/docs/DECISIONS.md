# Decisions

Forty decisions the round-one bible makes, each with the reason in one line, reconstructed from the files themselves. Numbers are stable; later rounds append rather than renumber. Then the contradictions corrected this round, and what was deliberately left open.

Files: [PITCH](../PITCH.md) · [World](../world/WORLD.md) · [Living World](../systems/LIVING_WORLD.md) · [Adventure Engine](../systems/ADVENTURE_ENGINE.md) · [Classes and Standing](../systems/CLASSES_AND_STANDING.md) · [Combat](../systems/COMBAT.md) · [Progression and Economy](../systems/PROGRESSION_ECONOMY.md) · [Session and UX](../systems/SESSION_UX.md) · [First Region](../slice/FIRST_REGION.md) · [Status](STATUS.json)

---

## The world

1. **The world is one enclosed bowl, the Hearth, not a continent.** A world with an edge you can point at is a world a new player can hold entire, and every mile of depth then has to come from what is already inside it.

2. **The map has one shape — a circle, a dot, a notch, three river lines, a ring road, four towns — and every later region is a wedge of that same drawing.** The test is whether a player can draw it on a table with a finger after seeing it once, and a wedge scales without ever adding a second shape.

3. **Four peoples, each defined by its relation to the water and the ledger rather than by biology, and the hero's people is the Vael, "most of everybody".** Four is the ceiling the brief sets; defining them by what they did to the lake and to each other makes each one a permanent argument rather than a costume, and starting the hero among the many makes ordinariness a fact of the setting.

4. **The caps are absolute: never a fifth people, a sixth power or a fourth age, and no named gods, dragons, beast-peoples or undead beyond the Salted; an expansion adds a valley, a court or a ship.** Each of those would add a *kind* of thing without adding an argument, and the one page has to stay one page for the life of the game.

5. **Three ages, each remembered for one thing, and each leaving something still walked on: the drowned courts, the Lowmark and the Skerrow claim, the debt.** Lore that cannot be stood on is lore that never touches play; this is why every dungeon is Age of Stone, every land dispute is the Cutting, and every quest with money in it is the Age of Ships.

6. **Five powers with one noun each — Moot roads, Stair debt, Holds timber, Quiet water, Wrack ledgers — and the Quiet carry their own split (Patient and Closers) instead of the design adding a sixth power.** One hook per power is what makes five memorable after a single read, and the setting's most dangerous agenda gets pressure without breaking the count.

7. **Magic is Drawing: one working-family, one immediate price (thirst), one permanent ledger (Salt), and the Salted are what it does to a person.** Understated magic with a cost carried on the portrait keeps the tone plain and makes the Mage's resource a decision rather than a blue bar.

8. **The Still is still falling, the year is 360 days in four seasons, and each season has one festival.** The falling lake is a geological clock that surfaces new dungeons and new disputes forever without new lore types; four fixed dates give the whole simulation something to move around.

9. **Dates are counted two ways — 611 C. from the Cutting, 91 S. from the Stair's first winch — and names follow a stated shape per people.** Who counts from what is a political fact worth one line, and only a stated name-shape keeps the engine's sixty promoted folk from reading as generated.

10. **The one page is a contract: Part Two of the world file may contain nothing that does not grow from a line the player has already read, and the campaign's end question is the Fall itself — open or closed, and who holds the door — not a villain.** Depth that cannot be traced to the page is depth the friend test will fail, and a map question is something a Force-standing hero can actually answer, whereas a dark lord can only be killed.

## Standing

11. **Standing is renown: the sum of `reach` over everyone holding a memory of the hero, computed from the memory tables and nothing else.** The brief demands the world measure the hero, and counting heads (and how much each head talks) is the only measure literally made of the world.

12. **Reach is fixed by role — folk 1, tradesperson 2, notable 5, reeve or factor or Speaker 20, power leader 100.** A hundred errands for one shepherd is one head, so fame must travel outward instead of upward, which kills standing-grind at the root.

13. **Five tiers with hysteresis at 70% of a floor; tiers are crossed by doing something a tier above your station, because a power's Address can carry a stake one tier up; and quests gate by standing, never by level.** Otherwise the design would be a level gate wearing a reputation's clothes, and the road to power would run through fights instead of people.

14. **Regard per power is kept separate from renown, and the hearth glyph burns blue where the hero is more resented than thanked.** Famous and liked are different things, and the difference has to be visible on a phone.

15. **Renown falls only by being forgotten, never as a punishment; standing at creation is 0; there is no prophecy and no chosen one.** Memory decay is already a system, a second punitive loss would make the world a scoreboard, and the other three are automatic fails.

## Classes and companions

16. **Three classes are three ways of solving a problem: four arc abilities and four field verbs each, and every one of the engine's twelve verbs has a per-class answer.** A class with no identity out of combat is a design smell; the verb table is the proof that these three have one.

17. **Every class carries an explicit list of what it cannot do — a Fighter cannot find what is hidden, a Mage cannot hold a line, a Rogue cannot Draw or Break.** The holes are what make companions worth having and what keeps three classes from converging by level 20.

18. **The hero picks a trade as well as a class, each trade giving one field verb and one relationship in the village.** It gives the hero a past instead of a backstory, and it is the mechanical form of "an ordinary person with a trade".

19. **Subclasses arrive at level 15, three per class, and the base classes deliberately leave those rooms empty; knacks are lateral, and there is no purchasable respec (an Ulder keeper re-teaches one for a season's deed).** A roadmap only works if the later thing is not already half-built, and undoing a choice should cost the world's time, not money.

20. **Companions have roles — Shield, Bow, Draw, Blade — never classes, and are met in the world rather than rolled, drawn or bought.** It keeps subclasses from competing with party slots, and it states the anti-gacha rule as fiction rather than policy.

## The adventure engine

21. **A quest has seven slots but is generated trigger-first from a site state or an NPC condition, and its place is always the site whose state caused the trouble.** Filling slots from tables left to right is exactly how a generator produces "kill ten wolves"; starting from a cause in the simulation is what makes a quest name a person with a reason and sit somewhere on the map.

22. **About a third of quests are offered plain, with no twist.** If every quest has a reversal then the reversal is the template; a plain quest with a real reason still reads as authored.

23. **Every site, motive and opposition carries an age tag; the engine prefers a fill touching two ages and forbids three fills from one age.** It is the mechanism that puts the three-age history inside ordinary quests instead of in a codex.

24. **Repetition is caught by shape signature — giver role, verb, stake type, opposition kind, twist family — and if nothing fits, the engine offers nothing.** A quiet day is cheaper than a stale quest, and silence is the only honest failure mode for a generator.

25. **Hand-written anchors are expressed as site states with triggers and door flags, not as scripts, and no outcome may have an empty consequence list.** The first keeps the seam between authored and generated invisible; the second is what makes generated content feed the simulation rather than drain it.

## The living world

26. **One clock: the world-tick is one world hour, two real minutes in the open, paused in menus.** A single unit is what lets combat, schedules, faction moves and offline time be stated once and checked against each other.

27. **Offline advances four world hours per real hour, capped at seven world days per absence.** The world must move without the player and must not be able to end without them; a flat cap is the simplest promise to make and to keep.

28. **NPC memory is eight slots with banded decay (weight 10 never decays) while the deed ledger is never pruned.** Bounded memory keeps the simulation cheap and lets the world forget a small kindness; the ledger keeps the campaign's promise that nothing is truly erased.

29. **Powers never read the hero's location and never wait for the hero — they read standing only to decide whether the hero is worth a letter; clashes resolve at `own / (own + other)`, and a hero who is present converts the roll into a played fight.** Factions that only react to the hero are an automatic fail, and this is what makes "the hero can tilt a conflict" mechanical rather than rhetorical.

## Combat and autobattle

30. **Parity is achieved by definition: the Fair threshold `ER ≤ PR` is tuned as "what the autobattle policy wins with the party above 40% health", and nothing in the world — no quest, door, threshold or reward — requires an Overmatched win.** An autobattle strictly better or worse than hands is an automatic fail, and making the AI define the balance line is the only version of that promise a team can test (147 simulations a pass).

31. **Nothing crits and nothing in a fight is random except which target a slinger picks first; there is no difficulty setting, and autobattle is the accessibility mode.** Parity can only be argued if the same fight run twice is the same fight, and one honest computed read of an encounter beats three sliders.

32. **Death is graded: downed (two days, carried home), left for dead (three days, a scar, coin gone, the pack at the fall point), and a companion left in a dungeon is dead for good.** The brief asks for a cost the world remembers; a corpse-run and a permanent scar are that cost without a game-over screen.

## Economy, session and what is sold

33. **There is no premium currency and no second earned currency — two coins, three material families, and standing that is never spent.** Every soft-currency layer is where power creeps back into a store, so the design refuses the layer rather than policing it.

34. **What is sold is cosmetics, side-chapters (whole spare valleys) and conveniences that already exist in the world.** It is the only sale list that cannot buy a level, a door or an hour.

35. **The store-line test: every line must name the in-world way to get the same thing, or be cosmetic.** A rule a designer can apply to a new line in ten seconds beats a paragraph of intent — the mule names Hobb's Cross, the courier names Wat Hobb's boy, the almanac names Merrin Hale.

36. **A side-chapter may never hold a gear tier, a subclass, a standing tier, a companion the campaign needs, or a door.** Otherwise a paid valley becomes a paid shortcut, which is buying power with a map drawn on it.

37. **No energy, no daily rewards, streaks, timers, keys, chances or pity in any form, and the seven-day offline cap cannot be bought.** They are all the same mechanic under different names, and any one of them fails the round.

38. **Gear is named, made and tiered — five tiers, no rarity colours, no random stats, no dropped finished weapons — and the anti-grind rules are structural: repeated fights halve their experience, enemies respawn only from a simulation cause, quests are about three-quarters of experience, and the trade pays a flat 6–10 bits at every level.** Random loot is a slot machine by another route, and a grind that is merely discouraged is a grind that will still be done.

39. **Three session lengths are designed, not hoped for — three minutes (an errand), fifteen (a venture), an evening (a descent or a season's turn) — each ending in a world change the player can name; and the screen is portrait, one thumb, four petals in the corner, with the accepted cost that the hero stops for the instant of a tap.** A feature without a session example is a smell, and naming the one-thumb cost is cheaper than pretending it away.

40. **The first region is the Rudd valley — thirty miles, forty sites, twenty-five scheduled people, one dungeon, one season, ending at about level 8 and Voice standing — and its season is written out twice, once as the baseline for a player who never plays and once as a traced twenty hours.** It is the smallest slice containing every ring of the bowl, all four peoples, all five powers and all three ages, and the doubled season is both the proof that factions act without the hero and the build's acceptance test.

---

## Corrections made this round

Three outright contradictions between the eight pre-existing files were found and fixed surgically; nothing else in them was touched.

- **C1.** [WORLD](../world/WORLD.md) §2.8 said the first region meets "four of the five powers" while listing all five faces. Corrected to "all five powers", and "the fifth-power seat at Fallgate is region two" to "the Stair's own seat at Fallgate is region two", which is what the sentence means and what [FIRST_REGION](../slice/FIRST_REGION.md) §4 already says ("Five powers act on the valley; three have a face and a seat in it").
- **C2.** [LIVING_WORLD](../systems/LIVING_WORLD.md) counted twenty named NPCs in the first region where [FIRST_REGION](../slice/FIRST_REGION.md) §3 lists twenty-five. Corrected the living-world file to twenty-five, its schedule-row estimate from about 300 to about 375, and its memory-slot maximum from 640 to 680, matching the region file's own count in §8.
- **C3.** [PROGRESSION_ECONOMY](../systems/PROGRESSION_ECONOMY.md) §7 said quests are 70% of experience where §1 of the same file says three-quarters and the twenty-hour trace works out at 74%. Corrected §7 to "about three-quarters".

## Left open for round two

Logged in [STATUS.json](STATUS.json) rather than patched, because either side of each could be the one that is wrong and the fix belongs with whoever re-runs the trace.

- The twenty-hour experience total: 4,370 in the economy file's model against 4,343 in the region file's trace.
- The Sallowford–Wickery distance: eight miles and three hours in the world and living-world files against segments summing to about eleven miles and three hours forty in the region file.
- The region trace reading renown 27 as still Villager at hour 3:00 when the Hand floor is 20; the intended rule (the tier is recomputed at dawn) wants stating in the standing file rather than being implied in a parenthesis.
