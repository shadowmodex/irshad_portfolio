import { Link } from "@tanstack/react-router";
import { ArrowRight, Chrome, Download, ExternalLink } from "lucide-react";
import { categoryLabel, type Project } from "@/data/projects";
import { ProjectIcon, ScreenMockup } from "./Mockup";
import { ExternalAction, ProjectLink } from "./ActionLink";
import { cn } from "@/lib/utils";
import { useTilt } from "@/hooks/use-depth";

/** Compact card used on the projects directory. */
export function ProjectCard({ p }: { p: Project }) {
  const tilt = useTilt();
  return (
    <Link to="/projects/$slug" params={{ slug: p.slug }} {...tilt} className="depth-card group flex flex-col rounded-sm border border-ink/15 bg-paper-deep/60 p-4 text-ink shadow-paper">
      <div className="flex items-center gap-3">
        <ProjectIcon p={p} />
        <div className="min-w-0">
          <h3 className="truncate font-display text-xl font-semibold">{p.name}</h3>
          <p className="text-xs uppercase tracking-wider text-moss">{categoryLabel[p.category]}</p>
        </div>
      </div>
      <div className={cn("mt-4 grid gap-2", p.screenshots[0].frame === "phone" ? "grid-cols-3" : "grid-cols-2")}>
        {p.screenshots.slice(0, p.screenshots[0].frame === "phone" ? 3 : 2).map((s, i) => <ScreenMockup key={i} s={s} size="sm" />)}
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{p.shortDescription}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium group-hover:text-forest">View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
    </Link>
  );
}

/** Homepage Android app card. */
export function AppCard({ p }: { p: Project }) {
  const tilt = useTilt();
  return (
    <article {...tilt} className="depth-card flex flex-col rounded-sm border border-ink/15 bg-paper/80 p-3 text-ink">
      <div className="flex items-center gap-2.5">
        <ProjectIcon p={p} className="h-9 w-9 text-sm" />
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-semibold leading-tight">{p.shortName}</h3>
          <p className="text-[11px] text-ink-muted">{p.version}</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 px-2">
        {p.screenshots.slice(0, 2).map((s, i) => <ScreenMockup key={i} s={s} size="sm" />)}
      </div>
      <div className="mt-3 flex gap-1.5">
        <ExternalAction url={p.downloadUrl} variant="outline-ink" size="sm" className="flex-1"><Download className="h-3.5 w-3.5" />APK</ExternalAction>
        <ProjectLink slug={p.slug} variant="ink" size="sm">Details</ProjectLink>
      </div>
    </article>
  );
}

export function ExtensionCard({ p }: { p: Project }) {
  const tilt = useTilt();
  return (
    <article {...tilt} className="depth-card flex flex-col rounded-sm border border-ink/15 bg-paper/80 p-3 text-ink">
      <div className="flex items-start gap-2.5">
        <ProjectIcon p={p} className="h-9 w-9 text-sm" />
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-semibold leading-tight">{p.shortName}</h3>
          <p className="line-clamp-2 text-xs text-ink-muted">{p.shortDescription}</p>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {p.screenshots.map((s, i) => <ScreenMockup key={i} s={s} size="sm" />)}
      </div>
      <div className="mt-3 flex gap-1.5">
        <ExternalAction url={p.downloadUrl} variant="outline-ink" size="sm" className="flex-1"><Chrome className="h-3.5 w-3.5" />Add</ExternalAction>
        <ProjectLink slug={p.slug} variant="ink" size="sm">View</ProjectLink>
      </div>
    </article>
  );
}

export function WebsiteCard({ p, large }: { p: Project; large?: boolean }) {
  const tilt = useTilt();
  return (
    <article className="group flex flex-col">
      <div {...tilt} className="depth-card rounded-md">
        <ScreenMockup s={p.screenshots[0]} />
      </div>
      <div className={cn("mt-3 flex flex-col gap-3", large && "sm:flex-row sm:items-end sm:justify-between")}>
        <div>
          <h3 className="font-display text-xl font-semibold">{p.name}</h3>
          <p className="text-sm opacity-75">{p.shortDescription}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <ExternalAction url={p.liveUrl} size="sm" variant="ghost"><ExternalLink className="h-3.5 w-3.5" />Visit</ExternalAction>
          <ProjectLink slug={p.slug} size="sm" variant="paper">Details</ProjectLink>
        </div>
      </div>
    </article>
  );
}
