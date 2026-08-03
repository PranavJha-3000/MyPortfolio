import { cn } from "@/lib/cn";

type Props = {
  children: string;
  className?: string;
  /** Degrees of tilt; the design uses -1.5 or -2. */
  rotate?: number;
};

/** Handwritten orange aside. */
export function CaveatNote({ children, className, rotate = -2 }: Props) {
  return (
    <div
      className={cn("font-hand text-[22px] font-semibold text-warm", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}
