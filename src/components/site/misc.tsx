import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Github, Instagram, Mail, Play, SearchX, Youtube } from "lucide-react";
import { featuredTech, techStack, type Tech } from "@/data/techStack";
import { socialLinks, type SocialKey } from "@/data/socialLinks";
import { profile } from "@/data/profile";
import { btn } from "./ActionLink";
import { cn } from "@/lib/utils";

export const socialIcon: Record<SocialKey, typeof Mail> = { youtube: Youtube, instagram: Instagram, github: Github, email: Mail };

export function Breadcrumbs({ items }: { items: { label: string; to?: "/" | "/projects" | "/apps" | "/extensions" | "/websites" }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1 text-ash">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1">
            {it.to ? <Link to={it.to} className="hover:text-gold">{it.label}</Link> : <span aria-current="page" className="text-parchment">{it.label}</span>}
            {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5" aria-hidden />}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function TechMark({ t, className }: { t: Tech; className?: string }) {
  return (
    <span aria-hidden className={cn("tech-mark font-mono text-[10px] font-bold", className)} style={{ background: t.bg, color: t.fg }}>
      {t.mark}
    </span>
  );
}

export function TechChip({ t }: { t: Tech }) {
  return (
    <li className="tech-chip flex items-center gap-1.5 rounded-sm border border-ink/15 bg-paper-deep px-2 py-1 text-sm text-ink">
      <TechMark t={t} />{t.name}
    </li>
  );
}

export function TechStackGrid({ compact }: { compact?: boolean }) {
  if (compact)
    return (
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {featuredTech.map((t) => (
          <li key={t.name} className="flex items-center gap-2 text-sm text-ink">
            <TechMark t={t} className="tech-mark-lg h-7 w-7 shrink-0" />{t.name}
          </li>
        ))}
      </ul>
    );
  return (
    <div className="grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
      {techStack.map((g) => (
        <div key={g.group} className={cn("border-t border-ink/20 pt-3", g.items.length > 12 && "md:col-span-2 xl:col-span-3")}>
          <h4 className="flex items-baseline gap-2 font-hand text-2xl text-moss">{g.group}<span className="font-sans text-xs text-ink-muted">{g.items.length}</span></h4>
          <ul className="mt-2 flex flex-wrap gap-2">{g.items.map((t) => <TechChip key={t.name} t={t} />)}</ul>
        </div>
      ))}
    </div>
  );
}

export function SocialRow({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-5 gap-y-2 text-xs", className)}>
      {(Object.keys(socialLinks) as SocialKey[]).map((k) => {
        const s = socialLinks[k];
        const I = socialIcon[k];
        const inner = <><I className="h-4 w-4" aria-hidden />{s.label}</>;
        return (
          <li key={k}>
            {s.url ? (
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 hover:text-gold">{inner}</a>
            ) : (
              <span title="Link coming soon" className="inline-flex min-h-8 items-center gap-1.5 opacity-55">{inner}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SocialProfileCard({ k, children }: { k: SocialKey; children?: ReactNode }) {
  const s = socialLinks[k];
  const I = socialIcon[k];
  const content = (
    <>
      <span className={`brand-icon-${k} grid h-10 w-10 shrink-0 place-items-center rounded-full`}><I className="h-5 w-5" aria-hidden /></span>
      <div className="min-w-0 flex-1"><p className="font-display text-lg leading-tight">{s.label}</p><p className="truncate text-xs text-ash">{s.handle}</p></div>
      {children}
    </>
  );
  if (s.url) {
    return (
      <a href={s.url} target={k === "email" ? undefined : "_blank"} rel={k === "email" ? undefined : "noopener noreferrer"} className="flex items-center gap-3 rounded-sm border border-parchment/15 bg-night/50 p-3 transition-colors hover:border-gold/40">
        {content}
      </a>
    );
  }
  return (
    <div className="flex items-center gap-3 rounded-sm border border-parchment/15 bg-night/50 p-3">
      {content}
    </div>
  );
}

export function VideoCard({ title, topic, image, url, big }: { title: string; topic: string; image: string; url: string | null; big?: boolean }) {
  const body = (
    <>
      <div className="relative overflow-hidden rounded-sm">
        <img src={image} alt={`Thumbnail for ${title}`} loading="lazy" className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute inset-0 m-auto grid h-12 w-12 place-items-center rounded-full bg-yt/90 text-paper transition-transform duration-300 group-hover:scale-110"><Play className="h-5 w-5 fill-current" /></span>
      </div>
      <p className="mt-2 font-hand text-lg text-gold">{topic}</p>
      <h3 className={cn("font-display font-semibold leading-snug break-words", big ? "text-xl sm:text-2xl lg:text-3xl" : "text-base md:text-lg")}>{title}</h3>
    </>
  );
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
      {body}
    </a>
  ) : (
    <div className="group">{body}</div>
  );
}

export function EmptyState({ title, text, action }: { title: string; text: string; action?: ReactNode }) {
  return (
    <div className="col-span-full flex flex-col items-center rounded-sm border border-dashed border-ink/30 px-6 py-14 text-center text-ink">
      <SearchX className="h-8 w-8 text-moss" aria-hidden />
      <h3 className="mt-3 font-display text-2xl">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-ink-muted">{text}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

function F({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">{label}</label>
      {children}
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries(["name", "email", "subject", "message"].map((k) => [k, String(f.get(k) ?? "").trim()])) as Record<keyof Errors, string>;
    const errs: Errors = {};
    if (v.name.length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = "Please enter a valid email address.";
    if (v.subject.length < 3) errs.subject = "Please add a short subject.";
    if (v.message.length < 10) errs.message = "Message should be at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length) { setNotice(null); return; }
    if (profile.email) {
      const body = encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${body}`;
      setNotice("Your email app should open with the message ready to send.");
    } else {
      setNotice("Your message looks good, but sending isn't set up yet — no message was sent. Please reach out on Instagram for now.");
    }
  }

  const field = "mt-1 w-full rounded-sm border border-ink/25 bg-paper px-3 py-2.5 text-ink placeholder:text-ink-muted/70 focus:border-forest focus:outline-none";
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <F id="name" error={errors.name} label="Name"><input id="name" name="name" autoComplete="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} className={field} placeholder="Your name" /></F>
        <F id="email" error={errors.email} label="Email"><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} className={field} placeholder="you@example.com" /></F>
      </div>
      <F id="subject" error={errors.subject} label="Subject"><input id="subject" name="subject" aria-invalid={!!errors.subject} className={field} placeholder="Project idea, collaboration…" /></F>
      <F id="message" error={errors.message} label="Message"><textarea id="message" name="message" rows={5} aria-invalid={!!errors.message} className={field} placeholder="Tell me a little about it" /></F>
      <button type="submit" className={btn("ink")}>Send a message</button>
      {notice && <p role="status" className="rounded-sm border-l-2 border-gold bg-beige/50 px-4 py-3 text-sm text-ink">{notice}</p>}
    </form>
  );
}
