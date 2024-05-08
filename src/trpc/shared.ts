import { isClient } from "@/lib/functions";
import type { AppRouter } from "@/server/api/root";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import SuperJSON from "superjson";

export const getBaseUrl = () => {
  if (isClient) return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const transformer = SuperJSON;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
