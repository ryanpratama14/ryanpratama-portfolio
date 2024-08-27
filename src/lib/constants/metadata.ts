import { useLang } from "@/internationalization/functions";
import { PERSONALS } from "@/lib/constants";
import { useUrl } from "@/lib/constants/urls";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { headers } from "next/headers";

const { getUrl, splitLocale, URLS, HEADERS } = useUrl();

export const getMetadataImage = (title: string) => [{ url: URLS.openGraphImage, type: "image/png", width: 1200, height: 630, alt: title }];

export const getMetadata = (lang: Lang): Metadata => {
  const {
    s: { PERSONAL_DATA: me },
    const: { locale },
  } = useLang(lang);

  const url = getUrl({ path: headers().get(HEADERS.path) });
  const title = `${me.fullName} — ${me.softwareEngineer}`;
  const description = me.summary;
  const images = getMetadataImage(title);
  const keywords = description.split(" ");

  return {
    category: "technology",
    generator: title,
    applicationName: title,
    creator: title,
    publisher: title,
    referrer: "origin-when-cross-origin",
    authors: [{ name: title, url }],
    metadataBase: new URL(url),
    title: { default: title, template: `%s | ${title}` },
    keywords,
    description,
    openGraph: {
      title: { default: title, template: `%s | ${title}` },
      description,
      url,
      siteName: title,
      locale: splitLocale(locale),
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: PERSONALS.x,
      images,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
