import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import { DEFAULT_LANG, LANGUAGES } from "./internationalization";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const isClient = typeof window !== "undefined";

export const loadToTop = () => {
  if (isClient) window.scrollTo({ top: 0, behavior: "smooth" });
};

export const consoleError = (error: string) => {
  console.error(
    `❌ ${dayjs()
      .toDate()
      .toLocaleTimeString(LANGUAGES[DEFAULT_LANG].locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" })} 👉 ${error}`,
  );
};
