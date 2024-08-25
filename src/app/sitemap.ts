import { LANGS } from "@/internationalization";
import { CERTIFICATIONS } from "@/lib/constants";
import { ENDPOINTS, URLS } from "@/lib/constants/helpers";
import type { Lang } from "@/types";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [getEntry("/"), ...CERTIFICATIONS.map((e) => getEntry(ENDPOINTS.certification(e.name)))];
}

const getEntry = (path: string) => {
  return {
    url: getUrl(path),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(LANGS.map((lang) => [lang, getUrl(path, lang)])),
    },
  };
};

const getUrl = (path: string, lang?: Lang) => {
  return `${URLS.PRODUCTION.BASE}${lang ? `/${lang}` : ""}${path === "/" ? "" : path}`;
};
