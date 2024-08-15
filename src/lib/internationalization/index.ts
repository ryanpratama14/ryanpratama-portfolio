import { getBaseUrl } from "@/lib/functions";
import type { Dictionary, Lang } from "@/types";
import { z } from "zod";
import { en } from "#/dictionaries/en";
import { ja } from "#/dictionaries/ja";
import { ru } from "#/dictionaries/ru";

export const LANGS = ["ja", "en", "ru"] as const;
export const DEFAULT_LANG: Lang = "en";
export const LANGUAGES: Record<Lang, { flag: string; label: string; t: Dictionary; locale: string; lang: Lang; currency: string }> = {
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", currency: "USD", t: en },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", currency: "JPY", t: ja },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", currency: "RUR", t: ru },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));

export const useLanguage = (lang: Lang) => {
  const { t, ...rest } = LANGUAGES[lang];
  const { s } = t;

  const { locale } = rest;
  const isJapanese = lang === "ja";
  const isDefaultLang = lang === DEFAULT_LANG;
  const baseUrl = getBaseUrl(lang);
  const currentTime = new Date().toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return { ...rest, s, isJapanese, isDefaultLang, baseUrl, currentTime };
};

export const useLanguageFn = (lang: Lang) => {
  const { t, ...rest } = LANGUAGES[lang];
  const { d } = t;

  const { locale, currency } = rest;
  const formatMonth = (date: Date) => date.toLocaleDateString(locale, { month: "short", year: "numeric" });
  const formatDate = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  const formatCurrency = (amount: number) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);

  return { ...rest, d, formatMonth, formatDate, formatCurrency };
};

export const useLanguageHelper = () => {
  const validateTargetLang = (targetLang: string | undefined) => z.enum(LANGS).safeParse(targetLang).data;

  const isLangMissing = (path: string) => LANGS.every((lang) => !path.startsWith(`/${lang}/`) && path !== `/${lang}`);
  const getLangFromPath = (path: string) => validateTargetLang(path.split("/")[1]);
  const validateMatchedLang = (matchedLang: string) => {
    const lang = validateTargetLang(matchedLang);
    if (lang) return lang;
    return DEFAULT_LANG;
  };

  return { isLangMissing, getLangFromPath, validateMatchedLang };
};
