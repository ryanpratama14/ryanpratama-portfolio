import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { navbarData } from "@/constants/constants";
import Iconify from "@/components/Iconify";

export default function MobileMenu(): React.JSX.Element {
  return (
    <Menu as="div" className="relative inline-block md:hidden">
      <Menu.Button className="border-white font-semibold border-[1px] flex items-center gap-1.5 py-1 px-4 outline-none rounded-3xl w-fit">
        <Iconify icon="ri:menu-3-fill" width={20} />
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
        <Menu.Items className="absolute right-0 mt-6 flex flex-col gap-3">
          {navbarData.map((e, i: number) => {
            return (
              <Menu.Item key={i}>
                <a href={e.href} className="btn-nav">
                  <span>
                    <Iconify icon={e.icon} width={20} />
                  </span>
                  {e.label}
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
