import "@/styles/globals.css";
import { Metadata } from "next";

// components
import TransitionProvider from "@/global/TransitionProvider";
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
        <TransitionProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </TransitionProvider>
      </body>
    </html>
  );
}
