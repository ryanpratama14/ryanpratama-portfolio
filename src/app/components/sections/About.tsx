import React from "react";
import ryan from "../../../../public/assets/ryan.jpeg";
import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section
      className="min-h-screen main-padding flex justify-center flex-col gap-24"
      id="about"
    >
      <div className="flex justify-between md:flex-nowrap flex-wrap items-center gap-x-12 lg:gap-x-24 gap-y-12">
        <div className="flex flex-col gap-6 w-full md:w-[70%] lg:w-[50%]">
          <h1>About Me</h1>
          <p>
            In September 2022, I joined a free programming course taught by my
            Indonesian friend in his apartment in Kazan, Russia. Along with
            other students, we learned the basics of JavaScript and eventually
            formed a software house startup called{" "}
            <span>
              <a
                href="https://faotech.dev/"
                target="_blank"
                className="font-semibold themedText2nd hover:themedShadowGlowed"
              >
                faoTech
              </a>
            </span>{" "}
            in January 2023.
            <br />
            <br />
            As I developed my skills, I discovered a passion for front-end
            development and decided to specialize in this field.
          </p>
        </div>
        <div className="w-full flex items-center justify-center gap-2 md:w-[30%] lg:w-[50%]">
          <div className="relative group md:w-full w-[90%] translate-x-2 lg:translate-x-0">
            <Image
              src={ryan}
              alt="Ryan's fav photo all the time"
              className="-translate-x-4 -translate-y-4 group-hover:-translate-x-6 group-hover:-translate-y-6 animate lg:aspect-square object-cover rounded-md grayscale group-hover:grayscale-0"
            />
            <div className="group-hover:translate-y-1 group-hover:translate-x-1 group-hover:lg:translate-y-3 group-hover:lg:translate-x-3 -z-10 absolute w-full top-0 h-full lg:aspect-square border-4 themedBorder2nd rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
