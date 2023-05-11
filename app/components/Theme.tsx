"use client";
import useLocalStorage from "@/hooks/UseLocalStorage";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

export default function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="flex w-12 items-center justify-center themedBg cursor-pointer themedText"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon
        width={25}
        icon={`${
          theme === "dark"
            ? "material-symbols:light-mode"
            : "material-symbols:dark-mode-outline-rounded"
        }`}
      />
    </div>
  );
}
