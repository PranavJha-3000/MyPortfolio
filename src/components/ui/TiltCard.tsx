"use client";

import type { ReactNode } from "react";
import { useCursorEffects } from "@/hooks/useCursorEffects";
import { useTilt } from "@/hooks/useTilt";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Card that leans toward the cursor. Any `data-zoom` child scales with it. */
export function TiltCard({ children, className }: Props) {
  const enabled = useCursorEffects();
  const ref = useTilt<HTMLDivElement>(enabled);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
