import CertificationCards from "@/components/certification-cards";
import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";

type Props = { params: Promise<{ lang: Lang }> };

export default async function CertificationPage({ params }: Props) {
  const { lang } = await params;
  const { s } = useLang(lang);

  return <CertificationCards s={s} lang={lang} />;
}
