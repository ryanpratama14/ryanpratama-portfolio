import { getMetadata } from "@/app/metadata";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import { LANGS } from "@/internationalization";
import { getHeaders } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { COLORS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Fragment } from "react";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => await getMetadata({});

type Props = { children: React.ReactNode };

export default async function RootLayout({ children }: Props) {
  const isStudio = (await getHeaders()).path.startsWith("studio");

  return (
    <html lang={(await getHeaders()).lang} className={GeistSans.variable}>
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      <body className={cn({ "main-padding text-white bg-black font-sans": !isStudio })}>
        <noscript>
          <iframe
            title="GTM"
            src={`https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GTM_ID}`}
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {isStudio ? (
          <main>{children}</main>
        ) : (
          <Fragment>
            <TRPCReactProvider>
              <NuqsAdapter>
                <main className="flex flex-col gap-4">{children}</main>
              </NuqsAdapter>
            </TRPCReactProvider>

            <NextTopLoader color={COLORS.blue} showSpinner={false} />
            {OtherComponents[env.NODE_ENV]}
          </Fragment>
        )}
      </body>
    </html>
  );
}

const OtherComponents: Record<typeof env.NODE_ENV, React.JSX.Element | null> = {
  development: <ScreenSizeIndicator />,
  production: (
    <Fragment>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  ),
  test: null,
};
