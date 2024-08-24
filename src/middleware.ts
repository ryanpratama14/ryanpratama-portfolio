import { DEFAULT_LANG, LANGS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { COOKIES, HEADERS } from "@/lib/constants";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const { validateMatchedLang, validateLang } = useLanguageHelper();

const getLang = (req: NextRequest) => {
  const headers = new Headers(req.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return validateMatchedLang(match(languages, LANGS, DEFAULT_LANG));
};

export function middleware(req: NextRequest) {
  const searchParamsLang = validateLang(req.nextUrl.searchParams.get("lang"));
  const storedLang = validateLang(req.cookies.get(COOKIES.lang)?.value);
  const lang = searchParamsLang ?? storedLang ?? getLang(req);

  if (!searchParamsLang) {
    req.nextUrl.searchParams.set("lang", lang);
    return NextResponse.redirect(req.nextUrl);
  }

  const response = NextResponse.next();
  response.headers.set(HEADERS.lang, lang);
  return response;
}

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
