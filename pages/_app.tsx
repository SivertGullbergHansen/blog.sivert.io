import Head from "next/head";

import "../styles/globals.scss";
import "../styles/pretty-code.css";

import { Header } from "../components/Header";
import { AnimatePresence } from "framer-motion";
import { DM_Sans, Noto_Color_Emoji, JetBrains_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ThemeWrapper from "components/ThemeWrapper";

const mainFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const emoji = Noto_Color_Emoji({
  subsets: ["emoji"],
  weight: "400",
  style: "normal",
  display: "swap",
  adjustFontFallback: false,
});

const mono = JetBrains_Mono({ subsets: ["latin"] });

TimeAgo.addLocale(en);

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  const [headerPadding, setheaderPadding] = useState("p-2");
  const [headerWidth, setHeaderWidth] = useState("1200px");

  useEffect(() => {
    if (pageProps.post === undefined) {
      setheaderPadding("p-2");
      setHeaderWidth("w-[1200px]");
    } else {
      setheaderPadding("p-0");
      setHeaderWidth("w-[55rem]");
    }
  }, [pageProps.post]);

  return (
    <ThemeWrapper>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`div[data-rehype-pretty-code-fragment] * {
            font-family: ${mono.style.fontFamily};
          }`}
        </style>
      </Head>

      <Header headerPadding={headerPadding} width={headerWidth} />

      <style jsx global>{`
        html {
          font-family: ${mainFont.style.fontFamily};
        }
        span {
          font-family: ${emoji.style.fontFamily}, ${mainFont.style.fontFamily};
        }
      `}</style>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component
          {...pageProps}
          key={`${pageProps.post?.url}_${router.route}_${router.query.slug}`}
        />
      </AnimatePresence>
    </ThemeWrapper>
  );
}
