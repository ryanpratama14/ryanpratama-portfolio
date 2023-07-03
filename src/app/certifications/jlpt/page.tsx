import { Metadata } from "next";
import Img from "@/components/Img";
import jlpt from "@/assets/jlpt.jpeg";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "JLPT N4 Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

export default function JlptCertification(): React.JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center ">
      <figure className="main-padding md:pt-longer">
        <Img
          src={jlpt}
          alt="JLPT N4 Certification, Ryan Pratama"
          className="rounded-md shadow-glowed-2"
        />
      </figure>
      <Contact isMain={false} />
    </main>
  );
}
