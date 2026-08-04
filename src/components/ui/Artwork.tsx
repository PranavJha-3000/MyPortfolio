"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Only blur the hero if the page actually loaded at the top. */
const HERO_SCROLL_LIMIT = 140;

const HERO = {
  filter: "blur(22px) brightness(0.55)",
  transform: "scale(1.04)",
  transition: `filter 1.1s ease, transform 1.5s ${EASE}`,
};

const IN_PAGE = {
  filter: "blur(18px) brightness(0.6)",
  transform: "scale(1.02)",
  transition: `filter 1.2s ease, transform 1.6s ${EASE}`,
};

/** `idle` renders sharp and untransitioned — the already-scrolled hero. */
type Phase = "idle" | "blurred" | "sharp";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * `load` plays the entrance on mount; `scroll` waits until the artwork is
   * 20% on screen.
   */
  entrance: "load" | "scroll";
  priority?: boolean;
};

/**
 * A full-bleed section artwork that resolves out of a heavy blur.
 *
 * The images are finished pieces — never cropped or scaled to fit a viewport,
 * only laid out at full width with their own aspect ratio intact.
 *
 * Only the blurred state carries no transition. Blur is applied instantly and
 * only its removal animates; if both states shared a transition the artwork
 * would ease *into* the blur first, and the entrance would play backwards.
 */
export function Artwork({ src, alt, width, height, entrance, priority }: Props) {
  const reducedMotion = useReducedMotion();
  const isScroll = entrance === "scroll";

  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.2,
    enabled: isScroll && !reducedMotion,
  });

  const [phase, setPhase] = useState<Phase>("idle");

  useIsomorphicLayoutEffect(() => {
    if (isScroll || reducedMotion) return;
    // Refreshing mid-page would otherwise play a cinematic entrance nobody
    // is looking at, and re-blur an image already on screen.
    if (window.scrollY >= HERO_SCROLL_LIMIT) return;

    setPhase("blurred");

    // Two frames: one for the blur to be painted, the next to release it.
    // A single frame can be coalesced into the same paint, and nothing moves.
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setPhase("sharp"));
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [isScroll, reducedMotion]);

  const spec = isScroll ? IN_PAGE : HERO;
  const blurred = isScroll ? !inView : phase === "blurred";
  const settled = isScroll ? inView : phase === "sharp";

  let style: CSSProperties | undefined;
  if (!reducedMotion) {
    if (blurred) {
      style = { filter: spec.filter, transform: spec.transform };
    } else if (settled) {
      style = { filter: "none", transform: "scale(1)", transition: spec.transition };
    }
  }

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
        className="block h-auto w-full"
        style={style}
      />
    </div>
  );
}
