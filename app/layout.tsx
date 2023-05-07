import "../styles/globals.css";

export const metadata = {
  title: "Ryan's Next App",
  description: "Welcome to: Ryan's Portfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
