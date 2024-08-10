import type { LANGS, useLanguage } from "@/lib/internationalization";
import type { IconifyIcon } from "@iconify/react/dist/iconify.js";
import type { StaticImageData } from "next/image";
import type { en } from "#/dictionaries/en";

export type Lang = (typeof LANGS)[number];
export type Dictionary = typeof en;
export type DictionaryStatic = typeof en.static;
export type DictionaryDynamic = typeof en.dynamic;
export type Language = ReturnType<typeof useLanguage>;
export type LanguageFn = Pick<Language, "fn">["fn"];

export type NavbarItem = {
  label: keyof DictionaryStatic["NAVBAR_DATA"];
  icon: IconifyIcon | string;
  href: string;
};

export type LinkSocialItem = {
  href: string;
  label: string;
  icon: IconifyIcon | string;
};

export type ExperienceItem = {
  src: StaticImageData;
  label: string;
  link: string;
  since: Date;
  location: keyof DictionaryStatic["LOCATIONS"];
  till: Date | null;
};

export type SkillsItem = {
  label: string;
  icon: IconifyIcon | string;
};

export type ProjectItem = {
  title: string;
  icon: StaticImageData;
  desc: string;
  href: string;
  lists: string[];
  src: StaticImageData;
};
