import { getMetadata } from "@/app/metadata";
import BlogCards from "@/components/blog-cards";
import Body from "@/components/body";
import Img from "@/components/html/img";
import { useLang } from "@/internationalization/functions";
import { sanityFetch } from "@/sanity/lib/client";
import { GetPostBySlug, GetPosts } from "@/sanity/lib/queries";
import type { GetPostBySlugResult, GetPostsResult } from "@/sanity/types";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";

type Props = { params: Promise<{ slug: string; lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const data = await sanityFetch<GetPostBySlugResult>({ query: GetPostBySlug, params: { slug } });
  if (!data) return;
  return await getMetadata({
    title: data.title,
    description: data.description,
    openGraphArticle: { publishedTime: data.publishedAt, modifiedTime: data._updatedAt },
    imageUrl: data.mainImageUrl,
  });
};

export default async function BlogPageBySlug({ params }: Props) {
  const { slug, lang } = await params;
  const data = await sanityFetch<GetPostBySlugResult>({ query: GetPostBySlug, params: { slug } });

  if (!data) notFound();

  const { formatDateLong, s } = useLang(lang);
  const relatedPosts = await getRelatedPosts(data.slug?.current, GetPosts);

  return (
    <Fragment>
      <article className="wrapper flex flex-col gap-2.5 py-3">
        <header className="flex flex-col gap-1.5">
          <h1 className="font-semibold">{data.title}</h1>
          <small className="text-blue-300 py-1 border-y-1 font-medium border-blue-300">{formatDateLong(data.publishedAt)}</small>
        </header>

        {data.mainImageUrl ? (
          <figure className="space-y-1 pt-2">
            <Img isStatic={false} alt={data?.mainImage?.alt} className="w-full aspect-auto rounded-md" src={data.mainImageUrl} />
            {data.mainImage?.alt ? <figcaption className="text-gray">{data.mainImage?.alt}</figcaption> : null}
          </figure>
        ) : null}

        <Body data={data.body} />
      </article>

      <BlogCards title={s.MENUS.blog} lang={lang} data={relatedPosts} formatDateLong={formatDateLong} />
    </Fragment>
  );
}

const getRelatedPosts = async (currentSlug: string | undefined, query: string) => {
  const posts = await sanityFetch<GetPostsResult>({ query });
  return posts.filter((item) => item.slug?.current !== currentSlug).slice(0, 6);
};
