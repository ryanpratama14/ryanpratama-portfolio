import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import type { Metadata } from "next";
import { Fragment } from "react";
import Contacts from "./[lang]/(home)/components/contacts";
import Message from "./[lang]/(home)/components/message";
import Profile from "./[lang]/(home)/components/profile";
import { getMetadata } from "./metadata";

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

      <article className="flex flex-col md:gap-2 justify-center items-center text-center">
        <Icon icon={ICONS.notFound} width={250} />
        <h1 className="font-semibold">{s.SECTIONS.notFound}</h1>
      </article>

      <Message s={s} lang={lang} />
    </Fragment>
  );
}
