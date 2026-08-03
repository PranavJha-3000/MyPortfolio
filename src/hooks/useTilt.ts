"use client";

import { useEffect, useRef } from "react";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Cursor-following 3D tilt. Any descendant marked `data-zoom` scales with it,
 * which is how the framed images push in behind their border.
 *
 * Transforms are written straight to the node rather than held in state — this
 * runs on every mousemove and must not re-render React.
 */
export function useTilt<T extends HTMLElement>(enabled: boolean) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;

    const zoom = el.querySelector<HTMLElement>("[data-zoom]");

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      el.style.transition = "transform 0.18s ease-out";
      el.style.transform = `perspective(950px) rotateX(${-py * 4}deg) rotateY(${px * 5}deg)`;
      if (zoom) zoom.style.transform = "scale(1.045)";
    };

    const onLeave = () => {
      el.style.transition = `transform 0.6s ${EASE}`;
      el.style.transform = "perspective(950px) rotateX(0deg) rotateY(0deg)";
      if (zoom) zoom.style.transform = "scale(1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.style.transform = "";
      el.style.transition = "";
      if (zoom) zoom.style.transform = "";
    };
  }, [enabled]);

  return ref;
}
