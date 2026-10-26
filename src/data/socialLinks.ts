export type SocialKey = "youtube" | "instagram" | "github" | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  handle: string;
  /** null = not configured yet; UI renders a "coming soon" state. */
  url: string | null;
}

export const socialLinks: Record<SocialKey, SocialLink> = {
  youtube: { key: "youtube", label: "YouTube", handle: "@ShadowmodeX719", url: "https://www.youtube.com/@ShadowmodeX719" },
  instagram: {
    key: "instagram",
    label: "Instagram",
    handle: "@shadowmodex719",
    url: "https://www.instagram.com/shadowmodex719/",
  },
  github: { key: "github", label: "GitHub", handle: "shadowmodex", url: "https://github.com/shadowmodex" },
  email: { key: "email", label: "Email", handle: "worldtech851@gmail.com", url: "mailto:worldtech851@gmail.com" },
};
