import Link from "next/link";
import Contact from "@/components/sections/Contact";
import Iconify from "@/components/Iconify";
import { Fragment } from "react";

export default function NotFound(): React.JSX.Element {
  return (
    <Fragment>
      <article className="min-h-screen flex flex-col justify-center items-center gap-8">
        <section className="flex gap-2">
          <Iconify
            icon="ooui:article-not-found-ltr"
            className="text-turquoise"
            width={100}
          />
          <Iconify
            icon="ooui:article-not-found-ltr"
            rotate={2}
            className="text-bluedarker"
            width={100}
          />
          <Iconify
            icon="ooui:article-not-found-ltr"
            className="text-blue"
            width={100}
          />
        </section>
        <h3>Ooops, page not found</h3>
        <Link className="btn-nav px-6 py-2" href="/">
          Back to Homepage
        </Link>
      </article>
      <Contact />
    </Fragment>
  );
}
