import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { FaMoon, FaSun } from "react-icons/fa";
import colors from "../tailwind.config";

export default function ThemeWrapper({ children }) {
  const [theme, settheme] = useState<"sivert_dark" | "sivert_light">(
    "sivert_dark"
  );
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (theme) settheme(localTheme as typeof theme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={
            theme === "sivert_dark"
              ? colors.daisyui.themes[0].sivert_dark["base-100"]
              : colors.daisyui.themes[0].sivert_light["base-100"]
          }
        />
      </Head>
      <div data-theme={theme} 
      className="overflow-y-scroll h-screen scroll-smooth bg-base-200 text-base-content transition-none">
        <button
          onClick={() =>
            settheme(theme === "sivert_dark" ? "sivert_light" : "sivert_dark")
          }
          className="btn btn-circle btn-ghost fixed bottom-8 right-8"
        >
          {theme === "sivert_dark" ? <FaMoon /> : <FaSun />}
        </button>
        {children}
      </div>
    </>
  );
}
