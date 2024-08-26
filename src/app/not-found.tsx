import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import { useLang, useLangHelper } from "@/internationalization/functions";
import { ICONS } from "@/lib/constants";
import { HEADERS, URLS } from "@/lib/constants/helpers";
import { getMetadataImage } from "@/lib/constants/metadata";
import { Icon } from "@iconify-icon/react";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Fragment } from "react";

const { validateMatchedLang } = useLangHelper();

export const generateMetadata = async (): Promise<Metadata> => {
  const lang = validateMatchedLang(headers().get(HEADERS.lang));
  const { s } = useLang(lang);
  const title = s.SECTIONS.notFound;
  const images = getMetadataImage(title);
  const url = `${URLS.PRODUCTION.BASE}${headers().get(HEADERS.path)}`;
  return { title, openGraph: { title, images, url, siteName: title } };
};

export default async function NotFound() {
  const lang = validateMatchedLang(headers().get(HEADERS.lang));

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
    </Fragment>
  );
}
