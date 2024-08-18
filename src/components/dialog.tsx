"use client";

import Button from "@/components/html/button";
import Iconify from "@/components/html/iconify";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { DialogPanel, Dialog as HeadlessDialog } from "@headlessui/react";
import type { ComponentProps } from "react";

type Props = ComponentProps<"section"> & {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNameDialog?: string;
};

export default function Dialog({ open, onClose, children, className, classNameDialog, ...rest }: Props) {
  return (
    <HeadlessDialog
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
          <Iconify icon={ICONS.close} width={22.5} />
        </Button>
        <section {...rest} className={cn(className)}>
          {children}
        </section>
      </DialogPanel>
    </HeadlessDialog>
  );
}
