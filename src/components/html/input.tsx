import Text from "@/components/html/text";
import { cn } from "@/lib/utils";
import { VARIANTS } from "@/styles";
import { type ComponentProps, useId } from "react";

type Props = ComponentProps<"input"> & {
  error: string | undefined;
  placeholder: string;
};

export default function Input({ placeholder, error, type, ref, ...rest }: Props) {
  const id = useId();
  return (
    <section className="gap-0.5 flex flex-col w-full">
      <label className="sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input className={VARIANTS.Input()} placeholder={placeholder} ref={ref} {...rest} id={id} type={type ?? "text"} />
      <Text className={cn("ml-0.5 shadow-xl", { "opacity-0 -translate-y-2 -z-10": !error })} as="mini" color="red">
        {error}
      </Text>
    </section>
  );
}
