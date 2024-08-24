import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { HEADERS } from "@/lib/constants";
import type { Lang } from "@/types";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const { validateLang, getLangFromPath, isLangMissing } = useLanguageHelper();

const getLang = (request: NextRequest) => {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  if (languages.includes("*")) return DEFAULT_LANG;
  return match(languages, LANGS, DEFAULT_LANG) as Lang;
};

export const middleware = (request: NextRequest) => {
  const path = request.nextUrl.pathname;
  const lang = getLangFromPath(path) ?? validateLang(request.cookies.get("lang")?.value) ?? getLang(request);
  if (isLangMissing(path)) return NextResponse.redirect(new URL(`/${lang}${path.startsWith("/") ? "" : "/"}${path}`, request.url));
  const response = NextResponse.next();
  response.headers.set(HEADERS.lang, lang);
  return response;
};

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
