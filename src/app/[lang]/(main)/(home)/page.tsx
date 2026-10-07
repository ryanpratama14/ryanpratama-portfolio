import type { Metadata } from "next";
import { Fragment, Suspense } from "react";

import { getMetadata } from "@/app/metadata";
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

export const generateMetadata = async ({ params }: PageProps<"/[lang]">): Promise<Metadata> => {
  const { lang } = await params;
  return await getMetadata({ lang: lang as Lang, path: PATHS.main });
};

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { s, lang } = getLang((await params).lang as Lang);
  const { data } = await api.post.list.call({ slice: 4 });

  return (
    <Fragment>
      <About s={s} />
      <Suspense>
        <FeaturedProjects s={s} />
      </Suspense>
      <BlogCards href={PATHS.post} lang={lang} title={s.MENUS.blog} data={data} />
      <Experience s={s} lang={lang} />
      <AdditionalInformation s={s} lang={lang} />
      <CertificationCards s={s} lang={lang} />
    </Fragment>
  );
}
