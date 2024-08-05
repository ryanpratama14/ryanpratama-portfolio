import { DEFAULT_LANG, LANGS } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

const getLangFromPathname = (pathname: string) => {
  const lang = pathname.split("/")[1];
  const validation = z.enum(LANGS).safeParse(lang);
  if (validation.success) return validation.data;
  return undefined;
};

const getLang = (request: NextRequest) => {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get("accept-language");
  if (acceptLanguage) headers.set("accept-language", acceptLanguage.replaceAll("_", "-"));
  const headersObject = Object.fromEntries(headers.entries());
  const languages = new Negotiator({ headers: headersObject }).languages();
  return match(languages, LANGS, DEFAULT_LANG) as Lang;
};

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  const storedLang = request.cookies.get("lang")?.value as Lang | undefined;
  const lang: Lang = getLangFromPathname(pathname) ?? storedLang ?? getLang(request);
  const pathnameMissing = LANGS.every((lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`);
  if (pathnameMissing) {
    const newPath = `/${lang}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
    return NextResponse.redirect(new URL(newPath, request.url));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|resume.pdf|manifest.json|icons/*|assets/*|favicons/*).*)"],
};
