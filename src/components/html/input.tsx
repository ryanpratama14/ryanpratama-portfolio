import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";

type Props = ComponentProps<"input"> & {
  error: string | undefined;
  placeholder: string;
};

export default function Input({ placeholder, error, name, type, ...rest }: Props) {
  return (
    <section className="flex flex-col gap-0.5 w-full">
      <label className="sr-only" htmlFor={name}>
        {placeholder}
      </label>
      <input className={VARIANTS.Input()} placeholder={placeholder} {...rest} id={name} name={name} type={type ?? "text"} />
      <small className={cn("ml-0.5 text-red-400", { "opacity-0 -translate-y-2 -z-10": !error })}>{error}</small>
    </section>
  );
}
