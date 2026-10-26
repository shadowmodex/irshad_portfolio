import workspace from "@/assets/hero-workspace.jpg";
import mountains from "@/assets/mountains.jpg";
import restaurant from "@/assets/restaurant.jpg";
import cityNight from "@/assets/city-night.jpg";
import portrait from "@/assets/portrait.png";

/**
 * Central asset map. Replace any entry with a real file to update the whole site.
 * Items marked DEMO are generated atmosphere images, not real project screenshots.
 */
export const media = {
  workspace, // DEMO
  mountains, // DEMO
  restaurant, // DEMO
  cityNight, // DEMO
  portrait,
};

/** PLACEHOLDER video records — edit titles/urls once real videos exist. */
export const videos = [
  { id: "v1", title: "Video placeholder — Tech", topic: "Tech", url: null as string | null, image: media.workspace },
  { id: "v2", title: "Video placeholder — Gaming", topic: "Gaming", url: null as string | null, image: media.cityNight },
  { id: "v3", title: "Video placeholder — Tutorial", topic: "Tutorials", url: null as string | null, image: media.mountains },
];

/** PLACEHOLDER Instagram previews — not real posts. */
export const instaPosts = [
  { id: "p1", image: media.mountains, alt: "Demo image: misty mountains at sunset", note: "golden hour" },
  { id: "p2", image: media.workspace, alt: "Demo image: warm developer desk at dusk", note: "the desk" },
  { id: "p3", image: media.cityNight, alt: "Demo image: rainy city skyline at night", note: "night walks" },
  { id: "p4", image: media.restaurant, alt: "Demo image: candlelit dinner table", note: "good food" },
];

/** PLACEHOLDER repositories — replace once real GitHub data is supplied. */
export const repositories = [
  { id: "r1", name: "Repository placeholder 1", description: "Source for an Android project. Link pending.", language: "Kotlin / Flutter", url: null as string | null },
  { id: "r2", name: "Repository placeholder 2", description: "Source for a browser extension. Link pending.", language: "JavaScript", url: null as string | null },
  { id: "r3", name: "Repository placeholder 3", description: "Source for a website project. Link pending.", language: "TypeScript", url: null as string | null },
];
