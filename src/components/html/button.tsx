import type { ComponentProps } from "react";
import type { VariantProps } from "tailwind-variants";

import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import { Loader } from "lucide-react";

type Props = ComponentProps<"button"> &
  VariantProps<typeof VARIANTS.Button> & {
    children: React.ReactNode;
    unstyled?: boolean;
    isPending?: boolean;
  };

export default function Button({ style, type, className, disabled, children, unstyled, isPending, ...rest }: Props) {
  return (
    <button
      disabled={disabled || isPending}
      {...rest}
      type={type ?? "button"}
      className={cn(unstyled ? className : VARIANTS.Button({ className, style }))}
    >
      {isPending ? <Loader className="size-4 animate-spin" /> : children || <span className="sr-only">Button</span>}
    </button>
  );
}
