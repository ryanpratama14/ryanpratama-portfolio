import { getMetadata } from "@/app/metadata";
import TailwindIndicator from "@/components/tailwind-indicator";
import VercelApps from "@/components/vercel-apps";
import { env } from "@/env";
import { LANGS } from "@/internationalization";
import { getHeaders } from "@/lib/actions";
import TRPCReactProvider from "@/trpc/react";
import type { Children } from "@/types";
import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";
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
        <TRPCReactProvider>
          <main className="w-full sm:max-w-4xl flex flex-col gap-4">{children}</main>
        </TRPCReactProvider>
        <NextTopLoader color="#2563eb" showSpinner={false} />

        {env.NODE_ENV === "production" && <VercelApps />}
        {env.NODE_ENV === "development" && <TailwindIndicator />}
      </body>
    </html>
  );
}
