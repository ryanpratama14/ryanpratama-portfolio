import { PATHS } from "@/app/urls";
import Container from "@/components/container";
import { sanityFetch } from "@/sanity/lib/client";
import { BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import type { BLOG_POSTS_QUERYResult } from "@/sanity/types";
import type { DictionaryStatic } from "@/types";
import Link from "next/link";

type Props = { s: DictionaryStatic; formatDateLong: (str: string | undefined) => string };

export default async function Blog({ s, formatDateLong }: Props) {
  const data = await sanityFetch<BLOG_POSTS_QUERYResult>({ query: BLOG_POSTS_QUERY });
  if (!data?.length) return null;

  const slicedData = data.slice(0, 5);

  return (
    <Container title={s.MENUS.blog}>
      <ul className="grid md:grid-cols-2 gap-3">
        {slicedData.map((e) => {
          return (
            <li key={e._id} className="flex flex-col gap-1.5 md:gap-2">
              <header className="flex flex-col">
                <Link href={`${PATHS.blog}/${e.slug?.current}`} className="font-semibold hover:underline">
                  <h2 className="line-clamp-1">{e.title}</h2>
                </Link>
                <small className="text-blue-300">{formatDateLong(e.publishedAt)}</small>
              </header>
              <small className="line-clamp-2">{e.description}</small>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
