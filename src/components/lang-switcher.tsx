"use client";

import { LANGUAGE_OPTIONS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { Lang } from "@/types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";

type Props = { lang: Lang };

export default function LangSwitcher({ lang }: Props) {
  const path = usePathname();
  const router = useRouter();
  const { changeLang } = useLanguageHelper();

  return (
    <section className="flex">
      {LANGUAGE_OPTIONS.map(({ lang: targetLang, t: { s }, flag, label }) => {
        const isActive = lang === targetLang;
        const href = changeLang(targetLang, path);

        return (
          <Fragment key={targetLang}>
            <Link href={href} className="sr-only">
              {label}
            </Link>
            <button
              className={cn("text-2xl leading-3 px-1 py-1.5 rounded-md border-1 border-transparent", {
                "bg-graybg border-graydarker shadow-xl": isActive,
              })}
              onClick={() => {
                router.push(href);
                router.refresh();
              }}
              type="button"
            >
              <span className="sr-only">{`[${label} — ${targetLang}]: ${s.PERSONAL_DATA.fullName}. ${s.PERSONAL_DATA.softwareEngineer}. ${s.PERSONAL_DATA.summary}`}</span>
              {flag}
            </button>
          </Fragment>
        );
      })}
    </section>
  );
}
