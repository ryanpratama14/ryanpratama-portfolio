import type { SanityPostListOutput } from "@/server/routers/sanity";
import type { Lang } from "@/types";
import Container from "./container";
import ImgSanity from "./html/img-sanity";
import LinkButton from "./html/link-button";
import LocalTime from "./local-time";

type Props = { data: SanityPostListOutput["data"]; lang: Lang; href?: string; title: string };

export default function BlogCards({ data, href, lang, title }: Props) {
  if (!data?.length) return null;

  return (
    <Container title={title} lang={lang} href={href}>
      <ul className="grid md:grid-cols-2 gap-3">
        {data.map((e) => {
          return (
            <li key={e._id}>
              <LinkButton lang={lang} unstyled href={e.href} className="flex flex-col gap-1.5 md:gap-2">
                <section className="flex items-center gap-2.5 md:gap-3">
                  <ImgSanity src={e.mainImage} alt={e.mainImage?.alt} className="aspect-square rounded-l-sm w-[4.25rem] object-center object-cover" />
                  <header className="flex flex-col">
                    <h2 className="line-clamp-1 font-medium">{e.title}</h2>
                    <LocalTime className="text-blue-300 font-medium line-clamp-1" lang={lang} date={e.publishedAtDate} />
                  </header>
                </section>
                <p className="line-clamp-2">{e.description}</p>
              </LinkButton>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
