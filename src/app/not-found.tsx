import Contacts from "@/app/[lang]/(home)/components/contacts";
import Message from "@/app/[lang]/(home)/components/message";
import Profile from "@/app/[lang]/(home)/components/profile";
import { getMetadataImage } from "@/app/metadata";
import { getUrl } from "@/app/urls";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { ICONS } from "@/lib/constants";
import { Icon } from "@iconify-icon/react";
import type { Metadata } from "next";
import { Fragment } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  const { s } = useLang((await getHeaders()).lang);
  const title = s.SECTIONS.notFound;
  const images = getMetadataImage(title);
  const url = getUrl({ path: (await getHeaders()).path });
  return { title, openGraph: { title, images, url, siteName: title } };
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
        <Text tag="h1" as="heading">
          {s.SECTIONS.notFound}
        </Text>
        <LinkButton href="/" lang={lang} className="mx-auto">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </section>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}
