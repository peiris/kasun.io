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
          <meta name="theme-color" content="#087da1" key="themeColor" />
          <meta name="msapplication-TileColor" content="#0D0D11" />
          <meta name="theme-color" content="#0D0D11" />

          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0D0D11" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;