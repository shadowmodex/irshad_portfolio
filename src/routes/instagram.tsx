import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { instaPosts, media } from "@/data/media";
import { socialLinks } from "@/data/socialLinks";
import { getProject } from "@/data/projects";
import { HandwrittenAnnotation, SectionLabel, Star } from "@/components/site/decor";
import { ExternalAction } from "@/components/site/ActionLink";
import { ProjectCard } from "@/components/site/cards";

export const Route = createFileRoute("/instagram")({
  head: () => ({
    meta: [
      { title: "Instagram — @shadowmodex719 · Irshad Akhtar" },
      { name: "description", content: "Photos and moments from Irshad Akhtar on Instagram, @shadowmodex719." },
      { property: "og:title", content: "@shadowmodex719 on Instagram" },
      { property: "og:description", content: "Photos and moments from Irshad Akhtar." },
    ],
  }),
  component: InstagramPage,
});

function InstagramPage() {
  const ig = socialLinks.instagram;
  const gallery = [...instaPosts, ...instaPosts.slice(0, 2).map((p) => ({ ...p, id: p.id + "b" }))];
  return (
    <div className="paper">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 text-ink md:px-10 md:pt-36">
        <header className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <div className="photo-frame tape h-32 w-32 rotate-[-4deg]"><img src={media.mountains} alt="Profile image placeholder" className="h-full w-full object-cover" /></div>
          <div>
            <p className="font-hand text-2xl text-moss">// on Instagram</p>
            <h1 className="font-display text-[clamp(1.8rem,8.5vw,3rem)] font-semibold md:text-6xl">{ig.handle}</h1>
            <p className="mt-2 max-w-md text-ink-muted">Moments between builds — the desk, the walks, the little things. Photos below are demo placeholders.</p>
          </div>
          <ExternalAction url={ig.url} variant="ink"><Instagram className="h-4 w-4" />Follow on Instagram</ExternalAction>
        </header>

        <section aria-labelledby="feat-h" className="mt-16">
          <SectionLabel><span id="feat-h">Featured</span></SectionLabel>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {instaPosts.slice(0, 3).map((p, i) => (
              <figure key={p.id} className="photo-frame tape" style={{ transform: `rotate(${[-3, 2, -1.5][i]}deg)` }}>
                <img src={p.image} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <figcaption className="pt-2 text-center font-hand text-xl">{p.note}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="gal-h" className="relative mt-20">
          <SectionLabel><span id="gal-h">Gallery</span></SectionLabel>
          <Star className="absolute right-0 top-0 h-7 w-7 text-gold" />
          <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
            {gallery.map((p, i) => <img key={p.id} src={p.image} alt={p.alt} loading="lazy" className={`w-full object-cover ${i === 0 ? "row-span-2 h-full" : "aspect-square"}`} />)}
          </div>
          <HandwrittenAnnotation className="mt-4 text-right text-2xl text-moss" rotate={-2}>more on the grid →</HandwrittenAnnotation>
        </section>

        <section className="mt-16">
          <SectionLabel>Related projects</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{["hq-image-downloader", "brown-oak-restaurant"].map((s) => <ProjectCard key={s} p={getProject(s)!} />)}</div>
        </section>
      </div>
    </div>
  );
}
