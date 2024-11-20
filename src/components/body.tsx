import { isExternalLink } from "@/app/urls";
import Img from "@/components/html/img";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Link from "next/link";
import type { TypedObject } from "sanity";

type Props = { data: TypedObject | TypedObject[] | undefined; alt?: string };

export default function Body({ data = [] }: Props) {
  return (
    <section className="body-text flex flex-col gap-2 border-b-1 border-dashed border-blue-300 pb-2">
      <PortableText
        components={{
          block: {
            h1: ({ children }) => <h1 className="mt-2 -mb-2">{children}</h1>,
            h2: ({ children }) => <h2 className="mt-2 -mb-2">{children}</h2>,
          },
          marks: {
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            link: ({ value, children }) => {
              const path = value?.href || "";
              const target = isExternalLink(path) ? "_blank" : undefined;
              const rel = isExternalLink(path) ? "noreferrer noopener" : undefined;

              return (
                <Link href={value?.href} target={target} rel={rel} className="font-medium text-gray border-b-1 hover:border-blue-600">
                  {children}
                </Link>
              );
            },
          },
          types: {
            image: ({ value }) => {
              if (!value?.asset?._ref) return null;
              return (
                <figure className="space-y-1 my-2">
                  <Img isStatic={false} alt={value?.alt} className="w-full aspect-auto rounded-md" src={urlFor(value).url()} />
                  {value?.alt ? <figcaption className="text-gray">{value?.alt}</figcaption> : null}
                </figure>
              );
            },
          },
        }}
        value={data}
      />
    </section>
  );
}
