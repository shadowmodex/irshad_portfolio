import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("pointer-events-none h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
      <path d="M12 2.5l2.4 6.6 6.9.3-5.4 4.3 1.9 6.7L12 16.6l-5.8 3.8 1.9-6.7L2.7 9.4l6.9-.3z" />
    </svg>
  );
}

export function HandwrittenAnnotation({ children, className, rotate = -6 }: { children: ReactNode; className?: string; rotate?: number }) {
  return (
    <p aria-hidden className={cn("pointer-events-none select-none font-hand leading-[0.95] animate-write", className)} style={{ transform: `rotate(${rotate}deg)` }}>
      {children}
    </p>
  );
}

export function SectionLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cn("font-display text-2xl italic tracking-tight md:text-[1.7rem]", className)}>
      <span className="mr-1 opacity-60">//</span> {children}
    </h2>
  );
}

export function TornPaperDivider({ flip, className }: { flip?: boolean; className?: string }) {
  return <div aria-hidden className={cn("paper h-5 w-full", flip ? "torn-bottom" : "torn-top", className)} />;
}

export function PaperSection({ children, className, torn = "both" }: { children: ReactNode; className?: string; torn?: "both" | "top" | "bottom" | "none" }) {
  const t = { both: "torn-both", top: "torn-top", bottom: "torn-bottom", none: "" }[torn];
  return <section className={cn("paper relative", t, className)}>{children}</section>;
}

export function DarkEditorialSection({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("dark-panel grain relative", className)}>{children}</section>;
}

export function PinnedPhoto({ src, alt, className, rotate = -4, caption }: { src: string; alt: string; className?: string; rotate?: number; caption?: string }) {
  return (
    <figure className={cn("tape photo-frame", className)} style={{ transform: `rotate(${rotate}deg)` }}>
      <img src={src} alt={alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
      {caption && <figcaption className="pt-1 text-center font-hand text-base text-ink">{caption}</figcaption>}
    </figure>
  );
}

export function PageIntro({ eyebrow, title, script, children, tone = "dark" }: { eyebrow: string; title: string; script?: string; children?: ReactNode; tone?: "dark" | "paper" }) {
  return (
    <header className={cn("relative px-5 pb-14 pt-32 md:px-10 md:pt-40", tone === "paper" ? "paper" : "dark-panel grain")}>
      <div className="mx-auto max-w-6xl animate-reveal">
        <p className={cn("font-hand text-2xl", tone === "paper" ? "text-moss" : "text-gold")}>{eyebrow}</p>
        <h1 className="mt-2 font-display text-[clamp(2.1rem,9.5vw,3rem)] font-semibold leading-[0.95] md:text-7xl">
          {title} {script && <span className="font-hand font-normal text-gold">{script}</span>}
        </h1>
        {children && <div className={cn("mt-5 max-w-2xl text-base leading-relaxed md:text-lg", tone === "paper" ? "text-ink-muted" : "text-ash")}>{children}</div>}
      </div>
      <Star className="absolute right-8 top-32 hidden h-8 w-8 text-gold md:block" />
    </header>
  );
}
