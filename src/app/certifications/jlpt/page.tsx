import { Metadata } from "next";
import jlpt from "@/assets/jlpt.jpeg";
import Certification from "@/components/Certification";

export const metadata: Metadata = {
  title: "JLPT N4 Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

export default function JlptCertification(): React.JSX.Element {
  return (
    <Certification
      src={jlpt}
      alt="JLPT N4 Certification, Ryan Pratama"
      title="JLPT N4"
    />
  );
}
