import { env } from "@/env";
import "server-only";

export const token = env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_API_READ_TOKEN");
}
