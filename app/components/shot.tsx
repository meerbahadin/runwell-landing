import Image, { type StaticImageData } from "next/image";

type ShotProps = {
  /**
   * A statically imported image. Next reads its real dimensions at build time,
   * so dropping in a replacement of any size needs no code change here.
   */
  src: StaticImageData;
  alt: string;
  /** Tailwind rounding for the image itself, matched by the fade overlay. */
  radius?: string;
  /** Where the fade lands, as a CSS color — matches the surface behind it. */
  fade?: string;
  /** How far up the image the fade reaches. */
  fadeHeight?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * A screenshot that dissolves into the surface below it, so the hard bottom
 * edge of a captured window never cuts across the page. The overlay is
 * pointer-transparent and purely decorative.
 */
export function Shot({
  src,
  alt,
  radius = "rounded-xl",
  fade = "#ffffff",
  fadeHeight = "38%",
  className = "",
  sizes,
  priority,
}: ShotProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        className={`block w-full ${radius}`}
        sizes={sizes}
        priority={priority}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 bottom-0 ${radius}`}
        style={{
          height: fadeHeight,
          backgroundImage: `linear-gradient(to bottom, transparent, ${fade})`,
        }}
      />
    </div>
  );
}
