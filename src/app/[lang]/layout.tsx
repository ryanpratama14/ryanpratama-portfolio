import ScrollToTop from "@/components/scroll-to-top";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { getCookieLang, setCookieLang } from "@/lib/actions";
import { VARIANTS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import type { ChildrenParamsLang } from "@/types";

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

export default async function RootLayout({ children, params }: ChildrenParamsLang) {
  return (
    <html lang={params.lang} className={notosans.variable}>
      <body>
        <TRPCReactProvider lang={params.lang} storedLang={await getCookieLang()} setCookieLang={setCookieLang}>
          <main className={VARIANTS.Main()}>{children}</main>
        </TRPCReactProvider>
        <VercelApps />
        <TransitionEffect />
        <ScrollToTop />
      </body>
    </html>
  );
}
