import { ENDPOINTS } from "@/app/urls";
import { env } from "@/env";
import { appRouter } from "@/server/root";
import { createTRPCContext } from "@/server/trpc";
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
        ? ({ path, error }) => {
            console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
          }
        : undefined,
  });

export { handler as GET, handler as POST };
