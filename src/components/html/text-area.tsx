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
      <textarea rows={4} className={VARIANTS.Input()} placeholder={placeholder} ref={ref} {...rest} id={id} />
      <small className={cn("ml-0.5 text-red-400", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
    </section>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
