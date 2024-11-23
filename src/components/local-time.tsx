"use client";

import { IS_CLIENT } from "@/app/urls";
import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";

export default function LocalTime({ lang, date }: { date: Date; lang: Lang }) {
  if (!IS_CLIENT) return null;

  const { locale } = useLang(lang);

  const fullDate = date.toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return fullDate;
}
