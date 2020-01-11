/* Import libraries */
import React, { Component } from 'react';

/* Import components */
import Header from '../components/header';

/* Interfaces */
interface Props { }

/* Class */
export default class Layout extends Component<Props> {
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
      </section>
    )
  }
}