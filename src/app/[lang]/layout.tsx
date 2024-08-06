import Navbar from "@/components/navbar/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import TransitionEffect from "@/components/transition-effect";
import { setCookie } from "@/lib/actions";
import { getBaseUrl, isJapanese } from "@/lib/functions";
import { LANGS, useLanguage } from "@/lib/internationalization";
import Providers from "@/trpc/providers";
import type { Lang } from "@/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { cookies } from "next/headers";
import "@/styles/globals.css";
import "@/styles/stylesheet.css";

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-notosans",
  display: "swap",
});

export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async ({ params }: { params: { lang: Lang } }): Promise<Metadata> => {
  const {
    t: { PERSONAL_DATA: me },
    locale,
    lang,
  } = useLanguage(params.lang);

  const title = `${me.fullName} — ${isJapanese(lang) ? me.softwareEngineer.split(" ").join("") : me.softwareEngineer}`;
  const description = `${title} ${me.summary}`;
  const url = `${getBaseUrl()}/${lang}`;

  return {
    manifest: "/manifest.json",
    metadataBase: new URL(url),
    title: { default: title, template: `%s | ${title}` },
    description,
    openGraph: { title: { default: title, template: `%s | ${title}` }, description, url, siteName: title, locale, type: "website" },
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

type Props = { params: { lang: Lang }; children: React.ReactNode };

export default function RootLayout({ children, params }: Props) {
  const { t, lang } = useLanguage(params.lang);
  const storedLang = cookies().get("lang")?.value as Lang | undefined;

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <Analytics />
        <SpeedInsights />
        <Navbar t={t} lang={lang} setCookie={setCookie} storedLang={storedLang} />
        <Providers>
          <main>{children}</main>
        </Providers>
        <TransitionEffect />
        <ScrollToTop />
      </body>
    </html>
  );
}
