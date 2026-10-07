import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Fragment } from "react/jsx-runtime";
import { Toaster } from "sonner";

import { notFound } from "next/navigation";

import { getMetadata } from "@/app/metadata";
import { PATHS } from "@/app/urls";
import { env } from "@/env";
import { LANGS } from "@/internationalization";
import { validateLang } from "@/internationalization/functions";
import { Providers } from "@/lib/tanstack-query/providers";
import { cn } from "@/lib/utils";
import { COLORS } from "@/styles/colors";

import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "@/server/orpc.server";

export const generateStaticParams = async () => LANGS.map((lang) => ({ lang }));

export const generateMetadata = async ({ params }: LayoutProps<"/[lang]">): Promise<Metadata> => {
  const lang = validateLang((await params).lang);
  if (!lang) return {};
  return await getMetadata({ lang, path: PATHS.main });
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = validateLang((await params).lang);
  if (!lang) notFound();
  return (
    <html lang={lang} className={cn(GeistSans.variable, "dark")} data-scroll-behavior="smooth">
      <GoogleTagManager gtmId={env.NEXT_PUBLIC_GTM_ID} />
      <body className="bg-background text-foreground font-sans">
        <NuqsAdapter>
          <Providers>
            {children}
            <NextTopLoader color={COLORS.primary} showSpinner={false} />
            <Toaster position="top-right" richColors className="font-sans whitespace-pre-line" />
          </Providers>
        </NuqsAdapter>
        {OtherComponents[env.NODE_ENV]}
      </body>
    </html>
  );
}

const OtherComponents: Record<typeof env.NODE_ENV, React.JSX.Element | null> = {
  development: null,
  production: (
    <Fragment>
      <Analytics />
      <SpeedInsights />
    </Fragment>
  ),
  test: null,
};
