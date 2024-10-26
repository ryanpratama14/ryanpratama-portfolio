import Img from "@/components/html/img";
import Text from "@/components/html/text";
import LangSwitcher from "@/components/lang-switcher";
import { DEFAULT_LANG } from "@/internationalization";
import { useLang } from "@/internationalization/functions";
import { getCookieLang, setCookieLang } from "@/lib/actions";
import { PHOTOS } from "@/lib/constants";
import { getProfileData } from "@/lib/constants/functions";
import { cn } from "@/lib/utils";
import { COLORS } from "@/styles";
import type { DictionaryStatic, Lang } from "@/types";
import { Icon } from "@iconify-icon/react";
import Link from "next/link";
import { Fragment } from "react";

type Props = {
  s: DictionaryStatic;
  lang: Lang;
  isDefaultLang: boolean;
};

export default async function Profile({ s, lang, isDefaultLang }: Props) {
  const ProfileData = () =>
    getProfileData(lang).map((e) => {
      const Data = () => (
        <Fragment>
          <Icon icon={e.icon} width={17.5} color={COLORS.gray} />
          <Text tag="p" color="graydarker" className={cn({ "hover:underline": e.href })}>
            {e.label}
          </Text>
        </Fragment>
      );

      if (e.href) {
        return (
          <li className="flex">
            <Link target="_blank" rel="noreferrer noopener" href={e.href} key={e.label} className="flex gap-0.5 items-center">
              <Data />
            </Link>
          </li>
        );
      }

      return (
        <li key={e.label} className="flex gap-0.5 items-center">
          <Data />
        </li>
      );
    });

  return (
    <article className="component-container">
      <section className="flex justify-between items-start">
        <section className="flex items-center gap-2.5 md:gap-5">
          <Img
            src={PHOTOS.avatar}
            alt={s.PERSONAL_DATA.fullName}
            className="animate border-2 border-gray shadow object-top object-cover size-[4.75rem] md:size-32 aspect-square rounded-full"
          />

          <section className="flex flex-col md:gap-0.5">
            <header className="flex flex-col">
              <Text tag="h1" as="heading" className="font-bold">
                {s.PERSONAL_DATA.fullName}
              </Text>
              {isDefaultLang ? null : (
                <Text tag="small" as="small" className="-translate-y-0.5">
                  {useLang(DEFAULT_LANG).s.PERSONAL_DATA.fullName}
                </Text>
              )}
            </header>

            <Text tag="h2" as="menuTitle" color="gray" className="font-normal">
              {s.PERSONAL_DATA.softwareEngineer}
            </Text>

            <ul className="hidden md:flex gap-3 flex-wrap -translate-x-0.5">
              <ProfileData />
            </ul>
          </section>
        </section>

        <LangSwitcher storedLang={await getCookieLang()} setCookieLang={setCookieLang} />
      </section>

      <ul className="mt-4 -mb-2 flex md:hidden gap-y-1 gap-x-2 flex-wrap -translate-x-0.5">
        <ProfileData />
      </ul>
    </article>
  );
}
