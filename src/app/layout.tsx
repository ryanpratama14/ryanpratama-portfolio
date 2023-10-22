import "@/styles/globals.css";
import { Metadata } from "next";

// components
import Providers from "@/global/Providers";
import Navbar from "@/components/navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
};

export default function RootLayout({
  children,
}: ReactNodeProps): React.JSX.Element {
  return (
    <html lang="en">
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
