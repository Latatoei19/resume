import { projects } from "@/lib/data";

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
              <div className="mt-auto grid grid-cols-3 gap-2.5 pt-1">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-line bg-paper px-2 py-3 text-center"
                  >
                    <div className="font-mono text-[1.05rem] font-semibold tabular-nums text-accent-warm">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-[0.66rem] uppercase tracking-wide text-ink-soft">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
