import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { resumeData } from "@/constants/constants";

export default function Resume(): React.JSX.Element {
  return (
    <Menu as="div" className="relative inline-block h-full">
      <Menu.Button className="flex gap-3 h-full items-center group">
        <Icon
          icon="pepicons-pencil:cv-circle"
          className="text-4xl rotate-[16deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-300"
        />
        <div className="relative h-full flex items-center">
          <span className="cursor-pointer z-[2] drop-shadow label text-lg">
            Resume
          </span>
          <div className="-skew-x-[16deg] absolute top-0 w-full h-full flex justify-center items-center z-[1]">
            <div className="w-6 h-full bg-turquoise group-hover:bg-bluedarker animate" />
            <div className="w-2 h-full bg-bluedarker group-hover:bg-white animate" />
          </div>
        </div>
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
        <Menu.Items className="absolute left-0 mt-4 flex gap-3 rounded-3xl focus:outline-none">
          {resumeData?.map((e, i: number) => {
            return (
              <Menu.Item key={i}>
                <a
                  href={e?.href}
                  target="_blank"
                  className={`rounded-full animate font-semibold flex justify-center items-center w-10 md:w-12 aspect-square ${
                    e?.icon === "EN"
                      ? "bg-bluedarker text-white hover:bg-white hover:text-black "
                      : "bg-turquoise text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {e?.icon}
                </a>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
