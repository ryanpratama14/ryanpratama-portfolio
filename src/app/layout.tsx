import "@/styles/globals.css";
import { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";

// components
import Providers from "@/global/Providers";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { generateSEO } from "@/utils/utils";

// export const metadata: Metadata = {
//   title: "Ryan Pratama's Portfolio",
//   description: "Welcome to: Ryan's Portfolio",
//   manifest: "/manifest.json",
// };

const title = "Ryan Pratama's Portfolio";
const description =
  "I specialized in creating scalable, intuitive, and responsive web applications with engaging user interfaces that are efficient, maintainable, and accessible using the T3 Stack.";
const url = "https://ryanpratama.dev";

export const metadata = generateSEO(title, description, url);

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
