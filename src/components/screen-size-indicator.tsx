"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getLang, getLangFromPath, validateMatchedLang } from "@/internationalization/functions";

export default function ScreenSizeIndicator() {
  const lang = validateMatchedLang(getLangFromPath(usePathname()));
  const { locale } = getLang(lang);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    const ctr = new AbortController();

    updateDimensions();
    window.addEventListener("resize", updateDimensions, ctr);
    return () => ctr.abort();
  }, []);

  return (
    <ul className="fixed bottom-0 right-0 z-50 flex items-center gap-1.5 bg-white px-2 py-0.5 font-bold text-black shadow-sm">
      <li className="sm:hidden">XS</li>
      <li className="hidden sm:block md:hidden">SM</li>
      <li className="hidden md:block lg:hidden">MD</li>
      <li className="hidden lg:block xl:hidden">LG</li>
      <li className="hidden xl:block 2xl:hidden">XL</li>
      <li className="hidden 2xl:block">2XL</li>
      <li className="font-medium">
        {dimensions.width.toLocaleString(locale)} x {dimensions.height.toLocaleString(locale)}
      </li>
    </ul>
  );
}
