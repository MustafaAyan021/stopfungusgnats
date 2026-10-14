/** Search-intent landing pages rendered by src/pages/[topic].astro. One slug = one query intent. */

export interface TopicSection {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  ordered?: boolean;
}

export interface Topic {
  slug: string;
  /** <title> without the site suffix — keep short enough that the suffix doesn't truncate. */
  title: string;
  /** Visible H1. */
  h1: string;
  kicker: string;
  description: string;
  directAnswer: string;
  sections: TopicSection[];
  faqs: { q: string; a: string }[];
  /** When set, a HowTo node is emitted from these steps. */
  howTo?: { name: string; totalTime?: string; steps: { name: string; text: string }[] };
  related: { href: string; label: string }[];
}

export const TOPICS: Topic[] = [
  {
    slug: "what-are-fungus-gnats",
    title: "What Are Fungus Gnats? Facts for Houseplant Owners",
    h1: "What are fungus gnats?",
    kicker: "The basics",
    description:
      "What fungus gnats are, where they live, what they eat, whether they're harmful, and why they show up around houseplants. A plain-language primer.",
    directAnswer:
      "Fungus gnats are small, dark, weak-flying flies (family Sciaridae, most often Bradysia species indoors) whose larvae live in moist potting mix and feed on fungi, decaying organic matter, and sometimes fine roots. The adults you see hovering around plants and windows are harmless to people. They don't bite and they don't sting. The soil-dwelling larvae are the real issue for plants, especially seedlings.",
    sections: [
      {
        id: "overview",
        heading: "Fungus gnats in one minute",
        paragraphs: [
          "Adult fungus gnats are roughly 1/8 inch long, with slender bodies, long legs, and long antennae, so they're often mistaken for tiny mosquitoes. They're poor fliers and tend to hop, flutter, and drift low over the soil rather than fly in a straight line.",
          "They're an indoor problem because houseplant mix gives them what they need year-round: constant moisture, organic material, and stable warmth. Outdoors the same group of flies lives in leaf litter and damp soil without anyone noticing.",
        ],
      },
      {
        id: "life-cycle",
        heading: "How they live",
        paragraphs: [
          "Females lay eggs in the top layer of damp mix. The eggs hatch into legless, translucent larvae with shiny black heads, which feed for roughly two weeks, then pupate near the surface and emerge as adults. Depending on temperature, a full cycle takes about three to four weeks, so populations can climb quickly when the soil stays wet.",
          "Adults live only about a week, but long enough to lay eggs. That's why killing the flying adults alone never ends an infestation.",
        ],
      },
      {
        id: "harm",
        heading: "Are fungus gnats harmful?",
        paragraphs: [
          "To people, no. They don't bite, sting, or transmit disease to humans. To plants, it depends on the plant. Established, healthy plants usually tolerate a modest number of larvae. Seedlings, cuttings, and stressed plants with small root systems can be set back, because larvae feed on fine roots and can provide an entry point for soil-borne disease.",
        ],
      },
      {
        id: "what-to-do",
        heading: "What to do if you have them",
        paragraphs: [
          "Control comes down to three things: let the mix dry appropriately between waterings, trap adults with yellow sticky cards, and use a Bti larvicide if moisture control isn't enough. The full step-by-step guide covers all of it.",
        ],
      },
    ],
    faqs: [
      {
        q: "What are fungus gnats?",
        a: "Small, dark, mosquito-like flies whose larvae live in moist potting mix. The adults are a nuisance but harmless to people; the larvae feed on fungi, decaying organic matter, and sometimes fine roots.",
      },
      {
        q: "Are fungus gnats the same as fruit flies?",
        a: "No. Fruit flies are tan with red eyes and breed in fermenting produce or drains. Fungus gnats are dark, slender, and breed in damp soil. The two need different treatments.",
      },
      {
        q: "Can fungus gnats kill a plant?",
        a: "A healthy mature plant rarely dies from them. Heavy larval feeding can seriously damage seedlings, cuttings, and plants that are already stressed or have small root systems.",
      },
    ],
    related: [
      { href: "/what-do-fungus-gnats-look-like", label: "What fungus gnats look like" },
      { href: "/fungus-gnat-life-cycle", label: "The fungus gnat life cycle" },
      { href: "/how-to-get-rid-of-fungus-gnats", label: "How to get rid of fungus gnats" },
    ],
  },

  {
    slug: "what-do-fungus-gnats-look-like",
    title: "What Do Fungus Gnats Look Like? Adults, Larvae, Eggs",
    h1: "What do fungus gnats look like?",
    kicker: "Identification",
    description:
      "How to recognize adult fungus gnats, larvae, and pupae by size, color, and behavior, and how to tell them apart from fruit flies and drain flies.",
    directAnswer:
      "Adult fungus gnats are tiny (about 1/8 inch), slender, dark gray to black flies with long legs, long antennae, and clear or smoky wings, shaped like miniature mosquitoes. They fly weakly and hover close to houseplant soil. Their larvae are thin, translucent-white worms up to about 1/4 inch long with a shiny black head, found in the top inch or two of damp potting mix.",
    sections: [
      {
        id: "adults",
        heading: "Adult fungus gnats",
        list: [
          "Size: about 1/8 inch (2–4 mm), smaller than most house flies.",
          "Color: dark gray to black body, wings clear to lightly smoky.",
          "Shape: slender, delicate, with long legs and long antennae. Often called \"tiny mosquitoes\" for that reason.",
          "Wing detail: a Y-shaped vein pattern is visible under magnification.",
          "Behavior: weak, erratic flight close to the soil, windows, and lights. They often lift off when you water or move the pot.",
        ],
      },
      {
        id: "larvae",
        heading: "Larvae, eggs, and pupae",
        paragraphs: [
          "Larvae are legless, translucent-white to clear, with a distinctive shiny black head capsule. You may see the dark gut through the body. They live in the top inch or two of the mix and sometimes leave faint, slimy trails on the surface.",
          "Eggs are tiny, oval, and pale, laid in the mix and effectively invisible without magnification. Pupae are brief, immobile, and found near the surface. You'll almost never spot them in practice.",
          "To confirm larvae, bury a half-inch cube of raw potato just under the surface for a day or two and check its underside.",
        ],
      },
      {
        id: "lookalikes",
        heading: "Easy to confuse with",
        list: [
          "Fruit flies: tan or brown bodies, red eyes, rounder shape. They hang around ripe fruit and drains, not houseplant soil.",
          "Drain flies: fuzzy, moth-like, with broad hairy wings. They rest on walls near sinks and drains.",
          "Springtails: wingless, jump instead of flying, and often seen on the soil surface or in a saucer.",
          "Shore flies: stocky, with pale spots on dark wings, and common around algae-covered soil.",
        ],
      },
    ],
    faqs: [
      {
        q: "What do fungus gnats look like?",
        a: "Adults are tiny, dark, slender flies with long legs and antennae that resemble miniature mosquitoes. Larvae are translucent white with a shiny black head.",
      },
      {
        q: "How big are fungus gnats?",
        a: "Adults are about 1/8 inch long. Larvae reach up to about 1/4 inch.",
      },
      {
        q: "Are those tiny black flies near my plants fungus gnats?",
        a: "If they're small, dark, slender, and hover or hop low over the soil (and lift off when you water), very likely yes. Flies clustered at the fruit bowl are probably fruit flies, and fuzzy moth-like flies near drains are drain flies.",
      },
    ],
    related: [
      { href: "/fungus-gnat-larvae", label: "How to identify fungus gnat larvae" },
      { href: "/fungus-gnats-vs-fruit-flies", label: "Fungus gnats vs. fruit flies" },
      { href: "/identify", label: "Interactive pest identifier" },
    ],
  },

  {
    slug: "do-fungus-gnats-bite",
    title: "Do Fungus Gnats Bite? What's Actually Biting You",
    h1: "Do fungus gnats bite?",
    kicker: "Safety",
    description:
      "Do fungus gnats bite humans or pets? The short answer, why they're harmless to people, and what could be causing bites you're noticing.",
    directAnswer:
      "No, fungus gnats don't bite people or pets. Adult fungus gnats have mouthparts that aren't built for biting, and they don't feed on blood. They're annoying when they fly into your face, drink, or screen, but they're harmless to you. If you're getting actual bites, something else is the cause.",
    sections: [
      {
        id: "why-not",
        heading: "Why fungus gnats don't bite",
        paragraphs: [
          "Adult fungus gnats live about a week, mostly to mate and lay eggs. Their mouthparts are weak and not adapted for piercing skin, and they have no need for a blood meal. The feeding stage is the larva, and that happens in the soil, on fungi, organic matter, and fine roots. Larvae don't bite people either.",
          "They're also not known to transmit human disease, so the risk is a nuisance, not a health issue. Between plants, though, they can help spread soil pathogens, which is one more reason to deal with them.",
        ],
      },
      {
        id: "what-bites",
        heading: "If you're being bitten, it's probably one of these",
        list: [
          "Biting midges (\"no-see-ums\"): tiny, can pass through ordinary window screens, and do bite, often around dusk.",
          "Mosquitoes: look similar to fungus gnats at a glance, but are larger and bite.",
          "Fleas, mites, or bed bugs: small bites, often in clusters, not related to flying insects around plants.",
        ],
      },
      {
        id: "check",
        heading: "How to check what you have",
        paragraphs: [
          "If the flies are hovering around houseplant soil and lift off when you water, they're almost certainly fungus gnats. If you wake with bites, or get bitten outdoors or near screens at dusk, look elsewhere. Use the identification guide to compare the lookalikes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do fungus gnats bite humans?",
        a: "No. Adult fungus gnats don't bite or sting people, and larvae live in soil and don't bite either.",
      },
      {
        q: "Can fungus gnats bite dogs and cats?",
        a: "No. They don't bite pets. Pets can show interest in chasing them, and sticky traps can be a hazard to curious animals, so keep traps out of reach.",
      },
      {
        q: "Why do fungus gnats fly in my face?",
        a: "Adults are attracted to light and to the carbon dioxide and moisture you give off. They're harmless, but they hover near faces, drinks, and screens.",
      },
      {
        q: "Can fungus gnats make you sick?",
        a: "They're not known to transmit disease to people. Their significance is for plants, where larvae feed on roots and adults can carry soil pathogens between pots.",
      },
    ],
    related: [
      { href: "/what-do-fungus-gnats-look-like", label: "What fungus gnats look like" },
      { href: "/fungus-gnats-vs-fruit-flies", label: "Fungus gnats vs. fruit flies" },
      { href: "/faq", label: "More fungus gnat questions" },
    ],
  },

  {
    slug: "how-to-kill-fungus-gnats",
    title: "How to Kill Fungus Gnats: Adults, Larvae & Eggs",
    h1: "How to kill fungus gnats",
    kicker: "Kill them at every stage",
    description:
      "How to kill fungus gnats at every stage: sticky traps for adults, Bti and drying for larvae, and what actually works for eggs. A tested order of attack.",
    directAnswer:
      "To kill fungus gnats you have to hit every life stage. Trap adults with yellow sticky cards, kill larvae with a Bti product (Mosquito Bits or Gnatrol) or beneficial nematodes, and stop new eggs by letting the top of the soil dry between waterings. Killing only the flying adults won't end an infestation, because eggs, larvae, and pupae in the soil keep producing new ones.",
    sections: [
      {
        id: "adults",
        heading: "Killing adults",
        paragraphs: [
          "Place yellow sticky cards flat on the soil or stake them upright just above it. Adults are attracted to yellow and get stuck before laying eggs. Cards also tell you how big the problem is and whether treatment is working. A fogger or aerosol spray may knock down flying adults temporarily, but it doesn't reach the stages in the soil.",
        ],
      },
      {
        id: "larvae",
        heading: "Killing larvae",
        paragraphs: [
          "Larvae are where the infestation lives, and two options have the best support. Bti (Bacillus thuringiensis israelensis), sold as Mosquito Bits or Gnatrol, is a bacterium that is toxic to fly larvae and not to adults, plants, or most other organisms. Beneficial nematodes (Steinernema feltiae) are microscopic worms that hunt larvae in the soil.",
          "A diluted hydrogen peroxide drench is a common home option, but guidance on it is mixed, so treat it as optional and cautious.",
        ],
      },
      {
        id: "eggs",
        heading: "Killing eggs and stopping new ones",
        paragraphs: [
          "Eggs need consistently moist mix to hatch. Letting the top inch or two dry between waterings (as the plant tolerates) is the most effective way to cut them off. Bottom-watering and a layer of sand or grit on top help keep the surface dry.",
        ],
      },
      {
        id: "order",
        heading: "The order that works",
        list: [
          "Stop overwatering and let the surface dry.",
          "Put out sticky cards to catch adults and monitor.",
          "Apply Bti to every infested pot per the label, replacing a scheduled watering, not adding to it.",
          "Repeat per the product label and keep monitoring for at least two to three weeks after adults stop appearing.",
        ],
        ordered: true,
      },
      {
        id: "what-doesnt",
        heading: "What doesn't kill them well",
        paragraphs: [
          "Vinegar traps are built for fruit flies. Cinnamon and essential oils have little houseplant-specific evidence behind them. Sprays on the leaves don't reach larvae in the soil. See the natural-methods ratings for the honest breakdown.",
        ],
      },
    ],
    howTo: {
      name: "How to kill fungus gnats",
      totalTime: "P3W",
      steps: [
        { name: "Let the soil dry", text: "Stop overwatering and let the top 1–2 inches of mix dry between waterings, as the plant tolerates." },
        { name: "Trap the adults", text: "Place yellow sticky cards at soil level to catch and count egg-laying adults." },
        { name: "Treat the larvae", text: "Apply a Bti product (Mosquito Bits or Gnatrol) following its label, in place of a scheduled watering." },
        { name: "Repeat and monitor", text: "Reapply per the label and keep checking traps for two to three weeks after adults disappear." },
      ],
    },
    faqs: [
      {
        q: "How do you kill fungus gnats fast?",
        a: "Sticky cards cut adult numbers within days and Bti begins killing larvae soon after application, but total control takes weeks because eggs and pupae in the soil keep developing.",
      },
      {
        q: "What kills fungus gnat larvae?",
        a: "Bti (Mosquito Bits or Gnatrol) and beneficial nematodes (Steinernema feltiae) are the best-supported options, along with letting the soil dry. Hydrogen peroxide is an optional, less consistently supported choice.",
      },
      {
        q: "Does rubbing alcohol kill fungus gnats?",
        a: "Alcohol on adults may kill those it contacts, but it doesn't treat soil larvae and can harm plant tissue and roots, so it isn't recommended as a treatment.",
      },
      {
        q: "Will fungus gnats go away on their own?",
        a: "Only if you remove their breeding conditions. If the soil stays wet they keep cycling, so the population usually persists or grows.",
      },
    ],
    related: [
      { href: "/guides/mosquito-bits", label: "Mosquito Bits (Bti) guide" },
      { href: "/guides/sticky-traps", label: "Yellow sticky traps" },
      { href: "/fungus-gnat-treatments", label: "All fungus gnat treatments" },
      { href: "/how-to-get-rid-of-fungus-gnats", label: "The complete elimination guide" },
    ],
  },

  {
    slug: "fungus-gnats-in-house",
    title: "Fungus Gnats in the House: Find and Fix the Source",
    h1: "Fungus gnats in your house",
    kicker: "Whole-home control",
    description:
      "Fungus gnats in the house: how to find where they're breeding (it isn't always a plant), clear every room, and keep them from coming back.",
    directAnswer:
      "To get rid of fungus gnats in your house, find every moist, organic breeding source, not just the plant you noticed them near. Check all potted plants, saucers and cachepots, drains, and any wet organic debris, let the soil dry, put sticky traps in each affected room, and treat larvae in infested pots with a Bti product. Treating one pot while another stays wet is the most common reason they keep coming back.",
    sections: [
      {
        id: "why-house",
        heading: "Why they end up in your house",
        paragraphs: [
          "Gnats get in on new plants, bagged potting mix, or through open windows, then settle wherever it's damp. Indoor air stays warm and stable, so a handful of gnats can turn into a population within a month or two.",
        ],
      },
      {
        id: "find-source",
        heading: "Find every breeding source",
        list: [
          "All houseplants in the room, including ones that look healthy. Check the top of the mix for damp, fungus, or algae.",
          "Saucers, trays, and decorative cachepots holding standing water.",
          "Large, rarely used plants whose soil stays wet for weeks.",
          "Seedling trays and cuttings in water or damp mix.",
          "Drains, garbage disposals, and trash cans (if they look more fuzzy and moth-like, you may have drain flies instead).",
          "Overripe fruit, if the flies hang around the kitchen. That's more likely fruit flies.",
        ],
      },
      {
        id: "room-by-room",
        heading: "Clear the house room by room",
        paragraphs: [
          "Start in the room where you see the most adults. Dry out the surface of every pot, empty saucers, set a sticky card in or beside each plant, and treat the infested pots with Bti. Move to the next room once that one is under control. Isolate any new plant for a week or two with a sticky card before it joins the rest.",
          "Sticky cards on windowsills and near lights help you see how widespread the problem is. Count them weekly. A falling count is the best sign you're winning.",
        ],
      },
      {
        id: "prevent",
        heading: "Keep them out",
        paragraphs: [
          "Bottom-water, use fresh sterile potting mix, top-dress with sand or grit, and don't let water sit in saucers. A small number of cards left out for monitoring will warn you early if gnats return.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I get rid of fungus gnats in my house?",
        a: "Find all breeding sources, let soil dry between waterings, trap adults with sticky cards in each room, and treat infested pots with Bti. Expect several weeks for complete control.",
      },
      {
        q: "Where do fungus gnats come from in a house with no plants?",
        a: "Without plants, look for damp organic sources: drains with buildup, wet trash, overwatered soil in a potted tree or planter, or leaking areas with mold. Flies near drains are often drain flies, not fungus gnats.",
      },
      {
        q: "Can fungus gnats live in my carpet or walls?",
        a: "They need damp organic material to breed, so they don't breed in dry carpet. Adults may rest on walls and windows, but the source is nearly always moist soil or another damp organic spot.",
      },
    ],
    related: [
      { href: "/why-do-i-have-fungus-gnats", label: "Where fungus gnats come from" },
      { href: "/fungus-gnats-vs-fruit-flies", label: "Fungus gnats vs. fruit flies and drain flies" },
      { href: "/plan", label: "The 7-day starter plan" },
    ],
  },

  {
    slug: "how-to-get-rid-of-fungus-gnats-in-plants",
    title: "How to Get Rid of Fungus Gnats in Plants (Soil Fix)",
    h1: "How to get rid of fungus gnats in plants",
    kicker: "Plant-by-plant",
    description:
      "How to get rid of fungus gnats in houseplants and potted plants: dry the mix, trap adults, treat larvae, and adjust care for succulents, seedlings, and tropicals.",
    directAnswer:
      "To get rid of fungus gnats in plants, treat the soil, because that's where the larvae live. Let the top 1–2 inches of mix dry between waterings (less aggressively for seedlings and moisture-loving plants), trap adults with yellow sticky cards, and drench with a Bti product such as Mosquito Bits or Gnatrol in place of a scheduled watering. Repeat per the label and keep monitoring for several weeks.",
    sections: [
      {
        id: "soil",
        heading: "Start with the soil",
        paragraphs: [
          "Fungus gnat larvae live in the top inch or two of potting mix, so the fix is in the pot. Check the surface by finger: if it's still damp an inch down, hold off watering. Bottom-watering lets the roots drink while the surface stays dry. Empty saucers after 15–20 minutes.",
        ],
      },
      {
        id: "treat",
        heading: "Treat the larvae",
        paragraphs: [
          "Apply a Bti product to the soil, following the product label for amount, method, and reapplication. Use it as your watering for that pot, not on top of one. Beneficial nematodes are an alternative if you can get them fresh.",
          "If you're still seeing a problem, repotting into fresh, well-draining mix and rinsing off as much old mix as the plant tolerates can remove many larvae, though it won't remove eggs on nearby surfaces.",
        ],
      },
      {
        id: "plant-type",
        heading: "Adjust for the plant type",
        list: [
          "Tropicals and ferns: can't go bone dry, so water less often, use a chunkier mix, and top-dress with sand so the surface dries.",
          "Succulents and cacti: gnats usually mean the mix is holding too much water, so fix drainage and watering rather than drenching.",
          "Orchids in bark: judge dryness by pot weight, not by feel.",
          "Seedlings and cuttings: dry only the very top layer, and act early because larvae can damage small root systems.",
          "Edibles: follow product labels for use near food crops and avoid drenches close to harvest.",
        ],
      },
      {
        id: "monitor",
        heading: "Monitor before you stop",
        paragraphs: [
          "Keep sticky cards out until they stay clean for a couple of weeks. A clean card doesn't prove larvae are gone, so check with a potato test if you're unsure.",
        ],
      },
    ],
    howTo: {
      name: "How to get rid of fungus gnats in plants",
      totalTime: "P3W",
      steps: [
        { name: "Check the soil", text: "Feel the top 1–2 inches. Don't water until it has dried to the level the plant tolerates." },
        { name: "Trap adults", text: "Set yellow sticky cards at soil level in each affected pot." },
        { name: "Apply Bti", text: "Drench with Bti per the product label in place of a scheduled watering." },
        { name: "Bottom-water and top-dress", text: "Water from below and cover the surface with sand or grit to discourage egg-laying." },
        { name: "Monitor", text: "Keep checking cards for several weeks and reapply per the label if adults keep appearing." },
      ],
    },
    faqs: [
      {
        q: "How do I get rid of fungus gnats in my plants naturally?",
        a: "Let the soil dry between waterings, use yellow sticky traps, and use Bti, a naturally occurring bacterium that targets fly larvae. Cinnamon and essential oils have limited evidence.",
      },
      {
        q: "Do I need to repot a plant with fungus gnats?",
        a: "Not always. Repotting into fresh, well-draining mix can help if the old mix stays soggy, but you still need to manage watering and trap adults.",
      },
      {
        q: "Are fungus gnats bad for my plant?",
        a: "A light infestation rarely harms a mature plant. Heavy larval feeding can damage seedlings, cuttings, and stressed plants.",
      },
    ],
    related: [
      { href: "/guides/let-soil-dry", label: "How to let the soil dry safely" },
      { href: "/fungus-gnats-in-seedlings", label: "Fungus gnats in seedlings" },
      { href: "/fungus-gnats-in-succulents", label: "Fungus gnats in succulents" },
    ],
  },

  {
    slug: "does-neem-oil-kill-fungus-gnats",
    title: "Does Neem Oil Kill Fungus Gnats? Honest Answer",
    h1: "Does neem oil kill fungus gnats?",
    kicker: "Natural methods",
    description:
      "Does neem oil kill fungus gnats? What neem can and can't do, why a leaf spray misses the larvae, and what works better, including Bti.",
    directAnswer:
      "Neem oil can help, but it isn't the best-supported fix. Neem's active compound, azadirachtin, acts as an insect growth regulator and feeding deterrent, so a neem soil drench may affect larvae. A leaf spray does little, because larvae live in the soil. Evidence specific to fungus gnats is limited compared with Bti (Mosquito Bits or Gnatrol), so use neem as a supplement, not your main treatment.",
    sections: [
      {
        id: "how",
        heading: "How neem works",
        paragraphs: [
          "Neem products come from the neem tree. Azadirachtin disrupts insect feeding and development rather than killing instantly, so effects take days. Neem oil also works as a contact oil on soft-bodied pests it touches directly.",
        ],
      },
      {
        id: "spray-vs-drench",
        heading: "Spray vs. soil drench",
        paragraphs: [
          "Spraying neem on the leaves or soil surface may hit a few adults, but it won't reach the larvae feeding below the surface, which is where the population is. A properly diluted neem soil drench is the version that can reach larvae, and it's the only form of neem worth considering for fungus gnats.",
          "Follow the product label carefully. Concentrations vary, oils can damage sensitive plants, and a drench is still a watering event, so it needs to replace a scheduled watering rather than add to it.",
        ],
      },
      {
        id: "better",
        heading: "What works better",
        paragraphs: [
          "Letting the soil dry, trapping adults with yellow sticky cards, and treating larvae with Bti have the strongest support from university extension sources. If you already have neem on hand you can use it alongside those, but don't expect it to carry the whole job.",
        ],
      },
      {
        id: "cautions",
        heading: "Cautions",
        list: [
          "Test on one leaf or plant first, especially delicate or seedling plants.",
          "Don't apply neem sprays in strong direct sun.",
          "Check the label before combining neem with beneficial nematodes or other treatments.",
          "Keep products away from pets and children, and follow edible-crop directions on the label.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does neem oil kill fungus gnat larvae?",
        a: "A neem soil drench may affect larvae through its growth-regulating effect, but evidence for fungus gnats specifically is limited, and Bti is better supported.",
      },
      {
        q: "Can I spray neem oil on fungus gnats?",
        a: "A spray can hit adults it contacts, but it doesn't treat the larvae in the soil, so it won't end an infestation.",
      },
      {
        q: "Is neem oil or Mosquito Bits better for fungus gnats?",
        a: "Mosquito Bits (Bti) targets fly larvae specifically and has stronger support. Neem is a broader-spectrum option and a reasonable add-on.",
      },
    ],
    related: [
      { href: "/natural-fungus-gnat-control", label: "Natural methods, honestly rated" },
      { href: "/guides/mosquito-bits", label: "Mosquito Bits (Bti) guide" },
      { href: "/how-to-kill-fungus-gnats", label: "How to kill fungus gnats" },
    ],
  },
];

export const TOPIC_BY_SLUG: Record<string, Topic> = Object.fromEntries(TOPICS.map((t) => [t.slug, t]));
