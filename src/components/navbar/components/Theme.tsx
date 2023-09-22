import { useEffect } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import Iconify from "@/components/Iconify";

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
    <section
      className="flex justify-center items-center cursor-pointer themedText"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Iconify
        width={25}
        icon={`${
          theme === "dark"
            ? "material-symbols:light-mode"
            : "material-symbols:dark-mode-outline-rounded"
        }`}
      />
    </section>
  );
}
