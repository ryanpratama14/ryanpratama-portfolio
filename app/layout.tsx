import "../styles/globals.css";
import About from "./components/About";
import Navbar from "./components/Navbar";

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
      <body>
        <Navbar />
        {children}
        <About />
      </body>
    </html>
  );
}
