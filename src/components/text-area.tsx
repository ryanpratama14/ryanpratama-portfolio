import { cn } from "@/lib/functions";
import { type ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"textarea"> & {
  error: string | undefined;
};

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ placeholder, error, ...rest }, ref) => {
  const id = useId();

  return (
    <section className="gap-0.5 flex flex-col w-full">
      <textarea placeholder={placeholder} {...rest} ref={ref} id={id} />
      <small className={cn("drop-shadow text-red-400 text-xs", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
    </section>
  );
});

export default TextArea;
