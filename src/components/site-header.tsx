import { Link } from "@tanstack/react-router";
import { Menu, Sprout, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/content";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "How to stop them" },
  { to: "/identify", label: "Identify" },
  { to: "/plan", label: "7-day plan" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-fg" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Sprout className="size-4" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg tracking-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors duration-[var(--motion-quick)] hover:bg-surface-2 hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <Link to="/plan">Start the plan</Link>
          </Button>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md border border-border bg-surface md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className={cn("border-t border-border bg-surface md:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex min-h-11 items-center text-base text-fg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/plan"
            className="mt-2 flex min-h-11 items-center justify-center rounded-md bg-primary text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            Start the 7-day plan
          </Link>
        </nav>
      </div>
    </header>
  );
}
