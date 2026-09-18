import { Check, CheckCircle2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PLAN_DAYS } from "@/data/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "sfg-plan-v1";

function taskKey(day: number, index: number) {
  return `${day}-${index}`;
}

export function TreatmentPlan() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done, hydrated]);

  const total = useMemo(() => PLAN_DAYS.reduce((sum, d) => sum + d.tasks.length, 0), []);
  const complete = Object.values(done).filter(Boolean).length;

  function toggle(day: number, index: number) {
    const key = taskKey(day, index);
    setDone((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <p className="text-sm text-muted">
          Progress{" "}
          <span className="tabular-nums font-medium text-fg">
            {complete}/{total}
          </span>
        </p>
        {complete > 0 ? (
          <button
            type="button"
            className="focus-ring rounded-sm text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
            onClick={() => setDone({})}
          >
            Reset plan
          </button>
        ) : null}
      </div>
      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]"
          style={{ width: `${total ? (complete / total) * 100 : 0}%` }}
        />
      </div>
      <ol className="grid gap-4">
        {PLAN_DAYS.map((block) => {
          const dayDone = block.tasks.filter((_, i) => done[taskKey(block.day, i)]).length;
          const dayComplete = dayDone === block.tasks.length;
          return (
            <li
              key={block.day}
              className={cn(
                "rounded-xl border bg-surface p-5 transition-colors duration-[var(--motion-quick)] sm:p-6",
                dayComplete ? "border-primary/40" : "border-border",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                  Day {block.day}
                </p>
                {dayComplete ? (
                  <span className="flex items-center gap-1 text-xs font-medium text-primary">
                    <CheckCircle2 className="size-3.5" />
                    Done
                  </span>
                ) : (
                  <span className="text-xs tabular-nums text-subtle">
                    {dayDone}/{block.tasks.length}
                  </span>
                )}
              </div>
              <h3 className="mt-1 font-display text-xl tracking-tight">{block.title}</h3>
              <ul className="mt-4 grid gap-1">
                {block.tasks.map((task, i) => {
                  const key = taskKey(block.day, i);
                  const checked = Boolean(done[key]);
                  return (
                    <li key={task}>
                      <label className="has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-bg -mx-1 flex min-h-11 cursor-pointer items-start gap-3 rounded-md px-1 py-1.5 transition-colors duration-[var(--motion-quick)] hover:bg-surface-2/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-2">
                        <span
                          className={cn(
                            "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border transition-colors duration-[var(--motion-quick)]",
                            checked
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-bg",
                          )}
                        >
                          {checked ? <Check className="size-3.5" strokeWidth={3} /> : null}
                        </span>
                        <input
                          type="checkbox"
                          className="sr-only"
                          checked={checked}
                          onChange={() => toggle(block.day, i)}
                        />
                        <span
                          className={cn(
                            "text-sm leading-relaxed transition-colors duration-[var(--motion-quick)]",
                            checked ? "text-muted line-through" : "text-fg",
                          )}
                        >
                          {task}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
