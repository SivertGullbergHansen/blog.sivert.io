import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-theme='dracula' className='bg-base-300'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}