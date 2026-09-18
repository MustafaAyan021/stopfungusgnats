import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { TreatmentPlan } from "@/components/treatment-plan";

export const Route = createFileRoute("/plan")({
  component: PlanPage,
  head: () => ({
    meta: [
      { title: "7-Day Plan to Get Rid of Fungus Gnats | Stop Fungus Gnats" },
      {
        name: "description",
        content:
          "A day-by-day plan to get rid of fungus gnats: dry the mix, set sticky traps, treat larvae, and prevent the next wave.",
      },
    ],
  }),
});

function PlanPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Protocol</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">
          7-day plan to get rid of fungus gnats
        </h1>
        <p className="mt-4 leading-relaxed text-muted">
          Check off each task as you go. Progress stays on this device. Keep the dry-top habit for
          two weeks after day 7 even if the air looks clear.
        </p>
        <div className="mt-10">
          <TreatmentPlan />
        </div>
      </main>
    </SiteShell>
  );
}
