import { ENDPOINTS } from "@/app/urls";
import { getLang } from "@/internationalization/functions";
import { PERSONALS } from "@/lib/constants";
import type { Lang, Profile } from "@/types";

export const getProfileData = (lang: Lang): Profile[] => {
  const { s, formatYearsExperience } = getLang(lang);

  return [
    { href: PERSONALS.mailTo, icon: "mail", label: s.SECTIONS.email },
    { href: ENDPOINTS.resume, icon: "text", label: s.SECTIONS.resume },
    { icon: "briefcase", label: formatYearsExperience(PERSONALS.yoe) },
    { icon: "map-pin", label: s.LOCATIONS[PERSONALS.location] },
  ];
};
