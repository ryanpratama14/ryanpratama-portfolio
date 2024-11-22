import { getMetadata } from "@/app/metadata";
import { getUrl } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import Body from "@/components/body";
import Img from "@/components/html/img";
import LocalTime from "@/components/local-time";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { sanity } from "@/sanity/lib/api";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Share from "./components/share";

type Props = { params: Promise<{ slug: string; lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const data = await sanity.post.detail({ slug });
  if (!data?.slug?.current) return;

  return await getMetadata({
    title: data.title,
    description: data.description,
    openGraphArticle: { publishedTime: data.publishedAt, modifiedTime: data._updatedAt },
    imageUrl: data.mainImageUrl,
  });
};

export default async function BlogPageBySlug({ params }: Props) {
  const { slug, lang } = await params;
  const data = await sanity.post.detail({ slug });
  if (!data?.slug?.current) notFound();

  const url = getUrl({ path: (await getHeaders()).path });
  const relatedPosts = await sanity.post.list({ slice: 6, slugToRemove: data.slug.current });
  const { s } = useLang(lang);

  return (
    <Fragment>
      <article className="wrapper flex flex-col gap-4 py-3">
        <header className="flex flex-col gap-1.5">
          <h1 className="font-semibold">{data.title}</h1>
          <small className="text-blue-300 py-1 border-y-1 font-medium border-blue-300">
            <LocalTime type="long" lang={lang} date={data.publishedAtDate} />
          </small>
        </header>

        {data.mainImageUrl ? (
          <figure className="space-y-1">
            <Img isStatic={false} alt={data?.mainImage?.alt} className="w-full aspect-auto rounded-md" src={data.mainImageUrl} />
            {data.mainImage?.alt ? <figcaption className="text-gray">{data.mainImage?.alt}</figcaption> : null}
          </figure>
        ) : null}

        <Body data={data.body} />
        <section className="space-y-1.5">
          <h2 className="font-semibold">{s.SECTIONS.share}</h2>
          <Share url={url} />
        </section>
      </article>

      <BlogCards title={s.MENUS.blog} lang={lang} data={relatedPosts} />
    </Fragment>
  );
}
