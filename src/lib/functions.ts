import type { Lang } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const isClient = typeof window !== "undefined";
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const loadToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const copyData = <T>(data: T): T => structuredClone(data);
export const getDate = (dateString?: string) => (dateString ? new Date(dateString) : new Date());

// url helpers
const getBaseUrl = () => {
  if (isClient) return `${window.location.origin}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const ENDPOINTS = {
  trpc: "/api/trpc",
};

export const URLS = {
  BASE: getBaseUrl(),
  BASE_TRPC: `${getBaseUrl()}${ENDPOINTS.trpc}`,
  BASE_LANG: (lang: Lang) => `${getBaseUrl()}/${lang}`,
  FULL: (path: string) => `${getBaseUrl()}${path}`,
};
