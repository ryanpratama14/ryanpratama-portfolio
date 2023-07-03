import { Metadata } from "next";
import podfak from "@/assets/podfak.jpeg";
import Certification from "@/components/Certification";

export const metadata: Metadata = {
  title: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

export default function PreparatoryFacultyCertification(): React.JSX.Element {
  return (
    <Certification
      src={podfak}
      alt="Preparatory Faculty of Russian Language Certification, Ryan Pratama"
      title="Preparatory Faculty of Russian Language"
    />
  );
}
