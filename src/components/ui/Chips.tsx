import { cn } from "@/lib/cn";

type Props = {
  items: readonly string[];
  className?: string;
};

/** Hairline-bordered tech tags. */
export function Chips({ items, className }: Props) {
  return (
    <ul className={cn("flex list-none flex-wrap gap-2.5 p-0", className)}>
      {items.map((item) => (
        <li key={item} className="chip">
          {item}
        </li>
      ))}
    </ul>
  );
}
