import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { ComponentProps } from "react";
import { PulseLoader } from "react-spinners";
import type { VariantProps } from "tailwind-variants";

type Props = ComponentProps<"button"> & VariantProps<typeof VARIANTS.Button> & { children: React.ReactNode };

export default function Button({ style, type, className, disabled, children, ...rest }: Props) {
  return (
    <button disabled={disabled} {...rest} type={type ?? "button"} className={cn(VARIANTS.Button({ className, style }))}>
      {disabled ? <PulseLoader size={5} color="white" /> : children}
      <span className="sr-only">Button</span>
    </button>
  );
}
