import React, { useEffect } from "react";
import Head from "next/head";
import { FaMoon, FaSun } from "react-icons/fa";
import colors from "../tailwind.config";
import { useTheme } from "utils/useTheme";

export const ThemeContext = React.createContext(undefined)

export default function ThemeWrapper({ children }) {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={theme}>
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
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost fixed bottom-8 right-8"
        >
          {theme === "sivert_dark" ? <FaMoon /> : <FaSun />}
        </button>
        {children}
    </ThemeContext.Provider>
  );
}
