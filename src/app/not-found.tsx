"use client";

import Iconify from "@/components/html/iconify";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import { useLanguage, useLanguageHelper } from "@/internationalization/functions";
import { COOKIES, ICONS } from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

const { validateMatchedLang } = useLanguageHelper();

export default function NotFound() {
  const searchParams = useSearchParams();

  console.log(searchParams);
  const {
    s,
    const: { isDefaultLang, lang },
  } = useLanguage(validateMatchedLang(searchParams.get(COOKIES.lang)));

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <section className="flex flex-col items-center justify-center mt-6">
        <Iconify icon={ICONS.notFound} width={250} />
        <Text as="heading" className="text-center">
          <h1>{s.SECTIONS.notFound}</h1>
        </Text>

        <LinkButton href="/" className="mt-6">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </section>
    </Fragment>
  );
}
