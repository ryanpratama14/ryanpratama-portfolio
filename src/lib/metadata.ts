import { useLanguage } from "@/internationalization/functions";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { PERSONALS, URLS } from "./constants";

export const getMetadata = (lang: Lang): Metadata => {
  const {
    s: { PERSONAL_DATA: me },
    const: { locale, baseUrlWithLang: url },
  } = useLanguage(lang);

  const title = `${me.fullName} — ${me.softwareEngineer}`;
  const description = `${me.fullName}, ${me.summary}`;
  const images = [{ url: URLS.OG_IMAGE, type: "image/png", width: 1200, height: 630, alt: title }];
  const keywords = description.split(" ");

  return {
    manifest: "/manifest.json",
    category: "technology",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      locale: locale.split("-").join("_"),
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
