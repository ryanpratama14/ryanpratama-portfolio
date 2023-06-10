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
              className="hover:drop-shadow-[0px_0px_2px_#ffffff] font-semibold"
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
              className="hover:drop-shadow-[0px_0px_2px_#ffffff] font-semibold"
            >
              Next.js
            </a>
          </span>{" "}
          &{" "}
          <span>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="hover:drop-shadow-[0px_0px_2px_#ffffff] font-semibold"
            >
              Tailwind CSS
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
