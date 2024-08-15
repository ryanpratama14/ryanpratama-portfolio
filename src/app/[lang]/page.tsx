import Container from "@/components/container";
import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import TechStacks from "@/components/sections/tech-stacks";
import { setCookie } from "@/lib/actions";
import { useLanguage, useLanguageFn } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { cookies } from "next/headers";
import { Fragment } from "react";

type Props = { params: { lang: Lang } };

export default function Home({ params }: Props) {
  const { s, lang, isJapanese, isDefaultLang } = useLanguage(params.lang);
  const { formatDate } = useLanguageFn(params.lang);

  const updateDate = formatDate(new Date("2024-08-15"));
  const updatedOn = `${isJapanese ? "" : `${s.MENUS.updatedOn} `}${updateDate}${isJapanese ? s.MENUS.updatedOn : ""}`;
  const storedLang = cookies().get("lang")?.value as Lang | undefined;

  return (
    <Fragment>
      <Profile isDefaultLang={isDefaultLang} lang={lang} s={s} isJapanese={isJapanese} setCookie={setCookie} storedLang={storedLang} />
      <Contacts s={s} />
      <About s={s} />
      <TechStacks s={s} />
      <Experience s={s} lang={lang} />
      <FeaturedProjects s={s} />
      <Message s={s} lang={lang} />
      <Container title={updatedOn} />
    </Fragment>
  );
}
