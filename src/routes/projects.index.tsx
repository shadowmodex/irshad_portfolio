import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { categoryLabel, projects, type ProjectCategory } from "@/data/projects";
import { PageIntro } from "@/components/site/decor";
import { ProjectCard } from "@/components/site/cards";
import { EmptyState } from "@/components/site/misc";
import { btn } from "@/components/site/ActionLink";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Irshad Akhtar" },
      { name: "description", content: "All of Irshad Akhtar's Android apps, websites and browser extensions in one place." },
      { property: "og:title", content: "Projects — Irshad Akhtar" },
      { property: "og:description", content: "Android apps, websites and browser extensions." },
    ],
  }),
  component: ProjectsPage,
});

type Filter = "all" | ProjectCategory;
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "app", label: "Android Apps" },
  { id: "website", label: "Websites" },
  { id: "extension", label: "Browser Extensions" },
];

function CategoryFilter({ value, onChange }: { value: Filter; onChange: (f: Filter) => void }) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {filters.map((f) => {
        const n = f.id === "all" ? projects.length : projects.filter((p) => p.category === f.id).length;
        return (
          <button key={f.id} aria-pressed={value === f.id} onClick={() => onChange(f.id)} className={cn("min-h-10 rounded-full border px-4 text-sm transition-colors", value === f.id ? "border-ink bg-ink text-paper" : "border-ink/25 text-ink hover:border-ink")}>
            {f.label} <span className="opacity-60">{n}</span>
          </button>
        );
      })}
    </div>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [q, setQ] = useState("");
  const list = useMemo(
    () => projects.filter((p) => (filter === "all" || p.category === filter) && p.name.toLowerCase().includes(q.trim().toLowerCase())),
    [filter, q],
  );

  return (
    <>
      <PageIntro eyebrow="// the workbench" title="Projects" script="& experiments">
        Everything I've built so far — {projects.length} projects across Android, the web and the browser.
      </PageIntro>
      <div className="paper torn-top -mt-5 min-h-[60vh]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <CategoryFilter value={filter} onChange={setFilter} />
            <label className="relative block md:w-72">
              <span className="sr-only">Search projects by name</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name…" className="min-h-11 w-full rounded-sm border border-ink/25 bg-paper pl-9 pr-3 text-ink placeholder:text-ink-muted focus:border-forest focus:outline-none" />
            </label>
          </div>
          <p className="mt-6 text-sm text-ink-muted" aria-live="polite">
            Showing {list.length} of {projects.length} {filter !== "all" && `· ${categoryLabel[filter]}s`}
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.length ? list.map((p) => <ProjectCard key={p.id} p={p} />) : (
              <EmptyState title="Nothing matches that" text="Try a different name or switch back to all categories." action={<button className={btn("ink", "sm")} onClick={() => { setQ(""); setFilter("all"); }}>Clear filters</button>} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
