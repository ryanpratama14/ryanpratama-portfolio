"use client";

import Iconify from "@/components/iconify";
import { navbarData } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { LANGUAGE_OPTIONS } from "@/lib/internationalization";
import type { DictionaryStatic, Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/mobile-menu";
import Resume from "./components/resume";

type Props = {
  s: DictionaryStatic;
  setCookie: (name: string, value: string) => Promise<void>;
  lang: Lang;
  storedLang: Lang | undefined;
};

export default function Navbar({ s, lang, storedLang, setCookie }: Props) {
  const path = usePathname();
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);

  const changeLang = (targetLang: Lang): string => {
    if (!path) return "/";
    const segments = path.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const { scrollY } = window;
        if (scrollY > lastScrollTop.current) setVisible(false);
        if (scrollY < lastScrollTop.current) setVisible(true);
        lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
      },
      { passive: true },
    );
  }, []);

  useEffect(() => {
    if (storedLang !== lang || !storedLang) setCookie("lang", lang);
  }, [lang, storedLang, setCookie]);

  return (
    <nav
      className={cn(
        "h-12 md:h-16 animate items-center shadow-md backdrop-blur-[3px] flex justify-between sticky lg:fixed w-full top-0 px-normal xl:px-longer 2xl:px-longer3 z-20 bg-black",
        { "-translate-y-full": !visible },
      )}
    >
      <section className="flex gap-4 h-full items-center">
        <MobileMenu s={s} />
        <Resume title={s.SECTIONS.resume} />
      </section>
      <section className="flex gap-4 items-center">
        {navbarData.map((e) => {
          return (
            <a key={e.href} href={e.href} className="md:flex hidden btn-nav">
              <span>
                <Iconify icon={e.icon} width={20} />
              </span>
              {s.NAVBAR_DATA[e.label]}
            </a>
          );
        })}
        <section className="flex items-center">
          {LANGUAGE_OPTIONS.map(({ lang: targetLang, t: { s }, flag }) => {
            const isActive = lang === targetLang;
            return (
              <Link
                className={cn("text-2xl px-2 rounded-md", { "bg-white shadow": isActive })}
                key={targetLang}
                href={changeLang(targetLang)}
                type="button"
              >
                <span className="sr-only">
                  {s.PERSONAL_DATA.fullName} {s.PERSONAL_DATA.summary}
                </span>
                {flag}
              </Link>
            );
          })}
        </section>
      </section>
    </nav>
  );
}
