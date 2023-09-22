import { useState, useEffect } from "react";

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const jsonValue = localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
    }
    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
