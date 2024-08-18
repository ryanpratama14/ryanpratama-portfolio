"use client";

import { cn } from "@/lib/functions";
import { LANGUAGE_OPTIONS, useLanguageHelper } from "@/lib/internationalization";
import type { Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = { storedLang: Lang | undefined; lang: Lang; setCookie: (name: string, value: string) => Promise<void> };

export default function LangSwitcher({ storedLang, setCookie, lang }: Props) {
  useEffect(() => {
    if (storedLang !== lang || !storedLang) setCookie("lang", lang);
  }, [lang, storedLang, setCookie]);

  return (
    <section className="flex">
      {LANGUAGE_OPTIONS.map(({ lang: targetLang, t: { s }, flag, label }) => {
        const isActive = lang === targetLang;
        return (
          <Link
            className={cn("text-2xl leading-3 px-1 py-2 rounded-md border-2 border-transparent", {
              "bg-graybg border-gray shadow-xl": isActive,
            })}
            key={targetLang}
            href={useLanguageHelper().changeLang(targetLang, usePathname())}
            type="button"
          >
            <span className="sr-only">{`[${label} — ${targetLang}]: ${s.PERSONAL_DATA.fullName}. ${s.PERSONAL_DATA.softwareEngineer}. ${s.PERSONAL_DATA.summary}`}</span>
            {flag}
          </Link>
        );
      })}
    </section>
  );
}
