"use client";
import { Icon } from "@iconify/react";

export default function NotFound(): JSX.Element {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-8">
        <Icon
          icon="ooui:article-not-found-ltr"
          className="themedText2nd"
          width={200}
        />
        <h2>Ooops, page not found</h2>
        <button className="btn" onClick={() => (window.location.href = "/")}>
          Back to Homepage
        </button>
      </div>
    </section>
  );
}
