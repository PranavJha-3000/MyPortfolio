"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * `load` plays the entrance immediately (hero); `scroll` waits until the
   * artwork is 20% on screen.
   */
  entrance: "load" | "scroll";
  priority?: boolean;
};

/**
 * A full-bleed section artwork that resolves out of a heavy blur.
 *
 * The images are finished pieces — they are never cropped or scaled to fit a
 * viewport, only laid out at full width with their own aspect ratio intact.
 */
export function Artwork({ src, alt, width, height, entrance, priority }: Props) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    enabled: entrance === "scroll" && !reducedMotion,
  });

  const isScrollEntrance = entrance === "scroll";
  const blurred = isScrollEntrance && !inView && !reducedMotion;

  return (
    <div ref={ref} className="leading-[0]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="100vw"
        data-artwork=""
        className={cn(
          "block h-auto w-full",
          isScrollEntrance && "transition-[filter,transform] ease-smooth",
          entrance === "load" && !reducedMotion && "artwork-entrance",
        )}
        style={
          isScrollEntrance
            ? {
                filter: blurred ? "blur(18px) brightness(0.6)" : "none",
                transform: blurred ? "scale(1.02)" : "scale(1)",
                transitionDuration: "1200ms, 1600ms",
              }
            : undefined
        }
      />
    </div>
  );
}
