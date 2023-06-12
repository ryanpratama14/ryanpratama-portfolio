import { Icon } from "@iconify/react";
import React from "react";
import GradientText from "../GradientText";
import { linkSocial } from "@/constants/constants";
import { SkewLoader } from "react-spinners";

export default function Contact(): React.JSX.Element {
  return (
    <article
      id="contact"
      className="relative main-padding min-h-screen flex flex-col gap-6 justify-center"
    >
      {/* <div className="max-xl:hidden absolute left-44 top-36 w-72 aspect-square rounded-full bg-blue/30 blur-3xl -z-10" /> */}
      <GradientText text1="Contact" text2="Me" bigger />
      <p className="xl:w-[80%]">
        I am actively seeking new opportunities at the moment and would be open
        to hearing about any potential opportunities that may be available.
        Please feel free to reach out to me if you have any leads or if you
        would like to discuss potential collaborations.
      </p>

      <nav className="flex gap-2 self-end">
        {linkSocial?.map((e, i: number) => {
          return (
            <a
              key={i}
              href={e?.href}
              className="flex flex-col items-center hover:shadowGlowed"
            >
              <span className="rotate-[10deg] hover:rotate-0 hover:-translate-y-1 hover:scale-110 animate">
                <Icon icon={e?.icon} width={35} />
              </span>
              <span>
                <SkewLoader color={e?.color} size={10} />
              </span>
            </a>
          );
        })}
      </nav>
    </article>
  );
}
