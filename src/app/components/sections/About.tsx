import React from "react";

import { skillsData } from "@/app/constants/constants";
import { Icon } from "@iconify/react";
import GradientText from "../GradientText";

export default function About(): React.JSX.Element {
  return (
    <section
      className="min-h-screen main-padding flex justify-center flex-col gap-6"
      id="about"
    >
      <GradientText text1="About" text2="Me" bigger />
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label>Ryan Pratama</label>
          <label>23 Years Old</label>
          <label>Indonesian</label>
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
    </section>
  );
}
