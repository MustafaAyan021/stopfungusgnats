import { Link } from "@tanstack/react-router";
import { SITE } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-lg">{SITE.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            A practical guide for houseplant owners who want fungus gnats gone — not another
            recycled pest article.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium">Guides</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link to="/" className="hover:text-fg">
                How to get rid of fungus gnats
              </Link>
            </li>
            <li>
              <Link to="/identify" className="hover:text-fg">
                Identify the pest
              </Link>
            </li>
            <li>
              <Link to="/plan" className="hover:text-fg">
                7-day plan
              </Link>
            </li>
            <li>
              <Link to="/guides/$slug" params={{ slug: "mosquito-bits" }} className="hover:text-fg">
                Mosquito Bits / Bti
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium">Note</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Educational houseplant care only. Follow product labels. If a plant is collapsing or
            pets eat treated mix, talk to a local nursery or vet.
          </p>
        </div>
      </div>
    </footer>
  );
}
