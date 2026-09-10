import { projects } from "@/lib/data";
import ZoomableImage from "./ZoomableImage";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Projects / Case Studies
        </p>
        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col gap-3.5 rounded-xl border border-line bg-surface p-[26px] shadow-card"
            >
              <div>
                <h3 className="font-sans text-[1.2rem] font-bold text-balance">{project.title}</h3>
                <p className="mt-1 font-mono text-[0.76rem] text-accent">{project.tools}</p>
              </div>
              <div>
                <h4 className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-soft">
                  Objective
                </h4>
                <p className="text-[0.88rem] leading-snug text-ink-soft">{project.objective}</p>
              </div>
              {project.role && (
                <div>
                  <h4 className="mb-1 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-ink-soft">
                    Role
                  </h4>
                  <p className="text-[0.88rem] leading-snug text-ink-soft">{project.role}</p>
                </div>
              )}
              <dl className="mt-auto border-t border-line">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-2.5 last:border-b-0"
                  >
                    <dt className="text-[0.7rem] uppercase tracking-[0.06em] text-ink-soft">
                      {metric.label}
                    </dt>
                    <dd className="text-right font-mono text-[0.92rem] font-semibold tabular-nums text-accent-warm">
                      {metric.value}
                    </dd>
                  </div>
                ))}
              </dl>
              {project.image && (
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-line bg-paper">
                  <ZoomableImage
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    width={project.imageWidth ?? 1000}
                    height={project.imageHeight ?? 750}
                    sizes="270px"
                    className="max-h-full w-auto object-contain"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
