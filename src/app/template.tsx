"use client";
import React from "react";
import TransitionEffect from "./components/TransitionEffect";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <React.Fragment>
      <TransitionEffect />
      {children}
    </React.Fragment>
  );
}
