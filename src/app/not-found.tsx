import NotFound from "@/components/not-found";
import { useLangHelper } from "@/internationalization/functions";
import { HEADERS } from "@/lib/constants";
import { headers } from "next/headers";

const { validateMatchedLang } = useLangHelper();

export default function NotFoundPage() {
  const lang = validateMatchedLang(headers().get(HEADERS.lang));
  return <NotFound lang={lang} />;
}
