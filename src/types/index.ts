import type { LANGS, useLang } from "@/lib/internationalization";
import type { IconifyIcon } from "@iconify/react/dist/iconify.js";
import type { StaticImageData } from "next/image";
import type { en } from "#/dictionaries/en";

export type Lang = (typeof LANGS)[number];
export type Dictionary = typeof en;
export type DictionaryStatic = typeof en.s;
export type DictionaryDynamic = typeof en.d;
export type Language = ReturnType<typeof useLang>;
export type LanguageStatic = ReturnType<typeof useLang>["statics"];
export type LanguageFunction = ReturnType<typeof useLang>["functions"];

export type Profile = { href?: string; icon: IconifyIcon | string; label: string };
export type Contact = { href: string; label: string; icon: IconifyIcon | string };
export type Project = { label: string; desc: string; href: string; lists: string[]; src: StaticImageData };
export type Certification = { name: string; src: StaticImageData; alt: string; label: string };
export type Other = { languages: (keyof DictionaryStatic["PERSONAL_DATA"]["languages"])[]; education: History[] };

export type History = {
  hasSquarePhoto?: boolean;
  key: keyof DictionaryStatic["PERSONAL_DATA"]["history"];
  src: StaticImageData;
  href: string;
  since: Date;
  till: Date | null;
  duty?: string[];
};

export type TechStack = Record<
  keyof DictionaryStatic["MENUS"]["TECH_STACKS"],
  { label: string; icon: IconifyIcon | string; icon2?: IconifyIcon | string }[]
>;
