import { cn } from "@/lib/functions";
import { VARIANTS } from "@/styles/variants";
import { type ComponentProps, forwardRef } from "react";
import type { VariantProps } from "tailwind-variants";

type Props = ComponentProps<"div"> & VariantProps<typeof VARIANTS.Text>;

const Text = forwardRef<HTMLDivElement, Props>(({ children, className, as, color, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={cn(VARIANTS.Text({ className, color, as }))}>
      {children}
    </div>
  );
});

export default Text;
