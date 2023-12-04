import { StaticImageData } from "next/image";
import Contact from "./sections/Contacts";
import Img from "./Img";
import GradientText from "./GradientText";
import Link from "next/link";

type Props = {
  src: StaticImageData;
  alt: string;
  title: string;
};

export default function Certification({ src, alt, title }: Props): React.JSX.Element {
  return (
    <main className="flex flex-col">
      <figure className="main-padding md:pt-longer flex flex-col items-center justify-center gap-6">
        <GradientText bigger text1={title} text2="Certification" className="text-center" />
        <Img src={src} alt={alt} className="rounded-md shadow-glowed-2" />
      </figure>
      <section className="min-h-[10vh] flex justify-center items-center">
        <Link className="btn-nav px-6 py-2 w-fit" href="/">
          Back to Homepage
        </Link>
      </section>
      <Contact isMain={false} />
    </main>
  );
}
