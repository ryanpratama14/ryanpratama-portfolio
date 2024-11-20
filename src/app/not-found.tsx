import Contacts from "@/app/[lang]/(home)/components/contacts";
import Message from "@/app/[lang]/(home)/components/message";
import Profile from "@/app/[lang]/(home)/components/profile";
import LinkButton from "@/components/html/link-button";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react";
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
  const { s, isDefaultLang } = useLang(lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />

      <section className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon icon={ICONS.notFound} width={250} />
        <h1>{s.SECTIONS.notFound}</h1>
        <LinkButton href={PATHS.main} lang={lang} className="max-md:w-full mx-auto">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </section>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}
