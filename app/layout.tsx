import "../styles/globals.css";
import { Poppins } from "next/font/google";
import Template from "./template";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import SocialMedia from "./components/SocialMedia";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`themedBg ${poppins.className}`}>
        <Navbar />
        <Template>{children}</Template>
        <About />
        <ScrollToTop />
        <SocialMedia />
      </body>
    </html>
  );
}
