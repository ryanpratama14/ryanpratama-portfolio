import "../styles/globals.css";
import React from "react";
import { Metadata } from "next";
import Template from "./template";

// components
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SocialMedia from "./components/SocialMedia";
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
      <body className="themedBg">
        <Template>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <SocialMedia />
        </Template>
      </body>
    </html>
  );
}
