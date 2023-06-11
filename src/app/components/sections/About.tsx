import React from "react";
import { experienceData, skillsData } from "@/app/constants/constants";
import { Icon } from "@iconify/react";
import GradientText from "../GradientText";
import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section
      className="min-h-screen main-padding flex justify-center flex-col gap-6"
      id="about"
    >
      <GradientText text1="About" text2="Me" bigger />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 relative">
          <label>Ryan Pratama</label>
          <label>23 Years Old</label>
          <label>Indonesian</label>
          <div className="absolute bottom-0 from-bluedarker via-blue to-turquoise bg-gradient-to-r h-4 blur-3xl w-96" />
        </div>
        <p className="xl:w-[80%]">
          In September 2022, I joined a free programming course taught by my
          Indonesian friend in his apartment in Kazan, Russia. Along with other
          students, we learned the basics of JavaScript and eventually formed a
          software house startup called faoTech in January 2023. As I developed
          my skills, I discovered a passion for front-end development and
          decided to specialize in this field.
        </p>
      </div>
      <div className="xl:w-[70%] flex flex-wrap gap-4">
        {skillsData?.map((e, i: number) => {
          return (
            <p key={i} className="flex gap-2 items-center">
              <span className="text-turquoise">
                <Icon icon={e?.icon} width={25} />
              </span>
              <span className="text-graydarker">{e.label}</span>
            </p>
          );
        })}
      </div>

      <h4 className="italic">Experience</h4>
      <div className="flex flex-wrap gap-6">
        {experienceData?.map((e, i: number) => {
          return (
            <a
              key={i}
              href={e?.links[0]?.href}
              target="_blank"
              className="flex group items-center h-full hover:shadow-[-8px_8px_0px_0px_#323232] hover:translate-x-2 hover:-translate-y-2 w-fit"
            >
              <div className="flex items-center justify-center aspect-square p-3 bg-white h-16 md:h-[5.5rem]">
                <Image src={e?.src} alt={e?.label} className="object-contain" />
              </div>
              <div className="animate from-turquoise group-hover:to-bluedarker bg-gradient-to-r flex flex-col justify-center h-16 md:h-[5.5rem] px-3 md:px-6">
                <h5 className="drop-shadow flex items-center gap-2">
                  {e?.label}
                  <span className="group-hover:scale-100 scale-0 p">
                    <Icon icon="mingcute:external-link-fill" />
                  </span>
                </h5>
                <small className="text-black font-medium">{e?.since}</small>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
