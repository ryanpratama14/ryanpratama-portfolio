import type { LANGS, useLanguage, useLanguageFn } from "@/lib/internationalization";
import type { IconifyIcon } from "@iconify/react/dist/iconify.js";
import type { StaticImageData } from "next/image";
import type { en } from "#/dictionaries/en";

export type Lang = (typeof LANGS)[number];
export type Dictionary = typeof en;
export type DictionaryStatic = typeof en.s;
export type DictionaryDynamic = typeof en.d;
export type Language = ReturnType<typeof useLanguage>;
export type LanguageFn = ReturnType<typeof useLanguageFn>;

export type Contact = {
  href: string;
  label: string;
  icon: IconifyIcon | string;
};

export type Experience = {
  src: StaticImageData;
  label: string;
  link: string;
  since: Date;
  location: keyof DictionaryStatic["LOCATIONS"];
  till: Date | null;
  position: keyof DictionaryStatic["PERSONAL_DATA"]["position"];
  duty: string[];
};

export type TechStack = Record<keyof DictionaryStatic["MENUS"]["TECH_STACKS"], { label: string; icon: IconifyIcon | string }[]>;

export type Project = {
  title: string;
  desc: string;
  href: string;
  lists: string[];
  src: StaticImageData;
};

export type Certification = {
  name: string;
  src: StaticImageData;
  alt: string;
  title: string;
};
