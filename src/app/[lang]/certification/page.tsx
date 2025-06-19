import type { Metadata } from "next";
import { getMetadata } from "@/app/metadata";
import CertificationCards from "@/components/certification-cards";
import { getLang } from "@/internationalization/functions";
import type { Lang } from "@/types";

type Props = { params: Promise<{ lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { s } = getLang((await params).lang);
  return await getMetadata({ title: s.MENUS.certifications });
};

export default async function CertificationPage({ params }: Props) {
  const { lang } = await params;
  const { s } = getLang(lang);

  return <CertificationCards s={s} lang={lang} />;
}
