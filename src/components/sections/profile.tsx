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
  const storedLang = await getCookieLang();

  const ProfileData = () =>
    getProfileData(lang).map((e) => {
      const Data = () => (
        <Fragment>
          <Icon icon={e.icon} width={17.5} color={COLORS.gray} />
          <Text color="graydarker">
            <p className={cn({ "hover:underline": e.href })}>{e.label}</p>
          </Text>
        </Fragment>
      );

      if (e.href) {
        return (
          <Link target="_blank" rel="noreferrer noopener" href={e.href} key={e.label} className="flex gap-0.5 items-center">
            <Data />
          </Link>
        );
      }

      return (
        <section key={e.label} className="flex gap-0.5 items-center">
          <Data />
        </section>
      );
    });

  return (
    <Fragment>
      <section className="flex justify-between items-start">
        <section className="flex items-center gap-2.5 md:gap-5">
          <Img
            src={PHOTOS.avatar}
            alt={s.PERSONAL_DATA.fullName}
            className="animate border-2 border-gray shadow object-top object-cover size-[4.75rem] md:size-32 aspect-square rounded-full"
          />

          <section className="flex flex-col md:gap-0.5">
            <section className="flex flex-col">
              <Text as="heading" className="font-bold">
                <h1>{s.PERSONAL_DATA.fullName}</h1>
              </Text>
              {isDefaultLang ? null : (
                <Text as="small" className="-translate-y-0.5">
                  {useLang(DEFAULT_LANG).s.PERSONAL_DATA.fullName}
                </Text>
              )}
            </section>

            <Text as="menuTitle" color="gray" className="font-normal">
              <h2>{s.PERSONAL_DATA.softwareEngineer}</h2>
            </Text>

            <section className="hidden md:flex gap-3 flex-wrap -translate-x-0.5">
              <ProfileData />
            </section>
          </section>
        </section>

        <LangSwitcher storedLang={storedLang} setCookieLang={setCookieLang} />
      </section>

      <section className="flex md:hidden gap-y-1 gap-x-2 flex-wrap -mb-2 -translate-x-0.5">
        <ProfileData />
      </section>
    </Fragment>
  );
}
