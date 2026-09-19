export const SITE = {
  name: "Stop Fungus Gnats",
  domain: "stopfungusgnats.com",
  tagline: "How to get rid of fungus gnats — and keep them gone.",
};

/** Content is reviewed as a whole; update when a page's substance changes. */
export const LAST_UPDATED = "2026-09-19";

export const SOURCES = [
  {
    label: "Fungus Gnats — Pest Notes",
    publisher: "UC Statewide IPM Program (UC IPM)",
    url: "https://ipm.ucanr.edu/PMG/PESTNOTES/pn7448.html",
  },
  {
    label: "How to treat pesky fungus gnats in houseplants",
    publisher: "University of Minnesota Extension",
    url: "https://extension.umn.edu/yard-and-garden-news/how-treat-pesky-fungus-gnats-houseplants",
  },
  {
    label: "Bacillus thuringiensis (Bt) Fact Sheet",
    publisher: "National Pesticide Information Center (NPIC)",
    url: "https://npic.orst.edu/factsheets/btgen.html",
  },
  {
    label: "Steinernema feltiae, Beneficial Nematode (Sf)",
    publisher: "Cornell University — Integrated Pest Management",
    url: "https://cals.cornell.edu/integrated-pest-management/outreach-education/fact-sheets/steinernema-feltiae-beneficial-nematode-sf",
  },
] as const;

export const LIFECYCLE_STAGES = [
  {
    n: "01",
    stage: "Egg",
    duration: "3–6 days",
    detail:
      "Adult females lay 100–300 eggs in the top layer of moist, organic potting mix. Eggs need consistent moisture to hatch — this is the stage a dry surface prevents outright.",
  },
  {
    n: "02",
    stage: "Larva",
    duration: "~2 weeks",
    detail:
      "Legless, translucent larvae with a shiny black head capsule feed on fungi, algae, and decaying organic matter in the mix, and can nibble fine root hairs. This stage lives entirely below the surface, which is why sticky traps never touch it — only a soil drench or a dry surface reaches larvae.",
  },
  {
    n: "03",
    stage: "Pupa",
    duration: "~4–6 days",
    detail:
      "Larvae pupate in the soil near the surface. The pupal stage doesn't feed and is brief, but it's part of why a single treatment round rarely finishes an infestation — insects already pupating when you treat will still emerge as adults.",
  },
  {
    n: "04",
    stage: "Adult",
    duration: "About a week",
    detail:
      "Adults emerge, mate, and females lay the next batch of eggs within roughly 24–48 hours — often before you've caught them on a trap. Adults are weak fliers and don't bite, but every one you see represents eggs already laid.",
  },
] as const;

export const CAUSES = [
  {
    title: "Soil that never fully dries",
    detail:
      "This is the single biggest driver. Overwatering, poor drainage, or a moisture-retentive mix (heavy on peat) keeps the top inch of soil damp enough for eggs to survive and larvae to feed, week after week.",
  },
  {
    title: "Organic matter breaking down in the mix",
    detail:
      "Larvae feed on fungi and decaying organic material — bark, peat, and root debris in ordinary potting mix. Compost-heavy or well-used mix gives them more to eat and a more established fungal food source.",
  },
  {
    title: "New plants or bagged soil brought in already infested",
    detail:
      "Fungus gnats hitchhike in nursery pots and in bagged potting mix that was stored somewhere damp. A new plant is a common, easy-to-miss entry point.",
  },
  {
    title: "Standing water in saucers or cachepots",
    detail:
      "A saucer that holds water after every watering, or a decorative cachepot with no drainage, keeps the base of the pot wet even when the surface looks dry — a second nursery you can't see.",
  },
  {
    title: "Warm, stable indoor temperatures",
    detail:
      "Fungus gnats breed year-round indoors because homes don't get cold enough to interrupt the life cycle the way outdoor winters do. Without a dry spell, each generation overlaps the next.",
  },
] as const;

export const PEST_COMPARISON = [
  {
    pest: "Fungus gnats",
    body: "Slender, dark gray to black, mosquito-like silhouette with long legs and a single pair of clear wings.",
    behavior: "Weak, wandering fliers. Found near soil, resting on the rim of pots or nearby walls; lift off when a pot is watered.",
    breeds: "Moist potting soil and organic matter",
    bite: "No",
  },
  {
    pest: "Fruit flies",
    body: "Small, tan to brown, with a rounder body and noticeably red eyes.",
    behavior: "Strong, darting fliers. Found around ripening produce, drains, or anywhere fermenting residue collects.",
    breeds: "Overripe fruit, drains, and fermenting liquids",
    bite: "No",
  },
  {
    pest: "Drain flies (moth flies)",
    body: "Small and fuzzy with broad, moth-like wings held in a tent shape at rest.",
    behavior: "Weak, short hopping flights. Rest on walls and fixtures near sinks, showers, or floor drains.",
    breeds: "Gelatinous organic film inside drain pipes",
    bite: "No",
  },
] as const;

export const NATURAL_METHODS = [
  {
    method: "Letting the soil surface dry between waterings",
    evidence: "well-supported",
    note: "Removes the moisture eggs and larvae need to survive. Extension sources consistently list this as the foundation of control — not a supplement to it.",
  },
  {
    method: "Bti (Bacillus thuringiensis israelensis)",
    evidence: "well-supported",
    note: "A naturally occurring soil bacterium sold as Mosquito Bits or Gnatrol. It targets fly larvae specifically and is used in organic growing operations.",
  },
  {
    method: "Beneficial nematodes (Steinernema feltiae)",
    evidence: "well-supported",
    note: "A microscopic parasitic worm that actively hunts fungus gnat larvae in the soil. Needs consistently moist, temperature-appropriate soil to survive and work.",
  },
  {
    method: "Yellow sticky traps",
    evidence: "well-supported",
    note: "Effective for monitoring and for reducing egg-laying adults. On their own, traps don't touch eggs or larvae already in the soil.",
  },
  {
    method: "Sand or grit top-dressing",
    evidence: "well-supported",
    note: "A dry, mineral surface layer is a poor place for females to lay eggs and helps the very top of the mix dry faster.",
  },
  {
    method: "Cinnamon on the soil surface",
    evidence: "limited evidence",
    note: "Cinnamon has mild antifungal properties, which may reduce the fungal food source larvae feed on. It is not a larvicide and won't stop an established infestation on its own.",
  },
  {
    method: "Vinegar traps",
    evidence: "limited evidence",
    note: "Apple cider vinegar traps are built for fruit flies, which are drawn to fermentation. Fungus gnats respond far more to yellow color than to vinegar, so catch rates are typically low.",
  },
  {
    method: "Diatomaceous earth (food-grade) on the surface",
    evidence: "limited evidence",
    note: "Can help desiccate insects it directly contacts on a dry surface, but it loses effectiveness once wet — which is often exactly when fungus gnats are breeding.",
  },
  {
    method: "Essential oils (neem, cinnamon, etc.) as sprays",
    evidence: "common claim",
    note: "Widely recommended online with little houseplant-specific evidence behind the claim. Neem's clearer, better-supported use is as a broader-spectrum insecticidal soil drench, not a fungus-gnat-specific fix.",
  },
] as const;

export const TROUBLESHOOTING = [
  {
    q: "Why do fungus gnats keep coming back after I've treated them?",
    a: "Almost always one of three things: the soil surface is still staying damp between waterings, larvae already pupating when you treated have finished emerging as adults, or a second pot nearby is still infested and reseeding the room. Treat every pot in the area at once, and hold the dry-top habit for two full weeks after the last adult — not just until things look better.",
  },
  {
    q: "Why aren't my sticky traps working?",
    a: "Sticky traps only catch flying adults — they do nothing to eggs or larvae in the soil, which is where most of the population actually lives at any given time. A trap that stays clean can also mean the card isn't at soil level, is dusty or full, or is simply overwhelmed by egg-laying happening faster than adults are trapped. Traps are a monitoring and knock-down tool, not a standalone fix.",
  },
  {
    q: "How long should full elimination realistically take?",
    a: "A light infestation on one or two plants often clears in 7–10 days once the mix stays dry and you've run at least one larval treatment. A heavier, multi-plant infestation commonly takes 3–4 weeks, because eggs and larvae already in the soil keep completing their life cycle even after you start treating. Plan for that full window before assuming a method has failed.",
  },
  {
    q: "How do I know if larvae are still in the soil?",
    a: "The classic check is the potato test: bury a half-inch cube of raw potato just under the soil surface and leave it overnight. Larvae are drawn to it and will be visible on the underside when you lift it out the next morning. No larvae on two consecutive nights is a reasonable sign the soil population is down.",
  },
  {
    q: "What should I do during a severe, multi-plant infestation?",
    a: "Treat the whole collection at once rather than one pot at a time — gnats move freely between nearby plants. Stop watering anything that isn't visibly wilting, run sticky traps everywhere, drench every pot with Bti or a hydrogen peroxide mix on the same day, and repeat the larval treatment weekly for two to three rounds. Isolating a badly infested plant while you work on it can also slow how fast it reseeds the rest of the room.",
  },
  {
    q: "Is it normal to still see a few gnats for a while after treatment starts?",
    a: "Yes. Adults that were already pupae when you started treating will still emerge — that's expected and not a sign the plan isn't working. What matters is the trend on your sticky cards over days, not whether the count hits zero immediately.",
  },
] as const;

export type PestId = "fungus-gnats" | "fruit-flies" | "drain-flies";

export const METHODS = [
  {
    slug: "let-soil-dry",
    title: "Let the soil dry",
    kicker: "Most important",
    summary:
      "Fungus gnats breed in constantly wet mix. Let the top 1–2 inches dry between waterings and you remove their nursery.",
    image: "/images/bottom-water.jpg",
    time: "Ongoing",
    targets: "Eggs and larvae",
  },
  {
    slug: "sticky-traps",
    title: "Yellow sticky traps",
    kicker: "Adults",
    summary:
      "Place yellow cards at the soil surface to catch egg-laying adults. Traps monitor the infestation — they do not finish it alone.",
    image: "/images/sticky-trap.jpg",
    time: "5 minutes",
    targets: "Flying adults",
  },
  {
    slug: "hydrogen-peroxide",
    title: "Hydrogen peroxide drench",
    kicker: "Larvae",
    summary:
      "A 1:4 mix of 3% hydrogen peroxide and water kills larvae in the top layer of mix. Use as a short-term knock-down, not the only step.",
    image: "/images/kit.jpg",
    time: "10 minutes",
    targets: "Larvae",
  },
  {
    slug: "mosquito-bits",
    title: "Bti (Mosquito Bits)",
    kicker: "Best larvicide",
    summary:
      "Bacillus thuringiensis israelensis is a bacteria that specifically kills fungus-gnat larvae. Soak Bits, then water with the tea, or sprinkle on soil.",
    image: "/images/kit.jpg",
    time: "15 minutes, repeat weekly",
    targets: "Larvae",
  },
  {
    slug: "prevention",
    title: "Prevention that actually sticks",
    kicker: "Keep them gone",
    summary:
      "Bottom watering, a sand or grit top-dress, sterile mix, and empty cachepots. Two extra dry weeks after the last adult is the finish line.",
    image: "/images/bottom-water.jpg",
    time: "Habit change",
    targets: "The next generation",
  },
] as const;

export const PLAN_DAYS = [
  {
    day: 1,
    title: "Cut the nursery",
    tasks: [
      "Confirm they are fungus gnats (soil, not fruit or drains)",
      "Empty saucers and decorative cachepots",
      "Skip watering any plant whose top inch is still damp",
      "Stand yellow sticky traps at soil level in every infested pot",
    ],
  },
  {
    day: 2,
    title: "Hit the larvae",
    tasks: [
      "Drench with Bti tea, or a 1:4 3% hydrogen peroxide mix",
      "Water only enough to wet the mix — no standing runoff",
      "Remove dead leaves and moldy top dressing",
    ],
  },
  {
    day: 3,
    title: "Check the cards",
    tasks: [
      "Count gnats on each sticky trap (rough is fine)",
      "Replace any card that is already full",
      "Feel the top inch of soil — it should be drying, not soggy",
    ],
  },
  {
    day: 4,
    title: "Hold the dry line",
    tasks: [
      "Do not water unless the top 1–2 inches are dry",
      "If you must water, bottom-water and dump leftover tray water after 20 minutes",
      "Wipe windowsills and nearby surfaces",
    ],
  },
  {
    day: 5,
    title: "Second larval pass",
    tasks: [
      "Repeat Bti if you started it (larvae hatch in waves)",
      "Optional: potato slice test — bury a cube overnight, then throw it out",
      "Replace sticky traps that are dusty or full",
    ],
  },
  {
    day: 6,
    title: "Close the soil surface",
    tasks: [
      "Top-dress with 1/2 inch of coarse sand, grit, or decorative gravel",
      "This makes egg-laying harder once larvae are reduced",
      "Inspect new or recently gifted plants before they join the shelf",
    ],
  },
  {
    day: 7,
    title: "Review and keep going",
    tasks: [
      "Adults should be down. If cards are still busy, keep Bti + dry cycles",
      "Continue dry-top watering for 14 more days after the last adult",
      "One wet week can restart the whole cycle",
    ],
  },
] as const;

export const GUIDES: Record<
  string,
  {
    title: string;
    description: string;
    kicker: string;
    image: string;
    body: { heading: string; paragraphs: string[] }[];
  }
> = {
  "let-soil-dry": {
    title: "Let the soil dry to stop fungus gnats",
    description:
      "Wet mix is the nursery. Here is how dry the top should be, how to water without restarting the infestation, and what to do with plants that hate drought.",
    kicker: "Cultural control",
    image: "/images/bottom-water.jpg",
    body: [
      {
        heading: "Why this is the real fix",
        paragraphs: [
          "Adult fungus gnats do not live long. They need moist, organic mix to lay eggs. If the surface stays wet, a new generation appears every two to three weeks. Traps and sprays only buy time unless you break that moisture cycle.",
          "Let the top 1 to 2 inches of mix dry before you water again. For most houseplants that is a finger test, not a calendar. Seedlings and very small pots dry faster; peat-heavy mixes stay wet longer.",
        ],
      },
      {
        heading: "How to water without feeding gnats",
        paragraphs: [
          "Bottom-water: set the pot in a tray of water for 10–20 minutes, then dump what is left. Roots drink from below; the surface stays drier and less attractive to egg-laying females.",
          "If you water from above, water slowly until a little drains, then empty the saucer. Never leave a pot sitting in a full cachepot.",
        ],
      },
      {
        heading: "Plants that cannot go bone-dry",
        paragraphs: [
          "Ferns, calatheas, and some tropicals wilt if the whole pot dries. You can still dry the surface: water less often, switch to a chunkier mix, and top-dress with sand so the top layer dries even when the root zone stays evenly moist.",
        ],
      },
    ],
  },
  "sticky-traps": {
    title: "Yellow sticky traps for fungus gnats",
    description:
      "How to place yellow sticky cards so they catch adult fungus gnats, how to read the catch, and why traps alone will not end an infestation.",
    kicker: "Adults",
    image: "/images/sticky-trap.jpg",
    body: [
      {
        heading: "What traps do well",
        paragraphs: [
          "Adult fungus gnats are weak fliers and are drawn to yellow. A sticky card at soil level intercepts females before they lay the next round of eggs. You also get a visible count, which is the only honest way to know if the infestation is shrinking.",
        ],
      },
      {
        heading: "Placement that works",
        paragraphs: [
          "Cut larger cards into strips. Push them into the mix so the yellow face sits just above the soil, not up in the foliage. One card per small pot; two for a large planter. Keep them out of reach of pets and kids — they are extremely sticky.",
          "Replace cards when they are covered or dusty. A full card stops catching. Check every couple of days during week one.",
        ],
      },
      {
        heading: "The limit",
        paragraphs: [
          "Traps do not kill eggs or larvae in the soil. If you only trap adults, larvae keep pupating and the cloud returns. Pair traps with dry soil and a larval treatment (Bti or peroxide).",
        ],
      },
    ],
  },
  "hydrogen-peroxide": {
    title: "Hydrogen peroxide drench for fungus gnat larvae",
    description:
      "The 1:4 mix of 3% hydrogen peroxide and water, how to apply it, which plants to skip, and why it is a knock-down rather than a cure.",
    kicker: "Larvae",
    image: "/images/kit.jpg",
    body: [
      {
        heading: "The mix",
        paragraphs: [
          "Use regular 3% pharmacy hydrogen peroxide. Mix 1 part peroxide with 4 parts water. Example: 1 cup peroxide + 4 cups water. Do not use higher-strength salon or food-grade peroxide without converting the ratio — it can burn roots.",
        ],
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Water the pot with the mix until the soil is evenly moist and a little drains. You will often see fizzing — that is oxygen releasing as it contacts organic matter and larvae. Let it drain fully and empty the saucer.",
          "Repeat every 5–7 days for two or three rounds if adults are still appearing, and keep the surface drying between applications.",
        ],
      },
      {
        heading: "Cautions",
        paragraphs: [
          "Spot-test on one plant first, especially delicate ferns and seedlings. Peroxide is a short-term tool. It does not stay active in the mix the way Bti does, and it will not replace a drier watering habit.",
        ],
      },
    ],
  },
  "mosquito-bits": {
    title: "Mosquito Bits (Bti) for fungus gnats",
    description:
      "How to use Bacillus thuringiensis israelensis — Mosquito Bits or Gnatrol — as a soil drench that kills fungus gnat larvae without harming plants, pets, or people when used as labeled.",
    kicker: "Best larvicide",
    image: "/images/kit.jpg",
    body: [
      {
        heading: "What Bti is",
        paragraphs: [
          "Bacillus thuringiensis subspecies israelensis is a naturally occurring bacteria. It produces a toxin that affects the gut of certain fly larvae, including fungus gnats and mosquitoes. It does not work on adult gnats, and products labeled only for caterpillars (a different Bt strain) will not help.",
        ],
      },
      {
        heading: "How to use Mosquito Bits on houseplants",
        paragraphs: [
          "Two common methods: sprinkle Bits on the soil surface and water them in, or steep a handful in a watering can of water for 30 minutes, then water with the tea (some growers leave the Bits in a mesh bag). Follow the product label for rates.",
          "Bti does not persist forever indoors. Reapply about every 7 days while you still see adults on traps, then once more after they stop.",
        ],
      },
      {
        heading: "Why people call this the closer",
        paragraphs: [
          "Dry soil stops new eggs. Traps catch adults. Bti kills the larvae already in the pot. Together they cover the life cycle. Beneficial nematodes (Steinernema feltiae) are another strong larval option if Bti is hard to find where you live.",
        ],
      },
    ],
  },
  prevention: {
    title: "How to prevent fungus gnats from coming back",
    description:
      "Bottom watering, sand top-dressing, quarantine for new plants, and the two-week rule after the last adult.",
    kicker: "Keep them gone",
    image: "/images/bottom-water.jpg",
    body: [
      {
        heading: "The two-week rule",
        paragraphs: [
          "The life cycle from egg to adult is often about 3–4 weeks in a warm home, with larvae feeding for around two weeks. After you see zero adults on traps, keep the dry-top habit and one more Bti pass for 14 days. Stopping the day the air looks clear is how infestations restart.",
        ],
      },
      {
        heading: "Make the surface a bad nursery",
        paragraphs: [
          "A half-inch of coarse sand, horticultural grit, or fine gravel on top of the mix makes egg-laying harder and helps the surface dry. Do this after larval numbers are down so you are not trapping a wet layer underneath a crust.",
          "Use a well-draining mix. Heavy peat that stays wet for a week is fungus-gnat habitat. Mix in bark, perlite, or pumice so air reaches the roots.",
        ],
      },
      {
        heading: "Quarantine new plants",
        paragraphs: [
          "Fungus gnats hitchhike in nursery mix. Keep new plants away from your collection for a week, with a sticky card in the pot. If the card stays clean and the soil dries normally, they can join the shelf.",
        ],
      },
    ],
  },
};

export const FAQS = [
  {
    q: "How do I know if I have fungus gnats?",
    a: "They are tiny dark flies that look like mosquitoes, with long legs. They hover around houseplant soil and often fly up when you water. Fruit flies hang around kitchens and produce. Drain flies look fuzzy and sit on bathroom or kitchen drains.",
  },
  {
    q: "Do fungus gnats bite people?",
    a: "No. Adults are a nuisance in the air and on windows. The damage is underground: larvae feed on fungi, organic matter, and sometimes fine roots — especially on seedlings.",
  },
  {
    q: "How long does it take to get rid of fungus gnats?",
    a: "A light infestation often calms in 7–10 days if you dry the mix, trap adults, and treat larvae. A heavy one can take 3–4 weeks because eggs and larvae keep hatching. Plan for two extra dry weeks after the last adult.",
  },
  {
    q: "Will cinnamon or vinegar traps be enough?",
    a: "Vinegar traps catch some adults but are built for fruit flies. Cinnamon is a mild fungicide and may help a little. Neither replaces dry soil plus a larval treatment. Use them as extras, not the plan.",
  },
  {
    q: "Are fungus gnats dangerous to plants?",
    a: "Mature plants usually tolerate a few larvae. Heavy numbers can slow growth, yellow leaves, and damage seedlings. The bigger problem for most people is the cloud of flies in the room.",
  },
  {
    q: "Can I just repot?",
    a: "Repotting into fresh, well-draining mix helps if the old mix is compacted and constantly wet. Rinse as much old mix off as the plant will allow, and still use traps plus a drier watering schedule. Repotting alone often leaves eggs on the bench and in nearby pots.",
  },
];
