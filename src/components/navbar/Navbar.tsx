"use client";

import Iconify from "@/components/Iconify";
import { navbarData } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Resume from "./components/Resume";

export default function Navbar(): React.JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "scroll",
        () => {
          const { scrollY } = window;
          if (scrollY > lastScrollTop.current) {
            setVisible(false);
          } else if (scrollY < lastScrollTop.current) {
            setVisible(true);
          }
          lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
        },
        { passive: true },
      );
    }
  }, []);

  return (
    <nav
      className={`h-12 md:h-16 animate items-center shadow-md backdrop-blur-[3px] flex justify-between sticky lg:fixed w-full top-0 px-normal xl:px-longer 2xl:px-longer3 z-20 bg-black ${
        !visible && "-translate-y-full"
      }`}
    >
      <Resume />
      <section className="flex gap-4">
        {navbarData.map((e) => {
          return (
            <a key={e.href} href={e.href} className="md:flex hidden btn-nav">
              <span>
                <Iconify icon={e.icon} width={20} />
              </span>
              {e.label}
            </a>
          );
        })}
        <MobileMenu />
      </section>
    </nav>
  );
}
