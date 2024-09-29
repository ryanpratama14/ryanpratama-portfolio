"use client";

import { useEffect, useState } from "react";

export default function ScreenSizeIndicator() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions, { passive: true });
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center gap-1.5 bg-white px-1.5 py-0.5 text-sm font-bold text-black shadow">
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="hidden 2xl:block 3xl:hidden">2XL</span>
      <span className="hidden 3xl:block">3XL</span>
      <span className="font-medium">
        {dimensions.width.toLocaleString()} x {dimensions.height.toLocaleString()}
      </span>
    </div>
  );
}
