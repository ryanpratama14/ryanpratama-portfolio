"server only";

import { createRouterClient } from "@orpc/server";
import { headers } from "next/headers";
import { auth } from "./auth";
import { router } from "./router";

globalThis.$client = createRouterClient(router, {
  context: async () => ({ headers: await headers(), session: await auth() }),
});
