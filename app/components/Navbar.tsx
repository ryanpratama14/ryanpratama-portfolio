"use client";
import { Link as LinkSmooth } from "react-scroll";
import Link from "next/link";
import avatar from "../../public/assets/avatar.jpeg";
import Image from "next/image";
import Theme from "./Theme";
import { useScrollPosition } from "@/hooks/UseScrollPosition";
import { Icon } from "@iconify/react";

export default function Navbar(): JSX.Element {
  const navbarData: NavbarItems[] = [
    {
      href: "about",
      icon: "mdi:about-circle-outline",
      label: "About",
    },
    {
      href: "projects",
      icon: "ant-design:project-outlined",
      label: "Projects",
    },
    {
      href: "contact",
      icon: "material-symbols:contact-emergency-outline",
      label: "Contact",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={`animate flex justify-between sticky top-0 px-normal xl:px-longer3 py-4 ${
        scrollPosition > 1 && "backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="flex gap-2 items-center">
        <Image src={avatar} className="rounded-full w-8" alt="Ryan Pratama" />
        <Link
          className="flex gap-2 h4 md:h5 items-center themedText"
          download={true}
          target="_blank"
          href="/Resume.pdf"
        >
          Resume
          <span>
            <Icon icon="tabler:hand-click" className="-rotate-[36deg]" />
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        {navbarData?.map((e, i: number) => {
          return (
            <LinkSmooth
              smooth={true}
              offset={-80}
              key={i}
              to={e?.href}
              className="btnSmaller cursor-pointer"
            >
              <span>
                <Icon icon={e?.icon} width={20} />
              </span>
              {e?.label}
            </LinkSmooth>
          );
        })}
        <Theme />
      </div>
    </nav>
  );
}
