import { profile } from "@/lib/data";
import ContactForm from "./ContactForm";
import Pill from "./Pill";

export default function Contact() {
  return (
    <section id="contact" className="py-[76px]">
      <div className="mx-auto grid w-full max-w-[920px] grid-cols-1 items-start gap-12 px-7 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.4rem)] text-balance">
            Let&apos;s talk marketing.
          </h2>
          <p className="mt-3 max-w-[42ch] leading-relaxed text-ink-soft">
            Open to full-time marketing communications, performance marketing, and marketing
            technology roles in Bangkok or remote.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Pill href={`mailto:${profile.email}`} solid>
              {profile.email}
            </Pill>
            <Pill href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</Pill>
            {profile.linkedin && (
              <Pill href={profile.linkedin} external>
                LinkedIn ↗
              </Pill>
            )}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
