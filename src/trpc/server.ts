import "server-only";

import { createTRPCClient, loggerLink, TRPCClientError } from "@trpc/client";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { callTRPCProcedure } from "@trpc/server";
import { observable } from "@trpc/server/observable";
import type { TRPCErrorResponse } from "@trpc/server/rpc";
import { headers } from "next/headers";
import { cache } from "react";
import { env } from "@/env";
import { type AppRouter, appRouter, createCaller } from "@/server/root";
import { createTRPCContext } from "@/server/trpc";
import { createQueryClient } from "@/trpc/shared";

const createContext = cache(async () => {
  const heads = new Headers(await headers());
  heads.set("x-trpc-source", "rsc");
  return createTRPCContext({ headers: heads });
});

const getQueryClient = cache(createQueryClient);
const caller = createCaller(createContext);
const { trpc: unlogged, HydrateClient } = createHydrationHelpers<AppRouter>(caller, getQueryClient);

const logged = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (op) => env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
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
