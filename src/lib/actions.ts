"use server";

import { useLangHelper } from "@/internationalization/functions";
import { useUrl } from "@/lib/constants/urls";
import type { Lang, LangTarget } from "@/types";
import { cookies, headers } from "next/headers";

const { COOKIES, HEADERS } = useUrl();
const { validateMatchedLang } = useLangHelper();

export const setCookie = async (name: string, value: string) => {
  cookies().set(name, value, { httpOnly: true, sameSite: "lax" });
};

export const setCookieLang = async (lang: Lang) => {
  cookies().set(COOKIES.lang, lang, { httpOnly: true, sameSite: "lax" });
};

export const getCookieLang = async () => {
  return cookies().get(COOKIES.lang)?.value as LangTarget;
};

export const getHeaders = async () => {
  return {
    path: headers().get(HEADERS.path) ?? "",
    lang: validateMatchedLang(headers().get(HEADERS.lang)),
  };
};
