"use server";

import { cookies, draftMode } from "next/headers";

import { COOKIES } from "@/app/urls";
import type { Lang } from "@/types";

export const setCookie = async (name: string, value: string) => {
  (await cookies()).set(name, value, { httpOnly: true, sameSite: "lax" });
};

export const setCookieLang = async (lang: Lang) => {
  (await cookies()).set(COOKIES.lang, lang, { httpOnly: true, sameSite: "lax" });
};

export async function disableDraftMode() {
  const disable = (await draftMode()).disable();
  const delay = new Promise((resolve) => setTimeout(resolve, 1000));
  await Promise.allSettled([disable, delay]);
}
