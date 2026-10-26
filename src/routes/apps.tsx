import { createFileRoute } from "@tanstack/react-router";
import { Check, Download } from "lucide-react";
import { byCategory } from "@/data/projects";
import { PageIntro, HandwrittenAnnotation } from "@/components/site/decor";
import { ProjectIcon } from "@/components/site/Mockup";
import { ScreenshotGallery } from "@/components/site/Gallery";
import { ExternalAction, ProjectLink } from "@/components/site/ActionLink";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/apps")({
  head: () => ({
    meta: [
      { title: "Android Apps — Irshad Akhtar" },
      { name: "description", content: "ShadowmodeX, Pocket Knife and Omni Video Downloader — Android apps by Irshad Akhtar." },
      { property: "og:title", content: "Android Apps — Irshad Akhtar" },
      { property: "og:description", content: "Three Android apps: messaging, utilities and video downloads." },
    ],
  }),
  component: AppsPage,
});

function AppsPage() {
  const apps = byCategory("app");
  return (
    <>
      <PageIntro eyebrow="// in your pocket" title="Android" script="Apps">Three apps, each built to make one part of the day simpler — chatting, handling files and saving videos.</PageIntro>
      {apps.map((p, i) => (
        <section key={p.id} aria-labelledby={`${p.id}-h`} className={cn(i % 2 === 0 ? "paper text-ink" : "dark-panel grain", "torn-top -mt-4")}>
          <div className={cn("mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-10 lg:grid-cols-2")}>
            <div className={cn(i % 2 === 1 && "lg:order-2")}>
              <div className="flex items-center gap-3"><ProjectIcon p={p} className="h-14 w-14 text-xl" /><div><p className="font-hand text-xl text-moss">0{i + 1} — {p.platform}</p><p className="text-xs opacity-70">{p.version} · {p.status}</p></div></div>
              <h2 id={`${p.id}-h`} className="mt-4 font-display text-[clamp(2.1rem,9.5vw,3rem)] font-semibold">{p.name}</h2>
              <p className="mt-3 max-w-md text-lg opacity-85">{p.shortDescription}</p>
              <ul className="mt-5 space-y-2">{p.features.map((f) => <li key={f.title} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span><b className="font-semibold">{f.title}</b> — {f.text}</span></li>)}</ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <ExternalAction url={p.downloadUrl} variant={i % 2 === 0 ? "ink" : "paper"}><Download className="h-4 w-4" />Download APK</ExternalAction>
                <ProjectLink slug={p.slug} variant={i % 2 === 0 ? "outline-ink" : "ghost"}>View Details</ProjectLink>
              </div>
            </div>
            <div className="relative">
              <ScreenshotGallery shots={p.screenshots} />
              <HandwrittenAnnotation className="absolute -top-8 right-0 text-2xl text-gold" rotate={-6}>tap to enlarge ↓</HandwrittenAnnotation>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
