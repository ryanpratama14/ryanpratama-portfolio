import { Fragment, Suspense } from "react";

import Container from "@/components/container";
import DraftModeTools from "@/components/draft-mode-tools";
import JsonLd from "@/components/json-ld";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import { getLang } from "@/internationalization/functions";
import { getPersonJsonLd, getWebSiteJsonLd } from "@/lib/structured-data";
import { SanityLive } from "@/sanity/lib/live";

import Message from "./(home)/components/message";
import Profile from "./(home)/components/profile";

export default async function MainLayout({ params, children }: LayoutProps<"/[lang]">) {
  const { lang, s, d, formatDate } = getLang((await params).lang);
  return (
    <Fragment>
      <JsonLd data={[getPersonJsonLd(lang), getWebSiteJsonLd(lang)]} />
      <Suspense>
        <SanityLive />
      </Suspense>
      <Suspense>
        <DraftModeTools />
      </Suspense>
      <main className="flex flex-col gap-4 main-padding">
        <Profile s={s} lang={lang} />
        {children}
        <Suspense>
          <Message s={s} lang={lang} />
        </Suspense>
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
