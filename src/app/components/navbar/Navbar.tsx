"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Theme from "./components/Theme";
import Resume from "./components/Resume";
import MobileMenu from "./components/MobileMenu";
import avatar from "../../../../public/assets/avatar.jpg";
import { Icon } from "@iconify/react";
// import { useReadingProgress } from "@/hooks/useReadingProgress";
import { LoadToTop } from "@/utils/utils";
import { navbarData } from "../../constants/constants";

export default function Navbar(): React.JSX.Element {
  // const completion = useReadingProgress();
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "scroll",
        () => {
          var { pageYOffset } = window;
          if (pageYOffset > lastScrollTop.current) {
            setVisible(false);
          } else if (pageYOffset < lastScrollTop.current) {
            setVisible(true);
          }
          lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
        },
        { passive: true }
      );
    }
  }, []);

  return (
    <nav
      className={`animate shadow-md backdrop-blur-[3px] flex justify-between fixed w-full top-0 px-normal py-3 z-[5] md:py-4 ${
        visible ? "translate-x-0" : "-translate-y-56"
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
      {/* <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-secondary dark:bg-secondaryDark transition-colors duration-300 left-0 bottom-0 h-0.5 w-full"
      /> */}
    </nav>
  );
}
