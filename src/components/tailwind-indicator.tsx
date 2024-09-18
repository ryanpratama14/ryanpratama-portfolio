"use client";

import { useEffect, useState } from "react";

export default function TailwindIndicator() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const { width, height } = dimensions;

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1 text-sm font-bold text-black shadow">
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="hidden 2xl:block 3xl:hidden">2XL</span>
      <span className="hidden 3xl:block">3XL</span>
      <span className="font-medium">
        {width.toLocaleString()} x {height.toLocaleString()}
      </span>
    </div>
  );
}
