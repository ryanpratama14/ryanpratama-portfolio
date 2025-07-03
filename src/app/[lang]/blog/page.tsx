import type { Metadata } from "next";
import { getMetadata } from "@/app/metadata";
import BlogCards from "@/components/blog-cards";
import { getLang } from "@/internationalization/functions";
import { api } from "@/server/orpc";
import type { Lang } from "@/types";

type Props = { params: Promise<{ lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { s } = getLang((await params).lang);
  return await getMetadata({ title: s.MENUS.blog });
};

export default async function BlogPage({ params }: Props) {
  const { s, lang } = getLang((await params).lang);
  const { data } = await api.post.list({});
  return <BlogCards title={s.MENUS.blog} lang={lang} data={data} />;
}
