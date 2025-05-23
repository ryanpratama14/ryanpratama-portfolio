import { PATHS } from "@/app/urls";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import LangSwitcher from "@/components/lang-switcher";
import { DEFAULT_LANG } from "@/internationalization";
import { useLang } from "@/internationalization/functions";
import { getCookieLang } from "@/lib/actions";
import { PHOTOS } from "@/lib/constants";
import { getProfileData } from "@/lib/constants/functions";
import { cn } from "@/lib/utils";
import type { DictionaryStatic, Lang } from "@/types";
import { DynamicIcon } from "lucide-react/dynamic";
import { Fragment } from "react";

type Props = {
  s: DictionaryStatic;
  lang: Lang;
  isDefaultLang: boolean;
};

export default async function Profile({ s, lang, isDefaultLang }: Props) {
  const storedLang = await getCookieLang();
  const profiles = getProfileData(lang);

  const ProfileData = () => {
    return profiles.map((e) => {
      const Data = () => (
        <Fragment>
          <DynamicIcon name={e.icon} width={17.5} className="text-gray" />
          <p className={cn("text-graydarker", { "hover:underline": e.href })}>{e.label}</p>
        </Fragment>
      );

      if (e.href) {
        return (
          <li className="flex" key={e.label}>
            <LinkButton unstyled href={e.href} className="flex gap-0.5 md:gap-1 items-center">
              <Data />
            </LinkButton>
          </li>
        );
      }

      return (
        <li key={e.label} className="flex gap-0.5 items-center">
          <Data />
        </li>
      );
    });
  };

  return (
    <article className="wrapper w-full">
      <section className="flex justify-between items-start">
        <section className="flex items-center gap-3 md:gap-4">
          <LinkButton unstyled lang={lang} href={PATHS.main}>
            <Img
              src={PHOTOS.avatar}
              alt={s.PERSONAL_DATA.fullName}
              className="animate object-top object-cover size-[4.5rem] md:size-24 aspect-square rounded-l-sm"
            />
          </LinkButton>

          <section className="md:space-y-0.5">
            <header className="flex flex-col">
              <LinkButton unstyled href={PATHS.main} lang={lang}>
                <h1 className="font-bold hover:underline">{s.PERSONAL_DATA.fullName}</h1>
              </LinkButton>
              {isDefaultLang ? null : <small>{useLang(DEFAULT_LANG).s.PERSONAL_DATA.fullName}</small>}
              <h2 className="text-gray">{s.PERSONAL_DATA.softwareEngineer}</h2>
            </header>

            <ul className="hidden md:flex gap-3 flex-wrap">
              <ProfileData />
            </ul>
          </section>
        </section>

        <LangSwitcher storedLang={storedLang} />
      </section>

      <ul className="mt-4 -mb-2 flex md:hidden gap-y-1 gap-x-2 flex-wrap">
        <ProfileData />
      </ul>
    </article>
  );
}
