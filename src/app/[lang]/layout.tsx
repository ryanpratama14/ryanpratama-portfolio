import TransitionEffect from "@/components/transition-effect";
import type { Children } from "@/types";
import { Fragment } from "react";

export default async function RootLayout({ children }: Children) {
  return (
    <Fragment>
      {children}
      <TransitionEffect />
    </Fragment>
  );
}
