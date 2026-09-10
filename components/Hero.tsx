import { profile } from "@/lib/data";
import Pill from "./Pill";

export default function Hero() {
  return (
    <section className="border-b border-line pt-24 pb-16">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-soft">
          <strong className="font-semibold text-accent">● {profile.status}</strong> — {profile.location}
        </p>
        <h1 className="font-serif text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.02] text-balance">
          {profile.name}
        </h1>
        <p className="mt-2.5 text-[clamp(1.05rem,2vw,1.3rem)] font-semibold text-accent">
          {profile.headline}
        </p>
        <p className="mt-[22px] max-w-[56ch] text-[1.05rem] leading-relaxed text-ink-soft">
          {profile.intro}
        </p>
        <div className="mt-[30px] flex flex-wrap gap-3">
          <Pill href={`mailto:${profile.email}`} solid>
            Email me
          </Pill>
          {profile.linkedin && (
            <Pill href={profile.linkedin} external>
              LinkedIn ↗
            </Pill>
          )}
        </div>
      </div>
    </section>
  );
}
