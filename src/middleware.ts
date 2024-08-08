import { DEFAULT_LANG, LANGS } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

const isLangMissing = (path: string) => LANGS.every((lang) => !path.startsWith(`/${lang}/`) && path !== `/${lang}`);

const getLangFromPath = (path: string) => {
  const lang = path.split("/")[1];
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
  const path = request.nextUrl.pathname;
  const storedLang = request.cookies.get("lang")?.value as Lang | undefined;
  const lang = getLangFromPath(path) ?? storedLang ?? getLang(request);
  const newUrl = new URL(`/${lang}${path.startsWith("/") ? "" : "/"}${path}`, request.url);
  if (isLangMissing(path)) return NextResponse.redirect(newUrl);
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|resume.pdf|manifest.json|icons/*|assets/*|favicons/*).*)"],
};
