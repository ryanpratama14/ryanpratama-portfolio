import type { Metadata } from "next";

import { getMetadata } from "@/app/metadata";
import { PATHS } from "@/app/urls";
import CertificationCards from "@/components/certification-cards";
import { getLang } from "@/internationalization/functions";
import type { Lang } from "@/types";

export const generateMetadata = async ({ params }: PageProps<"/[lang]/certification">): Promise<Metadata> => {
  const { s, lang } = getLang((await params).lang as Lang);
  return await getMetadata({ lang, path: PATHS.certification, title: s.MENUS.certifications });
};

export default async function CertificationPage({ params }: PageProps<"/[lang]/certification">) {
  const { lang } = await params;
  const { s } = getLang(lang as Lang);

  return <CertificationCards s={s} lang={lang as Lang} />;
}
