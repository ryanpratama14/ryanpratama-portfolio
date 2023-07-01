"use client";
// import { Provider } from "react-redux";
// import { store } from "./store";
import { Fragment } from "react";
import TransitionEffect from "@/components/TransitionEffect";

type Props = {
  children: React.ReactNode;
};

export default function TransitionProvider({
  children,
}: Props): React.JSX.Element {
  return (
    // <Provider store={store}>
    <Fragment>
      <TransitionEffect />
      {children}
    </Fragment>
    // </Provider>
  );
}
