import { Fragment } from "react";
import "@/styles/globals.css";
import Providers from "@/app/providers";

export default function NotFoundPage() {
  return (
    <Providers notFound>
      <Fragment />
    </Providers>
  );
}
