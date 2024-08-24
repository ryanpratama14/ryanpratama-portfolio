import Providers from "@/app/providers";
import { getCookieLang } from "@/lib/actions";
import { Fragment } from "react";

export default async function NotFoundPage() {
  const storedLang = await getCookieLang();
  if (!storedLang) return <Fragment />;

  return (
    <Providers notFound lang={storedLang}>
      <Fragment />
    </Providers>
  );
}
