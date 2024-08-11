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
  const { s, lang, ...rest } = useLanguage(params.lang);

  return (
    <Fragment>
      <Main s={s} />
      <About language={{ s, lang, ...rest }} />
      <Projects s={s} />
      <ProjectDiscuss s={s} lang={lang} />
      <Contacts s={s} />
    </Fragment>
  );
}
