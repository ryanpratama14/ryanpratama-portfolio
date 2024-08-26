import { env } from "@/env";
import { CERTIFICATIONS } from "@/lib/constants";
import { getBaseUrl } from "@/lib/utils";
import type { Lang } from "@/types";

const URL = { DEVELOPMENT: getBaseUrl(), PRODUCTION: env.NEXT_PUBLIC_URL };

export const COOKIES = { lang: "lang" };

export const ENDPOINTS = {
  TRPC: "/api/trpc",
  OG_IMAGE: "/assets/opengraph.png",
  CERTIFICATION: (name: string) => `/certification/${name}`,
};

export const URLS = {
  BASE: URL.DEVELOPMENT,
  BASE_TRPC: `${URL.DEVELOPMENT}${ENDPOINTS.TRPC}`,
  BASE_LANG: (lang: Lang) => `${URL.DEVELOPMENT}/${lang}`,
  FULL: (path: string) => `${URL.DEVELOPMENT}${path}`,

  PRODUCTION: {
    BASE: URL.PRODUCTION,
    BASE_LANG: (lang: Lang) => `${URL.PRODUCTION}/${lang}`,
    FULL: (path: string) => `${URL.PRODUCTION}${path}`,
    OG_IMAGE: `${URL.PRODUCTION}${ENDPOINTS.OG_IMAGE}`,
  },
};

export const PATHS = {
  main: "/",
  certification: CERTIFICATIONS.map((e) => ENDPOINTS.CERTIFICATION(e.name)),
};

export const ALL_PATHS = Object.values(PATHS).flat();
