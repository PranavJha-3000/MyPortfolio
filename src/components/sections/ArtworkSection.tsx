import { Artwork } from "@/components/ui/Artwork";

type Props = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Full-bleed artwork acting as a section opener. */
export function ArtworkSection({ id, src, alt, width, height }: Props) {
  return (
    <section id={id} className="relative leading-[0]">
      <Artwork
        src={src}
        alt={alt}
        width={width}
        height={height}
        entrance="scroll"
      />
    </section>
  );
}
