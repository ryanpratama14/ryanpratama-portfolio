"use client";

import { useLanguageHelper } from "@/internationalization/functions";
import { URLS } from "@/lib/constants";
import type { AppRouter } from "@/server/api/root";
import { createQueryClient, transformer } from "@/trpc/shared";
import type { Lang } from "@/types";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { unstable_httpBatchStreamLink as httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") return createQueryClient();
  return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>();

type Props = { children: React.ReactNode; setCookieLang: (lang: Lang) => Promise<void>; storedLang: Lang | undefined };

export default function TRPCReactProvider({ children, setCookieLang, storedLang }: Props) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) => process.env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchStreamLink({
          transformer,
          url: URLS.BASE_TRPC,
          headers: () => {
            const headers = new Headers();
            headers.set("x-trpc-source", "nextjs-react");
            return headers;
          },
        }),
      ],
    }),
  );

  const { getLangFromPath, validateMatchedLang } = useLanguageHelper();
  const path = usePathname();
  const lang = validateMatchedLang(getLangFromPath(path));

  useEffect(() => {
    if (!storedLang || storedLang !== lang) setCookieLang(lang);
  }, [lang, setCookieLang, storedLang]);

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
}