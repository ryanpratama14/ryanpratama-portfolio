import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { HEADERS } from "@/app/urls";
import { getLangFromPath, isLangMissing, validateMatchedLang } from "@/internationalization/functions";

export const middleware = (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const lang = getLangFromPath(path) ?? validateMatchedLang(req.cookies.get("lang")?.value);
  if (isLangMissing(path)) return NextResponse.redirect(new URL(`/${lang}${path.startsWith("/") ? "" : "/"}${path}`, req.url));
  const res = NextResponse.next();
  res.headers.set(HEADERS.lang, lang);
  res.headers.set(HEADERS.path, path);
  return res;
};

export const config = { matcher: ["/((?!api|studio|_next|_vercel|.*\\..*).*)"] };
