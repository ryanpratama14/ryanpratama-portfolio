import "../styles/globals.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Poppins } from "next/font/google";

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
        {children}
        <About />
      </body>
    </html>
  );
}
