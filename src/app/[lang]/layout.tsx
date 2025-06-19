import Container from "@/components/container";
import { env } from "@/env";
import { getLang } from "@/internationalization/functions";
import type { Lang } from "@/types";
import Message from "./(home)/components/message";
import Profile from "./(home)/components/profile";

type Props = { children: React.ReactNode; params: Promise<{ lang: Lang }> };

export default async function RootLayout({ params, children }: Props) {
  const { lang, s, d, isDefaultLang, formatDate } = getLang((await params).lang);

  return (
    <main className="flex flex-col gap-4 main-padding">
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      {children}
      <Message s={s} lang={lang} />
      <Container title={d.updatedOn(formatDate(new Date()))} />
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
  );
}
