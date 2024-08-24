import { LANGS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { getCookieLang } from "@/lib/actions";
import { getMetadata } from "@/lib/metadata";
import type { Children } from "@/types";

const { validateMatchedLang } = useLanguageHelper();

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => getMetadata(validateMatchedLang(await getCookieLang()));

export default function layout({ children }: Children) {
  return children;
}
