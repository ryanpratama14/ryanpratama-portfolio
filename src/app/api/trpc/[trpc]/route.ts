import { env } from "@/env";
import { ENDPOINTS } from "@/lib/constants";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { CONSOLE_TRPC } from "@/trpc/shared";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { NextRequest } from "next/server";

const createContext = async (req: NextRequest) => createTRPCContext({ headers: req.headers });

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: ENDPOINTS.trpc,
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error, input, type }) => {
            CONSOLE_TRPC.error("tRPC failed");
            CONSOLE_TRPC.error(`path: api.${path ?? "<no-path>"}.${type}`);
            CONSOLE_TRPC.error(`input: ${JSON.stringify(input) ?? null}`);
            CONSOLE_TRPC.error(`code: ${error?.code ?? null}`);
            CONSOLE_TRPC.error(`message: ${error?.message ?? null}`);
          }
        : undefined,
  });

export { handler as GET, handler as POST };
