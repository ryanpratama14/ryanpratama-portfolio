import { env } from "@/env";
import { PERSONALS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { ReadonlyURLSearchParams } from "next/navigation";

const addPath = ({ path, lang }: { path: string; lang?: Lang }) => `${lang ? `/${lang}` : ""}${path === PATHS.main ? "" : path}`;
const getUrl = ({ path, lang, type = "production" }: { path: string; lang?: Lang; type?: keyof typeof BASE_URL }) =>
  `${BASE_URL[type]}${addPath({ path, lang })}`;
const isExternalLink = (href: string) => href.startsWith("http") || href.includes(ENDPOINTS.resume) || href.includes(PERSONALS.mailTo);

const getBaseUrl = () => {
  if (IS_CLIENT) return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

const createUrl = (path: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${path}${queryString}`;
};

const IS_CLIENT = typeof window !== "undefined";
const BASE_URL = { development: getBaseUrl(), production: env.NEXT_PUBLIC_URL };
const ENDPOINTS = { trpc: "/api/trpc", ogImage: "/assets/opengraph.png", sitemap: "/sitemap.xml", resume: "/resume.pdf" };
const COOKIES = { lang: "lang" };
const HEADERS = { lang: "x-lang", path: "x-pathname" };
const PATHS = { main: "/", certification: "/certification", post: "/blog", resume: "/resume" };
const ALL_PATHS = Object.values(PATHS).flat();
const URLS = {
  trpc: getUrl({ path: ENDPOINTS.trpc, type: "development" }),
  ogImage: getUrl({ path: ENDPOINTS.ogImage }),
  sitemap: getUrl({ path: ENDPOINTS.sitemap }),
  resume: getUrl({ path: ENDPOINTS.resume }),
};

export { addPath, getBaseUrl, getUrl, isExternalLink, createUrl, URLS, BASE_URL, ENDPOINTS, COOKIES, HEADERS, ALL_PATHS, PATHS, IS_CLIENT };
