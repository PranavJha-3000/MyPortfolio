"use client";

import { useEffect, useState } from "react";

/** Circumference of the r=52 ring, matching the design's dasharray. */
const CIRCUMFERENCE = 326.7;

type Props = {
  percent: number;
  /** Sweeps to `percent` when true, unwinds to zero when false. */
  active: boolean;
};

/** 104px proficiency ring with the figure set inside it. */
export function Gauge({ percent, active }: Props) {
  // The first row is open before anyone interacts, so its arc would otherwise
  // render already full. Holding it empty for one paint lets it sweep in.
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => setArmed(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const filled = active && armed;
  const offset = filled ? CIRCUMFERENCE * (1 - percent / 100) : CIRCUMFERENCE;

  return (
    <div className="relative h-[104px] w-[104px] flex-none">
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90" aria-hidden>
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--color-gauge-track)"
          strokeWidth="6"
        />
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="none"
          stroke="var(--color-warm)"
          strokeWidth="6"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-[1100ms] ease-smooth"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,159,67,0.45))" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-display text-[23px] text-warm">
        {percent}%
      </div>
    </div>
  );
}
