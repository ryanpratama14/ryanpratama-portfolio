import TransitionEffect from "@/components/transition-effect";
import type { Children } from "@/types";
import { Fragment } from "react";

export default function RootLayout({ children }: Children) {
  return (
    <Fragment>
      <TransitionEffect />
      {children}
    </Fragment>
  );
}
