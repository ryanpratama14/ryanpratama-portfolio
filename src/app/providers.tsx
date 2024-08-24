import ScrollToTop from "@/components/scroll-to-top";
import TransitionEffect from "@/components/transition-effect";
import VercelApps from "@/components/vercel-apps";
import { getCookieLang, setCookieLang } from "@/lib/actions";
import { VARIANTS } from "@/styles";
import TRPCReactProvider from "@/trpc/react";

type Props = { children: React.ReactNode };

export default async function Providers({ children }: Props) {
  const storedLang = await getCookieLang();

  return (
    <body>
      <TRPCReactProvider storedLang={storedLang} setCookieLang={setCookieLang}>
        <main className={VARIANTS.Main()}>{children}</main>
      </TRPCReactProvider>
      <VercelApps />
      <TransitionEffect />
      <ScrollToTop />
    </body>
  );
}
