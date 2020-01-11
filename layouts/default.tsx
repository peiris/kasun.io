/* Import libraries */
import React, { Component } from 'react';
import Head from 'next/head';

/* Import components */
import Header from '../components/header/header';

/* Interfaces */
interface Props {
  title?: string;
}

/* Class */
export default class Layout extends Component<Props> {
  /* 
   * Update the page title
   */
  updateTitle(title: any) {
    let defaultTitle = 'Kasun Peiris';
    if (title && title != '' && title != undefined) {
      return defaultTitle + ' — ' + title;
    }
    return defaultTitle;
  }

  render() {
    return (
      <div>
        <Head>
          <title>{this.updateTitle(this.props.title)}</title>
        </Head>
        <Header />
        {this.props.children}
      </div>
    )
  }
}