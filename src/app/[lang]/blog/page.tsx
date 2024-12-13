import { getMetadata } from "@/app/metadata";
import BlogCards from "@/components/blog-cards";
import { useLang } from "@/internationalization/functions";
import { api } from "@/trpc/server";
import type { Lang } from "@/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ lang: Lang }> };

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { s } = useLang((await params).lang);
  return await getMetadata({ title: s.MENUS.blog });
};

export default async function BlogPage({ params }: Props) {
  const { s, lang } = useLang((await params).lang);
  const data = await api.unlogged.sanity.post.list({});

  return <BlogCards title={s.MENUS.blog} lang={lang} data={data} />;
}
