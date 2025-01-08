import { ENDPOINTS } from "@/app/urls";
import { useLang } from "@/internationalization/functions";
import { ICONS, PERSONALS } from "@/lib/constants";
import type { Lang, Profile } from "@/types";

export const getProfileData = (lang: Lang): Profile[] => {
  const { s, formatCounter, locale } = useLang(lang);

  return [
    { href: ENDPOINTS.resume, icon: ICONS.resume, label: s.SECTIONS.resume },
    { icon: ICONS.yoe, label: `${(PERSONALS.yoe).toLocaleString(locale, { minimumFractionDigits: 1 })}${formatCounter(s.COUNTER.yearsExperience)}` },
    { icon: ICONS.location, label: s.LOCATIONS[PERSONALS.location] },
    { icon: ICONS.age, label: `${PERSONALS.age}${formatCounter(s.COUNTER.age)}` },
  ];
};
