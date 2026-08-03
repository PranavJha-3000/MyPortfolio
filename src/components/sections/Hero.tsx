import { Artwork } from "@/components/ui/Artwork";

/**
 * The nav is painted into the artwork itself, so it cannot be read by a screen
 * reader or reached by keyboard. These transparent anchors sit exactly on top
 * of the painted words to give that nav back — percentages, so they track the
 * image at every width.
 */
const HOTSPOTS = [
  { href: "#about", label: "About", left: "35.2%", width: "5.1%" },
  { href: "#skills", label: "Skills", left: "44.4%", width: "4.7%" },
  { href: "#experience", label: "Experience", left: "52.9%", width: "7.9%" },
  { href: "#projects", label: "Projects", left: "64.1%", width: "6.9%" },
  { href: "#contact", label: "Contact", left: "74.7%", width: "6.6%" },
];

export function Hero() {
  return (
    <section id="top" className="relative leading-[0]">
      <Artwork
        src="/artwork/hero.png"
        alt="Pranav Jha — Entrepreneur and Software Engineer. Studio desk with a cutting mat, magnifier and camera."
        width={1672}
        height={940}
        entrance="load"
        priority
      />

      <nav aria-label="Primary">
        {HOTSPOTS.map((spot) => (
          <a
            key={spot.href}
            href={spot.href}
            aria-label={spot.label}
            className="absolute z-[5] hover:shadow-[inset_0_-2px_0_0_#E11D2E] focus-visible:shadow-[inset_0_-2px_0_0_#E11D2E]"
            style={{
              top: "2.4%",
              height: "3.4%",
              left: spot.left,
              width: spot.width,
            }}
          />
        ))}
      </nav>
    </section>
  );
}
