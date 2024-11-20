import { PATHS } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import Container from "@/components/container";
import { useLang } from "@/internationalization/functions";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import type { BLOG_POSTS_QUERYResult } from "@/sanity/types";
import type { Lang } from "@/types";
import { Fragment } from "react";
import About from "./components/about";
import AdditionalInformation from "./components/additional-information";
import Experience from "./components/experience";
import FeaturedProjects from "./components/featured-projects";

type Props = { params: Promise<{ lang: Lang }> };

export default async function HomePage({ params }: Props) {
  const { s, isJapanese, lang, formatDateLong } = useLang((await params).lang);
  const data = await sanityFetch<BLOG_POSTS_QUERYResult>({ query: BLOG_POSTS_QUERY });
  const slicedData = data.slice(0, 5);

  return (
    <Fragment>
      <About s={s} />
      <Container href={PATHS.blog} lang={lang} title={s.MENUS.blog}>
        <BlogCards data={slicedData} formatDateLong={formatDateLong} />
      </Container>
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
    </Fragment>
  );
}
