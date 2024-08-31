import Image, { type StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  className?: string;
  priority?: boolean;
};

export default function Img({ alt, src, className, priority }: Props) {
  return (
    <Image
      alt={alt}
      src={src}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      priority={priority}
      className={className}
    />
  );
}
