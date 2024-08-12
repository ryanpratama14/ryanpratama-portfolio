"use client";

import avatar from "@/assets/avatar.jpg";
import Img from "@/components/img";
import { getProfileData } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { LANGUAGE_OPTIONS } from "@/lib/internationalization";
import { COLORS } from "@/styles";
import type { DictionaryStatic, Lang } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";
import Iconify from "../iconify";

type Props = {
  lang: Lang;
  s: DictionaryStatic;
  isJapanese: boolean;
  setCookie: (name: string, value: string) => Promise<void>;
  storedLang: Lang | undefined;
};

export default function Profile({ s, lang, isJapanese, setCookie, storedLang }: Props) {
  const path = usePathname();

  const changeLang = (targetLang: Lang): string => {
    if (!path) return "/";
    const segments = path.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  const ProfileData = () =>
    getProfileData(s, isJapanese).map((e) => {
      const Data = () => (
        <Fragment>
          <Iconify icon={e.icon} width={20} color={COLORS.gray} />
          <small className={cn("text-graydarker", { "hover:underline": e.href })}>{e.title}</small>
        </Fragment>
      );

      if (e.href) {
        return (
          <Link target="_blank" href={e.href} key={e.title} className="flex gap-1 items-center">
            <Data />
          </Link>
        );
      }

      return (
        <section key={e.title} className="flex gap-1 items-center">
          <Data />
        </section>
      );
    });

  useEffect(() => {
    if (storedLang !== lang || !storedLang) setCookie("lang", lang);
  }, [lang, storedLang, setCookie]);

  return (
    <Fragment>
      <article className="flex items-center gap-4 lg:gap-6">
        <Img
          src={avatar}
          alt={s.PERSONAL_DATA.fullName}
          priority
          className="shadow-md object-top object-cover size-24 lg:size-32 aspect-square rounded-full"
        />
        <section className="flex justify-between w-full items-start">
          <section className="space-y-1">
            <h1>{s.PERSONAL_DATA.fullName}</h1>
            <p className="text-gray">{s.PERSONAL_DATA.softwareEngineer}</p>
            <section className="hidden md:flex gap-y-2 gap-x-4 flex-wrap">
              <ProfileData />
            </section>
          </section>

          <section className="flex items-center">
            {LANGUAGE_OPTIONS.map(({ lang: targetLang, t: { s }, flag }) => {
              const isActive = lang === targetLang;
              return (
                <Link
                  className={cn("text-2xl px-1.5 rounded-md", { "bg-white shadow": isActive })}
                  key={targetLang}
                  href={changeLang(targetLang)}
                  type="button"
                >
                  <span className="sr-only">
                    {s.PERSONAL_DATA.fullName} {s.PERSONAL_DATA.summary}
                  </span>
                  {flag}
                </Link>
              );
            })}
          </section>
        </section>
      </article>

      <section className="flex md:hidden gap-y-2 gap-x-4 flex-wrap">
        <ProfileData />
      </section>
    </Fragment>
  );
}
