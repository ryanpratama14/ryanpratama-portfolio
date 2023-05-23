"use client";
import avatar from "../../../public/assets/avatar.jpeg";
import Image from "next/image";
import Theme from "./Theme";
import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useScrollPosition } from "@/hooks/UseScrollPosition";
import { LoadToTop } from "@/utils/utils";

export default function Navbar(): React.JSX.Element {
  const navbarData: NavbarItems[] = [
    {
      href: "#about",
      icon: "mdi:about-circle-outline",
      label: "About",
    },
    {
      href: "#projects",
      icon: "ant-design:project-outlined",
      label: "Projects",
    },
    {
      href: "#contact",
      icon: "material-symbols:contact-emergency-outline",
      label: "Contact",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`animate flex justify-between fixed w-full top-0 px-normal py-3 z-[5] md:py-4 ${
        scrollPosition > 1 && "shadow-md backdrop-blur-[3px]"
      }`}
    >
      <div className="flex gap-4 items-center">
        <div onClick={LoadToTop} className="cursor-pointer">
          <Image
            src={avatar}
            className="rounded-full w-8"
            alt="ru.ryanpratama@gmail.com"
          />
        </div>
        <a className="btnSpecial" target="_blank" href="/Resume.pdf">
          <span>
            <Icon icon="mdi:resume" width={20} />
          </span>
          Resume
        </a>
      </div>
      <div className="flex gap-4 items-center">
        {navbarData?.map((e, i: number) => {
          return (
            <a
              key={i}
              href={e?.href}
              className="btnSmaller cursor-pointer hidden md:flex"
            >
              <span>
                <Icon icon={e?.icon} width={20} />
              </span>
              {e?.label}
            </a>
          );
        })}
        <Theme />
        {/* Mobile Dropdown Menu */}
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
            <Menu.Items className="absolute right-0 mt-6 origin-top-right f-col gap-3 rounded-md focus:outline-none">
              {navbarData?.map((e, i: number) => {
                return (
                  <Menu.Item key={i}>
                    <a
                      href={e?.href}
                      className="btnSmaller w-full cursor-pointer"
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
      </div>
    </nav>
  );
}
