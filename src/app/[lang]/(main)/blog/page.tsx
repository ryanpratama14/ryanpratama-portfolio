import type { Metadata } from "next";

import { getMetadata } from "@/app/metadata";
import { PATHS } from "@/app/urls";
import BlogCards from "@/components/blog-cards";
import { getLang } from "@/internationalization/functions";
import { api } from "@/server/orpc";
import type { Lang } from "@/types";

export const generateMetadata = async ({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> => {
  const { s, lang } = getLang((await params).lang as Lang);
  return await getMetadata({ lang, path: PATHS.post, title: s.MENUS.blog });
};

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { s, lang } = getLang((await params).lang as Lang);
  const { data } = await api.post.list.call({});
  return <BlogCards title={s.MENUS.blog} lang={lang} data={data} />;
}
