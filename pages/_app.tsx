/* Import libraries */
import * as React from "react";
import NextApp, { AppContext } from "next/app";
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import NProgress from 'nprogress';

/* Import style */
import '../styles/styles.scss';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  // NProgress.start()
  
})
Router.events.on('routeChangeComplete', url => {
  // if (url === '/') {
  //   // console.log('Home page loaded...');
  //   let headingEl = document.getElementsByClassName('viewport-heading');
  //   headingEl[0].classList.add('visible');
  // }
})
// Router.events.on('routeChangeError', () => NProgress.done())


/* Interfaces */
interface Props {
  pageProps: any;
}

/* Class */
class App extends NextApp<Props> {
  test = () => {
    console.log('Testing one two three...');
  }

  render() {
    const { pageProps, Component } = this.props;
    this.test();
    return (
      <>
        <Head>
          {/* Import CSS for nprogress */}
          {/* <link rel="stylesheet" type="text/css" href="nprogress.css" /> */}
        </Head>

        <main>
          <div id="cursor" className="cursor cursor--inner"></div>
          <div id="cursor-outer" className="cursor cursor--outer"></div>
        </main>

        <Component {...pageProps} />
      </>
    );
  }
}

export default App;