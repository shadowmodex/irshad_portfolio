import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Globe, Instagram, LayoutGrid, MonitorSmartphone, Puzzle, Smartphone, Youtube, Zap, Layers, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import { media, videos, instaPosts } from "@/data/media";
import { byCategory, categoryLabel, getProject, projects } from "@/data/projects";
import { useState } from "react";
import { useParallax } from "@/hooks/use-depth";
import { socialLinks } from "@/data/socialLinks";
import { HandwrittenAnnotation, SectionLabel, Star, PinnedPhoto } from "@/components/site/decor";
import { btn, ExternalAction, ProjectLink } from "@/components/site/ActionLink";
import { ProjectIcon, ScreenMockup } from "@/components/site/Mockup";
import { AppCard, ExtensionCard, WebsiteCard } from "@/components/site/cards";
import { SocialRow, TechStackGrid } from "@/components/site/misc";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Irshad Akhtar — Developer, App Builder & Creator" },
      { name: "description", content: "Irshad Akhtar builds Android apps, websites and browser extensions that solve everyday problems — and documents the journey online." },
      { property: "og:title", content: "Irshad Akhtar — Developer, App Builder & Creator" },
      { property: "og:description", content: "Android apps, websites and browser extensions by Irshad Akhtar." },
    ],
  }),
  component: Home,
});

function HeroSection() {
  const parallax = useParallax();
  return (
    <section {...parallax} className="relative isolate overflow-hidden bg-night">
      <img src={media.workspace} alt="Warm developer workspace at sunset with dual monitors, plants and a desk lamp (demo image)" width={1600} height={1008} className="hero-parallax absolute inset-0 -z-10 h-full w-full object-cover object-[65%_center] opacity-90 lg:left-[28%] lg:w-[72%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/10 lg:via-night/70" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-night to-transparent" />

      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-20 pt-28 md:px-10 lg:grid-cols-[minmax(0,560px)_1fr] lg:pb-28 lg:pt-32">
        <div className="relative animate-reveal">
          <HandwrittenAnnotation className="mb-4 text-lg text-ash sm:text-xl md:absolute md:-left-2 md:-top-4 md:mb-0" rotate={-8}>// developer · creator · gamer · learner</HandwrittenAnnotation>
          <h1 className="text-parchment md:pt-6">
            <span className="block font-display text-[clamp(4.2rem,11vw,8rem)] font-semibold leading-[0.85] tracking-tight">{profile.firstName}</span>
            <span className="-mt-2 block pl-10 font-hand text-[clamp(3.6rem,9vw,6.5rem)] leading-[0.9] text-beige">{profile.lastName}</span>
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-parchment/85">{profile.tagline}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/projects" className={btn("paper")}>Explore My Work <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/youtube" className={btn("ghost")}><Youtube className="h-4 w-4 text-yt" />Watch on YouTube</Link>
          </div>
          <SocialRow className="mt-6 text-parchment/80" />
          <Link to="/projects/$slug" params={{ slug: "omni-video-downloader" }} className="mt-6 flex max-w-md items-center gap-3 rounded-sm border border-parchment/25 bg-night/60 px-4 py-3 text-sm text-parchment backdrop-blur-sm transition-colors hover:border-gold">
            <span className="relative flex h-2.5 w-2.5 shrink-0"><span className="absolute inset-0 animate-ping rounded-full bg-gold/60 motion-reduce:hidden" /><span className="h-2.5 w-2.5 rounded-full bg-gold" /></span>
            <span className="font-display text-base">Currently building</span>
            <span className="truncate text-xs text-ash">{profile.currentlyBuilding}</span>
            <ArrowRight className="ml-auto h-4 w-4 shrink-0" />
          </Link>
        </div>

        <div aria-hidden className="hero-parallax-fg relative hidden lg:block">
          <HandwrittenAnnotation className="absolute -left-10 top-4 text-2xl text-parchment/80" rotate={-10}>Building useful stuff.<br />Exploring new tech.<br />Learning everyday.<br />— Irshad</HandwrittenAnnotation>
          <Star className="absolute left-40 top-44 h-6 w-6 text-parchment/70" />
          <HandwrittenAnnotation className="absolute right-[18%] top-0 text-3xl text-parchment/80" rotate={-12}>Better Tools<br />Better Days!</HandwrittenAnnotation>
          <div className="paper absolute right-0 top-8 w-36 rotate-3 p-4 shadow-[0_18px_30px_-12px_oklch(0_0_0/0.6),0_4px_8px_-4px_oklch(0_0_0/0.4)]">
            <p className="font-hand text-2xl leading-tight text-ink">Small Steps<br />Big Dreams <Star className="inline h-4 w-4" /></p>
          </div>
          <HandwrittenAnnotation className="absolute bottom-6 right-4 text-2xl leading-snug text-parchment/80" rotate={0}>Build<br />Learn<br />Play<br />Repeat</HandwrittenAnnotation>
        </div>
      </div>
    </section>
  );
}

const FEATURED_SLUGS = ["omni-video-downloader", "shadowmodex", "pocket-knife", "brown-oak-restaurant"] as const;
const featureIcons = [Layers, Sparkles, Zap];

function FeaturedProject({ slug }: { slug: string }) {
  const p = getProject(slug)!;
  const isOmni = p.slug === "omni-video-downloader";
  const isWebsite = p.category === "website";
  const badges = isOmni ? ["Android App", "Browser Extension"] : [categoryLabel[p.category]];
  const description = isOmni ? "Video downloader designed for a wide range of websites, with a clean and simple interface." : p.shortDescription;
  const highlights = isOmni ? ["Multiple formats", "Clean interface", "Download progress"] : p.features.slice(0, 3).map((f) => f.title);
  return (
    <div className="dark-panel grain torn-both relative overflow-hidden px-6 py-8 md:px-9 md:py-10">
      <div key={p.slug} className="grid animate-in fade-in items-center gap-8 duration-300 md:grid-cols-[1fr_minmax(0,0.9fr)]">
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            {p.icon.image ? (
              <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-parchment">
                <img src={p.icon.image} alt={`${p.name} logo`} className="h-full w-full object-cover" />
              </span>
            ) : (
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-parchment font-display ${p.icon.glyph.length > 1 ? "text-sm" : "text-xl"}`}>{p.icon.glyph}</span>
            )}
            <h3 className={`font-display font-semibold ${p.name.length > 14 && !isOmni ? "text-[clamp(1.9rem,8vw,2.25rem)] md:text-5xl" : "text-[clamp(2.4rem,11vw,3rem)] md:text-6xl"}`}>{isOmni ? p.shortName : p.name}</h3>
            {badges.map((b) => <span key={b} className="rounded-sm border border-parchment/40 px-2 py-0.5 text-xs">{b}</span>)}
          </div>
          <p className="mt-3 max-w-sm text-parchment/85">{description}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <ProjectLink slug={p.slug} variant="ghost" size="sm">View Details <ArrowRight className="h-3.5 w-3.5" /></ProjectLink>
            {isWebsite ? (
              <ExternalAction url={p.liveUrl} variant="paper" size="sm"><Globe className="h-3.5 w-3.5" />Visit Website</ExternalAction>
            ) : (
              <ExternalAction url={p.downloadUrl} variant="paper" size="sm"><Download className="h-3.5 w-3.5" />Download APK</ExternalAction>
            )}
          </div>
          <ul className="mt-6 grid grid-cols-3 gap-3 text-xs text-ash">
            {highlights.map((t, i) => {
              const I = featureIcons[i % featureIcons.length]!;
              return <li key={t} className="flex items-center gap-2"><I className="h-4 w-4 shrink-0 text-gold" />{t}</li>;
            })}
          </ul>
        </div>
        {isWebsite ? (
          <div className="relative flex items-end justify-center pr-6">
            <div className="w-full max-w-[340px] rotate-[-2deg]"><ScreenMockup s={p.screenshots[0]} /></div>
          </div>
        ) : (
          <div className="relative flex items-end justify-center gap-3 pr-6">
            {p.screenshots.map((s, i) => (
              <div key={i} className="w-[30%] max-w-[130px]" style={{ transform: `rotate(${[-8, -2, 5][i]}deg) translateY(${[10, -6, 14][i]}px)` }}>
                <ScreenMockup s={s} size="sm" />
              </div>
            ))}
            {isOmni && <HandwrittenAnnotation className="absolute -right-2 -top-6 hidden text-2xl text-parchment/80 md:block" rotate={-14}>My most<br />used project ↘</HandwrittenAnnotation>}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectsPanel({ selected, onSelect }: { selected: string; onSelect: (slug: string) => void }) {
  const rows = FEATURED_SLUGS.map((s) => getProject(s)!);
  return (
    <div className="flex flex-col gap-1.5" role="group" aria-label="Choose featured project">
      <h3 className="sr-only">My projects</h3>
      {rows.map((p) => {
        const active = p.slug === selected;
        return (
          <button key={p.id} type="button" aria-pressed={active} aria-controls="featured-panel" onClick={() => onSelect(p.slug)} className={`group flex min-h-12 w-full items-center gap-3 rounded-sm border px-2.5 py-1.5 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-gold ${active ? "border-ink bg-ink text-paper" : "border-ink/15 bg-paper-deep/70 text-ink hover:border-ink/50"}`}>
            <ProjectIcon p={p} className="h-8 w-8 text-xs" /> <span className="flex-1 truncate font-medium">{p.name}</span><ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        );
      })}
      <Link to="/projects" className="group flex min-h-12 items-center gap-3 rounded-sm border border-ink/15 bg-paper-deep/70 px-2.5 py-1.5 text-sm text-ink hover:border-ink/50">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-paper"><LayoutGrid className="h-4 w-4" /></span><span className="flex-1">More Projects</span><ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { to: "/apps" as const, label: "Android Apps", I: Smartphone },
    { to: "/extensions" as const, label: "Browser Extensions", I: Puzzle },
    { to: "/websites" as const, label: "Websites", I: Globe },
    { to: "/youtube" as const, label: "YouTube Channel", I: Youtube },
    { to: "/instagram" as const, label: "Instagram", I: Instagram },
  ];
  return (
    <div className="tape relative rotate-[0.6deg] rounded-sm bg-paper p-5 text-ink shadow-paper">
      <h3 className="font-display text-2xl italic">Quick Links</h3>
      <ul className="mt-2 divide-y divide-ink/10">
        {links.map(({ to, label, I }) => (
          <li key={to}>
            <Link to={to} className="group flex min-h-11 items-center gap-3 text-sm hover:text-forest">
              <I className="h-4.5 w-4.5 text-moss" /> <span className="flex-1">{label}</span><ArrowRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ViewAll({ to, hash }: { to: "/apps" | "/extensions" | "/websites" | "/about"; hash?: string }) {
  return <Link to={to} {...(hash ? { hash } : {})} className="inline-flex min-h-9 items-center gap-1 text-xs font-medium hover:text-forest">View All <ArrowRight className="h-3.5 w-3.5" /></Link>;
}

function Home() {
  const apps = ["shadowmodex", "pocket-knife", "omni-video-downloader"].map((s) => getProject(s)!);
  const exts = byCategory("extension");
  const sites = byCategory("website");
  const [featured, setFeatured] = useState<string>("omni-video-downloader");

  return (
    <>
      <HeroSection />

      {/* Paper board: featured + lists */}
      <div className="paper torn-top relative -mt-6">
        <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-10 md:px-10">
          <section aria-labelledby="featured" className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.62fr)_minmax(0,0.58fr)]">
            <div>
              <SectionLabel className="mb-3 text-ink"><span id="featured">Featured Project</span></SectionLabel>
              <div id="featured-panel" aria-live="polite"><FeaturedProject slug={featured} /></div>
            </div>
            <div className="lg:pt-12"><ProjectsPanel selected={featured} onSelect={setFeatured} /></div>
            <div className="lg:pt-10"><QuickLinks /></div>
          </section>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <section aria-labelledby="apps-h">
              <div className="mb-3 flex items-end justify-between text-ink"><SectionLabel><span id="apps-h">Android Apps</span></SectionLabel><ViewAll to="/apps" /></div>
              <div className="grid gap-3 sm:grid-cols-3">{apps.map((p) => <AppCard key={p.id} p={p} />)}</div>
            </section>
            <section aria-labelledby="ext-h">
              <div className="mb-3 flex items-end justify-between text-ink"><SectionLabel><span id="ext-h">Browser Extensions</span></SectionLabel><ViewAll to="/extensions" /></div>
              <div className="grid gap-3 sm:grid-cols-3">{exts.map((p) => <ExtensionCard key={p.id} p={p} />)}</div>
            </section>
          </div>
        </div>
      </div>

      {/* Websites + creator corner */}
      <div className="dark-panel grain">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <section aria-labelledby="web-h">
            <div className="mb-4 flex items-end justify-between"><SectionLabel><span id="web-h">Websites</span></SectionLabel><Link to="/websites" className="inline-flex items-center gap-1 text-xs hover:text-gold">View All <ArrowRight className="h-3.5 w-3.5" /></Link></div>
            <div className="grid gap-6 sm:grid-cols-2">{sites.map((p) => <WebsiteCard key={p.id} p={p} />)}</div>
          </section>

          <section aria-labelledby="creator-h" className="relative">
            <SectionLabel className="mb-4"><span id="creator-h">Creator Corner</span></SectionLabel>
            <HandwrittenAnnotation className="absolute -left-4 top-14 hidden text-xl text-ash xl:block" rotate={-14}>Gaming,<br />Tech,<br />Tutorials…</HandwrittenAnnotation>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-parchment/15 bg-night/60 p-4">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-yt text-paper"><Youtube className="h-5 w-5" /></span><div><p className="font-display text-lg leading-tight">YouTube Channel</p><p className="text-xs text-ash">{socialLinks.youtube.handle}</p></div></div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">{videos.map((v) => <img key={v.id} src={v.image} alt={`Demo thumbnail: ${v.topic}`} loading="lazy" className="aspect-video w-full rounded-sm object-cover" />)}</div>
                <Link to="/youtube" className={`${btn("ghost", "sm")} mt-3 w-full`}>Visit Channel <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
              <div className="rounded-sm border border-parchment/15 bg-night/60 p-4">
                <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-night"><Instagram className="h-5 w-5" /></span><div><p className="font-display text-lg leading-tight">Instagram</p><p className="text-xs text-ash">{socialLinks.instagram.handle}</p></div></div>
                <div className="mt-3 grid grid-cols-3 gap-1.5">{instaPosts.slice(0, 3).map((p) => <img key={p.id} src={p.image} alt={p.alt} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />)}</div>
                <Link to="/instagram" className={`${btn("ghost", "sm")} mt-3 w-full`}>Follow on Instagram <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* About + Tech */}
      <div className="paper torn-top -mt-3">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-16 pt-14 md:px-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <section aria-labelledby="about-h" className="grid gap-8 sm:grid-cols-[180px_1fr]">
            <div className="relative mx-auto w-44 sm:mx-0">
              <PinnedPhoto src={media.portrait} alt="Portrait of Irshad Akhtar" rotate={-4} />
              <HandwrittenAnnotation className="mt-4 text-center text-xl text-moss" rotate={-4}>Always learning,<br />always building.</HandwrittenAnnotation>
            </div>
            <div className="text-ink">
              <SectionLabel><span id="about-h">About Me</span></SectionLabel>
              <p className="mt-3 leading-relaxed text-ink-muted">{profile.shortBio}</p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="font-hand text-xl text-moss">From</dt><dd>{profile.location}</dd></div>
                <div><dt className="font-hand text-xl text-moss">Education</dt><dd>{profile.education}</dd></div>
                <div className="col-span-2"><dt className="font-hand text-xl text-moss">Interests</dt><dd>{profile.interests.join(" · ")}</dd></div>
              </dl>
              <Link to="/about" className={`${btn("ink", "sm")} mt-6`}>Read More <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </section>
          <section aria-labelledby="tech-h" className="text-ink">
            <div className="mb-4 flex items-end justify-between"><SectionLabel><span id="tech-h">Tech Stack</span></SectionLabel><ViewAll to="/about" hash="tools-h" /></div>
            <TechStackGrid compact />
            <p className="mt-5 text-xs text-ink-muted">Tools and technologies used across these projects.</p>
            <div className="mt-6 flex items-center gap-2 text-moss"><Star /><span className="font-hand text-2xl">Better version of me, every day.</span></div>
          </section>
        </div>
        <p className="sr-only">{projects.length} projects in this portfolio.</p>
        <div className="mx-auto max-w-[1440px] px-5 pb-10 md:px-10">
          <div className="flex flex-col items-start justify-between gap-4 rounded-sm border border-ink/15 bg-paper-deep/60 p-5 text-ink sm:flex-row sm:items-center">
            <div><p className="font-display text-2xl">Contact — <span className="font-hand">something</span></p><p className="text-sm text-ink-muted">Have a project idea, a collaboration, or just want to say hi?</p></div>
            <Link to="/contact" className={btn("ink")}><MonitorSmartphone className="h-4 w-4" />Let's talk</Link>
          </div>
        </div>
      </div>
    </>
  );
}
