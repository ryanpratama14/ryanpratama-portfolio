"use client";

import { LANGUAGE_OPTIONS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { lang: Lang };

const { changeLang } = useLanguageHelper();

export default function LangSwitcher({ lang }: Props) {
  const path = usePathname();

  return (
    <section className="flex">
      {LANGUAGE_OPTIONS.map(({ lang: targetLang, t: { s }, flag, label }) => {
        const isActive = lang === targetLang;

        return (
          <Link
            key={targetLang}
            className={cn("text-2xl leading-3 px-1 py-1.5 rounded-md border-1 border-transparent", {
              "bg-graybg border-graydarker shadow-xl": isActive,
            })}
            href={changeLang(targetLang, path)}
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
