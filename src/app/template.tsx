"use client";
import React from "react";
import TransitionEffect from "./components/TransitionEffect";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props): React.JSX.Element {
  return (
    <React.Fragment>
      <TransitionEffect />
      {children}
    </React.Fragment>
  );
}
