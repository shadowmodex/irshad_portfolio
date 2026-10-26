import { createFileRoute } from "@tanstack/react-router";
import { BookMarked, Github } from "lucide-react";
import { repositories } from "@/data/media";
import { socialLinks } from "@/data/socialLinks";
import { getProject } from "@/data/projects";
import { SectionLabel } from "@/components/site/decor";
import { ExternalAction } from "@/components/site/ActionLink";
import { ProjectCard } from "@/components/site/cards";

export const Route = createFileRoute("/github")({
  head: () => ({
    meta: [
      { title: "GitHub — Irshad Akhtar" },
      { name: "description", content: "Code and repositories from Irshad Akhtar's projects." },
      { property: "og:title", content: "Irshad Akhtar on GitHub" },
      { property: "og:description", content: "Repositories behind the apps, sites and extensions." },
    ],
  }),
  component: GithubPage,
});

function GithubPage() {
  return (
    <div className="dark-panel grain">
      <div className="mx-auto max-w-5xl px-5 pb-20 pt-28 md:px-10 md:pt-36">
        <div className="rounded-sm border border-parchment/15 bg-night/70 p-6 font-mono text-sm">
          <p className="text-ash">$ whoami</p>
          <p className="mt-1 text-gold">irshad-akhtar — developer · app builder · extension maker</p>
          <p className="mt-3 text-ash">$ cat README.md</p>
          <p className="mt-1 text-parchment/85">Building practical Android apps, websites and browser extensions. Repositories will be linked here once they're public.</p>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="font-display text-5xl font-semibold md:text-6xl"><Github className="mr-3 inline h-10 w-10" />GitHub</h1>
          <ExternalAction url={socialLinks.github.url} variant="paper">View profile</ExternalAction>
        </div>

        <section className="mt-12">
          <SectionLabel>Featured repositories</SectionLabel>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {repositories.map((r) => (
              <li key={r.id} className="flex flex-col rounded-sm border border-parchment/15 bg-night/50 p-5">
                <BookMarked className="h-5 w-5 text-gold" />
                <h3 className="mt-3 font-mono text-sm font-semibold">{r.name}</h3>
                <p className="mt-1 flex-1 text-sm text-ash">{r.description}</p>
                <span className="mt-3 w-fit rounded-full border border-moss px-2 py-0.5 text-xs text-beige">{r.language}</span>
                <ExternalAction url={r.url} variant="ghost" size="sm" className="mt-4">Open repository</ExternalAction>
              </li>
            ))}
          </ul>
        </section>

        <section className="paper torn-both mt-16 px-6 py-10 md:px-10">
          <SectionLabel className="text-ink">Related projects</SectionLabel>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">{["omni-extension", "pocket-knife-extension"].map((s) => <ProjectCard key={s} p={getProject(s)!} />)}</div>
        </section>
      </div>
    </div>
  );
}
