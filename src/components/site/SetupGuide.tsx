import { useState } from "react";
import { AppWindow, Download, FolderOpen, MousePointerClick, PackageOpen, Puzzle, Settings2, Smartphone, Store } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type Step = { title: string; text: string; icon: typeof Download };

function appSteps(name: string): Step[] {
  return [
    { title: "Download the APK", text: `Select the Download APK button for ${name} and save the installation file from the configured source.`, icon: Download },
    { title: "Locate the file", text: "Open your device's Downloads folder or your browser's download history.", icon: FolderOpen },
    { title: "Start installation", text: "Open the APK file. If Android asks for permission to install apps from that source, review it and enable it only if you trust the source.", icon: Settings2 },
    { title: "Install the application", text: "Follow the Android installation screen and wait for installation to finish.", icon: Smartphone },
    { title: "Open and explore", text: `Launch ${name} and explore its available features.`, icon: AppWindow },
  ];
}

function extSteps(name: string, method: "store" | "zip"): Step[] {
  return [
    { title: "Obtain the extension", text: method === "store" ? `Open the official store listing for ${name}.` : `Download the supplied ${name} extension package.`, icon: method === "store" ? Store : Download },
    { title: "Prepare the package", text: method === "store" ? "Continue to the store listing — no extra preparation is needed." : "Extract the ZIP archive into a folder you'll keep.", icon: PackageOpen },
    { title: "Open extension management", text: "Navigate to your browser's extensions page (for example chrome://extensions).", icon: Puzzle },
    { title: "Install the extension", text: method === "store" ? "Follow the store's installation flow and confirm the requested permissions." : "Enable Developer Mode if required, choose Load Unpacked and select the extracted folder.", icon: Settings2 },
    { title: "Open and use", text: `Open ${name} from the browser toolbar or extensions menu and explore what it can do.`, icon: MousePointerClick },
  ];
}

export function SetupGuide({ project }: { project: Project }) {
  const isExt = project.category === "extension";
  const [method, setMethod] = useState<"store" | "zip">(project.distribution ?? "zip");
  const steps = isExt ? extSteps(project.name, method) : appSteps(project.name);

  return (
    <div>
      {isExt && (
        <div role="tablist" aria-label="Distribution method" className="mb-6 inline-flex rounded-sm border border-ink/20 p-1">
          {(["zip", "store"] as const).map((m) => (
            <button key={m} role="tab" aria-selected={method === m} onClick={() => setMethod(m)} className={cn("min-h-10 rounded-sm px-4 text-sm transition-colors", method === m ? "bg-ink text-paper" : "text-ink hover:bg-ink/5")}>
              {m === "zip" ? "ZIP package" : "Official store"}
            </button>
          ))}
        </div>
      )}
      <ol className="grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-sm border border-ink/15 bg-paper-deep/70 p-5 shadow-paper">
            <span className="font-display text-5xl font-semibold leading-none text-gold">{i + 1}</span>
            <s.icon aria-hidden className="absolute right-4 top-5 h-5 w-5 text-moss" />
            <h4 className="mt-3 font-display text-xl font-semibold text-ink">{s.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-5 rounded-sm border-l-2 border-gold bg-beige/40 px-4 py-3 text-sm text-ink">
        {isExt
          ? method === "store"
            ? "An official store listing hasn't been published yet — the store option will become available once a listing link is added. Never disable browser security checks to install an extension."
            : "Only load unpacked extensions from a source you trust. Never disable browser security checks to install an extension."
          : "Note: APK installation behaviour can vary between Android versions and device manufacturers."}
      </p>
    </div>
  );
}
