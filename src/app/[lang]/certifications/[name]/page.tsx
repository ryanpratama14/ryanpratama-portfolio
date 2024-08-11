import GradientText from "@/components/gradient-text";
import Img from "@/components/img";
import Contacts from "@/components/sections/contacts";
import { certificationsData } from "@/lib/constants";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params }: Props) {
  const { s, lang } = useLanguage(params.lang);
  const data = certificationsData.find((e) => e.name === params.name);

  if (!data) redirect("/");

  return (
    <article className="flex flex-col">
      <figure className="main-padding md:pt-longer flex flex-col items-center justify-center gap-6">
        <GradientText bigger text1={data.title} text2="Certification" className="text-center" />
        <Img src={data.src} alt={data.alt} className="rounded-md shadow-glowed-2" />
      </figure>
      <section className="min-h-[10vh] flex justify-center items-center">
        <Link className="btn-nav px-6 py-2 w-fit" href={`/${lang}`}>
          {s.SECTIONS.backToHomepage}
        </Link>
      </section>
      <Contacts s={s} isMain={false} />
    </article>
  );
}
