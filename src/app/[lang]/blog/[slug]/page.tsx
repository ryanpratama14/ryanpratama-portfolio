import { getMetadata } from "@/app/metadata";
import { PATHS } from "@/app/urls";
import Body from "@/components/body";
import Img from "@/components/html/img";
import LinkButton from "@/components/html/link-button";
import { useLang } from "@/internationalization/functions";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOG_POST_QUERY } from "@/sanity/lib/queries";
import type { BLOG_POST_QUERYResult } from "@/sanity/types";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import Message from "../../(home)/components/message";
import Profile from "../../(home)/components/profile";

type Props = { params: Promise<{ slug: string; lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata | undefined> => {
  const { slug } = await params;
  const data = await sanityFetch<BLOG_POST_QUERYResult>({ query: BLOG_POST_QUERY, params: { slug } });
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
  const data = await sanityFetch<BLOG_POST_QUERYResult>({ query: BLOG_POST_QUERY, params: { slug } });

  if (!data) notFound();

  const { s, isDefaultLang, formatDateLong } = useLang(lang);

  return (
    <Fragment>
      <Profile s={s} isDefaultLang={isDefaultLang} lang={lang} />

      <article className="wrapper flex flex-col gap-2.5 py-6">
        <header className="flex flex-col gap-2">
          <h1 className="font-semibold">{data.title}</h1>
          <small className="text-blue-300 py-1 border-y-[0.5px] border-blue-200">{formatDateLong(data.publishedAt)}</small>
        </header>

        {data.mainImageUrl ? (
          <figure className="space-y-1 pt-2">
            <Img isStatic={false} alt={data?.mainImage?.alt} className="shadow w-full aspect-auto rounded-md" src={data.mainImageUrl} />
            {data.mainImage?.alt ? <figcaption className="text-gray">{data.mainImage?.alt}</figcaption> : null}
          </figure>
        ) : null}

        <Body data={data.body} />

        <LinkButton href={PATHS.main} lang={lang} className="mx-auto max-md:w-full">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </article>

      <Message s={s} lang={lang} />
    </Fragment>
  );
}
