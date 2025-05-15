import { tv } from "tailwind-variants";

export const COLORS = {
  black: "#202020",
  gray: "#d4d4d4",
  graydarker: "#AEAEAE",
  blue: "#2563eb",
};

export const VARIANTS = {
  Button: tv({
    base: "whitespace-nowrap flex items-center justify-center disabled:cursor-progress rounded-sm shadow active:scale-95",
    variants: {
      style: {
        reguler: "font-medium px-4 h-7 bg-blue-600 hover:bg-blue-800 disabled:bg-blue-800",
        close: "bg-graybg hover:bg-grayhover p-0.5",
      },
    },
    defaultVariants: {
      style: "reguler",
    },
  }),

  Input: tv({
    base: "w-full disabled:bg-graydisabled bg-graybg focus:bg-grayhover hover:bg-grayhover focus:border-grayborder disabled:cursor-not-allowed px-2 py-1 border-[1.5px] border-transparent placeholder:text-graydarker rounded-sm outline-none active:outline-none focus:outline-none",
  }),

  Box: tv({
    base: "rounded-sm flex items-center bg-graybg",
    variants: {
      style: {
        contact: "shadow text-xs md:text-sm gap-1 px-1.5 py-0.5 animate hover:bg-grayborder",
        techstack: "text-[0.65rem] md:text-xs px-[0.3rem] py-[0.1rem] gap-[0.2rem]",
      },
    },
  }),
};
