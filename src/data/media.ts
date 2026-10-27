import workspace from "@/assets/hero-workspace.jpg";
import mountains from "@/assets/mountains.jpg";
import restaurant from "@/assets/restaurant.jpg";
import cityNight from "@/assets/city-night.jpg";
import portrait from "@/assets/portrait.png";

// Real Instagram assets
import instagramDp from "@/assets/instagram/instagram_dp.jpg";
import instagramPost1 from "@/assets/instagram/Instagram_post_1.jpg";
import instagramPost2 from "@/assets/instagram/Instagram_post_2.jpg";
import instagramPost3 from "@/assets/instagram/Instagram_post_3.jpg";

// Real YouTube assets
import youtubeDp from "@/assets/youtube/youtube_dp.jpg";
import youtubeVideo1 from "@/assets/youtube/youtube_video_1.avif";
import youtubeVideo2 from "@/assets/youtube/youtube_video_2.webp";
import youtubeVideo3 from "@/assets/youtube/youtube_video_3.avif";

/**
 * Central asset map. Replace any entry with a real file to update the whole site.
 * Atmosphere images provide warm scrapbook backgrounds.
 */
export const media = {
  workspace,
  mountains,
  restaurant,
  cityNight,
  portrait,
  instagramDp,
  youtubeDp,
  instagramPost1,
  instagramPost2,
  instagramPost3,
  youtubeVideo1,
  youtubeVideo2,
  youtubeVideo3,
};

export interface VideoItem {
  id: string;
  title: string;
  topic: string;
  url: string | null;
  image: string;
}

/** Real YouTube videos from @ShadowmodeX719 channel */
export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "HOW to make bootable pendrive to install windows|BY HTD|2021",
    topic: "Tutorial",
    url: "https://www.youtube.com/watch?v=QJM0MsEDCn4",
    image: youtubeVideo1,
  },
  {
    id: "v2",
    title: "GTA 5 Story Begins | Epic Bank Heist | My First Gaming Video | ShadowmodeX Ep. 1",
    topic: "Gaming",
    url: "https://youtu.be/BDOj-QmKT5c?si=_4OgXW8OKHUUC7YW",
    image: youtubeVideo2,
  },
  {
    id: "v3",
    title: "How to download Minecraft And Install Java Edition on PC/ laptop |BY HTD|2021",
    topic: "Tutorial",
    url: "https://www.youtube.com/watch?v=LVeFx3lW0IE",
    image: youtubeVideo3,
  },
];

export interface InstaPostItem {
  id: string;
  image: string;
  alt: string;
  note: string;
  title: string;
  caption: string;
  url: string;
}

/** Real Instagram posts from @shadowmodex719 */
export const instaPosts: InstaPostItem[] = [
  {
    id: "p1",
    image: instagramPost1,
    alt: "OMNI Video Downloader by ShadowmodeX on Instagram",
    note: "OMNI Video Downloader",
    title: "OMNI Video Downloader",
    url: "https://www.instagram.com/p/De_aanov3vF/",
    caption: `🚀 INTRODUCING OMNI — BY SHADOWMODEX.

One app. Multiple sources. A simpler way to save your media. 🖤

Meet OMNI Video Downloader — built for people who want their media tools in one place.

✦ 🎬 YouTube Videos & Shorts  
✦ 📸 Instagram Reels & Posts  
✦ 🌐 Support for 100+ websites  
✦ ⚡ Choose from available video qualities  
✦ 🎵 Extract audio from supported videos  
✦ 📲 Share videos directly to OMNI  
✦ 📁 Manage your downloads in one place

Clean experience. Powerful tools. Built with purpose.

This isn't just another app. It's something we built from the ground up.

OMNI IS HERE. 🖤

📥 Download link in bio.

Built by @shadowmodex719`,
  },
  {
    id: "p2",
    image: instagramPost2,
    alt: "PocketKnife — Everyday File Tools by ShadowmodeX on Instagram",
    note: "PocketKnife",
    title: "PocketKnife",
    url: "https://www.instagram.com/p/De_a1sFPu0s/",
    caption: `🛠️ MEET POCKETKNIFE — YOUR EVERYDAY FILE TOOLS.

Small app. Useful tools. Zero unnecessary complexity. 💙

Introducing PocketKnife, built to make everyday file tasks simpler, faster, and more convenient.

✨ WHAT'S INSIDE?

🖼️ Photo Resizer  
↳ Resize, convert & compress images  
↳ Supports JPG, PNG, WEBP & BMP

📄 Docs Toolkit  
↳ Text & Word to PDF  
↳ Merge, split & compress PDFs

🔒 Simple. Fast. Private.  
📱 Designed for Android.

No clutter. Just the tools you need, in one place.

POCKETKNIFE IS HERE. 🚀

Built with care by @shadowmodex719 🖤

📥 Download link in bio.`,
  },
  {
    id: "p3",
    image: instagramPost3,
    alt: "ShadowmodeX App by Irshad Akhtar on Instagram",
    note: "ShadowmodeX App",
    title: "ShadowmodeX App",
    url: "https://www.instagram.com/p/De_cLj4PCNL/",
    caption: `🌿 INTRODUCING SHADOWMODEX.

A space to chat, connect, play, and be yourself.

Meet ShadowmodeX — a fresh take on social connection, designed with simplicity, privacy, and meaningful interactions in mind. 🫒

✦ 💬 Real-Time Chats — Conversations made simple.  
✦ 👥 Friends — Find and connect with people.  
✦ 👤 Personal Profile — Your identity, your space.  
✦ ⚙️ Smart Settings — Manage your account and preferences.  
✦ 🎮 Connection Snake — A little game for your downtime.

Minimal design. Thoughtful details. A different kind of social experience.

Every idea starts somewhere. This one started with a vision to build something of our own.

SHADOWMODEX — MORE THAN JUST AN APP. 🖤

📱 Available on Android.  
📥 Download link in bio.

Built by Irshad Akhtar.`,
  },
];

/** PLACEHOLDER repositories — replace once real GitHub data is supplied. */
export const repositories = [
  { id: "r1", name: "Repository placeholder 1", description: "Source for an Android project. Link pending.", language: "Kotlin / Flutter", url: null as string | null },
  { id: "r2", name: "Repository placeholder 2", description: "Source for a browser extension. Link pending.", language: "JavaScript", url: null as string | null },
  { id: "r3", name: "Repository placeholder 3", description: "Source for a website project. Link pending.", language: "TypeScript", url: null as string | null },
];
