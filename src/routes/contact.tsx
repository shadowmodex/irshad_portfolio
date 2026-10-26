import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/profile";
import { media } from "@/data/media";
import { HandwrittenAnnotation, PinnedPhoto, Star } from "@/components/site/decor";
import { ContactForm, SocialProfileCard } from "@/components/site/misc";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Irshad Akhtar" },
      { name: "description", content: "Get in touch with Irshad Akhtar about projects, collaborations or just to say hi." },
      { property: "og:title", content: "Contact Irshad Akhtar" },
      { property: "og:description", content: "Project ideas, collaborations or a quick hello." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="dark-panel grain">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-28 md:px-10 md:pt-36 lg:grid-cols-[1fr_1.2fr]">
        <div className="relative">
          <p className="font-hand text-2xl text-gold">// say hello</p>
          <h1 className="font-display text-[clamp(3rem,15vw,3.75rem)] font-semibold leading-[0.9] md:text-7xl">Let's <span className="font-hand font-normal text-beige">talk</span></h1>
          <p className="mt-5 max-w-md text-parchment/85">Have a project idea, want to collaborate on an app or extension, or just want to say hi? I'd love to hear from you.</p>
          <div className="mt-8 space-y-3">
            <SocialProfileCard k="email">{!profile.email && <span className="ml-auto text-[10px] uppercase tracking-wider text-ash">soon</span>}</SocialProfileCard>
            <SocialProfileCard k="instagram" />
            <SocialProfileCard k="youtube" />
            <SocialProfileCard k="github" />
          </div>
          <div className="mt-10 hidden w-40 lg:block"><PinnedPhoto src={media.workspace} alt="Demo image: the desk where projects happen" rotate={-5} caption="where it happens" /></div>
          <Star className="absolute right-6 top-2 h-7 w-7 text-gold" />
        </div>
        <div className="paper torn-both h-fit p-6 md:p-10">
          <h2 className="font-display text-3xl font-semibold text-ink">Start a conversation</h2>
          <HandwrittenAnnotation className="mb-6 text-xl text-moss" rotate={-2}>collabs, ideas, feedback — all welcome</HandwrittenAnnotation>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
