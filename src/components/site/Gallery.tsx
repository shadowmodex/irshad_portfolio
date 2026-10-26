import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Screenshot } from "@/data/projects";
import { ScreenMockup } from "./Mockup";
import { cn } from "@/lib/utils";

export function ScreenshotLightbox({ shots, index, onIndex, onClose }: { shots: Screenshot[]; index: number | null; onIndex: (i: number) => void; onClose: () => void }) {
  const s = index === null ? null : shots[index];
  const go = (d: number) => index !== null && onIndex((index + d + shots.length) % shots.length);
  return (
    <Dialog.Root open={index !== null} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-night/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
          className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-in data-[state=open]:zoom-in-95"
        >
          {s && (
            <>
              <Dialog.Title className="mb-3 font-display text-2xl text-parchment">{s.label}</Dialog.Title>
              <Dialog.Description className="sr-only">{s.alt}</Dialog.Description>
              <div className={cn("mx-auto", s.frame === "phone" ? "max-w-[260px]" : s.frame === "popup" ? "max-w-[380px]" : "")}>
                <ScreenMockup s={s} size="lg" />
              </div>
              <div className="mt-4 flex items-center justify-between text-parchment">
                <button onClick={() => go(-1)} aria-label="Previous screenshot" className="grid h-11 w-11 place-items-center rounded-full border border-parchment/30 hover:border-gold"><ChevronLeft className="h-5 w-5" /></button>
                <span className="font-hand text-xl text-gold">{index! + 1} / {shots.length} · demo</span>
                <button onClick={() => go(1)} aria-label="Next screenshot" className="grid h-11 w-11 place-items-center rounded-full border border-parchment/30 hover:border-gold"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </>
          )}
          <Dialog.Close aria-label="Close" className="absolute -top-1 right-0 grid h-10 w-10 place-items-center rounded-full text-parchment hover:text-gold"><X className="h-5 w-5" /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ScreenshotGallery({ shots, className }: { shots: Screenshot[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const phone = shots[0]?.frame === "phone";
  return (
    <>
      <div className={cn("grid gap-4", phone ? "grid-cols-3 sm:gap-8" : "grid-cols-1 sm:grid-cols-3", className)}>
        {shots.map((s, i) => (
          <button key={i} onClick={() => setOpen(i)} className="group text-left" aria-label={`Enlarge: ${s.label}`}>
            <div className={cn("transition-transform duration-300 group-hover:-translate-y-1", phone && "mx-auto max-w-[200px]", s.frame === "popup" && "mx-auto max-w-[240px]")}>
              <ScreenMockup s={s} />
            </div>
            <p className="mt-2 text-center font-hand text-lg opacity-80">{s.label}</p>
          </button>
        ))}
      </div>
      <ScreenshotLightbox shots={shots} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
    </>
  );
}
