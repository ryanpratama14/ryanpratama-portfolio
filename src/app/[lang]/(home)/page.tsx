import About from "@/components/sections/about";
import AdditionalInformation from "@/components/sections/additional-information";
import Contacts from "@/components/sections/contacts";
import Experience from "@/components/sections/experience";
import FeaturedProjects from "@/components/sections/featured-projects";
import Message from "@/components/sections/message";
import Profile from "@/components/sections/profile";
import { useLang } from "@/internationalization/functions";
import type { Lang } from "@/types";
import type { PageProps } from ".next/types/app/[lang]/(home)/page";

type Props = PageProps & { params: { lang: Lang } };

export default function HomePage({ params: { lang } }: Props) {
  const { s, isJapanese, isDefaultLang } = useLang(lang);

  return (
    <main className="space-y-4">
      <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
      <Contacts s={s} />
      <About s={s} />
      <Experience s={s} lang={lang} isJapanese={isJapanese} />
      <FeaturedProjects s={s} />
      <Message s={s} lang={lang} />
      <AdditionalInformation s={s} lang={lang} isJapanese={isJapanese} />
    </main>
  );
}
