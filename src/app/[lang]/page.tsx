import Container from "@/components/container";
import About from "@/components/sections/about";
import AdditionalInformation from "@/components/sections/additional-information";
import Contacts from "@/components/sections/contacts";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLang } from "@/internationalization/functions";
import type { ParamsLang } from "@/types";
import { Fragment } from "react";

export default function HomePage({ params }: ParamsLang) {
  const {
    s,
    const: { lang, isJapanese, isDefaultLang },
    func: { formatDate },
  } = useLang(params.lang);

  const updateDate = formatDate(new Date("2024-08-25"));
  const updatedOn = isJapanese ? `${updateDate}${s.MENUS.updatedOn}` : `${s.MENUS.updatedOn} ${updateDate}`;

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <About s={s} />
      <Experience s={s} lang={lang} />
      <FeaturedProjects s={s} />
      <Message s={s} lang={lang} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
      <Container title={updatedOn} />
    </Fragment>
  );
}
