import {
  siGoogleads,
  siGoogleanalytics,
  siGoogletagmanager,
  siLine,
  siLooker,
  siMeta,
  siTiktok,
} from "simple-icons";
import { platformTools, profile, skillAreas, supportTools } from "@/lib/data";

const brandIcons: Record<string, { path: string; hex: string }> = {
  meta: siMeta,
  googleads: siGoogleads,
  tiktok: siTiktok,
  line: siLine,
  googleanalytics: siGoogleanalytics,
  googletagmanager: siGoogletagmanager,
  looker: siLooker,
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Skills
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {skillAreas.map((area) => (
            <div key={area.title}>
              <h3 className="mb-3 border-b border-line pb-2 font-mono text-[0.74rem] uppercase tracking-[0.1em]">
                {area.title}
              </h3>
              <ul className="flex flex-col gap-1.5 text-[0.9rem] leading-snug text-ink-soft">
                {area.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-12 mb-4 font-mono text-[0.74rem] uppercase tracking-[0.1em]">
          Platforms
        </h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-3">
          {platformTools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line bg-white">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[15px] w-[15px]">
                  <path
                    d={brandIcons[tool.icon].path}
                    fill={`#${brandIcons[tool.icon].hex}`}
                  />
                </svg>
              </span>
              <span className="text-[0.85rem] leading-tight">{tool.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {supportTools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-line bg-surface px-[13px] py-[7px] text-[0.82rem] text-ink-soft"
            >
              {tool}
            </span>
          ))}
        </div>

        <p className="mt-8 text-[0.82rem] text-ink-soft">Languages — {profile.languages}</p>
      </div>
    </section>
  );
}
