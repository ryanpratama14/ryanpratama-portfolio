import Text from "@/components/html/text";
import { cn } from "@/lib/functions";
import { VARIANTS } from "@/styles";
import { type ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"textarea"> & {
  error: string | undefined;
  placeholder: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ placeholder, error, ...rest }, ref) => {
  const id = useId();

  return (
    <section className="gap-0.5 flex flex-col w-full">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <textarea className={VARIANTS.Input()} placeholder={placeholder} {...rest} ref={ref} id={id} />
      <Text className={cn("ml-0.5 shadow-xl", { "opacity-0 -translate-y-2 -z-10": !error })} as="mini" color="red">
        {error}
      </Text>
    </section>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
