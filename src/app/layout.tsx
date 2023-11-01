import "@/styles/globals.css";
import { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

// components
import Providers from "@/global/Providers";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
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

export default function RootLayout({
  children,
}: ReactNodeProps): React.JSX.Element {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
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
