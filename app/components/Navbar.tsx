"use client";
import Link from "next/link";
import avatar from "../../public/assets/avatar.jpeg";
import Image from "next/image";
import Theme from "./Theme";
import { useScrollPosition } from "@/hooks/UseScrollPosition";

export default function Navbar(): JSX.Element {
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
      className={`animate flex justify-between sticky top-0 px-normal xl:px-longer3 py-4 ${
        scrollPosition > 1 && "backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="flex gap-2 items-center">
        <Image src={avatar} className="rounded-full w-8" alt="Ryan Pratama" />
        <h5>Hire Me</h5>
      </div>
      <div className="flex gap-3">
        {navbarData?.map((e, i: number) => {
          return (
            <Link key={i} href={e?.href} className="btnSmaller">
              {e?.label}
            </Link>
          );
        })}
        <Theme />
      </div>
    </nav>
  );
}
