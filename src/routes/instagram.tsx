import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Instagram } from "lucide-react";
import { instaPosts, media, type InstaPostItem } from "@/data/media";
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

function InstaGalleryCard({ post }: { post: InstaPostItem }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="flex flex-col rounded-sm border border-ink/15 bg-paper-deep/60 p-4 transition-colors hover:border-ink/30">
      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block overflow-hidden rounded-sm bg-night/5"
        title={`View ${post.title} on Instagram`}
      >
        <img
          src={post.image}
          alt={post.alt}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-night/20 opacity-0 transition-opacity group-hover:opacity-100">
          <span className="flex items-center gap-1.5 rounded-sm bg-paper px-3 py-1.5 text-xs font-semibold text-ink shadow">
            <Instagram className="h-3.5 w-3.5" /> View Post ↗
          </span>
        </span>
      </a>

      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="font-display text-lg font-semibold text-ink">{post.title}</h3>
        <p className={`mt-2 text-xs/relaxed text-ink-muted whitespace-pre-line ${expanded ? "" : "line-clamp-4"}`}>
          {post.caption}
        </p>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 self-start font-sans text-xs font-medium text-forest underline hover:text-moss cursor-pointer"
        >
          {expanded ? "Show less ↑" : "Read full caption ↓"}
        </button>

        <div className="mt-auto pt-3">
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:text-forest"
          >
            Open on Instagram <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </article>
  );
}

function InstagramPage() {
  const ig = socialLinks.instagram;
  return (
    <div className="paper">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 text-ink md:px-10 md:pt-36">
        <header className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
          <div className="photo-frame tape h-32 w-32 rotate-[-4deg]">
            <img src={media.instagramDp} alt="Irshad Akhtar (@shadowmodex719) profile" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="font-hand text-2xl text-moss">// on Instagram</p>
            <h1 className="font-display text-[clamp(1.8rem,8.5vw,3rem)] font-semibold md:text-6xl">{ig.handle}</h1>
            <p className="mt-2 max-w-md text-ink-muted">Moments between builds — the desk, the walks, the little things.</p>
          </div>
          <ExternalAction url={ig.url} variant="ink"><Instagram className="h-4 w-4" />Follow on Instagram</ExternalAction>
        </header>

        <section aria-labelledby="feat-h" className="mt-16">
          <SectionLabel><span id="feat-h">Featured</span></SectionLabel>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {instaPosts.map((p, i) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="photo-frame tape group block transition-transform duration-300 hover:scale-[1.02] hover:rotate-0"
                style={{ transform: `rotate(${[-3, 2, -1.5][i]}deg)` }}
                title={`Open ${p.title} on Instagram`}
              >
                <img src={p.image} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <figcaption className="pt-2 text-center font-hand text-xl text-ink transition-colors group-hover:text-forest">{p.note}</figcaption>
              </a>
            ))}
          </div>
        </section>

        <section aria-labelledby="gal-h" className="relative mt-20">
          <SectionLabel><span id="gal-h">Gallery</span></SectionLabel>
          <Star className="absolute right-0 top-0 h-7 w-7 text-gold" />
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {instaPosts.map((p) => (
              <InstaGalleryCard key={p.id} post={p} />
            ))}
          </div>
          <div className="mt-4 flex justify-end">
            <a
              href={ig.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <HandwrittenAnnotation className="text-2xl text-moss" rotate={-2}>more on the grid →</HandwrittenAnnotation>
            </a>
          </div>
        </section>

        <section className="mt-16">
          <SectionLabel>Related projects</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{["hq-image-downloader", "brown-oak-restaurant"].map((s) => <ProjectCard key={s} p={getProject(s)!} />)}</div>
        </section>
      </div>
    </div>
  );
}

