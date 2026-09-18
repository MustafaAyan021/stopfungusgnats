import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Layers, ShieldCheck } from "lucide-react";
import { PestIdentifier } from "@/components/pest-identifier";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { FAQS, METHODS } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "How to Get Rid of Fungus Gnats | Stop Fungus Gnats",
      },
      {
        name: "description",
        content:
          "How to get rid of fungus gnats for good: identify them, dry the soil, catch adults on sticky traps, kill larvae with Bti or peroxide, and prevent the next generation.",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteShell>
      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Houseplant pest guide
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              How to get rid of fungus gnats
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Those tiny dark flies over your pots are breeding in wet mix. Stop the nursery,
              catch the adults, kill the larvae. Most infestations break in one to three weeks.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/plan">Start the 7-day plan</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/identify">Identify the pest</Link>
              </Button>
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border border-border">
            <img
              src="/images/hero.jpg"
              alt="Indoor houseplant on a windowsill with damp soil where fungus gnats breed"
              className="aspect-video w-full object-cover"
              width={1792}
              height={1008}
            />
          </figure>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Quick answer
            </p>
            <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
              Dry the top, trap the adults, treat the larvae
            </h2>
            <ol className="mt-6 grid gap-4">
              {[
                "Let the top 1–2 inches of mix dry before you water again. Empty saucers.",
                "Stand yellow sticky cards at soil level to catch egg-laying adults.",
                "Drench larvae with Bti (Mosquito Bits) or a 1:4 mix of 3% hydrogen peroxide and water.",
                "Keep that up for two weeks after the last fly. One soggy week restarts the cycle.",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary font-display text-sm text-primary-foreground tabular-nums">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed sm:text-base">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              First: confirm the pest
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight">
              Fungus gnats, fruit flies, or drain flies?
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Wrong pest, wasted week. Fungus gnats live in potting mix. Fruit flies live in
              kitchens. Drain flies live in pipes. Three answers will sort it.
            </p>
            <figure className="mt-6 overflow-hidden rounded-lg border border-border">
              <img
                src="/images/macro.jpg"
                alt="Close-up of a fungus gnat on moist potting soil"
                className="aspect-4/3 w-full object-cover"
                width={1600}
                height={1200}
              />
            </figure>
          </div>
          <PestIdentifier />
        </section>

        <section className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Why they keep coming back
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl tracking-tight">
              You are fighting a life cycle, not a few flies
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Eggs in wet mix",
                  body: "Females lay in moist organic soil. Eggs hatch in a few days.",
                },
                {
                  title: "Larvae underground",
                  body: "White maggots with black heads feed for about two weeks. Traps miss them.",
                },
                {
                  title: "Short-lived adults",
                  body: "Adults are weak fliers. Kill them and the next wave still emerges from the pot.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="rounded-lg border border-border bg-bg p-5"
                >
                  <h3 className="font-display text-xl tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                Methods that work
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight">
                Stack three attacks at once
              </h2>
            </div>
            <Link
              to="/plan"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary"
            >
              Follow them in order
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {METHODS.map((method) => (
              <Link
                key={method.slug}
                to="/guides/$slug"
                params={{ slug: method.slug }}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-[var(--motion-quick)] hover:border-primary"
              >
                <img
                  src={method.image}
                  alt=""
                  className="aspect-video w-full object-cover"
                />
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {method.kicker} · {method.time}
                  </p>
                  <h3 className="mt-1 font-display text-xl tracking-tight group-hover:text-primary">
                    {method.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{method.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3">
            {[
              {
                icon: Droplets,
                title: "Water from below",
                body: "Bottom watering keeps the surface drier so females have nowhere useful to lay.",
              },
              {
                icon: Layers,
                title: "Cover the soil",
                body: "A half-inch of coarse sand or grit after larvae are down makes egg-laying harder.",
              },
              {
                icon: ShieldCheck,
                title: "Quarantine new plants",
                body: "Nursery mix is a common hitchhike. One sticky card for a week before they join the shelf.",
              },
            ].map((item) => (
              <article key={item.title}>
                <item.icon className="size-5 text-primary" strokeWidth={1.6} />
                <h3 className="mt-3 font-display text-xl tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl tracking-tight">Common questions</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {FAQS.slice(0, 4).map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium">
                  {item.q}
                  <span className="text-muted group-open:hidden">+</span>
                  <span className="hidden text-muted group-open:inline">−</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <Link to="/faq" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-primary">
            All questions
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
