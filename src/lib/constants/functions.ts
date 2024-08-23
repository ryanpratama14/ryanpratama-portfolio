import { useLanguage } from "@/i18n.functions";
import { ICONS, PERSONALS } from "@/lib/constants";
import type { Lang, Profile } from "@/types";

export const getProfileData = (lang: Lang): Profile[] => {
  const {
    s,
    func: { formatCounter },
  } = useLanguage(lang);

  return [
    { href: "/resume.pdf", icon: ICONS.resume, label: s.SECTIONS.resume },
    { icon: ICONS.yoe, label: `${PERSONALS.yoe}${formatCounter(s.COUNTER.yearsExperience)}` },
    { icon: ICONS.location, label: s.LOCATIONS.jakarta },
    { icon: ICONS.age, label: `${PERSONALS.age}${formatCounter(s.COUNTER.age)}` },
  ];
};
