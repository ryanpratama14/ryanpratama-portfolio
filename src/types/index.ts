import type { LANGS } from "@/internationalization";
import type { en } from "@/internationalization/dictionaries/en";
import type { useLang } from "@/internationalization/functions";
import type { StaticImageData } from "next/image";

export type Lang = (typeof LANGS)[number];
export type LangTarget = Lang | null | undefined | string;
export type Dictionary = typeof en;
export type DictionaryStatic = Dictionary["s"];
export type DictionaryDynamic = Dictionary["d"];
export type Language = ReturnType<typeof useLang>;

export type Profile = { href?: string; icon: string; label: string };
export type Contact = { href: string; label: string; icon: string };
export type Project = { key: keyof DictionaryStatic["CONSTANTS"]["PROJECTS"]; label: string; href: string; src: StaticImageData };
export type Certification = { name: keyof DictionaryStatic["CERTIFICATIONS"]; src: StaticImageData };
export type TechStack = Record<keyof DictionaryStatic["TECH_STACKS"], { label: string; icon: string; icon2?: string }[]>;
export type Other = { languages: (keyof DictionaryStatic["PERSONAL_DATA"]["languages"])[]; education: History[] };

export type History = {
  key: keyof DictionaryStatic["CONSTANTS"]["HISTORY"];
  src: StaticImageData;
  href: string;
  since: Date;
  till: Date | null;
  location: keyof DictionaryStatic["LOCATIONS"];
  type?: keyof DictionaryStatic["LOCATION_TYPES"];
};
