import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Star } from "./decor";
import { cn } from "@/lib/utils";

function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div id="mobile-nav" className="dark-panel fixed inset-x-0 top-0 z-50 max-h-dvh overflow-y-auto border-b border-gold/20 px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-20 lg:hidden">
      <nav aria-label="Mobile">
        <ul className="grid grid-cols-2 gap-1">
          {mainNav.map((n) => (
            <li key={n.to}>
              <Link to={n.to} onClick={onClose} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-gold" }} className="block py-2.5 font-display text-2xl">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" onClick={onClose} className="mt-6 inline-flex items-center gap-2 font-hand text-2xl text-gold">Let's talk <ArrowRight className="h-4 w-4" /></Link>
      </nav>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-[60] transition-colors duration-300", scrolled || open ? "border-b border-parchment/10 bg-night/92 backdrop-blur-md" : "bg-night/85 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none")}>
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-6 px-5 md:px-10">
          <Link to="/" className="flex shrink-0 items-center gap-2 text-parchment">
            <Star className="h-6 w-6 text-parchment" />
            <span className="font-display text-xl font-semibold tracking-wide">Irshad Akhtar</span>
          </Link>
          <nav aria-label="Main" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-6 text-[13px] text-parchment/85">
              {mainNav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    activeOptions={{ exact: n.to === "/" }}
                    activeProps={{ className: "font-display text-lg italic text-parchment hand-underline" }}
                    className="py-1 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link to="/contact" className="ml-auto hidden items-center gap-2 rounded-full border border-parchment/50 px-5 py-2 text-sm text-parchment transition-colors hover:border-gold hover:text-gold lg:ml-0 lg:inline-flex">
            Let's Talk <ArrowRight className="h-4 w-4" />
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} className="ml-auto grid h-11 w-11 place-items-center rounded-full border border-parchment/30 text-parchment lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>
      <MobileNavigation open={open} onClose={() => setOpen(false)} />
    </>
  );
}
