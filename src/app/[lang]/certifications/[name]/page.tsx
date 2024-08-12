import { CERTIFICATIONS } from "@/lib/constants";
// import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { redirect } from "next/navigation";

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params }: Props) {
  // const { s, lang } = useLanguage(params.lang);
  const data = CERTIFICATIONS.find((e) => e.name === params.name);

  if (!data) redirect("/");

  return <></>;
}
