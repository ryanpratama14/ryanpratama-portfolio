import type { SanityPostListOutput } from "@/server/api/routers/sanity";
import type { Lang } from "@/types";
import Container from "./container";
import ImgSanity from "./html/img-sanity";
import LinkButton from "./html/link-button";
import LocalTime from "./local-time";

type Props = { data: SanityPostListOutput; lang: Lang; href?: string; title: string };

export default function BlogCards({ data, href, lang, title }: Props) {
  if (!data.result?.length) return null;

  return (
    <Container title={title} lang={lang} href={href}>
      <ul className="grid md:grid-cols-2 gap-3">
        {data.result.map((e) => {
          return (
            <li key={e._id} className="flex flex-col gap-1.5 md:gap-2">
              <section className="flex items-center">
                <ImgSanity
                  src={e.mainImage}
                  alt={e.mainImage?.alt}
                  className="aspect-square rounded-l-md w-[4.25rem] 2xl:w-[5.25rem] object-center object-cover"
                />
                <header className="flex flex-col pl-2.5 md:pl-3">
                  <LinkButton lang={lang} unstyled href={e.href} className="font-medium hover:underline line-clamp-1">
                    <h2 className="line-clamp-1">{e.title}</h2>
                  </LinkButton>
                  <LocalTime className="text-blue-300 font-medium line-clamp-1" lang={lang} date={e.publishedAtDate} />
                </header>
              </section>
              <p className="line-clamp-2">{e.description}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
