import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/navbar/Navbar";
import { env } from "@/env";
import "@/styles/globals.css";
import type { Lang } from "@/types";
import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import Providers from "./providers";

const title = "Ryan Pratama's Portfolio";
const description =
  "Ryan Pratama - Fullstack / Frontend Engineer. I specialized in creating scalable, intuitive, and responsive web applications with engaging user interfaces that are efficient, maintainable, and accessible using the T3 Stack.";

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
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
      locale: params.lang,
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

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

type Props = { params: { lang: Lang }; children: React.ReactNode };

export default function RootLayout({ children, params }: Props): React.JSX.Element {
  return (
    <html lang={params.lang} className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="text-white bg-black font-poppins">
        <Navbar />
        <Providers>
          <main>{children}</main>
        </Providers>
        <ScrollToTop />
      </body>
    </html>
  );
}
