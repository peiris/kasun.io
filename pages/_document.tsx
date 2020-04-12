/* Import libraries */
import * as React from "react";
import NextDocument, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

/* Interfaces */
interface Props {
  locale: "en-US";
}

/* Class */
class CustomDocument extends NextDocument<Props> {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(context);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <meta name="theme-color" content="#0D0D11" key="themeColor" />
          <meta name="msapplication-TileColor" content="#0D0D11" />
          <meta name="theme-color" content="#0D0D11" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0D0D11" />

          <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@700;800&family=DM+Serif+Display&display=swap" rel="stylesheet" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js" ></script>
          {/* <link rel="stylesheet" href="/styles/demo.css"/> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/scripts/cursor.js"></script>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;