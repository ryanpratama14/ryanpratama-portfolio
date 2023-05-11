"use client";
import { Link as LinkSmooth } from "react-scroll";
import Link from "next/link";
import avatar from "../../public/assets/avatar.jpeg";
import Image from "next/image";
import Theme from "./Theme";
import { useScrollPosition } from "@/hooks/UseScrollPosition";
import { Icon } from "@iconify/react";
import { LoadToTop } from "@/utils/utils";
import { useRouter } from "next/navigation";

export default function Navbar(): JSX.Element {
  const router = useRouter();
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
      className={`animate flex justify-between fixed w-full top-0 px-normal py-3 z-[5] md:py-4 ${
        scrollPosition > 1 && "shadow-md backdrop-blur-[3px]"
      }`}
    >
      <div className="flex gap-4 items-center">
        <Image src={avatar} className="rounded-full w-8" alt="Ryan Pratama" />
        <Link
          className="btnSpecial"
          download={true}
          target="_blank"
          href="/Resume.pdf"
        >
          <span>
            <Icon icon="material-symbols:download" width={20} />
          </span>
          Resume
        </Link>
      </div>
      <div className="flex gap-4">
        {navbarData?.map((e, i: number) => {
          return (
            <LinkSmooth
              smooth={true}
              offset={-80}
              key={i}
              to={e?.href}
              className="btnSmaller cursor-pointer hidden md:flex"
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
