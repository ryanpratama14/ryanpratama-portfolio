import GradientText from "@/components/GradientText";
import Img from "@/components/Img";
import Contact from "@/components/sections/Contacts";
import type { Dictionary, Lang } from "@/types";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  src: StaticImageData;
  alt: string;
  title: string;
  t: Dictionary;
  lang: Lang;
};

export default function Certification({ src, alt, title, t, lang }: Props) {
  return (
    <main className="flex flex-col">
      <figure className="main-padding md:pt-longer flex flex-col items-center justify-center gap-6">
        <GradientText bigger text1={title} text2="Certification" className="text-center" />
        <Img src={src} alt={alt} className="rounded-md shadow-glowed-2" />
      </figure>
      <section className="min-h-[10vh] flex justify-center items-center">
        <Link className="btn-nav px-6 py-2 w-fit" href={`/${lang}`}>
          {t.SECTIONS.backToHomepage}
        </Link>
      </section>
      <Contact t={t} isMain={false} />
    </main>
  );
}
