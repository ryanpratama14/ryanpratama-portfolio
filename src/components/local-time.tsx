"use client";

import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";

export default function LocalTime({ lang, dateString, type }: { type: "long" | "short"; dateString: string | undefined; lang: Lang }) {
  const { locale } = useLang(lang);

  const date = new Date(dateString ?? new Date());
  const isLong = type === "long";

  const fullDate = date.toLocaleDateString(locale, {
    month: isLong ? "long" : "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return fullDate;
}
