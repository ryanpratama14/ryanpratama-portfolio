import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import type { ComponentProps } from "react";

type Props = ComponentProps<"textarea"> & {
  error: string | undefined;
  placeholder: string;
};

export default function TextArea({ placeholder, error, name, ...rest }: Props) {
  return (
    <section className="flex flex-col gap-0.5 w-full">
      <label className="sr-only" htmlFor={name}>
        {placeholder}
      </label>
      <textarea rows={4} className={VARIANTS.Input()} placeholder={placeholder} {...rest} id={name} name={name} />
      <small className={cn("ml-0.5 text-red-400", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
    </section>
  );
}
