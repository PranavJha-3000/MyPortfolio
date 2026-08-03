import Image from "next/image";

type Props = {
  /** Path under /public. Without it, an on-brand placeholder frame renders. */
  src?: string;
  alt: string;
  /** Caption shown inside the placeholder while the real image is missing. */
  placeholder: string;
  /** CSS aspect-ratio, e.g. `4 / 5` or `16 / 10`. */
  aspect: string;
  sizes?: string;
};

/**
 * The inner image of a framed card. The `data-zoom` wrapper is what `useTilt`
 * finds and scales, so the picture pushes in behind a border that stays put.
 */
export function FramedImage({ src, alt, placeholder, aspect, sizes }: Props) {
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: aspect }}>
      <div
        data-zoom
        className="h-full w-full transition-transform duration-[900ms] ease-smooth"
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
            className="object-cover"
          />
        ) : (
          <Placeholder label={placeholder} />
        )}
      </div>
    </div>
  );
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#0d0d0f]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(245,245,245,0.022) 0 1px, transparent 1px 10px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-8 text-center">
        <span aria-hidden className="h-[9px] w-[9px] bg-accent" />
        <span className="text-[11px] leading-relaxed tracking-[0.26em] text-muted/70 uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
