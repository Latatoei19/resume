import Image from "next/image";
import { photos } from "@/lib/data";

export default function Photos() {
  return (
    <section id="photos" className="border-b border-line py-[76px]">
      <div className="mx-auto w-full max-w-[920px] px-7">
        <p className="mb-3.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">
          Where I&apos;ve worked
        </p>
        <h2 className="mb-9 font-serif text-[clamp(1.6rem,3vw,2rem)] text-balance">
          Inside the platforms I buy on
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {photos.map((photo) => (
            <figure key={photo.src} className="photo-card">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-surface shadow-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 290px"
                  className="photo-img object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-soft">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
