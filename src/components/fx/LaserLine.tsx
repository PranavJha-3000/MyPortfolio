import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  style?: CSSProperties;
  /** Degrees of tilt. The design uses -3 in the intro, 2.5 in contact. */
  rotate: number;
  opacity: number;
};

/** A 1px red streak raked across the section, fading out at both ends. */
export function LaserLine({ className, style, rotate, opacity }: Props) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute left-[-5%] h-px w-[110%]", className)}
      style={{
        background:
          "linear-gradient(90deg, transparent, #E11D2E 30%, #E11D2E 70%, transparent)",
        opacity,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    />
  );
}
