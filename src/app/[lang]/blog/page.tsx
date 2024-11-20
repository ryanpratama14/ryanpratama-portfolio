import { getMetadata } from "@/app/metadata";
import BlogCards from "@/components/blog-cards";
import { useLang } from "@/internationalization/functions";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import type { BLOG_POSTS_QUERYResult } from "@/sanity/types";
import type { Lang } from "@/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { s } = useLang((await params).lang);
  return await getMetadata({ title: s.MENUS.blog });
};

export default async function BlogPage({ params }: Props) {
  const { s, formatDateLong, lang } = useLang((await params).lang);
  const data = await sanityFetch<BLOG_POSTS_QUERYResult>({ query: BLOG_POSTS_QUERY });

  return <BlogCards title={s.MENUS.blog} lang={lang} data={data} formatDateLong={formatDateLong} />;
}
