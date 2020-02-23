/* Import libraries */
import * as React from "react";
import NextApp, { AppContext } from "next/app";

/* Import style */
import '../styles/styles.scss';

/* Interfaces */
interface Props {
  pageProps: any;
}

/* Class */
class App extends NextApp<Props> {
  render() {
    const { pageProps, Component } = this.props;
    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
}

export default App;