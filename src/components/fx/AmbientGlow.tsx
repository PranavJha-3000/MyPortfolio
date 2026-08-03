import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { glowScale } from "@/lib/config";

type Props = {
  className?: string;
  style?: CSSProperties;
  /** Per-glow factor from the design (the prototype's `data-ambient`). */
  intensity?: number;
  /** Peak alpha at the centre of the radial gradient. */
  alpha?: number;
  /** Gradient origin, e.g. `circle at 30% 20%`. */
  shape?: string;
  /** Full CSS animation shorthand, e.g. `drift1 26s ease-in-out infinite`. */
  animation?: string;
};

/**
 * One of the big soft orange circles that lights the page from off-canvas.
 * Final opacity is the glow's own factor scaled by the global glow intensity.
 */
export function AmbientGlow({
  className,
  style,
  intensity = 1,
  alpha = 0.2,
  shape = "circle",
  animation,
}: Props) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute rounded-full", className)}
      style={{
        background: `radial-gradient(${shape}, rgba(255,159,67,${alpha}) 0%, rgba(255,159,67,0) 64%)`,
        opacity: Math.min(1, glowScale * intensity),
        animation,
        ...style,
      }}
    />
  );
}
