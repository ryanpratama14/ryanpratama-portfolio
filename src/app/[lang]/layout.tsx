import Container from "@/components/container";
import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";
import { Fragment } from "react";
import Contacts from "./(home)/components/contacts";
import Message from "./(home)/components/message";
import Profile from "./(home)/components/profile";

type Props = { children: React.ReactNode; params: Promise<{ lang: Lang }> };

export default async function RootLayout({ params, children }: Props) {
  const { lang, s, d, isDefaultLang, formatDate } = useLang((await params).lang);

  return (
    <Fragment>
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      {children}
      <Message s={s} lang={lang} />
      <Container title={d.updatedOn(formatDate(new Date()))} />
    </Fragment>
  );
}
