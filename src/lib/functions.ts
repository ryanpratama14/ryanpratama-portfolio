import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { DEFAULT_LANGUAGE } from "./internationalization";

export const isClient = typeof window !== "undefined";
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const loadToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const copyData = <T>(data: T): T => structuredClone(data);
export const formatDate = (date: Date, locale: string) => date.toLocaleDateString(locale, { month: "short", year: "numeric" });

export const consoleError = (error: string) => {
  console.error(
    `❌ ${dayjs().toDate().toLocaleTimeString(DEFAULT_LANGUAGE.locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" })} 👉 ${error}`,
  );
};

export const getBaseUrl = () => {
  if (isClient) return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
};
