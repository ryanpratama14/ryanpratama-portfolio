import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { portfolioData } from "@/app/constants/constants";

export default function Resume(): React.JSX.Element {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="btnSpecial">
        <span>
          <Icon icon="mdi:resume" width={20} />
        </span>
        Resume
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
        <Menu.Items className="absolute left-0 mt-6 origin-top-right flex flex-col gap-3 rounded-md focus:outline-none">
          {portfolioData?.map((e, i: number) => {
            return (
              <Menu.Item key={i}>
                <a
                  href={e?.href}
                  target="_blank"
                  className="btnSmaller w-full cursor-pointer"
                >
                  <div className="flex gap-2 w-full items-center">
                    <div className="px-1 py-0 btnSpecial text-sm">
                      {e?.icon}
                    </div>
                    {e?.label}
                  </div>
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
