import { env } from "@/env";

export const apiVersion = "2025-02-19";
export const dataset = assertValue(env.NEXT_PUBLIC_SANITY_DATASET, "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
export const projectId = assertValue(env.NEXT_PUBLIC_SANITY_PROJECT_ID, "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
