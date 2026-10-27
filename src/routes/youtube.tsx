import { createFileRoute } from "@tanstack/react-router";
import { Youtube } from "lucide-react";
import { media, videos } from "@/data/media";
import { socialLinks } from "@/data/socialLinks";
import { getProject } from "@/data/projects";
import { SectionLabel } from "@/components/site/decor";
import { VideoCard } from "@/components/site/misc";
import { ExternalAction } from "@/components/site/ActionLink";
import { ProjectCard } from "@/components/site/cards";

export const Route = createFileRoute("/youtube")({
  head: () => ({
    meta: [
      { title: "YouTube — ShadowmodeX by Irshad Akhtar" },
      { name: "description", content: "ShadowmodeX on YouTube: tech, gaming and tutorials from Irshad Akhtar." },
      { property: "og:title", content: "ShadowmodeX on YouTube" },
      { property: "og:description", content: "Tech, gaming and tutorials by Irshad Akhtar." },
    ],
  }),
  component: YoutubePage,
});

function YoutubePage() {
  const featured = videos[0]!;
  const rest = videos.slice(1);
  const yt = socialLinks.youtube;
  return (
    <div className="dark-panel grain">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 md:px-10 md:pt-36">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-5">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-night shadow-md">
              <img src={media.youtubeDp} alt={`${yt.handle} channel avatar`} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-hand text-2xl text-gold">// on YouTube</p>
              <h1 className="font-display text-[clamp(2.1rem,9.5vw,3rem)] font-semibold md:text-7xl">{yt.handle}</h1>
              <p className="mt-1 max-w-md text-ash">Tech, gaming, tutorials and the story behind the projects I build.</p>
            </div>
          </div>
          <ExternalAction url={yt.url} variant="yt"><Youtube className="h-4 w-4" />Visit Channel</ExternalAction>
        </div>

        <section aria-labelledby="feat-h" className="relative mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <h2 id="feat-h" className="sr-only">Featured video</h2>
          <VideoCard {...featured} big />
          <div className="space-y-6">{rest.map((v) => <VideoCard key={v.id} {...v} />)}</div>
        </section>

        <section className="mt-20">
          <SectionLabel>Videos</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">{videos.map((v) => <VideoCard key={v.id} {...v} />)}</div>
        </section>

        <section className="paper torn-both mt-20 px-6 py-10 md:px-10">
          <SectionLabel className="text-ink">Projects featured on the channel</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{["omni-video-downloader", "shadowmodex"].map((s) => <ProjectCard key={s} p={getProject(s)!} />)}</div>
        </section>
      </div>
    </div>
  );
}
