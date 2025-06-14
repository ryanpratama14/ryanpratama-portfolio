import { getMetadata } from "@/app/metadata";
import { getUrl } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import Body from "@/components/body";
import Breadcrumb from "@/components/breadcrumb";
import ImgSanity from "@/components/html/img-sanity";
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
  const { data } = await api.unlogged.sanity.post.detail({ slug });
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
  const url = getUrl({ path: (await getHeaders()).path });
  const { slug, lang } = await params;
  const { data } = await api.unlogged.sanity.post.detail({ slug });
  if (!data?.slug?.current) notFound();

  const { data: relatedData } = await api.unlogged.sanity.post.list({
    slice: 6,
    slugToRemove: data.slug.current,
  });

  const { s } = useLang(lang);

  return (
    <Fragment>
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
          <Share url={url} />
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
