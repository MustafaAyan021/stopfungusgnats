import type { APIRoute } from "astro";
import { GUIDES } from "@/data/content";
import { TOPICS } from "@/data/topics";
import { absoluteUrl } from "@/lib/seo";

interface Entry {
  title: string;
  path: string;
  description: string;
}

// Hand-written pages (their title/description live in each page's frontmatter). Topic and
// guide pages below are generated from their data files so they can't drift.
const CORE: Entry[] = [
  {
    title: "How to Get Rid of Fungus Gnats: Step-by-Step Guide",
    path: "/how-to-get-rid-of-fungus-gnats",
    description: "The complete guide: confirm the pest, find the source, dry the mix, trap adults, and use Bti if needed.",
  },
  {
    title: "7-Day Fungus Gnat Starter Plan",
    path: "/plan",
    description: "A first-week checklist: manage moisture, trap adults, and treat larvae if needed.",
  },
  {
    title: "Identify Fungus Gnats vs. Fruit Flies, Drain Flies, and Springtails",
    path: "/identify",
    description: "How to tell small flying pests apart by appearance, behavior, and where they breed.",
  },
  {
    title: "Fungus Gnat Treatment: Every Method Compared",
    path: "/fungus-gnat-treatments",
    description: "Sticky traps, Bti (Mosquito Bits), drying the soil, and hydrogen peroxide: what each reaches and which to use first.",
  },
  {
    title: "Natural Fungus Gnat Control: What Actually Works",
    path: "/natural-fungus-gnat-control",
    description: "Evidence-graded natural remedies, from Bti and nematodes to cinnamon and vinegar traps.",
  },
  {
    title: "Fungus Gnat Life Cycle: Egg to Adult, Explained",
    path: "/fungus-gnat-life-cycle",
    description: "How long each stage takes indoors and which stage each treatment reaches.",
  },
  {
    title: "How to Identify Fungus Gnat Larvae",
    path: "/fungus-gnat-larvae",
    description: "What larvae look like in potting soil and what finding them means for treatment.",
  },
  {
    title: "Where Do Fungus Gnats Come From? Why You Have Them",
    path: "/why-do-i-have-fungus-gnats",
    description: "Wet soil, new plants, bagged mix, and other reasons they show up indoors.",
  },
  {
    title: "Fungus Gnats vs Fruit Flies: How to Tell the Difference",
    path: "/fungus-gnats-vs-fruit-flies",
    description: "Look, behavior, and breeding site for fungus gnats, fruit flies, drain flies, and springtails.",
  },
  {
    title: "Fungus Gnats After Bringing Home a New Plant",
    path: "/new-plant-fungus-gnats",
    description: "Why new plants are a common entry point and how to quarantine one.",
  },
  {
    title: "Fungus Gnats in Seedlings",
    path: "/fungus-gnats-in-seedlings",
    description: "Why seedlings are more vulnerable and how to manage moisture without stressing small roots.",
  },
  {
    title: "Fungus Gnats in Succulents and Cacti",
    path: "/fungus-gnats-in-succulents",
    description: "Why gnats are unusual in succulents and what it means when they show up anyway.",
  },
  {
    title: "How to Know Your Fungus Gnat Treatment Is Working",
    path: "/how-to-know-treatment-is-working",
    description: "What real progress looks like and how to tell a slow-but-working plan from a stalled one.",
  },
  {
    title: "Fungus Gnats Won't Go Away? Troubleshooting",
    path: "/fungus-gnat-troubleshooting",
    description: "A self-check for why gnats keep coming back or traps stop catching.",
  },
  {
    title: "Fungus Gnat FAQ",
    path: "/faq",
    description: "Short answers to common questions about fungus gnats.",
  },
];

const ABOUT: Entry[] = [
  {
    title: "About",
    path: "/about",
    description: "Who runs the site, what it is, and what it doesn't claim to be.",
  },
  {
    title: "Editorial Policy",
    path: "/editorial-policy",
    description: "How claims are sourced and kept up to date.",
  },
  {
    title: "Disclaimer",
    path: "/disclaimer",
    description: "What the site is and isn't a substitute for.",
  },
  { title: "Contact", path: "/contact", description: "Report a correction or ask a question." },
];

const line = (e: Entry) => `- [${e.title}](${absoluteUrl(e.path)}): ${e.description}`;

export const GET: APIRoute = () => {
  const topics = TOPICS.map((t) => line({ title: t.title, path: `/${t.slug}`, description: t.description }));
  const guides = Object.entries(GUIDES).map(([slug, g]) =>
    line({ title: g.title, path: `/guides/${slug}`, description: g.description }),
  );

  const body = `# Stop Fungus Gnats

> An independent, single-topic resource on identifying, treating, and preventing fungus gnats on houseplants. Written by Mustafa Ayan, an independent publisher (not a horticulturist or entomologist); factual claims are sourced from university extension and public-health references listed on the pages. Each page opens with a short direct answer.

Key facts the site is consistent about:
- Fungus gnat larvae live in moist potting mix; adults are harmless to people and don't bite.
- A full life cycle takes roughly three to four weeks indoors, so generations overlap and one treatment rarely ends an infestation.
- The approach is to stack methods: dry the mix as far as each plant tolerates, trap adults with yellow sticky cards, and use a Bti product labeled for fungus gnats if needed, following the current label.
- Complete control usually takes several weeks, not days.

## Guides
${CORE.map(line).join("\n")}

## Common questions
${topics.join("\n")}

## Treatment methods
${guides.join("\n")}

## About and policies
${ABOUT.map(line).join("\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
