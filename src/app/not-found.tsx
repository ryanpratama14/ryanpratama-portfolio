import Iconify from "@/components/html/iconify";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import TransitionEffect from "@/components/transition-effect";
import { useLang, useLangHelper } from "@/internationalization/functions";
import { ICONS } from "@/lib/constants";
import { HEADERS } from "@/lib/constants/helpers";
import { headers } from "next/headers";
import { Fragment } from "react";

const { validateMatchedLang } = useLangHelper();

export default function NotFoundPage() {
  const {
    s,
    const: { isDefaultLang, lang },
  } = useLang(validateMatchedLang(headers().get(HEADERS.lang)));

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <section className="flex flex-col items-center justify-center mt-6">
        <Iconify icon={ICONS.notFound} width={250} />
        <Text as="heading" className="text-center">
          <h1>{s.SECTIONS.notFound}</h1>
        </Text>

        <LinkButton lang={lang} href="" className="mt-6">
          {s.SECTIONS.backToHomepage}
        </LinkButton>
      </section>
      <TransitionEffect />
    </Fragment>
  );
}
