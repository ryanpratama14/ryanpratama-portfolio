import { env } from "@/env";
import { getBaseUrl } from "@/lib/utils";
import type { Lang } from "@/types";

export const COOKIES = {
  lang: "lang",
};

export const ENDPOINTS = {
  trpc: "/api/trpc",
  certification: (name: string) => `/certification/${name}`,
};

export const HEADERS = {
  lang: "x-lang",
};

const URL = {
  DEVELOPMENT: getBaseUrl(),
  PRODUCTION: env.NEXT_PUBLIC_URL,
};

export const URLS = {
  BASE: URL.DEVELOPMENT,
  BASE_TRPC: `${URL.DEVELOPMENT}${ENDPOINTS.trpc}`,
  BASE_LANG: (lang: Lang) => `${URL.DEVELOPMENT}/${lang}`,
  FULL: (path: string) => `${URL.DEVELOPMENT}${path}`,

  PRODUCTION: {
    BASE: URL.PRODUCTION,
    BASE_LANG: (lang: Lang) => `${URL.PRODUCTION}/${lang}`,
    FULL: (path: string) => `${URL.PRODUCTION}${path}`,
    OG_IMAGE: `${URL.PRODUCTION}/assets/opengraph.png`,
  },
};
