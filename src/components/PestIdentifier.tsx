import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PLANT_MOISTURE_GUIDANCE, type PestId, type PlantType } from "@/data/content";

const ZERO_SCORE = { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 0 } as const;

const QUESTIONS = [
  {
    id: "where",
    prompt: "Where do you see them most?",
    options: [
      {
        label: "Around houseplant soil — they fly up when I water",
        scores: { "fungus-gnats": 2, "fruit-flies": 0, "drain-flies": 0 },
        source: "soil",
      },
      {
        label: "Kitchen, fruit bowl, trash, or compost caddy",
        scores: { "fungus-gnats": 0, "fruit-flies": 2, "drain-flies": 0 },
        source: "kitchen",
      },
      {
        label: "Bathroom or kitchen drain, sink, or shower",
        scores: { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 2 },
        source: "drain",
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
        source: null,
      },
      {
        label: "Rounder flies, often with reddish eyes",
        scores: { "fungus-gnats": 0, "fruit-flies": 2, "drain-flies": 0 },
        source: null,
      },
      {
        label: "Fuzzy, moth-like, they sit on walls or grout",
        scores: { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 2 },
        source: null,
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
        source: null,
        moistureNote:
          "The soil staying damp is a very plausible driver here — that's the first thing to change.",
      },
      {
        label: "Not sure / I water on a schedule",
        scores: { "fungus-gnats": 1, "fruit-flies": 0, "drain-flies": 0 },
        source: null,
        moistureNote:
          "Worth checking directly with a finger test rather than a watering schedule — schedules are a common way soil stays wetter than it looks.",
      },
      {
        label: "Soil is dry. The flies are not near plants.",
        scores: { "fungus-gnats": 0, "fruit-flies": 1, "drain-flies": 1 },
        source: null,
        moistureNote: null,
      },
    ],
  },
  {
    id: "plant",
    prompt: "If there's a plant involved, what kind is it?",
    options: [
      { label: "Tropical houseplant", scores: ZERO_SCORE, plantType: "tropical" as PlantType },
      { label: "Succulent or cactus", scores: ZERO_SCORE, plantType: "succulent" as PlantType },
      { label: "Orchid (bark mix)", scores: ZERO_SCORE, plantType: "orchid" as PlantType },
      { label: "Seedling or fresh cutting", scores: ZERO_SCORE, plantType: "seedling" as PlantType },
      { label: "Edible herb or vegetable", scores: ZERO_SCORE, plantType: "edible" as PlantType },
      { label: "Not sure / no plant nearby", scores: ZERO_SCORE, plantType: "unknown" as PlantType },
    ],
  },
] as const;

const RESULTS: Record<
  PestId,
  { title: string; blurb: string; clue: string; next: { to: string; label: string } }
> = {
  "fungus-gnats": {
    title: "Your answers are consistent with fungus gnats",
    blurb:
      "They breed in damp houseplant mix. This is a questionnaire, not a lab test — if anything below doesn't match what you're seeing, double-check with the full comparison.",
    clue: "soil location, mosquito-like appearance, and/or damp mix",
    next: { to: "/plan", label: "Open the 7-day plan" },
  },
  "fruit-flies": {
    title: "Your answers are consistent with fruit flies",
    blurb:
      "They breed in fermenting food, not potting mix. Toss overripe produce, rinse recycling, and use an apple-cider vinegar + dish soap trap.",
    clue: "kitchen/produce location and a rounder, red-eyed appearance",
    next: { to: "/fungus-gnats-vs-fruit-flies", label: "See the full comparison" },
  },
  "drain-flies": {
    title: "Your answers are consistent with drain flies",
    blurb:
      "They breed in the biofilm inside drains. Scrub the drain, flush with hot water, and keep it dry. Sticky cards on plants will not fix this.",
    clue: "drain location and a fuzzy, moth-like appearance",
    next: { to: "/fungus-gnats-vs-fruit-flies", label: "See the full comparison" },
  },
};

const SOURCE_LABEL: Record<string, string> = {
  soil: "houseplant soil",
  kitchen: "the kitchen (fruit, trash, or compost)",
  drain: "a drain",
};

export function PestIdentifier() {
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<number[]>([]);

  const finished = picks.length === QUESTIONS.length;
  const question = QUESTIONS[step];

  const { winner, ambiguous, margin } = (() => {
    const tally: Record<PestId, number> = { "fungus-gnats": 0, "fruit-flies": 0, "drain-flies": 0 };
    picks.forEach((pick, qi) => {
      const scores = QUESTIONS[qi].options[pick].scores;
      (Object.keys(tally) as PestId[]).forEach((k) => {
        tally[k] += scores[k];
      });
    });
    const ranked = (Object.entries(tally) as [PestId, number][]).sort((a, b) => b[1] - a[1]);
    const top = ranked[0][1];
    const second = ranked[1]?.[1] ?? 0;
    const tiedForTop = ranked.filter(([, score]) => score === top);
    return { winner: ranked[0][0], ambiguous: top > 0 && tiedForTop.length > 1, margin: top - second };
  })();

  const result = RESULTS[winner];
  const confidence: "high" | "moderate" =
    margin >= 4 ? "high" : "moderate";

  const sourceAnswer = picks[0] !== undefined ? QUESTIONS[0].options[picks[0]] : undefined;
  const source = sourceAnswer && "source" in sourceAnswer ? sourceAnswer.source : null;
  const moistureAnswer = picks[2] !== undefined ? QUESTIONS[2].options[picks[2]] : undefined;
  const moistureNote = moistureAnswer && "moistureNote" in moistureAnswer ? moistureAnswer.moistureNote : null;
  const plantAnswer = picks[3] !== undefined ? QUESTIONS[3].options[picks[3]] : undefined;
  const plantType: PlantType = plantAnswer && "plantType" in plantAnswer ? plantAnswer.plantType : "unknown";
  const plantGuidance = PLANT_MOISTURE_GUIDANCE[plantType];

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
    if (ambiguous) {
      return (
        <div key="result" className="animate-in glass rounded-xl p-6 shadow-stamp">
          <p className="label-mono text-[11px] text-primary">Not clear-cut</p>
          <div className="mt-3 flex items-start gap-3">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                Your answers point to more than one pest
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Your answers are close between two possibilities — you may have more than one
                pest at once (e.g. fungus gnats in a plant and fruit flies from the kitchen).
                Check the full comparison before treating.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href="/fungus-gnats-vs-fruit-flies">See the full comparison</a>
            </Button>
            <Button variant="secondary" onClick={reset}>
              Start over
            </Button>
          </div>
        </div>
      );
    }

    if (winner !== "fungus-gnats") {
      return (
        <div key="result" className="animate-in glass rounded-xl p-6 shadow-stamp">
          <p className="label-mono text-[11px] text-primary">
            {confidence === "high" ? "Likely match" : "Possible match — not certain"}
          </p>
          <div className="mt-3 flex items-start gap-3">
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{result.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{result.blurb}</p>
              <p className="mt-2 text-xs leading-relaxed text-subtle">
                Based mainly on: {result.clue}. Small, wingless insects that jump rather than fly
                are a different pest again — springtails — see the full comparison if that fits
                better.
              </p>
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
      <div key="result" className="animate-in glass rounded-xl p-6 shadow-stamp">
        <p className="label-mono text-[11px] text-primary">
          {confidence === "high" ? "Likely diagnosis" : "Possible diagnosis — not certain"}
        </p>
        <div className="mt-3 flex items-start gap-3">
          <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight">{result.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Based mainly on: {result.clue}. This is a short questionnaire, not a lab
              identification — treat it as a strong starting point, and switch tracks if what you
              see stops matching.
            </p>
          </div>
        </div>

        <dl className="mt-6 grid gap-4 border-t border-border pt-5 text-sm">
          <div>
            <dt className="label-mono text-[10px] text-muted">Likely breeding source</dt>
            <dd className="mt-1 leading-relaxed text-fg">
              {source ? `Most likely ${SOURCE_LABEL[source]}, based on where you're seeing them.` : "Check the potting mix of any nearby plants first — that's the most common source."}
              {moistureNote ? ` ${moistureNote}` : ""}
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px] text-muted">Moisture guidance — {plantGuidance.label}</dt>
            <dd className="mt-1 leading-relaxed text-fg">{plantGuidance.guidance}</dd>
          </div>
          <div>
            <dt className="label-mono text-[10px] text-muted">Adult management</dt>
            <dd className="mt-1 leading-relaxed text-fg">
              Set a yellow sticky card at soil level in this pot. It won't end the infestation
              alone, but the catch count over the next several days tells you if things are
              trending better or worse.
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px] text-muted">Larval management</dt>
            <dd className="mt-1 leading-relaxed text-fg">
              If moisture control and traps aren't enough on their own after a week or so, a Bti
              product labeled for fungus gnats targets the larvae in the soil — follow that
              product's label for rate and reapplication.
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px] text-muted">What improvement looks like</dt>
            <dd className="mt-1 leading-relaxed text-fg">
              A falling trap count over several days, not an instant zero. You may see fewer
              adults within days, but complete control often takes several weeks — longer for a
              heavier, multi-plant infestation.
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px] text-muted">If it's not improving</dt>
            <dd className="mt-1 leading-relaxed text-fg">
              Run the troubleshooting self-check — a stalled infestation is usually still-wet soil,
              an untreated second pot, or larvae that just haven't finished their cycle yet.
            </dd>
          </div>
          <div>
            <dt className="label-mono text-[10px] text-muted">When to reassess the diagnosis</dt>
            <dd className="mt-1 leading-relaxed text-fg">
              If two weeks of consistent moisture management and trapping make no visible
              difference at all, it's worth reconsidering whether this is really fungus gnats —
              revisit the full comparison rather than escalating treatment on the same guess.
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={result.next.to}>{result.next.label}</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/fungus-gnat-troubleshooting">Troubleshooting self-check</a>
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
          Four quick questions
          <ArrowRight className="size-4" />
        </p>
      )}
    </div>
  );
}
