import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import type { TypedObject } from "sanity";
import Img from "./html/img";
import LinkButton from "./html/link-button";

type Props = { data: TypedObject | TypedObject[] | undefined; alt?: string };

export default function Body({ data = [] }: Props) {
  return (
    <section className="[&_ul]:list-disc [&_ul]:ml-4 [&_ol]:list-decimal [&_ol]:ml-4 flex flex-col gap-1 border-b-1 border-dashed border-blue-300 pb-2">
      <PortableText
        components={{
          block: {
            h1: ({ children }) => <h1 className="mt-1 -mb-1">{children}</h1>,
            h2: ({ children }) => <h2 className="mt-1 -mb-1">{children}</h2>,
            h3: ({ children }) => <h3 className="mt-1 -mb-1">{children}</h3>,
            h4: ({ children }) => <h4 className="mt-1 -mb-1">{children}</h4>,
            h5: ({ children }) => <h5 className="mt-1 -mb-1">{children}</h5>,
            h6: ({ children }) => <h6 className="mt-1 -mb-1">{children}</h6>,
          },
          marks: {
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
            link: ({ value, children }) => {
              const path = value?.href as string | undefined | null;
              if (!path) return null;

              return (
                <LinkButton unstyled href={path} className="font-medium border-b-1 hover:border-blue-300 text-blue-300">
                  {children}
                </LinkButton>
              );
            },
          },
          types: {
            image: ({ value }) => {
              if (!value?.asset?._ref) return null;
              return (
                <figure className="flex flex-col gap-1 my-2">
                  <Img alt={value?.alt} className="w-full aspect-auto rounded-md" src={urlFor(value).url()} />
                  {value?.alt ? <figcaption className="text-gray">{value.alt}</figcaption> : null}
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
