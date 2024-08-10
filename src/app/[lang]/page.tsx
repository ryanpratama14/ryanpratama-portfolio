import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Main from "@/components/sections/main";
import ProjectDiscuss from "@/components/sections/project-discuss";
import Projects from "@/components/sections/projects";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { Fragment } from "react";

type Props = { params: { lang: Lang } };

export default function Home({ params }: Props) {
  const language = useLanguage(params.lang);
  const { t, lang, fn } = language;

  return (
    <Fragment>
      <Main t={t} fn={fn} />
      <About language={language} />
      <Projects t={t} />
      <ProjectDiscuss t={t} lang={lang} />
      <Contacts t={t} />
    </Fragment>
  );
}
