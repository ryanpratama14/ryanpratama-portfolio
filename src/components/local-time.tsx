"use client";

import { useLang } from "@/internationalization/functions";
import { cn } from "@/lib/utils";
import type { Lang } from "@/types";
import type { ComponentProps } from "react";

type Props = ComponentProps<"small"> & { date: Date; lang: Lang };

export default function LocalTime({ lang, date, className, ...rest }: Props) {
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

  return (
    <small {...rest} className={cn(className)}>
      {fullDate}
    </small>
  );
}
