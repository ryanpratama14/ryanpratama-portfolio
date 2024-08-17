import Container from "@/components/container";
import About from "@/components/sections/about";
import AdditionalInformation from "@/components/sections/additional-information";
import Contacts from "@/components/sections/contacts";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLanguage, useLanguageFn } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { Fragment } from "react";

type Props = { params: { lang: Lang } };

export default function Home({ params }: Props) {
  const { s, lang, isJapanese, isDefaultLang } = useLanguage(params.lang);
  const { formatDate } = useLanguageFn(params.lang);

  const updateDate = formatDate(new Date("2024-08-17"));
  const updatedOn = `${isJapanese ? "" : `${s.MENUS.updatedOn} `}${updateDate}${isJapanese ? s.MENUS.updatedOn : ""}`;

  return (
    <Fragment>
      <Profile isDefaultLang={isDefaultLang} lang={lang} s={s} isJapanese={isJapanese} />
      <Contacts s={s} />
      <About s={s} />
      <Experience s={s} lang={lang} />
      <FeaturedProjects s={s} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
      <Message s={s} lang={lang} />
      <Container title={updatedOn} />
    </Fragment>
  );
}
