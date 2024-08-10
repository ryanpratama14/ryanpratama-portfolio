import { getBaseUrl } from "@/lib/functions";
import type { Dictionary, Lang } from "@/types";
import { en } from "#/dictionaries/en";
import { ja } from "#/dictionaries/ja";
import { ru } from "#/dictionaries/ru";

export const LANGS = ["ja", "en", "ru"] as const;
export const LANGUAGES: Record<Lang, { flag: string; label: string; t: Dictionary; locale: string; lang: Lang; currency: string }> = {
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", currency: "USD", t: en },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", currency: "JPY", t: ja },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", currency: "RUR", t: ru },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
export const DEFAULT_LANG: Lang = "en";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LANG];

export const useLanguage = (lang: Lang) => {
  const { t, ...rest } = LANGUAGES[lang];
  const isJapanese = lang === "ja";
  const isDefaultLang = lang === DEFAULT_LANG;
  const baseUrl = getBaseUrl(lang);

  return { ...rest, s: t.static, isJapanese, isDefaultLang, baseUrl };
};

export const useLanguageFn = (lang: Lang) => {
  const { t, locale, currency } = LANGUAGES[lang];
  const formatMonth = (date: Date) => date.toLocaleDateString(locale, { month: "short", year: "numeric" });
  const formatDate = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  const formatCurrency = (amount: number) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  const getUrl = (path: string) => `${getBaseUrl()}${path}`;

  return { d: t.dynamic, formatMonth, getUrl, formatCurrency, formatDate };
};
