import type { Metadata } from "next";
import { getLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { PERSONALS } from "@/lib/constants";
import { getUrl, URLS } from "./urls";

type OpenGraphArticle = {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  section?: null | string;
};

type Props = {
  openGraphArticle?: OpenGraphArticle;
  description?: string;
  title?: string;
  imageUrl?: string | null;
  tags?: string[];
};

export const getMetadata = async ({ title, description, imageUrl, openGraphArticle, tags }: Props): Promise<Metadata> => {
  const { path, lang } = await getHeaders();

  const {
    s: { PERSONAL_DATA: me },
    splittedLocale: locale,
  } = getLang(lang);
  const MAIN_TITLE = me.fullName;
  const MAIN_DESCRIPTION = description || `${me.fullName} — ${me.summaryShort}`;

  const modifiedTitle = title || MAIN_TITLE;
  const getMetadataTitle = () => (modifiedTitle === MAIN_TITLE ? modifiedTitle : `${modifiedTitle} | ${MAIN_TITLE}`);
  const url = getUrl({ path });
  const images = [{ url: imageUrl || URLS.ogImage, alt: getMetadataTitle() }];
  const author = MAIN_TITLE;

  const openGraphData: OpenGraphArticle = {
    ...openGraphArticle,
    publishedTime: openGraphArticle?.publishedTime || new Date().toISOString(),
    modifiedTime: openGraphArticle?.publishedTime || new Date().toISOString(),
  };

  return {
    generator: author,
    applicationName: author,
    creator: author,
    publisher: author,
    category: "education",
    keywords: tags?.length ? tags : keywords,
    referrer: "origin-when-cross-origin",
    authors: [{ name: MAIN_TITLE, url: getUrl({ path: "" }) }],
    metadataBase: new URL(url),
    title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
    description: MAIN_DESCRIPTION,
    openGraph: {
      title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
      description: MAIN_DESCRIPTION,
      url,
      siteName: getMetadataTitle(),
      images,
      locale,
      type: "article",
      authors: [MAIN_TITLE, getUrl({ path: "" })],
      tags: tags?.length ? tags : keywords,
      ...openGraphData,
    },
    twitter: {
      card: "summary_large_image",
      title: { default: modifiedTitle, template: `%s | ${MAIN_TITLE}` },
      description: MAIN_DESCRIPTION,
      images,
      creator: PERSONALS.x,
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
  "javascript",
  "vue",
  "angular",
  "redux",
  "mobx",
  "svelte",
  "graphql",
  "api",
  "websocket",
  "docker",
  "kubernetes",
  "firebase",
  "mongodb",
  "postgresql",
  "mysql",
  "prisma",
  "tailwindcss",
  "styled-components",
  "css",
  "html",
  "sass",
  "jest",
  "cypress",
  "testing-library",
  "webpack",
  "babel",
  "parcel",
  "gulp",
  "vite",
  "eslint",
  "prettier",
  "jira",
  "github",
  "git",
  "agile",
  "scrum",
  "rest",
  "json",
  "microservices",
  "lambda",
  "aws",
  "azure",
  "gcp",
  "digitalocean",
  "pwa",
  "seo",
  "typescript",
  "accessibility",
  "usability",
  "ux",
  "ui",
  "design",
  "figma",
  "sketch",
  "photoshop",
  "illustrator",
];
