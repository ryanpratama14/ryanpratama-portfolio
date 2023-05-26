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
          className="themedText2nd"
          width={200}
        />
        <h2>Ooops, page not found</h2>
        <Link className="btn" href="/">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
