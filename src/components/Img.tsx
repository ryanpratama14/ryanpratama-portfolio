import Image, { StaticImageData } from "next/image";

type Props = {
  alt: string;
  src: StaticImageData;
  className?: string;
};

export default function Img({ alt, src, className }: Props): React.JSX.Element {
  return (
    <Image
      alt={alt}
      src={src}
      placeholder="blur"
      priority={true}
      className={className}
    />
  );
}
