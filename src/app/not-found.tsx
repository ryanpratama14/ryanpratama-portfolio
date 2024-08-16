import Iconify from "@/components/html/iconify";
import Text from "@/components/html/text";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import TransitionEffect from "@/components/transition-effect";
import { cn } from "@/lib/functions";
import { useLanguage, useLanguageHelper } from "@/lib/internationalization";
import { VARIANTS } from "@/styles";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cookies } from "next/headers";
import Link from "next/link";

// styles
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-notosans",
  display: "swap",
});

export default function NotFound() {
  const { validateMatchedLang } = useLanguageHelper();
  const { s, isDefaultLang, isJapanese, lang } = useLanguage(validateMatchedLang(cookies().get("lang")?.value));

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <Analytics />
        <SpeedInsights />
        <main className={VARIANTS.Main()}>
          <Profile disableLangSwitcher s={s} lang={lang} isDefaultLang={isDefaultLang} isJapanese={isJapanese} />
          <Contacts s={s} />
          <section className="flex flex-col items-center justify-center mt-6">
            <Iconify icon="ooui:article-not-found-ltr" width={250} />
            <Text as="heading">
              <h1>{s.SECTIONS.notFound}</h1>
            </Text>

            <Link href={`/${lang}`} className={cn(VARIANTS.Button({ className: "mt-6" }))}>
              {s.SECTIONS.backToHomepage}
            </Link>
          </section>
        </main>

        <TransitionEffect />
      </body>
    </html>
  );
}
