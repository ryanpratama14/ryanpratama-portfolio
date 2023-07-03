import { StaticImageData } from "next/image";
import Contact from "./sections/Contact";
import Img from "./Img";
import GradientText from "./GradientText";

type Props = {
  src: StaticImageData;
  alt: string;
  title: string;
};

export default function Certification({
  src,
  alt,
  title,
}: Props): React.JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center ">
      <figure className="main-padding md:pt-longer flex flex-col gap-6">
        <GradientText
          text1={title}
          text2="Certification"
          className="text-center"
        />
        <Img src={src} alt={alt} className="rounded-md shadow-glowed-2" />
      </figure>
      <Contact isMain={false} />
    </main>
  );
}
