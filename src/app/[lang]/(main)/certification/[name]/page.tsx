import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getMetadata } from "@/app/metadata";
import { PATHS } from "@/app/urls";
import Container from "@/components/container";
import Img from "@/components/html/img";
import { getLang } from "@/internationalization/functions";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";

export const generateStaticParams = () => CERTIFICATIONS.map((e) => ({ name: e.name }));

export const generateMetadata = async ({ params }: PageProps<"/[lang]/certification/[name]">): Promise<Metadata | undefined> => {
  const { name, lang } = await params;
  const { s } = getLang(lang as Lang);

  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) return;

  const title = s.CERTIFICATIONS[data.name];
  return await getMetadata({ lang: lang as Lang, path: `${PATHS.certification}/${name}`, title });
};

export default async function CertificationPage({ params }: PageProps<"/[lang]/certification/[name]">) {
  const { name, lang } = await params;
  const data = CERTIFICATIONS.find((e) => e.name === name);
  if (!data) notFound();
  const { s } = getLang(lang as Lang);
  const title = s.CERTIFICATIONS[data.name];

  return (
    <Container title={title}>
      <Img alt={title} src={data.src} />
    </Container>
  );
}
