import Providers from "@/app/providers";
import { useLanguageHelper } from "@/internationalization/functions";
import { getCookieLang } from "@/lib/actions";
import { Fragment } from "react";

export default async function NotFoundPage() {
  const { validateMatchedLang } = useLanguageHelper();
  const storedCookie = await getCookieLang();
  const lang = validateMatchedLang(storedCookie);

  return (
    <Providers notFound lang={lang}>
      <Fragment />
    </Providers>
  );
}
