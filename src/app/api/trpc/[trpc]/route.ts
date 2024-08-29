import { env } from "@/env";
import { ENDPOINTS } from "@/lib/constants/urls";
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
        ? ({ error, input }) => {
            CONSOLE_TRPC.error("code", error?.code);
            CONSOLE_TRPC.error("input", input);
            CONSOLE_TRPC.error("message", error?.message);
          }
        : undefined,
  });

export { handler as GET, handler as POST };
