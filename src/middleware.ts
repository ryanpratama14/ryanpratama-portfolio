import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { useLangHelper } from "@/internationalization/functions";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const { validateLang, validateMatchedLang, getLangFromPath, isLangMissing } = useLangHelper();

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
};

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
