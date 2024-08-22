import type { Dictionary, Lang } from "@/types";
import { en } from "#/dictionaries/en";
import { ja } from "#/dictionaries/ja";
import { ru } from "#/dictionaries/ru";
type Language = Record<Lang, { flag: string; label: string; t: Dictionary; locale: string; lang: Lang; currency: string }>;

export const LANGS = ["ja", "en", "ru"] as const;
export const DEFAULT_LANG: Lang = "en";
export const LANGUAGES: Language = {
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", currency: "USD", t: en },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", currency: "JPY", t: ja },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", currency: "RUR", t: ru },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
