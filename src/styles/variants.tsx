import { tv } from "tailwind-variants";

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
};
