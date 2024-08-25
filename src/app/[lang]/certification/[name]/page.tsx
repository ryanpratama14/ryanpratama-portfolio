import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import Contacts from "@/components/sections/contacts";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLang } from "@/internationalization/functions";
import { CERTIFICATIONS } from "@/lib/constants";
import { ENDPOINTS, URLS } from "@/lib/constants/helpers";
import { getMetadataImage } from "@/lib/constants/metadata";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

type Props = { params: { lang: Lang; name: string } };

export const generateMetadata = async ({ params: { name, lang } }: Props): Promise<Metadata | undefined> => {
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (data) {
    const title = data.label;
    const url = `${URLS.PRODUCTION.BASE_LANG(lang)}${ENDPOINTS.certification(data.name)}`;
    const images = getMetadataImage(title);
    return { title, openGraph: { title, url, images, siteName: title } };
  }
};

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
