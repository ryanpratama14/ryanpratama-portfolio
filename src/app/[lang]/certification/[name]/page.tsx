import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import Contacts from "@/components/sections/contacts";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { CERTIFICATIONS } from "@/lib/constants";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { redirect } from "next/navigation";
import { Fragment } from "react";

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params }: Props) {
  const { name, lang } = params;
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) redirect(`/${lang}`);

  const { s, isJapanese, isDefaultLang } = useLanguage(lang);

  return (
    <Fragment>
      <Profile isDefaultLang={isDefaultLang} lang={lang} s={s} isJapanese={isJapanese} />
      <Contacts s={s} />

      <Container title={data.title}>
        <Img alt={data.alt} src={data.src} />
      </Container>

      <LinkButton href="" lang={lang} className="mx-auto">
        {s.SECTIONS.backToHomepage}
      </LinkButton>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}