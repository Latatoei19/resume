import {
  siGoogleads,
  siGoogleanalytics,
  siGoogletagmanager,
  siLine,
  siLooker,
  siMeta,
  siTiktok,
} from "simple-icons";
import { platformTools, profile, skillGroups } from "@/lib/data";

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
        <h2 className="mb-8 font-serif text-[clamp(1.7rem,3.2vw,2.15rem)] leading-tight text-balance">Skills</h2>

        <h3 className="mb-4 font-mono text-[0.88rem] uppercase tracking-[0.1em]">Platforms</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
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

        <dl className="mt-9 border-t border-line">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 gap-x-8 gap-y-1.5 border-b border-line py-4 sm:grid-cols-[210px_1fr]"
            >
              <dt className="font-mono text-[0.88rem] uppercase tracking-[0.1em] text-ink">
                {group.title}
              </dt>
              <dd className="text-[0.92rem] leading-relaxed">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-[0.82rem] text-ink-soft">Languages — {profile.languages}</p>
      </div>
    </section>
  );
}
