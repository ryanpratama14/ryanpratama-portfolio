import type { LANGS } from "@/internationalization";
import type { en } from "@/internationalization/dictionaries/en";
import type { useLang } from "@/internationalization/functions";
import type { StaticImageData } from "next/image";

export type Lang = (typeof LANGS)[number];
export type LangTarget = Lang | null | undefined | string;
export type Dictionary = typeof en;
export type DictionaryStatic = typeof en.s;
export type DictionaryDynamic = typeof en.d;
export type Language = ReturnType<typeof useLang>;
export type LanguageConst = ReturnType<typeof useLang>["const"];
export type LanguageFunc = ReturnType<typeof useLang>["func"];

export type Profile = { href?: string; icon: string; label: string };
export type Contact = { href: string; label: string; icon: string };
export type Project = { key: keyof DictionaryStatic["PROJECTS"]; label: string; href: string; src: StaticImageData };
export type Certification = { name: string; src: StaticImageData; alt: string; label: string };
export type TechStack = Record<keyof DictionaryStatic["MENUS"]["TECH_STACKS"], { label: string; icon: string; icon2?: string }[]>;
export type Other = { languages: (keyof DictionaryStatic["PERSONAL_DATA"]["languages"])[]; education: History[] };

export type History = {
  hasSquarePhoto?: boolean;
  key: keyof DictionaryStatic["PERSONAL_DATA"]["history"];
  src: StaticImageData;
  href: string;
  since: Date;
  till: Date | null;
};

export type Children = { children: React.ReactNode };
export type ParamsLang = { params: { lang: Lang } };
export type ChildrenParamsLang = Children & ParamsLang;
