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
        menuTitle: "text-base lg:text-lg font-semibold",
        contentTitle: "text-base",
        content: "text-sm lg:text-base",
        small: "text-xs lg:text-base",
        techstack: "text-xs lg:text-sm",
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
    base: "rounded-full disabled:hover:bg-blue-600 hover:bg-blue-800 font-medium bg-blue-600 px-4 py-1 shadow-xl animate w-max active:scale-95 animate text-sm lg:text-base",
  }),

  Input: tv({
    base: "text-sm lg:text-base px-2 py-1 bg-graydarker/20 border-2 border-transparent focus:border-graydarker/20 focus:bg-graydarker/30 hover:bg-graydarker/30 animate placeholder:text-graydarker rounded-md outline-none active:outline-none focus:outline-none",
  }),

  Box: tv({
    base: "rounded-md bg-graydarker/20 hover:bg-graydarker/30 flex items-center shadow-xl animate",
    variants: {
      style: {
        contact: "gap-1.5 px-2 py-0.5 hover:scale-[1.075]",
        techstack: "gap-1 px-1.5 py-0.5 hover:scale-[1.05]",
      },
    },
  }),

  Main: tv({
    base: "pt-shorter pb-24 px-shorter xl:px-52 2xl:px-96 3xl:px-[32rem] animate flex flex-col gap-4 min-h-screen",
  }),
};
