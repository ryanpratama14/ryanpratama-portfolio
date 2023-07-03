import "@/styles/globals.css";
import { Poppins, Montserrat } from "next/font/google";
import { Metadata } from "next";

// components
import TransitionProvider from "@/global/TransitionProvider";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
};

export default function RootLayout({
  children,
}: ReactNodeProps): React.JSX.Element {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        <TransitionProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </TransitionProvider>
      </body>
    </html>
  );
}
