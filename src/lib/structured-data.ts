import { getUrl, PATHS } from "@/app/urls";
import { getLang } from "@/internationalization/functions";
import { CONTACTS, PERSONALS } from "@/lib/constants";
import type { Lang } from "@/types";

const email = PERSONALS.mailTo.replace(/^mailto:/, "");
const sameAs = [...CONTACTS.map((c) => c.href).filter((href) => href.startsWith("http")), `https://x.com/${PERSONALS.x.replace(/^@/, "")}`];

export const getPersonJsonLd = (lang: Lang) => {
  const {
    s: { PERSONAL_DATA: me },
  } = getLang(lang);
  const url = getUrl({ path: PATHS.main, lang });

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: me.fullName,
    url,
    email,
    jobTitle: me.softwareEngineer,
    description: me.summaryShort,
    image: getUrl({ path: "/assets/icon-512x512.png" }),
    sameAs,
    knowsAbout: ["React", "Next.js", "TypeScript", "Front-end development", "Full-stack development"],
  };
};

export const getWebSiteJsonLd = (lang: Lang) => {
  const {
    s: { PERSONAL_DATA: me },
  } = getLang(lang);
  const url = getUrl({ path: PATHS.main, lang });

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: me.fullName,
    url,
    description: me.summaryShort,
    inLanguage: lang,
    publisher: { "@type": "Person", name: me.fullName, url },
  };
};

export const getBlogPostingJsonLd = ({
  lang,
  title,
  description,
  url,
  imageUrl,
  publishedAt,
  modifiedAt,
  tags,
}: {
  lang: Lang;
  title: string;
  description?: string | null;
  url: string;
  imageUrl?: string | null;
  publishedAt?: string | null;
  modifiedAt?: string | null;
  tags?: string[] | null;
}) => {
  const {
    s: { PERSONAL_DATA: me },
  } = getLang(lang);
  const authorUrl = getUrl({ path: PATHS.main, lang });

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description || undefined,
    url,
    image: imageUrl || undefined,
    datePublished: publishedAt || undefined,
    dateModified: modifiedAt || publishedAt || undefined,
    inLanguage: lang,
    keywords: tags?.length ? tags.join(", ") : undefined,
    author: { "@type": "Person", name: me.fullName, url: authorUrl },
    publisher: { "@type": "Person", name: me.fullName, url: authorUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
};

export const getBreadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
