import { ORPCError, onError, ValidationError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { BatchHandlerPlugin } from "@orpc/server/plugins";
import * as v from "valibot";

import { ENDPOINTS } from "@/app/urls";
import { router } from "@/server/router";

const handler = new RPCHandler(router, {
  plugins: [new BatchHandlerPlugin()],
  clientInterceptors: [
    onError((error) => {
      if (error instanceof ORPCError && error.code === "BAD_REQUEST" && error.cause instanceof ValidationError) {
        const issues = error.cause.issues as [v.BaseIssue<unknown>, ...v.BaseIssue<unknown>[]];
        const flat = v.flatten(issues);

        throw new ORPCError("INPUT_VALIDATION_FAILED", {
          status: 422,
          data: {
            formErrors: flat.root ?? [],
            fieldErrors: flat.nested ?? {},
          },
          cause: error.cause,
          message: v.summarize(issues),
        });
      }

      if (error instanceof ORPCError && error.code === "INTERNAL_SERVER_ERROR" && error.cause instanceof ValidationError) {
        throw new ORPCError("OUTPUT_VALIDATION_FAILED", { cause: error.cause });
      }
    }),
  ],
});

const handleRequest = async (request: Request) => {
  const { response } = await handler.handle(request, { prefix: ENDPOINTS.rpc, context: {} });
  return response ?? new Response("Not found", { status: 404 });
};

export const HEAD = handleRequest;
export const GET = handleRequest;
export const POST = handleRequest;
export const PUT = handleRequest;
export const PATCH = handleRequest;
export const DELETE = handleRequest;
