import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react";
import type { Metadata } from "next";
import { Fragment } from "react";
import { getMetadata } from "./metadata";

export const generateMetadata = async (): Promise<Metadata> => {
  const { s } = useLang((await getHeaders()).lang);
  return await getMetadata({ title: s.SECTIONS.notFound });
};

export default async function NotFound() {
  const lang = (await getHeaders()).lang;
  const { s } = useLang(lang);

  return (
    <Fragment>
      <section className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon icon={ICONS.notFound} width={250} />
        <h1>{s.SECTIONS.notFound}</h1>
      </section>
    </Fragment>
  );
}
