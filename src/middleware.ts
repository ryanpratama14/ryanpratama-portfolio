import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { COOKIES, HEADERS } from "@/lib/constants";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const { getLangFromPath, isLangMissing, validateMatchedLang, validateLang } = useLanguageHelper();

const getLang = (req: NextRequest) => {
  const headers = new Headers(req.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return validateMatchedLang(match(languages, LANGS, DEFAULT_LANG));
};

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const lang = getLangFromPath(path) ?? validateLang(req.cookies.get(COOKIES.lang)?.value) ?? getLang(req);

  const headers = new Headers(req.headers);
  const newUrl = new URL(`/${lang}${path.startsWith("/") ? "" : "/"}${path}`, req.url);
  headers.set(HEADERS.lang, lang);

  const response = isLangMissing(path) ? NextResponse.redirect(newUrl) : NextResponse.next({ request: { headers } });
  return response;
};

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
