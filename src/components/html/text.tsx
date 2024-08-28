import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

type Props = ComponentProps<"div"> & VariantProps<typeof VARIANTS.Text>;

export default function Text({ children, className, as, color, ref, ...rest }: Props) {
  return (
    <div ref={ref} {...rest} className={cn(VARIANTS.Text({ className, color, as }))}>
      {children}
    </div>
  );
}
