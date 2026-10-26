import { Link } from "@tanstack/react-router";
import { Send } from "lucide-react";
import { footerNav } from "@/data/navigation";
import { SocialRow } from "./misc";
import { btn } from "./ActionLink";
import { Star } from "./decor";

export function SiteFooter() {
  return (
    <footer className="dark-panel grain border-t border-parchment/10">
      <div className="relative mx-auto grid max-w-[1440px] gap-8 px-5 py-10 md:grid-cols-[auto_1fr_auto] md:items-center md:px-10">
        <div>
          <p className="flex items-center gap-2 font-display text-2xl"><Star className="h-5 w-5 text-gold" />Irshad Akhtar</p>
          <p className="mt-1 font-hand text-lg text-ash">Small steps, big dreams.</p>
        </div>
        <div className="space-y-4">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-ash">
              <li><Link to="/" className="hover:text-gold">Home</Link></li>
              {footerNav.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
            </ul>
          </nav>
          <SocialRow className="text-parchment/80" />
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          <Link to="/contact" className={btn("ghost", "sm")}><Send className="h-3.5 w-3.5" />Send a message</Link>
          <p className="text-xs text-ash">© {new Date().getFullYear()} Irshad Akhtar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
