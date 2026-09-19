import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CHECKS = [
  {
    id: "damp-surface",
    label: "The soil surface is still damp within a day of watering",
    diagnosis:
      "This is almost always the reason a plan stalls. Every other step — traps, Bti, peroxide — is undone if the surface stays wet long enough for the next batch of eggs to survive. Bottom-water, water less often, or switch to a chunkier mix before repeating any treatment.",
  },
  {
    id: "one-pot",
    label: "You've only treated the pot you first noticed gnats on",
    diagnosis:
      "Adults wander between nearby pots and will lay eggs anywhere the mix is moist enough — including plants that looked fine. Treat every pot in the same room or shelf at the same time, not just the one you spotted first.",
  },
  {
    id: "short-treatment-time",
    label: "You've only been treating consistently for a short time",
    diagnosis:
      "Eggs and larvae already in the soil when you started keep developing on their own schedule — indoor development is roughly 3–4 weeks egg to adult, longer or shorter depending on temperature. Seeing occasional adults early on is expected, not a sign the plan has failed. Keep going and watch the trend on your sticky cards, not the raw count.",
  },
  {
    id: "no-larvae-check",
    label: "You haven't actually confirmed whether larvae are still in the soil",
    diagnosis:
      "Adult counts on traps can lag behind what's happening underground. Run the potato test: bury a half-inch cube of raw potato just under the surface, then check the underside after 1–2 days. Repeatedly finding no larvae is a useful sign the population may be declining — more trustworthy than a guess, though not absolute proof the pot is clear.",
  },
  {
    id: "traps-only",
    label: "You've mainly relied on sticky traps, without a soil drench",
    diagnosis:
      "Traps only ever catch flying adults — they do nothing to eggs or larvae, which is where most of the population lives at any given moment. Add a Bti or hydrogen peroxide drench to reach the stage traps can't touch.",
  },
] as const;

export function TroubleshootChecker() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const matches = CHECKS.filter((c) => checked[c.id]);
  const anyChecked = matches.length > 0;

  return (
    <div className="glass rounded-xl p-6 shadow-stamp sm:p-7">
      <p className="label-mono text-[11px] text-primary">Quick self-check</p>
      <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
        Check what's true for you right now
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Select anything that applies. Most stalled infestations trace back to one or two of these
        at once.
      </p>
      <div className="mt-5 grid gap-2">
        {CHECKS.map((c) => {
          const isChecked = Boolean(checked[c.id]);
          return (
            <label
              key={c.id}
              className="has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-bg flex min-h-11 cursor-pointer items-start gap-3 rounded-md border-2 border-transparent px-2 py-2 transition-colors duration-[var(--motion-quick)] hover:bg-surface-2/60 has-[:checked]:border-ink has-[:checked]:bg-surface-2/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2"
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={() => toggle(c.id)}
              />
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border-2 transition-colors duration-[var(--motion-quick)]",
                  isChecked ? "border-ink bg-primary text-primary-foreground" : "border-border bg-bg",
                )}
                aria-hidden="true"
              >
                {isChecked ? "✓" : ""}
              </span>
              <span className="text-sm leading-relaxed text-fg">{c.label}</span>
            </label>
          );
        })}
      </div>

      {anyChecked && (
        <div className="animate-in mt-6 grid gap-3 border-t border-border pt-5">
          <p className="label-mono text-[11px] text-primary">
            {matches.length > 1 ? "What's likely going on" : "What's likely going on"}
          </p>
          {matches.map((m) => (
            <div key={m.id} className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 size-4 shrink-0 text-danger" />
              <p className="text-sm leading-relaxed text-muted">{m.diagnosis}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
