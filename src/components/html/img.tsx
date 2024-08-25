import Image, { type StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  className?: string;
  priority?: boolean;
};

export default function Img({ alt, src, className, priority }: Props) {
  return <Image alt={alt} width={1000} height={1000} src={src} placeholder="blur" priority={priority} className={className} />;
}
