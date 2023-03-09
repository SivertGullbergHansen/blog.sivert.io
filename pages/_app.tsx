import Head from 'next/head'

import '../styles/globals.scss'
import '../styles/codeBlock.scss'

import { Header } from '../components/Header'
import {AnimatePresence} from 'framer-motion'
import { Roboto } from "next/font/google";
import { useEffect, useState } from 'react';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {
  const [headerPadding, setheaderPadding] = useState(4)

  useEffect(() => {
    if (pageProps.post === undefined) { setheaderPadding(4)}
    else { setheaderPadding(0);  }
  
  }, [pageProps.post])

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header headerPadding={headerPadding} />

      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            document.body.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={`${pageProps.post?.url}_${router.route}`} />
      </AnimatePresence>
    </>
  )
}
