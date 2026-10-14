// Regenerates src/data/page-dates.json from git history so each page's
// datePublished / dateModified (JSON-LD + visible byline) reflects when that page's
// own source last changed. Run after content edits: `npm run page-dates`.
// [topic] and guides/[slug] pages are data-driven, so they take their dates from the
// data file that holds their content. Needs full git history (not a shallow clone).
import { execFileSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const PAGES_DIR = "src/pages";
function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function gitDates(file) {
  const out = execFileSync("git", ["log", "--follow", "--format=%as", "--", file], { encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
  if (!out.length) return null;
  return { published: out[out.length - 1], modified: out[0] };
}

const dates = {};
for (const file of walk(PAGES_DIR)) {
  const rel = relative(PAGES_DIR, file);
  if (!rel.endsWith(".astro") || rel === "404.astro") continue;
  const d = gitDates(file);
  if (!d) continue;
  if (rel === "[topic].astro") dates["__topic__"] = gitDates("src/data/topics.ts") ?? d;
  else if (rel === "guides/[slug].astro") dates["__guide__"] = gitDates("src/data/content.ts") ?? d;
  else dates[rel === "index.astro" ? "/" : `/${rel.replace(/\.astro$/, "")}`] = d;
}

writeFileSync("src/data/page-dates.json", JSON.stringify(dates, null, 2) + "\n");
console.log(`Wrote ${Object.keys(dates).length} page dates`);
