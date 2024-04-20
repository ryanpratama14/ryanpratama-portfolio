import jlpt from "@/assets/jlpt.jpeg";
import Certification from "@/components/Certification";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JLPT N4 Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

export default function JlptCertification() {
  return <Certification src={jlpt} alt="JLPT N4 Certification, Ryan Pratama" title="JLPT N4" />;
}
