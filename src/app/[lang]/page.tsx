import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Profile from "@/components/sections/profile";
import ProjectDiscuss from "@/components/sections/project-discuss";
import TechStacks from "@/components/sections/tech-stacks";
import UpdatedOn from "@/components/sections/updated-on";
import { setCookie } from "@/lib/actions";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { cookies } from "next/headers";
import { Fragment } from "react";

type Props = { params: { lang: Lang } };

export default function Home({ params }: Props) {
  const { s, lang, isJapanese, isDefaultLang } = useLanguage(params.lang);
  const storedLang = cookies().get("lang")?.value as Lang | undefined;

  return (
    <Fragment>
      <Profile isDefaultLang={isDefaultLang} lang={lang} s={s} isJapanese={isJapanese} setCookie={setCookie} storedLang={storedLang} />
      <Contacts s={s} />
      <About s={s} />
      <TechStacks s={s} />
      <Experience s={s} lang={lang} />
      <FeaturedProjects s={s} />
      <ProjectDiscuss s={s} lang={lang} />
      <UpdatedOn s={s} lang={lang} />
    </Fragment>
  );
}
