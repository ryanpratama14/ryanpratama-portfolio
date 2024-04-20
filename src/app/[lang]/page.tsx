import About from "@/components/sections/About";
import Contacts from "@/components/sections/Contacts";
import Main from "@/components/sections/Main";
import ProjectDiscuss from "@/components/sections/ProjectDiscuss";
import Projects from "@/components/sections/Projects";
import { getDictionary } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { Fragment } from "react";

type Props = { params: { lang: Lang } };

export default function Home({ params }: Props) {
  const t = getDictionary(params.lang);

  return (
    <Fragment>
      <Main t={t} />
      <About t={t} />
      <Projects t={t} />
      <ProjectDiscuss t={t} />
      <Contacts t={t} />
    </Fragment>
  );
}
