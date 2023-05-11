"use client";
import TransitionEffect from "./components/TransitionEffect";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TransitionEffect />
      {children}
    </>
  );
}
