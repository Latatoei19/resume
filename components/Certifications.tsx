import Image from "next/image";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const categories = [...new Set(certifications.map((cert) => cert.category))];

  return (
    <section id="certifications" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Certifications
        </p>
        <div className="mt-8 flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 font-mono text-[0.74rem] uppercase tracking-[0.1em]">
                {category}
              </h3>
              <div className="rail -mx-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-3">
                {certifications
                  .filter((cert) => cert.category === category)
                  .map((cert) => (
                    <article
                      key={cert.name}
                      className="flex w-[300px] shrink-0 snap-start flex-col gap-4 rounded-xl border border-line bg-surface p-5 shadow-card"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-line bg-paper">
                        <Image
                          src={cert.image}
                          alt={`${cert.name} certificate issued by ${cert.issuer}`}
                          fill
                          sizes="260px"
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold leading-snug text-balance">{cert.name}</h4>
                        <p className="mt-2 text-[0.85rem] text-ink-soft">{cert.issuer}</p>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-3">
                        <span className="font-mono text-[0.8rem] tabular-nums text-ink-soft">
                          {cert.year}
                        </span>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.82rem] font-semibold text-accent no-underline hover:underline"
                          >
                            View ↗
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
