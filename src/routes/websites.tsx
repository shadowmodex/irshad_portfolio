import { createFileRoute } from "@tanstack/react-router";
import { Check, ExternalLink } from "lucide-react";
import { getProject } from "@/data/projects";
import { media } from "@/data/media";
import { PageIntro, PinnedPhoto } from "@/components/site/decor";
import { ScreenMockup } from "@/components/site/Mockup";
import { ScreenshotGallery } from "@/components/site/Gallery";
import { ExternalAction, ProjectLink } from "@/components/site/ActionLink";

export const Route = createFileRoute("/websites")({
  head: () => ({
    meta: [
      { title: "Websites — Irshad Akhtar" },
      { name: "description", content: "Omni Video Downloader website and Brown Oak Restaurant — web projects by Irshad Akhtar." },
      { property: "og:title", content: "Websites — Irshad Akhtar" },
      { property: "og:description", content: "Web projects: Omni and Brown Oak Restaurant." },
    ],
  }),
  component: WebsitesPage,
});

function WebsitesPage() {
  const omni = getProject("omni-website")!;
  const oak = getProject("brown-oak-restaurant")!;
  return (
    <>
      <PageIntro eyebrow="// on the web" title="Websites" script="I've made">Two very different sites — a utility for videos, and a warm home for a restaurant.</PageIntro>

      <section className="dark-panel grain">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <ScreenMockup s={omni.screenshots[0]} />
            <div>
              <h2 className="font-display text-4xl font-semibold">{omni.name}</h2>
              <p className="mt-3 text-parchment/80">{omni.shortDescription}</p>
              <ul className="mt-4 space-y-2 text-sm">{omni.features.map((f) => <li key={f.title} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-gold" />{f.title}</li>)}</ul>
              <div className="mt-6 flex flex-wrap gap-3"><ExternalAction url={omni.liveUrl} variant="paper"><ExternalLink className="h-4 w-4" />Visit Website</ExternalAction><ProjectLink slug={omni.slug} variant="ghost">View Project Details</ProjectLink></div>
            </div>
          </div>
          <div className="mt-12"><ScreenshotGallery shots={omni.screenshots} /></div>
        </div>
      </section>

      <section className="paper torn-top -mt-4 text-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 className="font-display text-4xl font-semibold">{oak.name}</h2>
              <p className="mt-3 text-ink-muted">{oak.fullDescription}</p>
              <div className="mt-6 flex flex-wrap gap-3"><ExternalAction url={oak.liveUrl} variant="ink"><ExternalLink className="h-4 w-4" />Visit Website</ExternalAction><ProjectLink slug={oak.slug} variant="outline-ink">View Project Details</ProjectLink></div>
            </div>
            <div className="relative">
              <ScreenMockup s={oak.screenshots[0]} />
              <PinnedPhoto src={media.restaurant} alt="Demo food photography for Brown Oak" rotate={6} className="absolute -bottom-8 -right-2 hidden w-36 md:block" />
            </div>
          </div>
          <div className="mt-14"><ScreenshotGallery shots={oak.screenshots} /></div>
        </div>
      </section>
    </>
  );
}
