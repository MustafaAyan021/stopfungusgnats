const SITE_URL = "https://stopfungusgnats.com";
const SITE_NAME = "Stop Fungus Gnats";
const LOGO_URL = `${SITE_URL}/favicon.svg`;
const AUTHOR_NAME = "Mustafa Ayan";

/** Page URL, matching the site's canonical shape: every path ends in a trailing slash. */
export function absoluteUrl(path: string): string {
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return new URL(normalized, SITE_URL).toString();
}

/** Asset URL (images, etc.) — resolved as-is, never slash-normalized. */
export function absoluteAssetUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
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
    },
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#author`,
    name: AUTHOR_NAME,
    url: `${SITE_URL}/about/`,
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
