import { DEFAULT_LANG, LANGS, LANGUAGES } from "@/internationalization";
import type { Lang, LangTarget } from "@/types";
import { z } from "zod";

const useLang = (lang: Lang) => {
  const { t, ...rest } = LANGUAGES[lang];
  const { s, d } = t;
  const { locale, currency } = rest;

  const isJapanese = lang === "ja";
  const isRussian = lang === "ru";
  const isDefaultLang = lang === DEFAULT_LANG;
  const currentTime = new Date().toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const splittedLocale = locale.split("-").join("_");

  const formatMonth = (date: Date) => date.toLocaleDateString(locale, { month: isJapanese ? "short" : "2-digit", year: "numeric" });
  const formatDate = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  const formatCurrency = (amount: number) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  const formatCounter = (counter: string) => (isJapanese ? counter : ` ${counter}`);

  const formatPostDate = ({ publishedAt, type }: { publishedAt: string | undefined; type: "long" | "short" }) => {
    const date = new Date(publishedAt ?? new Date());
    const isLong = type === "long";

    const fullDate = date.toLocaleDateString(locale, {
      month: isLong ? "long" : "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timeZoneName: "short",
    });

    return fullDate;
  };

  return {
    s,
    d,
    ...rest,
    splittedLocale,
    isJapanese,
    isRussian,
    isDefaultLang,
    currentTime,

    formatMonth,
    formatDate,
    formatPostDate,
    formatCurrency,
    formatCounter,
  };
};

const validateLang = (lang: LangTarget) => z.enum(LANGS).safeParse(lang).data;
const validateMatchedLang = (lang: LangTarget) => validateLang(lang) ?? DEFAULT_LANG;
const getLangFromPath = (path: string) => validateLang(path.split("/")[1]);
const isLangMissing = (path: string) => LANGS.every((lang) => !path.startsWith(`/${lang}/`) && path !== `/${lang}`);

const changeLang = (lang: Lang, path: string) => {
  if (!path) return "/";
  const segments = path.split("/");
  segments[1] = lang;
  return segments.join("/");
};

export { useLang, validateLang, validateMatchedLang, getLangFromPath, isLangMissing, changeLang };
