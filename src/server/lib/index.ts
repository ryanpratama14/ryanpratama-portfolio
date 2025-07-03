import { ORPCError, type ORPCErrorCode } from "@orpc/client";
import type { ORPCOkCode } from "@/types";

const time = `${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })} 👉`;

export const THROW = {
  ok: <Input = unknown, Data = unknown>({
    code,
    message = OK_MESSAGES[code],
    input = null as Input,
    data = null as Data,
  }: {
    code: ORPCOkCode;
    message?: string | null | undefined;
    input?: Input;
    data: Data;
  }) => {
    return { input, data, code, message };
  },
  error: (code: ORPCErrorCode, message?: string | null | undefined) => {
    throw new ORPCError(code, { message: message ?? ERROR_MESSAGES[code] });
  },
};

export const CONSOLE = {
  info: (key: string, message: unknown) => console.info(`🔵 ${time} ${key}:`, message),
  ok: (key: string, message: unknown) => console.log(`🟢 ${time} ${key}:`, message),
  error: (key: string, message: unknown) => console.error(`🔴 ${time} ${key}:`, message),
};

export const ERROR_MESSAGES: Record<ORPCErrorCode, string> = {
  NOT_ACCEPTABLE: "The server cannot generate a response that is acceptable according to the request's Accept headers.",
  PAYMENT_REQUIRED: "Access is restricted. A valid payment or subscription is required to proceed with this service.",
  PARSE_ERROR: "The server encountered an issue while parsing your request. Please verify the request format and syntax.",
  BAD_REQUEST: "The request is invalid or malformed. Ensure all required parameters are correctly provided.",
  INTERNAL_SERVER_ERROR: "An unexpected error occurred on the server. Please try again later or contact support if the issue persists.",
  NOT_IMPLEMENTED: "This functionality is currently unavailable. It has not yet been implemented by the server.",
  UNAUTHORIZED: "Access denied. Authentication credentials are missing or invalid. Please log in and try again.",
  FORBIDDEN: "You do not have the necessary permissions to perform this action. Please contact the administrator if you believe this is an error.",
  NOT_FOUND: "The requested resource could not be located. It may have been removed, renamed, or never existed.",
  METHOD_NOT_SUPPORTED: "The HTTP method used is not supported for this endpoint. Please refer to the API documentation.",
  UNSUPPORTED_MEDIA_TYPE: "The media type of the request is not supported. Please use a valid Content-Type header.",
  TIMEOUT: "The request timed out. The server did not receive a response within the expected timeframe.",
  CONFLICT: "A conflict occurred due to the current state of the resource. Please resolve any conflicting changes before retrying.",
  PRECONDITION_FAILED: "The request did not meet one or more preconditions. Please ensure all conditions are satisfied.",
  PAYLOAD_TOO_LARGE: "The size of the request exceeds the server's allowed limit. Consider reducing the payload size.",
  UNPROCESSABLE_CONTENT: "The server understands the request but was unable to process the contained instructions. Please verify the data.",
  TOO_MANY_REQUESTS: "Rate limit exceeded. You have made too many requests in a short period. Please wait and try again.",
  CLIENT_CLOSED_REQUEST: "The client closed the connection before the request was completed. Please retry the operation if needed.",
  BAD_GATEWAY: "The server received an invalid response from an upstream service. Please try again or contact support.",
  SERVICE_UNAVAILABLE: "The service is temporarily unavailable due to maintenance or overload. Please try again later.",
  GATEWAY_TIMEOUT: "The gateway did not receive a timely response from the upstream server. Please retry the request later.",
};

export const OK_MESSAGES: Record<ORPCOkCode, string> = {
  OK: "The request was successfully processed.",
  CREATED: "The resource was created successfully and is now available.",
  ACCEPTED: "The request has been accepted for processing, but the operation is not yet complete.",
  NO_CONTENT: "The request was successful, but there is no content to return.",
  RESET_CONTENT: "The request was successful. Please reset the view or form as appropriate.",
  PARTIAL_CONTENT: "The server successfully processed part of the request. Additional actions may be required to complete it.",
};

export const parseCookies = (cookieHeader: string | null) => {
  if (!cookieHeader) return null;
  return Object.fromEntries(
    cookieHeader.split("; ").map((cookie) => {
      const [key, ...rest] = cookie.split("=");
      return [key, rest.join("=")];
    }),
  );
};
