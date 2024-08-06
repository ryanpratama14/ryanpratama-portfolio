import { cn } from "@/lib/functions";
import { type ComponentProps, forwardRef, useId } from "react";

type InputProps = ComponentProps<"textarea"> & {
  error: string | undefined;
  label: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(({ label, error, ...rest }, ref) => {
  const id = useId();

  return (
    <section className={cn("w-full", { "gap-0.5 flex flex-col": label })}>
      <label className="text-left text-gray2 p" htmlFor={id}>
        {label}
      </label>
      <textarea {...rest} ref={ref} className={cn("border-2 border-transparent", { "border-red-400": error })} id={id} />
      <small className={cn("drop-shadow text-red-400", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
    </section>
  );
});

export default TextArea;
