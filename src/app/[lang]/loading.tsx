"use client";

import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <PulseLoader color="#57E6D9" size={20} />
      <PulseLoader color="#2046CE" size={20} />
      <PulseLoader color="#338DCE" size={20} />
    </section>
  );
}
