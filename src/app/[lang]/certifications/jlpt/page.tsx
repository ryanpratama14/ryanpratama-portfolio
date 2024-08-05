import jlpt from "@/assets/jlpt.jpeg";
import Certification from "@/components/certification";
import type { Lang } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JLPT N4 Certification, Ryan Pratama",
};

type Props = { params: { lang: Lang } };

export default function JlptCertification({ params }: Props) {
  return <Certification lang={params.lang} src={jlpt} alt="JLPT N4 Certification, Ryan Pratama" title="JLPT N4" />;
}
