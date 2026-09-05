import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { getMetadata } from "@/app/metadata";
import { getUrl, PATHS } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import Body from "@/components/body";
import Breadcrumb from "@/components/breadcrumb";
import ImgSanity from "@/components/html/img-sanity";
import JsonLd from "@/components/json-ld";
import LocalTime from "@/components/local-time";
import { getLang } from "@/internationalization/functions";
import { getBlogPostingJsonLd, getBreadcrumbJsonLd } from "@/lib/structured-data";
import { client } from "@/sanity/lib/client";
import { GetPosts } from "@/sanity/lib/queries";
import { api } from "@/server/orpc";
import { VARIANTS } from "@/styles";
import type { Lang } from "@/types";

import Share from "./components/share";
import StickyTitle from "./components/sticky-title";

type Props = { params: Promise<{ slug: string; lang: Lang }> };

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return (await client.fetch(GetPosts)).filter((r) => !!r.slug?.current).map((e) => ({ slug: e.slug?.current || "" }));
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const { data } = await api.post.detail.call({ slug });
  if (!data?.slug?.current) return;

  return await getMetadata({
    title: data.title,
    description: data.description,
    type: "article",
    openGraphArticle: { publishedTime: data.publishedAt, modifiedTime: data._updatedAt },
    imageUrl: data.mainImageUrl,
    tags: data.tags,
  });
};

export default async function BlogPageBySlug({ params }: Props) {
  const { slug, lang } = await params;
  const { data } = await api.post.detail.call({ slug });
  if (!data?.slug?.current) notFound();
  const { data: relatedData } = await api.post.list.call({ slice: 6, slugToRemove: data.slug.current });
  const { s } = getLang(lang);
  const postPath = `${PATHS.post}/${data.slug.current}`;
  const postUrl = getUrl({ path: postPath, lang });

  return (
    <Fragment>
      <JsonLd
        data={[
          getBlogPostingJsonLd({
            lang,
            title: data.title || "",
            description: data.description,
            url: postUrl,
            imageUrl: data.mainImageUrl,
            publishedAt: data.publishedAt,
            modifiedAt: data._updatedAt,
            tags: data.tags,
          }),
          getBreadcrumbJsonLd([
            { name: s.MENUS.main, url: getUrl({ path: PATHS.main, lang }) },
            { name: s.MENUS.blog, url: getUrl({ path: PATHS.post, lang }) },
            { name: data.title || slug, url: postUrl },
          ]),
        ]}
      />
      <StickyTitle data={data} lang={lang} />
      <article className="wrapper flex flex-col gap-4">
        <header id="post-title" className="flex flex-col gap-1.5">
          <Breadcrumb lang={lang} s={s} slugTitle={data.title} />
          <h1 className="font-semibold">{data.title}</h1>
          <LocalTime className="text-blue-300 py-1 border-y-1 font-medium border-blue-300" lang={lang} date={data.publishedAtDate} />
        </header>

        {data.mainImage ? (
          <figure className="space-y-1">
            <ImgSanity alt={data?.mainImage?.asset?.altText} className="w-full aspect-auto rounded-sm" src={data.mainImage} />
            {data.mainImage?.alt ? <figcaption className="text-gray">{data.mainImage?.alt}</figcaption> : null}
          </figure>
        ) : null}
        <Body data={data.body} />
        <section className="space-y-1.5">
          <h2 className="font-semibold">{s.SECTIONS.share}</h2>
          <Share />
        </section>

        {data.tags?.length ? (
          <ul className="flex gap-1 md:gap-1.5 flex-wrap">
            {data.tags.map((e) => {
              return (
                <li key={e} className={VARIANTS.Box({ style: "techstack" })}>
                  {e}
                </li>
              );
            })}
          </ul>
        ) : null}
      </article>

      <BlogCards title={s.MENUS.blog} lang={lang} data={relatedData} />
    </Fragment>
  );
}
