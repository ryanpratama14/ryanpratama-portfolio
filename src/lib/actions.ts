"use server";

import { cookies, headers } from "next/headers";
import { COOKIES, HEADERS, PATHS } from "@/app/urls";
import { validateMatchedLang } from "@/internationalization/functions";
import type { Lang, LangTarget } from "@/types";

export const setCookie = async (name: string, value: string) => {
  (await cookies()).set(name, value, { httpOnly: true, sameSite: "lax" });
};

export const setCookieLang = async (lang: Lang) => {
  (await cookies()).set(COOKIES.lang, lang, { httpOnly: true, sameSite: "lax" });
};

export const getCookieLang = async () => {
  return (await cookies()).get(COOKIES.lang)?.value as LangTarget;
};

export const getHeaders = async () => {
  return {
    path: (await headers()).get(HEADERS.path) || PATHS.main,
    lang: validateMatchedLang((await headers()).get(HEADERS.lang)),
  };
};
