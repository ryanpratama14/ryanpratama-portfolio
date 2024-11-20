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
import type { Lang } from "@/types";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Fragment } from "react";
import Contacts from "./(home)/components/contacts";
import Message from "./(home)/components/message";
import Profile from "./(home)/components/profile";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = { params: Promise<{ lang: Lang }>; children: React.ReactNode };

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));
export const generateMetadata = async () => await getMetadata({});

export default async function RootLayout({ children, params }: Props) {
  const { s, d, formatDate, lang, isDefaultLang } = useLang((await params).lang);
  const isStudio = (await getHeaders()).path.startsWith("studio");

  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={cn({ "px-4 pt-4 pb-16 md:p-6 lg:p-12 xl:p-16 text-white bg-black font-sans": !isStudio })}>
        {isStudio ? (
          <main>{children}</main>
        ) : (
          <Fragment>
            <TRPCReactProvider>
              <NuqsAdapter>
                <main className="flex flex-col gap-4">
                  <Profile s={s} lang={lang} isDefaultLang={isDefaultLang} />
                  <Contacts s={s} />
                  {children}
                  <Message s={s} lang={lang} />
                </main>
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
