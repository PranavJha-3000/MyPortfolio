import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
};

/** Red square plus tracked-out caption, e.g. `01 — ABOUT`. */
export function SectionLabel({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[12px] font-semibold tracking-[0.3em] text-muted",
        className,
      )}
    >
      <span aria-hidden className="inline-block h-[9px] w-[9px] bg-accent" />
      {children}
    </div>
  );
}
