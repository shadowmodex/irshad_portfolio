export type ProjectCategory = "app" | "website" | "extension";
export type MockKind = "chat" | "tools" | "video" | "site" | "restaurant" | "image";
export type Frame = "phone" | "browser" | "popup";

export interface Screenshot {
  kind: MockKind;
  frame: Frame;
  /** 0, 1, 2 — selects a distinct screen composition */
  variant: 0 | 1 | 2;
  label: string;
  alt: string;
  /** Set to a real image import to replace the CSS demo mockup. */
  src?: string;
}

export interface Action {
  label: string;
  /** null = not configured; rendered as a disabled "coming soon" action */
  url: string | null;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: ProjectCategory;
  platform: string;
  kind: MockKind;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: { title: string; text: string }[];
  version: string;
  status: string;
  technologies: string[];
  screenshots: [Screenshot, Screenshot, Screenshot];
  icon: { glyph: string; tone: "gold" | "forest" | "ember" | "ink" | "sky"; image?: string };
  primaryAction: Action;
  secondaryAction: Action;
  downloadUrl: string | null;
  liveUrl: string | null;
  repositoryUrl: string | null;
  supportedBrowsers?: string[];
  distribution?: "store" | "zip";
  limitations: string[];
  relatedProjectIds: string[];
}

export const categoryLabel: Record<ProjectCategory, string> = {
  app: "Android App",
  website: "Website",
  extension: "Browser Extension",
};

const shots = (kind: MockKind, frame: Frame, labels: [string, string, string], name: string, slug?: string): [Screenshot, Screenshot, Screenshot] =>
  labels.map((label, i) => ({
    kind,
    frame,
    variant: i as 0 | 1 | 2,
    label,
    alt: `${name}: ${label.toLowerCase()}`,
    src: slug ? `/images/projects/${slug}/screenshot-0${i + 1}.png` : undefined,
  })) as [Screenshot, Screenshot, Screenshot];

const VERSION_TBD = "Version TBA";

export const projects: Project[] = [
  {
    id: "shadowmodex",
    slug: "shadowmodex",
    name: "ShadowmodeX",
    shortName: "ShadowmodeX",
    category: "app",
    platform: "Android",
    kind: "chat",
    tagline: "A chatting and messaging app.",
    shortDescription: "A chatting and messaging application with a clean, focused interface.",
    fullDescription:
      "ShadowmodeX is an Android chatting app built around a simple idea: conversations should feel calm and easy to follow. The project focuses on a clear messaging interface, a comfortable conversation view and straightforward navigation between chats.",
    features: [
      { title: "Messaging interface", text: "A tidy chat list that keeps conversations easy to find." },
      { title: "Conversation experience", text: "A readable thread view designed for back-and-forth messaging." },
      { title: "Interface & navigation", text: "Simple navigation between chats, profile and settings." },
    ],
    version: VERSION_TBD,
    status: "In development",
    technologies: ["Android", "Flutter", "Firebase"],
    screenshots: shots("chat", "phone", ["Chat list", "Conversation view", "App navigation"], "ShadowmodeX", "shadowmodex"),
    icon: { glyph: "SX", tone: "ink", image: "/images/projects/shadowmodex/logo.png" },
    primaryAction: { label: "Download APK", url: "https://github.com/shadowmodex/ShadowmodeX-Releases/releases/latest/download/app-release.apk" },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: "https://github.com/shadowmodex/ShadowmodeX-Releases/releases/latest/download/app-release.apk",
    liveUrl: null,
    repositoryUrl: null,
    limitations: ["Available for Android only.", "Feature set may change while the app is in development."],
    relatedProjectIds: ["pocket-knife", "omni-video-downloader"],
  },
  {
    id: "pocket-knife",
    slug: "pocket-knife",
    name: "Pocket Knife",
    shortName: "Pocket Knife",
    category: "app",
    platform: "Android",
    kind: "tools",
    tagline: "Document & image tools in your pocket.",
    shortDescription: "A practical collection of document and image tools — merge PDFs, resize and convert images.",
    fullDescription:
      "Pocket Knife bundles small, frequently needed utilities into one Android app. Instead of hunting for a different website every time, you can merge PDF files, resize images and convert image formats from a single place.",
    features: [
      { title: "PDF merging", text: "Combine several PDF documents into one file." },
      { title: "Image resizing", text: "Change image dimensions for uploads, forms and sharing." },
      { title: "Format conversion", text: "Convert images between common formats." },
    ],
    version: VERSION_TBD,
    status: "In development",
    technologies: ["Android", "Flutter"],
    screenshots: shots("tools", "phone", ["Tool library", "PDF merge", "Image resize"], "Pocket Knife", "pocket-knife"),
    icon: { glyph: "PK", tone: "forest" },
    primaryAction: { label: "Download APK", url: "https://github.com/shadowmodex/pocketknife/releases/download/v1.0.0/PocketKnife.apk" },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: "https://github.com/shadowmodex/pocketknife/releases/download/v1.0.0/PocketKnife.apk",
    liveUrl: null,
    repositoryUrl: null,
    limitations: ["Available for Android only.", "Large files may take longer to process on older devices."],
    relatedProjectIds: ["pocket-knife-extension", "shadowmodex"],
  },
  {
    id: "omni-video-downloader",
    slug: "omni-video-downloader",
    name: "Omni Video Downloader",
    shortName: "Omni",
    category: "app",
    platform: "Android",
    kind: "video",
    tagline: "Video downloads with a clean, simple interface.",
    shortDescription: "A video downloader designed to support downloads from a wide range of websites.",
    fullDescription:
      "Omni is my most-used project. Paste a link, let Omni analyse it, pick from the available media and quality options and follow the download progress — all in a clean, distraction-free interface. Support depends on each website and on what content is publicly available.",
    features: [
      { title: "Video analysis", text: "Paste a link and Omni checks what media is available." },
      { title: "Quality options", text: "Choose from the formats and qualities the source provides." },
      { title: "Download progress", text: "Follow active downloads with a clear progress view." },
    ],
    version: VERSION_TBD,
    status: "Active — new features in progress",
    technologies: ["Android", "Flutter"],
    screenshots: shots("video", "phone", ["Link analysis", "Quality options", "Download progress"], "Omni Video Downloader", "omni-video-downloader"),
    icon: { glyph: "O", tone: "sky", image: "/images/projects/omni-video-downloader/logo.png" },
    primaryAction: { label: "Download APK", url: "https://github.com/shadowmodex/omni-video-downloader/releases/download/v1.1.14/OMNI-v1.1.14.apk" },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: "https://github.com/shadowmodex/omni-video-downloader/releases/download/v1.1.14/OMNI-v1.1.14.apk",
    liveUrl: null,
    repositoryUrl: null,
    limitations: [
      "Not every website is supported; compatibility depends on the source.",
      "Only download content you have the right to save.",
    ],
    relatedProjectIds: ["omni-extension", "omni-website"],
  },
  {
    id: "omni-website",
    slug: "omni-website",
    name: "Omni Video Downloader Website",
    shortName: "Omni Web",
    category: "website",
    platform: "Web",
    kind: "site",
    tagline: "Omni, right in your browser.",
    shortDescription: "A web experience for discovering and downloading supported online videos.",
    fullDescription:
      "The Omni website brings the same paste-and-download flow to the browser. It introduces the project, explains how it works and offers a simple interface for supported online videos.",
    features: [
      { title: "Paste-a-link flow", text: "A single input to start analysing a supported video link." },
      { title: "Clear results", text: "Available formats presented in a readable list." },
      { title: "Project hub", text: "Information about the Omni app and extension in one place." },
    ],
    version: "Web",
    status: "Live link coming soon",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    screenshots: shots("site", "browser", ["Homepage", "Results view", "Features section"], "Omni website", "omni-website"),
    icon: { glyph: "O", tone: "sky", image: "/images/projects/omni-website/logo.png" },
    primaryAction: { label: "Visit Website", url: "https://omni-downloader-web.vercel.app/" },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: null,
    liveUrl: "https://omni-downloader-web.vercel.app/",
    repositoryUrl: null,
    limitations: ["Supported websites may vary over time."],
    relatedProjectIds: ["omni-video-downloader", "omni-extension"],
  },
  {
    id: "brown-oak-restaurant",
    slug: "brown-oak-restaurant",
    name: "Brown Oak Restaurant",
    shortName: "Brown Oak",
    category: "website",
    platform: "Web",
    kind: "restaurant",
    tagline: "A warm website for a restaurant.",
    shortDescription: "A restaurant website focused on presenting the restaurant, its menu and its visual identity.",
    fullDescription:
      "Brown Oak Restaurant is a website project exploring warm, atmospheric presentation for a dining brand — strong food photography, a clear menu layout and a visual identity built around dark oak and candlelight.",
    features: [
      { title: "Atmospheric homepage", text: "A photo-led first impression of the restaurant." },
      { title: "Menu presentation", text: "A readable, sectioned menu layout." },
      { title: "Visual identity", text: "Warm colours and type that match the brand." },
    ],
    version: "Web",
    status: "Live link coming soon",
    technologies: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      { kind: "restaurant", frame: "browser", variant: 0, label: "Homepage", alt: "Demo mockup of Brown Oak Restaurant homepage", src: "/images/projects/brown-oak-restaurant/screenshot-01.png" },
      { kind: "restaurant", frame: "browser", variant: 1, label: "Menu layout", alt: "Demo mockup of Brown Oak Restaurant menu layout", src: "/images/projects/brown-oak-restaurant/screenshot-02.png" },
      { kind: "restaurant", frame: "browser", variant: 2, label: "Gallery", alt: "Demo mockup of Brown Oak Restaurant photo gallery", src: "/images/projects/brown-oak-restaurant/screenshot-03.png" },
    ],
    icon: { glyph: "BO", tone: "ember" },
    primaryAction: { label: "Visit Website", url: "https://brownoak.netlify.app/" },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: null,
    liveUrl: "https://brownoak.netlify.app/",
    repositoryUrl: null,
    limitations: ["Demo content: menu items and details are placeholders."],
    relatedProjectIds: ["omni-website", "shadowmodex"],
  },
  {
    id: "omni-extension",
    slug: "omni-extension",
    name: "Omni Video Downloader Extension",
    shortName: "Omni Extension",
    category: "extension",
    platform: "Chromium browsers",
    kind: "video",
    tagline: "Omni from your browser toolbar.",
    shortDescription: "A browser extension for downloading supported online videos from a wide range of websites.",
    fullDescription:
      "The Omni extension detects supported media on the page you're viewing and lets you pick a format from a compact toolbar popup — no copying links between tabs.",
    features: [
      { title: "Toolbar popup", text: "Open Omni from the browser toolbar on any page." },
      { title: "Media detection", text: "Lists supported media found on the current page." },
      { title: "Format choice", text: "Pick from the qualities the source makes available." },
    ],
    version: VERSION_TBD,
    status: "In development",
    technologies: ["JavaScript", "HTML", "CSS"],
    screenshots: shots("video", "popup", ["Popup", "Detected media", "Download options"], "Omni extension", "omni-extension"),
    icon: { glyph: "O", tone: "sky", image: "/images/projects/omni-extension/logo.png" },
    primaryAction: { label: "Get Extension", url: null },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: null,
    liveUrl: null,
    repositoryUrl: null,
    supportedBrowsers: ["Chrome (planned)", "Edge (planned)"],
    distribution: "zip",
    limitations: ["Not every website or protected media format is supported."],
    relatedProjectIds: ["omni-video-downloader", "hq-image-downloader"],
  },
  {
    id: "pocket-knife-extension",
    slug: "pocket-knife-extension",
    name: "Pocket Knife Extension",
    shortName: "Pocket Knife Ext.",
    category: "extension",
    platform: "Chromium browsers",
    kind: "tools",
    tagline: "Utility toolkit in your browser.",
    shortDescription: "A browser-based utility toolkit for PDF merging, image resizing and image format conversion.",
    fullDescription:
      "The Pocket Knife extension puts the same everyday document and image tools into your browser, so quick conversions are always one click away.",
    features: [
      { title: "PDF merging", text: "Combine PDF files from the extension popup." },
      { title: "Image resizing", text: "Resize images without leaving the browser." },
      { title: "Format conversion", text: "Convert images between common formats." },
    ],
    version: VERSION_TBD,
    status: "In development",
    technologies: ["JavaScript", "HTML", "CSS"],
    screenshots: shots("tools", "popup", ["Tool menu", "PDF merge", "Image convert"], "Pocket Knife extension", "pocket-knife-extension"),
    icon: { glyph: "PK", tone: "forest", image: "/images/projects/pocket-knife-extension/logo.png" },
    primaryAction: { label: "Get Extension", url: null },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: null,
    liveUrl: null,
    repositoryUrl: null,
    supportedBrowsers: ["Chrome (planned)", "Edge (planned)"],
    distribution: "zip",
    limitations: ["Very large files may be slow to process in the browser."],
    relatedProjectIds: ["pocket-knife", "hq-image-downloader"],
  },
  {
    id: "hq-image-downloader",
    slug: "hq-image-downloader",
    name: "HQ Image Downloader",
    shortName: "HQ Images",
    category: "extension",
    platform: "Chromium browsers",
    kind: "image",
    tagline: "Find images at their best available quality.",
    shortDescription: "A browser extension that helps you find and download images at the best available quality.",
    fullDescription:
      "HQ Image Downloader scans the current page for images and highlights the highest-resolution version available, so you can save the best copy instead of a blurry thumbnail.",
    features: [
      { title: "Image previews", text: "See the images found on the current page at a glance." },
      { title: "Quality selection", text: "Choose the largest available version of an image." },
      { title: "Quick save", text: "Download your selection in a click." },
    ],
    version: VERSION_TBD,
    status: "In development",
    technologies: ["JavaScript", "HTML", "CSS"],
    screenshots: shots("image", "popup", ["Image grid", "Quality picker", "Saved images"], "HQ Image Downloader", "hq-image-downloader"),
    icon: { glyph: "HQ", tone: "gold", image: "/images/projects/hq-image-downloader/logo.png" },
    primaryAction: { label: "Get Extension", url: null },
    secondaryAction: { label: "Source code", url: null },
    downloadUrl: null,
    liveUrl: null,
    repositoryUrl: null,
    supportedBrowsers: ["Chrome (planned)", "Edge (planned)"],
    distribution: "zip",
    limitations: ["Not every image source is supported; some sites restrict access to originals."],
    relatedProjectIds: ["omni-extension", "pocket-knife-extension"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const byCategory = (c: ProjectCategory) => projects.filter((p) => p.category === c);
export const relatedOf = (p: Project) =>
  p.relatedProjectIds.map((id) => projects.find((x) => x.id === id)).filter(Boolean) as Project[];
