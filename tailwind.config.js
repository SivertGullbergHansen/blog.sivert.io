const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
  ],
};
