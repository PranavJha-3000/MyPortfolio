"use client";

import { useEffect, useRef } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Pulls an element toward the cursor while hovered, then springs it back.
 * Vertical pull is stronger than horizontal (0.3 vs 0.2), which is what makes
 * the wide CTA buttons feel weighted rather than slippery.
 */
export function useMagnetic<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);

      el.style.transition = "transform 0.15s ease-out";
      el.style.transform = `translate(${dx * 0.2}px, ${dy * 0.3}px)`;
    };

    const onLeave = () => {
      el.style.transition = `transform 0.45s ${EASE}`;
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = "";
      el.style.transition = "";
    };
  }, [enabled]);

  return ref;
}
