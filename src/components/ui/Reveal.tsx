"use client";

import { createElement, type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/cn";

type Tag = "div" | "p" | "h2" | "h3" | "span" | "li" | "form";

type Props = {
  children: ReactNode;
  /** Defaults to a div. Pass the real tag when the element is semantic. */
  as?: Tag;
  className?: string;
  /** Stagger, in milliseconds. */
  delay?: number;
  threshold?: number;
  id?: string;
};

/**
 * Lifts its content into place the first time it scrolls into view, once only.
 *
 * Renders as the element itself rather than a wrapper, so it can safely be a
 * flex or grid child — several of these sit directly in flex rows and an extra
 * div would collapse their sizing.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  threshold = 0.12,
  id,
}: Props) {
  const reducedMotion = useReducedMotion();
  const { ref, inView } = useInView<HTMLElement>({
    threshold,
    enabled: !reducedMotion,
  });

  return createElement(
    as,
    {
      ref,
      id,
      "data-reveal": "",
      className: cn(
        "transition-[opacity,transform] duration-[900ms] ease-smooth",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[38px]",
        className,
      ),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
}
