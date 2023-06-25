"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import TransitionEffect from "@/components/TransitionEffect";

type Props = {
  children: React.ReactNode;
};

export default function ReduxProvider({ children }: Props): React.JSX.Element {
  return (
    <Provider store={store}>
      <TransitionEffect />
      {children}
    </Provider>
  );
}
