import { DEFAULT_LANG, LANGS, LANGUAGES } from "@/internationalization";
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
  const validateLang = (lang: Lang | null | undefined | string) => z.enum(LANGS).safeParse(lang).data;
  const validateMatchedLang = (lang: Lang | null | undefined | string) => validateLang(lang) ?? DEFAULT_LANG;

  const getLangFromPath = (path: string) => validateLang(path.split("/")[1]);
  const isLangMissing = (path: string) => LANGS.every((lang) => !path.startsWith(`/${lang}/`) && path !== `/${lang}`);

  const changeLang = (targetLang: Lang, path: string) => {
    if (!path) return "/";
    const segments = path.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  return { validateLang, validateMatchedLang, getLangFromPath, isLangMissing, changeLang };
};
