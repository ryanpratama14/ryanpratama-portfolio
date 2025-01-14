import { getMetadata } from "@/app/metadata";
import { getUrl } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import Body from "@/components/body";
import Breadcrumb from "@/components/breadcrumb";
import Img from "@/components/html/img";
import LocalTime from "@/components/local-time";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { VARIANTS } from "@/styles";
import { api } from "@/trpc/server";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Share from "./components/share";
import StickyTitle from "./components/sticky-title";

type Props = { params: Promise<{ slug: string; lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const { result: data } = await api.unlogged.sanity.post.detail({ slug });
  if (!data?.slug?.current) return;

  return await getMetadata({
    title: data.title,
    description: data.description,
    openGraphArticle: { publishedTime: data.publishedAt, modifiedTime: data._updatedAt },
    imageUrl: data.mainImageUrl,
    tags: data.tags,
  });
};

export default async function BlogPageBySlug({ params }: Props) {
  const { slug, lang } = await params;
  const { result: data } = await api.unlogged.sanity.post.detail({ slug });
  if (!data?.slug?.current) notFound();

  const url = getUrl({ path: (await getHeaders()).path });
  const relatedData = await api.unlogged.sanity.post.list({
    slice: 6,
    slugToRemove: data.slug.current,
  });
  const { s } = useLang(lang);

  return (
    <Fragment>
      <StickyTitle data={data} lang={lang} />
      <article className="wrapper flex flex-col gap-4 py-3">
        <Breadcrumb lang={lang} s={s} slugTitle={data.title} />
        <header id="post-title" className="flex flex-col gap-1.5">
          <h1 className="font-semibold">{data.title}</h1>
          <LocalTime className="text-blue-300 py-1 border-y-1 font-medium border-blue-300" lang={lang} date={data.publishedAtDate} />
        </header>

        <figure className="space-y-1">
          <Img alt={data?.mainImage?.alt} className="w-full aspect-auto rounded-md" src={data.mainImageUrl} />
          {data.mainImage?.alt ? <figcaption className="text-gray">{data.mainImage?.alt}</figcaption> : null}
        </figure>

        <Body data={data.body} />
        <section className="space-y-1.5">
          <h2 className="font-semibold">{s.SECTIONS.share}</h2>
          <Share url={url} />
        </section>

        {data.tags?.length ? (
          <ul className="flex gap-1 md:gap-1.5 flex-wrap">
            {data.tags.map((e) => {
              return (
                <li key={e}>
                  <small className={VARIANTS.Box({ style: "techstack" })}>{e}</small>
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
