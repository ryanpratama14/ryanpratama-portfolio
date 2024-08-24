import ScrollToTop from "@/components/scroll-to-top";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { LANGS } from "@/internationalization";
import { getCookieLang, setCookieLang } from "@/lib/actions";
import { HEADERS } from "@/lib/constants";
import { getMetadata } from "@/lib/metadata";
import { VARIANTS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import type { Children, Lang } from "@/types";
import { headers } from "next/headers";

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

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => getMetadata(headers().get(HEADERS.lang) as Lang);

export default async function RootLayout({ children }: Children) {
  const lang = headers().get(HEADERS.lang) as Lang;

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <TRPCReactProvider storedLang={await getCookieLang()} setCookieLang={setCookieLang}>
          <main className={VARIANTS.Main()}>{children}</main>
        </TRPCReactProvider>
        <VercelApps />
        <TransitionEffect />
        <ScrollToTop />
      </body>
    </html>
  );
}
