import { URLS, getUrl, splitLocale } from "@/app/urls";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { PERSONALS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { Metadata } from "next";

export const getMetadataImage = (title: string) => [{ url: URLS.ogImage, type: "image/png", width: 1200, height: 630, alt: title }];
export const getMetadata = async (lang: Lang): Promise<Metadata> => {
  const {
    s: { PERSONAL_DATA: me },
    locale,
  } = useLang(lang);

  const url = getUrl({ path: (await getHeaders()).path });
  const title = `${me.fullName} — ${me.softwareEngineer}`;
  const description = me.summary;
  const images = getMetadataImage(title);
  const keywords = description.split(" ");

  return {
    generator: title,
    applicationName: title,
    creator: title,
    publisher: title,
    category: "technology",
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
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};
