import type { Lang } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const isClient = typeof window !== "undefined";
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const loadToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const copyData = <T>(data: T): T => structuredClone(data);

export const getBaseUrl = (lang?: Lang) => {
  const addLang = () => (lang ? `/${lang}` : "");
  if (isClient) return `${window.location.origin}${addLang()}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${addLang()}`;
  return `http://localhost:${process.env.PORT ?? 3000}${addLang()}`;
};

export const getCurrentUrl = (path: string) => `${getBaseUrl()}${path}`;

export const getRussianAgeCounter = (age: number) => {
  let txt = "";
  let count = age % 100;

  if (count >= 5 && count <= 20) {
    txt = "лет";
  } else {
    count = age % 10;
    if (count === 1) {
      txt = "год";
    } else if (count >= 2 && count <= 4) {
      txt = "года";
    } else {
      txt = "лет";
    }
  }

  return txt;
};
