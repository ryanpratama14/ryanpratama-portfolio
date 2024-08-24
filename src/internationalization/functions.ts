import { DEFAULT_LANG, LANGS, LANGUAGES } from "@/internationalization";
import { COOKIES } from "@/lib/constants";
import { createUrl } from "@/lib/utils";
import type { Lang } from "@/types";
import { z } from "zod";

export const useLanguage = (lang: Lang) => {
  const { t, ...rest } = LANGUAGES[lang];
  const { d, s } = t;
  const { locale, currency } = rest;

  // const
  const isJapanese = lang === "ja";
  const isRussian = lang === "ru";
  const isDefaultLang = lang === DEFAULT_LANG;
  const currentTime = new Date().toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  // func
  const formatMonth = (date: Date) => date.toLocaleDateString(locale, { month: "short", year: "numeric" });
  const formatDate = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  const formatCurrency = (amount: number) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  const formatCounter = (counter: string) => (isJapanese ? counter : ` ${counter}`);

  return {
    s,
    d,
    const: { ...rest, isJapanese, isRussian, isDefaultLang, currentTime },
    func: { formatMonth, formatDate, formatCurrency, formatCounter },
  };
};

export const useLanguageHelper = () => {
  const getLangFromPath = (path: string | null | undefined) => validateLang(path?.split("/")[1]);

  const validateLang = (lang: string | null | undefined) => z.enum(LANGS).safeParse(lang).data;
  const validateLangFromPath = (path: string | null | undefined) => validateMatchedLang(getLangFromPath(path));

  const validateMatchedLang = (matchedLang: string | null | undefined) => {
    const lang = validateLang(matchedLang);
    if (lang) return lang;
    return DEFAULT_LANG;
  };

  const changeLang = ({ targetLang, path, newParams }: { targetLang: Lang; path: string; newParams: URLSearchParams }) => {
    newParams.set(COOKIES.lang, targetLang);
    return createUrl(path, newParams);
  };

  return { validateLang, getLangFromPath, validateMatchedLang, changeLang, validateLangFromPath };
};
