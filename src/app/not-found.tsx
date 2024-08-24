import NotFound from "@/components/not-found";
import { useLanguageHelper } from "@/internationalization/functions";
import { headers } from "next/headers";

const { getLangFromPath, validateMatchedLang } = useLanguageHelper();

export default async function NotFoundPage() {
  const path = headers().get("x-path") ?? "";
  const lang = validateMatchedLang(getLangFromPath(path));
  return <NotFound lang={lang} />;
}
