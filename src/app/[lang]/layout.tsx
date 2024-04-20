import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/navbar/Navbar";
import { env } from "@/env";
import { LANGUAGES, getDictionary } from "@/lib/internationalization";
import "@/styles/globals.css";
import type { Lang } from "@/types";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Providers from "./providers";

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const t = getDictionary(params.lang).PERSONAL_DATA;
  const title = `${t.fullName} — ${t.softwareEngineer}`;
  const description = `${title}\n\n${t.summary}`;

  return {
    manifest: "/manifest.json",
    metadataBase: new URL(env.NEXT_PUBLIC_WEBSITE_URL),
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    openGraph: {
      title: {
        default: title,
        template: `%s | ${title}`,
      },
      description,
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${params.lang}`,
      siteName: title,
      locale: LANGUAGES[params.lang].locale,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: { title, card: "summary_large_image", description },
  };
}

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

type Props = { params: { lang: Lang }; children: React.ReactNode };

export default function RootLayout({ children, params }: Props) {
  const t = getDictionary(params.lang);

  return (
    <html lang={params.lang} className={montserrat.variable}>
      <body className="text-white bg-black font-montserrat">
        <Analytics />
        <Providers>
          <Navbar t={t} />
          <main>{children}</main>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
