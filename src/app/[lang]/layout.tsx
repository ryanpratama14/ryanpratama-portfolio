import Providers from "@/app/providers";
import { LANGS, LANGUAGE_OPTIONS } from "@/internationalization";
import { useLanguage } from "@/internationalization/functions";
import type { Lang } from "@/types";
import type { Metadata } from "next";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async ({ params }: { params: { lang: Lang } }): Promise<Metadata> => {
  const {
    s: { PERSONAL_DATA: me },
    const: { locale, baseUrlWithLang: url },
  } = useLanguage(params.lang);

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

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return <Providers>{children}</Providers>;
}
