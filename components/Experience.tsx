import Image from "next/image";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Work Experience
        </p>
        <div className="mt-9 flex flex-col gap-11 border-l-2 border-line pl-[26px]">
          {experiences.map((job) => (
            <div key={`${job.company}-${job.role}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[32px] top-1.5 h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-paper"
              />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2.5">
                    <span className="text-[1.15rem] font-bold">{job.role}</span>
                    <span className="font-semibold text-accent">· {job.company}</span>
                    <span className="font-mono text-[0.78rem] text-ink-soft sm:ml-auto">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-3.5 list-disc pl-[18px] text-[0.94rem] leading-[1.65] text-ink-soft">
                    {job.responsibilities.map((item) => (
                      <li key={item} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-3.5 inline-block rounded-md bg-accent-warm-soft px-3 py-[5px] font-mono text-[0.78rem] font-semibold text-accent-warm">
                    {job.badge}
                  </span>
                </div>
                {job.photo && (
                  <figure className="photo-card w-full shrink-0 sm:w-[190px]">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-surface shadow-card">
                      <Image
                        src={job.photo}
                        alt={job.photoAlt ?? ""}
                        fill
                        sizes="(max-width: 640px) 100vw, 190px"
                        className="photo-img object-cover"
                      />
                    </div>
                  </figure>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
