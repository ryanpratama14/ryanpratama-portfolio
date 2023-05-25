import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { navbarData } from "@/app/constants/constants";

export default function MobileMenu(): React.JSX.Element {
  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <Menu.Button className="themedText2nd themedBorder2nd themedBg font-semibold border-[1px] flex items-center gap-1.5 py-1 px-4 active:scale-95  outline-none rounded-md w-fit">
        <Icon icon="ri:menu-3-fill" width={20} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-6 origin-top-right flex flex-col gap-3 rounded-md focus:outline-none">
          {navbarData?.map((e, i: number) => {
            return (
              <Menu.Item key={i}>
                <a href={e?.href} className="btnSmaller w-full cursor-pointer">
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
