import { PATHS } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import CertificationCards from "@/components/certification-cards";
import { useLang } from "@/internationalization/functions";
import { api } from "@/trpc/server";
import type { Lang } from "@/types";
import { Fragment } from "react";
import About from "./components/about";
import AdditionalInformation from "./components/additional-information";
import Experience from "./components/experience";
import FeaturedProjects from "./components/featured-projects";

type Props = { params: Promise<{ lang: Lang }> };

export default async function HomePage({ params }: Props) {
  const { s, isJapanese, lang } = useLang((await params).lang);
  const data = await api.unlogged.sanity.post.list({ slice: 4 });

  return (
    <Fragment>
      <About s={s} />
      <BlogCards href={PATHS.post} lang={lang} title={s.MENUS.blog} data={data} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
      <CertificationCards s={s} lang={lang} />
    </Fragment>
  );
}
