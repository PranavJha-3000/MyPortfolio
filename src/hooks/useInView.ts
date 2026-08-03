"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number;
  /** When false, reports in-view immediately and never observes. */
  enabled?: boolean;
};

/**
 * Fires once, then disconnects. Every reveal in this design is one-shot — the
 * prototype unobserves on first intersection and so do we.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.12,
  enabled = true,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, enabled]);

  return { ref, inView };
}
