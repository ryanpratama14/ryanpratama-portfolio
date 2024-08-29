import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import Contacts from "@/components/sections/contacts";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { ICONS } from "@/lib/constants";
import { getMetadataImage } from "@/lib/constants/metadata";
import { getUrl } from "@/lib/constants/urls";
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

  const {
    s,
    const: { isDefaultLang },
  } = useLang(lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />

      <section className="flex flex-col gap-4 justify-center items-center text-center">
        <Icon icon={ICONS.notFound} width={250} />
        <Text as="heading">
          <h1>{s.SECTIONS.notFound}</h1>
        </Text>
        <LinkButton href="/" lang={lang} className="mx-auto">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </section>
      <Message s={s} lang={lang} />
    </Fragment>
  );
}
