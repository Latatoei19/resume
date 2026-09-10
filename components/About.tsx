import Image from "next/image";
import { profile } from "@/lib/data";

export default function About() {
  const { education } = profile;

  return (
    <section id="about" className="border-b border-line py-[76px]">
      <div className="mx-auto grid w-full max-w-[920px] grid-cols-1 gap-8 px-7 md:grid-cols-[0.85fr_1.4fr] md:gap-12">
        <div>
          <p className="mb-3.5 font-mono text-[0.8rem] uppercase tracking-[0.12em] text-accent">
            About
          </p>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2rem)] leading-tight text-balance">
            Marketing that lives in a dashboard
          </h2>
        </div>
        <div>
          <p className="leading-[1.7] text-ink-soft">{profile.summary}</p>
          <p className="mt-5 border-t border-dashed border-line pt-4 text-[0.9rem] text-ink-soft">
            {profile.interests}
          </p>
          <div className="mt-5 flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-white">
              <Image
                src={education.logo}
                alt={`${education.school} logo`}
                width={36}
                height={36}
                className="h-6 w-6"
              />
            </span>
            <div>
              <p className="font-semibold">{education.school}</p>
              <p className="mt-0.5 text-[0.82rem] text-ink-soft">
                {education.degree} · {education.period} · {education.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
