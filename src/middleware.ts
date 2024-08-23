import { DEFAULT_LANG, LANGS } from "@/i18n.config";
import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const i18n = createMiddleware({ locales: LANGS, defaultLocale: DEFAULT_LANG, localeDetection: true });
  const response = i18n(req);
  return response;
};

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
