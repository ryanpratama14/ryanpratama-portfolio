"use client";
import { Icon } from "@iconify/react";
import React from "react";

export default function Contact(): React.JSX.Element {
  return (
    <section
      id="contact"
      className="px-normal min-h-screen flex justify-center items-center text-center"
    >
      <div className="flex group flex-col gap-6 justify-center items-center">
        <h1>Contact Me</h1>
        <p className="w-full md:w-[60%] xl:w-[40%]">
          I am actively seeking new opportunities at the moment and would be
          open to hearing about any potential opportunities that may be
          available. Please feel free to reach out to me if you have any leads
          or if you would like to discuss potential collaborations.
        </p>
        <div className="flex flex-col gap-3 justify-center items-center">
          <a
            href="mailto:ru.ryanpratama@gmail.com"
            target="_blank"
            className="btn"
          >
            <span>
              <Icon icon="ic:outline-email" width={20} />
            </span>
            Email Me
          </a>
          <p className="relative">
            or text me instead on{" "}
            <a
              href="https://t.me/ryanpratama14"
              target="_blank"
              className="themedText2nd hover:underline font-semibold"
            >
              Telegram
            </a>
            <span className="drop-shadow scale-0 group-hover:scale-150 absolute ml-3 animate">
              🚀
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
