"use client";

import Iconify from "@/components/Iconify";
import { navbarData } from "@/lib/constants";
import { cn, isClient } from "@/lib/functions";
import { LANGUAGE_OPTIONS } from "@/lib/internationalization";
import type { Dictionary, Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MobileMenu from "./components/MobileMenu";
import Resume from "./components/Resume";

type Props = { t: Dictionary; setCookieLang: (lang: Lang) => Promise<void>; lang: Lang; storedLang: Lang | undefined };

export default function Navbar({ t, lang, storedLang, setCookieLang }: Props) {
  const pathname = usePathname();
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollTop = useRef<number>(0);

  const changeLang = (lang: Lang) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = lang;
    return segments.join("/");
  };

  useEffect(() => {
    if (isClient) {
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

  useEffect(() => {
    if (storedLang !== lang || !storedLang) setCookieLang(lang);
  }, [lang, storedLang, setCookieLang]);

  return (
    <nav
      className={cn(
        "h-12 md:h-16 animate items-center shadow-md backdrop-blur-[3px] flex justify-between sticky lg:fixed w-full top-0 px-normal xl:px-longer 2xl:px-longer3 z-20 bg-black",
        {
          "-translate-y-full": !visible,
        },
      )}
    >
      <section className="flex gap-4 h-full items-center">
        <MobileMenu t={t} />
        <Resume t={t} />
      </section>
      <section className="flex gap-4 items-center">
        {navbarData.map((e) => {
          return (
            <a key={e.href} href={e.href} className="md:flex hidden btn-nav">
              <span>
                <Iconify icon={e.icon} width={20} />
              </span>
              {t.NAVBAR_DATA[e.label]}
            </a>
          );
        })}
        <section className="flex items-center">
          {LANGUAGE_OPTIONS.map((e) => {
            const isActive = (pathname.split("/")[1] as Lang) === e.value;
            return (
              <Link
                className={cn("text-2xl px-2 rounded-md", {
                  "bg-white shadow": isActive,
                })}
                key={e.value}
                href={changeLang(e.value)}
                type="button"
              >
                <span className="sr-only">{`${e.dictionary.PERSONAL_DATA.fullName} ${e.dictionary.PERSONAL_DATA.summary}`}</span>
                {e.flag}
              </Link>
            );
          })}
        </section>
      </section>
    </nav>
  );
}
