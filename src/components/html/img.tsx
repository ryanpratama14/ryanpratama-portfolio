import Image, { type StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  className?: string;
};

export default function Img({ alt, src, className }: Props) {
  return <Image alt={alt} src={src} placeholder="blur" priority className={className} sizes="(min-width: 740px) 674px, calc(95.48vw - 18px)" />;
}
