"use client";

import Iconify from "@/components/html/iconify";
import { ICONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { VARIANTS } from "@/styles";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { type ComponentProps, Fragment } from "react";

type Props = ComponentProps<"section"> & {
  show: boolean;
  onClose: () => void;
  classNameDiv?: string;
};

export default function Modal({ show, onClose, children, className, classNameDiv, ...rest }: Props) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="section" className="relative z-50" onClose={onClose}>
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
                className={cn("w-full max-w-md relative animate rounded-md p-6 shadow-xl bg-black border-2 border-graydarker/20", classNameDiv)}
              >
                <button onClick={onClose} type="button" className={cn(VARIANTS.Button({ style: "close", className: "absolute top-3 right-3" }))}>
                  <span className="sr-only">Close</span>
                  <Iconify icon={ICONS.close} width={22.5} />
                </button>
                <section {...rest} className={cn(className)}>
                  {children}
                </section>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
