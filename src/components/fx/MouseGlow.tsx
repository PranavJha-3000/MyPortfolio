"use client";

import { useEffect, useRef } from "react";
import { useCursorEffects } from "@/hooks/useCursorEffects";
import { atmosphere } from "@/lib/config";

/**
 * A warm halo that trails the cursor, easing 9% of the remaining distance each
 * frame. Position is written directly to the node — running this through React
 * state would re-render the whole page sixty times a second.
 */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useCursorEffects();

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight * 0.4;
    let currentX = targetX;
    let currentY = targetY;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      el.style.left = `${currentX}px`;
      el.style.top = `${currentY}px`;
      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!atmosphere.mouseGlow || !enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[75] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        left: "50vw",
        top: "38vh",
        background:
          "radial-gradient(circle, rgba(255,159,67,0.15) 0%, rgba(255,159,67,0.05) 42%, rgba(255,159,67,0) 68%)",
      }}
    />
  );
}
