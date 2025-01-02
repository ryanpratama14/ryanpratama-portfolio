import { getMetadata } from "@/app/metadata";
import CertificationCards from "@/components/certification-cards";
import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { s } = useLang((await params).lang);
  return await getMetadata({ title: s.MENUS.certifications });
};

export default async function CertificationPage({ params }: Props) {
  const { lang } = await params;
  const { s } = useLang(lang);

  return <CertificationCards s={s} lang={lang} />;
}
