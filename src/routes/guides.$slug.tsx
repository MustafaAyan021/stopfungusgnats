import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { GUIDES, METHODS } from "@/data/content";

export const Route = createFileRoute("/guides/$slug")({
  component: GuidePage,
  loader: ({ params }) => {
    const guide = GUIDES[params.slug];
    if (!guide) throw notFound();
    return { guide, slug: params.slug };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.guide.title} | Stop Fungus Gnats` },
          { name: "description", content: loaderData.guide.description },
        ]
      : [{ title: "Guide | Stop Fungus Gnats" }],
  }),
});

function GuidePage() {
  const { guide, slug } = Route.useLoaderData();
  const others = METHODS.filter((m) => m.slug !== slug);

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          All methods
        </Link>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted">
          {guide.kicker}
        </p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">{guide.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{guide.description}</p>
        <figure className="mt-8 overflow-hidden rounded-xl border border-border">
          <img src={guide.image} alt="" className="aspect-video w-full object-cover" />
        </figure>
        <div className="mt-10 grid gap-10">
          {guide.body.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl tracking-tight">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
        <aside className="mt-14 border-t border-border pt-8">
          <p className="text-sm font-medium">Next methods</p>
          <ul className="mt-3 grid gap-2">
            {others.slice(0, 3).map((m) => (
              <li key={m.slug}>
                <Link
                  to="/guides/$slug"
                  params={{ slug: m.slug }}
                  className="text-sm text-primary hover:underline"
                >
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </SiteShell>
  );
}
