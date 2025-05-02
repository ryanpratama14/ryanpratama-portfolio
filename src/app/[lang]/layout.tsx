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
      <iframe
        title="Spotify"
        src="https://open.spotify.com/embed/track/6Wz9rIfo9tOBcVCd1Mo7F7"
        width="100%"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="wrapper rounded-sm"
      />
    </Fragment>
  );
}
