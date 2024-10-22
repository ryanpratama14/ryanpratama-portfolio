import { getMetadataImage } from "@/app/metadata";
import { getUrl } from "@/app/urls";
import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import Contacts from "@/components/sections/contacts";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import type { PageProps } from ".next/types/app/[lang]/certification/[name]/page";

type Props = PageProps & { params: { lang: Lang; name: string } };

export const generateMetadata = async ({ params: { name } }: Props): Promise<Metadata | undefined> => {
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (data) {
    const title = data.label;
    const url = getUrl({ path: (await getHeaders()).path });
    const images = getMetadataImage(title);
    return { title, openGraph: { title, url, images, siteName: title } };
  }
};

export default function CertificationPage({ params: { name, lang } }: Props) {
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) notFound();

  const { s, isDefaultLang } = useLang(lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />

      <Container title={data.label}>
        <Img alt={data.alt} src={data.src} />
      </Container>

      <LinkButton href="/" lang={lang} className="mx-auto">
        {s.SECTIONS.backToHomepage}
      </LinkButton>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}
