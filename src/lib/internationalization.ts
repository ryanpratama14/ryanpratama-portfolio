import { en } from "@/lib/dictionaries/en";
import { ja } from "@/lib/dictionaries/ja";
import { ru } from "@/lib/dictionaries/ru";
import type { Lang, Language } from "@/types";

export const LANGS = ["ja", "en", "ru"] as const;
export const LANGUAGES: Language = {
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", s: en.static, d: en.dynamic },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", s: ja.static, d: ja.dynamic },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", s: ru.static, d: ru.dynamic },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
export const DEFAULT_LANG: Lang = "en";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LANG];
export const useLanguage = (lang: Lang) => LANGUAGES[lang];
