import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";
import { Fragment } from "react";
import About from "./components/about";
import AdditionalInformation from "./components/additional-information";
import Blog from "./components/blog";
import Contacts from "./components/contacts";
import Experience from "./components/experience";
import FeaturedProjects from "./components/featured-projects";
import Message from "./components/message";
import Profile from "./components/profile";

type Props = { params: Promise<{ lang: Lang }> };

export default async function HomePage({ params }: Props) {
  const { s, isJapanese, isDefaultLang, lang, formatDateLong } = useLang((await params).lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <About s={s} />
      <Blog s={s} formatDateLong={formatDateLong} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <Message s={s} lang={lang} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
    </Fragment>
  );
}
