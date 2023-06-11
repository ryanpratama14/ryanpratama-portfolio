"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Contact from "./components/sections/Contact";

export default function NotFound(): React.JSX.Element {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="min-h-screen flex flex-col justify-center items-center gap-8">
        <Icon
          icon="ooui:article-not-found-ltr"
          className="text-turquoise"
          width={200}
        />
        <h2>Ooops, page not found</h2>
        <Link className="btn-nav px-6 py-2" href="/">
          Back to Homepage
        </Link>
      </div>
      <Contact />
    </section>
  );
}
