import pageDates from "@/data/page-dates.json";

const SITE_URL = "https://stopfungusgnats.com";
const SITE_NAME = "Stop Fungus Gnats";
const LOGO_URL = `${SITE_URL}/logo.png`;
const AUTHOR_NAME = "Mustafa Ayan";
/** Public profile URLs (LinkedIn, GitHub, etc.) that verify the author. Add real ones only. */
const AUTHOR_SAME_AS: string[] = ["https://github.com/MustafaAyan021"];

/** Page URL, matching the site's canonical shape: every path ends in a trailing slash. */
export function absoluteUrl(path: string): string {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return new URL(normalized, SITE_URL).toString();
}

/** Asset URL (images, etc.) — resolved as-is, never slash-normalized. */
export function absoluteAssetUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

const DATES = pageDates as Record<string, { published: string; modified: string }>;

/**
 * datePublished / dateModified for a page path, from src/data/page-dates.json (git-derived —
 * regenerate with `npm run page-dates`). Pass `kind` for data-driven routes ([topic], guides/[slug]).
 */
export function pageDatesFor(path: string, kind?: "topic" | "guide") {
  const key = kind ? `__${kind}__` : path.replace(/\/$/, "") || "/";
  const d = DATES[key];
  if (!d) throw new Error(`No page dates for ${key} — run \`npm run page-dates\``);
  return { datePublished: d.published, dateModified: d.modified };
}

/** Resolve dates from a request pathname: guides and topic landing pages map to their data-file entry. */
export function pageDatesForRoute(pathname: string) {
  const route = pathname.replace(/\/$/, "") || "/";
  if (route.startsWith("/guides/")) return pageDatesFor(route, "guide");
  return DATES[route] ? pageDatesFor(route) : pageDatesFor(route, "topic");
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    email: "hello@stopfungusgnats.com",
    founder: { "@id": `${SITE_URL}/#author` },
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#author`,
    name: AUTHOR_NAME,
    url: `${SITE_URL}/about/`,
    // Deliberately honest: the site discloses the author is an independent publisher, not a
    // credentialed horticulturist (see /about and /editorial-policy). Don't add credentials here.
    jobTitle: "Independent publisher",
    description:
      "Independent publisher of Stop Fungus Gnats. Content is written against university extension and public-health sources, not personal horticultural credentials.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    knowsAbout: [
      "Fungus gnats",
      "Houseplant pest identification",
      "Integrated pest management for houseplants",
      "Bacillus thuringiensis israelensis (Bti)",
    ],
    ...(AUTHOR_SAME_AS.length ? { sameAs: AUTHOR_SAME_AS } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "A specialist resource for identifying, treating, and preventing fungus gnats on houseplants.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export type WebPageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";

/** Page-level node for pages that aren't articles (home, about, contact, policy pages). */
export function webPageSchema(input: {
  type?: WebPageType;
  name: string;
  description: string;
  path: string;
  about?: object;
}) {
  const { datePublished, dateModified } = pageDatesFor(input.path);
  const url = absoluteUrl(input.path);
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    datePublished,
    dateModified,
    inLanguage: "en-US",
    about: input.about,
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** Prepends Home to match the visible <Breadcrumbs> trail — pass only the crumbs after Home. */
export function breadcrumbSchema(crumbs: Crumb[]) {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqSchema(items: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export interface ArticleInput {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified: string;
}

export function articleSchema(input: ArticleInput) {
  return {
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    url: absoluteUrl(input.path),
    image: input.image ? absoluteAssetUrl(input.image) : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { "@id": `${SITE_URL}/#author` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

export function howToSchema(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
  totalTime?: string;
  steps: HowToStep[];
}) {
  return {
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    image: input.image ? absoluteAssetUrl(input.image) : undefined,
    totalTime: input.totalTime,
    step: input.steps.map((step) => ({
      "@type": "HowToStep",
      name: step.name,
      text: step.text,
    })),
  };
}

/** Wrap one or more schema nodes in a single @graph document. */
export function schemaGraph(...nodes: (object | undefined)[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
