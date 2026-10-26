/**
 * Central technology catalog. Listing a technology means it is part of the
 * landscape used across projects or the development workflow — not a claim of
 * equal expertise. No ratings or proficiency scores on purpose.
 */
export interface Tech {
  name: string;
  /** Short monogram shown in the badge */
  mark: string;
  /** Brand background (any CSS color or gradient) */
  bg: string;
  /** Brand foreground for the monogram */
  fg: string;
  /** Shown in the compact homepage preview */
  featured?: boolean;
}

export interface TechGroup {
  group: string;
  items: Tech[];
}

const t = (name: string, mark: string, bg: string, fg: string, featured = false): Tech => ({ name, mark, bg, fg, featured });

export const techStack: TechGroup[] = [
  {
    group: "Programming languages",
    items: [
      t("JavaScript", "JS", "#f7df1e", "#1f1f1f", true),
      t("TypeScript", "TS", "#3178c6", "#ffffff", true),
      t("Python", "Py", "linear-gradient(135deg,#3776ab 50%,#ffd43b 50%)", "#ffffff", true),
      t("Java", "Jv", "#e76f00", "#ffffff"),
      t("Dart", "Dt", "#0175c2", "#ffffff", true),
      t("HTML", "H5", "#e34f26", "#ffffff", true),
      t("CSS", "C3", "#1572b6", "#ffffff", true),
      t("SQL", "SQL", "#336791", "#ffffff"),
      t("YAML", "YM", "#cb171e", "#ffffff"),
      t("JSON", "{}", "#292929", "#f5d547"),
      t("Bash", "$_", "#293137", "#4eaa25"),
      t("PowerShell", "PS", "#012456", "#ffffff"),
      t("C", "C", "#a8b9cc", "#283593"),
      t("C++", "C++", "#00599c", "#ffffff"),
      t("C#", "C#", "#68217a", "#ffffff"),
      t("Kotlin", "Kt", "linear-gradient(135deg,#7f52ff,#e44857)", "#ffffff"),
      t("Swift", "Sw", "#f05138", "#ffffff"),
      t("PHP", "php", "#777bb4", "#ffffff"),
      t("Go", "Go", "#00add8", "#ffffff"),
      t("Rust", "Rs", "#2b2b2b", "#f74c00"),
      t("Ruby", "Rb", "#cc342d", "#ffffff"),
      t("Markdown", "M↓", "#1f1f1f", "#ffffff"),
    ],
  },
  {
    group: "Frameworks, platforms & APIs",
    items: [
      t("React", "Re", "#20232a", "#61dafb", true),
      t("Next.js", "N", "#000000", "#ffffff"),
      t("Node.js", "No", "#339933", "#ffffff", true),
      t("Flutter", "Fl", "#02569b", "#54c5f8", true),
      t("Android Development", "An", "#3ddc84", "#073042", true),
      t("Tailwind CSS", "Tw", "#0f172a", "#38bdf8", true),
      t("Browser Extension APIs", "Ex", "#4285f4", "#ffffff"),
      t("REST APIs", "API", "#2d4a3e", "#e8d9b5"),
    ],
  },
  {
    group: "Development & build tools",
    items: [
      t("Vite", "Vi", "linear-gradient(135deg,#646cff,#bd34fe)", "#ffd62e"),
      t("Git", "Gt", "#f05032", "#ffffff", true),
      t("GitHub", "GH", "#181717", "#ffffff"),
      t("Playwright", "Pw", "#2d4552", "#45ba4b"),
      t("FFmpeg", "FF", "#007808", "#ffffff"),
      t("Docker", "Dk", "#2496ed", "#ffffff"),
      t("Visual Studio Code", "VS", "#007acc", "#ffffff"),
      t("Figma", "Fg", "linear-gradient(90deg,#f24e1e 0 20%,#ff7262 20% 40%,#a259ff 40% 60%,#1abcfe 60% 80%,#0acf83 80%)", "#ffffff", true),
    ],
  },
  {
    group: "Databases & storage",
    items: [
      t("SQLite", "SL", "#003b57", "#97d9f2"),
      t("PostgreSQL", "Pg", "#336791", "#ffffff"),
      t("Firebase", "Fb", "#ffca28", "#c1440e", true),
      t("Supabase", "Sb", "#1c1c1c", "#3ecf8e", true),
    ],
  },
  {
    // Only entries verifiable from this codebase (tsconfig/tsgo) or implied by the Flutter Android apps.
    group: "Additional",
    items: [
      t("TypeScript tooling", "tsc", "#235a97", "#ffffff"),
      t("Flutter SDK", "FS", "#02569b", "#54c5f8"),
      t("Android SDK", "AS", "#073042", "#3ddc84"),
    ],
  },
];

export const featuredTech: Tech[] = techStack.flatMap((g) => g.items.filter((i) => i.featured));
