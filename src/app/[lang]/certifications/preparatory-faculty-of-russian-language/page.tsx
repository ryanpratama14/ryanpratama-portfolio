import podfak from "@/assets/podfak.jpeg";
import Certification from "@/components/Certification";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

export default function PreparatoryFacultyCertification() {
  return (
    <Certification
      src={podfak}
      alt="Preparatory Faculty of Russian Language Certification, Ryan Pratama"
      title="Preparatory Faculty of Russian Language"
    />
  );
}
