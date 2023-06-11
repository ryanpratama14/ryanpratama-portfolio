import "../styles/globals.css";
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

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
