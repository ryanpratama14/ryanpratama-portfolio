"use server";

import { COOKIES, HEADERS } from "@/app/urls";
import { validateMatchedLang } from "@/internationalization/functions";
import type { Lang, LangTarget } from "@/types";
import { cookies, headers } from "next/headers";

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
    path: (await headers()).get(HEADERS.path) ?? "",
    lang: validateMatchedLang((await headers()).get(HEADERS.lang)),
  };
};
