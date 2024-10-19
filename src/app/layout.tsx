import { getMetadata } from "@/app/metadata";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import { LANGS } from "@/internationalization";
import { getHeaders } from "@/lib/actions";
import { COLORS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import type { Children } from "@/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";
import { Fragment } from "react";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => await getMetadata((await getHeaders()).lang);

export default async function RootLayout({ children }: Children) {
  return (
    <html lang={(await getHeaders()).lang} className={GeistSans.variable}>
      <body className="px-shorter pt-shorter pb-14 md:pb-shorter text-white bg-black font-sans">
        <TRPCReactProvider>
          <main className="max-w-4xl space-y-4 mx-auto">{children}</main>
        </TRPCReactProvider>

        {OtherComponents[env.NODE_ENV]}
        <NextTopLoader color={COLORS.blue} showSpinner={false} />
      </body>
    </html>
  );
}

const OtherComponents: Record<typeof env.NODE_ENV, React.JSX.Element> = {
  development: <ScreenSizeIndicator />,
  production: (
    <Fragment>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  ),
  test: <Fragment />,
};
