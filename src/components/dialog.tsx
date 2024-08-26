import Button from "@/components/html/button";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Dialog as DialogHead, DialogPanel } from "@headlessui/react";
import { Icon } from "@iconify-icon/react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNameDialog?: string;
};

export default function Dialog({ open, onClose, children, className, classNameDialog, ...rest }: Props) {
  return (
    <DialogHead
      open={open}
      onClose={onClose}
      transition
      className="z-50 outline-none bg-black/60 fixed inset-0 flex items-center justify-center px-shorter animate data-[closed]:opacity-0"
    >
      <DialogPanel
        transition
        className={cn(
          "data-[closed]:scale-90 data-[closed]:translate-y-6 animate w-full max-w-md relative rounded-md p-6 shadow-xl bg-black border-1 border-grayborder",
          classNameDialog,
        )}
      >
        <Button onClick={onClose} style="close" className="absolute top-3 right-3">
          <Icon icon={ICONS.close} width={22.5} />
        </Button>
        <section {...rest} className={cn(className)}>
          {children}
        </section>
      </DialogPanel>
    </DialogHead>
  );
}
