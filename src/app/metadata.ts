import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import type { Metadata } from "next";
import { ENDPOINTS, getUrl } from "./urls";

export const getMetadata = async ({
  title,
  description,
  imageUrl,
}: {
  description?: string;
  title?: string;
  imageUrl?: string;
}): Promise<Metadata> => {
  const lang = (await getHeaders()).lang;
  const path = (await getHeaders()).path;

  const {
    s: { PERSONAL_DATA: me },
    splittedLocale: locale,
  } = useLang(lang);
  const MAIN_TITLE = `${me.fullName} — ${me.softwareEngineer}`;
  const MAIN_DESCRIPTION = description ?? `${me.fullName} — ${me.summaryShort}`;

  const modifiedTitle = title ?? MAIN_TITLE;
  const getMetadataTitle = () => (modifiedTitle === MAIN_TITLE ? modifiedTitle : `${modifiedTitle} | ${MAIN_TITLE}`);
  const url = getUrl({ path });
  const images = [{ url: imageUrl ?? getUrl({ path: ENDPOINTS.ogImage }), alt: getMetadataTitle() }];
  const author = MAIN_TITLE;
  const keywords = [
    "software",
    "engineer",
    "front-end",
    "back-end",
    "full-stack",
    "web",
    "development",
    "react",
    "nextjs",
    "nodejs",
    "trpc",
    "hono",
    "expressjs",
    "typescript",
    "javascipt",
  ].join(",");

  return {
    generator: author,
    applicationName: author,
    creator: author,
    publisher: author,
    category: "education",
    keywords,
    referrer: "origin-when-cross-origin",
    authors: [{ name: title, url }],
    metadataBase: new URL(url),
    title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
    description: MAIN_DESCRIPTION,
    openGraph: {
      title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
      description: MAIN_DESCRIPTION,
      url,
      siteName: getMetadataTitle(),
      images,
      type: "website",
      locale,
    },
    twitter: {
      card: "summary_large_image",
      title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
      description: MAIN_DESCRIPTION,
      images,
    },
    robots: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
    },
    appleWebApp: { capable: true, title, statusBarStyle: "default" },
  };
};
