import "../styles/globals.css";
import Template from "./template";

// components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

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
      <body className="themedBg">
        <Navbar />
        <Template>{children}</Template>
        <Footer />
        <ScrollToTop />
        <SocialMedia />
      </body>
    </html>
  );
}
