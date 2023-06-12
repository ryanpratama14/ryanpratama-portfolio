"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/global/store";
import TransitionEffect from "../components/TransitionEffect";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props): React.JSX.Element {
  return (
    <Provider store={store}>
      <TransitionEffect />
      {children}
    </Provider>
  );
}
