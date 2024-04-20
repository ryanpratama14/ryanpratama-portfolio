import { en } from "@/lib/dictionaries/en";
import { ja } from "@/lib/dictionaries/ja";
import { ru } from "@/lib/dictionaries/ru";
import type { Dictionary, Lang } from "@/types";

export const LANGS = ["ja", "en", "ru"] as const;
export const DEFAULT_LANG: Lang = "en";
export const DICTIONARIES = { en, ja, ru };
export const DEFAULT_DICTIONARY = DICTIONARIES[DEFAULT_LANG];

export const LANGUAGES: Record<Lang, { label: string; value: Lang; flag: string; locale: string; dictionary: Dictionary }> = {
  en: {
    flag: "🇺🇸",
    label: "English",
    value: "en",
    dictionary: DICTIONARIES.en,
    locale: "en-US",
  },
  ja: {
    flag: "🇯🇵",
    label: "日本語",
    value: "ja",
    dictionary: DICTIONARIES.ja,
    locale: "ja-JP",
  },
  ru: {
    flag: "🇷🇺",
    label: "Русский",
    value: "ru",
    dictionary: DICTIONARIES.ru,
    locale: "ru-RU",
  },
};

export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, { dictionary, ...e }]) => ({ ...e }));

export const getDictionary = (lang: Lang): Dictionary => LANGUAGES[lang].dictionary;
