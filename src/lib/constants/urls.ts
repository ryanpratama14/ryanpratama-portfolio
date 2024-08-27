import { env } from "@/env";
import { CERTIFICATIONS } from "@/lib/constants";
import type { Lang } from "@/types";
import type { ReadonlyURLSearchParams } from "next/navigation";

const isClient = typeof window !== "undefined";

export const useUrl = () => {
  const addPath = ({ path, lang }: { path: string | null; lang?: Lang }) => `${lang ? `/${lang}` : ""}${path ?? ""}`;
  const getUrl = ({ path, lang, type = "production" }: { path: string | null; lang?: Lang; type?: keyof typeof BASE_URL }) =>
    `${BASE_URL[type]}${addPath({ path, lang })}`;
  const isExternalLink = (href: string) => href.startsWith("http");
  const splitLocale = (locale: string) => locale.split("-").join("_");

  const getBaseUrl = () => {
    if (isClient) return `${window.location.origin}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`;
  };

  const createUrl = (path: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
    return `${path}${queryString}`;
  };

  const BASE_URL = { development: getBaseUrl(), production: env.NEXT_PUBLIC_URL };
  const ENDPOINTS = { trpc: "/api/trpc", opengraphImage: "/assets/opengraph.png", sitemap: "/sitemap.xml" };
  const COOKIES = { lang: "lang" };
  const HEADERS = { lang: "x-lang", path: "x-pathname" };
  const PATHS = { main: "/", certification: CERTIFICATIONS.map((e) => `/certification/${e.name}`) };
  const ALL_PATHS = Object.values(PATHS).flat();
  const URLS = {
    trpc: `${getBaseUrl()}${ENDPOINTS.trpc}`,
    openGraphImage: `${BASE_URL.production}${ENDPOINTS.opengraphImage}`,
    sitemap: `${BASE_URL.production}/${ENDPOINTS.sitemap}`,
  };

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
  };
};
