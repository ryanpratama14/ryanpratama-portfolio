import Container from "@/components/container";
import Img from "@/components/html/img";
import Contacts from "@/components/sections/contacts";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { setCookie } from "@/lib/actions";
import { CERTIFICATIONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { useLanguage } from "@/lib/internationalization";
import { VARIANTS } from "@/styles/variants";
import type { Lang } from "@/types";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Fragment } from "react";

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params }: Props) {
  const data = CERTIFICATIONS.find((e) => e.name === params.name);
  if (!data) redirect(`/${params.lang}`);

  const { s, lang, isJapanese, isDefaultLang } = useLanguage(params.lang);
  const storedLang = cookies().get("lang")?.value as Lang | undefined;

  return (
    <Fragment>
      <Profile isDefaultLang={isDefaultLang} lang={lang} s={s} isJapanese={isJapanese} setCookie={setCookie} storedLang={storedLang} />
      <Contacts s={s} />

      <Container title={data.title}>
        <Img alt={data.alt} src={data.src} />
      </Container>

      <Link href={`/${lang}`} className={cn(VARIANTS.Button({ className: "mx-auto" }))}>
        {s.SECTIONS.backToHomepage}
      </Link>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}
