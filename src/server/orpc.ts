import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import { ENDPOINTS } from "@/app/urls";
import type { router } from "./router";

declare global {
  var $client: RouterClient<typeof router> | undefined;
}

const link = new RPCLink({
  url: () => {
    if (typeof window === "undefined") {
      throw new Error("RPCLink is not allowed on the server side.");
    }
    return `${window.location.origin}${ENDPOINTS.orpc}`;
  },
});

export const instance: RouterClient<typeof router> = globalThis.$client ?? createORPCClient(link);
export const api = instance;
