import React from "react";
import { Icon } from "@iconify/react";

export default function Resume(): React.JSX.Element {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      className="flex gap-3 h-full items-center group"
    >
      <Icon
        icon="pepicons-pencil:cv-circle"
        width={30}
        className="rotate-[16deg] group-hover:rotate-0 group-hover:scale-110 transition-transform duration-300"
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
    </a>
  );
}
