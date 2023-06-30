import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { resumeData } from "@/constants/constants";
import Link from "next/link";

export default function Resume(): React.JSX.Element {
  return (
    <Menu as="section" className="relative inline-block h-full">
      <Menu.Button className="outline-none flex gap-3 h-full items-center group select-none">
        <Icon
          icon="pepicons-pencil:cv-circle"
          className="text-3xl md:text-4xl rotate-[16deg] group-hover:rotate-0 group-hover:scale-110 animate"
        />
        <header className="relative h-full flex items-center">
          <span className="cursor-pointer z-[2] text-lg label">Resume</span>
          <div className="-skew-x-[16deg] absolute top-0 w-full h-full flex justify-center items-center z-[1]">
            <div className="w-6 h-full bg-turquoise group-hover:bg-bluedarker animate" />
            <div className="w-2 h-full bg-bluedarker group-hover:bg-white animate" />
          </div>
        </header>
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
        <Menu.Items className="outline-none absolute left-0 mt-3 flex gap-2">
          {resumeData.map((e, i: number) => {
            return (
              <Menu.Item key={i}>
                <Link
                  href={e.href}
                  target="_blank"
                  className={`shadow-xl rounded-full font-semibold flex justify-center items-center w-9 md:w-12 aspect-square ${
                    e.icon === "EN"
                      ? "bg-bluedarker text-white hover:bg-white hover:text-black"
                      : "bg-turquoise text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {e.icon}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
