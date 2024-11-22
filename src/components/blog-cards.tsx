import type { PostList } from "@/sanity/lib/api";
import type { Lang } from "@/types";
import Link from "next/link";
import Container from "./container";
import Img from "./html/img";
import LocalTime from "./local-time";

type Props = { data: PostList; lang: Lang; href?: string; title: string };

export default function BlogCards({ data, href, lang, title }: Props) {
  if (!data?.length) return null;

  return (
    <Container title={title} lang={lang} href={href}>
      <ul className="grid md:grid-cols-2 gap-3">
        {data.map((e) => {
          return (
            <li key={e._id} className="flex flex-col gap-1.5 md:gap-2">
              <section className="flex items-center">
                {e.mainImageUrl ? (
                  <Img
                    isStatic={false}
                    src={e.mainImageUrl}
                    alt={e.mainImage?.alt}
                    className="aspect-square rounded-l-md w-[4.25rem] md:w-[5.25rem] object-center object-cover"
                  />
                ) : null}
                <header className="flex flex-col pl-2.5 md:pl-3">
                  <Link href={e.href} className="font-medium hover:underline line-clamp-1">
                    <h2 className="line-clamp-1">{e.title}</h2>
                  </Link>
                  <small className="text-blue-300 font-medium line-clamp-1">
                    {e.publishedAtStringShort}
                    <LocalTime lang={lang} publishedAt={e.publishedAt} />
                  </small>
                </header>
              </section>
              <small className="line-clamp-2">{e.description}</small>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
