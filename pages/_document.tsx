import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-theme='business' className='h-screen w-screen overflow-hidden bg-gradient-to-tl from-base-300 to-base-100'>
        <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='w-full h-full overflow-auto'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}