import Img from "@/components/img";
import MenuTitle from "@/components/menu-title";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import { setCookie } from "@/lib/actions";
import { CERTIFICATIONS } from "@/lib/constants";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment } from "react";

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params }: Props) {
  const data = CERTIFICATIONS.find((e) => e.name === params.name);
  if (!data) redirect("/");

  const { s, lang, isJapanese, isDefaultLang } = useLanguage(params.lang);
  const storedLang = cookies().get("lang")?.value as Lang | undefined;

  return (
    <Fragment>
      <Profile isDefaultLang={isDefaultLang} lang={lang} s={s} isJapanese={isJapanese} setCookie={setCookie} storedLang={storedLang} />
      <Contacts s={s} />

      <article>
        <MenuTitle title={data.title} />
        <Img alt={data.alt} src={data.src} />
      </article>

      <Link href={`/${lang}`} className="box-button w-fit mx-auto">
        {s.SECTIONS.backToHomepage}
      </Link>
    </Fragment>
  );
}
