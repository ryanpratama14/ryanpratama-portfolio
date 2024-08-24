import { LANGS } from "@/internationalization";
import { useLanguageHelper } from "@/internationalization/functions";
import { getCookieLang } from "@/lib/actions";
import { getMetadata } from "@/lib/metadata";

type Props = { children: React.ReactNode };

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => getMetadata(useLanguageHelper().validateMatchedLang(await getCookieLang()));

export default function RootLayout({ children }: Props) {
  return children;
}
