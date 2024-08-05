"use client";

import { COLORS } from "@/styles";
import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <section className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <PulseLoader color={COLORS.turquoise} size={20} />
      <PulseLoader color={COLORS.bluedarker} size={20} />
      <PulseLoader color={COLORS.blue} size={20} />
    </section>
  );
}
