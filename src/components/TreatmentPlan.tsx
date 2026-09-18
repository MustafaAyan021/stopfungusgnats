import { Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PLAN_DAYS } from "@/data/content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "sfg-plan-v1";

function taskKey(day: number, index: number) {
  return `${day}-${index}`;
}

export function TreatmentPlan() {
  const [done, setDone] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    } catch {
      /* ignore */
    }
  }, [done]);

  const total = useMemo(
    () => PLAN_DAYS.reduce((sum, d) => sum + d.tasks.length, 0),
    [],
  );
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
            className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
            onClick={() => setDone({})}
          >
            Reset plan
          </button>
        ) : null}
      </div>
      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div
          className="h-full bg-primary transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]"
          style={{ width: `${total ? (complete / total) * 100 : 0}%` }}
        />
      </div>
      <ol className="grid gap-4">
        {PLAN_DAYS.map((block) => (
          <li
            key={block.day}
            className="rounded-xl border border-border bg-surface p-5 sm:p-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Day {block.day}
            </p>
            <h3 className="mt-1 font-display text-xl tracking-tight">{block.title}</h3>
            <ul className="mt-4 grid gap-2">
              {block.tasks.map((task, i) => {
                const key = taskKey(block.day, i);
                const checked = Boolean(done[key]);
                return (
                  <li key={task}>
                    <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-md px-1 py-1">
                      <span
                        className={cn(
                          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border",
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
                          "text-sm leading-relaxed",
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
        ))}
      </ol>
    </div>
  );
}
