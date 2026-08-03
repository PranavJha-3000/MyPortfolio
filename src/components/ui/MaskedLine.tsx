"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * A headline line that slides up from under its own clipping mask.
 *
 * The observer watches the *wrapper*, never the line. The line starts pushed
 * 112% down and is therefore clipped out of the box entirely — observed
 * directly it would never intersect, and the headline would never arrive.
 */
export function MaskedLine({ children, className, delay = 0 }: Props) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.35,
    enabled: !reducedMotion,
  });

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={cn(
          "transition-transform duration-1000 ease-smooth",
          inView ? "translate-y-0" : "translate-y-[112%]",
          className,
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
