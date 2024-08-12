import About from "@/components/sections/about";
import Contacts from "@/components/sections/contacts";
import Experience from "@/components/sections/experience";
import Profile from "@/components/sections/profile";
import ProjectDiscuss from "@/components/sections/project-discuss";
import TechStacks from "@/components/sections/tech-stacks";
import UpdatedAt from "@/components/sections/updated-at";
import { setCookie } from "@/lib/actions";
import { useLanguage } from "@/lib/internationalization";
import type { Lang } from "@/types";
import { cookies } from "next/headers";

type Props = { params: { lang: Lang } };

export default function Home({ params }: Props) {
  const { s, lang, isJapanese } = useLanguage(params.lang);
  const storedLang = cookies().get("lang")?.value as Lang | undefined;

  return (
    <main className="p-shorter lg:px-longer5 animate flex flex-col gap-6">
      <Profile lang={lang} s={s} isJapanese={isJapanese} setCookie={setCookie} storedLang={storedLang} />
      <Contacts s={s} />
      <About s={s} />
      <TechStacks s={s} />
      <Experience s={s} lang={lang} />
      <ProjectDiscuss s={s} lang={lang} />
      <UpdatedAt s={s} lang={lang} />
    </main>
  );
}
