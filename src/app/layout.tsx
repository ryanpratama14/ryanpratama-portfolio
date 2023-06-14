import "../styles/globals.css";
import React from "react";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

// components
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Providers from "./template";
import Link from "next/link";

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
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
