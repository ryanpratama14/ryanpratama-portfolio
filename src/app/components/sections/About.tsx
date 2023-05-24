import React from "react";
import AnimatedUnderlinedText from "../AnimatedUnderlinedText";

export default function About(): React.JSX.Element {
  return (
    <section
      className="py-normal px-normal lg:px-longer3 flex flex-col gap-12"
      id="about"
    >
      <div className="flex group justify-between lg:flex-nowrap flex-wrap gap-6">
        <div className="flex flex-col gap-4 w-full lg:w-[50%]">
          <h1>About Me</h1>
          <p>
            In September 2022, I joined a free programming course taught by my
            Indonesian friend in his apartment in Kazan, Russia. Along with
            other students, we learned the basics of programming and eventually
            formed a software house startup called{" "}
            <span>
              <a
                href="https://faotech.dev/"
                target="_blank"
                className="themedText2nd hover:themedShadowGlowed"
              >
                faoTech
              </a>
            </span>{" "}
            in January 2023.
            <br />
            <br />
            As I developed my skills, I discovered a passion for front-end
            development and decided to specialize in this field. Thanks to our
            unique combination of Indonesian and Russian educational
            backgrounds, faoTech is able to serve clients from diverse
            industries and locations.
          </p>
        </div>
        <div className="w-full lg:w-[50%]">
          <img />
        </div>
      </div>
    </section>
  );
}
