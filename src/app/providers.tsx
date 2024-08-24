import NotFound from "@/components/not-found";
import ScrollToTop from "@/components/scroll-to-top";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { getCookieLang, setCookieLang } from "@/lib/actions";
import { VARIANTS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import type { Children, Lang } from "@/types";

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

type Props = Children & { lang: Lang; notFound?: boolean };

export default async function Providers({ children, lang, notFound }: Props) {
  const storedLang = await getCookieLang();

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <TRPCReactProvider storedLang={storedLang} setCookieLang={setCookieLang}>
          <main className={VARIANTS.Main()}>{notFound ? <NotFound lang={lang} /> : children}</main>
        </TRPCReactProvider>
        <VercelApps />
        <TransitionEffect />
        <ScrollToTop />
      </body>
    </html>
  );
}
