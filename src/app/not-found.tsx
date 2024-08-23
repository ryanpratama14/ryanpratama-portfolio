import Iconify from "@/components/html/iconify";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { useLanguage, useLanguageHelper } from "@/internationalization/functions";
import { COOKIES, ICONS } from "@/lib/constants";
import { cookies } from "next/headers";

// styles
import { VARIANTS } from "@/styles";
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-notosans",
  display: "swap",
});

export default function NotFound() {
  const storedLang = useLanguageHelper().validateMatchedLang(cookies().get(COOKIES.lang)?.value);

  const {
    s,
    const: { lang, isDefaultLang },
  } = useLanguage(storedLang);

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <main className={VARIANTS.Main()}>
          <Profile disableLangSwitcher s={s} lang={lang} isDefaultLang={isDefaultLang} />
          <Contacts s={s} />
          <section className="flex flex-col items-center justify-center mt-6">
            <Iconify icon={ICONS.notFound} width={250} />
            <Text as="heading" className="text-center">
              <h1>{s.SECTIONS.notFound}</h1>
            </Text>

            <LinkButton lang={lang} href="" className="mt-6">
              {s.SECTIONS.backToHomepage}
            </LinkButton>
          </section>
        </main>

        <VercelApps />
        <TransitionEffect />
      </body>
    </html>
  );
}
