import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const loadToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
export const copyData = <T>(data: T): T => structuredClone(data);
