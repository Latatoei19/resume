import { profile } from "@/lib/data";

export default function About() {
  const { education } = profile;

  return (
    <section id="about" className="border-b border-line py-[76px]">
      <div className="mx-auto grid w-full max-w-[920px] grid-cols-1 gap-12 px-7 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
            About
          </p>
          <h2 className="mb-[18px] font-serif text-[clamp(1.6rem,3vw,2rem)] text-balance">
            Marketing that lives in a dashboard
          </h2>
          <p className="leading-[1.7] text-ink-soft">{profile.summary}</p>
          <p className="mt-5 border-t border-dashed border-line pt-4 text-[0.9rem] text-ink-soft">
            {profile.interests}
          </p>
          <p className="mt-4 text-[0.82rem] text-ink-soft">
            <b className="font-semibold text-ink">{education.degree}</b> — {education.school} ·{" "}
            {education.period} · {education.note}
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {profile.strengths.map((strength) => (
            <li
              key={strength}
              className="flex gap-2.5 rounded-lg border border-line bg-surface px-3.5 py-3 text-[0.92rem] leading-snug"
            >
              <span aria-hidden className="shrink-0 font-bold text-accent">
                →
              </span>
              {strength}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
