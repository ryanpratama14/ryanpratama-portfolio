"use client";

import { LANGUAGE_OPTIONS } from "@/internationalization";
import { changeLang, getLangFromPath, validateMatchedLang } from "@/internationalization/functions";
import { setCookieLang } from "@/lib/actions";
import { cn } from "@/lib/utils";
import type { LangTarget } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = { storedLang: LangTarget };

export default function LangSwitcher({ storedLang }: Props) {
  const path = usePathname();
  const lang = validateMatchedLang(getLangFromPath(path));

  useEffect(() => {
    if (!storedLang || lang !== storedLang) setCookieLang(lang);
  }, [lang, storedLang]);

  return (
    <nav className="flex">
      {LANGUAGE_OPTIONS.map(
        ({
          lang: langTarget,
          t: {
            s: { PERSONAL_DATA: t },
          },
          flag,
        }) => {
          const isActive = lang === langTarget;

          return (
            <Link
              key={langTarget}
              className={cn("font-default text-xl md:text-2xl !leading-3 px-1 py-1.5 md:px-1.5 md:py-2 rounded-md border-1 border-transparent", {
                "bg-graybg border-graydarker shadow": isActive,
              })}
              href={changeLang(langTarget, path)}
            >
              <span className="sr-only">{`${t.fullName} — ${t.softwareEngineer}. ${t.summary} ${t.about}`}</span>
              {flag}
            </Link>
          );
        },
      )}
    </nav>
  );
}
