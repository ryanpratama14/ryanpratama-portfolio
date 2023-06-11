import React from "react";
import ryan from "../../../../public/assets/ryan.png";
import Image from "next/image";
import GradientText from "../GradientText";

export default function Main(): React.JSX.Element {
  return (
    <section className="relative flex flex-col justify-center main-padding min-h-screen">
      {/* bullets */}
      {/* <div className="max-xl:hidden absolute left-44 top-44 w-72 aspect-square rounded-full bg-bluedarker/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute right-56 top-36 w-56 aspect-square rounded-full  bg-turquoise/30 blur-3xl -z-10" />
      <div className="max-xl:hidden absolute left-96 bottom-36 w-56 aspect-square rounded-full  bg-blue/30 blur-3xl -z-10" /> */}
      <div />
      <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-x-6 gap-y-16">
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <GradientText text1="Front-End" text2="Developer" />
            <h1 className="-translate-x-0.5 lg:-translate-x-1">RYAN</h1>
            <p>
              I specialized in creating scalable, intuitive, and responsive web
              applications with engaging user interfaces that are efficient,
              maintainable, and accessible using the React.js framework.
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="#contact"
              className="text-lg relative group font-semibold h-10 w-44 flex items-center justify-center from-bluedarker to-turquoise bg-gradient-to-r rounded-3xl"
            >
              <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 bg-white animate rounded-3xl" />
              <span className="animate drop-shadow z-[1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br from-turquoise to-bluedarker">
                Contact Me
              </span>
            </a>
            <a
              href="#about"
              className="text-gray hover:text-white animate text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[50%] group relative">
          <div className="animate group-hover:translate-y-12 translate-y-6 absolute top-0 w-full h-[15rem] md:h-[30rem] lg:h-[25rem] from-bluedarker to-turquoise bg-gradient-to-b polygon drop-shadow-xl" />
          <div className="animate -translate-y-6 translate-x-4 first-line:absolute top-0 w-full h-[15rem] md:h-[30rem] lg:h-[25rem] from-bluedarker to-turquoise bg-gradient-to-b polygon drop-shadow-xl" />
          <div className="animate group-hover:translate-y-12 translate-y-6 absolute top-0 w-full h-[15rem] md:h-[30rem] lg:h-[25rem] bg-transparent polygon drop-shadow-xl">
            <Image
              priority
              src={ryan}
              alt="Ryan"
              className="absolute top-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
