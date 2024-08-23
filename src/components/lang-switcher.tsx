"use client";

import { LANGUAGE_OPTIONS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { COOKIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = { lang: Lang; storedLang: Lang | undefined; setCookie: (name: string, value: string) => void };

export default function LangSwitcher({ lang, setCookie, storedLang }: Props) {
  useEffect(() => {
    if (lang !== storedLang || !storedLang) setCookie(COOKIES.lang, lang);
  }, [lang, setCookie, storedLang]);

  return (
    <section className="flex">
      {LANGUAGE_OPTIONS.map(({ lang: targetLang, t: { s }, flag, label }) => {
        const isActive = lang === targetLang;
        return (
          <Link
            className={cn("text-2xl leading-3 px-1 py-1.5 rounded-md border-1 border-transparent", {
              "bg-graybg border-graydarker shadow-xl": isActive,
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
