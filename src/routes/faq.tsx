import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { FAQS } from "@/data/content";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "Fungus Gnat FAQ | Stop Fungus Gnats" },
      {
        name: "description",
        content:
          "Do fungus gnats bite? How long to get rid of them? Is cinnamon enough? Answers for houseplant owners.",
      },
    ],
  }),
});

function FaqPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">FAQ</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">Fungus gnat questions</h1>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {FAQS.map((item) => (
            <details key={item.q} className="group py-4" open>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium">
                {item.q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
