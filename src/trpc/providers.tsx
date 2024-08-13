"use client";

import TransitionEffect from "@/components/transition-effect";
import { getBaseUrl } from "@/lib/functions";
import type { AppRouter } from "@/server/api/root";
import { transformer } from "@/trpc/shared";
import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { unstable_httpBatchStreamLink as httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { useState } from "react";
import { createQueryClient } from "./query-client";

let clientQueryClientSingleton: QueryClient | undefined = undefined;

const getQueryClient = () => {
  if (typeof window === "undefined") return createQueryClient();
  return (clientQueryClientSingleton ??= createQueryClient());
};

export const api = createTRPCReact<AppRouter>();

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) => process.env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchStreamLink({
          transformer,
          url: `${getBaseUrl()}/api/trpc`,
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
        <TransitionEffect />
      </api.Provider>
    </QueryClientProvider>
  );
}
