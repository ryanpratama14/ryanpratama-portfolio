import { en } from "@/lib/dictionaries/en";
import { ja } from "@/lib/dictionaries/ja";
import { ru } from "@/lib/dictionaries/ru";
import type { Dictionary, Lang } from "@/types";

export const LANGS = ["ja", "en", "ru"] as const;
export const LANGUAGES: Record<Lang, { flag: string; label: string; t: Dictionary; locale: string; lang: Lang }> = {
  en: { flag: "🇺🇸", label: "English", lang: "en", t: en, locale: "en-US" },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", t: ja, locale: "ja-JP" },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", t: ru, locale: "ru-RU" },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
export const DEFAULT_LANG: Lang = "en";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LANG];
export const useLanguage = (lang: Lang) => LANGUAGES[lang];
