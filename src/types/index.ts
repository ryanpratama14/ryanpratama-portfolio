import type { InferRouterInputs, InferRouterOutputs } from "@orpc/server";
import type { IconName } from "lucide-react/dynamic";
import type { StaticImageData } from "next/image";
import type { LANGS } from "@/internationalization";
import type { en } from "@/internationalization/dictionaries/en";
import type { getLang } from "@/internationalization/functions";
import type { router } from "@/server/router";

export type Lang = (typeof LANGS)[number];
export type LangTarget = Lang | null | undefined | string;
export type Dictionary = typeof en;
export type DictionaryStatic = Dictionary["s"];
export type DictionaryDynamic = Dictionary["d"];
export type Language = ReturnType<typeof getLang>;

export type Profile = { href?: string; icon: IconName; label: string };
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

export type ORPCOkCode = "OK" | "CREATED" | "ACCEPTED" | "NO_CONTENT" | "RESET_CONTENT" | "PARTIAL_CONTENT";
export type Inputs = InferRouterInputs<typeof router>;
export type Outputs = InferRouterOutputs<typeof router>;
