"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LANGUAGE_OPTIONS } from "@/internationalization";
import { changeLang, getLangFromPath, validateMatchedLang } from "@/internationalization/functions";
import { setCookieLang } from "@/lib/actions";
import { cn } from "@/lib/utils";
import type { LangTarget } from "@/types";
import Img from "./html/img";
import LinkButton from "./html/link-button";

type Props = { storedLang: LangTarget };

export default function LangSwitcher({ storedLang }: Props) {
  const path = usePathname();
  const lang = validateMatchedLang(getLangFromPath(path));

  useEffect(() => {
    if (!storedLang || lang !== storedLang) setCookieLang(lang);
  }, [lang, storedLang]);

  return (
    <ul className="flex gap-0.5 md:gap-1">
      {LANGUAGE_OPTIONS.map(
        ({
          lang: langTarget,
          t: {
            s: { PERSONAL_DATA: t },
          },
          flag,
        }) => {
          const isActive = lang === langTarget;
          const href = changeLang(langTarget, path);

          return (
            <li key={langTarget}>
              <LinkButton
                disabled={isActive}
                unstyled
                className={cn(
                  "max-md:font-default max-md:text-xl px-1 md:p-[0.4rem] rounded-sm border-1 border-transparent md:flex items-center justify-center",
                  {
                    "bg-graybg border-graydarker shadow": isActive,
                    "hover:bg-graybg": !isActive,
                  },
                )}
                href={href}
              >
                <span className="sr-only">{`${t.fullName} — ${t.softwareEngineer}. ${t.summary} ${t.about}`}</span>
                <span className="md:hidden">{flag}</span>
                <Img
                  src={`/assets/flags/${langTarget.toLowerCase()}.svg`}
                  alt={langTarget}
                  className="w-[1.4rem] h-[0.9rem] object-cover object-center max-md:hidden"
                />
              </LinkButton>
            </li>
          );
        },
      )}
    </ul>
  );
}
