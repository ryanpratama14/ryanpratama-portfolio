import { getMetadata } from "@/app/metadata";
import Container from "@/components/container";
import ScreenSizeIndicator from "@/components/screen-size-indicator";
import { env } from "@/env";
import { LANGS } from "@/internationalization";
import { useLang } from "@/internationalization/functions";
import { getHeaders } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { COLORS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";
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
  const { d, formatDate, lang } = useLang((await getHeaders()).lang);
  const isStudio = (await getHeaders()).path.startsWith("studio");

  console.log((await getHeaders()).path);

  return (
    <html lang={lang} className={GeistSans.variable}>
      <body className={cn({ "px-4 pt-4 pb-16 md:p-6 lg:p-12 xl:p-16 text-white bg-black font-sans": !isStudio })}>
        {isStudio ? (
          <main>{children}</main>
        ) : (
          <Fragment>
            <TRPCReactProvider>
              <NuqsAdapter>
                <main className="flex flex-col gap-4">{children}</main>
              </NuqsAdapter>
            </TRPCReactProvider>

            <Container tag="footer" title={d.updatedOn(formatDate(new Date()))} className="mt-4" />
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
