import { cn } from "@/lib/utils";
import { Dialog as DialogHead, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
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
      className="fixed inset-0 flex items-center justify-center bg-black/80 z-[100] p-4 animate data-[closed]:opacity-0"
    >
      <div className="max-h-full flex justify-center">
        <DialogPanel
          transition
          className={cn(
            "overflow-y-scroll data-[closed]:scale-90 animate rounded-sm shadow max-w-lg relative flex flex-col border border-grayborder",
            classNameDialog,
          )}
        >
          <section className="flex justify-end p-1.5 border-b border-grayborder bg-black">
            <Button unstyled onClick={onClose} className="flex items-center justify-center p-0.5 bg-red-500 hover:bg-red-700 text-white rounded-sm">
              <X size={17.5} />
            </Button>
          </section>

          <section {...rest} className={cn("p-6 bg-black", className)}>
            {children}
          </section>
        </DialogPanel>
      </div>
    </DialogHead>
  );
}
