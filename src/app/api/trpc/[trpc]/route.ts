import { env } from "@/env";
import { consoleError } from "@/lib/functions";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/server/api/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import type { NextRequest } from "next/server";

const createContext = async (req: NextRequest) => createTRPCContext({ headers: req.headers });

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error, input, type }) => {
            consoleError("tRPC failed");
            consoleError(`path: api.${path ?? "<no-path>"}.${type}`);
            consoleError(`input: ${JSON.stringify(input) ?? null}`);
            consoleError(`code: ${error?.code ?? null}`);
            consoleError(`message: ${error?.message ?? null}`);
          }
        : undefined,
  });

export { handler as GET, handler as POST };
