import ScrollToTop from "@/components/ScrollToTop";
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/components/navbar/Navbar";
import { env } from "@/env";
import { setCookieLang } from "@/lib/actions";
import { cn } from "@/lib/functions";
import { LANGS, LANGUAGES, useDictionary } from "@/lib/internationalization";
import Providers from "@/trpc/providers";
import type { Lang } from "@/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_JP } from "next/font/google";
import { cookies } from "next/headers";

// styles
import "@/styles/globals.css";
import "@/styles/stylesheet.css";

export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async ({ params }: { params: { lang: Lang } }): Promise<Metadata> => {
  const isJapanese = params.lang === "ja";
  const t = useDictionary(params.lang).PERSONAL_DATA;

  const title = `${t.fullName} — ${isJapanese ? t.softwareEngineer.split(" ").join("") : t.softwareEngineer}`;
  const description = `${title} ${t.summary}`;

  return {
    manifest: "/manifest.json",
    metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
    title: { default: title, template: `%s | ${title}` },
    description,
    openGraph: {
      title: { default: title, template: `%s | ${title}` },
      description,
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${params.lang}`,
      siteName: title,
      locale: LANGUAGES[params.lang].locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: { title, card: "summary_large_image", description },
  };
};

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-notosans",
  display: "swap",
});

const notosansJP = Noto_Sans_JP({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-notosansJP",
  subsets: ["latin"],
  display: "swap",
});

type Props = { params: { lang: Lang }; children: React.ReactNode };

export default async function RootLayout({ children, params }: Props) {
  const t = useDictionary(params.lang);
  const isJapanese = params.lang === "ja";

  return (
    <html lang={params.lang}>
      <body
        className={cn(`text-white bg-black font-notosans ${notosans.variable} ${notosansJP.variable}`, {
          "font-notosansJP": isJapanese,
        })}
      >
        <Analytics />
        <SpeedInsights />
        <Navbar
          t={t}
          setCookieLang={setCookieLang}
          lang={params.lang}
          storedLang={(cookies().get("lang")?.value as Lang) ?? undefined}
        />
        <Providers>{children}</Providers>
        <TransitionEffect />
        <ScrollToTop />
      </body>
    </html>
  );
}
