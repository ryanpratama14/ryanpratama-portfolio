import NotFound from "@/components/not-found";
import { useLanguageHelper } from "@/internationalization/functions";
import { getCookieLang } from "@/lib/actions";
import { headers } from "next/headers";

const { getLangFromPath, validateMatchedLang } = useLanguageHelper();

export default async function NotFoundPage() {
  const path = headers().get("x-path") ?? "";
  const lang = getLangFromPath(path) ?? validateMatchedLang(await getCookieLang());

  return <NotFound lang={lang} />;
}
