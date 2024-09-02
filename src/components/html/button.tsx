import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import { type ComponentProps, forwardRef } from "react";
import { PulseLoader } from "react-spinners";
import type { VariantProps } from "tailwind-variants";

type Props = ComponentProps<"button"> & VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode };

const Button = forwardRef<HTMLButtonElement, Props>(({ style, type, className, disabled, children, ...rest }, ref) => {
  return (
    <button disabled={disabled} {...rest} ref={ref} type={type ?? "button"} className={cn(VARIANTS.Button({ className, style }))}>
      {disabled ? <PulseLoader size={5} color="white" /> : children}
      <span className="sr-only">Button</span>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
