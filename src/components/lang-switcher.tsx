"use client";

import { LANGUAGE_OPTIONS } from "@/internationalization";
import { changeLang, getLangFromPath, validateMatchedLang } from "@/internationalization/functions";
import { setCookieLang } from "@/lib/actions";
import { cn } from "@/lib/utils";
import type { LangTarget } from "@/types";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import LinkButton from "./html/link-button";

type Props = { storedLang: LangTarget };

export default function LangSwitcher({ storedLang }: Props) {
  const path = usePathname();
  const lang = validateMatchedLang(getLangFromPath(path));

  useEffect(() => {
    if (!storedLang || lang !== storedLang) setCookieLang(lang);
  }, [lang, storedLang]);

  return (
    <ul className="flex">
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
            <li key={langTarget}>
              <LinkButton
                unstyled
                className={cn("font-default text-xl! md:text-2xl! leading-3! px-1 md:px-1.5 rounded-md border-1 border-transparent", {
                  "bg-graybg border-graydarker shadow-sm": isActive,
                })}
                href={changeLang(langTarget, path)}
              >
                <span className="sr-only">{`${t.fullName} — ${t.softwareEngineer}. ${t.summary} ${t.about}`}</span>
                {flag}
              </LinkButton>
            </li>
          );
        },
      )}
    </ul>
  );
}
