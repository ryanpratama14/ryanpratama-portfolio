import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import Contacts from "@/components/sections/contacts";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLang } from "@/internationalization/functions";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export const generateMetadata = async ({ params: { name } }: Props) => {
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (data) return { title: data.label, openGraph: { title: data.label } };
};

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params: { name, lang } }: Props) {
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) notFound();

  const {
    s,
    const: { isDefaultLang },
  } = useLang(lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />

      <Container title={data.label}>
        <Img alt={data.alt} src={data.src} />
      </Container>

      <LinkButton href="" lang={lang} className="mx-auto">
        {s.SECTIONS.backToHomepage}
      </LinkButton>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}
