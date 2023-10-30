const colors = require('tailwindcss/colors');

const linkHeadingStyles = {
  color: colors.gray[100],
  borderBottomColor: 'transparent',
  '&:hover': {
    color: `${colors.gray[900]}`,
  },
};

module.exports = {
	theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              background: 'rgba(205, 200, 255, 0.05)',
            },
            'h2 a': linkHeadingStyles,
            'h3 a': linkHeadingStyles,
            'h4 a': linkHeadingStyles,
            'h5 a': linkHeadingStyles,
            'h6 a': linkHeadingStyles,
            blockquote: {
              fontSize: '90%',
              color: colors.zinc[500],
              borderLeftColor: colors.zinc[700],
              'p::before': { display: 'none' },
              'p::after': { display: 'none' },
            },
            a: {
              textDecoration: 'none',
              borderBottom: `2px solid hsl(var(--p))`,
              color: `hsl(var(--p))`,
              transition:
                'color 0.2s ease, border-color 0.2s ease, background 0.2s ease',
              '&:hover': {
                color: `hsl(var(--pc)) !important`,
                borderBottomColor: ` hsl(var(--p)) !important`,
                background: `hsl(var(--p))`,
              },
            },
            code: {
              color: '#86e1fc',
              '&::before': { content: `unset !important` },
              '&::after': { content: `unset !important` },
              fontWeight: 'normal',
            },
            '[data-rehype-pretty-code-fragment]:nth-of-type(2) pre': {
              '[data-line]::before': {
                content: 'counter(line)',
                counterIncrement: 'line',
                display: 'inline-block',
                width: '1rem',
                marginRight: '1rem',
                textAlign: 'right',
                color: colors.slate[600],
              },
              '[data-highlighted-line]::before': {
                color: colors.slate[400],
              },
            },
          },
        },
      },
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./posts/**/*.mdx",
  ],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
  ],
  daisyui: {
    darkTheme: "dark",
    base: false,
    themes: [
      {
        sivert_light: {
          primary: "#570df8",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2b3440",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        sivert_dark: {
          primary: "#d0bcff",
          secondary: "#ccc2dc",
          accent: "#efb8c8",
          neutral: "#2b3440",
          "base-100": "#2b2930",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f2b8b5",
        },
      },
    ],
  },
};
