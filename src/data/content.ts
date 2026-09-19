import heroImage from "@/assets/images/hero.jpg";
import macroImage from "@/assets/images/macro.jpg";
import bottomWaterImage from "@/assets/images/bottom-water.jpg";
import stickyTrapImage from "@/assets/images/sticky-trap.jpg";
import kitImage from "@/assets/images/kit.jpg";

export const SITE = {
  name: "Stop Fungus Gnats",
  domain: "stopfungusgnats.com",
  tagline: "How to get rid of fungus gnats — and keep them gone.",
};

/** Optimized image modules, keyed for reuse across method cards, guides, and hero art. */
export const IMAGES = {
  hero: heroImage,
  macro: macroImage,
  bottomWater: bottomWaterImage,
  stickyTrap: stickyTrapImage,
  kit: kitImage,
} as const;

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

/** All durations are approximate and temperature-dependent — faster in a warm room, slower in a cool one. */
export const LIFECYCLE_STAGES = [
  {
    n: "01",
    stage: "Egg",
    duration: "roughly 3–6 days",
    detail:
      "A female can lay on the order of a hundred or more eggs over her lifespan in the top layer of moist, organic potting mix. Eggs need consistent moisture to hatch — this is the stage a dry surface most directly interferes with.",
  },
  {
    n: "02",
    stage: "Larva",
    duration: "roughly 2 weeks",
    detail:
      "Legless, translucent larvae with a shiny black head capsule feed on fungi, algae, and decaying organic matter in the mix, and can feed on fine root hairs. This stage lives entirely below the surface, which is why sticky traps never touch it — only appropriate soil moisture management or a labeled larval treatment reaches it.",
  },
  {
    n: "03",
    stage: "Pupa",
    duration: "roughly 4–6 days",
    detail:
      "Larvae pupate in the soil near the surface. The pupal stage doesn't feed and is brief, but it's part of why a single treatment round rarely finishes an infestation — insects already pupating when you treat will still emerge as adults.",
  },
  {
    n: "04",
    stage: "Adult",
    duration: "roughly a week",
    detail:
      "Adult females can begin laying eggs soon after emerging, so visible adults may mean another generation is already developing in the soil. Adults are weak fliers and don't bite.",
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
  {
    pest: "Springtails",
    body: "Tiny (under 1/8 in), wingless, gray to white. Not a fly at all — a distinct group of soil arthropods.",
    behavior: "Don't fly. Jump or spring when disturbed. Often seen clustered on very wet soil surfaces or floating in a saucer.",
    breeds: "Overly wet, organic-rich soil or decaying plant matter",
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
    note: "A naturally occurring soil bacterium sold as Mosquito Bits or Gnatrol. It targets fly larvae specifically and is used in organic growing operations. A drench is itself a watering event — apply it in place of a scheduled watering, not on top of one, so you're not undoing the dry-soil habit while treating larvae.",
  },
  {
    method: "Beneficial nematodes (Steinernema feltiae)",
    evidence: "well-supported",
    note: "A microscopic parasitic worm that actively hunts fungus gnat larvae in the soil. Needs consistently moist, temperature-appropriate soil to survive and work. They're a live product with a short shelf life — buy from a supplier that ships them cold, apply promptly, and expect a higher cost per treatment and less retail availability than Bti.",
  },
  {
    method: "Yellow sticky traps",
    evidence: "well-supported",
    note: "Well-supported specifically for monitoring and knocking down egg-laying adults — that's the claim, not elimination. On their own, traps don't touch eggs or larvae already in the soil, so a clean-looking card doesn't mean the pot is clear.",
  },
  {
    method: "Sand or grit top-dressing",
    evidence: "limited evidence",
    note: "A dry, mineral surface layer is a plausible deterrent to egg-laying and helps the very top of the mix dry faster, but it's a supplementary, preventive step, not a documented larvicide — use it after larvae numbers are already down, not as a first-line treatment.",
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
    a: "Almost always one of three things: the soil surface is still staying damp between waterings, larvae already pupating when you treated have finished emerging as adults, or a second pot nearby is still infested and reseeding the room. Treat every pot in the area at once. Keep monitoring after adult numbers fall, and continue moisture management and any labeled treatment long enough to account for remaining immature stages still developing in the soil — not just until things look better.",
  },
  {
    q: "Why aren't my sticky traps working?",
    a: "Sticky traps only catch flying adults — they do nothing to eggs or larvae in the soil, which is where most of the population actually lives at any given time. A trap that stays clean can also mean the card isn't at soil level, is dusty or full, or is simply overwhelmed by egg-laying happening faster than adults are trapped. Traps are a monitoring and knock-down tool, not a standalone fix.",
  },
  {
    q: "How long should full elimination realistically take?",
    a: "You may see fewer adults within days once the mix stays dry and adults are being trapped, but complete control often takes several weeks — longer for a heavier, multi-plant infestation — because eggs and larvae already in the soil keep completing their life cycle even after you start treating. These timelines are approximate and depend on temperature and consistency of treatment; don't assume a method has failed before giving it that full window.",
  },
  {
    q: "How do I know if larvae are still in the soil?",
    a: "The classic check is the potato test: bury a half-inch cube of raw potato just under the soil surface and leave it overnight. Larvae are drawn to it and will be visible on the underside when you lift it out the next morning. No larvae on two consecutive nights is a reasonable sign the soil population is down.",
  },
  {
    q: "What should I do during a severe, multi-plant infestation?",
    a: "Treat the whole collection at once rather than one pot at a time — gnats move freely between nearby plants. Stop watering anything that isn't visibly wilting, run sticky traps everywhere, and use a Bti product labeled for fungus gnats across every affected pot, following the current label for amount and retreatment interval rather than a fixed weekly schedule. Isolating a badly infested plant while you work on it can also slow how fast it reseeds the rest of the room. Hydrogen peroxide is an optional, cautious add-on some people use — not a required or equally-weighted step.",
  },
  {
    q: "Is it normal to still see a few gnats for a while after treatment starts?",
    a: "Yes. Adults that were already pupae when you started treating will still emerge — that's expected and not a sign the plan isn't working. What matters is the trend on your sticky cards over days, not whether the count hits zero immediately.",
  },
] as const;

export type PestId = "fungus-gnats" | "fruit-flies" | "drain-flies";

export type PlantType = "tropical" | "succulent" | "orchid" | "seedling" | "edible" | "unknown";

export const PLANT_MOISTURE_GUIDANCE: Record<PlantType, { label: string; guidance: string }> = {
  tropical: {
    label: "Tropical houseplant",
    guidance:
      "Let the top 1–2 inches of mix dry before watering again, checked by finger, not a calendar. Bottom-water where practical so the surface stays drier than the root zone.",
  },
  succulent: {
    label: "Succulent or cactus",
    guidance:
      "These rarely host a heavy infestation to begin with — if you're seeing gnats here, the mix is likely staying wetter than this plant needs. Fix drainage (more grit, a terracotta pot, less frequent watering) rather than adding a liquid drench, since repeated moisture is riskier for this plant than the gnats are.",
  },
  orchid: {
    label: "Orchid (bark mix)",
    guidance:
      "Bark dries fast and unevenly, so a finger test at the surface can be misleading. Judge dryness by weight — a dry pot is noticeably lighter — rather than by feel alone.",
  },
  seedling: {
    label: "Seedling or fresh cutting",
    guidance:
      "Small root systems can't tolerate the same drought as an established plant. Dry only the very top surface layer, not a full 1–2 inches, and lean more on a sticky trap and airflow than on aggressive drying.",
  },
  edible: {
    label: "Edible herb or vegetable",
    guidance:
      "Treat like a typical houseplant — dry the top layer between waterings — but avoid soil drenches close to harvest, and follow the label on anything used near food crops.",
  },
  unknown: {
    label: "Not sure / rather not say",
    guidance:
      "Without knowing the plant, start conservatively: dry only the top inch, watch how the plant responds over a few days, and adjust from there rather than applying one rule to every pot.",
  },
};

export const METHODS = [
  {
    slug: "let-soil-dry",
    title: "Let the soil dry",
    kicker: "Most important",
    summary:
      "Fungus gnats breed in constantly wet mix. Let the top 1–2 inches dry between waterings and you remove their nursery.",
    image: IMAGES.bottomWater,
    time: "Ongoing",
    targets: "Eggs and larvae",
  },
  {
    slug: "sticky-traps",
    title: "Yellow sticky traps",
    kicker: "Adults",
    summary:
      "Place yellow cards at the soil surface to catch egg-laying adults. Traps monitor the infestation — they do not finish it alone.",
    image: IMAGES.stickyTrap,
    time: "5 minutes",
    targets: "Flying adults",
  },
  {
    slug: "mosquito-bits",
    title: "Bti (Mosquito Bits)",
    kicker: "Best-supported larvicide",
    summary:
      "Bacillus thuringiensis israelensis is a bacterium that specifically targets fly larvae. Use a product labeled for fungus gnats and follow its rate and reapplication instructions.",
    image: IMAGES.kit,
    time: "Per product label",
    targets: "Larvae",
  },
  {
    slug: "hydrogen-peroxide",
    title: "Hydrogen peroxide drench",
    kicker: "Optional — use cautiously",
    summary:
      "A diluted peroxide drench is a common household suggestion, but extension guidance on it is mixed. Not part of the default plan — read the cautions before using it.",
    image: IMAGES.kit,
    time: "10 minutes",
    targets: "Larvae",
  },
  {
    slug: "prevention",
    title: "Prevention that actually sticks",
    kicker: "Keep them gone",
    summary:
      "Bottom watering, a sand or grit top-dress, sterile mix, and empty cachepots. Keep monitoring for a couple of weeks after adults stop appearing.",
    image: IMAGES.bottomWater,
    time: "Habit change",
    targets: "The next generation",
  },
] as const;

export const PLAN_DAYS = [
  {
    day: 1,
    title: "Confirm it, find the source, and cut the moisture",
    tasks: [
      "Confirm they are fungus gnats (soil, not fruit or drains)",
      "Check every nearby pot to find the likely breeding source — usually the wettest one",
      "Note what kind of plant is affected — tropical, succulent/cactus, orchid, seedling, cutting, or edible — moisture tolerance differs by type",
      "Empty saucers and decorative cachepots",
      "Skip watering any plant whose mix is still damp at the depth appropriate for that plant",
      "Stand yellow sticky traps at soil level in every infested pot",
    ],
  },
  {
    day: 2,
    title: "Let moisture and traps do the first work",
    tasks: [
      "Water only what actually needs it, and only as much as the plant needs — no standing runoff",
      "Remove dead leaves and moldy top dressing, which can also feed larvae",
      "If you're using a Bti product, this is a reasonable day to start it — follow its label for rate and application",
    ],
  },
  {
    day: 3,
    title: "Check the cards",
    tasks: [
      "Count gnats on each sticky trap (rough is fine)",
      "Replace any card that is already full",
      "Check soil moisture in a way that fits the plant — finger test for most houseplants, weight for orchid bark",
    ],
  },
  {
    day: 4,
    title: "Hold the dry line",
    tasks: [
      "Don't water ahead of schedule out of habit — check each plant, don't guess",
      "If you must water, bottom-water where practical and empty leftover tray water after 15–20 minutes",
      "Wipe windowsills and nearby surfaces",
    ],
  },
  {
    day: 5,
    title: "Reassess before a second round",
    tasks: [
      "If using Bti, follow the product label on whether and when to reapply — don't reapply on a fixed schedule that ignores the label",
      "Optional: potato slice test to check for larvae — bury a cube overnight, then throw it out",
      "Replace sticky traps that are dusty or full",
    ],
  },
  {
    day: 6,
    title: "Close the soil surface",
    tasks: [
      "Top-dress with 1/2 inch of coarse sand, grit, or decorative gravel once larvae numbers are down",
      "This makes egg-laying harder without changing how the plant is watered",
      "Inspect new or recently acquired plants before they join the shelf",
    ],
  },
  {
    day: 7,
    title: "Review and keep monitoring",
    tasks: [
      "Adult counts should be trending down, not necessarily at zero — that's normal this early",
      "Keep the sticky trap and moisture habit going for another week or two; a fresh catch is a reason to recheck the soil, not a sign the plan failed",
      "If catches aren't trending down at all by now, see the troubleshooting self-check",
    ],
  },
] as const;

export const GUIDES: Record<
  string,
  {
    title: string;
    description: string;
    kicker: string;
    image: ImageMetadata;
    body: { heading: string; paragraphs: string[] }[];
  }
> = {
  "let-soil-dry": {
    title: "Let the soil dry to stop fungus gnats",
    description:
      "Wet mix is the nursery. Here is how dry the top should be, how to water without restarting the infestation, and what to do with plants that hate drought.",
    kicker: "Cultural control",
    image: IMAGES.bottomWater,
    body: [
      {
        heading: "Why this is the real fix",
        paragraphs: [
          "Adult fungus gnats do not live long. They need moist, organic mix to lay eggs. If the surface stays wet, a new generation appears every two to three weeks. Traps and sprays only buy time unless you break that moisture cycle.",
          "The general principle is to allow the growing medium to dry as far as the plant safely tolerates — not the same fixed depth for every pot. For many established houseplants in ordinary potting mix, that works out to roughly the top 1 to 2 inches before watering again, checked by a finger test, not a calendar. But how dry is safe depends entirely on the plant: a moisture-loving tropical, a succulent, an orchid in bark, a seedling, a fresh cutting, and an edible herb each tolerate a different amount of drying, covered below. If you're not sure which category a plant falls into, err toward less aggressive drying and watch the plant's own response.",
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
      {
        heading: "Succulents, cacti, and orchids",
        paragraphs: [
          "These aren't usually where a heavy infestation starts — they're already grown in fast-draining mix and watered infrequently, which is inhospitable to fungus gnats in the first place. If you do see gnats around a succulent or cactus, the mix is likely staying wetter than it should for that plant; fix the mix (more grit, a terracotta pot, less frequent watering) rather than adding a liquid larval drench, since repeated moisture is a bigger risk to these plants than to a moisture-tolerant tropical.",
          "Orchids in bark mix behave differently from soil-grown plants: bark dries fast and unevenly, so the finger test can be misleading. Check moisture by weight (a dry pot is noticeably lighter) rather than by feel at the surface.",
        ],
      },
      {
        heading: "Seedlings, cuttings, and edibles",
        paragraphs: [
          "Seedlings and fresh cuttings are the opposite problem: their small root systems can't tolerate the mix drying as aggressively as an established houseplant, so \"let it dry\" needs to be gentler here — dry the very top surface layer only, not a full 1–2 inches, and lean on a sticky trap and good airflow rather than an aggressive drought. A thin layer of sand or vermiculite on the surface can help keep the top dry without drying the root zone a seedling depends on.",
          "Edible herbs and vegetables in containers are usually treated like any other houseplant for this purpose — dry the top layer between waterings — but avoid soil drenches close to harvest, and always follow the label on any product used near food crops.",
        ],
      },
    ],
  },
  "sticky-traps": {
    title: "Yellow sticky traps for fungus gnats",
    description:
      "How to place yellow sticky cards so they catch adult fungus gnats, how to read the catch, and why traps alone will not end an infestation.",
    kicker: "Adults",
    image: IMAGES.stickyTrap,
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
      "An optional, cautious option some sources describe — what a 1:4 dilution means, why extension guidance on it is mixed, and why it isn't part of the default plan on this site.",
    kicker: "Optional — use cautiously",
    image: IMAGES.kit,
    body: [
      {
        heading: "Why this is optional, not a default step",
        paragraphs: [
          "A diluted hydrogen peroxide drench is a widely repeated home suggestion, and the basic mechanism — oxygen release disrupting soft-bodied larvae on contact — is plausible. But it isn't uniformly recommended across university extension sources the way Bti is: some describe it as a reasonable short-term option, others don't mention it as a first-line treatment at all, and none of it is a substitute for fixing the underlying moisture problem. Treat it as an optional add-on you choose deliberately, not a required step.",
        ],
      },
      {
        heading: "If you decide to use it",
        paragraphs: [
          "The dilution commonly described is 1 part regular 3% pharmacy hydrogen peroxide to 4 parts water (roughly 1 cup peroxide to 4 cups water). Higher-strength salon or food-grade peroxide is not the same product and is not a simple ratio conversion — don't substitute it.",
          "Water the pot with the mix until the soil is evenly moist and a little drains, then let it drain fully and empty the saucer. This drench is a full watering, not an extra one — time it for whenever that pot was due for water anyway, and let the top of the mix dry out again before the next round, however long that takes for that specific plant.",
        ],
      },
      {
        heading: "Cautions",
        paragraphs: [
          "Spot-test on one plant first, especially delicate ferns and seedlings. Peroxide is a short-term contact treatment — it doesn't stay active in the mix the way Bti does, and repeated use may also affect beneficial soil microbes, which is part of why it isn't the default recommendation here.",
          "Succulents, cacti, and other drought-adapted plants are already vulnerable to rot from excess moisture — a repeated liquid drench schedule is a poor fit for them regardless of what's in the water. If gnats are breeding in a succulent's mix, fixing drainage and watering frequency matters more than any drench.",
        ],
      },
    ],
  },
  "mosquito-bits": {
    title: "Mosquito Bits (Bti) for fungus gnats",
    description:
      "How to use Bacillus thuringiensis israelensis — Mosquito Bits or Gnatrol — as a soil drench that kills fungus gnat larvae without harming plants, pets, or people when used as labeled.",
    kicker: "Best-supported larvicide",
    image: IMAGES.kit,
    body: [
      {
        heading: "What Bti is",
        paragraphs: [
          "Bacillus thuringiensis subspecies israelensis is a naturally occurring bacteria. It produces a toxin that affects the gut of certain fly larvae, including fungus gnats and mosquitoes. It does not work on adult gnats, and products labeled only for caterpillars (a different Bt strain) will not help.",
        ],
      },
      {
        heading: "How to use it on houseplants",
        paragraphs: [
          "Bti products are generally applied either sprinkled on the soil surface and watered in, or pre-mixed with water and applied as a drench. Follow the current label for the exact amount, preparation method, application site, and retreatment interval — directions vary by product and jurisdiction, and there is no single generic recipe that's correct across brands.",
          "Bti does not persist forever indoors, which is why labels typically call for reapplication on a schedule — follow what the label says, and use whether you're still seeing adults on traps as a guide to whether to continue past that. Treat each application as that pot's scheduled watering, not an addition to it, so the dry-top habit stays intact between rounds.",
        ],
      },
      {
        heading: "Why people call this the closer",
        paragraphs: [
          "Dry soil stops new eggs. Traps catch adults. Bti kills the larvae already in the pot. Together they cover the life cycle. Beneficial nematodes (Steinernema feltiae) are another strong larval option if Bti is hard to find where you live — but they're a living product, not a shelf-stable one. They need to arrive cold, be applied within days, and kept in consistently moist soil to survive, which makes them a better fit for someone who can apply them right away than a backup sitting in a cabinet.",
        ],
      },
    ],
  },
  prevention: {
    title: "How to prevent fungus gnats from coming back",
    description:
      "Bottom watering, sand top-dressing, quarantine for new plants, and how long to keep monitoring after adults stop appearing.",
    kicker: "Keep them gone",
    image: IMAGES.bottomWater,
    body: [
      {
        heading: "Keep monitoring after adults stop appearing",
        paragraphs: [
          "The life cycle from egg to adult is roughly 3–4 weeks in a warm home (slower in a cooler one), with larvae feeding for around two weeks — so eggs laid before you started treating can still finish developing after your trap counts look clear. There's no universal countdown that fits every case; instead, keep monitoring after adult numbers fall and continue moisture management and any labeled treatment long enough to account for remaining immature stages, rather than a fixed number of days. Treat a fresh trap catch as a sign to check the soil and continue, not a reason to start over. Stopping the moment the air looks clear is a common reason infestations restart.",
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
    a: "You may see fewer adults within days once moisture is managed and adults are being trapped, but complete control often takes several weeks, longer for a heavier infestation, because eggs and larvae keep hatching on their own schedule. Keep monitoring after adult numbers fall — don't assume it's over the moment things look clear.",
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
  {
    q: "Are Bti and hydrogen peroxide safe around pets and kids?",
    a: "Bti (Mosquito Bits/Gnatrol) is targeted at fly larvae and is widely used in organic growing, generally considered low-risk when used as labeled; hydrogen peroxide at the diluted, household-strength concentrations some sources describe is also generally considered low-risk, but this site treats it as an optional, cautious add-on rather than a default step. Sticky traps are genuinely hazardous to curious pets (they can stick to fur or be swallowed) — keep cards out of reach of paws and hands. Always follow the current product label for any packaged pesticide, since directions can differ by product and jurisdiction.",
  },
  {
    q: "Do fungus gnats spread from one plant to another?",
    a: "Yes. Adults are weak fliers but wander freely between nearby pots, and a female can lay eggs in any moist mix she finds — including a neighboring plant that was never infested to begin with. This is why treating only the pot you first noticed gnats in often fails: check and treat every plant in the same room or shelf, not just the source.",
  },
  {
    q: "Will a store-bought fogger or spray get rid of them?",
    a: "A fogger or contact spray kills adults on contact but does nothing to eggs, larvae, or pupae sealed in the soil — so the population rebuilds within days. If you use one, treat it as a short-term knockdown alongside a soil-directed treatment (Bti or peroxide), not a replacement for one, and always follow the product's label instructions.",
  },
  {
    q: "What about succulents, cacti, or orchids specifically?",
    a: "Fungus gnats are far less common in these because their mix is already fast-draining and watered infrequently. If you do see them, the usual cause is a mix or pot holding more moisture than that plant needs — fixing drainage matters more than adding a liquid drench, since repeated moisture is a bigger risk to a succulent than to a moisture-tolerant tropical. See the drying guide's note on succulents and orchid bark for specifics.",
  },
];
