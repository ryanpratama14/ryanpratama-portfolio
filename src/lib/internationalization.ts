import { en, en_dynamic } from "@/lib/dictionaries/en";
import { ja, ja_dynamic } from "@/lib/dictionaries/ja";
import { ru, ru_dynamic } from "@/lib/dictionaries/ru";
import type { Lang, Language } from "@/types";

export const LANGS = ["ja", "en", "ru"] as const;
export const LANGUAGES: Language = {
  // t_dynamic can't be passed to a client component
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", t: en, t_dynamic: en_dynamic },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", t: ja, t_dynamic: ja_dynamic },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", t: ru, t_dynamic: ru_dynamic },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
export const DEFAULT_LANG: Lang = "en";
export const DEFAULT_LANGUAGE = LANGUAGES[DEFAULT_LANG];
export const useLanguage = (lang: Lang) => LANGUAGES[lang];
