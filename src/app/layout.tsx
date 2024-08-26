import ScrollToTop from "@/components/scroll-to-top";
import VercelApps from "@/components/vercel-apps";
import { LANGS } from "@/internationalization";
import { useLangHelper } from "@/internationalization/functions";
import { HEADERS } from "@/lib/constants/helpers";
import { getMetadata } from "@/lib/constants/metadata";
import { VARIANTS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import type { Children } from "@/types";
import { Noto_Sans } from "next/font/google";
import { headers } from "next/headers";
import "@/styles/globals.css";
import "@/styles/stylesheets.css";
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

const { validateMatchedLang } = useLangHelper();
export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => getMetadata(validateMatchedLang(headers().get(HEADERS.lang)));

export default function RootLayout({ children }: Children) {
  const lang = validateMatchedLang(headers().get(HEADERS.lang));

  return (
    <html lang={lang} className={notosans.variable}>
      <body>
        <TRPCReactProvider>
          <main className={VARIANTS.Main()}>{children}</main>
        </TRPCReactProvider>
        <ScrollToTop />
        <VercelApps />
      </body>
    </html>
  );
}
