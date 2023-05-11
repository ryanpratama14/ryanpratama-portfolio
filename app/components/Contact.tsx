"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

export default function Contact(): JSX.Element {
  return (
    <section
      id="contact"
      className="px-normal min-h-screen flex items-center justify-center text-center"
    >
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1>Contact Me</h1>
        <p className="w-full md:w-[60%] xl:w-[40%]">
          I am actively seeking new opportunities at the moment and would be
          open to hearing about any potential opportunities that may be
          available. Please feel free to reach out to me if you have any leads
          or if you would like to discuss potential collaborations.
        </p>
        <Link
          href="mailto:ru.ryanpratama@gmail.com"
          target="_blank"
          className="btn"
        >
          <span>
            <Icon icon="ic:outline-email" width={20} />
          </span>
          Email Me
        </Link>
      </div>
    </section>
  );
}
