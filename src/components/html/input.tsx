import Text from "@/components/html/text";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import { type ComponentProps, forwardRef, useId } from "react";

type Props = ComponentProps<"input"> & {
  error: string | undefined;
  placeholder: string;
};

const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, error, type, ...rest }, ref) => {
  const id = useId();

  return (
    <section className="gap-0.5 flex flex-col w-full">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input className={VARIANTS.Input()} placeholder={placeholder} ref={ref} {...rest} id={id} type={type ?? "text"} />
      <Text tag="small" className={cn("ml-0.5 shadow", { "opacity-0 -translate-y-2 -z-10": !error })} as="mini" color="red">
        {error}
      </Text>
    </section>
  );
});

Input.displayName = "Input";

export default Input;
