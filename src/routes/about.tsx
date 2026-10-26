import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { media } from "@/data/media";
import { getProject } from "@/data/projects";
import { HandwrittenAnnotation, PinnedPhoto, SectionLabel, Star } from "@/components/site/decor";
import { TechStackGrid } from "@/components/site/misc";
import { ProjectCard } from "@/components/site/cards";
import { btn } from "@/components/site/ActionLink";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Irshad Akhtar" },
      { name: "description", content: "Irshad Akhtar is a developer and creator from Faridabad, studying BCA and building apps, websites and extensions." },
      { property: "og:title", content: "About Irshad Akhtar" },
      { property: "og:description", content: "Developer, app builder and content creator from Faridabad, India." },
    ],
  }),
  component: AboutPage,
});

const journey = [
  { t: "Curiosity", d: "It started with taking apart how apps and websites work — and wanting to build my own." },
  { t: "First builds", d: "Small web pages and experiments with HTML, CSS and JavaScript." },
  { t: "Into Android", d: "Building ShadowmodeX and Pocket Knife to solve problems I actually had." },
  { t: "Into the browser", d: "Turning the same ideas into lightweight browser extensions." },
  { t: "Now", d: "Growing Omni, studying BCA and documenting the journey on YouTube and Instagram." },
];

function AboutPage() {
  return (
    <>
      <header className="dark-panel grain px-5 pb-20 pt-28 md:px-10 md:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_280px]">
          <div className="animate-reveal">
            <p className="font-hand text-2xl text-gold">// hello, I'm</p>
            <h1 className="font-display text-[clamp(2.75rem,14vw,3.75rem)] font-semibold leading-[0.9] md:text-8xl">Irshad <span className="font-hand font-normal text-beige">Akhtar</span></h1>
            <p className="mt-5 max-w-xl text-lg text-parchment/85">{profile.shortBio}</p>
            <ul className="mt-6 flex flex-wrap gap-5 text-sm text-ash">
              <li className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" />{profile.location}</li>
              <li className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-gold" />{profile.education}</li>
            </ul>
          </div>
          <div className="relative mx-auto w-56 md:w-full">
            <PinnedPhoto src={media.portrait} alt="Portrait of Irshad Akhtar" rotate={3} />
            <HandwrittenAnnotation className="absolute -bottom-10 -left-8 text-2xl text-parchment/80" rotate={-8}>always learning ✶</HandwrittenAnnotation>
          </div>
        </div>
      </header>

      <div className="paper torn-top -mt-5 text-ink">
        <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 md:px-10">
          <section className="grid gap-10 md:grid-cols-2">
            <div>
              <SectionLabel>Who I am</SectionLabel>
              <p className="mt-3 leading-relaxed">I'm a developer, app builder and content creator. I like making practical things — the kind of small tool you open every day without thinking about it. When I'm not coding, I'm probably gaming, watching cricket, or halfway through a K-drama with K-pop playing in the background.</p>
              <h3 className="mt-8 font-display text-2xl font-semibold">Education</h3>
              <p className="mt-1 text-ink-muted">Currently in the second year of my BCA (Bachelor of Computer Applications).</p>
            </div>
            <div>
              <SectionLabel>Interests</SectionLabel>
              <ul className="mt-4 flex flex-wrap gap-2">{profile.interests.map((i) => <li key={i} className="rounded-full border border-ink/25 px-3 py-1 text-sm">{i}</li>)}</ul>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-sm bg-ink p-5 text-paper"><p className="font-hand text-xl text-gold">Current focus</p><p className="mt-1 text-sm">New features for Omni and polishing my Android and extension projects.</p></div>
                <div className="rounded-sm border border-ink/20 p-5"><p className="font-hand text-xl text-moss">Goals</p><p className="mt-1 text-sm">Build useful products, keep learning new technologies and grow as a developer.</p></div>
              </div>
            </div>
          </section>

          <section aria-labelledby="journey-h">
            <SectionLabel><span id="journey-h">Developer journey</span></SectionLabel>
            <ol className="relative mt-8 space-y-8 border-l border-ink/25 pl-8">
              {journey.map((j, i) => (
                <li key={j.t} className="relative">
                  <span className="absolute -left-[41px] top-0.5 grid h-6 w-6 place-items-center rounded-full bg-paper ring-1 ring-ink/30"><Star className="h-3.5 w-3.5 text-gold" /></span>
                  <p className="font-hand text-xl text-moss">0{i + 1}</p>
                  <h3 className="font-display text-2xl font-semibold">{j.t}</h3>
                  <p className="text-ink-muted">{j.d}</p>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="tools-h">
            <SectionLabel><span id="tools-h">Technologies & tools</span></SectionLabel>
            <p className="mb-6 mt-1 text-sm text-ink-muted">What I've used across my projects — some daily, some while learning.</p>
            <TechStackGrid />
          </section>

          <section aria-labelledby="sel-h">
            <SectionLabel><span id="sel-h">Selected projects</span></SectionLabel>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{["omni-video-downloader", "pocket-knife", "brown-oak-restaurant"].map((s) => <ProjectCard key={s} p={getProject(s)!} />)}</div>
          </section>

          <section className="dark-panel grain torn-both px-8 py-12 text-center text-parchment">
            <p className="font-hand text-3xl text-gold">let's build something</p>
            <h2 className="mt-1 font-display text-4xl">Have an idea or want to collaborate?</h2>
            <Link to="/contact" className={`${btn("paper")} mt-6`}>Get in touch <ArrowRight className="h-4 w-4" /></Link>
          </section>
        </div>
      </div>
    </>
  );
}
