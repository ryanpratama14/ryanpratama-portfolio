import NotFound from "@/components/not-found";
import { useLanguageHelper } from "@/internationalization/functions";
import { HEADERS } from "@/lib/constants";
import { headers } from "next/headers";

const { validateMatchedLang } = useLanguageHelper();

export default function NotFoundPage() {
  const lang = validateMatchedLang(headers().get(HEADERS.lang));
  return <NotFound lang={lang} />;
}
