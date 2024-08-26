import { LANGS } from "@/internationalization";
import { useLangHelper } from "@/internationalization/functions";
import { ALL_PATHS, URLS } from "@/lib/constants/helpers";
import type { Lang } from "@/types";
import type { MetadataRoute } from "next";

const { addLang } = useLangHelper();

const getEntry = (path: string, lang?: Lang) => {
  return {
    url: getUrl(path, lang),
    lastModified: new Date(),
    alternates: { languages: Object.fromEntries(LANGS.filter((e) => e !== lang).map((lang) => [lang, getUrl(path, lang)])) },
  };
};

const getUrl = (path: string, lang?: Lang) => {
  return `${URLS.PRODUCTION.BASE}${addLang(lang)}${path === "/" ? "" : path}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const allEntries = ALL_PATHS.map((path) => getEntry(path));
  const allEntriesWithLang = ALL_PATHS.flatMap((path) => LANGS.map((lang) => getEntry(path, lang)));
  return [...allEntries, ...allEntriesWithLang];
}
