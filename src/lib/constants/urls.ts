import { env } from "@/env";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { ReadonlyURLSearchParams } from "next/navigation";

const addPath = ({ path, lang }: { path: string; lang?: Lang }) => `${lang ? `/${lang}` : ""}${path ?? ""}`;
const getUrl = ({ path, lang, type = "production" }: { path: string; lang?: Lang; type?: keyof typeof BASE_URL }) =>
  `${BASE_URL[type]}${addPath({ path, lang })}`;
const isExternalLink = (href: string) => href.startsWith("http");
const splitLocale = (locale: string) => locale.split("-").join("_");

const getBaseUrl = () => {
  if (IS_CLIENT) return `${window.location.origin}`;
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
const ENDPOINTS = { trpc: "/api/trpc", ogImage: "/og.png", sitemap: "/sitemap.xml" };
const COOKIES = { lang: "lang" };
const HEADERS = { lang: "x-lang", path: "x-pathname" };
const PATHS = { main: "/", certification: CERTIFICATIONS.map((e) => `/certification/${e.name}`) };
const ALL_PATHS = Object.values(PATHS).flat();
const URLS = {
  trpc: getUrl({ path: ENDPOINTS.trpc, type: "development" }),
  ogImage: getUrl({ path: ENDPOINTS.ogImage }),
  sitemap: getUrl({ path: ENDPOINTS.sitemap }),
};

export const useUrl = () => {
  return {
    addPath,
    getBaseUrl,
    getUrl,
    isExternalLink,
    splitLocale,
    createUrl,

    URLS,
    BASE_URL,
    ENDPOINTS,
    COOKIES,
    HEADERS,
    ALL_PATHS,
    PATHS,
    IS_CLIENT,
  };
};
