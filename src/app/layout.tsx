import { DEFAULT_LANG } from "@/internationalization";
import type { Children } from "@/types";

export default function RootLayout({ children }: Children) {
  return (
    <html lang={DEFAULT_LANG}>
      <body>{children}</body>
    </html>
  );
}
