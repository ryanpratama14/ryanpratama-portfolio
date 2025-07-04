import { Fragment } from "react";
import { PATHS } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import CertificationCards from "@/components/certification-cards";
import { getLang } from "@/internationalization/functions";
import { api } from "@/server/orpc";
import type { Lang } from "@/types";
import About from "./components/about";
import AdditionalInformation from "./components/additional-information";
import Experience from "./components/experience";
import FeaturedProjects from "./components/featured-projects";

type Props = { params: Promise<{ lang: Lang }> };

export default async function HomePage({ params }: Props) {
  const { s, isJapanese, lang } = getLang((await params).lang);
  const { data } = await api.post.list.call({ slice: 4 });

  return (
    <Fragment>
      <About s={s} />
      <FeaturedProjects s={s} />
      <BlogCards href={PATHS.post} lang={lang} title={s.MENUS.blog} data={data} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
      <CertificationCards s={s} lang={lang} />
    </Fragment>
  );
}
