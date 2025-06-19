import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  alt: string | undefined | null;
  src: StaticImageData | string | undefined | null;
  className?: string;
  priority?: boolean;
};

export default function Img({ alt, src, className, priority }: Props) {
  if (!src) return null;
  const isDynamic = typeof src === "string";

  return (
    <Image
      alt={alt || ""}
      src={src}
      sizes="(max-width: 800px) 100vw, 800px"
      placeholder={isDynamic ? undefined : "blur"}
      priority={priority}
      width={isDynamic ? 1000 : undefined}
      height={isDynamic ? 1000 : undefined}
      className={cn("shadow", className)}
    />
  );
}
