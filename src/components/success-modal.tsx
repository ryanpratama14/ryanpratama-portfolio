"use client";

import Text from "@/components/html/text";
import { cn } from "@/lib/functions";
import { VARIANTS } from "@/styles";
import type { DictionaryStatic } from "@/types";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { Fragment } from "react";

type Props = {
  show: boolean;
  onClose: () => void;
  s: DictionaryStatic;
};

export default function SuccessModal({ show, onClose, s }: Props) {
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="flex flex-col gap-1 w-full max-w-md transform overflow-hidden rounded-md p-6 text-left shadow-xl animate bg-black border-2 border-graydarker/20">
                <DialogTitle as="section">
                  <Text as="contentTitle" className="font-medium">
                    <p>{s.DISCUSS_YOUR_PROJECT.formSent}</p>
                  </Text>
                </DialogTitle>

                <Text color="gray">
                  <p>{s.DISCUSS_YOUR_PROJECT.thankYou}</p>
                </Text>
                <button type="button" className={cn(VARIANTS.Button({ className: "mt-3 mx-auto" }))} onClick={onClose}>
                  {s.DISCUSS_YOUR_PROJECT.gotIt}
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
