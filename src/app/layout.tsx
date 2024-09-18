import { getMetadata } from "@/app/metadata";
import HelperComponents from "@/components/helper-components";
import { LANGS } from "@/internationalization";
import { getHeaders } from "@/lib/actions";
import TRPCReactProvider from "@/trpc/react";
import type { Children } from "@/types";
import { GeistSans } from "geist/font/sans";
import "@/styles/globals.css";
import "@/styles/stylesheets.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => await getMetadata((await getHeaders()).lang);

export default async function RootLayout({ children }: Children) {
  return (
    <html lang={(await getHeaders()).lang} className={GeistSans.variable}>
      <body className="flex items-center justify-center px-shorter pt-shorter pb-14 md:pb-shorter">
        <HelperComponents />
        <TRPCReactProvider>
          <main className="w-full sm:max-w-4xl flex flex-col gap-4">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
