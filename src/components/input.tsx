import { cn } from "@/lib/functions";
import { type ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"input"> & {
  error: string | undefined;
  placeholder: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, error, type, ...rest }, ref) => {
  const id = useId();

  return (
    <section className="gap-0.5 flex flex-col w-full">
      <input placeholder={placeholder} ref={ref} {...rest} id={id} type={type ?? "text"} />
      <small className={cn("drop-shadow text-red-400 text-xs", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
    </section>
  );
});

export default Input;
