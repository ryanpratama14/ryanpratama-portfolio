import Iconify from "@/components/Iconify";
import { navbarData } from "@/lib/constants";
import type { Dictionary } from "@/types";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

type Props = { t: Dictionary };

export default function MobileMenu({ t }: Props) {
  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <Menu.Button className="flex items-center">
        <Iconify icon="ri:menu-3-fill" width={25} rotate={2} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-300"
        enterFrom="transform -translate-y-2 opacity-0"
        enterTo="transform opacity-100 scale-100"
        leave="transition duration-300"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform -translate-y-2 opacity-0"
      >
        <Menu.Items className="absolute left-0 mt-6 flex flex-col gap-3">
          {navbarData.map((e) => {
            return (
              <Menu.Item key={e.href}>
                <a href={e.href} className="btn-nav">
                  <span>
                    <Iconify icon={e.icon} width={20} />
                  </span>
                  {t.NAVBAR_DATA[e.label]}
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
