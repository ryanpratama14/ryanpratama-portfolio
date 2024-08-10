import type { Lang, Language } from "@/types";
import { en } from "./dictionaries/en";
import { ja } from "./dictionaries/ja";
import { ru } from "./dictionaries/ru";

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
