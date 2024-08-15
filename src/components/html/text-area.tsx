import Text from "@/components/html/text";
import { cn } from "@/lib/functions";
import { VARIANTS } from "@/styles/variants";
import { type ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"textarea"> & {
  error: string | undefined;
};

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ placeholder, error, ...rest }, ref) => {
  const id = useId();

  return (
    <section className="gap-0.5 flex flex-col w-full">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <textarea className={VARIANTS.Input()} placeholder={placeholder} {...rest} ref={ref} id={id} />
      <Text className={cn("drop-shadow", { "opacity-0 -translate-y-2 -z-10": !error })} as="mini" color="red">
        {error}
      </Text>
    </section>
  );
});

export default TextArea;
