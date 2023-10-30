// theme.js
import { useEffect, useState } from "react";
import colors from "../tailwind.config";

export const useTheme = () => {
  const [theme, setTheme] = useState<"sivert_dark" | "sivert_light">(null);

  useEffect(() => {
      const localTheme = localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme as typeof theme);
    else localStorage.setItem("theme", "sivert_dark");
  }, []);

  useEffect(() => {
      if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "sivert_dark" ? "sivert_light" : "sivert_dark"
    );
  };

  return { theme, toggleTheme };
};

export const getThemeColor = (theme) => {
  return theme === "sivert_dark"
    ? colors.daisyui.themes[0].sivert_dark["base-100"]
    : colors.daisyui.themes[0].sivert_light["base-100"];
};
