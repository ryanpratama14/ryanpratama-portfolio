import type { ComponentProps } from "react";
import { PulseLoader } from "react-spinners";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";

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
      {isPending ? <PulseLoader size={5} color="white" /> : children || <span className="sr-only">Button</span>}
    </button>
  );
}
