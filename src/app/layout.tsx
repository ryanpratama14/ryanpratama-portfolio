import "@/styles/globals.css";
import { env } from "@/env";
import { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

// components
import Providers from "@/global/Providers";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const title = "Ryan Pratama's Portfolio";
const description =
  "Ryan Pratama - Fullstack / Frontend Engineer. I specialized in creating scalable, intuitive, and responsive web applications with engaging user interfaces that are efficient, maintainable, and accessible using the T3 Stack.";

export const metadata: Metadata = {
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
    url: env.NEXT_PUBLIC_WEBSITE_URL,
    siteName: title,
    locale: "en_US",
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
  twitter: { title, card: "summary_large_image" },
};

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

export default function RootLayout({ children }: ReactNodeProps): React.JSX.Element {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="text-white bg-black font-poppins">
        <Providers>
          <main>
            <Navbar />
            {children}
          </main>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
