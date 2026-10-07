import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";

import { ALL_PATHS, ENDPOINTS, getUrl, PATHS } from "@/app/urls";
import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { CERTIFICATIONS } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { GetPosts } from "@/sanity/lib/queries";
import type { Lang } from "@/types";

const createEntry = (path: string, lang: Lang, lastModified?: string | Date | null): MetadataRoute.Sitemap[number] => ({
  url: getUrl({ path, lang }),
  lastModified: lastModified ? new Date(lastModified) : undefined,
  alternates: {
    languages: {
      ...Object.fromEntries(LANGS.map((l) => [l, getUrl({ path, lang: l })])),
      "x-default": getUrl({ path, lang: DEFAULT_LANG }),
    },
  },
});

const getBlogPosts = async () => {
  "use cache";
  cacheLife("days");
  return client.fetch(GetPosts);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts();

  const staticEntries = ALL_PATHS.flatMap((path) => LANGS.map((lang) => createEntry(path, lang)));

  const blogEntries = blogPosts.flatMap((post) => {
    const path = `${PATHS.post}/${post.slug?.current}`;
    const lastModified = post._updatedAt || post.publishedAt;
    return LANGS.map((lang) => createEntry(path, lang, lastModified));
  });

  const certificationEntries = CERTIFICATIONS.flatMap((cert) => LANGS.map((lang) => createEntry(`${PATHS.certification}/${cert.name}`, lang)));

  return [{ url: getUrl({ path: ENDPOINTS.resume }) }, ...staticEntries, ...blogEntries, ...certificationEntries];
}
