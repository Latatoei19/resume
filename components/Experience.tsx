import Image from "next/image";
import { siLine, siTiktok } from "simple-icons";
import { experiences } from "@/lib/data";
import ZoomableImage from "./ZoomableImage";

const brandIcons: Record<string, { path: string; hex: string }> = {
  tiktok: siTiktok,
  line: siLine,
};

function CompanyLogo({ logo, company }: { logo: string; company: string }) {
  const icon = brandIcons[logo];

  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-white">
      {icon ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px]">
          <path d={icon.path} fill={`#${icon.hex}`} />
        </svg>
      ) : (
        <Image src={logo} alt={`${company} logo`} width={36} height={36} className="h-5 w-5" />
      )}
    </span>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <h2 className="mb-8 font-serif text-[clamp(1.7rem,3.2vw,2.15rem)] leading-tight text-balance">Work Experience</h2>
        <div className="mt-9 flex flex-col gap-11 border-l-2 border-line pl-[26px]">
          {experiences.map((job) => (
            <div key={`${job.company}-${job.role}`} className="relative">
              <span
                aria-hidden
                className="absolute -left-[32px] top-1.5 h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-paper"
              />
              <div className="flex items-start gap-3.5">
                <CompanyLogo logo={job.logo} company={job.company} />
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 pt-0.5">
                  <span className="text-[1.15rem] font-bold">{job.role}</span>
                  <span className="font-semibold text-accent">· {job.company}</span>
                  <span className="font-mono text-[0.78rem] text-ink-soft sm:ml-auto">
                    {job.period}
                  </span>
                </div>
              </div>
              <ul className="mt-3.5 list-disc pl-[18px] text-[0.94rem] leading-[1.65] text-ink-soft">
                {job.responsibilities.map((item) => (
                  <li key={item} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
              {job.photos.length > 0 && (
                <div className="rail mt-5 flex snap-x gap-3 overflow-x-auto pb-2">
                  {job.photos.map((photo) => (
                    <figure
                      key={photo.src}
                      className="photo-card shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-surface shadow-card"
                    >
                      <ZoomableImage
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        sizes="300px"
                        className="block h-[150px] w-auto max-w-full object-cover sm:h-[190px]"
                      />
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
