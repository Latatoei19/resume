"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className: string;
};

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
}: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) dialog.showModal();
    else dialog.close();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge photo: ${alt}`}
        data-track="image-zoom"
        data-track-image={src}
        className="block cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        {/* pointer-events-none: keeps the browser's click target on the
            button (and its data-track-image attribute) instead of this img,
            which GTM's click variables read from directly with no bubbling. */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={`${className} pointer-events-none`}
        />
      </button>
      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setOpen(false);
        }}
        className="lightbox"
      >
        {open && (
          <figure className="m-0 flex flex-col gap-3">
            {/* Plain img on purpose: a dialog is display:none until it opens, so the
                browser picks the smallest srcset candidate and never re-fetches.
                These files are already web-sized, so serving them whole is sharper. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="max-h-[78vh] w-full rounded-lg object-contain"
            />
            <figcaption className="text-[0.82rem] text-ink-soft">{alt}</figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
