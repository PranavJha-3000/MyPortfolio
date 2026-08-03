"use client";

import type { ReactNode } from "react";
import { useCursorEffects } from "@/hooks/useCursorEffects";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/cn";

type Props = {
  children: ReactNode;
  /** Omit to render a non-interactive, visibly disabled control. */
  href?: string;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
};

/**
 * A link that leans toward the cursor on hover.
 *
 * With no `href` it renders as a disabled span rather than an anchor to `#` —
 * the design ships placeholder URLs, and a link that silently jumps to the top
 * of the page is worse than one that plainly says it isn't ready.
 */
export function MagneticLink({
  children,
  href,
  className,
  external,
  ...rest
}: Props) {
  const enabled = useCursorEffects();
  const ref = useMagnetic<HTMLAnchorElement>(enabled && Boolean(href));

  if (!href) {
    return (
      <span
        className={cn("inline-block", className)}
        aria-disabled="true"
        title="Link coming soon"
        {...rest}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      className={cn("inline-block will-change-transform", className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      {...rest}
    >
      {children}
    </a>
  );
}
