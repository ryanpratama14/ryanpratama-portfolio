"use server";

import { COOKIES } from "@/lib/constants/helpers";
import type { Lang, LangTarget } from "@/types";
import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string) => {
  cookies().set(name, value, { httpOnly: true, sameSite: "lax" });
};

export const setCookieLang = async (lang: Lang) => {
  cookies().set(COOKIES.lang, lang, { httpOnly: true, sameSite: "lax" });
};

export const getCookieLang = async () => {
  return cookies().get(COOKIES.lang)?.value as LangTarget;
};
