import { cn } from "@/lib/functions";
import { type ComponentProps, forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

type Props = ComponentProps<"div"> & VariantProps<typeof VARIANTS>;

const Text = forwardRef<HTMLDivElement, Props>(({ children, className, as, color, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={cn(VARIANTS({ className, color, as }))}>
      {children}
    </div>
  );
});

export default Text;

const VARIANTS = tv({
  base: "animate",
  variants: {
    as: {
      heading: "text-xl md:text-2xl lg:text-3xl font-bold",
      menuTitle: "text-base lg:text-lg font-medium",
      contentTitle: "text-base",
      content: "text-sm lg:text-base",
      list: "text-xs lg:text-base",
      techstack: "text-xs lg:text-sm",
    },
    color: {
      gray: "text-gray",
      graydarker: "text-graydarker",
      white: "text-white",
    },
  },
  defaultVariants: {
    as: "content",
    color: "white",
  },
});
