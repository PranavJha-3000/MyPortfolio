"use client";

import { useIsTouch } from "./useIsTouch";
import { useReducedMotion } from "./useReducedMotion";

/**
 * The single gate for cursor-driven flourishes. Tilt, magnetic buttons and the
 * mouse glow all share the same two disqualifiers, so they share one answer.
 */
export function useCursorEffects(): boolean {
  const isTouch = useIsTouch();
  const reducedMotion = useReducedMotion();
  return !isTouch && !reducedMotion;
}
