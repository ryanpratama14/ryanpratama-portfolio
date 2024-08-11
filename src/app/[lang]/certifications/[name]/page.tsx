import Certification from "@/components/certification";
import { certificationsData } from "@/lib/constants";
import type { Lang } from "@/types";
import { redirect } from "next/navigation";

type Props = { params: { lang: Lang; name: string } };

export default function CertificationPage({ params }: Props) {
  const data = certificationsData.find((e) => e.name === params.name);
  if (!data) redirect("/");
  const { alt, title, src } = data;
  return <Certification lang={params.lang} src={src} alt={alt} title={title} />;
}
