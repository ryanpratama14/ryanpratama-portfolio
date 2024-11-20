import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";

type Props = {
  alt: string | undefined;
  src: StaticImageData | string;
  className?: string;
  priority?: boolean;
  isStatic?: boolean;
};

export default function Img({ alt, src, className, priority, isStatic = true }: Props) {
  return (
    <Image
      alt={alt ?? ""}
      src={src}
      width={1000}
      height={1000}
      sizes={isStatic ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
      placeholder={isStatic ? "blur" : undefined}
      priority={priority}
      className={cn("shadow", className)}
    />
  );
}
