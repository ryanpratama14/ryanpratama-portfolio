"use client";

import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import { URLS } from "@/app/urls";
import { env } from "@/env";
import type { AppRouter } from "@/server/root";
import { createQueryClient, transformer } from "@/trpc/shared";

let clientQueryClientSingleton: QueryClient | undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") return createQueryClient();
  clientQueryClientSingleton ??= createQueryClient();
  return clientQueryClientSingleton;
};

export const api = createTRPCReact<AppRouter>();

type Props = { children: React.ReactNode };

export function TRPCReactProvider({ children }: Props) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) => env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchStreamLink({
          transformer,
          url: URLS.trpc,
          headers: () => {
            const headers = new Headers();
            headers.set("x-trpc-source", "nextjs-react");
            return headers;
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
}
