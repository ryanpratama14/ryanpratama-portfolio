import ScrollToTop from "@/components/scroll-to-top";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { LANGS, LANGUAGE_OPTIONS } from "@/i18n.config";
import { useLanguage } from "@/i18n.functions";
import Providers from "@/trpc/providers";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

// styles
import { VARIANTS } from "@/styles";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-notosans",
  display: "swap",
});

export const generateStaticParams = async () => LANGS.map((locale) => ({ locale }));
export const generateMetadata = async ({ params }: { params: { locale: Lang } }): Promise<Metadata> => {
  const {
    s: { PERSONAL_DATA: me },
    const: { locale, baseUrlWithLang: url },
  } = useLanguage(params.locale);

  const title = `${me.fullName} — ${me.softwareEngineer}`;
  const description = LANGUAGE_OPTIONS.map((e) => {
    const {
      t: {
        s: { PERSONAL_DATA: me2 },
      },
    } = e;
    return `${me2.fullName} — ${me2.softwareEngineer} ${me2.summary}`;
  }).join(" ");

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

type Props = { params: { locale: Lang }; children: React.ReactNode };

export default async function RootLayout({ children, params }: Props) {
  unstable_setRequestLocale(params.locale);
  const messages = await getMessages();

  return (
    <html lang={params.locale} className={notosans.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <main className={VARIANTS.Main()}>{children}</main>
          </Providers>
        </NextIntlClientProvider>
        <TransitionEffect />
        <ScrollToTop />
        <VercelApps />
      </body>
    </html>
  );
}
