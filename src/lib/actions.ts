"use server";

import type { Lang } from "@/types";
import { cookies } from "next/headers";

export const setCookieLang = async (lang: Lang) => {
  cookies().set("lang", lang, { httpOnly: true, sameSite: "lax", secure: true });
};
