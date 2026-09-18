import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as CircleCheck, d as ArrowLeft, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Button } from "./site-shell-DbFMJcr3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pest-identifier-BveQknpV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QUESTIONS = [
	{
		id: "where",
		prompt: "Where do you see them most?",
		options: [
			{
				label: "Around houseplant soil — they fly up when I water",
				scores: {
					"fungus-gnats": 2,
					"fruit-flies": 0,
					"drain-flies": 0
				}
			},
			{
				label: "Kitchen, fruit bowl, trash, or compost caddy",
				scores: {
					"fungus-gnats": 0,
					"fruit-flies": 2,
					"drain-flies": 0
				}
			},
			{
				label: "Bathroom or kitchen drain, sink, or shower",
				scores: {
					"fungus-gnats": 0,
					"fruit-flies": 0,
					"drain-flies": 2
				}
			}
		]
	},
	{
		id: "look",
		prompt: "What do they look like?",
		options: [
			{
				label: "Tiny dark mosquitoes — long legs, weak fliers",
				scores: {
					"fungus-gnats": 2,
					"fruit-flies": 0,
					"drain-flies": 0
				}
			},
			{
				label: "Rounder flies, often with reddish eyes",
				scores: {
					"fungus-gnats": 0,
					"fruit-flies": 2,
					"drain-flies": 0
				}
			},
			{
				label: "Fuzzy, moth-like, they sit on walls or grout",
				scores: {
					"fungus-gnats": 0,
					"fruit-flies": 0,
					"drain-flies": 2
				}
			}
		]
	},
	{
		id: "soil",
		prompt: "Is the potting mix staying wet?",
		options: [
			{
				label: "Yes — the top stays damp for days",
				scores: {
					"fungus-gnats": 2,
					"fruit-flies": 0,
					"drain-flies": 0
				}
			},
			{
				label: "Not sure / I water on a schedule",
				scores: {
					"fungus-gnats": 1,
					"fruit-flies": 0,
					"drain-flies": 0
				}
			},
			{
				label: "Soil is dry. The flies are not near plants.",
				scores: {
					"fungus-gnats": 0,
					"fruit-flies": 1,
					"drain-flies": 1
				}
			}
		]
	}
];
var RESULTS = {
	"fungus-gnats": {
		title: "These are fungus gnats",
		blurb: "They breed in damp houseplant mix. Traps catch adults. Dry soil plus a larval drench (Bti or peroxide) ends the cycle.",
		next: {
			to: "/plan",
			label: "Open the 7-day plan"
		}
	},
	"fruit-flies": {
		title: "These look like fruit flies",
		blurb: "They breed in fermenting food, not potting mix. Toss overripe produce, rinse recycling, and use an apple-cider vinegar + dish soap trap.",
		next: {
			to: "/",
			label: "Back to the gnat guide"
		}
	},
	"drain-flies": {
		title: "These look like drain flies",
		blurb: "They breed in the biofilm inside drains. Scrub the drain, flush with hot water, and keep it dry. Sticky cards on plants will not fix this.",
		next: {
			to: "/",
			label: "Back to the gnat guide"
		}
	}
};
function PestIdentifier() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [picks, setPicks] = (0, import_react.useState)([]);
	const finished = picks.length === QUESTIONS.length;
	const question = QUESTIONS[step];
	const result = RESULTS[(() => {
		const tally = {
			"fungus-gnats": 0,
			"fruit-flies": 0,
			"drain-flies": 0
		};
		picks.forEach((pick, qi) => {
			const scores = QUESTIONS[qi].options[pick].scores;
			Object.keys(tally).forEach((k) => {
				tally[k] += scores[k];
			});
		});
		return Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
	})()];
	function choose(index) {
		const next = [...picks.slice(0, step), index];
		setPicks(next);
		if (step < QUESTIONS.length - 1) setStep(step + 1);
	}
	function reset() {
		setPicks([]);
		setStep(0);
	}
	if (finished) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-6 shadow-[0_1px_0_color-mix(in_oklab,var(--color-fg)_6%,transparent)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
				children: "Result"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-1 size-5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl tracking-tight",
					children: result.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: result.blurb
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [result.next.to === "/guides/$slug" && result.next.params ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/guides/$slug",
						params: result.next.params,
						children: result.next.label
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: result.next.to,
						children: result.next.label
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: reset,
					children: "Start over"
				})]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.14em] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Identify the pest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "tabular-nums",
					children: [
						step + 1,
						" / ",
						QUESTIONS.length
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 h-1 overflow-hidden rounded-full bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-primary transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
					style: { width: `${(step + 1) / QUESTIONS.length * 100}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-2xl tracking-tight",
				children: question.prompt
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid gap-2",
				children: question.options.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => choose(i),
					className: "min-h-12 rounded-md border border-border bg-bg px-4 py-3 text-left text-sm leading-snug text-fg transition-colors duration-[var(--motion-quick)] hover:border-primary hover:bg-surface-2",
					children: opt.label
				}, opt.label))
			}),
			step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
				onClick: () => {
					setPicks((p) => p.slice(0, -1));
					setStep((s) => Math.max(0, s - 1));
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Back"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 inline-flex items-center gap-2 text-sm text-subtle",
				children: ["Three questions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		]
	});
}
//#endregion
export { PestIdentifier as t };
