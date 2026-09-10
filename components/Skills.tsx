import { profile, skillGroups, tools } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Skills
        </p>
        <div className="flex flex-col gap-7">
          {skillGroups.map((skill) => (
            <div key={skill.label}>
              <div className="mb-2 flex justify-between gap-4 text-[0.9rem]">
                <span>{skill.label}</span>
                <span className="font-mono tabular-nums text-ink-soft">{skill.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-line bg-surface px-[13px] py-[7px] text-[0.82rem] text-ink-soft"
            >
              {tool}
            </span>
          ))}
        </div>
        <p className="mt-6 text-[0.82rem] text-ink-soft">Languages — {profile.languages}</p>
      </div>
    </section>
  );
}
