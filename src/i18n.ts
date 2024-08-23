import { LANGS } from "@/i18n.config";
import type { Lang } from "@/types";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!LANGS.includes(locale as Lang)) notFound();
  return { messages: (await import(`./lib/dictionaries/dynamic/${locale}.json`)).default };
});
