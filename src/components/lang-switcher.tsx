"use client";

import { LANGUAGE_OPTIONS } from "@/internationalization";
import { changeLang, getLangFromPath, validateMatchedLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { Lang, LangTarget } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = { storedLang: LangTarget; setCookieLang: (lang: Lang) => Promise<void> };

export default function LangSwitcher({ setCookieLang, storedLang }: Props) {
  const path = usePathname();
  const lang = validateMatchedLang(getLangFromPath(path));

  useEffect(() => {
    if (!storedLang || lang !== storedLang) setCookieLang(lang);
  }, [lang, storedLang, setCookieLang]);

  return (
    <section className="flex">
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
              className={cn("text-2xl leading-3 px-1 py-1.5 rounded-md border-1 border-transparent", {
                "bg-graybg border-graydarker shadow": isActive,
              })}
              href={changeLang(langTarget, path)}
              type="button"
            >
              <span className="sr-only">{`${t.fullName} — ${t.softwareEngineer}. ${t.summary} ${t.about}`}</span>
              {flag}
            </Link>
          );
        },
      )}
    </section>
  );
}
