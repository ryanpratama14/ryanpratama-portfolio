import { ENDPOINTS } from "@/app/urls";
import { getLang } from "@/internationalization/functions";
import { PERSONALS } from "@/lib/constants";
import type { Lang, Profile } from "@/types";

export const getProfileData = (lang: Lang): Profile[] => {
  const { s, formatCounter, locale } = getLang(lang);

  return [
    { href: PERSONALS.mailTo, icon: "mail", label: s.SECTIONS.email },
    { href: ENDPOINTS.resume, icon: "text", label: s.SECTIONS.resume },
    {
      icon: "briefcase",
      label: `${(PERSONALS.yoe).toLocaleString(locale, { minimumFractionDigits: 1 })}${formatCounter(s.COUNTER.yearsExperience)}`,
    },
    { icon: "map-pin", label: s.LOCATIONS[PERSONALS.location] },
    // { icon: "user", label: `${PERSONALS.age}${formatCounter(s.COUNTER.age)}` },
  ];
};
