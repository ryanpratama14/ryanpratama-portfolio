import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Main from "@/components/sections/main";
import ProjectDiscuss from "@/components/sections/project-discuss";
import Projects from "@/components/sections/projects";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { Fragment } from "react";

type Props = { params: { lang: Lang } };

export default async function Home({ params }: Props) {
  const { t, locale, lang } = useLanguage(params.lang);

  return (
    <Fragment>
      <Main t={t} />
      <About t={t} lang={lang} locale={locale} />
      <Projects t={t} />
      <ProjectDiscuss t={t} lang={lang} />
      <Contacts t={t} />
    </Fragment>
  );
}
