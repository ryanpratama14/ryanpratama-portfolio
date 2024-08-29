import VercelApps from "@/components/vercel-apps";
import { LANGS } from "@/internationalization";
import { getHeaders } from "@/lib/actions";
import { getMetadata } from "@/lib/constants/metadata";
import TRPCReactProvider from "@/trpc/react";
import type { Children } from "@/types";

// styles
import { Noto_Sans } from "next/font/google";
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

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => await getMetadata((await getHeaders()).lang);

export default async function RootLayout({ children }: Children) {
  const lang = (await getHeaders()).lang;

  return (
    <html lang={lang} className={notosans.variable}>
      <body className="flex items-center justify-center">
        <VercelApps />
        <TRPCReactProvider>
          <main className="p-shorter w-full sm:max-w-5xl animate flex flex-col gap-4">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
