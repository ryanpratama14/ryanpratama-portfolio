import React from "react";
import AnimatedText from "../AnimatedText";
import { Icon } from "@iconify/react";
import { skillsData } from "@/app/constants/constants";
import AnimatedUnderlinedText from "../AnimatedUnderlinedText";

export default function Main(): React.JSX.Element {
  return (
    <section className="flex flex-col justify-center main-padding min-h-screen">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <label className="xl:text-xl">Hi! My name is</label>
          <h1 className="-translate-x-[0.2rem]">Ryan</h1>
        </div>
        <div className="flex flex-col gap-3">
          <AnimatedText text="I create digital products for the internet" />
          <p className="w-full lg:w-[75%] xl:w-[50%]">
            A front-end developer specializing in building intuitive web
            applications with engaging user interfaces. I utilize the React.js
            framework to develop efficient, scalable and maintainable frontend
            applications.
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full lg:w-[75%] xl:w-[50%]">
          <h5 className="italic">Tech Stacks</h5>
          <ul className="flex flex-wrap gap-3 themedText text-sm">
            {skillsData?.map((skill, index: number) => {
              return (
                <li key={index} className="flex gap-1.5 items-center">
                  <span>
                    <Icon
                      width={20}
                      icon={skill?.icon}
                      className="themedText2nd"
                    />
                  </span>
                  {skill?.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
