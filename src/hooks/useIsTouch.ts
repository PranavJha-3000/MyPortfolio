"use client";

import { useEffect, useState } from "react";

/**
 * True on devices without a real hover pointer. Cursor-driven effects (tilt,
 * magnetic buttons, the mouse glow) are pointless there and cost frames.
 */
export function useIsTouch(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    setIsTouch(mq.matches);

    const onChange = (event: MediaQueryListEvent) => setIsTouch(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isTouch;
}
