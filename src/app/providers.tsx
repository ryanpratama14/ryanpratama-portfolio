import Iconify from "@/components/html/iconify";
import LinkButton from "@/components/html/link-button";
import Text from "@/components/html/text";
import ScrollToTop from "@/components/scroll-to-top";
import Contacts from "@/components/sections/contacts";
import Profile from "@/components/sections/profile";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { useLanguage, useLanguageHelper } from "@/internationalization/functions";
import { getCookieLang, setCookieLang } from "@/lib/actions";
import { ICONS } from "@/lib/constants";
import { VARIANTS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import type { Lang } from "@/types";
import { Fragment } from "react";

// styles
import { Noto_Sans } from "next/font/google";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-notosans",
  display: "swap",
});

type Props = { children: React.ReactNode; notFound?: boolean; lang: Lang };

export default async function Providers({ children, notFound }: Props) {
  const storedLang = await getCookieLang();

  const {
    s,
    const: { lang, isDefaultLang },
  } = useLanguage(useLanguageHelper().validateMatchedLang(storedLang));

  const NotFound = () => {
    return (
      <Fragment>
        <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
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
      </Fragment>
    );
  };

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <TRPCReactProvider storedLang={storedLang} setCookieLang={setCookieLang}>
          <main className={VARIANTS.Main()}>{notFound ? <NotFound /> : children}</main>
        </TRPCReactProvider>
        <VercelApps />
        <TransitionEffect />
        <ScrollToTop />
      </body>
    </html>
  );
}
