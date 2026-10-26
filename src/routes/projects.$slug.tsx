import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, Check, Code2 } from "lucide-react";
import { categoryLabel, getProject, relatedOf, type Project } from "@/data/projects";
import { media } from "@/data/media";
import { Breadcrumbs } from "@/components/site/misc";
import { ExternalAction } from "@/components/site/ActionLink";
import { ScreenMockup, ProjectIcon } from "@/components/site/Mockup";
import { ScreenshotGallery } from "@/components/site/Gallery";
import { SetupGuide } from "@/components/site/SetupGuide";
import { ProjectCard } from "@/components/site/cards";
import { HandwrittenAnnotation, SectionLabel, Star } from "@/components/site/decor";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ loaderData }) => {
    const p = loaderData ? getProject(loaderData.slug) : undefined;
    if (!p) return { meta: [{ title: "Project unavailable — Irshad Akhtar" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.name} — Irshad Akhtar` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: `${p.name} — Irshad Akhtar` },
        { property: "og:description", content: p.shortDescription },
      ],
    };
  },
  component: ProjectPage,
});

const sectionFor = { app: { to: "/apps", label: "Apps" }, website: { to: "/websites", label: "Websites" }, extension: { to: "/extensions", label: "Extensions" } } as const;

function HeroVisual({ p }: { p: Project }) {
  if (p.kind === "restaurant")
    return (
      <div className="relative">
        <img src={media.restaurant} alt="Demo image: warm candlelit restaurant table" className="aspect-[4/3] w-full rounded-sm object-cover shadow-paper" />
        <div className="absolute -bottom-6 -left-4 w-1/2 -rotate-3"><ScreenMockup s={p.screenshots[0]} /></div>
      </div>
    );
  if (p.screenshots[0].frame === "phone")
    return (
      <div className="flex items-end justify-center gap-4">
        {p.screenshots.map((s, i) => <div key={i} className="w-[30%] max-w-[170px]" style={{ transform: `rotate(${[-5, 0, 5][i]}deg) translateY(${[16, 0, 16][i]}px)` }}><ScreenMockup s={s} /></div>)}
      </div>
    );
  return (
    <div className="relative">
      <ScreenMockup s={p.screenshots[0]} className={p.screenshots[0].frame === "popup" ? "mx-auto max-w-[300px]" : ""} />
      {p.screenshots[0].frame === "popup" && <div className="absolute -right-2 bottom-4 hidden w-40 rotate-6 sm:block"><ScreenMockup s={p.screenshots[1]} /></div>}
    </div>
  );
}

function ProjectPage() {
  const { slug } = Route.useLoaderData();
  const p = getProject(slug)!;
  const sec = sectionFor[p.category];
  const hasGuide = p.category !== "website";

  return (
    <article>
      <header className="dark-panel grain px-5 pb-20 pt-28 md:px-10 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: sec.label, to: sec.to }, { label: p.name }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-reveal">
              <div className="flex items-center gap-3">
                <ProjectIcon p={p} className="h-14 w-14 text-xl" />
                <span className="rounded-sm border border-gold/50 px-2.5 py-1 text-xs uppercase tracking-wider text-gold">{categoryLabel[p.category]}</span>
              </div>
              <h1 className="mt-5 font-display text-[clamp(2.1rem,9.5vw,3rem)] font-semibold leading-[0.95] md:text-6xl">{p.name}</h1>
              <p className="mt-2 font-hand text-3xl text-beige">{p.tagline}</p>
              <p className="mt-4 max-w-lg text-parchment/80">{p.shortDescription}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalAction url={p.primaryAction.url} variant="paper">{p.primaryAction.label}</ExternalAction>
                <ExternalAction url={p.secondaryAction.url} variant="ghost"><Code2 className="h-4 w-4" />{p.secondaryAction.label}</ExternalAction>
              </div>
            </div>
            <HeroVisual p={p} />
          </div>
        </div>
      </header>

      <div className="paper torn-top -mt-5">
        <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 text-ink md:px-10">
          <section aria-labelledby="gal-h">
            <SectionLabel><span id="gal-h">Screenshots</span></SectionLabel>
            <p className="mb-6 mt-1 text-sm text-ink-muted">Demo mockups — click any screen to enlarge.</p>
            <ScreenshotGallery shots={p.screenshots} />
          </section>

          <section className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <SectionLabel>Overview</SectionLabel>
              <p className="mt-3 text-lg leading-relaxed">{p.fullDescription}</p>
              <h3 className="mt-8 font-display text-2xl font-semibold">Key features</h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                {p.features.map((f) => (
                  <li key={f.title} className="rounded-sm border border-ink/15 bg-paper-deep/60 p-4">
                    <Check className="h-5 w-5 text-moss" aria-hidden />
                    <p className="mt-2 font-semibold">{f.title}</p>
                    <p className="mt-1 text-sm text-ink-muted">{f.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="tape relative h-fit rotate-[0.6deg] bg-paper-deep p-6 shadow-paper">
              <h3 className="font-display text-2xl italic">Project notes</h3>
              <dl className="mt-3 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2"><dt className="text-ink-muted">Platform</dt><dd className="text-right">{p.platform}</dd></div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2"><dt className="text-ink-muted">Version</dt><dd>{p.version}</dd></div>
                <div className="flex justify-between gap-4 border-b border-ink/10 pb-2"><dt className="text-ink-muted">Status</dt><dd className="text-right">{p.status}</dd></div>
                {p.supportedBrowsers && <div className="flex justify-between gap-4 border-b border-ink/10 pb-2"><dt className="text-ink-muted">Browsers</dt><dd className="text-right">{p.supportedBrowsers.join(", ")}</dd></div>}
                <div><dt className="text-ink-muted">Built with</dt><dd className="mt-2 flex flex-wrap gap-1.5">{p.technologies.map((t) => <span key={t} className="rounded-sm bg-ink px-2 py-0.5 text-xs text-paper">{t}</span>)}</dd></div>
              </dl>
              <HandwrittenAnnotation className="mt-4 text-xl text-moss" rotate={-3}>details will be updated soon</HandwrittenAnnotation>
            </aside>
          </section>

          {hasGuide && (
            <section aria-labelledby="guide-h">
              <SectionLabel><span id="guide-h">Setup guide — 5 steps</span></SectionLabel>
              <div className="mt-6"><SetupGuide project={p} /></div>
            </section>
          )}

          <section aria-labelledby="lim-h" className="rounded-sm border border-ink/15 p-6">
            <h2 id="lim-h" className="flex items-center gap-2 font-display text-2xl"><AlertTriangle className="h-5 w-5 text-gold" />Limitations & compatibility</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-muted">{p.limitations.map((l) => <li key={l}>{l}</li>)}</ul>
          </section>

          <section aria-labelledby="rel-h">
            <div className="flex items-center gap-2"><Star className="text-gold" /><SectionLabel><span id="rel-h">Related projects</span></SectionLabel></div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">{relatedOf(p).map((r) => <ProjectCard key={r.id} p={r} />)}</div>
          </section>

          <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 font-medium hover:text-forest"><ArrowLeft className="h-4 w-4" />Back to all projects</Link>
        </div>
      </div>
    </article>
  );
}
