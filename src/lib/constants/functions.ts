import { useLanguage } from "@/internationalization/functions";
import { PERSONALS } from "@/lib/constants";
import type { Lang, Profile } from "@/types";

export const getProfileData = (lang: Lang): Profile[] => {
  const {
    s,
    const: { ageCounter },
    func: { formatCounter },
  } = useLanguage(lang);

  return [
    { href: "/resume.pdf", icon: "mdi:resume", label: s.SECTIONS.resume },
    { icon: "mdi:work", label: `${PERSONALS.yoe}${formatCounter(s.SECTIONS.yearsExperience)}` },
    { icon: "mdi:location", label: s.LOCATIONS.jakarta },
    { icon: "mdi:person", label: `${PERSONALS.age}${formatCounter(ageCounter)}` },
  ];
};
