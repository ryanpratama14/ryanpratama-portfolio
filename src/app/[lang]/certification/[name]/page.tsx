import Contacts from "@/app/[lang]/(home)/components/contacts";
import Message from "@/app/[lang]/(home)/components/message";
import Profile from "@/app/[lang]/(home)/components/profile";
import { getMetadataImage } from "@/app/metadata";
import { getUrl } from "@/app/urls";
import Container from "@/components/container";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: Lang; name: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { name } = await params;

  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (data) {
    const title = data.label;
    const url = getUrl({ path: (await getHeaders()).path });
    const images = getMetadataImage(title);
    return { title, openGraph: { title, url, images, siteName: title } };
  }
};

export default async function CertificationPage({ params }: Props) {
  const { name, lang } = await params;

  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) notFound();

  const { s, isDefaultLang } = useLang(lang);

  return (
    <main className="space-y-4">
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />

      <Container title={data.label}>
        <Img alt={data.alt} src={data.src} />
      </Container>

      <LinkButton href="/" lang={lang} className="mx-auto">
        {s.SECTIONS.backToHomepage}
      </LinkButton>
      <Message s={s} lang={lang} />
    </main>
  );
}
