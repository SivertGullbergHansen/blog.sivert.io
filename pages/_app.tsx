import Head from 'next/head'

import '../styles/globals.scss'

import { Header } from '../components/Header'
import { useRouter } from 'next/router'
import {AnimatePresence} from 'framer-motion'
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }) {

  return (
    <>
      <Head>
        <title>Sivert's blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />
      </Head>

      <Header />

      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
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
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}
