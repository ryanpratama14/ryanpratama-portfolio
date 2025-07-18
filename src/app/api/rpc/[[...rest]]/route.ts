import { ORPCError, onError, ValidationError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { BatchHandlerPlugin } from "@orpc/server/plugins";
import { ZodError, z } from "zod/v4";
import { ENDPOINTS } from "@/app/urls";
import { router } from "@/server/router";

const handler = new RPCHandler(router, {
  plugins: [new BatchHandlerPlugin()],
  clientInterceptors: [
    onError((error) => {
      if (error instanceof ORPCError && error.code === "BAD_REQUEST" && error.cause instanceof ValidationError) {
        const zodError = new ZodError(error.cause.issues as z.core.$ZodIssue[]);

        throw new ORPCError("INPUT_VALIDATION_FAILED", {
          status: 422,
          data: z.flattenError(zodError),
          cause: error.cause,
          message: z.prettifyError(zodError),
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
