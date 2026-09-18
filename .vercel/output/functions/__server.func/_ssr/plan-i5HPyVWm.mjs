import { i as __toESM } from "../_runtime.mjs";
import { i as PLAN_DAYS } from "./content-DdVhKHV7.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Check } from "../_libs/lucide-react.mjs";
import { n as SiteShell, r as cn } from "./site-shell-DbFMJcr3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plan-i5HPyVWm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STORAGE_KEY = "sfg-plan-v1";
function taskKey(day, index) {
	return `${day}-${index}`;
}
function TreatmentPlan() {
	const [done, setDone] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setDone(JSON.parse(raw));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
		} catch {}
	}, [done]);
	const total = (0, import_react.useMemo)(() => PLAN_DAYS.reduce((sum, d) => sum + d.tasks.length, 0), []);
	const complete = Object.values(done).filter(Boolean).length;
	function toggle(day, index) {
		const key = taskKey(day, index);
		setDone((prev) => ({
			...prev,
			[key]: !prev[key]
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Progress",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums font-medium text-fg",
						children: [
							complete,
							"/",
							total
						]
					})
				]
			}), complete > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
				onClick: () => setDone({}),
				children: "Reset plan"
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 h-1.5 overflow-hidden rounded-full bg-surface-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full bg-primary transition-[width] duration-[var(--motion-fast)] ease-[var(--ease-out)]",
				style: { width: `${total ? complete / total * 100 : 0}%` }
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-4",
			children: PLAN_DAYS.map((block) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium uppercase tracking-[0.14em] text-muted",
						children: ["Day ", block.day]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-xl tracking-tight",
						children: block.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2",
						children: block.tasks.map((task, i) => {
							const key = taskKey(block.day, i);
							const checked = Boolean(done[key]);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex min-h-11 cursor-pointer items-start gap-3 rounded-md px-1 py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-xs border", checked ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg"),
										children: checked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "size-3.5",
											strokeWidth: 3
										}) : null
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "sr-only",
										checked,
										onChange: () => toggle(block.day, i)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("text-sm leading-relaxed", checked ? "text-muted line-through" : "text-fg"),
										children: task
									})
								]
							}) }, task);
						})
					})
				]
			}, block.day))
		})
	] });
}
function PlanPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: "Protocol"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "7-day plan to get rid of fungus gnats"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 leading-relaxed text-muted",
				children: "Check off each task as you go. Progress stays on this device. Keep the dry-top habit for two weeks after day 7 even if the air looks clear."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreatmentPlan, {})
			})
		]
	}) });
}
//#endregion
export { PlanPage as component };
