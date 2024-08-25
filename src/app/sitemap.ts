import { LANGS } from "@/internationalization";
import { CERTIFICATIONS } from "@/lib/constants";
import { ENDPOINTS, URLS } from "@/lib/constants/helpers";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const mainUrls = {
    url: URLS.PRODUCTION.BASE,
    lastModified: new Date(),
    alternates: {
      languages: LANGS.reduce(
        (acc, alternateLang) => {
          acc[alternateLang] = URLS.PRODUCTION.BASE_LANG(alternateLang);
          return acc;
        },
        {} as Record<(typeof LANGS)[number], string>,
      ),
    },
  };

  const certificationUrls = CERTIFICATIONS.map((cert) => {
    const alternates: Record<string, string> = LANGS.reduce(
      (acc, lang) => {
        acc[lang] = `${URLS.PRODUCTION.BASE_LANG(lang)}${ENDPOINTS.certification(cert.name)}`;
        return acc;
      },
      {} as Record<string, string>,
    );

    return {
      url: `${URLS.PRODUCTION.BASE}${ENDPOINTS.certification(cert.name)}`,
      lastModified: new Date(),
      alternates: {
        languages: alternates,
      },
    };
  });

  return [mainUrls, ...certificationUrls];
}
