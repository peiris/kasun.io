import * as React from "react";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

interface Props {
  locale: "en-US";
}

class CustomDocument extends Document<Props> {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <link rel="shortcut icon" href="/static/shortcut-icon.png" key="shortcutIcon" />
          <meta name="theme-color" content="#087da1" key="themeColor" />
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