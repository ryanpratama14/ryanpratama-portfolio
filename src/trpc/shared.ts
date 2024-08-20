import { DEFAULT_LANG, useLanguage } from "@/lib/internationalization";
import type { AppRouter } from "@/server/api/root";
import { QueryClient, defaultShouldDehydrateQuery } from "@tanstack/react-query";
import { TRPCError, type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import type { TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc";
import SuperJSON from "superjson";

export const transformer = SuperJSON;
export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { staleTime: 30 * 1000 },
      dehydrate: {
        serializeData: transformer.serialize,
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      },
      hydrate: { deserializeData: transformer.deserialize },
    },
  });
};

const log = `${useLanguage(DEFAULT_LANG).currentTime} 👉`;
export const CONSOLE_TRPC = {
  log: (message: string) => console.log(`🔵 ${log} ${message}`),
  ok: (message: string) => console.log(`🟢 ${log} ${message}`),
  error: (message: string) => console.error(`🔴 ${log} ${message}`),
};

export const THROW_TRPC = {
  ok: ({ code, message, input }: { code: TRPC_OK_CODE_KEY; message?: string; input?: unknown }) => {
    CONSOLE_TRPC.ok("tRPC success");
    if (input) CONSOLE_TRPC.ok(`input: ${JSON.stringify(input) ?? null}`);
    CONSOLE_TRPC.ok(`code: ${code}`);
    CONSOLE_TRPC.ok(`message: ${message ?? OK_MESSAGES[code]}`);
    return { code, message: message ?? OK_MESSAGES[code] };
  },

  error: ({ code, message }: { code: TRPC_ERROR_CODE_KEY; message?: string }) => {
    throw new TRPCError({ code, message: message ?? ERROR_MESSAGES[code] });
  },
};

const ERROR_MESSAGES: Record<TRPC_ERROR_CODE_KEY, string> = {
  PARSE_ERROR: "Error parsing the request. Please check the syntax of your request.",
  BAD_REQUEST: "Invalid request. Please provide valid request parameters.",
  INTERNAL_SERVER_ERROR: "Internal server error. Please try again later.",
  NOT_IMPLEMENTED: "Feature not implemented. This functionality is currently unavailable.",
  UNAUTHORIZED: "Unauthorized access. Please authenticate to access this resource.",
  FORBIDDEN: "Access forbidden. You do not have permission to access this resource.",
  NOT_FOUND: "Resource not found. The requested resource does not exist.",
  METHOD_NOT_SUPPORTED: "HTTP method not supported. Please use a supported HTTP method.",
  UNSUPPORTED_MEDIA_TYPE: "Media type not supported. Please use a supported media type.",
  TIMEOUT: "Request timeout. The server did not receive a timely response.",
  CONFLICT: "Conflict in resource state. There is a conflict with the current state of the resource.",
  PRECONDITION_FAILED: "Precondition failed for the request. Please meet the required conditions.",
  PAYLOAD_TOO_LARGE: "Request payload too large. The size of the request payload exceeds the limit.",
  UNPROCESSABLE_CONTENT: "Unprocessable request content. The request content is not valid or cannot be processed.",
  TOO_MANY_REQUESTS: "Too many requests. Please try again later.",
  CLIENT_CLOSED_REQUEST: "Client closed the request. The client terminated the request unexpectedly.",
  BAD_GATEWAY: "Bad gateway. The server received an invalid response from the upstream server.",
  SERVICE_UNAVAILABLE: "Service unavailable. The server is currently unable to handle the request.",
  GATEWAY_TIMEOUT: "Gateway timeout. The server did not receive a timely response from the upstream server.",
};

const OK_MESSAGES: Record<TRPC_OK_CODE_KEY, string> = {
  OK: "OK",
  CREATED: "Resource created successfully.",
  ACCEPTED: "Request accepted.",
  NO_CONTENT: "No content available.",
  RESET_CONTENT: "Reset content successful.",
  PARTIAL_CONTENT: "Partial content received successfully.",
};

export type TRPC_OK_CODE_KEY = "OK" | "CREATED" | "ACCEPTED" | "NO_CONTENT" | "RESET_CONTENT" | "PARTIAL_CONTENT";
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
