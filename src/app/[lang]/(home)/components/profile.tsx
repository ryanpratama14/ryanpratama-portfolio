import { PATHS } from "@/app/urls";
import Img from "@/components/html/img";
import LangSwitcher from "@/components/lang-switcher";
import { DEFAULT_LANG } from "@/internationalization";
import { useLang } from "@/internationalization/functions";
import { getCookieLang } from "@/lib/actions";
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
          <p className={cn("text-graydarker", { "hover:underline": e.href })}>{e.label}</p>
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
    <article className="wrapper w-full">
      <section className="flex justify-between items-start">
        <section className="flex items-center gap-3 md:gap-5">
          <Link href={PATHS.main}>
            <Img
              src={PHOTOS.avatar}
              alt={s.PERSONAL_DATA.fullName}
              className="animate object-top object-cover size-[4.75rem] md:size-32 aspect-square rounded-l-md"
            />
          </Link>

          <section className="md:space-y-0.5">
            <header className="flex flex-col">
              <h1 className="font-bold">{s.PERSONAL_DATA.fullName}</h1>
              {isDefaultLang ? null : <small>{useLang(DEFAULT_LANG).s.PERSONAL_DATA.fullName}</small>}
              <h2 className="text-gray">{s.PERSONAL_DATA.softwareEngineer}</h2>
            </header>

            <ul className="hidden md:flex gap-3 flex-wrap -translate-x-0.5">
              <ProfileData />
            </ul>
          </section>
        </section>

        <LangSwitcher storedLang={storedLang} />
      </section>

      <ul className="mt-4 -mb-2 flex md:hidden gap-y-1 gap-x-2 flex-wrap -translate-x-0.5">
        <ProfileData />
      </ul>
    </article>
  );
}
