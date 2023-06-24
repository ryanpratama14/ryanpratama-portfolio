import React from "react";
import "@/styles/globals.css";
import { poppins } from "@/styles/fonts";
import { Metadata } from "next";

// components
import Navbar from "../components/navbar/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import Providers from "./template";

export const metadata: Metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
};

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
