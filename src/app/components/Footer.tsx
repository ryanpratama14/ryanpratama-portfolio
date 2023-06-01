"use client";
import React from "react";
import { linkSocial } from "../constants/constants";
import { Icon } from "@iconify/react";

export default function Footer(): React.JSX.Element {
  return (
    <footer className="px-normal pb-longer7 md:pb-longer2 xl:pb-normal pt-6 flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center">
        <p>
          Built by{" "}
          <span>
            <a
              href="mailto:ru.ryanpratama@gmail.com"
              target="_blank"
              className="themedText2nd font-semibold"
            >
              Ryan
            </a>
          </span>
        </p>
        <p>
          Special thanks to{" "}
          <span>
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="themedText2nd font-semibold"
            >
              Next.js
            </a>
          </span>{" "}
          &{" "}
          <span>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="themedText2nd font-semibold"
            >
              Tailwind CSS
            </a>
          </span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        {linkSocial?.map((e, i: number) => {
          return (
            <a
              target="_blank"
              key={i}
              href={e?.href}
              className="themedText hover:themedText2nd text-xl xl:text-2xl hover:scale-110 hover:themedShadowGlowed"
            >
              <Icon icon={e?.icon} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
