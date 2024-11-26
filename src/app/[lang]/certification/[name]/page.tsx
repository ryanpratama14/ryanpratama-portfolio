import { getMetadata } from "@/app/metadata";
import Container from "@/components/container";
import Img from "@/components/html/img";
import { useLang } from "@/internationalization/functions";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ lang: Lang; name: string }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { name, lang } = await params;
  const { s } = useLang(lang);

  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) return;

  const title = s.CERTIFICATIONS[data.name];
  return await getMetadata({ title });
};

export default async function CertificationPage({ params }: Props) {
  const { name, lang } = await params;
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) notFound();
  const { s } = useLang(lang);
  const title = s.CERTIFICATIONS[data.name];

  return (
    <Container title={title}>
      <Img alt={title} src={data.src} />
    </Container>
  );
}
