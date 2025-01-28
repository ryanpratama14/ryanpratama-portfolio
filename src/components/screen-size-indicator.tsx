"use client";

import { getLangFromPath, useLang, validateMatchedLang } from "@/internationalization/functions";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScreenSizeIndicator() {
  const lang = validateMatchedLang(getLangFromPath(usePathname()));
  const { locale } = useLang(lang);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    const ctr = new AbortController();

    updateDimensions();
    window.addEventListener("resize", updateDimensions, { signal: ctr.signal });
    return () => {
      ctr.abort();
    };
  }, []);

  return (
    <div className="fixed bottom-0 right-0 z-50 flex items-center gap-1.5 bg-white px-2 py-0.5 text-sm font-bold text-black shadow-sm">
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:block md:hidden">SM</span>
      <span className="hidden md:block lg:hidden">MD</span>
      <span className="hidden lg:block xl:hidden">LG</span>
      <span className="hidden xl:block 2xl:hidden">XL</span>
      <span className="hidden 2xl:block 3xl:hidden">2XL</span>
      <span className="hidden 3xl:block">3XL</span>
      <span className="font-medium">
        {dimensions.width.toLocaleString(locale)} x {dimensions.height.toLocaleString(locale)}
      </span>
    </div>
  );
}
