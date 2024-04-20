import podfak from "@/assets/podfak.jpeg";
import Certification from "@/components/Certification";
import { getDictionary } from "@/lib/internationalization";
import type { Lang } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

type Props = { params: { lang: Lang } };

export default function PreparatoryFacultyCertification({ params }: Props) {
  return (
    <Certification
      t={getDictionary(params.lang)}
      src={podfak}
      alt="Preparatory Faculty of Russian Language Certification, Ryan Pratama"
      title="Preparatory Faculty of Russian Language"
    />
  );
}
