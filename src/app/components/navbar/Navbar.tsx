"use client";
import React from "react";
import Image from "next/image";
import Theme from "./Theme";
import Resume from "./Resume";
import MobileMenu from "./MobileMenu";
import avatar from "../../../../public/assets/avatar.jpeg";
import { Icon } from "@iconify/react";
import { useReadingProgress } from "@/hooks/useReadingProgress";
import { LoadToTop } from "@/utils/utils";
import { navbarData } from "../../constants/constants";

export default function Navbar(): React.JSX.Element {
  const completion = useReadingProgress();

  return (
    <nav
      className={`animate flex justify-between fixed w-full top-0 px-normal py-3 z-[5] md:py-4 ${
        completion > 1 && "shadow-md backdrop-blur-[3px]"
      }`}
    >
      <div className="flex gap-4 items-center">
        <div onClick={LoadToTop} className="cursor-pointer hidden sm:block">
          <Image
            src={avatar}
            className="rounded-full w-8"
            alt="ru.ryanpratama@gmail.com"
          />
        </div>
        <Resume />
      </div>
      <div className="flex gap-4 items-center">
        {navbarData?.map((e, i: number) => {
          return (
            <a
              key={i}
              href={e?.href}
              className="btnSmaller cursor-pointer hidden md:flex"
            >
              <span>
                <Icon icon={e?.icon} width={20} />
              </span>
              {e?.label}
            </a>
          );
        })}
        <Theme />
        <MobileMenu />
      </div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-secondary dark:bg-secondaryDark transition-colors duration-300 left-0 bottom-0 h-0.5 w-full"
      />
    </nav>
  );
}
