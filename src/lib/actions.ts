"use server";

import { COOKIES } from "@/lib/constants";
import type { Lang } from "@/types";
import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string) => {
  cookies().set(name, value, { httpOnly: true, sameSite: "lax" });
};

export const setCookieLang = async (lang: Lang) => {
  cookies().set(COOKIES.lang, lang, { httpOnly: true, sameSite: "lax" });
};

export const getCookieLang = async () => {
  return cookies().get(COOKIES.lang)?.value as Lang | undefined;
};
