import { certifications } from "@/lib/data";
import ZoomableImage from "./ZoomableImage";

export default function Certifications() {
  const categories = [...new Set(certifications.map((cert) => cert.category))];

  return (
    <section id="certifications" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <h2 className="mb-8 font-display text-[clamp(1.6rem,3vw,2rem)] font-semibold leading-tight tracking-[-0.015em] text-balance">Certifications</h2>
        <div className="mt-8 flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-4 font-mono text-[0.88rem] uppercase tracking-[0.1em]">
                {category}
              </h3>
              <div className="rail -mx-7 flex snap-x snap-mandatory gap-4 overflow-x-auto px-7 pb-3">
                {certifications
                  .filter((cert) => cert.category === category)
                  .map((cert) => (
                    <article
                      key={cert.name}
                      className="flex w-[330px] shrink-0 snap-start flex-col gap-4 rounded-xl border border-line bg-surface p-5 shadow-card"
                    >
                      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-md border border-line bg-paper">
                        <ZoomableImage
                          src={cert.image}
                          alt={`${cert.name} certificate issued by ${cert.issuer}`}
                          width={cert.imageWidth}
                          height={cert.imageHeight}
                          sizes="290px"
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-[1.05rem] font-semibold leading-snug text-balance">{cert.name}</h4>
                        <p className="mt-2 text-[0.9rem] text-ink-soft">{cert.issuer}</p>
                      </div>
                      <span className="mt-auto font-mono text-[0.88rem] tabular-nums text-ink-soft">
                        {cert.year}
                      </span>
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
