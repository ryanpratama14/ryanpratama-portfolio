import type { Metadata } from "next";

import { env } from "@/env";
import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { getLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { PERSONALS } from "@/lib/constants";

import { getUrl, stripLangFromPath, URLS } from "./urls";

type OpenGraphArticle = {
  publishedTime?: string | null;
  modifiedTime?: string | null;
  expirationTime?: string | null;
  section?: null | string;
};

type Props = {
  openGraphArticle?: OpenGraphArticle;
  description?: string;
  title?: string;
  imageUrl?: string | null;
  tags?: string[];
  type?: "website" | "article";
  index?: boolean;
};

export const getMetadata = async ({
  title,
  description,
  imageUrl,
  openGraphArticle,
  tags,
  type = "website",
  index = true,
}: Props): Promise<Metadata> => {
  const { path, lang } = await getHeaders();

  const {
    s: { PERSONAL_DATA: me },
    splittedLocale: locale,
  } = getLang(lang);
  const MAIN_TITLE = me.fullName;
  const MAIN_DESCRIPTION = description || `${me.fullName} — ${me.summaryShort}`;

  const modifiedTitle = title || MAIN_TITLE;
  const displayTitle = modifiedTitle === MAIN_TITLE ? modifiedTitle : `${modifiedTitle} | ${MAIN_TITLE}`;
  const pathWithoutLang = stripLangFromPath(path);
  const canonical = getUrl({ path: pathWithoutLang, lang });
  const images = imageUrl ? [{ url: imageUrl, alt: displayTitle }] : [{ url: URLS.ogImage, alt: displayTitle, width: 1200, height: 630 }];

  const publishedTime = openGraphArticle?.publishedTime ?? undefined;
  const modifiedTime = openGraphArticle?.modifiedTime ?? openGraphArticle?.publishedTime ?? undefined;

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_URL),
    generator: MAIN_TITLE,
    applicationName: MAIN_TITLE,
    creator: MAIN_TITLE,
    publisher: MAIN_TITLE,
    category: "technology",
    keywords: tags?.length ? tags : keywords,
    referrer: "origin-when-cross-origin",
    authors: [{ name: MAIN_TITLE, url: getUrl({ path: "", lang }) }],
    title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
    description: MAIN_DESCRIPTION,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LANGS.map((l) => [l, getUrl({ path: pathWithoutLang, lang: l })])),
        "x-default": getUrl({ path: pathWithoutLang, lang: DEFAULT_LANG }),
      },
    },
    openGraph: {
      title: displayTitle,
      description: MAIN_DESCRIPTION,
      url: canonical,
      siteName: MAIN_TITLE,
      images,
      locale,
      ...(type === "article"
        ? {
            type: "article" as const,
            authors: [MAIN_TITLE],
            tags: tags?.length ? tags : keywords,
            publishedTime,
            modifiedTime,
            expirationTime: openGraphArticle?.expirationTime ?? undefined,
            section: openGraphArticle?.section ?? undefined,
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description: MAIN_DESCRIPTION,
      images,
      creator: PERSONALS.x,
    },
    robots: {
      index,
      follow: index,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      googleBot: {
        index,
        follow: index,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/assets/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/assets/icon-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/assets/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    },
    appleWebApp: { capable: true, title: displayTitle, statusBarStyle: "default" },
    formatDetection: { telephone: false },
  };
};

const keywords = ["Ryan Pratama", "software engineer", "front-end engineer", "full-stack", "React", "Next.js", "TypeScript", "portfolio"];
