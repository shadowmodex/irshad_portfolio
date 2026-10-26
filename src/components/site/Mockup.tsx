import { cn } from "@/lib/utils";
import { media } from "@/data/media";
import type { Project, Screenshot } from "@/data/projects";
import { Download, FileText, Image as ImageIcon, Maximize2, Merge, Play, Search, Send } from "lucide-react";

/* CSS-built demo screens. Replace by setting `src` on a Screenshot. */

function Bar({ w, className }: { w: string; className?: string }) {
  return <div className={cn("h-1.5 rounded-full bg-parchment/25", className)} style={{ width: w }} />;
}

function Screen({ s }: { s: Screenshot }) {
  const v = s.variant;
  switch (s.kind) {
    case "chat":
      if (v === 1)
        return (
          <div className="flex h-full flex-col gap-2 p-3">
            {["w-3/4 self-start bg-forest", "w-2/3 self-end bg-gold/80", "w-1/2 self-start bg-forest", "w-3/5 self-end bg-gold/80", "w-2/5 self-start bg-forest"].map((c, i) => (
              <div key={i} className={cn("h-6 rounded-lg", c)} />
            ))}
            <div className="mt-auto flex items-center gap-2 rounded-full border border-parchment/20 px-2 py-1.5">
              <Bar w="70%" /> <Send className="h-3 w-3 text-gold" />
            </div>
          </div>
        );
      return (
        <div className="flex h-full flex-col gap-2.5 p-3">
          <div className="flex items-center gap-2"><Bar w="40%" className="h-2 bg-parchment/50" /><Search className="ml-auto h-3 w-3 text-ash" /></div>
          {Array.from({ length: v === 2 ? 3 : 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={cn("h-6 w-6 shrink-0 rounded-full", i % 2 ? "bg-moss" : "bg-gold/70")} />
              <div className="flex-1 space-y-1"><Bar w="60%" className="bg-parchment/45" /><Bar w="85%" /></div>
            </div>
          ))}
          {v === 2 && <div className="mt-auto grid grid-cols-4 gap-1 border-t border-parchment/15 pt-2">{[0, 1, 2, 3].map((i) => <div key={i} className={cn("mx-auto h-3 w-3 rounded-sm", i === 0 ? "bg-gold" : "bg-parchment/30")} />)}</div>}
        </div>
      );
    case "tools":
      if (v === 1)
        return (
          <div className="flex h-full flex-col gap-2 p-3">
            <Bar w="45%" className="h-2 bg-parchment/50" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-md bg-paper/90 p-1.5 text-ink"><FileText className="h-3.5 w-3.5" /><div className="h-1.5 flex-1 rounded-full bg-ink/25" /></div>
            ))}
            <div className="mt-auto flex items-center justify-center gap-1 rounded-md bg-gold py-1.5 text-[9px] font-semibold text-night"><Merge className="h-3 w-3" />MERGE</div>
          </div>
        );
      if (v === 2)
        return (
          <div className="flex h-full flex-col gap-2 p-3">
            <div className="relative flex-1 overflow-hidden rounded-md border border-dashed border-gold/70">
              <img src={media.mountains} alt="" className="h-full w-full object-cover opacity-80" />
              <Maximize2 className="absolute bottom-1 right-1 h-3 w-3 text-paper" />
            </div>
            <div className="grid grid-cols-2 gap-1.5"><div className="rounded bg-parchment/15 py-1 text-center text-[8px]">1080</div><div className="rounded bg-parchment/15 py-1 text-center text-[8px]">720</div></div>
          </div>
        );
      return (
        <div className="grid h-full grid-cols-2 content-start gap-1.5 overflow-hidden p-2.5">
          {[FileText, ImageIcon, Merge, Maximize2, FileText, ImageIcon].map((I, i) => (
            <div key={i} className={cn("flex aspect-square flex-col items-center justify-center gap-1 rounded-md", i % 3 === 0 ? "bg-paper text-ink" : "bg-forest text-parchment")}><I className="h-4 w-4" /><div className="h-1 w-1/2 rounded-full bg-current/40" /></div>
          ))}
        </div>
      );
    case "video":
      if (v === 1)
        return (
          <div className="flex h-full flex-col gap-1.5 p-3">
            <div className="relative aspect-video overflow-hidden rounded-md"><img src={media.mountains} alt="" className="h-full w-full object-cover" /><Play className="absolute inset-0 m-auto h-4 w-4 text-paper" /></div>
            {["1080p", "720p", "480p", "Audio"].map((q, i) => (
              <div key={q} className={cn("flex items-center justify-between rounded px-2 py-1 text-[8px]", i === 0 ? "bg-gold text-night" : "bg-parchment/10")}>{q}<Download className="h-2.5 w-2.5" /></div>
            ))}
          </div>
        );
      if (v === 2)
        return (
          <div className="flex h-full flex-col gap-2.5 p-3">
            <Bar w="50%" className="h-2 bg-parchment/50" />
            {[82, 46, 100].map((p, i) => (
              <div key={i} className="space-y-1 rounded-md bg-parchment/10 p-1.5">
                <Bar w="70%" className="bg-parchment/40" />
                <div className="h-1 rounded-full bg-parchment/15"><div className="h-1 rounded-full bg-gold" style={{ width: `${p}%` }} /></div>
              </div>
            ))}
          </div>
        );
      return (
        <div className="flex h-full flex-col items-center gap-2 p-3 pt-6">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gold text-night"><Download className="h-4 w-4" /></div>
          <Bar w="50%" className="h-2 bg-parchment/50" />
          <div className="mt-2 w-full rounded-md border border-parchment/25 p-1.5"><Bar w="80%" /></div>
          <div className="w-full rounded-md bg-gold py-1.5 text-center text-[8px] font-semibold text-night">ANALYSE</div>
          <div className="mt-auto grid w-full grid-cols-3 gap-1">{[0, 1, 2].map((i) => <div key={i} className="aspect-square rounded bg-parchment/10" />)}</div>
        </div>
      );
    case "image":
      if (v === 1)
        return (
          <div className="flex h-full gap-2 p-2.5">
            <img src={media.cityNight} alt="" className="h-full w-1/2 rounded object-cover" />
            <div className="flex flex-1 flex-col gap-1">
              {["4000×3000", "1920×1440", "800×600"].map((q, i) => <div key={q} className={cn("rounded px-1.5 py-1 text-[8px]", i === 0 ? "bg-gold text-night" : "bg-parchment/10")}>{q}</div>)}
            </div>
          </div>
        );
      return (
        <div className="grid h-full grid-cols-3 content-start gap-1.5 p-2.5">
          {[media.mountains, media.cityNight, media.workspace, media.restaurant, media.mountains, media.cityNight].slice(0, v === 2 ? 3 : 6).map((src, i) => (
            <div key={i} className="relative"><img src={src} alt="" className="aspect-square w-full rounded object-cover" />{i === 0 && <span className="absolute right-0.5 top-0.5 rounded-sm bg-gold px-1 text-[6px] font-bold text-night">HQ</span>}</div>
          ))}
          {v === 2 && <div className="col-span-3 mt-1 rounded bg-moss/60 py-1 text-center text-[8px]">3 saved</div>}
        </div>
      );
    case "restaurant":
      if (v === 1)
        return (
          <div className="paper grid h-full grid-cols-2 gap-3 p-4">
            {["Starters", "Mains", "Desserts", "Drinks"].map((h) => (
              <div key={h} className="space-y-1"><p className="font-display text-[10px] italic">{h}</p><div className="h-1 w-4/5 rounded bg-ink/20" /><div className="h-1 w-3/5 rounded bg-ink/20" /><div className="h-1 w-2/3 rounded bg-ink/20" /></div>
            ))}
          </div>
        );
      if (v === 2)
        return (
          <div className="grid h-full grid-cols-3 gap-1 bg-night p-1">
            <img src={media.restaurant} alt="" className="col-span-2 row-span-2 h-full w-full object-cover" />
            <img src={media.workspace} alt="" className="h-full w-full object-cover" />
            <img src={media.cityNight} alt="" className="h-full w-full object-cover" />
          </div>
        );
      return (
        <div className="relative h-full">
          <img src={media.restaurant} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-night/90 to-transparent p-3">
            <p className="font-display text-sm text-paper">Brown Oak</p>
            <div className="mt-1 rounded-sm bg-gold px-2 py-0.5 text-[7px] text-night">VIEW MENU</div>
          </div>
        </div>
      );
    case "site":
    default:
      if (v === 1)
        return (
          <div className="flex h-full flex-col gap-2 p-3">
            <div className="flex gap-2"><div className="h-12 w-20 shrink-0 overflow-hidden rounded"><img src={media.mountains} alt="" className="h-full w-full object-cover" /></div><div className="flex-1 space-y-1.5"><Bar w="80%" className="bg-parchment/45" /><Bar w="50%" /></div></div>
            {["MP4 · 1080p", "MP4 · 720p", "M4A · Audio"].map((q, i) => <div key={q} className={cn("flex justify-between rounded px-2 py-1 text-[8px]", i === 0 ? "bg-gold text-night" : "bg-parchment/10")}>{q}<Download className="h-2.5 w-2.5" /></div>)}
          </div>
        );
      if (v === 2)
        return (
          <div className="grid h-full grid-cols-3 gap-2 p-3">
            {[0, 1, 2].map((i) => <div key={i} className="flex flex-col gap-1.5 rounded-md bg-parchment/10 p-2"><div className="h-4 w-4 rounded bg-gold/80" /><Bar w="80%" className="bg-parchment/40" /><Bar w="60%" /></div>)}
          </div>
        );
      return (
        <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-forest/60 to-night p-4">
          <p className="font-display text-base">Omni</p>
          <Bar w="55%" />
          <div className="flex w-3/4 items-center gap-1 rounded-full border border-parchment/30 p-1"><Bar w="70%" className="ml-2" /><div className="ml-auto rounded-full bg-gold px-2 py-0.5 text-[7px] text-night">GO</div></div>
        </div>
      );
  }
}

export function ScreenMockup({ s, className, size = "md" }: { s: Screenshot; className?: string; size?: "sm" | "md" | "lg" }) {
  if (s.src) return <img src={s.src} alt={s.alt} loading="lazy" className={cn("w-full rounded-md object-cover shadow-paper", className)} />;
  const frame =
    s.frame === "phone"
      ? cn("aspect-[9/17] rounded-[1.1rem] border-[5px] border-night p-0", size === "sm" ? "w-full" : "w-full")
      : s.frame === "popup"
        ? "aspect-[4/5] rounded-md border border-parchment/20"
        : "aspect-[16/10] rounded-md border border-parchment/20";
  return (
    <div role="img" aria-label={s.alt} className={cn("overflow-hidden bg-charcoal text-parchment shadow-paper", frame, className)}>
      {s.frame === "browser" && (
        <div className="flex items-center gap-1 border-b border-parchment/15 bg-night px-2 py-1.5">
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-parchment/30" />)}
          <span className="ml-2 h-2 flex-1 rounded-sm bg-parchment/10" />
        </div>
      )}
      {s.frame === "popup" && <div className="flex items-center gap-1 border-b border-parchment/15 bg-night px-2 py-1.5"><span className="h-2 w-2 rounded-sm bg-gold" /><span className="h-1.5 w-12 rounded bg-parchment/30" /></div>}
      <div className={cn(s.frame === "browser" ? "h-[calc(100%-22px)]" : s.frame === "popup" ? "h-[calc(100%-22px)]" : "h-full")}>
        <Screen s={s} />
      </div>
    </div>
  );
}

const toneCls = {
  gold: "bg-gold text-night",
  forest: "bg-forest text-paper",
  ember: "bg-ink text-gold",
  ink: "bg-night text-gold border border-gold/40",
  sky: "bg-paper text-forest",
};

/** Project icon: renders image logo if present, else monogram tile. */
export function ProjectIcon({ p, className }: { p: Pick<Project, "icon" | "name">; className?: string }) {
  if (p.icon.image) {
    return (
      <div className={cn("grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg shadow-paper", className)}>
        <img src={p.icon.image} alt={`${p.name} logo`} className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div aria-label={`${p.name} icon`} role="img" className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-lg font-display text-lg font-bold shadow-paper", toneCls[p.icon.tone], className)}>
      {p.icon.glyph}
    </div>
  );
}
