"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NotFound(): React.JSX.Element {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <Icon
          icon="ooui:article-not-found-ltr"
          className="text-turquoise"
          width={200}
        />
        <h2>Ooops, page not found</h2>
        <Link
          className="rounded-3xl px-6 py-2 border-[1px] border-white hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[-2px_2px_0px_0px_#ffffff]"
          href="/"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
