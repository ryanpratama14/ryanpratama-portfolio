import { PATHS } from "@/app/urls";
import type { BLOG_POSTS_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import Img from "./html/img";

type Props = { data: BLOG_POSTS_QUERYResult; formatDateLong: (str: string | undefined) => string };

export default function BlogCards({ data, formatDateLong }: Props) {
  return (
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
                <Link href={`${PATHS.blog}/${e.slug?.current}`} className="font-semibold hover:underline line-clamp-1">
                  <h2 className="line-clamp-1">{e.title}</h2>
                </Link>
                <small className="text-blue-300 font-medium line-clamp-1">{formatDateLong(e.publishedAt)}</small>
              </header>
            </section>
            <small className="line-clamp-2">{e.description}</small>
          </li>
        );
      })}
    </ul>
  );
}
