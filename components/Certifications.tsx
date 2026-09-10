import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Certifications
        </p>
        <div className="mt-[30px] border-t border-line">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="grid grid-cols-1 items-center gap-x-4 gap-y-1 border-b border-line py-4 text-[0.92rem] sm:grid-cols-[2.2fr_1.3fr_0.7fr_0.5fr]"
            >
              <span className="font-semibold">{cert.name}</span>
              <span className="text-ink-soft">{cert.issuer}</span>
              <span className="font-mono tabular-nums text-ink-soft">{cert.year}</span>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.85rem] text-accent no-underline hover:underline sm:text-right"
                >
                  View ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
