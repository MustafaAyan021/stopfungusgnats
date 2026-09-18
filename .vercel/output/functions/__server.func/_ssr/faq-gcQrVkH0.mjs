import { t as FAQS } from "./content-DdVhKHV7.mjs";
import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell } from "./site-shell-DbFMJcr3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-gcQrVkH0.js
var import_jsx_runtime = require_jsx_runtime();
function FaqPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.16em] text-muted",
				children: "FAQ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl tracking-tight",
				children: "Fungus gnat questions"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 divide-y divide-border border-y border-border",
				children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group py-4",
					open: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
						className: "flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-medium",
						children: item.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: item.a
					})]
				}, item.q))
			})
		]
	}) });
}
//#endregion
export { FaqPage as component };
