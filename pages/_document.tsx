import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-screen w-screen overflow-hidden bg-base-200">
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="w-full h-full overflow-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
