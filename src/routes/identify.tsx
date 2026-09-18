import { createFileRoute } from "@tanstack/react-router";
import { PestIdentifier } from "@/components/pest-identifier";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/identify")({
  component: IdentifyPage,
  head: () => ({
    meta: [
      { title: "Identify Fungus Gnats vs Fruit Flies | Stop Fungus Gnats" },
      {
        name: "description",
        content:
          "Tell fungus gnats from fruit flies and drain flies in three questions so you treat the right pest.",
      },
    ],
  }),
});

function IdentifyPage() {
  return (
    <SiteShell>
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Identify</p>
          <h1 className="mt-2 font-display text-4xl tracking-tight">
            Are these fungus gnats?
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            Fungus gnats are slender, dark, mosquito-like flies that hover over houseplant soil.
            They are weak fliers. Fruit flies prefer kitchens. Drain flies look moth-like and sit
            on porcelain.
          </p>
          <figure className="mt-6 overflow-hidden rounded-lg border border-border">
            <img
              src="/images/macro.jpg"
              alt="Macro photo of a fungus gnat on potting soil"
              className="aspect-4/3 w-full object-cover"
            />
          </figure>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-medium text-fg">Fungus gnats:</span> soil, long legs, fly up
              when you water.
            </li>
            <li>
              <span className="font-medium text-fg">Fruit flies:</span> fruit, trash, compost,
              rounder body, red eyes.
            </li>
            <li>
              <span className="font-medium text-fg">Drain flies:</span> drains, fuzzy wings, hop
              more than they fly.
            </li>
          </ul>
        </div>
        <PestIdentifier />
      </main>
    </SiteShell>
  );
}
