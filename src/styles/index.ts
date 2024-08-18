import { tv } from "tailwind-variants";

export const COLORS = {
  black: "#202020",
  gray: "#d4d4d4",
  graydarker: "#AEAEAE",
};

export const VARIANTS = {
  Text: tv({
    base: "animate",
    variants: {
      as: {
        heading: "text-xl md:text-2xl lg:text-3xl font-bold",
        menuTitle: "text-base md:text-lg font-semibold",
        contentTitle: "text-base",
        content: "text-sm md:text-base",
        small: "text-xs md:text-sm",
        mini: "text-xs",
      },
      color: {
        gray: "text-gray",
        graydarker: "text-graydarker",
        white: "text-white",
        red: "text-red-400",
      },
    },
    defaultVariants: {
      as: "content",
      color: "white",
    },
  }),

  Button: tv({
    base: "animate disabled:cursor-progress rounded-full shadow-xl active:scale-95",
    variants: {
      style: {
        reguler: "font-medium px-4 py-1 w-max text-sm md:text-base bg-blue-600 hover:bg-blue-800 disabled:bg-blue-800",
        close: "bg-graydarker/20 hover:bg-graydarker/40 p-0.5",
      },
    },
    defaultVariants: {
      style: "reguler",
    },
  }),

  Input: tv({
    base: "bg-graydarker/20 disabled:bg-graydarker/10 hover:bg-graydarker/30 focus:bg-graydarker/30 disabled:cursor-not-allowed text-sm md:text-base px-2 py-1 border-[1.5px] border-transparent focus:border-graydarker/40 animate placeholder:text-graydarker rounded-md outline-none active:outline-none focus:outline-none",
  }),

  Box: tv({
    base: "border-[0.75px] border-graydarker/40 rounded-md bg-graydarker/20 hover:bg-graydarker/40 flex items-center shadow-xl animate hover:scale-[1.025] md:hover:scale-[1.05]",
    variants: {
      style: {
        contact: "text-sm md:text-base gap-1 px-2 py-0.5",
        techstack: "text-xs md:text-sm px-1 py-[0.1rem] gap-[0.2rem] md:px-1.5 md:py-0.5 md:gap-1",
      },
    },
  }),

  Main: tv({
    base: "pt-shorter pb-20 px-shorter xl:px-52 2xl:px-96 3xl:px-[32rem] animate flex flex-col gap-4 min-h-screen",
  }),
};
