# Portfolio Placeholder Handoff — Irshad Akhtar

Inventory of every placeholder, link, asset and incomplete feature in this project, verified against the source as it stands. Nothing here was changed in the app.

**Statuses:** `CONNECTED` (real and working) · `MISSING` (no value set, UI shows a disabled "soon" state) · `PLACEHOLDER` (demo content shown in place of real content) · `NEEDS VERIFICATION` (present but not confirmed real/correct) · `NOT APPLICABLE`.

**Golden rule for replacing things:** content lives in `src/data/*.ts`. Components read from there. Set a value in the data file and every page that uses it updates. Unset external links are `null` and render through `ExternalAction` (`src/components/site/ActionLink.tsx`) as a greyed "soon" button. Never use `#` or a fake URL. Paste a real `https://…` string to make the button live.

---

## 1. Project structure and route inventory

### Data files (single source of truth)

| File | Holds |
|---|---|
| `src/data/profile.ts` | Name, roles, location, education, interests, tagline, bio, "currently building", `email` |
| `src/data/socialLinks.ts` | YouTube / Instagram / GitHub / Email labels, handles, URLs |
| `src/data/projects.ts` | All 8 projects: text, version, status, technologies, screenshots, icon, actions, URLs |
| `src/data/media.ts` | 4 image imports (`media`), `videos` (3), `instaPosts` (4), `repositories` (3) |
| `src/data/techStack.ts` | Technology catalog (5 groups, 45 entries, 17 flagged `featured` for the homepage) |
| `src/data/navigation.ts` | `mainNav` (9 links) and `footerNav` (8 + GitHub) |

### Key components

| File | Role |
|---|---|
| `src/components/site/ActionLink.tsx` | `btn()` styles, `ExternalAction` (null → disabled "soon"), `ProjectLink` (internal to `/projects/$slug`) |
| `src/components/site/Mockup.tsx` | `ProjectIcon` (monogram badges), `ScreenMockup` (CSS-drawn demo screens; shows a real image when `screenshot.src` is set) |
| `src/components/site/Gallery.tsx` | Three-screenshot gallery + lightbox on detail pages |
| `src/components/site/SetupGuide.tsx` | Five-step install guides (apps + extensions) |
| `src/components/site/cards.tsx` | `ProjectCard`, `AppCard`, `ExtensionCard`, `WebsiteCard` |
| `src/components/site/misc.tsx` | `TechStackGrid`, `SocialRow`, `SocialProfileCard`, `VideoCard`, `ContactForm`, `EmptyState`, `Breadcrumbs` |
| `src/components/site/decor.tsx` | `PinnedPhoto`, `HandwrittenAnnotation`, `SectionLabel`, `Star`, `PageIntro` |
| `src/components/site/SiteHeader.tsx` / `SiteFooter.tsx` | Navigation, mobile menu, footer |

### Routes (12 views: 11 route files + not-found)

| Route | File | Notes |
|---|---|---|
| `/` | `src/routes/index.tsx` | Hero, featured-project selector, Quick Links, apps, extensions, websites, creator corner, about preview, tech preview, contact strip |
| `/about` | `src/routes/about.tsx` | Bio, interests, journey, full tech catalog (`#tools-h`), selected projects |
| `/projects` | `src/routes/projects.index.tsx` | Search + category filters over all projects |
| `/projects/$slug` | `src/routes/projects.$slug.tsx` | One dynamic page for all 8 projects |
| `/apps` | `src/routes/apps.tsx` | 3 Android apps |
| `/extensions` | `src/routes/extensions.tsx` | 3 extensions |
| `/websites` | `src/routes/websites.tsx` | 2 websites |
| `/youtube` | `src/routes/youtube.tsx` | Placeholder videos |
| `/instagram` | `src/routes/instagram.tsx` | Placeholder posts, real profile URL |
| `/github` | `src/routes/github.tsx` | Placeholder repositories (footer-linked only, not in main nav) |
| `/contact` | `src/routes/contact.tsx` | Social cards + contact form |
| (404) | `src/routes/__root.tsx` → `NotFoundComponent` | "Go home" / "See projects" |

---

## 2. Complete placeholder inventory

### 2a. Image assets (`src/assets/`, mapped in `src/data/media.ts`)

All four are AI-generated atmosphere images marked `// DEMO` in `media.ts`. None is a real photo of Irshad or a real project.

| Key | File | Where it appears (file:line) | Status | Replace with |
|---|---|---|---|---|
| `media.workspace` | `src/assets/hero-workspace.jpg` (1600×1008) | Home hero background `index.tsx:31`; Contact pinned photo `contact.tsx:33`; YouTube placeholder thumbnail (`videos[0]`); Instagram placeholder (`instaPosts[1]`); inside demo mockups `Mockup.tsx:110,129` | PLACEHOLDER | Your real desk/workspace photo, landscape JPG about 1600×1000, keep filename `hero-workspace.jpg` to swap in place |
| `media.mountains` | `src/assets/mountains.jpg` | About portrait `about.tsx:46` (alt says "Portrait placeholder"); Instagram profile picture `instagram.tsx:29`; YouTube `videos[2]`; `instaPosts[0]`; mockups `Mockup.tsx:54,71,110,147` | PLACEHOLDER | About: a real portrait, portrait 4:5 JPG, e.g. `src/assets/portrait.jpg`. Instagram avatar: square JPG |
| `media.cityNight` | `src/assets/city-night.jpg` | Home "About Me" portrait `index.tsx:239` (alt "Portrait placeholder"); YouTube `videos[1]`; `instaPosts[2]`; mockups `Mockup.tsx:102,110,130` | PLACEHOLDER | Real portrait (can be the same `portrait.jpg`) |
| `media.restaurant` | `src/assets/restaurant.jpg` | Brown Oak detail hero `projects.$slug.tsx:40`; Websites page pinned photo `websites.tsx:54`; `instaPosts[3]`; mockups `Mockup.tsx:110,128,135` | PLACEHOLDER | Real Brown Oak photography or a site screenshot, 4:3 JPG |
| favicon | `public/favicon.ico` | Browser tab (`__root.tsx:74`) | NEEDS VERIFICATION | Template default; supply your own `.ico` at the same path |
| Social preview (og:image) | none | No route sets `og:image`; hosting supplies a screenshot | MISSING | Optional: a 1200×630 JPG at a public `https://` URL, added to a route's `head()` |
| Portrait captions | `PinnedPhoto caption="portrait coming soon"` at `index.tsx:239`, `about.tsx:46` | Visible text | PLACEHOLDER | Remove/change caption once the real portrait is set |

**How to swap:** replace the file in `src/assets/` with the same name, or add a new file and change the import in `src/data/media.ts`. For the portraits, import a new `portrait.jpg` in `media.ts`, then point `about.tsx:46` and `index.tsx:239` at it and update their `alt` text.

### 2b. Project screenshots and GIFs

All 24 screenshot slots (8 projects × 3) are **CSS-drawn demo mockups** produced by `ScreenMockup`/`Screen` in `Mockup.tsx`. **No real screenshot or GIF exists anywhere in the project.** Every project's `screenshots[n].src` is unset. There is no GIF field in the `Screenshot` type.

To add a real screenshot: put the image in `src/assets/`, import it in `src/data/projects.ts`, and set `src` on that screenshot object. `ScreenMockup` (`Mockup.tsx:168`) then renders the real image instead of the mockup. Because seven projects build screenshots with the `shots(...)` helper, either write the three objects out explicitly (as Brown Oak already does) or map over the result and add `src`.

Expected aspect ratios (from `Mockup.tsx:170–174`): **phone** frames 9:17 (e.g. 1080×2040), **browser** 16:10 (e.g. 1600×1000), **popup** 4:5 (e.g. 800×1000).

A GIF can be used as a `src` (it's just an image). There is no separate GIF slot. Adding one would need a new optional field, which is a code change.

### 2c. Social, video, Instagram, GitHub content (`src/data/media.ts`, `src/data/socialLinks.ts`)

| Item | Source | Current value | Status | Needed |
|---|---|---|---|---|
| YouTube URL | `socialLinks.youtube.url` | `null` | MISSING | Real channel URL. Do not guess it from the handle |
| YouTube handle | `socialLinks.youtube.handle` | `"ShadowmodeX"` | NEEDS VERIFICATION | Confirm exact channel name |
| Instagram URL | `socialLinks.instagram.url` | `https://www.instagram.com/shadowmodex719/` | CONNECTED (link renders) / NEEDS VERIFICATION (owner to confirm) | — |
| Instagram handle | `socialLinks.instagram.handle` | `"@shadowmodex719"` (also hard-coded in `instagram.tsx` head meta) | NEEDS VERIFICATION | — |
| GitHub URL | `socialLinks.github.url` | `null` | MISSING | Real profile URL |
| GitHub handle | `socialLinks.github.handle` | `"Profile coming soon"` | PLACEHOLDER | Real username |
| Email (social card) | `socialLinks.email.url` / `.handle` | `null` / `"Email coming soon"` | MISSING | `mailto:you@…` URL and display address |
| Email (form + mailto) | `profile.email` (`src/data/profile.ts`) | `null` | MISSING | Same address as a plain string |
| Videos ×3 | `videos` in `media.ts` | Titles "Video placeholder — Tech/Gaming/Tutorial", `url: null`, demo images | PLACEHOLDER | Real title, YouTube watch URL, 16:9 thumbnail (1280×720) for each |
| Video "Placeholder" badge | `VideoCard` `misc.tsx` (badge text "Placeholder") | Always shown | PLACEHOLDER | Remove once real videos are in (code change) |
| YouTube "real videos coming soon" note | `youtube.tsx:46` | Visible annotation | PLACEHOLDER | Remove once real videos are in |
| YouTube avatar | `youtube.tsx:34` monogram "SX" (`aria-label="Channel avatar placeholder"`) | Text badge | PLACEHOLDER | Optional channel avatar (code change) |
| Instagram posts ×4 | `instaPosts` in `media.ts` | Demo images, alt "Demo image: …" | PLACEHOLDER | Real square photos (1080×1080) + alt text. The Instagram page repeats the first 2 to fill its grid (`instagram.tsx:24`) |
| Instagram profile image | `instagram.tsx:29` uses `media.mountains`, alt "Profile image placeholder" | | PLACEHOLDER | Square avatar |
| Repositories ×3 | `repositories` in `media.ts` | "Repository placeholder 1–3", `url: null`, guessed languages | PLACEHOLDER | Real name, description, language, `https://github.com/…` URL |

### 2d. Project text, versions, statuses

| Field | Projects affected | Current value | Status |
|---|---|---|---|
| `version` | 6 apps/extensions | `"Version TBA"` (constant `VERSION_TBD`, `projects.ts:65`) | MISSING |
| `version` | omni-website, brown-oak-restaurant | `"Web"` | NOT APPLICABLE / NEEDS VERIFICATION |
| `status` | all | "In development" / "Active — new features in progress" / "Live link coming soon" | NEEDS VERIFICATION |
| `technologies` | all | see section 3 | NEEDS VERIFICATION (owner-supplied facts not confirmed) |
| `supportedBrowsers` | 3 extensions | `["Chrome (planned)", "Edge (planned)"]` | NEEDS VERIFICATION |
| `distribution` | 3 extensions | `"zip"` | NEEDS VERIFICATION |
| `limitations` | all | written generically | NEEDS VERIFICATION |
| Descriptions / features | all | written from your brief; no invented stats | NEEDS VERIFICATION (accuracy review) |
| "Currently building" | `profile.currentlyBuilding` | "New features for Omni Video Downloader" | NEEDS VERIFICATION |

No download counts, ratings or user statistics exist anywhere in the code.

---

## 3. Project-by-project checklist

Every project has these values in `src/data/projects.ts`: `icon` is a text monogram (no image file), `downloadUrl`/`liveUrl`/`repositoryUrl` are `null`, `primaryAction.url` and `secondaryAction.url` ("Source code") are `null`, and all 3 screenshots are demo mockups. There is no cover-image field; covers are the first screenshot. Detail page for all: `/projects/<slug>`.

| # | Slug | Name | Category | Icon (glyph/tone) | Tech listed | Version | Primary action | External link status | Screenshots (labels → what to capture) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `shadowmodex` | ShadowmodeX | Android app | SX / ink | Android, Flutter, Firebase | Version TBA | Download APK → `downloadUrl` + `primaryAction.url` | MISSING (APK, source) | Chat list → main inbox · Conversation view → a thread · App navigation → menu/settings. GIF: send a message |
| 2 | `pocket-knife` | Pocket Knife | Android app | PK / forest | Android, Flutter | Version TBA | Download APK | MISSING | Tool library → home grid · PDF merge → merge screen · Image resize → resize/convert result. GIF: merge two PDFs |
| 3 | `omni-video-downloader` | Omni Video Downloader | Android app | O / sky | Android, Flutter | Version TBA | Download APK | MISSING | Link analysis → paste link · Quality options → format picker · Download progress → active download. GIF: paste → choose → download |
| 4 | `omni-website` | Omni Video Downloader Website | Website | O / sky | React, TypeScript, Tailwind CSS, Vite | Web | Visit Website → `liveUrl` + `primaryAction.url` | MISSING (site URL, source) | Homepage · Results view · Features section (16:10). GIF optional: link-to-result flow |
| 5 | `brown-oak-restaurant` | Brown Oak Restaurant | Website | BO / ember | HTML, CSS, JavaScript | Web | Visit Website | MISSING | Homepage · Menu layout · Gallery (16:10). Already written as explicit objects, so just add `src`. Hero photo = `media.restaurant` |
| 6 | `omni-extension` | Omni Video Downloader Extension | Extension | O / sky | JavaScript, HTML, CSS | Version TBA | Get Extension → `downloadUrl` + `primaryAction.url` | MISSING (ZIP/store, source) | Popup · Detected media · Download options (4:5) |
| 7 | `pocket-knife-extension` | Pocket Knife Extension | Extension | PK / forest | JavaScript, HTML, CSS | Version TBA | Get Extension | MISSING | Tool menu · PDF merge · Image convert (4:5) |
| 8 | `hq-image-downloader` | HQ Image Downloader | Extension | HQ / gold | JavaScript, HTML, CSS | Version TBA | Get Extension | MISSING | Image grid · Quality picker · Saved images (4:5) |

**Important link wiring:** the detail page uses `primaryAction.url`, while cards, the homepage panel and the Apps/Extensions/Websites pages use `downloadUrl` (apps/extensions) or `liveUrl` (websites). **Set both** to the same URL or some buttons will stay "soon".

Recommended asset filenames (none exist yet): `src/assets/projects/<slug>-1.png`, `-2.png`, `-3.png`, optional `<slug>-demo.gif`. For APK/ZIP files, host them externally (GitHub Releases, Drive, store) and paste the `https://` URL. Do not add binaries to the repo.

No other projects exist in the code beyond these 8.

---

## 4. Social media and personal information

| Field | Source | Current value | Status |
|---|---|---|---|
| Name | `profile.firstName/lastName/fullName`; also hard-coded in `SiteHeader.tsx`, `SiteFooter.tsx`, `about.tsx:38`, route `head()` titles | Irshad Akhtar | CONNECTED |
| Roles | `profile.roles` | Developer, App Builder, Web Developer, Browser Extension Developer, Content Creator | NEEDS VERIFICATION |
| Location | `profile.location` | Faridabad, Haryana, India | NEEDS VERIFICATION |
| Education | `profile.education`; extra copy in `about.tsx` ("second year of my BCA") | BCA, second year | NEEDS VERIFICATION (update yearly) |
| Interests | `profile.interests` | Technology, App development, Web development, Gaming, Cricket, K-dramas, K-pop, Content creation | NEEDS VERIFICATION |
| Tagline / short bio | `profile.tagline`, `profile.shortBio` | written from brief | NEEDS VERIFICATION |
| Long "Who I am", journey, focus, goals | hard-coded in `src/routes/about.tsx` (`journey` array + JSX) | written from brief | NEEDS VERIFICATION |
| Profile photo | see 2a (`media.cityNight` on home, `media.mountains` on About) | demo landscapes | PLACEHOLDER |
| Tech stack | `src/data/techStack.ts` | 45 entries, 5 groups | NEEDS VERIFICATION (Additional group limited to TypeScript tooling, Flutter SDK, Android SDK; React Router, npm, Gradle and Manifest V3 were left out as unverified) |
| Footer tagline | `SiteFooter.tsx` "Small steps, big dreams." | — | CONNECTED |
| Social links | see 2c | 1 of 4 live (Instagram) | 3 MISSING |

Social links render in `SocialRow` (home hero, footer) and `SocialProfileCard` (contact). Both read `socialLinks`, so one edit updates all.

---

## 5. Setup guide inventory

Source: `src/components/site/SetupGuide.tsx`, rendered on every app/extension detail page under the "guide" section (`#guide-h`, also linked from the "Install guide" button on `/extensions`). Websites get no guide (NOT APPLICABLE).

**Android APK (`appSteps`, used by all 3 apps):** 1 Download the APK → 2 Locate the file → 3 Start installation (allow install from that source only if trusted) → 4 Install the application → 5 Open and explore. Note: "APK installation behaviour can vary…". Status: NEEDS VERIFICATION. Step 1 depends on a real `downloadUrl` (currently MISSING). Test against the real APK and hosting (e.g. Drive vs GitHub Releases change step 1–2 wording). Any minimum Android version is not stated and must come from you.

**Browser extension (`extSteps`, used by all 3 extensions):** the user toggles "ZIP package" / "Official store" (default from `distribution`, currently `zip`).
- ZIP: 1 Download package → 2 Extract ZIP → 3 Open chrome://extensions → 4 Enable Developer Mode, Load Unpacked → 5 Open from toolbar.
- Store: 1 Open store listing → 2 No preparation → 3 Open extensions page → 4 Follow store install → 5 Open from toolbar.
- Note under store mode says no listing is published yet. Status: NEEDS VERIFICATION. Confirm the real distribution method per extension. If none is on a store, consider hiding the store tab (code change). Browser support ("planned") must be confirmed.

The guides are generic per category, not per project. Project-specific steps (e.g. permissions an extension requests) would need a code change.

---

## 6. Contact form and integrations

Source: `ContactForm` in `src/components/site/misc.tsx`, rendered on `/contact`.

| Aspect | Actual behavior | Status |
|---|---|---|
| Fields | Name, Email, Subject, Message, each with label and client-side validation (name ≥2, valid email, subject ≥3, message ≥10) | CONNECTED |
| Delivery | **No backend, no email service, no database.** If `profile.email` is set, submit opens the visitor's email app via `mailto:` with subject/body pre-filled. If `null` (current), it shows: "sending isn't set up yet — no message was sent." | MISSING |
| Secrets / API keys | None exist in the project | NOT APPLICABLE |
| Spam protection | None | NOT APPLICABLE (until a backend is added) |

To make it work: (a) quickest: set `profile.email` (and `socialLinks.email`) and it becomes a mailto form. (b) Real delivery: add a backend form handler with an email service (a code change, not done).

No analytics, payment, or other third-party integrations exist in the code.

---

## 7. Broken links and incomplete functionality

No link points to a wrong or broken destination. All internal links resolve to existing routes. All unconfigured externals render as disabled "soon" buttons (`aria-disabled`, not clickable).

### Link and button audit

**Internal routes (all CONNECTED):** header nav ×9 + "Let's Talk" (`SiteHeader.tsx`, `navigation.ts`); mobile menu same + "Let's talk"; footer nav ×9 + "Send a message"; home: Explore My Work → `/projects`, Watch on YouTube → `/youtube`, Currently building → `/projects/omni-video-downloader`, More Projects → `/projects`, Quick Links ×5 (`/apps`, `/extensions`, `/websites`, `/youtube`, `/instagram`), View All ×3 (`/apps`, `/extensions`, `/websites`), Tech View All → `/about#tools-h`, Visit Channel → `/youtube` (internal, not YouTube itself), Follow on Instagram → `/instagram` (internal), Read More → `/about`, Let's talk → `/contact`; all View Details / Details / View / View case study / View Project Details → `/projects/<slug>`; Install guide → `/projects/<slug>#guide-h`; Back to all projects → `/projects`; About "Get in touch" → `/contact`; 404 "Go home"/"See projects".

**Homepage featured selectors:** 4 buttons (Omni, ShadowmodeX, Pocket Knife, Brown Oak) swap the panel in place without navigating. CONNECTED.

**External links:**

| Button | Location | Reads | Type | Status |
|---|---|---|---|---|
| Download APK (featured panel) | `index.tsx:95` | `downloadUrl` | file download | MISSING |
| Visit Website (featured panel) | `index.tsx:93` | `liveUrl` | external site | MISSING |
| APK (AppCard) | `cards.tsx:46` | `downloadUrl` | file download | MISSING |
| Add (ExtensionCard) | `cards.tsx:68` | `downloadUrl` | ZIP/store | MISSING |
| Visit (WebsiteCard) | `cards.tsx:88` | `liveUrl` | external site | MISSING |
| Download APK | `apps.tsx:36` | `downloadUrl` | file download | MISSING |
| Get Extension | `extensions.tsx:39` | `downloadUrl` | ZIP/store | MISSING |
| Visit Website ×2 | `websites.tsx:37, 50` | `liveUrl` | external site | MISSING |
| Primary action (label varies) | `projects.$slug.tsx:79` | `primaryAction.url` | download / site | MISSING ×8 |
| Source code | `projects.$slug.tsx:80` | `secondaryAction.url` | GitHub | MISSING ×8 |
| Visit Channel | `youtube.tsx:39` | `socialLinks.youtube.url` | external | MISSING |
| Follow on Instagram | `instagram.tsx:35` | `socialLinks.instagram.url` | external | CONNECTED |
| View profile | `github.tsx:34` | `socialLinks.github.url` | external | MISSING |
| Open repository ×3 | `github.tsx:46` | `repositories[].url` | external | MISSING |
| Video cards | `VideoCard` in `misc.tsx` | `videos[].url` | external | MISSING ×3 (rendered as non-links) |
| Social row YouTube/Instagram/GitHub/Email | `SocialRow` in `misc.tsx` | `socialLinks` | external | Instagram CONNECTED, others MISSING |
| Contact form submit | `ContactForm` | `profile.email` | mailto | MISSING |

**Incomplete functionality:** contact delivery; all downloads/installs; all live sites; all source links; GitHub page content; YouTube videos; Instagram post previews (demo images, not linked to posts); real screenshots; versions.

---

## 8. Prioritized replacement plan

1. **Contact:** set `profile.email` + `socialLinks.email` (`url: "mailto:…"`, `handle`). Unlocks the form (mailto) and the Email card.
2. **Downloads:** for each of the 6 apps/extensions, set `downloadUrl` and `primaryAction.url` to the hosted APK/ZIP/store URL. Confirm `distribution` for extensions.
3. **Live websites:** set `liveUrl` and `primaryAction.url` for `omni-website` and `brown-oak-restaurant`.
4. **Social:** set `socialLinks.youtube.url`, `socialLinks.github.url` + `handle`; confirm the Instagram handle/URL.
5. **Portrait:** add `src/assets/portrait.jpg`, use it at `index.tsx:239` and `about.tsx:46`, update alt/caption.
6. **Screenshots:** 24 images (section 3), wired via `src` in `projects.ts`. Start with Omni (homepage default).
7. **Versions:** replace `VERSION_TBD` per project.
8. **Source code links:** `secondaryAction.url` / `repositoryUrl`, then real `repositories` in `media.ts`.
9. **YouTube videos and Instagram posts:** replace `videos` and `instaPosts`, then remove the "Placeholder" badge and the "real videos coming soon" note (small code change).
10. **Hero photo / restaurant photo:** swap the demo images if you have real ones.
11. **Review text:** statuses, limitations, browser support, bio, tech list.

## 9. Final verification checklist

- [ ] Every "soon" badge is gone from buttons you've configured. Click each external button and confirm it opens the right destination in a new tab.
- [ ] Detail page primary button and card/list buttons point to the same URL for each project.
- [ ] APK and ZIP links download the correct, latest file, and the setup guide steps match reality on a real phone/browser.
- [ ] Contact form opens your email app with the message filled in (or delivers, if a backend is added).
- [ ] Social row (home hero, footer) and contact cards show 4 working links.
- [ ] Portrait shows on Home and About. No alt text still says "placeholder" or "demo".
- [ ] All 24 screenshots render in cards, detail galleries and the lightbox at the expected ratios (9:17 / 16:10 / 4:5).
- [ ] Versions shown on app cards and detail pages.
- [ ] Homepage featured selector still switches all 4 projects. View Details/View All still navigate.
- [ ] Check at phone width (≈360px) that nothing scrolls sideways.
