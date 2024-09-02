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

export default function HomePage({ params: { lang } }: ParamsLang) {
  const { s, d, isJapanese, isDefaultLang, formatDate } = useLang(lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <About s={s} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <Message s={s} lang={lang} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
      <Container title={d.updatedOn(formatDate(new Date("2024-09-01")))} />
    </Fragment>
  );
}
