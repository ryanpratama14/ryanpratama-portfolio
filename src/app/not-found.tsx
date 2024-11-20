import LinkButton from "@/components/html/link-button";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import type { Metadata } from "next";
import { Fragment } from "react";
import { getMetadata } from "./metadata";
import { PATHS } from "./urls";

export const generateMetadata = async (): Promise<Metadata> => {
  const { s } = useLang((await getHeaders()).lang);
  return await getMetadata({ title: s.SECTIONS.notFound });
};

export default async function NotFound() {
  const lang = (await getHeaders()).lang;
  const { s } = useLang(lang);

  return (
    <Fragment>
      <article className="h-screen flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="font-semibold">{s.SECTIONS.notFound}</h1>
        <LinkButton lang={lang} href={PATHS.main} className="mx-auto">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </article>
    </Fragment>
  );
}
