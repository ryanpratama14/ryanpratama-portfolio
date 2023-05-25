import React, { useEffect } from "react";
import useLocalStorage from "@/hooks/UseLocalStorage";
import { Icon } from "@iconify/react";

export default function Theme(): React.JSX.Element {
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
      className="flex justify-center items-center cursor-pointer themedText"
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
