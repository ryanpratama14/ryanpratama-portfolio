import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { COOKIES } from "@/lib/constants";
import type { Lang } from "@/types";
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
  const storedLang = req.cookies.get(COOKIES.lang)?.value as Lang | undefined;
  const lang = getLangFromPath(path) ?? storedLang ?? getLang(req);
  const newUrl = new URL(`/${lang}${path.startsWith("/") ? "" : "/"}${path}`, req.url);
  const response = isLangMissing(path) ? NextResponse.redirect(newUrl) : NextResponse.next();
  response.cookies.set(COOKIES.lang, !validateLang(lang) ? getLang(req) : lang, { httpOnly: true, sameSite: "lax" });
  return response;
};

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
