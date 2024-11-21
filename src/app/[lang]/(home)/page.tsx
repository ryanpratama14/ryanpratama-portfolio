import { PATHS } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import { useLang } from "@/internationalization/functions";
import { sanityFetch } from "@/sanity/lib/client";
import { GetPosts } from "@/sanity/lib/queries";
import type { GetPostsResult } from "@/sanity/types";
import type { Lang } from "@/types";
import { Fragment } from "react";
import About from "./components/about";
import AdditionalInformation from "./components/additional-information";
import Experience from "./components/experience";
import FeaturedProjects from "./components/featured-projects";

type Props = { params: Promise<{ lang: Lang }> };

export default async function HomePage({ params }: Props) {
  const { s, isJapanese, lang, formatDateLong } = useLang((await params).lang);
  const data = await sanityFetch<GetPostsResult>({ query: GetPosts });
  const slicedData = data.slice(0, 6);

  return (
    <Fragment>
      <About s={s} />
      <BlogCards href={PATHS.blog} lang={lang} title={s.MENUS.blog} data={slicedData} formatDateLong={formatDateLong} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
    </Fragment>
  );
}
