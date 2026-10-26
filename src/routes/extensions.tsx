import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Chrome } from "lucide-react";
import { byCategory } from "@/data/projects";
import { PageIntro } from "@/components/site/decor";
import { ProjectIcon } from "@/components/site/Mockup";
import { ScreenshotGallery } from "@/components/site/Gallery";
import { ExternalAction, ProjectLink, btn } from "@/components/site/ActionLink";

export const Route = createFileRoute("/extensions")({
  head: () => ({
    meta: [
      { title: "Browser Extensions — Irshad Akhtar" },
      { name: "description", content: "Omni, Pocket Knife and HQ Image Downloader browser extensions by Irshad Akhtar." },
      { property: "og:title", content: "Browser Extensions — Irshad Akhtar" },
      { property: "og:description", content: "Small browser tools for videos, files and images." },
    ],
  }),
  component: ExtensionsPage,
});

function ExtensionsPage() {
  const list = byCategory("extension");
  return (
    <>
      <PageIntro eyebrow="// toolbar sized" title="Browser" script="Extensions">Little tools that live next to your address bar — for videos, documents and images.</PageIntro>
      <div className="paper torn-top -mt-5">
        <div className="mx-auto max-w-6xl space-y-10 px-5 py-16 text-ink md:px-10">
          {list.map((p) => (
            <article key={p.id} className="grid gap-8 rounded-sm border border-ink/15 bg-paper-deep/50 p-6 shadow-paper md:p-8 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <ProjectIcon p={p} className="h-14 w-14 text-xl" />
                <h2 className="mt-4 font-display text-4xl font-semibold">{p.name}</h2>
                <p className="mt-2 text-ink-muted">{p.shortDescription}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div><dt className="font-hand text-lg text-moss">Browsers</dt><dd>{p.supportedBrowsers?.join(", ")}</dd></div>
                  <div><dt className="font-hand text-lg text-moss">Version</dt><dd>{p.version}</dd></div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-2">
                  <ExternalAction url={p.downloadUrl} variant="ink" size="sm"><Chrome className="h-3.5 w-3.5" />Get Extension</ExternalAction>
                  <Link to="/projects/$slug" params={{ slug: p.slug }} hash="guide-h" className={btn("outline-ink", "sm")}><BookOpen className="h-3.5 w-3.5" />Install guide</Link>
                  <ProjectLink slug={p.slug} variant="outline-ink" size="sm">Details</ProjectLink>
                </div>
              </div>
              <ScreenshotGallery shots={p.screenshots} className="grid-cols-3 sm:grid-cols-3" />
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
