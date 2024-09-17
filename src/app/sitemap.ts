import { ALL_PATHS, ENDPOINTS, getUrl } from "@/app/urls";
import { LANGS } from "@/internationalization";
import type { Lang } from "@/types";
import type { MetadataRoute } from "next";

const getEntry = (path: string, lang?: Lang) => {
  return {
    url: getUrl({ path, lang }),
    lastModified: new Date(),
    alternates: { languages: Object.fromEntries(LANGS.filter((e) => e !== lang).map((lang) => [lang, getUrl({ path, lang })])) },
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: getUrl({ path: ENDPOINTS.resume }), lastModified: new Date() },
    ...ALL_PATHS.map((path) => getEntry(path)),
    ...ALL_PATHS.flatMap((path) => LANGS.map((lang) => getEntry(path, lang))),
  ];
}
