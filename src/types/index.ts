import type { LANGS } from "@/internationalization";
import type { en } from "@/internationalization/dictionaries/en";
import type { IconifyIcon } from "@iconify/react/dist/iconify.js";
import type { StaticImageData } from "next/image";

export type Lang = (typeof LANGS)[number];
export type Dictionary = typeof en;
export type DictionaryStatic = typeof en.static;
export type DictionaryDynamic = typeof en.dynamic;

export type Language = Record<
  Lang,
  { flag: string; label: string; s: DictionaryStatic; d: DictionaryDynamic; locale: string; lang: Lang }
>;

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
