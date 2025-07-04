import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { BatchLinkPlugin } from "@orpc/client/plugins";
import type { RouterClient } from "@orpc/server";
import type { router } from "./router";

declare global {
  var $client: RouterClient<typeof router> | undefined;
}

const link = new RPCLink({
  url: `${typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"}/rpc`,
  plugins: [new BatchLinkPlugin({ groups: [{ condition: () => true, context: {} }] })],
});

export const instance: RouterClient<typeof router> = globalThis.$client ?? createORPCClient(link);
export const api = instance;
