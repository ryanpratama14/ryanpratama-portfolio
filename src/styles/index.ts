import { tv } from "tailwind-variants";

export const VARIANTS = {
  Button: tv({
    base: "whitespace-nowrap flex items-center justify-center disabled:cursor-progress rounded-sm shadow active:scale-95",
    variants: {
      style: {
        reguler: "font-medium px-4 h-7 bg-primary text-primary-foreground hover:bg-primary/80 disabled:bg-primary/60",
        close: "bg-muted hover:bg-accent p-0.5",
      },
    },
    defaultVariants: {
      style: "reguler",
    },
  }),

  Input: tv({
    base: "w-full disabled:bg-muted/50 bg-muted focus:bg-accent hover:bg-accent focus:border-border disabled:cursor-not-allowed px-2 py-1 border-[1.5px] border-transparent placeholder:text-muted-foreground rounded-sm outline-none active:outline-none focus:outline-none",
  }),

  Box: tv({
    base: "rounded-sm flex items-center bg-muted",
    variants: {
      style: {
        contact: "shadow text-xs md:text-sm gap-1 px-1.5 py-0.5 animate hover:bg-accent",
        techstack: "text-xxs md:text-xs px-[0.3rem] py-[0.1rem] md:py-0.5 gap-[0.2rem]",
      },
    },
  }),
};
