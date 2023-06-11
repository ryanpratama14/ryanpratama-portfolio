"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Contact from "./components/sections/Contact";

export default function NotFound(): React.JSX.Element {
  return (
    <main>
      <div className="min-h-screen flex flex-col justify-center items-center gap-8">
        <div className="flex gap-2">
          <Icon
            icon="ooui:article-not-found-ltr"
            className="text-turquoise"
            width={100}
          />
          <Icon
            icon="ooui:article-not-found-ltr"
            className="text-bluedarker"
            width={100}
          />
          <Icon
            icon="ooui:article-not-found-ltr"
            className="text-blue"
            width={100}
          />
        </div>
        <h3>Ooops, page not found</h3>
        <Link className="btn-nav px-6 py-2" href="/">
          Back to Homepage
        </Link>
      </div>
      <Contact />
    </main>
  );
}
