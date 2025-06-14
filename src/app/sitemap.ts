import { ALL_PATHS, ENDPOINTS, PATHS, getUrl } from "@/app/urls";
import { LANGS } from "@/internationalization";
import { CERTIFICATIONS } from "@/lib/constants";
import { api } from "@/trpc/server";
import type { Lang } from "@/types";
import type { MetadataRoute } from "next";

const createEntry = (path: string, lang?: Lang) => ({
  url: getUrl({ path, lang }),
  lastModified: new Date(),
  alternates: lang ? { languages: Object.fromEntries(LANGS.filter((l) => l !== lang).map((l) => [l, getUrl({ path, lang: l })])) } : undefined,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: blogPosts } = await api.unlogged.sanity.post.list({});

  const allPaths = [
    ...ALL_PATHS,
    ...blogPosts.map((e) => `${PATHS.post}/${e.slug?.current}`),
    ...CERTIFICATIONS.map((e) => `${PATHS.certification}/${e.name}`),
  ];

  const entries = allPaths.flatMap((path) => [createEntry(path), ...LANGS.map((lang) => createEntry(path, lang))]);
  return [createEntry(ENDPOINTS.resume), ...entries];
}
