import "../styles/globals.css";
import { Poppins } from "next/font/google";
import React from "react";
import { Metadata } from "next";

// components
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props): React.JSX.Element {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
