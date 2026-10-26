import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export type BtnVariant = "paper" | "ghost" | "ink" | "outline-ink" | "yt";

export const btn = (variant: BtnVariant = "paper", size: "sm" | "md" = "md") =>
  cn(
    "inline-flex items-center justify-center gap-2 rounded-sm border font-sans font-medium transition-all duration-200 focus-visible:outline-2",
    size === "md" ? "min-h-11 px-5 text-sm" : "min-h-9 px-3.5 text-xs",
    {
      paper: "border-beige bg-paper text-ink shadow-paper hover:-translate-y-0.5 hover:bg-beige",
      ghost: "border-parchment/40 bg-night/40 text-parchment hover:border-gold hover:text-gold",
      ink: "border-ink bg-ink text-paper hover:bg-forest hover:border-forest",
      "outline-ink": "border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-ink/5",
      yt: "border-yt bg-yt text-paper hover:brightness-110",
    }[variant],
  );

/** External action that degrades to a clear, non-clickable "coming soon" state when url is null. */
export function ExternalAction({ url, children, variant = "paper", size = "md", className }: { url: string | null; children: ReactNode; variant?: BtnVariant; size?: "sm" | "md"; className?: string }) {
  if (!url) {
    return (
      <span role="link" aria-disabled="true" title="Link coming soon" className={cn(btn(variant, size), "cursor-not-allowed opacity-55 hover:translate-y-0", className)}>
        {children}
        <span className="rounded-sm bg-current/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wider opacity-80">soon</span>
      </span>
    );
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={cn(btn(variant, size), className)}>
      {children}
    </a>
  );
}

export function ProjectLink({ slug, children, variant = "paper", size = "md", className }: { slug: string; children: ReactNode; variant?: BtnVariant; size?: "sm" | "md"; className?: string }) {
  return (
    <Link to="/projects/$slug" params={{ slug }} className={cn(btn(variant, size), className)}>
      {children}
    </Link>
  );
}
