import { getBaseUrl } from "@/lib/functions";
import type { DictionaryDynamic, DictionaryStatic, Lang } from "@/types";
import { en } from "#/dictionaries/en";
import { ja } from "#/dictionaries/ja";
import { ru } from "#/dictionaries/ru";

export const LANGS = ["ja", "en", "ru"] as const;

export const LANGUAGES: Record<Lang, { flag: string; label: string; s: DictionaryStatic; d: DictionaryDynamic; locale: string; lang: Lang }> = {
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", s: en.static, d: en.dynamic },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", s: ja.static, d: ja.dynamic },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", s: ru.static, d: ru.dynamic },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
export const DEFAULT_LANG: Lang = "en";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LANG];

export const useLanguage = (lang: Lang) => {
  const { d, ...rest } = LANGUAGES[lang];
  const isJapanese = lang === "ja";
  const baseUrl = getBaseUrl(lang);

  return { ...rest, isJapanese, baseUrl };
};

export const useLanguageFn = (lang: Lang) => {
  const { d, locale } = LANGUAGES[lang];
  const formatDate = (date: Date) => date.toLocaleDateString(locale, { month: "short", year: "numeric" });
  const changeLang = (targetLang: Lang, path: string): string => {
    if (!path) return "/";
    const segments = path.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  return { d, formatDate, changeLang };
};
