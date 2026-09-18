import { Dialog as DialogHead, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import Button from "./html/button";

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
      className="fixed inset-0 flex items-center justify-center bg-background/80 z-100 p-4 animate data-[closed]:opacity-0"
    >
      <div className="max-h-full flex justify-center">
        <DialogPanel
          transition
          className={cn(
            "overflow-y-scroll data-[closed]:scale-90 animate rounded-sm shadow max-w-lg relative flex flex-col border border-border bg-card",
            classNameDialog,
          )}
        >
          <section className="flex justify-end p-1.5 border-b border-border bg-card">
            <Button unstyled onClick={onClose} className="flex items-center justify-center p-0.5 bg-destructive hover:bg-destructive/80 text-foreground rounded-sm">
              <X size={17.5} />
            </Button>
          </section>

          <section {...rest} className={cn("p-6 bg-card text-card-foreground", className)}>
            {children}
          </section>
        </DialogPanel>
      </div>
    </DialogHead>
  );
}
