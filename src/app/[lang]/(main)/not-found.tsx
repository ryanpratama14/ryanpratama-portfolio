"use client";

import { SquareX } from "lucide-react";
import { usePathname } from "next/navigation";

import { getLang, getLangFromPath, validateMatchedLang } from "@/internationalization/functions";

/**
 * Segment `notFound()` UI under `(main)`.
 * Layout already provides Profile / Message; this only renders the 404 body.
 * Lang comes from the pathname because `not-found` does not receive `params`.
 */
export default function NotFound() {
  const pathname = usePathname();
  const lang = validateMatchedLang(getLangFromPath(pathname));
  const { s } = getLang(lang);

  return (
    <article className="flex flex-col md:gap-2 justify-center items-center text-center">
      <SquareX size={250} />
      <h1 className="font-semibold">{s.SECTIONS.notFound}</h1>
    </article>
  );
}
