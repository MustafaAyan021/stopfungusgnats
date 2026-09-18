import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { PestId } from "@/data/content";

const QUESTIONS = [
  {
    id: "where",
    prompt: "Where do you see them most?",
    options: [
      {
        label: "Around houseplant soil — they fly up when I water",
        scores: { "fungus-gnats": 2, "fruit-flies": 0, "drain-flies": 0 },
      },
      {
        label: "Kitchen, fruit bowl, trash, or compost caddy",
        scores: { "fungus-gnats": 0, "fruit-flies": 2, "drain-flies": 0 },
      },
      {
        label: "Bathroom or kitchen drain, sink, or shower",
        scores: { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 2 },
      },
    ],
  },
  {
    id: "look",
    prompt: "What do they look like?",
    options: [
      {
        label: "Tiny dark mosquitoes — long legs, weak fliers",
        scores: { "fungus-gnats": 2, "fruit-flies": 0, "drain-flies": 0 },
      },
      {
        label: "Rounder flies, often with reddish eyes",
        scores: { "fungus-gnats": 0, "fruit-flies": 2, "drain-flies": 0 },
      },
      {
        label: "Fuzzy, moth-like, they sit on walls or grout",
        scores: { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 2 },
      },
    ],
  },
  {
    id: "soil",
    prompt: "Is the potting mix staying wet?",
    options: [
      {
        label: "Yes — the top stays damp for days",
        scores: { "fungus-gnats": 2, "fruit-flies": 0, "drain-flies": 0 },
      },
      {
        label: "Not sure / I water on a schedule",
        scores: { "fungus-gnats": 1, "fruit-flies": 0, "drain-flies": 0 },
      },
      {
        label: "Soil is dry. The flies are not near plants.",
        scores: { "fungus-gnats": 0, "fruit-flies": 1, "drain-flies": 1 },
      },
    ],
  },
] as const;

const RESULTS: Record<PestId, { title: string; blurb: string; next: { to: string; label: string } }> = {
  "fungus-gnats": {
    title: "These are fungus gnats",
    blurb:
      "They breed in damp houseplant mix. Traps catch adults. Dry soil plus a larval drench (Bti or peroxide) ends the cycle.",
    next: { to: "/plan", label: "Open the 7-day plan" },
  },
  "fruit-flies": {
    title: "These look like fruit flies",
    blurb:
      "They breed in fermenting food, not potting mix. Toss overripe produce, rinse recycling, and use an apple-cider vinegar + dish soap trap.",
    next: { to: "/", label: "Back to the gnat guide" },
  },
  "drain-flies": {
    title: "These look like drain flies",
    blurb:
      "They breed in the biofilm inside drains. Scrub the drain, flush with hot water, and keep it dry. Sticky cards on plants will not fix this.",
    next: { to: "/", label: "Back to the gnat guide" },
  },
};

export function PestIdentifier() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<number[]>([]);

  const finished = picks.length === QUESTIONS.length;
  const question = QUESTIONS[step];

  const winner: PestId = (() => {
    const tally: Record<PestId, number> = { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 0 };
    picks.forEach((pick, qi) => {
      const scores = QUESTIONS[qi].options[pick].scores;
      (Object.keys(tally) as PestId[]).forEach((k) => {
        tally[k] += scores[k];
      });
    });
    return (Object.entries(tally) as [PestId, number][]).sort((a, b) => b[1] - a[1])[0][0];
  })();

  const result = RESULTS[winner];

  function choose(index: number) {
    const next = [...picks.slice(0, step), index];
    setPicks(next);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
  }

  function reset() {
    setPicks([]);
    setStep(0);
  }

  if (finished) {
    return (
      <div
        key="result"
        className="animate-in glass rounded-xl p-6 shadow-stamp"
      >
        <p className="label-mono text-[11px] text-primary">Verdict</p>
        <div className="mt-3 flex items-start gap-3">
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">{result.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{result.blurb}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={result.next.to}>{result.next.label}</a>
          </Button>
          <Button variant="secondary" onClick={reset}>
            Start over
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-6 shadow-stamp">
      <div className="label-mono flex items-center justify-between gap-3 text-[11px] text-muted">
        <span>Identify the pest</span>
        <span className="tabular-nums">
          {step + 1} / {QUESTIONS.length}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full border border-ink/20 bg-surface-2">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]"
          style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <h3
        key={`title-${question.id}`}
        className="animate-in mt-5 font-display text-2xl font-semibold tracking-tight"
      >
        {question.prompt}
      </h3>
      <div key={`options-${question.id}`} className="animate-in mt-5 grid gap-2">
        {question.options.map((opt, i) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => choose(i)}
            className="focus-ring min-h-12 rounded-md border-2 border-ink bg-bg px-4 py-3 text-left text-sm leading-snug font-medium text-fg transition-[transform,background-color] duration-[var(--motion-quick)] hover:-translate-y-0.5 hover:bg-surface-2 hover:shadow-stamp-sm active:translate-y-0 active:shadow-none"
          >
            {opt.label}
          </button>
        ))}
      </div>
      {step > 0 ? (
        <button
          type="button"
          className="focus-ring mt-4 inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted hover:text-fg"
          onClick={() => {
            setPicks((p) => p.slice(0, -1));
            setStep((s) => Math.max(0, s - 1));
          }}
        >
          <ArrowLeft className="size-4" />
          Back
        </button>
      ) : (
        <p className="label-mono mt-4 inline-flex items-center gap-2 text-[11px] text-subtle">
          Three questions
          <ArrowRight className="size-4" />
        </p>
      )}
    </div>
  );
}
