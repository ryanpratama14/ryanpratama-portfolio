import Image, { type StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  className?: string;
};

export default function Img({ alt, src, className }: Props) {
  return <Image alt={alt} src={src} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" placeholder="blur" className={className} />;
}
