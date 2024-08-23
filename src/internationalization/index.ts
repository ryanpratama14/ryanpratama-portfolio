import { en } from "@/internationalization/dictionaries/en";
import { ja } from "@/internationalization/dictionaries/ja";
import { ru } from "@/internationalization/dictionaries/ru";
import type { Dictionary, Lang } from "@/types";

export const LANGS = ["ja", "en", "ru"] as const;
export const DEFAULT_LANG: Lang = "en";
export const LANGUAGES: Record<Lang, { flag: string; label: string; t: Dictionary; locale: string; lang: Lang; currency: string }> = {
  en: { flag: "🇺🇸", label: "English", lang: "en", locale: "en-US", currency: "USD", t: en },
  ja: { flag: "🇯🇵", label: "日本語", lang: "ja", locale: "ja-JP", currency: "JPY", t: ja },
  ru: { flag: "🇷🇺", label: "Русский", lang: "ru", locale: "ru-RU", currency: "RUR", t: ru },
};
export const LANGUAGE_OPTIONS = Object.entries(LANGUAGES).map(([_, e]) => ({ ...e }));
