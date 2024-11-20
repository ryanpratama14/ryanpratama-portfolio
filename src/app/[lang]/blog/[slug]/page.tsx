import { getMetadata } from "@/app/metadata";
import { PATHS } from "@/app/urls";
import Body from "@/components/body";
import Container from "@/components/container";
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

      <Container title={data.title}>
        <small className="text-blue-300">{formatDateLong(data.publishedAt)}</small>

        <Body data={data.body} />

        <LinkButton href={PATHS.main} lang={lang} className="mx-auto max-md:w-full">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </Container>

      <Message s={s} lang={lang} />
    </Fragment>
  );
}
