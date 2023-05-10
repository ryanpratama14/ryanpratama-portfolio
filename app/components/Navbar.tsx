import Link from "next/link";
import avatar from "../../public/assets/avatar.jpeg";
import Image from "next/image";

export default function Navbar(): JSX.Element {
  const navbarData = [
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

  return (
    <nav className="shadow-md flex justify-between sticky top-0 px-normal xl:px-longer3 py-3 bg-primary">
      <div className="flex gap-2 items-center">
        <Image
          src={avatar}
          className="rounded-full w-8 border-[1px] border-secondary"
          alt="Ryan Pratama"
        />
        <h5 className="text-secondary">Hi!:</h5>
      </div>
      <div className="flex gap-3">
        {navbarData?.map((e: any, i: number) => {
          return (
            <Link key={i} href={e?.href} className="btn-secondary btn">
              {e?.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
