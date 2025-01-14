import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";

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
      width={1000}
      height={1000}
      sizes={!isDynamic ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      placeholder={!isDynamic ? "blur" : undefined}
      priority={priority}
      className={cn("shadow", className)}
    />
  );
}
