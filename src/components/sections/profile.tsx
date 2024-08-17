import avatar from "@/assets/avatar.jpg";
import Iconify from "@/components/html/iconify";
import Img from "@/components/html/img";
import Text from "@/components/html/text";
import LangSwitcher from "@/components/lang-switcher";
import { setCookie } from "@/lib/actions";
import { getProfileData } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { DEFAULT_LANG, useLanguage, useLanguageHelper } from "@/lib/internationalization";
import { COLORS } from "@/styles";
import type { DictionaryStatic, Lang } from "@/types";
import { cookies } from "next/headers";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  lang: Lang;
  s: DictionaryStatic;
  isJapanese: boolean;
  isRussian: boolean;
  isDefaultLang: boolean;
  disableLangSwitcher?: boolean;
};

export default function Profile({ s, lang, isDefaultLang, isJapanese, disableLangSwitcher, isRussian }: Props) {
  const ProfileData = () =>
    getProfileData({ s, isJapanese, isRussian }).map((e) => {
      const Data = () => (
        <Fragment>
          <Iconify icon={e.icon} width={17.5} color={COLORS.gray} />
          <Text color="graydarker">
            <p className={cn({ "hover:underline": e.href })}>{e.title}</p>
          </Text>
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
        <section key={e.title} className="flex gap-0.5 items-center">
          <Data />
        </section>
      );
    });

  return (
    <Fragment>
      <section className="flex items-center gap-3 md:gap-5">
        <Img
          src={avatar}
          alt={s.PERSONAL_DATA.fullName}
          priority
          className="animate border-2 border-gray shadow-xl object-top object-cover size-16 md:size-32 aspect-square rounded-full"
        />
        <section className="flex justify-between w-full items-start">
          <section className="flex flex-col md:gap-0.5">
            <section className="flex flex-col">
              <Text as="heading">
                <h1>{s.PERSONAL_DATA.fullName}</h1>
              </Text>
              {isDefaultLang ? null : (
                <Text as="small" className="-translate-y-0.5">
                  {useLanguage(DEFAULT_LANG).s.PERSONAL_DATA.fullName}
                </Text>
              )}
            </section>

            <Text as="contentTitle" color="gray">
              <h2>{s.PERSONAL_DATA.softwareEngineer}</h2>
            </Text>

            <section className="hidden md:flex gap-3 flex-wrap -translate-x-0.5">
              <ProfileData />
            </section>
          </section>
          {disableLangSwitcher ? null : (
            <LangSwitcher storedLang={useLanguageHelper().validateLang(cookies().get("lang")?.value)} lang={lang} setCookie={setCookie} />
          )}
        </section>
      </section>

      <section className="flex md:hidden gap-y-1 gap-x-2 flex-wrap -mb-2">
        <ProfileData />
      </section>
    </Fragment>
  );
}
