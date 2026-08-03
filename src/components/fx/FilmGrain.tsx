import { atmosphere } from "@/lib/config";

const NOISE_TILE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

/** Fixed noise tile that sits above everything and takes no clicks. */
export function FilmGrain() {
  if (!atmosphere.filmGrain) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[80] opacity-[0.05]"
      style={{ backgroundImage: NOISE_TILE, backgroundSize: "200px 200px" }}
    />
  );
}
