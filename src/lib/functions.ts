import type { Lang } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const currentTime = new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
const isClient = typeof window !== "undefined";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const loadToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const copyData = <T>(data: T): T => structuredClone(data);
export const consoleError = (error: string) => console.error(`❌ ${currentTime} 👉 ${error}`);

export const getBaseUrl = (lang?: Lang) => {
  const addLang = () => (lang ? `/${lang}` : "");
  if (isClient) return `${window.location.origin}${addLang()}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${addLang()}`;
  return `http://localhost:${process.env.PORT ?? 3000}${addLang()}`;
};
