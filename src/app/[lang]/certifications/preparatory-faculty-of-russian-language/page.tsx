import podfak from "@/assets/podfak.jpeg";
import Certification from "@/components/certification";
import type { Lang } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
};

type Props = { params: { lang: Lang } };

export default function PreparatoryFacultyCertification({ params }: Props) {
  return (
    <Certification
      lang={params.lang}
      src={podfak}
      alt="Preparatory Faculty of Russian Language Certification, Ryan Pratama"
      title="Preparatory Faculty of Russian Language"
    />
  );
}
