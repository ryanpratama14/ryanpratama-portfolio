import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import { Fragment } from "react";

import Container from "@/components/container";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import JsonLd from "@/components/json-ld";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import { getLang } from "@/internationalization/functions";
import { getPersonJsonLd, getWebSiteJsonLd } from "@/lib/structured-data";
import { SanityLive } from "@/sanity/lib/live";
import type { Lang } from "@/types";

import Message from "./(home)/components/message";
import Profile from "./(home)/components/profile";

type Props = { children: React.ReactNode; params: Promise<{ lang: string }> };

export default async function RootLayout({ params, children }: Props): Promise<React.JSX.Element> {
  const { lang, s, d, formatDate } = getLang((await params).lang as Lang);
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <Fragment>
      <JsonLd data={[getPersonJsonLd(lang), getWebSiteJsonLd(lang)]} />
      <SanityLive />
      {isDraftMode && (
        <Fragment>
          <DisableDraftMode />
          <VisualEditing />
        </Fragment>
      )}
      <main className="flex flex-col gap-4 main-padding">
        <Profile s={s} lang={lang} />
        {children}
        <Message s={s} lang={lang} />
        <Container title={d.updatedOn(formatDate(new Date("2026-09-01")))} />
        <iframe
          title="Spotify"
          src={env.SPOTIFY_TRACK_URL}
          width="100%"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="wrapper rounded-sm"
        />
      </main>
      {OtherComponents[env.NODE_ENV]}
    </Fragment>
  );
}

const OtherComponents: Record<typeof env.NODE_ENV, React.JSX.Element | null> = {
  development: <ScreenSizeIndicator />,
  production: null,
  test: null,
};
