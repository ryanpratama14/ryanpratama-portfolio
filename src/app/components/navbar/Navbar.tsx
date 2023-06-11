"use client";
import React, { useEffect, useState, useRef } from "react";
import Resume from "./components/Resume";
import MobileMenu from "./components/MobileMenu";
// import { useReadingProgress } from "@/hooks/useReadingProgress";
import { navbarData } from "../../constants/constants";
import { Icon } from "@iconify/react";

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
      className={`h-12 md:h-16 animate items-center shadow-md backdrop-blur-[3px] flex justify-between fixed w-full top-0 px-normal xl:px-longer3 z-20 bg-black ${
        visible ? "translate-x-0" : "-translate-y-56"
      }`}
    >
      <Resume />
      <div className="flex gap-4">
        {navbarData?.map((e, i: number) => {
          return (
            <a key={i} href={e?.href} className="md:flex hidden btn-nav">
              <span>
                <Icon icon={e?.icon} width={20} />
              </span>
              {e?.label}
            </a>
          );
        })}
        <MobileMenu />
      </div>
    </nav>
  );
}
