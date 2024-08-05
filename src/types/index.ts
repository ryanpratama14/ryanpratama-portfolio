import type { en } from "@/lib/dictionaries/en";
import type { LANGS } from "@/lib/internationalization";
import type { IconifyIcon } from "@iconify/react/dist/iconify.js";
import type { StaticImageData } from "next/image";

export type Lang = (typeof LANGS)[number];
export type Dictionary = typeof en;
export type DictionaryKey = keyof typeof en;

export type NavbarItem = {
  label: keyof Dictionary["NAVBAR_DATA"];
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
  location: keyof Dictionary["LOCATIONS"];
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
