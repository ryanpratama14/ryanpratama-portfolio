import jlpt from "@/assets/jlpt.jpeg";
import Certification from "@/components/Certification";
import { getDictionary } from "@/lib/internationalization";
import type { Lang } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JLPT N4 Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

type Props = { params: { lang: Lang } };

export default function JlptCertification({ params }: Props) {
  return <Certification t={getDictionary(params.lang)} src={jlpt} alt="JLPT N4 Certification, Ryan Pratama" title="JLPT N4" />;
}
