"use client";
import { DotLoader } from "react-spinners";

export default function Loading(): React.JSX.Element {
  return (
    <section className="min-h-screen flex gap-4 justify-center items-center">
      <DotLoader color="#57E6D9" size={80} />
      <DotLoader color="#2046CE" size={80} />
      <DotLoader color="#338DCE" size={80} />
    </section>
  );
}
