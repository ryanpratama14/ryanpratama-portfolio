import { ALL_PATHS, ENDPOINTS, PATHS, getUrl } from "@/app/urls";
import { LANGS } from "@/internationalization";
import { CERTIFICATIONS } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/client";
import { GetPosts } from "@/sanity/lib/queries";
import type { GetPostsResult } from "@/sanity/types";
import type { Lang } from "@/types";
import type { MetadataRoute } from "next";

const createEntry = (path: string, lang?: Lang) => ({
  url: getUrl({ path, lang }),
  lastModified: new Date(),
  alternates: lang ? { languages: Object.fromEntries(LANGS.filter((l) => l !== lang).map((l) => [l, getUrl({ path, lang: l })])) } : undefined,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await sanityFetch<GetPostsResult>({ query: GetPosts });

  const allPaths = [
    ...ALL_PATHS,
    ...blogPosts.map((e) => `${PATHS.blog}/${e.slug?.current}`),
    ...CERTIFICATIONS.map((e) => `${PATHS.certification}/${e.name}`),
  ];

  const entries = allPaths.flatMap((path) => [createEntry(path), ...LANGS.map((lang) => createEntry(path, lang))]);
  return [createEntry(ENDPOINTS.resume), ...entries];
}
