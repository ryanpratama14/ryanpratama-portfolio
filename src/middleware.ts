import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { HEADERS } from "@/app/urls";
import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { getLangFromPath, isLangMissing, validateLang, validateMatchedLang } from "@/internationalization/functions";

const getLang = (req: NextRequest) => {
  const headers = new Headers(req.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  if (languages.includes("*")) return DEFAULT_LANG;
  return validateMatchedLang(match(languages, LANGS, DEFAULT_LANG));
};

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const lang = getLangFromPath(path) ?? validateLang(req.cookies.get("lang")?.value) ?? getLang(req);
  if (isLangMissing(path)) return NextResponse.redirect(new URL(`/${lang}${path.startsWith("/") ? "" : "/"}${path}`, req.url));
  const res = NextResponse.next();
  res.headers.set(HEADERS.lang, lang);
  res.headers.set(HEADERS.path, path);
  return res;
};

export const config = { matcher: ["/((?!api|swagger|studio|_next|_vercel|.*\\..*).*)"] };
