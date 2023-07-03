import { Metadata } from "next";
import Img from "@/components/Img";
import podfak from "@/assets/podfak.jpeg";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Preparatory Faculty of Russian Language Certification, Ryan Pratama",
  description: "Welcome to: Ryan's Portfolio",
};

export default function PreparatoryFacultyCertification(): React.JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center ">
      <figure className="main-padding md:pt-longer">
        <Img
          src={podfak}
          alt="Preparatory Faculty of Russian Language Certification, Ryan Pratama"
          className="rounded-md shadow-glowed-2"
        />
      </figure>
      <Contact isMain={false} />
    </main>
  );
}
