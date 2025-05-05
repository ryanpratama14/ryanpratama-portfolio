"use client";

import { PATHS } from "@/app/urls";
import { LANGS } from "@/internationalization";
import { cn, toPascalCase } from "@/lib/utils";
import type { DictionaryStatic, Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps, Fragment } from "react";
import LinkButton from "./html/link-button";

type Props = ComponentProps<"ul"> & { slugTitle: string | undefined; s: DictionaryStatic; lang: Lang };

export default function Breadcrumb({ slugTitle, s, lang, className, ...rest }: Props) {
  const path = usePathname();
  const paths = path.split("/").filter((e) => !LANGS.includes(e as Lang) && e);
  const separator = <span> / </span>;

  return (
    <ul className={cn("text-graydarker breadcrumb flex items-center gap-x-1 flex-wrap", className)} {...rest}>
      <li className="hover:underline">
        <LinkButton unstyled lang={lang} href={PATHS.main}>
          {s.MENUS.main}
        </LinkButton>
      </li>
      {paths.length > 0 && separator}
      {paths.map((link, index) => {
        const href = `/${lang}/${paths.slice(0, index + 1).join("/")}`;
        const isLastIndex = index === paths.length - 1;

        return (
          <Fragment key={index}>
            <li className={cn({ "font-medium": path === href })}>
              {isLastIndex ? (
                <p className="text-gray">{slugTitle ?? link}</p>
              ) : (
                <Link href={href} className="hover:underline">
                  {s.MENUS[link as keyof DictionaryStatic["MENUS"]] ?? toPascalCase(link)}
                </Link>
              )}
            </li>
            {paths.length !== index + 1 && separator}
          </Fragment>
        );
      })}
    </ul>
  );
}
