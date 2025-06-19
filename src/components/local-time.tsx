"use client";

import type { ComponentProps } from "react";
import { getLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { Lang } from "@/types";

type Props = ComponentProps<"small"> & { date: Date; lang: Lang };

export default function LocalTime({ lang, date, className, ...rest }: Props) {
  const { locale } = getLang(lang);

  const fullDate = date.toLocaleDateString(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });

  return (
    <small {...rest} className={cn(className)}>
      {fullDate}
    </small>
  );
}
