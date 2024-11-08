import Text from "@/components/html/text";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import { type ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"textarea"> & {
  error: string | undefined;
  placeholder: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ placeholder, error, ...rest }, ref) => {
  const id = useId();

  return (
    <section className="flex flex-col gap-0.5 w-full">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <textarea className={VARIANTS.Input()} placeholder={placeholder} ref={ref} {...rest} id={id} />
      <Text tag="small" className={cn("ml-0.5 shadow", { "opacity-0 -translate-y-2 -z-10": !error })} as="mini" color="red">
        {error}
      </Text>
    </section>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
