"use client";

import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";

export default function LocalTime({ lang, publishedAt }: { publishedAt: string | undefined; lang: Lang }) {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { formatLocalTime } = useLang(lang);
  return formatLocalTime({ timeZone, publishedAt });
}
