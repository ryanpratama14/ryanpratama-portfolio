"use client";

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
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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

        <div className="fixed inset-0 overflow-y-auto text-black">
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
              <DialogPanel className="flex flex-col gap-2 w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left shadow-xl animate">
                <DialogTitle as="h5" className="h5">
                  {s.DISCUSS_YOUR_PROJECT.formSent}
                </DialogTitle>

                <p className="text-black text-pretty">{s.DISCUSS_YOUR_PROJECT.thankYou}</p>

                <section className="flex items-center justify-center mt-2">
                  <section className="relative group ">
                    <button
                      type="button"
                      className="w-fit px-4 py-2 animate group-hover:text-white border-2 border-black group-hover:border-transparent rounded-md"
                      onClick={onClose}
                    >
                      {s.DISCUSS_YOUR_PROJECT.gotIt}
                    </button>
                    <div className="rounded-md centered -z-10 absolute h-0 w-0 group-hover:h-full group-hover:w-full animate bg-bluedarker" />
                  </section>
                </section>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
