"use client";

import Button from "@/components/html/button";
import Iconify from "@/components/html/iconify";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { DialogPanel, Dialog as HeadlessDialog, Transition, TransitionChild } from "@headlessui/react";
import { type ComponentProps, Fragment } from "react";

type Props = ComponentProps<"section"> & {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  classNameDialog?: string;
};

export default function Dialog({ show, onClose, children, className, classNameDialog, ...rest }: Props) {
  return (
    <Transition appear show={show} as={Fragment}>
      <HeadlessDialog as="section" className="relative z-50" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center px-shorter text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel
                className={cn("w-full max-w-md relative animate rounded-md p-6 shadow-xl bg-black border-2 border-graydarker/20", classNameDialog)}
              >
                <Button onClick={onClose} style="close" className="absolute top-3 right-3">
                  <Iconify icon={ICONS.close} width={22.5} />
                </Button>
                <section {...rest} className={cn(className)}>
                  {children}
                </section>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </HeadlessDialog>
    </Transition>
  );
}
