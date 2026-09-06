import * as v from "valibot";

import { PATHS, stripLangFromPath } from "@/app/urls";
import { DEFAULT_LANG, LANGS, LANGUAGES } from "@/internationalization";
import { pluralizeRu } from "@/internationalization/helpers";
import type { Lang, LangTarget } from "@/types";

const getLang = (lang: Lang) => {
  const { t, ...rest } = LANGUAGES[lang];
  const { s, d } = t;
  const { locale, currency } = rest;

  const isJapanese = lang === "ja";
  const isRussian = lang === "ru";
  const isDefaultLang = lang === DEFAULT_LANG;

  const formatMonth = (date: Date) => date.toLocaleDateString(locale, { month: "short", year: "numeric" });
  const formatDate = (date: Date) => date.toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
  const formatCurrency = (amount: number) => new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  const formatNumber = (value: number, options?: Intl.NumberFormatOptions) => value.toLocaleString(locale, options);

  const formatCounter = (value: string | number, unit: string) => {
    const formatted = typeof value === "number" ? formatNumber(value) : value;
    return isJapanese ? `${formatted}${unit}` : `${formatted} ${unit}`;
  };

  const formatList = (items: string[]) => {
    if (typeof Intl !== "undefined" && "ListFormat" in Intl) {
      return new Intl.ListFormat(locale, { style: "short", type: "unit" }).format(items);
    }
    return items.join(isJapanese ? "、" : " / ");
  };

  const formatDateRange = (from: Date, to: Date | null, presentLabel: string) => {
    const start = formatMonth(from);
    const end = to ? formatMonth(to) : presentLabel;
    return `${start}${isJapanese ? "〜" : " — "}${end}`;
  };

  const formatWorkPeriod = (location: string, type: string, from: Date, to: Date | null, presentLabel: string) => {
    const typeLabel = type ? ` (${isJapanese ? type : type.toLowerCase()})` : "";
    return `${location}${typeLabel} • ${formatDateRange(from, to, presentLabel)}`;
  };

  const formatYearsExperience = (years: number) => {
    const formatted = formatNumber(years, { minimumFractionDigits: 1 });
    if (isRussian) {
      const unit = pluralizeRu(years, "год", "года", "лет");
      return `${formatted} ${unit} опыта`;
    }
    return formatCounter(formatted, s.COUNTER.yearsExperience);
  };

  const formatAge = (age: number) => {
    if (isRussian) return formatCounter(age, pluralizeRu(age, "год", "года", "лет"));
    return formatCounter(age, s.COUNTER.age);
  };

  return {
    s,
    d,
    ...rest,
    splittedLocale: locale.split("-").join("_"),
    isJapanese,
    isRussian,
    isDefaultLang,
    currentTime: new Date().toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" }),

    formatMonth,
    formatDate,
    formatCurrency,
    formatNumber,
    formatCounter,
    formatList,
    formatDateRange,
    formatWorkPeriod,
    formatYearsExperience,
    formatAge,
  };
};

const validateLang = (lang: LangTarget) => {
  const result = v.safeParse(v.picklist(LANGS), lang);
  return result.success ? result.output : undefined;
};

const validateMatchedLang = (lang: LangTarget) => validateLang(lang) ?? DEFAULT_LANG;

const getLangFromPath = (path: string) => validateLang(path.split("/").filter(Boolean)[0]);

const isLangMissing = (path: string) => LANGS.every((lang) => !path.startsWith(`/${lang}/`) && path !== `/${lang}`);

const changeLang = (lang: Lang, path: string) => {
  const pathWithoutLang = stripLangFromPath(path || PATHS.main);
  return pathWithoutLang === PATHS.main ? `/${lang}` : `/${lang}${pathWithoutLang}`;
};

export { changeLang, getLang, getLangFromPath, isLangMissing, validateLang, validateMatchedLang };
