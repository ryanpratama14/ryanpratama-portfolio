import "server-only";

import { type AppRouter, appRouter, createCaller } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { createQueryClient } from "@/trpc/shared";
import { TRPCClientError, createTRPCClient, loggerLink } from "@trpc/client";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { callTRPCProcedure } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import type { TRPCErrorResponse } from "@trpc/server/rpc";
import { headers } from "next/headers";
import { cache } from "react";

const createContext = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");
  return createTRPCContext({ headers: heads });
});

const { trpc: unlogged, HydrateClient } = createHydrationHelpers<AppRouter>(createCaller(createContext), cache(createQueryClient));
const logged = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (op) => process.env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
    }),
    () =>
      ({ op }) =>
        observable((observer) => {
          createContext()
            .then((ctx) =>
              callTRPCProcedure({
                getRawInput: async () => await op.input,
                router: appRouter,
                path: op.path,
                ctx,
                type: op.type,
                signal: undefined,
              }),
            )
            .then((data) => {
              observer.next({ result: { data } });
              observer.complete();
            })
            .catch((cause: TRPCErrorResponse) => {
              observer.error(TRPCClientError.from(cause));
            });
        }),
  ],
});

export const api = { unlogged, logged };
export { HydrateClient };
