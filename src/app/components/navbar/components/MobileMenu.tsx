import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { navbarData } from "@/app/constants/constants";

export default function MobileMenu(): React.JSX.Element {
  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <Menu.Button className="border-white font-semibold border-[1px] flex items-center gap-1.5 py-1 px-4 active:scale-95 outline-none rounded-3xl w-fit">
        <Icon icon="ri:menu-3-fill" width={20} />
      </Menu.Button>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-6 origin-top-right flex flex-col gap-3 rounded-3xl focus:outline-none">
          {navbarData?.map((e, i: number) => {
            return (
              <Menu.Item key={i}>
                <a
                  href={e?.href}
                  className="flex text-lg gap-2 items-center px-4 py-0.5 rounded-3xl border-[1px] border-white bg-black hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[-2px_2px_0px_0px_#ffffff]"
                >
                  <span>
                    <Icon icon={e?.icon} width={20} />
                  </span>
                  {e?.label}
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
